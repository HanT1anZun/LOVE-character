"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

interface ConsistencyBadgeProps {
  score: number;
  level: "high" | "medium" | "low";
  message: string;
}

const config = {
  high: {
    icon: CheckCircle,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    label: "可信度高",
  },
  medium: {
    icon: AlertCircle,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    label: "可信度中等",
  },
  low: {
    icon: RefreshCw,
    color: "text-neutral-500 bg-neutral-50 border-neutral-200",
    label: "可信度较低",
  },
};

export default function ConsistencyBadge({
  score,
  level,
  message,
}: ConsistencyBadgeProps) {
  const c = config[level];
  const Icon = c.icon;

  return (
    <div
      className={cn(
        "rounded-xl border p-4 text-sm",
        c.color
      )}
    >
      <div className="mb-1 flex items-center gap-2 font-semibold">
        <Icon className="h-4 w-4" />
        <span>回答一致性：{c.label}（{score} 分）</span>
      </div>
      <p className="leading-relaxed opacity-80">{message}</p>
    </div>
  );
}
