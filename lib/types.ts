/** 题目定义 */
export interface Question {
  id: string;
  dimension: DimensionId;
  subscale: string;
  reverse: boolean;
  question: string;
  source_construct: string;
  note: string;
}

/** 结果类型定义 */
export interface ResultType {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  dimension_profile: Partial<Record<DimensionId, AnchorLevel>>;
  strengths: string[];
  blindspots: string[];
  best_relationship_style: string;
  ideal_partner_traits: string[];
  behavioral_signatures: string[];
  share_text: string;
  color_theme: string;
}

/** 维度ID */
export type DimensionId =
  | "passion_eros"
  | "game_ludus"
  | "companion_storge"
  | "rational_pragma"
  | "attachment_anxiety"
  | "attachment_avoidance"
  | "sacrifice_agape"
  | "communication_open";

/** 锚点等级 */
export type AnchorLevel = "high" | "medium" | "low" | "neutral";

/** 维度信息 */
export interface DimensionMeta {
  id: DimensionId;
  name: string;
  description: string;
  source_constructs: string[];
  question_count: number;
}

/** 问卷元数据 */
export interface QuestionsMeta {
  title: string;
  version: string;
  total_questions: number;
  scale_type: string;
  scale_labels: Record<string, string>;
  dimensions: DimensionMeta[];
}

/** 用户答案：question_id → 1-5 */
export type Answers = Record<string, number>;

/** 维度得分 */
export type DimensionScores = Record<DimensionId, number>;

/** 类型匹配度 */
export type MatchScores = Record<string, number>;

/** 一致性等级 */
export type ConsistencyLevel = "high" | "medium" | "low";

/** 最终结果 */
export interface AssessmentResult {
  primary_type: ResultType;
  secondary_type: ResultType;
  is_mixed: boolean;
  mixed_type_name: string | null;
  dimension_scores: DimensionScores;
  match_scores: MatchScores;
  consistency_score: number;
  consistency_level: ConsistencyLevel;
  consistency_message: string;
  share_text: string;
  legal_disclaimer: string;
}

/** 评分规则 */
export interface ScoringRules {
  scoring: {
    reverse_scoring: { formula: string };
    normalization: { formula: string };
  };
  type_matching: {
    steps: Array<{ name: string; description: string }>;
  };
  dimension_anchors: Record<string, Partial<Record<DimensionId, AnchorLevel>>>;
  anchor_values: Record<AnchorLevel, number>;
  consistency_scoring: {
    components: Array<{
      id: string;
      name: string;
      weight: number;
      description: string;
    }>;
    interpretation: Record<string, string>;
  };
  mixed_type_detection: {
    primary_secondary_gap_threshold: number;
    mixed_type_description_template: string;
  };
}

/** 方法论数据 */
export interface Methodology {
  project_overview: Record<string, string>;
  theoretical_framework: {
    title?: string;
    description?: string;
    frameworks: Array<{
      name: string;
      reference: string;
      contribution: string;
      dimensions_used: string[];
    }>;
  };
  questionnaire_design: Record<string, unknown>;
  scoring_method: {
    steps: Array<{ step: number; name: string; description: string }>;
  };
  result_interpretation_guide: {
    points: Array<{ heading: string; body: string }>;
  };
  disclaimer: { title: string; content: string[] };
  faq: Array<{ q: string; a: string }>;
  references: string[];
}
