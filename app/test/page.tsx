"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "@/context/TestContext";
import QuestionCard from "@/components/QuestionCard";

export default function TestPage() {
  const router = useRouter();
  const { state } = useTest();

  // 未开始测试 → 回首页
  useEffect(() => {
    if (state.currentStep === 0) {
      router.replace("/");
    }
  }, [state.currentStep, router]);

  // 已完成测试 → 跳结果页
  useEffect(() => {
    if (state.currentStep === 33 && state.result) {
      router.replace("/results");
    }
  }, [state.currentStep, state.result, router]);

  if (state.currentStep === 0 || state.currentStep === 33) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-rose-400" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <QuestionCard />
    </div>
  );
}
