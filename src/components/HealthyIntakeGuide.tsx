import { useState } from 'react';
import { INTAKE_PROFILES } from '../data/gopchangData';

export function HealthyIntakeGuide() {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(
    INTAKE_PROFILES[0].id
  );

  const activeProfile =
    INTAKE_PROFILES.find((p) => p.id === selectedProfileId) ??
    INTAKE_PROFILES[0];

  return (
    <section id="guide" className="border-t border-stone-200 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-wider text-stone-500">
            제4장 · 컨디션별 건강 섭취 처방
          </p>
          <h2 className="font-editorial mt-2 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl text-balance">
            더 가볍고 이롭게 곱창전골을 즐기는 법
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
            영양이 풍부한 음식일수록 개인의 건강 상태와 식사 목적에 맞는
            섭취 순서와 국물 양 조절이 중요합니다. 현재 컨디션을 선택해 맞춤
            섭취 가이드를 확인하세요.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="건강 컨디션 선택"
        >
          {INTAKE_PROFILES.map((profile) => {
            const isActive = profile.id === activeProfile.id;
            return (
              <button
                key={profile.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedProfileId(profile.id)}
                className={`min-h-[44px] whitespace-nowrap shrink-0 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412] ${
                  isActive
                    ? 'border-[#9A3412] bg-[#9A3412] text-white'
                    : 'border-stone-300 bg-[#FBF9F5] text-stone-700 hover:border-stone-400 hover:text-stone-900'
                }`}
              >
                {profile.label}
              </button>
            );
          })}
        </div>

        {/* Active Profile Prescription Card */}
        <div className="mt-6 grid grid-cols-1 gap-8 rounded-lg border border-stone-200 bg-[#F5F1EA]/60 p-6 md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#9A3412]">
              맞춤 섭취 전략 · {activeProfile.label}
            </p>
            <h3 className="font-editorial mt-2 text-xl font-bold leading-snug text-stone-900">
              {activeProfile.summary}
            </h3>

            <dl className="mt-6 divide-y divide-stone-200 border-y border-stone-200 text-sm">
              <div className="py-3.5">
                <dt className="text-xs font-medium text-stone-500">
                  권장 채소 · 곱창 비율
                </dt>
                <dd className="mt-1 font-semibold text-stone-900">
                  {activeProfile.vegToTripeRatio}
                </dd>
              </div>
              <div className="py-3.5">
                <dt className="text-xs font-medium text-stone-500">
                  국물 섭취 적정량
                </dt>
                <dd className="mt-1 font-semibold text-stone-900">
                  {activeProfile.brothLimit}
                </dd>
              </div>
              <div className="py-3.5">
                <dt className="text-xs font-medium text-stone-500">
                  추천 곁들임 · 후식 차
                </dt>
                <dd className="mt-1 font-semibold text-stone-900">
                  {activeProfile.recommendedPairing}
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-7 lg:pl-4">
            <div>
              <h4 className="text-sm font-semibold text-stone-900">
                권장 식사 순서 (3단계)
              </h4>
              <ol className="mt-4 space-y-4">
                {activeProfile.eatingOrder.map((step, index) => (
                  <li key={step} className="flex items-start gap-3.5">
                    <span className="font-data flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-[#FBF9F5] text-xs font-semibold text-[#9A3412] tabular-nums">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-stone-700">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-md border border-stone-200 bg-[#FBF9F5] p-4">
              <p className="text-xs font-semibold text-stone-800">
                유의사항 (적정 섭취 가이드)
              </p>
              <p className="mt-1 text-xs leading-relaxed text-stone-600">
                {activeProfile.cautionNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
