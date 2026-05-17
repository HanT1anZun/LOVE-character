"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTest } from "@/context/TestContext";
import RadarChart from "@/components/RadarChart";
import TypeCard from "@/components/TypeCard";
import DimensionBar from "@/components/DimensionBar";
import ConsistencyBadge from "@/components/ConsistencyBadge";
import ShareButton from "@/components/ShareButton";
import { getDimensionNames } from "@/lib/scoring";
import { AlertTriangle, RotateCcw } from "lucide-react";
import type { DimensionId } from "@/lib/types";

export default function ResultsPage() {
  const router = useRouter();
  const { state, reset } = useTest();
  const { result } = state;

  // 没结果 → 回首页
  useEffect(() => {
    if (!result) {
      router.replace("/");
    }
  }, [result, router]);

  if (!result) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-rose-400" />
      </div>
    );
  }

  const dimNames = getDimensionNames();
  const dimOrder: DimensionId[] = [
    "passion_eros",
    "game_ludus",
    "companion_storge",
    "rational_pragma",
    "attachment_anxiety",
    "attachment_avoidance",
    "sacrifice_agape",
    "communication_open",
  ];

  const handleRetake = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        {result.is_mixed ? (
          <div className="mb-2 inline-block rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-600">
            混合倾向
          </div>
        ) : null}
        <h1 className="text-3xl font-extrabold text-neutral-800">
          {result.is_mixed
            ? result.mixed_type_name
            : result.primary_type.name}
        </h1>
        <p className="mt-3 text-lg italic text-neutral-500">
          {result.primary_type.subtitle}
        </p>
      </motion.div>

      {/* 免责声明 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-center text-xs text-neutral-400"
      >
        {result.legal_disclaimer}
      </motion.p>

      {/* 混合型说明 */}
      {result.is_mixed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-start gap-3 rounded-xl border border-violet-200 bg-violet-50 p-4"
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
          <p className="text-sm leading-relaxed text-violet-700">
            你的得分模式在「{result.primary_type.name}」和「{result.secondary_type.name}」之间非常接近。这意味着你兼具两种类型的特征——在不同情境下，你可能表现出不同的恋爱风格。这本身不是问题，而是你恋爱人格丰富性的体现。
          </p>
        </motion.div>
      )}

      {/* 雷达图 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-10"
      >
        <RadarChart scores={result.dimension_scores} />
      </motion.div>

      {/* 维度百分比 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 space-y-2"
      >
        <h3 className="mb-4 text-center text-sm font-semibold text-neutral-500">
          各维度得分
        </h3>
        {dimOrder.map((dim, i) => (
          <DimensionBar
            key={dim}
            name={dimNames[dim]}
            score={result.dimension_scores[dim]}
            delay={0.6 + i * 0.08}
          />
        ))}
      </motion.div>

      {/* 一致性 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8"
      >
        <ConsistencyBadge
          score={result.consistency_score}
          level={result.consistency_level}
          message={result.consistency_message}
        />
      </motion.div>

      {/* 主类型卡片 */}
      <div className="mt-8">
        <TypeCard type={result.primary_type} isPrimary />
      </div>

      {/* 次类型卡片 */}
      <div className="mt-6">
        <TypeCard type={result.secondary_type} isPrimary={false} />
      </div>

      {/* 操作按钮组 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <ShareButton shareText={result.share_text} />

        <button
          onClick={handleRetake}
          className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3 font-semibold text-neutral-600 transition-all hover:bg-neutral-50 active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          重新测试
        </button>
      </motion.div>

      <div className="mt-10 text-center">
        <Link
          href="/methodology"
          className="text-sm text-neutral-400 underline underline-offset-2 hover:text-neutral-600"
        >
          了解评分方法和理论依据
        </Link>
      </div>
    </div>
  );
}
