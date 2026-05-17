"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTest } from "@/context/TestContext";
import { Heart, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const { startTest } = useTest();

  const handleStart = () => {
    startTest();
    router.push("/test");
  };

  return (
    <div className="gradient-hero min-h-[calc(100vh-3.5rem)]">
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-12 sm:pt-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1.5 text-sm text-rose-500 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            基于成熟心理学构念
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-4xl lg:text-5xl">
            探索你的
            <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
              {" "}恋爱倾向画像
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
            32 道精心设计的题目，8 个科学维度。
            <br />
            不是贴标签，不是诊断你是谁——而是帮你更清晰地看见自己在爱里的样子。
          </p>

          <motion.button
            onClick={handleStart}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-neutral-800 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-neutral-700"
          >
            <Heart className="h-5 w-5 fill-rose-400" />
            开始测试
          </motion.button>

          <p className="mt-4 text-xs text-neutral-400">
            预计 5–8 分钟 · 免费 · 无需注册
          </p>
        </motion.div>

        {/* 信任区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              icon: Clock,
              title: "5-8 分钟完成",
              desc: "32 道精选题目，利用碎片时间即可完成自我探索",
            },
            {
              icon: Sparkles,
              title: "科研理论基础",
              desc: "基于 Lee、Sternberg、Brennan 等成熟心理学构念设计",
            },
            {
              icon: ShieldCheck,
              title: "非诊断 · 自我了解",
              desc: "不做临床分类，不用异常标签，只帮你更理解自己",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-100 bg-white/70 p-6 backdrop-blur card-shadow"
            >
              <item.icon className="h-8 w-8 text-rose-400" />
              <h3 className="mt-3 font-semibold text-neutral-800">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
