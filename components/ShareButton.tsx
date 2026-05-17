"use client";

import { useState } from "react";
import { Share2, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  shareText: string;
}

export default function ShareButton({ shareText }: ShareButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = shareText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "恋爱倾向画像",
          text: shareText,
          url: window.location.href,
        });
      } catch {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="flex items-center gap-2 rounded-xl bg-rose-400 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-rose-500 active:scale-95"
      >
        <Share2 className="h-5 w-5" />
        分享我的结果
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-neutral-800">
                分享你的恋爱画像
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-lg p-1 hover:bg-neutral-100"
              >
                <X className="h-5 w-5 text-neutral-400" />
              </button>
            </div>

            <div className="rounded-xl bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-700">
              {shareText}
            </div>

            <button
              onClick={handleCopy}
              className={cn(
                "mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-all",
                copied
                  ? "bg-emerald-500 text-white"
                  : "bg-neutral-800 text-white hover:bg-neutral-700"
              )}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  已复制
                </>
              ) : (
                "复制文案"
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
