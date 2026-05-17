"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DimensionBarProps {
  name: string;
  score: number;
  delay?: number;
}

export default function DimensionBar({
  name,
  score,
  delay = 0,
}: DimensionBarProps) {
  const barColor = (s: number) => {
    if (s >= 70) return "bg-rose-400";
    if (s >= 40) return "bg-amber-400";
    return "bg-sky-400";
  };

  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 text-right text-xs text-neutral-500">
        {name}
      </span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
        <motion.div
          className={cn("h-full rounded-full", barColor(score))}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
        />
      </div>
      <span className="w-9 text-right text-sm font-semibold text-neutral-700">
        {score}
      </span>
    </div>
  );
}
