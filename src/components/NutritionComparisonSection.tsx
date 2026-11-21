import { useState, useMemo } from 'react';
import { ArrowUpDown } from 'lucide-react';
import {
  BENEFIT_PILLARS,
  CUT_NUTRITION_DATA,
  type BenefitCategory,
  type CutNutritionRow,
} from '../data/gopchangData';

interface NutritionComparisonSectionProps {
  onSelectFootnote: (footnoteNum: number) => void;
}

const FILTER_OPTIONS: { id: BenefitCategory; label: string }[] = [
  { id: 'all', label: '전체 효능' },
  { id: 'protein', label: '단백질·콜라겐' },
  { id: 'vitamins', label: '비타민 B군' },
  { id: 'minerals', label: '철분·아연' },
  { id: 'warming', label: '온열·소화' },
];

type SortKey = 'proteinG' | 'ironMg' | 'vitaminB12Ug' | 'caloriesKcal';

export function NutritionComparisonSection({
  onSelectFootnote,
}: NutritionComparisonSectionProps) {
  const [activeFilter, setActiveFilter] = useState<BenefitCategory>('all');
  const [sortKey, setSortKey] = useState<SortKey>('proteinG');
  const [sortAsc, setSortAsc] = useState(false);

  const visiblePillars = useMemo(() => {
    if (activeFilter === 'all') return BENEFIT_PILLARS;
    return BENEFIT_PILLARS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const sortedCuts = useMemo(() => {
    const copy = [...CUT_NUTRITION_DATA];
    copy.sort((a: CutNutritionRow, b: CutNutritionRow) => {
      const diff = a[sortKey] - b[sortKey];
      return sortAsc ? diff : -diff;
    });
    return copy;
  }, [sortKey, sortAsc]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortAsc((prev) => !prev);
    } else {
      setSortKey(key);
      setSortAsc(key === 'caloriesKcal');
    }
  };

  return (
    <section
      id="nutrition"
      className="border-t border-stone-200 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 border-b border-stone-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider text-stone-500">
              제1장 · 생리활성 및 영양 성분 분석
            </p>
            <h2 className="font-editorial mt-2 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl text-balance">
              곱창전골이 신체에 유익한 4가지 과학적 근거
            </h2>
          </div>

          {/* Segmented Filter Control */}
          <div
            className="flex flex-wrap items-center gap-1 rounded-lg border border-stone-200 bg-stone-100/80 p-1"
            role="tablist"
            aria-label="영양 효능 분류 필터"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.id)}
                  className={`min-h-[40px] whitespace-nowrap shrink-0 rounded-md px-3.5 py-2 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412] ${
                    isActive
                      ? 'bg-[#FBF9F5] text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial 70/30 Asymmetric Reading Canvas */}
        <div className="mt-10 divide-y divide-stone-200">
          {visiblePillars.map((pillar) => (
            <article
              key={pillar.id}
              className="grid grid-cols-1 gap-8 py-10 first:pt-2 lg:grid-cols-12 lg:gap-12"
            >
              {/* Main Essay Column (8 cols) */}
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                  <span className="font-data font-medium text-[#9A3412]">
                    {pillar.indexLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{pillar.categoryLabel}</span>
                </div>

                <h3 className="font-editorial mt-2.5 text-xl font-bold leading-snug text-stone-900 md:text-2xl text-balance">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-base font-medium leading-relaxed text-stone-800">
                  {pillar.lead}
                </p>

                <p className="mt-4 max-w-prose text-[15px] leading-[1.8] text-stone-600">
                  {pillar.body}
                  <button
                    type="button"
                    onClick={() => onSelectFootnote(pillar.footnoteRef)}
                    aria-label={`참고 문헌 주석 ${pillar.footnoteRef}번 보기`}
                    className="font-data ml-1 inline-flex min-h-[24px] items-center px-1 text-xs font-semibold text-[#9A3412] underline decoration-[#9A3412]/40 underline-offset-2 hover:text-[#7C2D12] focus-visible:outline-2 focus-visible:outline-[#9A3412]"
                  >
                    [{pillar.footnoteRef}]
                  </button>
                </p>
              </div>

              {/* Margin Note & Claim-Adjacent Metric Rail (4 cols) */}
              <aside className="flex flex-col justify-between rounded-lg border border-stone-200 bg-[#F5F1EA]/70 p-6 lg:col-span-4">
                <div>
                  <p className="text-xs font-medium text-stone-500">
                    핵심 지표
                  </p>
                  <p className="font-data mt-1 text-2xl font-medium tracking-tight text-stone-900 tabular-nums">
                    {pillar.evidenceMetric}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">
                    {pillar.evidenceContext}
                  </p>
                </div>

                <div className="mt-6 border-t border-stone-200/80 pt-4">
                  <p className="text-xs font-semibold text-stone-800">
                    {pillar.marginNoteTitle}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
                    {pillar.marginNoteBody}
                  </p>
                </div>
              </aside>
            </article>
          ))}
        </div>

        {/* Cut & Dish Nutritional Comparison Table */}
        <div className="mt-12 rounded-lg border border-stone-200 bg-[#F5F1EA]/50 p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium text-stone-500">
                부위 및 조리 형태별 영양 성분 대조표
              </p>
              <h3 className="font-editorial mt-1 text-lg font-bold text-stone-900 md:text-xl">
                곱창·대창·양과 채소 배합 전골의 영양 비교
              </h3>
            </div>
            <p className="text-xs text-stone-500">
              열 제목을 클릭하여 성분별 순위를 정렬할 수 있습니다
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stone-300 text-xs font-medium text-stone-600">
                  <th className="py-3 pr-4">부위 / 메뉴</th>
                  <th className="px-3 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleSort('proteinG')}
                      className="inline-flex min-h-[36px] items-center gap-1 whitespace-nowrap font-medium text-stone-700 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-[#9A3412]"
                    >
                      단백질 (g)
                      <ArrowUpDown className="h-3.5 w-3.5 text-stone-400" />
                    </button>
                  </th>
                  <th className="px-3 py-3 text-right whitespace-nowrap">
                    지방 (g)
                  </th>
                  <th className="px-3 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleSort('ironMg')}
                      className="inline-flex min-h-[36px] items-center gap-1 whitespace-nowrap font-medium text-stone-700 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-[#9A3412]"
                    >
                      철분 (mg)
                      <ArrowUpDown className="h-3.5 w-3.5 text-stone-400" />
                    </button>
                  </th>
                  <th className="px-3 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleSort('vitaminB12Ug')}
                      className="inline-flex min-h-[36px] items-center gap-1 whitespace-nowrap font-medium text-stone-700 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-[#9A3412]"
                    >
                      비타민 B12 (µg)
                      <ArrowUpDown className="h-3.5 w-3.5 text-stone-400" />
                    </button>
                  </th>
                  <th className="px-3 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleSort('caloriesKcal')}
                      className="inline-flex min-h-[36px] items-center gap-1 whitespace-nowrap font-medium text-stone-700 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-[#9A3412]"
                    >
                      열량 (kcal)
                      <ArrowUpDown className="h-3.5 w-3.5 text-stone-400" />
                    </button>
                  </th>
                  <th className="py-3 pl-4">영양학적 특징</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80">
                {sortedCuts.map((row) => {
                  const isJeongol = row.id === 'jeongol-serving';
                  return (
                    <tr
                      key={row.id}
                      className={
                        isJeongol ? 'bg-[#FBF9F5] font-medium' : undefined
                      }
                    >
                      <td className="py-4 pr-4">
                        <div className="font-medium text-stone-900">
                          {row.name}
                        </div>
                        <div className="mt-0.5 text-xs text-stone-500">
                          {row.portionLabel}
                        </div>
                      </td>
                      <td className="font-data px-3 py-4 text-right text-stone-900 tabular-nums">
                        {row.proteinG.toFixed(1)}
                      </td>
                      <td className="font-data px-3 py-4 text-right text-stone-600 tabular-nums">
                        {row.fatG.toFixed(1)}
                      </td>
                      <td className="font-data px-3 py-4 text-right text-stone-900 tabular-nums">
                        {row.ironMg.toFixed(1)}
                      </td>
                      <td className="font-data px-3 py-4 text-right text-[#9A3412] tabular-nums">
                        {row.vitaminB12Ug.toFixed(1)}
                      </td>
                      <td className="font-data px-3 py-4 text-right text-stone-700 tabular-nums">
                        {row.caloriesKcal}
                      </td>
                      <td className="py-4 pl-4 text-xs leading-relaxed text-stone-600">
                        {row.characteristic}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
