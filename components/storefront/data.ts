import content from './content.json';

export type ExpertId = 'goldmaster' | 'ggotge';
export type CategoryId = 'analysis' | 'education' | 'market' | 'free';
export type TabId = 'all' | 'free' | ExpertId;
export interface Video {
  id: string;
  title: string;
  expert: ExpertId;
  sub: CategoryId;
  paid: boolean;
  price: number;
  duration: string;
  views: number;
  publishedAt: string;
  summary: string;
  description: string;
  hue: number;
  thumbnail?: string;
  hasMedia?: boolean;
}

export const videos = content.VIDEOS as Video[];
export const experts = {
  goldmaster: { ...content.EXPERTS.goldmaster, role: '수급과 산업을 읽는 깊이 있는 분석', tagline: '시장 흐름부터 산업의 변화까지, 데이터에 기반한 투자 관점을 함께 배웁니다.' },
  ggotge: { ...content.EXPERTS.ggotge, role: '주도주와 매매 원칙을 배우는 시간', tagline: '대형주와 업종 대표주를 중심으로, 차트와 시장 흐름을 읽는 기준을 세웁니다.' },
};
export const categories: { id: CategoryId; label: string; description: string; english: string }[] = [
  { id: 'analysis', label: '주식분석', description: '산업과 기업을 깊이 읽는 전문가의 시선', english: 'STOCK ANALYSIS' },
  { id: 'education', label: '주식교육', description: '기초부터 실전까지, 흔들리지 않는 투자 원칙', english: 'INVESTMENT CLASS' },
  { id: 'market', label: '주식시황', description: '시장 흐름을 놓치지 않는 가장 좋은 습관', english: 'MARKET INSIGHT' },
  { id: 'free', label: '무료영상', description: '투자의 첫걸음, 부담 없이 시작하세요', english: 'FREE CLASS' },
];
export const tabs: { id: TabId; label: string }[] = [
  { id: 'all', label: '전체영상' }, { id: 'free', label: '무료영상' },
  { id: 'goldmaster', label: '골드마스터' }, { id: 'ggotge', label: '꽃게선생' },
];
export const asset = (name: string) => {
  const inlineAssets = (globalThis as typeof globalThis & { __WILLCLUB_ASSETS__?: Record<string, string> }).__WILLCLUB_ASSETS__;
  return inlineAssets?.[name] ?? `/assets/${name}`;
};
export const imageIds = ['gm-a1', 'gm-a3', 'gm-m1', 'gm-m2', 'gm-f1', 'gg-a2', 'gg-a3', 'gg-f3'];
export const getImage = (video: Video) => video.thumbnail || (imageIds.includes(video.id) ? asset(`${video.id}.jpg`) : undefined);
export const price = (value: number) => value > 0 ? `${value.toLocaleString('ko-KR')}원` : '무료';
export const viewCount = (value: number) => value >= 10000 ? `${(value / 10000).toFixed(1).replace(/\.0$/, '')}만` : value.toLocaleString('ko-KR');
export const dateLabel = (value: string) => new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value));
export const matchesTab = (video: Video, tab: TabId) => tab === 'all' || (tab === 'free' ? !video.paid : video.expert === tab);
