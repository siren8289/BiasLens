import { useState } from 'react';
import { Info, TrendingUp, TrendingDown } from 'lucide-react';
import { MEDIA_OUTLETS, MOCK_MEDIA_ANALYSIS, AVERAGE_SCORES } from '../data/mockData';
import { useCriteria } from '../../domains/criteria/state/CriteriaContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Compare() {
  const { criteria } = useCriteria();
  const [media1, setMedia1] = useState(MEDIA_OUTLETS[0].id);
  const [media2, setMedia2] = useState(MEDIA_OUTLETS[1].id);

  const enabledCriteria = criteria.filter((c) => c.enabled);

  const analysis1 = MOCK_MEDIA_ANALYSIS.find((a) => a.mediaOutlet.id === media1);
  const analysis2 = MOCK_MEDIA_ANALYSIS.find((a) => a.mediaOutlet.id === media2);

  const criteriaMap: Record<string, string> = {
    valueJudgment: '가치 판단',
    definitiveStatements: '단정적 서술',
    targetDescription: '대상 서술',
    expressionIntensity: '표현 강도',
    emotionalDensity: '감정어 밀도',
  };

  const getChartData = () => {
    if (!analysis1 || !analysis2) return [];

    return enabledCriteria.map((c) => ({
      criteria: criteriaMap[c.id] || c.name,
      [analysis1.mediaOutlet.name]: analysis1.scores[c.id as keyof typeof analysis1.scores],
      [analysis2.mediaOutlet.name]: analysis2.scores[c.id as keyof typeof analysis2.scores],
      평균: AVERAGE_SCORES[c.id as keyof typeof AVERAGE_SCORES],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl mb-2 text-gray-900 dark:text-gray-100">매체 비교</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">2개 매체의 표현 패턴을 상세히 비교합니다</p>

      {/* Media Selection */}
      <div className="bg-slate-800 dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-700 dark:border-slate-700 mb-8">
        <h2 className="text-lg mb-6 text-white font-medium">비교할 매체 선택</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">매체 1</label>
            <select
              value={media1}
              onChange={(e) => setMedia1(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
            >
              {MEDIA_OUTLETS.map((outlet) => (
                <option key={outlet.id} value={outlet.id}>
                  {outlet.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-2">매체 2</label>
            <select
              value={media2}
              onChange={(e) => setMedia2(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-white appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
            >
              {MEDIA_OUTLETS.map((outlet) => (
                <option key={outlet.id} value={outlet.id}>
                  {outlet.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {enabledCriteria.length === 0 ? (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-8 text-center">
          <p className="text-lg mb-4 text-gray-900 dark:text-gray-100">분석 기준이 선택되지 않았습니다.</p>
          <a
            href="/criteria"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            기준 설정하러 가기
          </a>
        </div>
      ) : (
        <>
          {/* Comparison Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">기준별 표현 분포 비교</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getChartData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="criteria" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey={analysis1?.mediaOutlet.name} fill="#3b82f6" />
                  <Bar dataKey={analysis2?.mediaOutlet.name} fill="#8b5cf6" />
                  <Bar dataKey="평균" fill="#9ca3af" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Media 1 Card */}
            {analysis1 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl mb-4 text-gray-900 dark:text-gray-100">{analysis1.mediaOutlet.name}</h3>
                <div className="space-y-4">
                  {enabledCriteria.map((c) => {
                    const score = analysis1.scores[c.id as keyof typeof analysis1.scores];
                    const avg = AVERAGE_SCORES[c.id as keyof typeof AVERAGE_SCORES];
                    const diff = score - avg;

                    return (
                      <div key={c.id}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{criteriaMap[c.id]}</span>
                          <div className="flex items-center gap-2">
                            {diff > 0 ? (
                              <TrendingUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            )}
                            <span className="text-sm text-gray-900 dark:text-gray-100">
                              {diff > 0 ? '+' : ''}{diff.toFixed(0)} (평균 대비)
                            </span>
                          </div>
                        </div>
                        <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">전체 편차</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {analysis1.deviation > 0 ? '+' : ''}{analysis1.deviation}%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Media 2 Card */}
            {analysis2 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl mb-4 text-gray-900 dark:text-gray-100">{analysis2.mediaOutlet.name}</h3>
                <div className="space-y-4">
                  {enabledCriteria.map((c) => {
                    const score = analysis2.scores[c.id as keyof typeof analysis2.scores];
                    const avg = AVERAGE_SCORES[c.id as keyof typeof AVERAGE_SCORES];
                    const diff = score - avg;

                    return (
                      <div key={c.id}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{criteriaMap[c.id]}</span>
                          <div className="flex items-center gap-2">
                            {diff > 0 ? (
                              <TrendingUp className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            )}
                            <span className="text-sm text-gray-900 dark:text-gray-100">
                              {diff > 0 ? '+' : ''}{diff.toFixed(0)} (평균 대비)
                            </span>
                          </div>
                        </div>
                        <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">전체 편차</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {analysis2.deviation > 0 ? '+' : ''}{analysis2.deviation}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interpretation Guide */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900 dark:text-blue-100">
                <p className="mb-2">
                  <strong>해석 가이드</strong>
                </p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>수치는 해당 표현 기준의 상대적 빈도나 강도를 0-100 척도로 나타냅니다</li>
                  <li>평균 대비 높거나 낮다고 해서 좋거나 나쁜 것은 아닙니다</li>
                  <li>표현의 차이는 각 매체의 편집 방향이나 독자층에 따른 선택의 결과일 수 있습니다</li>
                  <li>최종적인 판단은 여러 요소를 고려하여 독자 스스로 내리시기 바랍니다</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}