import { useState } from 'react';
import Link from "next/link";
import { Settings, FileText, GitCompare, FileBarChart, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useCriteria } from '../../domains/criteria/state/CriteriaContext';
import { MOCK_MEDIA_ANALYSIS, AVERAGE_SCORES } from '../data/mockData';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

export function Dashboard() {
  const { criteria } = useCriteria();
  const [period, setPeriod] = useState<'7' | '30'>('7');

  const enabledCriteria = criteria.filter((c) => c.enabled);

  if (enabledCriteria.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-8 text-center">
          <p className="text-lg mb-4 text-gray-900 dark:text-gray-100">분석 기준이 선택되지 않았습니다.</p>
          <Link
            to="/criteria"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            <Settings className="w-4 h-4" />
            기준 설정하러 가기
          </Link>
        </div>
      </div>
    );
  }

  const criteriaMap: Record<string, string> = {
    valueJudgment: '가치 판단',
    definitiveStatements: '단정적 서술',
    targetDescription: '대상 서술',
    expressionIntensity: '표현 강도',
    emotionalDensity: '감정어 밀도',
  };

  const getChartData = () => {
    return enabledCriteria.map((c) => ({
      criteria: criteriaMap[c.id] || c.name,
      평균: AVERAGE_SCORES[c.id as keyof typeof AVERAGE_SCORES] || 0,
    }));
  };

  const getDeviationIcon = (deviation: number) => {
    if (deviation > 5) return <TrendingUp className="w-4 h-4 text-orange-600" />;
    if (deviation < -5) return <TrendingDown className="w-4 h-4 text-blue-600" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getConfidenceBadge = (confidence: string) => {
    const colors = {
      high: 'bg-green-100 text-green-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-red-100 text-red-700',
    };
    const labels = {
      high: '높음',
      medium: '보통',
      low: '낮음',
    };
    return (
      <span className={`text-xs px-2 py-1 rounded ${colors[confidence as keyof typeof colors]}`}>
        신뢰도: {labels[confidence as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl mb-2 text-gray-900 dark:text-gray-100">분석 대시보드</h1>
          <p className="text-gray-600 dark:text-gray-400">선택한 기준에 따른 매체별 표현 패턴 분석</p>
        </div>

        <Link
          href="/criteria"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
          <Settings className="w-4 h-4" />
          기준 변경
        </Link>
      </div>

      {/* Current Criteria Card */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
        <h2 className="text-lg mb-3 text-gray-900 dark:text-gray-100">현재 적용 중인 비교 기준</h2>
        <div className="flex flex-wrap gap-2">
          {enabledCriteria.map((c) => (
            <span
              key={c.id}
              className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm border border-blue-200 dark:border-blue-700 text-gray-900 dark:text-gray-100"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>

      {/* Period Selection */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPeriod('7')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              period === '7'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            최근 7일
          </button>
          <button
            onClick={() => setPeriod('30')}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              period === '30'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            최근 30일
          </button>
        </div>
      </div>

      {/* Overall Expression Distribution */}
      <div className="bg-slate-800 dark:bg-slate-800 rounded-xl p-10 shadow-sm border border-slate-700 dark:border-slate-700 mb-8">
        <h2 className="text-2xl mb-8 text-white">전체 표현 분포 요약</h2>
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="70%" data={getChartData()}>
              <PolarGrid stroke="#475569" strokeWidth={1.5} />
              <PolarAngleAxis 
                dataKey="criteria" 
                tick={{ fill: '#cbd5e1', fontSize: 16, fontWeight: 500 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fill: '#94a3b8', fontSize: 13 }}
                stroke="#475569"
              />
              <Radar
                name="평균 수치"
                dataKey="평균"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
                strokeWidth={3}
              />
              <Legend 
                wrapperStyle={{ 
                  color: '#3b82f6',
                  paddingTop: '20px',
                  fontSize: '14px'
                }}
                iconType="square"
                iconSize={12}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-slate-400 text-center mt-6">
          전체 매체의 평균 표현 패턴 (0-100 척도)
        </p>
      </div>

      {/* Media Analysis Cards */}
      <div className="mb-8">
        <h2 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">매체별 표현 차이 요약</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_MEDIA_ANALYSIS.map((analysis) => (
            <div
              key={analysis.mediaOutlet.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl text-gray-900 dark:text-gray-100">{analysis.mediaOutlet.name}</h3>
                {getConfidenceBadge(analysis.dataConfidence)}
              </div>

              <div className="space-y-3 mb-4">
                {enabledCriteria.map((c) => {
                  const score = analysis.scores[c.id as keyof typeof analysis.scores];
                  const avg = AVERAGE_SCORES[c.id as keyof typeof AVERAGE_SCORES];
                  const diff = score - avg;
                  
                  return (
                    <div key={c.id}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">{criteriaMap[c.id]}</span>
                        <span className="flex items-center gap-1 text-gray-900 dark:text-gray-100">
                          {getDeviationIcon(diff)}
                          <span>{diff > 0 ? '+' : ''}{diff.toFixed(0)}</span>
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">기준 대비 편차:</span>
                <span className={`text-sm ${
                  Math.abs(analysis.deviation) > 10 ? 'text-orange-600 dark:text-orange-400' : 'text-gray-900 dark:text-gray-100'
                }`}>
                  {analysis.deviation > 0 ? '+' : ''}{analysis.deviation}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link
          href="/articles"
          className="flex items-center gap-3 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg mb-1 text-gray-900 dark:text-gray-100">기사 단위로 보기</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">개별 기사 분석 결과 탐색</p>
          </div>
        </Link>

        <Link
          href="/compare"
          className="flex items-center gap-3 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
            <GitCompare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg mb-1 text-gray-900 dark:text-gray-100">매체 간 비교</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">2개 매체 상세 비교</p>
          </div>
        </Link>

        <Link
          href="/report"
          className="flex items-center gap-3 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
            <FileBarChart className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-lg mb-1 text-gray-900 dark:text-gray-100">참고 리포트 생성</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">PDF 다운로드 및 공유</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
