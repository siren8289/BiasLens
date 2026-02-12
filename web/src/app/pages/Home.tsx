import Link from "next/link";
import { ArrowRight, Eye, Settings, BarChart3, Search } from 'lucide-react';
import { useCriteria } from '../context/CriteriaContext';

export function Home() {
  const { hasAnyCriteriaEnabled } = useCriteria();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
          <Eye className="w-4 h-4" />
          뉴스 표현 분석 플랫폼
        </div>
        
        <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          내 기준으로 뉴스 표현을 비교하다
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          BiasLens는 사용자가 선택한 기준에 따라 뉴스 매체의 표현 패턴을 분석하고 비교할 수 있도록 돕는 도구입니다.
        </p>

        <Link
          href={hasAnyCriteriaEnabled ? '/dashboard' : '/criteria'}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all"
        >
          {hasAnyCriteriaEnabled ? '대시보드 보기' : '기준 설정하기'}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* How it Works */}
      <div className="mb-16">
        <h2 className="text-center text-3xl mb-12 text-gray-900 dark:text-gray-100">BiasLens 사용 방식</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">① 기준 선택</h3>
            <p className="text-gray-600 dark:text-gray-400">
              가치 판단 빈도, 단정적 서술, 표현 강도 등 비교하고 싶은 표현 기준을 선택합니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">② 표현 차이 확인</h3>
            <p className="text-gray-600 dark:text-gray-400">
              선택한 기준에 따라 매체별 표현 패턴의 차이를 시각적으로 확인합니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900 dark:text-gray-100">③ 스스로 해석</h3>
            <p className="text-gray-600 dark:text-gray-400">
              분석 결과를 바탕으로 각 매체의 특성을 스스로 판단하고 해석합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl mb-8 text-center text-gray-900 dark:text-gray-100">BiasLens의 특징</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl mb-3 text-blue-600 dark:text-blue-400">사용자 중심 기준</h3>
            <p className="text-gray-600 dark:text-gray-400">
              BiasLens는 특정 관점을 강요하지 않습니다. 사용자가 중요하게 생각하는 표현 기준을 직접 선택하고 조합할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-purple-600 dark:text-purple-400">투명한 분석 과정</h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI가 어떤 방식으로 표현을 분석하는지, 그 과정과 한계를 명확히 공개합니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-green-600 dark:text-green-400">비교를 위한 도구</h3>
            <p className="text-gray-600 dark:text-gray-400">
              매체 간 표현 차이를 시각화하여 쉽게 비교할 수 있도록 돕습니다. 최종 판단은 사용자의 몫입니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3 text-orange-600 dark:text-orange-400">참고용 리포트</h3>
            <p className="text-gray-600 dark:text-gray-400">
              분석 결과를 PDF로 생성하여 참고 자료로 활용할 수 있습니다. 단, 절대적인 기준이 아닌 하나의 관점임을 명시합니다.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          BiasLens를 통해 다양한 관점에서 뉴스를 이해해보세요
        </p>
        <Link
          href="/criteria"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          기준 설정하러 가기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}