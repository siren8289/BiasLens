import { Eye, Target, ShieldCheck, AlertTriangle, Check, X, Sparkles, Users } from 'lucide-react';
import Link from "next/link";

export function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
          <Eye className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl mb-4 text-gray-900 dark:text-gray-100">
          BiasLens 서비스 소개
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          뉴스 표현 패턴을 분석하여 매체 간 차이를 비교하는 도구
        </p>
      </div>

      {/* Core Concept */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 md:p-10 mb-12 border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-900 dark:text-gray-100 text-center">
          BiasLens는 무엇을 분석하나요?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* What We Analyze */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg text-gray-900 dark:text-gray-100">분석하는 것</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>가치 판단 표현의 빈도</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>단정적 서술의 비율</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>특정 대상에 대한 서술 방향성</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>표현 강도의 편차</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>감정어 사용 밀도</span>
              </li>
            </ul>
          </div>

          {/* What We Don't Analyze */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg text-gray-900 dark:text-gray-100">분석하지 않는 것</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span>보도 내용의 사실 여부</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span>기자의 의도나 정치적 입장</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span>뉴스의 품질이나 신뢰도</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                <span>절대적인 '편향도' 수치</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 dark:bg-blue-900/40 rounded-xl p-5 border border-blue-300 dark:border-blue-700">
          <p className="text-sm md:text-base text-blue-900 dark:text-blue-100">
            <strong className="block mb-1">⚠️ 중요한 원칙</strong>
            BiasLens는 특정 매체가 편향되었다고 단정하지 않습니다. 오직 <strong>표현 방식의 차이</strong>를 비교할 수 있는 참고 자료를 제공합니다.
          </p>
        </div>
      </div>

      {/* User Control */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
            <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100">
            사용자 중심의 분석
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-3xl mb-3">1️⃣</div>
            <h3 className="text-lg mb-2 text-gray-900 dark:text-gray-100">기준 선택</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              어떤 표현 요소를 중요하게 볼지 직접 선택하세요. 모든 기준은 동등한 가치를 가집니다.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-3xl mb-3">2️⃣</div>
            <h3 className="text-lg mb-2 text-gray-900 dark:text-gray-100">결과 해석</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              분석 결과의 의미는 사용자가 판단합니다. 높거나 낮은 수치가 자동으로 '좋음'을 의미하지 않습니다.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-3xl mb-3">3️⃣</div>
            <h3 className="text-lg mb-2 text-gray-900 dark:text-gray-100">최종 판단</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              BiasLens는 도구일 뿐입니다. 뉴스를 어떻게 읽을지는 여전히 독자의 몫입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Limitations & Guidelines */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100">
            사용 시 유의사항
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
              <h3 className="text-gray-900 dark:text-gray-100">AI 분석의 한계</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 pl-8">
              아이러니, 인용, 반어법 등 복잡한 표현은 오분석될 수 있습니다.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
              <h3 className="text-gray-900 dark:text-gray-100">상대적 비교</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 pl-8">
              모든 수치는 상대적 비교를 위한 것으로, 절대적 기준이 아닙니다.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
              <h3 className="text-gray-900 dark:text-gray-100">데이터 충분도</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 pl-8">
              분석 대상 기사가 적을 경우 결과의 신뢰도가 낮아집니다.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
              <h3 className="text-gray-900 dark:text-gray-100">참고 자료로만 활용</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 pl-8">
              다양한 출처의 정보를 종합적으로 고려하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 dark:from-gray-900 dark:to-blue-950 rounded-2xl p-8 md:p-12 text-center mb-12">
        <Sparkles className="w-12 h-12 text-blue-300 mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl mb-4 text-white">
          BiasLens의 목표
        </h2>
        <p className="text-lg text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
          뉴스를 더 비판적으로 읽을 수 있도록 돕는 도구입니다. 
          특정 매체를 옹호하거나 비판하지 않으며, 표현의 다양성을 이해하고 
          스스로 판단할 수 있는 기회를 제공합니다.
        </p>
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-3 rounded-full text-white">
          <Users className="w-5 h-5" />
          <span>능동적인 뉴스 소비자 되기</span>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/transparency"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          AI 투명성 정책 보기
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
