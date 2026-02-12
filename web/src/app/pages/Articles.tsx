import { useState } from 'react';
import { Filter, Calendar, Building2, Tag } from 'lucide-react';
import Link from "next/link";
import { MOCK_ARTICLES, MEDIA_OUTLETS } from '../data/mockData';
import { useCriteria } from '../context/CriteriaContext';

export function Articles() {
  const { criteria } = useCriteria();
  const [filterMedia, setFilterMedia] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const enabledCriteria = criteria.filter((c) => c.enabled);

  const topics = ['all', '경제', '기술', '환경', '교육'];

  const filteredArticles = MOCK_ARTICLES.filter((article) => {
    if (filterMedia !== 'all' && article.mediaOutlet.id !== filterMedia) return false;
    if (filterCategory !== 'all' && article.topic !== filterCategory) return false;
    return true;
  });

  const criteriaMap: Record<string, string> = {
    valueJudgment: '가치 판단',
    definitiveStatements: '단정적 서술',
    targetDescription: '대상 서술',
    expressionIntensity: '표현 강도',
    emotionalDensity: '감정어 밀도',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl mb-2 text-gray-900 dark:text-gray-100">기사 탐색</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">개별 기사의 표현 분석 결과를 확인하세요</p>

      {/* Filters */}
      <div className="bg-slate-800 dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700 dark:border-slate-700 mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-slate-400" />
          <h2 className="text-lg text-white font-medium">필터</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">주제</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic === 'all' ? '전체' : topic}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">매체</label>
            <select
              value={filterMedia}
              onChange={(e) => setFilterMedia(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
            >
              <option value="all">전체</option>
              {MEDIA_OUTLETS.map((outlet) => (
                <option key={outlet.id} value={outlet.id}>
                  {outlet.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-400">
          총 {filteredArticles.length}개 기사
        </div>
      </div>

      {/* Article List */}
      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl flex-1 pr-4 text-gray-900 dark:text-gray-100">{article.title}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 whitespace-nowrap">
                <Building2 className="w-4 h-4" />
                {article.mediaOutlet.name}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{article.summary}</p>

            {/* Article Content Preview */}
            {article.content && (
              <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 line-clamp-3">
                {article.content}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString('ko-KR')}
              </span>

              <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Tag className="w-4 h-4" />
                {article.topic}
              </span>

              <div className="flex flex-wrap gap-2">
                {article.expressionTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}