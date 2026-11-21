import { useState, useMemo } from 'react';
import { Check, RotateCcw } from 'lucide-react';
import {
  SYNERGY_INGREDIENTS,
  SYNERGY_PRESETS,
  type SynergyIngredient,
} from '../data/gopchangData';
import { EditorialImage } from './EditorialImage';

const DEFAULT_SELECTED = ['buchu', 'kkaennip', 'garlic-scallion', 'radish-cabbage'];

export function PotSynergyExplorer() {
  const [selectedIds, setSelectedIds] = useState<string[]>(DEFAULT_SELECTED);
  const [focusedIngredientId, setFocusedIngredientId] = useState<string>('buchu');

  const toggleIngredient = (id: string) => {
    setSelectedIds((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((item) => item !== id) : [...prev, id];
      return next;
    });
    setFocusedIngredientId(id);
  };

  const applyPreset = (ingredientIds: string[]) => {
    setSelectedIds(ingredientIds);
    if (ingredientIds.length > 0) {
      setFocusedIngredientId(ingredientIds[0]);
    }
  };

  const selectedIngredients = useMemo(
    () => SYNERGY_INGREDIENTS.filter((item) => selectedIds.includes(item.id)),
    [selectedIds]
  );

  const focusedIngredient: SynergyIngredient = useMemo(() => {
    return (
      SYNERGY_INGREDIENTS.find((item) => item.id === focusedIngredientId) ??
      SYNERGY_INGREDIENTS[0]
    );
  }, [focusedIngredientId]);

  const metrics = useMemo(() => {
    if (selectedIngredients.length === 0) {
      return {
        fiber: 0,
        antioxidant: 0,
        digestive: 0,
        lipidBalance: 0,
        vegRatioLabel: '채소 미선택',
      };
    }
    const clamp = (val: number) => Math.min(100, val);
    const fiber = clamp(
      selectedIngredients.reduce((sum, i) => sum + i.fiberScore, 0)
    );
    const antioxidant = clamp(
      selectedIngredients.reduce((sum, i) => sum + i.antioxidantScore, 0)
    );
    const digestive = clamp(
      selectedIngredients.reduce((sum, i) => sum + i.digestiveScore, 0)
    );
    const lipidBalance = clamp(
      selectedIngredients.reduce((sum, i) => sum + i.lipidBalanceScore, 0)
    );
    const ratio = (0.6 + selectedIngredients.length * 0.35).toFixed(1);
    return {
      fiber,
      antioxidant,
      digestive,
      lipidBalance,
      vegRatioLabel: `채소 ${ratio} : 곱창 1`,
    };
  }, [selectedIngredients]);

  return (
    <section id="synergy" className="border-t border-stone-200 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-8 border-b border-stone-200 pb-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wider text-stone-500">
              제2장 · 전골 냄비 속 영양 시너지 설계
            </p>
            <h2 className="font-editorial mt-2 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl text-balance">
              구이가 아닌 ‘전골’이기에 완성되는 채소와의 균형
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone-600">
              곱창만 먹으면 포화지방과 콜레스테롤이 과해질 수 있지만, 전골
              냄비 속에 부추·깻잎·무·버섯·들깨가루가 더해지면 생리활성 물질이
              서로의 흡수와 배출을 조율합니다. 아래 재료를 직접 조합해 영양
              상호작용을 확인해 보세요.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:col-span-5 lg:justify-end">
            {SYNERGY_PRESETS.map((preset) => {
              const isCurrent =
                preset.ingredientIds.length === selectedIds.length &&
                preset.ingredientIds.every((id) => selectedIds.includes(id));
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => applyPreset(preset.ingredientIds)}
                  className={`min-h-[40px] whitespace-nowrap shrink-0 rounded-md border px-3.5 py-2 text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412] ${
                    isCurrent
                      ? 'border-[#9A3412] bg-[#9A3412] text-white'
                      : 'border-stone-300 bg-[#FBF9F5] text-stone-700 hover:border-stone-400 hover:text-stone-900'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => applyPreset(DEFAULT_SELECTED)}
              aria-label="기본 배합으로 초기화"
              className="inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap shrink-0 rounded-md border border-stone-200 bg-stone-100 px-3 py-2 text-xs font-medium text-stone-600 transition-colors hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-[#9A3412]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              초기화
            </button>
          </div>
        </div>

        {/* Interactive Two-Column Workbench */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: Ingredient Selector + Live Synergy Report (7 cols) */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-stone-900">
                  전골 부재료 선택 ({selectedIds.length} / {SYNERGY_INGREDIENTS.length}종)
                </h3>
                <span className="font-data text-xs text-stone-500 tabular-nums">
                  권장 비율 {metrics.vegRatioLabel}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {SYNERGY_INGREDIENTS.map((item) => {
                  const isSelected = selectedIds.includes(item.id);
                  const isFocused = focusedIngredient.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleIngredient(item.id)}
                      onMouseEnter={() => setFocusedIngredientId(item.id)}
                      className={`flex min-h-[52px] items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412] ${
                        isSelected
                          ? 'border-stone-800 bg-[#F5F1EA] text-stone-900'
                          : 'border-stone-200 bg-[#FBF9F5] text-stone-600 hover:border-stone-300'
                      } ${isFocused ? 'ring-1 ring-stone-400/50' : ''}`}
                    >
                      <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-stone-900">
                          {item.name}
                        </div>
                        <div className="truncate text-xs text-stone-500">
                          {item.roleLabel}
                        </div>
                      </div>
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          isSelected
                            ? 'border-[#9A3412] bg-[#9A3412] text-white'
                            : 'border-stone-300 bg-white text-transparent'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Synergy Analysis Bars */}
            <div className="rounded-lg border border-stone-200 bg-[#F5F1EA]/60 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-stone-200 pb-3">
                <h3 className="text-sm font-semibold text-stone-900">
                  현재 조합의 영양 보완 지수
                </h3>
                <span className="text-xs text-stone-500">
                  선택한 부재료 {selectedIds.length}종 합산 기준
                </span>
              </div>

              {selectedIngredients.length === 0 ? (
                <p className="py-6 text-sm text-stone-600">
                  최소 1가지 이상의 채소나 부재료를 선택하면 곱창의 지질과
                  단백질을 보완하는 시너지 분석이 표시됩니다.
                </p>
              ) : (
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      label: '콜레스테롤 · 지질 균형',
                      value: metrics.lipidBalance,
                      desc: '포화지방 완충 및 담즙산 배출',
                    },
                    {
                      label: '소화 효소 · 위장 보호',
                      value: metrics.digestive,
                      desc: '단백질·지방 분해 및 점막 진정',
                    },
                    {
                      label: '항산화 · 대사 활성',
                      value: metrics.antioxidant,
                      desc: '비타민 B군 흡수율 및 세포 보호',
                    },
                    {
                      label: '식이섬유 · 장내 정화',
                      value: metrics.fiber,
                      desc: '포만감 형성 및 유해 물질 흡착',
                    },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="font-medium text-stone-800">
                          {stat.label}
                        </span>
                        <span className="font-data font-semibold text-[#9A3412] tabular-nums">
                          {stat.value}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-stone-200">
                        <div
                          className="h-full rounded-full bg-[#9A3412] transition-all duration-200"
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                      <p className="mt-1 text-[11px] text-stone-500">
                        {stat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Active Ingredient Mechanism Detail */}
            <div className="rounded-lg border border-stone-200 bg-[#FBF9F5] p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-[#9A3412]">
                  {focusedIngredient.name}
                </span>
                <span aria-hidden="true">·</span>
                <span>{focusedIngredient.bioactiveCompound}</span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
                {focusedIngredient.synergyMechanism}
              </p>
              <p className="mt-3 border-t border-stone-200 pt-3 text-xs leading-relaxed text-stone-600">
                <strong className="font-semibold text-stone-800">
                  조리 포인트:
                </strong>{' '}
                {focusedIngredient.culinaryTip}
              </p>
            </div>
          </div>

          {/* Right: Curated Ingredients Visual Plate (5 cols) */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <EditorialImage
              src="/src/assets/images/herbs_synergy_table_1795269212944.jpg"
              alt="부추, 깻잎, 통마늘, 무, 표고버섯, 들깨가루 등 한식 곱창전골 부재료 정물"
              figureNumber="Fig. 2"
              caption="곱창의 헴철과 비타민 B군 흡수를 극대화하고 지질 균형을 맞추는 한식 부재료 6선 (한지 위 자연광 촬영)."
            />

            <div className="rounded-lg border border-stone-200 bg-[#F5F1EA]/70 p-6">
              <p className="text-xs font-medium text-stone-500">
                영양학적 배합 원리
              </p>
              <h4 className="font-editorial mt-1.5 text-lg font-bold text-stone-900">
                왜 채소를 곱창보다 먼저, 많이 넣어야 할까
              </h4>
              <p className="mt-2.5 text-xs leading-[1.8] text-stone-600">
                육류 내장만 단독 섭취할 경우 식이섬유와 비타민 C가 결핍되기
                쉽습니다. 그러나 전골 육수에 무·버섯·우거지를 먼저 우리고
                먹기 직전 깻잎과 부추를 얹으면, 수용성 비타민과 식이섬유가
                육수 속 콜라겐과 어우러져 콜레스테롤 흡수는 낮추고 포만감과
                미량 영양소 이용률은 크게 끌어올립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
