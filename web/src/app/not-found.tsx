"use client";

import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="mb-8">
        <h1 className="text-6xl mb-4 text-gray-900 dark:text-gray-100">404</h1>
        <h2 className="text-3xl mb-4 text-gray-900 dark:text-gray-100">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          <Home className="w-5 h-5" />
          홈으로 가기
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <Search className="w-5 h-5" />
          이전 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
}

