import type {
  Question,
  QuestionsMeta,
  ResultType,
  ScoringRules,
  Methodology,
} from "./types";
import questionsData from "@/data/questions.json";
import resultTypesData from "@/data/result-types.json";
import scoringRulesData from "@/data/scoring-rules.json";
import methodologyData from "@/data/methodology.json";

export function getQuestions(): Question[] {
  return questionsData.questions as Question[];
}

export function getQuestionsMeta(): QuestionsMeta {
  return questionsData.meta as unknown as QuestionsMeta;
}

export function getResultTypes(): ResultType[] {
  return resultTypesData.types as ResultType[];
}

export function getScoringRules(): ScoringRules {
  return scoringRulesData as unknown as ScoringRules;
}

export function getMethodology(): Methodology {
  return methodologyData as unknown as Methodology;
}

export function getLegalDisclaimer(): string {
  return resultTypesData.legal_disclaimer;
}

export function getMixedTypeRule(): {
  threshold: number;
  format: string;
} {
  return resultTypesData.mixed_type_rule as {
    threshold: number;
    format: string;
  };
}

export function getConsistencyMessages(): Record<
  string,
  { min_score?: number; max_score?: number; message: string; icon: string }
> {
  return resultTypesData.consistency_messages as Record<
    string,
    { min_score?: number; max_score?: number; message: string; icon: string }
  >;
}

export function getDimensionMeta() {
  return questionsData.meta.dimensions as Array<{
    id: string;
    name: string;
    description: string;
    source_constructs: string[];
    question_count: number;
  }>;
}
