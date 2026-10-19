export const publicMenus = [
  { label: '회사소개', path: '/about' },
  { label: '이용방법', path: '/guide' },
  { label: '무료주식정보', path: '/freeInfo' },
  { label: '주식교육영상', path: '/paidInfo' },
  { label: 'VIP 회원가입', path: '/vip' },
  { label: '고객센터', path: '/support/notice' },
] as const;

export const localPages: Record<string, { title: string; description: string }> = {
  '/about': { title: '회사소개', description: '윌클럽과 함께하는 배움과 투자.' },
  '/guide': { title: '이용방법', description: '영상 선택부터 서비스 이용까지, 필요한 내용을 확인하세요.' },
  '/vip': { title: 'VIP 회원가입', description: '전문가별 서비스와 이용 조건을 확인하세요.' },
  '/support/notice': { title: '공지사항', description: '윌클럽 서비스의 주요 안내를 확인하세요.' },
  '/support/faq': { title: '자주 묻는 질문', description: '서비스 이용에 필요한 답변을 확인하세요.' },
  '/support/event': { title: '이벤트', description: '윌클럽의 공개 이벤트 안내를 확인하세요.' },
  '/login': { title: '회원 로그인', description: '이 프로젝트에 연결된 인증 서비스를 이용합니다.' },
};
