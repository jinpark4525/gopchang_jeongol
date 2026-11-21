export type BenefitCategory =
  | 'all'
  | 'protein'
  | 'vitamins'
  | 'minerals'
  | 'warming';

export interface BenefitPillar {
  id: string;
  indexLabel: string;
  category: Exclude<BenefitCategory, 'all'>;
  categoryLabel: string;
  title: string;
  lead: string;
  body: string;
  evidenceMetric: string;
  evidenceContext: string;
  footnoteRef: number;
  marginNoteTitle: string;
  marginNoteBody: string;
}

export interface CutNutritionRow {
  id: string;
  name: string;
  portionLabel: string;
  proteinG: number;
  fatG: number;
  ironMg: number;
  vitaminB12Ug: number;
  zincMg: number;
  caloriesKcal: number;
  characteristic: string;
}

export interface SynergyIngredient {
  id: string;
  name: string;
  roleLabel: string;
  bioactiveCompound: string;
  synergyMechanism: string;
  culinaryTip: string;
  fiberScore: number;
  antioxidantScore: number;
  digestiveScore: number;
  lipidBalanceScore: number;
}

export interface SynergyPreset {
  id: string;
  label: string;
  description: string;
  ingredientIds: string[];
}

export interface FootnoteItem {
  number: number;
  source: string;
  detail: string;
}

export interface IntakeProfile {
  id: string;
  label: string;
  summary: string;
  brothLimit: string;
  vegToTripeRatio: string;
  eatingOrder: string[];
  recommendedPairing: string;
  cautionNote: string;
}

export const HERO_METRICS = [
  {
    label: '소곱창 100g당 단백질',
    value: '16.4 g',
    note: '필수 아미노산·콜라겐 복합체',
  },
  {
    label: '비타민 B12 함량',
    value: '26.5 µg',
    note: '일일 권장량 대비 1,100% 수준',
  },
  {
    label: '체내 흡수율 높은 헴철',
    value: '2.4 mg',
    note: '식물성 철분 대비 3배 높은 흡수율',
  },
  {
    label: '전골 기본 채소 배합',
    value: '6종 이상',
    note: '알리신·식이섬유·베타카로틴 시너지',
  },
];

export const BENEFIT_PILLARS: BenefitPillar[] = [
  {
    id: 'collagen-protein',
    indexLabel: '01',
    category: 'protein',
    categoryLabel: '단백질 · 결합조직',
    title: '피부 탄력과 관절을 지탱하는 쫄깃한 콜라겐·엘라스틴 단백질',
    lead: '내장의 근육층과 점막하층을 구성하는 결합조직 단백질은 일반 살코기와 다른 아미노산 프로필을 지닙니다.',
    body: '곱창 특유의 쫄깃한 식감은 평활근 섬유와 이를 감싸는 콜라겐(Collagen), 엘라스틴(Elastin)에서 비롯됩니다. 전골처럼 육수에 넣고 은근히 끓여내면 단단했던 결합조직이 젤라틴 형태로 부드럽게 풀리면서 소화 효소의 접근성이 높아집니다. 이때 다량 공급되는 글리신(Glycine)과 프롤린(Proline)은 피부 진피층 재생, 관절 연골 보호, 그리고 장 점막 세포의 회복을 돕는 핵심 아미노산으로 작용합니다.',
    evidenceMetric: '16.4g / 100g',
    evidenceContext: '생 소곱창 기준 단백질 함량 및 젤라틴화 용출',
    footnoteRef: 2,
    marginNoteTitle: '습열 조리의 이점',
    marginNoteBody:
      '직화 구이는 표면이 경화되고 산화된 지질이 남기 쉬운 반면, 전골의 습열 조리는 70°C 이상에서 콜라겐을 가용성 젤라틴으로 전환해 위장 부담을 줄입니다.',
  },
  {
    id: 'vitamin-b-complex',
    indexLabel: '02',
    category: 'vitamins',
    categoryLabel: '비타민 B군 · 에너지 대사',
    title: '세포 에너지 회로를 돌리는 고농축 비타민 B12와 리보플라빈',
    lead: '내장 육류는 탄수화물·지방·단백질을 실제 에너지(ATP)로 전환하는 조효소의 보고입니다.',
    body: '소곱창은 정육(등심·안심)에 비해 비타민 B12(코발라민)와 비타민 B2(리보플라빈), 나이아신(B3) 밀도가 월등히 높습니다. 비타민 B12는 신경세포의 수초를 보호하고 뇌 기능과 집중력을 유지하는 데 필수적이며, 엽산과 협력하여 정상적인 적혈구 성숙을 이끕니다. 여기에 전골 속 대파·마늘·부추의 알리신 성분이 결합하면 지용성 형태인 알리티아민으로 전환되어 만성 피로 회복 효과가 배가됩니다.',
    evidenceMetric: '26.5 µg / 100g',
    evidenceContext: '성인 1일 권장 섭취량(2.4µg)의 10배 이상 밀도',
    footnoteRef: 3,
    marginNoteTitle: '알리티아민 시너지',
    marginNoteBody:
      '비타민 B군만 단독 섭취할 때보다 마늘·부추의 황화합물과 함께 끓여 먹을 때 체내 흡수율과 혈중 체류 시간이 유의미하게 길어집니다.',
  },
  {
    id: 'heme-iron-zinc',
    indexLabel: '03',
    category: 'minerals',
    categoryLabel: '조혈 · 면역 미네랄',
    title: '빈혈 예방과 면역 세포 활성을 돕는 헴철(Heme Iron)과 아연',
    lead: '체내 산소 운반과 백혈구 증식에 관여하는 미량 미네랄이 생체이용률 높은 형태로 담겨 있습니다.',
    body: '동물성 내장 부위에 포함된 철분은 포르피린 고리에 결합된 헴철(Heme Iron) 형태로, 시금치나 콩류의 비헴철보다 장내 흡수율이 2~3배가량 뛰어납니다. 또한 아연(Zinc)은 300여 종 이상의 체내 효소 반응에 관여하며 면역 T세포의 분화와 상처 치유, 미각 유지에 핵심 역할을 합니다. 비타민 C가 풍부한 깻잎·고추·배추와 함께 전골로 섭취하면 철분 흡수율이 한층 안정적으로 유지됩니다.',
    evidenceMetric: '철분 2.4mg · 아연 2.8mg',
    evidenceContext: '100g 기준 · 비타민 C 곁들임 시 흡수 시너지',
    footnoteRef: 2,
    marginNoteTitle: '아연과 기초대사',
    marginNoteBody:
      '아연은 인슐린 합성 및 갑상선 호르몬 대사에도 필수적이어서, 기력이 떨어지기 쉬운 환절기 영양 보충원으로 가치를 지닙니다.',
  },
  {
    id: 'warming-stamina',
    indexLabel: '04',
    category: 'warming',
    categoryLabel: '온열 보양 · 소화 균형',
    title: '비위를 따뜻하게 데우고 혈행을 돋우는 한식 전골의 온열 보양',
    lead: '고문헌이 기록한 보양 효능에 마늘·생강·고춧가루의 열성 향신료가 결합해 체온과 순환을 돕습니다.',
    body: '《동의보감》 탕액편에서는 소의 위와 장이 "오장육부를 보하고 비위(脾胃)를 따뜻하게 하며 기력을 북돋운다"고 서술합니다. 현대 영양학적으로도 따뜻한 육수에 생강·마늘·고춧가루(캡사이신)·후추가 어우러진 곱창전골은 말초 혈관을 확장해 체온을 높이고 소화액 분비를 촉진합니다. 구이보다 수분과 채소 비율이 높아 체내 수분·전해질 균형을 맞추며 속을 든든하게 채우는 데 적합합니다.',
    evidenceMetric: '65°C – 75°C',
    evidenceContext: '소화 효소 활성화 및 말초 순환을 돕는 적정 국물 온도',
    footnoteRef: 1,
    marginNoteTitle: '구이 대비 전골의 강점',
    marginNoteBody:
      '불판에 직접 굽는 방식은 과도한 가열로 벤조피렌이나 당화독소(AGEs)가 늘 수 있으나, 국물 요리인 전골은 조리 온도가 100°C 내외로 제어되어 유해 물질 생성을 억제합니다.',
  },
];

export const CUT_NUTRITION_DATA: CutNutritionRow[] = [
  {
    id: 'gopchang',
    name: '소곱창 (소창 · 100g)',
    portionLabel: '100g 기준',
    proteinG: 16.4,
    fatG: 18.2,
    ironMg: 2.4,
    vitaminB12Ug: 26.5,
    zincMg: 2.8,
    caloriesKcal: 232,
    characteristic: '단백질·비타민 B12·미네랄 밀도가 가장 균형 잡힌 핵심 부위',
  },
  {
    id: 'daechang',
    name: '소대창 (대창 · 100g)',
    portionLabel: '100g 기준',
    proteinG: 10.2,
    fatG: 34.5,
    ironMg: 1.5,
    vitaminB12Ug: 14.2,
    zincMg: 1.7,
    caloriesKcal: 358,
    characteristic: '지질 함량이 높아 열량이 크므로 소량으로 풍미만 더하는 것이 유리',
  },
  {
    id: 'yang',
    name: '소양 (벌집위 · 100g)',
    portionLabel: '100g 기준',
    proteinG: 18.6,
    fatG: 4.1,
    ironMg: 2.1,
    vitaminB12Ug: 18.0,
    zincMg: 2.5,
    caloriesKcal: 114,
    characteristic: '지방이 매우 적고 단백질과 콜라겐이 풍부해 담백한 식감 제공',
  },
  {
    id: 'jeongol-serving',
    name: '채소 배합 곱창전골 (1인분)',
    portionLabel: '곱창 120g + 채소 220g',
    proteinG: 24.8,
    fatG: 19.6,
    ironMg: 4.1,
    vitaminB12Ug: 31.8,
    zincMg: 3.9,
    caloriesKcal: 365,
    characteristic: '채소의 식이섬유·항산화 성분이 지방 흡수를 완충한 완성형 한 그릇',
  },
];

export const SYNERGY_INGREDIENTS: SynergyIngredient[] = [
  {
    id: 'buchu',
    name: '부추',
    roleLabel: '황화합물 · 온열 채소',
    bioactiveCompound: '알릴 설파이드 (Allyl Sulfide), 베타카로틴',
    synergyMechanism:
      '곱창 속 비타민 B군과 결합해 피로 회복 물질(알리티아민) 생성을 촉진하고, 따뜻한 성질로 기름진 지질의 소화를 돕습니다.',
    culinaryTip: '불을 끄기 1~2분 전 마지막에 올려 향과 비타민 손실을 최소화하세요.',
    fiberScore: 18,
    antioxidantScore: 24,
    digestiveScore: 22,
    lipidBalanceScore: 15,
  },
  {
    id: 'kkaennip',
    name: '깻잎',
    roleLabel: '항산화 · 콜레스테롤 완충',
    bioactiveCompound: '로즈마린산, 페릴릴알코올, 식이섬유',
    synergyMechanism:
      '특유의 정유 성분이 내장 특유의 잡내를 잡아줄 뿐 아니라, 풍부한 불용성 식이섬유와 폴리페놀이 과잉 콜레스테롤 흡수를 억제합니다.',
    culinaryTip: '채 썰어 전골 위에 듬뿍 얹으면 기름진 국물 맛이 한층 산뜻해집니다.',
    fiberScore: 22,
    antioxidantScore: 28,
    digestiveScore: 16,
    lipidBalanceScore: 26,
  },
  {
    id: 'garlic-scallion',
    name: '대파 · 통마늘',
    roleLabel: '지질 대사 · 살균 향신',
    bioactiveCompound: '알리신 (Allicin), 플라보노이드, 황화아릴',
    synergyMechanism:
      '육류 지방의 산화를 막고 혈중 중성지방 축적을 낮추는 데 도움을 주며, 위액 분비를 자극해 단백질 분해 효율을 끌어올립니다.',
    culinaryTip: '대파 흰 뿌리 부분과 으깬 마늘을 육수 초입부터 함께 끓여내세요.',
    fiberScore: 12,
    antioxidantScore: 22,
    digestiveScore: 24,
    lipidBalanceScore: 20,
  },
  {
    id: 'radish-cabbage',
    name: '무 · 배추',
    roleLabel: '천연 소화 효소 · 칼륨 공급',
    bioactiveCompound: '디아스타아제 (Diastase), 이소티오시아네이트, 칼륨',
    synergyMechanism:
      '무의 소화 효소와 배추의 수분·칼륨이 묵직한 곱창 육수의 소화 부담을 덜어주고, 국물 속 나트륨 배출을 돕습니다.',
    culinaryTip: '무를 나박하게 썰어 바닥에 먼저 깔면 육수에 시원한 감칠맛이 배어듭니다.',
    fiberScore: 20,
    antioxidantScore: 15,
    digestiveScore: 30,
    lipidBalanceScore: 14,
  },
  {
    id: 'mushroom',
    name: '표고 · 느타리버섯',
    roleLabel: '면역 다당체 · 담즙산 배출',
    bioactiveCompound: '베타글루칸 (β-Glucan), 에리타데닌, 구아닐산',
    synergyMechanism:
      '표고버섯의 에리타데닌과 베타글루칸은 혈중 콜레스테롤 수치를 낮추고, 천연 감칠맛 성분(구아닐산) 덕분에 소금·양념 사용량을 줄여줍니다.',
    culinaryTip: '건표고를 불린 물을 육수로 활용하면 저염이면서도 깊은 풍미를 냅니다.',
    fiberScore: 25,
    antioxidantScore: 20,
    digestiveScore: 15,
    lipidBalanceScore: 28,
  },
  {
    id: 'deulkkae',
    name: '들깨가루',
    roleLabel: '식물성 오메가-3 · 점막 보호',
    bioactiveCompound: '알파-리놀렌산 (ω-3), 루테올린, 비타민 E',
    synergyMechanism:
      '곱창의 포화지방 대비 부족하기 쉬운 불포화지방산(오메가-3)을 보충해 지방산 균형을 맞추고, 위 점막을 부드럽게 감싸줍니다.',
    culinaryTip: '거피 들깨가루 1~2큰술을 마지막에 풀면 구수함과 영양 균형이 완성됩니다.',
    fiberScore: 14,
    antioxidantScore: 18,
    digestiveScore: 18,
    lipidBalanceScore: 30,
  },
  {
    id: 'ugeoji',
    name: '배추 우거지',
    roleLabel: '고밀도 식이섬유 · 포만감',
    bioactiveCompound: '불용성 셀룰로오스, 클로로필, 칼슘',
    synergyMechanism:
      '장내에서 담즙산과 지질을 흡착해 체외로 배출하는 청소부 역할을 하며, 적은 양의 곱창으로도 충분한 포만감을 형성합니다.',
    culinaryTip: '삶은 우거지를 된장에 살짝 무쳐 전골에 넣으면 감칠맛과 소화력이 높아집니다.',
    fiberScore: 32,
    antioxidantScore: 16,
    digestiveScore: 22,
    lipidBalanceScore: 25,
  },
];

export const SYNERGY_PRESETS: SynergyPreset[] = [
  {
    id: 'classic',
    label: '기본 보양 전골',
    description: '전통적인 한식 곱창전골의 균형 배합',
    ingredientIds: ['buchu', 'kkaennip', 'garlic-scallion', 'radish-cabbage'],
  },
  {
    id: 'fatigue',
    label: '피로 회복 집중',
    description: '비타민 B군 흡수율과 면역 다당체를 극대화한 조합',
    ingredientIds: ['buchu', 'garlic-scallion', 'mushroom', 'deulkkae'],
  },
  {
    id: 'light-balance',
    label: '소화·담백 균형',
    description: '콜레스테롤 흡착과 위장 소화에 초점을 맞춘 조합',
    ingredientIds: ['kkaennip', 'radish-cabbage', 'mushroom', 'ugeoji'],
  },
];

export const FOOTNOTES: FootnoteItem[] = [
  {
    number: 1,
    source: '허준, 《동의보감(東醫寶鑑)》 탕액편 수부(獸部)',
    detail:
      '소의 위(牛肚)와 장은 성질이 평하거나 따뜻하며, 비위를 보하고 오장을 튼튼히 하여 허약 체질과 기력 회복에 쓰인다고 기록되어 있습니다.',
  },
  {
    number: 2,
    source: '농촌진흥청 국립농업과학원, 《국가표준식품성분표》 제10개정판',
    detail:
      '소고기 내장류(소창·벌집위 등) 100g 기준 단백질, 철분(헴철), 아연, 비타민 B2 및 B12 함량 데이터를 참조했습니다.',
  },
  {
    number: 3,
    source: '한국식품영양과학회 · 알리티아민 생체이용률 기전',
    detail:
      '마늘·부추·대파 등 파속 식물의 알리신(Allicin)은 수용성 비타민 B1과 결합하여 지용성 유도체인 알리티아민을 형성해 장내 흡수율을 높입니다.',
  },
  {
    number: 4,
    source: '식생활과 콜레스테롤 흡착 기전 연구',
    detail:
      '버섯의 베타글루칸, 우거지·깻잎의 불용성 식이섬유는 장내 담즙산 재흡수를 억제하여 간 내 콜레스테롤 소비를 촉진합니다.',
  },
];

export const INTAKE_PROFILES: IntakeProfile[] = [
  {
    id: 'stamina',
    label: '기력 저하 · 환절기',
    summary: '면역력과 체온 유지가 필요할 때는 단백질과 온열 향신료의 배합을 살리는 것이 좋습니다.',
    brothLimit: '건더기 위주 섭취 후 국물 1/2공기 이하',
    vegToTripeRatio: '채소 1.5 : 곱창 1 (중량 기준)',
    eatingOrder: [
      '무·우거지 등 익힌 채소를 먼저 먹어 위장을 예열합니다.',
      '부추와 깻잎을 곁들여 곱창 건더기를 천천히 꼭꼭 씹어 섭취합니다.',
      '마무리 볶음밥 대신 들깨가루를 푼 따뜻한 국물 소량으로 마감합니다.',
    ],
    recommendedPairing: '따뜻한 생강차 또는 대추차 (혈행 촉진 및 지질 소화)',
    cautionNote: '과도한 볶음밥 탄수화물 추가는 급격한 혈당·열량 상승을 유발할 수 있습니다.',
  },
  {
    id: 'lipid-care',
    label: '콜레스테롤 · 체중 관리',
    summary: '대창 비율을 줄이고 양(벌집위)·소창 위주에 버섯·우거지·들깨가루를 보강합니다.',
    brothLimit: '국물 섭취 최소화 (양념·나트륨 제한)',
    vegToTripeRatio: '채소 2.5 : 곱창 1 (식이섬유 극대화)',
    eatingOrder: [
      '전골이 끓기 시작하면 표면에 뜨는 기름막을 국자로 한 번 걷어냅니다.',
      '표고·느타리버섯과 우거지를 먼저 충분히 먹어 포만감과 식이섬유를 확보합니다.',
      '기름기가 적은 소양(벌집위)과 소곱창 위주로 100g 내외만 섭취합니다.',
    ],
    recommendedPairing: '무생채·동치미 국물 (디아스타아제 효소 및 저염 밸런스)',
    cautionNote: '대창은 포화지방 비율이 높으므로 체중 관리 중에는 건너뛰는 것이 현명합니다.',
  },
  {
    id: 'digestive',
    label: '소화기 민감 · 저녁 식사',
    summary: '콜라겐과 지방은 위장 체류 시간이 길므로 무·마늘로 소화를 돕고 취침 3시간 전 식사를 마칩니다.',
    brothLimit: '자극적인 고추기름을 덜어낸 맑은 국물 소량',
    vegToTripeRatio: '채소 2 : 곱창 1 (무·양배추 우선)',
    eatingOrder: [
      '매운 다대기는 절반만 풀어 위 점막 자극을 줄입니다.',
      '곱창이 푹 익어 부드러워질 때까지 최소 10분 이상 끓인 뒤 드세요.',
      '한 입당 25회 이상 씹어 타액 아밀라아제와 함께 넘기는 것이 중요합니다.',
    ],
    recommendedPairing: '따뜻한 매실차 또는 보리차 (식후 위산 균형)',
    cautionNote: '얼음물이나 차가운 탄산음료는 내장 지방을 굳혀 소화불량을 일으킬 수 있습니다.',
  },
  {
    id: 'recovery',
    label: '피로 누적 · 해장',
    summary: '비타민 B군과 아미노산이 간 해독 효소와 에너지 대사를 돕되, 염분 과다를 경계해야 합니다.',
    brothLimit: '물이나 육수를 1:1로 희석해 염도를 낮춘 국물 2/3공기',
    vegToTripeRatio: '채소 2 : 곱창 1 (대파·부추·버섯 집중)',
    eatingOrder: [
      '육수가 졸아들수록 염도가 올라가므로 먹기 전 육수를 한 번 보충해 농도를 맞춥니다.',
      '부추·대파·마늘 등 황화합물 채소를 건더기와 함께 매번 곁들입니다.',
      '식사 중 수분(미지근한 물)을 틈틈이 마셔 나트륨 배출을 유도합니다.',
    ],
    recommendedPairing: '배추김치(소량)와 헛개·보리차 (수분·칼륨 보충)',
    cautionNote: '해장 목적이라도 음주 직후 과도하게 맵고 짠 국물은 식도와 위에 부담을 줍니다.',
  },
];
