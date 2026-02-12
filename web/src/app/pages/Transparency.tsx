import { Brain, Database, AlertCircle, Code, Shield, Layers, TrendingUp, Lock, CheckCircle, XCircle } from 'lucide-react';
import Link from "next/link";

export function Transparency() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-6">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl mb-4 text-gray-900 dark:text-gray-100">
          AI 투명성 정책
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          BiasLens가 데이터를 수집하고 분석하는 모든 과정을 공개합니다
        </p>
      </div>

      {/* Data Collection */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
            <Database className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100">데이터 수집 방식</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              수집 대상
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                <span>국내 주요 뉴스 매체의 공개 기사</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                <span>정치, 경제, 사회, 문화 섹션</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                <span>실시간 업데이트 최신 뉴스</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <h3 className="text-lg mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
              수집 방법
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                <span>RSS 피드 및 공개 API 활용</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                <span>robots.txt 및 이용약관 준수</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                <span>원문 링크로 출처 명확화</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 border border-red-200 dark:border-red-800">
            <h3 className="text-lg mb-3 text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              수집 안하는 정보
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>사용자 개인정보</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>기사 열람 기록 및 선호도</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>댓글이나 독자 반응</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 dark:bg-blue-900/40 rounded-xl p-5 border border-blue-300 dark:border-blue-700">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-blue-900 dark:text-blue-100 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>개인정보 보호:</strong> BiasLens는 로그인이나 회원가입을 요구하지 않으며, 어떠한 개인정보도 수집하지 않습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Analysis Pipeline */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
            <Brain className="w-7 h-7 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100">표현 패턴 분석 파이프라인</h2>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-2 text-gray-900 dark:text-gray-100">텍스트 전처리</h3>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">→</span>
                      <span>기사 본문에서 광고, 이미지 캡션 등 제외</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">→</span>
                      <span>형태소 분석을 통한 단어 단위 분해</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">→</span>
                      <span>인용문과 직접 서술 구분</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-2 text-gray-900 dark:text-gray-100">표현 요소 추출</h3>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700 space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">가치 판단 표현:</span>
                    <span className="text-gray-700 dark:text-gray-300 ml-2">긍정/부정 평가어 사전 기반 탐지</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">단정적 서술:</span>
                    <span className="text-gray-700 dark:text-gray-300 ml-2">어미 패턴 분석 (~것이다, ~할 것이다)</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">대상 서술:</span>
                    <span className="text-gray-700 dark:text-gray-300 ml-2">특정 개체에 대한 긍정/부정 문맥 분석</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">표현 강도:</span>
                    <span className="text-gray-700 dark:text-gray-300 ml-2">강조 표현, 수식어, 부사의 빈도 및 강도</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-purple-700 dark:text-purple-300">감정어 밀도:</span>
                    <span className="text-gray-700 dark:text-gray-300 ml-2">감정어 사전 기반 밀도 계산</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-2 text-gray-900 dark:text-gray-100">AI 모델 활용</h3>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">→</span>
                      <span>자연어 처리(NLP) 모델을 사용한 문맥 이해</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">→</span>
                      <span>사전 학습된 한국어 언어 모델 기반</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">→</span>
                      <span>인간 평가자의 라벨링 데이터로 지속적 개선</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aggregation */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl p-8 md:p-10 mb-12 border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
            <Layers className="w-7 h-7 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100">기준 기반 집계 원리</h2>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          각 기사에서 추출된 표현 요소들을 사용자가 선택한 기준에 따라 집계하여 매체별 패턴을 도출합니다.
        </p>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl p-6 mb-6 border border-green-300 dark:border-green-700">
          <h3 className="text-lg mb-3 text-gray-900 dark:text-gray-100">📊 집계 프로세스 예시: 가치 판단 표현 빈도</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">각 기사에서 가치 판단 표현 개수 카운트</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">전체 문장 수 대비 비율로 정규화 (0-100 척도)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">매체별 평균 계산</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">전체 매체 평균과의 편차 산출</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3 text-gray-900 dark:text-gray-100">⚙️ 가중치 및 보정</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span>기사의 길이, 장르(단신/심층)에 따른 가중치 적용</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span>이상치(outlier) 제거를 통한 결과 안정화</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <span>최소 분석 대상 기사 수 미달 시 신뢰도 하락 표시</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Limitations */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-7 h-7 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-gray-100">한계 및 주의사항</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-5 border border-orange-200 dark:border-orange-800">
            <h3 className="mb-2 text-orange-900 dark:text-orange-100 font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              맥락 이해의 한계
            </h3>
            <p className="text-sm text-orange-900/90 dark:text-orange-100/90">
              AI는 아이러니, 반어법, 문화적 맥락을 완벽히 이해하지 못합니다. 비꼬는 표현이 오분석될 수 있습니다.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-5 border border-orange-200 dark:border-orange-800">
            <h3 className="mb-2 text-orange-900 dark:text-orange-100 font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              인용문 처리
            </h3>
            <p className="text-sm text-orange-900/90 dark:text-orange-100/90">
              복잡한 문장 구조에서 인용문과 직접 서술을 완벽히 구분하기 어려울 수 있습니다.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-5 border border-orange-200 dark:border-orange-800">
            <h3 className="mb-2 text-orange-900 dark:text-orange-100 font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              정량화의 한계
            </h3>
            <p className="text-sm text-orange-900/90 dark:text-orange-100/90">
              표현의 미묘한 뉘앙스를 수치로 완전히 담아낼 수 없습니다. 같은 점수라도 기사마다 다른 의미를 가집니다.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-5 border border-orange-200 dark:border-orange-800">
            <h3 className="mb-2 text-orange-900 dark:text-orange-100 font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              표본 편향
            </h3>
            <p className="text-sm text-orange-900/90 dark:text-orange-100/90">
              특정 기간이나 주제에 따라 결과가 달라질 수 있습니다. 단기 분석은 특정 이슈의 영향을 받습니다.
            </p>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-5 border border-orange-200 dark:border-orange-800 md:col-span-2">
            <h3 className="mb-2 text-orange-900 dark:text-orange-100 font-semibold flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              인과관계 아님
            </h3>
            <p className="text-sm text-orange-900/90 dark:text-orange-100/90">
              높은 수치가 의도적 편향을 의미하지 않습니다. 매체의 독자층, 편집 방침, 장르 특성 등 다양한 요인이 작용합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Continuous Improvement */}
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 dark:from-gray-900 dark:to-purple-950 rounded-2xl p-8 md:p-12 text-center mb-12">
        <Brain className="w-12 h-12 text-purple-300 mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl mb-4 text-white">
          지속적인 개선
        </h2>
        <p className="text-lg text-purple-100 mb-4 max-w-2xl mx-auto leading-relaxed">
          BiasLens는 완벽하지 않습니다. 사용자 피드백과 전문가 검토를 통해 
          분석 방법론을 지속적으로 개선하고 있습니다.
        </p>
        <p className="text-purple-200">
          분석 결과에 대한 의견이나 개선 제안이 있다면 언제든지 알려주세요.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
        >
          ← BiasLens 서비스 소개로 돌아가기
        </Link>
      </div>
    </div>
  );
}
