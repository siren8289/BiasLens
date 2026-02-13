import { useState } from 'react';
import { FileDown, Share2, Calendar, Settings, FileText, AlertTriangle } from 'lucide-react';
import { useCriteria } from '../../domains/criteria/state/CriteriaContext';
import { MEDIA_OUTLETS, MOCK_ARTICLES } from '../data/mockData';

export function Report() {
  const { criteria } = useCriteria();
  const [period, setPeriod] = useState('7');
  const [selectedMedia, setSelectedMedia] = useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);

  const enabledCriteria = criteria.filter((c) => c.enabled);
  const topics = ['all', '경제', '기술', '환경', '교육'];

  const toggleMedia = (id: string) => {
    setSelectedMedia((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleGenerateReport = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('리포트가 생성되었습니다. (PDF 다운로드 기능은 준비중입니다)');
    }, 2000);
  };

  const totalArticles = MOCK_ARTICLES.length;
  const avgAnalysisScore = totalArticles > 0 ? Math.round(
    MOCK_ARTICLES.reduce((sum, article) => {
      const scores = Object.values(article.analysisScores);
      return sum + scores.reduce((a, b) => a + b, 0) / scores.length;
    }, 0) / totalArticles
  ) : 0;

  const canGenerate = selectedMedia.length > 0 && enabledCriteria.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">참고 리포트 생성</h1>
        <p className="text-gray-600 dark:text-gray-400">
          분석 결과를 PDF로 생성하여 참고 자료로 활용하세요
        </p>
      </div>

      {/* Warning/Info Box */}
      <div className="bg-amber-50 dark:bg-[#2a1c0e] border border-amber-200 dark:border-amber-700/50 rounded-xl p-6 mb-8 flex items-start gap-4">
        <div className="p-1">
          <FileText className="w-6 h-6 text-amber-600 dark:text-amber-500" />
        </div>
        <div>
          <h3 className="text-amber-900 dark:text-amber-400 font-semibold mb-2 text-base">
            참고용 리포트입니다
          </h3>
          <p className="text-sm text-amber-800 dark:text-amber-200/80 leading-relaxed">
            이 리포트는 선택한 기준에 따른 분석 결과이며, 절대적인 판단 기준이 아닌 하나의 관점입니다. 
            리포트 내용을 참고하되, 최종 판단은 스스로 내리시기 바랍니다.
          </p>
        </div>
      </div>

      {/* Report Settings */}
      <div className="space-y-6">
        {/* Criteria */}
        <div className="bg-white dark:bg-[#1e293b] rounded-xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">적용 기준</h2>
          </div>
          
          {enabledCriteria.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {enabledCriteria.map((c) => (
                <span
                  key={c.id}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-500/20"
                >
                  {c.name}
                </span>
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                선택된 분석 기준이 없습니다.
              </p>
              <a 
                href="/criteria" 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
              >
                기준 설정하러 가기 &rarr;
              </a>
            </div>
          )}
        </div>

        {/* Period */}
        <div className="bg-white dark:bg-[#1e293b] rounded-xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">분석 기간</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPeriod('7')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                period === '7'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                  : 'bg-gray-100 dark:bg-slate-700/50 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              최근 7일
            </button>
            <button
              onClick={() => setPeriod('30')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                period === '30'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                  : 'bg-gray-100 dark:bg-slate-700/50 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              최근 30일
            </button>
          </div>
        </div>

        {/* Media Selection */}
        <div className="bg-white dark:bg-[#1e293b] rounded-xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">포함할 매체</h2>
            </div>
            {selectedMedia.length > 0 && (
              <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 rounded-md">
                {selectedMedia.length}개 선택됨
              </span>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-3">
            {MEDIA_OUTLETS.map((outlet) => (
              <label
                key={outlet.id}
                className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  selectedMedia.includes(outlet.id)
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10'
                    : 'border-gray-100 dark:border-slate-700/50 bg-gray-50 dark:bg-slate-800/50 hover:border-gray-300 dark:hover:border-slate-600'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedMedia.includes(outlet.id)}
                  onChange={() => toggleMedia(outlet.id)}
                  className="w-5 h-5 text-blue-600 rounded border-gray-300 dark:border-slate-600 focus:ring-blue-500"
                />
                <span className={`font-medium ${
                  selectedMedia.includes(outlet.id) 
                    ? 'text-blue-900 dark:text-blue-100' 
                    : 'text-gray-700 dark:text-slate-300'
                }`}>
                  {outlet.name}
                </span>
              </label>
            ))}
          </div>
          {selectedMedia.length === 0 && (
            <div className="flex items-center gap-2 mt-4 text-amber-600 dark:text-amber-500 text-sm bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg">
              <AlertTriangle className="w-4 h-4" />
              <span>최소 1개 이상의 매체를 선택해주세요.</span>
            </div>
          )}
        </div>

        {/* Topic Selection */}
        <div className="bg-white dark:bg-[#1e293b] rounded-xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">주제 필터 (선택)</h2>
          </div>
          <div className="relative">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full appearance-none px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-slate-200 cursor-pointer"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic === 'all' ? '전체 주제' : topic}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-8 bg-white dark:bg-[#1e293b] rounded-xl p-8 border border-gray-200 dark:border-slate-700 shadow-sm sticky bottom-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">
              리포트 준비 완료
            </h3>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              선택한 조건으로 맞춤형 분석 리포트를 생성합니다.
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              disabled={!canGenerate || isGenerating}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all ${
                canGenerate && !isGenerating
                  ? 'bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-600'
                  : 'bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-400 dark:text-slate-500 cursor-not-allowed'
              }`}
            >
              <Share2 className="w-5 h-5" />
              <span>공유하기</span>
            </button>

            <button
              onClick={handleGenerateReport}
              disabled={!canGenerate || isGenerating}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium shadow-lg transition-all ${
                canGenerate && !isGenerating
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20 hover:shadow-blue-900/30 hover:-translate-y-0.5'
                  : 'bg-gray-300 dark:bg-slate-700 text-gray-500 dark:text-slate-500 cursor-not-allowed'
              }`}
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>생성 중...</span>
                </>
              ) : (
                <>
                  <FileDown className="w-5 h-5" />
                  <span>PDF 생성하기</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
