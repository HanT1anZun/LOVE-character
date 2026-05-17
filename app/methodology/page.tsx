"use client";

import { motion } from "framer-motion";
import { getMethodology } from "@/lib/data-loader";
import {
  BookOpen,
  FileQuestion,
  Calculator,
  Lightbulb,
  Shield,
  HelpCircle,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "项目概述": <BookOpen className="h-5 w-5 text-rose-400" />,
  "理论框架": <FileQuestion className="h-5 w-5 text-sky-400" />,
  "问卷设计说明": <FileQuestion className="h-5 w-5 text-amber-400" />,
  "评分方法说明": <Calculator className="h-5 w-5 text-violet-400" />,
  "如何理解你的结果": <Lightbulb className="h-5 w-5 text-emerald-400" />,
  "免责声明": <Shield className="h-5 w-5 text-neutral-400" />,
};

export default function MethodologyPage() {
  const data = getMethodology();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl font-extrabold text-neutral-800">
          方法说明
        </h1>
        <p className="mt-3 text-neutral-500">
          了解本测评的设计逻辑、理论依据和评分方式
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* 项目概述 */}
        <Section title="项目概述" icon={iconMap["项目概述"]}>
          <p className="leading-relaxed text-neutral-600">
            {data.project_overview.what_is_this as string}
          </p>
          <p className="mt-3 leading-relaxed text-neutral-500">
            {data.project_overview.what_is_not as string}
          </p>
        </Section>

        {/* 理论框架 */}
        <Section title="理论框架" icon={iconMap["理论框架"]}>
          <p className="mb-4 text-neutral-500">
            {data.theoretical_framework.description}
          </p>
          <div className="space-y-3">
            {data.theoretical_framework.frameworks.map((fw) => (
              <div
                key={fw.name}
                className="rounded-xl border border-neutral-100 bg-white p-4 card-shadow"
              >
                <h4 className="font-semibold text-neutral-800">{fw.name}</h4>
                <p className="mt-1 text-xs text-neutral-400">{fw.reference}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {fw.contribution}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {fw.dimensions_used.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-rose-50 px-2 py-0.5 text-xs text-rose-500"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 评分方法 */}
        <Section title="评分方法说明" icon={iconMap["评分方法说明"]}>
          <div className="space-y-4">
            {data.scoring_method.steps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 rounded-xl border border-neutral-100 bg-white p-4 card-shadow"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-500">
                  {step.step}
                </span>
                <div>
                  <h4 className="font-semibold text-neutral-800">
                    {step.name}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 结果解读 */}
        <Section title="如何理解你的结果" icon={iconMap["如何理解你的结果"]}>
          <div className="space-y-4">
            {data.result_interpretation_guide.points.map((p) => (
              <div
                key={p.heading}
                className="rounded-xl border border-neutral-100 bg-white p-4 card-shadow"
              >
                <h4 className="font-semibold text-neutral-800">{p.heading}</h4>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section title="常见问题" icon={<HelpCircle className="h-5 w-5 text-amber-400" />}>
          <div className="space-y-3">
            {data.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-neutral-100 bg-white card-shadow"
              >
                <summary className="cursor-pointer p-4 font-medium text-neutral-700 outline-none">
                  {item.q}
                </summary>
                <p className="px-4 pb-4 text-sm leading-relaxed text-neutral-500">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Section>

        {/* 免责声明 */}
        <Section title="免责声明" icon={iconMap["免责声明"]}>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
            <ul className="space-y-2">
              {data.disclaimer.content.map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed text-neutral-500"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        {icon}
        <h2 className="text-xl font-bold text-neutral-800">{title}</h2>
      </div>
      {children}
    </section>
  );
}
