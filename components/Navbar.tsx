"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-neutral-800 hover:text-neutral-600 transition-colors"
        >
          <Heart className="h-5 w-5 text-rose-400 fill-rose-400" />
          <span className="text-sm sm:text-base">恋爱倾向画像</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <Link
            href="/methodology"
            className="hover:text-neutral-800 transition-colors"
          >
            方法说明
          </Link>
        </div>
      </div>
    </nav>
  );
}
