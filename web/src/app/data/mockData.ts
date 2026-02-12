import { Article, MediaOutlet, MediaAnalysis } from '../types';

export const MEDIA_OUTLETS: MediaOutlet[] = [
  { id: 'outlet1', name: '뉴스A' },
  { id: 'outlet2', name: '일간B' },
  { id: 'outlet3', name: 'C일보' },
  { id: 'outlet4', name: '저널D' },
  { id: 'outlet5', name: '타임즈E' },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'article1',
    title: '경제 성장률 2분기 연속 상승, 전문가들 긍정 평가',
    summary: '2분기 경제 성장률이 예상을 웃돌며 회복세를 보이고 있다. 전문가들은 이러한 추세가 지속될 것으로 전망한다.',
    content: `2분기 경제 성장률이 전년 동기 대비 2.8%를 기록하며 시장 예상을 상회했다. 이는 전분기 2.3%에서 0.5%포인트 증가한 수치로, 2분기 연속 상승세를 이어가고 있다.

한국경제연구원의 김철수 선임연구원은 "수출 호조와 내수 회복이 동시에 이뤄지면서 긍정적인 결과가 나타났다"며 "하반기에도 이러한 추세가 지속될 것으로 보인다"고 평가했다.

특히 반도체와 자동차 부문의 수출이 크게 증가하면서 전체 경제 성장을 이끌었다. 민간 소비도 전분기 대비 1.2% 증가하며 경기 회복의 신호를 보냈다.

금융연구원의 박영희 박사는 "글로벌 경기 회복과 맞물려 국내 경제도 탄력을 받고 있다"며 "다만 물가 상승 압력과 금리 인상 가능성을 주의 깊게 살펴봐야 한다"고 조언했다.`,
    mediaOutlet: MEDIA_OUTLETS[0],
    publishedAt: '2026-01-30T09:00:00Z',
    url: '#',
    topic: '경제',
    expressionTags: ['긍정적 평가', '전망 포함', '전문가 인용'],
    analysisScores: {
      valueJudgment: 45,
      definitiveStatements: 60,
      targetDescription: 70,
      expressionIntensity: 50,
      emotionalDensity: 30,
    },
  },
  {
    id: 'article2',
    title: '경제지표 호조에도 불구, 서민경제 여전히 어려워',
    summary: '전체 경제지표는 개선되고 있지만 물가 상승으로 서민들의 체감 경기는 나아지지 않고 있다.',
    content: `2분기 경제 성장률이 2.8%를 기록했지만, 서민들이 체감하는 경기는 여전히 어렵다는 목소리가 높다.

통계청 자료에 따르면 최근 3개월간 소비자물가지수는 전년 동기 대비 4.2% 상승했다. 특히 식료품 가격은 6.8%, 전기·가스 요금은 12.3% 올라 가계 부담이 크게 늘었다.

서울 관악구에서 식당을 운영하는 이모(52)씨는 "식자재 값이 너무 올라 장사가 안 된다"며 "성장률이 높다는데 우리 같은 자영업자는 전혀 실감할 수 없다"고 토로했다.

한국노동연구원의 최민수 연구위원은 "거시 경제 지표와 서민 경제의 괴리가 심화되고 있다"며 "물가 안정과 소득 증대를 위한 실질적인 정책이 필요하다"고 지적했다.`,
    mediaOutlet: MEDIA_OUTLETS[1],
    publishedAt: '2026-01-30T10:30:00Z',
    url: '#',
    topic: '경제',
    expressionTags: ['대조 표현', '부정적 현실', '서민 중심'],
    analysisScores: {
      valueJudgment: 55,
      definitiveStatements: 40,
      targetDescription: 30,
      expressionIntensity: 65,
      emotionalDensity: 50,
    },
  },
  {
    id: 'article3',
    title: '2분기 성장률 2.1% 기록, 예상치 상회',
    summary: '국내총생산이 전 분기 대비 2.1% 증가하며 시장 예상을 웃돌았다. 수출 증가가 주요 동력으로 작용했다.',
    content: `한국은행이 발표한 2분기 실질 국내총생산(GDP) 성장률은 전년 동기 대비 2.1%를 기록했다. 이는 시장 전망치 1.8%를 0.3%포인트 상회하는 수치다.

부문별로는 수출이 전년 동기 대비 5.2% 증가하며 성장을 주도했다. 반도체(8.3%), 자동차(6.7%), 석유화학(4.1%) 등 주력 산업의 수출이 고르게 증가했다.

민간 소비는 1.5% 증가에 그쳤으며, 건설투자는 2.3% 감소했다. 설비투자는 3.1% 늘어나며 기업들의 투자 심리가 회복되는 모습을 보였다.

한국은행 관계자는 "수출 호조가 전체 성장을 이끌었다"며 "내수 회복은 아직 더딘 상황"이라고 설명했다.`,
    mediaOutlet: MEDIA_OUTLETS[2],
    publishedAt: '2026-01-30T08:15:00Z',
    url: '#',
    topic: '경제',
    expressionTags: ['중립적 서술', '수치 중심', '사실 기반'],
    analysisScores: {
      valueJudgment: 20,
      definitiveStatements: 35,
      targetDescription: 50,
      expressionIntensity: 30,
      emotionalDensity: 15,
    },
  },
  {
    id: 'article4',
    title: '신기술 개발로 일자리 창출 기대, 정부 지원 확대',
    summary: '정부가 신기술 산업 육성을 위한 지원을 확대하기로 했다. 업계에서는 새로운 일자리가 대규모로 창출될 것으로 기대하고 있다.',
    content: `정부가 인공지능, 바이오, 양자컴퓨팅 등 신기술 분야에 향후 3년간 5조원을 투자한다고 발표했다.

과학기술정보통신부는 이번 투자로 관련 산업에서 10만개 이상의 일자리가 창출될 것으로 예상한다고 밝혔다. 특히 청년층과 고급 인력을 위한 양질의 일자리가 늘어날 전망이다.

한국기술벤처재단의 정수민 이사장은 "이번 정부 지원으로 스타트업 생태계가 더욱 활성화될 것"이라며 "글로벌 경쟁력을 갖춘 기업들이 많이 나올 것으로 기대한다"고 말했다.

산업연구원은 신기술 투자가 경제 전반에 미치는 파급효과가 클 것으로 분석했다. 직접 일자리 외에도 관련 서비스업에서 추가 고용이 이뤄질 것으로 보인다.`,
    mediaOutlet: MEDIA_OUTLETS[3],
    publishedAt: '2026-01-29T14:20:00Z',
    url: '#',
    topic: '기술',
    expressionTags: ['기대감', '정부 정책', '긍정 전망'],
    analysisScores: {
      valueJudgment: 40,
      definitiveStatements: 70,
      targetDescription: 80,
      expressionIntensity: 55,
      emotionalDensity: 35,
    },
  },
  {
    id: 'article5',
    title: '신기술 투자 늘지만 실제 효과는 미지수',
    summary: '정부의 신기술 분야 투자가 증가하고 있으나, 실질적인 성과로 이어질지는 불투명한 상황이다.',
    content: `정부가 신기술 분야에 대규모 투자를 발표했지만, 과거 유사 정책들의 성과가 미흡했다는 점에서 우려의 목소리도 나온다.

최근 5년간 정부는 4차 산업혁명 관련 예산으로 총 3조원을 집행했지만, 가시적인 성과는 제한적이었다는 평가를 받고 있다.

중소기업중앙회의 한 관계자는 "정부 지원이 특정 대기업에 집중되거나, 실제 현장의 수요와 맞지 않는 경우가 많았다"며 "이번에는 다를 것이라는 보장이 없다"고 지적했다.

경제정의실천시민연합은 "투자 규모보다 중요한 것은 효율성"이라며 "투명한 집행과 철저한 사후 관리가 필요하다"고 강조했다. 일자리 창출 효과에 대해서도 구체적인 근거가 부족하다는 비판이 제기됐다.`,
    mediaOutlet: MEDIA_OUTLETS[4],
    publishedAt: '2026-01-29T15:45:00Z',
    url: '#',
    topic: '기술',
    expressionTags: ['회의적 시각', '불확실성 강조', '비판적 분석'],
    analysisScores: {
      valueJudgment: 50,
      definitiveStatements: 30,
      targetDescription: 35,
      expressionIntensity: 60,
      emotionalDensity: 45,
    },
  },
  {
    id: 'article6',
    title: '환경 정책 전환 시급, 전문가 단체 성명 발표',
    summary: '환경 전문가들이 모여 현재 환경 정책의 전환을 촉구하는 성명을 발표했다. 구체적인 실행 방안 마련이 필요하다고 지적했다.',
    content: `환경전문가협의회는 기자회견을 열고 "현 정부의 환경 정책이 실효성이 부족하다"며 즉각적인 정책 전환을 요구했다.

협의회는 성명서에서 "탄소 감축 목표는 제시됐지만 구체적인 실행 방안이 없다"며 "이대로는 2030년 목표 달성이 불가능하다"고 지적했다.

서울대 환경대학원의 김환경 교수는 "재생에너지 확대, 화석연료 감축 등에 대한 로드맵이 필요하다"며 "정부가 적극적으로 나서야 한다"고 촉구했다.

이에 대해 환경부는 "올 하반기 중 구체적인 실행 계획을 발표할 예정"이라며 "전문가들의 의견을 적극 수렴하겠다"고 밝혔다.`,
    mediaOutlet: MEDIA_OUTLETS[0],
    publishedAt: '2026-01-28T11:00:00Z',
    url: '#',
    topic: '환경',
    expressionTags: ['촉구', '전문가 의견', '문제 제기'],
    analysisScores: {
      valueJudgment: 60,
      definitiveStatements: 55,
      targetDescription: 40,
      expressionIntensity: 70,
      emotionalDensity: 40,
    },
  },
  {
    id: 'article7',
    title: '기후변화 대응 정책 발표, 2030년까지 탄소배출 30% 감축',
    summary: '정부가 2030년까지 탄소배출량을 30% 감축하는 내용의 기후변화 대응 정책을 발표했다.',
    content: `정부는 2030년까지 온실가스 배출량을 2018년 대비 30% 감축한다는 목표를 담은 '탄소중립 이행 기본계획'을 발표했다.

이번 계획에는 재생에너지 발전 비중을 현재 8%에서 20%로 확대하고, 전기차 보급을 300만대로 늘리는 내용이 포함됐다.

정부는 탄소 감축을 위해 향후 5년간 총 150조원을 투자할 계획이다. 이 중 70조원은 재생에너지 인프라 구축에, 50조원은 친환경 수송 수단 확대에 사용된다.

환경부 관계자는 "국제사회와의 약속을 지키고 미래 세대를 위한 지속가능한 환경을 만들기 위한 계획"이라고 설명했다.`,
    mediaOutlet: MEDIA_OUTLETS[1],
    publishedAt: '2026-01-28T09:30:00Z',
    url: '#',
    topic: '환경',
    expressionTags: ['정책 발표', '목표 제시', '중립 보도'],
    analysisScores: {
      valueJudgment: 25,
      definitiveStatements: 45,
      targetDescription: 55,
      expressionIntensity: 35,
      emotionalDensity: 20,
    },
  },
  {
    id: 'article8',
    title: '교육 개혁안 발표에 찬반 논란 가열',
    summary: '새로운 교육 개혁안을 둘러싼 찬반 논란이 뜨겁다. 교육계와 학부모 단체의 의견이 엇갈리고 있다.',
    content: `교육부가 발표한 새 교육 개혁안을 두고 교육계와 학부모 단체 간 의견이 첨예하게 대립하고 있다.

개혁안의 핵심은 고교학점제 전면 도입과 대학입시 간소화다. 교육부는 "학생의 선택권을 확대하고 입시 부담을 줄이기 위한 조치"라고 설명한다.

전국교직원노동조합은 "교육 현장의 현실을 고려하지 않은 탁상행정"이라며 강하게 반발하고 있다. "준비 없이 제도만 바꾸면 혼란만 가중된다"는 것이다.

반면 참교육학부모회는 "과도한 입시 경쟁을 완화할 수 있는 좋은 방안"이라며 찬성 입장을 밝혔다.

교육학자들 사이에서도 의견이 갈린다. 한국교육개발원의 이교육 박사는 "점진적 도입이 필요하다"며 충분한 준비 기간을 가질 것을 제안했다.`,
    mediaOutlet: MEDIA_OUTLETS[2],
    publishedAt: '2026-01-27T16:00:00Z',
    url: '#',
    topic: '교육',
    expressionTags: ['논란 보도', '양측 의견', '대립 강조'],
    analysisScores: {
      valueJudgment: 35,
      definitiveStatements: 50,
      targetDescription: 45,
      expressionIntensity: 55,
      emotionalDensity: 60,
    },
  },
];

export const MOCK_MEDIA_ANALYSIS: MediaAnalysis[] = [
  {
    mediaOutlet: MEDIA_OUTLETS[0],
    scores: {
      valueJudgment: 48,
      definitiveStatements: 58,
      targetDescription: 55,
      expressionIntensity: 58,
      emotionalDensity: 35,
    },
    deviation: 12,
    dataConfidence: 'high',
  },
  {
    mediaOutlet: MEDIA_OUTLETS[1],
    scores: {
      valueJudgment: 40,
      definitiveStatements: 42,
      targetDescription: 42,
      expressionIntensity: 50,
      emotionalDensity: 35,
    },
    deviation: -8,
    dataConfidence: 'high',
  },
  {
    mediaOutlet: MEDIA_OUTLETS[2],
    scores: {
      valueJudgment: 27,
      definitiveStatements: 42,
      targetDescription: 48,
      expressionIntensity: 40,
      emotionalDensity: 38,
    },
    deviation: -18,
    dataConfidence: 'medium',
  },
  {
    mediaOutlet: MEDIA_OUTLETS[3],
    scores: {
      valueJudgment: 45,
      definitiveStatements: 62,
      targetDescription: 58,
      expressionIntensity: 57,
      emotionalDensity: 40,
    },
    deviation: 10,
    dataConfidence: 'high',
  },
  {
    mediaOutlet: MEDIA_OUTLETS[4],
    scores: {
      valueJudgment: 55,
      definitiveStatements: 35,
      targetDescription: 37,
      expressionIntensity: 60,
      emotionalDensity: 42,
    },
    deviation: 5,
    dataConfidence: 'medium',
  },
];

export const AVERAGE_SCORES = {
  valueJudgment: 43,
  definitiveStatements: 48,
  targetDescription: 48,
  expressionIntensity: 53,
  emotionalDensity: 38,
};