"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from "react";
import type { Answers, AssessmentResult } from "@/lib/types";
import { calculateResults } from "@/lib/scoring";

interface TestState {
  currentStep: number; // 0 = not started, 1–32 = question index, 33 = complete
  answers: Answers;
  result: AssessmentResult | null;
}

type TestAction =
  | { type: "START_TEST" }
  | { type: "ANSWER_QUESTION"; questionId: string; value: number }
  | { type: "GO_TO_QUESTION"; index: number }
  | { type: "NEXT_QUESTION" }
  | { type: "PREV_QUESTION" }
  | { type: "COMPLETE_TEST" }
  | { type: "RESET" };

function reducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case "START_TEST":
      return { ...state, currentStep: 1 };

    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.value },
      };

    case "GO_TO_QUESTION":
      return { ...state, currentStep: action.index };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 33),
      };

    case "PREV_QUESTION":
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 0),
      };

    case "COMPLETE_TEST": {
      const result = calculateResults(state.answers);
      return {
        ...state,
        currentStep: 33,
        result,
      };
    }

    case "RESET":
      return { currentStep: 0, answers: {}, result: null };

    default:
      return state;
  }
}

const initialState: TestState = {
  currentStep: 0,
  answers: {},
  result: null,
};

interface TestContextValue {
  state: TestState;
  startTest: () => void;
  answerQuestion: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  completeTest: () => void;
  reset: () => void;
}

const TestContext = createContext<TestContextValue | null>(null);

export function TestProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const startTest = useCallback(() => dispatch({ type: "START_TEST" }), []);
  const answerQuestion = useCallback(
    (questionId: string, value: number) =>
      dispatch({ type: "ANSWER_QUESTION", questionId, value }),
    []
  );
  const nextQuestion = useCallback(
    () => dispatch({ type: "NEXT_QUESTION" }),
    []
  );
  const prevQuestion = useCallback(
    () => dispatch({ type: "PREV_QUESTION" }),
    []
  );
  const completeTest = useCallback(
    () => dispatch({ type: "COMPLETE_TEST" }),
    []
  );
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);

  return (
    <TestContext.Provider
      value={{
        state,
        startTest,
        answerQuestion,
        nextQuestion,
        prevQuestion,
        completeTest,
        reset,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest(): TestContextValue {
  const ctx = useContext(TestContext);
  if (!ctx) throw new Error("useTest must be used within TestProvider");
  return ctx;
}
