import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "BiasLens App Overview",
  description:
    "뉴스 표현 패턴을 분석하여 능동적인 미디어 소비를 돕는 BiasLens 대시보드",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
        <Providers>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

