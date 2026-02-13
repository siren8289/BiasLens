"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, Building2, AlertCircle } from 'lucide-react';
import { MOCK_ARTICLES } from '../data/mockData';
import { useCriteria } from '../../domains/criteria/state/CriteriaContext';

export function ArticleDetail() {
  const params = useParams() as { id?: string };
  const id = params?.id;
  const router = useRouter();
  const { criteria } = useCriteria();

  const article = MOCK_ARTICLES.find((a) => a.id === id);
  const enabledCriteria = criteria.filter((c) => c.enabled);

  const criteriaMap: Record<string, string> = {
    valueJudgment: '가치 판단',
    definitiveStatements: '단정적 서술',
    targetDescription: '대상 서술',
    expressionIntensity: '표현 강도',
    emotionalDensity: '감정어 밀도',
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl mb-4 text-gray-900 dark:text-gray-100">기사를 찾을 수 없습니다</h2>
          <Link
            href="/articles"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            기사 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => router.push('/articles')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            기사 목록으로 돌아가기
          </button>

          <div className="mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {article.mediaOutlet.name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-gray-100 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {article.expressionTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm border border-blue-200 dark:border-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-gray-100">요약</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Article Content */}
            {article.content && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">기사 본문</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {article.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Original Link */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-lg font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                원문 기사 보기
              </a>
            </div>
          </div>

          {/* Sidebar - Analysis */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Analysis Section */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl mb-2 text-gray-900 dark:text-gray-100">
                  📊 AI 표현 패턴 분석
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  선택하신 기준으로 분석한 결과입니다.
                </p>

                <div className="space-y-5">
                  {enabledCriteria.map((c) => {
                    const score = article.analysisScores[c.id as keyof typeof article.analysisScores];
                    return (
                      <div key={c.id} className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                            {criteriaMap[c.id]}
                          </span>
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {score}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          {c.description}
                        </p>
                        <div className="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 rounded-full ${
                              score >= 70
                                ? 'bg-gradient-to-r from-red-500 to-orange-500'
                                : score >= 40
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                                : 'bg-gradient-to-r from-green-500 to-emerald-500'
                            }`}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900 dark:text-amber-300 mb-2 text-sm">
                      분석 결과 해석 주의
                    </p>
                    <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                      이 분석은 AI 자동 분석 결과이며, 참고 자료입니다. 표현의 맥락과 의도는 독자 스스로 판단하시기 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
