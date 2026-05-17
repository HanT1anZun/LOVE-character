import type {
  Question,
  ResultType,
  ScoringRules,
  Answers,
  DimensionId,
  DimensionScores,
  MatchScores,
  AssessmentResult,
  ConsistencyLevel,
  AnchorLevel,
} from "./types";
import {
  getQuestions,
  getResultTypes,
  getScoringRules,
  getLegalDisclaimer,
  getMixedTypeRule,
  getConsistencyMessages,
  getDimensionMeta,
} from "./data-loader";

const ALL_DIMENSIONS: DimensionId[] = [
  "passion_eros",
  "game_ludus",
  "companion_storge",
  "rational_pragma",
  "attachment_anxiety",
  "attachment_avoidance",
  "sacrifice_agape",
  "communication_open",
];

/** Step 1: 反向计分 */
function applyReverseScoring(
  answers: Answers,
  questions: Question[]
): Answers {
  const processed: Answers = {};
  for (const q of questions) {
    const raw = answers[q.id];
    if (raw === undefined) continue;
    processed[q.id] = q.reverse ? 6 - raw : raw;
  }
  return processed;
}

/** Step 2 & 3: 按维度聚合并归一化到 0–100 */
function computeDimensionScores(
  processed: Answers,
  questions: Question[]
): DimensionScores {
  const groups: Record<string, number[]> = {};
  for (const q of questions) {
    if (processed[q.id] === undefined) continue;
    if (!groups[q.dimension]) groups[q.dimension] = [];
    groups[q.dimension].push(processed[q.id]);
  }

  const scores: Record<string, number> = {};
  for (const [dim, vals] of Object.entries(groups)) {
    const sum = vals.reduce((a, b) => a + b, 0);
    // 每维度4题，原始分范围4–20，归一化到0–100
    const normalized = Math.round(((sum - 4) / 16) * 100);
    scores[dim] = Math.max(0, Math.min(100, normalized));
  }

  // 补全可能缺失的维度
  for (const dim of ALL_DIMENSIONS) {
    if (!(dim in scores)) scores[dim] = 50;
  }

  return scores as DimensionScores;
}

/** Step 4 & 5: 类型匹配（加权欧几里得距离） */
function matchTypes(
  dimScores: DimensionScores,
  types: ResultType[],
  rules: ScoringRules
): { primary: ResultType; secondary: ResultType; matchScores: MatchScores } {
  const anchorVals = rules.anchor_values;

  const matchScores: MatchScores = {};

  for (const type of types) {
    const anchors =
      rules.dimension_anchors[type.id] as Partial<
        Record<DimensionId, AnchorLevel>
      >;
    if (!anchors) {
      matchScores[type.id] = 50;
      continue;
    }

    let weightedSum = 0;
    let totalWeight = 0;

    for (const dim of ALL_DIMENSIONS) {
      const userScore = dimScores[dim];
      const anchorLevel = anchors[dim] ?? "neutral";
      const anchorVal = anchorVals[anchorLevel];

      const weight = anchorLevel === "high" || anchorLevel === "low" ? 2.0 : 1.0;
      weightedSum += weight * Math.pow(userScore - anchorVal, 2);
      totalWeight += weight;
    }

    const distance = Math.sqrt(weightedSum / totalWeight);
    matchScores[type.id] = Math.round(Math.max(0, 100 - distance));
  }

  const sorted = Object.entries(matchScores).sort((a, b) => b[1] - a[1]);
  const primaryId = sorted[0][0];
  const secondaryId = sorted[1][0];

  const primary = types.find((t) => t.id === primaryId)!;
  const secondary = types.find((t) => t.id === secondaryId)!;

  return { primary, secondary, matchScores };
}

/** Step 6: 一致性评分 */
function computeConsistency(
  answers: Answers,
  processed: Answers,
  questions: Question[],
  rules: ScoringRules
): { score: number; level: ConsistencyLevel; message: string } {
  const components = rules.consistency_scoring.components;
  let totalScore = 0;

  // 1. 极端一致回答检测 (30%)
  const extremeComp = components.find((c) => c.id === "extreme_uniform")!;
  const allVals = Object.values(answers);
  const mean = allVals.reduce((a, b) => a + b, 0) / allVals.length;
  const variance =
    allVals.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / allVals.length;

  if (variance < 0.1) totalScore += 0;
  else if (variance < 0.5) totalScore += 15;
  else totalScore += extremeComp.weight;

  // 2. 反向题冲突检测 (40%)
  const reverseComp = components.find((c) => c.id === "reverse_item_conflict")!;
  const dimGroups: Record<string, { forward: number[]; reverse: number[] }> = {};
  for (const q of questions) {
    if (!(q.dimension in dimGroups))
      dimGroups[q.dimension] = { forward: [], reverse: [] };
    if (q.reverse) {
      dimGroups[q.dimension].reverse.push(answers[q.id]);
    } else {
      dimGroups[q.dimension].forward.push(answers[q.id]);
    }
  }

  let conflictDims = 0;
  for (const [, group] of Object.entries(dimGroups)) {
    if (group.reverse.length === 0) continue;
    const fwdAvg =
      group.forward.reduce((a, b) => a + b, 0) / group.forward.length;
    const revAvg =
      group.reverse.reduce((a, b) => a + b, 0) / group.reverse.length;
    // 反向题的原始答案应该与正向题相反：若正向题高(4-5)而反向题也高(4-5)=矛盾
    if (Math.abs(fwdAvg - revAvg) < 1.0) conflictDims++;
  }

  if (conflictDims === 0) totalScore += reverseComp.weight;
  else if (conflictDims === 1) totalScore += 30;
  else if (conflictDims === 2) totalScore += 15;
  else totalScore += 0;

  // 3. 维度内一致性检测 (30%)
  const intraComp = components.find((c) => c.id === "intra_dimension_variance")!;
  let highVarianceDims = 0;
  for (const [dim, vals] of Object.entries(dimGroups)) {
    const allDimVals = [
      ...vals.forward,
      ...vals.reverse.map((r) => 6 - r), // 反向处理后再算方差
    ];
    const dimMean =
      allDimVals.reduce((a, b) => a + b, 0) / allDimVals.length;
    const dimVar =
      allDimVals.reduce((s, v) => s + Math.pow(v - dimMean, 2), 0) /
      allDimVals.length;
    const dimStd = Math.sqrt(dimVar);
    if (dimStd > 1.5) highVarianceDims++;
  }

  if (highVarianceDims === 0) totalScore += intraComp.weight;
  else if (highVarianceDims <= 2) totalScore += 20;
  else if (highVarianceDims <= 4) totalScore += 10;
  else totalScore += 0;

  const score = Math.round(Math.min(100, totalScore));

  let level: ConsistencyLevel = "high";
  if (score < 50) level = "low";
  else if (score < 80) level = "medium";

  const messages = getConsistencyMessages();
  const message = messages[level].message;

  return { score, level, message };
}

/** 主入口：计算完整评估结果 */
export function calculateResults(answers: Answers): AssessmentResult {
  const questions = getQuestions();
  const types = getResultTypes();
  const rules = getScoringRules();

  const processed = applyReverseScoring(answers, questions);
  const dimScores = computeDimensionScores(processed, questions);
  const { primary, secondary, matchScores } = matchTypes(
    dimScores,
    types,
    rules
  );
  const consistency = computeConsistency(
    answers,
    processed,
    questions,
    rules
  );

  const mixRule = getMixedTypeRule();
  const gap =
    (matchScores[primary.id] ?? 0) - (matchScores[secondary.id] ?? 0);
  const isMixed = gap <= mixRule.threshold;

  let mixedTypeName: string | null = null;
  if (isMixed) {
    mixedTypeName = mixRule.format
      .replace("{主类型名}", primary.name)
      .replace("{次类型名}", secondary.name);
  }

  return {
    primary_type: primary,
    secondary_type: secondary,
    is_mixed: isMixed,
    mixed_type_name: mixedTypeName,
    dimension_scores: dimScores,
    match_scores: matchScores,
    consistency_score: consistency.score,
    consistency_level: consistency.level,
    consistency_message: consistency.message,
    share_text: isMixed
      ? `我的恋爱倾向是「${mixedTypeName}」——兼有两种风格的我，在爱里更丰富也更多面。`
      : primary.share_text,
    legal_disclaimer: getLegalDisclaimer(),
  };
}

/** 获取维度名称映射 */
export function getDimensionNames(): Record<DimensionId, string> {
  const meta = getDimensionMeta();
  const map: Record<string, string> = {};
  for (const d of meta) {
    map[d.id] = d.name;
  }
  return map as Record<DimensionId, string>;
}
