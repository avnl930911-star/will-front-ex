"use client";
/* 4차 최종 시안의 업무 컴포넌트를 이식했습니다. 관리자 전체를 독립 HTML/iframe으로 래핑하지 않고 React 런타임을 공유합니다. 상품 상세의 원본 HTML 미리보기는 유지합니다. */
import * as React from 'react';
import * as JSXRuntime from 'react/jsx-runtime';
import * as ThirdExcel from 'xlsx';
import RVideosEditorModal from './VideoUploadEditor';
import {AlignCenter,AlignJustify,AlignLeft,AlignRight,ArrowLeft,ArrowRight,Bold,CalendarPlus,ChartColumn,Check,ChevronDown,ChevronRight,CircleCheck,CircleHelp,Clock3,CreditCard,Crown,Download,Eye,FileText,Gift,Heading2,Heading3,Highlighter,History,ImagePlus,IndentDecrease,IndentIncrease,Italic,LayoutDashboard,Link2,ListOrdered,List,Menu,MessageSquare,PanelsTopLeft,Pause,Pencil,Play,Plus,Quote,ReceiptText,Redo2,RotateCcw,Save,Search,Send,Settings2,Settings,ShieldCheck,Shield,Strikethrough,Table2,Trash2,TriangleAlert,Type,Underline,Undo2,Upload,UserPlus,Users,Video,X} from 'lucide-react';
import registry from '@/lib/admin/registry.json';
import adminAssets from '@/lib/admin/assets.json';
// 회원/결제 샘플은 서버 data/seed.json에서만 읽습니다. 클라이언트 번들에 포함하지 않습니다.
const seed_default = {version:4,records:Object.fromEntries(['members','payments','products','articles','videos','banners','rooms','experts','terms','coupons','points','smsRules','smsHistory','staff','general','visits'].map(d=>[d,[]])),logs:[]};
const import_react20=React;
// data/source-screens.json
var source_screens_default = [
  {
    path: "/admin/members/all",
    title: "전체 회원 관리",
    headings: [
      "전체 회원 관리"
    ],
    columns: [
      "",
      "아이디",
      "이름",
      "닉네임",
      "연락처",
      "그룹",
      "최근 결제일",
      "골드마스터반(남은일)",
      "골드해외반(남은일)",
      "골드텐버거반(남은일)",
      "꽃게선생반(남은일)",
      "단타반(남은일)",
      "최근접속일",
      "탈퇴일",
      "방문수",
      "신규가입일"
    ],
    buttons: [
      {
        label: "회원 추가"
      },
      {
        label: "삭제"
      },
      {
        label: "전체 회원"
      },
      {
        label: "15개"
      },
      {
        label: "전체"
      },
      {
        label: "시작일"
      },
      {
        label: "종료일"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      },
      {
        label: "초기화"
      },
      {
        label: ""
      },
      {
        label: "이전"
      },
      {
        label: "1"
      },
      {
        label: "2"
      },
      {
        label: "다음"
      }
    ]
  },
  {
    path: "/admin/members/bdc41bee-79a6-401a-bac8-254fe58d4e22",
    title: "골드마스터반",
    headings: [],
    columns: [],
    buttons: []
  },
  {
    path: "/admin/members/c2955b9b-27d5-47f3-b0f8-bf8b0df93f78",
    title: "단타반",
    headings: [],
    columns: [],
    buttons: []
  },
  {
    path: "/admin/members/5677b74b-f568-45ed-8bb1-ff79f0c94598",
    title: "골드해외반",
    headings: [],
    columns: [],
    buttons: []
  },
  {
    path: "/admin/members/450c3fb5-17b3-4421-9b62-e4fcbc02f1a1",
    title: "골드텐버거반",
    headings: [],
    columns: [],
    buttons: []
  },
  {
    path: "/admin/members/98ec487c-dc55-4294-9a90-ab94afc32d7d",
    title: "꽃게선생반",
    headings: [],
    columns: [],
    buttons: []
  },
  {
    path: "/admin/members/expired",
    title: "만기 회원 관리",
    headings: [
      "만기 회원 관리"
    ],
    columns: [
      "아이디",
      "닉네임",
      "이름",
      "연락처",
      "만기된 서비스",
      "만기일자"
    ],
    buttons: [
      {
        label: "2026-10-01"
      },
      {
        label: "2026-10-08"
      },
      {
        label: "전체"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      },
      {
        label: "초기화"
      },
      {
        label: "15개"
      }
    ]
  },
  {
    path: "/admin/members/inactive",
    title: "장기 미접속 회원 관리",
    headings: [
      "장기 미접속 회원 관리"
    ],
    columns: [
      "",
      "아이디",
      "이름",
      "닉네임",
      "연락처",
      "최종 접속일",
      "가입일"
    ],
    buttons: [
      {
        label: "완전 삭제"
      },
      {
        label: "2021-10-08"
      },
      {
        label: "2025-10-08"
      },
      {
        label: "검색"
      },
      {
        label: "초기화"
      },
      {
        label: "15개"
      },
      {
        label: ""
      }
    ]
  },
  {
    path: "/admin/members/withdrawn",
    title: "탈퇴 회원 관리",
    headings: [
      "탈퇴 회원 관리"
    ],
    columns: [
      "",
      "아이디",
      "이름",
      "닉네임",
      "연락처",
      "탈퇴 사유",
      "탈퇴일",
      "가입일"
    ],
    buttons: [
      {
        label: "완전 삭제"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      },
      {
        label: "초기화"
      },
      {
        label: "15개"
      },
      {
        label: ""
      }
    ]
  },
  {
    path: "/admin/members/stats",
    title: "일자별 회원 가입 통계",
    headings: [
      "일자별 회원 가입 통계"
    ],
    columns: [
      "가입일",
      "아이디",
      "닉네임",
      "연락처",
      "이용중인서비스",
      "유효기간"
    ],
    buttons: [
      {
        label: "2026.10.08"
      },
      {
        label: "2026.10.08"
      },
      {
        label: "검색"
      },
      {
        label: "전체 (0)"
      },
      {
        label: "무료가입 (0)"
      },
      {
        label: "유료가입 (0)"
      },
      {
        label: "골드마스터반 (0)"
      },
      {
        label: "단타반 (0)"
      },
      {
        label: "골드텐버거반 (0)"
      },
      {
        label: "골드해외반 (0)"
      },
      {
        label: "꽃게선생반 (0)"
      }
    ]
  },
  {
    path: "/admin/payments/all",
    title: "전체 결제 내역",
    headings: [
      "전체 결제 내역"
    ],
    columns: [
      "아이디",
      "이름",
      "품목",
      "결제일",
      "결제금액",
      "결제구분"
    ],
    buttons: [
      {
        label: "2026-09-08"
      },
      {
        label: "2026-10-08"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      },
      {
        label: "초기화"
      }
    ]
  },
  {
    path: "/admin/payments/card",
    title: "카드 결제 내역",
    headings: [
      "카드 결제 내역"
    ],
    columns: [
      "아이디",
      "이름",
      "품목",
      "결제일",
      "결제금액",
      "카드사",
      "승인번호"
    ],
    buttons: [
      {
        label: "2026-09-08"
      },
      {
        label: "2026-10-08"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      },
      {
        label: "초기화"
      }
    ]
  },
  {
    path: "/admin/payments/bank",
    title: "무통장 입금 내역",
    headings: [
      "무통장 입금 내역"
    ],
    columns: [
      "아이디",
      "이름",
      "품목",
      "입금은행",
      "결제금액",
      "결제일",
      "타입",
      "현금영수증번호",
      "승인번호",
      "입금확인"
    ],
    buttons: [
      {
        label: "추가"
      },
      {
        label: "2026-09-08"
      },
      {
        label: "2026-10-08"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      },
      {
        label: "초기화"
      }
    ]
  },
  {
    path: "/admin/vip-products",
    title: "VIP 상품관리",
    headings: [
      "VIP 상품관리"
    ],
    columns: [
      "",
      "상품명",
      "전문가",
      "기본개월수",
      "서비스개월",
      "금액",
      "이벤트설정",
      "텔레그램링크",
      ""
    ],
    buttons: [
      {
        label: "상품등록"
      }
    ]
  },
  {
    path: "/admin/board/expert/8bd3703c-2f94-4067-b366-f97323116386",
    title: "골드마스터 게시판",
    headings: [
      "골드마스터 게시판"
    ],
    columns: [
      "번호",
      "제목",
      "공개여부",
      "게시일",
      "관리"
    ],
    buttons: [
      {
        label: "공지사항 추가"
      },
      {
        label: "홍보팝업문구"
      },
      {
        label: "작성"
      }
    ]
  },
  {
    path: "/admin/board/expert/a92bf325-8f3a-48b1-b656-4b323c5f5d69",
    title: "꽃게선생 게시판",
    headings: [
      "꽃게선생 게시판"
    ],
    columns: [
      "제목",
      "등록일",
      "관리",
      "번호",
      "제목",
      "공개여부",
      "게시일",
      "관리"
    ],
    buttons: [
      {
        label: "공지사항 추가"
      },
      {
        label: "홍보팝업문구"
      },
      {
        label: "작성"
      }
    ]
  },
  {
    path: "/admin/board/paid-stock/8bd3703c-2f94-4067-b366-f97323116386",
    title: "골드마스터 - 영상",
    headings: [
      "골드마스터 - 영상"
    ],
    columns: [
      "번호",
      "카테고리",
      "제목",
      "금액",
      "작성일",
      "총 시청횟수",
      "총 결제횟수",
      "관리"
    ],
    buttons: [
      {
        label: "홍보팝업문구"
      },
      {
        label: "작성"
      }
    ]
  },
  {
    path: "/admin/board/paid-stock/a92bf325-8f3a-48b1-b656-4b323c5f5d69",
    title: "꽃게선생 - 영상",
    headings: [
      "꽃게선생 - 영상"
    ],
    columns: [
      "번호",
      "카테고리",
      "제목",
      "금액",
      "작성일",
      "총 시청횟수",
      "총 결제횟수",
      "관리"
    ],
    buttons: [
      {
        label: "홍보팝업문구"
      },
      {
        label: "작성"
      }
    ]
  },
  {
    path: "/admin/board/support/notice",
    title: "공지사항",
    headings: [
      "공지사항"
    ],
    columns: [
      "번호",
      "제목",
      "게시일",
      "관리"
    ],
    buttons: [
      {
        label: "작성"
      }
    ]
  },
  {
    path: "/admin/board/support/event",
    title: "공지사항",
    headings: [
      "공지사항"
    ],
    columns: [
      "번호",
      "제목",
      "게시일",
      "관리"
    ],
    buttons: [
      {
        label: "작성"
      }
    ]
  },
  {
    path: "/admin/board/support/faq",
    title: "자주묻는질문",
    headings: [
      "자주묻는질문"
    ],
    columns: [
      "번호",
      "제목",
      "게시일",
      "관리"
    ],
    buttons: [
      {
        label: "작성"
      }
    ]
  },
  {
    path: "/admin/design/main",
    title: "메인페이지 관리",
    headings: [
      "메인페이지 관리",
      "상단 배너",
      "전문가 리스트",
      "윌클럽 운영방"
    ],
    columns: [],
    buttons: [
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: "등록"
      },
      {
        label: "수정"
      },
      {
        label: "삭제"
      },
      {
        label: "전문가 추가"
      },
      {
        label: "등록"
      }
    ]
  },
  {
    path: "/admin/design/product-detail",
    title: "메인페이지 관리",
    headings: [
      "메인페이지 관리",
      "상단 배너",
      "전문가 리스트",
      "윌클럽 운영방"
    ],
    columns: [],
    buttons: [
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: ""
      },
      {
        label: "등록"
      },
      {
        label: "수정"
      },
      {
        label: "삭제"
      },
      {
        label: "수정"
      },
      {
        label: "삭제"
      },
      {
        label: "수정"
      },
      {
        label: "삭제"
      },
      {
        label: "전문가 추가"
      },
      {
        label: ""
      },
      {
        label: "수정"
      },
      {
        label: ""
      },
      {
        label: "수정"
      },
      {
        label: ""
      },
      {
        label: "수정"
      },
      {
        label: ""
      },
      {
        label: "수정"
      },
      {
        label: "등록"
      }
    ]
  },
  {
    path: "/admin/design/etc",
    title: "기타관리",
    headings: [
      "기타관리"
    ],
    columns: [],
    buttons: [
      {
        label: "무료주식정보"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 이용안내"
      },
      {
        label: "수정"
      },
      {
        label: "수정"
      }
    ]
  },
  {
    path: "/admin/design/terms?type=terms",
    title: "이용약관 관리",
    headings: [
      "이용약관 관리"
    ],
    columns: [],
    buttons: [
      {
        label: "저장"
      },
      {
        label: "이용약관"
      },
      {
        label: "개인정보 취급방침"
      },
      {
        label: "투자 유의사항"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      }
    ]
  },
  {
    path: "/admin/design/terms?type=privacy",
    title: "이용약관 관리",
    headings: [
      "이용약관 관리",
      "이전 버전 이력"
    ],
    columns: [],
    buttons: [
      {
        label: "저장"
      },
      {
        label: "이용약관"
      },
      {
        label: "개인정보 취급방침"
      },
      {
        label: "투자 유의사항"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "B"
      },
      {
        label: "I"
      },
      {
        label: "U"
      },
      {
        label: "S"
      },
      {
        label: "⇤"
      },
      {
        label: "⇼"
      },
      {
        label: "⇥"
      },
      {
        label: "• 목록"
      },
      {
        label: "1. 목록"
      },
      {
        label: "표"
      },
      {
        label: "링크"
      },
      {
        label: "이미지"
      },
      {
        label: "영상"
      },
      {
        label: "내용 보기"
      }
    ]
  },
  {
    path: "/admin/design/terms?type=investment",
    title: "이용약관 관리",
    headings: [
      "이용약관 관리"
    ],
    columns: [],
    buttons: [
      {
        label: "저장"
      },
      {
        label: "이용약관"
      },
      {
        label: "개인정보 취급방침"
      },
      {
        label: "투자 유의사항"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "B"
      },
      {
        label: "I"
      },
      {
        label: "U"
      },
      {
        label: "S"
      },
      {
        label: "⇤"
      },
      {
        label: "⇼"
      },
      {
        label: "⇥"
      },
      {
        label: "• 목록"
      },
      {
        label: "1. 목록"
      },
      {
        label: "표"
      },
      {
        label: "링크"
      },
      {
        label: "이미지"
      },
      {
        label: "영상"
      }
    ]
  },
  {
    path: "/admin/design/terms?type=consent_vip",
    title: "이용약관 관리",
    headings: [
      "이용약관 관리"
    ],
    columns: [],
    buttons: [
      {
        label: "저장"
      },
      {
        label: "이용약관"
      },
      {
        label: "개인정보 취급방침"
      },
      {
        label: "투자 유의사항"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "B"
      },
      {
        label: "I"
      },
      {
        label: "U"
      },
      {
        label: "S"
      },
      {
        label: "⇤"
      },
      {
        label: "⇼"
      },
      {
        label: "⇥"
      },
      {
        label: "• 목록"
      },
      {
        label: "1. 목록"
      },
      {
        label: "표"
      },
      {
        label: "링크"
      },
      {
        label: "이미지"
      },
      {
        label: "영상"
      }
    ]
  },
  {
    path: "/admin/design/terms?type=consent_paid_stock",
    title: "이용약관 관리",
    headings: [
      "이용약관 관리"
    ],
    columns: [],
    buttons: [
      {
        label: "저장"
      },
      {
        label: "이용약관"
      },
      {
        label: "개인정보 취급방침"
      },
      {
        label: "투자 유의사항"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "B"
      },
      {
        label: "I"
      },
      {
        label: "U"
      },
      {
        label: "S"
      },
      {
        label: "⇤"
      },
      {
        label: "⇼"
      },
      {
        label: "⇥"
      },
      {
        label: "• 목록"
      },
      {
        label: "1. 목록"
      },
      {
        label: "표"
      },
      {
        label: "링크"
      },
      {
        label: "이미지"
      },
      {
        label: "영상"
      }
    ]
  },
  {
    path: "/admin/design/terms?type=service_vip",
    title: "이용약관 관리",
    headings: [
      "이용약관 관리",
      "2. 과납\xB7오납 요금 처리",
      "3. 중도 해지 시 환불 기준",
      "4. 환불이 가능한 경우",
      "5. 환불 절차 및 방법"
    ],
    columns: [],
    buttons: [
      {
        label: "저장"
      },
      {
        label: "이용약관"
      },
      {
        label: "개인정보 취급방침"
      },
      {
        label: "투자 유의사항"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "B"
      },
      {
        label: "I"
      },
      {
        label: "U"
      },
      {
        label: "S"
      },
      {
        label: "⇤"
      },
      {
        label: "⇼"
      },
      {
        label: "⇥"
      },
      {
        label: "• 목록"
      },
      {
        label: "1. 목록"
      },
      {
        label: "표"
      },
      {
        label: "링크"
      },
      {
        label: "이미지"
      },
      {
        label: "영상"
      }
    ]
  },
  {
    path: "/admin/design/terms?type=service_paid_stock",
    title: "이용약관 관리",
    headings: [
      "이용약관 관리"
    ],
    columns: [],
    buttons: [
      {
        label: "저장"
      },
      {
        label: "이용약관"
      },
      {
        label: "개인정보 취급방침"
      },
      {
        label: "투자 유의사항"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "VIP 상품"
      },
      {
        label: "주식교육영상"
      },
      {
        label: "B"
      },
      {
        label: "I"
      },
      {
        label: "U"
      },
      {
        label: "S"
      },
      {
        label: "⇤"
      },
      {
        label: "⇼"
      },
      {
        label: "⇥"
      },
      {
        label: "• 목록"
      },
      {
        label: "1. 목록"
      },
      {
        label: "표"
      },
      {
        label: "링크"
      },
      {
        label: "이미지"
      },
      {
        label: "영상"
      }
    ]
  },
  {
    path: "/admin/promotion/coupon",
    title: "서비스쿠폰발행",
    headings: [
      "서비스쿠폰발행"
    ],
    columns: [],
    buttons: [
      {
        label: "쿠폰만들기"
      }
    ]
  },
  {
    path: "/admin/promotion/point",
    title: "예치금",
    headings: [
      "예치금"
    ],
    columns: [
      "일자",
      "아이디",
      "닉네임",
      "구분",
      "금액",
      "사유"
    ],
    buttons: [
      {
        label: "충전 설정"
      },
      {
        label: "지급 / 차감"
      },
      {
        label: "전체"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      },
      {
        label: "10개씩"
      },
      {
        label: "\xAB"
      },
      {
        label: "‹"
      },
      {
        label: "1"
      },
      {
        label: "›"
      },
      {
        label: "\xBB"
      }
    ]
  },
  {
    path: "/admin/sms/auto",
    title: "자동 SMS 발송 설정",
    headings: [
      "자동 SMS 발송 설정"
    ],
    columns: [],
    buttons: [
      {
        label: "적용"
      }
    ]
  },
  {
    path: "/admin/sms/history",
    title: "SMS 발송 내역",
    headings: [
      "SMS 발송 내역"
    ],
    columns: [
      "아이디",
      "성함",
      "닉네임",
      "연락처",
      "발송일",
      "내용"
    ],
    buttons: []
  },
  {
    path: "/admin/analytics/all",
    title: "SMS 발송 내역",
    headings: [
      "SMS 발송 내역"
    ],
    columns: [
      "아이디",
      "성함",
      "닉네임",
      "연락처",
      "발송일",
      "내용"
    ],
    buttons: []
  },
  {
    path: "/admin/analytics/revenue",
    title: "매출 추이",
    headings: [
      "매출 추이"
    ],
    columns: [
      "날짜",
      "구분",
      "회원",
      "상품",
      "금액"
    ],
    buttons: [
      {
        label: "최근 30일"
      }
    ]
  },
  {
    path: "/admin/analytics/access",
    title: "매출 추이",
    headings: [
      "매출 추이"
    ],
    columns: [
      "날짜",
      "구분",
      "회원",
      "상품",
      "금액"
    ],
    buttons: [
      {
        label: "최근 30일"
      }
    ]
  },
  {
    path: "/admin/analytics/access-status",
    title: "접속 현황",
    headings: [
      "접속 현황"
    ],
    columns: [
      "아이디",
      "이름",
      "IP",
      "접속경로",
      "브라우저/기기",
      "접속일시"
    ],
    buttons: [
      {
        label: "IP 차단 설정"
      },
      {
        label: "관리자 접속 IP 설정"
      },
      {
        label: "2026-10-08"
      },
      {
        label: "2026-10-08"
      },
      {
        label: "아이디"
      },
      {
        label: "검색"
      }
    ]
  },
  {
    path: "/admin/analytics/admin-access-status",
    title: "관리자 통계 (로그인 기록)",
    headings: [
      "관리자 통계 (로그인 기록)"
    ],
    columns: [
      "아이디",
      "이름",
      "IP",
      "브라우저/기기",
      "로그인 일시"
    ],
    buttons: [
      {
        label: "검색"
      }
    ]
  },
  {
    path: "/admin/settings/general",
    title: "일반설정",
    headings: [
      "일반설정"
    ],
    columns: [],
    buttons: [
      {
        label: "이미지 제거"
      },
      {
        label: "저장"
      }
    ]
  },
  {
    path: "/admin/staff/list",
    title: "운영진관리",
    headings: [
      "운영진관리"
    ],
    columns: [
      "아이디",
      "이름",
      "연락처",
      "권한",
      "관리권한",
      "관리"
    ],
    buttons: [
      {
        label: "등록"
      }
    ]
  },
  {
    path: "/admin/staff/experts",
    title: "전문가 목록",
    headings: [
      "전문가 목록"
    ],
    columns: [
      "아이디",
      "닉네임",
      "관리"
    ],
    buttons: [
      {
        label: "등록"
      }
    ]
  }
];

// data/registry.ts
var groups = [
  { id: "members", title: "회원 관리", icon: "Users" },
  { id: "payments", title: "결제 관리", icon: "CreditCard" },
  { id: "vip", title: "VIP 상품", icon: "Crown" },
  { id: "board", title: "게시글 \xB7 교육영상", icon: "FileText" },
  { id: "design", title: "사이트 화면", icon: "PanelsTopLeft" },
  { id: "promotion", title: "쿠폰 \xB7 포인트", icon: "Gift" },
  { id: "sms", title: "문자 관리", icon: "MessageSquare" },
  { id: "analytics", title: "통계 \xB7 기록", icon: "ChartColumn" },
  { id: "settings", title: "운영 설정", icon: "Settings" }
];
var f = (key, label, type = "text", extra = {}) => ({ key, label, type, ...extra });
var expertNames = ["골드마스터", "꽃게선생"];
var productNames = ["골드마스터반", "단타반", "골드해외반", "골드텐버거반", "꽃게선생반"];
var fields = {
  members: [f("loginId", "아이디", "text", { required: true }), f("name", "이름", "text", { required: true }), f("nickname", "닉네임", "text", { required: true }), f("phone", "연락처", "tel", { required: true }), f("email", "이메일", "email"), f("status", "회원 상태", "select", { options: ["정상", "만기", "휴면", "탈퇴"], required: true }), f("group", "이용 서비스", "select", { options: ["무료회원", ...productNames, "중복회원"] }), f("start", "서비스 시작일", "date"), f("end", "서비스 종료일", "date"), f("balance", "보유 포인트", "number", { min: 0, readonly: true }), f("paidPoints", "유료 포인트", "number", { min: 0, readonly: true, advanced: true }), f("freePoints", "무료 포인트", "number", { min: 0, advanced: true, hint: "쿠폰 등으로 지급한 포인트입니다." }), f("cafeNickname", "카페 닉네임"), f("joined", "가입일", "date", { advanced: true }), f("lastVisit", "최근 접속일", "date", { advanced: true }), f("lastPayment", "최근 결제일", "date", { advanced: true }), f("visitCount", "방문수", "number", { advanced: true, min: 0 }), f("withdrawn", "탈퇴일", "date", { advanced: true }), f("reason", "탈퇴 사유", "textarea", { advanced: true }), f("memo", "관리 메모", "textarea")],
  payments: [f("loginId", "회원 아이디", "text", { required: true }), f("name", "회원 이름", "text", { required: true }), f("product", "결제 품목", "select", { options: [...productNames, "주식교육영상", "포인트 충전"], required: true }), f("amount", "결제금액", "number", { required: true, min: 1 }), f("method", "결제수단", "select", { options: ["카드", "무통장입금", "포인트"], required: true }), f("status", "처리 상태", "select", { options: ["입금대기", "완료", "취소"], required: true }), f("date", "결제일", "date", { required: true }), f("bank", "입금은행"), f("depositor", "입금자명"), f("receiptType", "현금영수증 구분", "select", { options: ["신청안함", "소득공제", "지출증빙"] }), f("receiptNumber", "현금영수증 식별번호", "text", { advanced: true, hint: "샘플 식별번호만 입력하세요. 운영번호는 전달본에 저장하지 마세요." }), f("approval", "카드 승인번호", "text", { advanced: true }), f("receiptApproval", "현금영수증 승인번호", "text", { advanced: true }), f("cardCompany", "카드사", "select", { options: ["선택안함", "국민", "신한", "삼성", "현대", "롯데", "우리", "하나", "농협", "비씨"], advanced: true }), f("memo", "처리 메모", "textarea")],
  products: [f("title", "상품명", "text", { required: true }), f("expert", "전문가", "select", { options: expertNames, required: true }), f("visible", "판매 상태", "select", { options: ["판매중", "판매중지"] }), f("image", "전문가 이미지", "image"), f("telegram", "텔레그램 입장 주소", "url"), f("baseMonths", "기본 개월수", "number", { min: 1, required: true }), f("bonusMonths", "추가 서비스 개월수", "number", { min: 0 }), f("amount", "기본 금액", "number", { min: 0, required: true }), f("options", "기간별 이용권", "options", { hint: "이용권별 기본기간\xB7추가기간\xB7결제금액을 설정합니다." }), f("event", "이벤트 적용", "toggle"), f("eventText", "이벤트 안내", "textarea"), f("content", "상품 상세 내용", "rich")],
  articles: [f("title", "게시글 제목", "text", { required: true }), f("board", "게시판", "select", { options: ["골드마스터 게시판", "꽃게선생 게시판", "공지사항", "이벤트", "자주묻는질문"], required: true }), f("category", "카테고리", "select", { options: ["전체", "회원정보", "결제", "이용문의", "진행중", "종료"] }), f("visibility", "공개 범위", "select", { options: ["공개", "전체공개", "무료회원공개", "유료회원공개", "회원전용", "비공개"] }), f("copyAllowed", "복사 허용", "toggle", { advanced: true }), f("pinned", "상단 공지", "toggle"), f("date", "게시일", "date", { required: true }), f("start", "이벤트 시작일", "date", { advanced: true }), f("end", "이벤트 종료일", "date", { advanced: true }), f("image", "대표 이미지", "image"), f("titleColor", "제목 글자색", "color", { advanced: true }), f("titleSize", "제목 글자크기(px)", "number", { min: 12, max: 48, advanced: true, defaultValue: 18 }), f("bold", "제목 굵게", "toggle", { advanced: true }), f("content", "게시글 본문", "rich", { required: true })],
  videos: [f("title", "주식교육영상 제목", "text", { required: true }), f("expert", "전문가", "select", { options: expertNames, required: true }), f("category", "카테고리", "select", { options: ["주식분석", "주식교육", "시황분석", "무료영상"], required: true }), f("amount", "이용 금액", "number", { min: 0, required: true }), f("image", "썸네일", "image"), f("videoUrl", "영상 주소", "url", { required: true }), f("summary", "핵심요약", "text"), f("description", "영상 설명", "textarea"), f("duration", "영상 길이", "text", { hint: "예: 45:15" }), f("date", "게시일", "date", { required: true }), f("visibility", "공개 범위", "select", { options: ["공개", "전체공개", "무료회원공개", "유료회원공개", "회원전용", "비공개"] }), f("views", "총 시청횟수", "number", { advanced: true, min: 0 }), f("purchases", "총 결제횟수", "number", { advanced: true, min: 0 }), f("content", "영상 안내", "rich")],
  banners: [f("title", "배너 이름", "text", { required: true }), f("image", "배너 이미지", "image"), f("mobileImage", "모바일 이미지", "image", { advanced: true }), f("link", "클릭 연결주소", "url"), f("order", "노출 순서", "number", { min: 1, required: true }), f("visible", "노출 상태", "select", { options: ["노출", "숨김"] }), f("start", "노출 시작일", "date"), f("end", "노출 종료일", "date")],
  rooms: [f("title", "운영반 이름", "text", { required: true }), f("expert", "전문가", "select", { options: expertNames }), f("subtitle", "소개 문구"), f("image", "대표 이미지", "image"), f("link", "연결 주소", "url"), f("order", "노출 순서", "number", { min: 1 }), f("visible", "노출 상태", "select", { options: ["노출", "숨김"] })],
  experts: [f("staffId", "연결 운영진", "select"), f("name", "전문가 이름", "text", { required: true }), f("nickname", "전문가 닉네임", "text", { required: true }), f("loginId", "전문가 아이디", "text", { required: true }), f("description", "소개 문구", "textarea"), f("image", "프로필 이미지", "image"), f("order", "노출 순서", "number", { min: 1 }), f("visible", "활동 상태", "select", { options: ["활동", "중지"] }), f("link", "소개 연결주소", "url")],
  terms: [f("title", "문서명", "text", { required: true }), f("type", "문서 종류", "select", { options: ["이용약관", "개인정보 취급방침", "투자 유의사항", "개인정보 동의 VIP", "개인정보 동의 주식교육영상", "서비스 약관 VIP", "서비스 약관 주식교육영상"], required: true }), f("version", "버전", "text", { required: true }), f("date", "적용일", "date", { required: true }), f("content", "약관 본문", "rich", { required: true })],
  coupons: [f("title", "쿠폰명", "text", { required: true }), f("code", "쿠폰번호", "text", { required: true }), f("target", "지급 대상", "select", { options: ["전체회원", "VIP회원", "선택회원"], required: true }), f("memberIds", "대상 회원 아이디", "textarea", { advanced: true }), f("discountType", "할인 구분", "select", { options: ["정액", "정률"] }), f("amount", "할인값", "number", { required: true, min: 1 }), f("start", "시작일", "date", { required: true }), f("end", "종료일", "date", { required: true }), f("status", "사용 상태", "select", { options: ["사용가능", "중지", "만료"] }), f("usage", "쿠폰 이용 조건", "textarea", { defaultValue: "VIP 회원 서비스에만 이용 가능합니다." })],
  points: [f("title", "충전 상품명", "text", { required: true }), f("amount", "충전금액(원)", "number", { required: true, min: 1 }), f("bonus", "추가 지급 포인트", "number", { required: true, min: 0 }), f("visible", "사용 상태", "select", { options: ["사용", "중지"] }), f("start", "적용 시작일", "date"), f("end", "적용 종료일", "date"), f("memo", "안내 문구", "textarea")],
  smsRules: [f("title", "문자 이름", "text", { required: true }), f("trigger", "발송 시점", "select", { options: ["회원가입", "결제완료", "입금대기", "입금확인", "서비스 시작", "서비스 만기 전", "서비스 만기", "쿠폰 발급"], required: true }), f("enabled", "자동발송 사용", "toggle"), f("days", "만기 전 안내 일수", "number", { min: 0 }), f("sender", "발신번호", "tel", { required: true }), f("content", "문자 내용", "textarea", { required: true, hint: "{이름}, {서비스명}, {만기일}을 자동값 자리로 사용할 수 있습니다." })],
  smsHistory: [f("title", "발송 문구"), f("name", "수신 회원"), f("phone", "수신번호", "tel"), f("date", "발송일", "date"), f("status", "발송 결과", "select", { options: ["성공", "실패", "대기"] }), f("content", "발송 내용", "textarea")],
  staff: [f("password", "비밀번호", "password", { hint: "등록\xB7변경 확인용입니다. 저장\xB7전송하지 않습니다." }), f("loginId", "운영진 아이디", "text", { required: true }), f("name", "운영진 이름", "text", { required: true }), f("phone", "연락처", "tel"), f("email", "이메일", "email"), f("role", "역할", "select", { options: ["최고관리자", "운영관리자", "콘텐츠관리자", "조회전용"], required: true }), f("status", "접근 상태", "select", { options: ["사용", "중지"] }), f("permissions", "메뉴별 권한", "permissions")],
  general: [f("title", "설정 이름", "text", { required: true }), f("siteName", "사이트명", "text", { required: true }), f("phone", "대표전화", "tel"), f("email", "대표 이메일", "email"), f("company", "회사명"), f("businessNumber", "사업자번호"), f("representative", "대표자"), f("mailOrderNumber", "통신판매업신고번호"), f("privacyOfficer", "개인정보보호관리책임자"), f("address", "주소", "textarea"), f("bank", "입금은행"), f("accountNumber", "계좌번호"), f("accountHolder", "예금주"), f("logo", "사이트 로고", "image"), f("favicon", "브라우저 아이콘", "image", { advanced: true }), f("description", "사이트 소개", "textarea"), f("footer", "푸터 안내", "textarea"), f("content", "안내 본문", "rich", { advanced: true })],
  visits: [f("loginId", "아이디"), f("date", "접속일", "date"), f("ip", "접속IP"), f("device", "접속 기기"), f("status", "접속 결과")]
};
function boardFormFields(path, domain, base) {
  if (domain === "videos") return [
    f("content", "영상안내", "rich", { required: true }),
    f("amount", "영상 결제금액", "number", { min: 0, required: true }),
    f("viewLimit", "영상 시청제한횟수", "number", { min: 1, required: true, defaultValue: "" }),
    f("image", "썸네일", "image"),
    f("category", "카테고리", "select", { options: ["주식분석", "주식교육", "시황분석", "무료영상"], required: true })
  ];
  if (domain !== "articles") return base;
  if (path.startsWith("/admin/board/expert/")) return base.filter((field) => !["category", "image", "start", "end"].includes(field.key));
  if (path === "/admin/board/support/event") return [
    f("title", "이벤트 제목", "text", { required: true }),
    f("period", "이벤트기간", "date-range", { required: true }),
    f("content", "이벤트내용", "rich", { required: true }),
    f("link", "이벤트 바로가기 URL", "url", { required: true })
  ];
  return [f("title", "게시글 제목", "text", { required: true }), f("content", "게시글작성", "rich", { required: true })];
}
function makePage(path, title, group, domain, columns, description, extra = {}) {
  return { path, title, group, domain, columns, description, fields: boardFormFields(path, domain, fields[domain]), primary: domain === "members" ? "회원 추가" : domain === "articles" ? "글 작성" : domain === "videos" ? "교육영상 등록" : "추가", sourcePath: path, ...extra };
}
var byPath = new Map(source_screens_default.map((s) => [s.path, s]));
var memberIds = ["bdc41bee-79a6-401a-bac8-254fe58d4e22", "c2955b9b-27d5-47f3-b0f8-bf8b0df93f78", "5677b74b-f568-45ed-8bb1-ff79f0c94598", "450c3fb5-17b3-4421-9b62-e4fcbc02f1a1", "98ec487c-dc55-4294-9a90-ab94afc32d7d"];
var membersCols = ["loginId", "name", "nickname", "phone", "group", "end"];
var defaultPages = [
  makePage("/admin/members/all", "전체 회원", "members", "members", membersCols, "회원 정보를 찾고 이용 서비스를 관리합니다."),
  ...memberIds.map((id, i) => makePage("/admin/members/" + id, productNames[i] + " 회원", "members", "members", membersCols, "이용 중인 회원과 서비스 종료일을 확인합니다.", { filter: { key: "group", value: productNames[i] } })),
  ...[["expired", "만기 회원", "만기"], ["inactive", "장기 미접속 회원", "휴면"], ["withdrawn", "탈퇴 회원", "탈퇴"]].map(([id, title, status]) => makePage("/admin/members/" + id, title, "members", "members", membersCols, "대상을 확인한 뒤 필요한 작업을 선택하세요.", { filter: { key: "status", value: status } })),
  makePage("/admin/members/stats", "회원 가입 통계", "members", "members", ["joined", "loginId", "name", "group", "end"], "기간별 무료\xB7유료 가입과 서비스를 확인합니다.", { readonly: true, type: "analytics" }),
  ...[["all", "전체 결제 내역", ""], ["card", "카드 결제 내역", "카드"], ["bank", "무통장 입금 내역", "무통장입금"]].map(([id, title, method]) => makePage("/admin/payments/" + id, title, "payments", "payments", ["loginId", "name", "product", "amount", "method", "status", "date"], "결제내역과 입금대기 상태를 확인합니다.", { filter: method ? { key: "method", value: method } : void 0, readonly: id !== "bank", primary: id === "bank" ? "입금 내역 추가" : void 0 })),
  makePage("/admin/vip-products", "VIP 상품 관리", "vip", "products", ["title", "expert", "baseMonths", "bonusMonths", "amount", "visible"], "상품별 기간\xB7금액\xB7입장 안내를 관리합니다.", { primary: "상품 등록" }),
  ...expertNames.map((name, i) => makePage("/admin/board/expert/" + (i === 0 ? "8bd3703c-2f94-4067-b366-f97323116386" : "a92bf325-8f3a-48b1-b656-4b323c5f5d69"), name + " 게시판", "board", "articles", ["title", "visibility", "pinned", "date"], "무료주식정보 게시글과 공지를 관리합니다.", { filter: { key: "board", value: name + " 게시판" }, actions: ["공지사항 추가", "홍보팝업문구"] })),
  ...expertNames.map((name, i) => makePage("/admin/board/paid-stock/" + (i === 0 ? "8bd3703c-2f94-4067-b366-f97323116386" : "a92bf325-8f3a-48b1-b656-4b323c5f5d69"), name + " 주식교육영상", "board", "videos", ["image", "title", "category", "amount", "visibility", "date"], "영상\xB7썸네일\xB7길이\xB7이용 금액을 관리합니다.", { filter: { key: "expert", value: name }, actions: ["홍보팝업문구"] })),
  ...[["notice", "공지사항"], ["event", "이벤트"], ["faq", "자주 묻는 질문"]].map(([id, title]) => makePage("/admin/board/support/" + id, title, "board", "articles", ["title", "category", "visibility", "date"], "게시글을 작성하고 공개 상태를 관리합니다.", { filter: { key: "board", value: title === "자주 묻는 질문" ? "자주묻는질문" : title } })),
  makePage("/admin/design/main", "메인페이지 관리", "design", "banners", ["image", "title", "order", "visible", "link"], "배너\xB7전문가\xB7운영반을 필요한 영역별로 관리합니다."),
  makePage("/admin/design/product-detail", "상품 상세페이지", "design", "products", ["title", "expert", "visible"], "상품별 상세 내용과 안내를 편집합니다.", { primary: void 0 }),
  makePage("/admin/design/etc", "기타 안내 관리", "design", "general", ["title", "description"], "무료주식정보\xB7주식교육영상\xB7VIP 이용 안내를 관리합니다."),
  ...[["terms", "이용약관"], ["privacy", "개인정보 취급방침"], ["investment", "투자 유의사항"], ["consent_vip", "개인정보 동의 VIP"], ["consent_paid_stock", "개인정보 동의 주식교육영상"], ["service_vip", "서비스 약관 VIP"], ["service_paid_stock", "서비스 약관 주식교육영상"]].map(([id, title]) => makePage("/admin/design/terms?type=" + id, title, "design", "terms", ["title", "version", "date"], "적용 문서와 이전 버전을 확인합니다.", { filter: { key: "type", value: title }, primary: "새 버전 작성" })),
  makePage("/admin/promotion/coupon", "서비스쿠폰발행", "promotion", "coupons", ["title", "issueMethod", "status", "issued", "end", "createdAt"], "원본 쿠폰 발행방법\xB7혜택\xB7운영설정을 관리합니다.", { primary: "쿠폰만들기" }),
  makePage("/admin/promotion/point", "포인트 관리", "promotion", "points", ["title", "amount", "bonus", "visible"], "충전금액별 추가 지급 포인트를 설정합니다.", { primary: "충전 상품 추가", actions: ["회원 포인트 조정", "포인트 이용 내역"] }),
  makePage("/admin/sms/auto", "자동 문자 설정", "sms", "smsRules", ["title", "trigger", "enabled"], "발송 시점과 문구를 설정합니다. 실제 문자 발송은 연동 후 가능합니다."),
  makePage("/admin/sms/history", "문자 발송 내역", "sms", "smsHistory", ["name", "phone", "title", "status", "date"], "성공\xB7실패 기록과 발송 내용을 확인합니다.", { readonly: true, primary: void 0 }),
  ...[["all", "전체 통계", "payments"], ["revenue", "전문가 월별 매출내역", "payments"], ["access", "접속 추이", "visits"], ["access-status", "홈페이지 접속 현황", "visits"], ["admin-access-status", "관리자 접속 기록", "visits"]].map(([id, title, domain]) => makePage("/admin/analytics/" + id, title, "analytics", domain, domain === "payments" ? ["date", "product", "amount", "method", "status"] : ["loginId", "date", "ip", "device", "status"], "기간별 내역과 통계를 확인합니다.", { readonly: true, type: "analytics", primary: void 0 })),
  makePage("/admin/settings/general", "일반 설정", "settings", "general", ["title", "siteName"], "사이트와 회사정보\xB7계좌\xB7공통 안내를 관리합니다.", { filter: { key: "id", value: "site" }, type: "settings", primary: void 0 }),
  makePage("/admin/staff/list", "운영진 관리", "settings", "staff", ["loginId", "name", "role", "status"], "역할과 메뉴별 접근 권한을 확인합니다.", { primary: "운영진 추가" }),
  makePage("/admin/staff/experts", "전문가 관리", "settings", "experts", ["image", "name", "description", "visible"], "전문가 소개와 활동 상태를 관리합니다.", { primary: "전문가 추가", navHidden: true })
];
var pages = registry?.pages ?? defaultPages;
var originalPaths = source_screens_default.map((s) => s.path);
function fieldLabel(spec, key) {
  return spec.fields.find((f2) => f2.key === key)?.label ?? fields[spec.domain].find((f2) => f2.key === key)?.label ?? { joined: "가입일", lastVisit: "최근 접속일", total: "총계" }[key] ?? key;
}

// data/types.ts
var DOMAINS = ["members", "payments", "products", "articles", "videos", "banners", "rooms", "experts", "terms", "coupons", "points", "smsRules", "smsHistory", "staff", "general", "visits"];

// data/seed.json
// data/model.ts
var STORAGE_KEY = "willclub-admin-revision-20261012";
var initialState = () => JSON.parse(JSON.stringify(registry?.seed ?? seed_default));
var uid = () => globalThis.crypto?.randomUUID?.() ?? "local-" + Date.now() + "-" + Math.random().toString(16).slice(2);
function defaultRecord(spec) {
  const row = { id: uid() };
  for (const field of spec.fields) row[field.key] = field.defaultValue ?? (field.type === "toggle" ? false : field.type === "number" ? 0 : field.type === "options" ? [] : field.type === "permissions" ? {} : field.type === "select" ? field.options?.[0] ?? "" : field.type === "date" ? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : field.type === "color" ? "#363238" : "");
  if (spec.filter) row[spec.filter.key] = spec.filter.value;
  if (spec.domain === "members") {
    row.status = "정상";
    row.joined = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  }
  if (spec.domain === "payments") {
    row.status = "입금대기";
    row.method = "무통장입금";
  }
  if (spec.domain === "products") row.baseMonths = 1;
  if (spec.domain === "articles" || spec.domain === "videos") {
    row.date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    row.visibility = "공개";
  }
  if (spec.domain === "videos") row.title = "";
  return row;
}
function display(value2, key = "") {
  if (value2 === null || value2 === void 0 || value2 === "") return "—";
  if (typeof value2 === "boolean") return value2 ? "사용" : "중지";
  if (key === "amount") return Number(value2).toLocaleString("ko-KR") + "원";
  if (["balance", "bonus"].includes(key)) return Number(value2).toLocaleString("ko-KR") + "P";
  if (typeof value2 === "object") return Array.isArray(value2) ? value2.length + "개" : "설정됨";
  return String(value2);
}
function validateRecord(row, spec) {
  const errors = {};
  for (const f2 of spec.fields) {
    const value2 = row[f2.key];
    if (f2.type === "date-range") {
      if (!row.start || !row.end) errors[f2.key] = "이벤트기간을 입력해주세요.";
      else if (String(row.start) > String(row.end)) errors[f2.key] = "종료일은 시작일 이후여야 합니다.";
      continue;
    }
    if (f2.required && (value2 === void 0 || value2 === null || String(value2).replace(/<[^>]+>/g, "").trim() === "")) errors[f2.key] = f2.label + "을(를) 입력해주세요.";
    if (f2.type === "number" && value2 !== "" && value2 !== void 0) {
      const n = Number(value2);
      if (!Number.isFinite(n) || !Number.isSafeInteger(n)) errors[f2.key] = "숫자는 정수로 입력해주세요.";
      else if (f2.min !== void 0 && n < f2.min) errors[f2.key] = f2.min + " 이상으로 입력해주세요.";
      else if (f2.max !== void 0 && n > f2.max) errors[f2.key] = f2.max + " 이하로 입력해주세요.";
    }
    if (f2.type === "url" && value2) {
      try {
        const url = new URL(String(value2), "https://willclub.example");
        if (!["https:", "http:"].includes(url.protocol)) throw Error();
      } catch {
        errors[f2.key] = "올바른 웹 주소를 입력해주세요.";
      }
    }
    if (f2.type === "email" && value2 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value2))) errors[f2.key] = "이메일 주소를 확인해주세요.";
    if (f2.type === "select" && value2 && f2.options && !f2.options.includes(String(value2))) errors[f2.key] = "목록에서 선택해주세요.";
  }
  if (spec.fields.some((f2) => ["start", "end"].includes(f2.key) || f2.type === "date-range") && row.start && row.end && String(row.start) > String(row.end)) errors.end = "종료일은 시작일 이후여야 합니다.";
  if (spec.domain === "videos" && !row.videoFile && !row.videoUrl) errors.videoFile = "주식교육영상 파일을 선택해주세요.";
  if (spec.domain === "coupons" && row.discountType === "정률" && Number(row.amount) > 100) errors.amount = "할인율은 100% 이하여야 합니다.";
  if (spec.domain === "products") {
    const options = row.options;
    if (Array.isArray(options) && options.some((o) => !String(o.title ?? "").trim() || !Number.isSafeInteger(Number(o.amount)) || Number(o.amount) < 0 || Number(o.baseMonths) < 1 || Number(o.bonusMonths) < 0)) errors.options = "이용권 이름\xB7기본기간(1개월 이상)\xB7추가기간\xB7금액을 확인해주세요.";
  }
  return errors;
}
function validateState(v) {
  if (!v || typeof v !== "object") return false;
  const s = v;
  return s.version === 4 && !!s.records && DOMAINS.every((k) => Array.isArray(s.records[k]) && s.records[k].every((r) => r && typeof r === "object" && typeof r.id === "string")) && Array.isArray(s.logs) && s.logs.every((l) => l && typeof l.id === "string" && typeof l.date === "string" && typeof l.action === "string");
}
function filterRecords(records, spec, query, status, start, end, searchKey) {
  const dateKey = spec.path.endsWith("/expired") ? "end" : spec.path.endsWith("/inactive") ? "lastVisit" : spec.path.endsWith("/withdrawn") ? "withdrawn" : spec.domain === "members" ? "joined" : "date";
  return records.filter((r) => (!spec.filter || (spec.filter.key === "group" && Array.isArray(r.services) ? r.services.some((s) => s && typeof s === "object" && String(s.product) === spec.filter?.value && String(s.status) !== "환불") : String(r[spec.filter.key]) === spec.filter.value)) && (!query || String(searchKey === "all" ? Object.values(r).filter((v) => typeof v !== "object").join(" ") : r[searchKey] ?? "").toLocaleLowerCase("ko-KR").includes(query.toLocaleLowerCase("ko-KR"))) && (status === "전체" || ["status", "visibility", "visible", "group", "category", "method"].some((k) => String(r[k]) === status)) && (!start || String(r[dateKey] ?? r.date ?? r.joined ?? "") >= start) && (!end || String(r[dateKey] ?? r.date ?? r.joined ?? "").slice(0, 10) <= end));
}
function downloadFile(name, content, type = "application/json") {
  const url = URL.createObjectURL(new Blob(["﻿" + content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function csv(records, fields2) {
  const escape = (v) => '"' + display(v).replace(/"/g, '""') + '"';
  return [fields2.map((f2) => escape(f2.label)).join(","), ...records.map((r) => fields2.map((f2) => escape(r[f2.key])).join(","))].join("\r\n");
}

// components/DataWorkspace.tsx
var import_react11 = React;

// components/RecordEditor.tsx
var import_react4 = React;

// components/RichTextEditor.tsx
var import_react3 = React;
var import_jsx_runtime = JSXRuntime;
var ALLOWED_TAGS = /* @__PURE__ */ new Set([
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "h2",
  "h3",
  "ul",
  "ol",
  "li",
  "blockquote",
  "a",
  "img",
  "span",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "iframe",
  "video"
]);
var BLOCKED_TAGS = /* @__PURE__ */ new Set(["script", "style", "frame", "frameset", "object", "embed", "applet", "meta", "link", "base", "svg", "math", "template", "portal"]);
var ATOMIC_TAGS = /* @__PURE__ */ new Set(["br", "img", "iframe", "video"]);
var HTML_VOID_TAGS = /* @__PURE__ */ new Set(["br", "img"]);
var TABLE_PARTS = /* @__PURE__ */ new Set(["thead", "tbody", "tr", "th", "td"]);
var DATA_IMAGE_PATTERN = /^data:image\/(?:png|jpeg|webp|gif);base64,[a-z0-9+/=\s]+$/i;
var IMAGE_FILE_TYPES = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
var MAX_IMAGE_BYTES = 2 * 1024 * 1024;
var LEGACY_FONT_SIZES = { "1": "12px", "2": "14px", "3": "16px", "4": "18px", "5": "24px", "6": "28px", "7": "32px" };
var TEXT_COLOR_PRESETS = [
  { label: "버건디", value: "#912c2f" },
  { label: "파랑", value: "#305c80" },
  { label: "초록", value: "#397769" },
  { label: "금색", value: "#a77a3e" },
  { label: "기본 글자색", value: "#63505a" }
];
var FONT_SIZES = [14, 16, 18, 20, 24, 28, 32];
var IFRAME_SANDBOX = "allow-scripts allow-same-origin allow-presentation";
var IFRAME_ALLOW = "autoplay; fullscreen; picture-in-picture";
function escapeText(value2) {
  return value2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
}
function paragraphFromText(value2) {
  if (!value2.trim()) return "";
  return `<p>${escapeText(value2).replace(/\r?\n/g, "<br>")}</p>`;
}
function hasHtmlTag(value2) {
  return /<\/?[a-z][\s\S]*?>/i.test(value2);
}
function isSafeHttpsUrl(value2) {
  try {
    const url = new URL(value2.trim());
    return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password;
  } catch {
    return false;
  }
}
function isSafeLinkUrl(value2) {
  const trimmed = value2.trim();
  return /^\/(?!\/)/.test(trimmed) || trimmed.startsWith("#") || /^mailto:/i.test(trimmed) || isSafeHttpsUrl(trimmed);
}
function isSafeImageUrl(value2) {
  const trimmed = value2.trim();
  return DATA_IMAGE_PATTERN.test(trimmed) || isSafeHttpsUrl(trimmed);
}
function isSafeVideoUrl(value2) {
  try {
    const url = new URL(value2.trim());
    return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password && /\.(?:mp4|webm)$/i.test(url.pathname);
  } catch {
    return false;
  }
}
function isSafeEmbedUrl(value2) {
  try {
    const url = new URL(value2.trim());
    if (url.protocol !== "https:" || !url.hostname || url.username || url.password || url.hash) return false;
    const host = url.hostname.toLowerCase();
    if ((host === "www.youtube.com" || host === "www.youtube-nocookie.com") && /^\/embed\/[A-Za-z0-9_-]{6,128}(?:\/)?$/.test(url.pathname)) return true;
    return host === "player.vimeo.com" && /^\/video\/\d{1,20}(?:\/)?$/.test(url.pathname);
  } catch {
    return false;
  }
}
function sanitizeCssColor(value2) {
  const color = value2.trim().toLowerCase();
  if (/^#[a-f0-9]{3}(?:[a-f0-9]{3})?$/i.test(color)) return color;
  const rgbMatch = color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i);
  if (!rgbMatch) return null;
  const channels = rgbMatch.slice(1).map(Number);
  if (channels.some((channel) => channel > 255)) return null;
  return `rgb(${channels.join(", ")})`;
}
function sanitizeFontSize(value2) {
  const match = value2.trim().match(/^(\d+(?:\.\d+)?)px$/i);
  if (!match) return null;
  const size = Number(match[1]);
  return Number.isFinite(size) && size >= 12 && size <= 48 ? `${size}px` : null;
}
function sanitizeWidth(value2) {
  const match = value2.trim().match(/^(\d+(?:\.\d+)?)(px|%)$/i);
  if (!match) return null;
  const amount3 = Number(match[1]);
  const unit = match[2].toLowerCase();
  if (!Number.isFinite(amount3) || amount3 <= 0 || unit === "%" && amount3 > 100 || unit === "px" && amount3 > 2e3) return null;
  return `${amount3}${unit}`;
}
function sanitizeTextAlign(value2) {
  const align = value2.trim().toLowerCase();
  return align === "left" || align === "center" || align === "right" || align === "justify" ? align : null;
}
function parseSafeInlineStyle(value2) {
  const safe = {};
  value2.split(";").forEach((declaration) => {
    const separator = declaration.indexOf(":");
    if (separator < 1) return;
    const property = declaration.slice(0, separator).trim().toLowerCase();
    const propertyValue = declaration.slice(separator + 1).trim();
    if (!propertyValue || /(?:expression|url\s*\(|@import|javascript:|behavior|var\s*\(|--)/i.test(propertyValue)) return;
    if (property === "color" || property === "background-color") {
      const color = sanitizeCssColor(propertyValue);
      if (color) safe[property] = color;
      return;
    }
    if (property === "font-size") {
      const fontSize = sanitizeFontSize(propertyValue);
      if (fontSize) safe[property] = fontSize;
      return;
    }
    if (property === "font-weight") {
      const fontWeight = propertyValue.toLowerCase();
      if (fontWeight === "normal" || fontWeight === "bold" || /^(?:[1-9]00)$/.test(fontWeight)) safe[property] = fontWeight;
      return;
    }
    if (property === "font-style") {
      const fontStyle = propertyValue.toLowerCase();
      if (fontStyle === "normal" || fontStyle === "italic") safe[property] = fontStyle;
      return;
    }
    if (property === "text-decoration") {
      const decoration = propertyValue.toLowerCase().replace(/\s+/g, " ");
      if (decoration === "underline" || decoration === "line-through" || decoration === "underline line-through" || decoration === "line-through underline") safe[property] = decoration;
      return;
    }
    if (property === "text-align") {
      const align = sanitizeTextAlign(propertyValue);
      if (align) safe[property] = align;
      return;
    }
    if (property === "width") {
      const width = sanitizeWidth(propertyValue);
      if (width) safe[property] = width;
    }
  });
  return safe;
}
function restrictStyleForTag(tag, style) {
  const result = {};
  ["color", "background-color", "font-size", "font-weight", "font-style", "text-decoration"].forEach((name) => {
    if (style[name]) result[name] = style[name];
  });
  if ((tag === "p" || tag === "h2" || tag === "h3" || tag === "li" || tag === "blockquote" || tag === "th" || tag === "td") && style["text-align"]) result["text-align"] = style["text-align"];
  if ((tag === "table" || tag === "th" || tag === "td") && style.width) result.width = style.width;
  return result;
}
function serializeSafeInlineStyle(style) {
  const order = ["color", "background-color", "font-size", "font-weight", "font-style", "text-decoration", "text-align", "width"];
  return order.flatMap((property) => style[property] ? [`${property}: ${style[property]}`] : []).join("; ");
}
function legacyFontStyle(readAttribute) {
  const legacy = {};
  const color = sanitizeCssColor(readAttribute("color"));
  const fontSize = LEGACY_FONT_SIZES[readAttribute("size").trim()];
  if (color) legacy.color = color;
  if (fontSize) legacy["font-size"] = fontSize;
  return { ...legacy, ...parseSafeInlineStyle(readAttribute("style")) };
}
function canonicalTag(sourceTag) {
  if (sourceTag === "div") return "p";
  if (sourceTag === "font") return "span";
  if (sourceTag === "strike") return "s";
  return sourceTag;
}
function isTableChildAllowed(parentTag, tag) {
  if (tag === "table") return true;
  if (TABLE_PARTS.has(tag)) {
    if (tag === "thead" || tag === "tbody") return parentTag === "table";
    if (tag === "tr") return parentTag === "table" || parentTag === "thead" || parentTag === "tbody";
    return parentTag === "tr";
  }
  if (parentTag === "table" || parentTag === "thead" || parentTag === "tbody" || parentTag === "tr") return false;
  return true;
}
function safeTableSpan(value2) {
  const numeric = Number(value2.trim());
  return Number.isInteger(numeric) && numeric >= 1 && numeric <= 10 ? String(numeric) : null;
}
function readSafeAttributes(tag, sourceTag, readAttribute) {
  const sourceStyle = sourceTag === "font" ? legacyFontStyle(readAttribute) : parseSafeInlineStyle(readAttribute("style"));
  const align = sanitizeTextAlign(readAttribute("align"));
  if (align) sourceStyle["text-align"] = align;
  const style = restrictStyleForTag(tag, sourceStyle);
  const safe = {};
  const styleText = serializeSafeInlineStyle(style);
  if (styleText) safe.style = styleText;
  if (tag === "a") {
    const href = readAttribute("href");
    if (isSafeLinkUrl(href)) safe.href = href.trim();
  }
  if (tag === "img") {
    const src = readAttribute("src");
    if (!isSafeImageUrl(src)) return null;
    safe.src = src.trim();
    safe.alt = readAttribute("alt").slice(0, 300);
  }
  if (tag === "th" || tag === "td") {
    const colspan = safeTableSpan(readAttribute("colspan"));
    const rowspan = safeTableSpan(readAttribute("rowspan"));
    if (colspan) safe.colspan = colspan;
    if (rowspan) safe.rowspan = rowspan;
    if (tag === "th") {
      const scope = readAttribute("scope").trim().toLowerCase();
      if (scope === "col" || scope === "row" || scope === "colgroup" || scope === "rowgroup") safe.scope = scope;
    }
  }
  if (tag === "iframe") {
    const src = readAttribute("src");
    if (!isSafeEmbedUrl(src)) return null;
    safe.src = src.trim();
    safe.title = (readAttribute("title").trim() || "동영상 콘텐츠").slice(0, 200);
    safe.loading = "lazy";
    safe.sandbox = IFRAME_SANDBOX;
    safe.allow = IFRAME_ALLOW;
    safe.allowfullscreen = "";
  }
  if (tag === "video") {
    const src = readAttribute("src");
    if (!isSafeVideoUrl(src)) return null;
    safe.src = src.trim();
    safe.controls = "";
    safe.preload = "metadata";
  }
  return safe;
}
function serializeOpeningTag(tag, attributes) {
  const serialized = Object.entries(attributes).map(([name, value2]) => value2 === "" ? name : `${name}="${escapeText(value2)}"`);
  return `<${tag}${serialized.length ? ` ${serialized.join(" ")}` : ""}>`;
}
function appendSanitizedNode(source, target, targetDocument, parentTag) {
  if (source.nodeType === Node.TEXT_NODE) {
    target.appendChild(targetDocument.createTextNode(source.textContent || ""));
    return;
  }
  if (source.nodeType !== Node.ELEMENT_NODE) return;
  const element = source;
  const sourceTag = element.tagName.toLowerCase();
  if (BLOCKED_TAGS.has(sourceTag)) return;
  const tag = canonicalTag(sourceTag);
  if (!ALLOWED_TAGS.has(tag) || !isTableChildAllowed(parentTag, tag)) {
    Array.from(element.childNodes).forEach((child) => appendSanitizedNode(child, target, targetDocument, parentTag));
    return;
  }
  const attributes = readSafeAttributes(tag, sourceTag, (name) => element.getAttribute(name) || "");
  if (!attributes) return;
  const cleanElement = targetDocument.createElement(tag);
  Object.entries(attributes).forEach(([name, attributeValue]) => cleanElement.setAttribute(name, attributeValue));
  if (!ATOMIC_TAGS.has(tag)) Array.from(element.childNodes).forEach((child) => appendSanitizedNode(child, cleanElement, targetDocument, tag));
  target.appendChild(cleanElement);
}
function fallbackAttribute(attributes, name) {
  const match = attributes.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return (match?.[1] || match?.[2] || match?.[3] || "").trim();
}
function sanitizeHtmlFallback(value2) {
  if (!hasHtmlTag(value2)) return paragraphFromText(value2);
  const blockedTags = Array.from(BLOCKED_TAGS).join("|");
  const source = value2.replace(new RegExp(`<\\s*(${blockedTags})\\b[^>]*>[\\s\\S]*?(?:<\\s*\\/\\s*\\1\\b[^>]*>|$)`, "gi"), "").replace(new RegExp(`<\\s*\\/?(?:${blockedTags})\\b[^>]*\\/?\\s*>`, "gi"), "");
  const root2 = { sourceTag: "", tag: null, attributes: {}, contents: [] };
  const stack = [root2];
  const tokenPattern = /<\/?([a-z][a-z0-9:-]*)(?:\s+((?:"[^"]*"|'[^']*'|[^'"<>])*))?\s*(\/?)>/gi;
  let cursor = 0;
  const appendToCurrent = (markup) => stack[stack.length - 1].contents.push(markup);
  const currentParentTag = () => {
    for (let index = stack.length - 1; index > 0; index -= 1) if (stack[index].tag) return stack[index].tag;
    return null;
  };
  const finishFrame = (frame) => {
    const markup = frame.tag ? `${serializeOpeningTag(frame.tag, frame.attributes)}${frame.contents.join("")}</${frame.tag}>` : frame.contents.join("");
    stack[stack.length - 1].contents.push(markup);
  };
  for (const match of source.matchAll(tokenPattern)) {
    appendToCurrent(escapeText(source.slice(cursor, match.index)));
    cursor = (match.index || 0) + match[0].length;
    const full = match[0];
    const isClosing = /^<\s*\//.test(full);
    const sourceTag = (match[1] || "").toLowerCase();
    if (isClosing) {
      let index = stack.length - 1;
      while (index > 0 && stack[index].sourceTag !== sourceTag) index -= 1;
      if (index === 0) continue;
      while (stack.length - 1 >= index) finishFrame(stack.pop());
      continue;
    }
    const tag = canonicalTag(sourceTag);
    const attributesText = match[2] || "";
    const attributes = ALLOWED_TAGS.has(tag) && isTableChildAllowed(currentParentTag(), tag) ? readSafeAttributes(tag, sourceTag, (name) => fallbackAttribute(attributesText, name)) : null;
    const selfClosing = Boolean(match[3]) || ATOMIC_TAGS.has(tag);
    if (selfClosing) {
      if (attributes && ALLOWED_TAGS.has(tag)) {
        appendToCurrent(`${serializeOpeningTag(tag, attributes)}${HTML_VOID_TAGS.has(tag) ? "" : `</${tag}>`}`);
      }
      continue;
    }
    stack.push({ sourceTag, tag: attributes ? tag : null, attributes: attributes || {}, contents: [] });
  }
  appendToCurrent(escapeText(source.slice(cursor)));
  while (stack.length > 1) finishFrame(stack.pop());
  return root2.contents.join("").trim();
}
function sanitizeRichHtml(value2) {
  const source = String(value2 || "");
  if (!source.trim()) return "";
  if (typeof document === "undefined" || typeof DOMParser === "undefined") return sanitizeHtmlFallback(source);
  if (!hasHtmlTag(source)) return paragraphFromText(source);
  const parsed = new DOMParser().parseFromString(source, "text/html");
  const safeDocument = document.implementation.createHTMLDocument("rich-editor");
  const safeRoot = safeDocument.createElement("div");
  Array.from(parsed.body.childNodes).forEach((node) => appendSanitizedNode(node, safeRoot, safeDocument, null));
  return safeRoot.innerHTML.trim();
}
function RichTextEditor({ value: value2, onChange, label, id }) {
  const editorRef = (0, import_react3.useRef)(null);
  const codeRef = (0, import_react3.useRef)(null);
  const savedRangeRef = (0, import_react3.useRef)(null);
  const onChangeRef = (0, import_react3.useRef)(onChange);
  const [tab, setTab] = (0, import_react3.useState)("edit");
  const [code, setCode] = (0, import_react3.useState)(() => sanitizeRichHtml(value2));
  const [imageAlt, setImageAlt] = (0, import_react3.useState)("");
  const [videoUrl, setVideoUrl] = (0, import_react3.useState)("");
  const [tableRows, setTableRows] = (0, import_react3.useState)("2");
  const [tableColumns, setTableColumns] = (0, import_react3.useState)("2");
  const [feedback, setFeedback] = (0, import_react3.useState)("");
  const [textColor, setTextColor] = (0, import_react3.useState)("#63505a");
  const normalizedValue = (0, import_react3.useMemo)(() => sanitizeRichHtml(value2), [value2]);
  const labelId = `${id}-label`;
  (0, import_react3.useEffect)(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  const emit = (0, import_react3.useCallback)((rawHtml) => {
    const safeHtml = sanitizeRichHtml(rawHtml);
    onChangeRef.current(safeHtml);
    return safeHtml;
  }, []);
  const rememberSelection = (0, import_react3.useCallback)(() => {
    const editor = editorRef.current;
    const selection = window.getSelection();
    if (!editor || !selection || selection.rangeCount === 0 || !selection.anchorNode || !editor.contains(selection.anchorNode)) return;
    savedRangeRef.current = selection.getRangeAt(0).cloneRange();
  }, []);
  const focusEditor = (0, import_react3.useCallback)(() => {
    const editor = editorRef.current;
    if (!editor) return false;
    editor.focus({ preventScroll: true });
    const selection = window.getSelection();
    if (selection && savedRangeRef.current) {
      selection.removeAllRanges();
      selection.addRange(savedRangeRef.current);
    }
    return true;
  }, []);
  const updateFromEditor = (0, import_react3.useCallback)(() => {
    const editor = editorRef.current;
    if (!editor) return "";
    return emit(editor.innerHTML);
  }, [emit]);
  const insertSafeHtml = (0, import_react3.useCallback)((rawHtml) => {
    const editor = editorRef.current;
    const safeHtml = sanitizeRichHtml(rawHtml);
    if (!editor || !safeHtml || !focusEditor()) return false;
    const selection = window.getSelection();
    const range = selection && selection.rangeCount ? selection.getRangeAt(0) : null;
    if (!range || !editor.contains(range.commonAncestorContainer)) return false;
    const fragment = range.createContextualFragment(safeHtml);
    const lastNode = fragment.lastChild;
    range.deleteContents();
    range.insertNode(fragment);
    if (lastNode && selection) {
      range.setStartAfter(lastNode);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
      savedRangeRef.current = range.cloneRange();
    }
    emit(editor.innerHTML);
    return true;
  }, [emit, focusEditor]);
  (0, import_react3.useEffect)(() => {
    const editor = editorRef.current;
    const codeArea = codeRef.current;
    const activeElement = document.activeElement;
    const editingEditor = activeElement === editor;
    const editingCode = activeElement === codeArea;
    if (editor && !editingEditor && editor.innerHTML !== normalizedValue) editor.innerHTML = normalizedValue;
    if (codeArea && !editingCode && codeArea.value !== normalizedValue) setCode(normalizedValue);
    if (String(value2 || "") !== normalizedValue && !editingEditor && !editingCode) onChangeRef.current(normalizedValue);
  }, [normalizedValue, value2, tab]);
  function runCommand(command, commandValue) {
    if (!focusEditor()) return;
    document.execCommand(command, false, commandValue);
    rememberSelection();
    updateFromEditor();
  }
  function applyInlineStyle(style) {
    const editor = editorRef.current;
    if (!editor || !focusEditor()) return;
    const selection = window.getSelection();
    const range = selection && selection.rangeCount ? selection.getRangeAt(0) : null;
    if (!selection || !range || !editor.contains(range.commonAncestorContainer)) return;
    const styledSpan = document.createElement("span");
    if (style.color) styledSpan.style.color = style.color;
    if (style.backgroundColor) styledSpan.style.backgroundColor = style.backgroundColor;
    if (style.fontSize) styledSpan.style.fontSize = style.fontSize;
    if (range.collapsed) {
      document.execCommand("styleWithCSS", false, "true");
      if (style.color) document.execCommand("foreColor", false, style.color);
      if (style.backgroundColor) document.execCommand("hiliteColor", false, style.backgroundColor);
      styledSpan.appendChild(document.createTextNode("​"));
      range.insertNode(styledSpan);
      range.setStart(styledSpan.firstChild, 1);
      range.collapse(true);
    } else {
      const selectedContents = range.extractContents();
      styledSpan.appendChild(selectedContents);
      range.insertNode(styledSpan);
      range.selectNodeContents(styledSpan);
    }
    selection.removeAllRanges();
    selection.addRange(range);
    savedRangeRef.current = range.cloneRange();
    updateFromEditor();
  }
  function applyTextColor(color) {
    const safeColor = sanitizeCssColor(color);
    if (!safeColor) return;
    setTextColor(safeColor);
    setFeedback("");
    applyInlineStyle({ color: safeColor });
  }
  function applyFontSize(fontSize) {
    const safeFontSize = sanitizeFontSize(fontSize);
    if (!safeFontSize) return;
    setFeedback("");
    applyInlineStyle({ fontSize: safeFontSize });
  }
  function applyHighlight() {
    setFeedback("");
    applyInlineStyle({ backgroundColor: "#fff0bb" });
  }
  function clearInlineFormatting() {
    setFeedback("");
    runCommand("removeFormat");
  }
  function addLink() {
    const href = window.prompt("연결할 주소를 입력하세요.", "https://");
    if (href === null) return;
    if (!isSafeLinkUrl(href)) {
      setFeedback("링크는 /, #, https://, mailto: 주소만 사용할 수 있습니다.");
      return;
    }
    setFeedback("");
    runCommand("createLink", href.trim());
  }
  function insertImage(dataUrl) {
    const alt = escapeText(imageAlt.trim().slice(0, 300));
    if (!isSafeImageUrl(dataUrl) || !insertSafeHtml(`<img src="${escapeText(dataUrl)}" alt="${alt}">`)) return;
    setFeedback("");
  }
  function handleImageFile(file) {
    if (!file) return;
    if (file.size > MAX_IMAGE_BYTES) {
      setFeedback("이미지 파일은 2MB 이하만 업로드할 수 있습니다.");
      return;
    }
    if (!IMAGE_FILE_TYPES.has(file.type)) {
      setFeedback("PNG, JPEG, WEBP, GIF 파일만 사용할 수 있습니다.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string" && isSafeImageUrl(reader.result)) insertImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  function insertTable() {
    const rows = Number(tableRows);
    const columns = Number(tableColumns);
    if (!Number.isInteger(rows) || !Number.isInteger(columns) || rows < 1 || rows > 10 || columns < 1 || columns > 10) {
      setFeedback("표의 행과 열은 각각 1에서 10 사이의 정수여야 합니다.");
      return;
    }
    const table = `<table><tbody>${Array.from({ length: rows }, () => `<tr>${Array.from({ length: columns }, () => "<td><br></td>").join("")}</tr>`).join("")}</tbody></table><p><br></p>`;
    if (insertSafeHtml(table)) setFeedback(`${rows}행 ${columns}열 표를 삽입했습니다.`);
  }
  function insertVideo() {
    const url = videoUrl.trim();
    if (isSafeEmbedUrl(url)) {
      if (insertSafeHtml(`<iframe src="${escapeText(url)}" title="동영상 콘텐츠"></iframe>`)) {
        setVideoUrl("");
        setFeedback("안전한 동영상 임베드를 삽입했습니다.");
      }
      return;
    }
    if (isSafeVideoUrl(url)) {
      if (insertSafeHtml(`<video src="${escapeText(url)}"></video>`)) {
        setVideoUrl("");
        setFeedback("안전한 MP4/WEBM 동영상을 삽입했습니다.");
      }
      return;
    }
    setFeedback("YouTube/Vimeo의 HTTPS embed 주소 또는 HTTPS .mp4/.webm 주소만 사용할 수 있습니다.");
  }
  function clearEditor() {
    const editor = editorRef.current;
    if (!editor || !window.confirm("본문 내용을 모두 지울까요?")) return;
    editor.innerHTML = "";
    focusEditor();
    savedRangeRef.current = null;
    emit("");
    setCode("");
    setFeedback("본문 내용을 비웠습니다.");
  }
  function changeTab(nextTab) {
    if (nextTab === tab) return;
    let safeHtml = normalizedValue;
    if (tab === "edit" && editorRef.current) safeHtml = emit(editorRef.current.innerHTML);
    if (tab === "html") safeHtml = emit(code);
    if (editorRef.current && editorRef.current.innerHTML !== safeHtml) editorRef.current.innerHTML = safeHtml;
    setCode(safeHtml);
    setTab(nextTab);
  }
  const previewHtml = (0, import_react3.useMemo)(() => sanitizeRichHtml(tab === "html" ? code : normalizedValue), [code, normalizedValue, tab]);
  const preventSelectionLoss = (event) => {
    rememberSelection();
    event.preventDefault();
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const clipboard = event.clipboardData;
    const rawHtml = clipboard.getData("text/html") || clipboard.getData("text/plain");
    if (rawHtml) insertSafeHtml(rawHtml);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "rich-editor", "aria-labelledby": labelId, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { id: labelId, children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "본문 서식, 표, 이미지와 동영상을 편집합니다." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__tabs", role: "tablist", "aria-label": `${label} 편집 방식`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", role: "tab", "aria-label": "편집 탭", "aria-selected": tab === "edit", "aria-controls": `${id}-edit`, id: `${id}-edit-tab`, className: tab === "edit" ? "is-active" : void 0, onClick: () => changeTab("edit"), children: "편집" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", role: "tab", "aria-label": "HTML 탭", "aria-selected": tab === "html", "aria-controls": `${id}-html`, id: `${id}-html-tab`, className: tab === "html" ? "is-active" : void 0, onClick: () => changeTab("html"), children: "HTML" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", role: "tab", "aria-label": "미리보기 탭", "aria-selected": tab === "preview", "aria-controls": `${id}-preview`, id: `${id}-preview-tab`, className: tab === "preview" ? "is-active" : void 0, onClick: () => changeTab("preview"), children: "미리보기" })
    ] }),
    tab === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__toolbar", "aria-label": "본문 서식 도구", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rich-editor__tool-group", "aria-label": "기본 글자 서식", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "굵게", title: "굵게", onMouseDown: preventSelectionLoss, onClick: () => runCommand("bold"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { size: 16 }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__tool-group rich-editor__tool-group--inline", "aria-label": "글자 색, 크기 및 강조", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__color-tools", role: "group", "aria-label": "글자 색 선택", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rich-editor__color-presets", "aria-label": "추천 글자 색", children: TEXT_COLOR_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__color-swatch", style: { backgroundColor: preset.value }, "aria-label": `${preset.label} 글자색`, title: preset.label, onMouseDown: preventSelectionLoss, onClick: () => applyTextColor(preset.value) }, preset.value)) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { className: "rich-editor__color-input", type: "color", "aria-label": "글자 색", value: textColor, onMouseDown: rememberSelection, onChange: (event) => applyTextColor(event.currentTarget.value) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { className: "rich-editor__font-size", "aria-label": "글자 크기", defaultValue: "", onMouseDown: rememberSelection, onChange: (event) => {
            const size = event.currentTarget.value;
            if (size) applyFontSize(`${size}px`);
            event.currentTarget.value = "";
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", disabled: true, children: "글자 크기" }),
            FONT_SIZES.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", { value: size, children: [
              size,
              "px"
            ] }, size))
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool rich-editor__tool--highlight", "aria-label": "형광펜 강조", title: "형광펜 강조", onMouseDown: preventSelectionLoss, onClick: applyHighlight, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, { size: 16 }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__image-tools", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: `${id}-alt`, children: "이미지 대체 텍스트" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: `${id}-alt`, name: `${id}-alt`, value: imageAlt, onChange: (event) => setImageAlt(event.target.value), placeholder: "이미지 설명" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "rich-editor__upload", htmlFor: `${id}-image`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 15 }),
            " 이미지 업로드",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: `${id}-image`, name: `${id}-image`, type: "file", accept: "image/png,image/jpeg,image/webp,image/gif", onClick: rememberSelection, onChange: (event) => {
              handleImageFile(event.target.files?.[0]);
              event.currentTarget.value = "";
            } })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { className: "rich-editor__advanced", onMouseDown: rememberSelection, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [
            "고급 편집 ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14, "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__advanced-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__tool-group", "aria-label": "추가 글자 서식", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "기울임", title: "기울임", onMouseDown: preventSelectionLoss, onClick: () => runCommand("italic"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Italic, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "밑줄", title: "밑줄", onMouseDown: preventSelectionLoss, onClick: () => runCommand("underline"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Underline, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "취소선", title: "취소선", onMouseDown: preventSelectionLoss, onClick: () => runCommand("strikeThrough"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strikethrough, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool rich-editor__tool--text", "aria-label": "글자 서식 지우기", title: "글자 서식 지우기", onMouseDown: preventSelectionLoss, onClick: clearInlineFormatting, children: "Tx" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__tool-group", "aria-label": "문단 서식", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool rich-editor__tool--text", "aria-label": "제목 2", title: "제목 2", onMouseDown: preventSelectionLoss, onClick: () => runCommand("formatBlock", "H2"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading2, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool rich-editor__tool--text", "aria-label": "제목 3", title: "제목 3", onMouseDown: preventSelectionLoss, onClick: () => runCommand("formatBlock", "H3"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading3, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "글머리 목록", title: "글머리 목록", onMouseDown: preventSelectionLoss, onClick: () => runCommand("insertUnorderedList"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "번호 목록", title: "번호 목록", onMouseDown: preventSelectionLoss, onClick: () => runCommand("insertOrderedList"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListOrdered, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "인용문", title: "인용문", onMouseDown: preventSelectionLoss, onClick: () => runCommand("formatBlock", "BLOCKQUOTE"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { size: 16 }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__tool-group", "aria-label": "정렬과 들여쓰기", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "왼쪽 정렬", title: "왼쪽 정렬", onMouseDown: preventSelectionLoss, onClick: () => runCommand("justifyLeft"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignLeft, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "가운데 정렬", title: "가운데 정렬", onMouseDown: preventSelectionLoss, onClick: () => runCommand("justifyCenter"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignCenter, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "오른쪽 정렬", title: "오른쪽 정렬", onMouseDown: preventSelectionLoss, onClick: () => runCommand("justifyRight"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignRight, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "양쪽 정렬", title: "양쪽 정렬", onMouseDown: preventSelectionLoss, onClick: () => runCommand("justifyFull"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignJustify, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "내어쓰기", title: "내어쓰기", onMouseDown: preventSelectionLoss, onClick: () => runCommand("outdent"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndentDecrease, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "들여쓰기", title: "들여쓰기", onMouseDown: preventSelectionLoss, onClick: () => runCommand("indent"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndentIncrease, { size: 16 }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__tool-group", "aria-label": "삽입과 기록", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "링크 삽입", title: "링크 삽입", onMouseDown: preventSelectionLoss, onClick: addLink, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "실행 취소", title: "실행 취소", onMouseDown: preventSelectionLoss, onClick: () => runCommand("undo"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "다시 실행", title: "다시 실행", onMouseDown: preventSelectionLoss, onClick: () => runCommand("redo"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, { size: 16 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__tool", "aria-label": "본문 비우기", title: "본문 비우기", onMouseDown: preventSelectionLoss, onClick: clearEditor, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__insert-panel", "aria-label": "표 삽입", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table2, { size: 15, "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
                "행 ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "number", min: "1", max: "10", step: "1", inputMode: "numeric", value: tableRows, onMouseDown: rememberSelection, onChange: (event) => setTableRows(event.currentTarget.value) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
                "열 ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "number", min: "1", max: "10", step: "1", inputMode: "numeric", value: tableColumns, onMouseDown: rememberSelection, onChange: (event) => setTableColumns(event.currentTarget.value) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__small-action", onMouseDown: preventSelectionLoss, onClick: insertTable, children: "표 삽입" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__insert-panel rich-editor__video-panel", "aria-label": "동영상 삽입", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { size: 15, "aria-hidden": "true" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "rich-editor__sr-only", htmlFor: `${id}-video-url`, children: "동영상 주소" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: `${id}-video-url`, type: "url", inputMode: "url", placeholder: "YouTube/Vimeo embed 또는 .mp4/.webm", value: videoUrl, onMouseDown: rememberSelection, onChange: (event) => setVideoUrl(event.currentTarget.value) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "rich-editor__small-action", onMouseDown: preventSelectionLoss, onClick: insertVideo, children: "동영상 삽입" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          id: `${id}-edit`,
          ref: editorRef,
          className: "rich-editor__surface",
          contentEditable: true,
          suppressContentEditableWarning: true,
          role: "textbox",
          "aria-multiline": "true",
          "aria-labelledby": labelId,
          "data-placeholder": "본문을 입력하세요.",
          onFocus: rememberSelection,
          onKeyUp: rememberSelection,
          onMouseUp: rememberSelection,
          onPaste: handlePaste,
          onInput: updateFromEditor,
          onBlur: () => {
            const editor = editorRef.current;
            if (!editor) return;
            const safeHtml = emit(editor.innerHTML);
            if (editor.innerHTML !== safeHtml) editor.innerHTML = safeHtml;
          }
        }
      )
    ] }),
    tab === "html" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "rich-editor__code-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "rich-editor__sr-only", htmlFor: `${id}-html`, children: [
        label,
        " HTML 코드"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", { id: `${id}-html`, ref: codeRef, className: "rich-editor__code", value: code, spellCheck: false, onChange: (event) => {
        const nextCode = event.target.value;
        setCode(nextCode);
        emit(nextCode);
      }, onBlur: () => emit(code), "aria-describedby": `${id}-code-note` }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: `${id}-code-note`, children: "저장 시 안전한 HTML만 반영됩니다. script, SVG, 이벤트 속성, srcdoc와 javascript: 주소는 제거되며 동영상은 검증된 HTTPS 주소만 허용됩니다." })
    ] }),
    tab === "preview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: `${id}-preview`, role: "tabpanel", "aria-labelledby": `${id}-preview-tab`, className: "rich-editor__preview", dangerouslySetInnerHTML: { __html: previewHtml || '<p class="rich-editor__empty-preview">미리볼 본문이 없습니다.</p>' } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "rich-editor__feedback", role: "status", "aria-live": "polite", children: feedback })
  ] });
}

// components/RecordEditor.tsx
var import_jsx_runtime2 = JSXRuntime;
function imageSrc(value2) {
  const v = String(value2 ?? "");
  return adminAssets?.[v] ?? v;
}
function RecordEditor({ spec, record: record2, onClose, onSave, readonly = false }) {
  const [draft, setDraft] = (0, import_react4.useState)(() => JSON.parse(JSON.stringify(record2))), [errors, setErrors] = (0, import_react4.useState)({}), [preview, setPreview] = (0, import_react4.useState)(false), [dirty, setDirty] = (0, import_react4.useState)(false);
  const titleRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    titleRef.current?.focus();
  }, []);
  const change = (key, value2) => {
    setDraft((d) => ({ ...d, [key]: value2 }));
    setDirty(true);
    setErrors((e) => ({ ...e, [key]: "" }));
  };
  function close() {
    if (dirty && !readonly && !window.confirm("저장하지 않은 내용을 버리고 닫을까요?")) return;
    onClose();
  }
  function save() {
    const e = validateRecord(draft, spec);
    setErrors(e);
    if (Object.keys(e).length) {
      document.querySelectorAll(".advanced-settings").forEach((x) => x.open = true);
      document.getElementById("field-" + Object.keys(e)[0])?.focus();
      return;
    }
    onSave(draft);
  }
  function image(file, key = "image") {
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/webp", "image/gif"].includes(file.type)) {
      setErrors((e) => ({ ...e, [key]: "PNG\xB7JPG\xB7WEBP\xB7GIF 이미지를 선택해주세요." }));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setErrors((e) => ({ ...e, [key]: "이미지는 2MB 이하로 선택해주세요." }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => change(key, String(reader.result));
    reader.readAsDataURL(file);
  }
  function videoFile(file) {
    if (!file) return;
    if (!["video/mp4", "video/webm"].includes(file.type)) {
      setErrors((e) => ({ ...e, videoFile: "MP4 또는 WEBM 파일을 선택해주세요." }));
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      setErrors((e) => ({ ...e, videoFile: "확인용 영상 파일은 100MB 이하로 선택해주세요." }));
      return;
    }
    change("videoFile", { name: file.name, size: file.size, type: file.type });
    change("title", file.name.replace(/\.[^.]+$/, ""));
    change("videoUrl", "");
    change("duration", "");
  }
  function field(f2) {
    const value2 = draft[f2.key];
    const inputId = "field-" + f2.key;
    if (f2.type === "date-range") return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "field full-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: inputId, children: [
        f2.label,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "required", children: " *" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "form-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: inputId, type: "date", "aria-label": "이벤트기간 시작", value: String(draft.start ?? ""), onChange: (e) => {
          change("start", e.target.value);
          setErrors((e2) => ({ ...e2, period: "" }));
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "date", "aria-label": "이벤트기간 종료", value: String(draft.end ?? ""), onChange: (e) => {
          change("end", e.target.value);
          setErrors((e2) => ({ ...e2, period: "" }));
        } })
      ] }),
      errors[f2.key] && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "field-error", role: "alert", children: errors[f2.key] })
    ] }, f2.key);
    if (f2.type === "rich") return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "full-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RichTextEditor, { id: inputId, label: f2.label + (f2.required ? " *" : ""), value: String(value2 ?? ""), onChange: (v) => change(f2.key, v) }),
      errors[f2.key] && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "field-error", role: "alert", children: errors[f2.key] })
    ] }, f2.key);
    if (f2.type === "options") return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "full-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: f2.label }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "muted", children: f2.hint }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "option-list", children: (Array.isArray(value2) ? value2 : []).map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "option-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { children: [
          "이용권 이름",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { "aria-label": "이용권 이름 " + (i + 1), value: String(v.title ?? ""), onChange: (e) => change(f2.key, value2.map((x, j) => j === i ? { ...x, title: e.target.value } : x)) })
        ] }),
        [["baseMonths", "기본개월"], ["bonusMonths", "추가개월"], ["amount", "결제금액"]].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { children: [
          label,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "number", min: k === "baseMonths" ? 1 : 0, "aria-label": label + " " + (i + 1), value: Number(v[k] ?? 0), onChange: (e) => change(f2.key, value2.map((x, j) => j === i ? { ...x, [k]: e.target.value === "" ? "" : Number(e.target.value) } : x)) })
        ] }, k)),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "icon-button", "aria-label": "이용권 " + (i + 1) + " 삭제", onClick: () => change(f2.key, value2.filter((_, j) => j !== i)), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Trash2, { size: 18 }) })
      ] }, String(v.id))) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", onClick: () => change(f2.key, [...Array.isArray(value2) ? value2 : [], { id: uid(), title: "", baseMonths: 1, bonusMonths: 0, amount: 0 }]), children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Plus, { size: 18 }),
        "이용권 추가"
      ] }),
      errors[f2.key] && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "field-error", children: errors[f2.key] })
    ] }, f2.key);
    if (f2.type === "permissions") return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "full-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: "메뉴별 권한" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "muted", children: "이 설정은 로컬 확인용입니다. 운영 권한 변경은 API 연결 후 적용됩니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "permissions-table", children: ["회원", "결제", "상품", "게시글", "디자인", "혜택", "문자", "통계", "설정"].map((g) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: g }),
        ["조회", "추가", "수정", "삭제"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { type: "checkbox", checked: (value2 ?? {})[g]?.includes(p) ?? false, onChange: (e) => {
            const map = value2 ?? {};
            change(f2.key, { ...map, [g]: e.target.checked ? [...map[g] ?? [], p] : (map[g] ?? []).filter((x) => x !== p) });
          } }),
          p
        ] }, p))
      ] }, g)) })
    ] }, f2.key);
    if (f2.type === "image") return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "field full-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: inputId, children: f2.label }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "image-field", children: [
        value2 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: imageSrc(value2), alt: f2.label }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "image-empty", children: "등록한 이미지가 없습니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: inputId, type: "file", accept: "image/png,image/jpeg,image/webp,image/gif", onChange: (e) => image(e.target.files?.[0], f2.key) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { "aria-label": f2.label + " 주소", value: String(value2 ?? "").startsWith("data:") ? "" : String(value2 ?? ""), placeholder: "또는 이미지 주소를 입력하세요", onChange: (e) => change(f2.key, e.target.value) }),
          Boolean(value2) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", onClick: () => change(f2.key, ""), children: "이미지 제거" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { children: "PNG\xB7JPG\xB7WEBP\xB7GIF / 최대 2MB" })
        ] })
      ] }),
      errors[f2.key] && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "field-error", children: errors[f2.key] })
    ] }, f2.key);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "field" + (f2.type === "textarea" ? " full-field" : ""), children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: inputId, children: [
        f2.label,
        f2.required && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "required", children: " *" })
      ] }),
      f2.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("select", { id: inputId, value: String(value2 ?? ""), onChange: (e) => change(f2.key, e.target.value), children: [
        f2.key === "staffId" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "운영진을 선택하세요" }),
        f2.options?.map((x) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { children: x }, x))
      ] }) : f2.type === "toggle" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: "toggle-control", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: inputId, type: "checkbox", checked: Boolean(value2), onChange: (e) => change(f2.key, e.target.checked) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: value2 ? "사용" : "중지" })
      ] }) : f2.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("textarea", { id: inputId, rows: 4, value: String(value2 ?? ""), onChange: (e) => change(f2.key, e.target.value) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: inputId, readOnly: f2.readonly, type: f2.type ?? "text", value: f2.type === "number" ? String(value2 ?? 0) : String(value2 ?? ""), min: f2.min, max: f2.max, onChange: (e) => change(f2.key, f2.type === "number" ? e.target.value === "" ? "" : Number(e.target.value) : e.target.value), "aria-invalid": Boolean(errors[f2.key]), "aria-describedby": errors[f2.key] ? inputId + "-error" : void 0 }),
      f2.hint && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { children: f2.hint }),
      errors[f2.key] && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "field-error", id: inputId + "-error", role: "alert", children: errors[f2.key] })
    ] }, f2.key);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "editor-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "record-editor", role: "dialog", "aria-modal": "true", "aria-labelledby": "record-editor-title", onKeyDown: (e) => {
    if (e.key === "Escape") close();
    if (e.key === "Tab") {
      const elements = e.currentTarget.querySelectorAll("button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[contenteditable=true]");
      const first = elements[0], last = elements[elements.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "editor-top", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: spec.title }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { id: "record-editor-title", ref: titleRef, tabIndex: -1, children: readonly ? "상세 보기" : record2.id.startsWith("new-") ? "새 항목 작성" : "상세 내용 편집" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "icon-button", "aria-label": "편집창 닫기", onClick: close, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(X, { size: 24 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "editor-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "edit-help", children: readonly ? "내역을 확인하세요." : "필수 항목(*)을 입력하고 아래 저장 버튼을 누르세요." }),
      preview ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("article", { className: "record-preview", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { style: { color: String(draft.titleColor ?? "#363238"), fontSize: Number(draft.titleSize ?? 24) }, children: String(draft.title ?? draft.name ?? "미리보기") }),
        spec.fields.some((f2) => f2.key === "image") && Boolean(draft.image) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: imageSrc(draft.image), alt: "대표 이미지" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { dangerouslySetInnerHTML: { __html: sanitizeRichHtml(String(draft.content ?? draft.description ?? "")) } })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("fieldset", { disabled: readonly, children: [
        spec.domain === "videos" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "video-upload-box", onDragOver: (e) => e.preventDefault(), onDrop: (e) => {
          e.preventDefault();
          videoFile(e.dataTransfer.files[0]);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: "video-file-upload", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: "영상업로드" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "파일을 이곳으로 끌어오거나 선택하세요." }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: "video-file-upload", type: "file", accept: "video/mp4,video/webm", onChange: (e) => videoFile(e.target.files?.[0]) })
          ] }),
          Boolean(draft.videoFile) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
            "선택한 파일: ",
            String(draft.videoFile.name)
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { children: "MP4\xB7WEBM / 확인용 최대 100MB. 파일명만 보관하며 서버 업로드는 하지 않습니다." }),
          errors.videoFile && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "field-error", children: errors.videoFile })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "form-grid", children: spec.fields.filter((f2) => !f2.advanced).map(field) }),
        spec.fields.some((f2) => f2.advanced) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("details", { className: "advanced-settings", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("summary", { children: "추가 정보 \xB7 상세 설정" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "form-grid", children: spec.fields.filter((f2) => f2.advanced).map(field) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: "editor-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "muted", children: dirty ? "저장하지 않은 변경사항이 있습니다." : readonly ? "조회 전용입니다." : "현재 기기에만 저장됩니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
        spec.fields.some((f2) => f2.type === "rich") && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", onClick: () => setPreview(!preview), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Eye, { size: 18 }),
          preview ? "편집으로 돌아가기" : "미리보기"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", onClick: close, children: readonly ? "닫기" : "취소" }),
        !readonly && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "primary", onClick: save, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Save, { size: 18 }),
          "저장"
        ] })
      ] })
    ] })
  ] }) });
}

// components/MemberCreate.tsx
var import_react5 = React;
var import_jsx_runtime3 = JSXRuntime;
function MemberCreate({ store, onClose }) {
  const [draft, setDraft] = (0, import_react5.useState)({ loginId: "", name: "", nickname: "", phone: "", password: "", confirmPassword: "" }), [checks, setChecks] = (0, import_react5.useState)({}), [errors, setErrors] = (0, import_react5.useState)({});
  const ref = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    ref.current?.querySelector("input")?.focus();
  }, []);
  function change(key, value2) {
    setDraft((d) => ({ ...d, [key]: value2 }));
    setChecks((c) => ({ ...c, [key]: false }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }
  function check(key) {
    const value2 = draft[key].trim();
    if (!value2) {
      setErrors((e) => ({ ...e, [key]: "먼저 입력해주세요." }));
      return;
    }
    if (key === "loginId" && value2.length < 5) {
      setErrors((e) => ({ ...e, [key]: "아이디는 5자 이상으로 입력해주세요." }));
      return;
    }
    const normalized = (v) => key === "phone" ? String(v).replace(/\D/g, "") : String(v).trim().toLowerCase();
    if (store.state.records.members.some((r) => normalized(r[key]) === normalized(value2))) {
      setErrors((e) => ({ ...e, [key]: "이미 사용 중입니다. 다른 값을 입력해주세요." }));
      return;
    }
    setChecks((c) => ({ ...c, [key]: true }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }
  function submit() {
    const e = {};
    for (const k of ["loginId", "name", "nickname", "phone"]) if (!draft[k].trim()) e[k] = "필수 항목을 입력해주세요.";
    if (draft.loginId.trim().length < 5) e.loginId = "아이디는 5자 이상으로 입력해주세요.";
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/.test(draft.password)) e.password = "영문\xB7숫자\xB7특수문자를 포함해 8~16자로 입력해주세요.";
    if (draft.password !== draft.confirmPassword) e.confirmPassword = "비밀번호가 일치하지 않습니다.";
    if (!/^01\d\d{7,8}$/.test(draft.phone.replace(/\D/g, ""))) e.phone = "휴대폰번호를 확인해주세요.";
    for (const k of ["loginId", "phone", "nickname"]) if (!checks[k] && !e[k]) e[k] = "중복확인 버튼을 눌러주세요.";
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById("create-" + Object.keys(e)[0])?.focus();
      return;
    }
    const row = { id: uid(), loginId: draft.loginId.trim(), name: draft.name.trim(), nickname: draft.nickname.trim(), phone: draft.phone, group: "무료회원", status: "정상", balance: 0, joined: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), services: [] };
    store.save("members", row);
    onClose();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { ref, className: "info-dialog", role: "dialog", "aria-modal": "true", "aria-label": "회원 추가", onKeyDown: (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "Tab") {
      const list = e.currentTarget.querySelectorAll("input,button");
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "panel-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { children: "회원 추가" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "icon-button", "aria-label": "회원 추가 닫기", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(X, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "muted", children: "필수 항목과 중복 여부를 확인해주세요. 중복확인은 이 파일의 샘플 데이터 기준입니다. 비밀번호는 검증 후 버리며 저장하거나 전송하지 않습니다." }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "form-grid", style: { marginTop: 24 }, children: [["loginId", "아이디", "text"], ["name", "성명", "text"], ["phone", "휴대폰번호", "tel"], ["nickname", "닉네임", "text"], ["password", "비밀번호", "password"], ["confirmPassword", "비밀번호 확인", "password"]].map(([key, label, type]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { htmlFor: "create-" + key, children: [
        label,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "required", children: " *" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { id: "create-" + key, type, autoComplete: "off", value: draft[key], onChange: (ev) => change(key, ev.target.value) }),
        ["loginId", "phone", "nickname"].includes(key) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { style: { whiteSpace: "nowrap", fontSize: 16, padding: "8px 12px" }, type: "button", onClick: () => check(key), children: "중복확인" })
      ] }),
      checks[key] && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("small", { style: { color: "#486b4b" }, children: "사용할 수 있습니다." }),
      key === "loginId" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("small", { children: "최소 5자 이상" }),
      key === "password" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("small", { children: "영문\xB7숫자\xB7특수문자 포함 8~16자" }),
      errors[key] && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "field-error", role: "alert", children: errors[key] })
    ] }, key)) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "dialog-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", onClick: onClose, children: "취소" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { className: "primary", type: "button", onClick: submit, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(UserPlus, { size: 19 }),
        "회원 추가"
      ] })
    ] })
  ] }) });
}

// components/BankPaymentEditor.tsx
var import_react6 = React;
var import_jsx_runtime4 = JSXRuntime;
function BankPaymentEditor({ store, record: record2, onClose }) {
  const [draft, setDraft] = (0, import_react6.useState)(() => record2 ? { ...record2 } : { id: uid(), loginId: "", name: "", expert: "골드마스터", category: "VIP 상품", product: "", amount: 0, bank: "농협", method: "무통장입금", status: "입금대기", receiptType: "소득공제", receiptNumber: "", receiptApproval: "", date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) }), [query, setQuery] = (0, import_react6.useState)(""), [error, setError] = (0, import_react6.useState)("");
  const ref = (0, import_react6.useRef)(null);
  const existing = Boolean(record2);
  const members = store.state.records.members.filter((m) => (String(m.loginId) + " " + String(m.name) + " " + String(m.nickname)).includes(query)).slice(0, 6);
  const products = store.state.records.products.filter((p) => p.expert === draft.expert);
  (0, import_react6.useEffect)(() => {
    ref.current?.querySelector("input")?.focus();
  }, []);
  const change = (k, v) => {
    setDraft((d) => ({ ...d, [k]: v }));
    setError("");
  };
  function save() {
    if (!existing && (!draft.loginId || !draft.product || !Number.isSafeInteger(Number(draft.amount)) || Number(draft.amount) <= 0)) {
      setError("회원과 상품을 선택하고 결제금액을 확인해주세요.");
      return;
    }
    if (draft.receiptNumber && String(draft.receiptNumber).replace(/\D/g, "").length !== 9) {
      setError("현금영수증 번호는 숫자 9자리로 입력해주세요. 실제 발행 규칙은 연동 시 확인이 필요합니다.");
      return;
    }
    if (draft.receiptApproval && !/^\d{9}$/.test(String(draft.receiptApproval))) {
      setError("승인번호는 숫자 9자리로 입력해주세요.");
      return;
    }
    store.save("payments", draft);
    onClose();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "info-dialog", ref, role: "dialog", "aria-modal": "true", "aria-label": existing ? "무통장 상세" : "무통장 입금 추가", onKeyDown: (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "Tab") {
      const list = e.currentTarget.querySelectorAll("input,button,select");
      if (e.shiftKey && document.activeElement === list[0]) {
        e.preventDefault();
        list[list.length - 1]?.focus();
      } else if (!e.shiftKey && document.activeElement === list[list.length - 1]) {
        e.preventDefault();
        list[0]?.focus();
      }
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "panel-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { children: existing ? "무통장 상세" : "무통장 입금 추가" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { className: "icon-button", "aria-label": "무통장 창 닫기", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(X, {}) })
    ] }),
    existing ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "confirm-target", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("strong", { children: [
        display(draft.name),
        " \xB7 ",
        display(draft.loginId)
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { children: [
        display(draft.product),
        " \xB7 ",
        display(draft.amount, "amount")
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "field", style: { marginBottom: 24 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { htmlFor: "bank-member-search", children: "회원 찾기" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { display: "flex", gap: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { id: "bank-member-search", placeholder: "아이디 또는 이름", value: query, onChange: (e) => setQuery(e.target.value) }) }),
      query && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "member-search-results", children: members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { type: "button", onClick: () => {
        change("loginId", m.loginId);
        change("name", m.name);
        setQuery("");
      }, children: [
        String(m.name),
        " \xB7 ",
        String(m.loginId),
        " \xB7 ",
        String(m.nickname)
      ] }, m.id)) }),
      Boolean(draft.loginId) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("small", { style: { color: "#486b4b" }, children: [
        "선택 회원: ",
        String(draft.name),
        " (",
        String(draft.loginId),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "form-grid", style: { marginTop: 22 }, children: [
      !existing && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
          "카테고리",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { readOnly: true, value: String(draft.category) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
          "전문가",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("select", { "aria-label": "결제 전문가", value: String(draft.expert), onChange: (e) => {
            change("expert", e.target.value);
            change("product", "");
            change("amount", 0);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { children: "골드마스터" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { children: "꽃게선생" })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
          "상품명",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("select", { "aria-label": "결제 상품", value: String(draft.product), onChange: (e) => {
            const p = products.find((p2) => p2.title === e.target.value);
            change("product", e.target.value);
            change("amount", p?.amount ?? 0);
            change("months", Number(p?.baseMonths ?? 1) + Number(p?.bonusMonths ?? 0));
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "", children: "상품을 선택하세요" }),
            products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { children: String(p.title) }, p.id))
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
          "결제금액",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { "aria-label": "무통장 결제금액", type: "number", min: 1, value: String(draft.amount), onChange: (e) => change("amount", Number(e.target.value)) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
          "입금은행",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("select", { "aria-label": "입금은행", value: String(draft.bank), onChange: (e) => change("bank", e.target.value), children: ["농협", "국민", "신한", "우리", "하나", "기업", "카카오뱅크", "기타"].map((x) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { children: x }, x)) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
          "입금자명",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { "aria-label": "입금자명", value: String(draft.depositor ?? draft.name), onChange: (e) => change("depositor", e.target.value) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
        "현금영수증 발행 구분",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("select", { "aria-label": "현금영수증 발행 구분", value: String(draft.receiptType ?? "소득공제"), onChange: (e) => change("receiptType", e.target.value), children: ["신청안함", "소득공제", "지출증빙"].map((x) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { children: x }, x)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
        "현금영수증 발행번호",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { "aria-label": "현금영수증 발행번호", inputMode: "numeric", value: String(draft.receiptNumber ?? ""), placeholder: "숫자 9자리", onChange: (e) => change("receiptNumber", e.target.value.replace(/\D/g, "")) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "field", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("label", { children: [
        "현금영수증 승인번호",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { "aria-label": "현금영수증 승인번호", inputMode: "numeric", maxLength: 9, value: String(draft.receiptApproval ?? ""), placeholder: "숫자 9자리 (선택)", onChange: (e) => change("receiptApproval", e.target.value.replace(/\D/g, "")) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "muted", style: { marginTop: 20 }, children: "가상 데이터에만 반영됩니다. 실제 입금\xB7현금영수증 발행은 처리하지 않습니다." }),
    error && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "field-error", role: "alert", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dialog-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", onClick: onClose, children: "취소" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("button", { className: "primary", type: "button", onClick: save, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Save, { size: 18 }),
        existing ? "저장" : "등록"
      ] })
    ] })
  ] }) });
}

// components/MemberDetail.tsx
var import_react7 = React;
var import_jsx_runtime5 = JSXRuntime;
var DAY = 24 * 60 * 60 * 1e3;
function asText(value2) {
  return value2 === null || value2 === void 0 ? "" : String(value2);
}
function asNumber(value2) {
  const number2 = Number(value2);
  return Number.isFinite(number2) ? number2 : 0;
}
function dateToday() {
  const date3 = /* @__PURE__ */ new Date();
  const offset = date3.getTimezoneOffset() * 6e4;
  return new Date(date3.getTime() - offset).toISOString().slice(0, 10);
}
function parseDate(value2) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value2);
  return match ? Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : NaN;
}
function toYmd(value2) {
  return new Date(value2).toISOString().slice(0, 10);
}
function addDays(value2, days) {
  const time = parseDate(value2);
  return Number.isFinite(time) ? toYmd(time + days * DAY) : value2;
}
function addMonths(value2, months) {
  const time = parseDate(value2);
  if (!Number.isFinite(time) || months < 1) return value2;
  const date3 = new Date(time);
  const year = date3.getUTCFullYear();
  const month = date3.getUTCMonth();
  const day2 = date3.getUTCDate();
  const targetMonth = month + months;
  const targetYear = year + Math.floor(targetMonth / 12);
  const normalizedMonth = (targetMonth % 12 + 12) % 12;
  const lastDay = new Date(Date.UTC(targetYear, normalizedMonth + 1, 0)).getUTCDate();
  return addDays(toYmd(Date.UTC(targetYear, normalizedMonth, Math.min(day2, lastDay))), -1);
}
function daysBetween(start, end) {
  const first = parseDate(start), last = parseDate(end);
  return Number.isFinite(first) && Number.isFinite(last) ? Math.max(0, Math.floor((last - first) / DAY)) : 0;
}
function money(value2) {
  return asNumber(value2).toLocaleString("ko-KR") + "원";
}
function periodText(start, end) {
  return start && end ? start + " ~ " + end : start || end || "기간 미설정";
}
function printable(value2) {
  if (value2 === null || value2 === void 0 || value2 === "") return "—";
  if (typeof value2 === "boolean") return value2 ? "사용" : "중지";
  if (Array.isArray(value2)) return String(value2.length) + "개";
  if (typeof value2 === "object") return "설정됨";
  return String(value2);
}
function serviceFrom(value2, index, member) {
  const row = value2 && typeof value2 === "object" && !Array.isArray(value2) ? value2 : {};
  const rawStatus = asText(row.status);
  return {
    id: asText(row.id) || "service-" + member.id + "-" + index,
    category: asText(row.category) || "서비스",
    product: asText(row.product ?? row.group) || asText(member.group) || "미지정 서비스",
    months: asNumber(row.months),
    periodType: asText(row.periodType) === "날짜지정" ? "날짜지정" : "연장",
    start: asText(row.start) || asText(member.start),
    end: asText(row.end) || asText(member.end),
    status: rawStatus === "일시정지" || rawStatus === "환불" ? rawStatus : "이용중",
    price: asNumber(row.price ?? row.amount),
    memo: asText(row.memo),
    pausedAt: asText(row.pausedAt) || void 0,
    pauseDays: asNumber(row.pauseDays) || void 0,
    refund: row.refund && typeof row.refund === "object" && !Array.isArray(row.refund) ? row.refund : void 0
  };
}
function memberServices(member) {
  const raw = member.services;
  if (Array.isArray(raw)) return raw.map((item, index) => serviceFrom(item, index, member));
  if (asText(member.group) && asText(member.group) !== "무료회원" || asText(member.start) || asText(member.end)) return [serviceFrom({}, 0, member)];
  return [];
}
function memberChanges(member) {
  const raw = member.records;
  if (!Array.isArray(raw)) return [];
  return raw.map((item, index) => {
    const row = item && typeof item === "object" && !Array.isArray(item) ? item : {};
    return { id: asText(row.id) || "record-" + index, timestamp: asText(row.timestamp ?? row.date), type: asText(row.type), item: asText(row.item), period: asText(row.period), memo: asText(row.memo) };
  });
}
function stamp(value2) {
  const date3 = new Date(value2);
  return Number.isNaN(date3.getTime()) ? value2 : date3.toLocaleString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function statusClass(status) {
  return status === "이용중" ? "good" : status === "일시정지" ? "paused" : "refunded";
}
function MemberDetail({ record: record2, spec, store, onClose }) {
  const [basicEditor, setBasicEditor] = (0, import_react7.useState)(false);
  const [paymentEditor, setPaymentEditor] = (0, import_react7.useState)(null);
  const [dialog, setDialog] = (0, import_react7.useState)(null);
  const [serviceForm, setServiceForm] = (0, import_react7.useState)({ category: "서비스", product: "", months: "1", periodType: "연장", start: dateToday(), end: "", price: "", memo: "" });
  const [serviceErrors, setServiceErrors] = (0, import_react7.useState)({});
  const [extension, setExtension] = (0, import_react7.useState)({ days: "", memo: "" });
  const [refund, setRefund] = (0, import_react7.useState)({ original: "", memo: "" });
  const [recordMemo, setRecordMemo] = (0, import_react7.useState)("");
  const headingRef = (0, import_react7.useRef)(null);
  const dialogRef = (0, import_react7.useRef)(null);
  const live = (0, import_react7.useMemo)(() => store.state.records.members.find((item) => item.id === record2.id) ?? record2, [store.state.records.members, record2]);
  const services2 = (0, import_react7.useMemo)(() => memberServices(live), [live]);
  const changes = (0, import_react7.useMemo)(() => memberChanges(live), [live]);
  const payments = (0, import_react7.useMemo)(() => store.state.records.payments.filter((payment) => asText(payment.loginId) === asText(live.loginId)), [store.state.records.payments, live.loginId]);
  const products = (0, import_react7.useMemo)(() => store.state.records.products.map((product) => asText(product.title)).filter(Boolean), [store.state.records.products]);
  const approvalSpec = (0, import_react7.useMemo)(() => ({ ...spec, domain: "payments", title: "현금영수증 승인번호 편집", description: "현금영수증 승인번호를 현재 기기의 결제 기록에만 저장합니다.", sourcePath: "/local/member-payment-approval", primary: void 0, fields: [{ key: "approval", label: "승인번호", type: "text", required: true, hint: "실제 운영 승인번호가 아닌 전달본용 값만 저장하세요." }] }), [spec]);
  const selectedService = dialog && "serviceId" in dialog ? services2.find((item) => item.id === dialog.serviceId) : void 0;
  const selectedChange = dialog && dialog.kind === "edit-record" ? changes.find((item) => item.id === dialog.recordId) : void 0;
  const confirmTarget = dialog && dialog.kind === "confirm" ? dialog : null;
  (0, import_react7.useEffect)(() => {
    headingRef.current?.focus();
  }, []);
  (0, import_react7.useEffect)(() => {
    const onKey = (event) => {
      if (event.key !== "Escape") return;
      if (paymentEditor) {
        setPaymentEditor(null);
        return;
      }
      if (basicEditor) {
        setBasicEditor(false);
        return;
      }
      if (dialog) {
        setDialog(null);
        return;
      }
      onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [basicEditor, dialog, onClose, paymentEditor]);
  function focusTrap(event) {
    if (event.key !== "Tab" || dialog || basicEditor || paymentEditor) return;
    const scope = dialogRef.current;
    if (!scope) return;
    const nodes = scope.querySelectorAll("button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[href],[contenteditable=true]");
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  function latest() {
    return store.state.records.members.find((item) => item.id === record2.id) ?? live;
  }
  function addChange(type, item, period, memo) {
    return { id: uid(), timestamp: (/* @__PURE__ */ new Date()).toISOString(), type, item, period, memo };
  }
  function saveMember(next, change) {
    const current = latest();
    const records = change ? [addChange(change.type, change.item, change.period, change.memo), ...memberChanges(current)] : memberChanges(current);
    store.save("members", { ...current, ...next, records });
  }
  function saveServices(nextServices, change) {
    const priority = nextServices.find((item) => item.status !== "환불") ?? nextServices[0];
    saveMember({ services: nextServices, group: priority?.product ?? asText(live.group), start: priority?.start ?? asText(live.start), end: priority?.end ?? asText(live.end) }, change);
  }
  function openAdd() {
    const recent = services2.find((item) => item.status !== "환불");
    const start = recent?.end ? addDays(recent.end, 1) : dateToday();
    setServiceForm({ category: "서비스", product: products[0] ?? "", months: "1", periodType: "연장", start, end: addMonths(start, 1), price: "", memo: "" });
    setServiceErrors({});
    setDialog({ kind: "add" });
  }
  function openServiceEditor(service) {
    setServiceForm({ category: service.category, product: service.product, months: String(service.months || 1), periodType: service.periodType, start: service.start, end: service.end, price: String(service.price), memo: service.memo });
    setServiceErrors({});
    setDialog({ kind: "edit-service", serviceId: service.id });
  }
  function updateServiceForm(key, value2) {
    setServiceForm((current) => {
      const next = { ...current, [key]: value2 };
      if ((key === "start" || key === "months" || key === "periodType") && next.periodType === "연장") next.end = addMonths(next.start, Math.max(1, Number(next.months) || 1));
      return next;
    });
    setServiceErrors((current) => ({ ...current, [key]: "" }));
  }
  function submitService() {
    const errors = {};
    const months = Number(serviceForm.months);
    const price = Number(serviceForm.price);
    if (!serviceForm.category) errors.category = "구분을 선택해주세요.";
    if (!serviceForm.product) errors.product = "상품을 선택해주세요.";
    if (!Number.isInteger(months) || months < 1) errors.months = "기간은 1개월 이상의 정수로 입력해주세요.";
    if (!serviceForm.start) errors.start = "시작일을 입력해주세요.";
    if (serviceForm.periodType === "날짜지정" && !serviceForm.end) errors.end = "종료일을 입력해주세요.";
    if (dialog?.kind === "edit-service" && !serviceForm.end) errors.end = "종료일을 입력해주세요.";
    if (serviceForm.periodType === "날짜지정" && serviceForm.start && serviceForm.end && serviceForm.start > serviceForm.end) errors.end = "종료일은 시작일 이후여야 합니다.";
    if (dialog?.kind === "edit-service" && serviceForm.start && serviceForm.end && serviceForm.start > serviceForm.end) errors.end = "종료일은 시작일 이후여야 합니다.";
    if (serviceForm.price === "" || !Number.isFinite(price) || price < 0) errors.price = "금액은 0원 이상의 숫자로 입력해주세요.";
    setServiceErrors(errors);
    if (Object.keys(errors).length) {
      store.notify("필수 입력값을 확인해주세요.");
      return;
    }
    const end = serviceForm.periodType === "연장" && dialog?.kind === "add" ? addMonths(serviceForm.start, months) : serviceForm.end;
    if (dialog?.kind === "edit-service" && selectedService) {
      const updated = { ...selectedService, category: serviceForm.category, product: serviceForm.product, months, periodType: serviceForm.periodType, start: serviceForm.start, end, price, memo: serviceForm.memo };
      saveServices(services2.map((item) => item.id === updated.id ? updated : item), { type: "서비스 정보 수정", item: updated.product, period: periodText(updated.start, updated.end), memo: updated.memo || "서비스 기간\xB7금액을 수정함" });
      setDialog(null);
      store.notify("서비스 정보와 금액을 현재 기기 데이터에 저장했습니다.");
      return;
    }
    const added = { id: uid(), category: serviceForm.category, product: serviceForm.product, months, periodType: serviceForm.periodType, start: serviceForm.start, end, status: "이용중", price, memo: serviceForm.memo };
    saveServices([...services2, added], { type: "서비스 추가", item: added.product, period: periodText(added.start, added.end), memo: added.memo || added.category + " \xB7 " + months + "개월" });
    setDialog(null);
    store.notify("이용 서비스를 현재 기기 데이터에 추가했습니다.");
  }
  function submitExtension() {
    if (!selectedService) return;
    const days = Number(extension.days);
    if (!Number.isInteger(days) || days < 1) {
      store.notify("연장 일수는 1일 이상의 정수로 입력해주세요.");
      return;
    }
    if (!extension.memo.trim()) {
      store.notify("연장 관련 메모를 입력해주세요.");
      return;
    }
    const oldEnd = selectedService.end;
    const nextEnd = addDays(oldEnd, days);
    saveServices(services2.map((item) => item.id === selectedService.id ? { ...item, end: nextEnd } : item), { type: "서비스 연장", item: selectedService.product, period: periodText(oldEnd, nextEnd), memo: extension.memo.trim() });
    setDialog(null);
    store.notify("서비스 종료일을 연장했습니다.");
  }
  function submitRefund() {
    if (!selectedService) return;
    const original = Number(refund.original);
    if (!Number.isFinite(original) || original < 0) {
      store.notify("원래 결제금액을 0원 이상의 숫자로 입력해주세요.");
      return;
    }
    if (!refund.memo.trim()) {
      store.notify("환불 관련 메모를 입력해주세요.");
      return;
    }
    const total = Math.max(1, daysBetween(selectedService.start, selectedService.end) + 1);
    const used = Math.min(total, Math.max(0, daysBetween(selectedService.start, dateToday()) + 1));
    const usedFee = Math.round(original * used / total);
    const processingFee = Math.round(original * 0.1);
    const estimate = Math.max(0, original - usedFee - processingFee);
    saveServices(services2.map((item) => item.id === selectedService.id ? { ...item, status: "환불", refund: { original, usedDays: used, usedFee, processingFee, estimate, memo: refund.memo.trim(), calculatedAt: (/* @__PURE__ */ new Date()).toISOString() } } : item), { type: "환불", item: selectedService.product, period: periodText(selectedService.start, selectedService.end), memo: "환불예상 " + money(estimate) + " \xB7 " + refund.memo.trim() });
    setDialog(null);
    store.notify("환불 계산과 기록을 현재 기기 데이터에 저장했습니다.");
  }
  function confirmAction() {
    if (!confirmTarget) return;
    if (confirmTarget.action === "delete-record") {
      saveMember({ records: changes.filter((item) => item.id !== confirmTarget.id) });
      setDialog(null);
      store.notify("변경기록을 삭제했습니다.");
      return;
    }
    const target = services2.find((item) => item.id === confirmTarget.id);
    if (!target) return;
    if (confirmTarget.action === "pause") {
      const today2 = dateToday();
      saveServices(services2.map((item) => item.id === target.id ? { ...item, status: "일시정지", pausedAt: today2 } : item), { type: "일시정지", item: target.product, period: periodText(target.start, target.end), memo: "일시정지일 " + today2 });
      store.notify("서비스를 현재일 기준으로 일시정지했습니다.");
    } else {
      const pausedAt = target.pausedAt || dateToday();
      const pausedDays = daysBetween(pausedAt, dateToday());
      const nextEnd = addDays(target.end, pausedDays);
      saveServices(services2.map((item) => item.id === target.id ? { ...item, status: "이용중", pausedAt: void 0, pauseDays: pausedDays, end: nextEnd } : item), { type: "서비스 재시작", item: target.product, period: periodText(target.end, nextEnd), memo: "중단 " + pausedDays + "일만큼 종료일 연장" });
      store.notify("중단일수만큼 종료일을 연장하고 서비스를 재시작했습니다.");
    }
    setDialog(null);
  }
  function saveRecordMemo() {
    if (!selectedChange) return;
    saveMember({ records: changes.map((item) => item.id === selectedChange.id ? { ...item, memo: recordMemo } : item) });
    setDialog(null);
    store.notify("변경기록 메모를 저장했습니다.");
  }
  function saveBasic(row) {
    if (row.password && !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/.test(String(row.password))) {
      store.notify("비밀번호는 영문\xB7숫자\xB7특수문자 포함 8~16자로 입력해주세요.");
      return;
    }
    const safe = { ...row };
    delete safe.password;
    if (safe.freePoints !== live.freePoints) safe.balance = asNumber(safe.paidPoints) + asNumber(safe.freePoints);
    const current = latest();
    saveMember({ ...safe, services: current.services ?? row.services }, { type: "기본정보 수정", item: "회원 기본정보", period: "—", memo: "기본정보를 편집함" });
    setBasicEditor(false);
  }
  function openExtension(service) {
    setExtension({ days: "", memo: "" });
    setDialog({ kind: "extend", serviceId: service.id });
  }
  function openRefund(service) {
    setRefund({ original: String(service.price), memo: "" });
    setDialog({ kind: "refund", serviceId: service.id });
  }
  function openRecordEditor(change) {
    setRecordMemo(change.memo);
    setDialog({ kind: "edit-record", recordId: change.id });
  }
  const refundOriginal = Number(refund.original) || 0;
  const refundTotal = selectedService ? Math.max(1, daysBetween(selectedService.start, selectedService.end) + 1) : 1;
  const refundUsed = selectedService ? Math.min(refundTotal, Math.max(0, daysBetween(selectedService.start, dateToday()) + 1)) : 0;
  const refundUsedFee = Math.round(refundOriginal * refundUsed / refundTotal);
  const refundProcessingFee = Math.round(refundOriginal * 0.1);
  const refundEstimate = Math.max(0, refundOriginal - refundUsedFee - refundProcessingFee);
  const basicSpec = { ...spec, fields: [...spec.fields.map((f2) => f2.key === "loginId" || f2.key === "paidPoints" ? { ...f2, readonly: true } : f2), { key: "password", label: "비밀번호 변경", type: "password", hint: "변경할 때만 입력하세요. 형식만 확인한 뒤 버리며 저장하지 않습니다." }] };
  const basicKeys = ["loginId", "name", "nickname", "phone", "email", "cafeNickname", "group", "status", "balance", "paidPoints", "freePoints", "joined", "lastVisit", "memo"];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail-backdrop", onMouseDown: (event) => {
    if (event.target === event.currentTarget && !dialog && !basicEditor && !paymentEditor) onClose();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { ref: dialogRef, className: "member-detail", role: "dialog", "aria-modal": "true", "aria-labelledby": "member-detail-title", onKeyDown: focusTrap, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { className: "member-detail__header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
            spec.title,
            " \xB7 회원 상세"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h2", { id: "member-detail-title", ref: headingRef, tabIndex: -1, children: [
            asText(live.name) || asText(live.loginId) || "회원",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "회원 관리" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { children: "수정 내용은 실제 운영 시스템이 아닌 현재 기기의 로컬 데이터에만 저장됩니다." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "icon-button", type: "button", "aria-label": "회원 상세 닫기", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(X, { size: 24 }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__body", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-request-v6__detail-flow", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__panel member-request-v6__detail-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__section-heading", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__eyebrow", children: "회원 기본정보" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: "연락처와 회원 상태를 확인하세요." }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__description", children: "회원정보를 확인하고 기본정보 수정에서 필요한 항목만 변경하세요." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "primary", type: "button", onClick: () => setBasicEditor(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Pencil, { size: 18 }),
              "기본정보 수정"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dl", { className: "member-detail__facts", children: basicKeys.filter((key) => key in live).map((key) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: spec.fields.find((field) => field.key === key)?.label ?? { cafeNickname: "카페 닉네임", balance: "보유 포인트", joined: "가입일", lastVisit: "최근 접속일", memo: "관리 메모" }[key] ?? key }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: ["balance", "paidPoints", "freePoints"].includes(key) ? asNumber(live[key]).toLocaleString("ko-KR") + "P" : printable(live[key]) })
          ] }, key)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__panel member-request-v6__detail-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__section-heading", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__eyebrow", children: "이용 중인 서비스" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: "서비스별 기간과 상태를 관리하세요." }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__description", children: "서비스 추가\xB7일시정지\xB7연장\xB7환불 작업은 이 전달본의 로컬 데이터와 변경기록에만 반영됩니다." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "primary", type: "button", onClick: openAdd, children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Plus, { size: 19 }),
              "서비스 추가"
            ] })
          ] }),
          services2.length ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__service-list", children: services2.map((service) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: "member-detail__service", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__service-top", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "member-detail__status " + statusClass(service.status), children: service.status }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: service.product }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("small", { children: [
                  service.category,
                  " \xB7 ",
                  service.periodType,
                  service.months > 0 ? " \xB7 " + service.months + "개월" : ""
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { className: "member-detail__price", children: money(service.price) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("dl", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "시작일" }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: service.start || "미설정" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "종료일" }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: service.end || "미설정" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "사용일 \xB7 잔여일" }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: service.start && service.end ? daysBetween(service.start, dateToday()) + "일 \xB7 " + Math.max(0, daysBetween(dateToday(), service.end)) + "일" : "기간 미설정" })
              ] }),
              service.pausedAt && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "일시정지일" }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: service.pausedAt })
              ] })
            ] }),
            service.memo && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "member-detail__service-memo", children: [
              "메모: ",
              service.memo
            ] }),
            service.refund && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "member-detail__service-memo refund", children: [
              "환불예상금액: ",
              money(service.refund.estimate)
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__service-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { type: "button", onClick: () => openServiceEditor(service), children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Pencil, { size: 17 }),
                "서비스 수정"
              ] }),
              service.status === "일시정지" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { type: "button", onClick: () => setDialog({ kind: "confirm", action: "restart", id: service.id }), children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Play, { size: 17 }),
                "재시작"
              ] }) : service.status !== "환불" && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { type: "button", onClick: () => setDialog({ kind: "confirm", action: "pause", id: service.id }), children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Pause, { size: 17 }),
                "일시정지"
              ] }),
              service.status !== "환불" && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { type: "button", onClick: () => openExtension(service), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CalendarPlus, { size: 17 }),
                  "연장"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "danger", type: "button", onClick: () => openRefund(service), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(RotateCcw, { size: 17 }),
                  "환불"
                ] })
              ] })
            ] })
          ] }, service.id)) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__empty", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(History, { size: 30 }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: "등록된 이용 서비스가 없습니다." }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "서비스 추가에서 상품, 기간, 금액을 입력해 등록하세요." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__panel member-request-v6__detail-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__section-heading", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__eyebrow", children: "결제 기록" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: "아이디가 연결된 결제 내역입니다." }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__description", children: "입금 확인과 승인번호 편집도 현재 기기의 로컬 결제 기록만 바꿉니다." })
          ] }) }),
          payments.length ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { className: "member-detail__table", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "결제일자" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "품목명" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "이용기간" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "결제금액" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "결제수단" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "상태" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "관리" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: payments.map((payment) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: asText(payment.date) || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: asText(payment.product) || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: periodText(asText(payment.start), asText(payment.end)) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: money(payment.amount) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: asText(payment.method) || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "member-detail__payment-status " + (asText(payment.status) === "완료" ? "complete" : "pending"), children: asText(payment.status) || "—" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__payment-actions", children: [
                asText(payment.status) === "입금대기" && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "primary", type: "button", onClick: () => store.confirmBank(payment.id), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Check, { size: 16 }),
                  "입금 확인"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { type: "button", onClick: () => setPaymentEditor(payment), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ReceiptText, { size: 16 }),
                  "승인번호"
                ] })
              ] }) })
            ] }, payment.id)) })
          ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__empty", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CreditCard, { size: 30 }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: "연결된 결제 기록이 없습니다." }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "회원 아이디가 일치하는 결제 기록이 표시됩니다." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__panel member-request-v6__detail-section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__section-heading", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__eyebrow", children: "변경 기록" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: "서비스와 회원정보의 로컬 변경 기록입니다." }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__description", children: "기록 메모는 수정할 수 있으며, 삭제 전에는 확인 절차를 거칩니다." })
          ] }) }),
          changes.length ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { className: "member-detail__table", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "일자" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "구분" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "항목" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "기간" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "비고" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { children: "관리" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: changes.map((change) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: stamp(change.timestamp) || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: change.type || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: change.item || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: change.period || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "member-detail__memo-cell", children: change.memo || "—" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__payment-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { type: "button", onClick: () => openRecordEditor(change), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Pencil, { size: 16 }),
                  "기록 수정"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "danger", type: "button", onClick: () => setDialog({ kind: "confirm", action: "delete-record", id: change.id }), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Trash2, { size: 16 }),
                  "삭제"
                ] })
              ] }) })
            ] }, change.id)) })
          ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__empty", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(History, { size: 30 }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { children: "아직 변경 기록이 없습니다." }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "서비스 관리나 기본정보 저장 후 이곳에서 기록을 확인할 수 있습니다." })
          ] })
        ] })
      ] }) })
    ] }),
    (dialog?.kind === "add" || dialog?.kind === "edit-service") && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "service-add-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "이용중인 서비스" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { id: "service-add-title", children: dialog.kind === "add" ? "서비스 추가" : "서비스 정보 수정" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "icon-button", type: "button", "aria-label": "서비스 입력창 닫기", onClick: () => setDialog(null), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(X, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "member-detail__dialog-description", children: "필수 항목을 입력하면 회원별 services 배열과 변경기록에 저장됩니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__form-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "구분 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("select", { value: serviceForm.category, onChange: (event) => updateServiceForm("category", event.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "서비스", children: "서비스" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "유선가입", children: "유선가입" })
          ] }),
          serviceErrors.category && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { role: "alert", children: serviceErrors.category })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "상품 선택 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("select", { value: serviceForm.product, onChange: (event) => updateServiceForm("product", event.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "", children: "상품을 선택하세요" }),
            products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: product, children: product }, product))
          ] }),
          serviceErrors.product && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { role: "alert", children: serviceErrors.product })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "개월 기간 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "number", min: "1", step: "1", value: serviceForm.months, onChange: (event) => updateServiceForm("months", event.target.value) }),
          serviceErrors.months && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { role: "alert", children: serviceErrors.months })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "기간 유형 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("select", { value: serviceForm.periodType, onChange: (event) => updateServiceForm("periodType", event.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "연장", children: "연장" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "날짜지정", children: "날짜지정" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "시작일 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "date", value: serviceForm.start, onChange: (event) => updateServiceForm("start", event.target.value) }),
          serviceErrors.start && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { role: "alert", children: serviceErrors.start })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "종료일 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "date", value: serviceForm.end, disabled: serviceForm.periodType === "연장" && dialog.kind === "add", onChange: (event) => updateServiceForm("end", event.target.value) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: dialog.kind === "add" && serviceForm.periodType === "연장" ? "연장 유형은 시작일과 개월 기간으로 계산됩니다." : "서비스 수정 시 종료일을 직접 조정할 수 있습니다." }),
          serviceErrors.end && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { role: "alert", children: serviceErrors.end })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "금액 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "number", min: "0", step: "1000", value: serviceForm.price, onChange: (event) => updateServiceForm("price", event.target.value), placeholder: "0" }),
          serviceErrors.price && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", { role: "alert", children: serviceErrors.price })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "member-detail__full-field", children: [
          "메모",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("textarea", { rows: 3, value: serviceForm.memo, onChange: (event) => updateServiceForm("memo", event.target.value), placeholder: "추가 사유 또는 안내사항을 입력하세요" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", onClick: () => setDialog(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "primary", type: "button", onClick: submitService, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Save, { size: 18 }),
          dialog.kind === "add" ? "서비스 추가" : "서비스 정보 저장"
        ] })
      ] })
    ] }) }),
    dialog?.kind === "extend" && selectedService && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__dialog member-detail__small-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "service-extend-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: selectedService.product }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { id: "service-extend-title", children: "서비스 연장" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "icon-button", type: "button", "aria-label": "서비스 연장 닫기", onClick: () => setDialog(null), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(X, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "member-detail__dialog-description", children: [
        "현재 종료일 ",
        selectedService.end || "미설정",
        " 뒤로 연장 일수만큼 더합니다."
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__form-grid one", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "연장 일수 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "number", min: "1", step: "1", value: extension.days, onChange: (event) => setExtension((current) => ({ ...current, days: event.target.value })), placeholder: "1" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
          "연장 관련 메모 ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("textarea", { rows: 4, value: extension.memo, onChange: (event) => setExtension((current) => ({ ...current, memo: event.target.value })), placeholder: "연장 사유를 입력하세요" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", onClick: () => setDialog(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "primary", type: "button", onClick: submitExtension, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CalendarPlus, { size: 18 }),
          "등록"
        ] })
      ] })
    ] }) }),
    dialog?.kind === "refund" && selectedService && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__dialog member-detail__refund-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "service-refund-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: selectedService.product }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { id: "service-refund-title", children: "환불 계산 \xB7 기록" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "icon-button", type: "button", "aria-label": "환불 계산 닫기", onClick: () => setDialog(null), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(X, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "member-detail__warning", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TriangleAlert, { size: 21 }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: "환불 계산은 화면확인용 가정, 실제기준확인필요" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
          "금전 처리나 외부 결제 취소는 하지 않으며, 결과는 로컬 서비스 상태와 기록에만 저장됩니다."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "member-detail__single-field", children: [
        "원래 결제금액 ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "number", min: "0", step: "1000", value: refund.original, onChange: (event) => setRefund((current) => ({ ...current, original: event.target.value })) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("dl", { className: "member-detail__refund-calculation", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "이용일수" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("dd", { children: [
            refundUsed,
            "일 / 전체 ",
            refundTotal,
            "일"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "사용료 (일할 예시)" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: money(refundUsedFee) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "결제수수료 (원래 결제금액의 10% 예시)" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: money(refundProcessingFee) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "환불예상금액" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: money(refundEstimate) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "member-detail__single-field", children: [
        "환불 관련 메모 ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { children: "*" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("textarea", { rows: 4, value: refund.memo, onChange: (event) => setRefund((current) => ({ ...current, memo: event.target.value })), placeholder: "환불 사유와 확인 내용을 입력하세요" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", onClick: () => setDialog(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "danger", type: "button", onClick: submitRefund, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(RotateCcw, { size: 18 }),
          "환불 기록 저장"
        ] })
      ] })
    ] }) }),
    dialog?.kind === "edit-record" && selectedChange && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__dialog member-detail__small-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "record-edit-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
            selectedChange.type,
            " \xB7 ",
            selectedChange.item
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { id: "record-edit-title", children: "변경기록 메모 수정" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "icon-button", type: "button", "aria-label": "기록 수정 닫기", onClick: () => setDialog(null), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(X, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("dl", { className: "member-detail__record-summary", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "일자" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: stamp(selectedChange.timestamp) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "기간" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: selectedChange.period || "—" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "member-detail__single-field", children: [
        "메모",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("textarea", { rows: 5, value: recordMemo, onChange: (event) => setRecordMemo(event.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", onClick: () => setRecordMemo(""), children: "메모 초기화" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", onClick: () => setDialog(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("button", { className: "primary", type: "button", onClick: saveRecordMemo, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Save, { size: 18 }),
          "저장"
        ] })
      ] })
    ] }) }),
    confirmTarget && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "member-detail__dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "member-detail__dialog member-detail__confirm-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "member-confirm-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "로컬 데이터 확인" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { id: "member-confirm-title", children: confirmTarget.action === "pause" ? "해당 서비스를 일시정지 하시겠습니까?" : confirmTarget.action === "restart" ? "서비스를 재시작하시겠습니까?" : "변경 기록을 삭제하시겠습니까?" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "icon-button", type: "button", "aria-label": "확인창 닫기", onClick: () => setDialog(null), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(X, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: confirmTarget.action === "pause" ? "현재일을 일시정지일로 기록합니다. 실제 운영 서비스에는 영향을 주지 않습니다." : confirmTarget.action === "restart" ? "중단일수를 계산하여 종료일을 같은 일수만큼 연장합니다." : "삭제한 변경 기록은 이 브라우저의 로컬 데이터에서만 사라지며 되돌릴 수 없습니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", onClick: () => setDialog(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: confirmTarget.action === "delete-record" ? "danger" : "primary", type: "button", onClick: confirmAction, children: confirmTarget.action === "delete-record" ? "삭제" : "확인" })
      ] })
    ] }) }),
    basicEditor && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(RecordEditor, { spec: basicSpec, record: live, onClose: () => setBasicEditor(false), onSave: saveBasic }),
    paymentEditor && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(RecordEditor, { spec: approvalSpec, record: paymentEditor, onClose: () => setPaymentEditor(null), onSave: (row) => {
      store.save("payments", row);
      setPaymentEditor(null);
    } })
  ] });
}

// components/VipProductEditor.tsx
var import_react9 = React;

// components/ProductDetailSource.tsx
var import_react8 = React;
var import_jsx_runtime6 = JSXRuntime;
function validDetailUrl(value2) {
  try {
    const u = new URL(value2);
    return u.protocol === "https:" && !u.username && !u.password;
  } catch {
    return false;
  }
}
function ProductDetailSource({ draft, onChange }) {
  const [preview, setPreview] = (0, import_react8.useState)(false), [error, setError] = (0, import_react8.useState)("");
  const mode = String(draft.detailMode ?? "본문 편집");
  function change(key, value2) {
    setPreview(false);
    setError("");
    onChange(key, value2);
  }
  function upload(file) {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setError("HTML 파일은 2MB 이하로 선택해주세요.");
      return;
    }
    if (!/\.html?$/i.test(file.name)) {
      setError("HTML 파일을 선택해주세요.");
      return;
    }
    file.text().then((v) => {
      change("detailHtml", v);
      onChange("detailMode", "HTML 소스");
    }).catch(() => setError("파일을 읽을 수 없습니다."));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "product-source-v6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { children: [
      "상세 내용 연결 방식",
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("select", { "aria-label": "상세 내용 연결 방식", value: mode, onChange: (e) => change("detailMode", e.target.value), children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { children: "본문 편집" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { children: "HTML 소스" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("option", { children: "외부 iframe 주소" })
      ] })
    ] }),
    mode === "HTML 소스" && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { children: [
        "별도 HTML 파일",
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { "aria-label": "별도 HTML 파일", type: "file", accept: ".html,.htm,text/html", onChange: (e) => upload(e.target.files?.[0]) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { children: [
        "상품 상세 HTML 소스",
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("textarea", { "aria-label": "상품 상세 HTML 소스", rows: 10, value: String(draft.detailHtml ?? ""), onChange: (e) => change("detailHtml", e.target.value), placeholder: "별도 상세페이지의 전체 HTML 소스를 넣으세요." })
      ] })
    ] }),
    mode === "외부 iframe 주소" && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { children: [
      "상품 상세 iframe 주소",
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { "aria-label": "상품 상세 iframe 주소", type: "url", placeholder: "https://example.com/product-detail.html", value: String(draft.detailUrl ?? ""), onChange: (e) => change("detailUrl", e.target.value) })
    ] }),
    mode !== "본문 편집" && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", onClick: () => {
        if (mode === "외부 iframe 주소" && !validDetailUrl(String(draft.detailUrl ?? ""))) {
          setError("HTTPS 상세페이지 주소를 입력해주세요.");
          return;
        }
        if (mode === "HTML 소스" && !String(draft.detailHtml ?? "").trim()) {
          setError("HTML 소스를 입력해주세요.");
          return;
        }
        setPreview((v) => !v);
      }, children: preview ? "미리보기 닫기" : "상세페이지 미리보기" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "muted", children: "원본은 별도 파일로 보관할 수 있습니다. 이 미리보기는 격리되어 스크립트\xB7외부 결제 동작을 실행하지 않습니다. 저장 후 실제 사이트 적용은 개발자가 연결합니다." })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "field-error", role: "alert", children: error }),
    preview && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("iframe", { title: "상품 상세 격리 미리보기", sandbox: "", referrerPolicy: "no-referrer", src: mode === "외부 iframe 주소" ? String(draft.detailUrl) : void 0, srcDoc: mode === "HTML 소스" ? String(draft.detailHtml) : void 0 })
  ] });
}

// components/VipProductEditor.tsx
var import_jsx_runtime7 = JSXRuntime;
var IMAGE_TYPES = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
var EXPERT_FALLBACKS = ["골드마스터", "꽃게선생"];
var TABS = [
  { id: "product", label: "상품 \xB7 가격" },
  { id: "detail", label: "상세 \xB7 입장안내" },
  { id: "event", label: "이벤트" }
];
function asText2(value2) {
  return value2 === null || value2 === void 0 ? "" : String(value2);
}
function asObject(value2) {
  return value2 && typeof value2 === "object" && !Array.isArray(value2) ? value2 : {};
}
function inputNumber(value2, fallback = 0) {
  if (value2 === "") return "";
  const number2 = Number(value2);
  return Number.isFinite(number2) ? number2 : fallback;
}
function safeInteger(value2, fallback = 0) {
  const number2 = Number(value2);
  return Number.isInteger(number2) ? number2 : fallback;
}
function optionName(base, bonus) {
  const baseMonths = Number(base), bonusMonths = Number(bonus);
  if (!Number.isInteger(baseMonths) || baseMonths < 1 || !Number.isInteger(bonusMonths) || bonusMonths < 0) return "기간 옵션";
  return bonusMonths > 0 ? `${baseMonths}개월 + ${bonusMonths}개월 서비스` : `${baseMonths}개월`;
}
function parseOptions(value2) {
  if (!Array.isArray(value2)) return [];
  return value2.slice(0, 10).map((raw, index) => {
    const option = asObject(raw);
    const baseMonths = inputNumber(option.baseMonths, 1);
    const bonusMonths = inputNumber(option.bonusMonths, 0);
    return {
      id: asText2(option.id) || `local-option-${index + 1}`,
      title: asText2(option.title) || optionName(baseMonths, bonusMonths),
      baseMonths,
      bonusMonths,
      amount: inputNumber(option.amount, 0),
      popular: Boolean(option.popular)
    };
  });
}
function parseEvents(value2) {
  const source = asObject(value2), first = asObject(source.firstCome), time = asObject(source.timeAttack);
  const result = {};
  const capacity = safeInteger(first.capacity, 0);
  if (capacity > 0) result.firstCome = { capacity, previewParticipants: Math.max(0, safeInteger(first.previewParticipants, 0)) };
  const days = safeInteger(time.days, -1), hours = safeInteger(time.hours, -1), minutes = safeInteger(time.minutes, -1), seconds = safeInteger(time.seconds, -1), deadlineUTC = asText2(time.deadlineUTC);
  if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0 && deadlineUTC) result.timeAttack = { days, hours, minutes, seconds, deadlineUTC };
  return result;
}
function isSafeTelegramUrl(value2) {
  try {
    const url = new URL(value2.trim());
    const host = url.hostname.toLowerCase();
    return url.protocol === "https:" && !url.username && !url.password && Boolean(url.pathname) && ["t.me", "www.t.me", "telegram.me", "www.telegram.me"].includes(host) && url.pathname !== "/";
  } catch {
    return false;
  }
}
function isSafeImageValue(value2) {
  if (/^\/assets\/[a-z0-9.-]+$/i.test(value2)) return true;
  return /^data:image\/(?:png|jpeg|webp|gif);base64,[a-z0-9+/=\s]+$/i.test(value2) || (() => {
    try {
      const url = new URL(value2);
      return url.protocol === "https:" && !url.username && !url.password && Boolean(url.hostname);
    } catch {
      return false;
    }
  })();
}
function numberText(value2, maximumFractionDigits = 2) {
  return value2.toLocaleString("ko-KR", { maximumFractionDigits });
}
function optionMonthly(option) {
  const months = Number(option.baseMonths) + Number(option.bonusMonths), amount3 = Number(option.amount);
  return Number.isFinite(amount3) && Number.isInteger(months) && months > 0 ? amount3 / months : null;
}
function optionDiscount(option, monthlyAmount) {
  const months = Number(option.baseMonths) + Number(option.bonusMonths), amount3 = Number(option.amount), monthly = Number(monthlyAmount);
  if (!Number.isFinite(amount3) || !Number.isInteger(months) || months < 1 || !Number.isFinite(monthly) || monthly <= 0) return null;
  return (1 - amount3 / (monthly * months)) * 100;
}
function formatCountdown(deadlineUTC, now2) {
  const end = Date.parse(deadlineUTC);
  if (!Number.isFinite(end)) return "마감 시간을 확인해주세요.";
  const remaining = Math.max(0, end - now2);
  if (remaining === 0) return "마감되었습니다.";
  const days = Math.floor(remaining / 864e5), hours = Math.floor(remaining % 864e5 / 36e5), minutes = Math.floor(remaining % 36e5 / 6e4), seconds = Math.floor(remaining % 6e4 / 1e3);
  return `남은 시간 ${days}일 ${String(hours).padStart(2, "0")}시간 ${String(minutes).padStart(2, "0")}분 ${String(seconds).padStart(2, "0")}초`;
}
function localDeadline(deadlineUTC) {
  const date3 = new Date(deadlineUTC);
  return Number.isNaN(date3.getTime()) ? "—" : new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium", timeStyle: "short" }).format(date3);
}
function VipProductEditor({ record: record2, store, onClose }) {
  const initial = (0, import_react9.useMemo)(() => JSON.parse(JSON.stringify(record2)), [record2]);
  const [draft, setDraft] = (0, import_react9.useState)(() => {
    const source = initial, options2 = parseOptions(source.options), monthlyAmount = inputNumber(source.monthlyAmount ?? source.amount, 0);
    return {
      ...source,
      title: asText2(source.title),
      expert: asText2(source.expert),
      display: typeof source.display === "boolean" ? source.display : source.visible !== "판매중지",
      monthlyAmount,
      groupColor: asText2(source.groupColor) || "#912c2f",
      profileImage: asText2(source.profileImage ?? source.image),
      telegram: asText2(source.telegram),
      telegram2: asText2(source.telegram2),
      content: asText2(source.content),
      eventText: asText2(source.eventText),
      options: options2,
      eventSettings: parseEvents(source.eventSettings)
    };
  });
  const [activeTab, setActiveTab] = (0, import_react9.useState)("product");
  const [errors, setErrors] = (0, import_react9.useState)({});
  const [dirty, setDirty] = (0, import_react9.useState)(false);
  const [optionCount, setOptionCount] = (0, import_react9.useState)(() => String(Math.min(10, Math.max(1, parseOptions(initial.options).length || 1))));
  const savedEvents = parseEvents(draft.eventSettings);
  const [firstComeForm, setFirstComeForm] = (0, import_react9.useState)(() => String(savedEvents.firstCome?.capacity ?? ""));
  const [previewParticipants, setPreviewParticipants] = (0, import_react9.useState)(() => String(savedEvents.firstCome?.previewParticipants ?? 0));
  const [timeAttackForm, setTimeAttackForm] = (0, import_react9.useState)(() => ({
    days: String(savedEvents.timeAttack?.days ?? 0),
    hours: String(savedEvents.timeAttack?.hours ?? 0),
    minutes: String(savedEvents.timeAttack?.minutes ?? 0),
    seconds: String(savedEvents.timeAttack?.seconds ?? 0)
  }));
  const [eventNotice, setEventNotice] = (0, import_react9.useState)("");
  const [confirmation, setConfirmation] = (0, import_react9.useState)(null);
  const [now2, setNow] = (0, import_react9.useState)(() => Date.now());
  const titleRef = (0, import_react9.useRef)(null);
  const dialogRef = (0, import_react9.useRef)(null);
  const confirmRef = (0, import_react9.useRef)(null);
  const isNew = asText2(record2.id).startsWith("new-");
  const options = parseOptions(draft.options);
  const expertOptions = (0, import_react9.useMemo)(() => Array.from(new Set([
    ...EXPERT_FALLBACKS,
    ...store.state.records.experts.flatMap((item) => [asText2(item.name), asText2(item.nickname)]),
    asText2(draft.expert)
  ].filter(Boolean))), [draft.expert, store.state.records.experts]);
  (0, import_react9.useEffect)(() => {
    titleRef.current?.focus();
  }, []);
  (0, import_react9.useEffect)(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);
  (0, import_react9.useEffect)(() => {
    if (!savedEvents.timeAttack) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1e3);
    return () => window.clearInterval(timer);
  }, [savedEvents.timeAttack?.deadlineUTC]);
  (0, import_react9.useEffect)(() => {
    if (confirmation) window.setTimeout(() => confirmRef.current?.querySelector("button:not(:disabled)")?.focus(), 0);
  }, [confirmation]);
  function change(key, value2) {
    setDraft((current) => ({ ...current, [key]: value2 }));
    setDirty(true);
    setErrors((current) => ({ ...current, [key]: "" }));
  }
  function replaceOptions(next) {
    change("options", next);
    setErrors((current) => ({ ...current, options: "", optionCount: "" }));
  }
  function makeOptions(count) {
    const defaultAmount = Number(draft.monthlyAmount);
    replaceOptions(Array.from({ length: count }, (_, index) => ({
      id: uid(),
      title: `${index + 1}개월`,
      baseMonths: 1,
      bonusMonths: 0,
      amount: Number.isFinite(defaultAmount) && defaultAmount >= 0 ? defaultAmount : 0,
      popular: index === 0
    })));
    setEventNotice(`${count}개의 기간 옵션을 새로 만들었습니다. 마지막으로 상품 전체 저장을 누르세요.`);
  }
  function requestOptionReset() {
    const count = Number(optionCount);
    if (!Number.isInteger(count) || count < 1 || count > 10) {
      setErrors((current) => ({ ...current, optionCount: "옵션 개수는 1에서 10 사이의 정수로 입력해주세요." }));
      return;
    }
    if (options.length > 0) {
      setConfirmation({ kind: "reset-options", count });
      return;
    }
    makeOptions(count);
  }
  function updateOption(index, key, value2) {
    replaceOptions(options.map((option, current) => current === index ? { ...option, [key]: value2, title: key === "baseMonths" || key === "bonusMonths" ? optionName(key === "baseMonths" ? value2 : option.baseMonths, key === "bonusMonths" ? value2 : option.bonusMonths) : option.title } : option));
  }
  function handleProfileImage(file) {
    if (!file) return;
    if (!IMAGE_TYPES.has(file.type)) {
      setErrors((current) => ({ ...current, profileImage: "PNG\xB7JPG\xB7WEBP\xB7GIF 파일만 선택할 수 있습니다." }));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setErrors((current) => ({ ...current, profileImage: "프로필 이미지는 2MB 이하만 선택할 수 있습니다." }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") change("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  }
  function validateEvents(settings, nextErrors) {
    if (settings.firstCome && (!Number.isInteger(settings.firstCome.capacity) || settings.firstCome.capacity < 1)) nextErrors.firstCome = "선착순 인원은 1명 이상의 정수로 입력해주세요.";
    if (settings.firstCome && (!Number.isInteger(settings.firstCome.previewParticipants ?? 0) || (settings.firstCome.previewParticipants ?? 0) < 0 || (settings.firstCome.previewParticipants ?? 0) > settings.firstCome.capacity)) nextErrors.firstCome = "미리보기 참여수는 0명부터 선착순 정원 사이로 입력해주세요.";
    if (settings.timeAttack) {
      const { days, hours, minutes, seconds } = settings.timeAttack;
      if (!Number.isInteger(days) || days < 0 || days > 365 || !Number.isInteger(hours) || hours < 0 || hours > 23 || !Number.isInteger(minutes) || minutes < 0 || minutes > 59 || !Number.isInteger(seconds) || seconds < 0 || seconds > 59 || days * 86400 + hours * 3600 + minutes * 60 + seconds < 1 || !Number.isFinite(Date.parse(settings.timeAttack.deadlineUTC))) nextErrors.timeAttack = "타임어택 기간과 마감 시간을 다시 저장해주세요.";
    }
  }
  function validate() {
    const next = {}, title = asText2(draft.title).trim(), expert = asText2(draft.expert).trim(), monthly = Number(draft.monthlyAmount), image = asText2(draft.profileImage), color = asText2(draft.groupColor);
    if (!title) next.title = "상품명을 입력해주세요.";
    if (!expert) next.expert = "전문가를 선택해주세요.";
    if (draft.monthlyAmount === "" || !Number.isFinite(monthly) || monthly < 0) next.monthlyAmount = "한달금액은 0 이상의 숫자로 입력해주세요.";
    if (typeof draft.display !== "boolean") next.display = "상품 표시 여부를 선택해주세요.";
    if (!image) next.profileImage = "프로필 이미지를 등록해주세요.";
    else if (!isSafeImageValue(image)) next.profileImage = "안전한 HTTPS 이미지 또는 허용된 업로드 이미지로 등록해주세요.";
    if (!/^#[0-9a-f]{6}$/i.test(color)) next.groupColor = "그룹 색상을 다시 선택해주세요.";
    if (options.length < 1 || options.length > 10) next.options = "기간 옵션은 1개 이상 10개 이하로 구성해주세요.";
    options.forEach((option, index) => {
      const base = Number(option.baseMonths), bonus = Number(option.bonusMonths), amount3 = Number(option.amount);
      if (option.baseMonths === "" || !Number.isInteger(base) || base < 1) next.options = `옵션 ${index + 1}의 기본개월수는 1 이상의 정수여야 합니다.`;
      else if (option.bonusMonths === "" || !Number.isInteger(bonus) || bonus < 0) next.options = `옵션 ${index + 1}의 서비스개월은 0 이상의 정수여야 합니다.`;
      else if (option.amount === "" || !Number.isFinite(amount3) || amount3 < 0) next.options = `옵션 ${index + 1}의 금액은 0 이상의 숫자여야 합니다.`;
    });
    for (const key of ["telegram", "telegram2"]) {
      const value2 = asText2(draft[key]).trim();
      if (value2 && !isSafeTelegramUrl(value2)) next[key] = "https://t.me/ 형식의 안전한 텔레그램 주소를 입력해주세요.";
    }
    if (draft.detailMode === "외부 iframe 주소" && !validDetailUrl(asText2(draft.detailUrl))) next.detailUrl = "HTTPS 상품 상세 주소를 입력해주세요.";
    if (draft.detailMode === "HTML 소스" && !asText2(draft.detailHtml).trim()) next.detailHtml = "상품 상세 HTML 소스를 입력해주세요.";
    validateEvents(savedEvents, next);
    return next;
  }
  function focusError(next) {
    const key = Object.keys(next)[0];
    if (!key) return;
    if (["title", "expert", "monthlyAmount", "display", "profileImage", "groupColor", "options", "optionCount"].includes(key)) setActiveTab("product");
    else if (["telegram", "telegram2", "content", "detailHtml", "detailUrl"].includes(key)) setActiveTab("detail");
    else setActiveTab("event");
    window.setTimeout(() => document.getElementById(`vip-product-${key}`)?.focus(), 0);
  }
  function saveFirstCome() {
    const capacity = Number(firstComeForm);
    if (!Number.isInteger(capacity) || capacity < 1) {
      setErrors((current) => ({ ...current, firstCome: "선착순 인원은 1명 이상의 정수로 입력해주세요." }));
      return;
    }
    const participants = Number(previewParticipants);
    if (!Number.isInteger(participants) || participants < 0 || participants > capacity) {
      setErrors((current) => ({ ...current, firstCome: "미리보기 참여수는 0명부터 정원 사이로 입력해주세요." }));
      return;
    }
    const settings = { ...savedEvents, firstCome: { capacity, previewParticipants: participants } };
    change("eventSettings", settings);
    setErrors((current) => ({ ...current, firstCome: "" }));
    setEventNotice("선착순 이벤트 설정을 작성 중인 상품에 반영했습니다. 마지막으로 상품 전체 저장을 누르세요.");
  }
  function saveTimeAttack() {
    const days = Number(timeAttackForm.days), hours = Number(timeAttackForm.hours), minutes = Number(timeAttackForm.minutes), seconds = Number(timeAttackForm.seconds);
    const valid = Number.isInteger(days) && days >= 0 && days <= 365 && Number.isInteger(hours) && hours >= 0 && hours <= 23 && Number.isInteger(minutes) && minutes >= 0 && minutes <= 59 && Number.isInteger(seconds) && seconds >= 0 && seconds <= 59 && days * 86400 + hours * 3600 + minutes * 60 + seconds > 0;
    if (!valid) {
      setErrors((current) => ({ ...current, timeAttack: "일(0–365), 시(0–23), 분\xB7초(0–59)를 확인하고 총 기간을 1초 이상 입력해주세요." }));
      return;
    }
    const deadlineUTC = new Date(Date.now() + (days * 86400 + hours * 3600 + minutes * 60 + seconds) * 1e3).toISOString();
    change("eventSettings", { ...savedEvents, timeAttack: { days, hours, minutes, seconds, deadlineUTC } });
    setErrors((current) => ({ ...current, timeAttack: "" }));
    setEventNotice("타임어택 마감 시간을 현재 시점 기준으로 계산했습니다. 마지막으로 상품 전체 저장을 누르세요.");
  }
  function requestDeleteEvent(event) {
    setConfirmation({ kind: "delete-event", event });
  }
  function deleteEvent(event) {
    const settings = { ...savedEvents };
    delete settings[event];
    change("eventSettings", settings);
    if (event === "firstCome") {
      setFirstComeForm("");
      setPreviewParticipants("0");
    } else setTimeAttackForm({ days: "0", hours: "0", minutes: "0", seconds: "0" });
    setEventNotice(`${event === "firstCome" ? "선착순" : "타임어택"} 이벤트 설정을 작성 중인 상품에서 삭제했습니다. 마지막으로 상품 전체 저장을 누르세요.`);
  }
  function requestClose() {
    if (dirty) setConfirmation({ kind: "discard" });
    else onClose();
  }
  function confirmAction() {
    if (!confirmation) return;
    if (confirmation.kind === "discard") {
      onClose();
      return;
    }
    if (confirmation.kind === "reset-options") makeOptions(confirmation.count);
    if (confirmation.kind === "delete-event") deleteEvent(confirmation.event);
    setConfirmation(null);
  }
  function saveProduct() {
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      focusError(nextErrors);
      return;
    }
    const currentOptions = parseOptions(draft.options);
    const first = currentOptions[0];
    let id = asText2(draft.id);
    if (id.startsWith("new-")) id = id.slice(4);
    if (!id) id = uid();
    const normalized = {
      ...draft,
      id,
      title: asText2(draft.title).trim(),
      expert: asText2(draft.expert).trim(),
      display: Boolean(draft.display),
      visible: draft.display ? "판매중" : "판매중지",
      monthlyAmount: Number(draft.monthlyAmount),
      amount: Number(first.amount),
      groupColor: asText2(draft.groupColor).toLowerCase(),
      profileImage: asText2(draft.profileImage),
      image: asText2(draft.profileImage),
      telegram: asText2(draft.telegram).trim(),
      telegram2: asText2(draft.telegram2).trim(),
      content: asText2(draft.content),
      eventText: asText2(draft.eventText),
      baseMonths: Number(first.baseMonths),
      bonusMonths: Number(first.bonusMonths),
      options: currentOptions.map((option) => ({ id: option.id, title: optionName(option.baseMonths, option.bonusMonths), baseMonths: Number(option.baseMonths), bonusMonths: Number(option.bonusMonths), amount: Number(option.amount), popular: Boolean(option.popular) })),
      eventSettings: savedEvents,
      event: Boolean(savedEvents.firstCome || savedEvents.timeAttack)
    };
    store.save("products", normalized);
    onClose();
  }
  function handleDialogKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      if (confirmation) setConfirmation(null);
      else requestClose();
      return;
    }
    if (event.key !== "Tab") return;
    const container = confirmation ? confirmRef.current : event.currentTarget;
    const focusable = container?.querySelectorAll('button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[contenteditable="true"]');
    if (!focusable?.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  const firstComeSaved = savedEvents.firstCome;
  const timeAttackSaved = savedEvents.timeAttack;
  const confirmCopy = confirmation?.kind === "discard" ? { title: "저장하지 않은 변경사항을 버릴까요?", body: "입력한 VIP 상품과 이벤트 설정의 변경사항은 현재 기기에서도 저장되지 않습니다.", action: "저장하지 않고 닫기" } : confirmation?.kind === "reset-options" ? { title: "기존 기간 옵션을 초기화할까요?", body: "현재 입력한 기간\xB7금액\xB7인기 표시가 새 옵션으로 바뀝니다.", action: "옵션 초기화" } : confirmation?.kind === "delete-event" ? { title: `${confirmation.event === "firstCome" ? "선착순" : "타임어택"} 이벤트를 삭제할까요?`, body: "이 설정은 작성 중인 상품에서 제거됩니다. 아래의 상품 전체 저장 전까지는 로컬 초안에만 반영됩니다.", action: "이벤트 삭제" } : null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "vip-product-editor__backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "vip-product-editor", ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-labelledby": "vip-product-editor-title", onKeyDown: handleDialogKeyDown, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("header", { className: "vip-product-editor__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "VIP 상품 관리 \xB7 현재 기기의 가상 데이터" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { id: "vip-product-editor-title", ref: titleRef, tabIndex: -1, children: isNew ? "VIP 상품 등록" : "VIP 상품 수정" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "vip-product-editor__icon-button", "aria-label": "VIP 상품 편집창 닫기", onClick: requestClose, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(X, { size: 24 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__scope", children: "실제 운영 상품, 텔레그램, 결제 시스템에는 연결하지 않습니다. 이 화면의 저장은 이 브라우저의 로컬 가상 데이터에만 반영됩니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("nav", { className: "vip-product-editor__tabs", role: "tablist", "aria-label": "VIP 상품 편집 탭", children: TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", role: "tab", id: `vip-product-tab-${tab.id}`, "aria-controls": `vip-product-panel-${tab.id}`, "aria-selected": activeTab === tab.id, className: activeTab === tab.id ? "is-active" : "", onClick: () => setActiveTab(tab.id), children: tab.label }, tab.id)) }),
      activeTab === "product" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { id: "vip-product-panel-product", role: "tabpanel", "aria-labelledby": "vip-product-tab-product", className: "vip-product-editor__panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field vip-product-editor__field--full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "vip-product-editor__check", htmlFor: "vip-product-display", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-display", type: "checkbox", checked: Boolean(draft.display), onChange: (event) => change("display", event.target.checked) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("strong", { children: [
                  "상품 표시 ",
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { children: "*" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("small", { children: "체크하면 상품 목록과 판매 화면에 표시합니다." })
              ] })
            ] }),
            errors.display && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.display })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-title", children: [
              "상품명 ",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-title", value: asText2(draft.title), onChange: (event) => change("title", event.target.value), "aria-invalid": Boolean(errors.title) }),
            errors.title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.title })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-expert", children: [
              "전문가 ",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("select", { id: "vip-product-expert", value: asText2(draft.expert), onChange: (event) => change("expert", event.target.value), "aria-invalid": Boolean(errors.expert), children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", children: "전문가를 선택하세요" }),
              expertOptions.map((expert) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: expert, children: expert }, expert))
            ] }),
            errors.expert && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.expert })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-monthlyAmount", children: [
              "한달금액 ",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__amount", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-monthlyAmount", type: "number", min: "0", step: "any", inputMode: "decimal", value: draft.monthlyAmount === void 0 ? "" : String(draft.monthlyAmount), onChange: (event) => change("monthlyAmount", event.target.value === "" ? "" : Number(event.target.value)), "aria-invalid": Boolean(errors.monthlyAmount) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "원" })
            ] }),
            errors.monthlyAmount && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.monthlyAmount })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-groupColor", children: [
              "그룹 색상 ",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__color", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-groupColor", type: "color", value: asText2(draft.groupColor) || "#912c2f", onChange: (event) => change("groupColor", event.target.value) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("output", { "aria-live": "polite", children: asText2(draft.groupColor) || "#912c2f" })
            ] }),
            errors.groupColor && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.groupColor })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field vip-product-editor__field--full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-profileImage", children: [
              "프로필 이미지 ",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("em", { children: "*" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__image-field", children: [
              asText2(draft.profileImage) && isSafeImageValue(asText2(draft.profileImage)) ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: imageSrc(draft.profileImage), alt: "선택한 전문가 프로필 미리보기" }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__image-empty", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ImagePlus, { size: 28 }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "등록한 프로필 이미지가 없습니다." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-profileImage", type: "file", accept: "image/png,image/jpeg,image/webp,image/gif", onChange: (event) => {
                  handleProfileImage(event.target.files?.[0]);
                  event.currentTarget.value = "";
                }, "aria-invalid": Boolean(errors.profileImage) }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "PNG\xB7JPG\xB7WEBP\xB7GIF / 최대 2MB" }),
                asText2(draft.profileImage) && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "vip-product-editor__text-button", onClick: () => change("profileImage", ""), children: "이미지 제거" })
              ] })
            ] }),
            errors.profileImage && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.profileImage })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "vip-product-editor__options", "aria-labelledby": "vip-product-options-title", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__section-heading", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { id: "vip-product-options-title", children: "기간 옵션" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "기본개월수, 서비스개월, 금액을 입력하면 월 금액과 할인율을 자동 계산합니다." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__option-builder", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-optionCount", children: [
                "옵션갯수",
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-optionCount", type: "number", min: "1", max: "10", step: "1", inputMode: "numeric", value: optionCount, onChange: (event) => {
                  setOptionCount(event.target.value);
                  setErrors((current) => ({ ...current, optionCount: "" }));
                } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", onClick: requestOptionReset, children: "옵션 생성" })
            ] })
          ] }),
          errors.optionCount && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.optionCount }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__options-wrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__option-head", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "구분" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "기본개월수" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "서비스개월" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "금액" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "월 금액" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "할인율" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "인기" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "관리" })
            ] }),
            options.map((option, index) => {
              const monthly = optionMonthly(option), discount = optionDiscount(option, inputNumber(draft.monthlyAmount, 0));
              return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__option-row", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("strong", { children: [
                  "옵션 ",
                  index + 1
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "vip-product-editor__mobile-label", children: "기본개월수" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": `옵션 ${index + 1} 기본개월수`, type: "number", min: "1", step: "1", inputMode: "numeric", value: option.baseMonths === "" ? "" : String(option.baseMonths), onChange: (event) => updateOption(index, "baseMonths", event.target.value === "" ? "" : Number(event.target.value)) }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("small", { children: "개월" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "vip-product-editor__mobile-label", children: "서비스개월" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": `옵션 ${index + 1} 서비스개월`, type: "number", min: "0", step: "1", inputMode: "numeric", value: option.bonusMonths === "" ? "" : String(option.bonusMonths), onChange: (event) => updateOption(index, "bonusMonths", event.target.value === "" ? "" : Number(event.target.value)) }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("small", { children: "개월" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "vip-product-editor__mobile-label", children: "금액" }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": `옵션 ${index + 1} 금액`, type: "number", min: "0", step: "any", inputMode: "decimal", value: option.amount === "" ? "" : String(option.amount), onChange: (event) => updateOption(index, "amount", event.target.value === "" ? "" : Number(event.target.value)) }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("small", { children: "원" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("output", { "aria-label": `옵션 ${index + 1} 월 금액`, children: monthly === null ? "—" : `${numberText(monthly)}원` }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("output", { "aria-label": `옵션 ${index + 1} 할인율`, children: discount === null ? "—" : `${numberText(discount, 1)}%` }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "vip-product-editor__popular", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": `옵션 ${index + 1} 인기 여부`, type: "checkbox", checked: option.popular, onChange: (event) => updateOption(index, "popular", event.target.checked) }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "인기" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "vip-product-editor__icon-button vip-product-editor__remove-option", "aria-label": `옵션 ${index + 1} 삭제`, onClick: () => replaceOptions(options.filter((_, current) => current !== index)), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Trash2, { size: 19 }) })
              ] }, option.id);
            })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: "vip-product-editor__add-option", onClick: () => {
            if (options.length >= 10) {
              setErrors((current) => ({ ...current, options: "옵션은 최대 10개까지 추가할 수 있습니다." }));
              return;
            }
            replaceOptions([...options, { id: uid(), title: "기간 옵션", baseMonths: 1, bonusMonths: 0, amount: 0, popular: false }]);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Plus, { size: 19 }),
            "옵션 추가"
          ] }),
          errors.options && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: "vip-product-options", className: "vip-product-editor__error", role: "alert", children: errors.options })
        ] })
      ] }),
      activeTab === "detail" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { id: "vip-product-panel-detail", role: "tabpanel", "aria-labelledby": "vip-product-tab-detail", className: "vip-product-editor__panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__detail-intro", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "상품 상세 \xB7 입장안내" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "상세 소개와 두 개의 텔레그램 입장 경로를 작성합니다. 텔레그램 주소는 HTTPS의 t.me 또는 telegram.me 링크만 허용합니다." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "vip-product-telegram", children: "텔레그램 링크 1" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-telegram", type: "url", inputMode: "url", placeholder: "https://t.me/example", value: asText2(draft.telegram), onChange: (event) => change("telegram", event.target.value), "aria-invalid": Boolean(errors.telegram) }),
            errors.telegram && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.telegram })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { htmlFor: "vip-product-telegram2", children: "텔레그램 링크 2" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-telegram2", type: "url", inputMode: "url", placeholder: "https://t.me/example2", value: asText2(draft.telegram2), onChange: (event) => change("telegram2", event.target.value), "aria-invalid": Boolean(errors.telegram2) }),
            errors.telegram2 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.telegram2 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field vip-product-editor__field--full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ProductDetailSource, { draft, onChange: change }),
            errors.detailUrl && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { role: "alert", className: "vip-product-editor__error", children: errors.detailUrl }),
            errors.detailHtml && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { role: "alert", className: "vip-product-editor__error", children: errors.detailHtml })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__field vip-product-editor__field--full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RichTextEditor, { id: "vip-product-content", label: "상품 상세 내용", value: asText2(draft.content), onChange: (value2) => change("content", value2) }),
            errors.content && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "vip-product-editor__error", role: "alert", children: errors.content })
          ] })
        ] })
      ] }),
      activeTab === "event" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { id: "vip-product-panel-event", role: "tabpanel", "aria-labelledby": "vip-product-tab-event", className: "vip-product-editor__panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__detail-intro", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children: "이벤트 관리" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
            "이벤트 설정 저장은 현재 작성 중인 상품에만 반영합니다. 이벤트를 포함한 최종 반영은 하단의 ",
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: "상품 전체 저장" }),
            "에서 한 번에 진행합니다."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__event-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "vip-product-editor__event-card", "aria-labelledby": "vip-product-first-title", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__event-title", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Users, { size: 23 }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { id: "vip-product-first-title", children: "선착순 이벤트 설정" })
              ] }),
              firstComeSaved && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "vip-product-editor__saved", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CircleCheck, { size: 16 }),
                "저장됨"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "선착순 인원은 양의 정수만 입력할 수 있습니다." }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-firstCome", children: [
              "선착순 인원",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-firstCome", type: "number", min: "1", step: "1", inputMode: "numeric", value: firstComeForm, placeholder: "예: 30", onChange: (event) => {
                setFirstComeForm(event.target.value);
                setErrors((current) => ({ ...current, firstCome: "" }));
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("small", { children: "명" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { htmlFor: "vip-product-previewParticipants", children: [
              "미리보기용 가상 참여수",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { id: "vip-product-previewParticipants", type: "number", min: "0", step: "1", value: previewParticipants, onChange: (e) => setPreviewParticipants(e.target.value) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("small", { children: "실제 가입회원수\xB7매출에 포함되지 않습니다. 공개 사이트의 실제 참여인원으로 사용하지 않습니다." })
            ] }),
            firstComeSaved && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "vip-product-editor__event-summary", children: [
              "현재 설정: 선착순 ",
              firstComeSaved.capacity.toLocaleString("ko-KR"),
              "명 \xB7 미리보기 참여 ",
              firstComeSaved.previewParticipants ?? 0,
              "명 \xB7 잔여 ",
              Math.max(0, firstComeSaved.capacity - (firstComeSaved.previewParticipants ?? 0)),
              "명"
            ] }),
            errors.firstCome && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: "vip-product-firstCome-error", className: "vip-product-editor__error", role: "alert", children: errors.firstCome }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__card-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "primary", onClick: saveFirstCome, children: "이벤트 설정 저장" }),
              firstComeSaved && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: "danger", onClick: () => requestDeleteEvent("firstCome"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Trash2, { size: 18 }),
                "이벤트 삭제"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "vip-product-editor__event-card", "aria-labelledby": "vip-product-time-title", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__event-title", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Clock3, { size: 23 }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { id: "vip-product-time-title", children: "타임어택 이벤트 설정" })
              ] }),
              timeAttackSaved && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "vip-product-editor__saved", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CircleCheck, { size: 16 }),
                "저장됨"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: "저장 시 현재 시점을 기준으로 입력 기간만큼 마감 시간을 자동 설정합니다." }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__time-fields", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
                "일",
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": "타임어택 일", type: "number", min: "0", max: "365", step: "1", inputMode: "numeric", value: timeAttackForm.days, onChange: (event) => {
                  setTimeAttackForm((form) => ({ ...form, days: event.target.value }));
                  setErrors((current) => ({ ...current, timeAttack: "" }));
                } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
                "시",
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": "타임어택 시", type: "number", min: "0", max: "23", step: "1", inputMode: "numeric", value: timeAttackForm.hours, onChange: (event) => {
                  setTimeAttackForm((form) => ({ ...form, hours: event.target.value }));
                  setErrors((current) => ({ ...current, timeAttack: "" }));
                } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
                "분",
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": "타임어택 분", type: "number", min: "0", max: "59", step: "1", inputMode: "numeric", value: timeAttackForm.minutes, onChange: (event) => {
                  setTimeAttackForm((form) => ({ ...form, minutes: event.target.value }));
                  setErrors((current) => ({ ...current, timeAttack: "" }));
                } })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { children: [
                "초",
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { "aria-label": "타임어택 초", type: "number", min: "0", max: "59", step: "1", inputMode: "numeric", value: timeAttackForm.seconds, onChange: (event) => {
                  setTimeAttackForm((form) => ({ ...form, seconds: event.target.value }));
                  setErrors((current) => ({ ...current, timeAttack: "" }));
                } })
              ] })
            ] }),
            timeAttackSaved && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__countdown", role: "status", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: formatCountdown(timeAttackSaved.deadlineUTC, now2) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { children: [
                "마감: ",
                localDeadline(timeAttackSaved.deadlineUTC),
                " (내 기기 시간)"
              ] })
            ] }),
            errors.timeAttack && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: "vip-product-timeAttack", className: "vip-product-editor__error", role: "alert", children: errors.timeAttack }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "vip-product-editor__card-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "primary", onClick: saveTimeAttack, children: "이벤트 설정 저장" }),
              timeAttackSaved && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: "danger", onClick: () => requestDeleteEvent("timeAttack"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Trash2, { size: 18 }),
                "이벤트 삭제"
              ] })
            ] })
          ] })
        ] }),
        eventNotice && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { className: "vip-product-editor__event-notice", role: "status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CircleCheck, { size: 19 }),
          eventNotice
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "vip-product-editor__event-text", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RichTextEditor, { id: "vip-product-eventText", label: "이벤트 안내", value: asText2(draft.eventText), onChange: (value2) => change("eventText", value2) }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("footer", { className: "vip-product-editor__footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: dirty ? "저장하지 않은 변경사항이 있습니다." : "현재 기기의 가상 데이터에만 저장됩니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", onClick: requestClose, children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { type: "button", className: "primary", onClick: saveProduct, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Save, { size: 19 }),
          activeTab === "event" ? "이벤트 포함 상품 전체 저장" : isNew ? "상품 등록" : "상품 전체 저장"
        ] })
      ] })
    ] }),
    confirmation && confirmCopy && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "vip-product-editor__confirm-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "vip-product-editor__confirm", ref: confirmRef, role: "alertdialog", "aria-modal": "true", "aria-labelledby": "vip-product-confirm-title", "aria-describedby": "vip-product-confirm-copy", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { id: "vip-product-confirm-title", children: confirmCopy.title }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { id: "vip-product-confirm-copy", children: confirmCopy.body }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", onClick: () => setConfirmation(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "danger", onClick: confirmAction, children: confirmCopy.action })
      ] })
    ] }) })
  ] }) });
}

// data/bankModel.ts
var text = (v) => String(v ?? "");
function dateString(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function bankPreview(state, payment) {
  const member = state.records.members.find((m) => m.loginId === payment.loginId), product = state.records.products.find((p) => p.title === payment.product);
  const options = Array.isArray(product?.options) ? product.options : [];
  const option = options.find((o) => o.id === payment.optionId) ?? options.find((o) => Number(o.amount) === Number(payment.amount));
  const months = Number(payment.months ?? (option ? Number(option.baseMonths) + Number(option.bonusMonths) : Number(product?.baseMonths ?? 1) + Number(product?.bonusMonths ?? 0)));
  const services2 = Array.isArray(member?.services) ? member.services : [];
  const existing = services2.find((s) => s.product === payment.product && s.status === "입금대기");
  const today2 = /* @__PURE__ */ new Date();
  let start = text(existing?.start) || text(payment.start) || dateString(today2);
  if (!existing) {
    const recent = services2.filter((s) => s.product === payment.product && s.status === "이용중" && text(s.end) >= start).sort((a, b) => text(b.end).localeCompare(text(a.end)))[0];
    if (recent) {
      const next = /* @__PURE__ */ new Date(text(recent.end) + "T12:00:00");
      next.setDate(next.getDate() + 1);
      start = dateString(next);
    }
  }
  const endDate = /* @__PURE__ */ new Date(start + "T12:00:00"), originalDay = endDate.getDate();
  endDate.setDate(1);
  endDate.setMonth(endDate.getMonth() + Math.max(1, months));
  endDate.setDate(Math.min(originalDay, new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate()));
  endDate.setDate(endDate.getDate() - 1);
  return { member, product, months, start, end: text(existing?.end) || text(payment.end) || dateString(endDate), existing };
}
function confirmBank(state, id) {
  const payment = state.records.payments.find((p2) => p2.id === id);
  if (!payment || payment.status !== "입금대기" || payment.method !== "무통장입금") return state;
  const p = bankPreview(state, payment);
  if (!p.member || !p.product || !Number.isSafeInteger(p.months) || p.months < 1 || !Number.isSafeInteger(Number(payment.amount)) || Number(payment.amount) <= 0) return state;
  const service = { ...p.existing ?? { id: "bank-service-" + payment.id }, paymentId: payment.id, product: payment.product, category: "VIP 상품", periodType: "개월", months: p.months, start: p.start, end: p.end, price: Number(payment.amount), status: "이용중", memo: "무통장 입금 확인으로 적용한 가상 서비스" };
  const previous = Array.isArray(p.member.services) ? p.member.services : [];
  const services2 = p.existing ? previous.map((s) => s.id === p.existing?.id ? service : s) : [...previous, service];
  const time = (/* @__PURE__ */ new Date()).toISOString();
  return { ...state, records: { ...state.records, payments: state.records.payments.map((x) => x.id === id ? { ...x, status: "완료", confirmedAt: time, completedAt: time, start: p.start, end: p.end, months: p.months } : x), members: state.records.members.map((x) => x.id === p.member?.id ? { ...x, services: services2, group: payment.product, start: p.start, end: p.end, lastPayment: time.slice(0, 10), status: "정상", records: [{ id: "bank-log-" + id, timestamp: time, type: "입금 확인", item: payment.product, period: p.start + " ~ " + p.end, memo: "결제 완료 및 서비스 적용" }, ...Array.isArray(x.records) ? x.records : []] } : x) }, logs: [{ id: "bank-confirm-" + id, date: time, action: "입금 확인 및 서비스 적용", domain: "payments", target: text(payment.name) + " \xB7 " + text(payment.product) }, ...state.logs].slice(0, 500) };
}

// components/SmsComposer.tsx
var import_react10 = React;
var import_jsx_runtime8 = JSXRuntime;
function SmsComposer({ store, onClose }) {
  const [content, setContent] = (0, import_react10.useState)(""), [recipients, setRecipients] = (0, import_react10.useState)(Array.from({ length: 5 }, () => ({ id: uid(), name: "", phone: "" }))), [search, setSearch] = (0, import_react10.useState)(""), [mode, setMode] = (0, import_react10.useState)(null), [group, setGroup] = (0, import_react10.useState)("전체회원"), [error, setError] = (0, import_react10.useState)(""), [confirm, setConfirm] = (0, import_react10.useState)(false);
  const selected = recipients.filter((r) => r.name.trim() || r.phone.trim());
  const members = store.state.records.members.filter((m) => mode === "member" ? (String(m.loginId) + " " + String(m.name) + " " + String(m.nickname)).includes(search) : group === "전체회원" || m.group === group || Array.isArray(m.services) && m.services.some((s) => s.product === group));
  function add(m) {
    if (recipients.some((r) => r.phone === String(m.phone) && r.phone)) return;
    setRecipients((r) => [...r.filter((x) => x.name || x.phone), { id: uid(), name: String(m.name ?? ""), phone: String(m.phone ?? "") }]);
  }
  function review() {
    if (!content.trim()) {
      setError("문자 내용을 입력해주세요.");
      return;
    }
    if (!selected.length || selected.some((r) => !r.name.trim() || !/^01\d{8,9}$/.test(r.phone.replace(/\D/g, "")))) {
      setError("수신자 이름과 올바른 휴대폰번호를 입력해주세요.");
      return;
    }
    setError("");
    setConfirm(true);
  }
  function finish() {
    for (const r of selected) store.save("smsHistory", { id: uid(), title: content.slice(0, 30), name: r.name, phone: r.phone, date: (/* @__PURE__ */ new Date()).toISOString(), status: "가상 확인", content });
    store.notify("문자 작성 내용을 가상 이력으로만 보관했습니다. 실제 문자는 발송하지 않았습니다.");
    onClose();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "editor-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "record-editor", role: "dialog", "aria-modal": "true", "aria-label": "실시간 문자 작성", onKeyDown: (e) => {
    if (e.key === "Escape") onClose();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("header", { className: "editor-top", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: "실시간 문자 작성" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { className: "icon-button", "aria-label": "문자 작성 닫기", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(X, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "editor-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "edit-help", children: "수신자를 고르고 문자를 작성해 확인하세요. 실제 SMS는 발송하지 않습니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { htmlFor: "sms-message", children: "문자 내용" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("textarea", { id: "sms-message", rows: 5, value: content, placeholder: "문자 내용을 입력하세요", onChange: (e) => setContent(e.target.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("small", { children: [
          content.length,
          "자"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "sms-templates", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { children: "자주 사용하는 문구" }),
        [["가입 환영", "윌클럽 가입을 환영합니다."], ["서비스 안내", "서비스 이용 안내를 마이페이지에서 확인해주세요."], ["결제 완료", "결제가 완료되었습니다. 이용 서비스를 확인해주세요."], ["서비스 만료 안내", "서비스 이용 기간이 종료될 예정입니다."]].map(([title, message]) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { onClick: () => setContent(message), children: title }, title))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "panel-heading", style: { marginTop: 24 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "받는 사람" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "row-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { onClick: () => setMode(mode === "member" ? null : "member"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Search, { size: 18 }),
            "회원 검색"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { onClick: () => setMode(mode === "group" ? null : "group"), children: "그룹 검색" })
        ] })
      ] }),
      mode && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "sms-recipient-search", children: [
        mode === "member" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { children: [
          "회원 찾기",
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { "aria-label": "문자 수신 회원 검색", value: search, placeholder: "아이디 또는 이름", onChange: (e) => setSearch(e.target.value) })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { children: [
          "그룹 선택",
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("select", { "aria-label": "문자 수신 그룹", value: group, onChange: (e) => setGroup(e.target.value), children: ["전체회원", "무료회원", ...productNames].map((g) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("option", { children: g }, g)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "member-search-results", children: members.slice(0, 10).map((m) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { onClick: () => add({ id: m.id, name: m.name, phone: m.phone }), children: [
          String(m.name),
          " \xB7 ",
          String(m.loginId),
          " \xB7 ",
          String(m.group)
        ] }, m.id)) }),
        mode === "group" && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { onClick: () => {
          const next = members.map((m) => ({ id: uid(), name: String(m.name), phone: String(m.phone) }));
          setRecipients([...recipients.filter((r) => r.name || r.phone), ...next.filter((n) => !recipients.some((r) => r.phone === n.phone))]);
        }, children: [
          "이 그룹 전체 추가 (",
          members.length,
          "명)"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "ip-list", children: recipients.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "ip-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { children: [
          "이름",
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { "aria-label": "문자 수신자 이름 " + (i + 1), value: r.name, onChange: (e) => setRecipients(recipients.map((x) => x.id === r.id ? { ...x, name: e.target.value } : x)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { children: [
          "휴대폰번호",
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { "aria-label": "문자 수신자 연락처 " + (i + 1), value: r.phone, onChange: (e) => setRecipients(recipients.map((x) => x.id === r.id ? { ...x, phone: e.target.value } : x)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { className: "icon-button", "aria-label": "문자 수신자 " + (i + 1) + " 삭제", onClick: () => setRecipients(recipients.filter((x) => x.id !== r.id)), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Trash2, { size: 19 }) })
      ] }, r.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { style: { marginTop: 14 }, onClick: () => setRecipients([...recipients, { id: uid(), name: "", phone: "" }]), children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Plus, { size: 18 }),
        "직접 입력 추가"
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "field-error", role: "alert", children: error }),
      confirm && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "scope-note sms-confirm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { children: "문자 내용 확인" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { children: [
          "수신자 ",
          selected.length,
          "명 \xB7 ",
          content.length,
          "자"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { children: content }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "muted", children: "아래 버튼은 가상 이력만 보관합니다. 실제 발송하지 않습니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { onClick: () => setConfirm(false), children: "작성으로 돌아가기" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { className: "primary", onClick: finish, children: "가상 이력으로 보관" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("footer", { className: "editor-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "muted", children: "실제 문자 발송 미연결" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", { onClick: onClose, children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("button", { className: "primary", onClick: review, children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Send, { size: 18 }),
          "발송 내용 확인"
        ] })
      ] })
    ] })
  ] }) });
}

// components/DataWorkspace.tsx
var import_jsx_runtime9 = JSXRuntime;
function DataWorkspace({ spec, store }) {
  const [createMember, setCreateMember] = (0, import_react11.useState)(false), [sms, setSms] = (0, import_react11.useState)(false);
  const [input, setInput] = (0, import_react11.useState)(""), [query, setQuery] = (0, import_react11.useState)(""), [status, setStatus] = (0, import_react11.useState)("전체"), [start, setStart] = (0, import_react11.useState)(""), [end, setEnd] = (0, import_react11.useState)(""), [searchKey, setSearchKey] = (0, import_react11.useState)("all"), [count, setCount] = (0, import_react11.useState)(10), [page, setPage] = (0, import_react11.useState)(1), [sort, setSort] = (0, import_react11.useState)("最新"), [selected, setSelected] = (0, import_react11.useState)([]), [extra, setExtra] = (0, import_react11.useState)(false), [record2, setRecord] = (0, import_react11.useState)(null), [confirm, setConfirm] = (0, import_react11.useState)(null), [tab, setTab] = (0, import_react11.useState)("banners"), [aux, setAux] = (0, import_react11.useState)(null), [archive, setArchive] = (0, import_react11.useState)(null);
  const view = spec.path === "/admin/design/main" ? makePage(spec.path, spec.title, spec.group, tab, tab === "banners" ? ["image", "title", "order", "visible"] : tab === "rooms" ? ["title", "expert", "order", "visible"] : ["name", "description", "visible"], spec.description) : spec;
  const all = store.state.records[view.domain];
  const statusValues = (0, import_react11.useMemo)(() => Array.from(new Set(all.flatMap((r) => ["status", "visibility", "visible", "group", "category", "method"].map((k) => r[k]).filter((v) => typeof v === "string")))), [all]);
  const rows = (0, import_react11.useMemo)(() => filterRecords(all, view, query, status, start, end, searchKey).sort((a, b) => sort === "name" ? String(a.title ?? a.name ?? a.loginId).localeCompare(String(b.title ?? b.name ?? b.loginId), "ko") : String(b.date ?? b.joined ?? b.order ?? "").localeCompare(String(a.date ?? a.joined ?? a.order ?? ""), "ko")), [all, view, query, status, start, end, searchKey, sort]);
  const pageCount = Math.max(1, Math.ceil(rows.length / count));
  const currentPage = Math.min(page, pageCount);
  const visible = rows.slice((currentPage - 1) * count, currentPage * count);
  const columns = extra ? view.fields.filter((f2) => !["rich", "textarea", "image", "options", "permissions"].includes(f2.type ?? "") && !view.columns.includes(f2.key)).map((f2) => f2.key) : [];
  const columnKeys = [...view.columns, ...columns];
  const withdrawal = view.domain === "members" && !["/admin/members/inactive", "/admin/members/withdrawn"].includes(view.path);
  const total = rows.filter((r) => r.status === "완료").reduce((n, r) => n + Number(r.amount ?? 0), 0);
  function add() {
    if (view.domain === "members") {
      setCreateMember(true);
      return;
    }
    setAux(null);
    setRecord({ ...defaultRecord(view), id: "new-" + uid() });
  }
  function save(row) {
    const next = { ...row };
    delete next.password;
    if (next.id.startsWith("new-")) next.id = next.id.slice(4);
    if (view.domain === "terms") {
      const old = all.find((r) => r.id === next.id);
      if (old) next.history = [...Array.isArray(old.history) ? old.history : [], { ...old, history: void 0 }];
    }
    store.save((aux ?? view).domain, next);
    setRecord(null);
    setAux(null);
  }
  function search(e) {
    e.preventDefault();
    if (start && end && start > end) {
      store.notify("종료일을 시작일 이후로 선택해주세요.");
      return;
    }
    setQuery(input.trim());
    setPage(1);
  }
  function action(label) {
    if (label === "포인트 이용 내역") {
      const p2 = makePage("/local/points", "포인트 이용 내역", "promotion", "payments", ["loginId", "name", "product", "amount", "status", "date"], "포인트 결제 내역을 확인합니다.", { filter: { key: "method", value: "포인트" }, readonly: true });
      setAux(p2);
      setRecord(store.state.records.payments.find((r) => r.method === "포인트") ?? { id: uid() });
      return;
    }
    if (label === "회원 포인트 조정") {
      const p2 = makePage("/local/member-points", "회원 포인트 조정", "promotion", "members", ["loginId", "name", "balance"], "회원별 보유 포인트를 확인합니다.");
      p2.fields = p2.fields.filter((f2) => ["loginId", "name", "balance", "memo"].includes(f2.key));
      setAux(p2);
      setRecord(store.state.records.members[0]);
      return;
    }
    const p = makePage("/local/popup", "홍보 \xB7 공지 안내", view.group, "articles", ["title", "date"], "해당 게시판의 안내 문구를 관리합니다.");
    p.fields = p.fields.filter((f2) => ["title", "content"].includes(f2.key));
    setAux(p);
    setRecord({ ...defaultRecord(p), id: "new-" + uid(), title: label, board: view.filter?.value ?? view.title, pinned: label.includes("공지") });
  }
  if (view.type === "settings") {
    const row = all.find((r) => !view.filter || String(r[view.filter.key]) === view.filter.value) ?? all[0];
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "panel settings-overview", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: "사이트 공통 정보" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "muted", children: "회사\xB7연락처\xB7계좌 정보는 필요한 항목별로 확인하고 수정하세요." }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("dl", { children: view.fields.filter((f2) => !f2.advanced && !["rich", "image"].includes(f2.type ?? "")).map((f2) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("dt", { children: f2.label }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("dd", { children: display(row?.[f2.key]) })
        ] }, f2.key)) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { className: "primary", type: "button", onClick: () => setRecord(row), children: "설정 수정" })
      ] }),
      sms && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SmsComposer, { store, onClose: () => setSms(false) }),
      createMember && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MemberCreate, { store, onClose: () => setCreateMember(false) }),
      record2 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(RecordEditor, { spec: view, record: record2, onClose: () => setRecord(null), onSave: save })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    spec.path === "/admin/design/main" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("nav", { className: "section-tabs", "aria-label": "메인 편집 영역", children: [["banners", "상단 배너"], ["experts", "전문가 목록"], ["rooms", "윌클럽 운영반"]].map(([key, title]) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: tab === key ? "active" : "", onClick: () => {
      setTab(key);
      setQuery("");
      setInput("");
      setPage(1);
      setSelected([]);
    }, children: title }, key)) }),
    view.type === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "summary-strip", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "조회 기간 내 기록" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("strong", { children: [
          rows.length,
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("small", { children: "건" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: view.domain === "payments" ? "완료 결제 합계" : "PC 접속" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: view.domain === "payments" ? total.toLocaleString() + "원" : rows.filter((r) => r.device === "PC").length + "건" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: view.domain === "members" ? "서비스 이용 회원" : view.domain === "payments" ? "입금대기" : "모바일 접속" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: view.domain === "members" ? rows.filter((r) => r.group !== "무료회원").length + "명" : view.domain === "payments" ? rows.filter((r) => r.status === "입금대기").length + "건" : rows.filter((r) => r.device === "모바일").length + "건" })
      ] })
    ] }),
    !(spec.path === "/admin/sms/auto" || spec.path.startsWith("/admin/board/expert/")) && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: "panel filter-panel", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("form", { onSubmit: search, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "search-line", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "search-input", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Search, { size: 21 }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { "aria-label": "검색어", placeholder: "이름, 아이디 또는 제목을 입력하세요", value: input, onChange: (e) => setInput(e.target.value) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "submit", className: "primary", children: "검색" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => {
          setInput("");
          setQuery("");
          setStatus("전체");
          setStart("");
          setEnd("");
          setPage(1);
        }, children: "초기화" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("details", { className: "filter-details", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("summary", { children: [
          "조회 조건 설정",
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ChevronDown, { size: 16 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "filter-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { children: [
            "검색 항목",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("select", { value: searchKey, onChange: (e) => setSearchKey(e.target.value), children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "all", children: "전체 항목" }),
              view.fields.filter((f2) => ["text", "tel", "email"].includes(f2.type ?? "text")).map((f2) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: f2.key, children: f2.label }, f2.key))
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { children: [
            "분류 \xB7 상태",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("select", { "aria-label": "분류 \xB7 상태", value: status, onChange: (e) => {
              setStatus(e.target.value);
              setPage(1);
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { children: "전체" }),
              statusValues.map((x) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { children: x }, x))
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { children: [
            "시작일",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { "aria-label": "시작일", type: "date", value: start, onChange: (e) => setStart(e.target.value) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { children: [
            "종료일",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { "aria-label": "종료일", type: "date", value: end, onChange: (e) => setEnd(e.target.value) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "panel data-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "list-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: view.title }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "muted", children: [
            "전체 ",
            rows.length,
            "건",
            query && " \xB7 “" + query + "” 검색 결과"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "list-actions", children: [
          view.domain === "smsRules" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "primary", onClick: () => setSms(true), children: "실시간 문자 작성" }),
          view.actions?.map((x) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => action(x), children: x }, x)),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { type: "button", onClick: () => downloadFile(view.title + ".csv", csv(rows, view.fields.filter((f2) => columnKeys.includes(f2.key))), "text/csv"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Download, { size: 18 }),
            "목록 저장"
          ] }),
          view.primary && !view.readonly && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { type: "button", className: "primary", onClick: add, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Plus, { size: 19 }),
            view.primary
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "table-tools", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { children: [
            "한 페이지",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("select", { "aria-label": "한 페이지 표시수", value: count, onChange: (e) => {
              setCount(Number(e.target.value));
              setPage(1);
            }, children: [10, 20, 30, 50, 100].map((n) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("option", { value: n, children: [
              n,
              "개"
            ] }, n)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { children: [
            "정렬",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("select", { "aria-label": "목록 정렬", value: sort, onChange: (e) => setSort(e.target.value), children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "最新", children: "최신순" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "name", children: "이름 \xB7 제목순" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "text-button", onClick: () => setExtra(!extra), children: extra ? "추가 항목 접기" : "추가 항목 보기" })
      ] }),
      selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "selection-toolbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("strong", { children: [
          selected.length,
          "개 선택됨"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => setSelected([]), children: "선택 해제" }),
        !view.readonly && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { type: "button", className: "danger", onClick: () => setConfirm({ kind: "remove", ids: selected }), children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Trash2, { size: 18 }),
          withdrawal ? "탈퇴 처리" : view.domain === "members" ? "완전 삭제" : "선택 삭제"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "table-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("table", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "check-cell", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "checkbox", "aria-label": "현재 목록 전체 선택", checked: visible.length > 0 && visible.every((r) => selected.includes(r.id)), onChange: (e) => setSelected(e.target.checked ? visible.map((r) => r.id) : []) }) }),
            columnKeys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { children: fieldLabel(view, k) }, k)),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { children: "관리" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tbody", { children: visible.map((row) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "checkbox", "aria-label": display(row.name ?? row.title ?? row.loginId) + " 선택", checked: selected.includes(row.id), onChange: (e) => setSelected(e.target.checked ? [...selected, row.id] : selected.filter((x) => x !== row.id)) }) }),
            columnKeys.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: k === "amount" ? "number-cell" : void 0, children: k === "image" ? row.image ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { className: "table-image", src: imageSrc(row.image), alt: "대표 이미지" }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "muted", children: "미등록" }) : i === 0 || ["title", "loginId", "name"].includes(k) ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "row-link", onClick: () => {
              setAux(null);
              setRecord(row);
            }, children: display(row[k], k) }) : ["status", "visibility", "visible", "enabled"].includes(k) ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "status-tag " + (["완료", "정상", "판매중", "사용", "공개", "성공"].includes(String(row[k])) || row[k] === true ? "good" : row[k] === "입금대기" ? "pending" : "neutral"), children: display(row[k], k) }) : display(row[k], k) }, k)),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "row-actions", children: [
              !view.readonly && view.domain === "payments" && row.status === "입금대기" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "confirm-bank", onClick: () => setConfirm({ kind: "bank", ids: [row.id] }), children: "입금 확인" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => {
                setAux(null);
                setRecord(row);
              }, children: view.readonly ? "상세" : "수정" }),
              view.domain === "terms" && Array.isArray(row.history) && row.history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => setArchive(row), children: "버전 이력" })
            ] }) })
          ] }, row.id)) })
        ] }),
        !visible.length && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "empty-state", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Search, { size: 28 }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { children: "검색 결과가 없습니다." }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "검색어 또는 조회 조건을 바꿔보세요." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("footer", { className: "pagination", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
          rows.length ? (currentPage - 1) * count + 1 + "–" + Math.min(currentPage * count, rows.length) : "0",
          " / ",
          rows.length,
          "건"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", disabled: currentPage <= 1, onClick: () => setPage(currentPage - 1), children: "이전" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
            currentPage,
            " / ",
            pageCount
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", disabled: currentPage >= pageCount, onClick: () => setPage(currentPage + 1), children: "다음" })
        ] })
      ] })
    ] }),
    sms && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SmsComposer, { store, onClose: () => setSms(false) }),
    createMember && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MemberCreate, { store, onClose: () => setCreateMember(false) }),
    record2 && view.domain === "products" && !aux ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(VipProductEditor, { record: record2, store, onClose: () => setRecord(null) }) : record2 && !(aux ?? view).readonly && view.domain === "members" && !aux ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MemberDetail, { record: record2, spec: view, store, onClose: () => setRecord(null) }) : record2 && !(aux ?? view).readonly && view.domain === "payments" && record2.method === "무통장입금" && !aux ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BankPaymentEditor, { store, record: record2.id.startsWith("new-") ? void 0 : record2, onClose: () => setRecord(null) }) : record2 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(RecordEditor, { spec: view.domain === "staff" && !record2.id.startsWith("new-") ? { ...view, fields: view.fields.map((f2) => f2.key === "loginId" ? { ...f2, readonly: true } : f2) } : aux ?? view, record: record2, readonly: (aux ?? view).readonly || view.domain === "terms" && !record2.id.startsWith("new-"), onClose: () => {
      setRecord(null);
      setAux(null);
    }, onSave: save }),
    confirm && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "confirm-dialog", role: "dialog", "aria-modal": "true", "aria-label": confirm.kind === "bank" ? "입금 확인" : "선택 삭제", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: confirm.kind === "bank" ? "입금을 확인할까요?" : withdrawal ? "선택 회원을 탈퇴 처리할까요?" : "선택 항목을 완전 삭제할까요?" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: confirm.kind === "bank" ? "대상 회원과 금액을 확인하세요. 이 전달본의 상태만 완료로 바뀝니다." : withdrawal ? "회원 상태를 탈퇴로 바꾸고 탈퇴일을 기록합니다. 가상 데이터에서만 처리됩니다." : "현재 기기에 저장된 " + confirm.ids.length + "개 항목을 삭제합니다. 되돌릴 수 없습니다. 실제 운영 데이터에는 영향이 없습니다." }),
      confirm.ids.map((id) => {
        const row = all.find((r) => r.id === id);
        return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "confirm-target", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: display(row?.name ?? row?.title ?? row?.loginId) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { children: [
            display(row?.product),
            " ",
            row?.amount ? display(row.amount, "amount") : "",
            confirm.kind === "bank" && row ? " \xB7 적용 기간 " + bankPreview(store.state, row).start + " ~ " + bankPreview(store.state, row).end : ""
          ] })
        ] }, id);
      }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => setConfirm(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: confirm.kind === "bank" ? "primary" : "danger", onClick: () => {
          if (confirm.kind === "bank") confirm.ids.forEach(store.confirmBank);
          else if (withdrawal) store.updateMany(view.domain, confirm.ids, { status: "탈퇴", withdrawn: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) }, "회원 탈퇴 처리");
          else store.remove(view.domain, confirm.ids);
          setConfirm(null);
          setSelected([]);
        }, children: confirm.kind === "bank" ? "입금 확인 완료" : withdrawal ? "탈퇴 처리" : "삭제" })
      ] })
    ] }) }),
    archive && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "confirm-dialog", role: "dialog", "aria-modal": "true", "aria-label": "약관 버전 이력", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: "이전 버전 이력" }),
      archive.history.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { type: "button", onClick: () => {
        setRecord(x);
        setArchive(null);
      }, children: [
        String(x.version),
        " \xB7 ",
        String(x.date),
        " 내용 보기"
      ] }, i)),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => setArchive(null), children: "닫기" })
    ] }) })
  ] });
}

// components/MemberListWorkspace.tsx
var import_react12 = React;

// data/memberListModel.ts
var memberProductNames = ["골드마스터반", "골드해외반", "골드텐버거반", "꽃게선생반", "단타반"];
var memberColumns = [
  { key: "select", label: "선택" },
  { key: "loginId", label: "아이디" },
  { key: "name", label: "이름" },
  { key: "nickname", label: "닉네임" },
  { key: "phone", label: "연락처" },
  { key: "group", label: "그룹" },
  { key: "lastPayment", label: "최근 결제일" },
  { key: "service:골드마스터반", label: "골드마스터반(남은일)", product: "골드마스터반" },
  { key: "service:골드해외반", label: "골드해외반(남은일)", product: "골드해외반" },
  { key: "service:골드텐버거반", label: "골드텐버거반(남은일)", product: "골드텐버거반" },
  { key: "service:꽃게선생반", label: "꽃게선생반(남은일)", product: "꽃게선생반" },
  { key: "service:단타반", label: "단타반(남은일)", product: "단타반" },
  { key: "lastVisit", label: "최근접속일" },
  { key: "withdrawn", label: "탈퇴일" },
  { key: "visitCount", label: "방문수" },
  { key: "joined", label: "신규가입일" }
];
var memberCsvColumns = memberColumns.filter((column) => column.key !== "select");
var DAY2 = 24 * 60 * 60 * 1e3;
var FREE_GROUP = "무료회원";
var DUPLICATE_GROUP = "중복회원";
function text2(value2) {
  return value2 === null || value2 === void 0 ? "" : String(value2).trim();
}
function isRecord(value2) {
  return !!value2 && typeof value2 === "object" && !Array.isArray(value2);
}
function ymd(value2) {
  const raw = text2(value2);
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(raw);
  return match ? match[0] : "";
}
function dateValue(value2) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd(value2));
  return match ? Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : NaN;
}
function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}
function includesText(value2, query) {
  return value2.toLocaleLowerCase("ko-KR").includes(query.toLocaleLowerCase("ko-KR"));
}
function utcDay(value2 = /* @__PURE__ */ new Date()) {
  const date3 = value2 instanceof Date ? value2 : new Date(value2);
  return Number.isNaN(date3.getTime()) ? "" : new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(date3);
}
function utcDayOffset(date3, offset) {
  const stamp2 = dateValue(date3);
  return Number.isFinite(stamp2) ? new Date(stamp2 + offset * DAY2).toISOString().slice(0, 10) : "";
}
function activeServices(member) {
  const raw = member.services;
  if (Array.isArray(raw)) {
    return raw.flatMap((value2, index) => {
      if (!isRecord(value2)) return [];
      const product2 = text2(value2.product ?? value2.group);
      const status = text2(value2.status);
      if (!product2 || status === "환불") return [];
      return [{ id: text2(value2.id) || member.id + "-service-" + index, product: product2, status, start: ymd(value2.start ?? member.start), end: ymd(value2.end ?? member.end) }];
    });
  }
  const product = text2(member.group);
  if (!product) return [];
  return [{ id: member.id + "-group", product, status: text2(member.status), start: ymd(member.start), end: ymd(member.end) }];
}
function memberGroups(member) {
  const groups2 = unique(activeServices(member).map((service) => service.product));
  if (groups2.length) return groups2;
  const fallback = text2(member.group);
  return fallback === FREE_GROUP || fallback === DUPLICATE_GROUP ? [fallback] : [];
}
function remainingDays(serviceOrEnd, now2 = /* @__PURE__ */ new Date()) {
  const end = typeof serviceOrEnd === "string" ? serviceOrEnd : text2(serviceOrEnd.end);
  const endStamp = dateValue(end), todayStamp = dateValue(utcDay(now2));
  if (!Number.isFinite(endStamp) || !Number.isFinite(todayStamp)) return null;
  return Math.max(0, Math.floor((endStamp - todayStamp) / DAY2));
}
function remainingDaysForProduct(member, product, now2 = /* @__PURE__ */ new Date()) {
  const days = activeServices(member).filter((service) => service.product === product).map((service) => remainingDays(service, now2)).filter((value2) => value2 !== null);
  return days.length ? Math.max(...days) : null;
}
function memberClassification(member) {
  if (text2(member.status) === "탈퇴") return "탈퇴";
  const groups2 = memberGroups(member);
  if (groups2.includes(DUPLICATE_GROUP) || groups2.filter((g) => g !== FREE_GROUP).length > 1) return "중복";
  if (groups2.some((group) => group !== FREE_GROUP && group !== DUPLICATE_GROUP)) return "유료";
  return "무료";
}
function memberMatchesGroup(member, group) {
  return !group || group === "전체그룹" || memberGroups(member).includes(group);
}
function filterMemberList(records, filters = {}) {
  const classification = filters.classification ?? "전체";
  const group = text2(filters.group);
  const query = text2(filters.query);
  const searchKey = filters.searchKey ?? "loginId";
  const start = ymd(filters.start), end = ymd(filters.end);
  if (start && end && start > end) return [];
  return records.filter((member) => {
    if (classification !== "전체" && !(classification === "유료" ? ["유료", "중복"].includes(memberClassification(member)) : memberClassification(member) === classification)) return false;
    if (!memberMatchesGroup(member, group)) return false;
    const joined = ymd(member.joined);
    if (start && (!joined || joined < start)) return false;
    if (end && (!joined || joined > end)) return false;
    if (!query) return true;
    const values = {
      loginId: text2(member.loginId),
      name: text2(member.name),
      nickname: text2(member.nickname),
      phone: text2(member.phone),
      group: memberGroups(member).join(" ")
    };
    return includesText(values[searchKey], query);
  });
}
function memberColumnValue(member, column, now2 = /* @__PURE__ */ new Date()) {
  switch (column.key) {
    case "select":
      return "";
    case "group":
      return memberGroups(member).join(" \xB7 ") || "—";
    case "lastPayment":
      return ymd(member.lastPayment ?? member.recentPayment) || "—";
    case "lastVisit":
      return ymd(member.lastVisit) || "—";
    case "withdrawn":
      return ymd(member.withdrawn ?? member.withdrawnAt) || "—";
    case "visitCount":
      return member.visitCount === void 0 || member.visitCount === null ? "—" : Number(member.visitCount).toLocaleString("ko-KR");
    case "joined":
      return ymd(member.joined) || "—";
    case "loginId":
    case "name":
    case "nickname":
    case "phone":
      return text2(member[column.key]) || "—";
    default: {
      const product = column.product;
      const days = product ? remainingDaysForProduct(member, product, now2) : null;
      return days === null ? "—" : days.toLocaleString("ko-KR") + "일";
    }
  }
}
function memberCsv(rows, now2 = /* @__PURE__ */ new Date()) {
  const escape = (value2) => '"' + value2.replace(/"/g, '""') + '"';
  return [
    memberCsvColumns.map((column) => escape(column.label)).join(","),
    ...rows.map((member) => memberCsvColumns.map((column) => escape(memberColumnValue(member, column, now2))).join(","))
  ].join("\r\n");
}
function newProductCounter(products) {
  return Object.fromEntries(products.map((product) => [product, 0]));
}
function productsForPaidMember(member) {
  return ["유료", "중복"].includes(memberClassification(member)) ? memberGroups(member).filter((group) => group !== FREE_GROUP && group !== DUPLICATE_GROUP) : [];
}
function periodCounts(records, date3, products) {
  const counts = { date: date3, free: 0, paid: 0, withdrawn: 0, products: newProductCounter(products) };
  for (const member of records) {
    const category = memberClassification(member);
    if (category === "탈퇴") {
      if (ymd(member.withdrawn ?? member.withdrawnAt) === date3) counts.withdrawn += 1;
      continue;
    }
    if (ymd(member.joined) !== date3) continue;
    if (category === "무료") counts.free += 1;
    if (category === "유료" || category === "중복") {
      counts.paid += 1;
      for (const group of productsForPaidMember(member)) if (group in counts.products) counts.products[group] += 1;
    }
  }
  return counts;
}
function memberListSummary(records, products = memberProductNames, now2 = /* @__PURE__ */ new Date()) {
  const today2 = utcDay(now2), yesterday = utcDayOffset(today2, -1);
  const totals = newProductCounter(products);
  for (const member of records) {
    if (!["유료", "중복"].includes(memberClassification(member))) continue;
    for (const group of productsForPaidMember(member)) if (group in totals) totals[group] += 1;
  }
  return {
    today: periodCounts(records, today2, products),
    yesterday: periodCounts(records, yesterday, products),
    products: products.map((product) => ({ product, total: totals[product] ?? 0 }))
  };
}

// components/MemberListWorkspace.tsx
var import_jsx_runtime10 = JSXRuntime;
var classifications = ["전체", "무료", "유료", "중복", "탈퇴"];
var searchItems = [
  { value: "loginId", label: "아이디" },
  { value: "name", label: "이름" },
  { value: "nickname", label: "닉네임" },
  { value: "phone", label: "연락처" },
  { value: "group", label: "그룹" }
];
function productTitles(records) {
  const products = records.map((record2) => typeof record2.title === "string" ? record2.title.trim() : "").filter(Boolean);
  return Array.from(/* @__PURE__ */ new Set([...products, ...memberProductNames]));
}
function MemberListWorkspace({ spec, store }) {
  const members = store.state.records.members;
  const routeGroup = spec.filter?.key === "group" ? String(spec.filter.value) : "";
  const [classification, setClassification] = (0, import_react12.useState)("전체");
  const [group, setGroup] = (0, import_react12.useState)(routeGroup || "전체그룹");
  const [input, setInput] = (0, import_react12.useState)("");
  const [query, setQuery] = (0, import_react12.useState)("");
  const [searchKey, setSearchKey] = (0, import_react12.useState)("loginId");
  const [periodMode, setPeriodMode] = (0, import_react12.useState)("전체");
  const [start, setStart] = (0, import_react12.useState)("");
  const [end, setEnd] = (0, import_react12.useState)("");
  const [count, setCount] = (0, import_react12.useState)(15);
  const [page, setPage] = (0, import_react12.useState)(1);
  const [selected, setSelected] = (0, import_react12.useState)([]);
  const [detail, setDetail] = (0, import_react12.useState)(null);
  const [creating, setCreating] = (0, import_react12.useState)(false);
  const [confirm, setConfirm] = (0, import_react12.useState)(null);
  const products = (0, import_react12.useMemo)(() => productTitles(store.state.records.products), [store.state.records.products]);
  const now2 = /* @__PURE__ */ new Date();
  const dateError = Boolean(start && end && start > end);
  const rows = (0, import_react12.useMemo)(() => filterMemberList(members, { classification, group: routeGroup || group, query, searchKey, start: periodMode === "기간 지정" ? start : "", end: periodMode === "기간 지정" ? end : "" }), [classification, end, group, members, query, routeGroup, searchKey, start, periodMode]);
  const summary = (0, import_react12.useMemo)(() => memberListSummary(members, products, now2), [members, products]);
  const pageCount = Math.max(1, Math.ceil(rows.length / count));
  const currentPage = Math.min(page, pageCount);
  const visible = rows.slice((currentPage - 1) * count, currentPage * count);
  const selectedRows = members.filter((member) => selected.includes(member.id));
  function restartPage() {
    setPage(1);
    setSelected([]);
  }
  function updateClassification(value2) {
    setClassification(value2);
    restartPage();
  }
  function updateGroup(value2) {
    setGroup(value2);
    restartPage();
  }
  function updateSearchKey(value2) {
    setSearchKey(value2);
    restartPage();
  }
  function updateStart(value2) {
    setStart(value2);
    restartPage();
  }
  function updateEnd(value2) {
    setEnd(value2);
    restartPage();
  }
  function updateCount(value2) {
    setCount(value2);
    restartPage();
  }
  function search(event) {
    event.preventDefault();
    if (dateError) {
      store.notify("종료일을 시작일 이후로 선택해주세요.");
      return;
    }
    setQuery(input.trim());
    restartPage();
  }
  function reset() {
    setClassification("전체");
    setGroup(routeGroup || "전체그룹");
    setInput("");
    setQuery("");
    setSearchKey("loginId");
    setPeriodMode("전체");
    setStart("");
    setEnd("");
    restartPage();
  }
  function toggleRow(id, checked) {
    setSelected((current) => checked ? Array.from(/* @__PURE__ */ new Set([...current, id])) : current.filter((value2) => value2 !== id));
  }
  function toggleVisible(checked) {
    setSelected(checked ? visible.map((member) => member.id) : []);
  }
  function withdraw() {
    if (!confirm) return;
    store.updateMany("members", confirm.ids, { status: "탈퇴", withdrawn: utcDay() }, "회원 탈퇴 처리");
    setConfirm(null);
    setSelected([]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "member-request-v6__filter-top", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { children: [
      "출력수",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("select", { "aria-label": "출력수", value: count, onChange: (event) => updateCount(Number(event.target.value)), children: [15, 30, 50, 100].map((value2) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("option", { value: value2, children: [
        value2,
        "개"
      ] }, value2)) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "panel filter-panel member-list-v5__filters member-request-v6__filters", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("form", { className: "member-request-v6__search-form", onSubmit: search, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "member-list-v5__filter-grid member-request-v6__filter-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { children: [
          "그룹",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("select", { "aria-label": "그룹", value: routeGroup || group, disabled: Boolean(routeGroup), onChange: (event) => updateGroup(event.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "전체그룹", children: "전체그룹" }),
            products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: product, children: product }, product))
          ] }),
          routeGroup && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("small", { children: "회원그룹 경로가 적용되어 있습니다." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { children: [
          "일반회원 분류",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("select", { "aria-label": "일반회원 분류", value: classification, onChange: (event) => updateClassification(event.target.value), children: classifications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: item, children: item }, item)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { children: [
          "검색항목",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("select", { "aria-label": "검색항목", value: searchKey, onChange: (event) => updateSearchKey(event.target.value), children: searchItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: item.value, children: item.label }, item.value)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { className: "member-list-v5__keyword", children: [
          "검색어",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "search-input", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Search, { size: 20 }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { "aria-label": "검색어", value: input, onChange: (event) => setInput(event.target.value), placeholder: "검색어를 입력하세요" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "member-list-v5__filter-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { className: "primary", type: "submit", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Search, { size: 18 }),
            "검색"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: reset, children: "초기화" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("details", { className: "filter-details member-request-v6__period-details", open: periodMode === "기간 지정" ? true : void 0, children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("summary", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "가입기간 조회" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("small", { children: periodMode })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "filter-grid member-request-v6__period-fields", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { children: [
            "조회 범위",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("select", { "aria-label": "가입기간 조회", value: periodMode, onChange: (event) => {
              setPeriodMode(event.target.value);
              restartPage();
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { children: "전체" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { children: "기간 지정" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { children: [
            "시작일",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { "aria-label": "시작일", type: "date", value: start, onChange: (event) => {
              setPeriodMode("기간 지정");
              updateStart(event.target.value);
            } })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { children: [
            "종료일",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { "aria-label": "종료일", type: "date", value: end, onChange: (event) => {
              setPeriodMode("기간 지정");
              updateEnd(event.target.value);
            } })
          ] })
        ] })
      ] }),
      dateError && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "field-error member-list-v5__date-error", role: "alert", children: "종료일을 시작일 이후로 선택해주세요." })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "member-list-v5__summary-lines", "aria-label": "회원 분류 집계", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          "오늘 무료: ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            summary.today.free,
            "명"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          "오늘 유료: ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            summary.today.paid,
            "명"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          "오늘 탈퇴: ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            summary.today.withdrawn,
            "명"
          ] })
        ] }),
        products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          product,
          "(오늘): ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            summary.today.products[product] ?? 0,
            "명"
          ] })
        ] }, product))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          "어제 무료: ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            summary.yesterday.free,
            "명"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          "어제 유료: ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            summary.yesterday.paid,
            "명"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          "어제 탈퇴: ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            summary.yesterday.withdrawn,
            "명"
          ] })
        ] }),
        summary.products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          p.product,
          "(전체): ",
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("b", { children: [
            p.total,
            "명"
          ] })
        ] }, p.product))
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "member-list-v5__criteria", children: "가입\xB7탈퇴 일자 기준: 한국시간. 유료 집계에는 중복가입 회원을 포함하며 탈퇴 상태는 제외합니다." }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "panel data-panel member-list-v5__table-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "list-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { children: spec.title }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "muted", children: [
            "전체 ",
            rows.length,
            "명",
            query ? " \xB7 “" + query + "” 검색 결과" : ""
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "list-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { type: "button", onClick: () => downloadFile(spec.title + ".csv", memberCsv(rows, now2), "text/csv"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Download, { size: 18 }),
            "CSV 다운로드"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { type: "button", className: "primary", onClick: () => setCreating(true), children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Plus, { size: 19 }),
            "회원 추가"
          ] })
        ] })
      ] }),
      selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "selection-toolbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("strong", { children: [
          selected.length,
          "명 선택됨"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: () => setSelected([]), children: "선택 해제" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { type: "button", className: "danger", onClick: () => setConfirm({ ids: selected }), children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Trash2, { size: 18 }),
          "탈퇴 처리"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "table-wrap member-list-v5__table-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("table", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: memberColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("th", { className: column.key === "select" ? "check-cell" : void 0, children: column.key === "select" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { type: "checkbox", "aria-label": "현재 목록 전체 선택", checked: visible.length > 0 && visible.every((member) => selected.includes(member.id)), onChange: (event) => toggleVisible(event.target.checked) }) : column.label }, column.key)) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tbody", { children: visible.map((member) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: memberColumns.map((column) => {
            if (column.key === "select") return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { type: "checkbox", "aria-label": String(member.name ?? member.loginId ?? "회원") + " 선택", checked: selected.includes(member.id), onChange: (event) => toggleRow(member.id, event.target.checked) }) }, column.key);
            if (column.key === "loginId") return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { className: "row-link", type: "button", onClick: () => setDetail(member), children: memberColumnValue(member, column, now2) }) }, column.key);
            if (column.key === "group") {
              const groups2 = memberGroups(member);
              return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("td", { className: "member-list-v5__group-cell", children: groups2.length ? groups2.map((value2) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "status-tag " + (value2 === "무료회원" ? "neutral" : "good"), children: value2 }, value2)) : "—" }, column.key);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("td", { className: column.product ? "member-list-v5__remaining" : void 0, children: memberColumnValue(member, column, now2) }, column.key);
          }) }, member.id)) })
        ] }),
        !visible.length && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "empty-state", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Search, { size: 28 }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { children: "검색 결과가 없습니다." }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "검색어 또는 조회 조건을 바꿔보세요." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("footer", { className: "pagination", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          rows.length ? (currentPage - 1) * count + 1 + "–" + Math.min(currentPage * count, rows.length) : "0",
          " / ",
          rows.length,
          "명"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", disabled: currentPage <= 1, onClick: () => {
            setPage(currentPage - 1);
            setSelected([]);
          }, children: "이전" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
            currentPage,
            " / ",
            pageCount
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", disabled: currentPage >= pageCount, onClick: () => {
            setPage(currentPage + 1);
            setSelected([]);
          }, children: "다음" })
        ] })
      ] })
    ] }),
    creating && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MemberCreate, { store, onClose: () => setCreating(false) }),
    detail && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RMemberDetail, { record: detail, spec, store, onClose: () => setDetail(null) }),
    confirm && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "confirm-dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "member-withdraw-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { id: "member-withdraw-title", children: "선택 회원을 탈퇴 처리할까요?" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "선택 회원의 상태를 탈퇴로 바꾸고 오늘 한국시간 기준 탈퇴일을 기록합니다. 이 작업은 현재 기기의 가상 데이터에만 반영됩니다." }),
      selectedRows.map((member) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "confirm-target", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: String(member.name ?? member.loginId ?? "회원") }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
          String(member.loginId ?? "—"),
          " \xB7 ",
          memberGroups(member).join(", ") || "그룹 없음"
        ] })
      ] }, member.id)),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", onClick: () => setConfirm(null), children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", className: "danger", onClick: withdraw, children: "탈퇴 처리" })
      ] })
    ] }) })
  ] });
}

// components/MonthlyRevenueWorkspace.tsx
var import_react13 = React;

// data/revenueModel.ts
var value = (v) => String(v ?? "");
var amount = (v) => Number.isSafeInteger(Number(v)) && Number(v) >= 0 ? Number(v) : 0;
var date = (v) => value(v).slice(0, 10);
function paymentExpert(state, p) {
  if (p.expert) return value(p.expert);
  const product = state.records.products.find((r) => r.id === p.productId || r.title === p.product);
  if (product?.expert) return value(product.expert);
  const video = state.records.videos.find((r) => r.id === p.videoId || r.title === p.product);
  return video?.expert ? value(video.expert) : "미지정";
}
function revenueEvents(state) {
  const result = [];
  const seen = /* @__PURE__ */ new Set();
  for (const p of state.records.payments) {
    const expert = paymentExpert(state, p), cashMethod = p.method !== "포인트";
    const common = { paymentId: p.id, expert, product: value(p.product), loginId: value(p.loginId), method: value(p.method), taxTreatment: value(p.taxTreatment) || "미설정" };
    const refunds = Array.isArray(p.refunds) ? p.refunds : [];
    const completed = ["완료", "부분환불", "환불완료"].includes(value(p.status));
    if (completed && date(p.paidAt ?? p.date)) {
      const n = amount(p.amount);
      result.push({ ...common, id: "payment:" + p.id, date: date(p.paidAt ?? p.date), kind: "결제", amount: n, cash: cashMethod ? n : 0, points: cashMethod ? 0 : n, memo: value(p.memo) });
    }
    const push = (r) => {
      if (!["완료", "환불완료"].includes(value(r.status)) || !date(r.completedAt ?? r.date)) return;
      const key = p.id + ":" + r.id;
      if (seen.has(key)) return;
      seen.add(key);
      const n = amount(r.amount);
      if (!n) return;
      result.push({ ...common, id: "refund:" + key, date: date(r.completedAt ?? r.date), kind: "환불", amount: n, cash: cashMethod ? -n : 0, points: cashMethod ? 0 : -n, memo: value(r.memo) });
    };
    for (const r of refunds) push(r);
    if (!refunds.length && p.refundAmount && p.refundDate && ["완료", "환불완료"].includes(value(p.refundStatus))) push({ id: "legacy", amount: p.refundAmount, date: p.refundDate, status: p.refundStatus, memo: p.refundMemo });
  }
  return result.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
}
function filterRevenue(events, o) {
  return events.filter((e) => (!o.start || e.date >= o.start) && (!o.end || e.date <= o.end) && (o.expert === "전체" || e.expert === o.expert) && (!o.query || [e.product, e.loginId, e.expert, e.memo].join(" ").toLowerCase().includes(o.query.toLowerCase())));
}
function taxSplit(e, o) {
  if (!e.cash) return { supply: 0, vat: 0 };
  const mode = e.taxTreatment === "미설정" ? o.taxMode : e.taxTreatment;
  if (mode === "면세") return { supply: e.cash, vat: 0 };
  if (mode !== "과세(부가세 포함)" || !Number.isFinite(o.taxRate) || o.taxRate < 0 || o.taxRate > 100) return null;
  const supply = Math.round(Math.abs(e.cash) / (1 + o.taxRate / 100)) * Math.sign(e.cash);
  return { supply, vat: e.cash - supply };
}
function summarizeRevenue(events, o) {
  const map = /* @__PURE__ */ new Map();
  for (const e of events) {
    const row = map.get(e.expert) ?? { id: e.expert, expert: e.expert, gross: 0, refund: 0, net: 0, points: 0, pointRefund: 0, count: 0, refundCount: 0, supply: 0, vat: 0, commission: null, unknown: 0 };
    if (e.kind === "결제") {
      row.gross += Math.max(0, e.cash);
      row.points += Math.max(0, e.points);
      row.count++;
    } else {
      row.refund += Math.abs(e.cash);
      row.pointRefund += Math.abs(e.points);
      row.refundCount++;
    }
    row.net += e.cash;
    const split = taxSplit(e, o);
    if (split) {
      row.supply = (row.supply ?? 0) + split.supply;
      row.vat = (row.vat ?? 0) + split.vat;
    } else row.unknown++;
    map.set(e.expert, row);
  }
  return [...map.values()].sort((a, b) => a.expert.localeCompare(b.expert, "ko")).map((r) => {
    if (r.unknown) {
      r.supply = null;
      r.vat = null;
    }
    const rate = Number(o.commissionRate), base = o.commissionBase === "환불차감 후 결제액" ? r.net : o.commissionBase === "공급가액" ? r.supply : null;
    r.commission = o.commissionRate !== "" && Number.isFinite(rate) && rate >= 0 && rate <= 100 && base !== null ? Math.round(base * rate / 100) : null;
    return r;
  });
}

// data/monthlyRevenueModel.ts
var COMPLETED_PAYMENT_STATUSES = /* @__PURE__ */ new Set(["완료", "부분환불", "환불완료"]);
var COMPLETED_REFUND_STATUSES = /* @__PURE__ */ new Set(["완료", "환불완료"]);
var INACTIVE_SERVICE_STATUSES = /* @__PURE__ */ new Set(["환불", "환불완료", "해지", "취소", "종료", "입금대기", "결제대기"]);
var EXTENSION_WORDS = ["연장", "갱신", "renewal", "extension"];
function text3(value2) {
  return value2 === void 0 || value2 === null ? "" : String(value2).trim();
}
function record(value2) {
  return value2 && typeof value2 === "object" && !Array.isArray(value2) ? value2 : void 0;
}
function amount2(value2) {
  const numeric = Number(value2);
  return Number.isFinite(numeric) && numeric >= 0 ? Math.round(numeric) : void 0;
}
function validYmd(value2) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value2);
  if (!match) return "";
  const year = Number(match[1]), month = Number(match[2]), day2 = Number(match[3]);
  const date3 = new Date(Date.UTC(year, month - 1, day2));
  return date3.getUTCFullYear() === year && date3.getUTCMonth() === month - 1 && date3.getUTCDate() === day2 ? value2 : "";
}
function seoulYmd(date3) {
  if (Number.isNaN(date3.getTime())) return "";
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date3);
  const part = (type) => parts.find((item) => item.type === type)?.value ?? "";
  return validYmd(`${part("year")}-${part("month")}-${part("day")}`);
}
function koreanYmd(value2) {
  if (value2 instanceof Date) return seoulYmd(value2);
  if (typeof value2 === "number") return seoulYmd(new Date(value2));
  const raw = text3(value2);
  if (validYmd(raw)) return raw;
  return raw ? seoulYmd(new Date(raw)) : "";
}
function seoulMonth(now2 = /* @__PURE__ */ new Date()) {
  return koreanYmd(now2).slice(0, 7);
}
function monthRange(month) {
  const match = /^(\d{4})-(\d{2})$/.exec(text3(month));
  if (!match) return null;
  const year = Number(match[1]), monthNumber = Number(match[2]);
  if (monthNumber < 1 || monthNumber > 12) return null;
  const endDay = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  const normalized = `${match[1]}-${match[2]}`;
  return { month: normalized, start: `${normalized}-01`, end: `${normalized}-${String(endDay).padStart(2, "0")}` };
}
function inRange(date3, range) {
  return !!date3 && date3 >= range.start && date3 <= range.end;
}
function firstDate(row, keys) {
  for (const key of keys) {
    const date3 = koreanYmd(row[key]);
    if (date3) return date3;
  }
  return "";
}
function pickAmount(row, keys) {
  for (const key of keys) {
    const value2 = amount2(row[key]);
    if (value2 !== void 0) return value2;
  }
  return void 0;
}
function methodOf(row) {
  return text3(row.method ?? row.paymentMethod).replace(/\s/g, "").toLocaleLowerCase("ko-KR");
}
function isCardMethod(method) {
  return method.includes("카드") || method.includes("card");
}
function isBankMethod(method) {
  return method.includes("무통장") || method.includes("계좌") || method.includes("bank") || method.includes("transfer");
}
function isPointMethod(method) {
  return method.includes("포인트") || method.includes("point");
}
function moneyParts(row, allowMethodFallback = true) {
  const card = pickAmount(row, ["cardAmount", "cardPaidAmount", "cardPaymentAmount"]);
  const bank = pickAmount(row, ["bankAmount", "bankPaidAmount", "bankTransferAmount", "transferAmount"]);
  const cash = pickAmount(row, ["cashAmount", "cashPaidAmount"]);
  const points = pickAmount(row, ["pointAmount", "pointsUsed", "usedPoints", "pointUsed", "usedPointAmount"]);
  const hasExplicitParts = card !== void 0 || bank !== void 0 || cash !== void 0 || points !== void 0;
  const method = methodOf(row), total = amount2(row.amount) ?? 0;
  let nextCard = card ?? 0, nextBank = bank ?? 0, nextPoints = points ?? 0;
  if (cash !== void 0 && card === void 0 && bank === void 0) {
    if (isBankMethod(method) && !isCardMethod(method)) nextBank = cash;
    else if (isCardMethod(method) && !isBankMethod(method)) nextCard = cash;
  }
  if (allowMethodFallback && !hasExplicitParts) {
    if (isCardMethod(method) && !isBankMethod(method) && !isPointMethod(method)) nextCard = total;
    else if (isBankMethod(method) && !isCardMethod(method) && !isPointMethod(method)) nextBank = total;
    else if (isPointMethod(method) && !isCardMethod(method) && !isBankMethod(method)) nextPoints = total;
  }
  return { card: nextCard, bank: nextBank, points: nextPoints, hasExplicitParts };
}
function isWithdrawn(member) {
  return text3(member.status) === "탈퇴";
}
function personKey(member, index) {
  return text3(member.id) || text3(member.loginId) || `member-${index}`;
}
function productRecord(state, key) {
  return state.records.products.find((product) => text3(product.id) === key || text3(product.title) === key);
}
function serviceRows(state, member) {
  const fallbackDate = firstDate(member, ["joinedAt", "createdAt", "가입일", "joined", "joinedDate"]);
  const build = (source, index) => {
    const productKey = text3(source.product ?? source.group ?? source.productId);
    const product = productRecord(state, productKey);
    const productName = text3(source.product ?? source.group ?? product?.title ?? source.productId);
    const status = text3(source.status);
    if (!productName || INACTIVE_SERVICE_STATUSES.has(status)) return void 0;
    return { product: productName, expert: text3(source.expert ?? product?.expert), status, source: { ...source, id: text3(source.id) || `${text3(member.id)}-service-${index}` }, fallbackDate };
  };
  if (Array.isArray(member.services)) return member.services.flatMap((item, index) => {
    const itemRecord = record(item);
    const row2 = itemRecord ? build(itemRecord, index) : void 0;
    return row2 ? [row2] : [];
  });
  const row = build(member, 0);
  return row ? [row] : [];
}
function serviceDate(service) {
  return firstDate(service.source, ["joinedAt", "createdAt", "가입일", "joined", "joinedDate", "start", "startDate"]) || service.fallbackDate;
}
function isExtension(service) {
  const source = service.source;
  if (source.isExtension === true || source.extension === true || source.renewal === true) return true;
  return [source.kind, source.type, source.action, source.status].some((value2) => EXTENSION_WORDS.some((word) => text3(value2).toLocaleLowerCase("ko-KR").includes(word)));
}
function expertForPayment(state, payment, video) {
  return text3(video?.expert) || paymentExpert(state, payment);
}
function titleForPayment(payment) {
  return text3(payment.product ?? payment.title ?? payment.productTitle) || "상품명 미확인";
}
function completedPaymentDate(payment) {
  return firstDate(payment, ["completedAt", "completedDate", "paidAt", "paidDate", "confirmedAt", "date"]);
}
function isPointCharge(payment) {
  const description = [payment.kind, payment.type, payment.product, payment.title, payment.productTitle].map(text3).join(" ").replace(/\s/g, "").toLocaleLowerCase("ko-KR");
  return description.includes("포인트충전") || description.includes("pointcharge") || description.includes("point-charge");
}
function normalizedTitle(value2) {
  return text3(value2).replace(/\s+/g, " ").toLocaleLowerCase("ko-KR");
}
function videoForPayment(state, payment) {
  const id = text3(payment.videoId ?? payment.videoID ?? payment.contentId);
  if (id) {
    const byId = state.records.videos.find((video) => text3(video.id) === id);
    if (byId) return byId;
  }
  const titles = [payment.videoTitle, payment.title, payment.productTitle, payment.product].map(normalizedTitle).filter(Boolean);
  return state.records.videos.find((video) => titles.includes(normalizedTitle(video.title)));
}
function hasVideoSignal(payment, video) {
  const kind = text3(payment.kind ?? payment.type).toLocaleLowerCase("ko-KR");
  return !!video || !!text3(payment.videoId ?? payment.videoID ?? payment.contentId) || kind === "video" || kind === "영상" || kind.includes("교육영상");
}
function refundRows(payment) {
  const nested = Array.isArray(payment.refunds) ? payment.refunds.map(record).filter((value2) => !!value2) : [];
  if (nested.length) return nested;
  if (payment.refundAmount !== void 0 || payment.refundDate !== void 0) return [{ id: "legacy", amount: payment.refundAmount, date: payment.refundDate, completedAt: payment.refundCompletedAt, status: payment.refundStatus, method: payment.refundMethod, cardAmount: payment.refundCardAmount, bankAmount: payment.refundBankAmount, pointAmount: payment.refundPointAmount }];
  return [];
}
function refundIsCompleted(payment, refund) {
  const status = text3(refund.status);
  return COMPLETED_REFUND_STATUSES.has(status) || !status && text3(refund.id) === "legacy" && text3(payment.status) === "환불완료";
}
function refundParts(payment, refund) {
  const explicit = moneyParts(refund, false);
  if (explicit.hasExplicitParts) return explicit;
  const refundAmount = amount2(refund.amount) ?? 0;
  const refundMethod = methodOf(refund);
  if (refundMethod) {
    const byMethod = moneyParts({ ...refund, amount: refundAmount }, true);
    if (byMethod.card || byMethod.bank || byMethod.points) return byMethod;
  }
  const original = moneyParts(payment, true);
  const originalKinds = Number(original.card > 0) + Number(original.bank > 0) + Number(original.points > 0);
  if (originalKinds === 1) {
    if (original.card) return { card: refundAmount, bank: 0, points: 0, hasExplicitParts: false };
    if (original.bank) return { card: 0, bank: refundAmount, points: 0, hasExplicitParts: false };
    if (original.points) return { card: 0, bank: 0, points: refundAmount, hasExplicitParts: false };
  }
  return { card: 0, bank: 0, points: 0, hasExplicitParts: false };
}
function limitedRefundParts(parts, remaining) {
  const card = Math.min(parts.card, remaining.card), bank = Math.min(parts.bank, remaining.bank), points = Math.min(parts.points, remaining.points);
  remaining.card -= card;
  remaining.bank -= bank;
  remaining.points -= points;
  return { card, bank, points, hasExplicitParts: parts.hasExplicitParts };
}
function selectedExpertMatches(expert, selected) {
  return selected === "전체" || expert === selected;
}
function sortDetails(rows) {
  return rows.sort((a, b) => b.date.localeCompare(a.date) || a.product.localeCompare(b.product, "ko-KR") || a.id.localeCompare(b.id));
}
function buildMonthlyRevenueReport(state, month, expert = "전체") {
  const range = monthRange(month) ?? monthRange(seoulMonth());
  const totals = { memberCount: 0, cardAmount: 0, bankAmount: 0, pointAmount: 0, cashRefundAmount: 0, pointRefundAmount: 0, actualJoinMemberCount: 0, videoCardAmount: 0, videoBankAmount: 0, videoPointAmount: 0 };
  const allMembers = /* @__PURE__ */ new Set(), expertMembers = /* @__PURE__ */ new Set(), newAccounts = /* @__PURE__ */ new Set(), firstServiceJoin = /* @__PURE__ */ new Map();
  for (const [index, member] of state.records.members.entries()) {
    const key = personKey(member, index);
    const services2 = serviceRows(state, member);
    if (isWithdrawn(member)) continue;
    allMembers.add(key);
    if (expert !== "전체" && services2.some((service) => service.expert === expert)) expertMembers.add(key);
    const accountDate = firstDate(member, ["joinedAt", "createdAt", "가입일", "joined", "joinedDate"]);
    if (expert === "전체") {
      if (inRange(accountDate, range)) newAccounts.add(key);
    } else {
      for (const service of services2) {
        if (service.expert !== expert || isExtension(service)) continue;
        const joined = serviceDate(service);
        if (!joined) continue;
        const previous = firstServiceJoin.get(key);
        if (!previous || joined < previous) firstServiceJoin.set(key, joined);
      }
    }
  }
  totals.memberCount = expert === "전체" ? allMembers.size : expertMembers.size;
  totals.actualJoinMemberCount = expert === "전체" ? newAccounts.size : [...firstServiceJoin.values()].filter((joined) => inRange(joined, range)).length;
  const videoMap = /* @__PURE__ */ new Map();
  const cardDetails = [];
  const bankDetails = [];
  let unmatchedVideoPaymentCount = 0;
  for (const payment of state.records.payments) {
    if (!COMPLETED_PAYMENT_STATUSES.has(text3(payment.status))) continue;
    const video = videoForPayment(state, payment);
    const paymentExpertName = expertForPayment(state, payment, video);
    if (!selectedExpertMatches(paymentExpertName, expert)) continue;
    const paymentDate = completedPaymentDate(payment);
    const paymentParts = moneyParts(payment, true);
    if (inRange(paymentDate, range)) {
      totals.cardAmount += paymentParts.card;
      totals.bankAmount += paymentParts.bank;
      totals.pointAmount += paymentParts.points;
      const product = titleForPayment(payment);
      if (paymentParts.card) cardDetails.push({ id: `${text3(payment.id)}:card`, date: paymentDate, product, amount: paymentParts.card });
      if (paymentParts.bank) bankDetails.push({ id: `${text3(payment.id)}:bank`, date: paymentDate, product, amount: paymentParts.bank });
      if (hasVideoSignal(payment, video) && !isPointCharge(payment)) {
        if (!video) {
          unmatchedVideoPaymentCount++;
        } else {
          const row = videoMap.get(text3(video.id)) ?? { id: text3(video.id), title: text3(video.title) || "제목 미확인 영상", expert: text3(video.expert), paymentCount: 0, cardAmount: 0, bankAmount: 0, pointAmount: 0 };
          row.paymentCount++;
          row.cardAmount += paymentParts.card;
          row.bankAmount += paymentParts.bank;
          row.pointAmount += paymentParts.points;
          videoMap.set(row.id, row);
          totals.videoCardAmount += paymentParts.card;
          totals.videoBankAmount += paymentParts.bank;
          totals.videoPointAmount += paymentParts.points;
        }
      }
    }
    const remaining = moneyParts(payment, true);
    const seenRefunds = /* @__PURE__ */ new Set();
    const completedRefunds = refundRows(payment).map((refund, index) => ({ refund, index, date: firstDate(refund, ["completedAt", "completedDate", "date", "refundDate"]) })).filter((item) => refundIsCompleted(payment, item.refund)).sort((a, b) => a.date.localeCompare(b.date) || a.index - b.index);
    for (const { refund, index, date: refundDate } of completedRefunds) {
      const refundKey = `${text3(payment.id)}:${text3(refund.id) || `row-${index}`}`;
      if (seenRefunds.has(refundKey)) continue;
      seenRefunds.add(refundKey);
      const parts = limitedRefundParts(refundParts(payment, refund), remaining);
      if (!inRange(refundDate, range)) continue;
      totals.cashRefundAmount += parts.card + parts.bank;
      totals.pointRefundAmount += parts.points;
    }
  }
  return { range, expert, totals, videoRows: [...videoMap.values()].sort((a, b) => a.title.localeCompare(b.title, "ko-KR") || a.id.localeCompare(b.id)), cardDetails: sortDetails(cardDetails), bankDetails: sortDetails(bankDetails), unmatchedVideoPaymentCount };
}
function monthlyRevenueCsv(report) {
  const escape = (value2) => `"${String(value2).replace(/"/g, '""')}"`;
  const header = ["조회월", "전문가", "영상 제목", "결제 건수", "카드액", "무통장입금액", "포인트 사용", "콘텐츠 결제합계"];
  const rows = report.videoRows.map((row) => [report.range.month, report.expert, row.title, row.paymentCount, row.cardAmount, row.bankAmount, row.pointAmount, row.cardAmount + row.bankAmount + row.pointAmount]);
  return [header, ...rows].map((row) => row.map(escape).join(",")).join("\r\n");
}

// components/MonthlyRevenueWorkspace.tsx
var import_jsx_runtime11 = JSXRuntime;
var won = (amount3) => `${amount3.toLocaleString("ko-KR")}원`;
function DetailList({ rows, empty }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { className: "monthly-detail-list", children: rows.length ? rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("time", { dateTime: row.date, children: row.date }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: row.product }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: won(row.amount) })
  ] }, row.id)) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { className: "monthly-detail-empty", children: empty }) });
}
function MonthlyRevenueWorkspace({ store, fixedExpert }) {
  const [month, setMonth] = (0, import_react13.useState)(seoulMonth());
  const [selectedExpert, setSelectedExpert] = (0, import_react13.useState)(fixedExpert ?? "전체");
  const experts = (0, import_react13.useMemo)(() => Array.from(new Set([
    ...store.state.records.experts.map((expert2) => String(expert2.nickname ?? expert2.name ?? "").trim()),
    ...store.state.records.products.map((product) => String(product.expert ?? "").trim()),
    ...store.state.records.videos.map((video) => String(video.expert ?? "").trim())
  ].filter(Boolean))).sort((a, b) => a.localeCompare(b, "ko-KR")), [store.state]);
  const expert = fixedExpert ?? selectedExpert;
  const report = (0, import_react13.useMemo)(() => buildMonthlyRevenueReport(store.state, month, expert), [store.state, month, expert]);
  const totals = report.totals;
  const exportCsv = () => downloadFile(`${report.range.month}_${expert}_주식교육영상_매출.csv`, monthlyRevenueCsv(report), "text/csv;charset=utf-8");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "monthly-revenue-v6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "panel monthly-query", "aria-label": "월 매출 조회 조건", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "monthly-query-controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("label", { children: [
          "조회 월",
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { type: "month", "aria-label": "조회 월", value: month, onChange: (event) => setMonth(event.target.value) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("label", { children: [
          "전문가",
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("select", { "aria-label": "전문가", value: expert, disabled: !!fixedExpert, onChange: (event) => setSelectedExpert(event.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: "전체", children: "전체" }),
            experts.map((name) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("option", { value: name, children: name }, name))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "muted", children: [
        report.range.start,
        " ~ ",
        report.range.end,
        " \xB7 결제는 완료일, 환불은 환불 완료일 기준으로 조회합니다."
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "monthly-card-grid", "aria-label": "월 매출 핵심 현황", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "monthly-stat-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "전체 회원수" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("strong", { children: [
          totals.memberCount.toLocaleString("ko-KR"),
          "명"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { children: expert === "전체" ? "탈퇴 회원 제외" : "담당 상품 가입 회원 \xB7 중복 제외" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "monthly-stat-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "월 카드결제" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: won(totals.cardAmount) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { children: "월 1일~말일에 완료된 카드 결제" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "monthly-stat-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "월 무통장입금" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: won(totals.bankAmount) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { children: "월 1일~말일에 확인된 입금" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "monthly-stat-card emphasis", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "월 환불" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: won(totals.cashRefundAmount) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("small", { children: [
          "완료 환불의 현금액 \xB7 포인트 반환 ",
          won(totals.pointRefundAmount)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "monthly-emphasis-grid", "aria-label": "가입과 주식교육영상 요약", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "panel monthly-emphasis-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "실제 가입회원수" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("strong", { children: [
          totals.actualJoinMemberCount.toLocaleString("ko-KR"),
          "명"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: expert === "전체" ? "이 달에 새로 가입한 회원 \xB7 중복 제외" : "이 달에 담당 상품에 처음 가입한 회원" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { children: "서비스 가입일 기준이며, 가입일이 없으면 회원 가입일을 확인합니다. 연장과 가상 참여수는 제외합니다." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "panel monthly-emphasis-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "월 주식교육영상 통합 매출" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("strong", { children: won(totals.videoCardAmount + totals.videoBankAmount + totals.videoPointAmount) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { children: [
          "콘텐츠 결제총액 \xB7 카드 ",
          won(totals.videoCardAmount),
          " + 포인트 ",
          totals.videoPointAmount.toLocaleString("ko-KR"),
          "P",
          totals.videoBankAmount > 0 ? " + 무통장 " + won(totals.videoBankAmount) : ""
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("small", { children: "1P = 1원 기준의 콘텐츠 이용액입니다. 실제 현금 수입은 카드\xB7무통장 금액만 해당하며, 충전액은 중복 합산하지 않습니다." }),
        totals.videoBankAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("small", { children: [
          "영상 무통장입금 ",
          won(totals.videoBankAmount),
          "은 별도 현금 결제이며 카드액에 합산하지 않았습니다."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "panel monthly-video-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "monthly-section-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { children: "월 주식교육영상별 결제금액" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "muted", children: "결제가 완료된 주식교육영상만 모았습니다. 포인트 충전액은 제외합니다." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("button", { type: "button", onClick: exportCsv, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Download, { size: 18 }),
          "CSV 내려받기"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "monthly-table-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("table", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { children: "제목" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { children: "결제 건수" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { children: "결제 합계" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { children: "카드액" }),
            totals.videoBankAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { children: "무통장입금" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { children: "포인트 사용" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tbody", { children: report.videoRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { children: row.title }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("td", { children: [
              row.paymentCount.toLocaleString("ko-KR"),
              "건"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { children: won(row.cardAmount + row.bankAmount + row.pointAmount) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { children: won(row.cardAmount) }),
            totals.videoBankAmount > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { children: won(row.bankAmount) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { children: won(row.pointAmount) })
          ] }, row.id)) })
        ] }),
        !report.videoRows.length && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "empty-state", children: "연결된 주식교육영상 결제 내역이 없습니다." })
      ] }),
      report.unmatchedVideoPaymentCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "monthly-caution", children: [
        "영상으로 표시되었지만 영상 ID\xB7제목을 확인할 수 없는 완료 결제 ",
        report.unmatchedVideoPaymentCount.toLocaleString("ko-KR"),
        "건은 영상별 금액에 넣지 않았습니다."
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "panel monthly-details-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { children: "카드 \xB7 무통장 내역" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "muted", children: "개인정보 없이 날짜, 상품, 금액만 확인합니다." }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "monthly-details-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("details", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("summary", { children: [
            "카드 결제 ",
            report.cardDetails.length.toLocaleString("ko-KR"),
            "건"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DetailList, { rows: report.cardDetails, empty: "이 달의 카드 결제 내역이 없습니다." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("details", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("summary", { children: [
            "무통장입금 ",
            report.bankDetails.length.toLocaleString("ko-KR"),
            "건"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DetailList, { rows: report.bankDetails, empty: "이 달의 무통장입금 내역이 없습니다." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "monthly-footnote", children: "가상 선착순\xB7대기 인원은 실제 가입회원수와 별개이며 이 화면에 포함하지 않습니다. 대기\xB7예상 환불은 집계하지 않습니다." })
  ] });
}

// components/CouponWorkspace.tsx
var import_react14 = React;

// data/couponModel.ts
var couponIssueMethods = ["automatic", "download", "couponCode", "designated"];
var couponBenefitTypes = ["amount", "percentage", "fixedPrice", "deposit"];
var couponTargetModes = ["all", "groups", "members"];
var couponScopeTypes = ["all", "product", "expert"];
var couponCodeModes = ["single", "multiple"];
var couponSampleGroups = [
  { id: "sample-vip", label: "골드마스터반" },
  { id: "sample-paid", label: "단타반" },
  { id: "sample-event", label: "골드해외반" },
  { id: "sample-vip-04", label: "골드텐버거반" },
  { id: "sample-vip-05", label: "꽃게선생반" }
];
var couponSampleProducts = [
  { id: "coupon-sample-product-gold-master", label: "골드마스터반" },
  { id: "coupon-sample-product-short-term", label: "단타반" },
  { id: "coupon-sample-product-gold-overseas", label: "골드해외반" },
  { id: "coupon-sample-product-gold-ten-bagger", label: "골드텐버거반" },
  { id: "coupon-sample-product-crab-teacher", label: "꽃게선생반" }
];
var couponSampleExperts = [
  { id: "coupon-sample-expert-crab-teacher", label: "꽃게선생" },
  { id: "coupon-sample-expert-gold-master", label: "골드마스터" }
];
var couponSampleMembers = [
  { id: "coupon-sample-01", loginId: "sample.member01", name: "샘플 회원 01", groupId: "sample-vip" },
  { id: "coupon-sample-02", loginId: "sample.member02", name: "샘플 회원 02", groupId: "sample-paid" },
  { id: "coupon-sample-03", loginId: "sample.member03", name: "샘플 회원 03", groupId: "sample-event" },
  { id: "coupon-sample-04", loginId: "sample.member04", name: "샘플 회원 04", groupId: "sample-vip" }
];
var ISSUE_LABEL = { automatic: "자동발행", download: "다운로드", couponCode: "쿠폰코드", designated: "지정발행" };
var MAX_LOCAL_QUANTITY = 1e3;
function text4(value2) {
  return value2 === null || value2 === void 0 ? "" : String(value2).trim();
}
function asStringArray(value2) {
  return Array.isArray(value2) ? Array.from(new Set(value2.map(text4).filter(Boolean))) : [];
}
function asTextArray(value2) {
  return Array.isArray(value2) ? value2.map(text4).filter(Boolean) : [];
}
function isIssueMethod(value2) {
  return couponIssueMethods.includes(value2);
}
function isBenefitType(value2) {
  return couponBenefitTypes.includes(value2);
}
function isTargetMode(value2) {
  return couponTargetModes.includes(value2);
}
function isScope(value2) {
  return couponScopeTypes.includes(value2);
}
function isCodeMode(value2) {
  return couponCodeModes.includes(value2);
}
function asBoolean(value2, fallback) {
  return typeof value2 === "boolean" ? value2 : fallback;
}
function whole(value2) {
  const n = Number(value2);
  return Number.isSafeInteger(n) ? n : null;
}
function dateTime(value2, end = false) {
  const raw = text4(value2);
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(raw)) return raw;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw + (end ? "T23:59" : "T00:00");
  return "";
}
function today(value2) {
  return value2.toISOString().slice(0, 10);
}
function defaultStart(value2) {
  return today(value2) + "T00:00";
}
function defaultEnd(value2) {
  return today(value2) + "T23:59";
}
function localCodeSeed(id) {
  const safe = id.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(-8);
  return "LOCAL" + (safe || "COUPON");
}
function couponIssueLabel(value2) {
  return isIssueMethod(value2) ? ISSUE_LABEL[value2] : "쿠폰코드";
}
function normalizeCoupon(row, now2 = /* @__PURE__ */ new Date()) {
  const legacyType = text4(row.discountType);
  const benefitType = isBenefitType(row.benefitType) ? row.benefitType : legacyType === "정률" || legacyType === "비율할인" ? "percentage" : legacyType === "고정가판매" ? "fixedPrice" : legacyType === "예치금적립" ? "deposit" : "amount";
  const rawIssue = text4(row.issueMethod);
  const issueMethod = isIssueMethod(rawIssue) ? rawIssue : text4(row.code) ? "couponCode" : "download";
  const legacyTarget = text4(row.target);
  const targetMode = isTargetMode(row.targetMode) ? row.targetMode : legacyTarget === "전체회원" ? "all" : legacyTarget ? "groups" : "all";
  const startAt = dateTime(row.startAt ?? row.start, false) || defaultStart(now2);
  const endAt = dateTime(row.endAt ?? row.end, true) || defaultEnd(now2);
  const generatedCodes = asTextArray(row.generatedCodes).map((code) => code.toUpperCase());
  const legacyCode = text4(row.code).toUpperCase();
  const codeMode = isCodeMode(row.couponCodeMode) ? row.couponCodeMode : generatedCodes.length > 1 ? "multiple" : "single";
  const quantity = whole(row.couponQuantity ?? row.quantity);
  const usage = whole(row.usageLimit);
  return {
    ...row,
    id: text4(row.id),
    title: text4(row.title),
    issueMethod,
    automaticTrigger: row.automaticTrigger === "firstOrder" ? "firstOrder" : "signup",
    targetMode,
    targetGroupIds: asStringArray(row.targetGroupIds).length ? asStringArray(row.targetGroupIds) : legacyTarget === "VIP회원" ? couponSampleGroups.map((g) => g.id) : [],
    targetMemberIds: asStringArray(row.targetMemberIds ?? row.memberIds),
    downloadQuantityLimited: asBoolean(row.downloadQuantityLimited, quantity !== null && issueMethod === "download"),
    couponCodeMode: codeMode,
    couponQuantity: quantity === null ? 1 : quantity,
    code: legacyCode,
    generatedCodes,
    benefitType,
    benefitValue: text4(row.benefitValue ?? row.amount),
    stackable: row.stackable === "stackable" || row.stackable === "중복사용가능" ? "stackable" : "single",
    scope: row.scope === "singleVideo" ? "singleVideo" : isScope(row.scope) ? row.scope : "all",
    scopeProductIds: asStringArray(row.scopeProductIds),
    scopeExpertIds: asStringArray(row.scopeExpertIds),
    depositReason: text4(row.depositReason ?? row.reason),
    validityLimited: asBoolean(row.validityLimited, !!(row.start || row.end || row.startAt || row.endAt)),
    startAt,
    endAt,
    usageUnlimited: asBoolean(row.usageUnlimited, row.usageLimit === void 0 || row.usageLimit === null || row.usageLimit === ""),
    usageLimit: usage === null ? "" : usage,
    status: text4(row.status) || "사용가능"
  };
}
function newCouponDraft(id, now2 = /* @__PURE__ */ new Date()) {
  return normalizeCoupon({
    id,
    title: "",
    issueMethod: "automatic",
    automaticTrigger: "signup",
    targetMode: "all",
    targetGroupIds: [],
    targetMemberIds: [],
    downloadQuantityLimited: false,
    couponCodeMode: "single",
    couponQuantity: 1,
    code: "",
    generatedCodes: [],
    benefitType: "amount",
    benefitValue: "",
    stackable: "single",
    scope: "all",
    scopeProductIds: [],
    scopeExpertIds: [],
    depositReason: "",
    validityLimited: true,
    startAt: defaultStart(now2),
    endAt: defaultEnd(now2),
    usageUnlimited: true,
    usageLimit: "",
    status: "사용가능",
    createdAt: now2.toISOString()
  }, now2);
}
function couponCodes(row) {
  const normalized = normalizeCoupon(row);
  const values = normalized.issueMethod === "couponCode" && normalized.couponCodeMode === "multiple" && normalized.generatedCodes.length ? normalized.generatedCodes : [normalized.code];
  return values.map((code) => text4(code).toUpperCase()).filter(Boolean);
}
function makeLocalCouponCodes(seed, count) {
  const amount3 = Math.max(1, Math.min(MAX_LOCAL_QUANTITY, Math.trunc(count) || 1));
  const base = text4(seed).toUpperCase() || "LOCALCOUPON";
  if (amount3 === 1) return [base];
  return Array.from({ length: amount3 }, (_, index) => base + "-" + String(index + 1).padStart(3, "0"));
}
function prepareCouponForSave(draft, now2 = /* @__PURE__ */ new Date()) {
  const next = normalizeCoupon({ ...draft }, now2);
  const quantity = whole(next.couponQuantity);
  const codeCount = next.couponCodeMode === "multiple" ? quantity ?? 0 : 1;
  let code = text4(next.code).toUpperCase(), generatedCodes = asTextArray(next.generatedCodes).map((value2) => value2.toUpperCase());
  if (next.issueMethod === "couponCode") {
    if (next.couponCodeMode === "multiple") {
      const seed = code || localCodeSeed(next.id);
      if (codeCount > 0 && generatedCodes.length !== codeCount) generatedCodes = makeLocalCouponCodes(seed, codeCount);
      code = generatedCodes[0] ?? "";
    } else {
      code = code || generatedCodes[0] || makeLocalCouponCodes(localCodeSeed(next.id), 1)[0];
      generatedCodes = [code];
    }
  } else {
    code = "";
    generatedCodes = [];
  }
  const numericBenefit = whole(next.benefitValue);
  const numericQuantity = whole(next.couponQuantity);
  const numericUsage = whole(next.usageLimit);
  const issuedCount = next.issueMethod === "couponCode" && next.couponCodeMode === "multiple" ? numericQuantity ?? 0 : next.issueMethod === "couponCode" ? numericQuantity ?? 1 : next.issueMethod === "download" && next.downloadQuantityLimited ? numericQuantity ?? 0 : 0;
  return {
    ...next,
    title: text4(next.title),
    code,
    generatedCodes,
    couponQuantity: numericQuantity === null ? "" : numericQuantity,
    benefitValue: numericBenefit === null ? "" : numericBenefit,
    depositReason: text4(next.depositReason),
    startAt: dateTime(next.startAt, false),
    endAt: dateTime(next.endAt, true),
    usageLimit: numericUsage === null ? "" : numericUsage,
    issuedCount: whole(next.issuedCount) ?? issuedCount,
    usedCount: whole(next.usedCount) ?? 0,
    createdAt: text4(next.createdAt ?? next.date) || now2.toISOString(),
    date: text4(next.date ?? next.createdAt) || now2.toISOString()
  };
}
function localCountError(value2, label) {
  const count = whole(value2);
  if (count === null || count < 1) return label + "을(를) 1 이상 정수로 입력해주세요.";
  if (count > MAX_LOCAL_QUANTITY) return label + "은(는) 로컬 확인용으로 1,000 이하만 입력할 수 있습니다.";
  return void 0;
}
function validateCoupon(draft, records = []) {
  const row = normalizeCoupon(draft);
  const errors = {};
  if (!text4(row.title)) errors.title = "쿠폰명을 입력해주세요.";
  if (row.issueMethod === "automatic" && !["signup", "firstOrder"].includes(row.automaticTrigger)) errors.automaticTrigger = "자동 발행 조건을 선택해주세요.";
  if (row.issueMethod !== "automatic") {
    if (row.targetMode === "groups" && !row.targetGroupIds.length) errors.target = "특정그룹을 한 개 이상 선택해주세요.";
    if (row.targetMode === "members" && !row.targetMemberIds.length) errors.target = "특정회원을 한 명 이상 추가해주세요.";
  }
  if (row.issueMethod === "download" && row.downloadQuantityLimited) {
    const message = localCountError(row.couponQuantity, "쿠폰수량");
    if (message) errors.couponQuantity = message;
  }
  if (row.issueMethod === "couponCode") {
    const quantityError = localCountError(row.couponQuantity, "쿠폰수량");
    if (quantityError) errors.couponQuantity = quantityError;
    if (row.couponCodeMode === "multiple") {
      const message = localCountError(row.couponQuantity, "쿠폰수량");
      if (message) errors.couponQuantity = message;
      const expected = whole(row.couponQuantity);
      if (expected !== null && row.generatedCodes.length !== expected) errors.generatedCodes = "쿠폰수량에 맞게 코드를 자동생성하거나 다시 확인해주세요.";
    }
    const codes = couponCodes(row);
    if (!codes.length) errors.code = "쿠폰코드를 입력하거나 자동생성해주세요.";
    const seen = /* @__PURE__ */ new Set();
    if (codes.some((code) => {
      if (seen.has(code)) return true;
      seen.add(code);
      return false;
    })) errors.code = "동일한 쿠폰코드가 중복되어 있습니다.";
    const occupied = new Set(records.filter((record2) => text4(record2.id) !== row.id).flatMap(couponCodes));
    if (codes.some((code) => occupied.has(code))) errors.code = "이미 등록한 쿠폰번호입니다. 다른 번호로 입력해주세요.";
  }
  const value2 = whole(row.benefitValue);
  if (value2 === null || value2 < 1) errors.benefitValue = row.benefitType === "percentage" ? "할인비율을 1 이상 정수로 입력해주세요." : row.benefitType === "fixedPrice" ? "고정가격을 1원 이상 입력해주세요." : row.benefitType === "deposit" ? "예치금액을 1원 이상 입력해주세요." : "할인금액을 1원 이상 입력해주세요.";
  else if (row.benefitType === "percentage" && value2 > 100) errors.benefitValue = "할인비율은 100% 이하여야 합니다.";
  if (row.benefitType === "deposit" && !text4(row.depositReason)) errors.depositReason = "적립사유를 입력해주세요.";
  if (row.benefitType !== "deposit" && row.scope === "product" && !row.scopeProductIds.length) errors.scope = "특정상품을 한 개 이상 선택해주세요.";
  if (row.benefitType !== "deposit" && row.scope === "expert" && !row.scopeExpertIds.length) errors.scope = "특정전문가를 한 명 이상 선택해주세요.";
  if (row.validityLimited) {
    if (!row.startAt) errors.startAt = "시작일시를 입력해주세요.";
    if (!row.endAt) errors.endAt = "종료일시를 입력해주세요.";
    if (row.startAt && row.endAt && row.startAt > row.endAt) errors.endAt = "종료일시는 시작일시 이후여야 합니다.";
  }
  if (!row.usageUnlimited) {
    const message = localCountError(row.usageLimit, "사용횟수");
    if (message) errors.usageLimit = message;
  }
  return errors;
}
function couponBenefitSummary(row) {
  const coupon = normalizeCoupon(row), value2 = whole(coupon.benefitValue) ?? 0;
  if (coupon.benefitType === "percentage") return value2.toLocaleString("ko-KR") + "% 할인";
  if (coupon.benefitType === "fixedPrice") return value2.toLocaleString("ko-KR") + "원 고정가";
  if (coupon.benefitType === "deposit") return value2.toLocaleString("ko-KR") + "원 예치금 적립";
  return value2.toLocaleString("ko-KR") + "원 할인";
}
function couponUsageIssueSummary(row) {
  const coupon = normalizeCoupon(row);
  const used = whole(coupon.usedCount) ?? 0, issued = whole(coupon.issuedCount) ?? 0;
  return used.toLocaleString("ko-KR") + " / " + issued.toLocaleString("ko-KR");
}
function couponPeriodSummary(row) {
  const coupon = normalizeCoupon(row);
  if (!coupon.validityLimited) return "제한없음";
  const format = (value2) => value2 ? value2.replace("T", " ") : "—";
  return format(coupon.startAt) + " ~ " + format(coupon.endAt);
}
function couponRegisteredAt(row) {
  const value2 = text4(row.createdAt ?? row.date ?? row.registeredAt);
  return value2 ? value2.replace("T", " ").slice(0, 16) : "—";
}
function couponMatchesSampleMember(member, query) {
  const needle = text4(query).toLocaleLowerCase("ko-KR");
  return !needle || [member.loginId, member.name, member.id].join(" ").toLocaleLowerCase("ko-KR").includes(needle);
}

// components/CouponWorkspace.tsx
var import_jsx_runtime12 = JSXRuntime;
function ChoiceButton({ selected, children, onClick, label }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "coupon-workspace__choice" + (selected ? " is-selected" : ""), "aria-pressed": selected, "aria-label": label, onClick, children });
}
function CouponDialog({ draft, onChange, onClose, onSave, errors }) {
  const [memberQuery, setMemberQuery] = (0, import_react14.useState)("");
  const dialogRef = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    const focus = window.setTimeout(() => dialogRef.current?.querySelector("[data-dialog-focus]")?.focus(), 0);
    return () => window.clearTimeout(focus);
  }, []);
  const sampleResults = (0, import_react14.useMemo)(() => memberQuery.trim() ? couponSampleMembers.filter((member) => couponMatchesSampleMember(member, memberQuery)) : [], [memberQuery]);
  const selectedMembers = draft.targetMemberIds.map((id) => couponSampleMembers.find((member) => member.id === id)).filter((member) => Boolean(member));
  const setMethod = (issueMethod) => {
    onChange("issueMethod", issueMethod);
  };
  const setTarget = (targetMode) => {
    onChange("targetMode", targetMode);
  };
  const setBenefit = (benefitType) => {
    onChange("benefitType", benefitType);
  };
  const setScope = (scope) => {
    onChange("scope", scope);
  };
  const toggleArray = (key, value2) => {
    const current = draft[key];
    onChange(key, current.includes(value2) ? current.filter((item) => item !== value2) : [...current, value2]);
  };
  const generateCodes = () => {
    const requested = draft.couponCodeMode === "multiple" ? Number(draft.couponQuantity) : 1;
    if (!Number.isSafeInteger(requested) || requested < 1 || requested > 1e3) {
      onChange("generatedCodes", []);
      return;
    }
    const seed = draft.code.trim() || "LOCAL" + draft.id.replace(/[^a-z0-9]/gi, "").slice(-8).toUpperCase();
    const codes = makeLocalCouponCodes(seed, requested);
    onChange("generatedCodes", codes);
    onChange("code", codes[0] ?? "");
  };
  const selectedCodePreview = couponCodes(draft);
  const benefitOptions = [
    { id: "amount", label: "금액할인" },
    { id: "percentage", label: "비율할인" },
    { id: "fixedPrice", label: "고정가판매" },
    { id: "deposit", label: "예치금적립" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__backdrop", role: "presentation", onMouseDown: (event) => {
    if (event.target === event.currentTarget) onClose();
  }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { ref: dialogRef, className: "coupon-workspace__dialog", role: "dialog", "aria-modal": "true", "aria-label": draft.title ? "쿠폰 수정" : "쿠폰만들기", onKeyDown: (event) => {
    if (event.key === "Escape") onClose();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("header", { className: "coupon-workspace__dialog-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "서비스쿠폰발행" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { children: draft.title ? "쿠폰 수정" : "쿠폰만들기" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "icon-button", "data-dialog-focus": true, "aria-label": "닫기", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(X, { size: 22 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("form", { noValidate: true, onSubmit: (event) => {
      event.preventDefault();
      onSave();
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__dialog-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "coupon-workspace__local-note", children: "이 화면은 현재 기기의 가상 데이터만 저장합니다. 실제 쿠폰 발급 권한이나 SMS 발송은 연결되어 있지 않습니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("fieldset", { className: "coupon-workspace__section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("legend", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "1" }),
            "기본설정"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__setting", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "발행방법" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__choices", role: "group", "aria-label": "발행방법", children: [{ id: "automatic", label: "자동발행" }, { id: "download", label: "다운로드" }, { id: "couponCode", label: "쿠폰코드" }, { id: "designated", label: "지정발행" }].map((option) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.issueMethod === option.id, onClick: () => setMethod(option.id), children: option.label }, option.id)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__form-grid", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "coupon-workspace__field coupon-workspace__field--wide", children: [
            "쿠폰명 ",
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("em", { children: "필수" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { value: draft.title, onChange: (event) => onChange("title", event.target.value), placeholder: "쿠폰명을 입력하세요" }),
            errors.title && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.title })
          ] }) }),
          draft.issueMethod === "automatic" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__subsetting", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "자동 발행 조건" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", role: "group", "aria-label": "자동 발행 조건", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.automaticTrigger === "signup", onClick: () => onChange("automaticTrigger", "signup"), children: "첫 회원가입" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.automaticTrigger === "firstOrder", onClick: () => onChange("automaticTrigger", "firstOrder"), children: "첫 주문완료" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "자동발행은 수량 제한을 설정하지 않습니다." })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__subsetting", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "발행 대상" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", role: "group", "aria-label": "발행 대상", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.targetMode === "all", onClick: () => setTarget("all"), children: "전체회원" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.targetMode === "groups", onClick: () => setTarget("groups"), children: "특정그룹" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.targetMode === "members", onClick: () => setTarget("members"), children: "특정회원" })
              ] }),
              errors.target && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.target })
            ] }),
            draft.targetMode === "groups" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__target-box", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("strong", { children: [
                "특정그룹 ",
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { children: "여러 개 선택" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__target-options", children: couponSampleGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.targetGroupIds.includes(group.id), onClick: () => toggleArray("targetGroupIds", group.id), children: group.label }, group.id)) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "가상 샘플 그룹만 표시됩니다." })
            ] }),
            draft.targetMode === "members" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__target-box", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "특정회원" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "coupon-workspace__member-search", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Search, { size: 18 }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { "aria-label": "특정회원 아이디 검색", value: memberQuery, onChange: (event) => setMemberQuery(event.target.value), placeholder: "회원 아이디를 검색하세요" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "아이디 검색 후 클릭하여 추가합니다. 검색 결과는 가상 샘플 회원만 표시됩니다." }),
              sampleResults.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__member-results", "aria-label": "가상 샘플 회원 검색 결과", children: sampleResults.map((member) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", className: draft.targetMemberIds.includes(member.id) ? "is-selected" : "", onClick: () => toggleArray("targetMemberIds", member.id), children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: member.loginId }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: member.name }),
                draft.targetMemberIds.includes(member.id) && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "추가됨" })
              ] }, member.id)) }),
              memberQuery.trim() && !sampleResults.length && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "coupon-workspace__empty-target", children: "검색 결과가 없습니다." }),
              selectedMembers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__member-chips", "aria-label": "선택한 특정회원", children: selectedMembers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", onClick: () => toggleArray("targetMemberIds", member.id), children: [
                member.loginId,
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(X, { size: 15 }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "sr-only", children: "선택 해제" })
              ] }, member.id)) })
            ] }),
            draft.issueMethod === "download" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__subsetting", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "쿠폰수량" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", role: "group", "aria-label": "다운로드 쿠폰수량 제한", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: !draft.downloadQuantityLimited, onClick: () => onChange("downloadQuantityLimited", false), children: "제한없음" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.downloadQuantityLimited, onClick: () => onChange("downloadQuantityLimited", true), children: "제한" })
              ] }),
              draft.downloadQuantityLimited && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "coupon-workspace__inline-field", children: [
                "쿠폰수량",
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "number", min: "1", max: "1000", step: "1", inputMode: "numeric", value: draft.couponQuantity, onChange: (event) => onChange("couponQuantity", event.target.value), placeholder: "수량 입력" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "장" }),
                errors.couponQuantity && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.couponQuantity })
              ] }),
              draft.downloadQuantityLimited && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "수량은 로컬 확인용으로 1,000 이하만 설정할 수 있습니다." })
            ] }),
            draft.issueMethod === "couponCode" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__subsetting coupon-workspace__code-setting", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "쿠폰타입" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", role: "group", "aria-label": "쿠폰코드 생성 방식", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.couponCodeMode === "single", onClick: () => {
                  onChange("couponCodeMode", "single");
                  onChange("generatedCodes", []);
                }, children: "단일생성" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.couponCodeMode === "multiple", onClick: () => {
                  onChange("couponCodeMode", "multiple");
                  onChange("generatedCodes", []);
                }, children: "여러개 생성" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__code-fields", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { children: [
                  "쿠폰코드 직접입력",
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { value: draft.code, onChange: (event) => {
                    onChange("code", event.target.value.toUpperCase());
                    onChange("generatedCodes", []);
                  }, placeholder: "공란이면 저장 시 자동생성" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { children: "공란이면 자동생성됩니다." })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { children: [
                  "쿠폰수량",
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "number", min: "1", max: "1000", step: "1", inputMode: "numeric", value: draft.couponQuantity, onChange: (event) => {
                    onChange("couponQuantity", event.target.value);
                    onChange("generatedCodes", []);
                  }, placeholder: "수량 입력" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { children: "로컬 확인용으로 1,000 이하" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", onClick: generateCodes, children: "자동생성" })
              ] }),
              draft.couponCodeMode === "multiple" && selectedCodePreview.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "coupon-workspace__code-preview", children: [
                "로컬 코드 미리보기: ",
                selectedCodePreview.slice(0, 3).join(", "),
                selectedCodePreview.length > 3 ? " 외 " + (selectedCodePreview.length - 3) + "개" : ""
              ] }),
              (errors.code || errors.generatedCodes || errors.couponQuantity) && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.code ?? errors.generatedCodes ?? errors.couponQuantity })
            ] }),
            draft.issueMethod === "designated" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "coupon-workspace__method-note", children: "지정발행은 수량 제한을 설정하지 않습니다. 저장해도 실제 대상회원에게 발급되지 않습니다." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("fieldset", { className: "coupon-workspace__section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("legend", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "2" }),
            "혜택"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__benefits", children: benefitOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__benefit" + (draft.benefitType === option.id ? " is-selected" : ""), children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", className: "coupon-workspace__benefit-head", "aria-expanded": draft.benefitType === option.id, onClick: () => setBenefit(option.id), children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: option.label }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChevronDown, { size: 19 })
            ] }),
            draft.benefitType === option.id && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__benefit-body", children: [
              (option.id === "amount" || option.id === "percentage" || option.id === "fixedPrice") && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "coupon-workspace__value-field", children: [
                option.id === "amount" ? "할인금액" : option.id === "percentage" ? "할인비율" : "고정가격",
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "number", min: "1", max: option.id === "percentage" ? 100 : void 0, step: "1", inputMode: "numeric", value: draft.benefitValue, onChange: (event) => onChange("benefitValue", event.target.value), placeholder: "금액 입력" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: option.id === "percentage" ? "%" : "원" })
                ] }),
                errors.benefitValue && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.benefitValue })
              ] }),
              (option.id === "amount" || option.id === "percentage") && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__setting", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "중복할인" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.stackable === "single", onClick: () => onChange("stackable", "single"), children: "단독으로 사용" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.stackable === "stackable", onClick: () => onChange("stackable", "stackable"), children: "중복사용가능" })
                ] })
              ] }),
              option.id !== "deposit" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__setting", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "적용범위" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.scope === "all", onClick: () => setScope("all"), children: "모든상품" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.scope === "product", onClick: () => setScope("product"), children: "특정상품" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.scope === "expert", onClick: () => setScope("expert"), children: "특정전문가" })
                ] }),
                draft.scope === "product" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__target-box", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("strong", { children: [
                    "VIP상품선택 ",
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { children: "여러 개 선택" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__target-options", children: couponSampleProducts.map((product) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.scopeProductIds.includes(product.id), onClick: () => toggleArray("scopeProductIds", product.id), children: product.label }, product.id)) }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "가상 샘플 상품만 표시됩니다." }),
                  errors.scope && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.scope })
                ] }),
                draft.scope === "expert" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__target-box", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("strong", { children: [
                    "전문가선택 ",
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { children: "여러 개 선택" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "coupon-workspace__target-options", children: couponSampleExperts.map((expert) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.scopeExpertIds.includes(expert.id), onClick: () => toggleArray("scopeExpertIds", expert.id), children: expert.label }, expert.id)) }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "가상 샘플 전문가만 표시됩니다." }),
                  errors.scope && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.scope })
                ] })
              ] }),
              option.id === "deposit" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__form-grid", children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "coupon-workspace__value-field", children: [
                  "예치금액",
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "number", min: "1", step: "1", inputMode: "numeric", value: draft.benefitValue, onChange: (event) => onChange("benefitValue", event.target.value), placeholder: "금액 입력" }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("b", { children: "원" })
                  ] }),
                  errors.benefitValue && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.benefitValue })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "coupon-workspace__field", children: [
                  "적립사유",
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("textarea", { rows: 3, value: draft.depositReason, onChange: (event) => onChange("depositReason", event.target.value), placeholder: "적립사유를 입력하세요" }),
                  errors.depositReason && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.depositReason })
                ] })
              ] })
            ] })
          ] }, option.id)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("fieldset", { className: "coupon-workspace__section", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("legend", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "3" }),
            "운영설정"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__setting", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "사용기한" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", role: "group", "aria-label": "사용기한 설정", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.validityLimited, onClick: () => onChange("validityLimited", true), children: "사용기한설정" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: !draft.validityLimited, onClick: () => onChange("validityLimited", false), children: "제한없음" })
            ] }),
            draft.validityLimited && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__date-grid", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { children: [
                "시작일시",
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "datetime-local", value: draft.startAt, onChange: (event) => onChange("startAt", event.target.value) }),
                errors.startAt && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.startAt })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { children: [
                "종료일시",
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "datetime-local", value: draft.endAt, onChange: (event) => onChange("endAt", event.target.value) }),
                errors.endAt && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.endAt })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__setting", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: "사용횟수" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__choices", role: "group", "aria-label": "사용횟수 제한", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: draft.usageUnlimited, onClick: () => onChange("usageUnlimited", true), children: "제한없음" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ChoiceButton, { selected: !draft.usageUnlimited, onClick: () => onChange("usageUnlimited", false), children: "제한" })
            ] }),
            !draft.usageUnlimited && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("label", { className: "coupon-workspace__inline-field", children: [
              "사용횟수",
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", { type: "number", min: "1", max: "1000", step: "1", inputMode: "numeric", value: draft.usageLimit, onChange: (event) => onChange("usageLimit", event.target.value), placeholder: "횟수 입력" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "회" }),
              errors.usageLimit && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("small", { className: "field-error", children: errors.usageLimit })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("footer", { className: "coupon-workspace__dialog-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "발급\xB7SMS\xB7실회원 권한은 실행하지 않습니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", onClick: onClose, children: "취소" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "submit", className: "primary", children: "저장" })
        ] })
      ] })
    ] })
  ] }) });
}
function CouponWorkspace({ store }) {
  const coupons = (0, import_react14.useMemo)(() => store.state.records.coupons.map((row) => normalizeCoupon(row)), [store.state.records.coupons]);
  const [draft, setDraft] = (0, import_react14.useState)(null);
  const [errors, setErrors] = (0, import_react14.useState)({});
  function openCreate() {
    setErrors({});
    setDraft(newCouponDraft(uid()));
  }
  function openEdit(row) {
    setErrors({});
    setDraft(normalizeCoupon(row));
  }
  function update(key, value2) {
    setDraft((current) => current ? { ...current, [key]: value2 } : current);
    setErrors({});
  }
  function close() {
    setDraft(null);
    setErrors({});
  }
  function save() {
    if (!draft) return;
    const prepared = prepareCouponForSave(draft);
    const nextErrors = validateCoupon(prepared, coupons);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    store.save("coupons", prepared);
    close();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { className: "coupon-workspace panel", "aria-label": "서비스쿠폰발행", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__list-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { children: "서비스쿠폰발행" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", className: "primary", onClick: openCreate, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Plus, { size: 19 }),
        "쿠폰만들기"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__table-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { children: "쿠폰명 / 혜택" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { children: "쿠폰형식" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { children: "상태" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { children: "사용/발행" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { children: "사용기간" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { children: "등록일" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tbody", { children: coupons.map((coupon) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("button", { type: "button", className: "coupon-workspace__row-title", onClick: () => openEdit(coupon), children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("strong", { children: coupon.title || "쿠폰명 미입력" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: couponBenefitSummary(coupon) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: couponIssueLabel(coupon.issueMethod) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "coupon-workspace__status " + (coupon.status === "사용가능" ? "is-active" : ""), children: coupon.status || "—" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: couponUsageIssueSummary(coupon) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: couponPeriodSummary(coupon) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: couponRegisteredAt(coupon) })
        ] }, coupon.id)) })
      ] }),
      !coupons.length && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "coupon-workspace__empty", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { children: "등록된 쿠폰이 없습니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "쿠폰만들기로 가상 쿠폰 조건을 저장할 수 있습니다." })
      ] })
    ] }),
    draft && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(CouponDialog, { draft, onChange: update, onClose: close, onSave: save, errors })
  ] });
}

// data/accessModel.ts
function expertCanView(spec, expert, state) {
  if (spec.domain === "members" && spec.filter?.key === "group") {
    const group=spec.filter.value;
    return expert === "골드마스터" ? ["골드마스터반","단타반","골드해외반","골드텐버거반"].includes(group) : (state?.records.products||[]).some(p=>p.expert===expert && p.title===group);
  }
  if (spec.path === "/admin/analytics/revenue") return true;
  if (spec.domain === "videos") return spec.filter?.key === "expert" && spec.filter.value === expert;
  if (spec.domain === "articles") return spec.path.startsWith("/admin/board/expert/") && spec.filter?.value === expert + " 게시판";
  return false;
}
function expertCanEdit(domain, row, expert) {
  return domain === "videos" ? row.expert === expert : domain === "articles" ? row.board === expert + " 게시판" : false;
}

// components/StaffWorkspace.tsx
var import_react15 = React;
var import_jsx_runtime13 = JSXRuntime;
function StaffWorkspace({ store, initialExpert = false }) {
  const [tab, setTab] = (0, import_react15.useState)(initialExpert ? "experts" : "staff");
  const original = pages.find((p) => p.path === (tab === "staff" ? "/admin/staff/list" : "/admin/staff/experts"));
  const spec = { ...original, title: tab === "staff" ? "운영진 계정 \xB7 권한" : "전문가 프로필", fields: original.fields.map((f2) => f2.key === "staffId" ? { ...f2, options: store.state.records.staff.map((s) => String(s.loginId)) } : f2) };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("nav", { className: "section-tabs", "aria-label": "운영진 관리 구분", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { type: "button", className: tab === "staff" ? "active" : "", "aria-pressed": tab === "staff", onClick: () => setTab("staff"), children: "운영진 계정 \xB7 권한" }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { type: "button", className: tab === "experts" ? "active" : "", "aria-pressed": tab === "experts", onClick: () => setTab("experts"), children: "전문가 프로필" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DataWorkspace, { spec, store }, tab)
  ] });
}

// components/RoleDashboard.tsx
var import_jsx_runtime14 = JSXRuntime;
var services = (m) => Array.isArray(m.services) ? m.services : m.group && m.group !== "무료회원" ? [{ id: m.id, product: m.group, end: m.end, status: "이용중" }] : [];
function RoleDashboard({ store, expert, onNavigate }) {
  const state = store.state, products = state.records.products.filter((p) => !expert || p.expert === expert).map((p) => String(p.title));
  const members = expert ? state.records.members.filter((m) => services(m).some((s) => products.includes(String(s.product)) && s.status !== "환불")) : state.records.members;
  const today2 = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(/* @__PURE__ */ new Date()), month = today2.slice(0, 7);
  const options = { start: month + "-01", end: today2, expert: expert ?? "전체", query: "", taxMode: "미설정", taxRate: 10, commissionRate: "", commissionBase: "미설정" };
  const totals = summarizeRevenue(filterRevenue(revenueEvents(state), options), options);
  const gross = totals.reduce((n, r) => n + r.gross, 0), refund = totals.reduce((n, r) => n + r.refund, 0);
  const waiting = state.records.payments.filter((p) => p.status === "입금대기").length;
  const videos = state.records.videos.filter((v) => !expert || v.expert === expert);
  const soon = members.filter((m) => services(m).some((s) => s.status !== "환불" && String(s.end) >= today2 && Date.parse(String(s.end)) - Date.parse(today2) <= 7 * 864e5)).length;
  const expertBoard = state.records.articles.filter((a) => String(a.board).startsWith(expert ?? "")).length;
  const videoPath = state.records.videos.find((v) => v.expert === expert)?.expert === "꽃게선생" ? "/admin/board/paid-stock/a92bf325-8f3a-48b1-b656-4b323c5f5d69" : "/admin/board/paid-stock/8bd3703c-2f94-4067-b366-f97323116386";
  const cards = expert ? [[Users, "전체 회원수", members.length, "명", "/admin/analytics/revenue"], [FileText, "내 주식교육영상", videos.length, "개", videoPath], [CreditCard, "월별 매출 확인", month, "", "/admin/analytics/revenue"]] : [[Users, "전체 회원", members.length, "명", "/admin/members/all"], [CreditCard, "확인할 입금", waiting, "건", "/admin/payments/bank"], [Crown, "7일 안에 만기", soon, "명", "/admin/members/expired"]];
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { className: "dashboard-stats", children: cards.map(([Icon2, title, n, unit, path]) => {
      const I = Icon2;
      if (expert && title === "전체 회원수") return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("article", { className: "stat-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "stat-icon", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(I, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: String(title) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("strong", { children: [
          String(n),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("small", { children: String(unit) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "stat-foot", children: "담당 상품 가입회원 \xB7 개인정보 비공개" })
      ] }, String(title));
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("button", { className: "stat-card", type: "button", onClick: () => onNavigate(String(path)), children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "stat-icon", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(I, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: String(title) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("strong", { children: [
          String(n),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("small", { children: String(unit) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "stat-foot", children: [
          "자세히 보기",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ArrowRight, { size: 17 })
        ] })
      ] }, String(title));
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: "panel overview-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "panel-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { children: expert ? "내 매출 \xB7 환불 현황" : "전체 매출 \xB7 환불 현황" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "quiet-label", children: [
          month,
          " \xB7 이번 달"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "summary-strip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "결제액" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("strong", { children: [
            gross.toLocaleString(),
            "원"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "환불액" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("strong", { children: [
            refund.toLocaleString(),
            "원"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "환불 차감 후 금액" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("strong", { children: [
            (gross - refund).toLocaleString(),
            "원"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "muted", children: "결제일\xB7완료 환불일 기준의 가상 데이터입니다. 월별 카드\xB7무통장\xB7환불 및 주식교육영상 합계는 매출 화면에서 확인하세요." }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("button", { className: "text-button", type: "button", onClick: () => onNavigate("/admin/analytics/revenue"), children: [
        "전문가 월별 매출 보기",
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ArrowRight, { size: 18 })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: "panel shortcuts", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { children: expert ? "내 콘텐츠 관리" : "운영 바로가기" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: (expert ? [[FileText, "내 주식교육영상", videoPath], [FileText, "내 게시글", expert === "꽃게선생" ? "/admin/board/expert/a92bf325-8f3a-48b1-b656-4b323c5f5d69" : "/admin/board/expert/8bd3703c-2f94-4067-b366-f97323116386"], [CreditCard, "내 월별 매출", "/admin/analytics/revenue"]] : [[Users, "회원 관리", "/admin/members/all"], [CreditCard, "결제 관리", "/admin/payments/all"], [FileText, "게시글 관리", "/admin/board/support/notice"], [Users, "운영진 관리", "/admin/staff/list"]]).map(([Icon2, title, path]) => {
        const I = Icon2;
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("button", { type: "button", onClick: () => onNavigate(String(path)), children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(I, { size: 24 }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { children: String(title) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ArrowRight, { size: 18 })
        ] }, String(path));
      }) })
    ] }),
    expert && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: "panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("h2", { children: [
        expert,
        " 콘텐츠 현황"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "muted", children: [
        "내 게시글 ",
        expertBoard,
        "개 \xB7 주식교육영상 ",
        videos.length,
        "개 \xB7 운영 상품 ",
        products.length,
        "개"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "muted", children: "전문가는 회원 개인정보를 볼 수 없습니다. 실제 운영에서는 API 권한 검증도 연결해야 합니다." })
    ] })
  ] });
}

// components/PointsWorkspace.tsx
var import_react16 = React;
var import_jsx_runtime15 = JSXRuntime;
var POINT_TYPES = ["지급", "차감", "충전", "쿠폰", "사용"];
function objectValue(value2) {
  return value2 !== null && typeof value2 === "object" && !Array.isArray(value2) ? value2 : null;
}
function text5(value2) {
  return typeof value2 === "string" ? value2.trim() : typeof value2 === "number" ? String(value2) : "";
}
function numberValue(value2, fallback = 0) {
  const n = typeof value2 === "number" ? value2 : Number(value2);
  return Number.isFinite(n) ? n : fallback;
}
function positiveBalance(value2) {
  return Math.max(0, Math.floor(numberValue(value2)));
}
function isPointType(value2) {
  return POINT_TYPES.includes(value2);
}
function recordsIn(source, domain) {
  const state = objectValue(source);
  const records = state?.[domain];
  if (!Array.isArray(records)) return [];
  return records.flatMap((value2) => {
    const row = objectValue(value2);
    const id = text5(row?.id);
    return row && id ? [{ ...row, id }] : [];
  });
}
function historyIn(value2, memberId) {
  if (!Array.isArray(value2)) return [];
  return value2.flatMap((item, index) => {
    const row = objectValue(item);
    if (!row) return [];
    const type = text5(row.type);
    const amount3 = numberValue(row.amount, Number.NaN);
    const date3 = text5(row.date);
    if (!isPointType(type) || !Number.isFinite(amount3) || !date3) return [];
    return [{ id: text5(row.id) || memberId + "-history-" + index, date: date3, type, amount: Math.trunc(amount3), reason: text5(row.reason) || "사유 미입력" }];
  });
}
function memberInfo(record2) {
  const row = objectValue(record2) ?? {};
  const id = text5(row.id);
  return { record: record2, id, loginId: text5(row.loginId) || id, name: text5(row.name) || "이름 미입력", nickname: text5(row.nickname) || "—", balance: positiveBalance(row.balance), pointHistory: historyIn(row.pointHistory, id) };
}
function chargeRow(record2, index) {
  const row = objectValue(record2) ?? {};
  const amount3 = numberValue(row.amount, 0);
  const bonus = numberValue(row.bonus, 0);
  const ratio = amount3 > 0 ? Math.max(0, Math.min(100, bonus / amount3 * 100)) : 0;
  return { key: text5(row.id) || "charge-" + index, source: record2, amount: amount3 > 0 ? String(Math.trunc(amount3)) : "", bonusRatio: String(Math.round(ratio * 10) / 10) };
}
function signedAmount(amount3) {
  return (amount3 > 0 ? "+" : "") + amount3.toLocaleString("ko-KR") + "P";
}
function displayDate(value2) {
  return value2.replace("T", " ").slice(0, 16);
}
function memberLabel(member) {
  return member.name + " (" + (member.loginId || member.id) + ")";
}
function ratioBonus(amount3, ratio) {
  const charge = numberValue(amount3, 0);
  const bonusRatio = numberValue(ratio, 0);
  return Number.isFinite(charge) && Number.isFinite(bonusRatio) && charge > 0 && bonusRatio >= 0 ? Math.floor(charge * bonusRatio / 100) : 0;
}
function FocusDialog({ label, onClose, children, className = "" }) {
  const dialogRef = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
    const timer = window.setTimeout(() => dialogRef.current?.querySelector("[data-dialog-focus],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled)")?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, []);
  function trapTab(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    const items = Array.from(event.currentTarget.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])')).filter((item) => !item.hasAttribute("hidden"));
    const first = items[0], last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "points-workspace__backdrop", role: "presentation", onMouseDown: (event) => {
    if (event.target === event.currentTarget) onClose();
  }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { ref: dialogRef, className: "points-workspace__dialog " + className, role: "dialog", "aria-modal": "true", "aria-label": label, onKeyDown: trapTab, children }) });
}
function PointsWorkspace({ store }) {
  const members = (0, import_react16.useMemo)(() => recordsIn(store.state.records, "members").map(memberInfo), [store.state.records]);
  const pointProducts = (0, import_react16.useMemo)(() => recordsIn(store.state.records, "points"), [store.state.records]);
  const histories = (0, import_react16.useMemo)(() => members.flatMap((member) => member.pointHistory.map((history) => ({ ...history, member }))).sort((a, b) => b.date.localeCompare(a.date, "ko")), [members]);
  const [typeFilter, setTypeFilter] = (0, import_react16.useState)("전체");
  const [searchInput, setSearchInput] = (0, import_react16.useState)("");
  const [query, setQuery] = (0, import_react16.useState)("");
  const [startDate, setStartDate] = (0, import_react16.useState)("");
  const [endDate, setEndDate] = (0, import_react16.useState)("");
  const [dateError, setDateError] = (0, import_react16.useState)("");
  const [perPage, setPerPage] = (0, import_react16.useState)(10);
  const [page, setPage] = (0, import_react16.useState)(1);
  const [adjustOpen, setAdjustOpen] = (0, import_react16.useState)(false);
  const [adjustStep, setAdjustStep] = (0, import_react16.useState)("form");
  const [adjustmentType, setAdjustmentType] = (0, import_react16.useState)("지급");
  const [memberQuery, setMemberQuery] = (0, import_react16.useState)("");
  const [selectedMemberId, setSelectedMemberId] = (0, import_react16.useState)("");
  const [adjustmentAmount, setAdjustmentAmount] = (0, import_react16.useState)("");
  const [adjustmentReason, setAdjustmentReason] = (0, import_react16.useState)("");
  const [adjustmentError, setAdjustmentError] = (0, import_react16.useState)("");
  const [settingsOpen, setSettingsOpen] = (0, import_react16.useState)(false);
  const [chargeRows, setChargeRows] = (0, import_react16.useState)([]);
  const [settingsError, setSettingsError] = (0, import_react16.useState)("");
  const filteredHistories = (0, import_react16.useMemo)(() => {
    const keyword = query.toLocaleLowerCase("ko-KR");
    return histories.filter((history) => {
      const searchable = [history.member.id, history.member.loginId, history.member.name, history.member.nickname].join(" ").toLocaleLowerCase("ko-KR");
      const day2 = history.date.slice(0, 10);
      return (typeFilter === "전체" || history.type === typeFilter) && (!keyword || searchable.includes(keyword)) && (!startDate || day2 >= startDate) && (!endDate || day2 <= endDate);
    });
  }, [histories, typeFilter, query, startDate, endDate]);
  const pageCount = Math.max(1, Math.ceil(filteredHistories.length / perPage));
  const currentPage = Math.min(page, pageCount);
  const visibleHistories = filteredHistories.slice((currentPage - 1) * perPage, currentPage * perPage);
  const selectedMember = members.find((member) => member.id === selectedMemberId) ?? null;
  const memberResults = (0, import_react16.useMemo)(() => {
    const keyword = memberQuery.trim().toLocaleLowerCase("ko-KR");
    return members.filter((member) => !keyword || [member.id, member.loginId, member.name, member.nickname].join(" ").toLocaleLowerCase("ko-KR").includes(keyword));
  }, [members, memberQuery]);
  const computedAdjustment = Number(adjustmentAmount);
  const adjustmentSigned = adjustmentType === "지급" ? computedAdjustment : -computedAdjustment;
  const projectedBalance = selectedMember && Number.isSafeInteger(computedAdjustment) && computedAdjustment >= 1 ? selectedMember.balance + adjustmentSigned : null;
  function resetFilters() {
    setTypeFilter("전체");
    setSearchInput("");
    setQuery("");
    setStartDate("");
    setEndDate("");
    setDateError("");
    setPage(1);
  }
  function searchHistory(event) {
    event.preventDefault();
    if (startDate && endDate && startDate > endDate) {
      setDateError("종료일은 시작일 이후로 선택해주세요.");
      return;
    }
    setDateError("");
    setQuery(searchInput.trim());
    setPage(1);
  }
  function exportHistory() {
    const head = ["일자", "회원 ID", "회원명", "닉네임", "구분", "금액", "사유"];
    const quote = (value2) => '"' + String(value2 ?? "").replace(/"/g, '""') + '"';
    const body = filteredHistories.map((history) => [displayDate(history.date), history.member.loginId || history.member.id, history.member.name, history.member.nickname, history.type, signedAmount(history.amount), history.reason].map(quote).join(","));
    downloadFile("포인트_이력_" + (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) + ".csv", [head.map(quote).join(","), ...body].join("\r\n"), "text/csv;charset=utf-8");
  }
  function openAdjustment(type) {
    setAdjustmentType(type);
    setMemberQuery("");
    setSelectedMemberId("");
    setAdjustmentAmount("");
    setAdjustmentReason("");
    setAdjustmentError("");
    setAdjustStep("form");
    setAdjustOpen(true);
  }
  function closeAdjustment() {
    setAdjustOpen(false);
    setAdjustStep("form");
    setAdjustmentError("");
  }
  function reviewAdjustment() {
    if (!selectedMember) {
      setAdjustmentError("포인트를 조정할 회원을 선택해주세요.");
      return;
    }
    if (!Number.isSafeInteger(computedAdjustment) || computedAdjustment < 1) {
      setAdjustmentError("금액은 1P 이상의 정수로 입력해주세요.");
      return;
    }
    if (!adjustmentReason.trim()) {
      setAdjustmentError("지급 또는 차감 사유를 입력해주세요.");
      return;
    }
    if (adjustmentType === "차감" && selectedMember.balance < computedAdjustment) {
      setAdjustmentError("보유 포인트보다 큰 금액은 차감할 수 없습니다.");
      return;
    }
    setAdjustmentError("");
    setAdjustStep("confirm");
  }
  function saveAdjustment() {
    if (!selectedMember || projectedBalance === null) return;
    const history = { id: uid(), date: (/* @__PURE__ */ new Date()).toISOString(), type: adjustmentType, amount: adjustmentSigned, reason: adjustmentReason.trim() };
    const updated = { ...selectedMember.record, balance: projectedBalance, freePoints: adjustmentType === "지급" ? numberValue(selectedMember.record.freePoints) + computedAdjustment : Math.max(0, numberValue(selectedMember.record.freePoints) - computedAdjustment), paidPoints: adjustmentType === "차감" ? Math.max(0, numberValue(selectedMember.record.paidPoints) - Math.max(0, computedAdjustment - numberValue(selectedMember.record.freePoints))) : numberValue(selectedMember.record.paidPoints), pointHistory: [...selectedMember.pointHistory, history] };
    store.save("members", updated);
    store.notify("포인트 " + adjustmentType + "을 저장했습니다. 이 화면은 실제 운영 시스템과 연결되어 있지 않습니다.");
    closeAdjustment();
  }
  function openSettings() {
    setChargeRows(pointProducts.map(chargeRow));
    setSettingsError("");
    setSettingsOpen(true);
  }
  function closeSettings() {
    setSettingsOpen(false);
    setSettingsError("");
  }
  function updateCharge(key, field, value2) {
    setChargeRows((rows) => rows.map((row) => row.key === key ? { ...row, [field]: value2 } : row));
    setSettingsError("");
  }
  function addCharge() {
    setChargeRows((rows) => [...rows, { key: "new-" + uid(), source: null, amount: "", bonusRatio: "0" }]);
  }
  function saveSettings() {
    if (!chargeRows.length) {
      setSettingsError("충전 상품을 최소 1개 이상 입력해주세요.");
      return;
    }
    const amounts = /* @__PURE__ */ new Set();
    for (const row of chargeRows) {
      const amount3 = Number(row.amount);
      const ratio = Number(row.bonusRatio);
      if (row.amount.trim() === "" || row.bonusRatio.trim() === "" || !Number.isSafeInteger(amount3) || amount3 <= 0 || !Number.isFinite(ratio) || ratio < 0 || ratio > 100) {
        setSettingsError("모든 행에 양수 충전금액과 0~100% 추가 지급률을 입력해주세요.");
        return;
      }
      if (amounts.has(amount3)) {
        setSettingsError("충전금액은 중복해서 입력할 수 없습니다.");
        return;
      }
      amounts.add(amount3);
    }
    const retainedIds = /* @__PURE__ */ new Set();
    chargeRows.forEach((row) => {
      const amount3 = Number(row.amount);
      const ratio = Number(row.bonusRatio);
      const source = row.source;
      const id = source?.id ?? uid();
      if (source) retainedIds.add(source.id);
      const product = { ...source ?? {}, id, title: amount3.toLocaleString("ko-KR") + "원 충전", amount: amount3, bonus: Math.floor(amount3 * ratio / 100), visible: source?.visible ?? "사용", memo: "추가 지급률 " + ratio + "% \xB7 로컬 확인용 설정" };
      store.save("points", product);
    });
    const removed = pointProducts.map((product) => product.id).filter((id) => !retainedIds.has(id));
    if (removed.length) store.remove("points", removed);
    store.notify("충전 설정을 저장했습니다. 이 화면은 실제 운영 시스템과 연결되어 있지 않습니다.");
    closeSettings();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "points-workspace", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "panel points-workspace__notice", "aria-label": "로컬 화면 안내", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: "로컬 확인용 화면" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "지급\xB7차감\xB7충전 설정은 현재 기기의 샘플 데이터에만 반영되며 실제 운영 시스템에는 적용되지 않습니다." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("section", { className: "panel filter-panel points-workspace__filter", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("form", { onSubmit: searchHistory, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "search-line", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { className: "search-input", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Search, { size: 21 }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { "aria-label": "회원 ID 또는 이름 검색", placeholder: "회원 ID 또는 이름을 입력하세요", value: searchInput, onChange: (event) => setSearchInput(event.target.value) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "submit", className: "primary", children: "검색" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", onClick: resetFilters, children: "초기화" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "points-workspace__filter-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
          "구분",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("select", { value: typeFilter, onChange: (event) => {
            setTypeFilter(event.target.value);
            setPage(1);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "전체", children: "전체" }),
            POINT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: type, children: type }, type))
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
          "시작일",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "date", value: startDate, onChange: (event) => {
            setStartDate(event.target.value);
            setDateError("");
            setPage(1);
          } })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
          "종료일",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "date", value: endDate, onChange: (event) => {
            setEndDate(event.target.value);
            setDateError("");
            setPage(1);
          } })
        ] })
      ] }),
      dateError && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "field-error", role: "alert", children: dateError })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "panel data-panel points-workspace__data", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "list-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { children: "포인트 이력" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "points-workspace__description", children: "회원의 보유 포인트 변동을 확인하고 필요한 경우 지급 또는 차감할 수 있습니다." }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "muted", children: [
            "전체 ",
            filteredHistories.length,
            "건",
            query ? " \xB7 “" + query + "” 검색 결과" : ""
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "list-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("button", { type: "button", onClick: openSettings, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Settings2, { size: 18 }),
            "충전 설정"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("button", { type: "button", onClick: exportHistory, disabled: !filteredHistories.length, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Download, { size: 18 }),
            "CSV 내보내기"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: "primary", onClick: () => openAdjustment("지급"), children: "포인트 지급" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: "points-workspace__deduct", onClick: () => openAdjustment("차감"), children: "포인트 차감" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "table-tools", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
        "한 페이지",
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("select", { "aria-label": "한 페이지 표시 수", value: perPage, onChange: (event) => {
          setPerPage(Number(event.target.value));
          setPage(1);
        }, children: [10, 20, 30, 50, 100].map((count) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("option", { value: count, children: [
          count,
          "개"
        ] }, count)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "table-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("table", { className: "points-workspace__table", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: "일자" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: "회원 ID" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: "회원명" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: "닉네임" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: "구분" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { className: "points-workspace__amount-head", children: "금액" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("th", { children: "사유" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tbody", { children: visibleHistories.map((history) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: displayDate(history.date) }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: history.member.loginId || history.member.id }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: history.member.name }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: history.member.nickname }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "points-workspace__type points-workspace__type--" + history.type, children: history.type }) }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { className: "points-workspace__amount " + (history.amount >= 0 ? "is-plus" : "is-minus"), children: signedAmount(history.amount) }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { className: "points-workspace__reason", children: history.reason })
          ] }, history.member.id + "-" + history.id)) })
        ] }),
        !visibleHistories.length && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "empty-state", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Search, { size: 28 }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { children: histories.length ? "조회 조건에 맞는 포인트 이력이 없습니다." : "입력된 포인트 이력이 없습니다." }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: histories.length ? "검색어 또는 기간\xB7구분을 바꿔보세요." : "회원 포인트를 지급하거나 차감하면 이력이 표시됩니다." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("footer", { className: "pagination", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
          filteredHistories.length ? (currentPage - 1) * perPage + 1 + "–" + Math.min(currentPage * perPage, filteredHistories.length) : "0",
          " / ",
          filteredHistories.length,
          "건"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", disabled: currentPage <= 1, onClick: () => setPage(currentPage - 1), children: "이전" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
            currentPage,
            " / ",
            pageCount
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", disabled: currentPage >= pageCount, onClick: () => setPage(currentPage + 1), children: "다음" })
        ] })
      ] })
    ] }),
    adjustOpen && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(FocusDialog, { label: adjustStep === "form" ? "회원 포인트 조정" : "포인트 조정 확인", onClose: closeAdjustment, className: "points-workspace__adjust-dialog", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("header", { className: "points-workspace__dialog-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: adjustStep === "form" ? "포인트 지급 또는 차감" : "저장 전 최종 확인" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { children: adjustStep === "form" ? "회원 포인트 조정" : "대상과 잔액을 확인하세요" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: "icon-button", "data-dialog-focus": true, "aria-label": "포인트 조정 창 닫기", onClick: closeAdjustment, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(X, { size: 22 }) })
      ] }),
      adjustStep === "form" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "points-workspace__dialog-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "points-workspace__description", children: "회원 검색 결과에서 한 명을 선택한 뒤 금액과 사유를 입력하세요." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("fieldset", { className: "points-workspace__choice-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("legend", { children: "처리 구분" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "radio", name: "point-adjustment-type", checked: adjustmentType === "지급", onChange: () => {
              setAdjustmentType("지급");
              setAdjustmentError("");
            } }),
            "지급"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "radio", name: "point-adjustment-type", checked: adjustmentType === "차감", onChange: () => {
              setAdjustmentType("차감");
              setAdjustmentError("");
            } }),
            "차감"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { className: "points-workspace__member-search", children: [
          "회원 검색",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { "aria-label": "조정할 회원 검색", placeholder: "회원 ID, 이름 또는 닉네임", value: memberQuery, onChange: (event) => setMemberQuery(event.target.value) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "points-workspace__member-results", "aria-label": "회원 검색 결과", children: memberResults.length ? memberResults.map((member) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("button", { type: "button", className: selectedMemberId === member.id ? "selected" : "", onClick: () => {
          setSelectedMemberId(member.id);
          setAdjustmentError("");
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { children: member.name }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("small", { children: [
              member.loginId || member.id,
              " \xB7 ",
              member.nickname
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
            member.balance.toLocaleString("ko-KR"),
            "P"
          ] })
        ] }, member.id)) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "검색 결과가 없습니다." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "points-workspace__form-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
            "금액 (P)",
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { type: "number", min: "1", step: "1", inputMode: "numeric", value: adjustmentAmount, onChange: (event) => {
              setAdjustmentAmount(event.target.value);
              setAdjustmentError("");
            }, placeholder: "1 이상 정수" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
            "사유",
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("textarea", { rows: 3, value: adjustmentReason, onChange: (event) => {
              setAdjustmentReason(event.target.value);
              setAdjustmentError("");
            }, placeholder: "예: 이벤트 참여 보상" })
          ] })
        ] }),
        adjustmentError && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "field-error", role: "alert", children: adjustmentError })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "points-workspace__dialog-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "points-workspace__description", children: "아래 내용으로 현재 기기의 샘플 데이터에만 저장됩니다." }),
        selectedMember && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("dl", { className: "points-workspace__confirmation", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dt", { children: "대상 회원" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("dd", { children: [
              memberLabel(selectedMember),
              " \xB7 ",
              selectedMember.nickname
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dt", { children: "처리 구분" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dd", { children: adjustmentType })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dt", { children: "변동 금액" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dd", { className: adjustmentSigned >= 0 ? "is-plus" : "is-minus", children: signedAmount(adjustmentSigned) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dt", { children: "보유 포인트" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("dd", { children: [
              selectedMember.balance.toLocaleString("ko-KR"),
              "P → ",
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("strong", { children: [
                (projectedBalance ?? selectedMember.balance).toLocaleString("ko-KR"),
                "P"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dt", { children: "사유" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("dd", { children: adjustmentReason })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("footer", { className: "points-workspace__dialog-actions", children: [
        adjustStep === "confirm" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", onClick: () => setAdjustStep("form"), children: "이전" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", onClick: closeAdjustment, children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: "primary", onClick: adjustStep === "form" ? reviewAdjustment : saveAdjustment, children: adjustStep === "form" ? "확인 화면 보기" : "저장" })
      ] })
    ] }),
    settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(FocusDialog, { label: "충전 설정", onClose: closeSettings, className: "points-workspace__settings-dialog", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("header", { className: "points-workspace__dialog-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "충전금액 상품" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { children: "충전 설정" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: "icon-button", "data-dialog-focus": true, "aria-label": "충전 설정 창 닫기", onClick: closeSettings, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(X, { size: 22 }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "points-workspace__dialog-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "points-workspace__description", children: "추가 지급 포인트는 충전금액 \xD7 지급률을 내림하여 자동 계산합니다. 0%도 저장할 수 있습니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "points-workspace__charge-list", children: chargeRows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "points-workspace__charge-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
            "충전금액",
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { "aria-label": "충전금액 " + (index + 1), type: "number", min: "1", step: "1", inputMode: "numeric", value: row.amount, onChange: (event) => updateCharge(row.key, "amount", event.target.value), placeholder: "예: 10000" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { children: [
            "추가 지급률 (%)",
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("input", { "aria-label": "추가 지급률 " + (index + 1), type: "number", min: "0", max: "100", step: "0.1", inputMode: "decimal", value: row.bonusRatio, onChange: (event) => updateCharge(row.key, "bonusRatio", event.target.value), placeholder: "0" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "자동 계산" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("strong", { children: [
              ratioBonus(row.amount, row.bonusRatio).toLocaleString("ko-KR"),
              "P"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: "icon-button", "aria-label": "충전 상품 " + (index + 1) + " 삭제", onClick: () => {
            setChargeRows((rows) => rows.filter((item) => item.key !== row.key));
            setSettingsError("");
          }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Trash2, { size: 18 }) })
        ] }, row.key)) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("button", { type: "button", onClick: addCharge, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Plus, { size: 18 }),
          "충전 상품 추가"
        ] }),
        settingsError && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "field-error", role: "alert", children: settingsError })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("footer", { className: "points-workspace__dialog-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", onClick: closeSettings, children: "취소" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: "primary", onClick: saveSettings, children: "저장" })
      ] })
    ] })
  ] });
}

// components/AnalyticsWorkspace.tsx
var import_react17 = React;
var import_jsx_runtime16 = JSXRuntime;
var dateOf = (r) => String(r.date ?? r.joined ?? "").slice(0, 10);
var number = (v) => Number.isFinite(Number(v)) ? Number(v) : 0;
var day = (date3) => `${date3.getFullYear()}-${String(date3.getMonth() + 1).padStart(2, "0")}-${String(date3.getDate()).padStart(2, "0")}`;
function AnalyticsWorkspace({ spec, store, onIpSettings }) {
  const [start, setStart] = (0, import_react17.useState)(""), [end, setEnd] = (0, import_react17.useState)(""), [applied, setApplied] = (0, import_react17.useState)({ start: "", end: "", query: "" }), [input, setInput] = (0, import_react17.useState)(""), [unit, setUnit] = (0, import_react17.useState)("일"), [group, setGroup] = (0, import_react17.useState)("전체"), [count, setCount] = (0, import_react17.useState)(10), [page, setPage] = (0, import_react17.useState)(1), [record2, setRecord] = (0, import_react17.useState)(null);
  const member = spec.domain === "members", visits = spec.domain === "visits", isTrend = spec.path.endsWith("/revenue") || spec.path.endsWith("/access"), admin = spec.path.endsWith("/admin-access-status");
  const items = store.state.records[spec.domain];
  const base = (0, import_react17.useMemo)(() => items.filter((r) => (!applied.start || dateOf(r) >= applied.start) && (!applied.end || dateOf(r) <= applied.end) && (!applied.query || [r.name, r.loginId, r.product, r.ip, r.path].join(" ").toLowerCase().includes(applied.query.toLowerCase())) && (!visits || isTrend || String(r.scope ?? "홈페이지") === (admin ? "관리자" : "홈페이지"))), [items, applied, visits, admin, isTrend]);
  const memberships = (r) => Array.isArray(r.services) ? r.services : [];
  const paid = (r) => String(r.group ?? "무료회원") !== "무료회원" || memberships(r).some((s) => s.status !== "환불");
  const matches = (r, g) => g === "전체" || (g === "무료가입" ? !paid(r) : g === "유료가입" ? paid(r) : r.group === g || memberships(r).some((s) => s.product === g));
  const filtered = member ? base.filter((r) => matches(r, group)) : base;
  const completed = base.filter((r) => r.status === "완료"), total = completed.reduce((n, r) => n + number(r.amount), 0);
  const aggregation = (0, import_react17.useMemo)(() => {
    const rows2 = /* @__PURE__ */ new Map();
    for (const r of visits ? base : completed) {
      const key = dateOf(r).slice(0, unit === "년" ? 4 : unit === "월" ? 7 : 10);
      if (!key) continue;
      const old = rows2.get(key) ?? { id: key, date: key, total: 0, card: 0, bank: 0, points: 0, count: 0, pc: 0, mobile: 0 };
      old.count = number(old.count) + 1;
      if (visits) {
        const k = r.device === "PC" ? "pc" : "mobile";
        old[k] = number(old[k]) + 1;
      } else {
        old.total = number(old.total) + number(r.amount);
        const k = r.method === "카드" ? "card" : r.method === "무통장입금" ? "bank" : "points";
        old[k] = number(old[k]) + number(r.amount);
      }
      rows2.set(key, old);
    }
    return [...rows2.values()].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }, [base, completed, unit, visits]);
  const rows = isTrend ? aggregation : filtered.slice().sort((a, b) => String(b.date ?? b.joined).localeCompare(String(a.date ?? a.joined)));
  const columns = isTrend ? visits ? [["date", "기간"], ["count", "접속수"], ["pc", "PC"], ["mobile", "모바일"]] : [["date", "기간"], ["count", "완료 결제수"], ["card", "카드 매출"], ["bank", "무통장 매출"], ["points", "포인트 사용"], ["total", "전체 합계"]] : member ? [["joined", "가입일"], ["loginId", "아이디"], ["name", "이름"], ["nickname", "닉네임"], ["phone", "연락처"], ["group", "이용 서비스"], ["end", "종료일"]] : visits ? [["loginId", "아이디"], ["name", "이름"], ["ip", "접속 IP"], ["path", "접속 경로"], ["browser", "브라우저"], ["device", "기기"], ["date", "접속 일시"]] : [["date", "결제일"], ["loginId", "아이디"], ["name", "이름"], ["product", "상품"], ["amount", "결제금액"], ["method", "결제수단"], ["status", "처리 상태"]];
  const max = Math.max(1, Math.ceil(rows.length / count)), current = Math.min(page, max), shown = rows.slice((current - 1) * count, current * count);
  function search(e) {
    e.preventDefault();
    if (start && end && start > end) {
      store.notify("종료일은 시작일 이후로 선택해주세요.");
      return;
    }
    setApplied({ start, end, query: input.trim() });
    setPage(1);
  }
  function preset(days) {
    const until = /* @__PURE__ */ new Date(), from = /* @__PURE__ */ new Date();
    from.setDate(until.getDate() - days + 1);
    const next = { start: day(from), end: day(until), query: input.trim() };
    setStart(next.start);
    setEnd(next.end);
    setApplied(next);
    setPage(1);
  }
  const summaries = member ? [["가입 회원", base.length + "명"], ["무료가입", base.filter((r) => !paid(r)).length + "명"], ["유료가입", base.filter(paid).length + "명"]] : visits ? [["총 접속수", base.length + "건"], ["접속 IP 수", new Set(base.map((r) => r.ip)).size + "개"], ["PC / 모바일", base.filter((r) => r.device === "PC").length + " / " + base.filter((r) => r.device !== "PC").length + "건"]] : [["완료 결제 합계", total.toLocaleString() + "원"], ["완료 결제", completed.length + "건"], ["입금대기", base.filter((r) => r.status === "입금대기").length + "건"]];
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: member ? "third-member-stats" : "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "panel analytics-filter second-search", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("form", { onSubmit: search, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "analytics-controls", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { children: [
          "시작일",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "date", "aria-label": "통계 시작일", value: start, onChange: (e) => setStart(e.target.value) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { children: [
          "종료일",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { type: "date", "aria-label": "통계 종료일", min: start || void 0, value: end, onChange: (e) => setEnd(e.target.value) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { children: [
          "검색어",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("input", { "aria-label": "통계 검색어", placeholder: visits ? "아이디, 이름 또는 IP" : "아이디, 이름 또는 상품", value: input, onChange: (e) => setInput(e.target.value) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", { className: "primary", type: "submit", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Search, { size: 19 }),
          "조회"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", onClick: () => {
          setStart("");
          setEnd("");
          setInput("");
          setApplied({ start: "", end: "", query: "" });
          setGroup("전체");
          setPage(1);
        }, children: "초기화" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "analytics-presets", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "빠른 조회" }),
        [[1, "오늘"], [7, "최근 7일"], [30, "최근 30일"]].map(([n, title]) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", onClick: () => preset(Number(n)), children: title }, n)),
        isTrend && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { children: [
          "집계 단위",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("select", { "aria-label": "집계 단위", value: unit, onChange: (e) => {
            setUnit(e.target.value);
            setPage(1);
          }, children: ["일", "월", "년"].map((v) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("option", { children: v }, v)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("section", { className: "summary-strip", children: summaries.map(([label, value2]) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { children: value2 })
    ] }, label)) }),
    member && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("nav", { className: "section-tabs analytics-tabs", "aria-label": "가입 회원 구분", children: ["전체", "무료가입", "유료가입", ...productNames].map((g) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", { type: "button", className: group === g ? "active" : "", onClick: () => {
      setGroup(g);
      setPage(1);
    }, children: [
      g,
      " (",
      base.filter((r) => matches(r, g)).length,
      ")"
    ] }, g)) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { className: "panel data-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "list-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { children: isTrend ? "기간별 집계" : spec.title }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "muted", children: [
            applied.start || "전체 기간",
            applied.end ? " ~ " + applied.end : "",
            " \xB7 ",
            rows.length,
            "건",
            !visits && !member ? " \xB7 완료된 결제만 매출 합계에 포함합니다." : ""
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "list-actions", children: [
          spec.path.endsWith("/access-status") && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", { type: "button", onClick: () => onIpSettings("blocked"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Shield, { size: 18 }),
              "IP 차단 설정"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", onClick: () => onIpSettings("allowed"), children: "관리자 접속 IP 설정" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("button", { type: "button", onClick: () => downloadFile(spec.title + ".csv", csv(rows, columns.map(([key, label]) => ({ key, label }))), "text/csv"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Download, { size: 18 }),
            "목록 저장"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "table-tools", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { children: [
        "한 페이지",
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("select", { "aria-label": "통계 표시수", value: count, onChange: (e) => {
          setCount(Number(e.target.value));
          setPage(1);
        }, children: [10, 20, 30, 50, 100].map((n) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("option", { value: n, children: [
          n,
          "개"
        ] }, n)) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "table-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("table", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("tr", { children: [
            columns.map(([k, title]) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("th", { children: title }, k)),
            !isTrend && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("th", { children: "상세" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tbody", { children: shown.map((r) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("tr", { children: [
            columns.map(([k]) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("td", { children: ["total", "card", "bank", "points"].includes(k) ? number(r[k]).toLocaleString() + "원" : member && k === "group" && (!r.group || r.group === "무료회원") ? "" : display(r[k], k) }, k)),
            !isTrend && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", onClick: () => setRecord(r), children: "상세" }) })
          ] }, r.id)) })
        ] }),
        !shown.length && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "empty-state", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { children: "조회 내역이 없습니다." }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { children: "기간이나 검색어를 바꿔보세요." })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("footer", { className: "pagination", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
          "전체 ",
          rows.length,
          "건"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", disabled: current <= 1, onClick: () => setPage(current - 1), children: "이전" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
            current,
            " / ",
            max
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", disabled: current >= max, onClick: () => setPage(current + 1), children: "다음" })
        ] })
      ] })
    ] }),
    record2 && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RecordEditor, { spec, record: record2, readonly: true, onClose: () => setRecord(null), onSave: () => {
    } })
  ] });
}

// components/AnalyticsOverview.tsx
var import_react18 = React;
var import_jsx_runtime17 = JSXRuntime;
var date2 = (r, k = "date") => String(r[k] ?? "").slice(0, 10);
var money2 = (n) => n.toLocaleString() + "원";
function AnalyticsOverview({ spec, store }) {
  const [start, setStart] = (0, import_react18.useState)(""), [end, setEnd] = (0, import_react18.useState)(""), [range, setRange] = (0, import_react18.useState)({ start: "", end: "" });
  const conversion = spec.path.endsWith("/access");
  const inside = (s) => Boolean(s) && (!range.start || s >= range.start) && (!range.end || s <= range.end);
  const payments = store.state.records.payments.filter((p) => ["완료", "부분환불", "환불완료"].includes(String(p.status)) && inside(date2(p))), members = store.state.records.members.filter((m) => inside(date2(m, "joined")));
  const firstPaid = /* @__PURE__ */ new Map();
  for (const p of store.state.records.payments.filter((p2) => ["완료", "부분환불", "환불완료"].includes(String(p2.status)))) {
    const id = String(p.loginId), old = firstPaid.get(id);
    if (!old || date2(p) < old) firstPaid.set(id, date2(p));
  }
  const paid = [...firstPaid].filter(([, d]) => inside(d));
  const total = payments.reduce((n, p) => n + Number(p.amount ?? 0), 0);
  const trend = (0, import_react18.useMemo)(() => {
    const data = /* @__PURE__ */ new Map();
    const ensure = (d) => {
      if (!data.has(d)) data.set(d, { id: d, date: d, joined: 0, free: 0, paid: 0, ratio: "0%" });
      return data.get(d);
    };
    for (const m of members) {
      const r = ensure(date2(m, "joined"));
      r.joined++;
      if (!firstPaid.has(String(m.loginId))) r.free++;
    }
    for (const [, d] of paid) ensure(d).paid++;
    return [...data.values()].sort((a, b) => a.date.localeCompare(b.date)).map((r) => ({ ...r, ratio: r.joined ? Math.round(r.paid / r.joined * 100) + "%" : "—" }));
  }, [store.state, range]);
  const groupRevenue = (key) => {
    const data = /* @__PURE__ */ new Map();
    for (const p of payments) {
      const k = key(p);
      data.set(k, (data.get(k) ?? 0) + Number(p.amount));
    }
    return [...data].sort((a, b) => b[1] - a[1]);
  };
  const product = groupRevenue((p) => String(p.product)), experts = groupRevenue((p) => String(store.state.records.products.find((x) => x.title === p.product)?.expert ?? p.expert ?? "미분류"));
  const maximum = Math.max(1, ...product.map(([, v]) => v));
  function search(e) {
    e.preventDefault();
    if (start && end && start > end) {
      store.notify("종료일은 시작일 이후로 선택해주세요.");
      return;
    }
    setRange({ start, end });
  }
  const revenue = summarizeRevenue(filterRevenue(revenueEvents(store.state), { ...range, expert: "전체", query: "" }), { ...range, expert: "전체", query: "", taxMode: "미설정", taxRate: 10, commissionRate: "", commissionBase: "미설정" });
  const gross = revenue.reduce((n, r) => n + r.gross, 0), refund = revenue.reduce((n, r) => n + r.refund, 0);
  const labels = conversion ? [["신규가입", members.length + "명"], ["무료가입", members.filter((m) => !firstPaid.has(String(m.loginId))).length + "명"], ["유료전환", paid.length + "명"], ["유료전환율", members.length ? Math.round(paid.length / members.length * 100) + "%" : "—"]] : [["결제액", money2(gross)], ["완료 환불액", money2(refund)], ["환불 차감 후 금액", money2(gross - refund)], ["신규가입", members.length + "명"]];
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: conversion ? "third-access-overview" : "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { className: "panel analytics-filter", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("form", { onSubmit: search, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "analytics-controls", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("label", { children: [
        "시작일",
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { "aria-label": "종합 통계 시작일", type: "date", value: start, onChange: (e) => setStart(e.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("label", { children: [
        "종료일",
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("input", { "aria-label": "종합 통계 종료일", type: "date", min: start || void 0, value: end, onChange: (e) => setEnd(e.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { className: "primary", type: "submit", children: "조회" }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { type: "button", onClick: () => {
        setStart("");
        setEnd("");
        setRange({ start: "", end: "" });
      }, children: "전체 기간" })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("section", { className: "summary-strip analytics-four", children: labels.map(([label, value2]) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: value2 })
    ] }, label)) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "scope-note", children: "가상 데이터 기준입니다. 유료전환은 회원의 첫 완료 결제일로 집계한 예시이며, 실제 운영의 전환율 산식은 연결 시 확인해야 합니다." }),
    !conversion && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "analytics-overview-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { children: "상품별 결제액" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "muted", children: "환불 차감 전 결제액입니다. 포인트 사용액도 포함되며 현금 기준 매출\xB7환불은 정산 화면에서 확인하세요." }),
        product.map(([label, value2]) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "revenue-bar-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: money2(value2) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "revenue-bar-track", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { style: { width: value2 / maximum * 100 + "%" } }) })
        ] }, label)),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "muted", children: [
          "주식교육영상 매출: ",
          money2(payments.filter((p) => !store.state.records.products.some((x) => x.title === p.product)).reduce((n, p) => n + Number(p.amount), 0))
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { children: "전문가별 결제 \xB7 환불" }),
        revenue.map((r) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "info-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { children: r.expert }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { children: [
            "결제 ",
            money2(r.gross),
            " \xB7 환불 ",
            money2(r.refund),
            " \xB7 순액 ",
            money2(r.net)
          ] })
        ] }, r.id))
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "panel data-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "list-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { children: "가입 및 유료전환 추이" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { onClick: () => downloadFile("가입전환추이.csv", csv(trend, [{ key: "date", label: "날짜" }, { key: "joined", label: "신규가입" }, { key: "free", label: "무료가입" }, { key: "paid", label: "유료전환" }, { key: "ratio", label: "전환율" }]), "text/csv"), children: "목록 저장" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "table-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("table", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "날짜" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "신규가입" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "무료가입" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "유료전환" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "전환율" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { children: trend.map((r) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: r.date }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("td", { children: [
              r.joined,
              "명"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("td", { children: [
              r.free,
              "명"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("td", { children: [
              r.paid,
              "명"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: r.ratio })
          ] }, r.id)) })
        ] }),
        !trend.length && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "empty-copy", children: "조회 내역이 없습니다." })
      ] })
    ] }),
    !conversion && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "analytics-overview-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { children: "완료 결제 내역" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("table", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "회원" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "상품" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "결제수단" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "금액" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "결제일" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { children: payments.slice(0, 10).map((p) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: String(p.name) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: String(p.product) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: String(p.method) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: money2(Number(p.amount)) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: date2(p) })
          ] }, p.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "panel", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { children: "신규 가입 회원" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("table", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "아이디" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "이름" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "구분" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("th", { children: "가입일" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("tbody", { children: members.slice(0, 10).map((m) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: String(m.loginId) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: String(m.name) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: firstPaid.has(String(m.loginId)) ? "유료" : "무료" }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("td", { children: date2(m, "joined") })
          ] }, m.id)) })
        ] }) })
      ] })
    ] })
  ] });
}

// components/IpSettings.tsx
var import_react19 = React;
var import_jsx_runtime18 = JSXRuntime;
function IpSettings({ store, type, onClose }) {
  const title = type === "blocked" ? "IP 차단 설정" : "관리자 접속 IP 설정", record2 = store.state.records.general.find((r) => r.id === "site");
  const [foreign, setForeign] = (0, import_react19.useState)(Boolean(record2?.foreignIpBlocked));
  const [items, setItems] = (0, import_react19.useState)(() => Array.isArray(record2?.[type + "Ips"]) ? record2?.[type + "Ips"] : []), [error, setError] = (0, import_react19.useState)(""), [dirty, setDirty] = (0, import_react19.useState)(false);
  const ref = (0, import_react19.useRef)(null);
  (0, import_react19.useEffect)(() => {
    ref.current?.focus();
  }, []);
  function valid(value2) {
    const [ip, prefix] = value2.trim().split("/");
    if (prefix !== void 0 && (type !== "allowed" || !/^\d+$/.test(prefix) || Number(prefix) > (ip.includes(":") ? 128 : 32))) return false;
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) return ip.split(".").every((x) => Number(x) <= 255);
    if (!/^[0-9a-f:]+$/i.test(ip) || !ip.includes(":")) return false;
    try {
      return Boolean(new URL("http://[" + ip + "]/").hostname);
    } catch {
      return false;
    }
  }
  function close() {
    if (dirty && !window.confirm("저장하지 않고 닫을까요?")) return;
    onClose();
  }
  function save() {
    if (items.some((x) => !valid(x.ip))) {
      setError("올바른 IP 주소 또는 허용 CIDR를 입력해주세요.");
      return;
    }
    if (new Set(items.map((x) => x.ip.trim().toLowerCase())).size !== items.length) {
      setError("같은 IP 주소는 한 번만 입력해주세요.");
      return;
    }
    store.save("general", { ...record2 ?? { id: "site" }, foreignIpBlocked: foreign, [type + "Ips"]: items.map((x) => ({ ...x, ip: x.ip.trim() })) });
    onClose();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "info-dialog ip-settings", role: "dialog", "aria-modal": "true", "aria-labelledby": "ip-settings-title", onKeyDown: (e) => {
    if (e.key === "Escape") close();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "panel-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { id: "ip-settings-title", tabIndex: -1, ref, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "icon-button", "aria-label": "IP 설정 닫기", onClick: close, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(X, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: type === "blocked" ? "홈페이지 접속을 차단할 IP 주소를 등록합니다." : "관리자 접속을 허용할 IP 주소를 등록합니다." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "muted", children: "가상 데이터에만 저장합니다. 실제 접속 제한\xB7권한은 적용하지 않습니다." }),
    type === "blocked" && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("label", { className: "toggle-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "checkbox", checked: foreign, onChange: (e) => {
        setForeign(e.target.checked);
        setDirty(true);
      } }),
      "해외 IP 차단"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "ip-list", children: items.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "ip-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("label", { children: [
        "IP 주소",
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { "aria-label": "IP 주소 " + (i + 1), value: x.ip, placeholder: type === "allowed" ? "192.0.2.0/24" : "192.0.2.1", onChange: (e) => {
          setItems(items.map((y) => y.id === x.id ? { ...y, ip: e.target.value } : y));
          setDirty(true);
          setError("");
        } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("label", { children: [
        "메모",
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { "aria-label": "IP 메모 " + (i + 1), value: x.memo, onChange: (e) => {
          setItems(items.map((y) => y.id === x.id ? { ...y, memo: e.target.value } : y));
          setDirty(true);
        } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "icon-button danger", "aria-label": "IP " + (i + 1) + " 삭제", onClick: () => {
        setItems(items.filter((y) => y.id !== x.id));
        setDirty(true);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Trash2, { size: 20 }) })
    ] }, x.id)) }),
    !items.length && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "empty-copy", children: "등록한 IP 주소가 없습니다." }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("button", { onClick: () => {
      setItems([...items, { id: uid(), ip: "", memo: "" }]);
      setDirty(true);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Plus, { size: 20 }),
      "IP 추가"
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "field-error", role: "alert", children: error }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "dialog-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { onClick: close, children: "취소" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("button", { className: "primary", onClick: save, children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Save, { size: 20 }),
        "설정 저장"
      ] })
    ] })
  ] }) });
}

// components/AdminApp.tsx
var import_jsx_runtime19 = JSXRuntime;
var icons = { Users, CreditCard, Crown, FileText, PanelsTopLeft, Gift, MessageSquare, ChartColumn, Settings };
var now = () => (/* @__PURE__ */ new Date()).toISOString();
function AdminApp({ initialPath: initialPath2 = "/dashboard", initialData, onStateChange, sessionUser }) {
  const [path, setPath] = (0, import_react20.useState)(initialPath2), [state, setState] = (0, import_react20.useState)(() => initialData || initialState()), [opened, setOpened] = (0, import_react20.useState)(pages.find((p) => p.path === initialPath2)?.group ?? null), [search, setSearch] = (0, import_react20.useState)(""), [mobile, setMobile] = (0, import_react20.useState)(false), [scale, setScale] = (0, import_react20.useState)(18), [toast, setToast] = (0, import_react20.useState)(""), [help, setHelp] = (0, import_react20.useState)(false), [history, setHistory] = (0, import_react20.useState)(false), [backup, setBackup] = (0, import_react20.useState)(false), [loaded, setLoaded] = (0, import_react20.useState)(false);
  const [dashboardMode, setDashboardMode] = (0, import_react20.useState)(sessionUser?.role === "expert" || initialPath2 === "/dashboard/expert" ? "expert" : "admin"), [chosenExpert, setChosenExpert] = (0, import_react20.useState)(sessionUser?.expert || "골드마스터");
  const [ipSettings, setIpSettings] = (0, import_react20.useState)(null);
  const active = pages.find((p) => p.path === path), group = groups.find((g) => g.id === active?.group);
  const [storageError, setStorageError] = (0, import_react20.useState)(false);
  (0, import_react20.useEffect)(() => {
    try {
      const font = Number(localStorage.getItem(STORAGE_KEY + "-font"));
      if ([18, 20, 22].includes(font)) setScale(font);
    } catch {
      setStorageError(true);
    }
    setLoaded(true);
    const sync = () => {
      const h = decodeURIComponent(location.hash.slice(1));
      const next = pages.some((p) => p.path === h) ? h : ["/dashboard", "/dashboard/expert"].includes(h) ? h : initialPath2;
      if (next === "/dashboard/expert") setDashboardMode("expert");
      setPath(next);
      setOpened(pages.find((p) => p.path === next)?.group ?? null);
      setMobile(false);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [initialPath2]);
  (0, import_react20.useEffect)(() => {
    if (!loaded) return;
    onStateChange?.(state);
  }, [state, loaded]);
  (0, import_react20.useEffect)(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 5500);
    return () => clearTimeout(id);
  }, [toast]);
  (0, import_react20.useEffect)(() => {
    document.title = (active?.title ?? (dashboardMode === "expert" ? chosenExpert + " 전문가 대시보드" : "기본 관리자 대시보드")) + " | 윌클럽 관리자";
  }, [active, dashboardMode, chosenExpert]);
  function navigate(next) {
    if (path === next) return;
    location.hash = next;
    setMobile(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function log(action, domain, target) {
    return { id: uid(), date: now(), action, domain, target };
  }
  const store = { state, canUpload: sessionUser?.role === "admin", confirmBank: (id) => {
    if (dashboardMode === "expert") {
      setToast("접근 권한이 없습니다.");
      return;
    }
    const payment = state.records.payments.find((p) => p.id === id);
    if (!payment || !bankPreview(state, payment).member || !bankPreview(state, payment).product) {
      setToast("결제 회원\xB7상품을 확인해주세요.");
      return;
    }
    setState((s) => confirmBank(s, id));
    setToast("입금 확인과 회원 서비스 적용을 완료했습니다. 가상 데이터만 변경됩니다.");
  }, notify: setToast, save: (domain, row) => {
    if (dashboardMode === "expert" && !expertCanEdit(domain, row, chosenExpert)) {
      setToast("접근 권한이 없습니다.");
      return;
    }
    if (domain === "coupons" && row.code && state.records.coupons.some((x) => x.id !== row.id && String(x.code).toUpperCase() === String(row.code).toUpperCase())) {
      setToast("이미 등록한 쿠폰번호입니다. 다른 번호로 입력해주세요.");
      return;
    }
    row = { ...row };
    delete row.password;
    if (domain === "members") {
      row = { ...row, balance: Number(row.paidPoints ?? row.balance ?? 0) + Number(row.freePoints ?? 0) };
      delete row.password;
    }
    setState((s) => {
      const old = s.records[domain].find((r) => r.id === row.id);
      return { ...s, records: { ...s.records, [domain]: old ? s.records[domain].map((r) => r.id === row.id ? row : r) : [row, ...s.records[domain]] }, logs: [log(old ? "수정" : "등록", domain, String(row.title ?? row.name ?? row.loginId ?? row.id)), ...s.logs].slice(0, 500) };
    });
    setToast("저장했습니다. 서버 저장 요청을 처리합니다.");
  }, remove: (domain, ids) => {
    if (dashboardMode === "expert" && !state.records[domain].filter((r) => ids.includes(r.id)).every((r) => expertCanEdit(domain, r, chosenExpert))) {
      setToast("접근 권한이 없습니다.");
      return;
    }
    setState((s) => ({ ...s, records: { ...s.records, [domain]: s.records[domain].filter((r) => !ids.includes(r.id)) }, logs: [log("삭제", domain, ids.length + "개 항목"), ...s.logs].slice(0, 500) }));
    setToast("선택한 항목을 삭제했습니다.");
  }, updateMany: (domain, ids, patch, action) => {
    if (dashboardMode === "expert" && !state.records[domain].filter((r) => ids.includes(r.id)).every((r) => expertCanEdit(domain, { ...r, ...patch }, chosenExpert))) {
      setToast("접근 권한이 없습니다.");
      return;
    }
    setState((s) => ({ ...s, records: { ...s.records, [domain]: s.records[domain].map((r) => ids.includes(r.id) ? { ...r, ...patch } : r) }, logs: [log(action, domain, ids.length + "개 항목"), ...s.logs].slice(0, 500) }));
    setToast(action + " 처리가 완료되었습니다. 실제 운영 시스템은 변경되지 않습니다.");
  } };
  const allowedPages = dashboardMode === "expert" ? pages.filter((p) => expertCanView(p, chosenExpert, state)) : pages;
  const denied = dashboardMode === "expert" && !!active && !expertCanView(active, chosenExpert, state);
  const visibleGroups = groups.filter((g) => allowedPages.some((p) => p.group === g.id && !p.navHidden));
  const navResults = (0, import_react20.useMemo)(() => search.trim() ? allowedPages.filter((p) => !p.navHidden).filter((p) => (p.title + " " + p.description).includes(search.trim())) : [], [search, dashboardMode, chosenExpert]);
  const waiting = state.records.payments.filter((r) => r.status === "입금대기").length;
  const today2 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const soon = state.records.members.filter((r) => r.status === "정상" && r.end && String(r.end) >= today2 && (new Date(String(r.end)).getTime() - new Date(today2).getTime()) / 864e5 <= 7).length;
  const revenue = state.records.payments.filter((r) => r.status === "완료").reduce((n, r) => n + Number(r.amount ?? 0), 0);
  function restore(file) {
    if (dashboardMode === "expert" || !file) return;
    if (file.size > 10 * 1024 * 1024) {
      setToast("백업 파일은 10MB 이하로 선택해주세요.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(String(reader.result).replace(/^﻿/, ""));
        if (!validateState(json)) throw Error();
        if (!window.confirm("현재 기기의 데이터를 이 백업으로 바꿀까요? 운영 사이트는 변경하지 않습니다.")) return;
        setState(json);
        setToast("백업 데이터를 불러왔습니다.");
        setBackup(false);
      } catch {
        setToast("올바른 윌클럽 관리자 백업(JSON) 파일을 선택해주세요.");
      }
    };
    reader.readAsText(file);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "admin-app", style: { "--body-size": scale + "px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { className: "skip-link", href: "#main-content", children: "본문으로 이동" }),
    mobile && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "sidebar-overlay", "aria-label": "메뉴 닫기", onClick: () => setMobile(false) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("aside", { className: "sidebar" + (mobile ? " open" : ""), "aria-label": "관리자 업무 메뉴", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { src: adminAssets?.["/logo.png"] ?? "./assets/logo.png", alt: "WILLCLUB" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "운영 관리" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "mobile-close icon-button", "aria-label": "메뉴 닫기", onClick: () => setMobile(false), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(X, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "nav-search", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Search, { size: 18 }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { "aria-label": "메뉴 찾기", value: search, placeholder: "메뉴 찾기", onChange: (e) => setSearch(e.target.value) })
      ] }),
      search ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("nav", { className: "nav-results", children: navResults.length ? navResults.map((p) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("a", { href: "#" + p.path, onClick: () => {
        setSearch("");
        setMobile(false);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: p.title }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ChevronRight, { size: 16 })
      ] }, p.path)) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "찾는 메뉴가 없습니다." }) }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("nav", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("a", { className: "dashboard-nav" + (!active ? " selected" : ""), href: dashboardMode === "expert" ? "#/dashboard/expert" : "#/dashboard", "aria-current": !active ? "page" : void 0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(LayoutDashboard, { size: 22 }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "운영 대시보드" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "nav-caption", children: "업무 메뉴" }),
        visibleGroups.map((g) => {
          const Icon2 = icons[g.icon];
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "nav-group", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", className: (group?.id === g.id ? " current" : "") + (opened === g.id ? " expanded" : ""), onClick: () => setOpened(opened === g.id ? null : g.id), "aria-expanded": opened === g.id, children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Icon2, { size: 22 }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: g.title }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ChevronRight, { size: 17 })
            ] }),
            opened === g.id && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "subnav", children: allowedPages.filter((p) => p.group === g.id && !p.navHidden).map((p) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { href: "#" + p.path, className: path === p.path ? "selected" : "", "aria-current": path === p.path ? "page" : void 0, onClick: () => setMobile(false), children: p.title }, p.path)) })
          ] }, g.id);
        })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "sidebar-bottom", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { type: "button", onClick: () => setHelp(true), children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CircleHelp, { size: 21 }),
          "사용 방법"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "account", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "avatar", children: "운" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: dashboardMode === "expert" ? chosenExpert : "운영 관리자" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("small", { children: "디자인 확인용 로컬 화면" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "main-shell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("header", { className: "topbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "mobile-menu icon-button", "aria-label": "업무 메뉴 열기", onClick: () => setMobile(true), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Menu, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "breadcrumb", children: [
            "윌클럽 관리자 ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ChevronRight, { size: 16 }),
            group?.title ?? "운영 대시보드"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "topbar-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { className: "font-control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "화면 유형" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("select", { "aria-label": "대시보드 유형", value: dashboardMode, onChange: (e) => {
              setDashboardMode(sessionUser?.role === "expert" ? "expert" : e.target.value);
              setHistory(false);
              setBackup(false);
              setIpSettings(null);
              navigate(e.target.value === "expert" ? "/dashboard/expert" : "/dashboard");
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "admin", children: "기본 관리자형" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: "expert", children: "전문가형" })
            ] })
          ] }),
          dashboardMode === "expert" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { className: "font-control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "전문가" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("select", { "aria-label": "대시보드 전문가", value: chosenExpert, onChange: (e) => setChosenExpert(e.target.value), children: state.records.experts.map((e) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { children: String(e.nickname ?? e.name) }, e.id)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { className: "font-control", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Type, { size: 18 }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "글자 크기" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("select", { "aria-label": "글자 크기", value: scale, onChange: (e) => {
              const n = Number(e.target.value);
              setScale(n);
              try {
                localStorage.setItem(STORAGE_KEY + "-font", String(n));
              } catch {
              }
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: 18, children: "기본" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: 20, children: "크게" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("option", { value: 22, children: "더 크게" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "text-button help-top", type: "button", onClick: () => setHelp(true), children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CircleHelp, { size: 20 }),
            "도움말"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("main", { id: "main-content", children: [
 R.h("div",{className:"r-version-banner"},R.h("span",null,"수정 시안 V8 · 2026.10.12 · 모든 수치는 예시 데이터"),R.h("a",{href:(location.pathname.includes("/페이지별/") || decodeURI(location.pathname).includes("/페이지별/")) ? "../전체보기.html" : "전체보기.html",target:"_blank"},"퍼블리셔 전달 가이드")),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "page-heading", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "eyebrow", children: group?.title ?? "한눈에 보는 윌클럽 운영" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { children: active?.title ?? (dashboardMode === "expert" ? chosenExpert + " 전문가 대시보드" : "기본 관리자 대시보드") }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "page-description", children: active?.description ?? (dashboardMode === "expert" ? "내 콘텐츠와 월별 매출 현황을 확인하세요." : "전체 회원과 결제\xB7환불 현황을 확인하세요.") })
          ] }),
          (active?.path.startsWith("/admin/staff/") && active.path !== "/admin/staff/signup") && R.h("a",{href:"#/admin/staff/signup",className:"r-secondary r-signup-entry"},"회원가입 시안 보기"), active && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "text-button back-dashboard", type: "button", onClick: () => navigate(dashboardMode === "expert" ? "/dashboard/expert" : "/dashboard"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ArrowLeft, { size: 18 }),
            "대시보드"
          ] })
        ] }),
        storageError && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "notice-warning", role: "alert", children: "현재 브라우저에 저장할 수 없습니다. 편집 후 ‘데이터 백업’으로 내려받아 보관하세요." }),
        denied ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "panel access-denied", role: "alert", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "접근할 수 없는 화면입니다." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "전문가는 회원정보를 조회할 수 없습니다. 내 콘텐츠와 월별 매출만 확인할 수 있습니다." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", className: "primary", onClick: () => navigate("/dashboard/expert"), children: "전문가 대시보드로" })
        ] }) : active && RHasPage(active) ? RRenderPage(active, store, dashboardMode === "expert" ? chosenExpert : void 0, setIpSettings) : active ? active.path === "/admin/analytics/revenue" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MonthlyRevenueWorkspace, { store, fixedExpert: dashboardMode === "expert" ? chosenExpert : void 0 }, path + chosenExpert + dashboardMode) : active.domain === "coupons" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CouponWorkspace, { store }) : active.path.startsWith("/admin/staff/") ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(StaffWorkspace, { store, initialExpert: active.path.endsWith("/experts") }, path) : active.domain === "members" && active.type !== "analytics" && !["/admin/members/expired", "/admin/members/inactive", "/admin/members/withdrawn"].includes(active.path) ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MemberListWorkspace, { spec: active, store }, path) : active.path === "/admin/analytics/all" || active.path === "/admin/analytics/access" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AnalyticsOverview, { spec: active, store }, path) : active.type === "analytics" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AnalyticsWorkspace, { spec: active, store, onIpSettings: setIpSettings }, path) : active.domain === "points" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PointsWorkspace, { store }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DataWorkspace, { spec: active, store }, path) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(RoleDashboard, { store, expert: dashboardMode === "expert" ? chosenExpert : void 0, onNavigate: navigate }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("footer", { className: "workspace-footer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "WILLCLUB \xB7 운영 관리" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: dashboardMode !== "expert" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "text-button", type: "button", onClick: () => setHistory(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(History, { size: 17 }),
              "변경 기록"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "text-button", type: "button", onClick: () => setBackup(true), children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Download, { size: 17 }),
              "데이터 백업"
            ] })
          ] }) })
        ] })
      ] })
    ] }),
    ipSettings && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IpSettings, { type: ipSettings, store, onClose: () => setIpSettings(null) }),
    toast && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "toast", role: "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CircleCheck, { size: 22 }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: toast }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "icon-button", "aria-label": "알림 닫기", onClick: () => setToast(""), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(X, { size: 18 }) })
    ] }),
    (help || dashboardMode !== "expert" && (history || backup)) && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "dialog-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "info-dialog", role: "dialog", "aria-modal": "true", "aria-label": help ? "사용 방법" : history ? "변경 기록" : "데이터 백업", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "panel-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: help ? "사용 방법" : history ? "변경 기록" : "데이터 백업" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "icon-button", "aria-label": "닫기", onClick: () => {
          setHelp(false);
          setHistory(false);
          setBackup(false);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(X, {}) })
      ] }),
      help ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "왼쪽에서 업무를 선택하고 이름이나 제목을 눌러 상세 내용을 확인하세요." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ol", { className: "help-steps", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "찾기" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "검색어를 입력하고 검색 버튼을 누르세요. 자세한 조건은 ‘조회 조건 설정’에서 고를 수 있습니다." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "수정하고 저장" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "내용을 바꾼 뒤 아래의 저장 버튼을 누르세요. 변경 전 상태로 돌아가려면 취소를 누르세요." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: "글자를 크게" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "상단 ‘글자 크기’에서 크게 또는 더 크게를 선택하세요." })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "scope-note", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ShieldCheck, { size: 24 }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "이 파일은 가상 데이터로 동작하는 독립 관리자 화면입니다. 실제 회원\xB7결제\xB7문자\xB7권한\xB7운영 사이트에는 연결되어 있지 않습니다. 로그인이나 API 연동은 개발자가 별도로 연결해야 합니다." })
        ] })
      ] }) : history ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "history-list", children: state.logs.length ? state.logs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "log-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("strong", { children: l.action }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: l.target }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("small", { children: l.date.replace("T", " ").slice(0, 16) })
      ] }, l.id)) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "아직 변경 기록이 없습니다." }) }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "현재 기기의 가상 데이터를 JSON 파일로 보관하거나 다시 불러옵니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "backup-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("button", { className: "primary", type: "button", onClick: () => downloadFile("윌클럽_관리자_백업.json", JSON.stringify(state, null, 2)), children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Download, { size: 20 }),
            "백업 내려받기"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { className: "upload-button", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Upload, { size: 20 }),
            "백업 불러오기",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("input", { type: "file", accept: "application/json,.json", onChange: (e) => restore(e.target.files?.[0]) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "muted", children: "실제 개인정보\xB7운영 비밀정보를 이 파일에 입력하지 마세요. 브라우저의 저장 공간에는 암호화 없이 저장됩니다." }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("details", { className: "danger-zone", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("summary", { children: "샘플 데이터 초기화" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "현재 기기에 저장한 변경사항이 모두 사라집니다. 백업 후 진행하세요." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "danger", type: "button", onClick: () => {
            if (window.confirm("가상 데이터를 초기 샘플로 되돌릴까요? 저장한 로컬 변경사항이 사라집니다.")) {
              setState(initialState());
              setBackup(false);
              setToast("초기 샘플로 되돌렸습니다.");
            }
          }, children: "초기 샘플로 되돌리기" })
        ] })
      ] })
    ] }) })
  ] });
}

var R = {
h: import_react20.createElement,
Fragment: import_react20.Fragment,
useState: import_react20.useState,
useEffect: import_react20.useEffect,
useMemo: import_react20.useMemo,
money: (value) => new Intl.NumberFormat("ko-KR").format(Number(value) || 0) + "\uC6D0",
num: (value) => new Intl.NumberFormat("ko-KR").format(Number(value) || 0),
text: (value) => value == null ? "" : String(value),
Panel: function({ title, subtitle, actions, children, className = "" }) {
  return /* @__PURE__ */ R.h("section", { className: "r-panel " + className }, /* @__PURE__ */ R.h("div", { className: "r-panel-head" }, /* @__PURE__ */ R.h("div", null, title && /* @__PURE__ */ R.h("h2", null, title), subtitle && /* @__PURE__ */ R.h("p", { className: "r-muted" }, subtitle)), actions && /* @__PURE__ */ R.h("div", { className: "r-actions" }, actions)), /* @__PURE__ */ R.h("div", { className: "r-panel-body" }, children));
},
Field: function({ label, hint, children, className = "" }) {
  return /* @__PURE__ */ R.h("label", { className: "r-field " + className }, /* @__PURE__ */ R.h("span", { className: "r-field-label" }, label), children, hint && /* @__PURE__ */ R.h("small", null, hint));
},
Table: function({ headers, rows, empty = "\uC870\uD68C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", className = "" }) {
  return /* @__PURE__ */ R.h("div", { className: "r-table-wrap " + className }, /* @__PURE__ */ R.h("table", { className: "r-table" }, /* @__PURE__ */ R.h("thead", null, /* @__PURE__ */ R.h("tr", null, headers.map((head, i) => /* @__PURE__ */ R.h("th", { key: i, scope: "col" }, head)))), /* @__PURE__ */ R.h("tbody", null, rows.length ? rows.map((row, i) => /* @__PURE__ */ R.h("tr", { key: i }, row.map((cell, j) => /* @__PURE__ */ R.h("td", { key: j }, cell)))) : /* @__PURE__ */ R.h("tr", null, /* @__PURE__ */ R.h("td", { className: "r-empty", colSpan: headers.length }, empty)))));
},
Badge: function({ tone = "gray", children }) {
  return /* @__PURE__ */ R.h("span", { className: "r-badge r-badge-" + tone }, children);
},
Icon: function({ name, size = 18 }) {
  const map = { edit: Pencil, trash: Trash2, restore: RotateCcw, check: Check, close: X, plus: Plus, arrow: ArrowRight, search: Search, download: Download };
  const Icon = map[name] || CircleHelp;
  return /* @__PURE__ */ R.h(Icon, { size, "aria-hidden": "true" });
},
IconButton: function({ name, label, onClick, disabled = false }) {
  return /* @__PURE__ */ R.h("button", { type: "button", className: "r-icon-button r-icon-" + name, title: label, "aria-label": label, onClick, disabled }, /* @__PURE__ */ R.h(R.Icon, { name }));
},
Modal: function({ title, onClose, wide = false, children, className = "" }) {
  const ref = import_react20.useRef(null);
  R.useEffect(() => {
    const previous = document.activeElement;
    const focusable = () => Array.from(ref.current?.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),a[href],[tabindex="0"]') || []);
    focusable()[0]?.focus();
    const handler = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "Tab") {
        const all = focusable();
        if (!all.length) return;
        if (e.shiftKey && document.activeElement === all[0]) {
          e.preventDefault();
          all[all.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === all[all.length - 1]) {
          e.preventDefault();
          all[0].focus();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      previous?.focus?.();
    };
  }, []);
  return /* @__PURE__ */ R.h("div", { className: "r-modal-backdrop", onMouseDown: (e) => {
    if (e.target === e.currentTarget) onClose();
  } }, /* @__PURE__ */ R.h("section", { ref, className: "r-modal " + (wide ? "r-modal-wide " : "") + className, role: "dialog", "aria-modal": "true", "aria-label": title }, /* @__PURE__ */ R.h("header", { className: "r-modal-head" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-overline" }, "WILLCLUB ADMIN"), /* @__PURE__ */ R.h("h2", null, title)), /* @__PURE__ */ R.h(R.IconButton, { name: "close", label: "\uB2EB\uAE30", onClick: onClose })), /* @__PURE__ */ R.h("div", { className: "r-modal-body" }, children)));
},
KPI: function({ label, value, detail, tone = "blue" }) {
  return /* @__PURE__ */ R.h("div", { className: "r-kpi r-kpi-" + tone }, /* @__PURE__ */ R.h("span", null, label), /* @__PURE__ */ R.h("strong", null, value), detail && /* @__PURE__ */ R.h("small", null, detail));
}
};
function rMemberText(value) {
return value == null ? "" : String(value);
}
function rMemberId(prefix) {
return (prefix || "member") + "-" + (globalThis.crypto && globalThis.crypto.randomUUID ? globalThis.crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 8));
}
function rMemberToday() {
const now = /* @__PURE__ */ new Date();
const offset = now.getTimezoneOffset() * 6e4;
return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}
function rMemberStamp() {
return (/* @__PURE__ */ new Date()).toLocaleString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function rMemberDayDiff(start, end) {
const a = Date.parse(String(start || "") + "T00:00:00Z");
const b = Date.parse(String(end || "") + "T00:00:00Z");
return Number.isFinite(a) && Number.isFinite(b) ? Math.max(0, Math.round((b - a) / 864e5)) : 0;
}
function rMemberAddDays(date, days) {
const time = Date.parse(String(date || "") + "T00:00:00Z");
return Number.isFinite(time) ? new Date(time + Number(days || 0) * 864e5).toISOString().slice(0, 10) : rMemberToday();
}
function rMemberAddMonths(date, months) {
const source = /* @__PURE__ */ new Date(String(date || rMemberToday()) + "T00:00:00Z");
if (Number.isNaN(source.getTime())) return rMemberToday();
const target = new Date(Date.UTC(source.getUTCFullYear(), source.getUTCMonth() + Math.max(1, Number(months || 1)), source.getUTCDate()));
target.setUTCDate(target.getUTCDate() - 1);
return target.toISOString().slice(0, 10);
}
function rMemberTone(status) {
if (status === "\uC815\uC0C1" || status === "\uC774\uC6A9\uC911" || status === "\uC644\uB8CC") return "green";
if (status === "\uD0C8\uD1F4" || status === "\uD658\uBD88") return "red";
if (status === "\uB9CC\uAE30" || status === "\uC785\uAE08\uB300\uAE30" || status === "\uC77C\uC2DC\uC815\uC9C0") return "amber";
return "gray";
}
function rMemberServiceName(member) {
return rMemberText(member && member.group) === "\uBB34\uB8CC\uD68C\uC6D0" ? "" : rMemberText(member && member.group);
}
function rMemberRoute(spec, products) {
const filter = spec && spec.filter ? spec.filter : {};
const title = rMemberText(spec && spec.title);
const productNames = (products || []).map(function(product) {
  return rMemberText(product.title);
}).filter(Boolean);
const status = filter.key === "status" ? rMemberText(filter.value) : "";
const group = filter.key === "group" ? rMemberText(filter.value) : productNames.find(function(name) {
  return title.indexOf(name) !== -1;
}) || "";
if (status === "\uD0C8\uD1F4" || title.indexOf("\uD0C8\uD1F4") !== -1) return { kind: "withdrawn", group: "" };
if (status === "\uD734\uBA74" || title.indexOf("\uBBF8\uC811\uC18D") !== -1) return { kind: "inactive", group: "" };
if (status === "\uB9CC\uAE30" || title.indexOf("\uB9CC\uAE30") !== -1) return { kind: "expired", group: "" };
if (group) return { kind: "group", group };
return { kind: "all", group: "" };
}
function rMemberServices(member, products) {
const raw = Array.isArray(member && member.services) ? member.services : [];
if (Array.isArray(member && member.services) && !raw.length) return [];
if (raw.length) return raw.map(function(service, index) {
  return {
    id: rMemberText(service.id) || "service-" + rMemberText(member.id) + "-" + index,
    category: rMemberText(service.category) || "VIP \uC0C1\uD488",
    product: rMemberText(service.product || service.group || member.group),
    start: rMemberText(service.start || member.start),
    end: rMemberText(service.end || member.end),
    status: rMemberText(service.status) || "\uC774\uC6A9\uC911",
    price: Number(service.price != null ? service.price : service.amount) || 0,
    memo: rMemberText(service.memo),
    refund: service.refund && typeof service.refund === "object" ? service.refund : null
  };
});
if (!member || !rMemberServiceName(member)) return [];
const matched = (products || []).find(function(product) {
  return rMemberText(product.title) === rMemberText(member.group);
});
return [{
  id: "service-" + rMemberText(member.id),
  category: "VIP \uC0C1\uD488",
  product: rMemberText(member.group),
  start: rMemberText(member.start),
  end: rMemberText(member.end),
  status: member.status === "\uB9CC\uAE30" ? "\uB9CC\uAE30" : "\uC774\uC6A9\uC911",
  price: Number(matched && matched.amount) || 0,
  memo: "",
  refund: null
}];
}
function rMemberChanges(member) {
return Array.isArray(member && member.records) ? member.records.map(function(change, index) {
  return {
    id: rMemberText(change.id) || "change-" + index,
    date: rMemberText(change.date || change.timestamp),
    type: rMemberText(change.type),
    item: rMemberText(change.item),
    period: rMemberText(change.period),
    memo: rMemberText(change.memo)
  };
}) : [];
}
function RMembers(props) {
const spec = props.spec || {};
const store = props.store;
const records = store.state.records || {};
const members = Array.isArray(records.members) ? records.members : [];
const products = Array.isArray(records.products) ? records.products : [];
const route = rMemberRoute(spec, products);
const expertOnly = Boolean(props.fixedExpert);
const [input, setInput] = R.useState("");
const [query, setQuery] = R.useState("");
const [groupFilter, setGroupFilter] = R.useState("\uC804\uCCB4");
const [statusFilter, setStatusFilter] = R.useState("\uC804\uCCB4");
const [selected, setSelected] = R.useState([]);
const [detail, setDetail] = R.useState(null);
const [newMember, setNewMember] = R.useState(null);
const [confirm, setConfirm] = R.useState(null);
const title = rMemberText(spec.title) || "\uD68C\uC6D0 \uAD00\uB9AC";
const groupOptions = R.useMemo(function() {
  return Array.from(new Set(products.map(function(product) {
    return rMemberText(product.title);
  }).filter(Boolean).concat(members.map(rMemberServiceName).filter(Boolean))));
}, [products, members]);
const rows = R.useMemo(function() {
  const key = query.toLowerCase();
  return members.filter(function(member) {
    if (route.kind === "group" && rMemberText(member.group) !== route.group && !(member.services || []).some((s) => s.product === route.group && s.status !== "\uD658\uBD88")) return false;
    if (route.kind === "withdrawn" && rMemberText(member.status) !== "\uD0C8\uD1F4") return false;
    if (route.kind === "inactive" && rMemberText(member.status) !== "\uD734\uBA74") return false;
    if (route.kind === "expired" && rMemberText(member.status) !== "\uB9CC\uAE30") return false;
    if (route.kind === "all" && groupFilter !== "\uC804\uCCB4" && rMemberText(member.group) !== groupFilter) return false;
    if (route.kind === "all" && statusFilter !== "\uC804\uCCB4" && rMemberText(member.status) !== statusFilter) return false;
    if (!key) return true;
    return [member.loginId, member.name, member.nickname, ...expertOnly ? [] : [member.phone], member.cafeNickname, member.group].join(" ").toLowerCase().indexOf(key) !== -1;
  });
}, [members, route.kind, route.group, query, groupFilter, statusFilter]);
function notify(message) {
  if (store.notify) store.notify(message);
}
function toggle(memberId, checked) {
  setSelected(function(current) {
    return checked ? Array.from(new Set(current.concat([memberId]))) : current.filter(function(id) {
      return id !== memberId;
    });
  });
}
function toggleAll(checked) {
  setSelected(checked ? rows.map(function(member) {
    return member.id;
  }) : []);
}
function openNewMember() {
  setNewMember({
    loginId: "",
    nickname: "",
    phone: "",
    cafeNickname: "",
    paidPoints: 0,
    freePoints: 0,
    group: route.kind === "group" ? route.group : "\uBB34\uB8CC\uD68C\uC6D0",
    start: rMemberToday(),
    end: "",
    status: "\uC815\uC0C1"
  });
}
function saveNewMember() {
  const draft = newMember || {};
  const loginId = rMemberText(draft.loginId).trim();
  if (!loginId) {
    notify("\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  if (members.some(function(member) {
    return rMemberText(member.loginId) === loginId;
  })) {
    notify("\uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC778 \uC544\uC774\uB514\uC785\uB2C8\uB2E4.");
    return;
  }
  const paid = Number(draft.paidPoints) || 0;
  const free = Number(draft.freePoints) || 0;
  store.save("members", {
    id: rMemberId("member"),
    loginId,
    name: "\uD68C\uC6D0",
    nickname: rMemberText(draft.nickname),
    phone: rMemberText(draft.phone),
    cafeNickname: rMemberText(draft.cafeNickname),
    group: rMemberText(draft.group),
    status: rMemberText(draft.status) || "\uC815\uC0C1",
    start: rMemberText(draft.start),
    end: rMemberText(draft.end),
    joined: rMemberToday(),
    lastVisit: "",
    paidPoints: paid,
    freePoints: free,
    balance: paid + free,
    memo: "\uC2DC\uC548\uC6A9 \uC608\uC2DC \uD68C\uC6D0\uC785\uB2C8\uB2E4."
  });
  setNewMember(null);
  notify("\uC2DC\uC548\uC6A9 \uD68C\uC6D0\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.");
}
function executeConfirm() {
  if (!confirm) return;
  if (confirm.kind === "withdraw") {
    store.updateMany("members", confirm.ids, { status: "\uD0C8\uD1F4", withdrawn: rMemberToday() }, "\uD68C\uC6D0 \uD0C8\uD1F4 \uCC98\uB9AC");
    setSelected([]);
    notify("\uC120\uD0DD \uD68C\uC6D0\uC744 \uD0C8\uD1F4 \uCC98\uB9AC\uD588\uC2B5\uB2C8\uB2E4.");
  }
  if (confirm.kind === "delete") {
    store.remove("members", confirm.ids);
    setSelected(function(current) {
      return current.filter(function(id) {
        return confirm.ids.indexOf(id) === -1;
      });
    });
    notify("\uC120\uD0DD\uD55C \uC2DC\uC548\uC6A9 \uD68C\uC6D0 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.");
  }
  if (confirm.kind === "restore") {
    store.updateMany("members", confirm.ids, { status: "\uC815\uC0C1", withdrawn: "" }, "\uD68C\uC6D0 \uBCF5\uAD6C");
    notify("\uD68C\uC6D0\uC744 \uBCF5\uAD6C\uD588\uC2B5\uB2C8\uB2E4.");
  }
  setConfirm(null);
}
function selectionCell(member) {
  return /* @__PURE__ */ R.h("input", { type: "checkbox", "aria-label": rMemberText(member.loginId) + " \uC120\uD0DD", checked: selected.indexOf(member.id) !== -1, onChange: function(event) {
    toggle(member.id, event.target.checked);
  } });
}
function rowActions(member) {
  if (route.kind === "withdrawn") return /* @__PURE__ */ R.h("div", { className: "r-actions members-row-actions" }, /* @__PURE__ */ R.h(R.IconButton, { name: "restore", label: "\uBCF5\uAD6C", onClick: function() {
    setConfirm({ kind: "restore", ids: [member.id], label: rMemberText(member.loginId) });
  } }), /* @__PURE__ */ R.h(R.IconButton, { name: "trash", label: "\uC601\uAD6C \uC0AD\uC81C", onClick: function() {
    setConfirm({ kind: "delete", ids: [member.id], label: rMemberText(member.loginId) });
  } }));
  if (route.kind === "inactive") return /* @__PURE__ */ R.h("div", { className: "r-actions members-row-actions" }, /* @__PURE__ */ R.h(R.IconButton, { name: "trash", label: "\uD0C8\uD1F4\uD68C\uC6D0\uC73C\uB85C \uC774\uB3D9", onClick: function() {
    setConfirm({ kind: "withdraw", ids: [member.id], label: rMemberText(member.loginId) });
  } }));
  if (route.kind === "group") return /* @__PURE__ */ R.h("span", { className: "members-no-action" }, "\u2014");
  return /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary members-detail-button", onClick: function() {
    setDetail(member);
  } }, "\uC0C1\uC138");
}
const headers = route.kind === "withdrawn" ? ["\uC120\uD0DD", "\uC544\uC774\uB514", "\uC774\uB984", "\uB2C9\uB124\uC784", "\uC5F0\uB77D\uCC98", "\uC774\uC6A9 \uC11C\uBE44\uC2A4", "\uD0C8\uD1F4\uC77C\uC790", "\uAD00\uB9AC"] : route.kind === "inactive" ? ["\uC120\uD0DD", "\uC544\uC774\uB514", "\uC774\uB984", "\uB2C9\uB124\uC784", "\uC5F0\uB77D\uCC98", "\uC774\uC6A9 \uC11C\uBE44\uC2A4", "\uCD5C\uC885 \uC811\uC18D\uC77C", "\uAC00\uC785\uC77C", "\uAD00\uB9AC"] : route.kind === "expired" ? ["\uC120\uD0DD", "\uC544\uC774\uB514", "\uC774\uB984", "\uB2C9\uB124\uC784", "\uC5F0\uB77D\uCC98", "\uB9CC\uAE30\uB41C \uC11C\uBE44\uC2A4", "\uB9CC\uAE30\uC77C\uC790", "\uAD00\uB9AC"] : ["\uC120\uD0DD", "\uC544\uC774\uB514", "\uC774\uB984", "\uB2C9\uB124\uC784", "\uC5F0\uB77D\uCC98", "\uC774\uC6A9 \uC11C\uBE44\uC2A4", "\uC11C\uBE44\uC2A4 \uC885\uB8CC\uC77C", "\uCD5C\uADFC \uC811\uC18D\uC77C", "\uAD00\uB9AC"];
const tableRows = rows.map(function(member) {
  const service = rMemberServiceName(member);
  const idCell = /* @__PURE__ */ R.h("span", { className: "members-login-id" }, rMemberText(member.loginId) || "\u2014");
  if (route.kind === "withdrawn") return [selectionCell(member), idCell, rMemberText(member.name) || "\u2014", rMemberText(member.nickname) || "\u2014", rMemberText(member.phone) || "\u2014", service, rMemberText(member.withdrawn) || "\u2014", rowActions(member)];
  if (route.kind === "inactive") return [selectionCell(member), idCell, rMemberText(member.name) || "\u2014", rMemberText(member.nickname) || "\u2014", rMemberText(member.phone) || "\u2014", service, rMemberText(member.lastVisit) || "\u2014", rMemberText(member.joined) || "\u2014", rowActions(member)];
  if (route.kind === "expired") return [selectionCell(member), idCell, rMemberText(member.name) || "\u2014", rMemberText(member.nickname) || "\u2014", rMemberText(member.phone) || "\u2014", service, rMemberText(member.end) || "\u2014", rowActions(member)];
  return [selectionCell(member), idCell, rMemberText(member.name) || "\u2014", rMemberText(member.nickname) || "\u2014", rMemberText(member.phone) || "\u2014", service, rMemberText(member.end) || "\u2014", rMemberText(member.lastVisit) || "\u2014", rowActions(member)];
});
const canCreate = !expertOnly && (route.kind === "all" || route.kind === "group");
const destructiveSelection = route.kind === "withdrawn" ? "\uC120\uD0DD \uD6C4 \uC804\uCCB4\uC0AD\uC81C" : "\uC120\uD0DD \uD68C\uC6D0 \uD0C8\uD1F4";
return /* @__PURE__ */ R.h("div", { className: "members-scope r-stack" }, route.kind !== "group" && /* @__PURE__ */ R.h(R.Panel, { title: "\uD68C\uC6D0 \uAC80\uC0C9", subtitle: "\uC774\uB984, \uC544\uC774\uB514, \uB2C9\uB124\uC784, \uC5F0\uB77D\uCC98 \uAE30\uC900\uC73C\uB85C \uC2DC\uC548\uC6A9 \uB370\uC774\uD130\uB97C \uC870\uD68C\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("form", { className: "r-toolbar members-search", onSubmit: function(event) {
  event.preventDefault();
  setQuery(input.trim());
  setSelected([]);
} }, /* @__PURE__ */ R.h("input", { "aria-label": "\uD68C\uC6D0 \uAC80\uC0C9\uC5B4", value: input, onChange: function(event) {
  setInput(event.target.value);
}, placeholder: "\uC774\uB984, \uC544\uC774\uB514 \uB610\uB294 \uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694" }), route.kind === "all" && /* @__PURE__ */ R.h("select", { "aria-label": "\uC774\uC6A9 \uC11C\uBE44\uC2A4 \uD544\uD130", value: groupFilter, onChange: function(event) {
  setGroupFilter(event.target.value);
  setSelected([]);
} }, /* @__PURE__ */ R.h("option", { value: "\uC804\uCCB4" }, "\uC804\uCCB4 \uC11C\uBE44\uC2A4"), /* @__PURE__ */ R.h("option", { value: "\uBB34\uB8CC\uD68C\uC6D0" }, "\uBB34\uB8CC\uD68C\uC6D0"), groupOptions.map(function(group) {
  return /* @__PURE__ */ R.h("option", { value: group, key: group }, group);
})), route.kind === "all" && /* @__PURE__ */ R.h("select", { "aria-label": "\uC0C1\uD0DC \uD544\uD130", value: statusFilter, onChange: function(event) {
  setStatusFilter(event.target.value);
  setSelected([]);
} }, /* @__PURE__ */ R.h("option", { value: "\uC804\uCCB4" }, "\uC804\uCCB4 \uC0C1\uD0DC"), /* @__PURE__ */ R.h("option", null, "\uC815\uC0C1"), /* @__PURE__ */ R.h("option", null, "\uD734\uBA74"), /* @__PURE__ */ R.h("option", null, "\uB9CC\uAE30"), /* @__PURE__ */ R.h("option", null, "\uD0C8\uD1F4")), /* @__PURE__ */ R.h("button", { className: "r-primary", type: "submit" }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), "\uAC80\uC0C9"), /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setInput("");
  setQuery("");
  setGroupFilter("\uC804\uCCB4");
  setStatusFilter("\uC804\uCCB4");
  setSelected([]);
} }, "\uCD08\uAE30\uD654"))), route.kind === "group" && /* @__PURE__ */ R.h("form", { className: "r-toolbar members-group-search", onSubmit: function(event) {
  event.preventDefault();
  setQuery(input.trim());
  setSelected([]);
} }, /* @__PURE__ */ R.h("input", { "aria-label": "\uD68C\uC6D0 \uAC80\uC0C9\uC5B4", value: input, onChange: function(event) {
  setInput(event.target.value);
}, placeholder: "\uC774\uB984, \uC544\uC774\uB514 \uB610\uB294 \uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694" }), /* @__PURE__ */ R.h("button", { className: "r-primary", type: "submit" }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), "\uAC80\uC0C9"), /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setInput("");
  setQuery("");
  setSelected([]);
} }, "\uCD08\uAE30\uD654")), /* @__PURE__ */ R.h(R.Panel, { title, subtitle: "\uD604\uC7AC " + R.num(rows.length) + "\uBA85", actions: /* @__PURE__ */ R.h("div", { className: "r-actions" }, canCreate && /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: openNewMember }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), "\uD68C\uC6D0 \uCD94\uAC00"), route.kind === "withdrawn" && /* @__PURE__ */ R.h("button", { className: "r-danger", type: "button", disabled: !selected.length, onClick: function() {
  setConfirm({ kind: "delete", ids: selected, label: R.num(selected.length) + "\uBA85" });
} }, destructiveSelection), (route.kind === "all" || route.kind === "inactive") && selected.length > 0 && /* @__PURE__ */ R.h("button", { className: "r-danger", type: "button", onClick: function() {
  setConfirm({ kind: "withdraw", ids: selected, label: R.num(selected.length) + "\uBA85" });
} }, destructiveSelection)) }, route.kind === "withdrawn" && /* @__PURE__ */ R.h("p", { className: "r-alert members-delete-alert" }, "\uC120\uD0DD \uD6C4 \uC804\uCCB4\uC0AD\uC81C\uB294 \uBCF5\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2DC\uC548\uC5D0\uC11C\uB294 \uD604\uC7AC \uBE0C\uB77C\uC6B0\uC800\uC758 \uC608\uC2DC \uB370\uC774\uD130\uB9CC \uC0AD\uC81C\uB429\uB2C8\uB2E4."), /* @__PURE__ */ R.h("div", { className: "members-table-controls" }, /* @__PURE__ */ R.h("label", null, /* @__PURE__ */ R.h("input", { type: "checkbox", "aria-label": "\uD604\uC7AC \uBAA9\uB85D \uC804\uCCB4 \uC120\uD0DD", checked: rows.length > 0 && rows.every(function(member) {
  return selected.indexOf(member.id) !== -1;
}), onChange: function(event) {
  toggleAll(event.target.checked);
} }), "\uD604\uC7AC \uBAA9\uB85D \uC804\uCCB4 \uC120\uD0DD"), /* @__PURE__ */ R.h("span", { className: "r-muted" }, "\uD45C\uC758 \uC544\uC774\uB514\uB294 \uD14D\uC2A4\uD2B8\uB85C\uB9CC \uD45C\uC2DC\uB418\uBA70, \uBC18 \uBAA9\uB85D\uC5D0\uC11C\uB294 \uD68C\uC6D0\uC0C1\uC138\uB97C \uC5F4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Table, { headers: headers.filter((_, i) => !((route.kind === "group" || expertOnly) && i === 4) && !(expertOnly && i === headers.length - 1)), rows: tableRows.map((row) => row.filter((_, i) => !((route.kind === "group" || expertOnly) && i === 4) && !(expertOnly && i === row.length - 1))), empty: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uD68C\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", className: "members-table" }), /* @__PURE__ */ R.h("p", { className: "members-sample-note" }, "\uC2DC\uC548\uC6A9 \uC608\uC2DC \uB370\uC774\uD130\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uD68C\uC6D0\xB7\uD0C8\uD1F4\xB7\uC0AD\uC81C \uCC98\uB9AC\uB294 \uC6B4\uC601 API\uC640 \uAD8C\uD55C \uAC80\uC99D\uC744 \uBCC4\uB3C4\uB85C \uC5F0\uACB0\uD574\uC57C \uD569\uB2C8\uB2E4.")), detail && /* @__PURE__ */ R.h(RMemberDetail, { record: detail, store, onClose: function() {
  setDetail(null);
} }), newMember && /* @__PURE__ */ R.h(R.Modal, { title: "\uD68C\uC6D0 \uCD94\uAC00", onClose: function() {
  setNewMember(null);
} }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC544\uC774\uB514" }, /* @__PURE__ */ R.h("input", { value: newMember.loginId, onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { loginId: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB2C9\uB124\uC784" }, /* @__PURE__ */ R.h("input", { value: newMember.nickname, onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { nickname: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC5F0\uB77D\uCC98" }, /* @__PURE__ */ R.h("input", { value: newMember.phone, onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { phone: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB124\uC774\uBC84\uCE74\uD398\uB2C9\uB124\uC784" }, /* @__PURE__ */ R.h("input", { value: newMember.cafeNickname, onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { cafeNickname: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC774\uC6A9 \uC11C\uBE44\uC2A4" }, /* @__PURE__ */ R.h("select", { value: newMember.group, disabled: route.kind === "group", onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { group: event.target.value }));
} }, /* @__PURE__ */ R.h("option", null, "\uBB34\uB8CC\uD68C\uC6D0"), groupOptions.map(function(group) {
  return /* @__PURE__ */ R.h("option", { value: group, key: group }, group);
}))), /* @__PURE__ */ R.h(R.Field, { label: "\uC11C\uBE44\uC2A4 \uC885\uB8CC\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: newMember.end, onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { end: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uD3EC\uC778\uD2B8" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: newMember.paidPoints, onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { paidPoints: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uAE30\uC874 \uD3EC\uC778\uD2B8" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: newMember.freePoints, onChange: function(event) {
  setNewMember(Object.assign({}, newMember, { freePoints: event.target.value }));
} }))), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setNewMember(null);
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: saveNewMember }, "\uCD94\uAC00")))), confirm && /* @__PURE__ */ R.h(R.Modal, { title: confirm.kind === "restore" ? "\uD68C\uC6D0 \uBCF5\uAD6C" : confirm.kind === "withdraw" ? "\uD68C\uC6D0 \uD0C8\uD1F4 \uCC98\uB9AC" : "\uD68C\uC6D0 \uB370\uC774\uD130 \uC0AD\uC81C", onClose: function() {
  setConfirm(null);
} }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("p", null, confirm.kind === "restore" ? "\uC120\uD0DD\uD55C \uD68C\uC6D0\uC744 \uC815\uC0C1 \uC0C1\uD0DC\uB85C \uBCF5\uAD6C\uD569\uB2C8\uB2E4." : confirm.kind === "withdraw" ? "\uC120\uD0DD\uD55C \uD68C\uC6D0\uC744 \uD0C8\uD1F4 \uC0C1\uD0DC\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4." : "\uC120\uD0DD\uD55C \uD68C\uC6D0 \uB370\uC774\uD130\uB97C \uC644\uC804\uD788 \uC0AD\uC81C\uD569\uB2C8\uB2E4. \uC0AD\uC81C \uD6C4 \uBCF5\uAD6C\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uB300\uC0C1: ", /* @__PURE__ */ R.h("strong", null, confirm.label)), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setConfirm(null);
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: confirm.kind === "restore" ? "r-primary" : "r-danger", type: "button", onClick: executeConfirm }, confirm.kind === "restore" ? "\uBCF5\uAD6C" : confirm.kind === "withdraw" ? "\uD0C8\uD1F4 \uCC98\uB9AC" : "\uC804\uCCB4\uC0AD\uC81C")))));
}
function RMemberDetail(props) {
const store = props.store;
const seed = props.record || {};
const records = store.state.records || {};
const members = Array.isArray(records.members) ? records.members : [];
const products = Array.isArray(records.products) ? records.products : [];
const live = members.find(function(member) {
  return member.id === seed.id;
}) || seed;
const services = rMemberServices(live, products);
const payments = (Array.isArray(records.payments) ? records.payments : []).filter(function(payment) {
  return rMemberText(payment.loginId) === rMemberText(live.loginId);
});
const changes = rMemberChanges(live);
const [editor, setEditor] = R.useState(null);
const [serviceDialog, setServiceDialog] = R.useState(null);
const [refundDialog, setRefundDialog] = R.useState(null);
const [bankPayment, setBankPayment] = R.useState(null);
const [approvalNo, setApprovalNo] = R.useState("");
const [changeEditor, setChangeEditor] = R.useState(null);
const [changeMemo, setChangeMemo] = R.useState("");
const [confirm, setConfirm] = R.useState(null);
function notify(message) {
  if (store.notify) store.notify(message);
}
function currentMember() {
  return (store.state.records.members || []).find(function(member) {
    return member.id === live.id;
  }) || live;
}
function commitMember(patch, history) {
  const current = currentMember();
  const previous = Array.isArray(current.records) ? current.records : [];
  const nextRecords = history ? [{ id: rMemberId("change"), date: rMemberStamp(), type: history.type, item: history.item, period: history.period || "\u2014", memo: history.memo || "" }].concat(previous) : previous;
  store.save("members", Object.assign({}, current, patch, { records: nextRecords }));
}
function saveServices(next, history) {
  const priority = next.find(function(service) {
    return service.status !== "\uD658\uBD88";
  }) || next[0];
  commitMember({ services: next, group: priority ? priority.product : "\uBB34\uB8CC\uD68C\uC6D0", start: priority ? priority.start : "", end: priority ? priority.end : "" }, history);
}
function openBasicEditor() {
  setEditor({ loginId: rMemberText(live.loginId), name: rMemberText(live.name), password: "", nickname: rMemberText(live.nickname), phone: rMemberText(live.phone), cafeNickname: rMemberText(live.cafeNickname), paidPoints: Number(live.paidPoints) || 0, freePoints: Number(live.freePoints) || 0 });
}
function saveBasic() {
  const draft = editor || {};
  const password = rMemberText(draft.password);
  if (password && password.length < 8) {
    notify("\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uAC12\uC740 8\uC790 \uC774\uC0C1\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  const paid = Number(draft.paidPoints) || 0;
  const free = Number(draft.freePoints) || 0;
  commitMember({ name: rMemberText(draft.name), nickname: rMemberText(draft.nickname), phone: rMemberText(draft.phone), cafeNickname: rMemberText(draft.cafeNickname), paidPoints: paid, freePoints: free, balance: paid + free }, { type: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815", item: "\uD68C\uC6D0\uC815\uBCF4", period: "\u2014", memo: "\uD68C\uC6D0\uC815\uBCF4\uB97C \uC218\uC815\uD568" });
  setEditor(null);
  notify("\uD68C\uC6D0\uC815\uBCF4\uB97C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
function openService(mode, service) {
  const selected = service || { category: "VIP \uC0C1\uD488", product: products[0] && products[0].title || "", start: rMemberToday(), end: rMemberAddMonths(rMemberToday(), 1), status: "\uC774\uC6A9\uC911", price: 0, memo: "" };
  setServiceDialog({ mode, id: selected.id || "", draft: Object.assign({}, selected), extraDays: "", memo: "" });
}
function updateService(key, value) {
  setServiceDialog(function(current) {
    return Object.assign({}, current, { draft: Object.assign({}, current.draft, { [key]: value }) });
  });
}
function saveService() {
  if (!serviceDialog) return;
  if (serviceDialog.mode === "extend") {
    const days = Number(serviceDialog.extraDays);
    if (!Number.isInteger(days) || days < 1) {
      notify("\uC5F0\uC7A5 \uC77C\uC218\uB294 1\uC77C \uC774\uC0C1\uC758 \uC815\uC218\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
      return;
    }
    const next2 = services.map(function(service) {
      return service.id === serviceDialog.id ? Object.assign({}, service, { end: rMemberAddDays(service.end, days), memo: rMemberText(serviceDialog.memo) || service.memo }) : service;
    });
    saveServices(next2, { type: "\uC11C\uBE44\uC2A4 \uC5F0\uC7A5", item: serviceDialog.draft.product, period: serviceDialog.draft.end + " ~ " + rMemberAddDays(serviceDialog.draft.end, days), memo: rMemberText(serviceDialog.memo) });
    setServiceDialog(null);
    notify("\uC11C\uBE44\uC2A4 \uC885\uB8CC\uC77C\uC744 \uC5F0\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
    return;
  }
  const draft = serviceDialog.draft;
  if (!rMemberText(draft.product) || !rMemberText(draft.start) || !rMemberText(draft.end)) {
    notify("\uC11C\uBE44\uC2A4\uBA85, \uC2DC\uC791\uC77C, \uC885\uB8CC\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  if (rMemberText(draft.start) > rMemberText(draft.end)) {
    notify("\uC885\uB8CC\uC77C\uC740 \uC2DC\uC791\uC77C \uC774\uD6C4\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
    return;
  }
  const normalized = Object.assign({}, draft, { id: draft.id || rMemberId("service"), price: Number(draft.price) || 0, status: rMemberText(draft.status) || "\uC774\uC6A9\uC911" });
  const next = serviceDialog.mode === "add" ? services.concat([normalized]) : services.map(function(service) {
    return service.id === normalized.id ? normalized : service;
  });
  saveServices(next, { type: serviceDialog.mode === "add" ? "\uC11C\uBE44\uC2A4 \uCD94\uAC00" : "\uC11C\uBE44\uC2A4 \uC218\uC815", item: normalized.product, period: normalized.start + " ~ " + normalized.end, memo: rMemberText(normalized.memo) });
  setServiceDialog(null);
  notify(serviceDialog.mode === "add" ? "\uC11C\uBE44\uC2A4\uB97C \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4." : "\uC11C\uBE44\uC2A4 \uC815\uBCF4\uB97C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
function changeServiceState(service, nextStatus) {
  const next = services.map(function(item) {
    return item.id === service.id ? Object.assign({}, item, { status: nextStatus }) : item;
  });
  saveServices(next, { type: nextStatus === "\uC77C\uC2DC\uC815\uC9C0" ? "\uC11C\uBE44\uC2A4 \uC77C\uC2DC\uC815\uC9C0" : "\uC11C\uBE44\uC2A4 \uC7AC\uC2DC\uC791", item: service.product, period: service.start + " ~ " + service.end, memo: nextStatus });
  notify(nextStatus === "\uC77C\uC2DC\uC815\uC9C0" ? "\uC11C\uBE44\uC2A4\uB97C \uC77C\uC2DC\uC815\uC9C0\uD588\uC2B5\uB2C8\uB2E4." : "\uC11C\uBE44\uC2A4\uB97C \uC7AC\uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4.");
}
function refundNumbers(service, original) {
  const total = Math.max(1, rMemberDayDiff(service.start, service.end) + 1);
  const used = Math.min(total, Math.max(0, rMemberDayDiff(service.start, rMemberToday()) + 1));
  const unused = Math.max(0, total - used);
  const amount = Math.max(0, Number(original) || 0);
  const daily = Math.round(amount / total);
  const usedFee = Math.round(amount * used / total);
  const processing = Math.round(amount * 0.1);
  return { total, used, unused, daily, usedFee, processing, estimate: Math.max(0, amount - usedFee - processing) };
}
function openRefund(service) {
  const original = Number(service.price) || 0;
  const numbers = refundNumbers(service, original);
  setRefundDialog({ service, original: String(original), actual: String(numbers.estimate), memo: "" });
}
function saveRefund() {
  if (!refundDialog) return;
  const service = refundDialog.service;
  const original = Number(refundDialog.original);
  const actual = Number(refundDialog.actual);
  if (!Number.isFinite(original) || original < 0 || !Number.isFinite(actual) || actual < 0) {
    notify("\uACB0\uC81C\uAE08\uC561\uACFC \uC2E4\uC81C \uD658\uBD88\uAE08\uC740 0\uC6D0 \uC774\uC0C1\uC758 \uC22B\uC790\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  const calc = refundNumbers(service, original);
  const next = services.filter(function(item) {
    return item.id !== service.id;
  });
  saveServices(next, { type: "\uD658\uBD88", item: service.product, period: "-" + calc.unused + "\uC77C", memo: "\uC2E4\uC81C \uD658\uBD88\uAE08 " + R.money(actual) });
  setRefundDialog(null);
  notify("\uD658\uBD88 \uACC4\uC0B0\uACFC \uAE30\uB85D\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
function completeBank() {
  const approval = rMemberText(approvalNo).trim();
  if (!approval) {
    notify("\uC2B9\uC778\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  store.save("payments", Object.assign({}, bankPayment, { status: "\uC644\uB8CC", approval }));
  setBankPayment(null);
  setApprovalNo("");
  notify("\uBB34\uD1B5\uC7A5\uC785\uAE08 \uACB0\uC81C\uB97C \uC644\uB8CC \uCC98\uB9AC\uD588\uC2B5\uB2C8\uB2E4.");
}
function saveChangeMemo() {
  if (!changeEditor) return;
  const current = currentMember();
  const nextRecords = rMemberChanges(current).map(function(change) {
    return change.id === changeEditor.id ? Object.assign({}, change, { memo: changeMemo }) : change;
  });
  store.save("members", Object.assign({}, current, { records: nextRecords }));
  setChangeEditor(null);
  notify("\uBCC0\uACBD\uAE30\uB85D \uBA54\uBAA8\uB97C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
function executeConfirm() {
  if (!confirm) return;
  if (confirm.kind === "delete-change") {
    const current = currentMember();
    store.save("members", Object.assign({}, current, { records: rMemberChanges(current).filter(function(change) {
      return change.id !== confirm.id;
    }) }));
    notify("\uBCC0\uACBD\uAE30\uB85D\uC744 \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.");
  }
  setConfirm(null);
}
const detailFacts = [
  ["\uC544\uC774\uB514", rMemberText(live.loginId) || "\u2014"],
  ["\uC774\uB984", rMemberText(live.name) || "\u2014"],
  ["\uBE44\uBC00\uBC88\uD638", /* @__PURE__ */ R.h("span", { className: "members-password-value" }, "\uC7AC\uC124\uC815 \uD544\uC694 \uC2DC \uC785\uB825")],
  ["\uB2C9\uB124\uC784", rMemberText(live.nickname) || "\u2014"],
  ["\uC5F0\uB77D\uCC98", rMemberText(live.phone) || "\u2014"],
  ["\uB124\uC774\uBC84\uCE74\uD398\uB2C9\uB124\uC784", rMemberText(live.cafeNickname) || "\u2014"],
  ["\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uD3EC\uC778\uD2B8", R.num(live.paidPoints) + "P"],
  ["\uAE30\uC874 \uD3EC\uC778\uD2B8", R.num(live.freePoints) + "P"]
];
return /* @__PURE__ */ R.h(R.Modal, { title: (rMemberText(live.loginId) || "\uD68C\uC6D0") + " \uD68C\uC6D0\uC815\uBCF4", onClose: props.onClose, wide: true, className: "members-detail-modal" }, /* @__PURE__ */ R.h("div", { className: "members-detail r-stack" }, /* @__PURE__ */ R.h(R.Panel, { title: "\uD68C\uC6D0\uC815\uBCF4", actions: /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: openBasicEditor }, /* @__PURE__ */ R.h(R.Icon, { name: "edit" }), "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815") }, /* @__PURE__ */ R.h("dl", { className: "members-facts" }, detailFacts.map(function(fact) {
  return /* @__PURE__ */ R.h("div", { key: fact[0] }, /* @__PURE__ */ R.h("dt", null, fact[0]), /* @__PURE__ */ R.h("dd", null, fact[1]));
}))), /* @__PURE__ */ R.h(R.Panel, { title: "\uC774\uC6A9\uC911\uC778 \uC11C\uBE44\uC2A4", actions: /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: function() {
  openService("add");
} }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), "\uC11C\uBE44\uC2A4 \uCD94\uAC00") }, services.length ? /* @__PURE__ */ R.h("div", { className: "members-service-list" }, services.map(function(service) {
  return /* @__PURE__ */ R.h("article", { className: "members-service-card", key: service.id }, /* @__PURE__ */ R.h("div", { className: "members-service-card-head" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h(R.Badge, { tone: rMemberTone(service.status) }, service.status), /* @__PURE__ */ R.h("strong", null, service.product), /* @__PURE__ */ R.h("small", null, service.category)), /* @__PURE__ */ R.h("strong", { className: "members-price" }, R.money(service.price))), /* @__PURE__ */ R.h("div", { className: "members-service-dates" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, "\uC2DC\uC791\uC77C"), /* @__PURE__ */ R.h("b", null, service.start || "\u2014")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, "\uC885\uB8CC\uC77C"), /* @__PURE__ */ R.h("b", null, service.end || "\u2014")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, "\uC0AC\uC6A9\uC77C \xB7 \uC794\uC5EC\uC77C"), /* @__PURE__ */ R.h("b", null, rMemberDayDiff(service.start, rMemberToday()) + "\uC77C \xB7 " + Math.max(0, rMemberDayDiff(rMemberToday(), service.end)) + "\uC77C"))), service.memo && /* @__PURE__ */ R.h("p", { className: "members-service-memo" }, "\uBA54\uBAA8: ", service.memo), service.refund && /* @__PURE__ */ R.h("p", { className: "members-refund-tag" }, "\uC2E4\uC81C \uD658\uBD88\uAE08: ", R.money(service.refund.actual)), /* @__PURE__ */ R.h("div", { className: "members-service-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
    openService("edit", service);
  } }, /* @__PURE__ */ R.h(R.Icon, { name: "edit" }), "\uC218\uC815"), service.status === "\uC77C\uC2DC\uC815\uC9C0" ? /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
    changeServiceState(service, "\uC774\uC6A9\uC911");
  } }, "\uC7AC\uC2DC\uC791") : service.status !== "\uD658\uBD88" && /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
    changeServiceState(service, "\uC77C\uC2DC\uC815\uC9C0");
  } }, "\uC77C\uC2DC\uC815\uC9C0"), service.status !== "\uD658\uBD88" && /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
    openService("extend", service);
  } }, "\uC5F0\uC7A5"), service.status !== "\uD658\uBD88" && /* @__PURE__ */ R.h("button", { className: "r-danger", type: "button", onClick: function() {
    openRefund(service);
  } }, "\uD658\uBD88")));
})) : /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uB4F1\uB85D\uB41C \uC774\uC6A9 \uC11C\uBE44\uC2A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Panel, { title: "\uBCC0\uACBD \uAE30\uB85D" }, /* @__PURE__ */ R.h(R.Table, { headers: ["\uC77C\uC790", "\uAD6C\uBD84", "\uD56D\uBAA9", "\uAE30\uAC04", "\uBE44\uACE0", "\uAD00\uB9AC"], rows: changes.map(function(change) {
  return [change.date || "\u2014", change.type || "\u2014", change.item || "\u2014", rSecondPeriod(change), /* @__PURE__ */ R.h("span", { className: "members-change-memo" }, change.memo || "\u2014"), /* @__PURE__ */ R.h("div", { className: "members-icon-actions" }, /* @__PURE__ */ R.h(R.IconButton, { name: "edit", label: "\uBCC0\uACBD\uAE30\uB85D \uC218\uC815", onClick: function() {
    setChangeEditor(change);
    setChangeMemo(change.memo);
  } }), /* @__PURE__ */ R.h(R.IconButton, { name: "trash", label: "\uBCC0\uACBD\uAE30\uB85D \uC0AD\uC81C", onClick: function() {
    setConfirm({ kind: "delete-change", id: change.id });
  } }))];
}), empty: "\uBCC0\uACBD \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", className: "members-history-table" })), /* @__PURE__ */ R.h(R.Panel, { title: "\uACB0\uC81C \uAE30\uB85D" }, /* @__PURE__ */ R.h(R.Table, { headers: ["\uACB0\uC81C\uC77C\uC790", "\uD488\uBAA9\uBA85", "\uC774\uC6A9\uAE30\uAC04", "\uACB0\uC81C\uAE08\uC561", "\uACB0\uC81C\uC218\uB2E8", "\uC0C1\uD0DC", "\uC2B9\uC778\uBC88\uD638"], rows: payments.map(function(payment) {
  const period = rMemberText(payment.start) && rMemberText(payment.end) ? rMemberText(payment.start) + " ~ " + rMemberText(payment.end) : "\u2014";
  const isBankWaiting = rMemberText(payment.method) === "\uBB34\uD1B5\uC7A5\uC785\uAE08" && rMemberText(payment.status) === "\uC785\uAE08\uB300\uAE30";
  return [rMemberText(payment.date) || "\u2014", rMemberText(payment.product) || "\u2014", period, /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(payment.amount)), rMemberText(payment.method) || "\u2014", /* @__PURE__ */ R.h("span", null, isBankWaiting ? /* @__PURE__ */ R.h("button", { className: "members-bank-complete", type: "button", onClick: function() {
    setBankPayment(payment);
    setApprovalNo(rMemberText(payment.approval));
  } }, "\uC785\uAE08 \uC644\uB8CC") : /* @__PURE__ */ R.h(R.Badge, { tone: rMemberTone(rMemberText(payment.status)) }, rMemberText(payment.status) || "\u2014")), /* @__PURE__ */ R.h("strong", { className: "members-approval-value" }, rMemberText(payment.receiptApproval || payment.approval) || "\u2014")];
}), empty: "\uACB0\uC81C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", className: "members-payment-table" }))), editor && /* @__PURE__ */ R.h(R.Modal, { title: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815", onClose: function() {
  setEditor(null);
}, className: "members-nested-modal" }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC544\uC774\uB514" }, /* @__PURE__ */ R.h("input", { readOnly: true, value: editor.loginId })), /* @__PURE__ */ R.h(R.Field, { label: "\uC774\uB984" }, /* @__PURE__ */ R.h("input", { value: editor.name, onChange: (e) => setEditor({ ...editor, name: e.target.value }) })), /* @__PURE__ */ R.h(R.Field, { label: "\uBE44\uBC00\uBC88\uD638", hint: "\uBCC0\uACBD\uD560 \uB54C\uB9CC \uC785\uB825\uD558\uBA70 \uAE30\uC874 \uBE44\uBC00\uBC88\uD638\uB294 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "password", autoComplete: "new-password", value: editor.password, onChange: function(event) {
  setEditor(Object.assign({}, editor, { password: event.target.value }));
}, placeholder: "\uBCC0\uACBD \uC2DC\uC5D0\uB9CC \uC785\uB825" })), /* @__PURE__ */ R.h(R.Field, { label: "\uB2C9\uB124\uC784" }, /* @__PURE__ */ R.h("input", { value: editor.nickname, onChange: function(event) {
  setEditor(Object.assign({}, editor, { nickname: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC5F0\uB77D\uCC98" }, /* @__PURE__ */ R.h("input", { value: editor.phone, onChange: function(event) {
  setEditor(Object.assign({}, editor, { phone: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB124\uC774\uBC84\uCE74\uD398\uB2C9\uB124\uC784" }, /* @__PURE__ */ R.h("input", { value: editor.cafeNickname, onChange: function(event) {
  setEditor(Object.assign({}, editor, { cafeNickname: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uD3EC\uC778\uD2B8" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: editor.paidPoints, onChange: function(event) {
  setEditor(Object.assign({}, editor, { paidPoints: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uAE30\uC874 \uD3EC\uC778\uD2B8" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: editor.freePoints, onChange: function(event) {
  setEditor(Object.assign({}, editor, { freePoints: event.target.value }));
} }))), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setEditor(null);
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: saveBasic }, "\uC800\uC7A5")))), serviceDialog && /* @__PURE__ */ R.h(R.Modal, { title: serviceDialog.mode === "add" ? "\uC11C\uBE44\uC2A4 \uCD94\uAC00" : serviceDialog.mode === "extend" ? "\uC11C\uBE44\uC2A4 \uC5F0\uC7A5" : "\uC11C\uBE44\uC2A4 \uC218\uC815", onClose: function() {
  setServiceDialog(null);
}, className: "members-nested-modal" }, serviceDialog.mode === "extend" ? /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uD604\uC7AC \uC885\uB8CC\uC77C: ", /* @__PURE__ */ R.h("strong", null, serviceDialog.draft.end || "\u2014")), /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC5F0\uC7A5 \uC77C\uC218" }, /* @__PURE__ */ R.h("input", { type: "number", min: "1", value: serviceDialog.extraDays, onChange: function(event) {
  setServiceDialog(Object.assign({}, serviceDialog, { extraDays: event.target.value }));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uBA54\uBAA8" }, /* @__PURE__ */ R.h("input", { value: serviceDialog.memo, onChange: function(event) {
  setServiceDialog(Object.assign({}, serviceDialog, { memo: event.target.value }));
}, placeholder: "\uC5F0\uC7A5 \uC0AC\uC720" }))), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setServiceDialog(null);
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: saveService }, "\uC5F0\uC7A5 \uC800\uC7A5"))) : /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uAD6C\uBD84" }, /* @__PURE__ */ R.h("input", { value: serviceDialog.draft.category, onChange: function(event) {
  updateService("category", event.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC11C\uBE44\uC2A4\uBA85" }, /* @__PURE__ */ R.h("select", { value: serviceDialog.draft.product, onChange: function(event) {
  updateService("product", event.target.value);
} }, products.map(function(product) {
  return /* @__PURE__ */ R.h("option", { key: product.id, value: product.title }, product.title);
}))), /* @__PURE__ */ R.h(R.Field, { label: "\uC2DC\uC791\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: serviceDialog.draft.start, onChange: function(event) {
  updateService("start", event.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC885\uB8CC\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: serviceDialog.draft.end, onChange: function(event) {
  updateService("end", event.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uAE08\uC561" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: serviceDialog.draft.price, onChange: function(event) {
  updateService("price", event.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC0C1\uD0DC" }, /* @__PURE__ */ R.h("select", { value: serviceDialog.draft.status, onChange: function(event) {
  updateService("status", event.target.value);
} }, /* @__PURE__ */ R.h("option", null, "\uC774\uC6A9\uC911"), /* @__PURE__ */ R.h("option", null, "\uC77C\uC2DC\uC815\uC9C0"), /* @__PURE__ */ R.h("option", null, "\uB9CC\uAE30"))), /* @__PURE__ */ R.h(R.Field, { label: "\uBA54\uBAA8", className: "members-full-field" }, /* @__PURE__ */ R.h("textarea", { rows: "3", value: serviceDialog.draft.memo, onChange: function(event) {
  updateService("memo", event.target.value);
} }))), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setServiceDialog(null);
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: saveService }, serviceDialog.mode === "add" ? "\uC11C\uBE44\uC2A4 \uCD94\uAC00" : "\uC800\uC7A5")))), refundDialog && /* @__PURE__ */ R.h(RMemberRefundDialog, { dialog: refundDialog, onChange: setRefundDialog, onClose: function() {
  setRefundDialog(null);
}, onSave: saveRefund }), bankPayment && /* @__PURE__ */ R.h(R\uC785\uAE08\uD655\uC778\uBAA8\uB2EC, { record: bankPayment, store, onClose: () => setBankPayment(null), onDone: () => setBankPayment(null) }), changeEditor && /* @__PURE__ */ R.h(R.Modal, { title: "\uBCC0\uACBD\uAE30\uB85D \uBA54\uBAA8 \uC218\uC815", onClose: function() {
  setChangeEditor(null);
}, className: "members-nested-modal" }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("p", { className: "r-note" }, changeEditor.type, " \xB7 ", changeEditor.item), /* @__PURE__ */ R.h(R.Field, { label: "\uBA54\uBAA8" }, /* @__PURE__ */ R.h("textarea", { rows: "5", value: changeMemo, onChange: function(event) {
  setChangeMemo(event.target.value);
} })), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setChangeEditor(null);
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-primary", type: "button", onClick: saveChangeMemo }, "\uC800\uC7A5")))), confirm && /* @__PURE__ */ R.h(R.Modal, { title: "\uBCC0\uACBD\uAE30\uB85D \uC0AD\uC81C", onClose: function() {
  setConfirm(null);
}, className: "members-nested-modal" }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("p", null, "\uC120\uD0DD\uD55C \uBCC0\uACBD\uAE30\uB85D\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?"), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: function() {
  setConfirm(null);
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-danger", type: "button", onClick: executeConfirm }, "\uC0AD\uC81C")))));
}
function RMemberRefundDialog(props) {
const dialog = props.dialog;
const service = dialog.service;
const original = Math.max(0, Number(dialog.original) || 0);
const total = Math.max(1, rMemberDayDiff(service.start, service.end) + 1);
const used = Math.min(total, Math.max(0, rMemberDayDiff(service.start, rMemberToday()) + 1));
const unused = Math.max(0, total - used);
const daily = Math.round(original / total);
const usedFee = Math.round(original * used / total);
const processing = Math.round(original * 0.1);
const estimate = Math.max(0, original - usedFee - processing);
function update(patch) {
  props.onChange(Object.assign({}, dialog, patch));
}
return /* @__PURE__ */ R.h(R.Modal, { title: "\uD658\uBD88 \uACC4\uC0B0 \xB7 \uAE30\uB85D", onClose: props.onClose, className: "members-nested-modal members-refund-modal" }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("p", { className: "r-alert" }, /* @__PURE__ */ R.h("strong", null, "\uACC4\uC0B0 \uC608\uC2DC\uC785\uB2C8\uB2E4."), " \uC2E4\uC81C \uD658\uBD88 \uAE30\uC900\uACFC \uCD5C\uC885 \uC9C0\uAE09\uC561\uC740 \uC6B4\uC601 \uC815\uCC45 \uD655\uC778 \uD6C4 \uBCC4\uB3C4 \uCC98\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ R.h("div", { className: "members-refund-layout" }, /* @__PURE__ */ R.h("div", { className: "members-refund-input" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC6D0\uB798 \uACB0\uC81C\uAE08\uC561" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", step: "1000", value: dialog.original, onChange: function(event) {
  update({ original: event.target.value });
} })), /* @__PURE__ */ R.h("p", { className: "r-muted" }, "\uC11C\uBE44\uC2A4 \uAE30\uAC04: ", service.start || "\u2014", " ~ ", service.end || "\u2014")), /* @__PURE__ */ R.h("dl", { className: "members-refund-breakdown" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC774\uC6A9\uC77C\uC218"), /* @__PURE__ */ R.h("dd", null, used, "\uC77C / \uC804\uCCB4 ", total, "\uC77C")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uBBF8\uC774\uC6A9\uB0B4\uC5ED"), /* @__PURE__ */ R.h("dd", null, unused, "\uC77C \xB7 \uC77C\uD560 ", R.money(daily))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC774\uC6A9\uAE08\uC561 (\uC77C\uD560 \uC608\uC2DC)"), /* @__PURE__ */ R.h("dd", null, R.money(usedFee))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C\uC218\uC218\uB8CC (10% \uC608\uC2DC)"), /* @__PURE__ */ R.h("dd", null, R.money(processing))), /* @__PURE__ */ R.h("div", { className: "members-refund-result" }, /* @__PURE__ */ R.h("dt", null, "\uD658\uBD88\uC608\uC0C1\uAE08\uC561"), /* @__PURE__ */ R.h("dd", null, R.money(estimate))))), /* @__PURE__ */ R.h(R.Field, { label: "\uC2E4\uC81C \uD658\uBD88\uAE08", hint: "\uACC4\uC0B0 \uC608\uC2DC\uC640 \uAD6C\uBD84\uD558\uC5EC \uC2E4\uC81C \uCC98\uB9AC \uAE08\uC561\uC744 \uC9C1\uC811 \uC785\uB825\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", step: "1000", value: dialog.actual, onChange: function(event) {
  update({ actual: event.target.value });
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uD658\uBD88 \uAD00\uB828 \uBA54\uBAA8" }, /* @__PURE__ */ R.h("textarea", { rows: "4", value: dialog.memo, onChange: function(event) {
  update({ memo: event.target.value });
}, placeholder: "\uD658\uBD88 \uC0AC\uC720\uC640 \uD655\uC778 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694" })), /* @__PURE__ */ R.h("div", { className: "r-actions members-modal-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", type: "button", onClick: props.onClose }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-danger", type: "button", onClick: props.onSave }, "\uD658\uBD88 \uAE30\uB85D \uC800\uC7A5"))));
}
function rSecondPeriod(change) {
const period = R.text(change.period);
if (/^-?\d+일$/.test(period)) return period;
const matches = period.match(/(\d{4}-\d{2}-\d{2})\s*~\s*(\d{4}-\d{2}-\d{2})/);
if (!matches) return period || "\u2014";
const days = rMemberDayDiff(matches[1], matches[2]);
return (change.type.includes("\uD658\uBD88") ? "-" : "") + days + "\uC77C";
}

function R\uACB0\uC81C\uBB38\uC790\uAC12(value, fallback = "\u2014") {
const result = R.text(value).trim();
return result || fallback;
}
function R\uACB0\uC81C\uD45C\uC2DC\uAC12(record) {
const receiptType = R\uACB0\uC81C\uBB38\uC790\uAC12(record?.receiptType, "\uC2E0\uCCAD\uC548\uD568");
const receiptRequested = receiptType !== "\uC2E0\uCCAD\uC548\uD568";
const savedIdentifier = R.text(record?.receiptNumber).trim();
const source = R.text(record?.loginId || record?.id).replace(/\D/g, "");
const suffix = (source.slice(-4) || "0000").padStart(4, "0");
return {
  id: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.id),
  memberId: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.loginId),
  memberName: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.name),
  product: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.product),
  amount: Number(record?.amount) || 0,
  method: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.method),
  status: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.status),
  date: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.date),
  bank: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.bank),
  depositor: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.depositor),
  cardCompany: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.cardCompany, "\uBBF8\uD655\uC778"),
  cardApproval: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.approval, "\uBBF8\uC785\uB825"),
  memo: R\uACB0\uC81C\uBB38\uC790\uAC12(record?.memo, "\uB4F1\uB85D\uB41C \uCC98\uB9AC \uBA54\uBAA8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."),
  receiptType,
  receiptRequested,
  receiptIdentifier: receiptRequested ? savedIdentifier || "010-0000-" + suffix : "\uBC1C\uD589 \uC694\uCCAD \uC5C6\uC74C",
  receiptIdentifierIsExample: receiptRequested && !savedIdentifier,
  receiptApproval: R.text(record?.receiptApproval).trim()
};
}
function R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0({ status }) {
const label = R\uACB0\uC81C\uBB38\uC790\uAC12(status);
const tone = label === "\uC644\uB8CC" ? "green" : label === "\uC785\uAE08\uB300\uAE30" ? "amber" : label === "\uBD80\uBD84\uD658\uBD88" ? "blue" : label.indexOf("\uD658\uBD88") >= 0 || label === "\uCDE8\uC18C" ? "red" : "gray";
return /* @__PURE__ */ R.h(R.Badge, { tone }, label);
}
function R\uACB0\uC81C\uC218\uB2E8\uBC30\uC9C0({ method }) {
const label = R\uACB0\uC81C\uBB38\uC790\uAC12(method);
const tone = label === "\uBB34\uD1B5\uC7A5\uC785\uAE08" ? "amber" : label === "\uCE74\uB4DC" ? "blue" : label === "\uD3EC\uC778\uD2B8" ? "green" : "gray";
return /* @__PURE__ */ R.h(R.Badge, { tone }, label);
}
function R\uACB0\uC81C\uC601\uC218\uC99D\uC694\uC57D({ record, compact = false }) {
const payment = R\uACB0\uC81C\uD45C\uC2DC\uAC12(record);
return /* @__PURE__ */ R.h("div", { className: "r-payment-receipt-summary" + (compact ? " is-compact" : "") }, /* @__PURE__ */ R.h("div", { className: "r-payment-receipt-summary__title" }, /* @__PURE__ */ R.h("span", null, "\uD604\uAE08\uC601\uC218\uC99D \uBC1C\uD589 \uC694\uCCAD"), /* @__PURE__ */ R.h(R.Badge, { tone: payment.receiptRequested ? "blue" : "gray" }, payment.receiptType)), /* @__PURE__ */ R.h("dl", null, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uAD6C\uBD84"), /* @__PURE__ */ R.h("dd", null, payment.receiptType)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC2DD\uBCC4\uBC88\uD638"), /* @__PURE__ */ R.h("dd", { className: "r-payment-mono" }, payment.receiptIdentifier))), payment.receiptIdentifierIsExample && /* @__PURE__ */ R.h("p", { className: "r-payment-example-note" }, "\uC2DD\uBCC4\uBC88\uD638 \uBBF8\uC785\uB825 \uAC74\uC5D0 \uD45C\uC2DC\uD55C \uC2DC\uC548\uC6A9 \uC608\uC2DC\uC785\uB2C8\uB2E4."));
}
function R\uACB0\uC81C\uD658\uBD88\uC694\uC57D({ record }) {
const refunds = Array.isArray(record?.refunds) ? record.refunds : [];
const total = refunds.reduce((sum, item) => sum + (Number(item?.amount) || 0), 0);
if (!refunds.length) return null;
return /* @__PURE__ */ R.h("section", { className: "r-payment-refunds", "aria-label": "\uD658\uBD88 \uC774\uB825" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "REFUND HISTORY"), /* @__PURE__ */ R.h("h3", null, "\uD658\uBD88 \uC774\uB825")), /* @__PURE__ */ R.h(R.Badge, { tone: "red" }, R.money(total), " \uD658\uBD88")), /* @__PURE__ */ R.h(
  R.Table,
  {
    headers: ["\uCC98\uB9AC\uC77C", "\uD658\uBD88 \uAE08\uC561", "\uC0C1\uD0DC", "\uBA54\uBAA8"],
    rows: refunds.map((refund) => [
      R\uACB0\uC81C\uBB38\uC790\uAC12(refund?.date),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(refund?.amount)),
      /* @__PURE__ */ R.h(R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0, { status: refund?.status }),
      /* @__PURE__ */ R.h("span", { className: "r-payment-wrap-text" }, R\uACB0\uC81C\uBB38\uC790\uAC12(refund?.memo, "\u2014"))
    ]),
    empty: "\uB4F1\uB85D\uB41C \uD658\uBD88 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
  }
));
}
function R\uC785\uAE08\uD655\uC778\uBAA8\uB2EC({ record, store, onClose, onDone }) {
const payment = R\uACB0\uC81C\uD45C\uC2DC\uAC12(record);
const [receiptApproval, setReceiptApproval] = R.useState(payment.receiptApproval);
const [error, setError] = R.useState("");
function \uC644\uB8CC\uCC98\uB9AC() {
  const directValue = receiptApproval.trim();
  if (directValue.length > 80) {
    setError("\uD604\uAE08\uC601\uC218\uC99D \uC2B9\uC778\uBC88\uD638\uB294 80\uC790 \uC774\uB0B4\uC758 \uC9C1\uC811 \uD655\uC778\uAC12\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  if (store?.updateMany) {
    store.updateMany("payments", [record.id], { receiptApproval: directValue }, "\uD604\uAE08\uC601\uC218\uC99D \uC2B9\uC778\uBC88\uD638 \uAE30\uB85D");
  }
  if (store?.confirmBank) {
    store.confirmBank(record.id);
  } else if (store?.updateMany) {
    store.updateMany("payments", [record.id], { status: "\uC644\uB8CC" }, "\uC785\uAE08 \uD655\uC778");
    store?.notify?.("\uC785\uAE08 \uD655\uC778\uC740 \uC774 \uC2DC\uC548\uC758 \uB85C\uCEEC \uC608\uC2DC \uB370\uC774\uD130\uC5D0\uB9CC \uBC18\uC601\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  onDone?.(directValue);
}
return /* @__PURE__ */ R.h(R.Modal, { title: "\uC785\uAE08 \uD655\uC778", onClose, className: "r-payment-confirm-modal" }, /* @__PURE__ */ R.h("div", { className: "r-payment-confirm r-stack" }, /* @__PURE__ */ R.h("div", { className: "r-alert", role: "status" }, /* @__PURE__ */ R.h("strong", null, "\uB85C\uCEEC \uC2DC\uC548 \uD655\uC778"), /* @__PURE__ */ R.h("br", null), "\uC544\uB798 \uC785\uB825\uACFC \uD655\uC778 \uCC98\uB9AC\uB294 \uD604\uC7AC \uBE0C\uB77C\uC6B0\uC800\uC758 \uC608\uC2DC \uB370\uC774\uD130\uC5D0\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC2E4\uC81C \uACC4\uC88C \uC870\uD68C\xB7\uD604\uAE08\uC601\uC218\uC99D \uBC1C\uD589\xB7\uD68C\uC6D0 \uC11C\uBE44\uC2A4 \uC6B4\uC601 \uC5F0\uB3D9\uC740 \uC218\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ R.h("section", { className: "r-payment-confirm-target", "aria-label": "\uC785\uAE08 \uD655\uC778 \uB300\uC0C1" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "PAYMENT TO CONFIRM"), /* @__PURE__ */ R.h("strong", null, payment.memberName, " \xB7 ", payment.product), /* @__PURE__ */ R.h("span", null, payment.memberId, " \xB7 \uC2E0\uCCAD\uC77C ", payment.date)), /* @__PURE__ */ R.h("strong", { className: "r-payment-confirm-target__amount" }, R.money(payment.amount))), /* @__PURE__ */ R.h("section", { className: "r-payment-confirm-section", "aria-labelledby": "cash-receipt-request-title" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "CASH RECEIPT REQUEST"), /* @__PURE__ */ R.h("h3", { id: "cash-receipt-request-title" }, "\uD604\uAE08\uC601\uC218\uC99D \uBC1C\uD589 \uC694\uCCAD \uC815\uBCF4")), /* @__PURE__ */ R.h(R.Badge, { tone: payment.receiptRequested ? "blue" : "gray" }, payment.receiptRequested ? "\uC694\uCCAD \uC788\uC74C" : "\uC694\uCCAD \uC5C6\uC74C")), /* @__PURE__ */ R.h(R\uACB0\uC81C\uC601\uC218\uC99D\uC694\uC57D, { record })), /* @__PURE__ */ R.h("section", { className: "r-payment-confirm-section", "aria-labelledby": "cash-receipt-approval-title" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "MANUAL ENTRY"), /* @__PURE__ */ R.h("h3", { id: "cash-receipt-approval-title" }, "\uD604\uAE08\uC601\uC218\uC99D \uC2B9\uC778\uBC88\uD638"))), /* @__PURE__ */ R.h(
  R.Field,
  {
    label: "\uD604\uAE08\uC601\uC218\uC99D \uC2B9\uC778\uBC88\uD638 \uC9C1\uC811 \uC785\uB825",
    hint: payment.receiptRequested ? "\uBC1C\uD589\uC744 \uD655\uC778\uD55C \uB4A4 \uC2B9\uC778\uBC88\uD638\uB97C \uC9C1\uC811 \uC785\uB825\uD558\uC138\uC694. \uC790\uB3D9 \uBC1C\uAE09\xB7\uC790\uB3D9 \uCC44\uC6C0\uC740 \uD558\uC9C0 \uC54A\uB294 \uC2DC\uC548\uC785\uB2C8\uB2E4." : "\uBC1C\uD589 \uC694\uCCAD\uC774 \uC5C6\uB294 \uAC74\uC785\uB2C8\uB2E4. \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB9CC \uC2B9\uC778\uBC88\uD638\uB97C \uC9C1\uC811 \uAE30\uB85D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
  },
  /* @__PURE__ */ R.h(
    "input",
    {
      type: "text",
      value: receiptApproval,
      maxLength: "80",
      autoComplete: "off",
      "aria-describedby": "cash-receipt-approval-help",
      placeholder: "\uC608: CASH-20261008-0001",
      onChange: (event) => {
        setReceiptApproval(event.target.value);
        setError("");
      }
    }
  )
), /* @__PURE__ */ R.h("p", { id: "cash-receipt-approval-help", className: "r-payment-direct-note" }, "\uC2B9\uC778\uBC88\uD638\uB294 \uC608\uC2DC\uB97C \uC0DD\uC131\uD558\uC9C0 \uC54A\uACE0, \uC785\uB825\uD55C \uAC12 \uADF8\uB300\uB85C \uC774 \uAE30\uAE30\uC758 \uACB0\uC81C \uAE30\uB85D\uC5D0\uB9CC \uC800\uC7A5\uD569\uB2C8\uB2E4."), error && /* @__PURE__ */ R.h("p", { className: "r-payment-field-error", role: "alert" }, error)), /* @__PURE__ */ R.h("div", { className: "r-actions r-payment-confirm-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: onClose }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: \uC644\uB8CC\uCC98\uB9AC }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), "\uC785\uAE08 \uD655\uC778 \uC644\uB8CC"))));
}
function RPaymentDetail({ record, store, onClose }) {
const [confirmOpen, setConfirmOpen] = R.useState(false);
if (!record) return null;
const payment = R\uACB0\uC81C\uD45C\uC2DC\uAC12(record);
const isCard = payment.method === "\uCE74\uB4DC";
const isBank = payment.method === "\uBB34\uD1B5\uC7A5\uC785\uAE08";
const isPoint = payment.method === "\uD3EC\uC778\uD2B8";
if (confirmOpen) {
  return /* @__PURE__ */ R.h(
    R\uC785\uAE08\uD655\uC778\uBAA8\uB2EC,
    {
      record,
      store,
      onClose: () => setConfirmOpen(false),
      onDone: () => {
        setConfirmOpen(false);
        onClose?.();
      }
    }
  );
}
return /* @__PURE__ */ R.h(R.Modal, { title: "\uACB0\uC81C \uC0C1\uC138 \uB0B4\uC5ED", onClose, wide: true, className: "r-payment-detail-modal" }, /* @__PURE__ */ R.h("div", { className: "r-payment-detail r-stack" }, /* @__PURE__ */ R.h("div", { className: "r-note r-payment-detail-note" }, /* @__PURE__ */ R.h("strong", null, "\uC2DC\uC548\uC6A9 \uACB0\uC81C \uC815\uBCF4"), "\uC785\uB2C8\uB2E4. \uCE74\uB4DC \uACB0\uC81C\uC640 \uBB34\uD1B5\uC7A5\uC785\uAE08\uC758 \uC0C1\uC138 \uD56D\uBAA9\uC744 \uBD84\uB9AC\uD574 \uD45C\uC2DC\uD558\uBA70, \uC2E4\uC81C \uC2B9\uC778\xB7\uBC1C\uD589 \uB0B4\uC5ED\uC744 \uC870\uD68C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ R.h("section", { className: "r-payment-detail-hero", "aria-label": "\uACB0\uC81C \uAE30\uBCF8 \uC815\uBCF4" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "PAYMENT #", payment.id), /* @__PURE__ */ R.h("h3", null, payment.product), /* @__PURE__ */ R.h("p", null, payment.memberName, " ", /* @__PURE__ */ R.h("span", { "aria-hidden": "true" }, "\xB7"), " ", payment.memberId)), /* @__PURE__ */ R.h("div", { className: "r-payment-detail-hero__right" }, /* @__PURE__ */ R.h("strong", null, R.money(payment.amount)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h(R\uACB0\uC81C\uC218\uB2E8\uBC30\uC9C0, { method: payment.method }), /* @__PURE__ */ R.h(R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0, { status: payment.status })))), /* @__PURE__ */ R.h("section", { className: "r-payment-detail-section", "aria-labelledby": "payment-common-title" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "COMMON INFORMATION"), /* @__PURE__ */ R.h("h3", { id: "payment-common-title" }, "\uACB0\uC81C \uAE30\uBCF8 \uC815\uBCF4"))), /* @__PURE__ */ R.h("dl", { className: "r-payment-info-grid" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C\uBC88\uD638"), /* @__PURE__ */ R.h("dd", { className: "r-payment-mono" }, payment.id)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uCC98\uB9AC \uC0C1\uD0DC"), /* @__PURE__ */ R.h("dd", null, /* @__PURE__ */ R.h(R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0, { status: payment.status }))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uD68C\uC6D0 \uC544\uC774\uB514"), /* @__PURE__ */ R.h("dd", null, payment.memberId)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uD68C\uC6D0 \uC774\uB984"), /* @__PURE__ */ R.h("dd", null, payment.memberName)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C \uD488\uBAA9"), /* @__PURE__ */ R.h("dd", null, payment.product)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C\uAE08\uC561"), /* @__PURE__ */ R.h("dd", { className: "r-money" }, R.money(payment.amount))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C\uC218\uB2E8"), /* @__PURE__ */ R.h("dd", null, /* @__PURE__ */ R.h(R\uACB0\uC81C\uC218\uB2E8\uBC30\uC9C0, { method: payment.method }))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C\uC77C"), /* @__PURE__ */ R.h("dd", null, payment.date)))), isCard && /* @__PURE__ */ R.h("section", { className: "r-payment-detail-section r-payment-method-card", "aria-labelledby": "card-payment-title" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "CARD PAYMENT"), /* @__PURE__ */ R.h("h3", { id: "card-payment-title" }, "\uCE74\uB4DC \uACB0\uC81C \uC2B9\uC778 \uC815\uBCF4")), /* @__PURE__ */ R.h(R\uACB0\uC81C\uC218\uB2E8\uBC30\uC9C0, { method: "\uCE74\uB4DC" })), /* @__PURE__ */ R.h("div", { className: "r-payment-method-intro" }, /* @__PURE__ */ R.h("span", { className: "r-payment-method-symbol", "aria-hidden": "true" }, "CARD"), /* @__PURE__ */ R.h("p", null, "\uCE74\uB4DC \uACB0\uC81C \uAC74\uC740 \uCE74\uB4DC\uC0AC\xB7\uCE74\uB4DC \uC2B9\uC778\uBC88\uD638\uB97C \uC911\uC2EC\uC73C\uB85C \uD655\uC778\uD569\uB2C8\uB2E4. \uBB34\uD1B5\uC7A5 \uC785\uAE08 \uACC4\uC88C \uBC0F \uD604\uAE08\uC601\uC218\uC99D \uBC1C\uD589 \uC785\uB825 \uD56D\uBAA9\uC740 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("dl", { className: "r-payment-info-grid r-payment-info-grid--method" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uCE74\uB4DC\uC0AC"), /* @__PURE__ */ R.h("dd", null, payment.cardCompany)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uCE74\uB4DC \uC2B9\uC778\uBC88\uD638"), /* @__PURE__ */ R.h("dd", { className: "r-payment-mono" }, payment.cardApproval)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC2B9\uC778 \uAE30\uC900\uC77C"), /* @__PURE__ */ R.h("dd", null, payment.date)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uCC98\uB9AC \uC0C1\uD0DC"), /* @__PURE__ */ R.h("dd", null, /* @__PURE__ */ R.h(R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0, { status: payment.status }))))), isBank && /* @__PURE__ */ R.h("section", { className: "r-payment-detail-section r-payment-method-bank", "aria-labelledby": "bank-payment-title" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "BANK TRANSFER"), /* @__PURE__ */ R.h("h3", { id: "bank-payment-title" }, "\uBB34\uD1B5\uC7A5\uC785\uAE08 \uC2E0\uCCAD\xB7\uD655\uC778 \uC815\uBCF4")), /* @__PURE__ */ R.h(R\uACB0\uC81C\uC218\uB2E8\uBC30\uC9C0, { method: "\uBB34\uD1B5\uC7A5\uC785\uAE08" })), /* @__PURE__ */ R.h("div", { className: "r-payment-method-intro" }, /* @__PURE__ */ R.h("span", { className: "r-payment-method-symbol", "aria-hidden": "true" }, "BANK"), /* @__PURE__ */ R.h("p", null, "\uBB34\uD1B5\uC7A5\uC785\uAE08 \uAC74\uC740 \uC2E0\uCCAD \uAE08\uC561\xB7\uC785\uAE08\uC740\uD589\xB7\uC785\uAE08\uC790\uBA85\uACFC \uD604\uAE08\uC601\uC218\uC99D \uC694\uCCAD \uC815\uBCF4\uB97C \uBCC4\uB3C4\uB85C \uD655\uC778\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("dl", { className: "r-payment-info-grid r-payment-info-grid--method" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC785\uAE08\uC740\uD589"), /* @__PURE__ */ R.h("dd", null, payment.bank)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC785\uAE08\uC790\uBA85"), /* @__PURE__ */ R.h("dd", null, payment.depositor)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC2E0\uCCAD \uAE08\uC561"), /* @__PURE__ */ R.h("dd", { className: "r-money" }, R.money(payment.amount))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC785\uAE08 \uC2E0\uCCAD\uC77C"), /* @__PURE__ */ R.h("dd", null, payment.date)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC785\uAE08 \uD655\uC778 \uC0C1\uD0DC"), /* @__PURE__ */ R.h("dd", null, /* @__PURE__ */ R.h(R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0, { status: payment.status }))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uD604\uAE08\uC601\uC218\uC99D \uC2B9\uC778\uBC88\uD638"), /* @__PURE__ */ R.h("dd", { className: "r-payment-mono" }, payment.receiptApproval || "\uBBF8\uC785\uB825"))), /* @__PURE__ */ R.h(R\uACB0\uC81C\uC601\uC218\uC99D\uC694\uC57D, { record }), payment.status === "\uC785\uAE08\uB300\uAE30" && /* @__PURE__ */ R.h("div", { className: "r-payment-bank-action" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("strong", null, "\uC785\uAE08 \uD655\uC778 \uC804 \uC810\uAC80"), /* @__PURE__ */ R.h("p", null, "\uD604\uAE08\uC601\uC218\uC99D \uBC1C\uD589 \uC694\uCCAD\uC758 \uAD6C\uBD84\xB7\uC2DD\uBCC4\uBC88\uD638\uB97C \uD655\uC778\uD55C \uB4A4, \uBC1C\uD589 \uC2B9\uC778\uBC88\uD638\uB97C \uC9C1\uC811 \uC785\uB825\uD558\uC5EC \uC785\uAE08 \uD655\uC778\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: () => setConfirmOpen(true) }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), "\uC785\uAE08 \uD655\uC778"))), isPoint && /* @__PURE__ */ R.h("section", { className: "r-payment-detail-section r-payment-method-point", "aria-labelledby": "point-payment-title" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "POINT PAYMENT"), /* @__PURE__ */ R.h("h3", { id: "point-payment-title" }, "\uD3EC\uC778\uD2B8 \uC0AC\uC6A9 \uC815\uBCF4")), /* @__PURE__ */ R.h(R\uACB0\uC81C\uC218\uB2E8\uBC30\uC9C0, { method: "\uD3EC\uC778\uD2B8" })), /* @__PURE__ */ R.h("div", { className: "r-payment-method-intro" }, /* @__PURE__ */ R.h("span", { className: "r-payment-method-symbol", "aria-hidden": "true" }, "POINT"), /* @__PURE__ */ R.h("p", null, "\uD3EC\uC778\uD2B8 \uACB0\uC81C \uAC74\uC740 \uCE74\uB4DC\xB7\uBB34\uD1B5\uC7A5\uC785\uAE08 \uC0C1\uC138 \uD3FC\uACFC \uAD6C\uBD84\uD574 \uD3EC\uC778\uD2B8 \uC0AC\uC6A9 \uACB0\uC81C\uC784\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("dl", { className: "r-payment-info-grid r-payment-info-grid--method" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC0AC\uC6A9 \uD3EC\uC778\uD2B8"), /* @__PURE__ */ R.h("dd", { className: "r-money" }, R.money(payment.amount))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uCC98\uB9AC \uC0C1\uD0DC"), /* @__PURE__ */ R.h("dd", null, /* @__PURE__ */ R.h(R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0, { status: payment.status }))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C\uC77C"), /* @__PURE__ */ R.h("dd", null, payment.date)), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uD604\uAE08\uC601\uC218\uC99D"), /* @__PURE__ */ R.h("dd", null, "\uD3EC\uC778\uD2B8 \uACB0\uC81C \uC608\uC2DC \u2014 \uBCC4\uB3C4 \uC694\uCCAD \uC5C6\uC74C")))), /* @__PURE__ */ R.h("section", { className: "r-payment-detail-section", "aria-labelledby": "payment-memo-title" }, /* @__PURE__ */ R.h("div", { className: "r-payment-section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "PROCESSING NOTE"), /* @__PURE__ */ R.h("h3", { id: "payment-memo-title" }, "\uCC98\uB9AC \uBA54\uBAA8"))), /* @__PURE__ */ R.h("p", { className: "r-payment-memo" }, payment.memo)), /* @__PURE__ */ R.h(R\uACB0\uC81C\uD658\uBD88\uC694\uC57D, { record }), /* @__PURE__ */ R.h("div", { className: "r-actions r-payment-detail-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: onClose }, "\uB2EB\uAE30"))));
}
function RPayments({ spec, store }) {
const [search, setSearch] = R.useState("");
const [statusFilter, setStatusFilter] = R.useState("\uC804\uCCB4");
const [receiptFilter, setReceiptFilter] = R.useState("\uC804\uCCB4");
const [detail, setDetail] = R.useState(null);
const [confirmRecord, setConfirmRecord] = R.useState(null);
const route = R.text(spec?.path);
const viewMode = route.indexOf("/bank") >= 0 ? "bank" : route.indexOf("/card") >= 0 ? "card" : "all";
const allPayments = Array.isArray(store?.state?.records?.payments) ? store.state.records.payments : [];
const scopedPayments = R.useMemo(() => allPayments.filter((row) => {
  if (viewMode === "bank") return row.method === "\uBB34\uD1B5\uC7A5\uC785\uAE08";
  if (viewMode === "card") return row.method === "\uCE74\uB4DC";
  return true;
}), [allPayments, viewMode]);
const filteredPayments = R.useMemo(() => {
  const keyword = search.trim().toLowerCase();
  return scopedPayments.filter((row) => {
    const payment = R\uACB0\uC81C\uD45C\uC2DC\uAC12(row);
    const target = [payment.id, payment.memberId, payment.memberName, payment.product, payment.depositor, payment.bank].join(" ").toLowerCase();
    const receiptMatches = receiptFilter === "\uC804\uCCB4" || receiptFilter === "\uC694\uCCAD \uC788\uC74C" && payment.receiptRequested || receiptFilter === "\uC694\uCCAD \uC5C6\uC74C" && !payment.receiptRequested;
    return (!keyword || target.indexOf(keyword) >= 0) && (statusFilter === "\uC804\uCCB4" || payment.status === statusFilter) && receiptMatches;
  });
}, [scopedPayments, search, statusFilter, receiptFilter]);
const completeCount = scopedPayments.filter((row) => R\uACB0\uC81C\uBB38\uC790\uAC12(row.status) === "\uC644\uB8CC").length;
const pendingRows = scopedPayments.filter((row) => R\uACB0\uC81C\uBB38\uC790\uAC12(row.status) === "\uC785\uAE08\uB300\uAE30" && R\uACB0\uC81C\uBB38\uC790\uAC12(row.method) === "\uBB34\uD1B5\uC7A5\uC785\uAE08");
const receiptRequestCount = scopedPayments.filter((row) => R\uACB0\uC81C\uD45C\uC2DC\uAC12(row).receiptRequested).length;
const totalAmount = filteredPayments.reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
const title = R\uACB0\uC81C\uBB38\uC790\uAC12(spec?.title, viewMode === "bank" ? "\uBB34\uD1B5\uC7A5 \uC785\uAE08 \uB0B4\uC5ED" : viewMode === "card" ? "\uCE74\uB4DC \uACB0\uC81C \uB0B4\uC5ED" : "\uC804\uCCB4 \uACB0\uC81C \uB0B4\uC5ED");
const subtitle = viewMode === "bank" ? "\uBB34\uD1B5\uC7A5\uC785\uAE08 \uC2E0\uCCAD\uC744 \uD655\uC778\uD558\uACE0, \uD604\uAE08\uC601\uC218\uC99D \uC694\uCCAD \uC815\uBCF4\uC640 \uC2B9\uC778\uBC88\uD638\uB97C \uB85C\uCEEC \uC608\uC2DC\uB85C \uAD00\uB9AC\uD569\uB2C8\uB2E4." : viewMode === "card" ? "\uCE74\uB4DC\uC0AC\uC640 \uCE74\uB4DC \uC2B9\uC778\uBC88\uD638\uB97C \uC911\uC2EC\uC73C\uB85C \uCE74\uB4DC \uACB0\uC81C \uC608\uC2DC\uB97C \uC870\uD68C\uD569\uB2C8\uB2E4." : "\uACB0\uC81C \uC218\uB2E8\uBCC4 \uC0C1\uC138 \uC815\uBCF4\uC640 \uC785\uAE08\uB300\uAE30 \uC0C1\uD0DC\uB97C \uAD6C\uBD84\uD574 \uD655\uC778\uD569\uB2C8\uB2E4.";
function \uCD08\uAE30\uD654() {
  setSearch("");
  setStatusFilter("\uC804\uCCB4");
  setReceiptFilter("\uC804\uCCB4");
}
function \uACB0\uC81C\uD589(row) {
  const payment = R\uACB0\uC81C\uD45C\uC2DC\uAC12(row);
  const base = [
    payment.date,
    /* @__PURE__ */ R.h("span", { className: "r-payment-mono r-payment-id" }, payment.id),
    /* @__PURE__ */ R.h("div", { className: "r-payment-member" }, /* @__PURE__ */ R.h("strong", null, payment.memberName), /* @__PURE__ */ R.h("small", null, payment.memberId)),
    /* @__PURE__ */ R.h("span", { className: "r-payment-product" }, payment.product),
    /* @__PURE__ */ R.h(R\uACB0\uC81C\uC218\uB2E8\uBC30\uC9C0, { method: payment.method }),
    /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(payment.amount)),
    /* @__PURE__ */ R.h(R\uACB0\uC81C\uC0C1\uD0DC\uBC30\uC9C0, { status: payment.status })
  ];
  if (viewMode === "card") {
    base.push(/* @__PURE__ */ R.h("span", { className: "r-payment-mono" }, payment.cardApproval));
  }
  if (viewMode === "bank") {
    base.push(/* @__PURE__ */ R.h("div", { className: "r-payment-depositor" }, /* @__PURE__ */ R.h("strong", null, payment.depositor), /* @__PURE__ */ R.h("small", null, payment.bank)));
    base.push(/* @__PURE__ */ R.h(R.Badge, { tone: payment.receiptRequested ? "blue" : "gray" }, payment.receiptRequested ? payment.receiptType : "\uC694\uCCAD \uC5C6\uC74C"));
  }
  base.push(/* @__PURE__ */ R.h("div", { className: "r-actions r-payment-row-actions" }, payment.method === "\uBB34\uD1B5\uC7A5\uC785\uAE08" && payment.status === "\uC785\uAE08\uB300\uAE30" && /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary r-payment-confirm-button", onClick: () => setConfirmRecord(row) }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), "\uC785\uAE08 \uD655\uC778"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => setDetail(row) }, "\uC0C1\uC138")));
  return base;
}
const headers = ["\uACB0\uC81C\uC77C", "\uACB0\uC81C\uBC88\uD638", "\uD68C\uC6D0", "\uACB0\uC81C \uD488\uBAA9", "\uACB0\uC81C\uC218\uB2E8", "\uACB0\uC81C\uAE08\uC561", "\uCC98\uB9AC \uC0C1\uD0DC"];
if (viewMode === "card") headers.push("\uCE74\uB4DC \uC2B9\uC778\uBC88\uD638");
if (viewMode === "bank") headers.push("\uC785\uAE08\uC790\uBA85 / \uC740\uD589", "\uD604\uAE08\uC601\uC218\uC99D");
headers.push("\uAD00\uB9AC");
return /* @__PURE__ */ R.h("div", { className: "r-payments r-stack" }, /* @__PURE__ */ R.h("section", { className: "r-payment-page-intro" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-payment-kicker" }, "PAYMENTS"), /* @__PURE__ */ R.h("h1", null, title), /* @__PURE__ */ R.h("p", null, subtitle)), /* @__PURE__ */ R.h("span", { className: "r-handoff-tag" }, "\uB85C\uCEEC \uC608\uC2DC \uB370\uC774\uD130")), /* @__PURE__ */ R.h("nav", { className: "r-payment-tabs", "aria-label": "\uACB0\uC81C \uB0B4\uC5ED \uC720\uD615" }, /* @__PURE__ */ R.h("a", { href: "#/admin/payments/all", className: viewMode === "all" ? "is-active" : "" }, "\uC804\uCCB4 \uACB0\uC81C ", /* @__PURE__ */ R.h("span", null, R.num(allPayments.length))), /* @__PURE__ */ R.h("a", { href: "#/admin/payments/card", className: viewMode === "card" ? "is-active" : "" }, "\uCE74\uB4DC \uACB0\uC81C ", /* @__PURE__ */ R.h("span", null, R.num(allPayments.filter((row) => row.method === "\uCE74\uB4DC").length))), /* @__PURE__ */ R.h("a", { href: "#/admin/payments/bank", className: viewMode === "bank" ? "is-active" : "" }, "\uBB34\uD1B5\uC7A5 \uC785\uAE08 ", /* @__PURE__ */ R.h("span", null, R.num(allPayments.filter((row) => row.method === "\uBB34\uD1B5\uC7A5\uC785\uAE08").length)))), /* @__PURE__ */ R.h("div", { className: "r-grid4 r-payment-kpis" }, /* @__PURE__ */ R.h(R.KPI, { label: "\uC870\uD68C \uACB0\uC81C", value: R.num(scopedPayments.length) + "\uAC74", detail: "\uD604\uC7AC \uBA54\uB274 \uAE30\uC900", tone: "blue" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uC644\uB8CC \uACB0\uC81C", value: R.num(completeCount) + "\uAC74", detail: "\uCC98\uB9AC \uC0C1\uD0DC \uC644\uB8CC", tone: "green" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uC785\uAE08 \uD655\uC778 \uB300\uAE30", value: R.num(pendingRows.length) + "\uAC74", detail: "\uBB34\uD1B5\uC7A5\uC785\uAE08\uB9CC \uC9D1\uACC4", tone: "red" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uD604\uAE08\uC601\uC218\uC99D \uC694\uCCAD", value: R.num(receiptRequestCount) + "\uAC74", detail: "\uC2E0\uCCAD\uC548\uD568 \uC81C\uC678", tone: "blue" })), pendingRows.length > 0 && /* @__PURE__ */ R.h("div", { className: "r-alert r-payment-pending-alert", role: "status" }, /* @__PURE__ */ R.h("strong", null, "\uC785\uAE08 \uD655\uC778 \uB300\uAE30 ", R.num(pendingRows.length), "\uAC74"), " \xB7 \uC785\uAE08 \uD655\uC778\uC744 \uB204\uB974\uBA74 \uD604\uAE08\uC601\uC218\uC99D \uC694\uCCAD\uC758 \uAD6C\uBD84\xB7\uC2DD\uBCC4\uBC88\uD638\uC640 \uC2B9\uC778\uBC88\uD638 \uC9C1\uC811 \uC785\uB825\uB780\uC774 \uD45C\uC2DC\uB429\uB2C8\uB2E4."), /* @__PURE__ */ R.h(R.Panel, { title, subtitle: "\uAC80\uC0C9 \uACB0\uACFC " + R.num(filteredPayments.length) + "\uAC74 \xB7 \uAE08\uC561 \uD569\uACC4 " + R.money(totalAmount) }, /* @__PURE__ */ R.h("div", { className: "r-toolbar r-payment-toolbar" }, /* @__PURE__ */ R.h("div", { className: "r-payment-search-wrap" }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), /* @__PURE__ */ R.h(
  "input",
  {
    type: "search",
    value: search,
    placeholder: "\uD68C\uC6D0\uBA85, \uC544\uC774\uB514, \uACB0\uC81C\uBC88\uD638, \uD488\uBAA9, \uC785\uAE08\uC790\uBA85 \uAC80\uC0C9",
    "aria-label": "\uACB0\uC81C \uB0B4\uC5ED \uAC80\uC0C9",
    onChange: (event) => setSearch(event.target.value)
  }
)), /* @__PURE__ */ R.h("div", { className: "r-payment-filter-group" }, /* @__PURE__ */ R.h("label", null, "\uCC98\uB9AC \uC0C1\uD0DC", /* @__PURE__ */ R.h("select", { value: statusFilter, onChange: (event) => setStatusFilter(event.target.value) }, /* @__PURE__ */ R.h("option", null, "\uC804\uCCB4"), /* @__PURE__ */ R.h("option", null, "\uC785\uAE08\uB300\uAE30"), /* @__PURE__ */ R.h("option", null, "\uC644\uB8CC"), /* @__PURE__ */ R.h("option", null, "\uBD80\uBD84\uD658\uBD88"), /* @__PURE__ */ R.h("option", null, "\uD658\uBD88\uC644\uB8CC"), /* @__PURE__ */ R.h("option", null, "\uCDE8\uC18C"))), (viewMode === "bank" || viewMode === "all") && /* @__PURE__ */ R.h("label", null, "\uD604\uAE08\uC601\uC218\uC99D", /* @__PURE__ */ R.h("select", { value: receiptFilter, onChange: (event) => setReceiptFilter(event.target.value) }, /* @__PURE__ */ R.h("option", null, "\uC804\uCCB4"), /* @__PURE__ */ R.h("option", null, "\uC694\uCCAD \uC788\uC74C"), /* @__PURE__ */ R.h("option", null, "\uC694\uCCAD \uC5C6\uC74C"))), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: \uCD08\uAE30\uD654 }, "\uCD08\uAE30\uD654"))), /* @__PURE__ */ R.h(
  R.Table,
  {
    className: "r-payment-table r-payment-table--" + viewMode,
    headers,
    rows: filteredPayments.map(\uACB0\uC81C\uD589),
    empty: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uACB0\uC81C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uAC80\uC0C9\uC5B4\uB098 \uD544\uD130\uB97C \uCD08\uAE30\uD654\uD574\uBCF4\uC138\uC694."
  }
), /* @__PURE__ */ R.h("p", { className: "r-payment-footnote" }, "\uBAA8\uB4E0 \uACB0\uC81C\xB7\uC2B9\uC778\uBC88\uD638\xB7\uD604\uAE08\uC601\uC218\uC99D \uC2DD\uBCC4\uBC88\uD638\uB294 \uD654\uBA74 \uB3D9\uC791 \uD655\uC778\uC744 \uC704\uD55C \uB85C\uCEEC \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACB0\uC81C \uB610\uB294 \uBC1C\uD589 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), detail && /* @__PURE__ */ R.h(RPaymentDetail, { record: detail, store, onClose: () => setDetail(null) }), confirmRecord && /* @__PURE__ */ R.h(R\uC785\uAE08\uD655\uC778\uBAA8\uB2EC, { record: confirmRecord, store, onClose: () => setConfirmRecord(null), onDone: () => setConfirmRecord(null) }));
}
const R_SITE_TERM_TYPES = [
"\uC774\uC6A9\uC57D\uAD00",
"\uAC1C\uC778\uC815\uBCF4 \uCDE8\uAE09\uBC29\uCE68",
"\uD22C\uC790 \uC720\uC758\uC0AC\uD56D",
"\uAC1C\uC778\uC815\uBCF4 \uB3D9\uC758 VIP",
"\uAC1C\uC778\uC815\uBCF4 \uB3D9\uC758 \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1",
"\uC11C\uBE44\uC2A4 \uC57D\uAD00 VIP",
"\uC11C\uBE44\uC2A4 \uC57D\uAD00 \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1"
];
function siteNowId(prefix) {
return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 6);
}
function siteRecords(store, domain) {
return store && store.state && store.state.records && store.state.records[domain] || [];
}
function siteProducts(store) {
return siteRecords(store, "products");
}
function siteProductOptions(product) {
const options = Array.isArray(product && product.options) ? product.options : [];
if (options.length) return options;
return [{
  id: "base",
  title: (product && product.baseMonths ? product.baseMonths : 1) + "\uAC1C\uC6D4",
  baseMonths: Number(product && product.baseMonths) || 1,
  bonusMonths: Number(product && product.bonusMonths) || 0,
  amount: Number(product && (product.monthlyAmount || product.amount)) || 0
}];
}
function siteProductName(products, id) {
const product = products.find(function(item) {
  return item.id === id;
});
return product ? R.text(product.title) : "\uC5F0\uACB0 \uC0C1\uD488\uC744 \uC120\uD0DD\uD558\uC138\uC694";
}
function siteTone(value) {
if (value === "\uD310\uB9E4\uC911" || value === "\uB178\uCD9C") return "green";
if (value === "\uD310\uB9E4\uC911\uC9C0" || value === "\uC228\uAE40" || value === "\uBBF8\uB178\uCD9C") return "gray";
return "amber";
}
function siteSave(store, domain, row, message) {
store.save(domain, row);
if (store.notify) store.notify(message || "\uC2DC\uC548 \uB370\uC774\uD130\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
function siteBlankProduct() {
return {
  id: siteNowId("product"),
  title: "",
  expert: "",
  visible: "\uD310\uB9E4\uC911",
  baseMonths: 1,
  bonusMonths: 0,
  amount: 0,
  monthlyAmount: 0,
  options: [{ id: siteNowId("option"), title: "1\uAC1C\uC6D4", baseMonths: 1, bonusMonths: 0, amount: 0 }],
  event: false,
  eventText: "",
  eventSettings: {
    firstCome: { enabled: false, capacity: 30, demoCount: 25, rawMockData: "\uC2DC\uC548\uC6A9 \uD45C\uC2DC\uAC12 25\uBA85" },
    timeAttack: { enabled: false, startDate: "", endDate: "" },
    guide: ""
  },
  content: "",
  profileImage: "",
  detailUploads: [],
  display: true,
  groupColor: "#912c2f"
};
}
function siteBlankBanner() {
return {
  id: siteNowId("banner"),
  title: "",
  subtitle: "",
  image: "",
  visible: "\uB178\uCD9C",
  display: true,
  linkMode: "product",
  productId: "",
  url: "",
  order: 0
};
}
function siteBlankRoom() {
return {
  id: siteNowId("room"),
  title: "",
  intro: "",
  image: "",
  visible: "\uB178\uCD9C",
  display: true,
  productId: "",
  productTitle: "",
  order: 0
};
}
function RSiteInlinePrice({ product, store }) {
const initial = String(product.monthlyAmount == null ? product.amount || 0 : product.monthlyAmount);
const [value, setValue] = R.useState(initial);
R.useEffect(function() {
  setValue(String(product.monthlyAmount == null ? product.amount || 0 : product.monthlyAmount));
}, [product.id, product.monthlyAmount, product.amount]);
function commit() {
  const number = Math.max(0, Number(String(value).replace(/[^0-9]/g, "")) || 0);
  setValue(String(number));
  siteSave(store, "products", Object.assign({}, product, { amount: number, monthlyAmount: number }), "\uC6D4 \uB2E8\uAC00\uB97C \uC0C1\uD488 \uBAA9\uB85D\uC5D0\uC11C \uBC14\uB85C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
return /* @__PURE__ */ R.h("div", { className: "site-inline-price" }, /* @__PURE__ */ R.h("input", { "aria-label": R.text(product.title) + " \uC6D4 \uB2E8\uAC00", inputMode: "numeric", value, onChange: function(e) {
  setValue(e.target.value);
}, onBlur: commit }), /* @__PURE__ */ R.h("span", null, "\uC6D0"), /* @__PURE__ */ R.h("small", null, "\uBAA9\uB85D\uC5D0\uC11C \uC218\uC815"));
}
function RSiteInlineOptions({ product, store }) {
const [options, setOptions] = R.useState(siteProductOptions(product));
R.useEffect(function() {
  setOptions(siteProductOptions(product));
}, [product.id, product.options]);
function patch(index, key, value) {
  const next = options.map(function(option, optionIndex) {
    return optionIndex === index ? Object.assign({}, option, { [key]: key === "amount" || key === "baseMonths" || key === "bonusMonths" ? Math.max(0, Number(String(value).replace(/[^0-9]/g, "")) || 0) : value }) : option;
  });
  setOptions(next);
  siteSave(store, "products", Object.assign({}, product, { options: next }), "\uC635\uC158\uC744 \uC0C1\uD488 \uBAA9\uB85D\uC5D0\uC11C \uBC14\uB85C \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
return /* @__PURE__ */ R.h("div", { className: "site-inline-options" }, options.map(function(option, index) {
  return /* @__PURE__ */ R.h("div", { className: "site-inline-option", key: option.id || index }, /* @__PURE__ */ R.h("input", { "aria-label": R.text(product.title) + " \uC635\uC158\uBA85", value: R.text(option.title), onChange: function(e) {
    setOptions(options.map(function(item, itemIndex) {
      return itemIndex === index ? Object.assign({}, item, { title: e.target.value }) : item;
    }));
  }, onBlur: function(e) {
    patch(index, "title", e.target.value);
  } }), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("input", { "aria-label": R.text(option.title) + " \uC635\uC158\uAC00", inputMode: "numeric", value: String(option.amount || 0), onChange: function(e) {
    setOptions(options.map(function(item, itemIndex) {
      return itemIndex === index ? Object.assign({}, item, { amount: e.target.value }) : item;
    }));
  }, onBlur: function(e) {
    patch(index, "amount", e.target.value);
  } }), /* @__PURE__ */ R.h("span", null, "\uC6D0")));
}), /* @__PURE__ */ R.h("p", { className: "site-inline-help" }, "\uC635\uC158\uBA85\xB7\uC635\uC158\uAC00\uB97C \uC774 \uBAA9\uB85D\uC5D0\uC11C \uC9C1\uC811 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."));
}
function REvent({ product, value, onChange }) {
const settings = value || product && product.eventSettings || {};
const firstCome = Object.assign({ enabled: false, capacity: 30, demoCount: 25, rawMockData: "\uC2DC\uC548\uC6A9 \uD45C\uC2DC\uAC12 25\uBA85", startDate: "", endDate: "" }, settings.firstCome || {});
const timeAttack = Object.assign({ enabled: false, startDate: "", endDate: "", startTime: "", endTime: "" }, settings.timeAttack || {});
const capacity = Math.max(0, Number(firstCome.capacity) || 0);
const demoCount = Math.max(0, Number(firstCome.demoCount) || 0);
const remaining = Math.max(0, capacity - demoCount);
function updateFirst(key, nextValue) {
  onChange(Object.assign({}, settings, { firstCome: Object.assign({}, firstCome, { [key]: nextValue }) }));
}
function updateTime(key, nextValue) {
  onChange(Object.assign({}, settings, { timeAttack: Object.assign({}, timeAttack, { [key]: nextValue }) }));
}
return /* @__PURE__ */ R.h("div", { className: "site-event-stack" }, /* @__PURE__ */ R.h(R.Panel, { title: "\uC120\uCC29\uC21C \uC774\uBCA4\uD2B8 \uC124\uC815", subtitle: "\uBAA8\uC9D1 \uC815\uC6D0\uACFC \uC2DC\uC548\uC6A9 \uD45C\uC2DC\uAC12\uC744 \uBA85\uD655\uD788 \uBD84\uB9AC\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "site-event-heading" }, /* @__PURE__ */ R.h("label", { className: "site-switch" }, /* @__PURE__ */ R.h("input", { type: "checkbox", checked: Boolean(firstCome.enabled), onChange: function(e) {
  updateFirst("enabled", e.target.checked);
} }), /* @__PURE__ */ R.h("span", null, "\uC120\uCC29\uC21C \uC774\uBCA4\uD2B8 \uC0AC\uC6A9")), /* @__PURE__ */ R.h(R.Badge, { tone: firstCome.enabled ? "red" : "gray" }, firstCome.enabled ? "\uC0AC\uC6A9 \uC911" : "\uC0AC\uC6A9 \uC548 \uD568")), /* @__PURE__ */ R.h("div", { className: "r-grid3 site-event-fields" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC120\uCC29\uC21C \uBAA8\uC9D1 \uC815\uC6D0 *", hint: "\uC2E4\uC81C \uBAA8\uC9D1 \uC815\uC6D0\uC744 \uC785\uB825\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "number", min: "1", required: true, value: capacity, onChange: function(e) {
  updateFirst("capacity", Math.max(0, Number(e.target.value) || 0));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC2DC\uC548\uC6A9 \uD45C\uC2DC \uCC38\uC5EC \uC778\uC6D0 *", hint: "\uC6D0\uBB38 \uAC00\uC9DC \uB370\uC774\uD130\uC774\uBA70 \uC2E4\uC81C \uCC38\uC5EC\uC790\uAC00 \uC544\uB2D9\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", required: true, value: demoCount, onChange: function(e) {
  updateFirst("demoCount", Math.max(0, Number(e.target.value) || 0));
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC2DC\uC548\uC0C1 \uC794\uC5EC \uC778\uC6D0", hint: "\uC815\uC6D0 \u2212 \uC2DC\uC548\uC6A9 \uD45C\uC2DC \uCC38\uC5EC \uC778\uC6D0\uC73C\uB85C \uC790\uB3D9 \uACC4\uC0B0\uB429\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { className: "site-readonly-input", value: R.num(remaining) + "\uBA85", readOnly: true, "aria-readonly": "true" }))), /* @__PURE__ */ R.h("div", { className: "site-capacity-preview", "aria-label": "\uC120\uCC29\uC21C \uC2DC\uC548 \uD45C\uC2DC \uBBF8\uB9AC\uBCF4\uAE30" }, /* @__PURE__ */ R.h("span", null, "\uC0AC\uC774\uD2B8 \uD45C\uC2DC \uC2DC\uC548"), /* @__PURE__ */ R.h("strong", null, "\uC815\uC6D0 ", R.num(capacity), "\uBA85"), /* @__PURE__ */ R.h("b", null, "\uC2DC\uC548\uC6A9 \uD45C\uC2DC \uCC38\uC5EC ", R.num(demoCount), "\uBA85"), /* @__PURE__ */ R.h("em", null, "\uC794\uC5EC ", R.num(remaining), "\uBA85")), /* @__PURE__ */ R.h(R.Field, { label: "\uC6D0\uBB38 \uAC00\uC9DC \uB370\uC774\uD130(\uC2DC\uC548\uC6A9 \uD45C\uC2DC\uAC12)", hint: "\uC2E4\uC81C \uC120\uCC29\uC21C 30\uBA85 \uC911 \uAC00\uC9DC \uB370\uC774\uD130 25\uBA85\uC744 \uB123\uC5B4 \uC794\uC5EC 5\uBA85\uC73C\uB85C \uBCF4\uC774\uAC8C \uD558\uB294 \uC2DC\uC548 \uC785\uB825\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACE0\uAC1D \uB370\uC774\uD130\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", className: "site-event-full" }, /* @__PURE__ */ R.h("input", { required: true, value: R.text(firstCome.rawMockData), onChange: function(e) {
  updateFirst("rawMockData", e.target.value);
}, placeholder: "\uC608: \uC2DC\uC548\uC6A9 \uD45C\uC2DC\uAC12 25\uBA85" })), /* @__PURE__ */ R.h("div", { className: "r-grid2 site-event-fields" }, /* @__PURE__ */ R.h(R.Field, { label: "\uBAA8\uC9D1 \uC2DC\uC791\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: R.text(firstCome.startDate), onChange: function(e) {
  updateFirst("startDate", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uBAA8\uC9D1 \uC885\uB8CC\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: R.text(firstCome.endDate), onChange: function(e) {
  updateFirst("endDate", e.target.value);
} })))), /* @__PURE__ */ R.h(R.Panel, { title: "\uD0C0\uC784\uC5B4\uD0DD \uC774\uBCA4\uD2B8 \uC124\uC815", subtitle: "\uC120\uCC29\uC21C\uACFC \uBCC4\uB3C4\uB85C \uAE30\uAC04\xB7\uC2DC\uAC04 \uC81C\uD55C \uC774\uBCA4\uD2B8\uB97C \uC785\uB825\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "site-event-heading" }, /* @__PURE__ */ R.h("label", { className: "site-switch" }, /* @__PURE__ */ R.h("input", { type: "checkbox", checked: Boolean(timeAttack.enabled), onChange: function(e) {
  updateTime("enabled", e.target.checked);
} }), /* @__PURE__ */ R.h("span", null, "\uD0C0\uC784\uC5B4\uD0DD \uC774\uBCA4\uD2B8 \uC0AC\uC6A9")), /* @__PURE__ */ R.h(R.Badge, { tone: timeAttack.enabled ? "amber" : "gray" }, timeAttack.enabled ? "\uAE30\uAC04 \uC124\uC815\uB428" : "\uC0AC\uC6A9 \uC548 \uD568")), /* @__PURE__ */ R.h("div", { className: "r-grid4 site-event-fields" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC2DC\uC791\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: R.text(timeAttack.startDate), onChange: function(e) {
  updateTime("startDate", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC2DC\uC791 \uC2DC\uAC04" }, /* @__PURE__ */ R.h("input", { type: "time", value: R.text(timeAttack.startTime), onChange: function(e) {
  updateTime("startTime", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC885\uB8CC\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: R.text(timeAttack.endDate), onChange: function(e) {
  updateTime("endDate", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC885\uB8CC \uC2DC\uAC04" }, /* @__PURE__ */ R.h("input", { type: "time", value: R.text(timeAttack.endTime), onChange: function(e) {
  updateTime("endTime", e.target.value);
} })))), /* @__PURE__ */ R.h(R.Panel, { title: "\uC774\uBCA4\uD2B8 \uC548\uB0B4", subtitle: "\uC0C1\uD488 \uC0C1\uC138\uC5D0 \uB178\uCD9C\uD560 \uC548\uB0B4 \uBB38\uAD6C\uB97C \uC785\uB825\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(R.Field, { label: "\uC774\uBCA4\uD2B8 \uC548\uB0B4 \uB0B4\uC6A9 *", hint: "\uC2E4\uC6B4\uC601 \uBB38\uAD6C\xB7\uB178\uCD9C \uC870\uAC74\uC740 \uAC1C\uBC1C/\uC6B4\uC601 \uAC80\uD1A0 \uD6C4 \uC5F0\uB3D9\uD574\uC57C \uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(RSecondHtmlEditor, { value: R.text(settings.guide || product && product.eventText), onChange: (html) => onChange({ ...settings, guide: html }), label: "\uC774\uBCA4\uD2B8 \uC548\uB0B4" }))));
}
function RSiteProductEditor({ product, store, onClose }) {
const [draft, setDraft] = R.useState(function() {
  const base = Object.assign({}, siteBlankProduct(), product || {});
  return Object.assign({}, base, { options: siteProductOptions(base), detailUploads: Array.isArray(base.detailUploads) ? base.detailUploads : [] });
});
const [fileNames, setFileNames] = R.useState([]);
const [error, setError] = R.useState("");
function update(key, value) {
  setDraft(function(current) {
    return Object.assign({}, current, { [key]: value });
  });
}
function updateOption(index, key, value) {
  update("options", draft.options.map(function(option, optionIndex) {
    return optionIndex === index ? Object.assign({}, option, { [key]: key === "amount" || key === "baseMonths" || key === "bonusMonths" ? Math.max(0, Number(value) || 0) : value }) : option;
  }));
}
function receiveFiles(event) {
  const files = Array.from(event.target.files || []);
  const names = files.map(function(file) {
    return file.name;
  });
  const html = files.find((f) => /\.html?$/i.test(f.name));
  if (html) {
    html.text().then((content) => setDraft((current) => ({ ...current, content, detailMode: "file" })));
  }
  setFileNames(names);
  update("detailUploads", Array.from(new Set((draft.detailUploads || []).concat(names))));
}
function save() {
  if (!R.text(draft.title).trim()) {
    setError("\uC0C1\uD488\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.");
    return;
  }
  if (!draft.options.length || draft.options.some(function(option) {
    return !R.text(option.title).trim();
  })) {
    setError("\uC635\uC158\uBA85\uACFC \uC635\uC158\uAC00\uB294 \uCD5C\uC18C \uD55C \uAC1C \uC774\uC0C1 \uC785\uB825\uD558\uC138\uC694.");
    return;
  }
  const normalizedOptions = draft.options.map(function(option) {
    return Object.assign({}, option, { id: option.id || siteNowId("option"), title: R.text(option.title).trim(), baseMonths: Number(option.baseMonths) || 0, bonusMonths: Number(option.bonusMonths) || 0, amount: Math.max(0, Number(option.amount) || 0) });
  });
  const first = draft.eventSettings && draft.eventSettings.firstCome;
  const normalized = Object.assign({}, draft, {
    title: R.text(draft.title).trim(),
    amount: Math.max(0, Number(draft.amount) || 0),
    monthlyAmount: Math.max(0, Number(draft.monthlyAmount == null ? draft.amount : draft.monthlyAmount) || 0),
    options: normalizedOptions,
    event: Boolean(first && first.enabled || draft.eventSettings && draft.eventSettings.timeAttack && draft.eventSettings.timeAttack.enabled),
    eventText: R.text(draft.eventSettings && draft.eventSettings.guide),
    display: draft.visible === "\uD310\uB9E4\uC911"
  });
  siteSave(store, "products", normalized, "\uC0C1\uD488 \uC0C1\uC138\xB7\uC635\uC158\xB7\uC774\uBCA4\uD2B8 \uC2DC\uC548\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
  onClose();
}
return /* @__PURE__ */ R.h(R.Modal, { wide: true, title: product ? "VIP \uC0C1\uD488 \uC0C1\uC138 \uD3B8\uC9D1" : "VIP \uC0C1\uD488 \uCD94\uAC00", onClose, className: "site-product-modal" }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("p", { className: "r-alert" }, "\uC774 \uD654\uBA74\uC740 \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC785\uB2C8\uB2E4. HTML \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uBA74 \uC0C1\uC138 \uBCF8\uBB38\uC73C\uB85C \uC77D\uC5B4 iframe\uC5D0\uC11C \uBBF8\uB9AC\uBD05\uB2C8\uB2E4. \uC2E4\uC81C \uC11C\uBC84 \uC5C5\uB85C\uB4DC\uB294 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), error && /* @__PURE__ */ R.h("p", { className: "site-form-error", role: "alert" }, error), /* @__PURE__ */ R.h(R.Panel, { title: "\uAE30\uBCF8 \uC0C1\uD488 \uC815\uBCF4", subtitle: "\uBAA9\uB85D\uC5D0 \uB178\uCD9C\uB418\uB294 \uB2E8\uAC00\uC640 \uD310\uB9E4 \uC0C1\uD0DC\uB97C \uC124\uC815\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC0C1\uD488\uBA85 *" }, /* @__PURE__ */ R.h("input", { required: true, value: R.text(draft.title), onChange: function(e) {
  update("title", e.target.value);
}, placeholder: "\uC608: \uACE8\uB4DC\uB9C8\uC2A4\uD130\uBC18" })), /* @__PURE__ */ R.h(R.Field, { label: "\uC804\uBB38\uAC00" }, /* @__PURE__ */ R.h("input", { value: R.text(draft.expert), onChange: function(e) {
  update("expert", e.target.value);
}, placeholder: "\uB2F4\uB2F9 \uC804\uBB38\uAC00\uBA85" })), /* @__PURE__ */ R.h(R.Field, { label: "\uD310\uB9E4 \uC0C1\uD0DC *" }, /* @__PURE__ */ R.h("select", { value: R.text(draft.visible || "\uD310\uB9E4\uC911"), onChange: function(e) {
  update("visible", e.target.value);
} }, /* @__PURE__ */ R.h("option", null, "\uD310\uB9E4\uC911"), /* @__PURE__ */ R.h("option", null, "\uD310\uB9E4\uC911\uC9C0"))), /* @__PURE__ */ R.h(R.Field, { label: "\uC6D4 \uB2E8\uAC00 *", hint: "\uC0C1\uD488 \uBAA9\uB85D\uC5D0\uC11C \uBCF4\uC774\uB294 \uAE30\uBCF8 \uB2E8\uAC00\uC785\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", required: true, value: Number(draft.monthlyAmount == null ? draft.amount : draft.monthlyAmount) || 0, onChange: function(e) {
  update("monthlyAmount", e.target.value);
  update("amount", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC0C1\uD488 \uB300\uD45C\uC0C9" }, /* @__PURE__ */ R.h("input", { type: "color", value: R.text(draft.groupColor || "#912c2f"), onChange: function(e) {
  update("groupColor", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB300\uD45C \uC774\uBBF8\uC9C0 \uC8FC\uC18C", hint: "\uAE30\uC874 \uC774\uBBF8\uC9C0 \uC8FC\uC18C \uB610\uB294 \uC2E4\uC81C CDN \uC8FC\uC18C\uB97C \uAC1C\uBC1C \uC5F0\uB3D9 \uC2DC \uC0AC\uC6A9\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { value: R.text(draft.profileImage), onChange: function(e) {
  update("profileImage", e.target.value);
}, placeholder: "/assets/product.jpg" })))), /* @__PURE__ */ R.h(R.Panel, { title: "\uC0C1\uD488 \uAE30\uAC04\xB7\uC635\uC158\xB7\uC635\uC158\uAC00", subtitle: "\uBAA9\uB85D\uC5D0\uC11C\uB3C4 \uAC19\uC740 \uB2E8\uAC00\xB7\uC635\uC158\uC744 \uD655\uC778\uD558\uACE0 \uC9C1\uC811 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", actions: /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: function() {
  update("options", draft.options.concat({ id: siteNowId("option"), title: "", baseMonths: 1, bonusMonths: 0, amount: 0 }));
} }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), " \uC635\uC158 \uCD94\uAC00") }, /* @__PURE__ */ R.h("div", { className: "site-option-editor" }, draft.options.map(function(option, index) {
  return /* @__PURE__ */ R.h("div", { className: "site-option-edit-row", key: option.id || index }, /* @__PURE__ */ R.h(R.Field, { label: "\uC635\uC158\uBA85 *" }, /* @__PURE__ */ R.h("input", { required: true, value: R.text(option.title), onChange: function(e) {
    updateOption(index, "title", e.target.value);
  }, placeholder: "\uC608: 3\uAC1C\uC6D4 + 1\uAC1C\uC6D4" })), /* @__PURE__ */ R.h(R.Field, { label: "\uAE30\uBCF8 \uAC1C\uC6D4" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: Number(option.baseMonths) || 0, onChange: function(e) {
    updateOption(index, "baseMonths", e.target.value);
  } })), /* @__PURE__ */ R.h(R.Field, { label: "\uCD94\uAC00 \uC11C\uBE44\uC2A4 \uAC1C\uC6D4" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: Number(option.bonusMonths) || 0, onChange: function(e) {
    updateOption(index, "bonusMonths", e.target.value);
  } })), /* @__PURE__ */ R.h(R.Field, { label: "\uC635\uC158\uAC00 *" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", required: true, value: Number(option.amount) || 0, onChange: function(e) {
    updateOption(index, "amount", e.target.value);
  } })), /* @__PURE__ */ R.h(R.IconButton, { name: "trash", label: "\uC635\uC158 \uC0AD\uC81C", disabled: draft.options.length === 1, onClick: function() {
    update("options", draft.options.filter(function(_, optionIndex) {
      return optionIndex !== index;
    }));
  } }));
}))), /* @__PURE__ */ R.h(R.Panel, { title: "\uC0C1\uD488 \uC0C1\uC138\uD398\uC774\uC9C0 \uC5C5\uB85C\uB4DC", subtitle: "\uC0C1\uC138 \uBCF8\uBB38\uACFC \uC5C5\uB85C\uB4DC \uD30C\uC77C\uC744 \uC0C1\uD488 \uAD00\uB9AC \uC548\uC5D0\uC11C \uB4F1\uB85D\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC0C1\uC138 \uC774\uBBF8\uC9C0/\uD30C\uC77C \uC5C5\uB85C\uB4DC", hint: "HTML \uD30C\uC77C\uC740 \uBCF8\uBB38\uC73C\uB85C \uC77D\uC5B4 iframe\uC5D0\uC11C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC774\uBBF8\uC9C0/PDF\uB294 \uC120\uD0DD \uD30C\uC77C\uBA85\uC744 \uBCF4\uAD00\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "file", multiple: true, accept: ".html,.htm,image/*,.pdf", onChange: receiveFiles })), /* @__PURE__ */ R.h(R.Field, { label: "\uC120\uD0DD/\uB4F1\uB85D\uB41C \uC0C1\uC138 \uD30C\uC77C" }, /* @__PURE__ */ R.h("div", { className: "site-file-list" }, (draft.detailUploads || []).length ? (draft.detailUploads || []).map(function(name, index) {
  return /* @__PURE__ */ R.h("span", { key: name + index }, name, /* @__PURE__ */ R.h("button", { type: "button", "aria-label": name + " \uC0AD\uC81C", onClick: function() {
    update("detailUploads", draft.detailUploads.filter(function(_, fileIndex) {
      return fileIndex !== index;
    }));
  } }, "\xD7"));
}) : /* @__PURE__ */ R.h("p", null, "\uB4F1\uB85D\uB41C \uC0C1\uC138 \uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")))), fileNames.length > 0 && /* @__PURE__ */ R.h("p", { className: "site-upload-feedback" }, "\uC774\uBC88\uC5D0 \uC120\uD0DD\uD55C \uD30C\uC77C: ", fileNames.join(", ")), /* @__PURE__ */ R.h(R.Field, { label: "\uC0C1\uD488 \uC0C1\uC138 \uBCF8\uBB38 *", hint: "\uC2E4\uC81C \uC6B4\uC601\uC5D0\uC11C\uB294 \uC5D0\uB514\uD130 HTML \uC815\uC81C, \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC, \uBBF8\uB9AC\uBCF4\uAE30\uB97C \uBCC4\uB3C4\uB85C \uC5F0\uB3D9\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("select", { "aria-label": "\uC0C1\uC138\uD398\uC774\uC9C0 \uC785\uB825 \uBC29\uC2DD", value: draft.detailMode || "html", onChange: (e) => update("detailMode", e.target.value) }, /* @__PURE__ */ R.h("option", { value: "file" }, "\uD30C\uC77C \uC5C5\uB85C\uB4DC (iframe)"), /* @__PURE__ */ R.h("option", { value: "html" }, "HTML \uC9C1\uC811 \uD3B8\uC9D1 (iframe)")), /* @__PURE__ */ R.h(RSecondHtmlEditor, { value: R.text(draft.content), onChange: (html) => update("content", html), label: "\uC0C1\uD488 \uC0C1\uC138 \uBCF8\uBB38", sourceDefault: true }), /* @__PURE__ */ R.h("iframe", { title: "\uC0C1\uD488 \uC0C1\uC138\uD398\uC774\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30", sandbox: "allow-scripts", srcDoc: R.text(draft.content), style: { width: "100%", height: 300, border: "1px solid #e7ddd6" } })))), /* @__PURE__ */ R.h(REvent, { product: draft, value: draft.eventSettings, onChange: function(eventSettings) {
  update("eventSettings", eventSettings);
} }), /* @__PURE__ */ R.h("div", { className: "site-modal-actions" }, /* @__PURE__ */ R.h("span", { className: "r-muted" }, "* \uD544\uC218 \uC785\uB825 \uD56D\uBAA9"), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: onClose }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: save }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), " \uC0C1\uD488 \uC800\uC7A5")))));
}
function RProducts({ spec, store }) {
const products = siteProducts(store);
const [query, setQuery] = R.useState("");
const [editing, setEditing] = R.useState(null);
const filtered = products.filter(function(product) {
  const needle = query.toLowerCase();
  return !needle || [product.title, product.expert, product.visible].join(" ").toLowerCase().indexOf(needle) !== -1;
});
const rows = filtered.map(function(product) {
  const options = siteProductOptions(product);
  const first = product.eventSettings && product.eventSettings.firstCome;
  return [
    /* @__PURE__ */ R.h("div", { className: "site-product-title" }, /* @__PURE__ */ R.h("strong", null, R.text(product.title)), /* @__PURE__ */ R.h("small", null, product.id)),
    R.text(product.expert) || "\u2014",
    /* @__PURE__ */ R.h("select", { "aria-label": product.title + " \uD310\uB9E4 \uC0C1\uD0DC", value: product.visible === "\uD310\uB9E4\uC911\uC9C0" || product.display === false ? "\uD310\uB9E4\uC911\uC9C0" : "\uD310\uB9E4\uC911", onChange: (e) => siteSave(store, "products", { ...product, visible: e.target.value, display: e.target.value === "\uD310\uB9E4\uC911" }) }, /* @__PURE__ */ R.h("option", { value: "\uD310\uB9E4\uC911" }, "\uD310\uB9E4\uC911"), /* @__PURE__ */ R.h("option", { value: "\uD310\uB9E4\uC911\uC9C0" }, "\uD310\uB9E4\uC911\uC9C0(\uC228\uAE40\uCC98\uB9AC)")),
    /* @__PURE__ */ R.h(RSiteInlinePrice, { product, store }),
    /* @__PURE__ */ R.h(RFourthProductPeriods, { product, store, kind: "baseMonths" }),
    /* @__PURE__ */ R.h(RFourthProductPeriods, { product, store, kind: "bonusMonths" }),
    /* @__PURE__ */ R.h(RFourthProductPeriods, { product, store, kind: "discountRate" }),
    /* @__PURE__ */ R.h("div", { className: "site-event-cell" }, product.event || first && first.enabled ? /* @__PURE__ */ R.h(R.Fragment, null, /* @__PURE__ */ R.h(R.Badge, { tone: "red" }, "\uC774\uBCA4\uD2B8"), first && first.enabled && /* @__PURE__ */ R.h("small", null, "\uC815\uC6D0 ", R.num(first.capacity || 30), " / \uC2DC\uC548 \uC794\uC5EC ", R.num(Math.max(0, Number(first.capacity || 30) - Number(first.demoCount == null ? 25 : first.demoCount))))) : /* @__PURE__ */ R.h(R.Badge, { tone: "gray" }, "\uC5C6\uC74C")),
    /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h(R.IconButton, { name: "edit", label: product.title + " \uC218\uC815", onClick: function() {
      setEditing(product);
    } }))
  ];
});
return /* @__PURE__ */ R.h("div", { className: "r-stack site-products-workspace" }, /* @__PURE__ */ R.h("div", { className: "site-heading-note" }, /* @__PURE__ */ R.h(R.Badge, { tone: "red" }, "PDF 8 \uBC18\uC601"), /* @__PURE__ */ R.h("span", null, "\uC0C1\uD488 \uBAA9\uB85D\uC5D0\uC11C \uC6D4\uB2E8\uAC00\xB7\uAE30\uBCF8\uAE30\uAC04\xB7\uC11C\uBE44\uC2A4\uAE30\uAC04\xB7\uD560\uC778\uC728\uC744 \uD568\uAED8 \uD655\uC778\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Panel, { title: spec && spec.title || "VIP \uC0C1\uD488 \uAD00\uB9AC", subtitle: "\uC0C1\uD488 \uC0C1\uC138\uD398\uC774\uC9C0 \uC5C5\uB85C\uB4DC\uC640 \uC120\uCC29\uC21C\xB7\uD0C0\uC784\uC5B4\uD0DD \uC774\uBCA4\uD2B8\uB97C \uD558\uB098\uC758 \uC0C1\uD488 \uD3B8\uC9D1 \uD654\uBA74\uC5D0\uC11C \uAD00\uB9AC\uD569\uB2C8\uB2E4.", actions: /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: function() {
  setEditing(siteBlankProduct());
} }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), " \uC0C1\uD488 \uB4F1\uB85D") }, /* @__PURE__ */ R.h("div", { className: "r-toolbar site-product-toolbar" }, /* @__PURE__ */ R.h("input", { value: query, onChange: function(e) {
  setQuery(e.target.value);
}, placeholder: "\uC0C1\uD488\uBA85 \uB610\uB294 \uC804\uBB38\uAC00\uB97C \uAC80\uC0C9\uD558\uC138\uC694", "aria-label": "\uC0C1\uD488 \uAC80\uC0C9" }), /* @__PURE__ */ R.h("span", { className: "r-muted" }, "\uCD1D ", R.num(filtered.length), "\uAC1C \xB7 \uC785\uB825 \uD6C4 \uD3EC\uCEE4\uC2A4\uB97C \uBC97\uC5B4\uB098\uBA74 \uBC14\uB85C \uC800\uC7A5\uB429\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Table, { className: "site-products-table", headers: ["\uC0C1\uD488\uBA85", "\uC804\uBB38\uAC00", "\uD310\uB9E4\uC0C1\uD0DC", "\uC6D4\uB2E8\uAC00", "\uAE30\uBCF8\uAE30\uAC04", "\uC11C\uBE44\uC2A4\uAE30\uAC04", "\uD560\uC778\uC728", "\uC774\uBCA4\uD2B8", "\uAD00\uB9AC"], rows, empty: "\uB4F1\uB85D\uB41C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC0C1\uD488 \uB4F1\uB85D\uC73C\uB85C \uC2DC\uC791\uD558\uC138\uC694." })), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uBAA9\uB85D \uC9C1\uC811 \uC218\uC815\uC740 \uC774 \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC758 store\uC5D0\uB9CC \uBC18\uC601\uB429\uB2C8\uB2E4. \uC2E4\uC81C \uC6B4\uC601\uC5D0\uC11C\uB294 \uAC00\uACA9 \uBCC0\uACBD \uAD8C\uD55C, \uBCC0\uACBD \uC774\uB825, \uACB0\uC81C \uC911 \uC0C1\uD488 \uBCF4\uD638 \uBC0F \uC11C\uBC84 \uAC80\uC99D\uC744 \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4."), editing && /* @__PURE__ */ R.h(RSiteProductEditor, { product: editing, store, onClose: function() {
  setEditing(null);
} }));
}
function RSiteBannerEditor({ banner, products, store, onClose }) {
const [draft, setDraft] = R.useState(function() {
  return Object.assign({}, siteBlankBanner(), banner || {});
});
const [fileName, setFileName] = R.useState("");
const [error, setError] = R.useState("");
function update(key, value) {
  setDraft(function(current) {
    return Object.assign({}, current, { [key]: value });
  });
}
function save() {
  if (!R.text(draft.title).trim()) {
    setError("\uBC30\uB108\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.");
    return;
  }
  if (draft.linkMode === "product" && !draft.productId) {
    setError("\uC5F0\uACB0\uD560 \uC0C1\uD488\uC744 \uC120\uD0DD\uD558\uC138\uC694.");
    return;
  }
  if (draft.linkMode === "url" && !R.text(draft.url).trim()) {
    setError("\uC5F0\uACB0 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.");
    return;
  }
  const target = draft.linkMode === "product" ? siteProductName(products, draft.productId) : R.text(draft.url).trim();
  siteSave(store, "banners", Object.assign({}, draft, { title: R.text(draft.title).trim(), display: draft.visible === "\uB178\uCD9C", link: target, url: draft.linkMode === "url" ? R.text(draft.url).trim() : "", productId: draft.linkMode === "product" ? draft.productId : "" }), "\uC0C1\uB2E8 \uBC30\uB108 \uC2DC\uC548\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
  onClose();
}
return /* @__PURE__ */ R.h(R.Modal, { title: banner ? "\uC0C1\uB2E8 \uBC30\uB108 \uC218\uC815" : "\uC0C1\uB2E8 \uBC30\uB108 \uCD94\uAC00", onClose }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, error && /* @__PURE__ */ R.h("p", { className: "site-form-error", role: "alert" }, error), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uBC30\uB108\uB294 ", /* @__PURE__ */ R.h("strong", null, "\uC0C1\uD488 \uD398\uC774\uC9C0"), " \uB610\uB294 ", /* @__PURE__ */ R.h("strong", null, "\uC9C1\uC811 URL"), " \uC911 \uD558\uB098\uB85C \uC5F0\uACB0\uD569\uB2C8\uB2E4. \uC0C1\uD488\uC744 \uACE0\uB974\uBA74 \uC120\uD0DD \uC0C1\uD488 \uC0C1\uC138\uB85C \uC774\uB3D9\uD558\uB3C4\uB85D \uC124\uACC4\uD588\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uBC30\uB108\uBA85 *" }, /* @__PURE__ */ R.h("input", { required: true, value: R.text(draft.title), onChange: function(e) {
  update("title", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB178\uCD9C \uC0C1\uD0DC" }, /* @__PURE__ */ R.h("select", { value: R.text(draft.visible || "\uB178\uCD9C"), onChange: function(e) {
  update("visible", e.target.value);
} }, /* @__PURE__ */ R.h("option", null, "\uB178\uCD9C"), /* @__PURE__ */ R.h("option", null, "\uBBF8\uB178\uCD9C"))), /* @__PURE__ */ R.h(R.Field, { label: "\uC18C\uAC1C \uBB38\uAD6C" }, /* @__PURE__ */ R.h("input", { value: R.text(draft.subtitle), onChange: function(e) {
  update("subtitle", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB178\uCD9C \uC21C\uC11C" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: Number(draft.order) || 0, onChange: function(e) {
  update("order", e.target.value);
} }))), /* @__PURE__ */ R.h(R.Field, { label: "\uBC30\uB108 \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC", hint: "\uC2DC\uC548\uC5D0\uC11C\uB294 \uC120\uD0DD\uD55C \uD30C\uC77C\uBA85\uB9CC \uD655\uC778\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uD30C\uC77C \uC5C5\uB85C\uB4DC\uB294 \uAC1C\uBC1C \uC5F0\uB3D9\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "file", accept: "image/*", onChange: function(e) {
  const file = e.target.files && e.target.files[0];
  setFileName(file ? file.name : "");
} }), fileName && /* @__PURE__ */ R.h("small", { className: "site-upload-feedback" }, "\uC120\uD0DD\uB428: ", fileName)), /* @__PURE__ */ R.h(R.Field, { label: "\uBC30\uB108 \uC774\uBBF8\uC9C0 \uC8FC\uC18C" }, /* @__PURE__ */ R.h("input", { value: R.text(draft.image), onChange: function(e) {
  update("image", e.target.value);
}, placeholder: "/assets/banner.jpg" })), /* @__PURE__ */ R.h("div", { className: "site-link-choice", role: "group", "aria-label": "\uBC30\uB108 \uC5F0\uACB0 \uBC29\uC2DD" }, /* @__PURE__ */ R.h("strong", null, "\uC5F0\uACB0 \uBC29\uC2DD *"), /* @__PURE__ */ R.h("label", null, /* @__PURE__ */ R.h("input", { type: "radio", name: "banner-link-type", checked: draft.linkMode === "product", onChange: function() {
  update("linkMode", "product");
} }), " \uC0C1\uD488 \uD398\uC774\uC9C0"), /* @__PURE__ */ R.h("label", null, /* @__PURE__ */ R.h("input", { type: "radio", name: "banner-link-type", checked: draft.linkMode === "url", onChange: function() {
  update("linkMode", "url");
} }), " \uC9C1\uC811 URL")), draft.linkMode === "product" ? /* @__PURE__ */ R.h(R.Field, { label: "\uC5F0\uACB0 \uC0C1\uD488 *", hint: "\uD504\uB860\uD2B8\uC5D0\uC11C\uB294 \uC774 \uC0C1\uD488\uC758 \uC0C1\uC138 \uD398\uC774\uC9C0\uB85C \uBC14\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("select", { required: true, value: R.text(draft.productId), onChange: function(e) {
  update("productId", e.target.value);
} }, /* @__PURE__ */ R.h("option", { value: "" }, "\uC0C1\uD488 \uC120\uD0DD"), products.map(function(product) {
  return /* @__PURE__ */ R.h("option", { value: product.id, key: product.id }, product.title);
}))) : /* @__PURE__ */ R.h(R.Field, { label: "\uC5F0\uACB0 \uC8FC\uC18C *", hint: "https://\uB97C \uD3EC\uD568\uD55C \uC8FC\uC18C \uD615\uC2DD \uAC80\uC99D\uC740 \uC2E4\uC81C \uAC1C\uBC1C\uC5D0\uC11C \uC218\uD589\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { required: true, type: "url", value: R.text(draft.url), onChange: function(e) {
  update("url", e.target.value);
}, placeholder: "https://" })), /* @__PURE__ */ R.h("div", { className: "site-modal-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: onClose }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: save }, "\uBC30\uB108 \uC800\uC7A5"))));
}
function RSiteRoomEditor({ room, products, store, onClose }) {
const [draft, setDraft] = R.useState(function() {
  return Object.assign({}, siteBlankRoom(), room || {});
});
const [fileName, setFileName] = R.useState("");
const [error, setError] = R.useState("");
function update(key, value) {
  setDraft(function(current) {
    return Object.assign({}, current, { [key]: value });
  });
}
function save() {
  if (!R.text(draft.title).trim()) {
    setError("\uC6B4\uC601\uBC18\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694.");
    return;
  }
  if (!draft.productId) {
    setError("\uC5F0\uACB0\uD560 \uC0C1\uD488\uC744 \uC120\uD0DD\uD558\uC138\uC694.");
    return;
  }
  const legacyFree = Object.assign({}, draft);
  delete legacyFree.url;
  delete legacyFree.link;
  delete legacyFree.linkUrl;
  siteSave(store, "rooms", Object.assign({}, legacyFree, { title: R.text(draft.title).trim(), display: draft.visible === "\uB178\uCD9C", productId: draft.productId, productTitle: siteProductName(products, draft.productId) }), "\uC6B4\uC601\uBC18\uC758 \uC0C1\uD488 \uC5F0\uACB0 \uC2DC\uC548\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
  onClose();
}
return /* @__PURE__ */ R.h(R.Modal, { title: room ? "\uC70C\uD074\uB7FD \uC6B4\uC601\uBC18 \uC218\uC815" : "\uC70C\uD074\uB7FD \uC6B4\uC601\uBC18 \uCD94\uAC00", onClose }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, error && /* @__PURE__ */ R.h("p", { className: "site-form-error", role: "alert" }, error), /* @__PURE__ */ R.h("p", { className: "r-alert" }, "\uC6B4\uC601\uBC18\uC740 URL\uC744 \uC785\uB825\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC120\uD0DD\uD55C \uC0C1\uD488 \uC0C1\uC138 \uD398\uC774\uC9C0\uB85C \uC9C1\uC811 \uC5F0\uACB0\uB429\uB2C8\uB2E4."), /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC6B4\uC601\uBC18\uBA85 *" }, /* @__PURE__ */ R.h("input", { required: true, value: R.text(draft.title), onChange: function(e) {
  update("title", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB178\uCD9C \uC0C1\uD0DC" }, /* @__PURE__ */ R.h("select", { value: R.text(draft.visible || "\uB178\uCD9C"), onChange: function(e) {
  update("visible", e.target.value);
} }, /* @__PURE__ */ R.h("option", null, "\uB178\uCD9C"), /* @__PURE__ */ R.h("option", null, "\uBBF8\uB178\uCD9C"))), /* @__PURE__ */ R.h(R.Field, { label: "\uC18C\uAC1C \uBB38\uAD6C", className: "site-full-field" }, /* @__PURE__ */ R.h("textarea", { rows: "4", value: R.text(draft.intro || draft.description), onChange: function(e) {
  update("intro", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uB178\uCD9C \uC21C\uC11C" }, /* @__PURE__ */ R.h("input", { type: "number", min: "0", value: Number(draft.order) || 0, onChange: function(e) {
  update("order", e.target.value);
} })), /* @__PURE__ */ R.h(R.Field, { label: "\uC6B4\uC601\uBC18 \uC774\uBBF8\uC9C0 \uC8FC\uC18C" }, /* @__PURE__ */ R.h("input", { value: R.text(draft.image), onChange: function(e) {
  update("image", e.target.value);
}, placeholder: "/assets/room.jpg" }))), /* @__PURE__ */ R.h(R.Field, { label: "\uC6B4\uC601\uBC18 \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC", hint: "\uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC5D0\uC11C\uB294 \uC120\uD0DD \uD30C\uC77C\uBA85\uB9CC \uD655\uC778\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "file", accept: "image/*", onChange: function(e) {
  const file = e.target.files && e.target.files[0];
  setFileName(file ? file.name : "");
} }), fileName && /* @__PURE__ */ R.h("small", { className: "site-upload-feedback" }, "\uC120\uD0DD\uB428: ", fileName)), /* @__PURE__ */ R.h(R.Field, { label: "\uC5F0\uACB0 \uC0C1\uD488 *", hint: "\uD504\uB860\uD2B8\uC5D0\uC11C \uC120\uD0DD \uC0C1\uD488\uC758 \uC0C1\uC138 \uD398\uC774\uC9C0\uB85C \uC9C1\uC811 \uC774\uB3D9\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("select", { required: true, value: R.text(draft.productId), onChange: function(e) {
  update("productId", e.target.value);
} }, /* @__PURE__ */ R.h("option", { value: "" }, "\uC0C1\uD488 \uC120\uD0DD"), products.map(function(product) {
  return /* @__PURE__ */ R.h("option", { value: product.id, key: product.id }, product.title);
}))), /* @__PURE__ */ R.h("div", { className: "site-modal-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: onClose }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: save }, "\uC6B4\uC601\uBC18 \uC800\uC7A5"))));
}
function RSiteMain({ store }) {
const products = siteProducts(store);
const banners = siteRecords(store, "banners");
const rooms = siteRecords(store, "rooms");
const [tab, setTab] = R.useState("banners");
const [editingBanner, setEditingBanner] = R.useState(null);
const [editingRoom, setEditingRoom] = R.useState(null);
const visibleLabel = function(record) {
  return record.visible || (record.display === false ? "\uBBF8\uB178\uCD9C" : "\uB178\uCD9C");
};
const bannerRows = banners.map(function(banner) {
  const productDestination = banner.productId ? siteProductName(products, banner.productId) : "";
  const destination = banner.linkMode === "product" || banner.productId ? productDestination : banner.url || banner.link || "\uC5F0\uACB0 \uC5C6\uC74C";
  return [/* @__PURE__ */ R.h("div", { className: "site-thumb" }, banner.image ? /* @__PURE__ */ R.h("img", { src: banner.image, alt: "" }) : /* @__PURE__ */ R.h("span", null, "\uBC30\uB108")), /* @__PURE__ */ R.h("div", { className: "site-record-name" }, /* @__PURE__ */ R.h("strong", null, R.text(banner.title || banner.name)), /* @__PURE__ */ R.h("small", null, R.text(banner.subtitle || banner.description))), /* @__PURE__ */ R.h("div", { className: "site-destination" }, /* @__PURE__ */ R.h(R.Badge, { tone: banner.linkMode === "url" && !banner.productId ? "blue" : "red" }, banner.linkMode === "url" && !banner.productId ? "\uC9C1\uC811 URL" : "\uC0C1\uD488 \uD398\uC774\uC9C0"), /* @__PURE__ */ R.h("span", null, destination)), /* @__PURE__ */ R.h(R.Badge, { tone: siteTone(visibleLabel(banner)) }, visibleLabel(banner)), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: function() {
    setEditingBanner(banner);
  } }, /* @__PURE__ */ R.h(R.Icon, { name: "edit" }), " \uC218\uC815"), /* @__PURE__ */ R.h(R.IconButton, { name: "trash", label: "\uBC30\uB108 \uC0AD\uC81C", onClick: function() {
    if (window.confirm("\uC774 \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC758 \uBC30\uB108\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694?")) {
      store.remove("banners", [banner.id]);
      store.notify("\uBC30\uB108\uB97C \uC2DC\uC548 \uB370\uC774\uD130\uC5D0\uC11C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.");
    }
  } }))];
});
const roomRows = rooms.map(function(room) {
  return [/* @__PURE__ */ R.h("div", { className: "site-thumb" }, room.image ? /* @__PURE__ */ R.h("img", { src: room.image, alt: "" }) : /* @__PURE__ */ R.h("span", null, "\uC6B4\uC601\uBC18")), /* @__PURE__ */ R.h("div", { className: "site-record-name" }, /* @__PURE__ */ R.h("strong", null, R.text(room.title || room.name)), /* @__PURE__ */ R.h("small", null, R.text(room.intro || room.description))), /* @__PURE__ */ R.h("div", { className: "site-product-destination" }, /* @__PURE__ */ R.h("span", null, "\uC0C1\uD488 \uC0C1\uC138\uB85C \uC9C1\uC811 \uC774\uB3D9"), /* @__PURE__ */ R.h("strong", null, siteProductName(products, room.productId))), /* @__PURE__ */ R.h(R.Badge, { tone: siteTone(visibleLabel(room)) }, visibleLabel(room)), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: function() {
    setEditingRoom(room);
  } }, /* @__PURE__ */ R.h(R.Icon, { name: "edit" }), " \uC218\uC815"), /* @__PURE__ */ R.h(R.IconButton, { name: "trash", label: "\uC6B4\uC601\uBC18 \uC0AD\uC81C", onClick: function() {
    if (window.confirm("\uC774 \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC758 \uC6B4\uC601\uBC18\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?")) {
      store.remove("rooms", [room.id]);
      store.notify("\uC6B4\uC601\uBC18\uC744 \uC2DC\uC548 \uB370\uC774\uD130\uC5D0\uC11C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4.");
    }
  } }))];
});
return /* @__PURE__ */ R.h("div", { className: "r-stack site-main-workspace" }, /* @__PURE__ */ R.h("div", { className: "site-heading-note" }, /* @__PURE__ */ R.h(R.Badge, { tone: "red" }, "PDF 7 \uBC18\uC601"), /* @__PURE__ */ R.h("span", null, "\uC804\uBB38\uAC00 \uBAA9\uB85D \uC139\uC158\uC740 \uC0AD\uC81C \uB300\uC0C1\uC774\uBBC0\uB85C \uC774 \uD654\uBA74\uC758 \uD0ED\uACFC \uAE30\uB2A5\uC5D0 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("div", { className: "site-main-tabs", role: "tablist", "aria-label": "\uBA54\uC778\uD398\uC774\uC9C0 \uAD00\uB9AC \uD56D\uBAA9" }, /* @__PURE__ */ R.h("button", { type: "button", role: "tab", "aria-selected": tab === "banners", className: tab === "banners" ? "is-active" : "", onClick: function() {
  setTab("banners");
} }, "\uC0C1\uB2E8 \uBC30\uB108"), /* @__PURE__ */ R.h("button", { type: "button", role: "tab", "aria-selected": tab === "rooms", className: tab === "rooms" ? "is-active" : "", onClick: function() {
  setTab("rooms");
} }, "\uC70C\uD074\uB7FD \uC6B4\uC601\uBC18")), tab === "banners" ? /* @__PURE__ */ R.h(R.Panel, { title: "\uC0C1\uB2E8 \uBC30\uB108", subtitle: "\uBC30\uB108 \uD074\uB9AD \uC2DC \uC0C1\uD488 \uC0C1\uC138 \uB610\uB294 \uC5F0\uACB0\uD55C URL\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.", actions: /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: function() {
  setEditingBanner(siteBlankBanner());
} }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), " \uBC30\uB108 \uCD94\uAC00") }, /* @__PURE__ */ R.h(R.Table, { className: "site-main-table", headers: ["\uC774\uBBF8\uC9C0", "\uBC30\uB108 \uC815\uBCF4", "\uC5F0\uACB0 \uB300\uC0C1", "\uB178\uCD9C \uC0C1\uD0DC", "\uAD00\uB9AC"], rows: bannerRows, empty: "\uB4F1\uB85D\uB41C \uC0C1\uB2E8 \uBC30\uB108\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." })) : /* @__PURE__ */ R.h(R.Panel, { title: "\uC70C\uD074\uB7FD \uC6B4\uC601\uBC18", subtitle: "URL \uB300\uC2E0 \uC5F0\uACB0 \uC0C1\uD488\uC744 \uC120\uD0DD\uD574 \uD574\uB2F9 \uC0C1\uD488 \uC0C1\uC138 \uD398\uC774\uC9C0\uB85C \uBC14\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.", actions: /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: function() {
  setEditingRoom(siteBlankRoom());
} }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), " \uC6B4\uC601\uBC18 \uCD94\uAC00") }, /* @__PURE__ */ R.h(R.Table, { className: "site-main-table", headers: ["\uC774\uBBF8\uC9C0", "\uC6B4\uC601\uBC18 \uC815\uBCF4", "\uC5F0\uACB0 \uC0C1\uD488", "\uB178\uCD9C \uC0C1\uD0DC", "\uAD00\uB9AC"], rows: roomRows, empty: "\uB4F1\uB85D\uB41C \uC6B4\uC601\uBC18\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uC804\uBB38\uAC00 \uBAA9\uB85D \uC139\uC158\xB7\uBA54\uB274 \uC0AD\uC81C\uC640 \uC0AC\uC774\uD2B8 \uD654\uBA74\uC758 \uC0C1\uD488 \uC0C1\uC138\uD398\uC774\uC9C0/\uAE30\uD0C0 \uC548\uB0B4 \uAD00\uB9AC \uBA54\uB274 \uC0AD\uC81C\uB294 ", /* @__PURE__ */ R.h("strong", null, "\uBD80\uBAA8 \uBA54\uB274 \uB77C\uC6B0\uD305\uC5D0\uC11C \uCC98\uB9AC"), "\uD569\uB2C8\uB2E4. \uC774 \uBAA8\uB4C8\uC740 \uC0AD\uC81C\uB41C \uBA54\uB274\uB97C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), editingBanner && /* @__PURE__ */ R.h(RSiteBannerEditor, { banner: editingBanner, products, store, onClose: function() {
  setEditingBanner(null);
} }), editingRoom && /* @__PURE__ */ R.h(RSiteRoomEditor, { room: editingRoom, products, store, onClose: function() {
  setEditingRoom(null);
} }));
}
function siteTermsFromStore(store) {
const records = siteRecords(store, "terms");
return R_SITE_TERM_TYPES.map(function(type, index) {
  const record = records.find(function(item) {
    return item.type === type || item.title === type;
  });
  return Object.assign({ id: "site-term-" + index, title: type, type, version: "1.0", date: "", content: "" }, record || {});
});
}
function RSiteTerms({ store }) {
const records = siteRecords(store, "terms");
const [drafts, setDrafts] = R.useState(function() {
  return siteTermsFromStore(store);
});
const [filter, setFilter] = R.useState("all");
const [message, setMessage] = R.useState("");
R.useEffect(function() {
  setDrafts(siteTermsFromStore(store));
}, [records]);
const shown = drafts.filter(function(draft) {
  return filter === "all" || draft.type === filter;
});
function patch(id, key, value) {
  setDrafts(function(items) {
    return items.map(function(item) {
      return item.id === id ? Object.assign({}, item, { [key]: value }) : item;
    });
  });
}
function validate(items) {
  return items.every(function(item) {
    return R.text(item.title).trim() && R.text(item.version).trim() && R.text(item.date).trim() && R.text(item.content).trim();
  });
}
function save(items, all) {
  if (!validate(items)) {
    setMessage("\uBB38\uC11C\uBA85, \uBC84\uC804, \uC801\uC6A9\uC77C, \uC57D\uAD00 \uBCF8\uBB38\uC740 \uBAA8\uB450 \uD544\uC218 \uC785\uB825\uC785\uB2C8\uB2E4.");
    return;
  }
  items.forEach(function(item) {
    siteSave(store, "terms", Object.assign({}, item, { title: R.text(item.title).trim(), type: item.type, version: R.text(item.version).trim(), date: R.text(item.date).trim() }), null);
  });
  setMessage(all ? "7\uC885 \uC57D\uAD00 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uD55C \uBC88\uC5D0 \uC2DC\uC548 \uB370\uC774\uD130\uC5D0 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4." : R.text(items[0].type) + " \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
  if (store.notify) store.notify(all ? "7\uC885 \uC57D\uAD00\uC744 \uD1B5\uD569 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4." : "\uC57D\uAD00\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.");
}
return /* @__PURE__ */ R.h("div", { className: "r-stack site-terms-workspace" }, /* @__PURE__ */ R.h("div", { className: "site-heading-note" }, /* @__PURE__ */ R.h(R.Badge, { tone: "red" }, "PDF 8 \uBC18\uC601"), /* @__PURE__ */ R.h("span", null, "7\uC885 \uC57D\uAD00\uC744 \uBCC4\uB3C4 \uBA54\uB274\uAC00 \uC544\uB2CC \uD558\uB098\uC758 \uD1B5\uD569 \uBA54\uB274\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uD3B8\uC9D1\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Panel, { title: "\uD1B5\uD569 \uC57D\uAD00 \uAD00\uB9AC", subtitle: "\uC774\uC6A9\uC57D\uAD00\uBD80\uD130 \uC11C\uBE44\uC2A4 \uC57D\uAD00\uAE4C\uC9C0 7\uC885 \uBB38\uC11C\uB97C \uD55C \uD654\uBA74\uC5D0\uC11C \uD655\uC778\xB7\uC218\uC815\xB7\uC800\uC7A5\uD569\uB2C8\uB2E4.", actions: /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: function() {
  save(drafts, true);
} }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), " 7\uC885 \uBCC0\uACBD\uC0AC\uD56D \uC800\uC7A5") }, /* @__PURE__ */ R.h("div", { className: "site-terms-toolbar" }, /* @__PURE__ */ R.h("label", null, "\uD45C\uC2DC \uBB38\uC11C", /* @__PURE__ */ R.h("select", { value: filter, onChange: function(e) {
  setFilter(e.target.value);
} }, /* @__PURE__ */ R.h("option", { value: "all" }, "\uC804\uCCB4 7\uC885 \uB3D9\uC2DC \uD3B8\uC9D1"), R_SITE_TERM_TYPES.map(function(type) {
  return /* @__PURE__ */ R.h("option", { key: type, value: type }, type);
}))), /* @__PURE__ */ R.h("p", null, "\uAC01 \uBB38\uC11C\uB294 \uB3C5\uB9BD\uB41C \uBC84\uC804\xB7\uC801\uC6A9\uC77C\xB7\uBCF8\uBB38\uC744 \uC720\uC9C0\uD558\uBA70, \uC0C1\uB2E8 \uBC84\uD2BC\uC73C\uB85C 7\uC885\uC744 \uD568\uAED8 \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), message && /* @__PURE__ */ R.h("p", { className: message.indexOf("\uD544\uC218") >= 0 ? "site-form-error" : "site-save-message", role: "status" }, message), /* @__PURE__ */ R.h("div", { className: "site-term-cards" }, shown.map(function(term, index) {
  return /* @__PURE__ */ R.h("section", { className: "site-term-card", key: term.id }, /* @__PURE__ */ R.h("header", null, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, String(R_SITE_TERM_TYPES.indexOf(term.type) + 1).padStart(2, "0")), /* @__PURE__ */ R.h("h3", null, term.type)), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h(R.Badge, { tone: "blue" }, "v", R.text(term.version) || "\u2014"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: function() {
    save([term], false);
  } }, "\uC774 \uBB38\uC11C \uC800\uC7A5"))), /* @__PURE__ */ R.h("div", { className: "r-form" }, /* @__PURE__ */ R.h(R.Field, { label: "\uBB38\uC11C\uBA85 *" }, /* @__PURE__ */ R.h("input", { required: true, value: R.text(term.title), onChange: function(e) {
    patch(term.id, "title", e.target.value);
  } })), /* @__PURE__ */ R.h(R.Field, { label: "\uBC84\uC804 *" }, /* @__PURE__ */ R.h("input", { required: true, value: R.text(term.version), onChange: function(e) {
    patch(term.id, "version", e.target.value);
  }, placeholder: "\uC608: 1.1" })), /* @__PURE__ */ R.h(R.Field, { label: "\uC801\uC6A9\uC77C *" }, /* @__PURE__ */ R.h("input", { required: true, type: "date", value: R.text(term.date), onChange: function(e) {
    patch(term.id, "date", e.target.value);
  } })), /* @__PURE__ */ R.h(R.Field, { label: "\uBB38\uC11C \uC885\uB958" }, /* @__PURE__ */ R.h("input", { value: term.type, readOnly: true, "aria-readonly": "true" }))), /* @__PURE__ */ R.h(R.Field, { label: "\uC57D\uAD00 \uBCF8\uBB38 *", hint: "\uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC5D0\uC11C\uB294 HTML/\uD14D\uC2A4\uD2B8 \uC6D0\uBB38\uC744 \uD3B8\uC9D1\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uC6B4\uC601\uC5D0\uB294 \uC5D0\uB514\uD130 \uBCF4\uC548 \uC815\uC81C, \uBC84\uC804 \uC774\uB825\xB7\uB3D9\uC758 \uC774\uB825 \uAD00\uB9AC\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("textarea", { required: true, rows: "7", value: R.text(term.content), onChange: function(e) {
    patch(term.id, "content", e.target.value);
  }, placeholder: "\uC57D\uAD00 \uBCF8\uBB38\uC744 \uC785\uB825\uD558\uC138\uC694." })));
}))), /* @__PURE__ */ R.h("p", { className: "r-alert" }, "\uC2E4\uC81C \uC57D\uAD00 \uAC1C\uC815 \uC2DC \uBC95\uBB34 \uAC80\uD1A0, \uC801\uC6A9\uC77C \uAE30\uC900 \uBC84\uC804 \uBCF4\uC874, \uD68C\uC6D0\uBCC4 \uB3D9\uC758 \uC774\uB825 \uBC0F \uB178\uCD9C \uACBD\uB85C \uC5F0\uB3D9\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC774 \uC2DC\uC548\uC758 \uC800\uC7A5\uC740 \uB85C\uCEEC \uC608\uC2DC \uB370\uC774\uD130\uB9CC \uBCC0\uACBD\uD569\uB2C8\uB2E4."));
}
function RSite({ spec, store }) {
const path = spec && (spec.path || spec.sourcePath) || (typeof window !== "undefined" ? window.location.pathname : "");
if (String(path).indexOf("/admin/design/terms") >= 0 || spec && spec.domain === "terms") return /* @__PURE__ */ R.h(RSiteTerms, { store });
return /* @__PURE__ */ R.h(RSiteMain, { store });
}
function RFourthProductPeriods({ product, store, kind }) {
const options = siteProductOptions(product);
function save(index, value) {
  const next = options.map((option, i) => i === index ? { ...option, [kind]: Math.max(0, Number(value) || 0) } : option);
  siteSave(store, "products", { ...product, options: next });
}
return /* @__PURE__ */ R.h("div", { className: "fourth-product-periods" }, options.map((option, index) => {
  const base = Number(option.baseMonths) || 0, bonus = Number(option.bonusMonths) || 0;
  const unit = Number(product.monthlyAmount ?? product.amount) || 0;
  const original = unit * base, amount = Number(option.amount) || 0;
  const rate = option.discountRate ?? (original > 0 ? Math.max(0, Math.round((1 - amount / original) * 1e3) / 10) : 0);
  return /* @__PURE__ */ R.h("div", { className: "fourth-period-line", key: option.id || index, title: R.text(option.title) }, kind === "discountRate" ? /* @__PURE__ */ R.h("span", { className: "fourth-discount" }, R.num(rate), "%") : /* @__PURE__ */ R.h(R.Fragment, null, /* @__PURE__ */ R.h("input", { "aria-label": product.title + " " + (kind === "baseMonths" ? "\uAE30\uBCF8\uAE30\uAC04" : "\uC11C\uBE44\uC2A4\uAE30\uAC04") + " " + (index + 1), type: "number", min: kind === "baseMonths" ? 1 : 0, defaultValue: kind === "baseMonths" ? base : bonus, key: (option.id || index) + ":" + option[kind], onBlur: (e) => save(index, e.target.value) }), /* @__PURE__ */ R.h("span", null, "\uAC1C\uC6D4")));
}));
}
function rvDemoViewCount(id) {
return {
  "gm-m1": 42,
  "gm-a1": 31,
  "gm-e1": 27,
  "gm-a3": 14,
  "gm-f1": 19,
  "gg-m1": 34,
  "gg-e1": 25,
  "gg-f3": 18
}[String(id)] || 0;
}
function rvDemoViewSteps(id) {
return {
  "gm-m1": [9, 8, 7, 6, 5, 4, 3],
  "gm-a1": [7, 6, 5, 5, 4, 4],
  "gm-e1": [6, 5, 5, 4, 3, 2, 2],
  "gm-a3": [4, 3, 3, 2, 2],
  "gm-f1": [5, 4, 4, 3, 3],
  "gg-m1": [8, 7, 6, 5, 4, 4],
  "gg-e1": [6, 5, 4, 4, 3, 3],
  "gg-f3": [5, 4, 3, 3, 3]
}[String(id)] || [];
}
function rvAsset(path) {
try {
  return adminAssets?.[path] ?? path;
} catch (_error) {
  return path;
}
}
function rvNumber(value) {
const result = Number(value);
return Number.isFinite(result) && result > 0 ? Math.floor(result) : 0;
}
function rvMember(member, fallback) {
return {
  id: R.text(member?.loginId || member?.id || fallback?.loginId || fallback?.id || "-"),
  name: R.text(member?.name || fallback?.name || "\uD68C\uC6D0 \uBBF8\uC5F0\uACB0"),
  nickname: R.text(member?.nickname || member?.name || fallback?.nickname || fallback?.name || "-"),
  phone: R.text(member?.phone || fallback?.phone || "-")
};
}
function rvMembersByLogin(members) {
return (members || []).reduce((map, member) => {
  if (member?.loginId) map[String(member.loginId)] = member;
  if (member?.id) map[String(member.id)] = member;
  return map;
}, {});
}
function rvDistributedWatchRows(video, members, total, source) {
const safeMembers = (members || []).length ? members : [{}];
const rowCount = Math.max(1, Math.min(safeMembers.length, total > 12 ? 7 : total > 6 ? 5 : Math.max(1, total)));
const base = Math.floor(total / rowCount);
const remainder = total % rowCount;
const seed = String(video?.id || "").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
return Array.from({ length: rowCount }, (_unused, index) => {
  const member = safeMembers[(seed + index * 3) % safeMembers.length];
  return { ...rvMember(member), count: base + (index < remainder ? 1 : 0), source };
}).filter((row) => row.count > 0);
}
function rvWatchRows(video, members) {
const memberIndex = rvMembersByLogin(members);
const rawLogs = Array.isArray(video?.watchLogs) ? video.watchLogs : Array.isArray(video?.viewLogs) ? video.viewLogs : Array.isArray(video?.watchHistory) ? video.watchHistory : [];
if (rawLogs.length) {
  const merged = rawLogs.reduce((map, log, index) => {
    const key = String(log?.memberId || log?.loginId || log?.id || "watcher-" + index);
    const member = memberIndex[key] || (log?.loginId ? memberIndex[String(log.loginId)] : null);
    const current = map[key] || { ...rvMember(member, log), count: 0, source: "watch-log" };
    current.count += rvNumber(log?.count || log?.views || log?.watchCount || 1) || 1;
    map[key] = current;
    return map;
  }, {});
  return Object.values(merged).sort((a, b) => b.count - a.count);
}
const storedCount = rvNumber(video?.views);
if (storedCount) return rvDistributedWatchRows(video, members, storedCount, "stored-counter");
const sampleCount = rvDemoViewCount(video?.id);
if (!sampleCount) return [];
const seedSteps = rvDemoViewSteps(video?.id);
const safeMembers = (members || []).length ? members : [{}];
const seed = String(video?.id || "").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
return seedSteps.map((count, index) => ({
  ...rvMember(safeMembers[(seed + index * 3) % safeMembers.length]),
  count,
  source: "demo-watch-log"
}));
}
function rvPurchaseRows(video, payments, members) {
const memberIndex = rvMembersByLogin(members);
return (payments || []).filter((payment) => {
  return String(payment?.videoId || "") === String(video?.id || "") && payment?.kind === "video" && payment?.status === "\uC644\uB8CC";
}).map((payment) => ({
  ...rvMember(memberIndex[String(payment.loginId || "")], payment),
  count: 1,
  date: R.text(payment.date || "-"),
  amount: rvNumber(payment.amount),
  paymentId: R.text(payment.id),
  source: "payment-record"
}));
}
function rvVideoMetrics(video, payments, members) {
const watchers = rvWatchRows(video, members);
const payers = rvPurchaseRows(video, payments, members);
return {
  watchers,
  payers,
  views: watchers.reduce((sum, row) => sum + rvNumber(row.count), 0),
  purchases: payers.length || rvNumber(video?.purchases),
  isDemoWatch: watchers.some((row) => row.source === "demo-watch-log")
};
}
function rvNewVideoId(videos) {
let index = 1;
let id = "video-local-" + index;
const used = new Set((videos || []).map((video) => String(video.id)));
while (used.has(id)) {
  index += 1;
  id = "video-local-" + index;
}
return id;
}
function RVideosAudienceModal({ video, kind, rows, total, onClose }) {
const isWatch = kind === "watch";
const label = isWatch ? "\uC2DC\uCCAD" : "\uACB0\uC81C";
const title = R.text(video?.title || "\uC601\uC0C1") + " \u2014 " + label + " \uD69F\uC218 \uBAA9\uB85D";
const hasDerivedWatchRows = isWatch && rows.some((row) => row.source && row.source !== "watch-log");
const hasDemoWatchRows = isWatch && rows.some((row) => row.source === "demo-watch-log");
const tableRows = rows.map((row) => [
  /* @__PURE__ */ R.h("strong", { className: "r-videos-member-id" }, row.id),
  row.name,
  row.nickname,
  row.phone,
  /* @__PURE__ */ R.h("strong", { className: "r-videos-count-number" }, R.num(row.count), "\uD68C")
]);
return /* @__PURE__ */ R.h(R.Modal, { title, onClose, wide: true, className: "r-videos-audience-modal" }, /* @__PURE__ */ R.h("div", { className: "r-videos-audience-head" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "r-videos-modal-kicker" }, isWatch ? "\uD68C\uC6D0\uBCC4 \uC2E4\uC81C \uC2DC\uCCAD \uD69F\uC218" : "\uC644\uB8CC\uB41C \uC601\uC0C1 \uACB0\uC81C \uAE30\uB85D"), /* @__PURE__ */ R.h("strong", null, "\uCD1D ", R.num(total), "\uD68C")), /* @__PURE__ */ R.h(R.Badge, { tone: isWatch ? "blue" : "green" }, isWatch ? "\uC2DC\uCCAD \uAE30\uC900" : "\uACB0\uC81C \uC644\uB8CC \uAE30\uC900")), hasDerivedWatchRows && /* @__PURE__ */ R.h("p", { className: "r-note r-videos-modal-note" }, hasDemoWatchRows ? "\uC6D0\uBCF8 \uC2DC\uC548\uC5D0 \uC2DC\uCCAD \uC774\uB825\uC774 \uC5C6\uC5B4, \uD604\uC7AC \uBAA9\uB85D\uC740 \uAC00\uC0C1 \uD68C\uC6D0 \uB370\uC774\uD130\uC5D0\uC11C \uD30C\uC0DD\uD55C \uD655\uC778\uC6A9 \uC2DC\uCCAD \uAE30\uB85D\uC785\uB2C8\uB2E4." : "\uD604\uC7AC \uC601\uC0C1\uC5D0\uB294 \uC2DC\uCCAD \uC9D1\uACC4\uAC12\uB9CC \uC788\uC5B4, \uD68C\uC6D0\uBCC4 \uD589\uC740 \uD654\uBA74 \uD655\uC778\uC744 \uC704\uD55C \uD30C\uC0DD \uD45C\uC2DC\uC785\uB2C8\uB2E4.", " \uC2E4\uC81C \uC6B4\uC601\uC5D0\uC11C\uB294 \uC2DC\uCCAD \uC774\uBCA4\uD2B8 \uB85C\uADF8\uB85C \uAD50\uCCB4\uD574\uC57C \uD569\uB2C8\uB2E4."), !isWatch && !rows.length && total > 0 && /* @__PURE__ */ R.h("p", { className: "r-alert" }, "\uC601\uC0C1 \uB808\uCF54\uB4DC\uC758 \uC9D1\uACC4\uAC12\uC740 \uC788\uC73C\uB098 \uACB0\uC81C \uC0C1\uC138 \uAE30\uB85D\uC774 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uC5F0\uB3D9 \uC2DC \uACB0\uC81C ID\uC640 \uC601\uC0C1 ID\uB97C \uC5F0\uACB0\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ R.h(
  R.Table,
  {
    headers: ["\uC544\uC774\uB514", "\uC774\uB984", "\uB2C9\uB124\uC784", "\uC5F0\uB77D\uCC98", isWatch ? "\uC2DC\uCCAD\uD69F\uC218" : "\uACB0\uC81C\uD69F\uC218"],
    rows: tableRows,
    empty: isWatch ? "\uD45C\uC2DC\uD560 \uC2DC\uCCAD \uD68C\uC6D0 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." : "\uC644\uB8CC\uB41C \uACB0\uC81C \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",
    className: "r-videos-audience-table"
  }
), /* @__PURE__ */ R.h("p", { className: "r-videos-modal-foot" }, "\uAC1C\uC778\uC815\uBCF4\uB294 \uB514\uC790\uC778 \uC2DC\uC548\uC6A9 \uAC00\uC0C1 \uB370\uC774\uD130\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uC6B4\uC601 \uD654\uBA74\uC5D0\uC11C\uB294 \uC870\uD68C \uAD8C\uD55C\xB7\uB9C8\uC2A4\uD0B9\xB7\uBCF4\uAD00 \uC815\uCC45\uC744 \uBCC4\uB3C4\uB85C \uC801\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4."));
}
function RVideosPromoModal({ expert, onClose, onNotify, store }) {
const id = "video-promo-" + expert;
const saved = (store.state.records.articles || []).find((row) => row.id === id);
const [title, setTitle] = R.useState(saved?.title || "\uD64D\uBCF4\uD31D\uC5C5\uBB38\uAD6C");
const [message, setMessage] = R.useState(() => saved?.content || "[" + expert + " \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1]\n\uC0C8 \uAD50\uC721\uC601\uC0C1\uACFC \uC778\uAE30 \uCF58\uD150\uCE20\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694.\n\u203B \uBCF8 \uBB38\uAD6C\uB294 \uC2DC\uC548\uC6A9 \uC608\uC2DC\uC785\uB2C8\uB2E4.");
const copy = async () => {
  try {
    await navigator.clipboard?.writeText(message);
    onNotify("\uD64D\uBCF4 \uD31D\uC5C5 \uBB38\uAD6C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4. (\uC2DC\uC548\uC6A9 \uB3D9\uC791)");
  } catch (_error) {
    onNotify("\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBCF5\uC0AC \uAD8C\uD55C\uC744 \uD5C8\uC6A9\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.");
  }
};
return /* @__PURE__ */ R.h(R.Modal, { title: "\uD64D\uBCF4 \uD31D\uC5C5 \uBB38\uAD6C", onClose, className: "r-videos-promo-modal" }, /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uAC8C\uC2DC \uC804 \uAC80\uD1A0\uC6A9 \uBB38\uAD6C\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uD31D\uC5C5 \uBC1C\uD589\xB7\uC54C\uB9BC \uBC1C\uC1A1\uC740 \uC5F0\uACB0\uD558\uC9C0 \uC54A\uB294 \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC785\uB2C8\uB2E4."), /* @__PURE__ */ R.h(R.Field, { label: "\uD31D\uC5C5 \uC81C\uBAA9" }, /* @__PURE__ */ R.h("input", { value: title, onChange: (e) => setTitle(e.target.value) })), /* @__PURE__ */ R.h(R.Field, { label: "\uD31D\uC5C5 \uBB38\uAD6C", className: "r-videos-promo-field" }, /* @__PURE__ */ R.h("textarea", { rows: "7", value: message, onChange: (event) => setMessage(event.target.value) })), /* @__PURE__ */ R.h("div", { className: "r-videos-editor-actions" }, /* @__PURE__ */ R.h("p", null, "\uC2E4\uC81C \uBC1C\uC1A1 \uC804 \uC218\uC2E0 \uB3D9\uC758\uC640 \uAD11\uACE0\uC131 \uC815\uBCF4 \uACE0\uC9C0 \uC694\uAC74\uC744 \uAC80\uD1A0\uD558\uC138\uC694."), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: copy }, /* @__PURE__ */ R.h(R.Icon, { name: "download" }), "\uBB38\uAD6C \uBCF5\uC0AC"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: () => {
  store.save("articles", { ...saved || {}, id, title, content: message, board: expert, date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), visibility: "\uBE44\uACF5\uAC1C", isVideoPromo: true });
  onClose();
} }, "\uBB38\uAD6C \uC800\uC7A5"))));
}
function RVideos({ spec, store }) {
const records = store?.state?.records || {};
const videos = Array.isArray(records.videos) ? records.videos : [];
const payments = Array.isArray(records.payments) ? records.payments : [];
const members = Array.isArray(records.members) ? records.members : [];
const fixedExpert = spec?.filter?.key === "expert" ? R.text(spec.filter.value) : "";
const expertOptions = Array.from(new Set(videos.map((video) => R.text(video.expert)).filter(Boolean)));
const [keyword, setKeyword] = R.useState("");
const [expert, setExpert] = R.useState(fixedExpert || "\uC804\uCCB4");
const [category, setCategory] = R.useState("\uC804\uCCB4");
const [visibility, setVisibility] = R.useState("\uC804\uCCB4");
const [sort, setSort] = R.useState("date");
const [perPage, setPerPage] = R.useState(10);
const [page, setPage] = R.useState(1);
const [selected, setSelected] = R.useState(() => /* @__PURE__ */ new Set());
const [modal, setModal] = R.useState(null);
const [revision, setRevision] = R.useState(0);
const selectedExpert = fixedExpert || (expert === "\uC804\uCCB4" ? "" : expert);
const scopedVideos = videos.filter((video) => !selectedExpert || R.text(video.expert) === selectedExpert);
const metricMap = R.useMemo(() => {
  const next = {};
  videos.forEach((video) => {
    next[String(video.id)] = rvVideoMetrics(video, payments, members);
  });
  return next;
}, [videos, payments, members, revision]);
const categoryOptions = Array.from(new Set(scopedVideos.map((video) => R.text(video.category)).filter(Boolean)));
const query = keyword.trim().toLowerCase();
const filteredVideos = scopedVideos.filter((video) => {
  const haystack = [video.title, video.expert, video.category, video.id].map(R.text).join(" ").toLowerCase();
  return (!query || haystack.includes(query)) && (category === "\uC804\uCCB4" || R.text(video.category) === category) && (visibility === "\uC804\uCCB4" || R.text(video.visibility) === visibility);
}).sort((left, right) => {
  const leftMetric = metricMap[String(left.id)] || { views: 0, purchases: 0 };
  const rightMetric = metricMap[String(right.id)] || { views: 0, purchases: 0 };
  if (sort === "views") return rightMetric.views - leftMetric.views || R.text(left.title).localeCompare(R.text(right.title), "ko");
  if (sort === "purchases") return rightMetric.purchases - leftMetric.purchases || R.text(left.title).localeCompare(R.text(right.title), "ko");
  if (sort === "amount") return rvNumber(right.amount) - rvNumber(left.amount) || R.text(left.title).localeCompare(R.text(right.title), "ko");
  return R.text(right.date).localeCompare(R.text(left.date)) || R.text(left.title).localeCompare(R.text(right.title), "ko");
});
const totalPages = Math.max(1, Math.ceil(filteredVideos.length / perPage));
const normalizedPage = Math.min(page, totalPages);
const pagedVideos = filteredVideos.slice((normalizedPage - 1) * perPage, normalizedPage * perPage);
const scopedMetrics = scopedVideos.reduce((summary, video) => {
  const metric = metricMap[String(video.id)] || { views: 0, purchases: 0, isDemoWatch: false };
  summary.views += metric.views;
  summary.purchases += metric.purchases;
  summary.demo = summary.demo || metric.isDemoWatch;
  return summary;
}, { views: 0, purchases: 0, demo: false });
const ranking = [...scopedVideos].map((video) => ({ video, metric: metricMap[String(video.id)] || { views: 0, purchases: 0 } })).sort((left, right) => right.metric.views - left.metric.views || right.metric.purchases - left.metric.purchases).slice(0, 7);
const rankingMax = Math.max(1, ...ranking.map((item) => item.metric.views));
const resetFilters = () => {
  setKeyword("");
  setExpert(fixedExpert || "\uC804\uCCB4");
  setCategory("\uC804\uCCB4");
  setVisibility("\uC804\uCCB4");
  setSort("date");
  setPage(1);
  setSelected(/* @__PURE__ */ new Set());
};
const changeFilter = (setter) => (event) => {
  setter(event.target.value);
  setPage(1);
};
const toggleSelected = (id) => setSelected((current) => {
  const next = new Set(current);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  return next;
});
const togglePageSelected = () => {
  const ids = pagedVideos.map((video) => String(video.id));
  const allSelected = ids.length > 0 && ids.every((id) => selected.has(id));
  setSelected((current) => {
    const next = new Set(current);
    ids.forEach((id) => allSelected ? next.delete(id) : next.add(id));
    return next;
  });
};
const saveVideo = (row) => {
  store.save("videos", row);
  setRevision((count) => count + 1);
  setModal(null);
};
const updateSelectedVisibility = (nextVisibility) => {
  const ids = Array.from(selected);
  if (!ids.length) return;
  store.updateMany("videos", ids, { visibility: nextVisibility }, "\uC601\uC0C1 " + nextVisibility + " \uCC98\uB9AC");
  setSelected(/* @__PURE__ */ new Set());
  setRevision((count) => count + 1);
};
const downloadCsv = () => {
  const header = ["\uC804\uBB38\uAC00", "\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uC81C\uBAA9", "\uCE74\uD14C\uACE0\uB9AC", "\uACB0\uC81C\uAE08\uC561", "\uACF5\uAC1C\uBC94\uC704", "\uAC8C\uC2DC\uC77C", "\uCD1D \uC2DC\uCCAD \uD69F\uC218", "\uCD1D \uACB0\uC81C \uD69F\uC218"];
  const escape = (value) => '"' + R.text(value).replaceAll('"', '""') + '"';
  const lines = [header, ...filteredVideos.map((video) => {
    const metric = metricMap[String(video.id)] || { views: 0, purchases: 0 };
    return [video.expert, video.title, video.category, rvNumber(video.amount), video.visibility, video.date, metric.views, metric.purchases];
  })].map((row) => row.map(escape).join(","));
  const blob = new Blob(["\uFEFF" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "\uC70C\uD074\uB7FD_\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1_\uC9D1\uACC4.csv";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  store.notify("\uD604\uC7AC \uAC80\uC0C9 \uACB0\uACFC\uB97C CSV\uB85C \uB0B4\uB824\uBC1B\uC558\uC2B5\uB2C8\uB2E4. (\uC2DC\uC548\uC6A9 \uB370\uC774\uD130)");
};
const activeExpertLabel = selectedExpert || "\uC804\uCCB4 \uC804\uBB38\uAC00";
const tableRows = pagedVideos.map((video) => {
  const metric = metricMap[String(video.id)] || { views: 0, purchases: 0, watchers: [], payers: [] };
  const checked = selected.has(String(video.id));
  return [
    /* @__PURE__ */ R.h("input", { type: "checkbox", "aria-label": R.text(video.title) + " \uC120\uD0DD", checked, onChange: () => toggleSelected(String(video.id)) }),
    /* @__PURE__ */ R.h("div", { className: "r-videos-thumb", "aria-label": R.text(video.title) + " \uC378\uB124\uC77C" }, video.image ? /* @__PURE__ */ R.h("img", { src: rvAsset(video.image), alt: "", onError: (event) => {
      event.currentTarget.style.display = "none";
      event.currentTarget.parentElement?.classList.add("is-missing");
    } }) : null, /* @__PURE__ */ R.h("span", { "aria-hidden": "true" }, "\uC601\uC0C1")),
    /* @__PURE__ */ R.h("div", { className: "r-videos-title-cell" }, /* @__PURE__ */ R.h("strong", null, video.title), /* @__PURE__ */ R.h("small", null, video.duration ? video.duration + " \xB7 " : "", video.viewLimit ? "\uCD5C\uB300 " + R.num(video.viewLimit) + "\uD68C \uC2DC\uCCAD" : "\uC2DC\uCCAD \uC81C\uD55C \uC5C6\uC74C")),
    /* @__PURE__ */ R.h("span", { className: "r-videos-category" }, video.category || "-"),
    /* @__PURE__ */ R.h("strong", { className: "r-money" }, R.money(video.amount)),
    /* @__PURE__ */ R.h(R.Badge, { tone: video.visibility === "\uACF5\uAC1C" ? "green" : "gray" }, video.visibility || "\uBE44\uACF5\uAC1C"),
    video.date || "-",
    /* @__PURE__ */ R.h("button", { type: "button", className: "r-videos-total-button r-videos-view-button", onClick: () => setModal({ kind: "watch", video, metric }), "aria-label": R.text(video.title) + "\uC758 \uCD1D \uC2DC\uCCAD \uD69F\uC218 \uBAA9\uB85D \uBCF4\uAE30" }, /* @__PURE__ */ R.h("strong", null, R.num(metric.views), "\uD68C"), /* @__PURE__ */ R.h("span", null, "\uBAA9\uB85D \uBCF4\uAE30")),
    /* @__PURE__ */ R.h("button", { type: "button", className: "r-videos-total-button r-videos-purchase-button", onClick: () => setModal({ kind: "purchase", video, metric }), "aria-label": R.text(video.title) + "\uC758 \uCD1D \uACB0\uC81C \uD69F\uC218 \uBAA9\uB85D \uBCF4\uAE30" }, /* @__PURE__ */ R.h("strong", null, R.num(metric.purchases), "\uD68C"), /* @__PURE__ */ R.h("span", null, "\uBAA9\uB85D \uBCF4\uAE30")),
    /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h(R.IconButton, { name: "edit", label: R.text(video.title) + " \uC218\uC815", onClick: () => setModal({ kind: "edit", video }) }), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => setModal({ kind: "coupon", video }) }, "\uCFE0\uD3F0"))
  ];
});
const pageAllSelected = pagedVideos.length > 0 && pagedVideos.every((video) => selected.has(String(video.id)));
return /* @__PURE__ */ R.h("section", { className: "r-videos r-stack", "aria-label": "\uC804\uBB38\uAC00\uBCC4 \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uAD00\uB9AC" }, /* @__PURE__ */ R.h("div", { className: "r-videos-topline" }, /* @__PURE__ */ R.h("p", null, "\uC804\uBB38\uAC00\uBCC4 \uAD50\uC721\uC601\uC0C1\uC758 \uC378\uB124\uC77C \uBAA9\uB85D\uC744 \uC720\uC9C0\uD558\uBA74\uC11C, \uC2E4\uC81C \uC2DC\uCCAD \uD69F\uC218\uC640 \uC644\uB8CC\uB41C \uACB0\uC81C \uD69F\uC218\uB97C \uD568\uAED8 \uD655\uC778\uD558\uB294 \uAD00\uB9AC\uC790 \uC2DC\uC548\uC785\uB2C8\uB2E4."), /* @__PURE__ */ R.h("span", null, "\uC9D1\uACC4 \uAE30\uC900\uC77C: \uD604\uC7AC \uC800\uC7A5\uB41C \uC624\uD504\uB77C\uC778 \uB370\uC774\uD130")), /* @__PURE__ */ R.h("div", { className: "r-videos-metrics r-grid3", "aria-label": "\uC601\uC0C1 \uC9D1\uACC4 \uC694\uC57D" }, /* @__PURE__ */ R.h(R.KPI, { label: activeExpertLabel + " \uB4F1\uB85D \uC601\uC0C1", value: R.num(scopedVideos.length) + "\uAC1C", detail: "\uD604\uC7AC \uC804\uBB38\uAC00 \uBC94\uC704\uC758 \uC601\uC0C1 \uC218", tone: "blue" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uCD1D \uC2DC\uCCAD \uD69F\uC218", value: R.num(scopedMetrics.views) + "\uD68C", detail: "\uC601\uC0C1\uBCC4 \uC2DC\uCCAD \uC774\uBCA4\uD2B8 \uD569\uACC4", tone: "green" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uCD1D \uACB0\uC81C \uD69F\uC218", value: R.num(scopedMetrics.purchases) + "\uD68C", detail: "\uC644\uB8CC\uB41C \uC601\uC0C1 \uACB0\uC81C \uAC74\uC218 \uD569\uACC4", tone: "red" })), /* @__PURE__ */ R.h(R.Panel, { title: "\uC870\uD68C \uC870\uAC74", subtitle: "\uC81C\uBAA9\xB7\uC804\uBB38\uAC00\xB7\uCE74\uD14C\uACE0\uB9AC\xB7\uACF5\uAC1C \uBC94\uC704\uB85C \uBAA9\uB85D\uC744 \uC881\uD790 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", className: "r-videos-filter-panel" }, /* @__PURE__ */ R.h("div", { className: "r-videos-search-row" }, /* @__PURE__ */ R.h("div", { className: "r-videos-search-input" }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), /* @__PURE__ */ R.h("input", { value: keyword, onChange: changeFilter(setKeyword), placeholder: "\uC774\uB984, \uC544\uC774\uB514 \uB610\uB294 \uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694", "aria-label": "\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uAC80\uC0C9" })), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: () => setPage(1) }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), "\uAC80\uC0C9"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: resetFilters }, "\uCD08\uAE30\uD654")), /* @__PURE__ */ R.h("div", { className: "r-videos-filter-grid" }, !fixedExpert && /* @__PURE__ */ R.h(R.Field, { label: "\uC804\uBB38\uAC00" }, /* @__PURE__ */ R.h("select", { value: expert, onChange: changeFilter(setExpert) }, /* @__PURE__ */ R.h("option", { value: "\uC804\uCCB4" }, "\uC804\uCCB4 \uC804\uBB38\uAC00"), expertOptions.map((item) => /* @__PURE__ */ R.h("option", { key: item, value: item }, item)))), /* @__PURE__ */ R.h(R.Field, { label: "\uCE74\uD14C\uACE0\uB9AC" }, /* @__PURE__ */ R.h("select", { value: category, onChange: changeFilter(setCategory) }, /* @__PURE__ */ R.h("option", { value: "\uC804\uCCB4" }, "\uC804\uCCB4 \uCE74\uD14C\uACE0\uB9AC"), categoryOptions.map((item) => /* @__PURE__ */ R.h("option", { key: item, value: item }, item)))), /* @__PURE__ */ R.h(R.Field, { label: "\uACF5\uAC1C \uBC94\uC704" }, /* @__PURE__ */ R.h("select", { value: visibility, onChange: changeFilter(setVisibility) }, /* @__PURE__ */ R.h("option", { value: "\uC804\uCCB4" }, "\uC804\uCCB4"), /* @__PURE__ */ R.h("option", { value: "\uACF5\uAC1C" }, "\uACF5\uAC1C"), /* @__PURE__ */ R.h("option", { value: "\uBE44\uACF5\uAC1C" }, "\uBE44\uACF5\uAC1C"))), /* @__PURE__ */ R.h(R.Field, { label: "\uC815\uB82C" }, /* @__PURE__ */ R.h("select", { value: sort, onChange: changeFilter(setSort) }, /* @__PURE__ */ R.h("option", { value: "date" }, "\uCD5C\uC2E0 \uAC8C\uC2DC\uC77C\uC21C"), /* @__PURE__ */ R.h("option", { value: "views" }, "\uCD1D \uC2DC\uCCAD \uD69F\uC218\uC21C"), /* @__PURE__ */ R.h("option", { value: "purchases" }, "\uCD1D \uACB0\uC81C \uD69F\uC218\uC21C"), /* @__PURE__ */ R.h("option", { value: "amount" }, "\uACB0\uC81C\uAE08\uC561 \uB192\uC740\uC21C"))))), scopedMetrics.demo && /* @__PURE__ */ R.h("div", { className: "r-alert r-videos-demo-alert", role: "note" }, /* @__PURE__ */ R.h("strong", null, "\uC2DC\uC548\uC6A9 \uC2DC\uCCAD \uB370\uC774\uD130 \uC548\uB0B4"), /* @__PURE__ */ R.h("span", null, "\uC6D0\uBCF8 \uC601\uC0C1 \uB808\uCF54\uB4DC\uC5D0 \uC2DC\uCCAD \uC774\uB825\uC774 \uC5C6\uB294 \uD56D\uBAA9\uC740 \uD654\uBA74 \uD655\uC778\uC744 \uC704\uD574 \uAC00\uC0C1 \uD68C\uC6D0 \uB370\uC774\uD130\uC5D0\uC11C \uD30C\uC0DD\uD55C \uC2DC\uCCAD \uAE30\uB85D\uC744 \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uC6B4\uC601\uC5D0\uC11C\uB294 \uC2DC\uCCAD \uC774\uBCA4\uD2B8 \uB85C\uADF8 \uB610\uB294 \uC9D1\uACC4 API\uC758 \uC2E4\uC81C \uAC12\uC744 \uC5F0\uACB0\uD574\uC57C \uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("div", { className: "r-split r-videos-split" }, /* @__PURE__ */ R.h(
  R.Panel,
  {
    title: activeExpertLabel + " \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1",
    subtitle: "\uAC80\uC0C9 \uACB0\uACFC " + R.num(filteredVideos.length) + "\uAC74 \xB7 \uC378\uB124\uC77C, \uCD1D \uC2DC\uCCAD \uD69F\uC218, \uCD1D \uACB0\uC81C \uD69F\uC218\uB97C \uD074\uB9AD\uD574 \uC0C1\uC138\uB97C \uD655\uC778\uD558\uC138\uC694.",
    className: "r-videos-list-panel",
    actions: /* @__PURE__ */ R.h(R.Fragment, null, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => setModal({ kind: "promo" }) }, "\uD64D\uBCF4\uD31D\uC5C5\uBB38\uAD6C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: downloadCsv }, /* @__PURE__ */ R.h(R.Icon, { name: "download" }), "\uBAA9\uB85D \uC800\uC7A5"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: () => setModal({ kind: "edit", video: null }) }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), "\uAD50\uC721\uC601\uC0C1 \uB4F1\uB85D"))
  },
  selected.size > 0 && /* @__PURE__ */ R.h("div", { className: "r-videos-selection-bar", role: "status" }, /* @__PURE__ */ R.h("strong", null, R.num(selected.size), "\uAC1C \uC120\uD0DD"), /* @__PURE__ */ R.h("span", null, "\uC120\uD0DD\uD55C \uC601\uC0C1\uC758 \uACF5\uAC1C \uBC94\uC704\uB97C \uC77C\uAD04 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => updateSelectedVisibility("\uACF5\uAC1C") }, "\uACF5\uAC1C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => updateSelectedVisibility("\uBE44\uACF5\uAC1C") }, "\uBE44\uACF5\uAC1C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-videos-clear-selection", onClick: () => setSelected(/* @__PURE__ */ new Set()) }, "\uC120\uD0DD \uD574\uC81C"))),
  /* @__PURE__ */ R.h("div", { className: "r-videos-list-tools" }, /* @__PURE__ */ R.h("p", null, /* @__PURE__ */ R.h("strong", null, "\uC804\uCCB4 ", R.num(filteredVideos.length), "\uAC74"), /* @__PURE__ */ R.h("span", null, " \xB7 \uC2DC\uCCAD\xB7\uACB0\uC81C \uC218\uB294 \uD68C\uCC28 \uAE30\uC900\uC785\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("label", null, "\uD398\uC774\uC9C0\uB2F9 ", /* @__PURE__ */ R.h("select", { value: perPage, onChange: (event) => {
    setPerPage(Number(event.target.value));
    setPage(1);
  } }, /* @__PURE__ */ R.h("option", { value: "5" }, "5\uAC1C"), /* @__PURE__ */ R.h("option", { value: "10" }, "10\uAC1C"), /* @__PURE__ */ R.h("option", { value: "20" }, "20\uAC1C")))),
  /* @__PURE__ */ R.h(
    R.Table,
    {
      headers: [
        /* @__PURE__ */ R.h("input", { type: "checkbox", "aria-label": "\uD604\uC7AC \uD398\uC774\uC9C0 \uC804\uCCB4 \uC120\uD0DD", checked: pageAllSelected, onChange: togglePageSelected }),
        "\uC378\uB124\uC77C",
        "\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uC81C\uBAA9",
        "\uCE74\uD14C\uACE0\uB9AC",
        "\uC601\uC0C1 \uACB0\uC81C\uAE08\uC561",
        "\uACF5\uAC1C \uBC94\uC704",
        "\uAC8C\uC2DC\uC77C",
        "\uCD1D \uC2DC\uCCAD \uD69F\uC218",
        "\uCD1D \uACB0\uC81C \uD69F\uC218",
        "\uAD00\uB9AC"
      ],
      rows: tableRows,
      empty: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC870\uD68C \uC870\uAC74\uC744 \uCD08\uAE30\uD654\uD558\uAC70\uB098 \uAD50\uC721\uC601\uC0C1\uC744 \uB4F1\uB85D\uD558\uC138\uC694.",
      className: "r-videos-table"
    }
  ),
  /* @__PURE__ */ R.h("div", { className: "r-videos-pagination", "aria-label": "\uC601\uC0C1 \uBAA9\uB85D \uD398\uC774\uC9C0" }, /* @__PURE__ */ R.h("span", null, filteredVideos.length ? (normalizedPage - 1) * perPage + 1 : 0, "\u2013", Math.min(normalizedPage * perPage, filteredVideos.length), " / ", R.num(filteredVideos.length), "\uAC74"), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", disabled: normalizedPage <= 1, onClick: () => setPage(1) }, "\uCC98\uC74C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", disabled: normalizedPage <= 1, onClick: () => setPage((current) => Math.max(1, current - 1)) }, "\uC774\uC804"), /* @__PURE__ */ R.h("strong", null, normalizedPage, " / ", totalPages), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", disabled: normalizedPage >= totalPages, onClick: () => setPage((current) => Math.min(totalPages, current + 1)) }, "\uB2E4\uC74C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", disabled: normalizedPage >= totalPages, onClick: () => setPage(totalPages) }, "\uB9C8\uC9C0\uB9C9")))
), /* @__PURE__ */ R.h("aside", { className: "r-videos-ranking-column", "aria-label": "\uC2E4\uC81C \uC2DC\uCCAD \uD69F\uC218 \uAE30\uC900 \uC778\uAE30 \uC601\uC0C1" }, /* @__PURE__ */ R.h(R.Panel, { title: "\uC778\uAE30 \uC601\uC0C1 \uC21C\uC704", subtitle: "\uCD1D \uC2DC\uCCAD \uD69F\uC218\uAC00 \uB192\uC740 \uC21C\uC11C\uC785\uB2C8\uB2E4. \uB9C9\uB300 \uAE38\uC774\uB294 1\uC704 \uB300\uBE44 \uC2DC\uCCAD \uD69F\uC218 \uBE44\uC728\uC785\uB2C8\uB2E4.", className: "r-videos-ranking-panel" }, /* @__PURE__ */ R.h("ol", { className: "r-videos-ranking-list" }, ranking.length ? ranking.map(({ video, metric }, index) => /* @__PURE__ */ R.h("li", { key: video.id, className: "r-videos-ranking-row" }, /* @__PURE__ */ R.h("span", { className: "r-videos-rank-number r-videos-rank-" + Math.min(index + 1, 3) }, index + 1), /* @__PURE__ */ R.h("div", { className: "r-videos-rank-content" }, /* @__PURE__ */ R.h("button", { type: "button", onClick: () => setModal({ kind: "watch", video, metric }), title: R.text(video.title) + " \uC2DC\uCCAD\uC790 \uBAA9\uB85D \uBCF4\uAE30" }, video.title), /* @__PURE__ */ R.h("div", { className: "r-videos-rank-meta" }, /* @__PURE__ */ R.h("span", null, video.category || "\uBBF8\uBD84\uB958"), /* @__PURE__ */ R.h("strong", null, R.num(metric.views), "\uD68C \uC2DC\uCCAD")), /* @__PURE__ */ R.h("div", { className: "r-videos-rank-track", role: "img", "aria-label": R.text(video.title) + " \uC2DC\uCCAD " + R.num(metric.views) + "\uD68C" }, /* @__PURE__ */ R.h("i", { style: { width: Math.max(metric.views ? 8 : 0, metric.views / rankingMax * 100) + "%" } }))))) : /* @__PURE__ */ R.h("li", { className: "r-videos-ranking-empty" }, "\uD45C\uC2DC\uD560 \uC601\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("div", { className: "r-videos-ranking-legend" }, /* @__PURE__ */ R.h("span", null, /* @__PURE__ */ R.h("i", { className: "r-videos-legend-dot" }), "\uC2E4\uC81C \uC2DC\uCCAD \uD69F\uC218"), /* @__PURE__ */ R.h("span", null, "\uCD1D ", R.num(scopedMetrics.views), "\uD68C"))), /* @__PURE__ */ R.h("div", { className: "r-videos-ranking-note" }, /* @__PURE__ */ R.h("strong", null, "\uC9D1\uACC4 \uC815\uC758"), /* @__PURE__ */ R.h("p", null, "\uD55C \uD68C\uC6D0\uC774 \uAC19\uC740 \uC601\uC0C1\uC744 \uC5EC\uB7EC \uBC88 \uC2DC\uCCAD\uD558\uBA74 \uC2DC\uCCAD \uD69F\uC218\uC5D0 \uAC01\uAC01 \uD569\uC0B0\uB429\uB2C8\uB2E4. \uACB0\uC81C \uD69F\uC218\uC640 \uC778\uC6D0 \uC218\uB294 \uAC19\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")))), modal?.kind === "coupon" && /* @__PURE__ */ R.h(RSecondVideoCoupon, { video: modal.video, store, onClose: () => setModal(null) }), modal?.kind === "watch" && /* @__PURE__ */ R.h(RVideosAudienceModal, { video: modal.video, kind: "watch", rows: modal.metric.watchers, total: modal.metric.views, onClose: () => setModal(null) }), modal?.kind === "purchase" && /* @__PURE__ */ R.h(RVideosAudienceModal, { video: modal.video, kind: "purchase", rows: modal.metric.payers, total: modal.metric.purchases, onClose: () => setModal(null) }), modal?.kind === "edit" && /* @__PURE__ */ R.h(RVideosEditorModal, { ui:R, canUpload:store.canUpload, video: modal.video, experts: expertOptions, videos, onClose: () => setModal(null), onSave: saveVideo }), modal?.kind === "promo" && /* @__PURE__ */ R.h(RVideosPromoModal, { store, expert: activeExpertLabel, onClose: () => setModal(null), onNotify: (message) => store.notify(message) }));
}

function RSms({ spec, store }) {
const records = store && store.state && store.state.records ? store.state.records : {};
const members = Array.isArray(records.members) ? records.members : [];
const ruleRecords = Array.isArray(records.smsRules) ? records.smsRules : [];
const savedHistory = Array.isArray(records.smsHistory) ? records.smsHistory : [];
const composeOnly = spec.path === "/admin/sms/compose";
const [templatesOpen, setTemplatesOpen] = R.useState(false);
const [extraRecipients, setExtraRecipients] = R.useState([{ name: "", phone: "" }, { name: "", phone: "" }, { name: "", phone: "" }]);
const [recipient, setRecipient] = R.useState({ name: "", phone: "" });
const [message, setMessage] = R.useState("");
const [memberQuery, setMemberQuery] = R.useState("");
const [pickerOpen, setPickerOpen] = R.useState(false);
const [validation, setValidation] = R.useState("");
const [confirmOpen, setConfirmOpen] = R.useState(false);
const [templateEditor, setTemplateEditor] = R.useState(null);
const [templateDraft, setTemplateDraft] = R.useState({ title: "", content: "" });
const [localTemplates, setLocalTemplates] = R.useState([]);
const [localHistory, setLocalHistory] = R.useState([]);
const [historyQuery, setHistoryQuery] = R.useState("");
const [historyStatus, setHistoryStatus] = R.useState("\uC804\uCCB4");
const [historyDetail, setHistoryDetail] = R.useState(null);
const [notice, setNotice] = R.useState("");
const defaultTemplates = [
  { id: "sms-template-join", title: "\uAC00\uC785 \uD658\uC601", content: "{\uC774\uB984}\uB2D8, \uC70C\uD074\uB7FD \uAC00\uC785\uC744 \uD658\uC601\uD569\uB2C8\uB2E4. \uC774\uC6A9 \uC548\uB0B4\uB294 \uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uD574\uC8FC\uC138\uC694.", preset: true },
  { id: "sms-template-service", title: "\uC11C\uBE44\uC2A4 \uC548\uB0B4", content: "{\uC774\uB984}\uB2D8, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uC548\uB0B4\uB97C \uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uD574\uC8FC\uC138\uC694.", preset: true },
  { id: "sms-template-payment", title: "\uACB0\uC81C \uC644\uB8CC", content: "{\uC774\uB984}\uB2D8, \uACB0\uC81C\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC6A9 \uC11C\uBE44\uC2A4\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.", preset: true },
  { id: "sms-template-expire", title: "\uC11C\uBE44\uC2A4 \uB9CC\uB8CC \uC548\uB0B4", content: "{\uC774\uB984}\uB2D8, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uAC04\uC774 \uC885\uB8CC\uB420 \uC608\uC815\uC785\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uD574\uC8FC\uC138\uC694.", preset: true }
];
const normalizePhone = (value) => R.text(value).replace(/\D/g, "");
const formatPhone = (value) => {
  const phone = normalizePhone(value);
  if (phone.length === 11) return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  if (phone.length === 10) return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  return R.text(value);
};
const phoneIsValid = (value) => /^01\d{8,9}$/.test(normalizePhone(value));
const displayDate = (value) => {
  const raw = R.text(value);
  if (!raw) return "-";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return date.toLocaleString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
};
const notify = (copy) => {
  setNotice(copy);
  if (store && typeof store.notify === "function") store.notify(copy);
};
const frequentRules = ruleRecords.filter((rule) => rule && (rule.kind === "frequent-template" || rule.template === true));
const templates = R.useMemo(() => {
  const combined = [...frequentRules, ...localTemplates];
  const byId = /* @__PURE__ */ new Map();
  combined.forEach((item) => byId.set(item.id, item));
  const base = defaultTemplates.map((preset) => {
    const edited = byId.get(preset.id);
    return edited ? { ...preset, ...edited, preset: true, saved: true } : preset;
  });
  const extras = Array.from(byId.values()).filter((item) => !defaultTemplates.some((preset) => preset.id === item.id));
  return [...base, ...extras];
}, [ruleRecords, localTemplates]);
const history = R.useMemo(() => {
  const byId = /* @__PURE__ */ new Map();
  [...savedHistory, ...localHistory].forEach((item) => {
    if (item && item.id) byId.set(item.id, item);
  });
  return Array.from(byId.values()).sort((a, b) => R.text(b.date).localeCompare(R.text(a.date)));
}, [savedHistory, localHistory]);
const filteredMembers = R.useMemo(() => {
  const query = memberQuery.trim().toLowerCase();
  if (!query) return members.slice(0, 8);
  return members.filter((member) => [member.loginId, member.name, member.nickname, member.phone, member.group].some((value) => R.text(value).toLowerCase().includes(query))).slice(0, 12);
}, [members, memberQuery]);
const filteredHistory = R.useMemo(() => {
  const query = historyQuery.trim().toLowerCase();
  return history.filter((item) => {
    const matchQuery = !query || [item.name, item.phone, item.title, item.content, item.date].some((value) => R.text(value).toLowerCase().includes(query));
    const matchStatus = historyStatus === "\uC804\uCCB4" || R.text(item.status) === historyStatus;
    return matchQuery && matchStatus;
  });
}, [history, historyQuery, historyStatus]);
const statusTone = (status) => {
  if (status === "\uC131\uACF5") return "green";
  if (status === "\uC2E4\uD328") return "red";
  if (status === "\uB300\uAE30") return "amber";
  return "blue";
};
const selectMember = (member) => {
  setRecipient({ name: R.text(member.name), phone: formatPhone(member.phone) });
  setPickerOpen(false);
  setMemberQuery("");
  setValidation("");
};
const applyTemplate = (template) => {
  const personalized = R.text(template.content).replace(/\{이름\}/g, recipient.name.trim() || "{\uC774\uB984}");
  setMessage(personalized);
  setValidation("");
  notify("\u201C" + R.text(template.title) + "\u201D \uBB38\uAD6C\uB97C \uBB38\uC790 \uB0B4\uC6A9\uC5D0 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4.");
};
const openTemplateEditor = (template) => {
  setTemplateEditor(template || { id: "", isNew: true });
  setTemplateDraft({ title: template ? R.text(template.title) : "", content: template ? R.text(template.content) : "" });
};
const saveTemplate = () => {
  const title = templateDraft.title.trim();
  const content = templateDraft.content.trim();
  if (!title || !content) {
    setValidation("\uBB38\uAD6C \uC774\uB984\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  const id = templateEditor && templateEditor.id ? templateEditor.id : "sms-template-" + Date.now();
  const nextTemplate = {
    id,
    title,
    content,
    kind: "frequent-template",
    template: true,
    trigger: "\uC218\uB3D9 \uBB38\uAD6C",
    enabled: false,
    days: 0,
    sender: "",
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  setLocalTemplates((previous) => [...previous.filter((item) => item.id !== id), nextTemplate]);
  if (store && typeof store.save === "function") store.save("smsRules", nextTemplate);
  setTemplateEditor(null);
  setValidation("");
  notify("\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBB38\uAD6C\uB97C \uC774 \uC2DC\uC548\uC758 \uC800\uC7A5\uC18C\uC5D0 \uBCF4\uAD00\uD588\uC2B5\uB2C8\uB2E4.");
};
const reviewMessage = () => {
  if (!message.trim()) {
    setValidation("\uBB38\uC790 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  if (![recipient, ...extraRecipients].filter((r) => r.phone.trim() || r.name.trim()).length || [recipient, ...extraRecipients].filter((r) => r.phone.trim() || r.name.trim()).some((r) => !phoneIsValid(r.phone))) {
    setValidation("\uC218\uC2E0 \uD734\uB300\uD3F0\uBC88\uD638\uB97C 010\uC73C\uB85C \uC2DC\uC791\uD558\uB294 \uC62C\uBC14\uB978 \uBC88\uD638\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  setValidation("");
  setConfirmOpen(true);
};
const keepHistory = () => {
  const savedAt = (/* @__PURE__ */ new Date()).toISOString();
  const row = {
    id: "sms-history-" + Date.now(),
    title: message.trim().replace(/\s+/g, " ").slice(0, 30) || "\uC9C1\uC811 \uC791\uC131 \uBB38\uC790",
    name: recipient.name.trim() || "\uC9C1\uC811 \uC785\uB825",
    phone: formatPhone(recipient.phone),
    date: savedAt,
    status: "\uC2DC\uC548 \uBCF4\uAD00",
    content: message.trim(),
    receiverCount: 1,
    simulated: true
  };
  setLocalHistory((previous) => [...[recipient, ...extraRecipients].filter((r) => r.phone.trim()).map((r, i) => ({ ...row, id: row.id + "-" + i, name: r.name.trim() || "\uC9C1\uC811 \uC785\uB825", phone: formatPhone(r.phone) })), ...previous]);
  if (store && typeof store.save === "function") [recipient, ...extraRecipients].filter((r) => r.phone.trim()).forEach((r, i) => store.save("smsHistory", { ...row, id: row.id + "-" + i, name: r.name.trim() || "\uC9C1\uC811 \uC785\uB825", phone: formatPhone(r.phone) }));
  setConfirmOpen(false);
  notify("\uBC1C\uC1A1\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC785\uB825\uD55C \uBB38\uC790 \uB0B4\uC6A9\uC744 \uC2DC\uC548\uC6A9 \uBC1C\uC1A1 \uB0B4\uC5ED\uC73C\uB85C \uBCF4\uAD00\uD588\uC2B5\uB2C8\uB2E4.");
};
const historyRows = filteredHistory.map((item) => [
  /* @__PURE__ */ R.h("div", { className: "sms-workspace__recipient-cell" }, /* @__PURE__ */ R.h("strong", null, R.text(item.name) || "\uC9C1\uC811 \uC785\uB825"), /* @__PURE__ */ R.h("small", null, formatPhone(item.phone))),
  /* @__PURE__ */ R.h("span", { className: "sms-workspace__history-title", title: R.text(item.content) }, R.text(item.title) || "\uC9C1\uC811 \uC791\uC131 \uBB38\uC790"),
  /* @__PURE__ */ R.h(R.Badge, { tone: statusTone(R.text(item.status)) }, R.text(item.status) || "\uC2DC\uC548 \uBCF4\uAD00"),
  /* @__PURE__ */ R.h("time", { dateTime: R.text(item.date) }, displayDate(item.date)),
  /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h(R.IconButton, { name: "check", label: "\uBB38\uC790 \uB0B4\uC6A9 \uBCF4\uAE30", onClick: () => setHistoryDetail(item) }))
]);
return /* @__PURE__ */ R.h("div", { className: "sms-workspace r-stack" }, /* @__PURE__ */ R.h("section", { className: "sms-workspace__header", "aria-labelledby": "sms-workspace-title" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("p", { className: "sms-workspace__eyebrow" }, "SMS \uAD00\uB9AC \xB7 \uC624\uD504\uB77C\uC778 \uC2DC\uC548"), /* @__PURE__ */ R.h("h1", { id: "sms-workspace-title" }, spec && spec.title ? spec.title : "\uBB38\uC790 \uBC1C\uC1A1 \uB0B4\uC5ED"), /* @__PURE__ */ R.h("p", null, composeOnly ? "\uC218\uC2E0\uC790\uB97C \uC785\uB825\uD558\uACE0 \uBB38\uC790\uB97C \uC791\uC131\uD569\uB2C8\uB2E4." : "\uBB38\uC790 \uBC1C\uC1A1 \uB0B4\uC5ED\uC744 \uD655\uC778\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Badge, { tone: "red" }, "\uC2E4\uC81C SMS \uBBF8\uC5F0\uACB0")), notice && /* @__PURE__ */ R.h("div", { className: "sms-workspace__notice", role: "status" }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), " ", /* @__PURE__ */ R.h("span", null, notice), /* @__PURE__ */ R.h("button", { type: "button", className: "sms-workspace__notice-close", "aria-label": "\uC548\uB0B4 \uB2EB\uAE30", onClick: () => setNotice("") }, /* @__PURE__ */ R.h(R.Icon, { name: "close", size: 16 }))), composeOnly && /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h(R.Panel, { title: "\uC2E4\uC2DC\uAC04 \uBB38\uC790 \uC791\uC131", subtitle: "\uBC1B\uB294 \uC0AC\uB78C\uC758 \uC774\uB984\uACFC \uD734\uB300\uD3F0\uBC88\uD638\uB97C \uC785\uB825\uD569\uB2C8\uB2E4.", className: "sms-workspace__composer" }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("div", { className: "sms-workspace__offline-note", role: "note" }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), /* @__PURE__ */ R.h("span", null, /* @__PURE__ */ R.h("strong", null, "\uC2DC\uC548 \uC804\uC6A9"), " \xB7 \uC544\uB798 \uD655\uC778\uC740 SMS\uB97C \uBC1C\uC1A1\uD558\uC9C0 \uC54A\uC73C\uBA70, \uC785\uB825 \uB0B4\uC6A9\uB9CC \uBC1C\uC1A1 \uB0B4\uC5ED\uC5D0 \uBCF4\uAD00\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Field, { label: "\uBB38\uC790 \uB0B4\uC6A9", hint: message.length + "\uC790 \xB7 \uC904\uBC14\uAFC8\uC744 \uD3EC\uD568\uD574 \uADF8\uB300\uB85C \uBCF4\uAD00\uB429\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("textarea", { id: "sms-message", rows: "7", value: message, placeholder: "\uBB38\uC790 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694", onChange: (event) => {
  setMessage(event.target.value);
  setValidation("");
} })), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => setTemplatesOpen(true) }, "\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBB38\uAD6C \uC124\uC815"), /* @__PURE__ */ R.h("section", { className: "sms-workspace__recipient-section", "aria-labelledby": "recipient-title" }, /* @__PURE__ */ R.h("div", { className: "sms-workspace__section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("h3", { id: "recipient-title" }, "\uBC1B\uB294 \uC0AC\uB78C"), /* @__PURE__ */ R.h("p", null, "\uC774\uB984\uACFC \uD734\uB300\uD3F0\uBC88\uD638 \uD56D\uBAA9\uC740 \uCCAB \uC904\uC5D0\uB9CC \uD45C\uC2DC\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => setPickerOpen((open) => !open), "aria-expanded": pickerOpen }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), " \uD68C\uC6D0 \uAC80\uC0C9")), pickerOpen && /* @__PURE__ */ R.h("div", { className: "sms-workspace__member-picker" }, /* @__PURE__ */ R.h(R.Field, { label: "\uD68C\uC6D0 \uCC3E\uAE30", hint: "\uC774\uB984\xB7\uC544\uC774\uB514\xB7\uB2C9\uB124\uC784\xB7\uD734\uB300\uD3F0\uBC88\uD638\xB7\uC774\uC6A9 \uC11C\uBE44\uC2A4\uB97C \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { autoFocus: true, value: memberQuery, placeholder: "\uD68C\uC6D0 \uAC80\uC0C9", onChange: (event) => setMemberQuery(event.target.value) })), /* @__PURE__ */ R.h("div", { className: "sms-workspace__member-results", role: "list" }, filteredMembers.length ? filteredMembers.map((member) => /* @__PURE__ */ R.h("button", { type: "button", role: "listitem", key: member.id, onClick: () => selectMember(member) }, /* @__PURE__ */ R.h("span", null, /* @__PURE__ */ R.h("strong", null, R.text(member.name)), /* @__PURE__ */ R.h("small", null, R.text(member.loginId), " \xB7 ", R.text(member.group) || "\uBB34\uB8CC\uD68C\uC6D0")), /* @__PURE__ */ R.h("span", null, formatPhone(member.phone)), /* @__PURE__ */ R.h(R.Icon, { name: "arrow" }))) : /* @__PURE__ */ R.h("p", { className: "r-muted" }, "\uC77C\uCE58\uD558\uB294 \uD68C\uC6D0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))), /* @__PURE__ */ R.h("div", { className: "fourth-recipient-box", "aria-label": "\uBC1B\uB294 \uC0AC\uB78C \uC785\uB825 \uBAA9\uB85D" }, /* @__PURE__ */ R.h("div", { className: "fourth-recipient-labels" }, /* @__PURE__ */ R.h("span", null, "\uC774\uB984(\uC120\uD0DD)"), /* @__PURE__ */ R.h("span", null, "\uD734\uB300\uD3F0\uBC88\uD638")), /* @__PURE__ */ R.h("div", { className: "fourth-recipient-row" }, /* @__PURE__ */ R.h("input", { "aria-label": "\uC218\uC2E0\uC790 \uC774\uB984(\uC120\uD0DD)", value: recipient.name, placeholder: "\uC9C1\uC811 \uC785\uB825 \uB610\uB294 \uD68C\uC6D0 \uAC80\uC0C9", onChange: (event) => setRecipient({ ...recipient, name: event.target.value }) }), /* @__PURE__ */ R.h("input", { "aria-label": "\uC218\uC2E0\uC790 \uD734\uB300\uD3F0\uBC88\uD638", inputMode: "tel", value: recipient.phone, placeholder: "010-0000-0000", onChange: (event) => {
  setRecipient({ ...recipient, phone: event.target.value });
  setValidation("");
}, onBlur: () => setRecipient((previous) => ({ ...previous, phone: formatPhone(previous.phone) })) })), extraRecipients.map((row, index) => /* @__PURE__ */ R.h("div", { className: "fourth-recipient-row", key: index }, /* @__PURE__ */ R.h("input", { "aria-label": "\uCD94\uAC00 \uC218\uC2E0\uC790 " + (index + 1) + " \uC774\uB984", value: row.name, onChange: (e) => setExtraRecipients((current) => current.map((r, i) => i === index ? { ...r, name: e.target.value } : r)) }), /* @__PURE__ */ R.h("input", { "aria-label": "\uCD94\uAC00 \uC218\uC2E0\uC790 " + (index + 1) + " \uD734\uB300\uD3F0\uBC88\uD638", value: row.phone, inputMode: "tel", onChange: (e) => setExtraRecipients((current) => current.map((r, i) => i === index ? { ...r, phone: e.target.value } : r)) }))))), validation && /* @__PURE__ */ R.h("p", { className: "sms-workspace__error", role: "alert" }, validation), /* @__PURE__ */ R.h("div", { className: "sms-workspace__composer-actions" }, /* @__PURE__ */ R.h("span", null, "\uC218\uC2E0 \uB300\uC0C1 ", /* @__PURE__ */ R.h("strong", null, [recipient, ...extraRecipients].filter((r) => phoneIsValid(r.phone)).length, "\uBA85"), " \xB7 \uC2E4\uC81C \uBC1C\uC1A1 0\uAC74"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: reviewMessage }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), " \uBC1C\uC1A1 \uB0B4\uC6A9 \uD655\uC778"))))), !composeOnly && /* @__PURE__ */ R.h(R.Panel, { title: "\uBB38\uC790 \uBC1C\uC1A1 \uB0B4\uC5ED", subtitle: "\uBCF4\uAD00\uB41C " + R.num(history.length) + "\uAC74\uC758 \uC2DC\uC548 \uAE30\uB85D\uC785\uB2C8\uB2E4. \uAE30\uC874 \uAE30\uB85D\uC740 \uC0AD\uC81C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", className: "sms-workspace__history" }, /* @__PURE__ */ R.h("div", { className: "r-toolbar" }, /* @__PURE__ */ R.h("input", { value: historyQuery, placeholder: "\uC218\uC2E0\uC790\xB7\uC218\uC2E0\uBC88\uD638\xB7\uBB38\uAD6C \uAC80\uC0C9", "aria-label": "\uBB38\uC790 \uBC1C\uC1A1 \uB0B4\uC5ED \uAC80\uC0C9", onChange: (event) => setHistoryQuery(event.target.value) }), /* @__PURE__ */ R.h("select", { value: historyStatus, "aria-label": "\uBC1C\uC1A1 \uC774\uB825 \uC0C1\uD0DC \uD544\uD130", onChange: (event) => setHistoryStatus(event.target.value) }, /* @__PURE__ */ R.h("option", null, "\uC804\uCCB4"), /* @__PURE__ */ R.h("option", null, "\uC131\uACF5"), /* @__PURE__ */ R.h("option", null, "\uC2E4\uD328"), /* @__PURE__ */ R.h("option", null, "\uB300\uAE30"), /* @__PURE__ */ R.h("option", null, "\uC2DC\uC548 \uBCF4\uAD00")), /* @__PURE__ */ R.h("span", { className: "r-muted" }, "\uC870\uD68C ", R.num(filteredHistory.length), "\uAC74")), /* @__PURE__ */ R.h(R.Table, { headers: ["\uC218\uC2E0\uC790 \xB7 \uC218\uC2E0\uBC88\uD638", "\uBC1C\uC1A1 \uBB38\uAD6C", "\uC0C1\uD0DC", "\uBCF4\uAD00\uC77C", "\uB0B4\uC6A9"], rows: historyRows, empty: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uBC1C\uC1A1 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }), /* @__PURE__ */ R.h("p", { className: "sms-workspace__history-foot" }, "\uBAA8\uB4E0 \uC218\uCE58\uB294 \uC2DC\uC548\uC6A9 \uC608\uC2DC\uC774\uBA70 \uC2E4\uC81C \uBB38\uC790 \uBC1C\uC1A1 \uB610\uB294 \uC218\uC2E0 \uACB0\uACFC\uB97C \uB73B\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), composeOnly && templatesOpen && /* @__PURE__ */ R.h(R.Modal, { title: "\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBB38\uAD6C \uC124\uC815", onClose: () => setTemplatesOpen(false) }, "          ", /* @__PURE__ */ R.h("section", { className: "sms-workspace__template-section", "aria-labelledby": "frequent-template-title" }, /* @__PURE__ */ R.h("div", { className: "sms-workspace__section-heading" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("h3", { id: "frequent-template-title" }, "\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBB38\uAD6C"), /* @__PURE__ */ R.h("p", null, "\uBB38\uAD6C\uB97C \uD074\uB9AD\uD558\uBA74 \uD604\uC7AC \uBB38\uC790 \uB0B4\uC6A9\uC5D0 \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC5F0\uD544 \uC544\uC774\uCF58\uC73C\uB85C \uB4F1\uB85D \uBB38\uAD6C\uB97C \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => openTemplateEditor(null) }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), " \uBB38\uAD6C \uB4F1\uB85D")), /* @__PURE__ */ R.h("div", { className: "sms-workspace__templates" }, templates.map((template) => /* @__PURE__ */ R.h("div", { className: "sms-workspace__template", key: template.id }, /* @__PURE__ */ R.h("button", { type: "button", className: "sms-workspace__template-apply", onClick: () => applyTemplate(template), title: R.text(template.content) }, /* @__PURE__ */ R.h("span", null, R.text(template.title)), /* @__PURE__ */ R.h("small", null, "\uBB38\uAD6C \uC801\uC6A9")), /* @__PURE__ */ R.h(R.IconButton, { name: "edit", label: R.text(template.title) + " \uBB38\uAD6C \uC218\uC815", onClick: () => openTemplateEditor(template) })))), /* @__PURE__ */ R.h("p", { className: "sms-workspace__template-help" }, "\uB4F1\uB85D\xB7\uC218\uC815\uD55C \uBB38\uAD6C\uB294 \uC774 \uC2DC\uC548\uC758 ", /* @__PURE__ */ R.h("code", null, "smsRules"), " \uC800\uC7A5\uC18C\uC5D0\uB9CC \uBCF4\uAD00\uB429\uB2C8\uB2E4. \uC790\uB3D9 \uBC1C\uC1A1\uC774\uB098 \uC678\uBD80 \uC804\uC1A1\uC740 \uC218\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."))), templateEditor && /* @__PURE__ */ R.h(R.Modal, { title: templateEditor.isNew ? "\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBB38\uAD6C \uB4F1\uB85D" : "\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBB38\uAD6C \uC218\uC815", onClose: () => {
  setTemplateEditor(null);
  setValidation("");
} }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uBB38\uAD6C\uB294 \uC774 \uC2DC\uC548\uC758 \uC800\uC7A5\uC18C\uC5D0\uB9CC \uBCF4\uAD00\uB429\uB2C8\uB2E4. ", /* @__PURE__ */ R.h("strong", null, "\u2018{\uC774\uB984}\u2019"), "\uC744 \uC785\uB825\uD558\uBA74 \uBB38\uAD6C \uC801\uC6A9 \uC2DC \uC218\uC2E0\uC790 \uC774\uB984\uC73C\uB85C \uBC14\uB01D\uB2C8\uB2E4."), /* @__PURE__ */ R.h(R.Field, { label: "\uBB38\uAD6C \uC774\uB984" }, /* @__PURE__ */ R.h("input", { autoFocus: true, value: templateDraft.title, placeholder: "\uC608: \uBC30\uC1A1 \uC548\uB0B4", onChange: (event) => setTemplateDraft({ ...templateDraft, title: event.target.value }) })), /* @__PURE__ */ R.h(R.Field, { label: "\uBB38\uAD6C \uB0B4\uC6A9", hint: templateDraft.content.length + "\uC790" }, /* @__PURE__ */ R.h("textarea", { rows: "7", value: templateDraft.content, placeholder: "\uC790\uC8FC \uC0AC\uC6A9\uD560 \uBB38\uAD6C\uB97C \uC785\uB825\uD558\uC138\uC694", onChange: (event) => setTemplateDraft({ ...templateDraft, content: event.target.value }) })), validation && /* @__PURE__ */ R.h("p", { className: "sms-workspace__error", role: "alert" }, validation), /* @__PURE__ */ R.h("div", { className: "r-actions sms-workspace__modal-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => {
  setTemplateEditor(null);
  setValidation("");
} }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: saveTemplate }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), " \uC800\uC7A5")))), confirmOpen && /* @__PURE__ */ R.h(R.Modal, { title: "\uBC1C\uC1A1 \uB0B4\uC6A9 \uD655\uC778", onClose: () => setConfirmOpen(false) }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("div", { className: "r-alert" }, /* @__PURE__ */ R.h("strong", null, "\uC2E4\uC81C \uBB38\uC790 \uBC1C\uC1A1 \uC5C6\uC74C"), /* @__PURE__ */ R.h("br", null), "\uC544\uB798 \u2018\uBC1C\uC1A1 \uB0B4\uC5ED\uC5D0 \uBCF4\uAD00\u2019\uC740 \uC678\uBD80 SMS\uB97C \uC804\uC1A1\uD558\uC9C0 \uC54A\uACE0, \uC2DC\uC548\uC6A9 \uC774\uB825 \uD55C \uAC74\uB9CC \uC0DD\uC131\uD569\uB2C8\uB2E4."), /* @__PURE__ */ R.h("dl", { className: "sms-workspace__review-list" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uBC1B\uB294 \uC0AC\uB78C"), /* @__PURE__ */ R.h("dd", null, [recipient, ...extraRecipients].filter((r) => r.phone.trim()).map((r) => r.name.trim() || "\uC9C1\uC811 \uC785\uB825").join(", "))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC218\uC2E0 \uD734\uB300\uD3F0\uBC88\uD638"), /* @__PURE__ */ R.h("dd", null, [recipient, ...extraRecipients].filter((r) => r.phone.trim()).map((r) => formatPhone(r.phone)).join(", "))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC218\uC2E0 \uC778\uC6D0"), /* @__PURE__ */ R.h("dd", null, [recipient, ...extraRecipients].filter((r) => r.phone.trim()).length, "\uBA85")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uBB38\uC790 \uAE38\uC774"), /* @__PURE__ */ R.h("dd", null, message.length, "\uC790"))), /* @__PURE__ */ R.h("section", { className: "sms-workspace__message-preview", "aria-label": "\uBB38\uC790 \uB0B4\uC6A9 \uBBF8\uB9AC\uBCF4\uAE30" }, /* @__PURE__ */ R.h("p", null, "\uBB38\uC790 \uB0B4\uC6A9"), /* @__PURE__ */ R.h("pre", null, message)), /* @__PURE__ */ R.h("div", { className: "r-actions sms-workspace__modal-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: () => setConfirmOpen(false) }, "\uC791\uC131\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: keepHistory }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), " \uBC1C\uC1A1 \uB0B4\uC5ED\uC5D0 \uBCF4\uAD00")))), historyDetail && /* @__PURE__ */ R.h(R.Modal, { title: "\uBCF4\uAD00\uB41C \uBB38\uC790 \uB0B4\uC6A9", onClose: () => setHistoryDetail(null) }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h("dl", { className: "sms-workspace__review-list" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC218\uC2E0\uC790"), /* @__PURE__ */ R.h("dd", null, R.text(historyDetail.name) || "\uC9C1\uC811 \uC785\uB825")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC218\uC2E0 \uD734\uB300\uD3F0\uBC88\uD638"), /* @__PURE__ */ R.h("dd", null, formatPhone(historyDetail.phone))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC0C1\uD0DC"), /* @__PURE__ */ R.h("dd", null, /* @__PURE__ */ R.h(R.Badge, { tone: statusTone(R.text(historyDetail.status)) }, R.text(historyDetail.status) || "\uC2DC\uC548 \uBCF4\uAD00"))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uBCF4\uAD00\uC77C"), /* @__PURE__ */ R.h("dd", null, displayDate(historyDetail.date)))), /* @__PURE__ */ R.h("section", { className: "sms-workspace__message-preview" }, /* @__PURE__ */ R.h("p", null, R.text(historyDetail.title) || "\uC9C1\uC811 \uC791\uC131 \uBB38\uC790"), /* @__PURE__ */ R.h("pre", null, R.text(historyDetail.content) || "\uBCF4\uAD00\uB41C \uBCF8\uBB38\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uC774 \uAE30\uB85D\uC740 \uC2DC\uC548 \uB370\uC774\uD130\uC785\uB2C8\uB2E4. \uC2E4\uC81C SMS \uACF5\uAE09\uC0AC \uBC1C\uC1A1 \uACB0\uACFC\uC640 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."))));
}

function analyticsText(value) {
return value == null ? "" : String(value).trim();
}
function analyticsNumber(value) {
const numeric = Number(value);
return Number.isFinite(numeric) && numeric >= 0 ? Math.round(numeric) : 0;
}
function analyticsDate(value) {
return analyticsText(value).slice(0, 10);
}
function analyticsInRange(value, range) {
const date = analyticsDate(value);
return Boolean(date) && (!range.start || date >= range.start) && (!range.end || date <= range.end);
}
function analyticsPaymentDate(payment) {
return completedPaymentDate(payment) || analyticsDate(payment.date);
}
function analyticsMethodParts(payment) {
const parts = moneyParts(payment, true);
return { ...parts, total: parts.card + parts.bank + parts.points };
}
function analyticsOwner(state, payment) {
const video = videoForPayment(state, payment);
return analyticsText(expertForPayment(state, payment, video)) || "\uBBF8\uC9C0\uC815";
}
function analyticsMember(state, loginId) {
return state.records.members.find((member) => analyticsText(member.loginId) === analyticsText(loginId));
}
function analyticsProduct(state, payment) {
return state.records.products.find(
  (product) => analyticsText(product.id) === analyticsText(payment.productId) || analyticsText(product.title) === analyticsText(payment.product)
);
}
function analyticsOptionInfo(state, payment) {
const product = analyticsProduct(state, payment);
const supplied = analyticsText(payment.optionTitle || payment.productOption || payment.optionName || payment.option || payment.plan);
const options = Array.isArray(product?.options) ? product.options : [];
const optionId = analyticsText(payment.optionId || payment.productOptionId);
const original = analyticsNumber(payment.originalAmount || payment.beforeCouponAmount || payment.amountBeforeCoupon || payment.listAmount);
const option = supplied ? options.find((item) => analyticsText(item.title) === supplied) : options.find((item) => analyticsText(item.id) === optionId) || options.find((item) => original > 0 && analyticsNumber(item.amount) === original) || (options.length === 1 ? options[0] : null);
return {
  product: analyticsText(product?.title || payment.product || payment.productTitle) || "\uC0C1\uD488\uBA85 \uBBF8\uD655\uC778",
  option: supplied || analyticsText(option?.title) || "\uAE30\uBCF8 \uC635\uC158"
};
}
function analyticsCouponValues(payment) {
const parts = analyticsMethodParts(payment);
const finalAmount = parts.total;
const declaredBefore = analyticsNumber(payment.originalAmount || payment.beforeCouponAmount || payment.amountBeforeCoupon || payment.listAmount || payment.orderAmount);
const declaredDiscount = analyticsNumber(payment.couponDiscount || payment.couponAmount || payment.discountAmount || payment.usedCouponAmount);
const beforeAmount = declaredBefore || (declaredDiscount ? finalAmount + declaredDiscount : finalAmount);
return {
  beforeAmount,
  finalAmount,
  couponAmount: declaredDiscount || Math.max(0, beforeAmount - finalAmount)
};
}
function analyticsCompletedPaymentRows(state, range, expert) {
return state.records.payments.filter((payment) => COMPLETED_PAYMENT_STATUSES.has(analyticsText(payment.status))).map((payment) => {
  const paidAt = analyticsPaymentDate(payment);
  const owner = analyticsOwner(state, payment);
  const member = analyticsMember(state, payment.loginId);
  return {
    id: analyticsText(payment.id),
    payment,
    paidAt,
    owner,
    member,
    parts: analyticsMethodParts(payment),
    coupon: analyticsCouponValues(payment),
    optionInfo: analyticsOptionInfo(state, payment),
    isVideo: hasVideoSignal(payment, videoForPayment(state, payment)) && !isPointCharge(payment)
  };
}).filter((row) => analyticsInRange(row.paidAt, range) && (expert === "\uC804\uCCB4" || row.owner === expert)).sort((a, b) => b.paidAt.localeCompare(a.paidAt) || b.id.localeCompare(a.id));
}
function analyticsRefundRows(state, range, expert) {
const rows = [];
for (const payment of state.records.payments) {
  if (!COMPLETED_PAYMENT_STATUSES.has(analyticsText(payment.status))) continue;
  const owner = analyticsOwner(state, payment);
  if (expert !== "\uC804\uCCB4" && owner !== expert) continue;
  const remaining = moneyParts(payment, true);
  const completed = refundRows(payment).map((refund, index) => ({
    refund,
    index,
    date: firstDate(refund, ["completedAt", "completedDate", "date", "refundDate"])
  })).filter((item) => refundIsCompleted(payment, item.refund)).sort((a, b) => a.date.localeCompare(b.date) || a.index - b.index);
  for (const item of completed) {
    const parts = limitedRefundParts(refundParts(payment, item.refund), remaining);
    const finalAmount = parts.card + parts.bank + parts.points;
    if (!analyticsInRange(item.date, range) || !finalAmount) continue;
    const member = analyticsMember(state, payment.loginId);
    rows.push({
      id: analyticsText(payment.id) + ":" + (analyticsText(item.refund.id) || item.index),
      refundAt: item.date,
      payment,
      refund: item.refund,
      owner,
      member,
      paymentAmount: analyticsMethodParts(payment).total,
      requestedAmount: analyticsNumber(item.refund.amount) || finalAmount,
      finalAmount,
      parts
    });
  }
}
return rows.sort((a, b) => b.refundAt.localeCompare(a.refundAt) || b.id.localeCompare(a.id));
}
function analyticsExpertNames(state) {
return [...new Set([
  ...state.records.experts.map((expert) => analyticsText(expert.nickname || expert.name)),
  ...state.records.products.map((product) => analyticsText(product.expert)),
  ...state.records.videos.map((video) => analyticsText(video.expert)),
  ...state.records.payments.map((payment) => analyticsText(payment.expert))
].filter(Boolean))].sort((a, b) => a.localeCompare(b, "ko-KR"));
}
function analyticsProductTotals(rows) {
const totals = /* @__PURE__ */ new Map();
for (const row of rows) {
  const key = row.isVideo ? row.owner + " \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1\uB9E4\uCD9C" : row.optionInfo.product;
  totals.set(key, (totals.get(key) || 0) + row.coupon.finalAmount);
}
return [...totals.entries()].map(([label, amount]) => ({ label, amount })).sort((a, b) => b.amount - a.amount || a.label.localeCompare(b.label, "ko-KR"));
}
function analyticsMonthRange(month) {
const range = monthRange(month);
return range ? { start: range.start, end: range.end } : { start: "", end: "" };
}
function RAnalyticsBarChart({ rows, title, description, empty }) {
const visible = rows.slice(0, 8);
const max = Math.max(1, ...visible.map((row) => row.amount));
const height = Math.max(180, visible.length * 42 + 42);
return /* @__PURE__ */ R.h("figure", { className: "ranalytics-chart", "aria-labelledby": "ranalytics-bar-title" }, /* @__PURE__ */ R.h("figcaption", null, /* @__PURE__ */ R.h("span", { className: "ranalytics-eyebrow" }, "DATA VISUAL"), /* @__PURE__ */ R.h("strong", { id: "ranalytics-bar-title" }, title), /* @__PURE__ */ R.h("small", null, description)), visible.length ? /* @__PURE__ */ R.h("svg", { viewBox: `0 0 760 ${height}`, role: "img", "aria-label": `${title} \uB9C9\uB300 \uCC28\uD2B8`, preserveAspectRatio: "xMinYMid meet" }, /* @__PURE__ */ R.h("defs", null, /* @__PURE__ */ R.h("linearGradient", { id: "ranalytics-bar-gradient", x1: "0", y1: "0", x2: "1", y2: "0" }, /* @__PURE__ */ R.h("stop", { offset: "0%", stopColor: "#912c2f" }), /* @__PURE__ */ R.h("stop", { offset: "100%", stopColor: "#c6786d" })), /* @__PURE__ */ R.h("filter", { id: "ranalytics-shadow", x: "-10%", y: "-30%", width: "125%", height: "160%" }, /* @__PURE__ */ R.h("feDropShadow", { dx: "0", dy: "3", stdDeviation: "3", floodColor: "#6e2528", floodOpacity: ".18" }))), visible.map((row, index) => {
  const y = 18 + index * 42;
  const width = Math.max(6, Math.round(row.amount / max * 485));
  return /* @__PURE__ */ R.h("g", { key: row.label }, /* @__PURE__ */ R.h("text", { x: "0", y: y + 18, className: "ranalytics-chart-label" }, row.label.length > 17 ? row.label.slice(0, 17) + "\u2026" : row.label), /* @__PURE__ */ R.h("rect", { x: "188", y: y + 4, width: "500", height: "20", rx: "10", className: "ranalytics-chart-track" }), /* @__PURE__ */ R.h("rect", { x: "188", y: y + 4, width, height: "20", rx: "10", fill: "url(#ranalytics-bar-gradient)", filter: "url(#ranalytics-shadow)" }), /* @__PURE__ */ R.h("text", { x: "746", y: y + 18, textAnchor: "end", className: "ranalytics-chart-value" }, R.money(row.amount)));
})) : /* @__PURE__ */ R.h("div", { className: "ranalytics-chart-empty" }, empty));
}
function RAnalyticsRefundVisual({ gross, refund, net }) {
const percent = gross > 0 ? Math.min(100, Math.round(refund / gross * 100)) : 0;
return /* @__PURE__ */ R.h("section", { className: "ranalytics-refund-visual", "aria-label": "\uACB0\uC81C\uC640 \uD658\uBD88 \uBE44\uC728 \uC2DC\uAC01\uD654" }, /* @__PURE__ */ R.h("div", { className: "ranalytics-ring", style: { "--refund-rate": `${percent}%` }, "aria-hidden": "true" }, /* @__PURE__ */ R.h("span", null, percent, "%")), /* @__PURE__ */ R.h("div", { className: "ranalytics-refund-copy" }, /* @__PURE__ */ R.h("span", { className: "ranalytics-eyebrow" }, "PAYMENT FLOW"), /* @__PURE__ */ R.h("strong", null, "\uD658\uBD88 \uBE44\uC911"), /* @__PURE__ */ R.h("p", null, "\uCD1D \uACB0\uC81C\uC561 \uC911 \uC644\uB8CC \uD658\uBD88\uC561\uC758 \uBE44\uC728\uC785\uB2C8\uB2E4. \uC21C \uACB0\uC81C\uC561\uC740 \uACB0\uC81C\uC561\uC5D0\uC11C \uCD5C\uC885 \uD658\uBD88\uC561\uC744 \uBE80 \uAC12\uC785\uB2C8\uB2E4."), /* @__PURE__ */ R.h("dl", null, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uACB0\uC81C"), /* @__PURE__ */ R.h("dd", null, R.money(gross))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uD658\uBD88"), /* @__PURE__ */ R.h("dd", { className: "is-refund" }, "\u2212 ", R.money(refund))), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("dt", null, "\uC21C \uACB0\uC81C"), /* @__PURE__ */ R.h("dd", null, R.money(net))))));
}
function RAnalyticsCouponAmount({ coupon }) {
return /* @__PURE__ */ R.h("span", { className: "ranalytics-coupon-amount" }, /* @__PURE__ */ R.h("strong", null, R.money(coupon.finalAmount)));
}
function RAnalyticsAll({ store }) {
const [draft, setDraft] = R.useState({ start: "", end: "" });
const [range, setRange] = R.useState({ start: "", end: "" });
const payments = R.useMemo(() => analyticsCompletedPaymentRows(store.state, range, "\uC804\uCCB4"), [store.state, range]);
const refunds = R.useMemo(() => analyticsRefundRows(store.state, range, "\uC804\uCCB4"), [store.state, range]);
const gross = payments.reduce((sum, row) => sum + row.coupon.finalAmount, 0);
const refund = refunds.reduce((sum, row) => sum + row.finalAmount, 0);
const net = gross - refund;
const productRows = R.useMemo(() => analyticsProductTotals(payments), [payments]);
const payerCount = new Set(payments.map((row) => analyticsText(row.payment.loginId)).filter(Boolean)).size;
const dateLabel = range.start || range.end ? `${range.start || "\uCC98\uC74C"} ~ ${range.end || "\uC624\uB298"}` : "\uC804\uCCB4 \uAE30\uAC04";
function apply(event) {
  event.preventDefault();
  if (draft.start && draft.end && draft.start > draft.end) {
    store.notify("\uC885\uB8CC\uC77C\uC740 \uC2DC\uC791\uC77C \uC774\uD6C4\uB85C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");
    return;
  }
  setRange({ ...draft });
}
function reset() {
  setDraft({ start: "", end: "" });
  setRange({ start: "", end: "" });
}
return /* @__PURE__ */ R.h("div", { className: "ranalytics ranalytics-all r-stack" }, /* @__PURE__ */ R.h(R.Panel, { title: "\uC804\uCCB4 \uD1B5\uACC4", subtitle: "\uACB0\uC81C \uC644\uB8CC\uC77C\uACFC \uD658\uBD88 \uC644\uB8CC\uC77C\uC744 \uAE30\uC900\uC73C\uB85C \uC9D1\uACC4\uD55C \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC785\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("form", { className: "ranalytics-filter", onSubmit: apply }, /* @__PURE__ */ R.h(R.Field, { label: "\uC2DC\uC791\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", "aria-label": "\uC804\uCCB4 \uD1B5\uACC4 \uC2DC\uC791\uC77C", value: draft.start, onChange: (event) => setDraft({ ...draft, start: event.target.value }) })), /* @__PURE__ */ R.h(R.Field, { label: "\uC885\uB8CC\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", "aria-label": "\uC804\uCCB4 \uD1B5\uACC4 \uC885\uB8CC\uC77C", min: draft.start || void 0, value: draft.end, onChange: (event) => setDraft({ ...draft, end: event.target.value }) })), /* @__PURE__ */ R.h("div", { className: "ranalytics-filter-actions" }, /* @__PURE__ */ R.h("button", { type: "submit", className: "r-primary" }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), " \uC870\uD68C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: reset }, "\uC804\uCCB4 \uAE30\uAC04"))), /* @__PURE__ */ R.h("p", { className: "ranalytics-range", "aria-live": "polite" }, /* @__PURE__ */ R.h("b", null, dateLabel), /* @__PURE__ */ R.h("span", null, "\uC644\uB8CC \uACB0\uC81C ", R.num(payments.length), "\uAC74 \xB7 \uC644\uB8CC \uD658\uBD88 ", R.num(refunds.length), "\uAC74"))), /* @__PURE__ */ R.h("section", { className: "r-grid4", "aria-label": "\uC804\uCCB4 \uD1B5\uACC4 \uD575\uC2EC \uC9C0\uD45C" }, /* @__PURE__ */ R.h(R.KPI, { label: "\uCD1D \uACB0\uC81C\uC561", value: R.money(gross), detail: "\uCFE0\uD3F0 \uC801\uC6A9 \uD6C4 \xB7 \uD3EC\uC778\uD2B8 \uC0AC\uC6A9 \uD3EC\uD568", tone: "blue" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uC644\uB8CC \uD658\uBD88\uC561", value: R.money(refund), detail: "\uD658\uBD88 \uC644\uB8CC\uC77C \uAE30\uC900\uC758 \uCD5C\uC885 \uD658\uBD88\uC561", tone: "red" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uD658\uBD88 \uCC28\uAC10 \uD6C4 \uAE08\uC561", value: R.money(net), detail: "\uCD1D \uACB0\uC81C\uC561 \u2212 \uC644\uB8CC \uD658\uBD88\uC561", tone: "green" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uACB0\uC81C \uD68C\uC6D0", value: `${R.num(payerCount)}\uBA85`, detail: `\uC644\uB8CC \uACB0\uC81C ${R.num(payments.length)}\uAC74 \xB7 \uC911\uBCF5 \uC81C\uC678`, tone: "blue" })), /* @__PURE__ */ R.h("section", { className: "ranalytics-visual-grid", "aria-label": "\uACB0\uC81C \uB370\uC774\uD130 \uC2DC\uAC01\uD654" }, /* @__PURE__ */ R.h(RAnalyticsBarChart, { rows: productRows, title: "\uC0C1\uD488\uBCC4 \uACB0\uC81C\uC561", description: "\uCFE0\uD3F0 \uC801\uC6A9 \uD6C4 \uCD5C\uC885 \uACB0\uC81C\uAE08\uC561\uC744 \uC0C1\uD488\uBCC4\uB85C \uD569\uC0B0\uD588\uC2B5\uB2C8\uB2E4.", empty: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uC644\uB8CC \uACB0\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }), /* @__PURE__ */ R.h(RAnalyticsRefundVisual, { gross, refund, net })), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uC2DC\uC548\uC6A9 \uC624\uD504\uB77C\uC778 \uB370\uC774\uD130\uC785\uB2C8\uB2E4. \uACB0\uC81C\uC561\uC740 \uCE74\uB4DC\xB7\uBB34\uD1B5\uC7A5\xB7\uD3EC\uC778\uD2B8 \uC0AC\uC6A9\uC744 \uD3EC\uD568\uD558\uBA70, \uD658\uBD88\uC740 \uC6D0 \uACB0\uC81C\uC218\uB2E8\uBCC4 \uC794\uC561\uC744 \uCD08\uACFC\uD558\uC9C0 \uC54A\uB3C4\uB85D \uAE30\uC874 \uD658\uBD88 \uC9D1\uACC4 \uADDC\uCE59\uC73C\uB85C \uACC4\uC0B0\uD569\uB2C8\uB2E4."), /* @__PURE__ */ R.h(R.Panel, { title: "\uC644\uB8CC \uACB0\uC81C \uB0B4\uC5ED", subtitle: "\uACE0\uAC1D\uC774 \uC2E4\uC81C\uB85C \uACB0\uC81C\uD55C \uAE08\uC561\uC744 \uD655\uC778\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(
  R.Table,
  {
    headers: ["\uACB0\uC81C\uC77C", "\uC544\uC774\uB514", "\uB2C9\uB124\uC784", "\uC0C1\uD488 \uC635\uC158", "\uACB0\uC81C\uC218\uB2E8", "\uACB0\uC81C\uAE08\uC561", "\uCD5C\uC885 \uACB0\uC81C\uAE08\uC561"],
    rows: payments.map((row) => [
      row.paidAt,
      analyticsText(row.payment.loginId) || "\u2014",
      analyticsText(row.member?.nickname || row.payment.nickname || row.payment.name) || "\u2014",
      /* @__PURE__ */ R.h("span", { className: "ranalytics-product-cell" }, /* @__PURE__ */ R.h("strong", null, row.optionInfo.product), /* @__PURE__ */ R.h("small", null, row.optionInfo.option)),
      /* @__PURE__ */ R.h(R.Badge, { tone: row.parts.points ? "amber" : row.parts.bank ? "green" : "blue" }, analyticsText(row.payment.method) || "\uBBF8\uD655\uC778"),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.coupon.finalAmount)),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, /* @__PURE__ */ R.h(RAnalyticsCouponAmount, { coupon: row.coupon }))
    ]),
    empty: "\uC120\uD0DD\uD55C \uAE30\uAC04\uC5D0 \uC644\uB8CC\uB41C \uACB0\uC81C \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
  }
)), /* @__PURE__ */ R.h(R.Panel, { title: "\uD658\uBD88 \uB0B4\uC5ED", subtitle: "\uD658\uBD88\uC77C\uC790\uB294 \uD658\uBD88 \uC644\uB8CC\uC77C\uC774\uBA70, \uCD5C\uC885 \uD658\uBD88\uAE08\uC561\uC740 \uACB0\uC81C\uC218\uB2E8\uBCC4 \uB0A8\uC740 \uACB0\uC81C\uAE08\uC561\uC744 \uCD08\uACFC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(
  R.Table,
  {
    headers: ["\uD658\uBD88\uC77C\uC790", "\uC544\uC774\uB514", "\uB2C9\uB124\uC784", "\uC0C1\uD488", "\uACB0\uC81C\uAE08\uC561", "\uD658\uBD88\uAE08\uC561", "\uCD5C\uC885 \uD658\uBD88\uAE08\uC561"],
    rows: refunds.map((row) => [
      row.refundAt,
      analyticsText(row.payment.loginId) || "\u2014",
      analyticsText(row.member?.nickname || row.payment.nickname || row.payment.name) || "\u2014",
      titleForPayment(row.payment),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.paymentAmount)),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.requestedAmount)),
      /* @__PURE__ */ R.h("span", { className: "r-money ranalytics-refund-money" }, R.money(row.finalAmount))
    ]),
    empty: "\uC120\uD0DD\uD55C \uAE30\uAC04\uC5D0 \uC644\uB8CC\uB41C \uD658\uBD88 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
  }
)));
}
function RAnalyticsRevenue({ store, fixedExpert }) {
const [month, setMonth] = R.useState(() => seoulMonth());
const [selectedExpert, setSelectedExpert] = R.useState("\uC804\uCCB4");
const experts = R.useMemo(() => analyticsExpertNames(store.state), [store.state]);
const expert = fixedExpert || selectedExpert;
const range = R.useMemo(() => analyticsMonthRange(month), [month]);
const report = R.useMemo(() => buildMonthlyRevenueReport(store.state, month, expert), [store.state, month, expert]);
const vipRows = R.useMemo(() => analyticsCompletedPaymentRows(store.state, range, expert).filter((row) => !row.isVideo), [store.state, range, expert]);
const refunds = R.useMemo(() => analyticsRefundRows(store.state, range, expert), [store.state, range, expert]);
const totals = report.totals;
const totalRevenue = totals.cardAmount + totals.bankAmount + totals.pointAmount;
const totalRefund = totals.cashRefundAmount + totals.pointRefundAmount;
const videoRevenue = totals.videoCardAmount + totals.videoBankAmount + totals.videoPointAmount;
const vipRevenue = vipRows.reduce((sum, row) => sum + row.coupon.finalAmount, 0);
const refundTableTotal = refunds.reduce((sum, row) => sum + row.finalAmount, 0);
return /* @__PURE__ */ R.h("div", { className: "ranalytics ranalytics-revenue r-stack" }, /* @__PURE__ */ R.h(R.Panel, { title: fixedExpert ? `${expert} \uC804\uBB38\uAC00 \uB9E4\uCD9C\uB0B4\uC5ED` : "\uC804\uBB38\uAC00 \uC6D4\uBCC4 \uB9E4\uCD9C\uB0B4\uC5ED", subtitle: "\uC6D4 1\uC77C~\uB9D0\uC77C \uAE30\uC900\uC73C\uB85C \uACB0\uC81C \uC644\uB8CC\uC77C\uACFC \uD658\uBD88 \uC644\uB8CC\uC77C\uC744 \uAD6C\uBD84\uD574 \uC9D1\uACC4\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "ranalytics-revenue-filter" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC870\uD68C \uC6D4" }, /* @__PURE__ */ R.h("input", { type: "month", "aria-label": "\uC804\uBB38\uAC00 \uB9E4\uCD9C \uC870\uD68C \uC6D4", value: month, onChange: (event) => setMonth(event.target.value) })), /* @__PURE__ */ R.h(R.Field, { label: "\uC804\uBB38\uAC00", hint: fixedExpert ? "\uC804\uBB38\uAC00 \uACC4\uC815 \uAE30\uC900\uC73C\uB85C \uACE0\uC815\uB41C \uD544\uD130\uC785\uB2C8\uB2E4." : "\uC804\uCCB4 \uB610\uB294 \uC804\uBB38\uAC00\uBCC4\uB85C \uC870\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("select", { "aria-label": "\uC804\uBB38\uAC00 \uC120\uD0DD", value: expert, disabled: Boolean(fixedExpert), onChange: (event) => setSelectedExpert(event.target.value) }, !fixedExpert && /* @__PURE__ */ R.h("option", { value: "\uC804\uCCB4" }, "\uC804\uCCB4"), fixedExpert ? /* @__PURE__ */ R.h("option", { value: fixedExpert }, fixedExpert) : experts.map((name) => /* @__PURE__ */ R.h("option", { key: name, value: name }, name)))), fixedExpert && /* @__PURE__ */ R.h("div", { className: "ranalytics-fixed-expert" }, /* @__PURE__ */ R.h(R.Badge, { tone: "red" }, "\uACE0\uC815 \uC804\uBB38\uAC00"), /* @__PURE__ */ R.h("strong", null, fixedExpert), /* @__PURE__ */ R.h("span", null, "\uC774 \uD654\uBA74\uC5D0\uC11C\uB294 \uB2E4\uB978 \uC804\uBB38\uAC00 \uB370\uC774\uD130\uAC00 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."))), /* @__PURE__ */ R.h("p", { className: "ranalytics-range" }, /* @__PURE__ */ R.h("b", null, report.range.start, " ~ ", report.range.end), /* @__PURE__ */ R.h("span", null, "\uACB0\uC81C\uB294 \uC644\uB8CC\uC77C \xB7 \uD658\uBD88\uC740 \uD658\uBD88 \uC644\uB8CC\uC77C \uAE30\uC900"))), /* @__PURE__ */ R.h("section", { className: "r-grid4", "aria-label": "\uC804\uBB38\uAC00 \uC6D4\uBCC4 \uB9E4\uCD9C \uD575\uC2EC \uC9C0\uD45C" }, /* @__PURE__ */ R.h(R.KPI, { label: "\uC804\uCCB4 \uD68C\uC6D0\uC218", value: `${R.num(totals.memberCount)}\uBA85`, detail: expert === "\uC804\uCCB4" ? "\uD0C8\uD1F4 \uD68C\uC6D0 \uC81C\uC678" : "\uB2F4\uB2F9 \uC0C1\uD488 \uAC00\uC785 \uD68C\uC6D0 \xB7 \uC911\uBCF5 \uC81C\uC678", tone: "blue" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uC6D4 \uCE74\uB4DC\uACB0\uC81C", value: R.money(totals.cardAmount), detail: "\uC644\uB8CC \uACB0\uC81C\uC77C \uAE30\uC900", tone: "blue" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uC6D4 \uBB34\uD1B5\uC7A5\uC785\uAE08", value: R.money(totals.bankAmount), detail: "\uD655\uC778 \uC644\uB8CC\uB41C \uBB34\uD1B5\uC7A5 \uACB0\uC81C", tone: "green" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uC6D4 \uD658\uBD88", value: R.money(totalRefund), detail: `\uD604\uAE08 ${R.money(totals.cashRefundAmount)} \xB7 \uD3EC\uC778\uD2B8 ${R.money(totals.pointRefundAmount)}`, tone: "red" })), /* @__PURE__ */ R.h("section", { className: "ranalytics-revenue-summary", "aria-label": "\uC804\uBB38\uAC00 \uB9E4\uCD9C \uD569\uACC4 \uC124\uBA85" }, /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, "\uC6D4 \uACB0\uC81C \uD569\uACC4"), /* @__PURE__ */ R.h("strong", null, R.money(totalRevenue)), /* @__PURE__ */ R.h("small", null, "\uCE74\uB4DC \xB7 \uBB34\uD1B5\uC7A5 \xB7 \uD3EC\uC778\uD2B8 \uC0AC\uC6A9 \uD3EC\uD568")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, "VIP \uC0C1\uD488 \uACB0\uC81C \uD569\uACC4"), /* @__PURE__ */ R.h("strong", null, R.money(vipRevenue)), /* @__PURE__ */ R.h("small", null, "\uC544\uB798 VIP \uC0C1\uD488 \uACB0\uC81C \uD14C\uC774\uBE14\uC758 \uCD5C\uC885 \uACB0\uC81C\uAE08\uC561 \uD569\uACC4")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, "\uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1 \uACB0\uC81C \uD569\uACC4"), /* @__PURE__ */ R.h("strong", null, R.money(videoRevenue)), /* @__PURE__ */ R.h("small", null, "\uD3EC\uC778\uD2B8 \uCDA9\uC804\uC561\uC740 \uC81C\uC678 \xB7 \uBB34\uD1B5\uC7A5\uC740 \uD569\uACC4\uC5D0 \uD3EC\uD568")), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("span", null, "\uCD5C\uC885 \uD658\uBD88\uAE08\uC561 \uD569\uACC4"), /* @__PURE__ */ R.h("strong", null, R.money(refundTableTotal)), /* @__PURE__ */ R.h("small", null, "\uC6D4 \uD658\uBD88 KPI\uC640 \uAC19\uC740 \uD658\uBD88 \uC644\uB8CC\uC77C \uAE30\uC900"))), /* @__PURE__ */ R.h(R.Panel, { title: "VIP \uC0C1\uD488 \uB9E4\uCD9C", subtitle: "\uACE0\uAC1D\uC774 \uC2E4\uC81C\uB85C \uACB0\uC81C\uD55C \uAE08\uC561\uC744 \uD68C\uC6D0\uBCC4\uB85C \uD655\uC778\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(
  R.Table,
  {
    headers: ["\uACB0\uC81C\uC77C", "\uC544\uC774\uB514", "\uB2C9\uB124\uC784", "\uC0C1\uD488 \uC635\uC158", "\uACB0\uC81C\uAE08\uC561", "\uCD5C\uC885 \uACB0\uC81C\uAE08\uC561"],
    rows: vipRows.map((row) => [
      row.paidAt,
      analyticsText(row.payment.loginId) || "\u2014",
      analyticsText(row.member?.nickname || row.payment.nickname || row.payment.name) || "\u2014",
      /* @__PURE__ */ R.h("span", { className: "ranalytics-product-cell" }, /* @__PURE__ */ R.h("strong", null, row.optionInfo.product), /* @__PURE__ */ R.h("small", null, row.optionInfo.option)),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.coupon.finalAmount)),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, /* @__PURE__ */ R.h(RAnalyticsCouponAmount, { coupon: row.coupon }))
    ]),
    empty: "\uC120\uD0DD\uD55C \uC6D4\uACFC \uC804\uBB38\uAC00 \uC870\uAC74\uC5D0 \uB9DE\uB294 VIP \uC0C1\uD488 \uACB0\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
  }
)), /* @__PURE__ */ R.h(R.Panel, { title: "\uC6D4 \uC8FC\uC2DD\uAD50\uC721\uC601\uC0C1\uBCC4 \uACB0\uC81C\uAE08\uC561", subtitle: "\uC81C\uBAA9\uBCC4 \uACB0\uC81C \uAC74\uC218\uC640 \uC0AC\uC6A9 \uC218\uB2E8\uC744 \uAC19\uC740 \uAE30\uC900\uC73C\uB85C \uC9D1\uACC4\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(
  R.Table,
  {
    headers: ["\uC81C\uBAA9", "\uACB0\uC81C\uAC74\uC218", "\uACB0\uC81C\uD569\uACC4", "\uCE74\uB4DC\uC0AC\uC6A9", "\uD3EC\uC778\uD2B8\uC0AC\uC6A9"],
    rows: report.videoRows.map((row) => [
      row.title,
      `${R.num(row.paymentCount)}\uAC74`,
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.cardAmount + row.bankAmount + row.pointAmount), row.bankAmount > 0 && /* @__PURE__ */ R.h("small", { className: "ranalytics-bank-caption" }, "\uBB34\uD1B5\uC7A5 ", R.money(row.bankAmount), " \uD3EC\uD568")),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.cardAmount)),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.pointAmount))
    ]),
    empty: "\uC120\uD0DD\uD55C \uC6D4\uACFC \uC804\uBB38\uAC00 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uAD50\uC721\uC601\uC0C1 \uACB0\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
  }
), report.unmatchedVideoPaymentCount > 0 && /* @__PURE__ */ R.h("p", { className: "r-alert" }, "\uC601\uC0C1 \uACB0\uC81C\uB85C \uD45C\uC2DC\uB418\uC5C8\uC9C0\uB9CC \uC601\uC0C1 \uBAA9\uB85D\uACFC \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC740 ", R.num(report.unmatchedVideoPaymentCount), "\uAC74\uC740 \uC601\uC0C1\uBCC4 \uD45C\uC5D0\uC11C \uC81C\uC678\uD588\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uC5F0\uB3D9 \uC2DC \uC601\uC0C1 \uC2DD\uBCC4\uC790 \uB9E4\uD551\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Panel, { title: "\uD658\uBD88 \uB0B4\uC5ED", subtitle: "\uACB0\uC81C\uC77C\uC774 \uC870\uD68C\uC6D4 \uC774\uC804\uC774\uC5B4\uB3C4 \uD658\uBD88 \uC644\uB8CC\uC77C\uC774 \uC870\uD68C\uC6D4\uC774\uBA74 \uD3EC\uD568\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(
  R.Table,
  {
    headers: ["\uD658\uBD88\uC77C\uC790", "\uC544\uC774\uB514", "\uB2C9\uB124\uC784", "\uACB0\uC81C\uAE08\uC561", "\uD658\uBD88\uAE08\uC561", "\uCD5C\uC885 \uD658\uBD88\uAE08\uC561"],
    rows: refunds.map((row) => [
      row.refundAt,
      analyticsText(row.payment.loginId) || "\u2014",
      analyticsText(row.member?.nickname || row.payment.nickname || row.payment.name) || "\u2014",
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.paymentAmount)),
      /* @__PURE__ */ R.h("span", { className: "r-money" }, R.money(row.requestedAmount)),
      /* @__PURE__ */ R.h("span", { className: "r-money ranalytics-refund-money" }, R.money(row.finalAmount))
    ]),
    empty: "\uC120\uD0DD\uD55C \uC6D4\uACFC \uC804\uBB38\uAC00 \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC644\uB8CC \uD658\uBD88\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
  }
)), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uC2DC\uC548\uC6A9 \uAC00\uC0C1 \uB370\uC774\uD130\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uC6B4\uC601 \uC5F0\uB3D9 \uC2DC \uCFE0\uD3F0\xB7\uBD80\uBD84\uD658\uBD88\xB7\uBCF5\uD569\uACB0\uC81C\xB7\uC804\uBB38\uAC00 \uADC0\uC18D \uADDC\uCE59 \uBC0F \uC815\uC0B0 \uC815\uCC45\uC744 \uC11C\uBC84 \uC9D1\uACC4 \uAE30\uC900\uC73C\uB85C \uD655\uC815\uD574\uC57C \uD569\uB2C8\uB2E4."));
}
function RAnalyticsAccess({ spec, store }) {
const [draft, setDraft] = R.useState({ start: "", end: "", query: "" });
const [filter, setFilter] = R.useState({ start: "", end: "", query: "" });
const isAdmin = analyticsText(spec?.path).includes("admin-access");
const rows = R.useMemo(() => (store.state.records.visits || []).filter((visit) => isAdmin ? analyticsText(visit.scope) === "\uAD00\uB9AC\uC790" : analyticsText(visit.scope || "\uD648\uD398\uC774\uC9C0") === "\uD648\uD398\uC774\uC9C0").filter((visit) => !filter.query || [visit.loginId, visit.name, visit.ip, visit.nickname || (store.state.records.members || []).find((m) => m.loginId === visit.loginId)?.nickname].join(" ").toLowerCase().includes(filter.query.toLowerCase())).sort((a, b) => analyticsDate(b.date).localeCompare(analyticsDate(a.date))), [store.state, filter, isAdmin]);
function apply(event) {
  event.preventDefault();
  if (draft.start && draft.end && draft.start > draft.end) return store.notify("\uC885\uB8CC\uC77C\uC740 \uC2DC\uC791\uC77C \uC774\uD6C4\uB85C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");
  setFilter({ ...draft, query: draft.query.trim() });
}
function reset() {
  setDraft({ start: "", end: "", query: "" });
  setFilter({ start: "", end: "", query: "" });
}
return /* @__PURE__ */ R.h("div", { className: "ranalytics r-stack" }, /* @__PURE__ */ R.h(R.Panel, { title: isAdmin ? "\uAD00\uB9AC\uC790 \uC811\uC18D \uAE30\uB85D" : "\uD648\uD398\uC774\uC9C0 \uC811\uC18D \uD604\uD669", subtitle: "IP\xB7\uC544\uC774\uB514\xB7\uC774\uB984\xB7\uB2C9\uB124\uC784\uC73C\uB85C \uAC80\uC0C9\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("form", { className: "ranalytics-filter ranalytics-access-filter second-search", onSubmit: apply }, /* @__PURE__ */ R.h(R.Field, { label: "\uAC80\uC0C9\uC5B4" }, /* @__PURE__ */ R.h("input", { "aria-label": "IP \uC544\uC774\uB514 \uC774\uB984 \uB2C9\uB124\uC784", placeholder: "IP, \uC544\uC774\uB514, \uC774\uB984, \uB2C9\uB124\uC784", value: draft.query, onChange: (event) => setDraft({ ...draft, query: event.target.value }) })), /* @__PURE__ */ R.h("div", { className: "ranalytics-filter-actions" }, /* @__PURE__ */ R.h("button", { type: "submit", className: "r-primary" }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), " \uC870\uD68C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: reset }, "\uCD08\uAE30\uD654")))), /* @__PURE__ */ R.h("section", { className: "r-grid3" }, /* @__PURE__ */ R.h(R.KPI, { label: "\uCD1D \uC811\uC18D", value: `${R.num(rows.length)}\uAC74`, detail: "\uD604\uC7AC \uC870\uD68C \uC870\uAC74 \uAE30\uC900", tone: "blue" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uACE0\uC720 IP", value: `${R.num(new Set(rows.map((row) => analyticsText(row.ip)).filter(Boolean)).size)}\uAC1C`, detail: "\uD604\uC7AC \uC870\uD68C \uC870\uAC74 \uAE30\uC900", tone: "green" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uBAA8\uBC14\uC77C \uC811\uC18D", value: `${R.num(rows.filter((row) => analyticsText(row.device) !== "PC").length)}\uAC74`, detail: "\uAE30\uAE30 \uC815\uBCF4\uAC00 PC\uAC00 \uC544\uB2CC \uAE30\uB85D", tone: "blue" })), /* @__PURE__ */ R.h(R.Panel, { title: "\uC811\uC18D \uAE30\uB85D", subtitle: "\uC624\uD504\uB77C\uC778 \uC608\uC2DC \uB370\uC774\uD130\uC774\uBA70 \uC2E4\uC81C \uBCF4\uC548\xB7\uC811\uC18D \uC81C\uC5B4 \uAE30\uB2A5\uC740 \uC218\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." }, /* @__PURE__ */ R.h(R.Table, { headers: ["\uC811\uC18D \uC77C\uC2DC", "\uC544\uC774\uB514", "\uC774\uB984", "\uC811\uC18D IP", "\uC811\uC18D \uACBD\uB85C", "\uAE30\uAE30"], rows: rows.map((row) => [analyticsDate(row.date), analyticsText(row.loginId) || "\u2014", analyticsText(row.name) || "\u2014", analyticsText(row.ip) || "\u2014", analyticsText(row.path) || "\u2014", analyticsText(row.device) || "\u2014"]), empty: "\uD604\uC7AC \uC870\uAC74\uC5D0 \uB9DE\uB294 \uC811\uC18D \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })));
}
function RAnalytics({ spec, store, fixedExpert }) {
const path = analyticsText(spec?.path);
if (fixedExpert || path.endsWith("/revenue")) return /* @__PURE__ */ R.h(RAnalyticsRevenue, { store, fixedExpert });
if (path.includes("/access")) return /* @__PURE__ */ R.h(RAnalyticsAccess, { spec, store });
return /* @__PURE__ */ R.h(RAnalyticsAll, { store });
}
function settingsRecords(store, domain) {
const records = store && store.state && store.state.records && store.state.records[domain];
return Array.isArray(records) ? records : [];
}
function settingsSiteFields(site) {
const row = site || {};
return {
  siteName: R.text(row.siteName),
  phone: R.text(row.phone),
  representative: R.text(row.representative),
  businessNumber: R.text(row.businessNumber),
  mailOrderNumber: R.text(row.mailOrderNumber),
  privacyOfficer: R.text(row.privacyOfficer),
  address: R.text(row.address)
};
}
function settingsNow() {
return (/* @__PURE__ */ new Date()).toISOString();
}
function settingsNewId(prefix) {
return prefix + "-sample-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7);
}
function settingsStaffState(row) {
if (row.approvalState) return row.approvalState;
if (row.status === "\uB300\uAE30" || row.status === "\uC2B9\uC778\uB300\uAE30") return "\uC2B9\uC778 \uB300\uAE30";
if (row.status === "\uC2B9\uC778" || row.permissionGranted === false) return "\uAD8C\uD55C \uBD80\uC5EC \uB300\uAE30";
return "\uAD8C\uD55C \uC644\uB8CC";
}
function settingsExpertState(row) {
if (row.approvalState) return row.approvalState;
if (row.visible === "\uC2B9\uC778\uB300\uAE30" || row.status === "\uB300\uAE30") return "\uC2B9\uC778 \uB300\uAE30";
return "\uC2B9\uC778 \uC644\uB8CC";
}
function settingsStateBadge(state) {
if (state === "\uC2B9\uC778 \uB300\uAE30") return /* @__PURE__ */ R.h(R.Badge, { tone: "amber" }, "\uB300\uAE30");
if (state === "\uAD8C\uD55C \uBD80\uC5EC \uB300\uAE30") return /* @__PURE__ */ R.h(R.Badge, { tone: "blue" }, "\uC2B9\uC778 \uC644\uB8CC");
if (state === "\uC2B9\uC778 \uC644\uB8CC") return /* @__PURE__ */ R.h(R.Badge, { tone: "green" }, "\uC2B9\uC778 \uC644\uB8CC");
return /* @__PURE__ */ R.h(R.Badge, { tone: "green" }, "\uAD8C\uD55C \uBD80\uC5EC \uC644\uB8CC");
}
function settingsPermissionsForRole(role) {
const all = ["\uD68C\uC6D0", "\uACB0\uC81C", "\uC0C1\uD488", "\uAC8C\uC2DC\uAE00", "\uB514\uC790\uC778", "\uD61C\uD0DD", "\uBB38\uC790", "\uD1B5\uACC4", "\uC124\uC815"];
const map = {};
let enabled = [];
if (role === "\uCD5C\uACE0\uAD00\uB9AC\uC790") enabled = all;
if (role === "\uC6B4\uC601\uAD00\uB9AC\uC790") enabled = ["\uD68C\uC6D0", "\uACB0\uC81C", "\uC0C1\uD488", "\uAC8C\uC2DC\uAE00", "\uD61C\uD0DD", "\uBB38\uC790", "\uD1B5\uACC4"];
if (role === "\uCF58\uD150\uCE20\uAD00\uB9AC\uC790") enabled = ["\uAC8C\uC2DC\uAE00", "\uB514\uC790\uC778"];
if (role === "\uC870\uD68C\uC804\uC6A9") enabled = ["\uD68C\uC6D0", "\uACB0\uC81C", "\uD1B5\uACC4"];
all.forEach(function(menu) {
  if (enabled.includes(menu)) map[menu] = ["\uC870\uD68C", "\uCD94\uAC00", "\uC218\uC815", "\uC0AD\uC81C"];
});
return map;
}
function settingsPermissionMenus() {
return ["\uD68C\uC6D0", "\uACB0\uC81C", "\uC0C1\uD488", "\uAC8C\uC2DC\uAE00", "\uB514\uC790\uC778", "\uD61C\uD0DD", "\uBB38\uC790", "\uD1B5\uACC4", "\uC124\uC815"];
}
function SettingsJourney({ type }) {
const isStaff = type === "staff";
return /* @__PURE__ */ R.h("ol", { className: "r-settings-journey", "aria-label": isStaff ? "\uC6B4\uC601\uC9C4 \uC2B9\uC778 \uC808\uCC28" : "\uC804\uBB38\uAC00 \uC2B9\uC778 \uC808\uCC28" }, /* @__PURE__ */ R.h("li", { className: "r-settings-journey-step is-current" }, /* @__PURE__ */ R.h("span", null, "1"), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("strong", null, "\uAC00\uC785 \uC2E0\uCCAD"), /* @__PURE__ */ R.h("small", null, isStaff ? "\uC6B4\uC601\uC9C4 \uC815\uBCF4 \uC811\uC218" : "\uC804\uBB38\uAC00 \uC815\uBCF4 \uC811\uC218"))), /* @__PURE__ */ R.h("li", { className: "r-settings-journey-arrow", "aria-hidden": "true" }, "\u2192"), /* @__PURE__ */ R.h("li", { className: "r-settings-journey-step" }, /* @__PURE__ */ R.h("span", null, "2"), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("strong", null, "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778"), /* @__PURE__ */ R.h("small", null, "\uC2B9\uC778 \uB300\uAE30 \xB7 \uC2B9\uC778 \uC644\uB8CC \uAD6C\uBD84"))), isStaff && /* @__PURE__ */ R.h(R.Fragment, null, /* @__PURE__ */ R.h("li", { className: "r-settings-journey-arrow", "aria-hidden": "true" }, "\u2192"), /* @__PURE__ */ R.h("li", { className: "r-settings-journey-step" }, /* @__PURE__ */ R.h("span", null, "3"), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("strong", null, "\uAD8C\uD55C \uBD80\uC5EC"), /* @__PURE__ */ R.h("small", null, "\uC2B9\uC778 \uD6C4 \uBA54\uB274 \uAD8C\uD55C \uC124\uC815")))));
}
function SettingsPermissionModal({ staff, store, onClose }) {
const initialRole = staff.role && staff.role !== "\uAD8C\uD55C \uBBF8\uBD80\uC5EC" ? staff.role : "\uC6B4\uC601\uAD00\uB9AC\uC790";
const [role, setRole] = R.useState(initialRole);
const menus = pages.filter((p) => !p.navHidden);
const actionNames = ["\uC870\uD68C", "\uCD94\uAC00", "\uC218\uC815", "\uC0AD\uC81C"];
function roleMap(value) {
  const result = {};
  const labels = { members: "\uD68C\uC6D0", payments: "\uACB0\uC81C", vip: "\uC0C1\uD488", board: "\uAC8C\uC2DC\uAE00", design: "\uB514\uC790\uC778", promotion: "\uD61C\uD0DD", sms: "\uBB38\uC790", analytics: "\uD1B5\uACC4", settings: "\uC124\uC815" };
  const defaults = settingsPermissionsForRole(value);
  menus.forEach((p) => {
    result[p.path] = defaults[labels[p.group]] ? value === "\uC870\uD68C\uC804\uC6A9" ? ["\uC870\uD68C"] : actionNames : [];
  });
  return result;
}
const [permissions, setPermissions] = R.useState(() => {
  const current = staff.permissions || {};
  const result = roleMap(initialRole);
  const labels = { members: "\uD68C\uC6D0", payments: "\uACB0\uC81C", vip: "\uC0C1\uD488", board: "\uAC8C\uC2DC\uAE00", design: "\uB514\uC790\uC778", promotion: "\uD61C\uD0DD", sms: "\uBB38\uC790", analytics: "\uD1B5\uACC4", settings: "\uC124\uC815" };
  menus.forEach((p) => {
    if (Array.isArray(current[p.path])) result[p.path] = current[p.path];
    else if (Object.keys(current).length) result[p.path] = current[labels[p.group]] || [];
  });
  return result;
});
function changeRole(event) {
  setRole(event.target.value);
  setPermissions(roleMap(event.target.value));
}
function toggleAction(path, action) {
  setPermissions((current) => {
    const values = current[path] || [];
    return { ...current, [path]: values.includes(action) ? values.filter((v) => v !== action) : values.concat(action) };
  });
}
function savePermissions() {
  if (!Object.values(permissions).some((values) => values.length)) {
    store.notify("\uCD5C\uC18C \uD55C \uAC1C\uC758 \uBA54\uB274 \uAD8C\uD55C\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694. \uC774 \uD654\uBA74\uC740 \uC2DC\uC548\uC6A9\uC785\uB2C8\uB2E4.");
    return;
  }
  const map = permissions;
  store.updateMany("staff", [staff.id], {
    role,
    permissions: map,
    status: "\uC0AC\uC6A9",
    approvalState: "\uAD8C\uD55C \uC644\uB8CC",
    permissionGrantedAt: settingsNow(),
    isSampleRequest: true
  }, "\uC6B4\uC601\uC9C4 \uAD8C\uD55C \uBD80\uC5EC");
  onClose();
}
return /* @__PURE__ */ R.h(R.Modal, { wide: true, title: "\uC6B4\uC601\uC9C4 \uAD8C\uD55C \uBD80\uC5EC", onClose }, /* @__PURE__ */ R.h("div", { className: "r-stack r-settings-modal-stack" }, /* @__PURE__ */ R.h("p", { className: "r-note" }, /* @__PURE__ */ R.h("strong", null, R.text(staff.name) || "\uC6B4\uC601\uC9C4"), " \uB2D8\uC740 \uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \uD6C4 \uAD8C\uD55C\uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uC774 \uC124\uC815\uC740 \uD604\uC7AC \uAE30\uAE30\uC758 \uC2DC\uC548 \uB370\uC774\uD130\uC5D0\uB9CC \uBC18\uC601\uB418\uBA70, \uC2E4\uC81C \uC811\uADFC \uC81C\uC5B4\uB294 \uAD6C\uD604\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ R.h(R.Field, { label: "\uC6B4\uC601 \uC5ED\uD560" }, /* @__PURE__ */ R.h("select", { value: role, onChange: changeRole, "aria-label": "\uC6B4\uC601 \uC5ED\uD560 \uC120\uD0DD" }, /* @__PURE__ */ R.h("option", { value: "\uCD5C\uACE0\uAD00\uB9AC\uC790" }, "\uCD5C\uACE0\uAD00\uB9AC\uC790"), /* @__PURE__ */ R.h("option", { value: "\uC6B4\uC601\uAD00\uB9AC\uC790" }, "\uC6B4\uC601\uAD00\uB9AC\uC790"), /* @__PURE__ */ R.h("option", { value: "\uCF58\uD150\uCE20\uAD00\uB9AC\uC790" }, "\uCF58\uD150\uCE20\uAD00\uB9AC\uC790"), /* @__PURE__ */ R.h("option", { value: "\uC870\uD68C\uC804\uC6A9" }, "\uC870\uD68C\uC804\uC6A9"))), /* @__PURE__ */ R.h("fieldset", { className: "r-settings-permission-box" }, /* @__PURE__ */ R.h("legend", null, "\uBA54\uB274 \uAD8C\uD55C ", /* @__PURE__ */ R.h("small", null, "\uC5ED\uD560\uC744 \uACE0\uB974\uBA74 \uAE30\uBCF8 \uAD8C\uD55C\uC774 \uC81C\uC548\uB418\uBA70, \uD544\uC694\uD55C \uBA54\uB274\uB9CC \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("div", { className: "second-permission-table" }, /* @__PURE__ */ R.h("table", null, /* @__PURE__ */ R.h("thead", null, /* @__PURE__ */ R.h("tr", null, /* @__PURE__ */ R.h("th", null, "\uBA54\uB274 / \uD398\uC774\uC9C0"), actionNames.map((a) => /* @__PURE__ */ R.h("th", { key: a }, a)))), /* @__PURE__ */ R.h("tbody", null, menus.map((p) => /* @__PURE__ */ R.h("tr", { key: p.path }, /* @__PURE__ */ R.h("th", null, (groups.find((g) => g.id === p.group)?.title || "") + " \xB7 " + p.title), actionNames.map((action) => /* @__PURE__ */ R.h("td", { key: action }, /* @__PURE__ */ R.h("input", { type: "checkbox", "aria-label": p.title + " " + action, checked: (permissions[p.path] || []).includes(action), onChange: () => toggleAction(p.path, action) }))))))))), /* @__PURE__ */ R.h("div", { className: "r-actions r-settings-modal-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: onClose }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary", onClick: savePermissions }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), "\uAD8C\uD55C \uBD80\uC5EC \uC644\uB8CC"))));
}
function SettingsDeleteButton({ domain, row, store, label }) {
function remove() {
  const target = R.text(row.name) || R.text(row.loginId) || label;
  if (!window.confirm("\u2018" + target + "\u2019 \uD56D\uBAA9\uC744 \uC2DC\uC548 \uB370\uC774\uD130\uC5D0\uC11C \uC0AD\uC81C\uD560\uAE4C\uC694? \uC774 \uC791\uC5C5\uC740 \uD604\uC7AC \uAE30\uAE30\uC5D0\uC11C\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4.")) return;
  store.remove(domain, [row.id]);
}
return /* @__PURE__ */ R.h(R.IconButton, { name: "trash", label: label + " \uC0AD\uC81C", onClick: remove });
}
function RGeneral({ spec, store }) {
const site = settingsRecords(store, "general").find(function(row) {
  return row.id === "site";
}) || { id: "site" };
const [form, setForm] = R.useState(function() {
  return settingsSiteFields(site);
});
const [saved, setSaved] = R.useState(false);
R.useEffect(function() {
  setForm(settingsSiteFields(site));
}, [site.id]);
function update(key, value) {
  setForm(function(current) {
    return { ...current, [key]: value };
  });
  setSaved(false);
}
function reset() {
  setForm(settingsSiteFields(site));
  setSaved(false);
}
function save(event) {
  event.preventDefault();
  if (!form.siteName.trim()) {
    store.notify("\uC0AC\uC774\uD2B8\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  store.save("general", {
    ...site,
    id: "site",
    title: site.title || "\uC0AC\uC774\uD2B8 \uACF5\uD1B5\uC815\uBCF4",
    siteName: form.siteName.trim(),
    phone: form.phone.trim(),
    representative: form.representative.trim(),
    businessNumber: form.businessNumber.trim(),
    mailOrderNumber: form.mailOrderNumber.trim(),
    privacyOfficer: form.privacyOfficer.trim(),
    address: form.address.trim(),
    isSampleSettings: true
  });
  setSaved(true);
}
return /* @__PURE__ */ R.h("div", { className: "r-stack r-settings-general" }, /* @__PURE__ */ R.h("div", { className: "r-settings-page-note", role: "note" }, /* @__PURE__ */ R.h("strong", null, "\uC77C\uBC18 \uC124\uC815"), /* @__PURE__ */ R.h("span", null, "\uC694\uCCAD\uB41C \uC0AC\uC774\uD2B8 \uACF5\uD1B5 \uC815\uBCF4 ", /* @__PURE__ */ R.h("b", null, "7\uAC1C \uD56D\uBAA9\uB9CC"), " \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC800\uC7A5\uC740 \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC758 local store\uC5D0\uB9CC \uBC18\uC601\uB429\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Panel, { title: "\uC0AC\uC774\uD2B8 \uACF5\uD1B5 \uC815\uBCF4", subtitle: "\uD544\uC694\uD55C \uBC95\uC815\xB7\uC6B4\uC601 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uACE0 \uC218\uC815\uD558\uC138\uC694." }, /* @__PURE__ */ R.h("form", { className: "r-form r-settings-general-form", onSubmit: save }, /* @__PURE__ */ R.h(R.Field, { label: /* @__PURE__ */ R.h(R.Fragment, null, "\uC0AC\uC774\uD2B8\uBA85 ", /* @__PURE__ */ R.h("em", { "aria-hidden": "true" }, "*")), hint: "\uAD00\uB9AC\uC790\xB7\uC0AC\uC6A9\uC790 \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD560 \uC0AC\uC774\uD2B8\uBA85\uC785\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { value: form.siteName, onChange: function(event) {
  update("siteName", event.target.value);
}, required: true, placeholder: "\uC608: \uC70C\uD074\uB7FD" })), /* @__PURE__ */ R.h(R.Field, { label: "\uB300\uD45C\uC804\uD654" }, /* @__PURE__ */ R.h("input", { type: "tel", value: form.phone, onChange: function(event) {
  update("phone", event.target.value);
}, placeholder: "\uC608: 1577-3538" })), /* @__PURE__ */ R.h(R.Field, { label: "\uB300\uD45C\uC790" }, /* @__PURE__ */ R.h("input", { value: form.representative, onChange: function(event) {
  update("representative", event.target.value);
}, placeholder: "\uB300\uD45C\uC790\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694" })), /* @__PURE__ */ R.h(R.Field, { label: "\uC0AC\uC5C5\uC790\uBC88\uD638" }, /* @__PURE__ */ R.h("input", { value: form.businessNumber, onChange: function(event) {
  update("businessNumber", event.target.value);
}, placeholder: "\uC608: 000-00-00000" })), /* @__PURE__ */ R.h(R.Field, { label: "\uD1B5\uC2E0\uD310\uB9E4\uC5C5\uBC88\uD638" }, /* @__PURE__ */ R.h("input", { value: form.mailOrderNumber, onChange: function(event) {
  update("mailOrderNumber", event.target.value);
}, placeholder: "\uC2E0\uACE0\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694" })), /* @__PURE__ */ R.h(R.Field, { label: "\uAC1C\uC778\uC815\uBCF4\uCC45\uC784\uC790" }, /* @__PURE__ */ R.h("input", { value: form.privacyOfficer, onChange: function(event) {
  update("privacyOfficer", event.target.value);
}, placeholder: "\uCC45\uC784\uC790 \uC131\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694" })), /* @__PURE__ */ R.h(R.Field, { label: "\uC8FC\uC18C", className: "r-settings-full-field" }, /* @__PURE__ */ R.h("textarea", { rows: "3", value: form.address, onChange: function(event) {
  update("address", event.target.value);
}, placeholder: "\uC0AC\uC5C5\uC7A5 \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694" })), /* @__PURE__ */ R.h("div", { className: "r-settings-form-footer r-settings-full-field" }, /* @__PURE__ */ R.h("p", { className: saved ? "r-settings-saved" : "r-muted", "aria-live": "polite" }, saved ? "7\uAC1C \uD56D\uBAA9\uC744 \uC2DC\uC548\uC6A9 \uC800\uC7A5\uC18C\uC5D0 \uBC18\uC601\uD588\uC2B5\uB2C8\uB2E4." : "\uC2E4\uC81C \uC0AC\uC774\uD2B8 \uC815\uBCF4 \uBC0F \uBC95\uC815 \uACE0\uC9C0 \uC5F0\uB3D9\uC740 \uAC1C\uBC1C \uB2E8\uACC4\uC5D0\uC11C \uBCC4\uB3C4\uB85C \uAC80\uC99D\uD574\uC57C \uD569\uB2C8\uB2E4."), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: reset }, "\uB418\uB3CC\uB9AC\uAE30"), /* @__PURE__ */ R.h("button", { type: "submit", className: "r-primary" }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), "\uC800\uC7A5"))))));
}
function RStaff({ spec, store, onIpSettings }) {
const [tab, setTab] = R.useState("staff");
const [query, setQuery] = R.useState("");
const [permissionStaff, setPermissionStaff] = R.useState(null);
const staffs = settingsRecords(store, "staff");
const experts = settingsRecords(store, "experts");
const keyword = query.trim().toLocaleLowerCase("ko-KR");
const visibleStaff = staffs.filter(function(row) {
  return !keyword || [row.loginId, row.name, row.phone, row.role].join(" ").toLocaleLowerCase("ko-KR").includes(keyword);
});
const visibleExperts = experts.filter(function(row) {
  return !keyword || [row.loginId, row.name, row.phone, row.description].join(" ").toLocaleLowerCase("ko-KR").includes(keyword);
});
const staffWaiting = staffs.filter(function(row) {
  return settingsStaffState(row) === "\uC2B9\uC778 \uB300\uAE30";
}).length;
const staffApproved = staffs.filter(function(row) {
  return settingsStaffState(row) === "\uAD8C\uD55C \uBD80\uC5EC \uB300\uAE30";
}).length;
const staffGranted = staffs.filter(function(row) {
  return settingsStaffState(row) === "\uAD8C\uD55C \uC644\uB8CC";
}).length;
const expertWaiting = experts.filter(function(row) {
  return settingsExpertState(row) === "\uC2B9\uC778 \uB300\uAE30";
}).length;
function approveStaff(row) {
  store.updateMany("staff", [row.id], { approvalState: "\uAD8C\uD55C \uBD80\uC5EC \uB300\uAE30", status: "\uC2B9\uC778", approvedAt: settingsNow(), isSampleRequest: true }, "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778");
}
function approveExpert(row) {
  store.updateMany("experts", [row.id], { approvalState: "\uC2B9\uC778 \uC644\uB8CC", visible: "\uD65C\uB3D9", approvedAt: settingsNow(), isSampleRequest: true }, "\uC804\uBB38\uAC00 \uAC00\uC785 \uC2B9\uC778");
}
function openIpSettings() {
  if (typeof onIpSettings === "function") {
    onIpSettings("admin");
    return;
  }
  store.notify("\uAD00\uB9AC\uC790 \uD398\uC774\uC9C0 \uC811\uADFC IP \uC124\uC815 \uCC3D\uC740 \uBD80\uBAA8 \uD654\uBA74\uC5D0\uC11C \uC5F0\uACB0\uD574\uC57C \uD558\uB294 \uC2DC\uC548 \uBC84\uD2BC\uC785\uB2C8\uB2E4.");
}
const staffRows = visibleStaff.map(function(row) {
  const state = settingsStaffState(row);
  return [
    /* @__PURE__ */ R.h("strong", { className: "r-settings-name" }, R.text(row.name) || "\uC774\uB984 \uBBF8\uC785\uB825"),
    /* @__PURE__ */ R.h("span", { className: "r-settings-id" }, R.text(row.loginId) || "\u2014"),
    /* @__PURE__ */ R.h("span", null, R.text(row.phone) || "\u2014"),
    state === "\uAD8C\uD55C \uC644\uB8CC" ? /* @__PURE__ */ R.h(R.Badge, { tone: "gray" }, R.text(row.role) || "\uC6B4\uC601\uC9C4") : /* @__PURE__ */ R.h("span", { className: "r-muted" }, "\uC2B9\uC778 \uD6C4 \uC9C0\uC815"),
    /* @__PURE__ */ R.h("div", { className: "r-settings-status-cell" }, settingsStateBadge(state), /* @__PURE__ */ R.h("small", null, state === "\uC2B9\uC778 \uB300\uAE30" ? "\uCD5C\uC885\uAD00\uB9AC\uC790 \uD655\uC778 \uC804" : state === "\uAD8C\uD55C \uBD80\uC5EC \uB300\uAE30" ? "\uAD8C\uD55C \uC124\uC815 \uD544\uC694" : "\uC811\uADFC \uAD8C\uD55C \uC124\uC815\uB428")),
    /* @__PURE__ */ R.h("div", { className: "r-actions" }, state === "\uC2B9\uC778 \uB300\uAE30" && /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary r-settings-compact", onClick: function() {
      approveStaff(row);
    } }, "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778"), state === "\uAD8C\uD55C \uBD80\uC5EC \uB300\uAE30" && /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary r-settings-compact", onClick: function() {
      setPermissionStaff(row);
    } }, "\uAD8C\uD55C \uBD80\uC5EC"), state === "\uAD8C\uD55C \uC644\uB8CC" && /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary r-settings-compact", onClick: function() {
      setPermissionStaff(row);
    } }, /* @__PURE__ */ R.h(R.Icon, { name: "edit" }), "\uAD8C\uD55C \uBCF4\uAE30"), /* @__PURE__ */ R.h(SettingsDeleteButton, { domain: "staff", row, store, label: "\uC6B4\uC601\uC9C4" }))
  ];
});
const expertRows = visibleExperts.map(function(row) {
  const state = settingsExpertState(row);
  return [
    /* @__PURE__ */ R.h("strong", { className: "r-settings-name" }, R.text(row.name) || "\uC804\uBB38\uAC00\uBA85 \uBBF8\uC785\uB825"),
    /* @__PURE__ */ R.h("span", { className: "r-settings-id" }, R.text(row.loginId) || "\u2014"),
    /* @__PURE__ */ R.h("span", null, R.text(row.phone) || "\u2014"),
    /* @__PURE__ */ R.h("span", { className: "r-settings-description" }, R.text(row.description) || "\u2014"),
    /* @__PURE__ */ R.h("div", { className: "r-settings-status-cell" }, settingsStateBadge(state), /* @__PURE__ */ R.h("small", null, state === "\uC2B9\uC778 \uB300\uAE30" ? "\uCD5C\uC885\uAD00\uB9AC\uC790 \uD655\uC778 \uC804" : "\uD65C\uB3D9 \uC0C1\uD0DC")),
    /* @__PURE__ */ R.h("div", { className: "r-actions" }, state === "\uC2B9\uC778 \uB300\uAE30" && /* @__PURE__ */ R.h("button", { type: "button", className: "r-primary r-settings-compact", onClick: function() {
      approveExpert(row);
    } }, "\uC2B9\uC778"), /* @__PURE__ */ R.h(SettingsDeleteButton, { domain: "experts", row, store, label: "\uC804\uBB38\uAC00" }))
  ];
});
return /* @__PURE__ */ R.h("div", { className: "r-stack r-settings-staff" }, /* @__PURE__ */ R.h(R.Panel, { title: "\uAC00\uC785 \uC2E0\uCCAD \xB7 \uC2B9\uC778 \xB7 \uAD8C\uD55C \uBD80\uC5EC", subtitle: "\uC6B4\uC601\uC9C4\uC740 \uC2B9\uC778 \uD6C4 \uAD8C\uD55C\uC744 \uBD80\uC5EC\uD574\uC57C \uC774\uC6A9\uD560 \uC218 \uC788\uC73C\uBA70, \uC804\uBB38\uAC00\uB294 \uC2B9\uC778 \uD6C4 \uD65C\uB3D9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", actions: /* @__PURE__ */ R.h("button", { type: "button", className: "r-secondary", onClick: openIpSettings }, /* @__PURE__ */ R.h(R.Icon, { name: "plus" }), "\uAD00\uB9AC\uC790 \uD398\uC774\uC9C0 \uC811\uADFC IP \uCD94\uAC00") }, /* @__PURE__ */ R.h("div", { className: "r-settings-admin-flow" }, /* @__PURE__ */ R.h(SettingsJourney, { type: "staff" }), /* @__PURE__ */ R.h(SettingsJourney, { type: "expert" })), /* @__PURE__ */ R.h("p", { className: "r-note r-settings-remove-note" }, /* @__PURE__ */ R.h("strong", null, "\uAC00\uC785 \uCC98\uB9AC \uACBD\uB85C:"), " \uC774 \uAD00\uB9AC \uD654\uBA74\uC5D0\uC11C\uB294 \uC694\uCCAD\uC5D0 \uB530\uB77C \uC6B4\uC601\uC9C4\xB7\uC804\uBB38\uAC00 \uC9C1\uC811 \uCD94\uAC00 \uBC84\uD2BC\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC2E0\uADDC \uACC4\uC815\uC740 ", /* @__PURE__ */ R.h("b", null, "\uAC00\uC785 \uC2E0\uCCAD"), " \uD654\uBA74\uC5D0\uC11C \uC720\uD615\uC744 \uC120\uD0DD\uD574 \uC811\uC218\uD569\uB2C8\uB2E4.")), /* @__PURE__ */ R.h("section", { className: "r-grid4 r-settings-kpis", "aria-label": "\uAC00\uC785 \uC2B9\uC778 \uD604\uD669" }, /* @__PURE__ */ R.h(R.KPI, { label: "\uC6B4\uC601\uC9C4 \uC2B9\uC778 \uB300\uAE30", value: R.num(staffWaiting) + "\uBA85", detail: "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \uC804", tone: "red" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uAD8C\uD55C \uBD80\uC5EC \uB300\uAE30", value: R.num(staffApproved) + "\uBA85", detail: "\uC2B9\uC778 \uC644\uB8CC \xB7 \uBA54\uB274 \uAD8C\uD55C \uBBF8\uC124\uC815", tone: "blue" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uAD8C\uD55C \uBD80\uC5EC \uC644\uB8CC", value: R.num(staffGranted) + "\uBA85", detail: "\uC2DC\uC548\uC0C1 \uC811\uADFC \uAC00\uB2A5 \uC0C1\uD0DC", tone: "green" }), /* @__PURE__ */ R.h(R.KPI, { label: "\uC804\uBB38\uAC00 \uC2B9\uC778 \uB300\uAE30", value: R.num(expertWaiting) + "\uBA85", detail: "\uC804\uBB38\uAC00 \uD65C\uB3D9 \uC2B9\uC778 \uC804", tone: "red" })), /* @__PURE__ */ R.h(R.Panel, { title: tab === "staff" ? "\uC6B4\uC601\uC9C4 \uAC00\uC785 \uC2E0\uCCAD \uAD00\uB9AC" : "\uC804\uBB38\uAC00 \uAC00\uC785 \uC2E0\uCCAD \uAD00\uB9AC", subtitle: tab === "staff" ? "\uB300\uAE30 \u2192 \uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \u2192 \uAD8C\uD55C \uBD80\uC5EC\uC758 3\uB2E8\uACC4\uB97C \uBD84\uB9AC\uD574 \uD655\uC778\uD569\uB2C8\uB2E4." : "\uC804\uBB38\uAC00\uB294 \uAC00\uC785 \uC2E0\uCCAD \uD6C4 \uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778\uC744 \uAC70\uCCD0 \uD65C\uB3D9 \uC0C1\uD0DC\uAC00 \uB429\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "r-settings-list-controls" }, /* @__PURE__ */ R.h("nav", { className: "r-settings-tabs", "aria-label": "\uACC4\uC815 \uC720\uD615 \uD0ED" }, /* @__PURE__ */ R.h("button", { type: "button", className: tab === "staff" ? "is-active" : "", "aria-pressed": tab === "staff", onClick: function() {
  setTab("staff");
  setQuery("");
} }, "\uC6B4\uC601\uC9C4 ", /* @__PURE__ */ R.h("span", null, R.num(staffs.length))), /* @__PURE__ */ R.h("button", { type: "button", className: tab === "expert" ? "is-active" : "", "aria-pressed": tab === "expert", onClick: function() {
  setTab("expert");
  setQuery("");
} }, "\uC804\uBB38\uAC00 ", /* @__PURE__ */ R.h("span", null, R.num(experts.length)))), /* @__PURE__ */ R.h("label", { className: "r-settings-search" }, /* @__PURE__ */ R.h(R.Icon, { name: "search" }), /* @__PURE__ */ R.h("input", { value: query, onChange: function(event) {
  setQuery(event.target.value);
}, placeholder: tab === "staff" ? "\uC774\uB984, \uC544\uC774\uB514, \uC5F0\uB77D\uCC98, \uC5ED\uD560 \uAC80\uC0C9" : "\uC804\uBB38\uAC00\uBA85, \uC544\uC774\uB514, \uC5F0\uB77D\uCC98 \uAC80\uC0C9", "aria-label": "\uAC00\uC785 \uC2E0\uCCAD \uAC80\uC0C9" }))), tab === "staff" ? /* @__PURE__ */ R.h(R.Table, { headers: ["\uC6B4\uC601\uC9C4\uBA85", "\uC544\uC774\uB514", "\uC5F0\uB77D\uCC98", "\uC5ED\uD560", "\uAC00\uC785 \xB7 \uC2B9\uC778 \xB7 \uAD8C\uD55C", "\uAD00\uB9AC"], rows: staffRows, empty: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uC6B4\uC601\uC9C4 \uAC00\uC785 \uC2E0\uCCAD\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", className: "r-settings-table" }) : /* @__PURE__ */ R.h(R.Table, { headers: ["\uC804\uBB38\uAC00\uBA85", "\uC544\uC774\uB514", "\uC5F0\uB77D\uCC98", "\uC18C\uAC1C", "\uAC00\uC785 \xB7 \uC2B9\uC778", "\uAD00\uB9AC"], rows: expertRows, empty: "\uC870\uAC74\uC5D0 \uB9DE\uB294 \uC804\uBB38\uAC00 \uAC00\uC785 \uC2E0\uCCAD\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.", className: "r-settings-table" })), permissionStaff && /* @__PURE__ */ R.h(SettingsPermissionModal, { staff: permissionStaff, store, onClose: function() {
  setPermissionStaff(null);
} }));
}
function RSignup({ spec, store }) {
const [type, setType] = R.useState("staff");
const [form, setForm] = R.useState({ loginId: "", password: "", name: "", phone: "" });
const [error, setError] = R.useState("");
const [complete, setComplete] = R.useState(null);
const isStaff = type === "staff";
function selectType(next) {
  setType(next);
  setForm({ loginId: "", password: "", name: "", phone: "" });
  setError("");
  setComplete(null);
}
function update(key, value) {
  setForm(function(current) {
    return { ...current, [key]: value };
  });
  setError("");
}
function submit(event) {
  event.preventDefault();
  const loginId = form.loginId.trim();
  const name = form.name.trim();
  const phone = form.phone.trim();
  if (!loginId || !form.password || !name || !phone) {
    setError("\uC544\uC774\uB514, \uBE44\uBC00\uBC88\uD638, " + (isStaff ? "\uC774\uB984" : "\uC804\uBB38\uAC00\uBA85") + ", \uC5F0\uB77D\uCC98\uB97C \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  const used = settingsRecords(store, "staff").concat(settingsRecords(store, "experts")).some(function(row) {
    return String(row.loginId || "").toLocaleLowerCase("ko-KR") === loginId.toLocaleLowerCase("ko-KR");
  });
  if (used) {
    setError("\uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC778 \uC544\uC774\uB514\uC785\uB2C8\uB2E4. \uB2E4\uB978 \uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
    return;
  }
  if (isStaff) {
    store.save("staff", {
      id: settingsNewId("staff"),
      loginId,
      name,
      phone,
      role: "\uAD8C\uD55C \uBBF8\uBD80\uC5EC",
      status: "\uB300\uAE30",
      approvalState: "\uC2B9\uC778 \uB300\uAE30",
      permissions: {},
      requestedAt: settingsNow(),
      isSampleRequest: true
    });
    setComplete({ type: "\uC6B4\uC601\uC9C4", name, next: "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \uD6C4 \uBA54\uB274\uBCC4 \uAD8C\uD55C \uBD80\uC5EC" });
  } else {
    store.save("experts", {
      id: settingsNewId("expert"),
      loginId,
      name,
      nickname: name,
      phone,
      description: "\uAC00\uC785 \uC2B9\uC778 \uB300\uAE30 \uC911\uC778 \uC2DC\uC548\uC6A9 \uC804\uBB38\uAC00",
      visible: "\uC2B9\uC778\uB300\uAE30",
      approvalState: "\uC2B9\uC778 \uB300\uAE30",
      requestedAt: settingsNow(),
      isSampleRequest: true
    });
    setComplete({ type: "\uC804\uBB38\uAC00", name, next: "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \uD6C4 \uD65C\uB3D9 \uC0C1\uD0DC \uC804\uD658" });
  }
  setForm({ loginId: "", password: "", name: "", phone: "" });
  setError("");
}
return /* @__PURE__ */ R.h("div", { className: "r-stack r-settings-signup" }, /* @__PURE__ */ R.h("div", { className: "r-settings-page-note", role: "note" }, /* @__PURE__ */ R.h("strong", null, "\uC6B4\uC601 \uACC4\uC815 \uAC00\uC785 \uC2E0\uCCAD"), /* @__PURE__ */ R.h("span", null, "\uAC00\uC785 \uC720\uD615\uC744 \uBA3C\uC800 \uC120\uD0DD\uD558\uC138\uC694. \uBE44\uBC00\uBC88\uD638\uB294 \uC785\uB825 \uD655\uC778\uC6A9\uC774\uBA70 ", /* @__PURE__ */ R.h("b", null, "store\uC5D0 \uC800\uC7A5\uD558\uC9C0 \uC54A\uB294"), " \uC624\uD504\uB77C\uC778 \uC2DC\uC548\uC785\uB2C8\uB2E4.")), /* @__PURE__ */ R.h(R.Panel, { title: "\uAC00\uC785 \uC720\uD615 \uC120\uD0DD", subtitle: "\uC6B4\uC601\uC9C4\uACFC \uC804\uBB38\uAC00\uC758 \uAC00\uC785\xB7\uC2B9\uC778 \uC808\uCC28\uAC00 \uB2E4\uB985\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("div", { className: "r-settings-type-choice", role: "radiogroup", "aria-label": "\uAC00\uC785 \uC720\uD615" }, /* @__PURE__ */ R.h("button", { type: "button", role: "radio", "aria-checked": isStaff, className: isStaff ? "is-selected" : "", onClick: function() {
  selectType("staff");
} }, /* @__PURE__ */ R.h("strong", null, "\uC6B4\uC601\uC9C4"), /* @__PURE__ */ R.h("span", null, "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \uD6C4 \uAD8C\uD55C \uBD80\uC5EC")), /* @__PURE__ */ R.h("button", { type: "button", role: "radio", "aria-checked": !isStaff, className: !isStaff ? "is-selected" : "", onClick: function() {
  selectType("expert");
} }, /* @__PURE__ */ R.h("strong", null, "\uC804\uBB38\uAC00"), /* @__PURE__ */ R.h("span", null, "\uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \uD6C4 \uD65C\uB3D9 \uAC00\uB2A5")))), /* @__PURE__ */ R.h(R.Panel, { title: isStaff ? "\uC6B4\uC601\uC9C4 \uAC00\uC785 \uC2E0\uCCAD" : "\uC804\uBB38\uAC00 \uAC00\uC785 \uC2E0\uCCAD", subtitle: isStaff ? "\uC544\uC774\uB514 \xB7 \uBE44\uBC00\uBC88\uD638 \xB7 \uC774\uB984 \xB7 \uC5F0\uB77D\uCC98\uB9CC \uC785\uB825\uD569\uB2C8\uB2E4." : "\uC544\uC774\uB514 \xB7 \uBE44\uBC00\uBC88\uD638 \xB7 \uC804\uBB38\uAC00\uBA85 \xB7 \uC5F0\uB77D\uCC98\uB9CC \uC785\uB825\uD569\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("form", { className: "r-form r-settings-signup-form", onSubmit: submit }, /* @__PURE__ */ R.h(R.Field, { label: isStaff ? "\uC6B4\uC601\uC9C4 \uC544\uC774\uB514" : "\uC804\uBB38\uAC00 \uC544\uC774\uB514", hint: "\uAE30\uC874 \uC6B4\uC601\uC9C4\xB7\uC804\uBB38\uAC00 \uC544\uC774\uB514\uC640 \uC911\uBCF5\uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { autoComplete: "username", value: form.loginId, onChange: function(event) {
  update("loginId", event.target.value);
}, placeholder: "\uC601\uBB38, \uC22B\uC790 \uC870\uD569", required: true })), /* @__PURE__ */ R.h(R.Field, { label: "\uBE44\uBC00\uBC88\uD638", hint: "\uC785\uB825\uAC12\uC740 \uC800\uC7A5\uD558\uAC70\uB098 \uBAA9\uB85D\uC5D0 \uD45C\uC2DC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." }, /* @__PURE__ */ R.h("input", { type: "password", autoComplete: "new-password", value: form.password, onChange: function(event) {
  update("password", event.target.value);
}, placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825", required: true })), /* @__PURE__ */ R.h(R.Field, { label: isStaff ? "\uC774\uB984" : "\uC804\uBB38\uAC00\uBA85" }, /* @__PURE__ */ R.h("input", { value: form.name, onChange: function(event) {
  update("name", event.target.value);
}, placeholder: isStaff ? "\uC6B4\uC601\uC9C4 \uC774\uB984" : "\uC804\uBB38\uAC00\uBA85", required: true })), /* @__PURE__ */ R.h(R.Field, { label: "\uC5F0\uB77D\uCC98" }, /* @__PURE__ */ R.h("input", { type: "tel", value: form.phone, onChange: function(event) {
  update("phone", event.target.value);
}, placeholder: "010-0000-0000", required: true })), /* @__PURE__ */ R.h("div", { className: "r-settings-signup-footer r-settings-full-field" }, /* @__PURE__ */ R.h("p", { className: "r-note" }, isStaff ? "\uC2E0\uCCAD \uD6C4: \uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \u2192 \uAD8C\uD55C \uBD80\uC5EC \u2192 \uC774\uC6A9 \uAC00\uB2A5" : "\uC2E0\uCCAD \uD6C4: \uCD5C\uC885\uAD00\uB9AC\uC790 \uC2B9\uC778 \u2192 \uD65C\uB3D9 \uAC00\uB2A5"), /* @__PURE__ */ R.h("button", { type: "submit", className: "r-primary" }, /* @__PURE__ */ R.h(R.Icon, { name: "check" }), isStaff ? "\uC6B4\uC601\uC9C4 \uAC00\uC785 \uC2E0\uCCAD" : "\uC804\uBB38\uAC00 \uAC00\uC785 \uC2E0\uCCAD")), error && /* @__PURE__ */ R.h("p", { className: "r-settings-error r-settings-full-field", role: "alert" }, error))), complete && /* @__PURE__ */ R.h(R.Panel, { title: "\uAC00\uC785 \uC2E0\uCCAD\uC774 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4", className: "r-settings-complete" }, /* @__PURE__ */ R.h("div", { className: "r-settings-complete-body" }, /* @__PURE__ */ R.h(R.Badge, { tone: "amber" }, "\uC2B9\uC778 \uB300\uAE30"), /* @__PURE__ */ R.h("div", null, /* @__PURE__ */ R.h("strong", null, complete.name, " ", complete.type), /* @__PURE__ */ R.h("p", null, complete.next, " \uB2E8\uACC4\uB85C \uC9C4\uD589\uB418\uB294 \uC2DC\uC548\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uACC4\uC815 \uC0DD\uC131, \uBCF8\uC778 \uD655\uC778, \uBE44\uBC00\uBC88\uD638 \uC554\uD638\uD654\uC640 \uAD8C\uD55C \uAC80\uC99D\uC740 \uAC1C\uBC1C \uAD6C\uD604\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.")))));
}
function RSecondVideoCoupon({ video, store, onClose }) {
const [draft, setDraft] = R.useState(() => ({ ...newCouponDraft(uid()), name: video.title + " \uC804\uC6A9 \uD560\uC778\uCFE0\uD3F0", title: video.title + " \uC804\uC6A9 \uD560\uC778\uCFE0\uD3F0", discountType: "amount", discountValue: "", videoId: video.id, videoIds: [video.id], targetVideoId: video.id, productScope: "video", scope: "singleVideo", scopeVideoIds: [video.id], scopeProductIds: [], scopeExpertIds: [], expert: video.expert }));
const [error, setError] = R.useState("");
function save() {
  if (!draft.name.trim() || Number(draft.discountValue) <= 0) {
    setError("\uCFE0\uD3F0\uBA85\uACFC \uD560\uC778\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694.");
    return;
  }
  const value = Number(draft.discountValue);
  if (draft.discountType === "percentage" && value > 100) {
    setError("\uD560\uC778\uC728\uC740 100% \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4.");
    return;
  }
  store.save("coupons", { ...draft, id: draft.id || uid(), title: draft.name, videoId: video.id, videoIds: [video.id], targetVideoId: video.id, productScope: "video", scope: "singleVideo", scopeVideoIds: [video.id], scopeProductIds: [], scopeExpertIds: [], applyScope: "singleVideo", product: video.title, expert: video.expert, discountValue: value, benefitType: draft.discountType, benefitValue: String(value), issueMethod: "download", amount: value, enabled: true });
  onClose();
}
return /* @__PURE__ */ R.h(R.Modal, { title: "\uC601\uC0C1 \uC804\uC6A9 \uD560\uC778\uCFE0\uD3F0 \uBC1C\uAE09", onClose }, /* @__PURE__ */ R.h("div", { className: "r-stack" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC801\uC6A9 \uC601\uC0C1" }, /* @__PURE__ */ R.h("input", { readOnly: true, value: video.title })), /* @__PURE__ */ R.h(R.Field, { label: "\uCFE0\uD3F0\uBA85" }, /* @__PURE__ */ R.h("input", { value: draft.name, onChange: (e) => setDraft({ ...draft, name: e.target.value }) })), /* @__PURE__ */ R.h("div", { className: "r-grid2" }, /* @__PURE__ */ R.h(R.Field, { label: "\uD560\uC778 \uBC29\uC2DD" }, /* @__PURE__ */ R.h("select", { value: draft.discountType, onChange: (e) => setDraft({ ...draft, discountType: e.target.value }) }, /* @__PURE__ */ R.h("option", { value: "amount" }, "\uC815\uC561 \uD560\uC778 (\uC6D0)"), /* @__PURE__ */ R.h("option", { value: "percentage" }, "\uC815\uB960 \uD560\uC778 (%)"))), /* @__PURE__ */ R.h(R.Field, { label: "\uD560\uC778\uAC12" }, /* @__PURE__ */ R.h("input", { type: "number", min: "1", value: draft.discountValue, onChange: (e) => setDraft({ ...draft, discountValue: e.target.value }) }))), /* @__PURE__ */ R.h("div", { className: "r-grid2" }, /* @__PURE__ */ R.h(R.Field, { label: "\uC0AC\uC6A9 \uC2DC\uC791\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: draft.start || "", onChange: (e) => setDraft({ ...draft, start: e.target.value, startAt: e.target.value + "T00:00" }) })), /* @__PURE__ */ R.h(R.Field, { label: "\uC0AC\uC6A9 \uC885\uB8CC\uC77C" }, /* @__PURE__ */ R.h("input", { type: "date", value: draft.end || "", onChange: (e) => setDraft({ ...draft, end: e.target.value, endAt: e.target.value + "T23:59" }) }))), /* @__PURE__ */ R.h("p", { className: "r-note" }, "\uC774 \uCFE0\uD3F0\uC740 \uC704 \uC601\uC0C1\uC5D0\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4."), error && /* @__PURE__ */ R.h("p", { className: "r-alert" }, error), /* @__PURE__ */ R.h("div", { className: "r-actions" }, /* @__PURE__ */ R.h("button", { className: "r-secondary", onClick: onClose }, "\uCDE8\uC18C"), /* @__PURE__ */ R.h("button", { className: "r-primary", onClick: save }, "\uCFE0\uD3F0 \uBC1C\uAE09"))));
}
function RSecondHtmlEditor({ value, onChange, label, sourceDefault = false }) {
const [source, setSource] = R.useState(sourceDefault);
const [element, setElement] = R.useState(null);
R.useEffect(() => {
  if (element && element.innerHTML !== value && document.activeElement !== element) element.innerHTML = value || "";
}, [value, element, source]);
function command(name, arg) {
  element?.focus();
  document.execCommand(name, false, arg);
  if (element) onChange(element.innerHTML);
}
return /* @__PURE__ */ R.h("div", { className: "second-html-editor" }, /* @__PURE__ */ R.h("div", { className: "second-editor-toolbar" }, /* @__PURE__ */ R.h("button", { type: "button", onClick: () => setSource(!source) }, source ? "\uC5D0\uB514\uD130 \uBCF4\uAE30" : "HTML \uBCF4\uAE30"), !source && /* @__PURE__ */ R.h(R.Fragment, null, /* @__PURE__ */ R.h("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => command("bold") }, "\uAD75\uAC8C"), /* @__PURE__ */ R.h("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => command("italic") }, "\uAE30\uC6B8\uC784"), /* @__PURE__ */ R.h("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => command("underline") }, "\uBC11\uC904"), /* @__PURE__ */ R.h("select", { "aria-label": label + " \uAE00\uC790\uD06C\uAE30", onChange: (e) => command("fontSize", e.target.value), defaultValue: "3" }, /* @__PURE__ */ R.h("option", { value: "2" }, "\uC791\uAC8C"), /* @__PURE__ */ R.h("option", { value: "3" }, "\uBCF4\uD1B5"), /* @__PURE__ */ R.h("option", { value: "5" }, "\uD06C\uAC8C"), /* @__PURE__ */ R.h("option", { value: "7" }, "\uC544\uC8FC \uD06C\uAC8C")), /* @__PURE__ */ R.h("input", { "aria-label": label + " \uAE00\uC790\uC0C9", type: "color", onChange: (e) => command("foreColor", e.target.value) }), /* @__PURE__ */ R.h("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => command("justifyLeft") }, "\uC67C\uCABD"), /* @__PURE__ */ R.h("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => command("justifyCenter") }, "\uAC00\uC6B4\uB370"))), source ? /* @__PURE__ */ R.h("textarea", { "aria-label": label + " HTML", rows: "8", value: value || "", onChange: (e) => onChange(e.target.value) }) : /* @__PURE__ */ R.h("div", { role: "textbox", "aria-label": label + " \uC5D0\uB514\uD130", ref: setElement, contentEditable: true, suppressContentEditableWarning: true, onInput: (e) => onChange(e.currentTarget.innerHTML), className: "second-editable" }));
}



/* 수정3.pdf: 기존 전문가 월별 집계 기준을 유지하는 관리자용 통합 화면 */
function thirdRevenueModel(state,month){
 const range=analyticsMonthRange(month);
 const payments=analyticsCompletedPaymentRows(state,range,'전체');
 const refunds=analyticsRefundRows(state,range,'전체');
 const names=[...new Set([...analyticsExpertNames(state),...payments.map(p=>p.owner),...refunds.map(r=>r.owner)])];
 const experts=names.map(name=>{
const own=payments.filter(p=>p.owner===name),back=refunds.filter(r=>r.owner===name);
const card=own.reduce((s,p)=>s+p.parts.card,0),bank=own.reduce((s,p)=>s+p.parts.bank,0),points=own.reduce((s,p)=>s+p.parts.points,0);
const gross=card+bank+points,refund=back.reduce((s,r)=>s+r.finalAmount,0);
const video=own.filter(p=>p.isVideo).reduce((s,p)=>s+p.coupon.finalAmount,0);
const charge=own.filter(p=>isPointCharge(p.payment)).reduce((s,p)=>s+p.coupon.finalAmount,0);
const vip=gross-video-charge;
return {name,card,bank,points,gross,refund,net:gross-refund,video,vip,charge,count:own.length};
 }).sort((a,b)=>b.gross-a.gross||a.name.localeCompare(b.name,'ko-KR'));
 const totals=experts.reduce((s,r)=>{['card','bank','points','gross','refund','net','video','vip','charge','count'].forEach(k=>s[k]+=r[k]);return s;},{card:0,bank:0,points:0,gross:0,refund:0,net:0,video:0,vip:0,charge:0,count:0});
 // 직전 6개월을 같은 결제·환불 완료일 기준으로 집계합니다.
 const date=new Date(month+'-01T12:00:00');
 const trend=Array.from({length:6},(_,i)=>{
const d=new Date(date);d.setMonth(d.getMonth()-5+i);const m=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
const r=analyticsMonthRange(m),pay=analyticsCompletedPaymentRows(state,r,'전체'),back=analyticsRefundRows(state,r,'전체');
const gross=pay.reduce((s,p)=>s+p.coupon.finalAmount,0),refund=back.reduce((s,r)=>s+r.finalAmount,0);
return {month:m,gross,refund,net:gross-refund};
 });
 return {range,payments,refunds,experts,totals,trend};
}
function thirdRevenueExcel(model,month){
 const wb=ThirdExcel.utils.book_new();
 function sheet(title,rows,numericFrom=1){
const ws=ThirdExcel.utils.aoa_to_sheet(rows);
ws['!cols']=rows[0].map((_,i)=>({wch:i===0?23:20}));
ws['!autofilter']={ref:ThirdExcel.utils.encode_range({s:{r:0,c:0},e:{r:rows.length-1,c:rows[0].length-1}})};
for(let r=1;r<rows.length;r++)for(let c=numericFrom;c<rows[r].length;c++){
 const cell=ws[ThirdExcel.utils.encode_cell({r,c})];if(cell&&cell.t==='n')cell.z='#,##0;[Red]-#,##0';
}
ThirdExcel.utils.book_append_sheet(wb,ws,title);
 }
 const t=model.totals;
 sheet('월 전체 요약',[['조회 월','카드 결제','무통장 입금','포인트 사용','총 결제액','완료 환불액','환불 차감 후 금액','완료 결제건수'],[month,t.card,t.bank,t.points,t.gross,t.refund,t.net,t.count]]);
 sheet('전문가별 월 매출',[['전문가','VIP 상품','주식교육영상','포인트 충전','카드','무통장','포인트 사용','총 결제액','완료 환불액','환불 차감 후 금액','결제건수'],...model.experts.map(r=>[r.name,r.vip,r.video,r.charge,r.card,r.bank,r.points,r.gross,r.refund,r.net,r.count]),['합계',t.vip,t.video,t.charge,t.card,t.bank,t.points,t.gross,t.refund,t.net,t.count]]);
 sheet('완료 결제 내역',[['결제일','전문가','아이디','닉네임','상품','옵션','결제수단','카드','무통장','포인트 사용','실결제금액'],...model.payments.map(r=>[r.paidAt,r.owner,analyticsText(r.payment.loginId),analyticsText(r.member?.nickname||r.payment.nickname),r.optionInfo.product,r.optionInfo.option,analyticsText(r.payment.method),r.parts.card,r.parts.bank,r.parts.points,r.coupon.finalAmount])],7);
 sheet('환불 내역',[['환불완료일','전문가','아이디','닉네임','상품','카드 환불','무통장 환불','포인트 환불','최종 환불금액'],...model.refunds.map(r=>[r.refundAt,r.owner,analyticsText(r.payment.loginId),analyticsText(r.member?.nickname||r.payment.nickname),titleForPayment(r.payment),r.parts.card,r.parts.bank,r.parts.points,r.finalAmount])],5);
 sheet('최근 6개월 추이',[['월','총 결제액','완료 환불액','환불 차감 후 금액'],...model.trend.map(r=>[r.month,r.gross,r.refund,r.net])]);
 ThirdExcel.writeFile(wb,'윌클럽_전체매출내역_'+month+'.xlsx',{compression:true});
}
function ThirdExpertChart({rows}){
 const max=Math.max(1,...rows.map(r=>r.gross));
 return <section className="third-chart"><h2>전문가별 결제액 비교</h2><p>선택한 월의 전체 결제액 · 단위 원</p><div className="third-chart-bars">{rows.map(r=><div className="third-bar-row" key={r.name}><strong>{r.name}</strong><div className="third-bar-track"><div className="third-bar-fill" style={{width:(r.gross/max*100)+'%'}}/></div><b>{R.money(r.gross)}</b></div>)}</div></section>;
}
function ThirdMonthChart({rows}){
 const max=Math.max(1,...rows.flatMap(r=>[r.gross,r.refund]));
 const marks=[0,.5,1];
 return <section className="third-chart"><h2>최근 6개월 결제 · 환불 추이</h2><p>결제·환불 완료일 기준 · 단위 만원</p><svg viewBox="0 0 660 245" role="img" aria-label="최근 6개월 결제 및 환불 막대그래프">{marks.map(v=><g key={v}><line x1="65" y1={190-v*150} x2="645" y2={190-v*150} stroke="#e8ddd5"/><text x="57" y={194-v*150} textAnchor="end" fill="#78685f" fontSize="12">{R.num(Math.round(max*v/10000))}</text></g>)}{rows.map((r,i)=>{const x=105+i*94;return <g key={r.month}><title>{r.month+' 결제 '+R.money(r.gross)+' / 환불 '+R.money(r.refund)}</title><rect x={x-20} y={190-r.gross/max*150} width="26" height={r.gross/max*150} rx="3" fill="#912c2f"/><rect x={x+10} y={190-r.refund/max*150} width="26" height={r.refund/max*150} rx="3" fill="#ca9986"/><text x={x+8} y="217" textAnchor="middle" fill="#594542" fontSize="13">{r.month.slice(2).replace('-','.')}</text></g>})}</svg><div className="third-chart-legend"><span><i/>총 결제액</span><span><i/>완료 환불액</span></div></section>;
}
function RThirdTotalRevenue({store}){
 const [month,setMonth]=R.useState(()=>seoulMonth());
 const model=R.useMemo(()=>thirdRevenueModel(store.state,month),[store.state,month]);
 const t=model.totals;
 return <div className="third-revenue r-stack">
<R.Panel title="전체 매출내역" subtitle="전문가별 월 매출을 한 화면에서 확인합니다." actions={<button type="button" className="r-primary" onClick={()=>thirdRevenueExcel(model,month)}><R.Icon name="download"/>엑셀 다운로드</button>}>
 <div className="third-revenue-filter"><R.Field label="조회 월"><input type="month" aria-label="전체 매출 조회 월" value={month} onChange={e=>{if(e.target.value)setMonth(e.target.value);}}/></R.Field><p>{model.range.start} ~ {model.range.end}<br/><span>결제 완료일 · 환불 완료일 기준</span></p><R.Badge tone="red">관리자 전용</R.Badge></div>
</R.Panel>
<section className="third-revenue-kpis" aria-label="전체 매출 요약"><R.KPI label="총 결제액" value={R.money(t.gross)} detail={'완료 결제 '+R.num(t.count)+'건'}/><R.KPI label="완료 환불액" value={R.money(t.refund)} detail="환불 완료일 기준" tone="red"/><R.KPI label="환불 차감 후 금액" value={R.money(t.net)} detail="총 결제액 − 완료 환불액" tone="green"/></section>
<div className="third-revenue-methods"><span>카드<strong>{R.money(t.card)}</strong></span><span>무통장<strong>{R.money(t.bank)}</strong></span><span>포인트 사용<strong>{R.money(t.points)}</strong></span></div>
<div className="third-revenue-charts"><ThirdExpertChart rows={model.experts}/><ThirdMonthChart rows={model.trend}/></div>
<R.Panel title="전문가별 월 매출 통합" subtitle="단위 원 · 포인트 충전은 VIP/영상과 구분하여 합산합니다."><R.Table className="third-revenue-table" headers={['전문가','VIP 상품','주식교육영상','포인트 충전','총 결제액','완료 환불액','환불 차감 후 금액','결제건수']} rows={[...model.experts.map(r=>[<strong>{r.name}</strong>,R.money(r.vip),R.money(r.video),R.money(r.charge),<strong>{R.money(r.gross)}</strong>,R.money(r.refund),<strong className="third-net">{R.money(r.net)}</strong>,R.num(r.count)+'건']),[<strong>합계</strong>,R.money(t.vip),R.money(t.video),R.money(t.charge),<strong>{R.money(t.gross)}</strong>,R.money(t.refund),<strong className="third-net">{R.money(t.net)}</strong>,R.num(t.count)+'건']]}/></R.Panel>
<R.Panel title="완료 결제 내역" subtitle="선택 월의 실결제금액입니다."><R.Table headers={['결제일','전문가','아이디','상품 · 옵션','결제수단','실결제금액']} rows={model.payments.map(r=>[r.paidAt,r.owner,analyticsText(r.payment.loginId),<div className="ranalytics-product-cell"><strong>{r.optionInfo.product}</strong><small>{r.optionInfo.option}</small></div>,analyticsText(r.payment.method),<strong>{R.money(r.coupon.finalAmount)}</strong>])} empty="선택한 월에 완료된 결제가 없습니다."/></R.Panel>
<R.Panel title="환불 내역" subtitle="선택 월에 완료된 환불입니다."><R.Table headers={['환불일','전문가','아이디','상품','최종 환불금액']} rows={model.refunds.map(r=>[r.refundAt,r.owner,analyticsText(r.payment.loginId),titleForPayment(r.payment),<strong>{R.money(r.finalAmount)}</strong>])} empty="선택한 월에 완료된 환불이 없습니다."/></R.Panel>
<p className="r-note">디자인 확인용 예시 데이터입니다. 엑셀은 조회 월의 요약·전문가별 매출·결제·환불 및 최근 6개월 추이를 각각의 시트로 저장합니다.</p>
 </div>;
}

function RHasPage(spec) {
return (spec.domain === 'members' && spec.type !== 'analytics') ||
  ['/admin/payments/all','/admin/payments/card','/admin/payments/bank',
  '/admin/design/main','/admin/design/terms','/admin/vip-products',
  '/admin/sms/history','/admin/sms/compose','/admin/analytics/all','/admin/analytics/revenue','/admin/analytics/total-revenue',
  '/admin/settings/general','/admin/staff/list','/admin/staff/experts',
  '/admin/staff/signup','/admin/analytics/access-status','/admin/analytics/admin-access-status'].includes(spec.path) || spec.domain === 'videos';
}
function RRenderPage(spec,store,fixedExpert,onIpSettings) {
let Component;
if(spec.path === '/admin/members/all' && !fixedExpert) Component=MemberListWorkspace;
else if(spec.domain === 'members') Component=RMembers;
else if(spec.domain === 'videos') Component=RVideos;
else if(spec.path.startsWith('/admin/payments/')) Component=RPayments;
else if(spec.path === '/admin/vip-products') Component=RProducts;
else if(spec.path.startsWith('/admin/design/')) Component=RSite;
else if(spec.path === '/admin/analytics/access-status' || spec.path === '/admin/analytics/admin-access-status') Component=RAnalyticsAccess;
else if(spec.path === '/admin/sms/history' || spec.path === '/admin/sms/compose') Component=RSms;
else if(spec.path === '/admin/analytics/total-revenue') Component=RThirdTotalRevenue;
else if(spec.path.startsWith('/admin/analytics/')) Component=RAnalytics;
else if(spec.path === '/admin/settings/general') Component=RGeneral;
else if(spec.path === '/admin/staff/signup') Component=RSignup;
else Component=RStaff;
return R.h(Component,{spec,store,fixedExpert,onIpSettings:(type)=>onIpSettings(type==='admin'?'allowed':type),key:spec.path+String(fixedExpert||'')});
}

export default AdminApp;
