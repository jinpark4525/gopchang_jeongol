import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { HERO_METRICS } from './data/gopchangData';
import { EditorialImage } from './components/EditorialImage';
import { NutritionComparisonSection } from './components/NutritionComparisonSection';
import { PotSynergyExplorer } from './components/PotSynergyExplorer';
import { TraditionalScienceSection } from './components/TraditionalScienceSection';
import { HealthyIntakeGuide } from './components/HealthyIntakeGuide';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [highlightedFootnote, setHighlightedFootnote] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const next = Math.min(1, Math.max(0, window.scrollY / docHeight));
      setScrollProgress(next);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectFootnote = (footnoteNum: number) => {
    setHighlightedFootnote(footnoteNum);
    scrollToSection('footnotes');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900">
      {/* Top Bar: Strict 3-zone contract */}
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#FBF9F5]/95 backdrop-blur-xs">
        <div
          aria-hidden="true"
          className="h-[2px] w-full origin-left bg-[#9A3412] transition-transform duration-100"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-3.5 lg:px-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="font-editorial text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A3412]"
          >
            한식영양도감
          </a>

          {/* Zone 2: 4 concise single-line text nav links */}
          <nav
            aria-label="주요 섹션 이동"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600"
          >
            <a
              href="#nutrition"
              className="underline-offset-4 hover:text-stone-950 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              영양 성분
            </a>
            <a
              href="#synergy"
              className="underline-offset-4 hover:text-stone-950 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              시너지 재료
            </a>
            <a
              href="#tradition"
              className="underline-offset-4 hover:text-stone-950 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              전통 문헌
            </a>
            <a
              href="#guide"
              className="underline-offset-4 hover:text-stone-950 hover:underline transition-colors whitespace-nowrap shrink-0"
            >
              건강 섭취법
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('synergy')}
              className="min-h-[40px] whitespace-nowrap shrink-0 rounded-md bg-[#9A3412] px-4 py-2 text-xs font-medium text-white transition-colors duration-150 hover:bg-[#7C2D12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
            >
              맞춤 전골 조합
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero Section: Editorial Split + 4-Column Summary Strip */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
              {/* Left Narrative Column */}
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500">
                    <span>식문화 영양 기획특집</span>
                    <span aria-hidden="true">·</span>
                    <span>제4호</span>
                    <span aria-hidden="true">·</span>
                    <span>보양과 균형의 미학</span>
                  </div>

                  <h1 className="font-editorial mt-4 text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.18] tracking-tight text-stone-900 text-balance">
                    곱창전골이
                    <br />
                    몸에 좋은 이유
                  </h1>

                  <p className="mt-4 text-lg font-medium leading-relaxed text-stone-800 text-balance">
                    뚝배기 속에 담긴 콜라겐 단백질, 고농축 비타민 B12, 그리고
                    한식 채소가 완성하는 영양 시너지
                  </p>

                  <p className="mt-5 max-w-prose text-[15px] leading-[1.8] text-stone-600">
                    곱창은 흔히 기름진 술안주로만 여겨지지만, 실은 결합조직
                    단백질과 조혈 미네랄이 응축된 보양 식재료입니다. 특히
                    직화 구이가 아닌 ‘전골’로 끓여 부추·깻잎·무·버섯·들깨가루를
                    더할 때, 지방 부담은 덜어내고 생체이용률은 극대화되는
                    완전한 한식의 영양 균형이 완성됩니다.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-stone-200 pt-6">
                  <button
                    type="button"
                    onClick={() => scrollToSection('nutrition')}
                    className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-md bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
                  >
                    영양 근거 살펴보기
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('guide')}
                    className="min-h-[44px] whitespace-nowrap shrink-0 px-3 py-2 text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-950 hover:decoration-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412]"
                  >
                    컨디션별 섭취 가이드
                  </button>
                </div>
              </div>

              {/* Right Visual Plate Column */}
              <div className="flex flex-col lg:col-span-6">
                <EditorialImage
                  src="/src/assets/images/hero_gopchang_jeongol_1795269213541.jpg"
                  alt="부추와 깻잎, 버섯을 듬뿍 올려 보글보글 끓여낸 한식 곱창전골"
                  figureNumber="Fig. 1"
                  caption="전골 냄비 속에서 채소의 식이섬유·황화합물과 어우러져 끓고 있는 소곱창전골."
                  priority
                  className="h-full"
                  imgClassName="aspect-[4/3] lg:h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Full-Width 4-Column Nutritional Fact Strip */}
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="bg-[#F5F1EA]/80 p-6">
                  <p className="text-xs font-medium text-stone-500">
                    {metric.label}
                  </p>
                  <p className="font-data mt-2 text-2xl font-medium tracking-tight text-stone-900 tabular-nums">
                    {metric.value}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter 1: 4 Core Benefits & Cut Comparison Table */}
        <NutritionComparisonSection onSelectFootnote={handleSelectFootnote} />

        {/* Chapter 2: Interactive Jeongol Pot Synergy Explorer */}
        <PotSynergyExplorer />

        {/* Chapter 3: Traditional Literature & Wet-Heat Cooking Science */}
        <TraditionalScienceSection
          highlightedFootnote={highlightedFootnote}
          onSelectFootnote={setHighlightedFootnote}
        />

        {/* Chapter 4: Personalized Healthy Consumption Guide */}
        <HealthyIntakeGuide />
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-stone-200 bg-[#F5F1EA]/50 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="font-editorial text-base font-bold text-stone-900">
              한식영양도감
            </p>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              본 도감의 영양 수치는 국가표준식품성분표 및 식품영양학 문헌을
              바탕으로 구성된 일반적 참고 정보이며, 고지혈증·통풍 등 기저
              질환이 있는 경우 전문의와 상의하여 섭취량을 조절하시기 바랍니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-stone-600">
            <a href="#nutrition" className="hover:text-stone-900">
              영양 성분
            </a>
            <a href="#synergy" className="hover:text-stone-900">
              시너지 재료
            </a>
            <a href="#tradition" className="hover:text-stone-900">
              전통 문헌
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="inline-flex min-h-[36px] items-center gap-1.5 text-stone-700 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-[#9A3412]"
            >
              맨 위로
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
