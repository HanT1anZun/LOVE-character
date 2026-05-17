"use client";

import { motion } from "framer-motion";
import type { ResultType } from "@/lib/types";
import { Sparkles, ShieldAlert, HeartHandshake, Users, Zap } from "lucide-react";

interface TypeCardProps {
  type: ResultType;
  isPrimary?: boolean;
}

export default function TypeCard({ type, isPrimary = true }: TypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border bg-white p-6 card-shadow-lg ${
        isPrimary ? "border-rose-200 ring-1 ring-rose-100" : ""
      }`}
    >
      {isPrimary && (
        <span className="mb-3 inline-block rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
          你的主类型
        </span>
      )}
      {!isPrimary && (
        <span className="mb-3 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
          你的次类型
        </span>
      )}

      <h2 className="text-2xl font-bold text-neutral-800">{type.name}</h2>
      <p className="mt-2 text-lg italic text-neutral-500">{type.subtitle}</p>
      <p className="mt-4 leading-relaxed text-neutral-600">
        {type.description}
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <InfoBlock
          icon={<Sparkles className="h-5 w-5 text-amber-500" />}
          title="关系中的优势"
          items={type.strengths}
        />
        <InfoBlock
          icon={<ShieldAlert className="h-5 w-5 text-rose-500" />}
          title="关系中的盲点"
          items={type.blindspots}
        />
      </div>

      <div className="mt-5 rounded-xl bg-neutral-50 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
          <HeartHandshake className="h-4 w-4 text-rose-400" />
          适合的相处方式
        </div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {type.best_relationship_style}
        </p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <InfoBlock
          icon={<Users className="h-5 w-5 text-sky-500" />}
          title="适合的伴侣偏好"
          items={type.ideal_partner_traits}
        />
        <InfoBlock
          icon={<Zap className="h-5 w-5 text-violet-500" />}
          title="代表性行为特征"
          items={type.behavioral_signatures}
        />
      </div>
    </motion.div>
  );
}

function InfoBlock({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-700">
        {icon}
        {title}
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm leading-relaxed text-neutral-500"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
