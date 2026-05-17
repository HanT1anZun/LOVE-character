"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTest } from "@/context/TestContext";
import { getQuestions } from "@/lib/data-loader";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";

const SCALE_LABELS = [
  { value: 1, label: "非常不同意" },
  { value: 2, label: "不同意" },
  { value: 3, label: "一般" },
  { value: 4, label: "同意" },
  { value: 5, label: "非常同意" },
];

export default function QuestionCard() {
  const { state, answerQuestion, nextQuestion, prevQuestion, completeTest } =
    useTest();
  const questions = getQuestions();
  const total = questions.length;
  const idx = state.currentStep - 1;
  const question = questions[idx];

  if (!question) return null;

  const selectedValue = state.answers[question.id] ?? null;
  const isLast = idx === total - 1;
  const canNext = selectedValue !== null;
  const canPrev = idx > 0;

  const handleSelect = (value: number) => {
    answerQuestion(question.id, value);
    if (!isLast) {
      setTimeout(() => nextQuestion(), 350);
    }
  };

  const handleNext = () => {
    if (isLast && canNext) {
      completeTest();
    } else if (canNext) {
      nextQuestion();
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg px-4">
      <ProgressBar current={idx + 1} total={total} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-8 text-xl font-semibold leading-relaxed text-neutral-800 sm:text-2xl">
              {question.question}
            </h2>

            <div className="space-y-3">
              {SCALE_LABELS.map((opt) => {
                const isSelected = selectedValue === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    whileTap={{ scale: 0.97 }}
                    className={cn(
                      "w-full rounded-xl border-2 px-5 py-4 text-left transition-all",
                      "hover:border-rose-300 hover:bg-rose-50/50",
                      isSelected
                        ? "border-rose-400 bg-rose-50 text-rose-700 shadow-sm"
                        : "border-neutral-100 bg-white text-neutral-600"
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-500">
                        {opt.value}
                      </span>
                      <span className="font-medium">{opt.label}</span>
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto text-sm text-rose-400"
                        >
                          ✓ 已选
                        </motion.span>
                      )}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={prevQuestion}
                disabled={!canPrev}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  canPrev
                    ? "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100"
                    : "text-neutral-300 cursor-not-allowed"
                )}
              >
                ← 上一题
              </button>

              <span className="text-xs text-neutral-400">
                {selectedValue ? "已选择" : "请选择一个选项"}
              </span>

              {isLast ? (
                <button
                  onClick={handleNext}
                  disabled={!canNext}
                  className={cn(
                    "rounded-lg px-6 py-2.5 text-sm font-semibold transition-all",
                    canNext
                      ? "bg-rose-400 text-white hover:bg-rose-500 shadow-sm"
                      : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                  )}
                >
                  查看结果
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!canNext}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    canNext
                      ? "text-rose-500 hover:text-rose-700 hover:bg-rose-50"
                      : "text-neutral-300 cursor-not-allowed"
                  )}
                >
                  下一题 →
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
