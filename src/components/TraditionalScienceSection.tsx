import { FOOTNOTES } from '../data/gopchangData';
import { EditorialImage } from './EditorialImage';

interface TraditionalScienceSectionProps {
  highlightedFootnote: number | null;
  onSelectFootnote: (num: number | null) => void;
}

export function TraditionalScienceSection({
  highlightedFootnote,
  onSelectFootnote,
}: TraditionalScienceSectionProps) {
  return (
    <section
      id="tradition"
      className="border-t border-stone-200 bg-[#F5F1EA]/45 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Visual Column (5 cols) */}
          <div className="lg:col-span-5">
            <EditorialImage
              src="/src/assets/images/traditional_broth_detail_1795269213686.jpg"
              alt="대추, 생강, 마늘, 대파를 넣고 뚝배기에 은근히 끓여내는 곱창전골 육수"
              figureNumber="Fig. 3"
              caption="대추·생강·통마늘을 함께 달여낸 전골 육수. 습열 조리는 단백질 변성을 완화하고 향신 성분을 용출시킨다."
            />
          </div>

          {/* Right Essay Column (7 cols) */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wider text-stone-500">
              제3장 · 고문헌의 지혜와 현대 조리과학
            </p>
            <h2 className="font-editorial mt-2 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl text-balance">
              《동의보감》의 보양론과 습열 조리의 과학
            </h2>

            <p className="mt-5 max-w-prose text-[15px] leading-[1.85] text-stone-700 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-['Noto_Serif_KR'] first-letter:text-4xl first-letter:font-bold first-letter:leading-none first-letter:text-[#9A3412]">
              예로부터 한식에서 내장 요리는 단순한 별미를 넘어 쇠약해진 기력을
              보충하는 실용적 보양식으로 대접받았습니다. 조선 시대의 의서
              《동의보감》 탕액편에서는 소의 위와 장을 일컬어 “성질이 평하고
              맛이 달며 독이 없어 오장을 보하고 비위(脾胃)를 튼튼하게 한다”고
              기록했습니다. 추운 계절이나 큰 병을 앓은 뒤 따뜻한 국물에 고아
              먹던 풍습은 오늘날 곱창전골의 원형으로 이어졌습니다.
            </p>

            {/* Centered Pull Quote with Hairline Dividers (No thick left bar) */}
            <blockquote className="my-8 border-y border-stone-300 py-6 text-center">
              <p className="font-editorial text-lg italic leading-relaxed text-stone-800 md:text-xl text-balance">
                “직화 구이의 고온 산화를 피하고, 육수 속에서 채소와 함께 100°C
                내외로 끓여내는 전골 방식이야말로 내장 단백질의 소화율과
                영양 보존율을 가장 높이는 조리법이다.”
              </p>
            </blockquote>

            <p className="max-w-prose text-[15px] leading-[1.85] text-stone-700">
              조리과학의 시선으로 보더라도 탕·전골 방식은 탁월합니다. 200°C를
              넘나드는 불판 위에서 기름이 타며 생성되는 산화 지질이나
              최종당화산물(AGEs)이 억제되며, 마늘·생강·대추·고춧가루 같은
              한식 향신료의 폴리페놀 성분이 국물에 녹아들어 지질 산패를
              방지합니다. 또한 1차 초벌로 기름기와 불순물을 걷어낸 뒤 채소
              육수에 끓여내므로, 포만감은 높고 위장 부담은 줄어든 따뜻한 한
              끼가 완성됩니다.
            </p>

            {/* Institutional Footnotes */}
            <div
              id="footnotes"
              className="mt-10 border-t border-stone-200 pt-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold tracking-wider text-stone-700">
                  문헌 및 영양 데이터 출처 주석
                </h3>
                {highlightedFootnote !== null && (
                  <button
                    type="button"
                    onClick={() => onSelectFootnote(null)}
                    className="text-xs text-stone-500 underline hover:text-stone-900"
                  >
                    강조 해제
                  </button>
                )}
              </div>

              <ol className="mt-4 space-y-3">
                {FOOTNOTES.map((note) => {
                  const isHighlighted = highlightedFootnote === note.number;
                  return (
                    <li
                      key={note.number}
                      className={`rounded-md px-3 py-2 text-xs leading-relaxed transition-colors ${
                        isHighlighted
                          ? 'bg-[#9A3412]/10 text-stone-900'
                          : 'text-stone-600'
                      }`}
                    >
                      <span className="font-data mr-2 font-semibold text-[#9A3412]">
                        [{note.number}]
                      </span>
                      <span className="font-semibold text-stone-800">
                        {note.source}
                      </span>{' '}
                      <span aria-hidden="true">·</span> {note.detail}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
