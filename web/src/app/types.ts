export interface Criteria {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface MediaOutlet {
  id: string;
  name: string;
  logo?: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content?: string; // 기사 본문
  mediaOutlet: MediaOutlet;
  publishedAt: string;
  url: string;
  topic: string;
  expressionTags: string[];
  analysisScores: {
    valueJudgment: number;
    definitiveStatements: number;
    targetDescription: number;
    expressionIntensity: number;
    emotionalDensity: number;
  };
}

export interface MediaAnalysis {
  mediaOutlet: MediaOutlet;
  scores: {
    valueJudgment: number;
    definitiveStatements: number;
    targetDescription: number;
    expressionIntensity: number;
    emotionalDensity: number;
  };
  deviation: number;
  dataConfidence: 'high' | 'medium' | 'low';
}

export const CRITERIA_OPTIONS: Criteria[] = [
  {
    id: 'valueJudgment',
    name: '가치 판단 표현 빈도',
    description: '좋다/나쁘다 등 가치 판단이 포함된 표현의 사용 빈도를 측정합니다.',
    enabled: true,
  },
  {
    id: 'definitiveStatements',
    name: '단정적 서술 비율',
    description: '~것이다, ~할 것이다 등 단정적 표현의 비율을 분석합니다.',
    enabled: true,
  },
  {
    id: 'targetDescription',
    name: '특정 대상 서술 방향성',
    description: '특정 인물/단체에 대한 긍정/부정 서술 방향을 파악합니다.',
    enabled: true,
  },
  {
    id: 'expressionIntensity',
    name: '표현 강도 편차',
    description: '강조 표현, 수식어의 강도 차이를 측정합니다.',
    enabled: true,
  },
  {
    id: 'emotionalDensity',
    name: '감정어 사용 밀도',
    description: '감정을 나타내는 단어의 사용 밀도를 분석합니다.',
    enabled: false,
  },
];