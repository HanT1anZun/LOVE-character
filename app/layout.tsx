import type { Metadata } from "next";
import { TestProvider } from "@/context/TestContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "恋爱倾向画像 | 了解你的恋爱风格",
  description:
    "基于心理学构念的恋爱倾向自我了解工具。32道题，8个维度，生成专属于你的恋爱风格画像。",
  openGraph: {
    title: "恋爱倾向画像 | 了解你的恋爱风格",
    description: "完成32道题，生成专属恋爱倾向画像。不是诊断，是自我了解。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        <TestProvider>
          <Navbar />
          <main>{children}</main>
        </TestProvider>
      </body>
    </html>
  );
}
