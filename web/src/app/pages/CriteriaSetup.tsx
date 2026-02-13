import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Check, Info, ArrowRight } from 'lucide-react';
import { useCriteria } from '../../domains/criteria/state/CriteriaContext';

export function CriteriaSetup() {
  const { criteria, toggleCriteria, hasAnyCriteriaEnabled } = useCriteria();
  const router = useRouter();
  const [hoveredCriteria, setHoveredCriteria] = useState<string | null>(null);

  const handleStartAnalysis = () => {
    if (hasAnyCriteriaEnabled) {
      router.push('/dashboard');
    }
  };

  const handleSave = () => {
    updateMultipleCriteria(localCriteria);
    alert('기준 설정이 저장되었습니다.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl mb-4 text-gray-900 dark:text-gray-100">표현 기준 선택</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          뉴스 표현을 비교할 기준을 선택해주세요. 여러 개를 선택할 수 있습니다.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900 dark:text-blue-100">
          <p className="mb-1">
            각 기준은 표현의 특정 측면을 분석합니다. 선택한 기준에 따라 매체별 표현 패턴의 차이를 확인할 수 있습니다.
          </p>
          <p>
            기준 선택은 언제든지 변경할 수 있으며, 이는 분석 결과에 즉시 반영됩니다.
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {criteria.map((criterion) => (
          <div
            key={criterion.id}
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-all cursor-pointer ${
              criterion.enabled
                ? 'border-blue-500 dark:border-blue-400 shadow-md'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
            onClick={() => toggleCriteria(criterion.id)}
            onMouseEnter={() => setHoveredCriteria(criterion.id)}
            onMouseLeave={() => setHoveredCriteria(null)}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  criterion.enabled
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {criterion.enabled && <Check className="w-4 h-4 text-white" />}
              </div>

              <div className="flex-1">
                <h3 className="text-lg mb-2 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  {criterion.name}
                  {hoveredCriteria === criterion.id && (
                    <Info className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{criterion.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">선택된 기준</p>
            <p className="text-2xl text-gray-900 dark:text-gray-100">
              {criteria.filter((c) => c.enabled).length} / {criteria.length}
            </p>
          </div>

          <button
            onClick={handleStartAnalysis}
            disabled={!hasAnyCriteriaEnabled}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              hasAnyCriteriaEnabled
                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            이 기준으로 분석 시작
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {!hasAnyCriteriaEnabled && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            최소 1개 이상의 기준을 선택해주세요
          </p>
        )}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>선택한 기준은 대시보드에서 언제든지 변경할 수 있습니다</p>
      </div>
    </div>
  );
}