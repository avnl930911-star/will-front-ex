'use client';
// 첨부 원본의 회사소개·이용방법·무료주식정보. 원본 마크업을 재구성하지 않고 그대로 추출.
import * as React from 'react';
import * as Runtime from 'react/jsx-runtime';
import {House as ea,ChevronRight as ke,Compass as Hr,Eye as Jr,Users as Ia,ShieldCheck as Rf,ArrowRight as ne,ArrowUpRight as rt,Info as ua,CheckCheck as Sr,Search as qt,BookOpen as $a,TrendingUp as rl,Gift as to,UserRound as gt,Wallet as da,Ticket as za,Star as fl,Send as Oo,CreditCard as Pt,Check as kt,Copy as Gr,Monitor as Br,X as $e,RotateCcw as al,SlidersHorizontal as Uf,ChevronDown as wa,Bell as Tr,LockKeyhole as Tt,ArrowLeft as mt,ExternalLink as eo,Play as To,ChartColumn as No,GraduationCap as Fr,ChartNoAxesCombined as Or,CirclePlay as Po,SearchX as ol,Headphones as vf,Trophy as ll,CalendarDays as Mo,CircleCheck as $t,Landmark as Qr,Trash2 as nl,Plus as el,MessageCircle as Vf,CircleHelp as ko,Inbox as Cr,Pencil as Af,Phone as $r,CircleAlert as jo,LogOut as Zn,UserX as cl,Video as En,ReceiptText as tl} from 'lucide-react';
import assets from './assets.json';
import {useRenewalActions as ct} from './context';
import OriginalMediaHero from './OriginalMediaHero';
import {VideoCoupon} from '../storefront/components/VideoCoupon';
const lu=React;
const Es=React;
const Pe=React;
const ut=React;
const pu=React;
const Ho=React;
const Yf=React;
const Yt=React;
const ya=React;
const Cs=React;
const Ee=React;
const aa=React;
const Zf=React;
const z=Runtime;
const ht=Runtime;
const R=Runtime;
const Y=Runtime;
const $2=Runtime;
const Ke=Runtime;
const rq=Runtime;
const j=Runtime;
const re=Runtime;
const Q=Runtime;
const J=Runtime;
const k=Runtime;
const ul=Runtime;
const P=Runtime;
const Ae=Runtime;
const O=Runtime;
const y=Runtime;
const v=Runtime;
const s=Runtime;
function cu(e,t){let[a,o]=(0,lu.useState)(e[0]??"");return(0,lu.useEffect)(()=>{let f=document.querySelector(t),n=document.querySelector(".ex-header");if(!f)return;let r=f.closest(".willclub-page"),l=0,c="",d=()=>{l=0;let m=n?.getBoundingClientRect().height??0,h=f.getBoundingClientRect().height;r?.style.setProperty("--wc-sticky-header",`${m}px`),r?.style.setProperty("--wc-section-offset",`${m+h+20}px`),f.classList.toggle("is-stuck",f.getBoundingClientRect().top<=m+1);let x=m+h+30,E=e[0]??"";for(let M of e){let i=document.getElementById(M);i&&i.getBoundingClientRect().top<=x&&(E=M)}if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-3&&(E=e[e.length-1]??E),o(E),E!==c){let M=f.querySelector(`a[href="#${E}"]`);if(M&&f.scrollWidth>f.clientWidth){let i=M.getBoundingClientRect(),u=f.getBoundingClientRect();f.scrollTo({left:f.scrollLeft+i.left-u.left-(f.clientWidth-i.width)/2,behavior:"instant"})}c=E}},b=()=>{l||(l=window.requestAnimationFrame(d))},A=new ResizeObserver(b);return A.observe(f),n&&A.observe(n),d(),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",b),window.addEventListener("hashchange",b),()=>{l&&window.cancelAnimationFrame(l),A.disconnect(),window.removeEventListener("scroll",b),window.removeEventListener("resize",b),window.removeEventListener("hashchange",b)}},[e,t]),{active:a,setActive:o}}

const H2=[{id:"company",label:"회사 개요",number:"01"},{id:"vision",label:"비전",number:"02"},{id:"values",label:"철학",number:"03"},{id:"promise",label:"고객에 대한 약속",number:"04"}];

const jv=H2.map(e=>e.id);

function et({title:e,eyebrow:t,label:a="페이지 안내",letter:o="W"}){return(0,ht.jsxs)("section",{className:"wc-standard-banner page-standard-banner","aria-label":a,children:[(0,ht.jsxs)("div",{className:"wc-banner-copy",children:[(0,ht.jsxs)("p",{className:"wc-banner-eyebrow",children:[(0,ht.jsx)("span",{"aria-hidden":"true"}),t]}),(0,ht.jsx)("h2",{children:e})]}),(0,ht.jsxs)("div",{className:"wc-banner-art","aria-hidden":"true",children:[(0,ht.jsx)("span",{className:"wc-banner-circle wc-banner-circle-one"}),(0,ht.jsx)("span",{className:"wc-banner-circle wc-banner-circle-two"}),(0,ht.jsx)("span",{className:"wc-banner-ring"}),(0,ht.jsx)("span",{className:"wc-banner-monogram",children:o}),(0,ht.jsx)("span",{className:"wc-banner-index",children:"WILLCLUB CLASS"}),(0,ht.jsxs)("span",{className:"wc-banner-caption",children:["INSIGHT MAKES",(0,ht.jsx)("br",{}),"THE DIFFERENCE."]})]})]})}

const kv=[{icon:Hr,title:"원칙의 엄정함",text:"소음에 흔들리지 않는 장기적 시각",english:"PRINCIPLE"},{icon:Jr,title:"절대적 투명성",text:"명확한 근거와 논리로 뒷받침되는 분석과 통찰",english:"TRANSPARENCY"},{icon:Ia,title:"고객 중심의 품격",text:"함께 키워 나갈 공동의 미래",english:"CLIENT FIRST"},{icon:Rf,title:"자기 규율의 전통",text:"스스로에게 엄격하고, 고객에게는 성실한 자세",english:"DISCIPLINE"}];

function Ls(){let{active:e,setActive:t}=cu(jv,".section-nav");return(0,z.jsxs)("div",{className:"willclub-page legacy-page",id:"top",children:[(0,z.jsx)("a",{className:"skip-link",href:"#main-content",children:"본문 바로가기"}),(0,z.jsxs)("main",{className:"wc-container page-main",id:"main-content",children:[(0,z.jsxs)("div",{className:"breadcrumb","aria-label":"현재 위치",children:[(0,z.jsx)("a",{href:"/","aria-label":"홈",children:(0,z.jsx)(ea,{size:13})}),(0,z.jsx)(ke,{size:11,"aria-hidden":"true"}),(0,z.jsx)("span",{children:"회사소개"})]}),(0,z.jsxs)("div",{className:"page-heading",children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("p",{className:"eyebrow",children:"ABOUT WILLCLUB"}),(0,z.jsxs)("h1",{children:["회사소개",(0,z.jsx)("span",{className:"title-dot",children:"."})]})]}),(0,z.jsx)("span",{className:"heading-caption",children:"(주)제이앤비주식사관학교"})]}),(0,z.jsx)(et,{title:(0,z.jsxs)(z.Fragment,{children:["25년의 세월이",(0,z.jsx)("br",{}),"증명하는 신뢰"]}),eyebrow:"WILLCLUB · OUR STORY",label:"윌클럽 소개"}),(0,z.jsx)("div",{className:"wc-banner-context",children:(0,z.jsx)("p",{children:"품격을 완성하는 여정"})}),(0,z.jsxs)("div",{className:"trust-line",children:[(0,z.jsx)("span",{children:"EST. 25 YEARS"}),(0,z.jsx)("span",{children:"원칙 중심의 통찰"})]}),(0,z.jsxs)("nav",{className:"section-nav","aria-label":"회사소개 섹션 탐색",children:[H2.map(({id:a,label:o,number:f})=>(0,z.jsxs)("a",{className:e===a?"active":"",href:`#${a}`,"aria-current":e===a?"location":void 0,onClick:()=>t(a),children:[(0,z.jsx)("span",{children:f}),o]},a)),(0,z.jsx)("span",{className:"section-nav-caption",children:"OUR FOUNDATION"})]}),(0,z.jsxs)("section",{className:"about-section company-section",id:"company",children:[(0,z.jsxs)("div",{className:"section-side",children:[(0,z.jsxs)("p",{className:"section-kicker",children:[(0,z.jsx)("span",{children:"01"})," COMPANY"]}),(0,z.jsx)("h2",{children:"회사 개요"})]}),(0,z.jsxs)("div",{className:"company-body",children:[(0,z.jsxs)("p",{children:["(주)제이앤비주식사관학교는 25년의 세월 동안",(0,z.jsx)("br",{className:"desktop-break"})," ","흔들림 없는 원칙과 깊이 있는 통찰로",(0,z.jsx)("br",{className:"desktop-break"})," ","고객과 함께해 온 지식과 품격의 명문입니다."]}),(0,z.jsxs)("p",{children:["‘사관학교’라는 이름에 걸맞게",(0,z.jsx)("br",{className:"desktop-break"})," ","임하는 자세부터 남다르게 다져 왔으며,",(0,z.jsx)("br",{className:"desktop-break"})," ","단기적 유행에 흔들리지 않는 견고한 철학으로",(0,z.jsx)("br",{className:"desktop-break"})," ","고객과 함께 긴 호흡의 성장을 실현해 왔습니다."]}),(0,z.jsxs)("div",{className:"company-signature",children:[(0,z.jsx)("span",{className:"signature-line"}),(0,z.jsx)("span",{children:"J&B STOCK ACADEMY"})]})]})]}),(0,z.jsxs)("section",{className:"about-section vision-section",id:"vision",children:[(0,z.jsx)("div",{className:"section-header",children:(0,z.jsxs)("div",{children:[(0,z.jsxs)("p",{className:"section-kicker",children:[(0,z.jsx)("span",{children:"02"})," VISION"]}),(0,z.jsx)("h2",{children:"비전"})]})}),(0,z.jsxs)("div",{className:"vision-panel",children:[(0,z.jsxs)("div",{className:"vision-heritage","aria-label":"25년의 전통",children:[(0,z.jsx)("span",{className:"heritage-label",children:"BUILT ON TRUST"}),(0,z.jsxs)("div",{className:"heritage-number",children:["25",(0,z.jsx)("span",{children:"YEARS"})]})]}),(0,z.jsxs)("div",{className:"vision-copy",children:[(0,z.jsx)("p",{className:"eyebrow",children:"VISION"}),(0,z.jsxs)("h3",{children:["25년의 전통을 넘어,",(0,z.jsx)("br",{}),"세대를 잇는 ",(0,z.jsx)("span",{children:"신뢰의 기준"}),"이 되다."]}),(0,z.jsxs)("p",{children:["고객의 소중한 가치를 단순한 숫자로 보지 않고",(0,z.jsx)("br",{className:"desktop-break"})," ","그 분의 인생과 미래가 담긴 고귀한 여정으로 여기는",(0,z.jsx)("br",{className:"desktop-break"})," ","프리미엄 파트너가 되는 것."]})]})]})]}),(0,z.jsxs)("section",{className:"about-section values-section",id:"values",children:[(0,z.jsx)("div",{className:"section-header",children:(0,z.jsxs)("div",{children:[(0,z.jsxs)("p",{className:"section-kicker",children:[(0,z.jsx)("span",{children:"03"})," PHILOSOPHY"]}),(0,z.jsx)("h2",{children:"철학"})]})}),(0,z.jsx)("div",{className:"value-grid",children:kv.map(({icon:a,title:o,text:f,english:n},r)=>(0,z.jsxs)("article",{className:"value-card",children:[(0,z.jsxs)("div",{className:"value-top",children:[(0,z.jsx)(a,{size:27,strokeWidth:1.4,"aria-hidden":"true"}),(0,z.jsxs)("span",{children:["0",r+1]})]}),(0,z.jsx)("p",{className:"value-english",children:n}),(0,z.jsx)("h3",{children:o}),(0,z.jsx)("p",{className:"value-text",children:f})]},o))})]}),(0,z.jsxs)("section",{className:"about-section promise-section",id:"promise",children:[(0,z.jsx)("div",{className:"section-header",children:(0,z.jsxs)("div",{children:[(0,z.jsxs)("p",{className:"section-kicker",children:[(0,z.jsx)("span",{children:"04"})," OUR PROMISE"]}),(0,z.jsx)("h2",{children:"고객에 대한 약속"})]})}),(0,z.jsxs)("div",{className:"promise-panel",children:[(0,z.jsxs)("div",{className:"promise-title",children:[(0,z.jsx)("span",{className:"promise-quote","aria-hidden":"true",children:"“"}),(0,z.jsxs)("p",{children:["귀하의 가치가",(0,z.jsx)("br",{}),"품격 있게 빛나 가는 여정,"]}),(0,z.jsx)("span",{className:"promise-signature",children:"WILLCLUB, WITH YOU."})]}),(0,z.jsxs)("div",{className:"promise-copy",children:[(0,z.jsxs)("p",{children:["우리는 고객이 정보에 다가서는 순간부터",(0,z.jsx)("br",{className:"desktop-break"})," ","그 정보가 흔들림 없는 신뢰를 바탕으로 전달되도록",(0,z.jsx)("br",{className:"desktop-break"})," ","가장 높은 수준의 책임감과 전문성을 다합니다."]}),(0,z.jsxs)("p",{children:["단기적인 결과에 매몰되지 않고",(0,z.jsx)("br",{className:"desktop-break"})," ","긴 호흡의 성장을 위한 원칙과 통찰을",(0,z.jsx)("br",{className:"desktop-break"})," ","끊임없이 연구하며 신중하게 전하겠습니다."]}),(0,z.jsx)("p",{className:"promise-welcome",children:"그 시작을 저희와 함께하시길 진심으로 환영합니다."})]})]})]})]}),(0,z.jsxs)("a",{className:"floating-contact",href:"#live-chat","aria-label":"실시간 상담센터 열기",children:[(0,z.jsx)(Ia,{size:21,strokeWidth:1.6}),(0,z.jsx)("span",{children:"실시간 상담센터"}),(0,z.jsx)(ne,{size:14})]})]})}

const Zs=[{id:"step1",number:"01",label:"VIP 반 선택",english:"VIP SERVICE"},{id:"step2",number:"02",label:"회원가입 · 무료정보",english:"MEMBERSHIP"},{id:"step3",number:"03",label:"주식교육영상",english:"LEARNING"},{id:"step4",number:"04",label:"마이페이지",english:"MY ACCOUNT"},{id:"step5",number:"05",label:"결제 · 텔레그램",english:"PAYMENT & TELEGRAM"}];

const Pv=Zs.map(e=>e.id);

async function B2(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}let t=document.activeElement,a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="fixed",a.style.left="-9999px",document.body.appendChild(a);try{return a.select(),document.execCommand("copy")}catch{return!1}finally{a.remove(),t?.focus()}}

const Wf="";

const G2=[{name:"골드마스터반",category:"국내주식",description:"단타·스윙·중장기를 아우르는 종합 리딩. 직장인도 따라하기 쉬운 실전 전략.",tags:["단타","스윙","중장기","국내주"],href:"/vip?vip_product_id=2914806e-da08-4649-9ca3-7cda12f61089",initial:"G"},{name:"단타반",category:"프리미엄",description:"단기 매매에 특화된 실시간 리딩으로, 빠른 진입과 청산 타이밍을 집중 공략합니다.",tags:["단타","ETF","지수","레버리지","인버스"],href:"/vip?vip_product_id=9586ec78-0bdc-44e5-9f2d-a294556f904f",initial:"D"},{name:"꽃게선생반",category:"국내주식",description:"꽃게선생만의 독자적 관점과 종목 선정 노하우를 텔레그램으로 전달합니다.",tags:["종목분석","중장기","스윙","대형주","업종대표주","시장주도주"],href:"/vip?vip_product_id=e46427ed-40fc-4e10-91f8-12a83d34253e",initial:"K"},{name:"골드텐버거반",category:"중장기",description:"10배 성장 가능성에 집중한 중장기 투자 전략. 텐배거를 노리는 회원님을 위한 반.",tags:["중장기","텐배거","성장주"],href:"/vip?vip_product_id=7b415e2e-bc16-4e29-be7f-5bf11f446292",initial:"T"}];

const J2=[{title:"간편 회원가입 (본인인증 없음)",text:"아이디, 이름, 비밀번호, 휴대폰번호, 닉네임만 입력해 간편하게 가입"},{title:"무료 주식정보 즉시 열람",text:"시황, 관심 종목, 기본 분석 자료를 로그인 후 바로 확인"},{title:"VIP회원은 더 확실하게",text:"필요에 따라 VIP 반 또는 교육 영상을 추가로 이용"}];

const F2=[{title:"주식분석",text:"개별 종목 심층 분석",icon:"analysis"},{title:"주식교육",text:"기초부터 차근차근",icon:"education"},{title:"주식시황",text:"매일 시장 흐름 정리",icon:"market"},{title:"무료영상",text:"가입 회원 무료 제공",icon:"free"}];

const _2={analysis:qt,education:$a,market:rl,free:to,user:gt,wallet:da,ticket:za,star:fl,send:Oo};

const C2=[{title:"회원정보 확인 · 변경",text:"기본 회원정보를 확인하고 연락처, 닉네임, 비밀번호를 수정할 수 있습니다.",icon:"user"},{title:"포인트 충전",text:"교육영상 결제에 사용할 포인트를 미리 충전하고 잔액을 확인할 수 있습니다.",icon:"wallet"},{title:"쿠폰 리스트 · 등록",text:"보유 중인 쿠폰을 확인하고, 새로 발급받은 쿠폰 코드를 등록할 수 있습니다.",icon:"ticket"},{title:"이용 중인 VIP 서비스",text:"현재 가입 · 이용 중인 VIP 반 목록과 잔여 기간을 한눈에 확인할 수 있습니다.",icon:"star"},{title:"텔레그램 주소 확인",text:"실시간 리딩을 받는 텔레그램 초대 링크를 마이페이지에서 바로 확인할 수 있습니다.",icon:"send"}];

const Q2=["팝업 차단을 해제해 주세요.","카드 한도 초과 여부를 미리 확인해 주세요.","카드별 지원 여부와 승인 결과를 결제 화면에서 확인해 주세요.","분할결제는 카드별 금액 합계가 주문 금액과 같아야 합니다."];

const zn=[{bank:"국민은행",number:"967201-01-265087"},{bank:"기업은행",number:"280-890069-03704"},{bank:"농협은행",number:"167-01-511631"}];

const D2=[{label:"Android",href:"https://telegram.org/dl/android"},{label:"iOS",href:"https://telegram.org/dl/ios"},{label:"Windows",href:"https://telegram.org/dl/desktop/win64"},{label:"macOS",href:"https://telegram.org/dl/macos"}];

function ws(){let{active:e,setActive:t}=cu(Pv,".gd-step-nav"),[a,o]=(0,Es.useState)(null),[f,n]=(0,Es.useState)("");async function r(l,c){let d=await B2(c);o(d?l:null),n(d?`${l} 계좌번호를 복사했습니다.`:"복사하지 못했습니다. 계좌번호를 직접 선택해 복사해주세요.")}return(0,R.jsxs)("div",{className:"willclub-page legacy-page gd-page",id:"top",children:[(0,R.jsx)("a",{className:"skip-link",href:"#main-content",children:"본문 바로가기"}),(0,R.jsxs)("main",{className:"wc-container page-main gd-main",id:"main-content",children:[(0,R.jsxs)("div",{className:"breadcrumb","aria-label":"현재 위치",children:[(0,R.jsx)("a",{href:"/","aria-label":"홈",children:(0,R.jsx)(ea,{size:13})}),(0,R.jsx)(ke,{size:11,"aria-hidden":"true"}),(0,R.jsx)("span",{children:"이용방법"})]}),(0,R.jsxs)("div",{className:"page-heading",children:[(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{className:"eyebrow",children:"WILLCLUB GUIDE"}),(0,R.jsxs)("h1",{children:["이용방법",(0,R.jsx)("span",{className:"title-dot",children:"."})]}),(0,R.jsx)("p",{children:"남녀노소 누구나 알기 쉬운 이용방법"})]}),(0,R.jsx)("span",{className:"heading-caption",children:"YOUR FIRST STEP WITH WILLCLUB"})]}),(0,R.jsx)(et,{title:(0,R.jsxs)(R.Fragment,{children:["WILL CLUB,",(0,R.jsx)("br",{}),"어떻게 이용하나요?"]}),eyebrow:"WILLCLUB · HOW TO USE",label:"윌클럽 이용 안내"}),(0,R.jsx)("div",{className:"wc-banner-context",children:(0,R.jsx)("p",{children:"VIP 리딩부터 무료 정보, 교육 영상, 마이페이지까지 윌클럽의 모든 서비스를 한눈에 안내해 드립니다."})}),(0,R.jsx)("nav",{className:"gd-step-nav","aria-label":"이용방법 단계 탐색",children:Zs.map(({id:l,number:c,label:d})=>(0,R.jsxs)("a",{href:`#${l}`,className:e===l?"active":"","aria-current":e===l?"location":void 0,onClick:()=>t(l),children:[(0,R.jsx)("span",{children:c}),d]},l))}),(0,R.jsxs)("section",{className:"gd-section",id:"step1",children:[(0,R.jsxs)("div",{className:"gd-section-side",children:[(0,R.jsxs)("p",{className:"section-kicker",children:[(0,R.jsx)("span",{children:"01"})," VIP SERVICE"]}),(0,R.jsx)("h2",{children:"VIP 반 선택"}),(0,R.jsxs)("p",{children:["나에게 맞는 서비스를",(0,R.jsx)("br",{}),"먼저 확인하세요."]})]}),(0,R.jsxs)("div",{className:"gd-section-body",children:[(0,R.jsx)("h3",{children:"윌클럽에서 운영중인 VIP 회원 반"}),(0,R.jsx)("p",{className:"gd-intro",children:"윌클럽은 다양한 VIP 반을 운영하며, 각 반은 텔레그램 실시간 리딩으로 운영됩니다. 투자 성향에 맞는 반을 선택한 뒤 상세 페이지에서 확인해 주세요."}),(0,R.jsx)("div",{className:"gd-vip-grid",children:G2.map((l,c)=>(0,R.jsxs)("article",{className:"gd-vip-card","data-vip-name":l.name,children:[(0,R.jsxs)("div",{className:"gd-vip-top",children:[(0,R.jsx)("span",{className:"gd-category",children:l.category}),(0,R.jsx)("span",{className:"gd-vip-initial","aria-hidden":"true",children:l.initial})]}),(0,R.jsxs)("span",{className:"gd-card-index",children:["0",c+1]}),(0,R.jsx)("h4",{children:l.name}),(0,R.jsx)("p",{children:l.description}),(0,R.jsx)("div",{className:"gd-tags",children:l.tags.map(d=>(0,R.jsxs)("span",{children:["#",d]},d))}),(0,R.jsxs)("a",{href:l.href,children:["상세 페이지 보기 ",(0,R.jsx)(rt,{size:15})]})]},l.name))}),(0,R.jsxs)("p",{className:"gd-info-note",children:[(0,R.jsx)(ua,{size:15,"aria-hidden":"true"}),(0,R.jsxs)("span",{children:["각 반 결제 후 텔레그램 초대 링크가 발송됩니다. 링크가 오지 않을 경우 ",(0,R.jsx)("a",{href:`${Wf}/myInfo`,children:"마이페이지"}),"에서 확인하실 수 있습니다."]})]})]})]}),(0,R.jsxs)("section",{className:"gd-section",id:"step2",children:[(0,R.jsxs)("div",{className:"gd-section-side",children:[(0,R.jsxs)("p",{className:"section-kicker",children:[(0,R.jsx)("span",{children:"02"})," MEMBERSHIP"]}),(0,R.jsxs)("h2",{children:["회원가입 ·",(0,R.jsx)("br",{}),"무료정보"]}),(0,R.jsxs)("p",{children:["간편한 가입으로 시작하는",(0,R.jsx)("br",{}),"윌클럽의 정보."]})]}),(0,R.jsxs)("div",{className:"gd-section-body",children:[(0,R.jsx)("h3",{children:"회원가입만해도 볼 수 있는 확실한 무료주식정보"}),(0,R.jsx)("p",{className:"gd-intro",children:"본인인증 없이 아이디, 이름, 비밀번호, 휴대폰번호, 닉네임만 입력하면 가입이 완료됩니다. 가입 즉시 무료 주식 정보를 열람할 수 있습니다."}),(0,R.jsx)("ol",{className:"gd-membership-list",children:J2.map((l,c)=>(0,R.jsxs)("li",{children:[(0,R.jsxs)("span",{className:"gd-membership-number",children:["0",c+1]}),(0,R.jsxs)("div",{children:[(0,R.jsx)("h4",{children:l.title}),(0,R.jsx)("p",{children:l.text})]}),c===2?(0,R.jsx)(Sr,{size:21,strokeWidth:1.3,"aria-hidden":"true"}):(0,R.jsx)(ke,{size:17,strokeWidth:1.4,"aria-hidden":"true"})]},l.title))}),(0,R.jsxs)("div",{className:"gd-actions",children:[(0,R.jsxs)("a",{className:"gd-button-primary",href:`${Wf}/guide`,title:"기존 윌클럽 사이트에서 회원가입",children:["회원가입하기 ",(0,R.jsx)(rt,{size:15})]}),(0,R.jsxs)("a",{className:"gd-button-secondary",href:"/freeInfo",children:["무료주식정보 보기 ",(0,R.jsx)(ne,{size:15})]})]})]})]}),(0,R.jsxs)("section",{className:"gd-section",id:"step3",children:[(0,R.jsxs)("div",{className:"gd-section-side",children:[(0,R.jsxs)("p",{className:"section-kicker",children:[(0,R.jsx)("span",{children:"03"})," LEARNING"]}),(0,R.jsx)("h2",{children:"주식교육영상"}),(0,R.jsxs)("p",{children:["원하는 강의만 골라",(0,R.jsx)("br",{}),"깊이 있는 배움으로."]})]}),(0,R.jsxs)("div",{className:"gd-section-body",children:[(0,R.jsx)("h3",{children:"주식교육영상 — 원하는 강의만 골라 보기"}),(0,R.jsx)("p",{className:"gd-intro",children:"주식분석, 주식교육, 주식시황, 무료영상 중 원하는 강의만 골라 결제해 시청할 수 있습니다. 카드 또는 포인트로 결제하며, 7일 동안 최대 3회 시청 가능합니다."}),(0,R.jsx)("div",{className:"gd-video-grid",children:F2.map(l=>{let c=_2[l.icon];return(0,R.jsxs)("a",{href:"/paidInfo",className:"gd-video-card",children:[(0,R.jsx)(c,{size:24,strokeWidth:1.4,"aria-hidden":"true"}),(0,R.jsx)("h4",{children:l.title}),(0,R.jsx)("p",{children:l.text}),(0,R.jsx)(rt,{size:14,className:"gd-video-arrow","aria-hidden":"true"})]},l.title)})})]})]}),(0,R.jsxs)("section",{className:"gd-section",id:"step4",children:[(0,R.jsxs)("div",{className:"gd-section-side",children:[(0,R.jsxs)("p",{className:"section-kicker",children:[(0,R.jsx)("span",{children:"04"})," MY ACCOUNT"]}),(0,R.jsx)("h2",{children:"마이페이지"}),(0,R.jsxs)("p",{children:["회원정보부터 서비스까지,",(0,R.jsx)("br",{}),"한곳에서 관리하세요."]})]}),(0,R.jsxs)("div",{className:"gd-section-body",children:[(0,R.jsx)("h3",{children:"마이페이지에서 모든 것을 관리하세요"}),(0,R.jsx)("p",{className:"gd-intro",children:"회원정보, 포인트, 쿠폰, VIP 서비스 현황, 텔레그램 주소까지 마이페이지에서 한눈에 관리할 수 있습니다."}),(0,R.jsx)("div",{className:"gd-mypage-list",children:C2.map(l=>{let c=_2[l.icon];return(0,R.jsxs)("a",{href:`${Wf}/myInfo`,children:[(0,R.jsx)("span",{className:"gd-mypage-icon",children:(0,R.jsx)(c,{size:22,strokeWidth:1.4,"aria-hidden":"true"})}),(0,R.jsxs)("div",{children:[(0,R.jsx)("h4",{children:l.title}),(0,R.jsx)("p",{children:l.text})]}),(0,R.jsx)(ke,{size:17,"aria-hidden":"true"})]},l.title)})}),(0,R.jsxs)("p",{className:"gd-info-note",children:[(0,R.jsx)(ua,{size:15,"aria-hidden":"true"}),(0,R.jsx)("span",{children:"마이페이지에서 회원정보와 서비스 이용 내역을 확인해주세요."})]})]})]}),(0,R.jsxs)("section",{className:"gd-section gd-last-section",id:"step5",children:[(0,R.jsxs)("div",{className:"gd-section-side",children:[(0,R.jsxs)("p",{className:"section-kicker",children:[(0,R.jsx)("span",{children:"05"})," PAYMENT & TELEGRAM"]}),(0,R.jsxs)("h2",{children:["결제 ·",(0,R.jsx)("br",{}),"텔레그램"]}),(0,R.jsxs)("p",{children:["결제 전 확인사항과",(0,R.jsx)("br",{}),"입장 방법을 안내합니다."]})]}),(0,R.jsxs)("div",{className:"gd-section-body",children:[(0,R.jsx)("h3",{children:"결제 방법 & 텔레그램 이용 안내"}),(0,R.jsx)("p",{className:"gd-intro",children:"VIP 회원 서비스는 카드 또는 무통장 입금, 주식교육영상은 카드 또는 포인트로 결제합니다. 결제 후 텔레그램에 입장하며, 링크가 없다면 마이페이지에서 확인할 수 있습니다."}),(0,R.jsxs)("div",{className:"gd-payment-grid",children:[(0,R.jsxs)("div",{className:"gd-payment-panel",children:[(0,R.jsxs)("h4",{children:[(0,R.jsx)(Pt,{size:20,strokeWidth:1.5,"aria-hidden":"true"}),"카드 · 무통장 결제"]}),(0,R.jsx)("ul",{className:"gd-payment-notes",children:Q2.map(l=>(0,R.jsxs)("li",{children:[(0,R.jsx)(kt,{size:13,"aria-hidden":"true"}),l]},l))}),(0,R.jsxs)("div",{className:"gd-bank-panel",children:[(0,R.jsx)("p",{className:"gd-bank-title",children:"무통장 입금 계좌"}),zn.map(l=>(0,R.jsxs)("div",{className:"gd-bank-row","data-bank":l.bank,children:[(0,R.jsx)("span",{children:l.bank}),(0,R.jsx)("code",{children:l.number}),(0,R.jsx)("button",{type:"button","data-copy-account":l.number,"data-copy-bank":l.bank,onClick:()=>r(l.bank,l.number),"aria-label":`${l.bank} 계좌번호 복사`,title:"계좌번호 복사",children:a===l.bank?(0,R.jsx)(kt,{size:15}):(0,R.jsx)(Gr,{size:15})})]},l.bank)),(0,R.jsx)("p",{className:"gd-bank-owner",children:"예금주 : (주)제이앤비주식사관학교"}),(0,R.jsx)("p",{className:"gd-copy-message",role:"status","aria-live":"polite",children:f})]})]}),(0,R.jsxs)("div",{className:"gd-telegram-panel",children:[(0,R.jsx)("span",{className:"gd-telegram-icon",children:(0,R.jsx)(Oo,{size:30,strokeWidth:1.3,"aria-hidden":"true"})}),(0,R.jsx)("p",{className:"eyebrow",children:"STAY CONNECTED"}),(0,R.jsx)("h4",{children:"텔레그램 설치 · 입장"}),(0,R.jsxs)("p",{children:["VIP 반 결제 후 발송되는 초대 링크로 입장하거나, ",(0,R.jsx)("a",{href:`${Wf}/myInfo`,children:"마이페이지"}),"에서 링크를 확인하세요."]}),(0,R.jsx)("div",{className:"gd-telegram-downloads",children:D2.map(l=>(0,R.jsxs)("a",{href:l.href,children:[(0,R.jsx)(Br,{size:13,"aria-hidden":"true"}),l.label,(0,R.jsx)(rt,{size:12,"aria-hidden":"true"})]},l.label))}),(0,R.jsx)("p",{className:"gd-telegram-note",children:"※ 운영 중인 모든 반의 텔레그램에 입장해 주시기 바랍니다. 링크가 오지 않으면 마이페이지에서 확인 가능합니다."})]})]})]})]}),(0,R.jsxs)("aside",{className:"gd-start-panel",children:[(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{className:"gd-start-eyebrow",children:"YOUR NEXT CHAPTER"}),(0,R.jsx)("h2",{children:"지금 바로 윌클럽을 시작해 보세요"}),(0,R.jsxs)("p",{children:["회원가입 후 무료 정보를 먼저 체험하고,",(0,R.jsx)("br",{className:"desktop-break"})," 필요에 따라 VIP 반과 교육 영상을 이용하세요."]})]}),(0,R.jsxs)("div",{className:"gd-start-actions",children:[(0,R.jsxs)("a",{href:`${Wf}/guide`,className:"gd-start-primary",title:"기존 윌클럽 사이트에서 회원가입",children:["회원가입하기 ",(0,R.jsx)(rt,{size:15})]}),(0,R.jsxs)("a",{href:"/vip",className:"gd-start-secondary",children:["VIP 반 둘러보기 ",(0,R.jsx)(ne,{size:15})]})]})]})]}),(0,R.jsxs)("a",{className:"floating-contact",href:"#live-chat","aria-label":"실시간 상담센터 열기",children:[(0,R.jsx)(Ia,{size:21,strokeWidth:1.6}),(0,R.jsx)("span",{children:"실시간 상담센터"}),(0,R.jsx)(ne,{size:14})]})]})}

const uu={capturedAt:"2026-10-09",sourceUrl:"",posts:[{id:"research-market",title:"지수의 방향보다 업종과 실적의 연결을 읽는 법",expert:"gold",expertName:"골드마스터",date:"2026.10.09",href:"/freeInfo?post=research-market",locked:!1,body:'<h2><span style="color:#875764;font-size:28px">지수의 방향보다 업종과 실적의 연결을 읽는 법</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">한국 주식시장의 지수는 시장의 평균적인 방향을 보여주지만, 투자자가 체감하는 종목 흐름과 같지는 않을 수 있습니다. 시가총액이 큰 일부 종목의 움직임이 지수를 좌우하면 다수 업종의 약세가 가려지기도 합니다. 한국거래소는 지수와 주식 등 시장 통계를 제공하므로, 대표지수만 보지 말고 업종별 지수와 구성 종목 흐름을 나란히 확인하는 것이 출발점입니다. 이 글은 2026년 10월 9일 현재 실시간 시세를 단정하지 않으며, 확인 가능한 공시 기준일은 2026년 10월 7일입니다.</span></p><p><span style="font-size:18px;color:#63505a">첫째, 상승이 얼마나 넓게 퍼졌는지 점검합니다. 지수가 오르더라도 상승 종목이 소수 대형주에 집중되고 여러 업종의 상대수익률이 부진하다면 시장 전반의 위험선호가 강해졌다고 보기 어렵습니다. 하루 등락보다 여러 주에 걸쳐 업종별 상대 흐름이 이어지는지, 업종 안에서도 상승 종목 수가 늘어나는지, 거래가 소수 종목에 쏠리는지를 함께 봅니다. 이런 폭과 지속성이 약하면 지수 상승의 기반도 좁을 수 있습니다.</span></p><p><span style="font-size:18px;color:#63505a">둘째, 업종의 주가 움직임을 실적의 방향과 맞춰 봅니다. 매출 증가만으로 실적 개선을 판단하지 말고 영업이익률, 수주와 출하, 가동률, 재고처럼 업종의 사업구조에 맞는 지표를 확인해야 합니다. 비교 기간은 계절성을 고려해 전년 동기와 직전 분기를 함께 놓고, 일회성 손익이나 기저효과가 개선을 부풀렸는지도 살핍니다. 이미 알려진 실적보다 중요한 것은 이후 전망이 상향되는지, 혹은 기대가 낮아지는지입니다.</span></p><p><span style="font-size:18px;color:#63505a">셋째, 이익의 질을 확인합니다. 순이익이 늘어도 영업활동 현금흐름이 따라오지 않거나 매출채권·재고가 매출보다 빠르게 쌓이면 현금 회수와 재고 부담을 따져볼 필요가 있습니다. 투자 지출과 차입 부담이 큰 업종은 이익 증가가 실제 재무 여력 개선으로 이어지는지도 봐야 합니다. 금융감독원 전자공시시스템에서 사업·반기·분기보고서와 잠정실적 공시를 확인하고, 연결 기준인지 별도 기준인지와 공시 기간을 맞춰 비교하면 숫자의 착시를 줄일 수 있습니다.</span></p><p><span style="font-size:18px;color:#63505a">넷째, 좋은 실적이 좋은 주가 성과를 보장하지 않는다는 점에서 밸류에이션과 거시 변수를 함께 봅니다. 시장이 이미 높은 성장 기대를 가격에 반영했다면 실적이 증가해도 전망이 기대에 못 미치는 순간 주가가 약해질 수 있습니다. 금리 변화는 미래 이익의 현재가치와 자금조달 비용에, 원화 환율은 수출기업의 원화 환산 매출과 수입 원가에 서로 다른 방향으로 작용할 수 있습니다. 업종별 수혜·부담 구조를 확인하고, 현재 배수가 과거 수준이나 이익 전망과 비교해 어떤 기대를 전제하는지 점검해야 합니다.</span></p><p><span style="font-size:18px;color:#63505a">반대 시나리오도 미리 세워두면 해석이 균형을 얻습니다. 실적 개선이 일부 대형 수출주에만 집중되거나 환율 효과가 약해지고, 원가·재고 부담이 커지면 지수 강세가 업종 전반의 펀더멘털 개선으로 확산되지 않을 수 있습니다. 반대로 지수가 주춤해도 업종 안에서 실적 전망이 개선되는 기업이 늘고 상승 폭이 넓어지면 지수만으로 포착되지 않는 회복 신호일 수 있습니다. 따라서 지수 방향, 업종 확산, 실적 전망과 현금흐름, 밸류에이션, 금리·환율을 함께 추적하되 어느 한 지표로 결론을 고정하지 않는 것이 좋습니다. 투자교육 목적의 일반 정보이며 확정 전망이나 매수·매도 지시가 아닙니다.</span></p>',referenceDate:"2026-10-07",sources:[{title:"한국거래소 KRX Data Marketplace 이용안내",url:"https://data.krx.co.kr/contents/MDC/INFO/informationController/MDCINFO002.cmd",date:"2026-10-09 (서비스 안내 확인일; 본문에 실시간 시세 수치 미인용)"},{title:"금융감독원 전자공시시스템(DART)",url:"https://dart.fss.or.kr/",date:"2026-10-07 (확인 페이지에 표시된 최신 공시 날짜)"}],titleStyle:{color:"#e41e2b",fontSize:28,fontWeight:900}},{id:"research-ai",title:"AI 반도체 투자 사이클: 수요에서 설비투자와 수익성까지",expert:"ggot",expertName:"꽃게선생",date:"2026.10.09",href:"/freeInfo?post=research-ai",locked:!1,body:'<h2><span style="color:#305c80;font-size:28px">AI 반도체 투자 사이클: 수요에서 설비투자와 수익성까지</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">AI 반도체 투자 사이클은 AI 서비스에 대한 기대가 곧바로 반도체 기업의 이익이 되는 구조가 아니다. 클라우드 사업자와 기업의 실제 사용량과 매출화가 서버·가속기 구매를 뒷받침하고, 그 주문이 웨이퍼 생산과 첨단 패키징 수요로 이어져야 공급업체 매출로 인식된다. 데이터센터 설비가 지어지고 전력과 네트워크가 갖춰지는 시간도 필요하므로 수요 신호, 주문, 매출 사이에는 시차가 생긴다.</span></p><p><span style="font-size:18px;color:#63505a">수요를 볼 때는 투자 발표보다 고객의 실제 집행과 사용률을 구분해야 한다. TSMC는 2026년 10월 8일 발표에서 2026년 1~9월 매출이 전년 같은 기간보다 41.1% 늘었지만, 9월 매출은 8월보다 0.6% 감소했다고 밝혔다. 이는 반도체 공급망의 강한 매출 흐름을 보여주는 자료지만, 월별 매출만으로 AI 관련 매출 비중이나 최종 고객의 투자수익을 판별할 수는 없다. 매출 증가율과 AI 수요의 지속성을 동일시하지 않는 것이 출발점이다. [1]</span></p><p><span style="font-size:18px;color:#63505a">수요가 생산능력 투자로 연결되는 과정에서는 병목과 시간차가 핵심이다. 고객 주문이 강해지면 칩 설계사는 생산 물량을 확보하고, 제조사와 패키징 업체는 장비·공장·공정에 투자한다. 하지만 설비투자는 매출이 확인되기 전에 집행될 수 있고, 신규 생산능력이 가동될 무렵에는 고객 주문이나 제품 구성이 달라질 수도 있다. 따라서 공급 부족이 확인된다는 이유만으로 모든 업체의 추가 투자가 같은 수준의 수익으로 돌아온다고 볼 수 없다.</span></p><p><span style="font-size:18px;color:#63505a">수익성은 밸류체인 내 위치에 따라 다르게 나타난다. 칩 설계사는 제품 성능과 가격, 판매 구성의 영향을 크게 받고, 파운드리는 가동률과 수율, 첨단 공정의 생산 믹스가 중요하다. 패키징·메모리 업체는 각자의 병목과 투자 규모가 변수다. 설비가 늘면 감가상각과 운영비도 뒤따르므로 매출이 증가해도 투자비와 비용이 더 빨리 늘면 현금흐름이나 이익률은 개선되지 않을 수 있다. 전체 매출이 아니라 매출총이익률, 영업이익률, 영업현금흐름과 투자 지출을 함께 확인해야 한다.</span></p><p><span style="font-size:18px;color:#63505a">사이클을 점검할 때는 주요 고객사의 데이터센터 투자계획이 실제 집행으로 이어지는지, 가속기·메모리 수요가 공급업체의 생산능력과 함께 증가하는지, 파운드리 가동률과 첨단 패키징 공급이 어떻게 변하는지 살펴볼 만하다. 여기에 재고와 납기, 수주 취소·이연, 설비투자와 감가상각의 증가 속도, 이익률 및 영업현금흐름을 겹쳐 보면 수요 확대가 공급업체의 경제적 이익으로 전환되는지를 더 입체적으로 볼 수 있다. 단일 지표의 호조보다 여러 단계의 연결이 유지되는지가 중요하다.</span></p><p><span style="font-size:18px;color:#63505a">반대 시나리오도 분명하다. 고객의 설비가 먼저 늘어난 뒤 AI 서비스의 사용료·광고·생산성 개선이 비용을 정당화하지 못하면 구매와 증설이 늦춰질 수 있다. 자체 칩이나 추론 효율 개선이 외부 가속기 수요를 낮출 수 있고, 전력·데이터센터 구축 지연이 칩 사용을 막을 수도 있다. NVIDIA는 2026년 2월 25일 제출한 FY2026 10-K에서 매출의 일부가 소수 고객에 집중되어 있고, 고객 주문이 취소·변경·지연될 수 있다고 공시했다. 이는 수요 전망이 강하더라도 주문과 매출 사이의 위험을 점검해야 함을 보여준다. [2] 자료 기준일은 2026년 10월 8일이며, 투자교육 목적의 구조 분석으로 확정 전망이나 매수 지시가 아니다.</span></p>',referenceDate:"2026-10-08",sources:[{title:"TSMC September 2026 Revenue Report",url:"https://pr.tsmc.com/english/news/3343",date:"2026-10-08"},{title:"NVIDIA Corporation FY2026 Form 10-K (SEC filing; filed February 25, 2026)",url:"https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",date:"2026-02-25"}],titleStyle:{color:"#0961e8",fontSize:24,fontWeight:800}},{id:"research-rates",title:"금리와 주가, 할인율과 이익 전망을 함께 읽는 법",expert:"gold",expertName:"골드마스터",date:"2026.10.09",href:"/freeInfo?post=research-rates",locked:!1,body:'<h2><span style="color:#397769;font-size:28px">금리와 주가, 할인율과 이익 전망을 함께 읽는 법</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">금리가 오르면 주가가 반드시 내리고, 금리가 내리면 반드시 오른다고 단정하기 어렵습니다. 주식의 가치는 앞으로 기대되는 현금흐름을 투자자가 요구하는 수익률로 할인한 결과입니다. 이 수익률에는 안전자산 금리와 주식 보유에 필요한 위험 보상이 함께 들어갑니다. 그래서 금리 상승은 다른 조건이 같을 때 현재 가치를 낮추지만, 동시에 경기와 기업 이익 전망이 좋아졌다는 신호일 수도 있습니다. 연준 연구도 금리·수익률뿐 아니라 주식 위험 프리미엄과 기대 배당이 정책 변화의 주가 전달 경로라고 설명합니다. [1]</span></p><p><span style="font-size:18px;color:#63505a">할인율을 볼 때는 중앙은행의 단기 정책금리 하나만 보지 말고, 실제 주가 평가에 반영되는 만기별 시장금리와 물가를 뺀 실질금리, 주식 위험 프리미엄을 나눠 살펴야 합니다. 특히 이익이 먼 미래에 집중된 기업은 장기 금리나 위험 보상의 변화에 더 민감할 수 있습니다. 반대로 금리 상승이 예상보다 강한 성장과 높은 이익으로 이어진다면 할인율 부담을 이익 증가가 상쇄할 수 있습니다. ECB의 미국 주식 분석은 적절한 만기의 금리와 위험 프리미엄, 기대 배당을 함께 고려해야 하는 이유를 보여 줍니다. [2]</span></p><p><span style="font-size:18px;color:#63505a">이익 전망은 금리의 반대편에 놓인 핵심 변수입니다. 금리가 내려가더라도 경기 침체 우려 때문에 매출·마진 전망이 더 크게 악화되면 주가는 하락할 수 있습니다. 반대로 금리가 높아도 수요가 견조하고 가격 결정력이 유지되며 이익 추정치가 상향 조정되면 주가가 버틸 여지가 있습니다. 기업의 차입 구조와 만기도 확인할 필요가 있습니다. 변동금리 부채나 가까운 시기의 차환 부담이 큰 기업은 금리 변화가 이자비용과 현금흐름에 더 빨리 반영될 수 있습니다. ECB 분석에서 강한 이익 기대와 낮은 위험 프리미엄이 금리 상승의 부담을 완충한 사례도 있었지만, 이는 미국 시장의 당시 사례이지 모든 시장에 적용되는 법칙은 아닙니다. [2]</span></p><p><span style="font-size:18px;color:#63505a">실제로는 네 가지를 함께 추적하면 해석이 선명해집니다. 첫째, 국채 수익률 곡선과 실질금리가 어느 만기에서 움직이는지 봅니다. 둘째, 기업별·시장 전체의 향후 이익 추정치가 상향되는지 하향되는지 확인합니다. 셋째, 영업이익률·매출 전망과 이자비용, 차환 일정이 어떻게 변하는지 점검합니다. 넷째, 회사채 신용 스프레드와 주식 위험 프리미엄, 변동성 지표를 통해 투자자가 요구하는 위험 보상이 커지는지 살핍니다. 금리 하락과 이익 추정치 개선이 함께 나타나고 위험 보상도 안정되는 경우와, 금리 하락이 침체 신호와 이익 하향 조정을 동반하는 경우는 같은 ‘금리 하락’이라도 주가에 다른 함의를 가집니다.</span></p><p><span style="font-size:18px;color:#63505a">반대 시나리오도 반드시 열어 두어야 합니다. 금리가 예상보다 올라 주가가 눌릴 것이라는 해석은 성장률과 이익 전망이 예상보다 강해지는 상황에서는 빗나갈 수 있습니다. 반대로 금리 인하가 주가에 호재라는 해석도, 인하 배경이 급격한 수요 위축이나 신용 악화라면 성립하지 않을 수 있습니다. 또 정책 발표와 시장 반응의 방향이 어긋날 때는 이미 가격에 반영된 기대와 발표가 새로 전한 경기 정보, 위험 선호의 변화를 구분해야 합니다. 따라서 금리와 주가의 동행 여부만으로 원인을 단정하기보다 금리 변화의 이유와 이익 추정치의 방향을 대조하는 편이 낫습니다. [1]</span></p><p><span style="font-size:18px;color:#63505a">이 글의 근거로 확인한 최신 자료 기준일은 2026년 5월입니다. 연준 자료는 2026년 5월 FEDS 목록에서 확인했으며 논문 본문은 2025년 8월 25일자입니다. ECB 분석의 통계 기준일은 2024년 12월 11일입니다. 이 자료들은 금리·이익·위험 보상의 구조를 설명하는 근거이며 2026년 10월 9일의 실시간 금리나 주가 흐름을 검증한 것은 아닙니다. 투자교육 목적의 일반 정보이며 확정적 전망이나 매수·매도 지시가 아닙니다.</span></p>',referenceDate:"2026-05",sources:[{title:"The Effect of the Federal Reserve on the Stock Market: Magnitudes, Channels and Shocks (FEDS 2026-023; paper dated August 25, 2025)",url:"https://www.federalreserve.gov/econres/feds/files/2026023pap.pdf",date:"2026-05 (Federal Reserve FEDS listing; paper dated 2025-08-25)"},{title:"What’s behind the resilience of US equity prices – market structure, earnings expectations or equity risk premia? (ECB Economic Bulletin, Issue 8/2024)",url:"https://www.ecb.europa.eu/press/economic-bulletin/focus/2025/html/ecb.ebbox202408_01~d2c7bd5eba.en.html",date:"2024-12-11 (통계 기준일; Economic Bulletin Issue 8/2024)"}],titleStyle:{color:"#129344",fontSize:22,fontWeight:700}},{id:"research-fx",title:"원·달러 환율은 수출기업과 국내 주식에 어떻게 전달될까",expert:"ggot",expertName:"꽃게선생",date:"2026.10.09",href:"/freeInfo?post=research-fx",locked:!1,body:'<h2><span style="color:#a47738;font-size:28px">원·달러 환율은 수출기업과 국내 주식에 어떻게 전달될까</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">원/달러 환율이 오른다는 것은 달러 한 단위를 사는 데 더 많은 원화가 필요해져 원화 가치가 약해졌다는 뜻입니다. 이 변화는 수출기업의 매출과 주식시장에 한 방향으로만 작용하지 않습니다. 아래 내용은 2025년 9월 5일 한국은행 공개 강의와 2016년 12월 BIS 분석을 바탕으로 한 구조 설명이며, 2026년 10월 9일의 실시간 환율이나 시장 상황을 확인한 내용은 아닙니다. [한국은행, 2025-09-05]</span></p><p><span style="font-size:18px;color:#63505a">수출 대금을 달러로 받고 원화로 비용을 지출하는 기업은 환율 상승 시 같은 달러 매출을 원화로 환산한 금액이 커질 수 있습니다. 달러 표시 수출가격을 낮춰 해외 수요를 늘릴 여지도 있지만, 계약 통화와 가격 조정 방식에 따라 소비자가격에 반영되는 폭은 달라지고 판매량 반응에도 시간이 걸립니다. BIS는 환율 변화가 무역가격에 완전히 전가되지 않을 수 있고, 수입 투입재 비중이 큰 수출기업은 환율 이익이 줄 수 있다고 설명합니다. [BIS, 2016-12-11]</span></p><p><span style="font-size:18px;color:#63505a">반대편에는 비용과 재무상태표가 있습니다. 원유·부품·장비처럼 달러로 사오는 투입재 비용, 달러 차입금의 원화 환산액, 해외 자회사 비용은 원화 약세 때 커질 수 있습니다. 달러 매출과 달러 비용이 함께 있는 기업은 자연헤지로 일부 영향을 상쇄할 수 있고 선물환 등 헤지 계약도 변동성을 줄일 수 있지만, 헤지 비율과 만기, 계약 조건에 따라 실제 손익은 다릅니다. 따라서 ‘수출기업’이라는 분류만으로 수혜 여부를 단정하기보다 매출·원가의 통화 구성과 외화부채를 살펴야 합니다. [한국은행, 2025-09-05] [BIS, 2016-12-11]</span></p><p><span style="font-size:18px;color:#63505a">주식에는 이익 경로와 할인율·자금흐름 경로가 동시에 작동합니다. 시장이 원화 약세를 수출기업의 원화 환산 매출 증가로 해석하면 해당 기업의 이익 전망에 우호적일 수 있습니다. 반면 수입물가를 밀어 올리고 물가·금리 부담을 키우거나, 달러 강세가 세계적인 위험회피와 동반되면 외국인 자금 흐름과 주식의 요구수익률이 불리하게 바뀔 수 있습니다. BIS 분석은 신흥국에서 외화부채의 재무경로가 무역경로의 경기부양 효과를 일부 상쇄할 수 있으며 투자도 이 경로에 민감하다고 봤습니다. 이는 국가 단위 연구 결과이지 한국 개별 기업이나 주가지수의 확정 전망은 아닙니다. [BIS, 2016-12-11]</span></p><p><span style="font-size:18px;color:#63505a">환율을 해석할 때는 원/달러 숫자만 보지 말고 수출 물량과 수출단가, 수입물가와 주요 원자재 가격, 기업 공시의 환율 민감도, 외화매출 대비 외화원가와 외화차입, 환헤지 정책을 함께 확인할 필요가 있습니다. 주식시장에서는 수출주와 내수·수입원가 민감 업종의 실적 전망이 어떻게 달라지는지, 외국인 매매와 금리·시장 변동성이 같은 방향의 위험 신호를 보내는지도 관찰 대상입니다. BIS가 무역경로와 부채경로를 구분하듯이, 무역 비중이 높은 기업과 외화부채가 큰 기업에 같은 환율 변화가 서로 다른 결과를 낼 수 있습니다. [한국은행, 2025-09-05] [BIS, 2016-12-11]</span></p><p><span style="font-size:18px;color:#63505a">반대 시나리오도 중요합니다. 원화 약세가 세계 경기 둔화나 위험회피에서 비롯되고 수출 주문이 약해지는 한편, 달러 원자재·부품 비용과 외화부채 부담이 매출 환산 효과보다 크게 나타나면 수출기업 이익과 국내 주식에 모두 부담일 수 있습니다. 반대로 해외 수요가 견조하고 달러 매출이 원화 비용보다 크며 외화부채가 제한된 기업은 환율 상승의 이익 경로가 상대적으로 뚜렷할 수 있습니다. 환율은 기업의 통화 노출, 가격 결정력, 수요와 시장 환경을 통해 전달됩니다. 이 글은 투자교육 목적이며 확정 전망이나 매수 지시가 아닙니다.</span></p>',referenceDate:"2025-09-05",sources:[{title:"한국은행 제1007회 한은금요강좌: 환율과 외환시장에 대한 이해",url:"https://www.bok.or.kr/portal/bbs/B0000217/view.do?nttId=10093542&oldMenuNo=201151&menuNo=200144&programType=multiCont&depth=200144&relate=Y",date:"2025-09-05"},{title:"BIS Quarterly Review: Does the financial channel of exchange rates offset the trade channel?",url:"https://www.bis.org/publications/qr-201612/does-financial-channel-exchange-rates-offset-trade-channel",date:"2016-12-11"}],titleStyle:{color:"#9823c9",fontSize:29,fontWeight:900}},{id:"research-earnings",title:"분기 실적, 매출에서 현금흐름까지 읽는 순서",expert:"gold",expertName:"골드마스터",date:"2026.10.09",href:"/freeInfo?post=research-earnings",locked:!1,body:'<h2><span style="color:#875764;font-size:28px">분기 실적, 매출에서 현금흐름까지 읽는 순서</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">분기 실적은 손익계산서의 맨 아래 숫자부터 보기보다 매출, 마진, 현금흐름 순으로 읽으면 원인을 따라가기 쉽습니다. 먼저 같은 회계기간끼리 비교할 기준을 정합니다. 전년 동기 비교는 계절성을 일부 걷어내는 데 도움이 되고, 직전 분기 비교는 변화의 속도를 보여줄 수 있지만 성수기·비수기 효과가 섞일 수 있습니다. 분기보고서의 재무제표뿐 아니라 경영진의 설명과 주석도 함께 읽어야 전체 맥락을 파악할 수 있습니다.[1] [2]</span></p><p><span style="font-size:18px;color:#63505a">첫째, 매출에서는 성장률만 보지 말고 무엇이 성장했는지 확인합니다. 판매량, 가격, 제품 구성, 환율, 인수·합병 효과가 각각 얼마나 기여했는지 회사의 설명과 부문별 공시를 대조합니다. 매출채권이 매출보다 빠르게 늘거나 반품·할인·계약자산 관련 설명이 달라졌다면 인식된 매출이 실제 회수로 이어지는 속도를 추가로 살펴볼 이유가 있습니다. 반대로 매출 증가율이 둔화해도 낮은 수익성의 거래를 줄였거나 일시적 환율 역풍이 작용했다면 사업의 질이 반드시 악화했다고 단정할 수 없습니다.</span></p><p><span style="font-size:18px;color:#63505a">둘째, 마진은 하나의 대표 비율만 보지 말고 매출총이익률에서 영업이익률까지 비용이 어떻게 쌓이는지 살핍니다. 매출총이익률 상승은 가격이나 제품 구성 개선과 연결될 수 있지만, 영업이익률이 낮아졌다면 판매·연구개발·관리 비용이 매출보다 빠르게 늘었는지 확인합니다. 회사가 제시하는 비GAAP 조정에서 반복적으로 발생하는 비용을 제외했는지 살피고, 기간별로 같은 정의를 적용해야 합니다. 조정 전후 수치는 서로 바꿔 쓸 수 없습니다.[1] 마진 개선도 지출 이연이나 일시적인 원가 하락에서 비롯됐다면 지속되지 않을 수 있으며, 마진 하락은 미래 생산능력을 위한 의도적 투자와 함께 나타날 수도 있습니다. 설명이 부문별 실적과 비용 항목에서 확인되는지가 핵심입니다.</span></p><p><span style="font-size:18px;color:#63505a">셋째, 현금흐름표에서 영업활동 현금흐름이 순이익과 어떻게 다른지 확인합니다. 간접법에서는 감가상각처럼 현금 유출이 아닌 비용을 조정하고, 매출채권·재고·매입채무 등 영업자산과 부채의 변동을 반영합니다. 따라서 이익은 늘었는데 영업현금흐름이 약해졌다면 매출채권 회수 지연이나 재고 축적처럼 운전자본이 원인인지, 세금·이자 지급이나 일회성 항목 때문인지 나눠 봅니다. 현금흐름은 투자활동과 재무활동으로도 구분되므로 설비투자, 자산 매각, 차입과 상환을 영업 현금과 혼동하지 않아야 합니다.[2]</span></p><p><span style="font-size:18px;color:#63505a">이 세 단계가 서로 다른 방향을 가리킬 때가 중요한 점검 지점입니다. 매출과 마진이 좋아져도 영업현금흐름이 계속 약하고 매출채권·재고가 쌓이면 현금 회수의 질을 의심해 볼 수 있습니다. 다만 성장기 기업이 재고를 선제 확보했거나 큰 고객의 결제 시점이 분기 경계에 걸렸다면 일시적 현상일 수도 있습니다. 반대로 현금흐름이 개선되어도 설비 매각이나 지급 시점 이동의 영향일 수 있으므로 한 분기만으로 추세를 확정하지 말고 여러 기간의 운전자본과 투자 지출을 함께 비교합니다. 잉여현금흐름을 계산할 때도 회사별 정의 차이를 확인하고 같은 기준으로 비교해야 합니다.</span></p><p><span style="font-size:18px;color:#63505a">마지막으로 경영진의 사업·재무상태 설명(MD&A)에서 전년 대비 변동 원인, 유동성, 알려진 추세와 불확실성을 찾아 숫자와 대조하고, 회계정책·추정 변경 및 비GAAP 조정은 주석에서 확인합니다. 경영진 설명은 맥락을 제공하지만 그 자체가 독립적인 검증은 아니므로 공시된 재무제표와 함께 판단해야 합니다.[1] 이 글의 자료 기준일은 확인한 공식 자료 중 가장 최근 공개일인 2021-01-25이며, 특정 기업의 최신 분기 실적이나 현재 시장 동향을 검증한 분석은 아닙니다. 투자교육 목적의 일반적 설명이며 확정 전망이나 매수 지시가 아닙니다.</span></p>',referenceDate:"2021-01-25",sources:[{title:"Investor Bulletin: How to Read a 10-K/10-Q",url:"https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/how-read",date:"2021-01-25"},{title:"Beginners' Guide to Financial Statement",url:"https://www.sec.gov/investor/pubs/begfinstmtguide.htm",date:"2007-02-05"}],titleStyle:{color:"#e56800",fontSize:25,fontWeight:800}},{id:"research-risk",title:"변동성 장세, 나눠 들어가는 것보다 먼저 정할 손실 관리 원칙",expert:"ggot",expertName:"꽃게선생",date:"2026.10.09",href:"/freeInfo?post=research-risk",locked:!1,body:'<h2><span style="color:#305c80;font-size:28px">변동성 장세, 나눠 들어가는 것보다 먼저 정할 손실 관리 원칙</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">변동성이 커지면 매수 시점을 한 번에 정하기보다 자금을 여러 시점으로 나누는 접근이 심리적 부담과 단기 가격 변동의 영향을 낮출 수 있다. 정기·분할 투자는 가격이 낮을 때 더 많은 수량을, 높을 때 더 적은 수량을 사게 하는 규칙을 제공하고, 하락장에서 즉흥적으로 매도하거나 상승장에서 추격 매수하는 행동을 줄이는 데 도움을 줄 수 있다. 다만 이것은 손실 방지 장치가 아니라 진입 시점과 행동을 관리하는 방식이다. [1] [2]</span></p><p><span style="font-size:18px;color:#63505a">분할 매수 계획을 세울 때는 먼저 총 투자 가능액과 감내 가능한 손실을 정하고, 이어서 회차·기간 또는 재검토 조건을 사전에 문서화하는 편이 낫다. 미리 정한 규칙 없이 하락할 때마다 투입액을 늘리면 분할 접근이 사실상 물타기로 변할 수 있다. 매수 재원이 이미 준비된 목돈이라면 투자 대기자금이 현금으로 남아 있는 동안 상승분을 놓칠 수 있고, 거래 수수료가 건별로 부과되면 비용이 늘어날 수 있다. 반면 급여 등에서 새로 생기는 정기 투자금은 목돈을 일부러 현금으로 보유하는 경우와 구분해서 생각해야 한다. [2]</span></p><p><span style="font-size:18px;color:#63505a">손실 관리의 출발점은 가격 전망보다 포트폴리오가 감당할 수 있는 규모다. 투자 기간과 가까운 시일 내 필요한 현금을 따로 고려하고, 단일 종목·업종·자산에 쏠린 비중을 점검해야 한다. 분산과 자산배분은 특정 위험을 낮출 수 있지만 시장 전체가 하락할 때 손실을 없애지는 않는다. 비상자금이 부족해 하락장에서 보유자산을 급히 팔아야 하는 상황도 투자 계획의 취약점이다. [1] [2]</span></p><p><span style="font-size:18px;color:#63505a">관찰할 지표는 하나의 매매 신호가 아니라 위험 상태를 함께 보여주는 점검표로 활용한다. 과거 가격 변동을 반영하는 실현변동성은 실제 흔들림이 커졌는지, 옵션 가격에 반영된 내재변동성은 시장 참여자의 예상 변동성이 높아졌는지 살펴보는 단서다. 여기에 거래량과 호가 간격 같은 유동성 징후, 시장 상승·하락 종목의 폭, 보유자산 간 동조화, 포트폴리오 고점 대비 낙폭을 함께 보면 변동성뿐 아니라 매도·재조정의 어려움과 집중 위험도 파악하기 쉽다. 어느 지표도 방향이나 저점을 확정해 주지는 않는다.</span></p><p><span style="font-size:18px;color:#63505a">반대 시나리오도 계획에 넣어야 한다. 시장이 짧게 흔들린 뒤 빠르게 반등하면 현금 대기분을 나눠 투입하는 방식이 일시투자보다 수익 기회를 놓칠 수 있다. 반대로 변동성 확대가 일회성 소음이 아니라 기업의 이익 전망 악화나 시장 전반의 위험 재평가와 함께 이어진다면, 정해진 일정대로 계속 사는 것만으로는 손실을 통제하지 못한다. 보유 근거가 훼손됐는지, 자산 간 상관관계와 유동성이 달라졌는지 재점검하고, 사전에 정한 손실 한도나 비중 조정 기준에 따라 계획을 수정할 여지를 두어야 한다.</span></p><p><span style="font-size:18px;color:#63505a">따라서 분할 접근의 핵심은 가격을 맞히는 능력이 아니라 투입 일정, 현금 필요, 보유 비중, 재검토 조건을 미리 정해 감정적 결정을 줄이는 데 있다. 변동성과 낙폭이 커질 때는 계획을 기계적으로 반복하기보다 투자 이유와 위험 한도가 여전히 유효한지 확인하는 절차가 필요하다. 이 글은 투자교육 목적이며 확정적인 시장 전망이나 개인별 투자 조언이 아니다.</span></p>',referenceDate:"2026-10-05",sources:[{title:"World Investor Week 2026: Investor Bulletin — Investor.gov (SEC 등 공동 안내)",url:"https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/world-investor-week-2026-investor-bulletin",date:"2026-10-05"},{title:"The Benefits and Limitations of Dollar-Cost Averaging — FINRA",url:"https://syndication.finra.org/content/benefits-and-limitations-dollar-cost-averaging",date:"2026-05-19"}],titleStyle:{color:"#243686",fontSize:21,fontWeight:600}},{id:"research-etf",title:"지수 ETF와 개별 종목, 무엇을 기준으로 다르게 읽을까",expert:"gold",expertName:"골드마스터",date:"2026.10.09",href:"/freeInfo?post=research-etf",locked:!1,body:'<h2><span style="color:#397769;font-size:28px">지수 ETF와 개별 종목, 무엇을 기준으로 다르게 읽을까</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">지수 ETF와 개별 종목은 둘 다 주식시장에서 거래되지만, 확인해야 할 대상은 다릅니다. 개별 종목을 보유하면 한 기업의 사업과 재무성과에 직접 노출됩니다. 지수 ETF는 기초지수가 정한 여러 자산을 담은 펀드의 지분을 보유하는 방식입니다. 다만 ETF라는 이름만으로 폭넓은 분산을 가정해서는 안 됩니다. 어떤 지수를 추종하는지, 종목을 어떤 기준으로 편입하고 가중하는지부터 확인해야 합니다. 지수 ETF도 추종 지수와 구성 자산이 겪는 시장 위험을 함께 부담합니다. [1] [2]</span></p><p><span style="font-size:18px;color:#63505a">ETF를 볼 때 첫 질문은 ‘지수의 성격은 무엇인가’입니다. 시장 전체를 대표하는 지수인지, 한 업종이나 테마에 집중하는지, 시가총액 가중 방식인지 살펴봅니다. 시가총액 가중 지수는 몸집이 큰 기업의 비중이 커질 수 있으므로, 편입 종목 수가 많아도 상위 종목이나 특정 업종에 노출이 몰릴 수 있습니다. 상위 보유 종목 비중과 업종 비중을 같이 보면 분산의 실질을 더 잘 파악할 수 있습니다. [2]</span></p><p><span style="font-size:18px;color:#63505a">다음은 ETF가 약속한 지수를 얼마나 잘 따라가는지입니다. 운용 보수만 보지 말고 거래·운용 비용을 포함한 총비용과 추적오차를 확인합니다. 추적오차는 ETF 순자산가치의 움직임이 기초지수와 얼마나 달라지는지 보여 주며, 표본 추종이나 비용 등이 차이를 만들 수 있습니다. 거래할 때는 시장가격과 실시간 추정 순자산가치(iNAV)의 차이인 괴리율, 매수·매도 호가 차이인 스프레드도 살펴야 합니다. 괴리율이 커지거나 스프레드가 넓으면 ETF의 거래가격과 보유자산 가치 사이의 차이 또는 거래비용이 커질 수 있습니다. [1] [2]</span></p><p><span style="font-size:18px;color:#63505a">개별 종목은 지수의 분산 효과가 없으므로 기업 자체의 변화가 투자 판단에 더 직접적으로 연결됩니다. 매출과 영업이익의 추세뿐 아니라 현금흐름, 부채 부담, 이익률의 지속성, 주식 수 증가나 희석, 지배구조와 주요 사업 위험을 함께 확인합니다. 실적이 성장하더라도 현재 주가에 기대가 얼마나 반영됐는지는 별개의 문제입니다. 같은 업종 또는 기업의 과거 범위와 비교한 밸류에이션 지표, 예컨대 주가수익비율이나 기업가치 대비 영업이익 배수도 성장률과 현금흐름의 질을 함께 놓고 해석해야 합니다.</span></p><p><span style="font-size:18px;color:#63505a">관찰의 반대 시나리오도 미리 세워둘 필요가 있습니다. 지수 ETF는 단일 기업의 악재 충격을 여러 구성 종목으로 나누지만, 시장 전체 하락이나 지수 내 대형 업종의 동반 약세에는 방어막이 되지 않습니다. 상위 종목 집중도가 높은 지수라면 몇몇 대형주의 하락이 ETF 전체에 큰 영향을 줄 수도 있습니다. 반대로 개별 기업이 예상보다 빠른 실적 개선과 경쟁력 강화를 보이면, 해당 기업 주식은 넓은 지수 ETF보다 더 좋은 성과를 낼 수 있습니다. 그러나 기업 고유 위험 때문에 반대 결과도 더 크게 나타날 수 있습니다.</span></p><p><span style="font-size:18px;color:#63505a">따라서 ETF를 읽을 때는 기초지수와 편입·가중 방식, 집중도, 추적오차, 총비용, 괴리율과 스프레드를 점검하고, 개별 종목을 읽을 때는 실적과 현금흐름, 부채, 기업가치, 사업·지배구조 위험을 추적하는 것이 핵심입니다. 비교 시에는 같은 기간과 통화, 배당·분배금 처리 기준을 맞춰야 착시를 줄일 수 있습니다. 특정 ETF나 기업의 최신 시세·실적을 검증한 글이 아니므로 현재 시장 동향에 대한 단정은 포함하지 않았습니다. 투자교육 목적의 일반 설명이며 확정적인 전망이나 매수 지시가 아닙니다.</span></p>',referenceDate:"2023-02-23 (SEC 자료 확인일; KCIE 페이지 게시일 미표기, 작성일과 별개)",sources:[{title:"Updated Investor Bulletin: Exchange-Traded Funds (ETFs)",url:"https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24",date:"2023-02-23"},{title:"ETF 성공투자를 위해서는 꼭 알아두어야 할 용어들",url:"https://www.kcie.or.kr/mobile/guide/3/18/web_view?series_idx=&content_idx=518",date:"게시일 확인 불가"}],titleStyle:{color:"#af8500",fontSize:26,fontWeight:900}},{id:"research-volume",title:"거래량이 말해주지 않는 것: 수급 해석의 다섯 가지 착각",expert:"ggot",expertName:"꽃게선생",date:"2026.10.09",href:"/freeInfo?post=research-volume",locked:!1,body:'<h2><span style="color:#a47738;font-size:28px">거래량이 말해주지 않는 것: 수급 해석의 다섯 가지 착각</span></h2><p><span style="color:#8f7781;font-size:16px">시장·기업·투자 원칙을 차분하게 읽는 자료</span></p><p><span style="font-size:18px;color:#63505a">거래량이 갑자기 늘었다고 곧바로 매집이나 상승 신호로 해석하는 것은 첫 번째 착각이다. 체결에는 매수자와 매도자가 함께 존재하므로 거래량 자체는 어느 쪽이 우세했는지 알려주지 않는다. 한국거래소 투자자별 거래실적은 투자자 구분별 매도·매수·순매수 수량과 거래대금을 따로 제시한다. 따라서 총거래량과 순매수는 서로 다른 질문에 답하는 지표다. [1]</span></p><p><span style="font-size:18px;color:#63505a">두 번째 착각은 특정 투자자 집단의 순매수를 곧바로 ‘큰손의 확신’으로 읽는 것이다. KRX 통계는 금융투자·보험·투신·사모·은행·연기금 등과 개인·외국인 등의 범주별 집계를 제공하지만, 집계값만으로는 각 거래자의 목적이나 보유기간, 헤지 여부를 알 수 없다. 순매수는 해당 분류에서 매수와 매도의 차이가 난 결과이지, 집단 전체의 전망이나 이후 가격 방향을 보증하는 신호가 아니다. [1]</span></p><p><span style="font-size:18px;color:#63505a">세 번째는 거래량 증가와 가격 상승을 같은 의미로 보는 것이다. 같은 수준의 거래량도 매수·매도 주문의 불균형, 호가 잔량 같은 시장 깊이, 체결이 일어난 시간대에 따라 가격 영향이 달라질 수 있다. 연준 연구진이 미 국채시장의 2025년 4월 변동을 비교한 분석에서는 거래량 급증이 비슷해도 한쪽 방향 주문 흐름의 크기와 지속성, 유동성 여건에 따라 가격 움직임이 달랐다. 이는 국채 사례이지 한국 주식시장에 그대로 적용할 법칙은 아니지만, 거래량 하나만으로 가격 압력을 설명하기 어렵다는 점을 보여준다. [2]</span></p><p><span style="font-size:18px;color:#63505a">실제 관찰에서는 거래량이 평소 같은 시간대보다 얼마나 달라졌는지, 거래대금도 함께 늘었는지, 순매수의 주체와 지속성이 어떤지, 가격이 거래 증가에 얼마나 반응했는지를 나란히 볼 필요가 있다. 가능하다면 호가 잔량이나 스프레드처럼 유동성을 보여주는 자료도 확인한다. 거래량이 큰데 가격 변화가 작다면 반대편 유동성이 충분했을 가능성도 있다. 반대로 거래량이 평범해도 호가가 얇고 한쪽 주문이 몰리면 작은 체결에도 가격이 크게 움직일 수 있다. 이 지표들은 방향을 확정하는 공식이 아니라 관찰의 맥락을 보완한다. [2]</span></p><p><span style="font-size:18px;color:#63505a">네 번째 착각은 하루의 수급 수치를 추세로 확대하는 것이다. 장 시작·마감, 지수 또는 포트폴리오 재조정, 공시와 뉴스, 파생상품 만기 등으로 특정 구간의 체결이 몰릴 수 있다. 하루 순매수만으로 누적 포지션 변화나 다음 날 행동을 추론하기보다, 비교 가능한 시간대와 여러 기간의 흐름을 확인하고 가격 반응이 반복되는지도 살펴야 한다. 다만 기간을 늘린다고 원인까지 저절로 밝혀지는 것은 아니다.</span></p><p><span style="font-size:18px;color:#63505a">반대 시나리오도 함께 세워보자. 거래량 증가와 외국인 순매수가 관찰돼도 그 순매수가 헤지·차익거래 성격이거나 다른 투자자의 매도로 상쇄될 수 있다. 반대로 거래량이 줄어도 매도 압력이 약해져 가격이 버티는 상황일 수 있다. 관찰한 지표가 어떤 설명을 지지하는지뿐 아니라 어떤 대안 설명과 맞는지 점검하고, 추가 자료가 없으면 결론을 유보하는 편이 낫다. 이 글은 투자교육 목적이며 확정적인 전망이나 매매 지시가 아니다.</span></p>',referenceDate:"2025-11-03",sources:[{title:"투자자별 거래실적 - 한국거래소 KRX Data Marketplace",url:"https://data.krx.co.kr/contents/MDC/MDI/outerLoader/index.cmd?screenId=MDCSTAT022",date:"게시일 미표기(2026-10-09 확인)"},{title:"Order Flow Imbalances and Amplification of Price Movements: Evidence from U.S. Treasury Markets - Federal Reserve FEDS Notes",url:"https://www.federalreserve.gov/econres/notes/feds-notes/order-flow-imbalances-and-amplification-of-price-movements-evidence-from-u-s-treasury-markets-20251103.html",date:"2025-11-03"}],titleStyle:{color:"#cf2777",fontSize:23,fontWeight:700}}],notices:[{id:"reading-guide",title:"시장 자료를 읽기 전, 출처와 기준일을 먼저 확인하세요",expert:"gold",expertName:"골드마스터",date:"2026.10.09",href:"/freeInfo?post=reading-guide",body:`시장 데이터는 확인 시점과 발표 시점이 다를 수 있습니다. 각 게시글 하단의 자료 기준일과 원문 링크를 함께 확인해주세요.

본문은 공개 자료에 근거한 분석과 금융교육 콘텐츠입니다. 기업의 실적이나 거시 변수에 대한 해석은 투자자의 기간과 위험 수준에 따라 달라질 수 있습니다.

특정 전문가의 실제 발언으로 표시하지 않은 AI 작성 콘텐츠이며, 게시 전 운영자의 확인이 필요합니다.`,titleStyle:{color:"#d52333",fontSize:23,fontWeight:800}}]};

const du=uu.posts;

const iu=uu.notices;

function eq(e){return e.normalize("NFC").trim().toLocaleLowerCase("ko-KR")}

function tq(e,t,a){if(t!=="all"&&e.expert!==t)return!1;let o=eq(a).split(/\s+/).filter(Boolean),f=eq(`${e.title} ${e.expertName}`);return o.every(n=>f.includes(n))}

function Is(e,t){return e.filter(a=>tq(a,t.expert,t.query)).filter(a=>t.access==="all"||(t.access==="members"?a.locked:!a.locked)).slice().sort((a,o)=>t.sort==="oldest"?a.date.localeCompare(o.date):o.date.localeCompare(a.date))}

function aq(e,t,a){return e.filter(o=>tq(o,t,a))}

const zs=[{key:"all",label:"전체보기"},{key:"gold",label:"골드마스터"},{key:"ggot",label:"꽃게선생"}];

function oq(e,t){return t==="all"?e.length:e.filter(a=>a.expert===t).length}

function gf({text:e,titleStyle:t}){let a=t?.fontSize??21,o={"--article-title-color":t?.color??"#912c2f","--article-title-size":`${a}px`,"--article-title-mobile-size":`${Math.round(a*.86)}px`,"--article-title-weight":t?.fontWeight??700};return(0,$2.jsx)("span",{className:"wc-article-title",style:o,children:e})}

function Ks({posts:e=du,notices:t=iu,initialExpert:a="all"}){let[o,f]=(0,Pe.useState)(a),[n,r]=(0,Pe.useState)(""),[l,c]=(0,Pe.useState)(""),[d,b]=(0,Pe.useState)("all"),[A,m]=(0,Pe.useState)("newest"),[h,x]=(0,Pe.useState)(null),E=(0,Pe.useRef)(null),M=(0,Pe.useRef)(null),i=(0,Pe.useMemo)(()=>Is(e,{expert:o,query:l,access:d,sort:A}),[e,o,l,d,A]),u=(0,Pe.useMemo)(()=>Is(e,{expert:"all",query:"",access:"all",sort:A}),[e,A]),p=(0,Pe.useMemo)(()=>new Set(i.map(V=>V.id)),[i]),U=(0,Pe.useMemo)(()=>aq(t,o,l),[t,o,l]),I=(0,Pe.useMemo)(()=>new Set(U.map(V=>V.id)),[U]),W=o!=="all"||!!l||d!=="all",Z=zs.find(V=>V.key===o)?.label??"전체보기";(0,Pe.useEffect)(()=>{let q=new URLSearchParams(window.location.hash.slice(1)||window.location.search).get("expert_id");q==="8bd3703c-2f94-4067-b366-f97323116386"&&f("gold"),q==="a92bf325-8f3a-48b1-b656-4b323c5f5d69"&&f("ggot")},[]),(0,Pe.useEffect)(()=>{if(!h||!E.current)return;let V=document.activeElement,q=E.current;return q.showModal(),M.current?.focus(),()=>{q.open&&q.close(),V?.focus()}},[h]);function X(){f("all"),r(""),c(""),b("all"),m("newest")}return(0,Y.jsxs)("div",{className:"willclub-page legacy-page fi-page",id:"top",children:[(0,Y.jsx)("a",{className:"skip-link",href:"#main-content",children:"본문 바로가기"}),(0,Y.jsxs)("main",{className:"wc-container page-main fi-main",id:"main-content",children:[(0,Y.jsxs)("div",{className:"breadcrumb","aria-label":"현재 위치",children:[(0,Y.jsx)("a",{href:"/","aria-label":"홈",children:(0,Y.jsx)(ea,{size:13})}),(0,Y.jsx)(ke,{size:11,"aria-hidden":"true"}),(0,Y.jsx)("span",{children:"무료주식정보"})]}),(0,Y.jsxs)("div",{className:"page-heading fi-heading",children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)("p",{className:"eyebrow",children:"WILLCLUB INSIGHT"}),(0,Y.jsxs)("h1",{children:["무료주식정보",(0,Y.jsx)("span",{className:"title-dot",children:"."})]}),(0,Y.jsx)("p",{children:"전문가의 시선으로, 시장을 더 깊이 이해하는 시간."})]}),(0,Y.jsxs)("form",{className:"fi-search",role:"search",onSubmit:V=>{V.preventDefault(),c(n.trim())},children:[(0,Y.jsx)(qt,{size:17,"aria-hidden":"true"}),(0,Y.jsx)("label",{className:"fi-sr-only",htmlFor:"article-search",children:"게시글 제목 또는 전문가 검색"}),(0,Y.jsx)("input",{id:"article-search",type:"search",placeholder:"궁금한 주제나 전문가를 검색해보세요",value:n,onChange:V=>r(V.target.value)}),(0,Y.jsx)("button",{type:"button",className:"fi-search-clear","aria-label":"검색어 지우기",hidden:!n,onClick:()=>{r(""),c("")},children:(0,Y.jsx)($e,{size:15})}),(0,Y.jsx)("button",{type:"submit",className:"fi-search-submit",children:"검색"})]})]}),(0,Y.jsx)(et,{title:(0,Y.jsxs)(Y.Fragment,{children:["시장을 읽는 정보,",(0,Y.jsx)("br",{}),"신뢰로 이어지는 통찰."]}),eyebrow:"WILLCLUB · FREE INSIGHT",label:"무료주식정보 소개"}),(0,Y.jsx)("p",{className:"wc-banner-context",children:"골드마스터와 꽃게선생의 시선으로 시장을 만나보세요."}),(0,Y.jsxs)("div",{className:"fi-browser",id:"article-library",children:[(0,Y.jsxs)("nav",{className:"fi-expert-tabs","aria-label":"전문가별 게시글 선택",children:[zs.map(V=>(0,Y.jsxs)("button",{type:"button","data-expert-filter":V.key,className:`fi-tab${o===V.key?" active":""}`,"aria-pressed":o===V.key,onClick:()=>f(V.key),children:[V.key==="all"?(0,Y.jsx)($a,{size:16,"aria-hidden":"true"}):(0,Y.jsx)("span",{className:`fi-expert-dot ${V.key}`,"aria-hidden":"true"}),V.label,(0,Y.jsx)("span",{className:"fi-tab-count",children:oq(e,V.key)})]},V.key)),(0,Y.jsx)("span",{className:"fi-tabs-caption",children:"EXPERT PERSPECTIVES"})]}),(0,Y.jsxs)("div",{className:"fi-toolbar",children:[(0,Y.jsxs)("div",{className:"fi-results","aria-live":"polite","aria-atomic":"true",children:[(0,Y.jsx)("span",{className:"fi-toolbar-dot"}),(0,Y.jsx)("span",{className:"fi-result-label",children:W?"검색 결과":"전체 게시글"}),(0,Y.jsx)("strong",{className:"fi-result-count",children:i.length}),(0,Y.jsx)("span",{children:"개"}),(0,Y.jsxs)("span",{className:"fi-query-label",hidden:!l,children:["‘",l,"’"]}),(0,Y.jsx)("span",{className:"fi-total-note",children:"공지 별도"})]}),(0,Y.jsxs)("div",{className:"fi-controls",children:[(0,Y.jsxs)("button",{className:"fi-reset",type:"button",hidden:!W,onClick:X,children:[(0,Y.jsx)(al,{size:13}),"초기화"]}),(0,Y.jsxs)("label",{className:"fi-select-label",children:[(0,Y.jsx)(Uf,{size:14,"aria-hidden":"true"}),(0,Y.jsx)("span",{className:"fi-sr-only",children:"게시글 공개 상태"}),(0,Y.jsxs)("select",{id:"access-filter",value:d,onChange:V=>b(V.target.value),children:[(0,Y.jsx)("option",{value:"all",children:"전체 게시글"}),(0,Y.jsx)("option",{value:"public",children:"공개 글"}),(0,Y.jsx)("option",{value:"members",children:"회원 확인 글"})]}),(0,Y.jsx)(wa,{size:12,"aria-hidden":"true"})]}),(0,Y.jsxs)("label",{className:"fi-select-label fi-sort-label",children:[(0,Y.jsx)("span",{className:"fi-sr-only",children:"게시글 정렬"}),(0,Y.jsxs)("select",{id:"date-sort",value:A,onChange:V=>m(V.target.value),children:[(0,Y.jsx)("option",{value:"newest",children:"최신순"}),(0,Y.jsx)("option",{value:"oldest",children:"오래된순"})]}),(0,Y.jsx)(wa,{size:12,"aria-hidden":"true"})]})]})]}),(0,Y.jsxs)("section",{className:"fi-notices","aria-labelledby":"notices-title",hidden:U.length===0,children:[(0,Y.jsx)("h2",{className:"fi-sr-only",id:"notices-title",children:"게시판 공지"}),t.map(V=>(0,Y.jsxs)("a",{className:"fi-notice",href:`/freeInfo?post=${V.id}`,"data-notice-id":V.id,"data-expert":V.expert,hidden:!I.has(V.id),children:[(0,Y.jsxs)("span",{className:"fi-notice-badge",children:[(0,Y.jsx)(Tr,{size:12,"aria-hidden":"true"}),"공지"]}),(0,Y.jsx)("span",{className:"fi-notice-title",title:V.title,children:(0,Y.jsx)(gf,{text:V.title,titleStyle:V.titleStyle})}),(0,Y.jsx)("span",{className:`fi-notice-expert ${V.expert}`,children:V.expertName}),(0,Y.jsx)("time",{dateTime:V.date.replaceAll(".","-"),children:V.date}),(0,Y.jsx)(ke,{size:14,"aria-hidden":"true"})]},V.id))]}),(0,Y.jsxs)("section",{className:"fi-board","aria-labelledby":"board-title",children:[(0,Y.jsxs)("h2",{className:"fi-sr-only",id:"board-title",children:[Z," 게시글 목록"]}),(0,Y.jsxs)("div",{className:"fi-list-header","aria-hidden":"true",children:[(0,Y.jsx)("span",{children:"NO."}),(0,Y.jsx)("span",{children:"게시글 제목"}),(0,Y.jsx)("span",{children:"전문가"}),(0,Y.jsx)("span",{children:"작성일"})]}),(0,Y.jsx)("div",{className:"fi-article-list",role:"list",children:u.map(V=>(0,Y.jsxs)("div",{className:"fi-article-row",role:"listitem","data-article-id":V.id,"data-expert":V.expert,"data-date":V.date,"data-locked":String(V.locked),hidden:!p.has(V.id),children:[(0,Y.jsx)("span",{className:"fi-row-number","aria-hidden":"true",children:e.length-e.findIndex(q=>q.id===V.id)}),(0,Y.jsx)("div",{className:"fi-title-cell",children:V.locked?(0,Y.jsxs)("button",{type:"button",className:"fi-article-link","data-locked-post":V.id,title:V.title,onClick:()=>x(V),"aria-label":`${V.title}, 회원 확인 필요`,children:[(0,Y.jsx)(Tt,{size:14,"aria-hidden":"true"}),(0,Y.jsx)(gf,{text:V.title,titleStyle:V.titleStyle})]}):(0,Y.jsxs)("a",{className:"fi-article-link",href:`/freeInfo?post=${V.id}`,title:V.title,children:[(0,Y.jsx)(gf,{text:V.title,titleStyle:V.titleStyle}),(0,Y.jsx)(rt,{size:13,"aria-hidden":"true"})]})}),(0,Y.jsxs)("span",{className:`fi-author ${V.expert}`,children:[(0,Y.jsx)("span",{"aria-hidden":"true"}),V.expertName]}),(0,Y.jsx)("time",{dateTime:V.date.replaceAll(".","-"),children:V.date})]},V.id))}),(0,Y.jsxs)("div",{className:"fi-empty",hidden:i.length>0,children:[(0,Y.jsx)("span",{className:"fi-empty-icon",children:(0,Y.jsx)(qt,{size:25,strokeWidth:1.4})}),(0,Y.jsx)("h3",{children:"검색 조건에 맞는 게시글이 없습니다."}),(0,Y.jsx)("p",{children:"다른 검색어를 입력하거나 선택한 필터를 초기화해보세요."}),(0,Y.jsxs)("button",{type:"button",className:"fi-empty-reset",onClick:X,children:["전체 게시글 보기 ",(0,Y.jsx)(ne,{size:15})]})]})]}),(0,Y.jsx)("div",{className:"fi-board-footer",children:(0,Y.jsx)("span",{className:"fi-page-indicator","aria-label":"현재 페이지 1",children:"1"})})]})]}),(0,Y.jsxs)("a",{className:"floating-contact",href:"#live-chat","aria-label":"실시간 상담센터 열기",children:[(0,Y.jsx)(Ia,{size:21,strokeWidth:1.6}),(0,Y.jsx)("span",{children:"실시간 상담센터"}),(0,Y.jsx)(ne,{size:14})]}),(0,Y.jsxs)("dialog",{className:"fi-access-dialog",ref:E,"aria-labelledby":"access-dialog-title","aria-describedby":"access-dialog-description",onCancel:()=>x(null),onClick:V=>{V.target===V.currentTarget&&x(null)},children:[(0,Y.jsx)("button",{type:"button",className:"fi-dialog-close","aria-label":"안내 닫기",ref:M,onClick:()=>x(null),children:(0,Y.jsx)($e,{size:20})}),(0,Y.jsx)("span",{className:"fi-dialog-icon",children:(0,Y.jsx)(Tt,{size:25,strokeWidth:1.5})}),(0,Y.jsx)("p",{className:"eyebrow",children:"MEMBER ACCESS"}),(0,Y.jsx)("h2",{id:"access-dialog-title",children:"회원 확인이 필요한 게시글입니다."}),(0,Y.jsx)("p",{className:"fi-dialog-post-title",children:h?.title??"선택한 게시글"}),(0,Y.jsx)("p",{id:"access-dialog-description",children:"로그인 후 이용하실 수 있습니다."}),(0,Y.jsxs)("a",{className:"fi-dialog-action",href:`/freeInfo?post=${h?.id??""}`,children:["게시글 확인 ",(0,Y.jsx)(rt,{size:16})]})]})]})}

function ys(e){let t=e.replace(/<(script|style|iframe|object|embed|svg|math|form|button|input|textarea|select|meta|link|base)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,"").replace(/<(script|style|iframe|object|embed|svg|math|form|button|input|textarea|select|meta|link|base)\b[^>]*\/?\s*>/gi,"");return t=t.replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,"").replace(/\s+(srcdoc|formaction)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,""),t=t.replace(/\s+(href|src)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,(a,o,f)=>{let n=f.replace(/^["']|["']$/g,"").replace(/&#(?:x([0-9a-f]+)|(\d+));?/gi,(r,l,c)=>String.fromCharCode(parseInt(l??c,l?16:10))).replace(/[\u0000-\u0020]/g,"");return/^(https?:\/\/|\/|#|mailto:|data:image\/(?:png|jpeg|webp|gif);base64,)/i.test(n)?a:""}),t=t.replace(/\s+style\s*=\s*("[^\"]*"|'[^']*')/gi,(a,o)=>{let f=o.slice(1,-1).split(";").map(n=>{let r=n.indexOf(":");return[n.slice(0,r).trim().toLowerCase(),n.slice(r+1).trim()]}).filter(([n,r])=>(n==="color"||n==="background-color")&&/^(#[0-9a-f]{3,8}|rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\))$/i.test(r)||n==="font-size"&&/^\d{2}px$/.test(r)&&parseInt(r)>=12&&parseInt(r)<=48||n==="font-weight"&&/^(bold|[4-9]00)$/.test(r)||n==="font-style"&&r==="italic"||n==="text-decoration"&&r==="underline").map(([n,r])=>n+":"+r).join(";");return f?' style="'+f+'"':""}),t}

const Ov=e=>e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");

function sl({value:e="",className:t="ex-research-body"}){let a=/<(?:p|h[1-6]|ul|ol|blockquote|div|strong|b|img|a)\b/i.test(e)?ys(e):e.split(`

`).filter(Boolean).map(o=>"<p>"+Ov(o).replaceAll(`
`,"<br>")+"</p>").join("");return(0,rq.jsx)("article",{className:t,dangerouslySetInnerHTML:{__html:a}})}

function eb({id:e,onBack:t}){let a=[...du,...iu].find(o=>o.id===e);return a?(0,Ke.jsx)("div",{className:"willclub-page legacy-page",children:(0,Ke.jsxs)("main",{className:"wc-container page-main ex-free-detail",children:[(0,Ke.jsxs)("button",{className:"ex-back",onClick:t,children:[(0,Ke.jsx)(mt,{size:16}),"무료주식정보 목록"]}),(0,Ke.jsx)("p",{className:"eyebrow",children:"WILLCLUB RESEARCH"}),(0,Ke.jsx)("h1",{children:(0,Ke.jsx)(gf,{text:a.title,titleStyle:a.titleStyle})}),(0,Ke.jsxs)("p",{className:"ex-detail-meta",children:[a.expertName," · 작성일 ",a.date]}),(0,Ke.jsx)(sl,{value:a.body??""}),a.referenceDate&&(0,Ke.jsxs)("p",{className:"ex-research-date",children:["자료 확인 기준: ",a.referenceDate," · 작성일과 자료 기준일은 다를 수 있습니다."]}),a.sources?.length?(0,Ke.jsxs)("section",{className:"ex-research-sources",children:[(0,Ke.jsx)("h2",{children:"참고 자료"}),a.sources.map((o,f)=>(0,Ke.jsxs)("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",children:["[",f+1,"] ",o.title,(0,Ke.jsx)(eo,{size:14})]},o.url))]}):null,a.sources?.length?(0,Ke.jsx)("p",{className:"ex-research-disclosure",children:"공개 자료를 바탕으로 시장과 투자 원칙을 살펴보는 교육 콘텐츠입니다. 자료의 기준일과 원문을 확인하고, 투자 판단은 다양한 근거를 함께 검토해주세요."}):null]})}):(0,Ke.jsxs)("main",{className:"wc-container page-main",children:[(0,Ke.jsx)("h1",{children:"게시글을 찾을 수 없습니다."}),(0,Ke.jsx)("button",{className:"ex-back",onClick:t,children:"목록으로"})]})}

const nu={EXPERTS:{goldmaster:{name:"골드마스터",role:"매매의 대가",tagline:"정보력과 타이밍이 핵심. 시키는 대로 따라만 하시면 됩니다.",monogram:"G"},ggotge:{name:"꽃게선생",role:"맥점 포착",tagline:"대형주·업종대표주·시장주도주를 맥점에서 콕 찍어 드립니다.",monogram:"C"}},SUB_CATEGORIES:[{id:"analysis",label:"주식분석"},{id:"education",label:"주식교육"},{id:"market",label:"주식시황"},{id:"free",label:"무료영상"}],TOP_TABS:[{id:"all",label:"전체영상"},{id:"free",label:"무료영상"},{id:"goldmaster",label:"골드마스터"},{id:"ggotge",label:"꽃게선생"}],VIDEOS:[{id:"gm-m1",title:"이번 주 시장 브리핑 — 핵심만",expert:"goldmaster",sub:"market",paid:!0,price:99e3,duration:"18:32",views:0,publishedAt:"2026-10-09T14:00:00+09:00",summary:"한국 주식시장을 점검할 때 지수 등락에 그치지 않고 업종 확산도, 실적의 질, 밸류에이션과 거시 변수까지 함께 살피는 기준을 정리합니다.",description:`한국 주식시장의 지수는 시장의 평균적인 방향을 보여주지만, 투자자가 체감하는 종목 흐름과 같지는 않을 수 있습니다. 시가총액이 큰 일부 종목의 움직임이 지수를 좌우하면 다수 업종의 약세가 가려지기도 합니다. 한국거래소는 지수와 주식 등 시장 통계를 제공하므로, 대표지수만 보지 말고 업종별 지수와 구성 종목 흐름을 나란히 확인하는 것이 출발점입니다. 이 글은 2026년 10월 9일 현재 실시간 시세를 단정하지 않으며, 확인 가능한 공시 기준일은 2026년 10월 7일입니다.

첫째, 상승이 얼마나 넓게 퍼졌는지 점검합니다. 지수가 오르더라도 상승 종목이 소수 대형주에 집중되고 여러 업종의 상대수익률이 부진하다면 시장 전반의 위험선호가 강해졌다고 보기 어렵습니다. 하루 등락보다 여러 주에 걸쳐 업종별 상대 흐름이 이어지는지, 업종 안에서도 상승 종목 수가 늘어나는지, 거래가 소수 종목에 쏠리는지를 함께 봅니다. 이런 폭과 지속성이 약하면 지수 상승의 기반도 좁을 수 있습니다.

둘째, 업종의 주가 움직임을 실적의 방향과 맞춰 봅니다. 매출 증가만으로 실적 개선을 판단하지 말고 영업이익률, 수주와 출하, 가동률, 재고처럼 업종의 사업구조에 맞는 지표를 확인해야 합니다. 비교 기간은 계절성을 고려해 전년 동기와 직전 분기를 함께 놓고, 일회성 손익이나 기저효과가 개선을 부풀렸는지도 살핍니다. 이미 알려진 실적보다 중요한 것은 이후 전망이 상향되는지, 혹은 기대가 낮아지는지입니다.

셋째, 이익의 질을 확인합니다. 순이익이 늘어도 영업활동 현금흐름이 따라오지 않거나 매출채권·재고가 매출보다 빠르게 쌓이면 현금 회수와 재고 부담을 따져볼 필요가 있습니다. 투자 지출과 차입 부담이 큰 업종은 이익 증가가 실제 재무 여력 개선으로 이어지는지도 봐야 합니다. 금융감독원 전자공시시스템에서 사업·반기·분기보고서와 잠정실적 공시를 확인하고, 연결 기준인지 별도 기준인지와 공시 기간을 맞춰 비교하면 숫자의 착시를 줄일 수 있습니다.

넷째, 좋은 실적이 좋은 주가 성과를 보장하지 않는다는 점에서 밸류에이션과 거시 변수를 함께 봅니다. 시장이 이미 높은 성장 기대를 가격에 반영했다면 실적이 증가해도 전망이 기대에 못 미치는 순간 주가가 약해질 수 있습니다. 금리 변화는 미래 이익의 현재가치와 자금조달 비용에, 원화 환율은 수출기업의 원화 환산 매출과 수입 원가에 서로 다른 방향으로 작용할 수 있습니다. 업종별 수혜·부담 구조를 확인하고, 현재 배수가 과거 수준이나 이익 전망과 비교해 어떤 기대를 전제하는지 점검해야 합니다.

반대 시나리오도 미리 세워두면 해석이 균형을 얻습니다. 실적 개선이 일부 대형 수출주에만 집중되거나 환율 효과가 약해지고, 원가·재고 부담이 커지면 지수 강세가 업종 전반의 펀더멘털 개선으로 확산되지 않을 수 있습니다. 반대로 지수가 주춤해도 업종 안에서 실적 전망이 개선되는 기업이 늘고 상승 폭이 넓어지면 지수만으로 포착되지 않는 회복 신호일 수 있습니다. 따라서 지수 방향, 업종 확산, 실적 전망과 현금흐름, 밸류에이션, 금리·환율을 함께 추적하되 어느 한 지표로 결론을 고정하지 않는 것이 좋습니다. 투자교육 목적의 일반 정보이며 확정 전망이나 매수·매도 지시가 아닙니다.`,hue:25,author:"골드마스터",referenceDate:"2026-10-07",sources:[{title:"한국거래소 KRX Data Marketplace 이용안내",url:"https://data.krx.co.kr/contents/MDC/INFO/informationController/MDCINFO002.cmd",date:"2026-10-09 (서비스 안내 확인일; 본문에 실시간 시세 수치 미인용)"},{title:"금융감독원 전자공시시스템(DART)",url:"https://dart.fss.or.kr/",date:"2026-10-07 (확인 페이지에 표시된 최신 공시 날짜)"}]},{id:"gm-a1",title:"유리기판 밸류체인 완전 분석",expert:"goldmaster",sub:"analysis",paid:!0,price:7e5,duration:"42:18",views:0,publishedAt:"2026-10-09T13:00:00+09:00",summary:"AI 서비스 수요가 반도체 주문과 설비투자를 거쳐 기업별 수익으로 이어지는 경로와, 사이클을 점검할 지표 및 반대 시나리오를 살펴본다.",description:`AI 반도체 투자 사이클은 AI 서비스에 대한 기대가 곧바로 반도체 기업의 이익이 되는 구조가 아니다. 클라우드 사업자와 기업의 실제 사용량과 매출화가 서버·가속기 구매를 뒷받침하고, 그 주문이 웨이퍼 생산과 첨단 패키징 수요로 이어져야 공급업체 매출로 인식된다. 데이터센터 설비가 지어지고 전력과 네트워크가 갖춰지는 시간도 필요하므로 수요 신호, 주문, 매출 사이에는 시차가 생긴다.

수요를 볼 때는 투자 발표보다 고객의 실제 집행과 사용률을 구분해야 한다. TSMC는 2026년 10월 8일 발표에서 2026년 1~9월 매출이 전년 같은 기간보다 41.1% 늘었지만, 9월 매출은 8월보다 0.6% 감소했다고 밝혔다. 이는 반도체 공급망의 강한 매출 흐름을 보여주는 자료지만, 월별 매출만으로 AI 관련 매출 비중이나 최종 고객의 투자수익을 판별할 수는 없다. 매출 증가율과 AI 수요의 지속성을 동일시하지 않는 것이 출발점이다. [1]

수요가 생산능력 투자로 연결되는 과정에서는 병목과 시간차가 핵심이다. 고객 주문이 강해지면 칩 설계사는 생산 물량을 확보하고, 제조사와 패키징 업체는 장비·공장·공정에 투자한다. 하지만 설비투자는 매출이 확인되기 전에 집행될 수 있고, 신규 생산능력이 가동될 무렵에는 고객 주문이나 제품 구성이 달라질 수도 있다. 따라서 공급 부족이 확인된다는 이유만으로 모든 업체의 추가 투자가 같은 수준의 수익으로 돌아온다고 볼 수 없다.

수익성은 밸류체인 내 위치에 따라 다르게 나타난다. 칩 설계사는 제품 성능과 가격, 판매 구성의 영향을 크게 받고, 파운드리는 가동률과 수율, 첨단 공정의 생산 믹스가 중요하다. 패키징·메모리 업체는 각자의 병목과 투자 규모가 변수다. 설비가 늘면 감가상각과 운영비도 뒤따르므로 매출이 증가해도 투자비와 비용이 더 빨리 늘면 현금흐름이나 이익률은 개선되지 않을 수 있다. 전체 매출이 아니라 매출총이익률, 영업이익률, 영업현금흐름과 투자 지출을 함께 확인해야 한다.

사이클을 점검할 때는 주요 고객사의 데이터센터 투자계획이 실제 집행으로 이어지는지, 가속기·메모리 수요가 공급업체의 생산능력과 함께 증가하는지, 파운드리 가동률과 첨단 패키징 공급이 어떻게 변하는지 살펴볼 만하다. 여기에 재고와 납기, 수주 취소·이연, 설비투자와 감가상각의 증가 속도, 이익률 및 영업현금흐름을 겹쳐 보면 수요 확대가 공급업체의 경제적 이익으로 전환되는지를 더 입체적으로 볼 수 있다. 단일 지표의 호조보다 여러 단계의 연결이 유지되는지가 중요하다.

반대 시나리오도 분명하다. 고객의 설비가 먼저 늘어난 뒤 AI 서비스의 사용료·광고·생산성 개선이 비용을 정당화하지 못하면 구매와 증설이 늦춰질 수 있다. 자체 칩이나 추론 효율 개선이 외부 가속기 수요를 낮출 수 있고, 전력·데이터센터 구축 지연이 칩 사용을 막을 수도 있다. NVIDIA는 2026년 2월 25일 제출한 FY2026 10-K에서 매출의 일부가 소수 고객에 집중되어 있고, 고객 주문이 취소·변경·지연될 수 있다고 공시했다. 이는 수요 전망이 강하더라도 주문과 매출 사이의 위험을 점검해야 함을 보여준다. [2] 자료 기준일은 2026년 10월 8일이며, 투자교육 목적의 구조 분석으로 확정 전망이나 매수 지시가 아니다.`,hue:210,author:"골드마스터",referenceDate:"2026-10-08",sources:[{title:"TSMC September 2026 Revenue Report",url:"https://pr.tsmc.com/english/news/3343",date:"2026-10-08"},{title:"NVIDIA Corporation FY2026 Form 10-K (SEC filing; filed February 25, 2026)",url:"https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",date:"2026-02-25"}]},{id:"gm-e1",title:"수급으로 읽는 매매 타이밍",expert:"goldmaster",sub:"education",paid:!0,price:33e4,duration:"48:22",views:0,publishedAt:"2026-10-09T12:00:00+09:00",summary:"금리 변화가 주가에 미치는 영향은 할인율뿐 아니라 기업 이익 전망과 위험 프리미엄이 함께 결정하므로 세 축을 나눠 관찰해야 합니다.",description:`금리가 오르면 주가가 반드시 내리고, 금리가 내리면 반드시 오른다고 단정하기 어렵습니다. 주식의 가치는 앞으로 기대되는 현금흐름을 투자자가 요구하는 수익률로 할인한 결과입니다. 이 수익률에는 안전자산 금리와 주식 보유에 필요한 위험 보상이 함께 들어갑니다. 그래서 금리 상승은 다른 조건이 같을 때 현재 가치를 낮추지만, 동시에 경기와 기업 이익 전망이 좋아졌다는 신호일 수도 있습니다. 연준 연구도 금리·수익률뿐 아니라 주식 위험 프리미엄과 기대 배당이 정책 변화의 주가 전달 경로라고 설명합니다. [1]

할인율을 볼 때는 중앙은행의 단기 정책금리 하나만 보지 말고, 실제 주가 평가에 반영되는 만기별 시장금리와 물가를 뺀 실질금리, 주식 위험 프리미엄을 나눠 살펴야 합니다. 특히 이익이 먼 미래에 집중된 기업은 장기 금리나 위험 보상의 변화에 더 민감할 수 있습니다. 반대로 금리 상승이 예상보다 강한 성장과 높은 이익으로 이어진다면 할인율 부담을 이익 증가가 상쇄할 수 있습니다. ECB의 미국 주식 분석은 적절한 만기의 금리와 위험 프리미엄, 기대 배당을 함께 고려해야 하는 이유를 보여 줍니다. [2]

이익 전망은 금리의 반대편에 놓인 핵심 변수입니다. 금리가 내려가더라도 경기 침체 우려 때문에 매출·마진 전망이 더 크게 악화되면 주가는 하락할 수 있습니다. 반대로 금리가 높아도 수요가 견조하고 가격 결정력이 유지되며 이익 추정치가 상향 조정되면 주가가 버틸 여지가 있습니다. 기업의 차입 구조와 만기도 확인할 필요가 있습니다. 변동금리 부채나 가까운 시기의 차환 부담이 큰 기업은 금리 변화가 이자비용과 현금흐름에 더 빨리 반영될 수 있습니다. ECB 분석에서 강한 이익 기대와 낮은 위험 프리미엄이 금리 상승의 부담을 완충한 사례도 있었지만, 이는 미국 시장의 당시 사례이지 모든 시장에 적용되는 법칙은 아닙니다. [2]

실제로는 네 가지를 함께 추적하면 해석이 선명해집니다. 첫째, 국채 수익률 곡선과 실질금리가 어느 만기에서 움직이는지 봅니다. 둘째, 기업별·시장 전체의 향후 이익 추정치가 상향되는지 하향되는지 확인합니다. 셋째, 영업이익률·매출 전망과 이자비용, 차환 일정이 어떻게 변하는지 점검합니다. 넷째, 회사채 신용 스프레드와 주식 위험 프리미엄, 변동성 지표를 통해 투자자가 요구하는 위험 보상이 커지는지 살핍니다. 금리 하락과 이익 추정치 개선이 함께 나타나고 위험 보상도 안정되는 경우와, 금리 하락이 침체 신호와 이익 하향 조정을 동반하는 경우는 같은 ‘금리 하락’이라도 주가에 다른 함의를 가집니다.

반대 시나리오도 반드시 열어 두어야 합니다. 금리가 예상보다 올라 주가가 눌릴 것이라는 해석은 성장률과 이익 전망이 예상보다 강해지는 상황에서는 빗나갈 수 있습니다. 반대로 금리 인하가 주가에 호재라는 해석도, 인하 배경이 급격한 수요 위축이나 신용 악화라면 성립하지 않을 수 있습니다. 또 정책 발표와 시장 반응의 방향이 어긋날 때는 이미 가격에 반영된 기대와 발표가 새로 전한 경기 정보, 위험 선호의 변화를 구분해야 합니다. 따라서 금리와 주가의 동행 여부만으로 원인을 단정하기보다 금리 변화의 이유와 이익 추정치의 방향을 대조하는 편이 낫습니다. [1]

이 글의 근거로 확인한 최신 자료 기준일은 2026년 5월입니다. 연준 자료는 2026년 5월 FEDS 목록에서 확인했으며 논문 본문은 2025년 8월 25일자입니다. ECB 분석의 통계 기준일은 2024년 12월 11일입니다. 이 자료들은 금리·이익·위험 보상의 구조를 설명하는 근거이며 2026년 10월 9일의 실시간 금리나 주가 흐름을 검증한 것은 아닙니다. 투자교육 목적의 일반 정보이며 확정적 전망이나 매수·매도 지시가 아닙니다.`,hue:168,author:"골드마스터",referenceDate:"2026-05",sources:[{title:"The Effect of the Federal Reserve on the Stock Market: Magnitudes, Channels and Shocks (FEDS 2026-023; paper dated August 25, 2025)",url:"https://www.federalreserve.gov/econres/feds/files/2026023pap.pdf",date:"2026-05 (Federal Reserve FEDS listing; paper dated 2025-08-25)"},{title:"What’s behind the resilience of US equity prices – market structure, earnings expectations or equity risk premia? (ECB Economic Bulletin, Issue 8/2024)",url:"https://www.ecb.europa.eu/press/economic-bulletin/focus/2025/html/ecb.ebbox202408_01~d2c7bd5eba.en.html",date:"2024-12-11 (통계 기준일; Economic Bulletin Issue 8/2024)"}]},{id:"gg-m1",title:"장중 시황 — 주도 업종 읽기",expert:"ggotge",sub:"market",paid:!0,price:11e4,duration:"16:41",views:0,publishedAt:"2026-10-09T11:00:00+09:00",summary:"원화 약세는 수출 매출의 원화 환산액을 높일 수 있지만 수입 원가와 외화부채, 시장 위험선호가 그 효과를 바꾸므로 기업별 노출과 확인 지표를 함께 봐야 합니다.",description:`원/달러 환율이 오른다는 것은 달러 한 단위를 사는 데 더 많은 원화가 필요해져 원화 가치가 약해졌다는 뜻입니다. 이 변화는 수출기업의 매출과 주식시장에 한 방향으로만 작용하지 않습니다. 아래 내용은 2025년 9월 5일 한국은행 공개 강의와 2016년 12월 BIS 분석을 바탕으로 한 구조 설명이며, 2026년 10월 9일의 실시간 환율이나 시장 상황을 확인한 내용은 아닙니다. [한국은행, 2025-09-05]

수출 대금을 달러로 받고 원화로 비용을 지출하는 기업은 환율 상승 시 같은 달러 매출을 원화로 환산한 금액이 커질 수 있습니다. 달러 표시 수출가격을 낮춰 해외 수요를 늘릴 여지도 있지만, 계약 통화와 가격 조정 방식에 따라 소비자가격에 반영되는 폭은 달라지고 판매량 반응에도 시간이 걸립니다. BIS는 환율 변화가 무역가격에 완전히 전가되지 않을 수 있고, 수입 투입재 비중이 큰 수출기업은 환율 이익이 줄 수 있다고 설명합니다. [BIS, 2016-12-11]

반대편에는 비용과 재무상태표가 있습니다. 원유·부품·장비처럼 달러로 사오는 투입재 비용, 달러 차입금의 원화 환산액, 해외 자회사 비용은 원화 약세 때 커질 수 있습니다. 달러 매출과 달러 비용이 함께 있는 기업은 자연헤지로 일부 영향을 상쇄할 수 있고 선물환 등 헤지 계약도 변동성을 줄일 수 있지만, 헤지 비율과 만기, 계약 조건에 따라 실제 손익은 다릅니다. 따라서 ‘수출기업’이라는 분류만으로 수혜 여부를 단정하기보다 매출·원가의 통화 구성과 외화부채를 살펴야 합니다. [한국은행, 2025-09-05] [BIS, 2016-12-11]

주식에는 이익 경로와 할인율·자금흐름 경로가 동시에 작동합니다. 시장이 원화 약세를 수출기업의 원화 환산 매출 증가로 해석하면 해당 기업의 이익 전망에 우호적일 수 있습니다. 반면 수입물가를 밀어 올리고 물가·금리 부담을 키우거나, 달러 강세가 세계적인 위험회피와 동반되면 외국인 자금 흐름과 주식의 요구수익률이 불리하게 바뀔 수 있습니다. BIS 분석은 신흥국에서 외화부채의 재무경로가 무역경로의 경기부양 효과를 일부 상쇄할 수 있으며 투자도 이 경로에 민감하다고 봤습니다. 이는 국가 단위 연구 결과이지 한국 개별 기업이나 주가지수의 확정 전망은 아닙니다. [BIS, 2016-12-11]

환율을 해석할 때는 원/달러 숫자만 보지 말고 수출 물량과 수출단가, 수입물가와 주요 원자재 가격, 기업 공시의 환율 민감도, 외화매출 대비 외화원가와 외화차입, 환헤지 정책을 함께 확인할 필요가 있습니다. 주식시장에서는 수출주와 내수·수입원가 민감 업종의 실적 전망이 어떻게 달라지는지, 외국인 매매와 금리·시장 변동성이 같은 방향의 위험 신호를 보내는지도 관찰 대상입니다. BIS가 무역경로와 부채경로를 구분하듯이, 무역 비중이 높은 기업과 외화부채가 큰 기업에 같은 환율 변화가 서로 다른 결과를 낼 수 있습니다. [한국은행, 2025-09-05] [BIS, 2016-12-11]

반대 시나리오도 중요합니다. 원화 약세가 세계 경기 둔화나 위험회피에서 비롯되고 수출 주문이 약해지는 한편, 달러 원자재·부품 비용과 외화부채 부담이 매출 환산 효과보다 크게 나타나면 수출기업 이익과 국내 주식에 모두 부담일 수 있습니다. 반대로 해외 수요가 견조하고 달러 매출이 원화 비용보다 크며 외화부채가 제한된 기업은 환율 상승의 이익 경로가 상대적으로 뚜렷할 수 있습니다. 환율은 기업의 통화 노출, 가격 결정력, 수요와 시장 환경을 통해 전달됩니다. 이 글은 투자교육 목적이며 확정 전망이나 매수 지시가 아닙니다.`,hue:55,author:"꽃게선생",referenceDate:"2025-09-05",sources:[{title:"한국은행 제1007회 한은금요강좌: 환율과 외환시장에 대한 이해",url:"https://www.bok.or.kr/portal/bbs/B0000217/view.do?nttId=10093542&oldMenuNo=201151&menuNo=200144&programType=multiCont&depth=200144&relate=Y",date:"2025-09-05"},{title:"BIS Quarterly Review: Does the financial channel of exchange rates offset the trade channel?",url:"https://www.bis.org/publications/qr-201612/does-financial-channel-exchange-rates-offset-trade-channel",date:"2016-12-11"}]},{id:"gm-a3",title:"삼성전자 실적 이후 시나리오 세 가지",expert:"goldmaster",sub:"analysis",paid:!0,price:25e4,duration:"31:05",views:0,publishedAt:"2026-10-09T10:00:00+09:00",summary:"분기 실적을 매출의 질, 마진의 변화, 영업현금흐름 순으로 살펴보고 서로 어긋나는 신호와 확인할 공시 항목을 짚습니다.",description:`분기 실적은 손익계산서의 맨 아래 숫자부터 보기보다 매출, 마진, 현금흐름 순으로 읽으면 원인을 따라가기 쉽습니다. 먼저 같은 회계기간끼리 비교할 기준을 정합니다. 전년 동기 비교는 계절성을 일부 걷어내는 데 도움이 되고, 직전 분기 비교는 변화의 속도를 보여줄 수 있지만 성수기·비수기 효과가 섞일 수 있습니다. 분기보고서의 재무제표뿐 아니라 경영진의 설명과 주석도 함께 읽어야 전체 맥락을 파악할 수 있습니다.[1] [2]

첫째, 매출에서는 성장률만 보지 말고 무엇이 성장했는지 확인합니다. 판매량, 가격, 제품 구성, 환율, 인수·합병 효과가 각각 얼마나 기여했는지 회사의 설명과 부문별 공시를 대조합니다. 매출채권이 매출보다 빠르게 늘거나 반품·할인·계약자산 관련 설명이 달라졌다면 인식된 매출이 실제 회수로 이어지는 속도를 추가로 살펴볼 이유가 있습니다. 반대로 매출 증가율이 둔화해도 낮은 수익성의 거래를 줄였거나 일시적 환율 역풍이 작용했다면 사업의 질이 반드시 악화했다고 단정할 수 없습니다.

둘째, 마진은 하나의 대표 비율만 보지 말고 매출총이익률에서 영업이익률까지 비용이 어떻게 쌓이는지 살핍니다. 매출총이익률 상승은 가격이나 제품 구성 개선과 연결될 수 있지만, 영업이익률이 낮아졌다면 판매·연구개발·관리 비용이 매출보다 빠르게 늘었는지 확인합니다. 회사가 제시하는 비GAAP 조정에서 반복적으로 발생하는 비용을 제외했는지 살피고, 기간별로 같은 정의를 적용해야 합니다. 조정 전후 수치는 서로 바꿔 쓸 수 없습니다.[1] 마진 개선도 지출 이연이나 일시적인 원가 하락에서 비롯됐다면 지속되지 않을 수 있으며, 마진 하락은 미래 생산능력을 위한 의도적 투자와 함께 나타날 수도 있습니다. 설명이 부문별 실적과 비용 항목에서 확인되는지가 핵심입니다.

셋째, 현금흐름표에서 영업활동 현금흐름이 순이익과 어떻게 다른지 확인합니다. 간접법에서는 감가상각처럼 현금 유출이 아닌 비용을 조정하고, 매출채권·재고·매입채무 등 영업자산과 부채의 변동을 반영합니다. 따라서 이익은 늘었는데 영업현금흐름이 약해졌다면 매출채권 회수 지연이나 재고 축적처럼 운전자본이 원인인지, 세금·이자 지급이나 일회성 항목 때문인지 나눠 봅니다. 현금흐름은 투자활동과 재무활동으로도 구분되므로 설비투자, 자산 매각, 차입과 상환을 영업 현금과 혼동하지 않아야 합니다.[2]

이 세 단계가 서로 다른 방향을 가리킬 때가 중요한 점검 지점입니다. 매출과 마진이 좋아져도 영업현금흐름이 계속 약하고 매출채권·재고가 쌓이면 현금 회수의 질을 의심해 볼 수 있습니다. 다만 성장기 기업이 재고를 선제 확보했거나 큰 고객의 결제 시점이 분기 경계에 걸렸다면 일시적 현상일 수도 있습니다. 반대로 현금흐름이 개선되어도 설비 매각이나 지급 시점 이동의 영향일 수 있으므로 한 분기만으로 추세를 확정하지 말고 여러 기간의 운전자본과 투자 지출을 함께 비교합니다. 잉여현금흐름을 계산할 때도 회사별 정의 차이를 확인하고 같은 기준으로 비교해야 합니다.

마지막으로 경영진의 사업·재무상태 설명(MD&A)에서 전년 대비 변동 원인, 유동성, 알려진 추세와 불확실성을 찾아 숫자와 대조하고, 회계정책·추정 변경 및 비GAAP 조정은 주석에서 확인합니다. 경영진 설명은 맥락을 제공하지만 그 자체가 독립적인 검증은 아니므로 공시된 재무제표와 함께 판단해야 합니다.[1] 이 글의 자료 기준일은 확인한 공식 자료 중 가장 최근 공개일인 2021-01-25이며, 특정 기업의 최신 분기 실적이나 현재 시장 동향을 검증한 분석은 아닙니다. 투자교육 목적의 일반적 설명이며 확정 전망이나 매수 지시가 아닙니다.`,hue:225,author:"골드마스터",referenceDate:"2021-01-25",sources:[{title:"Investor Bulletin: How to Read a 10-K/10-Q",url:"https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/how-read",date:"2021-01-25"},{title:"Beginners' Guide to Financial Statement",url:"https://www.sec.gov/investor/pubs/begfinstmtguide.htm",date:"2007-02-05"}]},{id:"gg-e1",title:"맥점 매매 — 입문부터 실전",expert:"ggotge",sub:"education",paid:!0,price:32e4,duration:"52:10",views:0,publishedAt:"2026-10-09T09:00:00+09:00",summary:"분할 접근의 장단점을 짚고 변동성·유동성·집중도 지표와 반대 시나리오를 함께 점검하는 손실 관리 원칙을 정리합니다.",description:`변동성이 커지면 매수 시점을 한 번에 정하기보다 자금을 여러 시점으로 나누는 접근이 심리적 부담과 단기 가격 변동의 영향을 낮출 수 있다. 정기·분할 투자는 가격이 낮을 때 더 많은 수량을, 높을 때 더 적은 수량을 사게 하는 규칙을 제공하고, 하락장에서 즉흥적으로 매도하거나 상승장에서 추격 매수하는 행동을 줄이는 데 도움을 줄 수 있다. 다만 이것은 손실 방지 장치가 아니라 진입 시점과 행동을 관리하는 방식이다. [1] [2]

분할 매수 계획을 세울 때는 먼저 총 투자 가능액과 감내 가능한 손실을 정하고, 이어서 회차·기간 또는 재검토 조건을 사전에 문서화하는 편이 낫다. 미리 정한 규칙 없이 하락할 때마다 투입액을 늘리면 분할 접근이 사실상 물타기로 변할 수 있다. 매수 재원이 이미 준비된 목돈이라면 투자 대기자금이 현금으로 남아 있는 동안 상승분을 놓칠 수 있고, 거래 수수료가 건별로 부과되면 비용이 늘어날 수 있다. 반면 급여 등에서 새로 생기는 정기 투자금은 목돈을 일부러 현금으로 보유하는 경우와 구분해서 생각해야 한다. [2]

손실 관리의 출발점은 가격 전망보다 포트폴리오가 감당할 수 있는 규모다. 투자 기간과 가까운 시일 내 필요한 현금을 따로 고려하고, 단일 종목·업종·자산에 쏠린 비중을 점검해야 한다. 분산과 자산배분은 특정 위험을 낮출 수 있지만 시장 전체가 하락할 때 손실을 없애지는 않는다. 비상자금이 부족해 하락장에서 보유자산을 급히 팔아야 하는 상황도 투자 계획의 취약점이다. [1] [2]

관찰할 지표는 하나의 매매 신호가 아니라 위험 상태를 함께 보여주는 점검표로 활용한다. 과거 가격 변동을 반영하는 실현변동성은 실제 흔들림이 커졌는지, 옵션 가격에 반영된 내재변동성은 시장 참여자의 예상 변동성이 높아졌는지 살펴보는 단서다. 여기에 거래량과 호가 간격 같은 유동성 징후, 시장 상승·하락 종목의 폭, 보유자산 간 동조화, 포트폴리오 고점 대비 낙폭을 함께 보면 변동성뿐 아니라 매도·재조정의 어려움과 집중 위험도 파악하기 쉽다. 어느 지표도 방향이나 저점을 확정해 주지는 않는다.

반대 시나리오도 계획에 넣어야 한다. 시장이 짧게 흔들린 뒤 빠르게 반등하면 현금 대기분을 나눠 투입하는 방식이 일시투자보다 수익 기회를 놓칠 수 있다. 반대로 변동성 확대가 일회성 소음이 아니라 기업의 이익 전망 악화나 시장 전반의 위험 재평가와 함께 이어진다면, 정해진 일정대로 계속 사는 것만으로는 손실을 통제하지 못한다. 보유 근거가 훼손됐는지, 자산 간 상관관계와 유동성이 달라졌는지 재점검하고, 사전에 정한 손실 한도나 비중 조정 기준에 따라 계획을 수정할 여지를 두어야 한다.

따라서 분할 접근의 핵심은 가격을 맞히는 능력이 아니라 투입 일정, 현금 필요, 보유 비중, 재검토 조건을 미리 정해 감정적 결정을 줄이는 데 있다. 변동성과 낙폭이 커질 때는 계획을 기계적으로 반복하기보다 투자 이유와 위험 한도가 여전히 유효한지 확인하는 절차가 필요하다. 이 글은 투자교육 목적이며 확정적인 시장 전망이나 개인별 투자 조언이 아니다.`,hue:205,author:"꽃게선생",referenceDate:"2026-10-05",sources:[{title:"World Investor Week 2026: Investor Bulletin — Investor.gov (SEC 등 공동 안내)",url:"https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/world-investor-week-2026-investor-bulletin",date:"2026-10-05"},{title:"The Benefits and Limitations of Dollar-Cost Averaging — FINRA",url:"https://syndication.finra.org/content/benefits-and-limitations-dollar-cost-averaging",date:"2026-05-19"}]},{id:"gm-f1",title:"초보가 꼭 알아야 할 차트 기초",expert:"goldmaster",sub:"free",paid:!1,price:0,duration:"14:20",views:0,publishedAt:"2026-10-09T08:00:00+09:00",summary:"지수 ETF는 지수 구성과 추종 품질을, 개별 종목은 기업의 실적과 재무·가치를 중심으로 살펴보는 기초를 정리합니다.",description:`지수 ETF와 개별 종목은 둘 다 주식시장에서 거래되지만, 확인해야 할 대상은 다릅니다. 개별 종목을 보유하면 한 기업의 사업과 재무성과에 직접 노출됩니다. 지수 ETF는 기초지수가 정한 여러 자산을 담은 펀드의 지분을 보유하는 방식입니다. 다만 ETF라는 이름만으로 폭넓은 분산을 가정해서는 안 됩니다. 어떤 지수를 추종하는지, 종목을 어떤 기준으로 편입하고 가중하는지부터 확인해야 합니다. 지수 ETF도 추종 지수와 구성 자산이 겪는 시장 위험을 함께 부담합니다. [1] [2]

ETF를 볼 때 첫 질문은 ‘지수의 성격은 무엇인가’입니다. 시장 전체를 대표하는 지수인지, 한 업종이나 테마에 집중하는지, 시가총액 가중 방식인지 살펴봅니다. 시가총액 가중 지수는 몸집이 큰 기업의 비중이 커질 수 있으므로, 편입 종목 수가 많아도 상위 종목이나 특정 업종에 노출이 몰릴 수 있습니다. 상위 보유 종목 비중과 업종 비중을 같이 보면 분산의 실질을 더 잘 파악할 수 있습니다. [2]

다음은 ETF가 약속한 지수를 얼마나 잘 따라가는지입니다. 운용 보수만 보지 말고 거래·운용 비용을 포함한 총비용과 추적오차를 확인합니다. 추적오차는 ETF 순자산가치의 움직임이 기초지수와 얼마나 달라지는지 보여 주며, 표본 추종이나 비용 등이 차이를 만들 수 있습니다. 거래할 때는 시장가격과 실시간 추정 순자산가치(iNAV)의 차이인 괴리율, 매수·매도 호가 차이인 스프레드도 살펴야 합니다. 괴리율이 커지거나 스프레드가 넓으면 ETF의 거래가격과 보유자산 가치 사이의 차이 또는 거래비용이 커질 수 있습니다. [1] [2]

개별 종목은 지수의 분산 효과가 없으므로 기업 자체의 변화가 투자 판단에 더 직접적으로 연결됩니다. 매출과 영업이익의 추세뿐 아니라 현금흐름, 부채 부담, 이익률의 지속성, 주식 수 증가나 희석, 지배구조와 주요 사업 위험을 함께 확인합니다. 실적이 성장하더라도 현재 주가에 기대가 얼마나 반영됐는지는 별개의 문제입니다. 같은 업종 또는 기업의 과거 범위와 비교한 밸류에이션 지표, 예컨대 주가수익비율이나 기업가치 대비 영업이익 배수도 성장률과 현금흐름의 질을 함께 놓고 해석해야 합니다.

관찰의 반대 시나리오도 미리 세워둘 필요가 있습니다. 지수 ETF는 단일 기업의 악재 충격을 여러 구성 종목으로 나누지만, 시장 전체 하락이나 지수 내 대형 업종의 동반 약세에는 방어막이 되지 않습니다. 상위 종목 집중도가 높은 지수라면 몇몇 대형주의 하락이 ETF 전체에 큰 영향을 줄 수도 있습니다. 반대로 개별 기업이 예상보다 빠른 실적 개선과 경쟁력 강화를 보이면, 해당 기업 주식은 넓은 지수 ETF보다 더 좋은 성과를 낼 수 있습니다. 그러나 기업 고유 위험 때문에 반대 결과도 더 크게 나타날 수 있습니다.

따라서 ETF를 읽을 때는 기초지수와 편입·가중 방식, 집중도, 추적오차, 총비용, 괴리율과 스프레드를 점검하고, 개별 종목을 읽을 때는 실적과 현금흐름, 부채, 기업가치, 사업·지배구조 위험을 추적하는 것이 핵심입니다. 비교 시에는 같은 기간과 통화, 배당·분배금 처리 기준을 맞춰야 착시를 줄일 수 있습니다. 특정 ETF나 기업의 최신 시세·실적을 검증한 글이 아니므로 현재 시장 동향에 대한 단정은 포함하지 않았습니다. 투자교육 목적의 일반 설명이며 확정적인 전망이나 매수 지시가 아닙니다.`,hue:200,author:"골드마스터",referenceDate:"2023-02-23 (SEC 자료 확인일; KCIE 페이지 게시일 미표기, 작성일과 별개)",sources:[{title:"Updated Investor Bulletin: Exchange-Traded Funds (ETFs)",url:"https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24",date:"2023-02-23"},{title:"ETF 성공투자를 위해서는 꼭 알아두어야 할 용어들",url:"https://www.kcie.or.kr/mobile/guide/3/18/web_view?series_idx=&content_idx=518",date:"게시일 확인 불가"}]},{id:"gg-f3",title:"급등주 브리핑 — 공개판",expert:"ggotge",sub:"free",paid:!1,price:0,duration:"09:18",views:0,publishedAt:"2026-10-09T07:00:00+09:00",summary:"거래량은 활발함을 보여줄 뿐 방향을 단정하지 않으며, 매매 주체와 유동성·가격 반응을 함께 봐야 수급을 과잉 해석하지 않을 수 있다.",description:`거래량이 갑자기 늘었다고 곧바로 매집이나 상승 신호로 해석하는 것은 첫 번째 착각이다. 체결에는 매수자와 매도자가 함께 존재하므로 거래량 자체는 어느 쪽이 우세했는지 알려주지 않는다. 한국거래소 투자자별 거래실적은 투자자 구분별 매도·매수·순매수 수량과 거래대금을 따로 제시한다. 따라서 총거래량과 순매수는 서로 다른 질문에 답하는 지표다. [1]

두 번째 착각은 특정 투자자 집단의 순매수를 곧바로 ‘큰손의 확신’으로 읽는 것이다. KRX 통계는 금융투자·보험·투신·사모·은행·연기금 등과 개인·외국인 등의 범주별 집계를 제공하지만, 집계값만으로는 각 거래자의 목적이나 보유기간, 헤지 여부를 알 수 없다. 순매수는 해당 분류에서 매수와 매도의 차이가 난 결과이지, 집단 전체의 전망이나 이후 가격 방향을 보증하는 신호가 아니다. [1]

세 번째는 거래량 증가와 가격 상승을 같은 의미로 보는 것이다. 같은 수준의 거래량도 매수·매도 주문의 불균형, 호가 잔량 같은 시장 깊이, 체결이 일어난 시간대에 따라 가격 영향이 달라질 수 있다. 연준 연구진이 미 국채시장의 2025년 4월 변동을 비교한 분석에서는 거래량 급증이 비슷해도 한쪽 방향 주문 흐름의 크기와 지속성, 유동성 여건에 따라 가격 움직임이 달랐다. 이는 국채 사례이지 한국 주식시장에 그대로 적용할 법칙은 아니지만, 거래량 하나만으로 가격 압력을 설명하기 어렵다는 점을 보여준다. [2]

실제 관찰에서는 거래량이 평소 같은 시간대보다 얼마나 달라졌는지, 거래대금도 함께 늘었는지, 순매수의 주체와 지속성이 어떤지, 가격이 거래 증가에 얼마나 반응했는지를 나란히 볼 필요가 있다. 가능하다면 호가 잔량이나 스프레드처럼 유동성을 보여주는 자료도 확인한다. 거래량이 큰데 가격 변화가 작다면 반대편 유동성이 충분했을 가능성도 있다. 반대로 거래량이 평범해도 호가가 얇고 한쪽 주문이 몰리면 작은 체결에도 가격이 크게 움직일 수 있다. 이 지표들은 방향을 확정하는 공식이 아니라 관찰의 맥락을 보완한다. [2]

네 번째 착각은 하루의 수급 수치를 추세로 확대하는 것이다. 장 시작·마감, 지수 또는 포트폴리오 재조정, 공시와 뉴스, 파생상품 만기 등으로 특정 구간의 체결이 몰릴 수 있다. 하루 순매수만으로 누적 포지션 변화나 다음 날 행동을 추론하기보다, 비교 가능한 시간대와 여러 기간의 흐름을 확인하고 가격 반응이 반복되는지도 살펴야 한다. 다만 기간을 늘린다고 원인까지 저절로 밝혀지는 것은 아니다.

반대 시나리오도 함께 세워보자. 거래량 증가와 외국인 순매수가 관찰돼도 그 순매수가 헤지·차익거래 성격이거나 다른 투자자의 매도로 상쇄될 수 있다. 반대로 거래량이 줄어도 매도 압력이 약해져 가격이 버티는 상황일 수 있다. 관찰한 지표가 어떤 설명을 지지하는지뿐 아니라 어떤 대안 설명과 맞는지 점검하고, 추가 자료가 없으면 결론을 유보하는 편이 낫다. 이 글은 투자교육 목적이며 확정적인 전망이나 매매 지시가 아니다.`,hue:160,author:"꽃게선생",referenceDate:"2025-11-03",sources:[{title:"투자자별 거래실적 - 한국거래소 KRX Data Marketplace",url:"https://data.krx.co.kr/contents/MDC/MDI/outerLoader/index.cmd?screenId=MDCSTAT022",date:"게시일 미표기(2026-10-09 확인)"},{title:"Order Flow Imbalances and Amplification of Price Movements: Evidence from U.S. Treasury Markets - Federal Reserve FEDS Notes",url:"https://www.federalreserve.gov/econres/notes/feds-notes/order-flow-imbalances-and-amplification-of-price-movements-evidence-from-u-s-treasury-markets-20251103.html",date:"2025-11-03"}]}]};

let So=[];

function fq(e){let t=new URLSearchParams(e.replace(/^#/,"")).get("video");return So.find(a=>a.id===t)??null}

function nq(e){return`#${new URLSearchParams({page:"paidInfo",video:e.id}).toString()}`}

const Xs=(e,t)=>t==="all"||(t==="free"?!e.paid:e.expert===t);

const ia={goldmaster:{...nu.EXPERTS.goldmaster,role:"수급과 산업을 읽는 깊이 있는 분석",tagline:"시장 흐름부터 산업의 변화까지, 데이터에 기반한 투자 관점을 함께 배웁니다."},ggotge:{...nu.EXPERTS.ggotge,role:"주도주와 매매 원칙을 배우는 시간",tagline:"대형주와 업종 대표주를 중심으로, 차트와 시장 흐름을 읽는 기준을 세웁니다."}};

const oo=[{id:"analysis",label:"주식분석",description:"산업과 기업을 깊이 읽는 전문가의 시선",english:"STOCK ANALYSIS"},{id:"education",label:"주식교육",description:"기초부터 실전까지, 흔들리지 않는 투자 원칙",english:"INVESTMENT CLASS"},{id:"market",label:"주식시황",description:"시장 흐름을 놓치지 않는 가장 좋은 습관",english:"MARKET INSIGHT"},{id:"free",label:"무료영상",description:"투자의 첫걸음, 부담 없이 시작하세요",english:"FREE CLASS"}];

const Kv=["gm-a1","gm-a3","gm-m1","gm-m2","gm-f1","gg-a2","gg-a3","gg-f3"];

const j2=e=>Object.fromEntries(Object.entries(assets).filter(([k])=>k.startsWith("/assets/")).map(([k,v])=>[k.slice(8),v]))?.[e]??`/assets/${e}`;

const yv=["gg-m1","gm-f2"];

const originalPosterSource=e=>Kv.includes(e.id)?j2(`${e.id}.jpg`):yv.includes(e.id)?j2(`${e.id}.png`):void 0;
const dl=video=>video.thumbnail?(assets[video.thumbnail]??video.thumbnail):originalPosterSource(video);

const T2={"gm-a1":"유리기판 밸류체인 완전 분석","gm-a2":"MLCC 업황 바닥인가 — 투자 포인트","gm-a3":"삼성전자 실적 이후 시나리오 세 가지","gm-e1":"수급으로 읽는 매매 타이밍","gm-e2":"손절과 익절, 원칙을 세우는 법","gm-e3":"기관 따라가기 — 실전 복기","gm-m1":"이번 주 시장 브리핑 — 핵심만","gm-m2":"환율·금리와 국내 증시","gm-m3":"외국인 수급 체크포인트","gm-f1":"초보가 꼭 알아야 할 차트 기초","gm-f2":"오늘의 시장, 한눈에","gg-a1":"AI 반도체 반등 — 맥점 짚기","gg-a2":"AI 버블인가, 실적인가","gg-a3":"2차전지 소외주, 지금이 자리인가","gg-e1":"맥점 매매 — 입문부터 실전","gg-e2":"대형주만 다루는 이유","gg-e3":"분할 매수·매도 설계하기","gg-m1":"장중 시황 — 주도 업종 읽기","gg-m2":"미국 증시 마감 후 국내 대응","gg-m3":"주간 이벤트와 변동성 대비","gg-f1":"주식, 처음 사는 법","gg-f2":"왜 주가는 오르고 내릴까","gg-f3":"급등주 브리핑 — 공개판"};

function xf({video:e,large:t=!1}){let a=dl(e),[o,f]=(0,Ho.useState)(!1);return(0,Ho.useEffect)(()=>f(!1),[e.id]),(0,Q.jsxs)("div",{className:`video-poster poster-${e.sub} ${t?"poster-large":""}`,children:[a&&!o?(0,Q.jsx)("img",{src:a,alt:"",loading:t?"eager":"lazy",onError:()=>f(!0)}):(0,Q.jsxs)("div",{className:"typographic-poster",children:[(0,Q.jsxs)("span",{className:"poster-eyebrow",children:["WILLCLUB ",oo.find(n=>n.id===e.sub)?.english]}),(0,Q.jsx)("strong",{children:(T2[e.id]??e.title).split(" — ")[0]}),(0,Q.jsxs)("span",{className:"poster-author",children:[e.author??ia[e.expert].name,(0,Q.jsx)("span",{children:"EXPERT CLASS"})]}),(0,Q.jsx)("div",{className:"poster-line","aria-hidden":"true"})]}),(0,Q.jsxs)("span",{className:`video-type ${e.paid?"":"type-free"}`,children:[e.paid?(0,Q.jsx)(Tt,{size:10}):(0,Q.jsx)(To,{size:10,fill:"currentColor"}),e.paid?"PREMIUM":"FREE"]}),(0,Q.jsx)("span",{className:"duration",children:e.duration}),!t&&(0,Q.jsx)("span",{className:"poster-play","aria-hidden":"true",children:(0,Q.jsx)(To,{size:20,fill:"currentColor"})})]})}

const O2=e=>new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(e));

function sq({video:e,onBack:t,onPurchase:a}){let[o,f]=(0,pu.useState)(!1),{state:n,playback:activePlayback,playVideo:triggerPlayback}=ct(),r=activePlayback?.videoId===e.id||!e.paid||n.purchases.some(l=>l.kind==="video"&&l.videoId===e.id&&l.status==="complete");return(0,pu.useEffect)(()=>{let l=()=>{const watch=r&&new URLSearchParams(window.location.hash.slice(1)).get("watch")==="1";f(watch);if(watch&&!activePlayback?.url)triggerPlayback(e)};return l(),window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[e.id,r]),(0,re.jsxs)("article",{className:"video-detail",children:[(0,re.jsxs)("div",{className:"detail-navigation",children:[(0,re.jsxs)("button",{className:"back-to-library",onClick:t,children:[(0,re.jsx)(mt,{size:15})," 영상 목록으로"]}),(0,re.jsxs)("span",{children:["주식 교육 영상 ",(0,re.jsx)("span",{children:"/ 영상 상세"})]})]}),(0,re.jsx)("div",{className:"detail-hero",children:(0,re.jsx)(OriginalMediaHero,{video:e,children:(0,re.jsx)(xf,{video:e,large:!0})})}),(0,re.jsxs)("div",{className:"detail-information",children:[(0,re.jsxs)("header",{className:"detail-heading",children:[(0,re.jsxs)("div",{className:"detail-title-row",children:[(0,re.jsx)("h1",{id:"video-detail-title",tabIndex:-1,title:e.title,children:e.title}),(0,re.jsx)("div",{className:"detail-purchase",children:(0,re.jsxs)("button",{className:"primary-button",onClick:r?()=>triggerPlayback(e):a,children:[r?"시청하기":"결제하기",(0,re.jsx)(ne,{size:16,"aria-hidden":"true"})]})})]}),(0,re.jsxs)("p",{className:"detail-meta",children:[(0,re.jsx)("span",{children:e.author??ia[e.expert].name}),(0,re.jsx)("i",{}),(0,re.jsx)("span",{children:O2(e.publishedAt)})]})]}),(0,re.jsx)(sl,{value:e.description,className:"detail-description ex-research-body"}),e.sources?.length?(0,re.jsxs)("section",{className:"ex-research-sources",children:[(0,re.jsx)("h2",{children:"참고 자료"}),e.sources.map((l,c)=>(0,re.jsxs)("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:["[",c+1,"] ",l.title]},l.url))]}):null,e.referenceDate&&(0,re.jsxs)("p",{className:"ex-research-date",children:["자료 확인 기준: ",e.referenceDate]}),e.author&&(0,re.jsx)("p",{className:"ex-research-disclosure",children:"시장을 읽는 기준을 함께 점검하는 교육 콘텐츠입니다. 본문과 참고 자료를 확인해주세요. 영상은 준비 중입니다."}),o&&!activePlayback?.url&&(0,re.jsxs)("p",{className:"inline-notice",role:"status",children:[(0,re.jsx)(ua,{size:15})," 현재 영상을 재생할 수 없습니다."]})]})]})}

const Nv={analysis:No,education:Fr,market:Or,free:Po};

const il=e=>e>0?`${e.toLocaleString("ko-KR")}원`:"무료";

function Mv({video:e,onSelect:t}){return(0,Q.jsxs)("button",{className:"video-card",onClick:()=>t(e),"aria-label":`${e.title}, ${ia[e.expert].name}, ${il(e.price)}, 상세 보기`,children:[(0,Q.jsx)(xf,{video:e}),(0,Q.jsxs)("div",{className:"card-information",children:[(0,Q.jsxs)("div",{className:"card-meta-row",children:[(0,Q.jsxs)("span",{className:"card-expert",children:[(0,Q.jsx)("span",{className:`expert-dot expert-${e.expert}`}),(0,Q.jsx)("span",{className:"expert-name",children:e.author??ia[e.expert].name})]}),(0,Q.jsx)("span",{className:`card-price ${e.paid?"":"is-free"}`,children:e.paid?il(e.price):"무료 시청"})]}),(0,Q.jsx)("h3",{children:e.title})]})]})}

function ru({category:e,items:t,onSelect:a}){let o=(0,Ho.useRef)(null),[f,n]=(0,Ho.useState)({start:!0,end:!1}),r=oo.find(b=>b.id===e),l=Nv[e],c=()=>{let b=o.current;b&&n({start:b.scrollLeft<5,end:b.scrollLeft+b.clientWidth>=b.scrollWidth-5})};(0,Ho.useEffect)(()=>{let b=o.current;b?.scrollTo({left:0}),c();let A=new ResizeObserver(c);return b&&A.observe(b),()=>A.disconnect()},[t]);let d=b=>{let A=o.current;if(!A)return;let m=A.querySelector(".video-card");A.scrollBy({left:b*((m?.offsetWidth??270)+22)*(window.innerWidth<650?1:2),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})};return(0,Q.jsxs)("section",{className:"video-section","aria-labelledby":`section-${e}`,children:[(0,Q.jsxs)("div",{className:"section-heading",children:[(0,Q.jsxs)("div",{children:[(0,Q.jsxs)("div",{className:"section-title",children:[(0,Q.jsx)("span",{className:"section-icon",children:(0,Q.jsx)(l,{size:19,strokeWidth:1.7})}),(0,Q.jsx)("h2",{id:`section-${e}`,children:r.label}),(0,Q.jsx)("span",{className:"section-count",children:t.length})]}),(0,Q.jsx)("p",{children:r.description})]}),(0,Q.jsxs)("div",{className:"rail-controls",children:[(0,Q.jsxs)("span",{children:[t.length,"개의 영상"]}),(0,Q.jsx)("button",{className:"icon-button rail-arrow",onClick:()=>d(-1),disabled:f.start,"aria-label":`${r.label} 이전 영상`,children:(0,Q.jsx)(mt,{size:17})}),(0,Q.jsx)("button",{className:"icon-button rail-arrow",onClick:()=>d(1),disabled:f.end,"aria-label":`${r.label} 다음 영상`,children:(0,Q.jsx)(ne,{size:17})})]})]}),(0,Q.jsx)("div",{className:"video-rail",ref:o,onScroll:c,children:t.map(b=>(0,Q.jsx)(Mv,{video:b,onSelect:a},b.id))})]})}

function bq({onSelect:e,groups:t}){return(0,re.jsx)("div",{className:"detail-library","aria-label":"카테고리별 전체 영상",children:t.map(({category:a,items:o})=>o.length>0&&(0,re.jsx)(ru,{category:a,items:o,onSelect:e},a))})}

const k2=[{id:"all",label:"전체영상"},{id:"free",label:"무료영상"},{id:"goldmaster",label:"골드마스터"},{id:"ggotge",label:"꽃게선생"}];

function pq({children:e,onClose:t,titleId:a,className:o=""}){let f=(0,Yf.useRef)(null);return(0,Yf.useEffect)(()=>{let n=f.current,r=document.body.style.overflow;return document.body.style.overflow="hidden",n?.showModal(),()=>{n?.close(),document.body.style.overflow=r}},[]),(0,J.jsx)("dialog",{className:`wc-dialog ${o}`,ref:f,"aria-labelledby":a,onCancel:n=>{n.preventDefault(),t()},onClick:n=>{n.target===n.currentTarget&&t()},children:e})}

function qq({video:e,onClose:t}){let[a,o]=(0,Yf.useState)(!1),[f,n]=(0,Yf.useState)(!1);return(0,J.jsxs)(pq,{titleId:"purchase-title",onClose:t,className:"compact-dialog purchase-dialog",children:[(0,J.jsx)("button",{className:"dialog-close icon-button","aria-label":"구매 안내 닫기",onClick:t,children:(0,J.jsx)($e,{size:20})}),f?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("div",{className:"dialog-symbol",children:(0,J.jsx)(kt,{size:28})}),(0,J.jsx)("p",{className:"eyebrow",children:"WILLCLUB"}),(0,J.jsx)("h2",{id:"purchase-title",children:"현재 결제를 진행할 수 없습니다."}),(0,J.jsx)("p",{className:"muted",children:"잠시 후 다시 이용해주세요."}),(0,J.jsxs)("button",{className:"primary-button",onClick:t,children:["영상 상세로 돌아가기 ",(0,J.jsx)(ne,{size:17})]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)("p",{className:"eyebrow",children:"PREMIUM CLASS"}),(0,J.jsxs)("h2",{id:"purchase-title",children:["좋은 투자는,",(0,J.jsx)("br",{}),"깊이 있는 배움에서."]}),(0,J.jsxs)("div",{className:"order-video",children:[(0,J.jsx)(xf,{video:e}),(0,J.jsxs)("span",{children:[(0,J.jsxs)("small",{children:[ia[e.expert].name," · ",oo.find(r=>r.id===e.sub)?.label]}),(0,J.jsx)("strong",{children:e.title})]})]}),(0,J.jsxs)("div",{className:"order-total",children:[(0,J.jsx)("span",{children:"결제 예정 금액"}),(0,J.jsx)("strong",{children:il(e.price)})]}),(0,J.jsxs)("label",{className:"agreement",children:[(0,J.jsx)("input",{type:"checkbox",checked:a,onChange:r=>o(r.target.checked)}),(0,J.jsx)("span",{children:"이용 조건을 확인했습니다."})]}),(0,J.jsxs)("button",{className:"primary-button",disabled:!a,onClick:()=>n(!0),children:["결제하기 ",(0,J.jsx)(ne,{size:17})]}),(0,J.jsx)("button",{className:"text-button",onClick:t,children:"다음에 둘러볼게요"})]})]})}

const P2="";

function mq({onClose:e}){return(0,J.jsxs)(pq,{titleId:"login-title",onClose:e,className:"compact-dialog",children:[(0,J.jsx)("button",{className:"dialog-close icon-button","aria-label":"닫기",onClick:e,children:(0,J.jsx)($e,{size:20})}),(0,J.jsx)("div",{className:"dialog-symbol",children:(0,J.jsx)(Tt,{size:25})}),(0,J.jsx)("p",{className:"eyebrow",children:"WILLCLUB ACCOUNT"}),(0,J.jsx)("h2",{id:"login-title",children:"배움의 다음 단계로."}),(0,J.jsx)("p",{className:"muted",children:"로그인이 필요합니다."}),(0,J.jsxs)("a",{className:"primary-button",href:P2,children:["윌클럽 로그인으로 이동 ",(0,J.jsx)(rt,{size:17})]}),(0,J.jsx)("button",{className:"text-button",onClick:e,children:"계속 둘러보기"})]})}

function js({embedded:e=!1}){let{openVideoPayment:t}=ct(),[a,o]=(0,ut.useState)("all"),[f,n]=(0,ut.useState)(""),[r,l]=(0,ut.useState)("latest"),[c,d]=(0,ut.useState)(!0),[b,A]=(0,ut.useState)(null),[m,h]=(0,ut.useState)(!1),[x,E]=(0,ut.useState)(!1),M=(0,ut.useRef)(0);(0,ut.useEffect)(()=>{let X=window.setTimeout(()=>d(!1),350),V=()=>{let q=fq(window.location.hash);A(q),h(!1),window.requestAnimationFrame(()=>{window.scrollTo({top:q?0:M.current,behavior:"instant"}),q&&document.getElementById("video-detail-title")?.focus({preventScroll:!0})})};return V(),window.addEventListener("hashchange",V),()=>{window.clearTimeout(X),window.removeEventListener("hashchange",V)}},[]);let i=X=>{if(b||(M.current=window.scrollY),b?.id===X.id){window.scrollTo({top:0,behavior:"instant"}),document.getElementById("video-detail-title")?.focus({preventScroll:!0});return}window.location.hash=nq(X)},u=()=>{window.location.hash="page=paidInfo"},p=(0,ut.useMemo)(()=>{let X=f.trim().toLocaleLowerCase("ko-KR");return So.filter(V=>Xs(V,a)&&(!X||`${V.title} ${V.summary} ${ia[V.expert].name} ${oo.find(q=>q.id===V.sub)?.label}`.toLocaleLowerCase("ko-KR").includes(X))).sort((V,q)=>r==="popular"?q.views-V.views:Date.parse(q.publishedAt)-Date.parse(V.publishedAt))},[a,f,r]),U=(0,ut.useMemo)(()=>oo.map(X=>({category:X.id,items:p.filter(V=>V.sub===X.id)})),[p]),I=(0,ut.useMemo)(()=>{let X=[...So].sort((V,q)=>Date.parse(q.publishedAt)-Date.parse(V.publishedAt));return oo.map(V=>({category:V.id,items:X.filter(q=>q.sub===V.id)}))},[]),W=a==="goldmaster"||a==="ggotge"?ia[a]:null,Z=W?W.name:a==="free"?"첫 투자, 좋은 배움으로 시작하세요.":`시장을 읽는 안목,
투자의 기준이 되다.`;return(0,j.jsxs)("div",{className:"willclub-page paid-page",children:[(0,j.jsx)("main",{className:`wc-container page-main ${b?"detail-page-main":""}`,children:b?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(sq,{video:b,onBack:u,onPurchase:()=>b&&t(b)}),(0,j.jsx)(bq,{groups:I,onSelect:i})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"breadcrumb",children:[(0,j.jsx)("span",{children:"홈"}),(0,j.jsx)(ke,{size:12}),(0,j.jsx)("span",{children:"주식 교육 영상"})]}),(0,j.jsxs)("div",{className:"page-heading",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{className:"eyebrow",children:"WILLCLUB LEARNING"}),(0,j.jsxs)("h1",{children:["주식 교육 영상",(0,j.jsx)("span",{className:"title-dot",children:"."})]}),(0,j.jsx)("p",{children:"투자를 배우는 시간, 더 나은 선택의 시작."})]}),(0,j.jsxs)("label",{className:"search-field",children:[(0,j.jsx)(qt,{size:19,strokeWidth:1.6}),(0,j.jsx)("input",{"aria-label":"영상 검색",type:"search",placeholder:"궁금한 주제나 전문가를 검색해보세요",value:f,onChange:X=>n(X.target.value)}),f&&(0,j.jsx)("button",{className:"search-clear","aria-label":"검색어 지우기",onClick:()=>n(""),children:(0,j.jsx)($e,{size:15})}),(0,j.jsx)("kbd",{"aria-hidden":"true",children:"검색"})]})]}),(0,j.jsx)("nav",{className:"video-tabs","aria-label":"영상 필터",children:k2.map(X=>(0,j.jsxs)("button",{className:`video-tab ${a===X.id?"active":""}`,"aria-pressed":a===X.id,onClick:()=>o(X.id),children:[X.id==="all"&&(0,j.jsx)($a,{size:16,strokeWidth:1.7}),X.label,(0,j.jsx)("span",{children:So.filter(V=>Xs(V,X.id)).length})]},X.id))}),!f.trim()&&(0,j.jsx)(et,{title:Z,eyebrow:W?"WILLCLUB · EXPERT":"WILLCLUB · LEARNING",label:"교육영상 안내",letter:W?a==="goldmaster"?"G":"C":"W"}),(0,j.jsxs)("div",{className:"library-toolbar",children:[(0,j.jsx)("div",{"aria-live":"polite",children:f.trim()?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("strong",{children:["“",f.trim(),"”"]})," 검색 결과 ",(0,j.jsx)("b",{children:p.length}),"개"]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"toolbar-dot"}),W?`${W.name}의 인사이트를 만나보세요`:a==="free"?"배움의 시작을 응원하는 무료 클래스":"나에게 맞는 전문가의 강의를 만나보세요",(0,j.jsxs)("span",{className:"total-count",children:["총 ",p.length,"개 영상"]})]})}),(0,j.jsxs)("label",{className:"sort-label",children:[(0,j.jsx)(Uf,{size:13}),(0,j.jsxs)("select",{"aria-label":"영상 정렬",value:r,onChange:X=>l(X.target.value),children:[(0,j.jsx)("option",{value:"latest",children:"최신순"}),(0,j.jsx)("option",{value:"popular",children:"인기순"})]})]})]}),c?(0,j.jsxs)("div",{className:"loading-grid",role:"status","aria-label":"영상을 불러오는 중",children:[(0,j.jsx)("span",{className:"sr-only",children:"영상을 불러오는 중입니다."}),[1,2,3,4].map(X=>(0,j.jsxs)("div",{className:"skeleton-card",children:[(0,j.jsx)("div",{}),(0,j.jsx)("span",{}),(0,j.jsx)("span",{})]},X))]}):p.length===0?(0,j.jsxs)("section",{className:"empty-state",children:[(0,j.jsx)("span",{children:(0,j.jsx)(ol,{size:35,strokeWidth:1.2})}),(0,j.jsx)("h2",{children:"찾으시는 영상이 아직 없어요."}),(0,j.jsx)("p",{children:"다른 검색어를 입력하거나 전체 영상을 확인해보세요."}),(0,j.jsxs)("button",{className:"primary-button",onClick:()=>{n(""),o("all")},children:["전체 영상 보기 ",(0,j.jsx)(ke,{size:16})]})]}):(0,j.jsx)("div",{className:"video-library",children:U.map(({category:X,items:V})=>V.length>0?(0,j.jsx)(ru,{category:X,items:V,onSelect:i},X):null)})]})}),b&&m&&(0,j.jsx)(qq,{video:b,onClose:()=>h(!1)},b.id),x&&(0,j.jsx)(mq,{onClose:()=>E(!1)})]})}

const Xt=[{id:"2914806e-da08-4649-9ca3-7cda12f61089",product_name:"골드마스터반",category:"",expert_id:"8bd3703c-2f94-4067-b366-f97323116386",expert_name:"골드마스터",monthly_price:6e5,profile_image:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788135374088.png",event_text:null,detail_description:"골드마스터의 종합 투자 전략 강의",detail_image:null,first_come_count:null,first_come_started_at:"$D2026-07-31T12:48:17.537Z",time_attack_seconds:null,time_attack_end_at:"$D2026-08-02T05:18:18.304Z",sort_order:0,mb_id:"expert1",detail_html:`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>골드마스터반 프리미엄 | 정보력과 타점력</title>
    <link href="https://ff.kiro.sh/fonts/pretendard.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root {
            --bg-main: #fbfaf9;
            --bg-card: #ffffff;
            --gold: #C9A227;
            --gold-dark: #8A6F27;
            --text-dark: #1c1b19;
            --text-gray: #6b655c;
            --text-light: #8a847a;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.025em;
        }
        body {
            background: var(--bg-main);
            color: var(--text-dark);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(36px);
            transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HERO ========== */
        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 88px 28px 96px;
            background: var(--bg-main);
        }
        .hero-badge,
        .hero h1,
        .hero-desc,
        .stat-card {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hero.loaded .hero-badge { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .hero.loaded h1 { opacity: 1; transform: translateY(0); transition-delay: 0.22s; }
        .hero.loaded .hero-desc { opacity: 1; transform: translateY(0); transition-delay: 0.36s; }
        .hero.loaded .stat-card:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
        .hero.loaded .stat-card:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.62s; }
        .hero-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--gold), var(--gold-dark));
            color: #1a1508;
            font-weight: 700;
            font-size: 0.9rem;
            padding: 10px 24px;
            border-radius: 50px;
            margin-bottom: 36px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }
        .hero h1 {
            font-size: clamp(2.4rem, 5.4vw, 3.6rem);
            font-weight: 800;
            line-height: 1.3;
            margin-bottom: 28px;
            word-break: keep-all;
            color: var(--text-dark);
        }
        .hero h1 .highlight {
            color: var(--gold);
        }
        .hero-desc {
            font-size: 1.28rem;
            color: var(--text-gray);
            max-width: 620px;
            margin-bottom: 52px;
            word-break: keep-all;
            line-height: 1.8;
        }
        .hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            width: 100%;
            max-width: 540px;
        }
        .stat-card {
            background: #fff;
            border: 1px solid #ebe6df;
            border-radius: 16px;
            padding: 30px 24px;
            transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .stat-card:hover {
            transform: translateY(-6px);
            border-color: #e0d5c0;
            box-shadow: 0 16px 36px rgba(0,0,0,0.06);
        }
        .stat-card h3 {
            font-size: 1.7rem;
            font-weight: 700;
            color: var(--gold);
            margin-bottom: 8px;
        }
        .stat-card p {
            font-size: 1.08rem;
            color: var(--text-light);
        }
        /* ========== SECTION ========== */
        section {
            padding: 92px 0;
            background: var(--bg-main);
        }
        .section-title {
            font-size: clamp(2.05rem, 4.4vw, 2.7rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 20px;
            word-break: keep-all;
            color: var(--text-dark);
            line-height: 1.35;
        }
        .section-title span {
            color: var(--gold);
        }
        .section-desc {
            text-align: center;
            font-size: 1.18rem;
            color: var(--text-gray);
            max-width: 640px;
            margin: 0 auto 48px;
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== STRATEGY ========== */
        .card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
        }
        .feature-card {
            background: #fff;
            border: 1px solid #ebe6df;
            border-radius: 20px;
            padding: 42px 34px;
            transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 44px rgba(0,0,0,0.06);
            border-color: #e0d5c0;
        }
        .feature-card .icon {
            width: 52px;
            height: 52px;
            background: linear-gradient(135deg, #f8f1e0, #f0e6c8);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            font-size: 1.45rem;
            color: var(--gold);
        }
        .feature-card h4 {
            font-size: 1.38rem;
            font-weight: 700;
            margin-bottom: 14px;
            color: var(--text-dark);
        }
        .feature-card p {
            font-size: 1.12rem;
            color: var(--text-gray);
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== 추천종목 특징 ========== */
        .recommend-section {
            padding-top: 40px;
        }
        .recommend-card {
            background: #fff;
            border: 1px solid #ebe6df;
            border-radius: 20px;
            padding: 44px 40px;
            max-width: 720px;
            margin: 0 auto;
        }
        .recommend-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 22px;
        }
        .recommend-list li {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }
        .recommend-list .label {
            flex-shrink: 0;
            background: linear-gradient(135deg, #f8f1e0, #f0e6c8);
            color: var(--gold);
            font-weight: 700;
            font-size: 0.95rem;
            padding: 6px 14px;
            border-radius: 8px;
            min-width: 130px;
            text-align: center;
        }
        .recommend-list .desc {
            font-size: 1.14rem;
            color: var(--text-gray);
            line-height: 1.7;
            word-break: keep-all;
            padding-top: 4px;
        }
        /* ========== TELEGRAM ========== */
        .tg-section {
            background: var(--bg-main);
            padding-top: 40px;
        }
        .telegram-box {
            background: #1a2332;
            border-radius: 22px;
            max-width: 660px;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 24px 56px rgba(0,0,0,0.14);
        }
        .tg-header {
            background: #1e2a3a;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 13px;
        }
        .tg-avatar {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #F3E5AB, #C9A227);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1a1508;
            font-weight: 800;
            font-size: 1.1rem;
        }
        .tg-info h5 {
            font-size: 1.15rem;
            font-weight: 700;
            color: #fff;
        }
        .tg-info p {
            font-size: 0.88rem;
            color: #9aa8b8;
        }
        .tg-body {
            padding: 20px;
            background: #1a2332;
            background-image: radial-gradient(rgba(255,255,255,0.025) 14%, transparent 15%);
            background-size: 11px 11px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .tg-msg {
            background: #243044;
            padding: 15px 18px;
            border-radius: 14px 14px 14px 4px;
            max-width: 94%;
            align-self: flex-start;
            opacity: 0;
            transform: translateY(36px) scale(0.94);
            transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .tg-msg.active {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .tg-msg:hover {
            background: #2a374c;
        }
        .tg-sender {
            color: #e4b63b;
            font-weight: 700;
            font-size: 1.05rem;
            display: block;
            margin-bottom: 5px;
        }
        .tg-text {
            font-size: 1.12rem;
            color: #f0f2f5;
            font-weight: 450;
            word-break: keep-all;
            line-height: 1.55;
        }
        .tg-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            padding-top: 8px;
            border-top: 1px solid rgba(255,255,255,0.05);
        }
        .tg-emojis {
            display: flex;
            gap: 5px;
        }
        .emoji-badge {
            background: rgba(255,255,255,0.07);
            padding: 3px 9px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            color: #e0e4e8;
        }
        .tg-status {
            font-size: 0.8rem;
            color: #8b9aab;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        /* ========== PROFILE ========== */
        .profile-grid {
            display: grid;
            grid-template-columns: 1.1fr 1.9fr;
            gap: 48px;
            align-items: center;
        }
        .book {
            width: 100%;
            max-width: 280px;
            aspect-ratio: 1 / 1.42;
            background: #1A1311;
            border: 5px solid #261D1A;
            border-radius: 10px;
            padding: 28px 20px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            position: relative;
            box-shadow: 0 24px 48px rgba(0,0,0,0.22);
            transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .book:hover {
            transform: rotateY(-5deg) scale(1.03);
            border-color: var(--gold);
        }
        .book-x {
            position: absolute;
            top: 18%;
            left: 6%;
            width: 88%;
            height: 42%;
            opacity: 0.65;
            pointer-events: none;
        }
        .book-x::before,
        .book-x::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 18px;
            background: repeating-linear-gradient(90deg, var(--gold), var(--gold) 5px, transparent 5px, transparent 11px);
            top: 50%;
            left: 0;
        }
        .book-x::before { transform: translateY(-50%) rotate(41deg); }
        .book-x::after  { transform: translateY(-50%) rotate(-41deg); }
        .book-top {
            font-size: 1rem;
            font-weight: 700;
            color: var(--gold);
            letter-spacing: 0.04em;
            z-index: 2;
        }
        .book-title {
            z-index: 2;
            margin-top: auto;
            margin-bottom: 10px;
        }
        .book-title .sub {
            display: block;
            font-size: 1.4rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 2px;
        }
        .book-title .main {
            display: block;
            font-size: 2.1rem;
            font-weight: 800;
            color: var(--gold);
            line-height: 1.1;
        }
        .book-title .xfile {
            display: block;
            font-size: 3.1rem;
            font-weight: 800;
            color: #fff;
            line-height: 1;
            margin-top: 3px;
        }
        .book-footer {
            font-size: 0.78rem;
            color: #999;
            border-top: 1px solid #332521;
            padding-top: 10px;
            width: 100%;
            z-index: 2;
        }
        .profile-info h3 {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 8px;
            color: var(--text-dark);
        }
        .profile-info .role {
            display: block;
            font-size: 1.15rem;
            color: var(--gold);
            font-weight: 600;
            margin-bottom: 28px;
        }
        .history {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .history li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 1.12rem;
            color: #4a4640;
            word-break: keep-all;
        }
        .history li i {
            color: var(--gold);
            margin-top: 5px;
            font-size: 0.95rem;
        }
        .history li strong {
            color: var(--text-dark);
            font-weight: 600;
        }
        /* ========== CLOSING ========== */
        .closing {
            background: var(--bg-main);
            text-align: center;
            padding: 110px 28px 120px;
            border-top: 1px solid #ebe6df;
            width: 100%;
        }
        .closing h2 {
            font-size: clamp(2.1rem, 4.8vw, 3rem);
            font-weight: 750;
            line-height: 1.4;
            margin-bottom: 20px;
            word-break: keep-all;
            color: var(--text-dark);
        }
        .closing p {
            font-size: 1.22rem;
            color: var(--text-gray);
            word-break: keep-all;
            max-width: 480px;
            margin: 0 auto 40px;
        }
        .cta-btn {
            display: inline-block;
            background: linear-gradient(135deg, #d4b84a, #b8942a);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(201, 162, 39, 0.22);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(201, 162, 39, 0.32);
            background: linear-gradient(135deg, #dbbf55, #c09e32);
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 768px) {
            .hero { padding: 60px 20px 72px; }
            .hero h1 { font-size: 2.3rem; }
            .hero-desc { font-size: 1.18rem; }
            .stat-card h3 { font-size: 1.55rem; }
            .stat-card p { font-size: 1.05rem; }
            .section-title { font-size: 1.95rem; }
            .section-desc { font-size: 1.1rem; }
            .feature-card h4 { font-size: 1.28rem; }
            .feature-card p { font-size: 1.1rem; }
            .recommend-list .label { min-width: 110px; font-size: 0.9rem; }
            .recommend-list .desc { font-size: 1.08rem; }
            .tg-text { font-size: 1.08rem; }
            .profile-info h3 { font-size: 1.9rem; }
            .history li { font-size: 1.08rem; }
            .closing h2 { font-size: 2rem; }
            .closing p { font-size: 1.15rem; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
            .hero-stats { grid-template-columns: 1fr; max-width: 340px; }
            .card-grid { grid-template-columns: 1fr; }
            .profile-grid { grid-template-columns: 1fr; gap: 36px; }
            .book { max-width: 250px; }
            section { padding: 72px 0; }
            .closing { padding: 80px 20px 90px; }
            .recommend-card { padding: 32px 24px; }
        }
    </style>
</head>
<body>
    <!-- HERO -->
    <section class="hero" id="hero">
        <div class="hero-badge">VIP PREMIUM</div>
        <h1>주식은 정보력과 타점력에서<br>
            <span class="highlight">승부가 갈립니다</span>
        </h1>
        <p class="hero-desc">
            국내 최고의 정보력 + 장중 고점에서 익절하는 타점력.<br>
            같은 종목을 매매하더라도 타점력에 따라<br>
            수익률은 하늘과 땅 차이입니다.
        </p>
        <div class="hero-stats">
            <div class="stat-card">
                <h3>정보력</h3>
                <p>시장을 관통하는 시선</p>
            </div>
            <div class="stat-card">
                <h3>타점력</h3>
                <p>장중 고점 익절</p>
            </div>
        </div>
    </section>
    <!-- STRATEGY -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">이겨놓고 싸우는<br><span>골드마스터만의 투자방법</span></h2>
            <p class="section-desc">
                이겨놓고 싸우는 주식고수로 인정받고 있는<br>
                골드마스터만의 특별한 주식 세계입니다.
            </p>
            <div class="card-grid">
                <div class="feature-card">
                    <div class="icon"><i class="fa-solid fa-clock"></i></div>
                    <h4>시간 없는 직장인을 위한 방식</h4>
                    <p>대부분 장중 시간이 없는 직장인이라 생각하고, 매수할 때도 하던 일을 하면서 편안하게, 익절할 때도 큰 수익이 난 후 여유 있게 정리하는 방식을 지향합니다.</p>
                </div>
                <div class="feature-card">
                    <div class="icon"><i class="fa-solid fa-chart-line"></i></div>
                    <h4>1~3주 주도주 스윙</h4>
                    <p>스윙종목은 직장인도 쉽게 따라할 수 있도록 1~3주 시장 주도주로 투자합니다. 짧고 명확한 흐름에 집중합니다.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- 추천종목 특징 -->
    <section class="recommend-section">
        <div class="container fade-in">
            <h2 class="section-title">골드마스터반<br><span>추천종목 특징</span></h2>
            <div class="recommend-card">
                <ul class="recommend-list">
                    <li>
                        <div class="label">스윙종목</div>
                        <div class="desc">직장인도 쉽게 따라할 수 있게 <strong>1~3주 시장 주도주</strong>로 투자하는 방식</div>
                    </li>
                    <li>
                        <div class="label">중기 핵심주력주</div>
                        <div class="desc">지속적인 시장 주도주로 <strong>대시세 가능 종목</strong>으로 압축</div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!-- TELEGRAM -->
    <section class="tg-section">
        <div class="container fade-in">
            <h2 class="section-title">실시간으로 전달되는<br><span>매매 시그널</span></h2>
            <div class="telegram-box">
                <div class="tg-header">
                    <div class="tg-avatar">GM</div>
                    <div class="tg-info">
                        <h5>골드마스터반 (매수/매도)</h5>
                        <p>공식 실시간 VIP 리딩방</p>
                    </div>
                </div>
                <div class="tg-body">
                    <div class="tg-msg">
                        <span class="tg-sender">골드마스터반 (매수/매도)</span>
                        <div class="tg-text">(스윙종목) 우리기술 1차매수 11900원~11600원</div>
                        <div class="tg-meta">
                            <div class="tg-emojis">
                                <span class="emoji-badge">❤️ 15</span>
                                <span class="emoji-badge">😆 1</span>
                                <span class="emoji-badge">👌 1</span>
                            </div>
                            <div class="tg-status"><i class="fa-regular fa-eye"></i> 220 · 오전 9:01</div>
                        </div>
                    </div>
                    <div class="tg-msg">
                        <span class="tg-sender">골드마스터반 (매수/매도)</span>
                        <div class="tg-text">한빛레이저 4680원 부근 일부매도, 4600원 이탈 시 최종매도</div>
                        <div class="tg-meta">
                            <div class="tg-emojis">
                                <span class="emoji-badge">❤️ 12</span>
                                <span class="emoji-badge">🤣 6</span>
                                <span class="emoji-badge">👑 1</span>
                            </div>
                            <div class="tg-status"><i class="fa-regular fa-eye"></i> 225 · 오전 10:18</div>
                        </div>
                    </div>
                    <div class="tg-msg">
                        <span class="tg-sender">골드마스터반 (매수/매도)</span>
                        <div class="tg-text">(스윙종목) SK스퀘어 1차매수 96만원~94만원, 모아가갑니다</div>
                        <div class="tg-meta">
                            <div class="tg-emojis">
                                <span class="emoji-badge">❤️ 21</span>
                                <span class="emoji-badge">👌 4</span>
                                <span class="emoji-badge">🤩 2</span>
                            </div>
                            <div class="tg-status"><i class="fa-regular fa-eye"></i> 625 · 오전 11:26</div>
                        </div>
                    </div>
                    <div class="tg-msg">
                        <span class="tg-sender">골드마스터반 (매수/매도)</span>
                        <div class="tg-text">삼성SDI 482000원 부근 일부매도, 48만원 이탈 시 최종매도</div>
                        <div class="tg-meta">
                            <div class="tg-emojis">
                                <span class="emoji-badge">👌 8</span>
                                <span class="emoji-badge">🤣 6</span>
                                <span class="emoji-badge">❤️ 4</span>
                            </div>
                            <div class="tg-status"><i class="fa-regular fa-eye"></i> 857 · 오후 2:21</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- PROFILE -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">검증된 <span>경험과 이력</span></h2>
            <div class="profile-grid">
                <div class="book">
                    <div class="book-x"></div>
                    <div class="book-top">종목 발굴 이렇게 하라</div>
                    <div class="book-title">
                        <span class="sub">실전</span>
                        <span class="main">증권사관학교</span>
                        <span class="xfile">X파일</span>
                    </div>
                    <div class="book-footer">베스트셀러 · 직접 집필</div>
                </div>
                <div class="profile-info">
                    <h3>골드마스터</h3>
                    <span class="role">시장이 인정한 실전 고수</span>
                    <ul class="history">
                        <li><i class="fa-solid fa-check"></i> <span><strong>현) 제이앤비주식사관학교 (윌클럽) 대표</strong></span></li>
                        <li><i class="fa-solid fa-check"></i> <span><strong>현) M&A 지도자 자격 보유</strong></span></li>
                        <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 증권사관학교 전임강사</span></li>
                        <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 한밤의 증시카페」 고정 출연</span></li>
                        <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「생방송 개미천국」 고정 출연</span></li>
                        <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 증시전망대」, 「굿모닝 투자의 아침」 등 다수 출연</span></li>
                        <li><i class="fa-solid fa-check"></i> <span>저서 「증권사관학교 X파일」 집필</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- CLOSING -->
    <section class="closing">
        <h2>시간은 멈추지 않습니다.</h2>
        <p>골드마스터를 선택하는 순간<br>당신은 흐름의 중심에 서게 됩니다.</p>
        <button class="cta-btn" type="button" id="joinBtn">
            골드마스터반 가입하기
        </button>
    </section>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const hero = document.getElementById('hero');
            setTimeout(() => hero.classList.add('loaded'), 80);

            const faders = document.querySelectorAll('.fade-in');
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
            faders.forEach(el => fadeObserver.observe(el));

            const messages = document.querySelectorAll('.tg-msg');
            const msgObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('active'), index * 130);
                        msgObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.45, rootMargin: "0px 0px -20% 0px" });
            messages.forEach(msg => msgObserver.observe(msg));

            // postMessage만 전송 (location.href 없음)
            document.getElementById('joinBtn').addEventListener('click', function () {
                try {
                    window.parent.postMessage({ type: 'WILLCLUB_CLICK_PAY' }, '*');
                } catch (e) {}
            });
        });
    <\/script>
</body>
</html>`,options:[{id:"f006f927-ae04-402c-9da4-ab6f2fb28676",product_id:"2914806e-da08-4649-9ca3-7cda12f61089",base_period:1,bonus_period:0,price:6e5,sort_order:0,is_popular:!1},{id:"07c8d023-1b5b-4318-8cd3-0dfa6f5a4514",product_id:"2914806e-da08-4649-9ca3-7cda12f61089",base_period:2,bonus_period:.5,price:12e5,sort_order:1,is_popular:!1},{id:"39c4da8f-6fb4-40e6-b71b-5541aaa58deb",product_id:"2914806e-da08-4649-9ca3-7cda12f61089",base_period:3,bonus_period:1,price:18e5,sort_order:2,is_popular:!0}]},{id:"9586ec78-0bdc-44e5-9f2d-a294556f904f",product_name:"단타반",category:"",expert_id:"8bd3703c-2f94-4067-b366-f97323116386",expert_name:"골드마스터",monthly_price:14e5,profile_image:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788152593215.png",event_text:null,detail_description:null,detail_image:null,first_come_count:null,first_come_started_at:null,time_attack_seconds:null,time_attack_end_at:null,sort_order:0,mb_id:"expert1",detail_html:`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>단타 ETF반 | 골드마스터</title>
    <link href="https://ff.kiro.sh/fonts/pretendard.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root {
            --bg: #fbfaf9;
            --card: #ffffff;
            --accent: #00631b;
            --text: #1c1b19;
            --text-sub: #5c574f;
            --text-light: #8a847a;
            --border: #ebe6df;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.03em;
        }
        body {
            background: var(--bg);
            color: var(--text);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(32px);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 880px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HERO ========== */
        .hero {
            text-align: center;
            padding: 96px 28px 88px;
        }
        .hero-badge {
            display: inline-block;
            background: var(--accent);
            color: #fff;
            font-size: 0.82rem;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 50px;
            letter-spacing: 0.1em;
            margin-bottom: 36px;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hero h1 {
            font-size: clamp(2.3rem, 5vw, 3.4rem);
            font-weight: 800;
            line-height: 1.35;
            margin-bottom: 28px;
            word-break: keep-all;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
        }
        .hero h1 span {
            color: var(--accent);
        }
        .hero-desc {
            font-size: 1.22rem;
            color: var(--text-sub);
            max-width: 560px;
            margin: 0 auto;
            line-height: 1.85;
            word-break: keep-all;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.24s;
        }
        .hero.loaded .hero-badge,
        .hero.loaded h1,
        .hero.loaded .hero-desc {
            opacity: 1;
            transform: translateY(0);
        }
        /* ========== SECTION ========== */
        section {
            padding: 88px 0;
        }
        .section-title {
            font-size: clamp(1.95rem, 4.2vw, 2.55rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 18px;
            word-break: keep-all;
            line-height: 1.4;
        }
        .section-title span {
            color: var(--accent);
        }
        .section-desc {
            text-align: center;
            font-size: 1.15rem;
            color: var(--text-sub);
            max-width: 580px;
            margin: 0 auto 48px;
            line-height: 1.8;
            word-break: keep-all;
        }
        /* ========== FEATURES ========== */
        .feature-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .feature-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 18px;
            padding: 36px 30px;
            transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .feature-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0, 99, 27, 0.08);
            border-color: #d5e5d8;
        }
        .feature-card .num {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--accent);
            letter-spacing: 0.08em;
            margin-bottom: 14px;
        }
        .feature-card h4 {
            font-size: 1.28rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--text);
        }
        .feature-card p {
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== ETF SECTION ========== */
        .etf-box {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 18px;
            padding: 40px 36px;
            max-width: 720px;
            margin: 0 auto;
        }
        .etf-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .etf-list li {
            display: flex;
            gap: 14px;
            align-items: flex-start;
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.6;
            word-break: keep-all;
        }
        .etf-list .code {
            flex-shrink: 0;
            background: #f0f5f1;
            color: var(--accent);
            font-weight: 700;
            font-size: 0.92rem;
            padding: 4px 12px;
            border-radius: 6px;
            min-width: 78px;
            text-align: center;
        }
        .etf-note {
            margin-top: 22px;
            padding-top: 18px;
            border-top: 1px solid var(--border);
            font-size: 1.02rem;
            color: var(--text-light);
            line-height: 1.7;
            word-break: keep-all;
        }
        /* ========== TELEGRAM ========== */
        .telegram-box {
            background: #1a1f26;
            border-radius: 20px;
            max-width: 620px;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 24px 50px rgba(0,0,0,0.12);
        }
        .tg-header {
            background: #232a33;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .tg-avatar {
            width: 42px;
            height: 42px;
            background: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 800;
            font-size: 1rem;
        }
        .tg-info h5 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #fff;
        }
        .tg-info p {
            font-size: 0.84rem;
            color: #9aa3ad;
        }
        .tg-body {
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            background: #1a1f26;
        }
        .tg-msg {
            background: #252d38;
            padding: 14px 16px;
            border-radius: 14px 14px 14px 4px;
            max-width: 94%;
            opacity: 0;
            transform: translateY(28px) scale(0.96);
            transition: all 0.65s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        .tg-msg.active {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .tg-sender {
            color: #a8d4b0;
            font-weight: 700;
            font-size: 0.98rem;
            display: block;
            margin-bottom: 5px;
        }
        .tg-text {
            font-size: 1.08rem;
            color: #f0f2f5;
            line-height: 1.55;
            word-break: keep-all;
        }
        .tg-time {
            font-size: 0.78rem;
            color: #8b95a0;
            margin-top: 8px;
            text-align: right;
        }
        /* ========== PROFILE ========== */
        .profile-wrap {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 48px 44px;
        }
        .profile-wrap h3 {
            font-size: 1.9rem;
            font-weight: 800;
            margin-bottom: 6px;
        }
        .profile-wrap .role {
            display: block;
            font-size: 1.12rem;
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 28px;
        }
        .history {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 13px;
        }
        .history li {
            display: flex;
            gap: 12px;
            font-size: 1.1rem;
            color: var(--text-sub);
            word-break: keep-all;
        }
        .history li i {
            color: var(--accent);
            margin-top: 5px;
            font-size: 0.9rem;
        }
        .history li strong {
            color: var(--text);
            font-weight: 600;
        }
        /* ========== CLOSING ========== */
        .closing {
            text-align: center;
            padding: 100px 28px 110px;
            border-top: 1px solid var(--border);
        }
        .closing h2 {
            font-size: clamp(1.95rem, 4.5vw, 2.7rem);
            font-weight: 750;
            line-height: 1.4;
            margin-bottom: 18px;
            word-break: keep-all;
        }
        .closing p {
            font-size: 1.18rem;
            color: var(--text-sub);
            word-break: keep-all;
            margin-bottom: 40px;
        }
        .cta-btn {
            display: inline-block;
            background: var(--accent);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            text-decoration: none;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(0, 99, 27, 0.22);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(0, 99, 27, 0.32);
            background: #007a22;
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 768px) {
            .hero { padding: 64px 20px 72px; }
            .hero h1 { font-size: 2.2rem; }
            .hero-desc { font-size: 1.12rem; }
            .section-title { font-size: 1.85rem; }
            .section-desc { font-size: 1.08rem; }
            .feature-grid { grid-template-columns: 1fr; }
            .feature-card h4 { font-size: 1.2rem; }
            .feature-card p { font-size: 1.05rem; }
            .etf-box { padding: 28px 22px; }
            .etf-list li { font-size: 1.02rem; flex-direction: column; gap: 6px; }
            .profile-wrap { padding: 36px 24px; }
            .profile-wrap h3 { font-size: 1.7rem; }
            .history li { font-size: 1.05rem; }
            .tg-text { font-size: 1.04rem; }
            section { padding: 72px 0; }
            .closing { padding: 80px 20px 90px; }
            .closing h2 { font-size: 1.9rem; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
        }
    </style>
</head>
<body>
    <!-- HERO -->
    <section class="hero" id="hero">
        <div class="hero-badge">DAY TRADING · ETF</div>
        <h1>지수 흐름을 읽는<br><span>정제된 단타 전략</span></h1>
        <p class="hero-desc">
            종목 선별의 복잡함을 덜어내고,<br>
            지수 ETF 한 종목에 집중하는<br>
            간결하고 명확한 매매 체계입니다.
        </p>
    </section>
    <!-- FEATURES -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">핵심을 이루는<br><span>여섯 가지 원칙</span></h2>
            <p class="section-desc">
                불필요한 요소를 배제하고<br>
                안전과 효율에 초점을 둔 구조입니다.
            </p>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="num">01</div>
                    <h4>단일 종목 집중</h4>
                    <p>포트폴리오를 단 한 종목으로 압축합니다. 리딩에 온전히 집중하며 명확하게 대응하는 방식입니다.</p>
                </div>
                <div class="feature-card">
                    <div class="num">02</div>
                    <h4>양방향 대응 구조</h4>
                    <p>지수의 상승과 하락, 반도체와 코스닥의 흐름에 구애받지 않고 공략이 가능한 체계를 유지합니다.</p>
                </div>
                <div class="feature-card">
                    <div class="num">03</div>
                    <h4>당일 청산 원칙</h4>
                    <p>오버나잇을 지양합니다. 미국 시장의 급변에 흔들리지 않는, 당일 단타로 마무리하는 안정적인 방식입니다.</p>
                </div>
                <div class="feature-card">
                    <div class="num">04</div>
                    <h4>세금 부담 최소화</h4>
                    <p>농특세·증권거래세 0.2%가 발생하지 않는 ETF의 특성을 활용해, 초단타에 최적화된 매매를 진행합니다.</p>
                </div>
                <div class="feature-card">
                    <div class="num">05</div>
                    <h4>4분할 진입 전략</h4>
                    <p>1차 매수 시 원금의 25%만 투입합니다. 대부분의 경우 1차 매수만으로 익절이 이루어지는 신중한 접근입니다.</p>
                </div>
                <div class="feature-card">
                    <div class="num">06</div>
                    <h4>2분할 익절 체계</h4>
                    <p>일부 익절 후 나머지를 짧게 홀딩하는 구조로, 수익을 길게 끌지 않고 명확하게 마무리합니다.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- ETF 종목 -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">지수 ETF 6종목 중<br><span>선별 운용</span></h2>
            <p class="section-desc">
                기본 예탁금 1,000만 원.<br>
                접근성이 높아 주로 이 종목군을 중심으로 운용합니다.
            </p>
            <div class="etf-box">
                <ul class="etf-list">
                    <li>
                        <span class="code">494310</span>
                        <span>KODEX 반도체 레버리지 — 반도체 지수 상승 전망 시</span>
                    </li>
                    <li>
                        <span class="code">122630</span>
                        <span>KODEX 레버리지 — 거래소 지수 상승 전망 시</span>
                    </li>
                    <li>
                        <span class="code">233740</span>
                        <span>코스닥150 레버리지 — 코스닥 지수 상승 전망 시</span>
                    </li>
                    <li>
                        <span class="code">252670</span>
                        <span>KODEX 200선물인버스2배 — 거래소 지수 하락 전망 시</span>
                    </li>
                    <li>
                        <span class="code">251340</span>
                        <span>KODEX 코스닥150선물인버스 — 코스닥 지수 하락 전망 시</span>
                    </li>
                    <li>
                        <span class="code">114800</span>
                        <span>KODEX 인버스 — 거래소 지수 하락 전망 시</span>
                    </li>
                </ul>
                <p class="etf-note">
                    ※ 삼전닉스 관련 ETF 4종목은 예탁금 3,000만 원 및 예수금 D+2 이슈로 제한적으로만 운용합니다.
                </p>
            </div>
        </div>
    </section>
    <!-- TELEGRAM -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">실시간 전달되는<br><span>리딩의 현장</span></h2>
            <p class="section-desc">
                텔레그램 채널을 통해<br>
                매수와 익절의 시점이 실시간으로 전달됩니다.
            </p>
            <div class="telegram-box">
                <div class="tg-header">
                    <div class="tg-avatar">GM</div>
                    <div class="tg-info">
                        <h5>단타 ETF반 (골드마스터)</h5>
                        <p>실시간 리딩</p>
                    </div>
                </div>
                <div class="tg-body">
                    <div class="tg-msg">
                        <span class="tg-sender">단타 ETF반 (골드마스터)</span>
                        <div class="tg-text">116400원, 116100원 지금은 2개 매수 체결되어서 평단가 116250원</div>
                        <div class="tg-time">2026-09-08 오전 10:26</div>
                    </div>
                    <div class="tg-msg">
                        <span class="tg-sender">단타 ETF반 (골드마스터)</span>
                        <div class="tg-text">122630  116700원 부근 일부익절</div>
                        <div class="tg-time">2026-09-08 오전 10:26</div>
                    </div>
                    <div class="tg-msg">
                        <span class="tg-sender">단타 ETF반 (골드마스터)</span>
                        <div class="tg-text">나머진 116500원 이탈시 최종익절</div>
                        <div class="tg-time">2026-09-08 오전 10:26</div>
                    </div>
                    <div class="tg-msg">
                        <span class="tg-sender">단타 ETF반 (골드마스터)</span>
                        <div class="tg-text">122630  117200원 부근 일부익절</div>
                        <div class="tg-time">2026-09-08 오전 10:36</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- PROFILE -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">검증된<br><span>경험과 이력</span></h2>
            <div class="profile-wrap">
                <h3>골드마스터</h3>
                <span class="role">제이앤비주식사관학교 (윌클럽) 대표</span>
                
                <ul class="history">
                    <li><i class="fa-solid fa-check"></i> <span><strong>현) 제이앤비주식사관학교 (윌클럽) 대표</strong></span></li>
                    <li><i class="fa-solid fa-check"></i> <span><strong>현) M&A 지도자 자격 보유</strong></span></li>
                    <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 증권사관학교 전임강사</span></li>
                    <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 한밤의 증시카페」 고정 출연</span></li>
                    <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「생방송 개미천국」 고정 출연</span></li>
                    <li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 증시전망대」, 「굿모닝 투자의 아침」 등 다수 출연</span></li>
                    <li><i class="fa-solid fa-check"></i> <span>저서 「증권사관학교 X파일」 집필</span></li>
                </ul>
            </div>
        </div>
    </section>
    <!-- CLOSING -->
    <section class="closing">
        <h2>복잡한 선택 대신,<br>명확한 한 종목.</h2>
        <p>복잡한 시장의 흐름 속에서 확실한 결과로 마무리 합니다.</p>
        <button class="cta-btn" type="button" id="joinBtn">
            ETF단타반 가입하기
        </button>
    </section>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const hero = document.getElementById('hero');
            setTimeout(() => hero.classList.add('loaded'), 60);

            const faders = document.querySelectorAll('.fade-in');
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
            faders.forEach(el => fadeObserver.observe(el));

            const messages = document.querySelectorAll('.tg-msg');
            const msgObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('active'), index * 140);
                        msgObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4, rootMargin: "0px 0px -15% 0px" });
            messages.forEach(msg => msgObserver.observe(msg));

            // 가입하기 → 부모 페이지 상단 「결제하기」와 동일 처리
            document.getElementById('joinBtn').addEventListener('click', function () {
                try {
                    window.parent.postMessage({ type: 'WILLCLUB_CLICK_PAY' }, '*');
                } catch (e) {}
            });
        });
    <\/script>
</body>
</html>`,options:[{id:"b1edee75-30b3-4d25-bdc5-40ef8548ca12",product_id:"9586ec78-0bdc-44e5-9f2d-a294556f904f",base_period:.25,bonus_period:0,price:37e4,sort_order:0,is_popular:!1},{id:"2b916793-1672-4111-aea2-44b8b7ea2853",product_id:"9586ec78-0bdc-44e5-9f2d-a294556f904f",base_period:1,bonus_period:0,price:14e5,sort_order:1,is_popular:!1},{id:"e208172b-7d68-4c3a-aa6f-e0c164999151",product_id:"9586ec78-0bdc-44e5-9f2d-a294556f904f",base_period:3,bonus_period:1,price:42e5,sort_order:2,is_popular:!1}]},{id:"7b415e2e-bc16-4e29-be7f-5bf11f446292",product_name:"골드텐버거반",category:"",expert_id:"8bd3703c-2f94-4067-b366-f97323116386",expert_name:"골드마스터",monthly_price:4e5,profile_image:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788152634842.png",event_text:null,detail_description:null,detail_image:null,first_come_count:null,first_come_started_at:null,time_attack_seconds:null,time_attack_end_at:null,sort_order:3,mb_id:"expert1",detail_html:`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>골드텐버거반이란? | 골드마스터</title>
    <link href="https://ff.kiro.sh/fonts/pretendard.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root {
            --bg: #fbfaf9;
            --card: #ffffff;
            --accent: #6d0000;
            --accent-light: #8a1a1a;
            --text: #1c1b19;
            --text-sub: #5c574f;
            --text-light: #8a847a;
            --border: #ebe6df;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.03em;
        }
        body {
            background: var(--bg);
            color: var(--text);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HEADER ========== */
        .page-header {
            text-align: center;
            padding: 88px 28px 64px;
        }
        .page-header .label {
            display: inline-block;
            background: linear-gradient(135deg, #8a1a1a, #6d0000);
            color: #ffffff;
            font-size: 0.88rem;
            font-weight: 700;
            padding: 10px 24px;
            border-radius: 50px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 28px;
            box-shadow: 0 4px 14px rgba(109, 0, 0, 0.2);
        }
        .page-header h1 {
            font-size: clamp(2.35rem, 5.2vw, 3.2rem);
            font-weight: 800;
            line-height: 1.35;
            word-break: keep-all;
        }
        .page-header h1 span {
            color: var(--accent);
        }
        /* ========== SECTION ========== */
        section {
            padding: 0 0 80px;
        }
        .section-title {
            font-size: clamp(1.9rem, 4.2vw, 2.4rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 36px;
            word-break: keep-all;
            line-height: 1.4;
        }
        .section-title span {
            color: var(--accent);
        }
        /* ========== CONCEPT CARDS ========== */
        .concept-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 72px;
        }
        .concept-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 34px 32px;
            display: flex;
            align-items: flex-start;
            gap: 22px;
            transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .concept-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 32px rgba(109, 0, 0, 0.06);
            border-color: #e5d9d4;
        }
        .concept-card .icon {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            background: #f7f0ec;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.35rem;
            color: var(--accent);
        }
        .concept-card .content h3 {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--text);
            word-break: keep-all;
        }
        .concept-card .content p {
            font-size: 1.15rem;
            color: var(--text-sub);
            line-height: 1.75;
            word-break: keep-all;
        }
        .concept-card .content .sub {
            display: block;
            margin-top: 8px;
            font-size: 1.08rem;
            color: var(--text-light);
        }
        /* ========== TARGET ========== */
        .target-box {
            background: #3d1a1a;
            border-radius: 18px;
            padding: 42px 38px;
            margin-bottom: 72px;
            color: #fff;
        }
        .target-box h3 {
            font-size: 1.45rem;
            font-weight: 700;
            margin-bottom: 28px;
            line-height: 1.5;
            word-break: keep-all;
            text-align: center;
        }
        .target-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .target-list li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 1.14rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.92);
            word-break: keep-all;
        }
        .target-list li::before {
            content: '';
            flex-shrink: 0;
            width: 6px;
            height: 6px;
            background: #e8b4b4;
            border-radius: 50%;
            margin-top: 11px;
        }
        /* ========== SUMMARY ========== */
        .summary-grid {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .summary-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 28px 30px;
            text-align: center;
            transition: all 0.35s ease;
        }
        .summary-card:hover {
            border-color: #e0d0c8;
            box-shadow: 0 10px 28px rgba(109, 0, 0, 0.05);
        }
        .summary-card h4 {
            font-size: 1.28rem;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 10px;
            word-break: keep-all;
        }
        .summary-card p {
            font-size: 1.1rem;
            color: var(--text-sub);
            line-height: 1.65;
            word-break: keep-all;
        }
        /* ========== CLOSING + CTA ========== */
        .closing {
            text-align: center;
            padding: 72px 28px 100px;
            border-top: 1px solid var(--border);
            width: 100%;
        }
        .closing h2 {
            font-size: clamp(1.95rem, 4.5vw, 2.6rem);
            font-weight: 750;
            line-height: 1.45;
            margin-bottom: 18px;
            word-break: keep-all;
            color: var(--text);
        }
        .closing p {
            font-size: 1.18rem;
            color: var(--text-sub);
            word-break: keep-all;
            margin-bottom: 40px;
            line-height: 1.7;
        }
        .cta-btn {
            display: inline-block;
            background: var(--accent);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(109, 0, 0, 0.22);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(109, 0, 0, 0.32);
            background: #8a0000;
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 640px) {
            .page-header { padding: 64px 20px 40px; }
            .page-header h1 { font-size: 2.15rem; }
            .section-title { font-size: 1.85rem; }
            .concept-card {
                flex-direction: column;
                gap: 14px;
                padding: 28px 24px;
            }
            .concept-card .content h3 { font-size: 1.22rem; }
            .concept-card .content p { font-size: 1.1rem; }
            .target-box { padding: 34px 24px; }
            .target-box h3 { font-size: 1.3rem; }
            .target-list li { font-size: 1.1rem; }
            .summary-card { padding: 24px 22px; }
            .summary-card h4 { font-size: 1.2rem; }
            .summary-card p { font-size: 1.06rem; }
            .closing { padding: 56px 20px 80px; }
            .closing h2 { font-size: 1.9rem; }
            .closing p { font-size: 1.12rem; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
        }
    </style>
</head>
<body>
    <div class="page-header">
        <div class="label">GOLD TENBAGGER</div>
        <h1>골드텐버거반이란<span>?</span></h1>
    </div>
    <div class="container">
        <!-- 핵심 개념 -->
        <section>
            <div class="concept-list">
                <div class="concept-card fade-in">
                    <div class="icon"><i class="fa-solid fa-chart-line"></i></div>
                    <div class="content">
                        <h3>중장기 관점의 수익 극대화</h3>
                        <p>투자기간을 확장하여, 단기 변동에 흔들리지 않고 더 큰 수익을 추구하는 방식입니다.</p>
                    </div>
                </div>
                <div class="concept-card fade-in">
                    <div class="icon"><i class="fa-solid fa-clipboard-check"></i></div>
                    <div class="content">
                        <h3>주기적인 흐름 점검</h3>
                        <p>텔레그램 골드텐버거반에서 추천된 종목은 정기적으로 흐름을 점검하며 관리합니다.</p>
                    </div>
                </div>
                <div class="concept-card fade-in">
                    <div class="icon"><i class="fa-solid fa-mug-hot"></i></div>
                    <div class="content">
                        <h3>바닥권에서의 여유로운 매집</h3>
                        <p>가격이 바닥권에 위치할 때, 여유를 두고 모아가는 세부 전략을 제시합니다.</p>
                        <span class="sub">1차~3차 매수로 부담 없이 진행</span>
                    </div>
                </div>
                <div class="concept-card fade-in">
                    <div class="icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
                    <div class="content">
                        <h3>상승 구간에서의 체계적 익절</h3>
                        <p>본격적인 상승 흐름이 전개되면, 목표가(50~300%) 도달 시점에 맞춰 1~3차에 걸쳐 수익을 극대화할 수 있도록 상세 익절 전략을 안내합니다.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- 이런 분들에게 -->
        <section>
            <h2 class="section-title fade-in">이런 투자자에게<br><span>의미가 있습니다</span></h2>
            <div class="target-box fade-in">
                <h3>골드텐버거반은<br>이런 투자자에게 희망이 됩니다.</h3>
                <ul class="target-list">
                    <li>시간적 여유가 없어, 복잡하게 신경 쓰지 않고 투자하고 싶은 분</li>
                    <li>수익이 날 때는 소폭에 그치고, 손실이 날 때는 크게 확대해 본 경험이 있는 분</li>
                    <li>뇌동매매와 잦은 매매로 손절이 반복되며 자신감이 낮아진 분</li>
                    <li>한 번의 수익으로 50~300% 이상의 성과를 경험해 본 적이 없는 분</li>
                    <li>좋은 주식과 안전한 주식을 구분하는 기본적인 판단조차 부담스러운 분</li>
                    <li>중기 관점에서 상위 1% 실적주로, 손절 없는 매매를 경험하고 싶은 분</li>
                    <li>매 분기·매년 배당을 받으며 꾸준한 상승을 누리고 싶은 분</li>
                </ul>
            </div>
        </section>
        <!-- 운영 요약 -->
        <section>
            <h2 class="section-title fade-in">운영의<br><span>핵심 기준</span></h2>
            <div class="summary-grid">
                <div class="summary-card fade-in">
                    <h4>1년 관심주 20종목 내외로 압축</h4>
                    <p>크게 수익 중인 종목은 별도로 관리합니다.</p>
                </div>
                <div class="summary-card fade-in">
                    <h4>투자기간 1개월 ~ 1년</h4>
                    <p>분기·연배당을 받으며 중기 상승이 가능한 종목을 중심으로 합니다.</p>
                </div>
                <div class="summary-card fade-in">
                    <h4>목표가 50% ~ 300%</h4>
                    <p>목표가 도달 시 신규 포트폴리오로 재정비합니다.</p>
                </div>
            </div>
        </section>
    </div>
    <!-- CLOSING: container 밖으로 빼서 선이 화면 전체로 이어짐 -->
    <div class="closing fade-in">
        <h2>서두르지 않는 자리에<br>큰 흐름이 머뭅니다.</h2>
        <p>바닥에서 모아 두고, 목표가에 닿을 때까지.</p>
        <button class="cta-btn" type="button" id="joinBtn">
            골드텐버거반 가입하기
        </button>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const items = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 80);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            items.forEach(el => observer.observe(el));

            document.getElementById('joinBtn').addEventListener('click', function () {
                try {
                    window.parent.postMessage({ type: 'WILLCLUB_CLICK_PAY' }, '*');
                } catch (e) {}
            });
        });
    <\/script>
</body>
</html>`,options:[{id:"99e4223b-6d09-4728-86de-896fe333a408",product_id:"7b415e2e-bc16-4e29-be7f-5bf11f446292",base_period:1,bonus_period:0,price:4e5,sort_order:0,is_popular:!1},{id:"21d152e6-b4e2-42b3-8722-a445f9789eab",product_id:"7b415e2e-bc16-4e29-be7f-5bf11f446292",base_period:2,bonus_period:.5,price:8e5,sort_order:1,is_popular:!1}]},{id:"e46427ed-40fc-4e10-91f8-12a83d34253e",product_name:"꽃게선생반",category:"",expert_id:"a92bf325-8f3a-48b1-b656-4b323c5f5d69",expert_name:"꽃게선생",monthly_price:5e5,profile_image:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788397804758.png",event_text:null,detail_description:"꽃게선생의 알기 쉬운 기초 투자 입문",detail_image:null,first_come_count:30,first_come_started_at:"$D2026-10-08T06:49:51.170Z",time_attack_seconds:null,time_attack_end_at:"$D2026-10-10T06:56:09.757Z",sort_order:5,mb_id:"expert3",detail_html:`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>꽃게선생 | 매매의 대가</title>
    <link href="https://ff.kiro.sh/fonts/pretendard.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        :root {
            --bg: #fbfaf9;
            --card: #ffffff;
            --accent: #5B2C6F;
            --accent-soft: #7D3C98;
            --text: #1c1b19;
            --text-sub: #5c574f;
            --text-light: #8a847a;
            --border: #ebe6df;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.03em;
        }
        body {
            background: var(--bg);
            color: var(--text);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 880px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HERO ========== */
        .hero {
            text-align: center;
            padding: 96px 28px 80px;
        }
        .hero-badge {
            display: inline-block;
            background: var(--accent);
            color: #fff;
            font-size: 0.88rem;
            font-weight: 600;
            padding: 9px 22px;
            border-radius: 50px;
            letter-spacing: 0.08em;
            margin-bottom: 32px;
        }
        .hero h1 {
            font-size: clamp(2.3rem, 5.2vw, 3.4rem);
            font-weight: 800;
            line-height: 1.35;
            margin-bottom: 24px;
            word-break: keep-all;
        }
        .hero h1 span {
            color: var(--accent);
        }
        .hero-desc {
            font-size: 1.22rem;
            color: var(--text-sub);
            max-width: 580px;
            margin: 0 auto 20px;
            line-height: 1.85;
            word-break: keep-all;
        }
        .hero-sub {
            font-size: 1.12rem;
            color: var(--text-light);
            word-break: keep-all;
        }
        /* ========== SECTION ========== */
        section {
            padding: 80px 0;
        }
        .section-title {
            font-size: clamp(1.9rem, 4.2vw, 2.5rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 16px;
            word-break: keep-all;
            line-height: 1.4;
        }
        .section-title span {
            color: var(--accent);
        }
        .section-desc {
            text-align: center;
            font-size: 1.15rem;
            color: var(--text-sub);
            max-width: 560px;
            margin: 0 auto 48px;
            line-height: 1.8;
            word-break: keep-all;
        }
        /* ========== VALUE CARDS ========== */
        .value-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 18px;
        }
        .value-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.4s ease;
        }
        .value-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 36px rgba(91, 44, 111, 0.08);
            border-color: #ddd0e8;
        }
        .value-card .icon {
            width: 52px;
            height: 52px;
            background: #f3eef7;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px;
            font-size: 1.35rem;
            color: var(--accent);
        }
        .value-card h4 {
            font-size: 1.18rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .value-card p {
            font-size: 1.05rem;
            color: var(--text-sub);
            line-height: 1.65;
            word-break: keep-all;
        }
        /* ========== PRINCIPLES ========== */
        .principle-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .principle-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 30px 28px;
            display: flex;
            align-items: flex-start;
            gap: 20px;
            transition: all 0.4s ease;
        }
        .principle-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(91, 44, 111, 0.07);
        }
        .principle-card .num {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            background: var(--accent);
            color: #fff;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.05rem;
        }
        .principle-card h4 {
            font-size: 1.22rem;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .principle-card p {
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.7;
            word-break: keep-all;
        }
        /* ========== HOW IT WORKS ========== */
        .step-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .step-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 28px 26px;
            display: flex;
            gap: 20px;
            align-items: flex-start;
        }
        .step-card .step-num {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            background: #f3eef7;
            color: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.1rem;
        }
        .step-card h4 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .step-card p {
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.7;
            word-break: keep-all;
        }
        /* ========== SCHEDULE ========== */
        .schedule-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .schedule-item {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 24px 26px;
            display: flex;
            gap: 18px;
            align-items: flex-start;
        }
        .schedule-item .time-icon {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            background: #f3eef7;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: var(--accent);
        }
        .schedule-item h4 {
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .schedule-item p {
            font-size: 1.05rem;
            color: var(--text-sub);
            line-height: 1.65;
            word-break: keep-all;
        }
        .schedule-note {
            margin-top: 28px;
            text-align: center;
            font-size: 1.08rem;
            color: var(--text-light);
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== CLOSING ========== */
        .closing {
            text-align: center;
            padding: 90px 28px 100px;
            border-top: 1px solid var(--border);
            width: 100%;
        }
        .closing h2 {
            font-size: clamp(1.9rem, 4.5vw, 2.6rem);
            font-weight: 750;
            line-height: 1.4;
            margin-bottom: 18px;
            word-break: keep-all;
        }
        .closing p {
            font-size: 1.18rem;
            color: var(--text-sub);
            max-width: 520px;
            margin: 0 auto 40px;
            word-break: keep-all;
            line-height: 1.8;
        }
        .cta-btn {
            display: inline-block;
            background: var(--accent);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(91, 44, 111, 0.25);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(91, 44, 111, 0.35);
            background: var(--accent-soft);
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 768px) {
            .hero { padding: 64px 20px 60px; }
            .hero h1 { font-size: 2.2rem; }
            .hero-desc { font-size: 1.12rem; }
            .value-grid { grid-template-columns: 1fr; }
            .section-title { font-size: 1.85rem; }
            .principle-card, .step-card, .schedule-item {
                padding: 24px 20px;
            }
            .principle-card h4, .step-card h4 { font-size: 1.15rem; }
            .principle-card p, .step-card p { font-size: 1.05rem; }
            section { padding: 64px 0; }
            .closing { padding: 70px 20px 80px; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
        }
    </style>
</head>
<body>
    <!-- HERO -->
    <section class="hero">
        <div class="hero-badge">꽃게선생</div>
        <h1>끼있는 대형주 · 업종대표주<br><span>시장주도주</span></h1>
        <p class="hero-desc">
            매매의 대가가 맥점에서<br>
            선별하여 전달합니다.
        </p>
        <p class="hero-sub">
            24시간 시장을 관찰하고,<br>
            매일 오전 8시부터 장중 실시간으로<br>
            주도주 매수·매도 시점을 텔레그램으로 안내합니다.
        </p>
    </section>
    <!-- CORE VALUE -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">종목 분석과 선택의<br><span>부담을 덜어드립니다</span></h2>
            <p class="section-desc">
                꽃게선생이 맥점에서<br>
                핵심만 선별하여 전달합니다.
            </p>
            <div class="value-grid">
                <div class="value-card">
                    <div class="icon"><i class="fa-solid fa-compass"></i></div>
                    <h4>흔들림 없는 방향성</h4>
                    <p>명확한 전략 제시로<br>안정적인 매매를 이어갑니다</p>
                </div>
                <div class="value-card">
                    <div class="icon"><i class="fa-solid fa-bolt"></i></div>
                    <h4>시장의 흐름을 반영</h4>
                    <p>최신 트렌드를 실시간으로 담아<br>타이밍을 놓치지 않습니다</p>
                </div>
                <div class="value-card">
                    <div class="icon"><i class="fa-solid fa-rotate"></i></div>
                    <h4>간결한 익절과 관리</h4>
                    <p>복잡한 구성 없이<br>단순하고 명확하게 운영합니다</p>
                </div>
            </div>
        </div>
    </section>
    <!-- PRINCIPLES -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">세 가지 핵심<br><span>투자 원칙</span></h2>
            <p class="section-desc">
                시장을 읽고, 주도주 중심의 공략을 통해<br>
                투자의 흐름을 경험하실 수 있도록 합니다.
            </p>
            <div class="principle-list">
                <div class="principle-card">
                    <div class="num">01</div>
                    <div>
                        <h4>주도 섹터와 이슈 테마</h4>
                        <p>자금이 집중되는 섹터와 테마를 먼저 파악하고, 그 흐름에 올라탑니다.</p>
                    </div>
                </div>
                <div class="principle-card">
                    <div class="num">02</div>
                    <div>
                        <h4>시장 대장주 중심 공략</h4>
                        <p>각 섹터의 대장주를 중심으로 접근하여 승률과 수익성을 높입니다.</p>
                    </div>
                </div>
                <div class="principle-card">
                    <div class="num">03</div>
                    <div>
                        <h4>리스크를 관리하는 전략</h4>
                        <p>위험을 통제하며 꾸준히 성과를 쌓아가는 안정적인 방식을 제시합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- HOW IT WORKS -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">이용 방법<br><span>매일의 진행 방식</span></h2>
            <p class="section-desc">
                복잡한 분석은 꽃게선생이 담당합니다.<br>
                회원님은 맥점에서 실행에만 집중하시면 됩니다.
            </p>
            <div class="step-list">
                <div class="step-card">
                    <div class="step-num">1</div>
                    <div>
                        <h4>24시간 시장 관찰</h4>
                        <p>밤새 해외·국내 이슈를 점검하여 당일 주도 섹터와 종목을 미리 정리합니다.</p>
                    </div>
                </div>
                <div class="step-card">
                    <div class="step-num">2</div>
                    <div>
                        <h4>오전 8시부터 실시간 전달</h4>
                        <p>장 시작 전부터 장중 내내, 상황에 맞는 주도주를 선별해 텔레그램으로 안내합니다.</p>
                    </div>
                </div>
                <div class="step-card">
                    <div class="step-num">3</div>
                    <div>
                        <h4>매수·매도 시점까지 알림</h4>
                        <p>종목 제시에서 그치지 않습니다. 매수 타이밍과 익절 시점까지 실시간으로 전달합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- DAILY SCHEDULE -->
    <section>
        <div class="container fade-in">
            <h2 class="section-title">하루 일정<br><span>실시간 관리 구조</span></h2>
            <p class="section-desc">
                억지로 종목을 구성하지 않습니다.<br>
                확실한 맥점이 있을 때만 선별하여 전달합니다.
            </p>
            <div class="schedule-list">
                <div class="schedule-item">
                    <div class="time-icon"><i class="fa-solid fa-moon"></i></div>
                    <div>
                        <h4>전일 밤 ~ 새벽</h4>
                        <p>해외 시장과 국내 이슈를 점검하고, 당일 주도 섹터 후보를 정리합니다.</p>
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="time-icon"><i class="fa-solid fa-clock"></i></div>
                    <div>
                        <h4>오전 8시 ~ 장 시작</h4>
                        <p>장 시작 전 주도주와 설명을 텔레그램으로 1차 전달합니다.</p>
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="time-icon"><i class="fa-solid fa-chart-line"></i></div>
                    <div>
                        <h4>장중 실시간</h4>
                        <p>수급과 차트 변화에 따라 추가 종목과 매수·매도 타이밍을 실시간으로 안내합니다.</p>
                    </div>
                </div>
                <div class="schedule-item">
                    <div class="time-icon"><i class="fa-solid fa-check"></i></div>
                    <div>
                        <h4>장 마감 후</h4>
                        <p>당일 정리와 다음 날 방향성을 공유합니다.</p>
                    </div>
                </div>
            </div>
            <p class="schedule-note">
                하루 추천 종목은 시장 상황에 따라<br>
                0종목에서 최대 3~4종목까지 선별합니다.<br>
                무리한 매매를 유도하지 않습니다.
            </p>
        </div>
    </section>
    <!-- CLOSING -->
    <section class="closing">
        <h2>핵심종목만 콕 찝어서!<br>꽃게선생과 함께하세요</h2>
        <p>
            메이저 수급이 유입되는 핵심 종목,<br>
            매일 맥점에서 선별하여<br>
            매수·매도 시점까지 안내합니다.
        </p>
        <button class="cta-btn" type="button" id="joinBtn">
            꽃게선생반 가입하기
        </button>
    </section>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const faders = document.querySelectorAll('.fade-in');
            const fadeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        fadeObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            faders.forEach(el => fadeObserver.observe(el));

            document.getElementById('joinBtn').addEventListener('click', function () {
                try {
                    window.parent.postMessage({ type: 'WILLCLUB_CLICK_PAY' }, '*');
                } catch (e) {}
            });
        });
    <\/script>
</body>
</html>`,options:[{id:"b64a4923-3e5b-47af-b0a0-8e50767c0867",product_id:"e46427ed-40fc-4e10-91f8-12a83d34253e",base_period:1,bonus_period:0,price:5e5,sort_order:0,is_popular:!1},{id:"ccc2def6-18e9-4900-be15-01d795f2b242",product_id:"e46427ed-40fc-4e10-91f8-12a83d34253e",base_period:2,bonus_period:.5,price:1e6,sort_order:1,is_popular:!1},{id:"799d321e-8dca-46ff-844a-8ac543bc355e",product_id:"e46427ed-40fc-4e10-91f8-12a83d34253e",base_period:3,bonus_period:2,price:15e5,sort_order:2,is_popular:!0}]}];

const ks={capturedAt:"2026-10-08",source:"/vip",products:[{key:"gold",id:"2914806e-da08-4649-9ca3-7cda12f61089",name:"골드마스터반",expert:"gold",expertName:"골드마스터",image:"/vip/gold.png",sourceImage:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788135374088.png",href:"/vip?vip_product_id=2914806e-da08-4649-9ca3-7cda12f61089",headline:"주식은 정보력과 타점력에서 승부가 갈립니다",features:[{title:"정보력",text:"시장을 관통하는 시선"},{title:"타점력",text:"장중 고점 익절"},{title:"시간 없는 직장인을 위한 방식",text:"대부분 장중 시간이 없는 직장인이라 생각하고, 매수할 때도 하던 일을 하면서 편안하게, 익절할 때도 큰 수익이 난 후 여유 있게 정리하는 방식을 지향합니다."},{title:"1~3주 주도주 스윙",text:"스윙종목은 직장인도 쉽게 따라할 수 있도록 1~3주 시장 주도주로 투자합니다. 짧고 명확한 흐름에 집중합니다."}],details:[{type:"h1",text:"주식은 정보력과 타점력에서 승부가 갈립니다"},{type:"p",text:"국내 최고의 정보력 + 장중 고점에서 익절하는 타점력. 같은 종목을 매매하더라도 타점력에 따라 수익률은 하늘과 땅 차이입니다."},{type:"h3",text:"정보력"},{type:"p",text:"시장을 관통하는 시선"},{type:"h3",text:"타점력"},{type:"p",text:"장중 고점 익절"},{type:"h2",text:"이겨놓고 싸우는 골드마스터만의 투자방법"},{type:"p",text:"이겨놓고 싸우는 주식고수로 인정받고 있는 골드마스터만의 특별한 주식 세계입니다."},{type:"h4",text:"시간 없는 직장인을 위한 방식"},{type:"p",text:"대부분 장중 시간이 없는 직장인이라 생각하고, 매수할 때도 하던 일을 하면서 편안하게, 익절할 때도 큰 수익이 난 후 여유 있게 정리하는 방식을 지향합니다."},{type:"h4",text:"1~3주 주도주 스윙"},{type:"p",text:"스윙종목은 직장인도 쉽게 따라할 수 있도록 1~3주 시장 주도주로 투자합니다. 짧고 명확한 흐름에 집중합니다."},{type:"h2",text:"골드마스터반 추천종목 특징"},{type:"li",text:"스윙종목 직장인도 쉽게 따라할 수 있게 1~3주 시장 주도주 로 투자하는 방식"},{type:"li",text:"중기 핵심주력주 지속적인 시장 주도주로 대시세 가능 종목 으로 압축"},{type:"h2",text:"실시간으로 전달되는 매매 시그널"},{type:"p",text:"공식 실시간 VIP 리딩방"},{type:"h2",text:"검증된 경험과 이력"},{type:"h3",text:"골드마스터"},{type:"li",text:"현) 제이앤비주식사관학교 (윌클럽) 대표"},{type:"li",text:"현) M&A 지도자 자격 보유"},{type:"li",text:"전) 한국경제TV 증권사관학교 전임강사"},{type:"li",text:"전) 한국경제TV 「일요특급 한밤의 증시카페」 고정 출연"},{type:"li",text:"전) 한국경제TV 「생방송 개미천국」 고정 출연"},{type:"li",text:"전) 한국경제TV 「일요특급 증시전망대」, 「굿모닝 투자의 아침」 등 다수 출연"},{type:"li",text:"저서 「증권사관학교 X파일」 집필"},{type:"h2",text:"시간은 멈추지 않습니다."},{type:"p",text:"골드마스터를 선택하는 순간 당신은 흐름의 중심에 서게 됩니다."}],plans:[{id:"gold-plan-1",label:"1개월",months:1,bonusMonths:0,totalMonths:1,amount:6e5,originalAmount:null,monthlyLabel:"월 60만원",popular:!1},{id:"gold-plan-2",label:"2개월 + 무료 0.5개월",months:2,bonusMonths:.5,totalMonths:2.5,amount:12e5,originalAmount:15e5,monthlyLabel:"월 48만원 상당",popular:!1},{id:"gold-plan-3",label:"3개월 + 무료 1개월",months:3,bonusMonths:1,totalMonths:4,amount:18e5,originalAmount:24e5,monthlyLabel:"월 45만원 상당",popular:!0}],event:!1},{key:"day",id:"9586ec78-0bdc-44e5-9f2d-a294556f904f",name:"단타반",expert:"gold",expertName:"골드마스터",image:"/vip/day.png",sourceImage:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788152593215.png",href:"/vip?vip_product_id=9586ec78-0bdc-44e5-9f2d-a294556f904f",headline:"지수 흐름을 읽는 정제된 단타 전략",features:[{title:"단일 종목 집중",text:"포트폴리오를 단 한 종목으로 압축합니다. 리딩에 온전히 집중하며 명확하게 대응하는 방식입니다."},{title:"양방향 대응 구조",text:"지수의 상승과 하락, 반도체와 코스닥의 흐름에 구애받지 않고 공략이 가능한 체계를 유지합니다."},{title:"당일 청산 원칙",text:"오버나잇을 지양합니다. 미국 시장의 급변에 흔들리지 않는, 당일 단타로 마무리하는 안정적인 방식입니다."},{title:"세금 부담 최소화",text:"농특세·증권거래세 0.2%가 발생하지 않는 ETF의 특성을 활용해, 초단타에 최적화된 매매를 진행합니다."},{title:"4분할 진입 전략",text:"1차 매수 시 원금의 25%만 투입합니다. 대부분의 경우 1차 매수만으로 익절이 이루어지는 신중한 접근입니다."},{title:"2분할 익절 체계",text:"일부 익절 후 나머지를 짧게 홀딩하는 구조로, 수익을 길게 끌지 않고 명확하게 마무리합니다."}],details:[{type:"h1",text:"지수 흐름을 읽는 정제된 단타 전략"},{type:"p",text:"종목 선별의 복잡함을 덜어내고, 지수 ETF 한 종목에 집중하는 간결하고 명확한 매매 체계입니다."},{type:"h2",text:"핵심을 이루는 여섯 가지 원칙"},{type:"p",text:"불필요한 요소를 배제하고 안전과 효율에 초점을 둔 구조입니다."},{type:"h4",text:"단일 종목 집중"},{type:"p",text:"포트폴리오를 단 한 종목으로 압축합니다. 리딩에 온전히 집중하며 명확하게 대응하는 방식입니다."},{type:"h4",text:"양방향 대응 구조"},{type:"p",text:"지수의 상승과 하락, 반도체와 코스닥의 흐름에 구애받지 않고 공략이 가능한 체계를 유지합니다."},{type:"h4",text:"당일 청산 원칙"},{type:"p",text:"오버나잇을 지양합니다. 미국 시장의 급변에 흔들리지 않는, 당일 단타로 마무리하는 안정적인 방식입니다."},{type:"h4",text:"세금 부담 최소화"},{type:"p",text:"농특세·증권거래세 0.2%가 발생하지 않는 ETF의 특성을 활용해, 초단타에 최적화된 매매를 진행합니다."},{type:"h4",text:"4분할 진입 전략"},{type:"p",text:"1차 매수 시 원금의 25%만 투입합니다. 대부분의 경우 1차 매수만으로 익절이 이루어지는 신중한 접근입니다."},{type:"h4",text:"2분할 익절 체계"},{type:"p",text:"일부 익절 후 나머지를 짧게 홀딩하는 구조로, 수익을 길게 끌지 않고 명확하게 마무리합니다."},{type:"h2",text:"지수 ETF 6종목 중 선별 운용"},{type:"p",text:"기본 예탁금 1,000만 원. 접근성이 높아 주로 이 종목군을 중심으로 운용합니다."},{type:"li",text:"494310 KODEX 반도체 레버리지 — 반도체 지수 상승 전망 시"},{type:"li",text:"122630 KODEX 레버리지 — 거래소 지수 상승 전망 시"},{type:"li",text:"233740 코스닥150 레버리지 — 코스닥 지수 상승 전망 시"},{type:"li",text:"252670 KODEX 200선물인버스2배 — 거래소 지수 하락 전망 시"},{type:"li",text:"251340 KODEX 코스닥150선물인버스 — 코스닥 지수 하락 전망 시"},{type:"li",text:"114800 KODEX 인버스 — 거래소 지수 하락 전망 시"},{type:"p",text:"※ 삼전닉스 관련 ETF 4종목은 예탁금 3,000만 원 및 예수금 D+2 이슈로 제한적으로만 운용합니다."},{type:"h2",text:"실시간 전달되는 리딩의 현장"},{type:"p",text:"텔레그램 채널을 통해 매수와 익절의 시점이 실시간으로 전달됩니다."},{type:"p",text:"실시간 리딩"},{type:"h2",text:"검증된 경험과 이력"},{type:"h3",text:"골드마스터"},{type:"li",text:"현) 제이앤비주식사관학교 (윌클럽) 대표"},{type:"li",text:"현) M&A 지도자 자격 보유"},{type:"li",text:"전) 한국경제TV 증권사관학교 전임강사"},{type:"li",text:"전) 한국경제TV 「일요특급 한밤의 증시카페」 고정 출연"},{type:"li",text:"전) 한국경제TV 「생방송 개미천국」 고정 출연"},{type:"li",text:"전) 한국경제TV 「일요특급 증시전망대」, 「굿모닝 투자의 아침」 등 다수 출연"},{type:"li",text:"저서 「증권사관학교 X파일」 집필"},{type:"h2",text:"복잡한 선택 대신, 명확한 한 종목."},{type:"p",text:"복잡한 시장의 흐름 속에서 확실한 결과로 마무리 합니다."}],plans:[{id:"day-plan-1",label:"0.25개월",months:.25,bonusMonths:0,totalMonths:.25,amount:37e4,originalAmount:null,monthlyLabel:"월 148만원",popular:!1},{id:"day-plan-2",label:"1개월",months:1,bonusMonths:0,totalMonths:1,amount:14e5,originalAmount:null,monthlyLabel:"월 140만원",popular:!1},{id:"day-plan-3",label:"3개월 + 무료 1개월",months:3,bonusMonths:1,totalMonths:4,amount:42e5,originalAmount:56e5,monthlyLabel:"월 105만원 상당",popular:!1}],event:!1},{key:"ten",id:"7b415e2e-bc16-4e29-be7f-5bf11f446292",name:"골드텐버거반",expert:"gold",expertName:"골드마스터",image:"/vip/ten.png",sourceImage:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788152634842.png",href:"/vip?vip_product_id=7b415e2e-bc16-4e29-be7f-5bf11f446292",headline:"골드텐버거반이란 ?",features:[{title:"중장기 관점의 수익 극대화",text:"투자기간을 확장하여, 단기 변동에 흔들리지 않고 더 큰 수익을 추구하는 방식입니다."},{title:"주기적인 흐름 점검",text:"텔레그램 골드텐버거반에서 추천된 종목은 정기적으로 흐름을 점검하며 관리합니다."},{title:"바닥권에서의 여유로운 매집",text:"가격이 바닥권에 위치할 때, 여유를 두고 모아가는 세부 전략을 제시합니다."},{title:"상승 구간에서의 체계적 익절",text:"본격적인 상승 흐름이 전개되면, 목표가(50~300%) 도달 시점에 맞춰 1~3차에 걸쳐 수익을 극대화할 수 있도록 상세 익절 전략을 안내합니다."},{title:"1년 관심주 20종목 내외로 압축",text:"크게 수익 중인 종목은 별도로 관리합니다."},{title:"투자기간 1개월 ~ 1년",text:"분기·연배당을 받으며 중기 상승이 가능한 종목을 중심으로 합니다."},{title:"목표가 50% ~ 300%",text:"목표가 도달 시 신규 포트폴리오로 재정비합니다."}],details:[{type:"h1",text:"골드텐버거반이란 ?"},{type:"h3",text:"중장기 관점의 수익 극대화"},{type:"p",text:"투자기간을 확장하여, 단기 변동에 흔들리지 않고 더 큰 수익을 추구하는 방식입니다."},{type:"h3",text:"주기적인 흐름 점검"},{type:"p",text:"텔레그램 골드텐버거반에서 추천된 종목은 정기적으로 흐름을 점검하며 관리합니다."},{type:"h3",text:"바닥권에서의 여유로운 매집"},{type:"p",text:"가격이 바닥권에 위치할 때, 여유를 두고 모아가는 세부 전략을 제시합니다."},{type:"h3",text:"상승 구간에서의 체계적 익절"},{type:"p",text:"본격적인 상승 흐름이 전개되면, 목표가(50~300%) 도달 시점에 맞춰 1~3차에 걸쳐 수익을 극대화할 수 있도록 상세 익절 전략을 안내합니다."},{type:"h2",text:"이런 투자자에게 의미가 있습니다"},{type:"h3",text:"골드텐버거반은 이런 투자자에게 희망이 됩니다."},{type:"li",text:"시간적 여유가 없어, 복잡하게 신경 쓰지 않고 투자하고 싶은 분"},{type:"li",text:"수익이 날 때는 소폭에 그치고, 손실이 날 때는 크게 확대해 본 경험이 있는 분"},{type:"li",text:"뇌동매매와 잦은 매매로 손절이 반복되며 자신감이 낮아진 분"},{type:"li",text:"한 번의 수익으로 50~300% 이상의 성과를 경험해 본 적이 없는 분"},{type:"li",text:"좋은 주식과 안전한 주식을 구분하는 기본적인 판단조차 부담스러운 분"},{type:"li",text:"중기 관점에서 상위 1% 실적주로, 손절 없는 매매를 경험하고 싶은 분"},{type:"li",text:"매 분기·매년 배당을 받으며 꾸준한 상승을 누리고 싶은 분"},{type:"h2",text:"운영의 핵심 기준"},{type:"h4",text:"1년 관심주 20종목 내외로 압축"},{type:"p",text:"크게 수익 중인 종목은 별도로 관리합니다."},{type:"h4",text:"투자기간 1개월 ~ 1년"},{type:"p",text:"분기·연배당을 받으며 중기 상승이 가능한 종목을 중심으로 합니다."},{type:"h4",text:"목표가 50% ~ 300%"},{type:"p",text:"목표가 도달 시 신규 포트폴리오로 재정비합니다."},{type:"h2",text:"서두르지 않는 자리에 큰 흐름이 머뭅니다."},{type:"p",text:"바닥에서 모아 두고, 목표가에 닿을 때까지."}],plans:[{id:"ten-plan-1",label:"1개월",months:1,bonusMonths:0,totalMonths:1,amount:4e5,originalAmount:null,monthlyLabel:"월 40만원",popular:!1},{id:"ten-plan-2",label:"2개월 + 무료 0.5개월",months:2,bonusMonths:.5,totalMonths:2.5,amount:8e5,originalAmount:1e6,monthlyLabel:"월 32만원 상당",popular:!1}],event:!1},{key:"ggot",id:"e46427ed-40fc-4e10-91f8-12a83d34253e",name:"꽃게선생반",expert:"ggot",expertName:"꽃게선생",image:"/vip/ggot.png",sourceImage:"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788397804758.png",href:"/vip?vip_product_id=e46427ed-40fc-4e10-91f8-12a83d34253e",headline:"끼있는 대형주 · 업종대표주 시장주도주",features:[{title:"흔들림 없는 방향성",text:"명확한 전략 제시로 안정적인 매매를 이어갑니다"},{title:"시장의 흐름을 반영",text:"최신 트렌드를 실시간으로 담아 타이밍을 놓치지 않습니다"},{title:"간결한 익절과 관리",text:"복잡한 구성 없이 단순하고 명확하게 운영합니다"},{title:"주도 섹터와 이슈 테마",text:"자금이 집중되는 섹터와 테마를 먼저 파악하고, 그 흐름에 올라탑니다."},{title:"시장 대장주 중심 공략",text:"각 섹터의 대장주를 중심으로 접근하여 승률과 수익성을 높입니다."},{title:"리스크를 관리하는 전략",text:"위험을 통제하며 꾸준히 성과를 쌓아가는 안정적인 방식을 제시합니다."},{title:"24시간 시장 관찰",text:"밤새 해외·국내 이슈를 점검하여 당일 주도 섹터와 종목을 미리 정리합니다."},{title:"오전 8시부터 실시간 전달",text:"장 시작 전부터 장중 내내, 상황에 맞는 주도주를 선별해 텔레그램으로 안내합니다."},{title:"매수·매도 시점까지 알림",text:"종목 제시에서 그치지 않습니다. 매수 타이밍과 익절 시점까지 실시간으로 전달합니다."},{title:"전일 밤 ~ 새벽",text:"해외 시장과 국내 이슈를 점검하고, 당일 주도 섹터 후보를 정리합니다."},{title:"오전 8시 ~ 장 시작",text:"장 시작 전 주도주와 설명을 텔레그램으로 1차 전달합니다."},{title:"장중 실시간",text:"수급과 차트 변화에 따라 추가 종목과 매수·매도 타이밍을 실시간으로 안내합니다."},{title:"장 마감 후",text:"당일 정리와 다음 날 방향성을 공유합니다."}],details:[{type:"h1",text:"끼있는 대형주 · 업종대표주 시장주도주"},{type:"p",text:"매매의 대가가 맥점에서 선별하여 전달합니다."},{type:"p",text:"24시간 시장을 관찰하고, 매일 오전 8시부터 장중 실시간으로 주도주 매수·매도 시점을 텔레그램으로 안내합니다."},{type:"h2",text:"종목 분석과 선택의 부담을 덜어드립니다"},{type:"p",text:"꽃게선생이 맥점에서 핵심만 선별하여 전달합니다."},{type:"h4",text:"흔들림 없는 방향성"},{type:"p",text:"명확한 전략 제시로 안정적인 매매를 이어갑니다"},{type:"h4",text:"시장의 흐름을 반영"},{type:"p",text:"최신 트렌드를 실시간으로 담아 타이밍을 놓치지 않습니다"},{type:"h4",text:"간결한 익절과 관리"},{type:"p",text:"복잡한 구성 없이 단순하고 명확하게 운영합니다"},{type:"h2",text:"세 가지 핵심 투자 원칙"},{type:"p",text:"시장을 읽고, 주도주 중심의 공략을 통해 투자의 흐름을 경험하실 수 있도록 합니다."},{type:"h4",text:"주도 섹터와 이슈 테마"},{type:"p",text:"자금이 집중되는 섹터와 테마를 먼저 파악하고, 그 흐름에 올라탑니다."},{type:"h4",text:"시장 대장주 중심 공략"},{type:"p",text:"각 섹터의 대장주를 중심으로 접근하여 승률과 수익성을 높입니다."},{type:"h4",text:"리스크를 관리하는 전략"},{type:"p",text:"위험을 통제하며 꾸준히 성과를 쌓아가는 안정적인 방식을 제시합니다."},{type:"h2",text:"이용 방법 매일의 진행 방식"},{type:"p",text:"복잡한 분석은 꽃게선생이 담당합니다. 회원님은 맥점에서 실행에만 집중하시면 됩니다."},{type:"h4",text:"24시간 시장 관찰"},{type:"p",text:"밤새 해외·국내 이슈를 점검하여 당일 주도 섹터와 종목을 미리 정리합니다."},{type:"h4",text:"오전 8시부터 실시간 전달"},{type:"p",text:"장 시작 전부터 장중 내내, 상황에 맞는 주도주를 선별해 텔레그램으로 안내합니다."},{type:"h4",text:"매수·매도 시점까지 알림"},{type:"p",text:"종목 제시에서 그치지 않습니다. 매수 타이밍과 익절 시점까지 실시간으로 전달합니다."},{type:"h2",text:"하루 일정 실시간 관리 구조"},{type:"p",text:"억지로 종목을 구성하지 않습니다. 확실한 맥점이 있을 때만 선별하여 전달합니다."},{type:"h4",text:"전일 밤 ~ 새벽"},{type:"p",text:"해외 시장과 국내 이슈를 점검하고, 당일 주도 섹터 후보를 정리합니다."},{type:"h4",text:"오전 8시 ~ 장 시작"},{type:"p",text:"장 시작 전 주도주와 설명을 텔레그램으로 1차 전달합니다."},{type:"h4",text:"장중 실시간"},{type:"p",text:"수급과 차트 변화에 따라 추가 종목과 매수·매도 타이밍을 실시간으로 안내합니다."},{type:"h4",text:"장 마감 후"},{type:"p",text:"당일 정리와 다음 날 방향성을 공유합니다."},{type:"p",text:"하루 추천 종목은 시장 상황에 따라 0종목에서 최대 3~4종목까지 선별합니다. 무리한 매매를 유도하지 않습니다."},{type:"h2",text:"핵심종목만 콕 찝어서! 꽃게선생과 함께하세요"},{type:"p",text:"메이저 수급이 유입되는 핵심 종목, 매일 맥점에서 선별하여 매수·매도 시점까지 안내합니다."}],plans:[{id:"ggot-plan-1",label:"1개월",months:1,bonusMonths:0,totalMonths:1,amount:5e5,originalAmount:null,monthlyLabel:"월 50만원",popular:!1},{id:"ggot-plan-2",label:"2개월 + 무료 0.5개월",months:2,bonusMonths:.5,totalMonths:2.5,amount:1e6,originalAmount:125e4,monthlyLabel:"월 40만원 상당",popular:!1},{id:"ggot-plan-3",label:"3개월 + 무료 2개월",months:3,bonusMonths:2,totalMonths:5,amount:15e5,originalAmount:25e5,monthlyLabel:"월 30만원 상당",popular:!0}],event:!0}]};

const Ps=ks.products;

const mu={"https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1787279272384.png":"/support/1787279272384.png","https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1786428973561.png":"/support/1786428973561.png","https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788135374088.png":"/support/1788135374088.png","https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788152593215.png":"/support/1788152593215.png","https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788152634842.png":"/support/1788152634842.png","https://ncq2aodczchudqxx.public.blob.vercel-storage.com/editor/1788397804758.png":"/support/1788397804758.png"};

const Bv=mu;

const vq=[{id:"8bd3703c-2f94-4067-b366-f97323116386",name:"골드마스터"},{id:"a92bf325-8f3a-48b1-b656-4b323c5f5d69",name:"꽃게선생"}];

const Ts=e=>`${new Intl.NumberFormat("ko-KR").format(e)}원`;

const hq={"2914806e-da08-4649-9ca3-7cda12f61089":`<!DOCTYPE html>

<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>골드마스터반 프리미엄 | 정보력과 타점력</title>


<style>
        :root {
            --bg-main: #f4f1ed;
            --bg-card: #ffffff;
            --gold: #912c2f;
            --gold-dark: #912c2f;
            --text-dark: #1c1b19;
            --text-gray: #6b655c;
            --text-light: #8a847a;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.025em;
        }
        body {
            background: var(--bg-main);
            color: var(--text-dark);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(36px);
            transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HERO ========== */
        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 88px 28px 96px;
            background: var(--bg-main);
        }
        .hero-badge,
        .hero h1,
        .hero-desc,
        .stat-card {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hero.loaded .hero-badge { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .hero.loaded h1 { opacity: 1; transform: translateY(0); transition-delay: 0.22s; }
        .hero.loaded .hero-desc { opacity: 1; transform: translateY(0); transition-delay: 0.36s; }
        .hero.loaded .stat-card:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
        .hero.loaded .stat-card:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.62s; }
        .hero-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--gold), var(--gold-dark));
            color: #1a1508;
            font-weight: 700;
            font-size: 0.9rem;
            padding: 10px 24px;
            border-radius: 50px;
            margin-bottom: 36px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }
        .hero h1 {
            font-size: clamp(2.4rem, 5.4vw, 3.6rem);
            font-weight: 800;
            line-height: 1.3;
            margin-bottom: 28px;
            word-break: keep-all;
            color: var(--text-dark);
        }
        .hero h1 .highlight {
            color: var(--gold);
        }
        .hero-desc {
            font-size: 1.28rem;
            color: var(--text-gray);
            max-width: 620px;
            margin-bottom: 52px;
            word-break: keep-all;
            line-height: 1.8;
        }
        .hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            width: 100%;
            max-width: 540px;
        }
        .stat-card {
            background: #fff;
            border: 1px solid #ebe6df;
            border-radius: 16px;
            padding: 30px 24px;
            transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .stat-card:hover {
            transform: translateY(-6px);
            border-color: #e0d5c0;
            box-shadow: 0 16px 36px rgba(0,0,0,0.06);
        }
        .stat-card h3 {
            font-size: 1.7rem;
            font-weight: 700;
            color: var(--gold);
            margin-bottom: 8px;
        }
        .stat-card p {
            font-size: 1.08rem;
            color: var(--text-light);
        }
        /* ========== SECTION ========== */
        section {
            padding: 92px 0;
            background: var(--bg-main);
        }
        .section-title {
            font-size: clamp(2.05rem, 4.4vw, 2.7rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 20px;
            word-break: keep-all;
            color: var(--text-dark);
            line-height: 1.35;
        }
        .section-title span {
            color: var(--gold);
        }
        .section-desc {
            text-align: center;
            font-size: 1.18rem;
            color: var(--text-gray);
            max-width: 640px;
            margin: 0 auto 48px;
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== STRATEGY ========== */
        .card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 22px;
        }
        .feature-card {
            background: #fff;
            border: 1px solid #ebe6df;
            border-radius: 20px;
            padding: 42px 34px;
            transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 44px rgba(0,0,0,0.06);
            border-color: #e0d5c0;
        }
        .feature-card .icon {
            width: 52px;
            height: 52px;
            background: linear-gradient(135deg, #f8f1e0, #f0e6c8);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            font-size: 1.45rem;
            color: var(--gold);
        }
        .feature-card h4 {
            font-size: 1.38rem;
            font-weight: 700;
            margin-bottom: 14px;
            color: var(--text-dark);
        }
        .feature-card p {
            font-size: 1.12rem;
            color: var(--text-gray);
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== 추천종목 특징 ========== */
        .recommend-section {
            padding-top: 40px;
        }
        .recommend-card {
            background: #fff;
            border: 1px solid #ebe6df;
            border-radius: 20px;
            padding: 44px 40px;
            max-width: 720px;
            margin: 0 auto;
        }
        .recommend-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 22px;
        }
        .recommend-list li {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }
        .recommend-list .label {
            flex-shrink: 0;
            background: linear-gradient(135deg, #f8f1e0, #f0e6c8);
            color: var(--gold);
            font-weight: 700;
            font-size: 0.95rem;
            padding: 6px 14px;
            border-radius: 8px;
            min-width: 130px;
            text-align: center;
        }
        .recommend-list .desc {
            font-size: 1.14rem;
            color: var(--text-gray);
            line-height: 1.7;
            word-break: keep-all;
            padding-top: 4px;
        }
        /* ========== TELEGRAM ========== */
        .tg-section {
            background: var(--bg-main);
            padding-top: 40px;
        }
        .telegram-box {
            background: #1a2332;
            border-radius: 22px;
            max-width: 660px;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 24px 56px rgba(0,0,0,0.14);
        }
        .tg-header {
            background: #1e2a3a;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 13px;
        }
        .tg-avatar {
            width: 44px;
            height: 44px;
            background: linear-gradient(135deg, #F3E5AB, #912c2f);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1a1508;
            font-weight: 800;
            font-size: 1.1rem;
        }
        .tg-info h5 {
            font-size: 1.15rem;
            font-weight: 700;
            color: #fff;
        }
        .tg-info p {
            font-size: 0.88rem;
            color: #9aa8b8;
        }
        .tg-body {
            padding: 20px;
            background: #1a2332;
            background-image: radial-gradient(rgba(255,255,255,0.025) 14%, transparent 15%);
            background-size: 11px 11px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .tg-msg {
            background: #243044;
            padding: 15px 18px;
            border-radius: 14px 14px 14px 4px;
            max-width: 94%;
            align-self: flex-start;
            opacity: 0;
            transform: translateY(36px) scale(0.94);
            transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .tg-msg.active {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .tg-msg:hover {
            background: #2a374c;
        }
        .tg-sender {
            color: #e4b63b;
            font-weight: 700;
            font-size: 1.05rem;
            display: block;
            margin-bottom: 5px;
        }
        .tg-text {
            font-size: 1.12rem;
            color: #f0f2f5;
            font-weight: 450;
            word-break: keep-all;
            line-height: 1.55;
        }
        .tg-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            padding-top: 8px;
            border-top: 1px solid rgba(255,255,255,0.05);
        }
        .tg-emojis {
            display: flex;
            gap: 5px;
        }
        .emoji-badge {
            background: rgba(255,255,255,0.07);
            padding: 3px 9px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            color: #e0e4e8;
        }
        .tg-status {
            font-size: 0.8rem;
            color: #8b9aab;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        /* ========== PROFILE ========== */
        .profile-grid {
            display: grid;
            grid-template-columns: 1.1fr 1.9fr;
            gap: 48px;
            align-items: center;
        }
        .book {
            width: 100%;
            max-width: 280px;
            aspect-ratio: 1 / 1.42;
            background: #1A1311;
            border: 5px solid #261D1A;
            border-radius: 10px;
            padding: 28px 20px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            position: relative;
            box-shadow: 0 24px 48px rgba(0,0,0,0.22);
            transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .book:hover {
            transform: rotateY(-5deg) scale(1.03);
            border-color: var(--gold);
        }
        .book-x {
            position: absolute;
            top: 18%;
            left: 6%;
            width: 88%;
            height: 42%;
            opacity: 0.65;
            pointer-events: none;
        }
        .book-x::before,
        .book-x::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 18px;
            background: repeating-linear-gradient(90deg, var(--gold), var(--gold) 5px, transparent 5px, transparent 11px);
            top: 50%;
            left: 0;
        }
        .book-x::before { transform: translateY(-50%) rotate(41deg); }
        .book-x::after  { transform: translateY(-50%) rotate(-41deg); }
        .book-top {
            font-size: 1rem;
            font-weight: 700;
            color: var(--gold);
            letter-spacing: 0.04em;
            z-index: 2;
        }
        .book-title {
            z-index: 2;
            margin-top: auto;
            margin-bottom: 10px;
        }
        .book-title .sub {
            display: block;
            font-size: 1.4rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 2px;
        }
        .book-title .main {
            display: block;
            font-size: 2.1rem;
            font-weight: 800;
            color: var(--gold);
            line-height: 1.1;
        }
        .book-title .xfile {
            display: block;
            font-size: 3.1rem;
            font-weight: 800;
            color: #fff;
            line-height: 1;
            margin-top: 3px;
        }
        .book-footer {
            font-size: 0.78rem;
            color: #999;
            border-top: 1px solid #332521;
            padding-top: 10px;
            width: 100%;
            z-index: 2;
        }
        .profile-info h3 {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 8px;
            color: var(--text-dark);
        }
        .profile-info .role {
            display: block;
            font-size: 1.15rem;
            color: var(--gold);
            font-weight: 600;
            margin-bottom: 28px;
        }
        .history {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .history li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 1.12rem;
            color: #4a4640;
            word-break: keep-all;
        }
        .history li i {
            color: var(--gold);
            margin-top: 5px;
            font-size: 0.95rem;
        }
        .history li strong {
            color: var(--text-dark);
            font-weight: 600;
        }
        /* ========== CLOSING ========== */
        .closing {
            background: var(--bg-main);
            text-align: center;
            padding: 110px 28px 120px;
            border-top: 1px solid #ebe6df;
            width: 100%;
        }
        .closing h2 {
            font-size: clamp(2.1rem, 4.8vw, 3rem);
            font-weight: 750;
            line-height: 1.4;
            margin-bottom: 20px;
            word-break: keep-all;
            color: var(--text-dark);
        }
        .closing p {
            font-size: 1.22rem;
            color: var(--text-gray);
            word-break: keep-all;
            max-width: 480px;
            margin: 0 auto 40px;
        }
        .cta-btn {
            display: inline-block;
            background: linear-gradient(135deg, #d4b84a, #b8942a);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(201, 162, 39, 0.22);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(201, 162, 39, 0.32);
            background: linear-gradient(135deg, #dbbf55, #c09e32);
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 768px) {
            .hero { padding: 60px 20px 72px; }
            .hero h1 { font-size: 2.3rem; }
            .hero-desc { font-size: 1.18rem; }
            .stat-card h3 { font-size: 1.55rem; }
            .stat-card p { font-size: 1.05rem; }
            .section-title { font-size: 1.95rem; }
            .section-desc { font-size: 1.1rem; }
            .feature-card h4 { font-size: 1.28rem; }
            .feature-card p { font-size: 1.1rem; }
            .recommend-list .label { min-width: 110px; font-size: 0.9rem; }
            .recommend-list .desc { font-size: 1.08rem; }
            .tg-text { font-size: 1.08rem; }
            .profile-info h3 { font-size: 1.9rem; }
            .history li { font-size: 1.08rem; }
            .closing h2 { font-size: 2rem; }
            .closing p { font-size: 1.15rem; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
            .hero-stats { grid-template-columns: 1fr; max-width: 340px; }
            .card-grid { grid-template-columns: 1fr; }
            .profile-grid { grid-template-columns: 1fr; gap: 36px; }
            .book { max-width: 250px; }
            section { padding: 72px 0; }
            .closing { padding: 80px 20px 90px; }
            .recommend-card { padding: 32px 24px; }
        }
    </style>
<style>
body {font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,sans-serif; background:#f4f1ed; color:#35282e;}
p, li, .intro, .description, .subtitle, .desc, .card-desc, .body-text {font-size:calc(16px + 2pt) !important;}
h1 {font-size:clamp(30px,4vw,48px) !important; letter-spacing:-1px;}
h2 {font-size:calc(28px + 2pt) !important; color:#50343e;}
h3 {font-size:calc(21px + 2pt) !important;}
button {font-family:inherit;}
.cta-btn {background:#912c2f !important; color:#fff !important; border-radius:7px !important; font-size:calc(17px + 2pt) !important;}
.fade-in {opacity:1 !important; transform:none !important;}
:focus-visible {outline:2px solid #912c2f; outline-offset:4px;}
@media(max-width:650px) {p,li,.intro,.description,.subtitle,.desc,.card-desc,.body-text {font-size:calc(15px + 2pt) !important;} h2 {font-size:calc(24px + 2pt) !important;} h3 {font-size:calc(19px + 2pt) !important;}}
@media(prefers-reduced-motion:reduce) {* {animation:none !important; transition:none !important; scroll-behavior:auto !important;}}
</style><link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css" rel="stylesheet"/><style>/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:"Font Awesome 6 Free"}.fa-brands,.fab{font-family:"Font Awesome 6 Brands"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index,auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse,#fff)}

.fa-0:before{content:"\\30"}.fa-1:before{content:"\\31"}.fa-2:before{content:"\\32"}.fa-3:before{content:"\\33"}.fa-4:before{content:"\\34"}.fa-5:before{content:"\\35"}.fa-6:before{content:"\\36"}.fa-7:before{content:"\\37"}.fa-8:before{content:"\\38"}.fa-9:before{content:"\\39"}.fa-fill-drip:before{content:"\\f576"}.fa-arrows-to-circle:before{content:"\\e4bd"}.fa-chevron-circle-right:before,.fa-circle-chevron-right:before{content:"\\f138"}.fa-at:before{content:"\\40"}.fa-trash-alt:before,.fa-trash-can:before{content:"\\f2ed"}.fa-text-height:before{content:"\\f034"}.fa-user-times:before,.fa-user-xmark:before{content:"\\f235"}.fa-stethoscope:before{content:"\\f0f1"}.fa-comment-alt:before,.fa-message:before{content:"\\f27a"}.fa-info:before{content:"\\f129"}.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before{content:"\\f422"}.fa-explosion:before{content:"\\e4e9"}.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before{content:"\\f15c"}.fa-wave-square:before{content:"\\f83e"}.fa-ring:before{content:"\\f70b"}.fa-building-un:before{content:"\\e4d9"}.fa-dice-three:before{content:"\\f527"}.fa-calendar-alt:before,.fa-calendar-days:before{content:"\\f073"}.fa-anchor-circle-check:before{content:"\\e4aa"}.fa-building-circle-arrow-right:before{content:"\\e4d1"}.fa-volleyball-ball:before,.fa-volleyball:before{content:"\\f45f"}.fa-arrows-up-to-line:before{content:"\\e4c2"}.fa-sort-desc:before,.fa-sort-down:before{content:"\\f0dd"}.fa-circle-minus:before,.fa-minus-circle:before{content:"\\f056"}.fa-door-open:before{content:"\\f52b"}.fa-right-from-bracket:before,.fa-sign-out-alt:before{content:"\\f2f5"}.fa-atom:before{content:"\\f5d2"}.fa-soap:before{content:"\\e06e"}.fa-heart-music-camera-bolt:before,.fa-icons:before{content:"\\f86d"}.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before{content:"\\f539"}.fa-bridge-circle-check:before{content:"\\e4c9"}.fa-pump-medical:before{content:"\\e06a"}.fa-fingerprint:before{content:"\\f577"}.fa-hand-point-right:before{content:"\\f0a4"}.fa-magnifying-glass-location:before,.fa-search-location:before{content:"\\f689"}.fa-forward-step:before,.fa-step-forward:before{content:"\\f051"}.fa-face-smile-beam:before,.fa-smile-beam:before{content:"\\f5b8"}.fa-flag-checkered:before{content:"\\f11e"}.fa-football-ball:before,.fa-football:before{content:"\\f44e"}.fa-school-circle-exclamation:before{content:"\\e56c"}.fa-crop:before{content:"\\f125"}.fa-angle-double-down:before,.fa-angles-down:before{content:"\\f103"}.fa-users-rectangle:before{content:"\\e594"}.fa-people-roof:before{content:"\\e537"}.fa-people-line:before{content:"\\e534"}.fa-beer-mug-empty:before,.fa-beer:before{content:"\\f0fc"}.fa-diagram-predecessor:before{content:"\\e477"}.fa-arrow-up-long:before,.fa-long-arrow-up:before{content:"\\f176"}.fa-burn:before,.fa-fire-flame-simple:before{content:"\\f46a"}.fa-male:before,.fa-person:before{content:"\\f183"}.fa-laptop:before{content:"\\f109"}.fa-file-csv:before{content:"\\f6dd"}.fa-menorah:before{content:"\\f676"}.fa-truck-plane:before{content:"\\e58f"}.fa-record-vinyl:before{content:"\\f8d9"}.fa-face-grin-stars:before,.fa-grin-stars:before{content:"\\f587"}.fa-bong:before{content:"\\f55c"}.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before{content:"\\f67b"}.fa-arrow-down-up-across-line:before{content:"\\e4af"}.fa-spoon:before,.fa-utensil-spoon:before{content:"\\f2e5"}.fa-jar-wheat:before{content:"\\e517"}.fa-envelopes-bulk:before,.fa-mail-bulk:before{content:"\\f674"}.fa-file-circle-exclamation:before{content:"\\e4eb"}.fa-circle-h:before,.fa-hospital-symbol:before{content:"\\f47e"}.fa-pager:before{content:"\\f815"}.fa-address-book:before,.fa-contact-book:before{content:"\\f2b9"}.fa-strikethrough:before{content:"\\f0cc"}.fa-k:before{content:"\\4b"}.fa-landmark-flag:before{content:"\\e51c"}.fa-pencil-alt:before,.fa-pencil:before{content:"\\f303"}.fa-backward:before{content:"\\f04a"}.fa-caret-right:before{content:"\\f0da"}.fa-comments:before{content:"\\f086"}.fa-file-clipboard:before,.fa-paste:before{content:"\\f0ea"}.fa-code-pull-request:before{content:"\\e13c"}.fa-clipboard-list:before{content:"\\f46d"}.fa-truck-loading:before,.fa-truck-ramp-box:before{content:"\\f4de"}.fa-user-check:before{content:"\\f4fc"}.fa-vial-virus:before{content:"\\e597"}.fa-sheet-plastic:before{content:"\\e571"}.fa-blog:before{content:"\\f781"}.fa-user-ninja:before{content:"\\f504"}.fa-person-arrow-up-from-line:before{content:"\\e539"}.fa-scroll-torah:before,.fa-torah:before{content:"\\f6a0"}.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before{content:"\\f458"}.fa-toggle-off:before{content:"\\f204"}.fa-archive:before,.fa-box-archive:before{content:"\\f187"}.fa-person-drowning:before{content:"\\e545"}.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before{content:"\\f886"}.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before{content:"\\f58a"}.fa-spray-can:before{content:"\\f5bd"}.fa-truck-monster:before{content:"\\f63b"}.fa-w:before{content:"\\57"}.fa-earth-africa:before,.fa-globe-africa:before{content:"\\f57c"}.fa-rainbow:before{content:"\\f75b"}.fa-circle-notch:before{content:"\\f1ce"}.fa-tablet-alt:before,.fa-tablet-screen-button:before{content:"\\f3fa"}.fa-paw:before{content:"\\f1b0"}.fa-cloud:before{content:"\\f0c2"}.fa-trowel-bricks:before{content:"\\e58a"}.fa-face-flushed:before,.fa-flushed:before{content:"\\f579"}.fa-hospital-user:before{content:"\\f80d"}.fa-tent-arrow-left-right:before{content:"\\e57f"}.fa-gavel:before,.fa-legal:before{content:"\\f0e3"}.fa-binoculars:before{content:"\\f1e5"}.fa-microphone-slash:before{content:"\\f131"}.fa-box-tissue:before{content:"\\e05b"}.fa-motorcycle:before{content:"\\f21c"}.fa-bell-concierge:before,.fa-concierge-bell:before{content:"\\f562"}.fa-pen-ruler:before,.fa-pencil-ruler:before{content:"\\f5ae"}.fa-people-arrows-left-right:before,.fa-people-arrows:before{content:"\\e068"}.fa-mars-and-venus-burst:before{content:"\\e523"}.fa-caret-square-right:before,.fa-square-caret-right:before{content:"\\f152"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-sun-plant-wilt:before{content:"\\e57a"}.fa-toilets-portable:before{content:"\\e584"}.fa-hockey-puck:before{content:"\\f453"}.fa-table:before{content:"\\f0ce"}.fa-magnifying-glass-arrow-right:before{content:"\\e521"}.fa-digital-tachograph:before,.fa-tachograph-digital:before{content:"\\f566"}.fa-users-slash:before{content:"\\e073"}.fa-clover:before{content:"\\e139"}.fa-mail-reply:before,.fa-reply:before{content:"\\f3e5"}.fa-star-and-crescent:before{content:"\\f699"}.fa-house-fire:before{content:"\\e50c"}.fa-minus-square:before,.fa-square-minus:before{content:"\\f146"}.fa-helicopter:before{content:"\\f533"}.fa-compass:before{content:"\\f14e"}.fa-caret-square-down:before,.fa-square-caret-down:before{content:"\\f150"}.fa-file-circle-question:before{content:"\\e4ef"}.fa-laptop-code:before{content:"\\f5fc"}.fa-swatchbook:before{content:"\\f5c3"}.fa-prescription-bottle:before{content:"\\f485"}.fa-bars:before,.fa-navicon:before{content:"\\f0c9"}.fa-people-group:before{content:"\\e533"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-heart-broken:before,.fa-heart-crack:before{content:"\\f7a9"}.fa-external-link-square-alt:before,.fa-square-up-right:before{content:"\\f360"}.fa-face-kiss-beam:before,.fa-kiss-beam:before{content:"\\f597"}.fa-film:before{content:"\\f008"}.fa-ruler-horizontal:before{content:"\\f547"}.fa-people-robbery:before{content:"\\e536"}.fa-lightbulb:before{content:"\\f0eb"}.fa-caret-left:before{content:"\\f0d9"}.fa-circle-exclamation:before,.fa-exclamation-circle:before{content:"\\f06a"}.fa-school-circle-xmark:before{content:"\\e56d"}.fa-arrow-right-from-bracket:before,.fa-sign-out:before{content:"\\f08b"}.fa-chevron-circle-down:before,.fa-circle-chevron-down:before{content:"\\f13a"}.fa-unlock-alt:before,.fa-unlock-keyhole:before{content:"\\f13e"}.fa-cloud-showers-heavy:before{content:"\\f740"}.fa-headphones-alt:before,.fa-headphones-simple:before{content:"\\f58f"}.fa-sitemap:before{content:"\\f0e8"}.fa-circle-dollar-to-slot:before,.fa-donate:before{content:"\\f4b9"}.fa-memory:before{content:"\\f538"}.fa-road-spikes:before{content:"\\e568"}.fa-fire-burner:before{content:"\\e4f1"}.fa-flag:before{content:"\\f024"}.fa-hanukiah:before{content:"\\f6e6"}.fa-feather:before{content:"\\f52d"}.fa-volume-down:before,.fa-volume-low:before{content:"\\f027"}.fa-comment-slash:before{content:"\\f4b3"}.fa-cloud-sun-rain:before{content:"\\f743"}.fa-compress:before{content:"\\f066"}.fa-wheat-alt:before,.fa-wheat-awn:before{content:"\\e2cd"}.fa-ankh:before{content:"\\f644"}.fa-hands-holding-child:before{content:"\\e4fa"}.fa-asterisk:before{content:"\\2a"}.fa-check-square:before,.fa-square-check:before{content:"\\f14a"}.fa-peseta-sign:before{content:"\\e221"}.fa-header:before,.fa-heading:before{content:"\\f1dc"}.fa-ghost:before{content:"\\f6e2"}.fa-list-squares:before,.fa-list:before{content:"\\f03a"}.fa-phone-square-alt:before,.fa-square-phone-flip:before{content:"\\f87b"}.fa-cart-plus:before{content:"\\f217"}.fa-gamepad:before{content:"\\f11b"}.fa-circle-dot:before,.fa-dot-circle:before{content:"\\f192"}.fa-dizzy:before,.fa-face-dizzy:before{content:"\\f567"}.fa-egg:before{content:"\\f7fb"}.fa-house-medical-circle-xmark:before{content:"\\e513"}.fa-campground:before{content:"\\f6bb"}.fa-folder-plus:before{content:"\\f65e"}.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before{content:"\\f1e3"}.fa-paint-brush:before,.fa-paintbrush:before{content:"\\f1fc"}.fa-lock:before{content:"\\f023"}.fa-gas-pump:before{content:"\\f52f"}.fa-hot-tub-person:before,.fa-hot-tub:before{content:"\\f593"}.fa-map-location:before,.fa-map-marked:before{content:"\\f59f"}.fa-house-flood-water:before{content:"\\e50e"}.fa-tree:before{content:"\\f1bb"}.fa-bridge-lock:before{content:"\\e4cc"}.fa-sack-dollar:before{content:"\\f81d"}.fa-edit:before,.fa-pen-to-square:before{content:"\\f044"}.fa-car-side:before{content:"\\f5e4"}.fa-share-alt:before,.fa-share-nodes:before{content:"\\f1e0"}.fa-heart-circle-minus:before{content:"\\e4ff"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-microscope:before{content:"\\f610"}.fa-sink:before{content:"\\e06d"}.fa-bag-shopping:before,.fa-shopping-bag:before{content:"\\f290"}.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before{content:"\\f881"}.fa-mitten:before{content:"\\f7b5"}.fa-person-rays:before{content:"\\e54d"}.fa-users:before{content:"\\f0c0"}.fa-eye-slash:before{content:"\\f070"}.fa-flask-vial:before{content:"\\e4f3"}.fa-hand-paper:before,.fa-hand:before{content:"\\f256"}.fa-om:before{content:"\\f679"}.fa-worm:before{content:"\\e599"}.fa-house-circle-xmark:before{content:"\\e50b"}.fa-plug:before{content:"\\f1e6"}.fa-chevron-up:before{content:"\\f077"}.fa-hand-spock:before{content:"\\f259"}.fa-stopwatch:before{content:"\\f2f2"}.fa-face-kiss:before,.fa-kiss:before{content:"\\f596"}.fa-bridge-circle-xmark:before{content:"\\e4cb"}.fa-face-grin-tongue:before,.fa-grin-tongue:before{content:"\\f589"}.fa-chess-bishop:before{content:"\\f43a"}.fa-face-grin-wink:before,.fa-grin-wink:before{content:"\\f58c"}.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before{content:"\\f2a4"}.fa-road-circle-check:before{content:"\\e564"}.fa-dice-five:before{content:"\\f523"}.fa-rss-square:before,.fa-square-rss:before{content:"\\f143"}.fa-land-mine-on:before{content:"\\e51b"}.fa-i-cursor:before{content:"\\f246"}.fa-stamp:before{content:"\\f5bf"}.fa-stairs:before{content:"\\e289"}.fa-i:before{content:"\\49"}.fa-hryvnia-sign:before,.fa-hryvnia:before{content:"\\f6f2"}.fa-pills:before{content:"\\f484"}.fa-face-grin-wide:before,.fa-grin-alt:before{content:"\\f581"}.fa-tooth:before{content:"\\f5c9"}.fa-v:before{content:"\\56"}.fa-bangladeshi-taka-sign:before{content:"\\e2e6"}.fa-bicycle:before{content:"\\f206"}.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before{content:"\\e579"}.fa-head-side-cough-slash:before{content:"\\e062"}.fa-ambulance:before,.fa-truck-medical:before{content:"\\f0f9"}.fa-wheat-awn-circle-exclamation:before{content:"\\e598"}.fa-snowman:before{content:"\\f7d0"}.fa-mortar-pestle:before{content:"\\f5a7"}.fa-road-barrier:before{content:"\\e562"}.fa-school:before{content:"\\f549"}.fa-igloo:before{content:"\\f7ae"}.fa-joint:before{content:"\\f595"}.fa-angle-right:before{content:"\\f105"}.fa-horse:before{content:"\\f6f0"}.fa-q:before{content:"\\51"}.fa-g:before{content:"\\47"}.fa-notes-medical:before{content:"\\f481"}.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-dong-sign:before{content:"\\e169"}.fa-capsules:before{content:"\\f46b"}.fa-poo-bolt:before,.fa-poo-storm:before{content:"\\f75a"}.fa-face-frown-open:before,.fa-frown-open:before{content:"\\f57a"}.fa-hand-point-up:before{content:"\\f0a6"}.fa-money-bill:before{content:"\\f0d6"}.fa-bookmark:before{content:"\\f02e"}.fa-align-justify:before{content:"\\f039"}.fa-umbrella-beach:before{content:"\\f5ca"}.fa-helmet-un:before{content:"\\e503"}.fa-bullseye:before{content:"\\f140"}.fa-bacon:before{content:"\\f7e5"}.fa-hand-point-down:before{content:"\\f0a7"}.fa-arrow-up-from-bracket:before{content:"\\e09a"}.fa-folder-blank:before,.fa-folder:before{content:"\\f07b"}.fa-file-medical-alt:before,.fa-file-waveform:before{content:"\\f478"}.fa-radiation:before{content:"\\f7b9"}.fa-chart-simple:before{content:"\\e473"}.fa-mars-stroke:before{content:"\\f229"}.fa-vial:before{content:"\\f492"}.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before{content:"\\f624"}.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before{content:"\\e2ca"}.fa-e:before{content:"\\45"}.fa-pen-alt:before,.fa-pen-clip:before{content:"\\f305"}.fa-bridge-circle-exclamation:before{content:"\\e4ca"}.fa-user:before{content:"\\f007"}.fa-school-circle-check:before{content:"\\e56b"}.fa-dumpster:before{content:"\\f793"}.fa-shuttle-van:before,.fa-van-shuttle:before{content:"\\f5b6"}.fa-building-user:before{content:"\\e4da"}.fa-caret-square-left:before,.fa-square-caret-left:before{content:"\\f191"}.fa-highlighter:before{content:"\\f591"}.fa-key:before{content:"\\f084"}.fa-bullhorn:before{content:"\\f0a1"}.fa-globe:before{content:"\\f0ac"}.fa-synagogue:before{content:"\\f69b"}.fa-person-half-dress:before{content:"\\e548"}.fa-road-bridge:before{content:"\\e563"}.fa-location-arrow:before{content:"\\f124"}.fa-c:before{content:"\\43"}.fa-tablet-button:before{content:"\\f10a"}.fa-building-lock:before{content:"\\e4d6"}.fa-pizza-slice:before{content:"\\f818"}.fa-money-bill-wave:before{content:"\\f53a"}.fa-area-chart:before,.fa-chart-area:before{content:"\\f1fe"}.fa-house-flag:before{content:"\\e50d"}.fa-person-circle-minus:before{content:"\\e540"}.fa-ban:before,.fa-cancel:before{content:"\\f05e"}.fa-camera-rotate:before{content:"\\e0d8"}.fa-air-freshener:before,.fa-spray-can-sparkles:before{content:"\\f5d0"}.fa-star:before{content:"\\f005"}.fa-repeat:before{content:"\\f363"}.fa-cross:before{content:"\\f654"}.fa-box:before{content:"\\f466"}.fa-venus-mars:before{content:"\\f228"}.fa-arrow-pointer:before,.fa-mouse-pointer:before{content:"\\f245"}.fa-expand-arrows-alt:before,.fa-maximize:before{content:"\\f31e"}.fa-charging-station:before{content:"\\f5e7"}.fa-shapes:before,.fa-triangle-circle-square:before{content:"\\f61f"}.fa-random:before,.fa-shuffle:before{content:"\\f074"}.fa-person-running:before,.fa-running:before{content:"\\f70c"}.fa-mobile-retro:before{content:"\\e527"}.fa-grip-lines-vertical:before{content:"\\f7a5"}.fa-spider:before{content:"\\f717"}.fa-hands-bound:before{content:"\\e4f9"}.fa-file-invoice-dollar:before{content:"\\f571"}.fa-plane-circle-exclamation:before{content:"\\e556"}.fa-x-ray:before{content:"\\f497"}.fa-spell-check:before{content:"\\f891"}.fa-slash:before{content:"\\f715"}.fa-computer-mouse:before,.fa-mouse:before{content:"\\f8cc"}.fa-arrow-right-to-bracket:before,.fa-sign-in:before{content:"\\f090"}.fa-shop-slash:before,.fa-store-alt-slash:before{content:"\\e070"}.fa-server:before{content:"\\f233"}.fa-virus-covid-slash:before{content:"\\e4a9"}.fa-shop-lock:before{content:"\\e4a5"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-blender-phone:before{content:"\\f6b6"}.fa-building-wheat:before{content:"\\e4db"}.fa-person-breastfeeding:before{content:"\\e53a"}.fa-right-to-bracket:before,.fa-sign-in-alt:before{content:"\\f2f6"}.fa-venus:before{content:"\\f221"}.fa-passport:before{content:"\\f5ab"}.fa-heart-pulse:before,.fa-heartbeat:before{content:"\\f21e"}.fa-people-carry-box:before,.fa-people-carry:before{content:"\\f4ce"}.fa-temperature-high:before{content:"\\f769"}.fa-microchip:before{content:"\\f2db"}.fa-crown:before{content:"\\f521"}.fa-weight-hanging:before{content:"\\f5cd"}.fa-xmarks-lines:before{content:"\\e59a"}.fa-file-prescription:before{content:"\\f572"}.fa-weight-scale:before,.fa-weight:before{content:"\\f496"}.fa-user-friends:before,.fa-user-group:before{content:"\\f500"}.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before{content:"\\f15e"}.fa-chess-knight:before{content:"\\f441"}.fa-face-laugh-squint:before,.fa-laugh-squint:before{content:"\\f59b"}.fa-wheelchair:before{content:"\\f193"}.fa-arrow-circle-up:before,.fa-circle-arrow-up:before{content:"\\f0aa"}.fa-toggle-on:before{content:"\\f205"}.fa-person-walking:before,.fa-walking:before{content:"\\f554"}.fa-l:before{content:"\\4c"}.fa-fire:before{content:"\\f06d"}.fa-bed-pulse:before,.fa-procedures:before{content:"\\f487"}.fa-shuttle-space:before,.fa-space-shuttle:before{content:"\\f197"}.fa-face-laugh:before,.fa-laugh:before{content:"\\f599"}.fa-folder-open:before{content:"\\f07c"}.fa-heart-circle-plus:before{content:"\\e500"}.fa-code-fork:before{content:"\\e13b"}.fa-city:before{content:"\\f64f"}.fa-microphone-alt:before,.fa-microphone-lines:before{content:"\\f3c9"}.fa-pepper-hot:before{content:"\\f816"}.fa-unlock:before{content:"\\f09c"}.fa-colon-sign:before{content:"\\e140"}.fa-headset:before{content:"\\f590"}.fa-store-slash:before{content:"\\e071"}.fa-road-circle-xmark:before{content:"\\e566"}.fa-user-minus:before{content:"\\f503"}.fa-mars-stroke-up:before,.fa-mars-stroke-v:before{content:"\\f22a"}.fa-champagne-glasses:before,.fa-glass-cheers:before{content:"\\f79f"}.fa-clipboard:before{content:"\\f328"}.fa-house-circle-exclamation:before{content:"\\e50a"}.fa-file-arrow-up:before,.fa-file-upload:before{content:"\\f574"}.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before{content:"\\f1eb"}.fa-bath:before,.fa-bathtub:before{content:"\\f2cd"}.fa-underline:before{content:"\\f0cd"}.fa-user-edit:before,.fa-user-pen:before{content:"\\f4ff"}.fa-signature:before{content:"\\f5b7"}.fa-stroopwafel:before{content:"\\f551"}.fa-bold:before{content:"\\f032"}.fa-anchor-lock:before{content:"\\e4ad"}.fa-building-ngo:before{content:"\\e4d7"}.fa-manat-sign:before{content:"\\e1d5"}.fa-not-equal:before{content:"\\f53e"}.fa-border-style:before,.fa-border-top-left:before{content:"\\f853"}.fa-map-location-dot:before,.fa-map-marked-alt:before{content:"\\f5a0"}.fa-jedi:before{content:"\\f669"}.fa-poll:before,.fa-square-poll-vertical:before{content:"\\f681"}.fa-mug-hot:before{content:"\\f7b6"}.fa-battery-car:before,.fa-car-battery:before{content:"\\f5df"}.fa-gift:before{content:"\\f06b"}.fa-dice-two:before{content:"\\f528"}.fa-chess-queen:before{content:"\\f445"}.fa-glasses:before{content:"\\f530"}.fa-chess-board:before{content:"\\f43c"}.fa-building-circle-check:before{content:"\\e4d2"}.fa-person-chalkboard:before{content:"\\e53d"}.fa-mars-stroke-h:before,.fa-mars-stroke-right:before{content:"\\f22b"}.fa-hand-back-fist:before,.fa-hand-rock:before{content:"\\f255"}.fa-caret-square-up:before,.fa-square-caret-up:before{content:"\\f151"}.fa-cloud-showers-water:before{content:"\\e4e4"}.fa-bar-chart:before,.fa-chart-bar:before{content:"\\f080"}.fa-hands-bubbles:before,.fa-hands-wash:before{content:"\\e05e"}.fa-less-than-equal:before{content:"\\f537"}.fa-train:before{content:"\\f238"}.fa-eye-low-vision:before,.fa-low-vision:before{content:"\\f2a8"}.fa-crow:before{content:"\\f520"}.fa-sailboat:before{content:"\\e445"}.fa-window-restore:before{content:"\\f2d2"}.fa-plus-square:before,.fa-square-plus:before{content:"\\f0fe"}.fa-torii-gate:before{content:"\\f6a1"}.fa-frog:before{content:"\\f52e"}.fa-bucket:before{content:"\\e4cf"}.fa-image:before{content:"\\f03e"}.fa-microphone:before{content:"\\f130"}.fa-cow:before{content:"\\f6c8"}.fa-caret-up:before{content:"\\f0d8"}.fa-screwdriver:before{content:"\\f54a"}.fa-folder-closed:before{content:"\\e185"}.fa-house-tsunami:before{content:"\\e515"}.fa-square-nfi:before{content:"\\e576"}.fa-arrow-up-from-ground-water:before{content:"\\e4b5"}.fa-glass-martini-alt:before,.fa-martini-glass:before{content:"\\f57b"}.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before{content:"\\f2ea"}.fa-columns:before,.fa-table-columns:before{content:"\\f0db"}.fa-lemon:before{content:"\\f094"}.fa-head-side-mask:before{content:"\\e063"}.fa-handshake:before{content:"\\f2b5"}.fa-gem:before{content:"\\f3a5"}.fa-dolly-box:before,.fa-dolly:before{content:"\\f472"}.fa-smoking:before{content:"\\f48d"}.fa-compress-arrows-alt:before,.fa-minimize:before{content:"\\f78c"}.fa-monument:before{content:"\\f5a6"}.fa-snowplow:before{content:"\\f7d2"}.fa-angle-double-right:before,.fa-angles-right:before{content:"\\f101"}.fa-cannabis:before{content:"\\f55f"}.fa-circle-play:before,.fa-play-circle:before{content:"\\f144"}.fa-tablets:before{content:"\\f490"}.fa-ethernet:before{content:"\\f796"}.fa-eur:before,.fa-euro-sign:before,.fa-euro:before{content:"\\f153"}.fa-chair:before{content:"\\f6c0"}.fa-check-circle:before,.fa-circle-check:before{content:"\\f058"}.fa-circle-stop:before,.fa-stop-circle:before{content:"\\f28d"}.fa-compass-drafting:before,.fa-drafting-compass:before{content:"\\f568"}.fa-plate-wheat:before{content:"\\e55a"}.fa-icicles:before{content:"\\f7ad"}.fa-person-shelter:before{content:"\\e54f"}.fa-neuter:before{content:"\\f22c"}.fa-id-badge:before{content:"\\f2c1"}.fa-marker:before{content:"\\f5a1"}.fa-face-laugh-beam:before,.fa-laugh-beam:before{content:"\\f59a"}.fa-helicopter-symbol:before{content:"\\e502"}.fa-universal-access:before{content:"\\f29a"}.fa-chevron-circle-up:before,.fa-circle-chevron-up:before{content:"\\f139"}.fa-lari-sign:before{content:"\\e1c8"}.fa-volcano:before{content:"\\f770"}.fa-person-walking-dashed-line-arrow-right:before{content:"\\e553"}.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before{content:"\\f154"}.fa-viruses:before{content:"\\e076"}.fa-square-person-confined:before{content:"\\e577"}.fa-user-tie:before{content:"\\f508"}.fa-arrow-down-long:before,.fa-long-arrow-down:before{content:"\\f175"}.fa-tent-arrow-down-to-line:before{content:"\\e57e"}.fa-certificate:before{content:"\\f0a3"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-suitcase:before{content:"\\f0f2"}.fa-person-skating:before,.fa-skating:before{content:"\\f7c5"}.fa-filter-circle-dollar:before,.fa-funnel-dollar:before{content:"\\f662"}.fa-camera-retro:before{content:"\\f083"}.fa-arrow-circle-down:before,.fa-circle-arrow-down:before{content:"\\f0ab"}.fa-arrow-right-to-file:before,.fa-file-import:before{content:"\\f56f"}.fa-external-link-square:before,.fa-square-arrow-up-right:before{content:"\\f14c"}.fa-box-open:before{content:"\\f49e"}.fa-scroll:before{content:"\\f70e"}.fa-spa:before{content:"\\f5bb"}.fa-location-pin-lock:before{content:"\\e51f"}.fa-pause:before{content:"\\f04c"}.fa-hill-avalanche:before{content:"\\e507"}.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-bomb:before{content:"\\f1e2"}.fa-registered:before{content:"\\f25d"}.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before{content:"\\f2bb"}.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before{content:"\\f516"}.fa-subscript:before{content:"\\f12c"}.fa-diamond-turn-right:before,.fa-directions:before{content:"\\f5eb"}.fa-burst:before{content:"\\e4dc"}.fa-house-laptop:before,.fa-laptop-house:before{content:"\\e066"}.fa-face-tired:before,.fa-tired:before{content:"\\f5c8"}.fa-money-bills:before{content:"\\e1f3"}.fa-smog:before{content:"\\f75f"}.fa-crutch:before{content:"\\f7f7"}.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before{content:"\\f0ee"}.fa-palette:before{content:"\\f53f"}.fa-arrows-turn-right:before{content:"\\e4c0"}.fa-vest:before{content:"\\e085"}.fa-ferry:before{content:"\\e4ea"}.fa-arrows-down-to-people:before{content:"\\e4b9"}.fa-seedling:before,.fa-sprout:before{content:"\\f4d8"}.fa-arrows-alt-h:before,.fa-left-right:before{content:"\\f337"}.fa-boxes-packing:before{content:"\\e4c7"}.fa-arrow-circle-left:before,.fa-circle-arrow-left:before{content:"\\f0a8"}.fa-group-arrows-rotate:before{content:"\\e4f6"}.fa-bowl-food:before{content:"\\e4c6"}.fa-candy-cane:before{content:"\\f786"}.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before{content:"\\f160"}.fa-cloud-bolt:before,.fa-thunderstorm:before{content:"\\f76c"}.fa-remove-format:before,.fa-text-slash:before{content:"\\f87d"}.fa-face-smile-wink:before,.fa-smile-wink:before{content:"\\f4da"}.fa-file-word:before{content:"\\f1c2"}.fa-file-powerpoint:before{content:"\\f1c4"}.fa-arrows-h:before,.fa-arrows-left-right:before{content:"\\f07e"}.fa-house-lock:before{content:"\\e510"}.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before{content:"\\f0ed"}.fa-children:before{content:"\\e4e1"}.fa-blackboard:before,.fa-chalkboard:before{content:"\\f51b"}.fa-user-alt-slash:before,.fa-user-large-slash:before{content:"\\f4fa"}.fa-envelope-open:before{content:"\\f2b6"}.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before{content:"\\e05f"}.fa-mattress-pillow:before{content:"\\e525"}.fa-guarani-sign:before{content:"\\e19a"}.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before{content:"\\f021"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-cruzeiro-sign:before{content:"\\e152"}.fa-greater-than-equal:before{content:"\\f532"}.fa-shield-alt:before,.fa-shield-halved:before{content:"\\f3ed"}.fa-atlas:before,.fa-book-atlas:before{content:"\\f558"}.fa-virus:before{content:"\\e074"}.fa-envelope-circle-check:before{content:"\\e4e8"}.fa-layer-group:before{content:"\\f5fd"}.fa-arrows-to-dot:before{content:"\\e4be"}.fa-archway:before{content:"\\f557"}.fa-heart-circle-check:before{content:"\\e4fd"}.fa-house-chimney-crack:before,.fa-house-damage:before{content:"\\f6f1"}.fa-file-archive:before,.fa-file-zipper:before{content:"\\f1c6"}.fa-square:before{content:"\\f0c8"}.fa-glass-martini:before,.fa-martini-glass-empty:before{content:"\\f000"}.fa-couch:before{content:"\\f4b8"}.fa-cedi-sign:before{content:"\\e0df"}.fa-italic:before{content:"\\f033"}.fa-church:before{content:"\\f51d"}.fa-comments-dollar:before{content:"\\f653"}.fa-democrat:before{content:"\\f747"}.fa-z:before{content:"\\5a"}.fa-person-skiing:before,.fa-skiing:before{content:"\\f7c9"}.fa-road-lock:before{content:"\\e567"}.fa-a:before{content:"\\41"}.fa-temperature-arrow-down:before,.fa-temperature-down:before{content:"\\e03f"}.fa-feather-alt:before,.fa-feather-pointed:before{content:"\\f56b"}.fa-p:before{content:"\\50"}.fa-snowflake:before{content:"\\f2dc"}.fa-newspaper:before{content:"\\f1ea"}.fa-ad:before,.fa-rectangle-ad:before{content:"\\f641"}.fa-arrow-circle-right:before,.fa-circle-arrow-right:before{content:"\\f0a9"}.fa-filter-circle-xmark:before{content:"\\e17b"}.fa-locust:before{content:"\\e520"}.fa-sort:before,.fa-unsorted:before{content:"\\f0dc"}.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before{content:"\\f0cb"}.fa-person-dress-burst:before{content:"\\e544"}.fa-money-check-alt:before,.fa-money-check-dollar:before{content:"\\f53d"}.fa-vector-square:before{content:"\\f5cb"}.fa-bread-slice:before{content:"\\f7ec"}.fa-language:before{content:"\\f1ab"}.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before{content:"\\f598"}.fa-filter:before{content:"\\f0b0"}.fa-question:before{content:"\\3f"}.fa-file-signature:before{content:"\\f573"}.fa-arrows-alt:before,.fa-up-down-left-right:before{content:"\\f0b2"}.fa-house-chimney-user:before{content:"\\e065"}.fa-hand-holding-heart:before{content:"\\f4be"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-money-check:before{content:"\\f53c"}.fa-star-half-alt:before,.fa-star-half-stroke:before{content:"\\f5c0"}.fa-code:before{content:"\\f121"}.fa-glass-whiskey:before,.fa-whiskey-glass:before{content:"\\f7a0"}.fa-building-circle-exclamation:before{content:"\\e4d3"}.fa-magnifying-glass-chart:before{content:"\\e522"}.fa-arrow-up-right-from-square:before,.fa-external-link:before{content:"\\f08e"}.fa-cubes-stacked:before{content:"\\e4e6"}.fa-krw:before,.fa-won-sign:before,.fa-won:before{content:"\\f159"}.fa-virus-covid:before{content:"\\e4a8"}.fa-austral-sign:before{content:"\\e0a9"}.fa-f:before{content:"\\46"}.fa-leaf:before{content:"\\f06c"}.fa-road:before{content:"\\f018"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-person-circle-plus:before{content:"\\e541"}.fa-chart-pie:before,.fa-pie-chart:before{content:"\\f200"}.fa-bolt-lightning:before{content:"\\e0b7"}.fa-sack-xmark:before{content:"\\e56a"}.fa-file-excel:before{content:"\\f1c3"}.fa-file-contract:before{content:"\\f56c"}.fa-fish-fins:before{content:"\\e4f2"}.fa-building-flag:before{content:"\\e4d5"}.fa-face-grin-beam:before,.fa-grin-beam:before{content:"\\f582"}.fa-object-ungroup:before{content:"\\f248"}.fa-poop:before{content:"\\f619"}.fa-location-pin:before,.fa-map-marker:before{content:"\\f041"}.fa-kaaba:before{content:"\\f66b"}.fa-toilet-paper:before{content:"\\f71e"}.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before{content:"\\f807"}.fa-eject:before{content:"\\f052"}.fa-arrow-alt-circle-right:before,.fa-circle-right:before{content:"\\f35a"}.fa-plane-circle-check:before{content:"\\e555"}.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before{content:"\\f5a5"}.fa-object-group:before{content:"\\f247"}.fa-chart-line:before,.fa-line-chart:before{content:"\\f201"}.fa-mask-ventilator:before{content:"\\e524"}.fa-arrow-right:before{content:"\\f061"}.fa-map-signs:before,.fa-signs-post:before{content:"\\f277"}.fa-cash-register:before{content:"\\f788"}.fa-person-circle-question:before{content:"\\e542"}.fa-h:before{content:"\\48"}.fa-tarp:before{content:"\\e57b"}.fa-screwdriver-wrench:before,.fa-tools:before{content:"\\f7d9"}.fa-arrows-to-eye:before{content:"\\e4bf"}.fa-plug-circle-bolt:before{content:"\\e55b"}.fa-heart:before{content:"\\f004"}.fa-mars-and-venus:before{content:"\\f224"}.fa-home-user:before,.fa-house-user:before{content:"\\e1b0"}.fa-dumpster-fire:before{content:"\\f794"}.fa-house-crack:before{content:"\\e3b1"}.fa-cocktail:before,.fa-martini-glass-citrus:before{content:"\\f561"}.fa-face-surprise:before,.fa-surprise:before{content:"\\f5c2"}.fa-bottle-water:before{content:"\\e4c5"}.fa-circle-pause:before,.fa-pause-circle:before{content:"\\f28b"}.fa-toilet-paper-slash:before{content:"\\e072"}.fa-apple-alt:before,.fa-apple-whole:before{content:"\\f5d1"}.fa-kitchen-set:before{content:"\\e51a"}.fa-r:before{content:"\\52"}.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-cube:before{content:"\\f1b2"}.fa-bitcoin-sign:before{content:"\\e0b4"}.fa-shield-dog:before{content:"\\e573"}.fa-solar-panel:before{content:"\\f5ba"}.fa-lock-open:before{content:"\\f3c1"}.fa-elevator:before{content:"\\e16d"}.fa-money-bill-transfer:before{content:"\\e528"}.fa-money-bill-trend-up:before{content:"\\e529"}.fa-house-flood-water-circle-arrow-right:before{content:"\\e50f"}.fa-poll-h:before,.fa-square-poll-horizontal:before{content:"\\f682"}.fa-circle:before{content:"\\f111"}.fa-backward-fast:before,.fa-fast-backward:before{content:"\\f049"}.fa-recycle:before{content:"\\f1b8"}.fa-user-astronaut:before{content:"\\f4fb"}.fa-plane-slash:before{content:"\\e069"}.fa-trademark:before{content:"\\f25c"}.fa-basketball-ball:before,.fa-basketball:before{content:"\\f434"}.fa-satellite-dish:before{content:"\\f7c0"}.fa-arrow-alt-circle-up:before,.fa-circle-up:before{content:"\\f35b"}.fa-mobile-alt:before,.fa-mobile-screen-button:before{content:"\\f3cd"}.fa-volume-high:before,.fa-volume-up:before{content:"\\f028"}.fa-users-rays:before{content:"\\e593"}.fa-wallet:before{content:"\\f555"}.fa-clipboard-check:before{content:"\\f46c"}.fa-file-audio:before{content:"\\f1c7"}.fa-burger:before,.fa-hamburger:before{content:"\\f805"}.fa-wrench:before{content:"\\f0ad"}.fa-bugs:before{content:"\\e4d0"}.fa-rupee-sign:before,.fa-rupee:before{content:"\\f156"}.fa-file-image:before{content:"\\f1c5"}.fa-circle-question:before,.fa-question-circle:before{content:"\\f059"}.fa-plane-departure:before{content:"\\f5b0"}.fa-handshake-slash:before{content:"\\e060"}.fa-book-bookmark:before{content:"\\e0bb"}.fa-code-branch:before{content:"\\f126"}.fa-hat-cowboy:before{content:"\\f8c0"}.fa-bridge:before{content:"\\e4c8"}.fa-phone-alt:before,.fa-phone-flip:before{content:"\\f879"}.fa-truck-front:before{content:"\\e2b7"}.fa-cat:before{content:"\\f6be"}.fa-anchor-circle-exclamation:before{content:"\\e4ab"}.fa-truck-field:before{content:"\\e58d"}.fa-route:before{content:"\\f4d7"}.fa-clipboard-question:before{content:"\\e4e3"}.fa-panorama:before{content:"\\e209"}.fa-comment-medical:before{content:"\\f7f5"}.fa-teeth-open:before{content:"\\f62f"}.fa-file-circle-minus:before{content:"\\e4ed"}.fa-tags:before{content:"\\f02c"}.fa-wine-glass:before{content:"\\f4e3"}.fa-fast-forward:before,.fa-forward-fast:before{content:"\\f050"}.fa-face-meh-blank:before,.fa-meh-blank:before{content:"\\f5a4"}.fa-parking:before,.fa-square-parking:before{content:"\\f540"}.fa-house-signal:before{content:"\\e012"}.fa-bars-progress:before,.fa-tasks-alt:before{content:"\\f828"}.fa-faucet-drip:before{content:"\\e006"}.fa-cart-flatbed:before,.fa-dolly-flatbed:before{content:"\\f474"}.fa-ban-smoking:before,.fa-smoking-ban:before{content:"\\f54d"}.fa-terminal:before{content:"\\f120"}.fa-mobile-button:before{content:"\\f10b"}.fa-house-medical-flag:before{content:"\\e514"}.fa-basket-shopping:before,.fa-shopping-basket:before{content:"\\f291"}.fa-tape:before{content:"\\f4db"}.fa-bus-alt:before,.fa-bus-simple:before{content:"\\f55e"}.fa-eye:before{content:"\\f06e"}.fa-face-sad-cry:before,.fa-sad-cry:before{content:"\\f5b3"}.fa-audio-description:before{content:"\\f29e"}.fa-person-military-to-person:before{content:"\\e54c"}.fa-file-shield:before{content:"\\e4f0"}.fa-user-slash:before{content:"\\f506"}.fa-pen:before{content:"\\f304"}.fa-tower-observation:before{content:"\\e586"}.fa-file-code:before{content:"\\f1c9"}.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before{content:"\\f012"}.fa-bus:before{content:"\\f207"}.fa-heart-circle-xmark:before{content:"\\e501"}.fa-home-lg:before,.fa-house-chimney:before{content:"\\e3af"}.fa-window-maximize:before{content:"\\f2d0"}.fa-face-frown:before,.fa-frown:before{content:"\\f119"}.fa-prescription:before{content:"\\f5b1"}.fa-shop:before,.fa-store-alt:before{content:"\\f54f"}.fa-floppy-disk:before,.fa-save:before{content:"\\f0c7"}.fa-vihara:before{content:"\\f6a7"}.fa-balance-scale-left:before,.fa-scale-unbalanced:before{content:"\\f515"}.fa-sort-asc:before,.fa-sort-up:before{content:"\\f0de"}.fa-comment-dots:before,.fa-commenting:before{content:"\\f4ad"}.fa-plant-wilt:before{content:"\\e5aa"}.fa-diamond:before{content:"\\f219"}.fa-face-grin-squint:before,.fa-grin-squint:before{content:"\\f585"}.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before{content:"\\f4c0"}.fa-bacterium:before{content:"\\e05a"}.fa-hand-pointer:before{content:"\\f25a"}.fa-drum-steelpan:before{content:"\\f56a"}.fa-hand-scissors:before{content:"\\f257"}.fa-hands-praying:before,.fa-praying-hands:before{content:"\\f684"}.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before{content:"\\f01e"}.fa-biohazard:before{content:"\\f780"}.fa-location-crosshairs:before,.fa-location:before{content:"\\f601"}.fa-mars-double:before{content:"\\f227"}.fa-child-dress:before{content:"\\e59c"}.fa-users-between-lines:before{content:"\\e591"}.fa-lungs-virus:before{content:"\\e067"}.fa-face-grin-tears:before,.fa-grin-tears:before{content:"\\f588"}.fa-phone:before{content:"\\f095"}.fa-calendar-times:before,.fa-calendar-xmark:before{content:"\\f273"}.fa-child-reaching:before{content:"\\e59d"}.fa-head-side-virus:before{content:"\\e064"}.fa-user-cog:before,.fa-user-gear:before{content:"\\f4fe"}.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before{content:"\\f163"}.fa-door-closed:before{content:"\\f52a"}.fa-shield-virus:before{content:"\\e06c"}.fa-dice-six:before{content:"\\f526"}.fa-mosquito-net:before{content:"\\e52c"}.fa-bridge-water:before{content:"\\e4ce"}.fa-person-booth:before{content:"\\f756"}.fa-text-width:before{content:"\\f035"}.fa-hat-wizard:before{content:"\\f6e8"}.fa-pen-fancy:before{content:"\\f5ac"}.fa-digging:before,.fa-person-digging:before{content:"\\f85e"}.fa-trash:before{content:"\\f1f8"}.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before{content:"\\f629"}.fa-book-medical:before{content:"\\f7e6"}.fa-poo:before{content:"\\f2fe"}.fa-quote-right-alt:before,.fa-quote-right:before{content:"\\f10e"}.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before{content:"\\f553"}.fa-cubes:before{content:"\\f1b3"}.fa-divide:before{content:"\\f529"}.fa-tenge-sign:before,.fa-tenge:before{content:"\\f7d7"}.fa-headphones:before{content:"\\f025"}.fa-hands-holding:before{content:"\\f4c2"}.fa-hands-clapping:before{content:"\\e1a8"}.fa-republican:before{content:"\\f75e"}.fa-arrow-left:before{content:"\\f060"}.fa-person-circle-xmark:before{content:"\\e543"}.fa-ruler:before{content:"\\f545"}.fa-align-left:before{content:"\\f036"}.fa-dice-d6:before{content:"\\f6d1"}.fa-restroom:before{content:"\\f7bd"}.fa-j:before{content:"\\4a"}.fa-users-viewfinder:before{content:"\\e595"}.fa-file-video:before{content:"\\f1c8"}.fa-external-link-alt:before,.fa-up-right-from-square:before{content:"\\f35d"}.fa-table-cells:before,.fa-th:before{content:"\\f00a"}.fa-file-pdf:before{content:"\\f1c1"}.fa-bible:before,.fa-book-bible:before{content:"\\f647"}.fa-o:before{content:"\\4f"}.fa-medkit:before,.fa-suitcase-medical:before{content:"\\f0fa"}.fa-user-secret:before{content:"\\f21b"}.fa-otter:before{content:"\\f700"}.fa-female:before,.fa-person-dress:before{content:"\\f182"}.fa-comment-dollar:before{content:"\\f651"}.fa-briefcase-clock:before,.fa-business-time:before{content:"\\f64a"}.fa-table-cells-large:before,.fa-th-large:before{content:"\\f009"}.fa-book-tanakh:before,.fa-tanakh:before{content:"\\f827"}.fa-phone-volume:before,.fa-volume-control-phone:before{content:"\\f2a0"}.fa-hat-cowboy-side:before{content:"\\f8c1"}.fa-clipboard-user:before{content:"\\f7f3"}.fa-child:before{content:"\\f1ae"}.fa-lira-sign:before{content:"\\f195"}.fa-satellite:before{content:"\\f7bf"}.fa-plane-lock:before{content:"\\e558"}.fa-tag:before{content:"\\f02b"}.fa-comment:before{content:"\\f075"}.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before{content:"\\f1fd"}.fa-envelope:before{content:"\\f0e0"}.fa-angle-double-up:before,.fa-angles-up:before{content:"\\f102"}.fa-paperclip:before{content:"\\f0c6"}.fa-arrow-right-to-city:before{content:"\\e4b3"}.fa-ribbon:before{content:"\\f4d6"}.fa-lungs:before{content:"\\f604"}.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before{content:"\\f887"}.fa-litecoin-sign:before{content:"\\e1d3"}.fa-border-none:before{content:"\\f850"}.fa-circle-nodes:before{content:"\\e4e2"}.fa-parachute-box:before{content:"\\f4cd"}.fa-indent:before{content:"\\f03c"}.fa-truck-field-un:before{content:"\\e58e"}.fa-hourglass-empty:before,.fa-hourglass:before{content:"\\f254"}.fa-mountain:before{content:"\\f6fc"}.fa-user-doctor:before,.fa-user-md:before{content:"\\f0f0"}.fa-circle-info:before,.fa-info-circle:before{content:"\\f05a"}.fa-cloud-meatball:before{content:"\\f73b"}.fa-camera-alt:before,.fa-camera:before{content:"\\f030"}.fa-square-virus:before{content:"\\e578"}.fa-meteor:before{content:"\\f753"}.fa-car-on:before{content:"\\e4dd"}.fa-sleigh:before{content:"\\f7cc"}.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before{content:"\\f162"}.fa-hand-holding-droplet:before,.fa-hand-holding-water:before{content:"\\f4c1"}.fa-water:before{content:"\\f773"}.fa-calendar-check:before{content:"\\f274"}.fa-braille:before{content:"\\f2a1"}.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before{content:"\\f486"}.fa-landmark:before{content:"\\f66f"}.fa-truck:before{content:"\\f0d1"}.fa-crosshairs:before{content:"\\f05b"}.fa-person-cane:before{content:"\\e53c"}.fa-tent:before{content:"\\e57d"}.fa-vest-patches:before{content:"\\e086"}.fa-check-double:before{content:"\\f560"}.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before{content:"\\f15d"}.fa-money-bill-wheat:before{content:"\\e52a"}.fa-cookie:before{content:"\\f563"}.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-hard-drive:before,.fa-hdd:before{content:"\\f0a0"}.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before{content:"\\f586"}.fa-dumbbell:before{content:"\\f44b"}.fa-list-alt:before,.fa-rectangle-list:before{content:"\\f022"}.fa-tarp-droplet:before{content:"\\e57c"}.fa-house-medical-circle-check:before{content:"\\e511"}.fa-person-skiing-nordic:before,.fa-skiing-nordic:before{content:"\\f7ca"}.fa-calendar-plus:before{content:"\\f271"}.fa-plane-arrival:before{content:"\\f5af"}.fa-arrow-alt-circle-left:before,.fa-circle-left:before{content:"\\f359"}.fa-subway:before,.fa-train-subway:before{content:"\\f239"}.fa-chart-gantt:before{content:"\\e0e4"}.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before{content:"\\e1bc"}.fa-crop-alt:before,.fa-crop-simple:before{content:"\\f565"}.fa-money-bill-1:before,.fa-money-bill-alt:before{content:"\\f3d1"}.fa-left-long:before,.fa-long-arrow-alt-left:before{content:"\\f30a"}.fa-dna:before{content:"\\f471"}.fa-virus-slash:before{content:"\\e075"}.fa-minus:before,.fa-subtract:before{content:"\\f068"}.fa-chess:before{content:"\\f439"}.fa-arrow-left-long:before,.fa-long-arrow-left:before{content:"\\f177"}.fa-plug-circle-check:before{content:"\\e55c"}.fa-street-view:before{content:"\\f21d"}.fa-franc-sign:before{content:"\\e18f"}.fa-volume-off:before{content:"\\f026"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before{content:"\\f2a3"}.fa-cog:before,.fa-gear:before{content:"\\f013"}.fa-droplet-slash:before,.fa-tint-slash:before{content:"\\f5c7"}.fa-mosque:before{content:"\\f678"}.fa-mosquito:before{content:"\\e52b"}.fa-star-of-david:before{content:"\\f69a"}.fa-person-military-rifle:before{content:"\\e54b"}.fa-cart-shopping:before,.fa-shopping-cart:before{content:"\\f07a"}.fa-vials:before{content:"\\f493"}.fa-plug-circle-plus:before{content:"\\e55f"}.fa-place-of-worship:before{content:"\\f67f"}.fa-grip-vertical:before{content:"\\f58e"}.fa-arrow-turn-up:before,.fa-level-up:before{content:"\\f148"}.fa-u:before{content:"\\55"}.fa-square-root-alt:before,.fa-square-root-variable:before{content:"\\f698"}.fa-clock-four:before,.fa-clock:before{content:"\\f017"}.fa-backward-step:before,.fa-step-backward:before{content:"\\f048"}.fa-pallet:before{content:"\\f482"}.fa-faucet:before{content:"\\e005"}.fa-baseball-bat-ball:before{content:"\\f432"}.fa-s:before{content:"\\53"}.fa-timeline:before{content:"\\e29c"}.fa-keyboard:before{content:"\\f11c"}.fa-caret-down:before{content:"\\f0d7"}.fa-clinic-medical:before,.fa-house-chimney-medical:before{content:"\\f7f2"}.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-mobile-android-alt:before,.fa-mobile-screen:before{content:"\\f3cf"}.fa-plane-up:before{content:"\\e22d"}.fa-piggy-bank:before{content:"\\f4d3"}.fa-battery-3:before,.fa-battery-half:before{content:"\\f242"}.fa-mountain-city:before{content:"\\e52e"}.fa-coins:before{content:"\\f51e"}.fa-khanda:before{content:"\\f66d"}.fa-sliders-h:before,.fa-sliders:before{content:"\\f1de"}.fa-folder-tree:before{content:"\\f802"}.fa-network-wired:before{content:"\\f6ff"}.fa-map-pin:before{content:"\\f276"}.fa-hamsa:before{content:"\\f665"}.fa-cent-sign:before{content:"\\e3f5"}.fa-flask:before{content:"\\f0c3"}.fa-person-pregnant:before{content:"\\e31e"}.fa-wand-sparkles:before{content:"\\f72b"}.fa-ellipsis-v:before,.fa-ellipsis-vertical:before{content:"\\f142"}.fa-ticket:before{content:"\\f145"}.fa-power-off:before{content:"\\f011"}.fa-long-arrow-alt-right:before,.fa-right-long:before{content:"\\f30b"}.fa-flag-usa:before{content:"\\f74d"}.fa-laptop-file:before{content:"\\e51d"}.fa-teletype:before,.fa-tty:before{content:"\\f1e4"}.fa-diagram-next:before{content:"\\e476"}.fa-person-rifle:before{content:"\\e54e"}.fa-house-medical-circle-exclamation:before{content:"\\e512"}.fa-closed-captioning:before{content:"\\f20a"}.fa-hiking:before,.fa-person-hiking:before{content:"\\f6ec"}.fa-venus-double:before{content:"\\f226"}.fa-images:before{content:"\\f302"}.fa-calculator:before{content:"\\f1ec"}.fa-people-pulling:before{content:"\\e535"}.fa-n:before{content:"\\4e"}.fa-cable-car:before,.fa-tram:before{content:"\\f7da"}.fa-cloud-rain:before{content:"\\f73d"}.fa-building-circle-xmark:before{content:"\\e4d4"}.fa-ship:before{content:"\\f21a"}.fa-arrows-down-to-line:before{content:"\\e4b8"}.fa-download:before{content:"\\f019"}.fa-face-grin:before,.fa-grin:before{content:"\\f580"}.fa-backspace:before,.fa-delete-left:before{content:"\\f55a"}.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before{content:"\\f1fb"}.fa-file-circle-check:before{content:"\\e5a0"}.fa-forward:before{content:"\\f04e"}.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before{content:"\\f3ce"}.fa-face-meh:before,.fa-meh:before{content:"\\f11a"}.fa-align-center:before{content:"\\f037"}.fa-book-dead:before,.fa-book-skull:before{content:"\\f6b7"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-heart-circle-exclamation:before{content:"\\e4fe"}.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before{content:"\\f015"}.fa-calendar-week:before{content:"\\f784"}.fa-laptop-medical:before{content:"\\f812"}.fa-b:before{content:"\\42"}.fa-file-medical:before{content:"\\f477"}.fa-dice-one:before{content:"\\f525"}.fa-kiwi-bird:before{content:"\\f535"}.fa-arrow-right-arrow-left:before,.fa-exchange:before{content:"\\f0ec"}.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before{content:"\\f2f9"}.fa-cutlery:before,.fa-utensils:before{content:"\\f2e7"}.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before{content:"\\f161"}.fa-mill-sign:before{content:"\\e1ed"}.fa-bowl-rice:before{content:"\\e2eb"}.fa-skull:before{content:"\\f54c"}.fa-broadcast-tower:before,.fa-tower-broadcast:before{content:"\\f519"}.fa-truck-pickup:before{content:"\\f63c"}.fa-long-arrow-alt-up:before,.fa-up-long:before{content:"\\f30c"}.fa-stop:before{content:"\\f04d"}.fa-code-merge:before{content:"\\f387"}.fa-upload:before{content:"\\f093"}.fa-hurricane:before{content:"\\f751"}.fa-mound:before{content:"\\e52d"}.fa-toilet-portable:before{content:"\\e583"}.fa-compact-disc:before{content:"\\f51f"}.fa-file-arrow-down:before,.fa-file-download:before{content:"\\f56d"}.fa-caravan:before{content:"\\f8ff"}.fa-shield-cat:before{content:"\\e572"}.fa-bolt:before,.fa-zap:before{content:"\\f0e7"}.fa-glass-water:before{content:"\\e4f4"}.fa-oil-well:before{content:"\\e532"}.fa-vault:before{content:"\\e2c5"}.fa-mars:before{content:"\\f222"}.fa-toilet:before{content:"\\f7d8"}.fa-plane-circle-xmark:before{content:"\\e557"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before{content:"\\f157"}.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before{content:"\\f158"}.fa-sun:before{content:"\\f185"}.fa-guitar:before{content:"\\f7a6"}.fa-face-laugh-wink:before,.fa-laugh-wink:before{content:"\\f59c"}.fa-horse-head:before{content:"\\f7ab"}.fa-bore-hole:before{content:"\\e4c3"}.fa-industry:before{content:"\\f275"}.fa-arrow-alt-circle-down:before,.fa-circle-down:before{content:"\\f358"}.fa-arrows-turn-to-dots:before{content:"\\e4c1"}.fa-florin-sign:before{content:"\\e184"}.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before{content:"\\f884"}.fa-less-than:before{content:"\\3c"}.fa-angle-down:before{content:"\\f107"}.fa-car-tunnel:before{content:"\\e4de"}.fa-head-side-cough:before{content:"\\e061"}.fa-grip-lines:before{content:"\\f7a4"}.fa-thumbs-down:before{content:"\\f165"}.fa-user-lock:before{content:"\\f502"}.fa-arrow-right-long:before,.fa-long-arrow-right:before{content:"\\f178"}.fa-anchor-circle-xmark:before{content:"\\e4ac"}.fa-ellipsis-h:before,.fa-ellipsis:before{content:"\\f141"}.fa-chess-pawn:before{content:"\\f443"}.fa-first-aid:before,.fa-kit-medical:before{content:"\\f479"}.fa-person-through-window:before{content:"\\e5a9"}.fa-toolbox:before{content:"\\f552"}.fa-hands-holding-circle:before{content:"\\e4fb"}.fa-bug:before{content:"\\f188"}.fa-credit-card-alt:before,.fa-credit-card:before{content:"\\f09d"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-hand-holding-hand:before{content:"\\e4f7"}.fa-book-open-reader:before,.fa-book-reader:before{content:"\\f5da"}.fa-mountain-sun:before{content:"\\e52f"}.fa-arrows-left-right-to-line:before{content:"\\e4ba"}.fa-dice-d20:before{content:"\\f6cf"}.fa-truck-droplet:before{content:"\\e58c"}.fa-file-circle-xmark:before{content:"\\e5a1"}.fa-temperature-arrow-up:before,.fa-temperature-up:before{content:"\\e040"}.fa-medal:before{content:"\\f5a2"}.fa-bed:before{content:"\\f236"}.fa-h-square:before,.fa-square-h:before{content:"\\f0fd"}.fa-podcast:before{content:"\\f2ce"}.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-bell:before{content:"\\f0f3"}.fa-superscript:before{content:"\\f12b"}.fa-plug-circle-xmark:before{content:"\\e560"}.fa-star-of-life:before{content:"\\f621"}.fa-phone-slash:before{content:"\\f3dd"}.fa-paint-roller:before{content:"\\f5aa"}.fa-hands-helping:before,.fa-handshake-angle:before{content:"\\f4c4"}.fa-location-dot:before,.fa-map-marker-alt:before{content:"\\f3c5"}.fa-file:before{content:"\\f15b"}.fa-greater-than:before{content:"\\3e"}.fa-person-swimming:before,.fa-swimmer:before{content:"\\f5c4"}.fa-arrow-down:before{content:"\\f063"}.fa-droplet:before,.fa-tint:before{content:"\\f043"}.fa-eraser:before{content:"\\f12d"}.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before{content:"\\f57d"}.fa-person-burst:before{content:"\\e53b"}.fa-dove:before{content:"\\f4ba"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-socks:before{content:"\\f696"}.fa-inbox:before{content:"\\f01c"}.fa-section:before{content:"\\e447"}.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before{content:"\\f625"}.fa-envelope-open-text:before{content:"\\f658"}.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before{content:"\\f0f8"}.fa-wine-bottle:before{content:"\\f72f"}.fa-chess-rook:before{content:"\\f447"}.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before{content:"\\f550"}.fa-dharmachakra:before{content:"\\f655"}.fa-hotdog:before{content:"\\f80f"}.fa-blind:before,.fa-person-walking-with-cane:before{content:"\\f29d"}.fa-drum:before{content:"\\f569"}.fa-ice-cream:before{content:"\\f810"}.fa-heart-circle-bolt:before{content:"\\e4fc"}.fa-fax:before{content:"\\f1ac"}.fa-paragraph:before{content:"\\f1dd"}.fa-check-to-slot:before,.fa-vote-yea:before{content:"\\f772"}.fa-star-half:before{content:"\\f089"}.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before{content:"\\f468"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-assistive-listening-systems:before,.fa-ear-listen:before{content:"\\f2a2"}.fa-tree-city:before{content:"\\e587"}.fa-play:before{content:"\\f04b"}.fa-font:before{content:"\\f031"}.fa-rupiah-sign:before{content:"\\e23d"}.fa-magnifying-glass:before,.fa-search:before{content:"\\f002"}.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before{content:"\\f45d"}.fa-diagnoses:before,.fa-person-dots-from-line:before{content:"\\f470"}.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before{content:"\\f82a"}.fa-naira-sign:before{content:"\\e1f6"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-walkie-talkie:before{content:"\\f8ef"}.fa-file-edit:before,.fa-file-pen:before{content:"\\f31c"}.fa-receipt:before{content:"\\f543"}.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before{content:"\\f14b"}.fa-suitcase-rolling:before{content:"\\f5c1"}.fa-person-circle-exclamation:before{content:"\\e53f"}.fa-chevron-down:before{content:"\\f078"}.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before{content:"\\f240"}.fa-skull-crossbones:before{content:"\\f714"}.fa-code-compare:before{content:"\\e13a"}.fa-list-dots:before,.fa-list-ul:before{content:"\\f0ca"}.fa-school-lock:before{content:"\\e56f"}.fa-tower-cell:before{content:"\\e585"}.fa-down-long:before,.fa-long-arrow-alt-down:before{content:"\\f309"}.fa-ranking-star:before{content:"\\e561"}.fa-chess-king:before{content:"\\f43f"}.fa-person-harassing:before{content:"\\e549"}.fa-brazilian-real-sign:before{content:"\\e46c"}.fa-landmark-alt:before,.fa-landmark-dome:before{content:"\\f752"}.fa-arrow-up:before{content:"\\f062"}.fa-television:before,.fa-tv-alt:before,.fa-tv:before{content:"\\f26c"}.fa-shrimp:before{content:"\\e448"}.fa-list-check:before,.fa-tasks:before{content:"\\f0ae"}.fa-jug-detergent:before{content:"\\e519"}.fa-circle-user:before,.fa-user-circle:before{content:"\\f2bd"}.fa-user-shield:before{content:"\\f505"}.fa-wind:before{content:"\\f72e"}.fa-car-burst:before,.fa-car-crash:before{content:"\\f5e1"}.fa-y:before{content:"\\59"}.fa-person-snowboarding:before,.fa-snowboarding:before{content:"\\f7ce"}.fa-shipping-fast:before,.fa-truck-fast:before{content:"\\f48b"}.fa-fish:before{content:"\\f578"}.fa-user-graduate:before{content:"\\f501"}.fa-adjust:before,.fa-circle-half-stroke:before{content:"\\f042"}.fa-clapperboard:before{content:"\\e131"}.fa-circle-radiation:before,.fa-radiation-alt:before{content:"\\f7ba"}.fa-baseball-ball:before,.fa-baseball:before{content:"\\f433"}.fa-jet-fighter-up:before{content:"\\e518"}.fa-diagram-project:before,.fa-project-diagram:before{content:"\\f542"}.fa-copy:before{content:"\\f0c5"}.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before{content:"\\f6a9"}.fa-hand-sparkles:before{content:"\\e05d"}.fa-grip-horizontal:before,.fa-grip:before{content:"\\f58d"}.fa-share-from-square:before,.fa-share-square:before{content:"\\f14d"}.fa-child-combatant:before,.fa-child-rifle:before{content:"\\e4e0"}.fa-gun:before{content:"\\e19b"}.fa-phone-square:before,.fa-square-phone:before{content:"\\f098"}.fa-add:before,.fa-plus:before{content:"\\2b"}.fa-expand:before{content:"\\f065"}.fa-computer:before{content:"\\e4e5"}.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:"\\f00d"}.fa-arrows-up-down-left-right:before,.fa-arrows:before{content:"\\f047"}.fa-chalkboard-teacher:before,.fa-chalkboard-user:before{content:"\\f51c"}.fa-peso-sign:before{content:"\\e222"}.fa-building-shield:before{content:"\\e4d8"}.fa-baby:before{content:"\\f77c"}.fa-users-line:before{content:"\\e592"}.fa-quote-left-alt:before,.fa-quote-left:before{content:"\\f10d"}.fa-tractor:before{content:"\\f722"}.fa-trash-arrow-up:before,.fa-trash-restore:before{content:"\\f829"}.fa-arrow-down-up-lock:before{content:"\\e4b0"}.fa-lines-leaning:before{content:"\\e51e"}.fa-ruler-combined:before{content:"\\f546"}.fa-copyright:before{content:"\\f1f9"}.fa-equals:before{content:"\\3d"}.fa-blender:before{content:"\\f517"}.fa-teeth:before{content:"\\f62e"}.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before{content:"\\f20b"}.fa-map:before{content:"\\f279"}.fa-rocket:before{content:"\\f135"}.fa-photo-film:before,.fa-photo-video:before{content:"\\f87c"}.fa-folder-minus:before{content:"\\f65d"}.fa-store:before{content:"\\f54e"}.fa-arrow-trend-up:before{content:"\\e098"}.fa-plug-circle-minus:before{content:"\\e55e"}.fa-sign-hanging:before,.fa-sign:before{content:"\\f4d9"}.fa-bezier-curve:before{content:"\\f55b"}.fa-bell-slash:before{content:"\\f1f6"}.fa-tablet-android:before,.fa-tablet:before{content:"\\f3fb"}.fa-school-flag:before{content:"\\e56e"}.fa-fill:before{content:"\\f575"}.fa-angle-up:before{content:"\\f106"}.fa-drumstick-bite:before{content:"\\f6d7"}.fa-holly-berry:before{content:"\\f7aa"}.fa-chevron-left:before{content:"\\f053"}.fa-bacteria:before{content:"\\e059"}.fa-hand-lizard:before{content:"\\f258"}.fa-notdef:before{content:"\\e1fe"}.fa-disease:before{content:"\\f7fa"}.fa-briefcase-medical:before{content:"\\f469"}.fa-genderless:before{content:"\\f22d"}.fa-chevron-right:before{content:"\\f054"}.fa-retweet:before{content:"\\f079"}.fa-car-alt:before,.fa-car-rear:before{content:"\\f5de"}.fa-pump-soap:before{content:"\\e06b"}.fa-video-slash:before{content:"\\f4e2"}.fa-battery-2:before,.fa-battery-quarter:before{content:"\\f243"}.fa-radio:before{content:"\\f8d7"}.fa-baby-carriage:before,.fa-carriage-baby:before{content:"\\f77d"}.fa-traffic-light:before{content:"\\f637"}.fa-thermometer:before{content:"\\f491"}.fa-vr-cardboard:before{content:"\\f729"}.fa-hand-middle-finger:before{content:"\\f806"}.fa-percent:before,.fa-percentage:before{content:"\\25"}.fa-truck-moving:before{content:"\\f4df"}.fa-glass-water-droplet:before{content:"\\e4f5"}.fa-display:before{content:"\\e163"}.fa-face-smile:before,.fa-smile:before{content:"\\f118"}.fa-thumb-tack:before,.fa-thumbtack:before{content:"\\f08d"}.fa-trophy:before{content:"\\f091"}.fa-person-praying:before,.fa-pray:before{content:"\\f683"}.fa-hammer:before{content:"\\f6e3"}.fa-hand-peace:before{content:"\\f25b"}.fa-rotate:before,.fa-sync-alt:before{content:"\\f2f1"}.fa-spinner:before{content:"\\f110"}.fa-robot:before{content:"\\f544"}.fa-peace:before{content:"\\f67c"}.fa-cogs:before,.fa-gears:before{content:"\\f085"}.fa-warehouse:before{content:"\\f494"}.fa-arrow-up-right-dots:before{content:"\\e4b7"}.fa-splotch:before{content:"\\f5bc"}.fa-face-grin-hearts:before,.fa-grin-hearts:before{content:"\\f584"}.fa-dice-four:before{content:"\\f524"}.fa-sim-card:before{content:"\\f7c4"}.fa-transgender-alt:before,.fa-transgender:before{content:"\\f225"}.fa-mercury:before{content:"\\f223"}.fa-arrow-turn-down:before,.fa-level-down:before{content:"\\f149"}.fa-person-falling-burst:before{content:"\\e547"}.fa-award:before{content:"\\f559"}.fa-ticket-alt:before,.fa-ticket-simple:before{content:"\\f3ff"}.fa-building:before{content:"\\f1ad"}.fa-angle-double-left:before,.fa-angles-left:before{content:"\\f100"}.fa-qrcode:before{content:"\\f029"}.fa-clock-rotate-left:before,.fa-history:before{content:"\\f1da"}.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before{content:"\\f583"}.fa-arrow-right-from-file:before,.fa-file-export:before{content:"\\f56e"}.fa-shield-blank:before,.fa-shield:before{content:"\\f132"}.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before{content:"\\f885"}.fa-house-medical:before{content:"\\e3b2"}.fa-golf-ball-tee:before,.fa-golf-ball:before{content:"\\f450"}.fa-chevron-circle-left:before,.fa-circle-chevron-left:before{content:"\\f137"}.fa-house-chimney-window:before{content:"\\e00d"}.fa-pen-nib:before{content:"\\f5ad"}.fa-tent-arrow-turn-left:before{content:"\\e580"}.fa-tents:before{content:"\\e582"}.fa-magic:before,.fa-wand-magic:before{content:"\\f0d0"}.fa-dog:before{content:"\\f6d3"}.fa-carrot:before{content:"\\f787"}.fa-moon:before{content:"\\f186"}.fa-wine-glass-alt:before,.fa-wine-glass-empty:before{content:"\\f5ce"}.fa-cheese:before{content:"\\f7ef"}.fa-yin-yang:before{content:"\\f6ad"}.fa-music:before{content:"\\f001"}.fa-code-commit:before{content:"\\f386"}.fa-temperature-low:before{content:"\\f76b"}.fa-biking:before,.fa-person-biking:before{content:"\\f84a"}.fa-broom:before{content:"\\f51a"}.fa-shield-heart:before{content:"\\e574"}.fa-gopuram:before{content:"\\f664"}.fa-earth-oceania:before,.fa-globe-oceania:before{content:"\\e47b"}.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before{content:"\\f2d3"}.fa-hashtag:before{content:"\\23"}.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before{content:"\\f424"}.fa-oil-can:before{content:"\\f613"}.fa-t:before{content:"\\54"}.fa-hippo:before{content:"\\f6ed"}.fa-chart-column:before{content:"\\e0e3"}.fa-infinity:before{content:"\\f534"}.fa-vial-circle-check:before{content:"\\e596"}.fa-person-arrow-down-to-line:before{content:"\\e538"}.fa-voicemail:before{content:"\\f897"}.fa-fan:before{content:"\\f863"}.fa-person-walking-luggage:before{content:"\\e554"}.fa-arrows-alt-v:before,.fa-up-down:before{content:"\\f338"}.fa-cloud-moon-rain:before{content:"\\f73c"}.fa-calendar:before{content:"\\f133"}.fa-trailer:before{content:"\\e041"}.fa-bahai:before,.fa-haykal:before{content:"\\f666"}.fa-sd-card:before{content:"\\f7c2"}.fa-dragon:before{content:"\\f6d5"}.fa-shoe-prints:before{content:"\\f54b"}.fa-circle-plus:before,.fa-plus-circle:before{content:"\\f055"}.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before{content:"\\f58b"}.fa-hand-holding:before{content:"\\f4bd"}.fa-plug-circle-exclamation:before{content:"\\e55d"}.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before{content:"\\f127"}.fa-clone:before{content:"\\f24d"}.fa-person-walking-arrow-loop-left:before{content:"\\e551"}.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before{content:"\\f882"}.fa-fire-alt:before,.fa-fire-flame-curved:before{content:"\\f7e4"}.fa-tornado:before{content:"\\f76f"}.fa-file-circle-plus:before{content:"\\e494"}.fa-book-quran:before,.fa-quran:before{content:"\\f687"}.fa-anchor:before{content:"\\f13d"}.fa-border-all:before{content:"\\f84c"}.fa-angry:before,.fa-face-angry:before{content:"\\f556"}.fa-cookie-bite:before{content:"\\f564"}.fa-arrow-trend-down:before{content:"\\e097"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-draw-polygon:before{content:"\\f5ee"}.fa-balance-scale:before,.fa-scale-balanced:before{content:"\\f24e"}.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before{content:"\\f62a"}.fa-shower:before{content:"\\f2cc"}.fa-desktop-alt:before,.fa-desktop:before{content:"\\f390"}.fa-m:before{content:"\\4d"}.fa-table-list:before,.fa-th-list:before{content:"\\f00b"}.fa-comment-sms:before,.fa-sms:before{content:"\\f7cd"}.fa-book:before{content:"\\f02d"}.fa-user-plus:before{content:"\\f234"}.fa-check:before{content:"\\f00c"}.fa-battery-4:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-house-circle-check:before{content:"\\e509"}.fa-angle-left:before{content:"\\f104"}.fa-diagram-successor:before{content:"\\e47a"}.fa-truck-arrow-right:before{content:"\\e58b"}.fa-arrows-split-up-and-left:before{content:"\\e4bc"}.fa-fist-raised:before,.fa-hand-fist:before{content:"\\f6de"}.fa-cloud-moon:before{content:"\\f6c3"}.fa-briefcase:before{content:"\\f0b1"}.fa-person-falling:before{content:"\\e546"}.fa-image-portrait:before,.fa-portrait:before{content:"\\f3e0"}.fa-user-tag:before{content:"\\f507"}.fa-rug:before{content:"\\e569"}.fa-earth-europe:before,.fa-globe-europe:before{content:"\\f7a2"}.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before{content:"\\f59d"}.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before{content:"\\f410"}.fa-baht-sign:before{content:"\\e0ac"}.fa-book-open:before{content:"\\f518"}.fa-book-journal-whills:before,.fa-journal-whills:before{content:"\\f66a"}.fa-handcuffs:before{content:"\\e4f8"}.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before{content:"\\f071"}.fa-database:before{content:"\\f1c0"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-bottle-droplet:before{content:"\\e4c4"}.fa-mask-face:before{content:"\\e1d7"}.fa-hill-rockslide:before{content:"\\e508"}.fa-exchange-alt:before,.fa-right-left:before{content:"\\f362"}.fa-paper-plane:before{content:"\\f1d8"}.fa-road-circle-exclamation:before{content:"\\e565"}.fa-dungeon:before{content:"\\f6d9"}.fa-align-right:before{content:"\\f038"}.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before{content:"\\f53b"}.fa-life-ring:before{content:"\\f1cd"}.fa-hands:before,.fa-sign-language:before,.fa-signing:before{content:"\\f2a7"}.fa-calendar-day:before{content:"\\f783"}.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before{content:"\\f5c5"}.fa-arrows-up-down:before,.fa-arrows-v:before{content:"\\f07d"}.fa-face-grimace:before,.fa-grimace:before{content:"\\f57f"}.fa-wheelchair-alt:before,.fa-wheelchair-move:before{content:"\\e2ce"}.fa-level-down-alt:before,.fa-turn-down:before{content:"\\f3be"}.fa-person-walking-arrow-right:before{content:"\\e552"}.fa-envelope-square:before,.fa-square-envelope:before{content:"\\f199"}.fa-dice:before{content:"\\f522"}.fa-bowling-ball:before{content:"\\f436"}.fa-brain:before{content:"\\f5dc"}.fa-band-aid:before,.fa-bandage:before{content:"\\f462"}.fa-calendar-minus:before{content:"\\f272"}.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before{content:"\\f057"}.fa-gifts:before{content:"\\f79c"}.fa-hotel:before{content:"\\f594"}.fa-earth-asia:before,.fa-globe-asia:before{content:"\\f57e"}.fa-id-card-alt:before,.fa-id-card-clip:before{content:"\\f47f"}.fa-magnifying-glass-plus:before,.fa-search-plus:before{content:"\\f00e"}.fa-thumbs-up:before{content:"\\f164"}.fa-user-clock:before{content:"\\f4fd"}.fa-allergies:before,.fa-hand-dots:before{content:"\\f461"}.fa-file-invoice:before{content:"\\f570"}.fa-window-minimize:before{content:"\\f2d1"}.fa-coffee:before,.fa-mug-saucer:before{content:"\\f0f4"}.fa-brush:before{content:"\\f55d"}.fa-mask:before{content:"\\f6fa"}.fa-magnifying-glass-minus:before,.fa-search-minus:before{content:"\\f010"}.fa-ruler-vertical:before{content:"\\f548"}.fa-user-alt:before,.fa-user-large:before{content:"\\f406"}.fa-train-tram:before{content:"\\e5b4"}.fa-user-nurse:before{content:"\\f82f"}.fa-syringe:before{content:"\\f48e"}.fa-cloud-sun:before{content:"\\f6c4"}.fa-stopwatch-20:before{content:"\\e06f"}.fa-square-full:before{content:"\\f45c"}.fa-magnet:before{content:"\\f076"}.fa-jar:before{content:"\\e516"}.fa-note-sticky:before,.fa-sticky-note:before{content:"\\f249"}.fa-bug-slash:before{content:"\\e490"}.fa-arrow-up-from-water-pump:before{content:"\\e4b6"}.fa-bone:before{content:"\\f5d7"}.fa-user-injured:before{content:"\\f728"}.fa-face-sad-tear:before,.fa-sad-tear:before{content:"\\f5b4"}.fa-plane:before{content:"\\f072"}.fa-tent-arrows-down:before{content:"\\e581"}.fa-exclamation:before{content:"\\21"}.fa-arrows-spin:before{content:"\\e4bb"}.fa-print:before{content:"\\f02f"}.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before{content:"\\e2bb"}.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before{content:"\\24"}.fa-x:before{content:"\\58"}.fa-magnifying-glass-dollar:before,.fa-search-dollar:before{content:"\\f688"}.fa-users-cog:before,.fa-users-gear:before{content:"\\f509"}.fa-person-military-pointing:before{content:"\\e54a"}.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before{content:"\\f19c"}.fa-umbrella:before{content:"\\f0e9"}.fa-trowel:before{content:"\\e589"}.fa-d:before{content:"\\44"}.fa-stapler:before{content:"\\e5af"}.fa-masks-theater:before,.fa-theater-masks:before{content:"\\f630"}.fa-kip-sign:before{content:"\\e1c4"}.fa-hand-point-left:before{content:"\\f0a5"}.fa-handshake-alt:before,.fa-handshake-simple:before{content:"\\f4c6"}.fa-fighter-jet:before,.fa-jet-fighter:before{content:"\\f0fb"}.fa-share-alt-square:before,.fa-square-share-nodes:before{content:"\\f1e1"}.fa-barcode:before{content:"\\f02a"}.fa-plus-minus:before{content:"\\e43c"}.fa-video-camera:before,.fa-video:before{content:"\\f03d"}.fa-graduation-cap:before,.fa-mortar-board:before{content:"\\f19d"}.fa-hand-holding-medical:before{content:"\\e05c"}.fa-person-circle-check:before{content:"\\e53e"}.fa-level-up-alt:before,.fa-turn-up:before{content:"\\f3bf"}
.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host,:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}.fa-brands,.fab{font-weight:400}.fa-monero:before{content:"\\f3d0"}.fa-hooli:before{content:"\\f427"}.fa-yelp:before{content:"\\f1e9"}.fa-cc-visa:before{content:"\\f1f0"}.fa-lastfm:before{content:"\\f202"}.fa-shopware:before{content:"\\f5b5"}.fa-creative-commons-nc:before{content:"\\f4e8"}.fa-aws:before{content:"\\f375"}.fa-redhat:before{content:"\\f7bc"}.fa-yoast:before{content:"\\f2b1"}.fa-cloudflare:before{content:"\\e07d"}.fa-ups:before{content:"\\f7e0"}.fa-pixiv:before{content:"\\e640"}.fa-wpexplorer:before{content:"\\f2de"}.fa-dyalog:before{content:"\\f399"}.fa-bity:before{content:"\\f37a"}.fa-stackpath:before{content:"\\f842"}.fa-buysellads:before{content:"\\f20d"}.fa-first-order:before{content:"\\f2b0"}.fa-modx:before{content:"\\f285"}.fa-guilded:before{content:"\\e07e"}.fa-vnv:before{content:"\\f40b"}.fa-js-square:before,.fa-square-js:before{content:"\\f3b9"}.fa-microsoft:before{content:"\\f3ca"}.fa-qq:before{content:"\\f1d6"}.fa-orcid:before{content:"\\f8d2"}.fa-java:before{content:"\\f4e4"}.fa-invision:before{content:"\\f7b0"}.fa-creative-commons-pd-alt:before{content:"\\f4ed"}.fa-centercode:before{content:"\\f380"}.fa-glide-g:before{content:"\\f2a6"}.fa-drupal:before{content:"\\f1a9"}.fa-hire-a-helper:before{content:"\\f3b0"}.fa-creative-commons-by:before{content:"\\f4e7"}.fa-unity:before{content:"\\e049"}.fa-whmcs:before{content:"\\f40d"}.fa-rocketchat:before{content:"\\f3e8"}.fa-vk:before{content:"\\f189"}.fa-untappd:before{content:"\\f405"}.fa-mailchimp:before{content:"\\f59e"}.fa-css3-alt:before{content:"\\f38b"}.fa-reddit-square:before,.fa-square-reddit:before{content:"\\f1a2"}.fa-vimeo-v:before{content:"\\f27d"}.fa-contao:before{content:"\\f26d"}.fa-square-font-awesome:before{content:"\\e5ad"}.fa-deskpro:before{content:"\\f38f"}.fa-brave:before{content:"\\e63c"}.fa-sistrix:before{content:"\\f3ee"}.fa-instagram-square:before,.fa-square-instagram:before{content:"\\e055"}.fa-battle-net:before{content:"\\f835"}.fa-the-red-yeti:before{content:"\\f69d"}.fa-hacker-news-square:before,.fa-square-hacker-news:before{content:"\\f3af"}.fa-edge:before{content:"\\f282"}.fa-threads:before{content:"\\e618"}.fa-napster:before{content:"\\f3d2"}.fa-snapchat-square:before,.fa-square-snapchat:before{content:"\\f2ad"}.fa-google-plus-g:before{content:"\\f0d5"}.fa-artstation:before{content:"\\f77a"}.fa-markdown:before{content:"\\f60f"}.fa-sourcetree:before{content:"\\f7d3"}.fa-google-plus:before{content:"\\f2b3"}.fa-diaspora:before{content:"\\f791"}.fa-foursquare:before{content:"\\f180"}.fa-stack-overflow:before{content:"\\f16c"}.fa-github-alt:before{content:"\\f113"}.fa-phoenix-squadron:before{content:"\\f511"}.fa-pagelines:before{content:"\\f18c"}.fa-algolia:before{content:"\\f36c"}.fa-red-river:before{content:"\\f3e3"}.fa-creative-commons-sa:before{content:"\\f4ef"}.fa-safari:before{content:"\\f267"}.fa-google:before{content:"\\f1a0"}.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before{content:"\\f35c"}.fa-atlassian:before{content:"\\f77b"}.fa-linkedin-in:before{content:"\\f0e1"}.fa-digital-ocean:before{content:"\\f391"}.fa-nimblr:before{content:"\\f5a8"}.fa-chromecast:before{content:"\\f838"}.fa-evernote:before{content:"\\f839"}.fa-hacker-news:before{content:"\\f1d4"}.fa-creative-commons-sampling:before{content:"\\f4f0"}.fa-adversal:before{content:"\\f36a"}.fa-creative-commons:before{content:"\\f25e"}.fa-watchman-monitoring:before{content:"\\e087"}.fa-fonticons:before{content:"\\f280"}.fa-weixin:before{content:"\\f1d7"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-codepen:before{content:"\\f1cb"}.fa-git-alt:before{content:"\\f841"}.fa-lyft:before{content:"\\f3c3"}.fa-rev:before{content:"\\f5b2"}.fa-windows:before{content:"\\f17a"}.fa-wizards-of-the-coast:before{content:"\\f730"}.fa-square-viadeo:before,.fa-viadeo-square:before{content:"\\f2aa"}.fa-meetup:before{content:"\\f2e0"}.fa-centos:before{content:"\\f789"}.fa-adn:before{content:"\\f170"}.fa-cloudsmith:before{content:"\\f384"}.fa-opensuse:before{content:"\\e62b"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-dribbble-square:before,.fa-square-dribbble:before{content:"\\f397"}.fa-codiepie:before{content:"\\f284"}.fa-node:before{content:"\\f419"}.fa-mix:before{content:"\\f3cb"}.fa-steam:before{content:"\\f1b6"}.fa-cc-apple-pay:before{content:"\\f416"}.fa-scribd:before{content:"\\f28a"}.fa-debian:before{content:"\\e60b"}.fa-openid:before{content:"\\f19b"}.fa-instalod:before{content:"\\e081"}.fa-expeditedssl:before{content:"\\f23e"}.fa-sellcast:before{content:"\\f2da"}.fa-square-twitter:before,.fa-twitter-square:before{content:"\\f081"}.fa-r-project:before{content:"\\f4f7"}.fa-delicious:before{content:"\\f1a5"}.fa-freebsd:before{content:"\\f3a4"}.fa-vuejs:before{content:"\\f41f"}.fa-accusoft:before{content:"\\f369"}.fa-ioxhost:before{content:"\\f208"}.fa-fonticons-fi:before{content:"\\f3a2"}.fa-app-store:before{content:"\\f36f"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-itunes-note:before{content:"\\f3b5"}.fa-golang:before{content:"\\e40f"}.fa-kickstarter:before{content:"\\f3bb"}.fa-grav:before{content:"\\f2d6"}.fa-weibo:before{content:"\\f18a"}.fa-uncharted:before{content:"\\e084"}.fa-firstdraft:before{content:"\\f3a1"}.fa-square-youtube:before,.fa-youtube-square:before{content:"\\f431"}.fa-wikipedia-w:before{content:"\\f266"}.fa-rendact:before,.fa-wpressr:before{content:"\\f3e4"}.fa-angellist:before{content:"\\f209"}.fa-galactic-republic:before{content:"\\f50c"}.fa-nfc-directional:before{content:"\\e530"}.fa-skype:before{content:"\\f17e"}.fa-joget:before{content:"\\f3b7"}.fa-fedora:before{content:"\\f798"}.fa-stripe-s:before{content:"\\f42a"}.fa-meta:before{content:"\\e49b"}.fa-laravel:before{content:"\\f3bd"}.fa-hotjar:before{content:"\\f3b1"}.fa-bluetooth-b:before{content:"\\f294"}.fa-square-letterboxd:before{content:"\\e62e"}.fa-sticker-mule:before{content:"\\f3f7"}.fa-creative-commons-zero:before{content:"\\f4f3"}.fa-hips:before{content:"\\f452"}.fa-behance:before{content:"\\f1b4"}.fa-reddit:before{content:"\\f1a1"}.fa-discord:before{content:"\\f392"}.fa-chrome:before{content:"\\f268"}.fa-app-store-ios:before{content:"\\f370"}.fa-cc-discover:before{content:"\\f1f2"}.fa-wpbeginner:before{content:"\\f297"}.fa-confluence:before{content:"\\f78d"}.fa-shoelace:before{content:"\\e60c"}.fa-mdb:before{content:"\\f8ca"}.fa-dochub:before{content:"\\f394"}.fa-accessible-icon:before{content:"\\f368"}.fa-ebay:before{content:"\\f4f4"}.fa-amazon:before{content:"\\f270"}.fa-unsplash:before{content:"\\e07c"}.fa-yarn:before{content:"\\f7e3"}.fa-square-steam:before,.fa-steam-square:before{content:"\\f1b7"}.fa-500px:before{content:"\\f26e"}.fa-square-vimeo:before,.fa-vimeo-square:before{content:"\\f194"}.fa-asymmetrik:before{content:"\\f372"}.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-gratipay:before{content:"\\f184"}.fa-apple:before{content:"\\f179"}.fa-hive:before{content:"\\e07f"}.fa-gitkraken:before{content:"\\f3a6"}.fa-keybase:before{content:"\\f4f5"}.fa-apple-pay:before{content:"\\f415"}.fa-padlet:before{content:"\\e4a0"}.fa-amazon-pay:before{content:"\\f42c"}.fa-github-square:before,.fa-square-github:before{content:"\\f092"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-fedex:before{content:"\\f797"}.fa-phoenix-framework:before{content:"\\f3dc"}.fa-shopify:before{content:"\\e057"}.fa-neos:before{content:"\\f612"}.fa-square-threads:before{content:"\\e619"}.fa-hackerrank:before{content:"\\f5f7"}.fa-researchgate:before{content:"\\f4f8"}.fa-swift:before{content:"\\f8e1"}.fa-angular:before{content:"\\f420"}.fa-speakap:before{content:"\\f3f3"}.fa-angrycreative:before{content:"\\f36e"}.fa-y-combinator:before{content:"\\f23b"}.fa-empire:before{content:"\\f1d1"}.fa-envira:before{content:"\\f299"}.fa-google-scholar:before{content:"\\e63b"}.fa-gitlab-square:before,.fa-square-gitlab:before{content:"\\e5ae"}.fa-studiovinari:before{content:"\\f3f8"}.fa-pied-piper:before{content:"\\f2ae"}.fa-wordpress:before{content:"\\f19a"}.fa-product-hunt:before{content:"\\f288"}.fa-firefox:before{content:"\\f269"}.fa-linode:before{content:"\\f2b8"}.fa-goodreads:before{content:"\\f3a8"}.fa-odnoklassniki-square:before,.fa-square-odnoklassniki:before{content:"\\f264"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-sith:before{content:"\\f512"}.fa-themeisle:before{content:"\\f2b2"}.fa-page4:before{content:"\\f3d7"}.fa-hashnode:before{content:"\\e499"}.fa-react:before{content:"\\f41b"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-squarespace:before{content:"\\f5be"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-creative-commons-share:before{content:"\\f4f2"}.fa-bitcoin:before{content:"\\f379"}.fa-keycdn:before{content:"\\f3ba"}.fa-opera:before{content:"\\f26a"}.fa-itch-io:before{content:"\\f83a"}.fa-umbraco:before{content:"\\f8e8"}.fa-galactic-senate:before{content:"\\f50d"}.fa-ubuntu:before{content:"\\f7df"}.fa-draft2digital:before{content:"\\f396"}.fa-stripe:before{content:"\\f429"}.fa-houzz:before{content:"\\f27c"}.fa-gg:before{content:"\\f260"}.fa-dhl:before{content:"\\f790"}.fa-pinterest-square:before,.fa-square-pinterest:before{content:"\\f0d3"}.fa-xing:before{content:"\\f168"}.fa-blackberry:before{content:"\\f37b"}.fa-creative-commons-pd:before{content:"\\f4ec"}.fa-playstation:before{content:"\\f3df"}.fa-quinscape:before{content:"\\f459"}.fa-less:before{content:"\\f41d"}.fa-blogger-b:before{content:"\\f37d"}.fa-opencart:before{content:"\\f23d"}.fa-vine:before{content:"\\f1ca"}.fa-signal-messenger:before{content:"\\e663"}.fa-paypal:before{content:"\\f1ed"}.fa-gitlab:before{content:"\\f296"}.fa-typo3:before{content:"\\f42b"}.fa-reddit-alien:before{content:"\\f281"}.fa-yahoo:before{content:"\\f19e"}.fa-dailymotion:before{content:"\\e052"}.fa-affiliatetheme:before{content:"\\f36b"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-bootstrap:before{content:"\\f836"}.fa-odnoklassniki:before{content:"\\f263"}.fa-nfc-symbol:before{content:"\\e531"}.fa-mintbit:before{content:"\\e62f"}.fa-ethereum:before{content:"\\f42e"}.fa-speaker-deck:before{content:"\\f83c"}.fa-creative-commons-nc-eu:before{content:"\\f4e9"}.fa-patreon:before{content:"\\f3d9"}.fa-avianex:before{content:"\\f374"}.fa-ello:before{content:"\\f5f1"}.fa-gofore:before{content:"\\f3a7"}.fa-bimobject:before{content:"\\f378"}.fa-brave-reverse:before{content:"\\e63d"}.fa-facebook-f:before{content:"\\f39e"}.fa-google-plus-square:before,.fa-square-google-plus:before{content:"\\f0d4"}.fa-mandalorian:before{content:"\\f50f"}.fa-first-order-alt:before{content:"\\f50a"}.fa-osi:before{content:"\\f41a"}.fa-google-wallet:before{content:"\\f1ee"}.fa-d-and-d-beyond:before{content:"\\f6ca"}.fa-periscope:before{content:"\\f3da"}.fa-fulcrum:before{content:"\\f50b"}.fa-cloudscale:before{content:"\\f383"}.fa-forumbee:before{content:"\\f211"}.fa-mizuni:before{content:"\\f3cc"}.fa-schlix:before{content:"\\f3ea"}.fa-square-xing:before,.fa-xing-square:before{content:"\\f169"}.fa-bandcamp:before{content:"\\f2d5"}.fa-wpforms:before{content:"\\f298"}.fa-cloudversify:before{content:"\\f385"}.fa-usps:before{content:"\\f7e1"}.fa-megaport:before{content:"\\f5a3"}.fa-magento:before{content:"\\f3c4"}.fa-spotify:before{content:"\\f1bc"}.fa-optin-monster:before{content:"\\f23c"}.fa-fly:before{content:"\\f417"}.fa-aviato:before{content:"\\f421"}.fa-itunes:before{content:"\\f3b4"}.fa-cuttlefish:before{content:"\\f38c"}.fa-blogger:before{content:"\\f37c"}.fa-flickr:before{content:"\\f16e"}.fa-viber:before{content:"\\f409"}.fa-soundcloud:before{content:"\\f1be"}.fa-digg:before{content:"\\f1a6"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-letterboxd:before{content:"\\e62d"}.fa-symfony:before{content:"\\f83d"}.fa-maxcdn:before{content:"\\f136"}.fa-etsy:before{content:"\\f2d7"}.fa-facebook-messenger:before{content:"\\f39f"}.fa-audible:before{content:"\\f373"}.fa-think-peaks:before{content:"\\f731"}.fa-bilibili:before{content:"\\e3d9"}.fa-erlang:before{content:"\\f39d"}.fa-x-twitter:before{content:"\\e61b"}.fa-cotton-bureau:before{content:"\\f89e"}.fa-dashcube:before{content:"\\f210"}.fa-42-group:before,.fa-innosoft:before{content:"\\e080"}.fa-stack-exchange:before{content:"\\f18d"}.fa-elementor:before{content:"\\f430"}.fa-pied-piper-square:before,.fa-square-pied-piper:before{content:"\\e01e"}.fa-creative-commons-nd:before{content:"\\f4eb"}.fa-palfed:before{content:"\\f3d8"}.fa-superpowers:before{content:"\\f2dd"}.fa-resolving:before{content:"\\f3e7"}.fa-xbox:before{content:"\\f412"}.fa-searchengin:before{content:"\\f3eb"}.fa-tiktok:before{content:"\\e07b"}.fa-facebook-square:before,.fa-square-facebook:before{content:"\\f082"}.fa-renren:before{content:"\\f18b"}.fa-linux:before{content:"\\f17c"}.fa-glide:before{content:"\\f2a5"}.fa-linkedin:before{content:"\\f08c"}.fa-hubspot:before{content:"\\f3b2"}.fa-deploydog:before{content:"\\f38e"}.fa-twitch:before{content:"\\f1e8"}.fa-ravelry:before{content:"\\f2d9"}.fa-mixer:before{content:"\\e056"}.fa-lastfm-square:before,.fa-square-lastfm:before{content:"\\f203"}.fa-vimeo:before{content:"\\f40a"}.fa-mendeley:before{content:"\\f7b3"}.fa-uniregistry:before{content:"\\f404"}.fa-figma:before{content:"\\f799"}.fa-creative-commons-remix:before{content:"\\f4ee"}.fa-cc-amazon-pay:before{content:"\\f42d"}.fa-dropbox:before{content:"\\f16b"}.fa-instagram:before{content:"\\f16d"}.fa-cmplid:before{content:"\\e360"}.fa-upwork:before{content:"\\e641"}.fa-facebook:before{content:"\\f09a"}.fa-gripfire:before{content:"\\f3ac"}.fa-jedi-order:before{content:"\\f50e"}.fa-uikit:before{content:"\\f403"}.fa-fort-awesome-alt:before{content:"\\f3a3"}.fa-phabricator:before{content:"\\f3db"}.fa-ussunnah:before{content:"\\f407"}.fa-earlybirds:before{content:"\\f39a"}.fa-trade-federation:before{content:"\\f513"}.fa-autoprefixer:before{content:"\\f41c"}.fa-whatsapp:before{content:"\\f232"}.fa-slideshare:before{content:"\\f1e7"}.fa-google-play:before{content:"\\f3ab"}.fa-viadeo:before{content:"\\f2a9"}.fa-line:before{content:"\\f3c0"}.fa-google-drive:before{content:"\\f3aa"}.fa-servicestack:before{content:"\\f3ec"}.fa-simplybuilt:before{content:"\\f215"}.fa-bitbucket:before{content:"\\f171"}.fa-imdb:before{content:"\\f2d8"}.fa-deezer:before{content:"\\e077"}.fa-raspberry-pi:before{content:"\\f7bb"}.fa-jira:before{content:"\\f7b1"}.fa-docker:before{content:"\\f395"}.fa-screenpal:before{content:"\\e570"}.fa-bluetooth:before{content:"\\f293"}.fa-gitter:before{content:"\\f426"}.fa-d-and-d:before{content:"\\f38d"}.fa-microblog:before{content:"\\e01a"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-gg-circle:before{content:"\\f261"}.fa-pied-piper-hat:before{content:"\\f4e5"}.fa-kickstarter-k:before{content:"\\f3bc"}.fa-yandex:before{content:"\\f413"}.fa-readme:before{content:"\\f4d5"}.fa-html5:before{content:"\\f13b"}.fa-sellsy:before{content:"\\f213"}.fa-sass:before{content:"\\f41e"}.fa-wirsindhandwerk:before,.fa-wsh:before{content:"\\e2d0"}.fa-buromobelexperte:before{content:"\\f37f"}.fa-salesforce:before{content:"\\f83b"}.fa-octopus-deploy:before{content:"\\e082"}.fa-medapps:before{content:"\\f3c6"}.fa-ns8:before{content:"\\f3d5"}.fa-pinterest-p:before{content:"\\f231"}.fa-apper:before{content:"\\f371"}.fa-fort-awesome:before{content:"\\f286"}.fa-waze:before{content:"\\f83f"}.fa-cc-jcb:before{content:"\\f24b"}.fa-snapchat-ghost:before,.fa-snapchat:before{content:"\\f2ab"}.fa-fantasy-flight-games:before{content:"\\f6dc"}.fa-rust:before{content:"\\e07a"}.fa-wix:before{content:"\\f5cf"}.fa-behance-square:before,.fa-square-behance:before{content:"\\f1b5"}.fa-supple:before{content:"\\f3f9"}.fa-webflow:before{content:"\\e65c"}.fa-rebel:before{content:"\\f1d0"}.fa-css3:before{content:"\\f13c"}.fa-staylinked:before{content:"\\f3f5"}.fa-kaggle:before{content:"\\f5fa"}.fa-space-awesome:before{content:"\\e5ac"}.fa-deviantart:before{content:"\\f1bd"}.fa-cpanel:before{content:"\\f388"}.fa-goodreads-g:before{content:"\\f3a9"}.fa-git-square:before,.fa-square-git:before{content:"\\f1d2"}.fa-square-tumblr:before,.fa-tumblr-square:before{content:"\\f174"}.fa-trello:before{content:"\\f181"}.fa-creative-commons-nc-jp:before{content:"\\f4ea"}.fa-get-pocket:before{content:"\\f265"}.fa-perbyte:before{content:"\\e083"}.fa-grunt:before{content:"\\f3ad"}.fa-weebly:before{content:"\\f5cc"}.fa-connectdevelop:before{content:"\\f20e"}.fa-leanpub:before{content:"\\f212"}.fa-black-tie:before{content:"\\f27e"}.fa-themeco:before{content:"\\f5c6"}.fa-python:before{content:"\\f3e2"}.fa-android:before{content:"\\f17b"}.fa-bots:before{content:"\\e340"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-hornbill:before{content:"\\f592"}.fa-js:before{content:"\\f3b8"}.fa-ideal:before{content:"\\e013"}.fa-git:before{content:"\\f1d3"}.fa-dev:before{content:"\\f6cc"}.fa-sketch:before{content:"\\f7c6"}.fa-yandex-international:before{content:"\\f414"}.fa-cc-amex:before{content:"\\f1f3"}.fa-uber:before{content:"\\f402"}.fa-github:before{content:"\\f09b"}.fa-php:before{content:"\\f457"}.fa-alipay:before{content:"\\f642"}.fa-youtube:before{content:"\\f167"}.fa-skyatlas:before{content:"\\f216"}.fa-firefox-browser:before{content:"\\e007"}.fa-replyd:before{content:"\\f3e6"}.fa-suse:before{content:"\\f7d6"}.fa-jenkins:before{content:"\\f3b6"}.fa-twitter:before{content:"\\f099"}.fa-rockrms:before{content:"\\f3e9"}.fa-pinterest:before{content:"\\f0d2"}.fa-buffer:before{content:"\\f837"}.fa-npm:before{content:"\\f3d4"}.fa-yammer:before{content:"\\f840"}.fa-btc:before{content:"\\f15a"}.fa-dribbble:before{content:"\\f17d"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-internet-explorer:before{content:"\\f26b"}.fa-stubber:before{content:"\\e5c7"}.fa-telegram-plane:before,.fa-telegram:before{content:"\\f2c6"}.fa-old-republic:before{content:"\\f510"}.fa-odysee:before{content:"\\e5c6"}.fa-square-whatsapp:before,.fa-whatsapp-square:before{content:"\\f40c"}.fa-node-js:before{content:"\\f3d3"}.fa-edge-legacy:before{content:"\\e078"}.fa-slack-hash:before,.fa-slack:before{content:"\\f198"}.fa-medrt:before{content:"\\f3c8"}.fa-usb:before{content:"\\f287"}.fa-tumblr:before{content:"\\f173"}.fa-vaadin:before{content:"\\f408"}.fa-quora:before{content:"\\f2c4"}.fa-square-x-twitter:before{content:"\\e61a"}.fa-reacteurope:before{content:"\\f75d"}.fa-medium-m:before,.fa-medium:before{content:"\\f23a"}.fa-amilia:before{content:"\\f36d"}.fa-mixcloud:before{content:"\\f289"}.fa-flipboard:before{content:"\\f44d"}.fa-viacoin:before{content:"\\f237"}.fa-critical-role:before{content:"\\f6c9"}.fa-sitrox:before{content:"\\e44a"}.fa-discourse:before{content:"\\f393"}.fa-joomla:before{content:"\\f1aa"}.fa-mastodon:before{content:"\\f4f6"}.fa-airbnb:before{content:"\\f834"}.fa-wolf-pack-battalion:before{content:"\\f514"}.fa-buy-n-large:before{content:"\\f8a6"}.fa-gulp:before{content:"\\f3ae"}.fa-creative-commons-sampling-plus:before{content:"\\f4f1"}.fa-strava:before{content:"\\f428"}.fa-ember:before{content:"\\f423"}.fa-canadian-maple-leaf:before{content:"\\f785"}.fa-teamspeak:before{content:"\\f4f9"}.fa-pushed:before{content:"\\f3e1"}.fa-wordpress-simple:before{content:"\\f411"}.fa-nutritionix:before{content:"\\f3d6"}.fa-wodu:before{content:"\\e088"}.fa-google-pay:before{content:"\\e079"}.fa-intercom:before{content:"\\f7af"}.fa-zhihu:before{content:"\\f63f"}.fa-korvue:before{content:"\\f42f"}.fa-pix:before{content:"\\e43a"}.fa-steam-symbol:before{content:"\\f3f6"}:host,:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}.fa-regular,.far{font-weight:400}:host,:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}.fa-solid,.fas{font-weight:900}@font-face{font-family:"Font Awesome 5 Brands";font-display:block;font-weight:400;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:900;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:400;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype");unicode-range:u+f003,u+f006,u+f014,u+f016-f017,u+f01a-f01b,u+f01d,u+f022,u+f03e,u+f044,u+f046,u+f05c-f05d,u+f06e,u+f070,u+f087-f088,u+f08a,u+f094,u+f096-f097,u+f09d,u+f0a0,u+f0a2,u+f0a4-f0a7,u+f0c5,u+f0c7,u+f0e5-f0e6,u+f0eb,u+f0f6-f0f8,u+f10c,u+f114-f115,u+f118-f11a,u+f11c-f11d,u+f133,u+f147,u+f14e,u+f150-f152,u+f185-f186,u+f18e,u+f190-f192,u+f196,u+f1c1-f1c9,u+f1d9,u+f1db,u+f1e3,u+f1ea,u+f1f7,u+f1f9,u+f20a,u+f247-f248,u+f24a,u+f24d,u+f255-f25b,u+f25d,u+f271-f274,u+f278,u+f27b,u+f28c,u+f28e,u+f29c,u+f2b5,u+f2b7,u+f2ba,u+f2bc,u+f2be,u+f2c0-f2c1,u+f2c3,u+f2d0,u+f2d2,u+f2d4,u+f2dc}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-v4compatibility.woff2) format("woff2"),url(../webfonts/fa-v4compatibility.ttf) format("truetype");unicode-range:u+f041,u+f047,u+f065-f066,u+f07d-f07e,u+f080,u+f08b,u+f08e,u+f090,u+f09a,u+f0ac,u+f0ae,u+f0b2,u+f0d0,u+f0d6,u+f0e4,u+f0ec,u+f10a-f10b,u+f123,u+f13e,u+f148-f149,u+f14c,u+f156,u+f15e,u+f160-f161,u+f163,u+f175-f178,u+f195,u+f1f8,u+f219,u+f27a}</style><style data-request="v38-pay-gap">body>section:first-of-type:not(.closing),body>.page-header:first-child {padding-top:0;}</style><style data-request="v40-detail-spacing">body {padding-top:30px;}</style><style>@font-face{font-family:'Pretendard Variable';font-style:normal;font-weight:45 920;font-display:swap;src:url(/renewal-assets/9599f12fd42fc0bce1cd50b47a0c022e108d7aa64dd0d1bb0ed44f3282d900b4.woff2) format('woff2');}</style></head>
<body>
<!-- STRATEGY -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">이겨놓고 싸우는<br/><span>골드마스터만의 투자방법</span></h2>
<p class="section-desc">
                이겨놓고 싸우는 주식고수로 인정받고 있는<br/>
                골드마스터만의 특별한 주식 세계입니다.
            </p>
<div class="card-grid">
<div class="feature-card">
<div class="icon"><i class="fa-solid fa-clock"></i></div>
<h4>시간 없는 직장인을 위한 방식</h4>
<p>대부분 장중 시간이 없는 직장인이라 생각하고, 매수할 때도 하던 일을 하면서 편안하게, 익절할 때도 큰 수익이 난 후 여유 있게 정리하는 방식을 지향합니다.</p>
</div>
<div class="feature-card">
<div class="icon"><i class="fa-solid fa-chart-line"></i></div>
<h4>1~3주 주도주 스윙</h4>
<p>스윙종목은 직장인도 쉽게 따라할 수 있도록 1~3주 시장 주도주로 투자합니다. 짧고 명확한 흐름에 집중합니다.</p>
</div>
</div>
</div>
</section>
<!-- 추천종목 특징 -->
<section class="recommend-section">
<div class="container fade-in visible">
<h2 class="section-title">골드마스터반<br/><span>추천종목 특징</span></h2>
<div class="recommend-card">
<ul class="recommend-list">
<li>
<div class="label">스윙종목</div>
<div class="desc">직장인도 쉽게 따라할 수 있게 <strong>1~3주 시장 주도주</strong>로 투자하는 방식</div>
</li>
<li>
<div class="label">중기 핵심주력주</div>
<div class="desc">지속적인 시장 주도주로 <strong>대시세 가능 종목</strong>으로 압축</div>
</li>
</ul>
</div>
</div>
</section>
<!-- PROFILE -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">검증된 <span>경험과 이력</span></h2>
<div class="profile-grid">
<div class="book">
<div class="book-x"></div>
<div class="book-top">종목 발굴 이렇게 하라</div>
<div class="book-title">
<span class="sub">실전</span>
<span class="main">증권사관학교</span>
<span class="xfile">X파일</span>
</div>
<div class="book-footer">베스트셀러 · 직접 집필</div>
</div>
<div class="profile-info">
<h3>골드마스터</h3>
<span class="role">시장이 인정한 실전 고수</span>
<ul class="history">
<li><i class="fa-solid fa-check"></i> <span><strong>현) 제이앤비주식사관학교 (윌클럽) 대표</strong></span></li>
<li><i class="fa-solid fa-check"></i> <span><strong>현) M&amp;A 지도자 자격 보유</strong></span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 증권사관학교 전임강사</span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 한밤의 증시카페」 고정 출연</span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「생방송 개미천국」 고정 출연</span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 증시전망대」, 「굿모닝 투자의 아침」 등 다수 출연</span></li>
<li><i class="fa-solid fa-check"></i> <span>저서 「증권사관학교 X파일」 집필</span></li>
</ul>
</div>
</div>
</div>
</section>
<!-- CLOSING -->
<section class="closing">
<h2>시간은 멈추지 않습니다.</h2>
<p>골드마스터를 선택하는 순간<br/>당신은 흐름의 중심에 서게 됩니다.</p>
<button class="cta-btn" id="joinBtn" type="button">
            골드마스터반 가입하기
        </button>
</section>

<script>
(() => {
 let previous=0, pending=false;
 function resize(){if(pending)return;pending=true;setTimeout(()=>{pending=false;const height=Math.ceil(document.body.getBoundingClientRect().height);if(Math.abs(height-previous)>2){previous=height;window.parent.postMessage({type:'WILLCLUB_DETAIL_HEIGHT',height},'*');}});}
 new ResizeObserver(resize).observe(document.body);
 window.addEventListener('load',resize);document.fonts.ready.then(resize);resize();
 window.addEventListener('message',event=>{if(event.source===window.parent && event.data?.type==='WILLCLUB_REQUEST_HEIGHT'){previous=0;resize();}});
 const join=document.getElementById('joinBtn');if(join)join.addEventListener('click',()=>window.parent.postMessage({type:'WILLCLUB_CLICK_PAY'},'*'));
})();
<\/script></body>
</html>`,"9586ec78-0bdc-44e5-9f2d-a294556f904f":`<!DOCTYPE html>

<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>단타 ETF반 | 골드마스터</title>


<style>
        :root {
            --bg: #f4f1ed;
            --card: #ffffff;
            --accent: #912c2f;
            --text: #1c1b19;
            --text-sub: #5c574f;
            --text-light: #8a847a;
            --border: #ebe6df;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.03em;
        }
        body {
            background: var(--bg);
            color: var(--text);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(32px);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 880px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HERO ========== */
        .hero {
            text-align: center;
            padding: 96px 28px 88px;
        }
        .hero-badge {
            display: inline-block;
            background: var(--accent);
            color: #fff;
            font-size: 0.82rem;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 50px;
            letter-spacing: 0.1em;
            margin-bottom: 36px;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hero h1 {
            font-size: clamp(2.3rem, 5vw, 3.4rem);
            font-weight: 800;
            line-height: 1.35;
            margin-bottom: 28px;
            word-break: keep-all;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
        }
        .hero h1 span {
            color: var(--accent);
        }
        .hero-desc {
            font-size: 1.22rem;
            color: var(--text-sub);
            max-width: 560px;
            margin: 0 auto;
            line-height: 1.85;
            word-break: keep-all;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.24s;
        }
        .hero.loaded .hero-badge,
        .hero.loaded h1,
        .hero.loaded .hero-desc {
            opacity: 1;
            transform: translateY(0);
        }
        /* ========== SECTION ========== */
        section {
            padding: 88px 0;
        }
        .section-title {
            font-size: clamp(1.95rem, 4.2vw, 2.55rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 18px;
            word-break: keep-all;
            line-height: 1.4;
        }
        .section-title span {
            color: var(--accent);
        }
        .section-desc {
            text-align: center;
            font-size: 1.15rem;
            color: var(--text-sub);
            max-width: 580px;
            margin: 0 auto 48px;
            line-height: 1.8;
            word-break: keep-all;
        }
        /* ========== FEATURES ========== */
        .feature-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .feature-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 18px;
            padding: 36px 30px;
            transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .feature-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0, 99, 27, 0.08);
            border-color: #d5e5d8;
        }
        .feature-card .num {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--accent);
            letter-spacing: 0.08em;
            margin-bottom: 14px;
        }
        .feature-card h4 {
            font-size: 1.28rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--text);
        }
        .feature-card p {
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== ETF SECTION ========== */
        .etf-box {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 18px;
            padding: 40px 36px;
            max-width: 720px;
            margin: 0 auto;
        }
        .etf-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .etf-list li {
            display: flex;
            gap: 14px;
            align-items: flex-start;
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.6;
            word-break: keep-all;
        }
        .etf-list .code {
            flex-shrink: 0;
            background: #f0f5f1;
            color: var(--accent);
            font-weight: 700;
            font-size: 0.92rem;
            padding: 4px 12px;
            border-radius: 6px;
            min-width: 78px;
            text-align: center;
        }
        .etf-note {
            margin-top: 22px;
            padding-top: 18px;
            border-top: 1px solid var(--border);
            font-size: 1.02rem;
            color: var(--text-light);
            line-height: 1.7;
            word-break: keep-all;
        }
        /* ========== TELEGRAM ========== */
        .telegram-box {
            background: #1a1f26;
            border-radius: 20px;
            max-width: 620px;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 24px 50px rgba(0,0,0,0.12);
        }
        .tg-header {
            background: #232a33;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .tg-avatar {
            width: 42px;
            height: 42px;
            background: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 800;
            font-size: 1rem;
        }
        .tg-info h5 {
            font-size: 1.1rem;
            font-weight: 700;
            color: #fff;
        }
        .tg-info p {
            font-size: 0.84rem;
            color: #9aa3ad;
        }
        .tg-body {
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            background: #1a1f26;
        }
        .tg-msg {
            background: #252d38;
            padding: 14px 16px;
            border-radius: 14px 14px 14px 4px;
            max-width: 94%;
            opacity: 0;
            transform: translateY(28px) scale(0.96);
            transition: all 0.65s cubic-bezier(0.34, 1.4, 0.64, 1);
        }
        .tg-msg.active {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        .tg-sender {
            color: #a8d4b0;
            font-weight: 700;
            font-size: 0.98rem;
            display: block;
            margin-bottom: 5px;
        }
        .tg-text {
            font-size: 1.08rem;
            color: #f0f2f5;
            line-height: 1.55;
            word-break: keep-all;
        }
        .tg-time {
            font-size: 0.78rem;
            color: #8b95a0;
            margin-top: 8px;
            text-align: right;
        }
        /* ========== PROFILE ========== */
        .profile-wrap {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 48px 44px;
        }
        .profile-wrap h3 {
            font-size: 1.9rem;
            font-weight: 800;
            margin-bottom: 6px;
        }
        .profile-wrap .role {
            display: block;
            font-size: 1.12rem;
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 28px;
        }
        .history {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 13px;
        }
        .history li {
            display: flex;
            gap: 12px;
            font-size: 1.1rem;
            color: var(--text-sub);
            word-break: keep-all;
        }
        .history li i {
            color: var(--accent);
            margin-top: 5px;
            font-size: 0.9rem;
        }
        .history li strong {
            color: var(--text);
            font-weight: 600;
        }
        /* ========== CLOSING ========== */
        .closing {
            text-align: center;
            padding: 100px 28px 110px;
            border-top: 1px solid var(--border);
        }
        .closing h2 {
            font-size: clamp(1.95rem, 4.5vw, 2.7rem);
            font-weight: 750;
            line-height: 1.4;
            margin-bottom: 18px;
            word-break: keep-all;
        }
        .closing p {
            font-size: 1.18rem;
            color: var(--text-sub);
            word-break: keep-all;
            margin-bottom: 40px;
        }
        .cta-btn {
            display: inline-block;
            background: var(--accent);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            text-decoration: none;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(0, 99, 27, 0.22);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(0, 99, 27, 0.32);
            background: #007a22;
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 768px) {
            .hero { padding: 64px 20px 72px; }
            .hero h1 { font-size: 2.2rem; }
            .hero-desc { font-size: 1.12rem; }
            .section-title { font-size: 1.85rem; }
            .section-desc { font-size: 1.08rem; }
            .feature-grid { grid-template-columns: 1fr; }
            .feature-card h4 { font-size: 1.2rem; }
            .feature-card p { font-size: 1.05rem; }
            .etf-box { padding: 28px 22px; }
            .etf-list li { font-size: 1.02rem; flex-direction: column; gap: 6px; }
            .profile-wrap { padding: 36px 24px; }
            .profile-wrap h3 { font-size: 1.7rem; }
            .history li { font-size: 1.05rem; }
            .tg-text { font-size: 1.04rem; }
            section { padding: 72px 0; }
            .closing { padding: 80px 20px 90px; }
            .closing h2 { font-size: 1.9rem; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
        }
    </style>
<style>
body {font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,sans-serif; background:#f4f1ed; color:#35282e;}
p, li, .intro, .description, .subtitle, .desc, .card-desc, .body-text {font-size:calc(16px + 2pt) !important;}
h1 {font-size:clamp(30px,4vw,48px) !important; letter-spacing:-1px;}
h2 {font-size:calc(28px + 2pt) !important; color:#50343e;}
h3 {font-size:calc(21px + 2pt) !important;}
button {font-family:inherit;}
.cta-btn {background:#912c2f !important; color:#fff !important; border-radius:7px !important; font-size:calc(17px + 2pt) !important;}
.fade-in {opacity:1 !important; transform:none !important;}
:focus-visible {outline:2px solid #912c2f; outline-offset:4px;}
@media(max-width:650px) {p,li,.intro,.description,.subtitle,.desc,.card-desc,.body-text {font-size:calc(15px + 2pt) !important;} h2 {font-size:calc(24px + 2pt) !important;} h3 {font-size:calc(19px + 2pt) !important;}}
@media(prefers-reduced-motion:reduce) {* {animation:none !important; transition:none !important; scroll-behavior:auto !important;}}
</style><link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css" rel="stylesheet"/><style>/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:"Font Awesome 6 Free"}.fa-brands,.fab{font-family:"Font Awesome 6 Brands"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index,auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse,#fff)}

.fa-0:before{content:"\\30"}.fa-1:before{content:"\\31"}.fa-2:before{content:"\\32"}.fa-3:before{content:"\\33"}.fa-4:before{content:"\\34"}.fa-5:before{content:"\\35"}.fa-6:before{content:"\\36"}.fa-7:before{content:"\\37"}.fa-8:before{content:"\\38"}.fa-9:before{content:"\\39"}.fa-fill-drip:before{content:"\\f576"}.fa-arrows-to-circle:before{content:"\\e4bd"}.fa-chevron-circle-right:before,.fa-circle-chevron-right:before{content:"\\f138"}.fa-at:before{content:"\\40"}.fa-trash-alt:before,.fa-trash-can:before{content:"\\f2ed"}.fa-text-height:before{content:"\\f034"}.fa-user-times:before,.fa-user-xmark:before{content:"\\f235"}.fa-stethoscope:before{content:"\\f0f1"}.fa-comment-alt:before,.fa-message:before{content:"\\f27a"}.fa-info:before{content:"\\f129"}.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before{content:"\\f422"}.fa-explosion:before{content:"\\e4e9"}.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before{content:"\\f15c"}.fa-wave-square:before{content:"\\f83e"}.fa-ring:before{content:"\\f70b"}.fa-building-un:before{content:"\\e4d9"}.fa-dice-three:before{content:"\\f527"}.fa-calendar-alt:before,.fa-calendar-days:before{content:"\\f073"}.fa-anchor-circle-check:before{content:"\\e4aa"}.fa-building-circle-arrow-right:before{content:"\\e4d1"}.fa-volleyball-ball:before,.fa-volleyball:before{content:"\\f45f"}.fa-arrows-up-to-line:before{content:"\\e4c2"}.fa-sort-desc:before,.fa-sort-down:before{content:"\\f0dd"}.fa-circle-minus:before,.fa-minus-circle:before{content:"\\f056"}.fa-door-open:before{content:"\\f52b"}.fa-right-from-bracket:before,.fa-sign-out-alt:before{content:"\\f2f5"}.fa-atom:before{content:"\\f5d2"}.fa-soap:before{content:"\\e06e"}.fa-heart-music-camera-bolt:before,.fa-icons:before{content:"\\f86d"}.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before{content:"\\f539"}.fa-bridge-circle-check:before{content:"\\e4c9"}.fa-pump-medical:before{content:"\\e06a"}.fa-fingerprint:before{content:"\\f577"}.fa-hand-point-right:before{content:"\\f0a4"}.fa-magnifying-glass-location:before,.fa-search-location:before{content:"\\f689"}.fa-forward-step:before,.fa-step-forward:before{content:"\\f051"}.fa-face-smile-beam:before,.fa-smile-beam:before{content:"\\f5b8"}.fa-flag-checkered:before{content:"\\f11e"}.fa-football-ball:before,.fa-football:before{content:"\\f44e"}.fa-school-circle-exclamation:before{content:"\\e56c"}.fa-crop:before{content:"\\f125"}.fa-angle-double-down:before,.fa-angles-down:before{content:"\\f103"}.fa-users-rectangle:before{content:"\\e594"}.fa-people-roof:before{content:"\\e537"}.fa-people-line:before{content:"\\e534"}.fa-beer-mug-empty:before,.fa-beer:before{content:"\\f0fc"}.fa-diagram-predecessor:before{content:"\\e477"}.fa-arrow-up-long:before,.fa-long-arrow-up:before{content:"\\f176"}.fa-burn:before,.fa-fire-flame-simple:before{content:"\\f46a"}.fa-male:before,.fa-person:before{content:"\\f183"}.fa-laptop:before{content:"\\f109"}.fa-file-csv:before{content:"\\f6dd"}.fa-menorah:before{content:"\\f676"}.fa-truck-plane:before{content:"\\e58f"}.fa-record-vinyl:before{content:"\\f8d9"}.fa-face-grin-stars:before,.fa-grin-stars:before{content:"\\f587"}.fa-bong:before{content:"\\f55c"}.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before{content:"\\f67b"}.fa-arrow-down-up-across-line:before{content:"\\e4af"}.fa-spoon:before,.fa-utensil-spoon:before{content:"\\f2e5"}.fa-jar-wheat:before{content:"\\e517"}.fa-envelopes-bulk:before,.fa-mail-bulk:before{content:"\\f674"}.fa-file-circle-exclamation:before{content:"\\e4eb"}.fa-circle-h:before,.fa-hospital-symbol:before{content:"\\f47e"}.fa-pager:before{content:"\\f815"}.fa-address-book:before,.fa-contact-book:before{content:"\\f2b9"}.fa-strikethrough:before{content:"\\f0cc"}.fa-k:before{content:"\\4b"}.fa-landmark-flag:before{content:"\\e51c"}.fa-pencil-alt:before,.fa-pencil:before{content:"\\f303"}.fa-backward:before{content:"\\f04a"}.fa-caret-right:before{content:"\\f0da"}.fa-comments:before{content:"\\f086"}.fa-file-clipboard:before,.fa-paste:before{content:"\\f0ea"}.fa-code-pull-request:before{content:"\\e13c"}.fa-clipboard-list:before{content:"\\f46d"}.fa-truck-loading:before,.fa-truck-ramp-box:before{content:"\\f4de"}.fa-user-check:before{content:"\\f4fc"}.fa-vial-virus:before{content:"\\e597"}.fa-sheet-plastic:before{content:"\\e571"}.fa-blog:before{content:"\\f781"}.fa-user-ninja:before{content:"\\f504"}.fa-person-arrow-up-from-line:before{content:"\\e539"}.fa-scroll-torah:before,.fa-torah:before{content:"\\f6a0"}.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before{content:"\\f458"}.fa-toggle-off:before{content:"\\f204"}.fa-archive:before,.fa-box-archive:before{content:"\\f187"}.fa-person-drowning:before{content:"\\e545"}.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before{content:"\\f886"}.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before{content:"\\f58a"}.fa-spray-can:before{content:"\\f5bd"}.fa-truck-monster:before{content:"\\f63b"}.fa-w:before{content:"\\57"}.fa-earth-africa:before,.fa-globe-africa:before{content:"\\f57c"}.fa-rainbow:before{content:"\\f75b"}.fa-circle-notch:before{content:"\\f1ce"}.fa-tablet-alt:before,.fa-tablet-screen-button:before{content:"\\f3fa"}.fa-paw:before{content:"\\f1b0"}.fa-cloud:before{content:"\\f0c2"}.fa-trowel-bricks:before{content:"\\e58a"}.fa-face-flushed:before,.fa-flushed:before{content:"\\f579"}.fa-hospital-user:before{content:"\\f80d"}.fa-tent-arrow-left-right:before{content:"\\e57f"}.fa-gavel:before,.fa-legal:before{content:"\\f0e3"}.fa-binoculars:before{content:"\\f1e5"}.fa-microphone-slash:before{content:"\\f131"}.fa-box-tissue:before{content:"\\e05b"}.fa-motorcycle:before{content:"\\f21c"}.fa-bell-concierge:before,.fa-concierge-bell:before{content:"\\f562"}.fa-pen-ruler:before,.fa-pencil-ruler:before{content:"\\f5ae"}.fa-people-arrows-left-right:before,.fa-people-arrows:before{content:"\\e068"}.fa-mars-and-venus-burst:before{content:"\\e523"}.fa-caret-square-right:before,.fa-square-caret-right:before{content:"\\f152"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-sun-plant-wilt:before{content:"\\e57a"}.fa-toilets-portable:before{content:"\\e584"}.fa-hockey-puck:before{content:"\\f453"}.fa-table:before{content:"\\f0ce"}.fa-magnifying-glass-arrow-right:before{content:"\\e521"}.fa-digital-tachograph:before,.fa-tachograph-digital:before{content:"\\f566"}.fa-users-slash:before{content:"\\e073"}.fa-clover:before{content:"\\e139"}.fa-mail-reply:before,.fa-reply:before{content:"\\f3e5"}.fa-star-and-crescent:before{content:"\\f699"}.fa-house-fire:before{content:"\\e50c"}.fa-minus-square:before,.fa-square-minus:before{content:"\\f146"}.fa-helicopter:before{content:"\\f533"}.fa-compass:before{content:"\\f14e"}.fa-caret-square-down:before,.fa-square-caret-down:before{content:"\\f150"}.fa-file-circle-question:before{content:"\\e4ef"}.fa-laptop-code:before{content:"\\f5fc"}.fa-swatchbook:before{content:"\\f5c3"}.fa-prescription-bottle:before{content:"\\f485"}.fa-bars:before,.fa-navicon:before{content:"\\f0c9"}.fa-people-group:before{content:"\\e533"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-heart-broken:before,.fa-heart-crack:before{content:"\\f7a9"}.fa-external-link-square-alt:before,.fa-square-up-right:before{content:"\\f360"}.fa-face-kiss-beam:before,.fa-kiss-beam:before{content:"\\f597"}.fa-film:before{content:"\\f008"}.fa-ruler-horizontal:before{content:"\\f547"}.fa-people-robbery:before{content:"\\e536"}.fa-lightbulb:before{content:"\\f0eb"}.fa-caret-left:before{content:"\\f0d9"}.fa-circle-exclamation:before,.fa-exclamation-circle:before{content:"\\f06a"}.fa-school-circle-xmark:before{content:"\\e56d"}.fa-arrow-right-from-bracket:before,.fa-sign-out:before{content:"\\f08b"}.fa-chevron-circle-down:before,.fa-circle-chevron-down:before{content:"\\f13a"}.fa-unlock-alt:before,.fa-unlock-keyhole:before{content:"\\f13e"}.fa-cloud-showers-heavy:before{content:"\\f740"}.fa-headphones-alt:before,.fa-headphones-simple:before{content:"\\f58f"}.fa-sitemap:before{content:"\\f0e8"}.fa-circle-dollar-to-slot:before,.fa-donate:before{content:"\\f4b9"}.fa-memory:before{content:"\\f538"}.fa-road-spikes:before{content:"\\e568"}.fa-fire-burner:before{content:"\\e4f1"}.fa-flag:before{content:"\\f024"}.fa-hanukiah:before{content:"\\f6e6"}.fa-feather:before{content:"\\f52d"}.fa-volume-down:before,.fa-volume-low:before{content:"\\f027"}.fa-comment-slash:before{content:"\\f4b3"}.fa-cloud-sun-rain:before{content:"\\f743"}.fa-compress:before{content:"\\f066"}.fa-wheat-alt:before,.fa-wheat-awn:before{content:"\\e2cd"}.fa-ankh:before{content:"\\f644"}.fa-hands-holding-child:before{content:"\\e4fa"}.fa-asterisk:before{content:"\\2a"}.fa-check-square:before,.fa-square-check:before{content:"\\f14a"}.fa-peseta-sign:before{content:"\\e221"}.fa-header:before,.fa-heading:before{content:"\\f1dc"}.fa-ghost:before{content:"\\f6e2"}.fa-list-squares:before,.fa-list:before{content:"\\f03a"}.fa-phone-square-alt:before,.fa-square-phone-flip:before{content:"\\f87b"}.fa-cart-plus:before{content:"\\f217"}.fa-gamepad:before{content:"\\f11b"}.fa-circle-dot:before,.fa-dot-circle:before{content:"\\f192"}.fa-dizzy:before,.fa-face-dizzy:before{content:"\\f567"}.fa-egg:before{content:"\\f7fb"}.fa-house-medical-circle-xmark:before{content:"\\e513"}.fa-campground:before{content:"\\f6bb"}.fa-folder-plus:before{content:"\\f65e"}.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before{content:"\\f1e3"}.fa-paint-brush:before,.fa-paintbrush:before{content:"\\f1fc"}.fa-lock:before{content:"\\f023"}.fa-gas-pump:before{content:"\\f52f"}.fa-hot-tub-person:before,.fa-hot-tub:before{content:"\\f593"}.fa-map-location:before,.fa-map-marked:before{content:"\\f59f"}.fa-house-flood-water:before{content:"\\e50e"}.fa-tree:before{content:"\\f1bb"}.fa-bridge-lock:before{content:"\\e4cc"}.fa-sack-dollar:before{content:"\\f81d"}.fa-edit:before,.fa-pen-to-square:before{content:"\\f044"}.fa-car-side:before{content:"\\f5e4"}.fa-share-alt:before,.fa-share-nodes:before{content:"\\f1e0"}.fa-heart-circle-minus:before{content:"\\e4ff"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-microscope:before{content:"\\f610"}.fa-sink:before{content:"\\e06d"}.fa-bag-shopping:before,.fa-shopping-bag:before{content:"\\f290"}.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before{content:"\\f881"}.fa-mitten:before{content:"\\f7b5"}.fa-person-rays:before{content:"\\e54d"}.fa-users:before{content:"\\f0c0"}.fa-eye-slash:before{content:"\\f070"}.fa-flask-vial:before{content:"\\e4f3"}.fa-hand-paper:before,.fa-hand:before{content:"\\f256"}.fa-om:before{content:"\\f679"}.fa-worm:before{content:"\\e599"}.fa-house-circle-xmark:before{content:"\\e50b"}.fa-plug:before{content:"\\f1e6"}.fa-chevron-up:before{content:"\\f077"}.fa-hand-spock:before{content:"\\f259"}.fa-stopwatch:before{content:"\\f2f2"}.fa-face-kiss:before,.fa-kiss:before{content:"\\f596"}.fa-bridge-circle-xmark:before{content:"\\e4cb"}.fa-face-grin-tongue:before,.fa-grin-tongue:before{content:"\\f589"}.fa-chess-bishop:before{content:"\\f43a"}.fa-face-grin-wink:before,.fa-grin-wink:before{content:"\\f58c"}.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before{content:"\\f2a4"}.fa-road-circle-check:before{content:"\\e564"}.fa-dice-five:before{content:"\\f523"}.fa-rss-square:before,.fa-square-rss:before{content:"\\f143"}.fa-land-mine-on:before{content:"\\e51b"}.fa-i-cursor:before{content:"\\f246"}.fa-stamp:before{content:"\\f5bf"}.fa-stairs:before{content:"\\e289"}.fa-i:before{content:"\\49"}.fa-hryvnia-sign:before,.fa-hryvnia:before{content:"\\f6f2"}.fa-pills:before{content:"\\f484"}.fa-face-grin-wide:before,.fa-grin-alt:before{content:"\\f581"}.fa-tooth:before{content:"\\f5c9"}.fa-v:before{content:"\\56"}.fa-bangladeshi-taka-sign:before{content:"\\e2e6"}.fa-bicycle:before{content:"\\f206"}.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before{content:"\\e579"}.fa-head-side-cough-slash:before{content:"\\e062"}.fa-ambulance:before,.fa-truck-medical:before{content:"\\f0f9"}.fa-wheat-awn-circle-exclamation:before{content:"\\e598"}.fa-snowman:before{content:"\\f7d0"}.fa-mortar-pestle:before{content:"\\f5a7"}.fa-road-barrier:before{content:"\\e562"}.fa-school:before{content:"\\f549"}.fa-igloo:before{content:"\\f7ae"}.fa-joint:before{content:"\\f595"}.fa-angle-right:before{content:"\\f105"}.fa-horse:before{content:"\\f6f0"}.fa-q:before{content:"\\51"}.fa-g:before{content:"\\47"}.fa-notes-medical:before{content:"\\f481"}.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-dong-sign:before{content:"\\e169"}.fa-capsules:before{content:"\\f46b"}.fa-poo-bolt:before,.fa-poo-storm:before{content:"\\f75a"}.fa-face-frown-open:before,.fa-frown-open:before{content:"\\f57a"}.fa-hand-point-up:before{content:"\\f0a6"}.fa-money-bill:before{content:"\\f0d6"}.fa-bookmark:before{content:"\\f02e"}.fa-align-justify:before{content:"\\f039"}.fa-umbrella-beach:before{content:"\\f5ca"}.fa-helmet-un:before{content:"\\e503"}.fa-bullseye:before{content:"\\f140"}.fa-bacon:before{content:"\\f7e5"}.fa-hand-point-down:before{content:"\\f0a7"}.fa-arrow-up-from-bracket:before{content:"\\e09a"}.fa-folder-blank:before,.fa-folder:before{content:"\\f07b"}.fa-file-medical-alt:before,.fa-file-waveform:before{content:"\\f478"}.fa-radiation:before{content:"\\f7b9"}.fa-chart-simple:before{content:"\\e473"}.fa-mars-stroke:before{content:"\\f229"}.fa-vial:before{content:"\\f492"}.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before{content:"\\f624"}.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before{content:"\\e2ca"}.fa-e:before{content:"\\45"}.fa-pen-alt:before,.fa-pen-clip:before{content:"\\f305"}.fa-bridge-circle-exclamation:before{content:"\\e4ca"}.fa-user:before{content:"\\f007"}.fa-school-circle-check:before{content:"\\e56b"}.fa-dumpster:before{content:"\\f793"}.fa-shuttle-van:before,.fa-van-shuttle:before{content:"\\f5b6"}.fa-building-user:before{content:"\\e4da"}.fa-caret-square-left:before,.fa-square-caret-left:before{content:"\\f191"}.fa-highlighter:before{content:"\\f591"}.fa-key:before{content:"\\f084"}.fa-bullhorn:before{content:"\\f0a1"}.fa-globe:before{content:"\\f0ac"}.fa-synagogue:before{content:"\\f69b"}.fa-person-half-dress:before{content:"\\e548"}.fa-road-bridge:before{content:"\\e563"}.fa-location-arrow:before{content:"\\f124"}.fa-c:before{content:"\\43"}.fa-tablet-button:before{content:"\\f10a"}.fa-building-lock:before{content:"\\e4d6"}.fa-pizza-slice:before{content:"\\f818"}.fa-money-bill-wave:before{content:"\\f53a"}.fa-area-chart:before,.fa-chart-area:before{content:"\\f1fe"}.fa-house-flag:before{content:"\\e50d"}.fa-person-circle-minus:before{content:"\\e540"}.fa-ban:before,.fa-cancel:before{content:"\\f05e"}.fa-camera-rotate:before{content:"\\e0d8"}.fa-air-freshener:before,.fa-spray-can-sparkles:before{content:"\\f5d0"}.fa-star:before{content:"\\f005"}.fa-repeat:before{content:"\\f363"}.fa-cross:before{content:"\\f654"}.fa-box:before{content:"\\f466"}.fa-venus-mars:before{content:"\\f228"}.fa-arrow-pointer:before,.fa-mouse-pointer:before{content:"\\f245"}.fa-expand-arrows-alt:before,.fa-maximize:before{content:"\\f31e"}.fa-charging-station:before{content:"\\f5e7"}.fa-shapes:before,.fa-triangle-circle-square:before{content:"\\f61f"}.fa-random:before,.fa-shuffle:before{content:"\\f074"}.fa-person-running:before,.fa-running:before{content:"\\f70c"}.fa-mobile-retro:before{content:"\\e527"}.fa-grip-lines-vertical:before{content:"\\f7a5"}.fa-spider:before{content:"\\f717"}.fa-hands-bound:before{content:"\\e4f9"}.fa-file-invoice-dollar:before{content:"\\f571"}.fa-plane-circle-exclamation:before{content:"\\e556"}.fa-x-ray:before{content:"\\f497"}.fa-spell-check:before{content:"\\f891"}.fa-slash:before{content:"\\f715"}.fa-computer-mouse:before,.fa-mouse:before{content:"\\f8cc"}.fa-arrow-right-to-bracket:before,.fa-sign-in:before{content:"\\f090"}.fa-shop-slash:before,.fa-store-alt-slash:before{content:"\\e070"}.fa-server:before{content:"\\f233"}.fa-virus-covid-slash:before{content:"\\e4a9"}.fa-shop-lock:before{content:"\\e4a5"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-blender-phone:before{content:"\\f6b6"}.fa-building-wheat:before{content:"\\e4db"}.fa-person-breastfeeding:before{content:"\\e53a"}.fa-right-to-bracket:before,.fa-sign-in-alt:before{content:"\\f2f6"}.fa-venus:before{content:"\\f221"}.fa-passport:before{content:"\\f5ab"}.fa-heart-pulse:before,.fa-heartbeat:before{content:"\\f21e"}.fa-people-carry-box:before,.fa-people-carry:before{content:"\\f4ce"}.fa-temperature-high:before{content:"\\f769"}.fa-microchip:before{content:"\\f2db"}.fa-crown:before{content:"\\f521"}.fa-weight-hanging:before{content:"\\f5cd"}.fa-xmarks-lines:before{content:"\\e59a"}.fa-file-prescription:before{content:"\\f572"}.fa-weight-scale:before,.fa-weight:before{content:"\\f496"}.fa-user-friends:before,.fa-user-group:before{content:"\\f500"}.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before{content:"\\f15e"}.fa-chess-knight:before{content:"\\f441"}.fa-face-laugh-squint:before,.fa-laugh-squint:before{content:"\\f59b"}.fa-wheelchair:before{content:"\\f193"}.fa-arrow-circle-up:before,.fa-circle-arrow-up:before{content:"\\f0aa"}.fa-toggle-on:before{content:"\\f205"}.fa-person-walking:before,.fa-walking:before{content:"\\f554"}.fa-l:before{content:"\\4c"}.fa-fire:before{content:"\\f06d"}.fa-bed-pulse:before,.fa-procedures:before{content:"\\f487"}.fa-shuttle-space:before,.fa-space-shuttle:before{content:"\\f197"}.fa-face-laugh:before,.fa-laugh:before{content:"\\f599"}.fa-folder-open:before{content:"\\f07c"}.fa-heart-circle-plus:before{content:"\\e500"}.fa-code-fork:before{content:"\\e13b"}.fa-city:before{content:"\\f64f"}.fa-microphone-alt:before,.fa-microphone-lines:before{content:"\\f3c9"}.fa-pepper-hot:before{content:"\\f816"}.fa-unlock:before{content:"\\f09c"}.fa-colon-sign:before{content:"\\e140"}.fa-headset:before{content:"\\f590"}.fa-store-slash:before{content:"\\e071"}.fa-road-circle-xmark:before{content:"\\e566"}.fa-user-minus:before{content:"\\f503"}.fa-mars-stroke-up:before,.fa-mars-stroke-v:before{content:"\\f22a"}.fa-champagne-glasses:before,.fa-glass-cheers:before{content:"\\f79f"}.fa-clipboard:before{content:"\\f328"}.fa-house-circle-exclamation:before{content:"\\e50a"}.fa-file-arrow-up:before,.fa-file-upload:before{content:"\\f574"}.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before{content:"\\f1eb"}.fa-bath:before,.fa-bathtub:before{content:"\\f2cd"}.fa-underline:before{content:"\\f0cd"}.fa-user-edit:before,.fa-user-pen:before{content:"\\f4ff"}.fa-signature:before{content:"\\f5b7"}.fa-stroopwafel:before{content:"\\f551"}.fa-bold:before{content:"\\f032"}.fa-anchor-lock:before{content:"\\e4ad"}.fa-building-ngo:before{content:"\\e4d7"}.fa-manat-sign:before{content:"\\e1d5"}.fa-not-equal:before{content:"\\f53e"}.fa-border-style:before,.fa-border-top-left:before{content:"\\f853"}.fa-map-location-dot:before,.fa-map-marked-alt:before{content:"\\f5a0"}.fa-jedi:before{content:"\\f669"}.fa-poll:before,.fa-square-poll-vertical:before{content:"\\f681"}.fa-mug-hot:before{content:"\\f7b6"}.fa-battery-car:before,.fa-car-battery:before{content:"\\f5df"}.fa-gift:before{content:"\\f06b"}.fa-dice-two:before{content:"\\f528"}.fa-chess-queen:before{content:"\\f445"}.fa-glasses:before{content:"\\f530"}.fa-chess-board:before{content:"\\f43c"}.fa-building-circle-check:before{content:"\\e4d2"}.fa-person-chalkboard:before{content:"\\e53d"}.fa-mars-stroke-h:before,.fa-mars-stroke-right:before{content:"\\f22b"}.fa-hand-back-fist:before,.fa-hand-rock:before{content:"\\f255"}.fa-caret-square-up:before,.fa-square-caret-up:before{content:"\\f151"}.fa-cloud-showers-water:before{content:"\\e4e4"}.fa-bar-chart:before,.fa-chart-bar:before{content:"\\f080"}.fa-hands-bubbles:before,.fa-hands-wash:before{content:"\\e05e"}.fa-less-than-equal:before{content:"\\f537"}.fa-train:before{content:"\\f238"}.fa-eye-low-vision:before,.fa-low-vision:before{content:"\\f2a8"}.fa-crow:before{content:"\\f520"}.fa-sailboat:before{content:"\\e445"}.fa-window-restore:before{content:"\\f2d2"}.fa-plus-square:before,.fa-square-plus:before{content:"\\f0fe"}.fa-torii-gate:before{content:"\\f6a1"}.fa-frog:before{content:"\\f52e"}.fa-bucket:before{content:"\\e4cf"}.fa-image:before{content:"\\f03e"}.fa-microphone:before{content:"\\f130"}.fa-cow:before{content:"\\f6c8"}.fa-caret-up:before{content:"\\f0d8"}.fa-screwdriver:before{content:"\\f54a"}.fa-folder-closed:before{content:"\\e185"}.fa-house-tsunami:before{content:"\\e515"}.fa-square-nfi:before{content:"\\e576"}.fa-arrow-up-from-ground-water:before{content:"\\e4b5"}.fa-glass-martini-alt:before,.fa-martini-glass:before{content:"\\f57b"}.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before{content:"\\f2ea"}.fa-columns:before,.fa-table-columns:before{content:"\\f0db"}.fa-lemon:before{content:"\\f094"}.fa-head-side-mask:before{content:"\\e063"}.fa-handshake:before{content:"\\f2b5"}.fa-gem:before{content:"\\f3a5"}.fa-dolly-box:before,.fa-dolly:before{content:"\\f472"}.fa-smoking:before{content:"\\f48d"}.fa-compress-arrows-alt:before,.fa-minimize:before{content:"\\f78c"}.fa-monument:before{content:"\\f5a6"}.fa-snowplow:before{content:"\\f7d2"}.fa-angle-double-right:before,.fa-angles-right:before{content:"\\f101"}.fa-cannabis:before{content:"\\f55f"}.fa-circle-play:before,.fa-play-circle:before{content:"\\f144"}.fa-tablets:before{content:"\\f490"}.fa-ethernet:before{content:"\\f796"}.fa-eur:before,.fa-euro-sign:before,.fa-euro:before{content:"\\f153"}.fa-chair:before{content:"\\f6c0"}.fa-check-circle:before,.fa-circle-check:before{content:"\\f058"}.fa-circle-stop:before,.fa-stop-circle:before{content:"\\f28d"}.fa-compass-drafting:before,.fa-drafting-compass:before{content:"\\f568"}.fa-plate-wheat:before{content:"\\e55a"}.fa-icicles:before{content:"\\f7ad"}.fa-person-shelter:before{content:"\\e54f"}.fa-neuter:before{content:"\\f22c"}.fa-id-badge:before{content:"\\f2c1"}.fa-marker:before{content:"\\f5a1"}.fa-face-laugh-beam:before,.fa-laugh-beam:before{content:"\\f59a"}.fa-helicopter-symbol:before{content:"\\e502"}.fa-universal-access:before{content:"\\f29a"}.fa-chevron-circle-up:before,.fa-circle-chevron-up:before{content:"\\f139"}.fa-lari-sign:before{content:"\\e1c8"}.fa-volcano:before{content:"\\f770"}.fa-person-walking-dashed-line-arrow-right:before{content:"\\e553"}.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before{content:"\\f154"}.fa-viruses:before{content:"\\e076"}.fa-square-person-confined:before{content:"\\e577"}.fa-user-tie:before{content:"\\f508"}.fa-arrow-down-long:before,.fa-long-arrow-down:before{content:"\\f175"}.fa-tent-arrow-down-to-line:before{content:"\\e57e"}.fa-certificate:before{content:"\\f0a3"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-suitcase:before{content:"\\f0f2"}.fa-person-skating:before,.fa-skating:before{content:"\\f7c5"}.fa-filter-circle-dollar:before,.fa-funnel-dollar:before{content:"\\f662"}.fa-camera-retro:before{content:"\\f083"}.fa-arrow-circle-down:before,.fa-circle-arrow-down:before{content:"\\f0ab"}.fa-arrow-right-to-file:before,.fa-file-import:before{content:"\\f56f"}.fa-external-link-square:before,.fa-square-arrow-up-right:before{content:"\\f14c"}.fa-box-open:before{content:"\\f49e"}.fa-scroll:before{content:"\\f70e"}.fa-spa:before{content:"\\f5bb"}.fa-location-pin-lock:before{content:"\\e51f"}.fa-pause:before{content:"\\f04c"}.fa-hill-avalanche:before{content:"\\e507"}.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-bomb:before{content:"\\f1e2"}.fa-registered:before{content:"\\f25d"}.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before{content:"\\f2bb"}.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before{content:"\\f516"}.fa-subscript:before{content:"\\f12c"}.fa-diamond-turn-right:before,.fa-directions:before{content:"\\f5eb"}.fa-burst:before{content:"\\e4dc"}.fa-house-laptop:before,.fa-laptop-house:before{content:"\\e066"}.fa-face-tired:before,.fa-tired:before{content:"\\f5c8"}.fa-money-bills:before{content:"\\e1f3"}.fa-smog:before{content:"\\f75f"}.fa-crutch:before{content:"\\f7f7"}.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before{content:"\\f0ee"}.fa-palette:before{content:"\\f53f"}.fa-arrows-turn-right:before{content:"\\e4c0"}.fa-vest:before{content:"\\e085"}.fa-ferry:before{content:"\\e4ea"}.fa-arrows-down-to-people:before{content:"\\e4b9"}.fa-seedling:before,.fa-sprout:before{content:"\\f4d8"}.fa-arrows-alt-h:before,.fa-left-right:before{content:"\\f337"}.fa-boxes-packing:before{content:"\\e4c7"}.fa-arrow-circle-left:before,.fa-circle-arrow-left:before{content:"\\f0a8"}.fa-group-arrows-rotate:before{content:"\\e4f6"}.fa-bowl-food:before{content:"\\e4c6"}.fa-candy-cane:before{content:"\\f786"}.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before{content:"\\f160"}.fa-cloud-bolt:before,.fa-thunderstorm:before{content:"\\f76c"}.fa-remove-format:before,.fa-text-slash:before{content:"\\f87d"}.fa-face-smile-wink:before,.fa-smile-wink:before{content:"\\f4da"}.fa-file-word:before{content:"\\f1c2"}.fa-file-powerpoint:before{content:"\\f1c4"}.fa-arrows-h:before,.fa-arrows-left-right:before{content:"\\f07e"}.fa-house-lock:before{content:"\\e510"}.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before{content:"\\f0ed"}.fa-children:before{content:"\\e4e1"}.fa-blackboard:before,.fa-chalkboard:before{content:"\\f51b"}.fa-user-alt-slash:before,.fa-user-large-slash:before{content:"\\f4fa"}.fa-envelope-open:before{content:"\\f2b6"}.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before{content:"\\e05f"}.fa-mattress-pillow:before{content:"\\e525"}.fa-guarani-sign:before{content:"\\e19a"}.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before{content:"\\f021"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-cruzeiro-sign:before{content:"\\e152"}.fa-greater-than-equal:before{content:"\\f532"}.fa-shield-alt:before,.fa-shield-halved:before{content:"\\f3ed"}.fa-atlas:before,.fa-book-atlas:before{content:"\\f558"}.fa-virus:before{content:"\\e074"}.fa-envelope-circle-check:before{content:"\\e4e8"}.fa-layer-group:before{content:"\\f5fd"}.fa-arrows-to-dot:before{content:"\\e4be"}.fa-archway:before{content:"\\f557"}.fa-heart-circle-check:before{content:"\\e4fd"}.fa-house-chimney-crack:before,.fa-house-damage:before{content:"\\f6f1"}.fa-file-archive:before,.fa-file-zipper:before{content:"\\f1c6"}.fa-square:before{content:"\\f0c8"}.fa-glass-martini:before,.fa-martini-glass-empty:before{content:"\\f000"}.fa-couch:before{content:"\\f4b8"}.fa-cedi-sign:before{content:"\\e0df"}.fa-italic:before{content:"\\f033"}.fa-church:before{content:"\\f51d"}.fa-comments-dollar:before{content:"\\f653"}.fa-democrat:before{content:"\\f747"}.fa-z:before{content:"\\5a"}.fa-person-skiing:before,.fa-skiing:before{content:"\\f7c9"}.fa-road-lock:before{content:"\\e567"}.fa-a:before{content:"\\41"}.fa-temperature-arrow-down:before,.fa-temperature-down:before{content:"\\e03f"}.fa-feather-alt:before,.fa-feather-pointed:before{content:"\\f56b"}.fa-p:before{content:"\\50"}.fa-snowflake:before{content:"\\f2dc"}.fa-newspaper:before{content:"\\f1ea"}.fa-ad:before,.fa-rectangle-ad:before{content:"\\f641"}.fa-arrow-circle-right:before,.fa-circle-arrow-right:before{content:"\\f0a9"}.fa-filter-circle-xmark:before{content:"\\e17b"}.fa-locust:before{content:"\\e520"}.fa-sort:before,.fa-unsorted:before{content:"\\f0dc"}.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before{content:"\\f0cb"}.fa-person-dress-burst:before{content:"\\e544"}.fa-money-check-alt:before,.fa-money-check-dollar:before{content:"\\f53d"}.fa-vector-square:before{content:"\\f5cb"}.fa-bread-slice:before{content:"\\f7ec"}.fa-language:before{content:"\\f1ab"}.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before{content:"\\f598"}.fa-filter:before{content:"\\f0b0"}.fa-question:before{content:"\\3f"}.fa-file-signature:before{content:"\\f573"}.fa-arrows-alt:before,.fa-up-down-left-right:before{content:"\\f0b2"}.fa-house-chimney-user:before{content:"\\e065"}.fa-hand-holding-heart:before{content:"\\f4be"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-money-check:before{content:"\\f53c"}.fa-star-half-alt:before,.fa-star-half-stroke:before{content:"\\f5c0"}.fa-code:before{content:"\\f121"}.fa-glass-whiskey:before,.fa-whiskey-glass:before{content:"\\f7a0"}.fa-building-circle-exclamation:before{content:"\\e4d3"}.fa-magnifying-glass-chart:before{content:"\\e522"}.fa-arrow-up-right-from-square:before,.fa-external-link:before{content:"\\f08e"}.fa-cubes-stacked:before{content:"\\e4e6"}.fa-krw:before,.fa-won-sign:before,.fa-won:before{content:"\\f159"}.fa-virus-covid:before{content:"\\e4a8"}.fa-austral-sign:before{content:"\\e0a9"}.fa-f:before{content:"\\46"}.fa-leaf:before{content:"\\f06c"}.fa-road:before{content:"\\f018"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-person-circle-plus:before{content:"\\e541"}.fa-chart-pie:before,.fa-pie-chart:before{content:"\\f200"}.fa-bolt-lightning:before{content:"\\e0b7"}.fa-sack-xmark:before{content:"\\e56a"}.fa-file-excel:before{content:"\\f1c3"}.fa-file-contract:before{content:"\\f56c"}.fa-fish-fins:before{content:"\\e4f2"}.fa-building-flag:before{content:"\\e4d5"}.fa-face-grin-beam:before,.fa-grin-beam:before{content:"\\f582"}.fa-object-ungroup:before{content:"\\f248"}.fa-poop:before{content:"\\f619"}.fa-location-pin:before,.fa-map-marker:before{content:"\\f041"}.fa-kaaba:before{content:"\\f66b"}.fa-toilet-paper:before{content:"\\f71e"}.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before{content:"\\f807"}.fa-eject:before{content:"\\f052"}.fa-arrow-alt-circle-right:before,.fa-circle-right:before{content:"\\f35a"}.fa-plane-circle-check:before{content:"\\e555"}.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before{content:"\\f5a5"}.fa-object-group:before{content:"\\f247"}.fa-chart-line:before,.fa-line-chart:before{content:"\\f201"}.fa-mask-ventilator:before{content:"\\e524"}.fa-arrow-right:before{content:"\\f061"}.fa-map-signs:before,.fa-signs-post:before{content:"\\f277"}.fa-cash-register:before{content:"\\f788"}.fa-person-circle-question:before{content:"\\e542"}.fa-h:before{content:"\\48"}.fa-tarp:before{content:"\\e57b"}.fa-screwdriver-wrench:before,.fa-tools:before{content:"\\f7d9"}.fa-arrows-to-eye:before{content:"\\e4bf"}.fa-plug-circle-bolt:before{content:"\\e55b"}.fa-heart:before{content:"\\f004"}.fa-mars-and-venus:before{content:"\\f224"}.fa-home-user:before,.fa-house-user:before{content:"\\e1b0"}.fa-dumpster-fire:before{content:"\\f794"}.fa-house-crack:before{content:"\\e3b1"}.fa-cocktail:before,.fa-martini-glass-citrus:before{content:"\\f561"}.fa-face-surprise:before,.fa-surprise:before{content:"\\f5c2"}.fa-bottle-water:before{content:"\\e4c5"}.fa-circle-pause:before,.fa-pause-circle:before{content:"\\f28b"}.fa-toilet-paper-slash:before{content:"\\e072"}.fa-apple-alt:before,.fa-apple-whole:before{content:"\\f5d1"}.fa-kitchen-set:before{content:"\\e51a"}.fa-r:before{content:"\\52"}.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-cube:before{content:"\\f1b2"}.fa-bitcoin-sign:before{content:"\\e0b4"}.fa-shield-dog:before{content:"\\e573"}.fa-solar-panel:before{content:"\\f5ba"}.fa-lock-open:before{content:"\\f3c1"}.fa-elevator:before{content:"\\e16d"}.fa-money-bill-transfer:before{content:"\\e528"}.fa-money-bill-trend-up:before{content:"\\e529"}.fa-house-flood-water-circle-arrow-right:before{content:"\\e50f"}.fa-poll-h:before,.fa-square-poll-horizontal:before{content:"\\f682"}.fa-circle:before{content:"\\f111"}.fa-backward-fast:before,.fa-fast-backward:before{content:"\\f049"}.fa-recycle:before{content:"\\f1b8"}.fa-user-astronaut:before{content:"\\f4fb"}.fa-plane-slash:before{content:"\\e069"}.fa-trademark:before{content:"\\f25c"}.fa-basketball-ball:before,.fa-basketball:before{content:"\\f434"}.fa-satellite-dish:before{content:"\\f7c0"}.fa-arrow-alt-circle-up:before,.fa-circle-up:before{content:"\\f35b"}.fa-mobile-alt:before,.fa-mobile-screen-button:before{content:"\\f3cd"}.fa-volume-high:before,.fa-volume-up:before{content:"\\f028"}.fa-users-rays:before{content:"\\e593"}.fa-wallet:before{content:"\\f555"}.fa-clipboard-check:before{content:"\\f46c"}.fa-file-audio:before{content:"\\f1c7"}.fa-burger:before,.fa-hamburger:before{content:"\\f805"}.fa-wrench:before{content:"\\f0ad"}.fa-bugs:before{content:"\\e4d0"}.fa-rupee-sign:before,.fa-rupee:before{content:"\\f156"}.fa-file-image:before{content:"\\f1c5"}.fa-circle-question:before,.fa-question-circle:before{content:"\\f059"}.fa-plane-departure:before{content:"\\f5b0"}.fa-handshake-slash:before{content:"\\e060"}.fa-book-bookmark:before{content:"\\e0bb"}.fa-code-branch:before{content:"\\f126"}.fa-hat-cowboy:before{content:"\\f8c0"}.fa-bridge:before{content:"\\e4c8"}.fa-phone-alt:before,.fa-phone-flip:before{content:"\\f879"}.fa-truck-front:before{content:"\\e2b7"}.fa-cat:before{content:"\\f6be"}.fa-anchor-circle-exclamation:before{content:"\\e4ab"}.fa-truck-field:before{content:"\\e58d"}.fa-route:before{content:"\\f4d7"}.fa-clipboard-question:before{content:"\\e4e3"}.fa-panorama:before{content:"\\e209"}.fa-comment-medical:before{content:"\\f7f5"}.fa-teeth-open:before{content:"\\f62f"}.fa-file-circle-minus:before{content:"\\e4ed"}.fa-tags:before{content:"\\f02c"}.fa-wine-glass:before{content:"\\f4e3"}.fa-fast-forward:before,.fa-forward-fast:before{content:"\\f050"}.fa-face-meh-blank:before,.fa-meh-blank:before{content:"\\f5a4"}.fa-parking:before,.fa-square-parking:before{content:"\\f540"}.fa-house-signal:before{content:"\\e012"}.fa-bars-progress:before,.fa-tasks-alt:before{content:"\\f828"}.fa-faucet-drip:before{content:"\\e006"}.fa-cart-flatbed:before,.fa-dolly-flatbed:before{content:"\\f474"}.fa-ban-smoking:before,.fa-smoking-ban:before{content:"\\f54d"}.fa-terminal:before{content:"\\f120"}.fa-mobile-button:before{content:"\\f10b"}.fa-house-medical-flag:before{content:"\\e514"}.fa-basket-shopping:before,.fa-shopping-basket:before{content:"\\f291"}.fa-tape:before{content:"\\f4db"}.fa-bus-alt:before,.fa-bus-simple:before{content:"\\f55e"}.fa-eye:before{content:"\\f06e"}.fa-face-sad-cry:before,.fa-sad-cry:before{content:"\\f5b3"}.fa-audio-description:before{content:"\\f29e"}.fa-person-military-to-person:before{content:"\\e54c"}.fa-file-shield:before{content:"\\e4f0"}.fa-user-slash:before{content:"\\f506"}.fa-pen:before{content:"\\f304"}.fa-tower-observation:before{content:"\\e586"}.fa-file-code:before{content:"\\f1c9"}.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before{content:"\\f012"}.fa-bus:before{content:"\\f207"}.fa-heart-circle-xmark:before{content:"\\e501"}.fa-home-lg:before,.fa-house-chimney:before{content:"\\e3af"}.fa-window-maximize:before{content:"\\f2d0"}.fa-face-frown:before,.fa-frown:before{content:"\\f119"}.fa-prescription:before{content:"\\f5b1"}.fa-shop:before,.fa-store-alt:before{content:"\\f54f"}.fa-floppy-disk:before,.fa-save:before{content:"\\f0c7"}.fa-vihara:before{content:"\\f6a7"}.fa-balance-scale-left:before,.fa-scale-unbalanced:before{content:"\\f515"}.fa-sort-asc:before,.fa-sort-up:before{content:"\\f0de"}.fa-comment-dots:before,.fa-commenting:before{content:"\\f4ad"}.fa-plant-wilt:before{content:"\\e5aa"}.fa-diamond:before{content:"\\f219"}.fa-face-grin-squint:before,.fa-grin-squint:before{content:"\\f585"}.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before{content:"\\f4c0"}.fa-bacterium:before{content:"\\e05a"}.fa-hand-pointer:before{content:"\\f25a"}.fa-drum-steelpan:before{content:"\\f56a"}.fa-hand-scissors:before{content:"\\f257"}.fa-hands-praying:before,.fa-praying-hands:before{content:"\\f684"}.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before{content:"\\f01e"}.fa-biohazard:before{content:"\\f780"}.fa-location-crosshairs:before,.fa-location:before{content:"\\f601"}.fa-mars-double:before{content:"\\f227"}.fa-child-dress:before{content:"\\e59c"}.fa-users-between-lines:before{content:"\\e591"}.fa-lungs-virus:before{content:"\\e067"}.fa-face-grin-tears:before,.fa-grin-tears:before{content:"\\f588"}.fa-phone:before{content:"\\f095"}.fa-calendar-times:before,.fa-calendar-xmark:before{content:"\\f273"}.fa-child-reaching:before{content:"\\e59d"}.fa-head-side-virus:before{content:"\\e064"}.fa-user-cog:before,.fa-user-gear:before{content:"\\f4fe"}.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before{content:"\\f163"}.fa-door-closed:before{content:"\\f52a"}.fa-shield-virus:before{content:"\\e06c"}.fa-dice-six:before{content:"\\f526"}.fa-mosquito-net:before{content:"\\e52c"}.fa-bridge-water:before{content:"\\e4ce"}.fa-person-booth:before{content:"\\f756"}.fa-text-width:before{content:"\\f035"}.fa-hat-wizard:before{content:"\\f6e8"}.fa-pen-fancy:before{content:"\\f5ac"}.fa-digging:before,.fa-person-digging:before{content:"\\f85e"}.fa-trash:before{content:"\\f1f8"}.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before{content:"\\f629"}.fa-book-medical:before{content:"\\f7e6"}.fa-poo:before{content:"\\f2fe"}.fa-quote-right-alt:before,.fa-quote-right:before{content:"\\f10e"}.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before{content:"\\f553"}.fa-cubes:before{content:"\\f1b3"}.fa-divide:before{content:"\\f529"}.fa-tenge-sign:before,.fa-tenge:before{content:"\\f7d7"}.fa-headphones:before{content:"\\f025"}.fa-hands-holding:before{content:"\\f4c2"}.fa-hands-clapping:before{content:"\\e1a8"}.fa-republican:before{content:"\\f75e"}.fa-arrow-left:before{content:"\\f060"}.fa-person-circle-xmark:before{content:"\\e543"}.fa-ruler:before{content:"\\f545"}.fa-align-left:before{content:"\\f036"}.fa-dice-d6:before{content:"\\f6d1"}.fa-restroom:before{content:"\\f7bd"}.fa-j:before{content:"\\4a"}.fa-users-viewfinder:before{content:"\\e595"}.fa-file-video:before{content:"\\f1c8"}.fa-external-link-alt:before,.fa-up-right-from-square:before{content:"\\f35d"}.fa-table-cells:before,.fa-th:before{content:"\\f00a"}.fa-file-pdf:before{content:"\\f1c1"}.fa-bible:before,.fa-book-bible:before{content:"\\f647"}.fa-o:before{content:"\\4f"}.fa-medkit:before,.fa-suitcase-medical:before{content:"\\f0fa"}.fa-user-secret:before{content:"\\f21b"}.fa-otter:before{content:"\\f700"}.fa-female:before,.fa-person-dress:before{content:"\\f182"}.fa-comment-dollar:before{content:"\\f651"}.fa-briefcase-clock:before,.fa-business-time:before{content:"\\f64a"}.fa-table-cells-large:before,.fa-th-large:before{content:"\\f009"}.fa-book-tanakh:before,.fa-tanakh:before{content:"\\f827"}.fa-phone-volume:before,.fa-volume-control-phone:before{content:"\\f2a0"}.fa-hat-cowboy-side:before{content:"\\f8c1"}.fa-clipboard-user:before{content:"\\f7f3"}.fa-child:before{content:"\\f1ae"}.fa-lira-sign:before{content:"\\f195"}.fa-satellite:before{content:"\\f7bf"}.fa-plane-lock:before{content:"\\e558"}.fa-tag:before{content:"\\f02b"}.fa-comment:before{content:"\\f075"}.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before{content:"\\f1fd"}.fa-envelope:before{content:"\\f0e0"}.fa-angle-double-up:before,.fa-angles-up:before{content:"\\f102"}.fa-paperclip:before{content:"\\f0c6"}.fa-arrow-right-to-city:before{content:"\\e4b3"}.fa-ribbon:before{content:"\\f4d6"}.fa-lungs:before{content:"\\f604"}.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before{content:"\\f887"}.fa-litecoin-sign:before{content:"\\e1d3"}.fa-border-none:before{content:"\\f850"}.fa-circle-nodes:before{content:"\\e4e2"}.fa-parachute-box:before{content:"\\f4cd"}.fa-indent:before{content:"\\f03c"}.fa-truck-field-un:before{content:"\\e58e"}.fa-hourglass-empty:before,.fa-hourglass:before{content:"\\f254"}.fa-mountain:before{content:"\\f6fc"}.fa-user-doctor:before,.fa-user-md:before{content:"\\f0f0"}.fa-circle-info:before,.fa-info-circle:before{content:"\\f05a"}.fa-cloud-meatball:before{content:"\\f73b"}.fa-camera-alt:before,.fa-camera:before{content:"\\f030"}.fa-square-virus:before{content:"\\e578"}.fa-meteor:before{content:"\\f753"}.fa-car-on:before{content:"\\e4dd"}.fa-sleigh:before{content:"\\f7cc"}.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before{content:"\\f162"}.fa-hand-holding-droplet:before,.fa-hand-holding-water:before{content:"\\f4c1"}.fa-water:before{content:"\\f773"}.fa-calendar-check:before{content:"\\f274"}.fa-braille:before{content:"\\f2a1"}.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before{content:"\\f486"}.fa-landmark:before{content:"\\f66f"}.fa-truck:before{content:"\\f0d1"}.fa-crosshairs:before{content:"\\f05b"}.fa-person-cane:before{content:"\\e53c"}.fa-tent:before{content:"\\e57d"}.fa-vest-patches:before{content:"\\e086"}.fa-check-double:before{content:"\\f560"}.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before{content:"\\f15d"}.fa-money-bill-wheat:before{content:"\\e52a"}.fa-cookie:before{content:"\\f563"}.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-hard-drive:before,.fa-hdd:before{content:"\\f0a0"}.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before{content:"\\f586"}.fa-dumbbell:before{content:"\\f44b"}.fa-list-alt:before,.fa-rectangle-list:before{content:"\\f022"}.fa-tarp-droplet:before{content:"\\e57c"}.fa-house-medical-circle-check:before{content:"\\e511"}.fa-person-skiing-nordic:before,.fa-skiing-nordic:before{content:"\\f7ca"}.fa-calendar-plus:before{content:"\\f271"}.fa-plane-arrival:before{content:"\\f5af"}.fa-arrow-alt-circle-left:before,.fa-circle-left:before{content:"\\f359"}.fa-subway:before,.fa-train-subway:before{content:"\\f239"}.fa-chart-gantt:before{content:"\\e0e4"}.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before{content:"\\e1bc"}.fa-crop-alt:before,.fa-crop-simple:before{content:"\\f565"}.fa-money-bill-1:before,.fa-money-bill-alt:before{content:"\\f3d1"}.fa-left-long:before,.fa-long-arrow-alt-left:before{content:"\\f30a"}.fa-dna:before{content:"\\f471"}.fa-virus-slash:before{content:"\\e075"}.fa-minus:before,.fa-subtract:before{content:"\\f068"}.fa-chess:before{content:"\\f439"}.fa-arrow-left-long:before,.fa-long-arrow-left:before{content:"\\f177"}.fa-plug-circle-check:before{content:"\\e55c"}.fa-street-view:before{content:"\\f21d"}.fa-franc-sign:before{content:"\\e18f"}.fa-volume-off:before{content:"\\f026"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before{content:"\\f2a3"}.fa-cog:before,.fa-gear:before{content:"\\f013"}.fa-droplet-slash:before,.fa-tint-slash:before{content:"\\f5c7"}.fa-mosque:before{content:"\\f678"}.fa-mosquito:before{content:"\\e52b"}.fa-star-of-david:before{content:"\\f69a"}.fa-person-military-rifle:before{content:"\\e54b"}.fa-cart-shopping:before,.fa-shopping-cart:before{content:"\\f07a"}.fa-vials:before{content:"\\f493"}.fa-plug-circle-plus:before{content:"\\e55f"}.fa-place-of-worship:before{content:"\\f67f"}.fa-grip-vertical:before{content:"\\f58e"}.fa-arrow-turn-up:before,.fa-level-up:before{content:"\\f148"}.fa-u:before{content:"\\55"}.fa-square-root-alt:before,.fa-square-root-variable:before{content:"\\f698"}.fa-clock-four:before,.fa-clock:before{content:"\\f017"}.fa-backward-step:before,.fa-step-backward:before{content:"\\f048"}.fa-pallet:before{content:"\\f482"}.fa-faucet:before{content:"\\e005"}.fa-baseball-bat-ball:before{content:"\\f432"}.fa-s:before{content:"\\53"}.fa-timeline:before{content:"\\e29c"}.fa-keyboard:before{content:"\\f11c"}.fa-caret-down:before{content:"\\f0d7"}.fa-clinic-medical:before,.fa-house-chimney-medical:before{content:"\\f7f2"}.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-mobile-android-alt:before,.fa-mobile-screen:before{content:"\\f3cf"}.fa-plane-up:before{content:"\\e22d"}.fa-piggy-bank:before{content:"\\f4d3"}.fa-battery-3:before,.fa-battery-half:before{content:"\\f242"}.fa-mountain-city:before{content:"\\e52e"}.fa-coins:before{content:"\\f51e"}.fa-khanda:before{content:"\\f66d"}.fa-sliders-h:before,.fa-sliders:before{content:"\\f1de"}.fa-folder-tree:before{content:"\\f802"}.fa-network-wired:before{content:"\\f6ff"}.fa-map-pin:before{content:"\\f276"}.fa-hamsa:before{content:"\\f665"}.fa-cent-sign:before{content:"\\e3f5"}.fa-flask:before{content:"\\f0c3"}.fa-person-pregnant:before{content:"\\e31e"}.fa-wand-sparkles:before{content:"\\f72b"}.fa-ellipsis-v:before,.fa-ellipsis-vertical:before{content:"\\f142"}.fa-ticket:before{content:"\\f145"}.fa-power-off:before{content:"\\f011"}.fa-long-arrow-alt-right:before,.fa-right-long:before{content:"\\f30b"}.fa-flag-usa:before{content:"\\f74d"}.fa-laptop-file:before{content:"\\e51d"}.fa-teletype:before,.fa-tty:before{content:"\\f1e4"}.fa-diagram-next:before{content:"\\e476"}.fa-person-rifle:before{content:"\\e54e"}.fa-house-medical-circle-exclamation:before{content:"\\e512"}.fa-closed-captioning:before{content:"\\f20a"}.fa-hiking:before,.fa-person-hiking:before{content:"\\f6ec"}.fa-venus-double:before{content:"\\f226"}.fa-images:before{content:"\\f302"}.fa-calculator:before{content:"\\f1ec"}.fa-people-pulling:before{content:"\\e535"}.fa-n:before{content:"\\4e"}.fa-cable-car:before,.fa-tram:before{content:"\\f7da"}.fa-cloud-rain:before{content:"\\f73d"}.fa-building-circle-xmark:before{content:"\\e4d4"}.fa-ship:before{content:"\\f21a"}.fa-arrows-down-to-line:before{content:"\\e4b8"}.fa-download:before{content:"\\f019"}.fa-face-grin:before,.fa-grin:before{content:"\\f580"}.fa-backspace:before,.fa-delete-left:before{content:"\\f55a"}.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before{content:"\\f1fb"}.fa-file-circle-check:before{content:"\\e5a0"}.fa-forward:before{content:"\\f04e"}.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before{content:"\\f3ce"}.fa-face-meh:before,.fa-meh:before{content:"\\f11a"}.fa-align-center:before{content:"\\f037"}.fa-book-dead:before,.fa-book-skull:before{content:"\\f6b7"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-heart-circle-exclamation:before{content:"\\e4fe"}.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before{content:"\\f015"}.fa-calendar-week:before{content:"\\f784"}.fa-laptop-medical:before{content:"\\f812"}.fa-b:before{content:"\\42"}.fa-file-medical:before{content:"\\f477"}.fa-dice-one:before{content:"\\f525"}.fa-kiwi-bird:before{content:"\\f535"}.fa-arrow-right-arrow-left:before,.fa-exchange:before{content:"\\f0ec"}.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before{content:"\\f2f9"}.fa-cutlery:before,.fa-utensils:before{content:"\\f2e7"}.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before{content:"\\f161"}.fa-mill-sign:before{content:"\\e1ed"}.fa-bowl-rice:before{content:"\\e2eb"}.fa-skull:before{content:"\\f54c"}.fa-broadcast-tower:before,.fa-tower-broadcast:before{content:"\\f519"}.fa-truck-pickup:before{content:"\\f63c"}.fa-long-arrow-alt-up:before,.fa-up-long:before{content:"\\f30c"}.fa-stop:before{content:"\\f04d"}.fa-code-merge:before{content:"\\f387"}.fa-upload:before{content:"\\f093"}.fa-hurricane:before{content:"\\f751"}.fa-mound:before{content:"\\e52d"}.fa-toilet-portable:before{content:"\\e583"}.fa-compact-disc:before{content:"\\f51f"}.fa-file-arrow-down:before,.fa-file-download:before{content:"\\f56d"}.fa-caravan:before{content:"\\f8ff"}.fa-shield-cat:before{content:"\\e572"}.fa-bolt:before,.fa-zap:before{content:"\\f0e7"}.fa-glass-water:before{content:"\\e4f4"}.fa-oil-well:before{content:"\\e532"}.fa-vault:before{content:"\\e2c5"}.fa-mars:before{content:"\\f222"}.fa-toilet:before{content:"\\f7d8"}.fa-plane-circle-xmark:before{content:"\\e557"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before{content:"\\f157"}.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before{content:"\\f158"}.fa-sun:before{content:"\\f185"}.fa-guitar:before{content:"\\f7a6"}.fa-face-laugh-wink:before,.fa-laugh-wink:before{content:"\\f59c"}.fa-horse-head:before{content:"\\f7ab"}.fa-bore-hole:before{content:"\\e4c3"}.fa-industry:before{content:"\\f275"}.fa-arrow-alt-circle-down:before,.fa-circle-down:before{content:"\\f358"}.fa-arrows-turn-to-dots:before{content:"\\e4c1"}.fa-florin-sign:before{content:"\\e184"}.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before{content:"\\f884"}.fa-less-than:before{content:"\\3c"}.fa-angle-down:before{content:"\\f107"}.fa-car-tunnel:before{content:"\\e4de"}.fa-head-side-cough:before{content:"\\e061"}.fa-grip-lines:before{content:"\\f7a4"}.fa-thumbs-down:before{content:"\\f165"}.fa-user-lock:before{content:"\\f502"}.fa-arrow-right-long:before,.fa-long-arrow-right:before{content:"\\f178"}.fa-anchor-circle-xmark:before{content:"\\e4ac"}.fa-ellipsis-h:before,.fa-ellipsis:before{content:"\\f141"}.fa-chess-pawn:before{content:"\\f443"}.fa-first-aid:before,.fa-kit-medical:before{content:"\\f479"}.fa-person-through-window:before{content:"\\e5a9"}.fa-toolbox:before{content:"\\f552"}.fa-hands-holding-circle:before{content:"\\e4fb"}.fa-bug:before{content:"\\f188"}.fa-credit-card-alt:before,.fa-credit-card:before{content:"\\f09d"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-hand-holding-hand:before{content:"\\e4f7"}.fa-book-open-reader:before,.fa-book-reader:before{content:"\\f5da"}.fa-mountain-sun:before{content:"\\e52f"}.fa-arrows-left-right-to-line:before{content:"\\e4ba"}.fa-dice-d20:before{content:"\\f6cf"}.fa-truck-droplet:before{content:"\\e58c"}.fa-file-circle-xmark:before{content:"\\e5a1"}.fa-temperature-arrow-up:before,.fa-temperature-up:before{content:"\\e040"}.fa-medal:before{content:"\\f5a2"}.fa-bed:before{content:"\\f236"}.fa-h-square:before,.fa-square-h:before{content:"\\f0fd"}.fa-podcast:before{content:"\\f2ce"}.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-bell:before{content:"\\f0f3"}.fa-superscript:before{content:"\\f12b"}.fa-plug-circle-xmark:before{content:"\\e560"}.fa-star-of-life:before{content:"\\f621"}.fa-phone-slash:before{content:"\\f3dd"}.fa-paint-roller:before{content:"\\f5aa"}.fa-hands-helping:before,.fa-handshake-angle:before{content:"\\f4c4"}.fa-location-dot:before,.fa-map-marker-alt:before{content:"\\f3c5"}.fa-file:before{content:"\\f15b"}.fa-greater-than:before{content:"\\3e"}.fa-person-swimming:before,.fa-swimmer:before{content:"\\f5c4"}.fa-arrow-down:before{content:"\\f063"}.fa-droplet:before,.fa-tint:before{content:"\\f043"}.fa-eraser:before{content:"\\f12d"}.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before{content:"\\f57d"}.fa-person-burst:before{content:"\\e53b"}.fa-dove:before{content:"\\f4ba"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-socks:before{content:"\\f696"}.fa-inbox:before{content:"\\f01c"}.fa-section:before{content:"\\e447"}.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before{content:"\\f625"}.fa-envelope-open-text:before{content:"\\f658"}.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before{content:"\\f0f8"}.fa-wine-bottle:before{content:"\\f72f"}.fa-chess-rook:before{content:"\\f447"}.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before{content:"\\f550"}.fa-dharmachakra:before{content:"\\f655"}.fa-hotdog:before{content:"\\f80f"}.fa-blind:before,.fa-person-walking-with-cane:before{content:"\\f29d"}.fa-drum:before{content:"\\f569"}.fa-ice-cream:before{content:"\\f810"}.fa-heart-circle-bolt:before{content:"\\e4fc"}.fa-fax:before{content:"\\f1ac"}.fa-paragraph:before{content:"\\f1dd"}.fa-check-to-slot:before,.fa-vote-yea:before{content:"\\f772"}.fa-star-half:before{content:"\\f089"}.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before{content:"\\f468"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-assistive-listening-systems:before,.fa-ear-listen:before{content:"\\f2a2"}.fa-tree-city:before{content:"\\e587"}.fa-play:before{content:"\\f04b"}.fa-font:before{content:"\\f031"}.fa-rupiah-sign:before{content:"\\e23d"}.fa-magnifying-glass:before,.fa-search:before{content:"\\f002"}.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before{content:"\\f45d"}.fa-diagnoses:before,.fa-person-dots-from-line:before{content:"\\f470"}.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before{content:"\\f82a"}.fa-naira-sign:before{content:"\\e1f6"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-walkie-talkie:before{content:"\\f8ef"}.fa-file-edit:before,.fa-file-pen:before{content:"\\f31c"}.fa-receipt:before{content:"\\f543"}.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before{content:"\\f14b"}.fa-suitcase-rolling:before{content:"\\f5c1"}.fa-person-circle-exclamation:before{content:"\\e53f"}.fa-chevron-down:before{content:"\\f078"}.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before{content:"\\f240"}.fa-skull-crossbones:before{content:"\\f714"}.fa-code-compare:before{content:"\\e13a"}.fa-list-dots:before,.fa-list-ul:before{content:"\\f0ca"}.fa-school-lock:before{content:"\\e56f"}.fa-tower-cell:before{content:"\\e585"}.fa-down-long:before,.fa-long-arrow-alt-down:before{content:"\\f309"}.fa-ranking-star:before{content:"\\e561"}.fa-chess-king:before{content:"\\f43f"}.fa-person-harassing:before{content:"\\e549"}.fa-brazilian-real-sign:before{content:"\\e46c"}.fa-landmark-alt:before,.fa-landmark-dome:before{content:"\\f752"}.fa-arrow-up:before{content:"\\f062"}.fa-television:before,.fa-tv-alt:before,.fa-tv:before{content:"\\f26c"}.fa-shrimp:before{content:"\\e448"}.fa-list-check:before,.fa-tasks:before{content:"\\f0ae"}.fa-jug-detergent:before{content:"\\e519"}.fa-circle-user:before,.fa-user-circle:before{content:"\\f2bd"}.fa-user-shield:before{content:"\\f505"}.fa-wind:before{content:"\\f72e"}.fa-car-burst:before,.fa-car-crash:before{content:"\\f5e1"}.fa-y:before{content:"\\59"}.fa-person-snowboarding:before,.fa-snowboarding:before{content:"\\f7ce"}.fa-shipping-fast:before,.fa-truck-fast:before{content:"\\f48b"}.fa-fish:before{content:"\\f578"}.fa-user-graduate:before{content:"\\f501"}.fa-adjust:before,.fa-circle-half-stroke:before{content:"\\f042"}.fa-clapperboard:before{content:"\\e131"}.fa-circle-radiation:before,.fa-radiation-alt:before{content:"\\f7ba"}.fa-baseball-ball:before,.fa-baseball:before{content:"\\f433"}.fa-jet-fighter-up:before{content:"\\e518"}.fa-diagram-project:before,.fa-project-diagram:before{content:"\\f542"}.fa-copy:before{content:"\\f0c5"}.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before{content:"\\f6a9"}.fa-hand-sparkles:before{content:"\\e05d"}.fa-grip-horizontal:before,.fa-grip:before{content:"\\f58d"}.fa-share-from-square:before,.fa-share-square:before{content:"\\f14d"}.fa-child-combatant:before,.fa-child-rifle:before{content:"\\e4e0"}.fa-gun:before{content:"\\e19b"}.fa-phone-square:before,.fa-square-phone:before{content:"\\f098"}.fa-add:before,.fa-plus:before{content:"\\2b"}.fa-expand:before{content:"\\f065"}.fa-computer:before{content:"\\e4e5"}.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:"\\f00d"}.fa-arrows-up-down-left-right:before,.fa-arrows:before{content:"\\f047"}.fa-chalkboard-teacher:before,.fa-chalkboard-user:before{content:"\\f51c"}.fa-peso-sign:before{content:"\\e222"}.fa-building-shield:before{content:"\\e4d8"}.fa-baby:before{content:"\\f77c"}.fa-users-line:before{content:"\\e592"}.fa-quote-left-alt:before,.fa-quote-left:before{content:"\\f10d"}.fa-tractor:before{content:"\\f722"}.fa-trash-arrow-up:before,.fa-trash-restore:before{content:"\\f829"}.fa-arrow-down-up-lock:before{content:"\\e4b0"}.fa-lines-leaning:before{content:"\\e51e"}.fa-ruler-combined:before{content:"\\f546"}.fa-copyright:before{content:"\\f1f9"}.fa-equals:before{content:"\\3d"}.fa-blender:before{content:"\\f517"}.fa-teeth:before{content:"\\f62e"}.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before{content:"\\f20b"}.fa-map:before{content:"\\f279"}.fa-rocket:before{content:"\\f135"}.fa-photo-film:before,.fa-photo-video:before{content:"\\f87c"}.fa-folder-minus:before{content:"\\f65d"}.fa-store:before{content:"\\f54e"}.fa-arrow-trend-up:before{content:"\\e098"}.fa-plug-circle-minus:before{content:"\\e55e"}.fa-sign-hanging:before,.fa-sign:before{content:"\\f4d9"}.fa-bezier-curve:before{content:"\\f55b"}.fa-bell-slash:before{content:"\\f1f6"}.fa-tablet-android:before,.fa-tablet:before{content:"\\f3fb"}.fa-school-flag:before{content:"\\e56e"}.fa-fill:before{content:"\\f575"}.fa-angle-up:before{content:"\\f106"}.fa-drumstick-bite:before{content:"\\f6d7"}.fa-holly-berry:before{content:"\\f7aa"}.fa-chevron-left:before{content:"\\f053"}.fa-bacteria:before{content:"\\e059"}.fa-hand-lizard:before{content:"\\f258"}.fa-notdef:before{content:"\\e1fe"}.fa-disease:before{content:"\\f7fa"}.fa-briefcase-medical:before{content:"\\f469"}.fa-genderless:before{content:"\\f22d"}.fa-chevron-right:before{content:"\\f054"}.fa-retweet:before{content:"\\f079"}.fa-car-alt:before,.fa-car-rear:before{content:"\\f5de"}.fa-pump-soap:before{content:"\\e06b"}.fa-video-slash:before{content:"\\f4e2"}.fa-battery-2:before,.fa-battery-quarter:before{content:"\\f243"}.fa-radio:before{content:"\\f8d7"}.fa-baby-carriage:before,.fa-carriage-baby:before{content:"\\f77d"}.fa-traffic-light:before{content:"\\f637"}.fa-thermometer:before{content:"\\f491"}.fa-vr-cardboard:before{content:"\\f729"}.fa-hand-middle-finger:before{content:"\\f806"}.fa-percent:before,.fa-percentage:before{content:"\\25"}.fa-truck-moving:before{content:"\\f4df"}.fa-glass-water-droplet:before{content:"\\e4f5"}.fa-display:before{content:"\\e163"}.fa-face-smile:before,.fa-smile:before{content:"\\f118"}.fa-thumb-tack:before,.fa-thumbtack:before{content:"\\f08d"}.fa-trophy:before{content:"\\f091"}.fa-person-praying:before,.fa-pray:before{content:"\\f683"}.fa-hammer:before{content:"\\f6e3"}.fa-hand-peace:before{content:"\\f25b"}.fa-rotate:before,.fa-sync-alt:before{content:"\\f2f1"}.fa-spinner:before{content:"\\f110"}.fa-robot:before{content:"\\f544"}.fa-peace:before{content:"\\f67c"}.fa-cogs:before,.fa-gears:before{content:"\\f085"}.fa-warehouse:before{content:"\\f494"}.fa-arrow-up-right-dots:before{content:"\\e4b7"}.fa-splotch:before{content:"\\f5bc"}.fa-face-grin-hearts:before,.fa-grin-hearts:before{content:"\\f584"}.fa-dice-four:before{content:"\\f524"}.fa-sim-card:before{content:"\\f7c4"}.fa-transgender-alt:before,.fa-transgender:before{content:"\\f225"}.fa-mercury:before{content:"\\f223"}.fa-arrow-turn-down:before,.fa-level-down:before{content:"\\f149"}.fa-person-falling-burst:before{content:"\\e547"}.fa-award:before{content:"\\f559"}.fa-ticket-alt:before,.fa-ticket-simple:before{content:"\\f3ff"}.fa-building:before{content:"\\f1ad"}.fa-angle-double-left:before,.fa-angles-left:before{content:"\\f100"}.fa-qrcode:before{content:"\\f029"}.fa-clock-rotate-left:before,.fa-history:before{content:"\\f1da"}.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before{content:"\\f583"}.fa-arrow-right-from-file:before,.fa-file-export:before{content:"\\f56e"}.fa-shield-blank:before,.fa-shield:before{content:"\\f132"}.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before{content:"\\f885"}.fa-house-medical:before{content:"\\e3b2"}.fa-golf-ball-tee:before,.fa-golf-ball:before{content:"\\f450"}.fa-chevron-circle-left:before,.fa-circle-chevron-left:before{content:"\\f137"}.fa-house-chimney-window:before{content:"\\e00d"}.fa-pen-nib:before{content:"\\f5ad"}.fa-tent-arrow-turn-left:before{content:"\\e580"}.fa-tents:before{content:"\\e582"}.fa-magic:before,.fa-wand-magic:before{content:"\\f0d0"}.fa-dog:before{content:"\\f6d3"}.fa-carrot:before{content:"\\f787"}.fa-moon:before{content:"\\f186"}.fa-wine-glass-alt:before,.fa-wine-glass-empty:before{content:"\\f5ce"}.fa-cheese:before{content:"\\f7ef"}.fa-yin-yang:before{content:"\\f6ad"}.fa-music:before{content:"\\f001"}.fa-code-commit:before{content:"\\f386"}.fa-temperature-low:before{content:"\\f76b"}.fa-biking:before,.fa-person-biking:before{content:"\\f84a"}.fa-broom:before{content:"\\f51a"}.fa-shield-heart:before{content:"\\e574"}.fa-gopuram:before{content:"\\f664"}.fa-earth-oceania:before,.fa-globe-oceania:before{content:"\\e47b"}.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before{content:"\\f2d3"}.fa-hashtag:before{content:"\\23"}.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before{content:"\\f424"}.fa-oil-can:before{content:"\\f613"}.fa-t:before{content:"\\54"}.fa-hippo:before{content:"\\f6ed"}.fa-chart-column:before{content:"\\e0e3"}.fa-infinity:before{content:"\\f534"}.fa-vial-circle-check:before{content:"\\e596"}.fa-person-arrow-down-to-line:before{content:"\\e538"}.fa-voicemail:before{content:"\\f897"}.fa-fan:before{content:"\\f863"}.fa-person-walking-luggage:before{content:"\\e554"}.fa-arrows-alt-v:before,.fa-up-down:before{content:"\\f338"}.fa-cloud-moon-rain:before{content:"\\f73c"}.fa-calendar:before{content:"\\f133"}.fa-trailer:before{content:"\\e041"}.fa-bahai:before,.fa-haykal:before{content:"\\f666"}.fa-sd-card:before{content:"\\f7c2"}.fa-dragon:before{content:"\\f6d5"}.fa-shoe-prints:before{content:"\\f54b"}.fa-circle-plus:before,.fa-plus-circle:before{content:"\\f055"}.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before{content:"\\f58b"}.fa-hand-holding:before{content:"\\f4bd"}.fa-plug-circle-exclamation:before{content:"\\e55d"}.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before{content:"\\f127"}.fa-clone:before{content:"\\f24d"}.fa-person-walking-arrow-loop-left:before{content:"\\e551"}.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before{content:"\\f882"}.fa-fire-alt:before,.fa-fire-flame-curved:before{content:"\\f7e4"}.fa-tornado:before{content:"\\f76f"}.fa-file-circle-plus:before{content:"\\e494"}.fa-book-quran:before,.fa-quran:before{content:"\\f687"}.fa-anchor:before{content:"\\f13d"}.fa-border-all:before{content:"\\f84c"}.fa-angry:before,.fa-face-angry:before{content:"\\f556"}.fa-cookie-bite:before{content:"\\f564"}.fa-arrow-trend-down:before{content:"\\e097"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-draw-polygon:before{content:"\\f5ee"}.fa-balance-scale:before,.fa-scale-balanced:before{content:"\\f24e"}.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before{content:"\\f62a"}.fa-shower:before{content:"\\f2cc"}.fa-desktop-alt:before,.fa-desktop:before{content:"\\f390"}.fa-m:before{content:"\\4d"}.fa-table-list:before,.fa-th-list:before{content:"\\f00b"}.fa-comment-sms:before,.fa-sms:before{content:"\\f7cd"}.fa-book:before{content:"\\f02d"}.fa-user-plus:before{content:"\\f234"}.fa-check:before{content:"\\f00c"}.fa-battery-4:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-house-circle-check:before{content:"\\e509"}.fa-angle-left:before{content:"\\f104"}.fa-diagram-successor:before{content:"\\e47a"}.fa-truck-arrow-right:before{content:"\\e58b"}.fa-arrows-split-up-and-left:before{content:"\\e4bc"}.fa-fist-raised:before,.fa-hand-fist:before{content:"\\f6de"}.fa-cloud-moon:before{content:"\\f6c3"}.fa-briefcase:before{content:"\\f0b1"}.fa-person-falling:before{content:"\\e546"}.fa-image-portrait:before,.fa-portrait:before{content:"\\f3e0"}.fa-user-tag:before{content:"\\f507"}.fa-rug:before{content:"\\e569"}.fa-earth-europe:before,.fa-globe-europe:before{content:"\\f7a2"}.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before{content:"\\f59d"}.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before{content:"\\f410"}.fa-baht-sign:before{content:"\\e0ac"}.fa-book-open:before{content:"\\f518"}.fa-book-journal-whills:before,.fa-journal-whills:before{content:"\\f66a"}.fa-handcuffs:before{content:"\\e4f8"}.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before{content:"\\f071"}.fa-database:before{content:"\\f1c0"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-bottle-droplet:before{content:"\\e4c4"}.fa-mask-face:before{content:"\\e1d7"}.fa-hill-rockslide:before{content:"\\e508"}.fa-exchange-alt:before,.fa-right-left:before{content:"\\f362"}.fa-paper-plane:before{content:"\\f1d8"}.fa-road-circle-exclamation:before{content:"\\e565"}.fa-dungeon:before{content:"\\f6d9"}.fa-align-right:before{content:"\\f038"}.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before{content:"\\f53b"}.fa-life-ring:before{content:"\\f1cd"}.fa-hands:before,.fa-sign-language:before,.fa-signing:before{content:"\\f2a7"}.fa-calendar-day:before{content:"\\f783"}.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before{content:"\\f5c5"}.fa-arrows-up-down:before,.fa-arrows-v:before{content:"\\f07d"}.fa-face-grimace:before,.fa-grimace:before{content:"\\f57f"}.fa-wheelchair-alt:before,.fa-wheelchair-move:before{content:"\\e2ce"}.fa-level-down-alt:before,.fa-turn-down:before{content:"\\f3be"}.fa-person-walking-arrow-right:before{content:"\\e552"}.fa-envelope-square:before,.fa-square-envelope:before{content:"\\f199"}.fa-dice:before{content:"\\f522"}.fa-bowling-ball:before{content:"\\f436"}.fa-brain:before{content:"\\f5dc"}.fa-band-aid:before,.fa-bandage:before{content:"\\f462"}.fa-calendar-minus:before{content:"\\f272"}.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before{content:"\\f057"}.fa-gifts:before{content:"\\f79c"}.fa-hotel:before{content:"\\f594"}.fa-earth-asia:before,.fa-globe-asia:before{content:"\\f57e"}.fa-id-card-alt:before,.fa-id-card-clip:before{content:"\\f47f"}.fa-magnifying-glass-plus:before,.fa-search-plus:before{content:"\\f00e"}.fa-thumbs-up:before{content:"\\f164"}.fa-user-clock:before{content:"\\f4fd"}.fa-allergies:before,.fa-hand-dots:before{content:"\\f461"}.fa-file-invoice:before{content:"\\f570"}.fa-window-minimize:before{content:"\\f2d1"}.fa-coffee:before,.fa-mug-saucer:before{content:"\\f0f4"}.fa-brush:before{content:"\\f55d"}.fa-mask:before{content:"\\f6fa"}.fa-magnifying-glass-minus:before,.fa-search-minus:before{content:"\\f010"}.fa-ruler-vertical:before{content:"\\f548"}.fa-user-alt:before,.fa-user-large:before{content:"\\f406"}.fa-train-tram:before{content:"\\e5b4"}.fa-user-nurse:before{content:"\\f82f"}.fa-syringe:before{content:"\\f48e"}.fa-cloud-sun:before{content:"\\f6c4"}.fa-stopwatch-20:before{content:"\\e06f"}.fa-square-full:before{content:"\\f45c"}.fa-magnet:before{content:"\\f076"}.fa-jar:before{content:"\\e516"}.fa-note-sticky:before,.fa-sticky-note:before{content:"\\f249"}.fa-bug-slash:before{content:"\\e490"}.fa-arrow-up-from-water-pump:before{content:"\\e4b6"}.fa-bone:before{content:"\\f5d7"}.fa-user-injured:before{content:"\\f728"}.fa-face-sad-tear:before,.fa-sad-tear:before{content:"\\f5b4"}.fa-plane:before{content:"\\f072"}.fa-tent-arrows-down:before{content:"\\e581"}.fa-exclamation:before{content:"\\21"}.fa-arrows-spin:before{content:"\\e4bb"}.fa-print:before{content:"\\f02f"}.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before{content:"\\e2bb"}.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before{content:"\\24"}.fa-x:before{content:"\\58"}.fa-magnifying-glass-dollar:before,.fa-search-dollar:before{content:"\\f688"}.fa-users-cog:before,.fa-users-gear:before{content:"\\f509"}.fa-person-military-pointing:before{content:"\\e54a"}.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before{content:"\\f19c"}.fa-umbrella:before{content:"\\f0e9"}.fa-trowel:before{content:"\\e589"}.fa-d:before{content:"\\44"}.fa-stapler:before{content:"\\e5af"}.fa-masks-theater:before,.fa-theater-masks:before{content:"\\f630"}.fa-kip-sign:before{content:"\\e1c4"}.fa-hand-point-left:before{content:"\\f0a5"}.fa-handshake-alt:before,.fa-handshake-simple:before{content:"\\f4c6"}.fa-fighter-jet:before,.fa-jet-fighter:before{content:"\\f0fb"}.fa-share-alt-square:before,.fa-square-share-nodes:before{content:"\\f1e1"}.fa-barcode:before{content:"\\f02a"}.fa-plus-minus:before{content:"\\e43c"}.fa-video-camera:before,.fa-video:before{content:"\\f03d"}.fa-graduation-cap:before,.fa-mortar-board:before{content:"\\f19d"}.fa-hand-holding-medical:before{content:"\\e05c"}.fa-person-circle-check:before{content:"\\e53e"}.fa-level-up-alt:before,.fa-turn-up:before{content:"\\f3bf"}
.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host,:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}.fa-brands,.fab{font-weight:400}.fa-monero:before{content:"\\f3d0"}.fa-hooli:before{content:"\\f427"}.fa-yelp:before{content:"\\f1e9"}.fa-cc-visa:before{content:"\\f1f0"}.fa-lastfm:before{content:"\\f202"}.fa-shopware:before{content:"\\f5b5"}.fa-creative-commons-nc:before{content:"\\f4e8"}.fa-aws:before{content:"\\f375"}.fa-redhat:before{content:"\\f7bc"}.fa-yoast:before{content:"\\f2b1"}.fa-cloudflare:before{content:"\\e07d"}.fa-ups:before{content:"\\f7e0"}.fa-pixiv:before{content:"\\e640"}.fa-wpexplorer:before{content:"\\f2de"}.fa-dyalog:before{content:"\\f399"}.fa-bity:before{content:"\\f37a"}.fa-stackpath:before{content:"\\f842"}.fa-buysellads:before{content:"\\f20d"}.fa-first-order:before{content:"\\f2b0"}.fa-modx:before{content:"\\f285"}.fa-guilded:before{content:"\\e07e"}.fa-vnv:before{content:"\\f40b"}.fa-js-square:before,.fa-square-js:before{content:"\\f3b9"}.fa-microsoft:before{content:"\\f3ca"}.fa-qq:before{content:"\\f1d6"}.fa-orcid:before{content:"\\f8d2"}.fa-java:before{content:"\\f4e4"}.fa-invision:before{content:"\\f7b0"}.fa-creative-commons-pd-alt:before{content:"\\f4ed"}.fa-centercode:before{content:"\\f380"}.fa-glide-g:before{content:"\\f2a6"}.fa-drupal:before{content:"\\f1a9"}.fa-hire-a-helper:before{content:"\\f3b0"}.fa-creative-commons-by:before{content:"\\f4e7"}.fa-unity:before{content:"\\e049"}.fa-whmcs:before{content:"\\f40d"}.fa-rocketchat:before{content:"\\f3e8"}.fa-vk:before{content:"\\f189"}.fa-untappd:before{content:"\\f405"}.fa-mailchimp:before{content:"\\f59e"}.fa-css3-alt:before{content:"\\f38b"}.fa-reddit-square:before,.fa-square-reddit:before{content:"\\f1a2"}.fa-vimeo-v:before{content:"\\f27d"}.fa-contao:before{content:"\\f26d"}.fa-square-font-awesome:before{content:"\\e5ad"}.fa-deskpro:before{content:"\\f38f"}.fa-brave:before{content:"\\e63c"}.fa-sistrix:before{content:"\\f3ee"}.fa-instagram-square:before,.fa-square-instagram:before{content:"\\e055"}.fa-battle-net:before{content:"\\f835"}.fa-the-red-yeti:before{content:"\\f69d"}.fa-hacker-news-square:before,.fa-square-hacker-news:before{content:"\\f3af"}.fa-edge:before{content:"\\f282"}.fa-threads:before{content:"\\e618"}.fa-napster:before{content:"\\f3d2"}.fa-snapchat-square:before,.fa-square-snapchat:before{content:"\\f2ad"}.fa-google-plus-g:before{content:"\\f0d5"}.fa-artstation:before{content:"\\f77a"}.fa-markdown:before{content:"\\f60f"}.fa-sourcetree:before{content:"\\f7d3"}.fa-google-plus:before{content:"\\f2b3"}.fa-diaspora:before{content:"\\f791"}.fa-foursquare:before{content:"\\f180"}.fa-stack-overflow:before{content:"\\f16c"}.fa-github-alt:before{content:"\\f113"}.fa-phoenix-squadron:before{content:"\\f511"}.fa-pagelines:before{content:"\\f18c"}.fa-algolia:before{content:"\\f36c"}.fa-red-river:before{content:"\\f3e3"}.fa-creative-commons-sa:before{content:"\\f4ef"}.fa-safari:before{content:"\\f267"}.fa-google:before{content:"\\f1a0"}.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before{content:"\\f35c"}.fa-atlassian:before{content:"\\f77b"}.fa-linkedin-in:before{content:"\\f0e1"}.fa-digital-ocean:before{content:"\\f391"}.fa-nimblr:before{content:"\\f5a8"}.fa-chromecast:before{content:"\\f838"}.fa-evernote:before{content:"\\f839"}.fa-hacker-news:before{content:"\\f1d4"}.fa-creative-commons-sampling:before{content:"\\f4f0"}.fa-adversal:before{content:"\\f36a"}.fa-creative-commons:before{content:"\\f25e"}.fa-watchman-monitoring:before{content:"\\e087"}.fa-fonticons:before{content:"\\f280"}.fa-weixin:before{content:"\\f1d7"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-codepen:before{content:"\\f1cb"}.fa-git-alt:before{content:"\\f841"}.fa-lyft:before{content:"\\f3c3"}.fa-rev:before{content:"\\f5b2"}.fa-windows:before{content:"\\f17a"}.fa-wizards-of-the-coast:before{content:"\\f730"}.fa-square-viadeo:before,.fa-viadeo-square:before{content:"\\f2aa"}.fa-meetup:before{content:"\\f2e0"}.fa-centos:before{content:"\\f789"}.fa-adn:before{content:"\\f170"}.fa-cloudsmith:before{content:"\\f384"}.fa-opensuse:before{content:"\\e62b"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-dribbble-square:before,.fa-square-dribbble:before{content:"\\f397"}.fa-codiepie:before{content:"\\f284"}.fa-node:before{content:"\\f419"}.fa-mix:before{content:"\\f3cb"}.fa-steam:before{content:"\\f1b6"}.fa-cc-apple-pay:before{content:"\\f416"}.fa-scribd:before{content:"\\f28a"}.fa-debian:before{content:"\\e60b"}.fa-openid:before{content:"\\f19b"}.fa-instalod:before{content:"\\e081"}.fa-expeditedssl:before{content:"\\f23e"}.fa-sellcast:before{content:"\\f2da"}.fa-square-twitter:before,.fa-twitter-square:before{content:"\\f081"}.fa-r-project:before{content:"\\f4f7"}.fa-delicious:before{content:"\\f1a5"}.fa-freebsd:before{content:"\\f3a4"}.fa-vuejs:before{content:"\\f41f"}.fa-accusoft:before{content:"\\f369"}.fa-ioxhost:before{content:"\\f208"}.fa-fonticons-fi:before{content:"\\f3a2"}.fa-app-store:before{content:"\\f36f"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-itunes-note:before{content:"\\f3b5"}.fa-golang:before{content:"\\e40f"}.fa-kickstarter:before{content:"\\f3bb"}.fa-grav:before{content:"\\f2d6"}.fa-weibo:before{content:"\\f18a"}.fa-uncharted:before{content:"\\e084"}.fa-firstdraft:before{content:"\\f3a1"}.fa-square-youtube:before,.fa-youtube-square:before{content:"\\f431"}.fa-wikipedia-w:before{content:"\\f266"}.fa-rendact:before,.fa-wpressr:before{content:"\\f3e4"}.fa-angellist:before{content:"\\f209"}.fa-galactic-republic:before{content:"\\f50c"}.fa-nfc-directional:before{content:"\\e530"}.fa-skype:before{content:"\\f17e"}.fa-joget:before{content:"\\f3b7"}.fa-fedora:before{content:"\\f798"}.fa-stripe-s:before{content:"\\f42a"}.fa-meta:before{content:"\\e49b"}.fa-laravel:before{content:"\\f3bd"}.fa-hotjar:before{content:"\\f3b1"}.fa-bluetooth-b:before{content:"\\f294"}.fa-square-letterboxd:before{content:"\\e62e"}.fa-sticker-mule:before{content:"\\f3f7"}.fa-creative-commons-zero:before{content:"\\f4f3"}.fa-hips:before{content:"\\f452"}.fa-behance:before{content:"\\f1b4"}.fa-reddit:before{content:"\\f1a1"}.fa-discord:before{content:"\\f392"}.fa-chrome:before{content:"\\f268"}.fa-app-store-ios:before{content:"\\f370"}.fa-cc-discover:before{content:"\\f1f2"}.fa-wpbeginner:before{content:"\\f297"}.fa-confluence:before{content:"\\f78d"}.fa-shoelace:before{content:"\\e60c"}.fa-mdb:before{content:"\\f8ca"}.fa-dochub:before{content:"\\f394"}.fa-accessible-icon:before{content:"\\f368"}.fa-ebay:before{content:"\\f4f4"}.fa-amazon:before{content:"\\f270"}.fa-unsplash:before{content:"\\e07c"}.fa-yarn:before{content:"\\f7e3"}.fa-square-steam:before,.fa-steam-square:before{content:"\\f1b7"}.fa-500px:before{content:"\\f26e"}.fa-square-vimeo:before,.fa-vimeo-square:before{content:"\\f194"}.fa-asymmetrik:before{content:"\\f372"}.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-gratipay:before{content:"\\f184"}.fa-apple:before{content:"\\f179"}.fa-hive:before{content:"\\e07f"}.fa-gitkraken:before{content:"\\f3a6"}.fa-keybase:before{content:"\\f4f5"}.fa-apple-pay:before{content:"\\f415"}.fa-padlet:before{content:"\\e4a0"}.fa-amazon-pay:before{content:"\\f42c"}.fa-github-square:before,.fa-square-github:before{content:"\\f092"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-fedex:before{content:"\\f797"}.fa-phoenix-framework:before{content:"\\f3dc"}.fa-shopify:before{content:"\\e057"}.fa-neos:before{content:"\\f612"}.fa-square-threads:before{content:"\\e619"}.fa-hackerrank:before{content:"\\f5f7"}.fa-researchgate:before{content:"\\f4f8"}.fa-swift:before{content:"\\f8e1"}.fa-angular:before{content:"\\f420"}.fa-speakap:before{content:"\\f3f3"}.fa-angrycreative:before{content:"\\f36e"}.fa-y-combinator:before{content:"\\f23b"}.fa-empire:before{content:"\\f1d1"}.fa-envira:before{content:"\\f299"}.fa-google-scholar:before{content:"\\e63b"}.fa-gitlab-square:before,.fa-square-gitlab:before{content:"\\e5ae"}.fa-studiovinari:before{content:"\\f3f8"}.fa-pied-piper:before{content:"\\f2ae"}.fa-wordpress:before{content:"\\f19a"}.fa-product-hunt:before{content:"\\f288"}.fa-firefox:before{content:"\\f269"}.fa-linode:before{content:"\\f2b8"}.fa-goodreads:before{content:"\\f3a8"}.fa-odnoklassniki-square:before,.fa-square-odnoklassniki:before{content:"\\f264"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-sith:before{content:"\\f512"}.fa-themeisle:before{content:"\\f2b2"}.fa-page4:before{content:"\\f3d7"}.fa-hashnode:before{content:"\\e499"}.fa-react:before{content:"\\f41b"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-squarespace:before{content:"\\f5be"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-creative-commons-share:before{content:"\\f4f2"}.fa-bitcoin:before{content:"\\f379"}.fa-keycdn:before{content:"\\f3ba"}.fa-opera:before{content:"\\f26a"}.fa-itch-io:before{content:"\\f83a"}.fa-umbraco:before{content:"\\f8e8"}.fa-galactic-senate:before{content:"\\f50d"}.fa-ubuntu:before{content:"\\f7df"}.fa-draft2digital:before{content:"\\f396"}.fa-stripe:before{content:"\\f429"}.fa-houzz:before{content:"\\f27c"}.fa-gg:before{content:"\\f260"}.fa-dhl:before{content:"\\f790"}.fa-pinterest-square:before,.fa-square-pinterest:before{content:"\\f0d3"}.fa-xing:before{content:"\\f168"}.fa-blackberry:before{content:"\\f37b"}.fa-creative-commons-pd:before{content:"\\f4ec"}.fa-playstation:before{content:"\\f3df"}.fa-quinscape:before{content:"\\f459"}.fa-less:before{content:"\\f41d"}.fa-blogger-b:before{content:"\\f37d"}.fa-opencart:before{content:"\\f23d"}.fa-vine:before{content:"\\f1ca"}.fa-signal-messenger:before{content:"\\e663"}.fa-paypal:before{content:"\\f1ed"}.fa-gitlab:before{content:"\\f296"}.fa-typo3:before{content:"\\f42b"}.fa-reddit-alien:before{content:"\\f281"}.fa-yahoo:before{content:"\\f19e"}.fa-dailymotion:before{content:"\\e052"}.fa-affiliatetheme:before{content:"\\f36b"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-bootstrap:before{content:"\\f836"}.fa-odnoklassniki:before{content:"\\f263"}.fa-nfc-symbol:before{content:"\\e531"}.fa-mintbit:before{content:"\\e62f"}.fa-ethereum:before{content:"\\f42e"}.fa-speaker-deck:before{content:"\\f83c"}.fa-creative-commons-nc-eu:before{content:"\\f4e9"}.fa-patreon:before{content:"\\f3d9"}.fa-avianex:before{content:"\\f374"}.fa-ello:before{content:"\\f5f1"}.fa-gofore:before{content:"\\f3a7"}.fa-bimobject:before{content:"\\f378"}.fa-brave-reverse:before{content:"\\e63d"}.fa-facebook-f:before{content:"\\f39e"}.fa-google-plus-square:before,.fa-square-google-plus:before{content:"\\f0d4"}.fa-mandalorian:before{content:"\\f50f"}.fa-first-order-alt:before{content:"\\f50a"}.fa-osi:before{content:"\\f41a"}.fa-google-wallet:before{content:"\\f1ee"}.fa-d-and-d-beyond:before{content:"\\f6ca"}.fa-periscope:before{content:"\\f3da"}.fa-fulcrum:before{content:"\\f50b"}.fa-cloudscale:before{content:"\\f383"}.fa-forumbee:before{content:"\\f211"}.fa-mizuni:before{content:"\\f3cc"}.fa-schlix:before{content:"\\f3ea"}.fa-square-xing:before,.fa-xing-square:before{content:"\\f169"}.fa-bandcamp:before{content:"\\f2d5"}.fa-wpforms:before{content:"\\f298"}.fa-cloudversify:before{content:"\\f385"}.fa-usps:before{content:"\\f7e1"}.fa-megaport:before{content:"\\f5a3"}.fa-magento:before{content:"\\f3c4"}.fa-spotify:before{content:"\\f1bc"}.fa-optin-monster:before{content:"\\f23c"}.fa-fly:before{content:"\\f417"}.fa-aviato:before{content:"\\f421"}.fa-itunes:before{content:"\\f3b4"}.fa-cuttlefish:before{content:"\\f38c"}.fa-blogger:before{content:"\\f37c"}.fa-flickr:before{content:"\\f16e"}.fa-viber:before{content:"\\f409"}.fa-soundcloud:before{content:"\\f1be"}.fa-digg:before{content:"\\f1a6"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-letterboxd:before{content:"\\e62d"}.fa-symfony:before{content:"\\f83d"}.fa-maxcdn:before{content:"\\f136"}.fa-etsy:before{content:"\\f2d7"}.fa-facebook-messenger:before{content:"\\f39f"}.fa-audible:before{content:"\\f373"}.fa-think-peaks:before{content:"\\f731"}.fa-bilibili:before{content:"\\e3d9"}.fa-erlang:before{content:"\\f39d"}.fa-x-twitter:before{content:"\\e61b"}.fa-cotton-bureau:before{content:"\\f89e"}.fa-dashcube:before{content:"\\f210"}.fa-42-group:before,.fa-innosoft:before{content:"\\e080"}.fa-stack-exchange:before{content:"\\f18d"}.fa-elementor:before{content:"\\f430"}.fa-pied-piper-square:before,.fa-square-pied-piper:before{content:"\\e01e"}.fa-creative-commons-nd:before{content:"\\f4eb"}.fa-palfed:before{content:"\\f3d8"}.fa-superpowers:before{content:"\\f2dd"}.fa-resolving:before{content:"\\f3e7"}.fa-xbox:before{content:"\\f412"}.fa-searchengin:before{content:"\\f3eb"}.fa-tiktok:before{content:"\\e07b"}.fa-facebook-square:before,.fa-square-facebook:before{content:"\\f082"}.fa-renren:before{content:"\\f18b"}.fa-linux:before{content:"\\f17c"}.fa-glide:before{content:"\\f2a5"}.fa-linkedin:before{content:"\\f08c"}.fa-hubspot:before{content:"\\f3b2"}.fa-deploydog:before{content:"\\f38e"}.fa-twitch:before{content:"\\f1e8"}.fa-ravelry:before{content:"\\f2d9"}.fa-mixer:before{content:"\\e056"}.fa-lastfm-square:before,.fa-square-lastfm:before{content:"\\f203"}.fa-vimeo:before{content:"\\f40a"}.fa-mendeley:before{content:"\\f7b3"}.fa-uniregistry:before{content:"\\f404"}.fa-figma:before{content:"\\f799"}.fa-creative-commons-remix:before{content:"\\f4ee"}.fa-cc-amazon-pay:before{content:"\\f42d"}.fa-dropbox:before{content:"\\f16b"}.fa-instagram:before{content:"\\f16d"}.fa-cmplid:before{content:"\\e360"}.fa-upwork:before{content:"\\e641"}.fa-facebook:before{content:"\\f09a"}.fa-gripfire:before{content:"\\f3ac"}.fa-jedi-order:before{content:"\\f50e"}.fa-uikit:before{content:"\\f403"}.fa-fort-awesome-alt:before{content:"\\f3a3"}.fa-phabricator:before{content:"\\f3db"}.fa-ussunnah:before{content:"\\f407"}.fa-earlybirds:before{content:"\\f39a"}.fa-trade-federation:before{content:"\\f513"}.fa-autoprefixer:before{content:"\\f41c"}.fa-whatsapp:before{content:"\\f232"}.fa-slideshare:before{content:"\\f1e7"}.fa-google-play:before{content:"\\f3ab"}.fa-viadeo:before{content:"\\f2a9"}.fa-line:before{content:"\\f3c0"}.fa-google-drive:before{content:"\\f3aa"}.fa-servicestack:before{content:"\\f3ec"}.fa-simplybuilt:before{content:"\\f215"}.fa-bitbucket:before{content:"\\f171"}.fa-imdb:before{content:"\\f2d8"}.fa-deezer:before{content:"\\e077"}.fa-raspberry-pi:before{content:"\\f7bb"}.fa-jira:before{content:"\\f7b1"}.fa-docker:before{content:"\\f395"}.fa-screenpal:before{content:"\\e570"}.fa-bluetooth:before{content:"\\f293"}.fa-gitter:before{content:"\\f426"}.fa-d-and-d:before{content:"\\f38d"}.fa-microblog:before{content:"\\e01a"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-gg-circle:before{content:"\\f261"}.fa-pied-piper-hat:before{content:"\\f4e5"}.fa-kickstarter-k:before{content:"\\f3bc"}.fa-yandex:before{content:"\\f413"}.fa-readme:before{content:"\\f4d5"}.fa-html5:before{content:"\\f13b"}.fa-sellsy:before{content:"\\f213"}.fa-sass:before{content:"\\f41e"}.fa-wirsindhandwerk:before,.fa-wsh:before{content:"\\e2d0"}.fa-buromobelexperte:before{content:"\\f37f"}.fa-salesforce:before{content:"\\f83b"}.fa-octopus-deploy:before{content:"\\e082"}.fa-medapps:before{content:"\\f3c6"}.fa-ns8:before{content:"\\f3d5"}.fa-pinterest-p:before{content:"\\f231"}.fa-apper:before{content:"\\f371"}.fa-fort-awesome:before{content:"\\f286"}.fa-waze:before{content:"\\f83f"}.fa-cc-jcb:before{content:"\\f24b"}.fa-snapchat-ghost:before,.fa-snapchat:before{content:"\\f2ab"}.fa-fantasy-flight-games:before{content:"\\f6dc"}.fa-rust:before{content:"\\e07a"}.fa-wix:before{content:"\\f5cf"}.fa-behance-square:before,.fa-square-behance:before{content:"\\f1b5"}.fa-supple:before{content:"\\f3f9"}.fa-webflow:before{content:"\\e65c"}.fa-rebel:before{content:"\\f1d0"}.fa-css3:before{content:"\\f13c"}.fa-staylinked:before{content:"\\f3f5"}.fa-kaggle:before{content:"\\f5fa"}.fa-space-awesome:before{content:"\\e5ac"}.fa-deviantart:before{content:"\\f1bd"}.fa-cpanel:before{content:"\\f388"}.fa-goodreads-g:before{content:"\\f3a9"}.fa-git-square:before,.fa-square-git:before{content:"\\f1d2"}.fa-square-tumblr:before,.fa-tumblr-square:before{content:"\\f174"}.fa-trello:before{content:"\\f181"}.fa-creative-commons-nc-jp:before{content:"\\f4ea"}.fa-get-pocket:before{content:"\\f265"}.fa-perbyte:before{content:"\\e083"}.fa-grunt:before{content:"\\f3ad"}.fa-weebly:before{content:"\\f5cc"}.fa-connectdevelop:before{content:"\\f20e"}.fa-leanpub:before{content:"\\f212"}.fa-black-tie:before{content:"\\f27e"}.fa-themeco:before{content:"\\f5c6"}.fa-python:before{content:"\\f3e2"}.fa-android:before{content:"\\f17b"}.fa-bots:before{content:"\\e340"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-hornbill:before{content:"\\f592"}.fa-js:before{content:"\\f3b8"}.fa-ideal:before{content:"\\e013"}.fa-git:before{content:"\\f1d3"}.fa-dev:before{content:"\\f6cc"}.fa-sketch:before{content:"\\f7c6"}.fa-yandex-international:before{content:"\\f414"}.fa-cc-amex:before{content:"\\f1f3"}.fa-uber:before{content:"\\f402"}.fa-github:before{content:"\\f09b"}.fa-php:before{content:"\\f457"}.fa-alipay:before{content:"\\f642"}.fa-youtube:before{content:"\\f167"}.fa-skyatlas:before{content:"\\f216"}.fa-firefox-browser:before{content:"\\e007"}.fa-replyd:before{content:"\\f3e6"}.fa-suse:before{content:"\\f7d6"}.fa-jenkins:before{content:"\\f3b6"}.fa-twitter:before{content:"\\f099"}.fa-rockrms:before{content:"\\f3e9"}.fa-pinterest:before{content:"\\f0d2"}.fa-buffer:before{content:"\\f837"}.fa-npm:before{content:"\\f3d4"}.fa-yammer:before{content:"\\f840"}.fa-btc:before{content:"\\f15a"}.fa-dribbble:before{content:"\\f17d"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-internet-explorer:before{content:"\\f26b"}.fa-stubber:before{content:"\\e5c7"}.fa-telegram-plane:before,.fa-telegram:before{content:"\\f2c6"}.fa-old-republic:before{content:"\\f510"}.fa-odysee:before{content:"\\e5c6"}.fa-square-whatsapp:before,.fa-whatsapp-square:before{content:"\\f40c"}.fa-node-js:before{content:"\\f3d3"}.fa-edge-legacy:before{content:"\\e078"}.fa-slack-hash:before,.fa-slack:before{content:"\\f198"}.fa-medrt:before{content:"\\f3c8"}.fa-usb:before{content:"\\f287"}.fa-tumblr:before{content:"\\f173"}.fa-vaadin:before{content:"\\f408"}.fa-quora:before{content:"\\f2c4"}.fa-square-x-twitter:before{content:"\\e61a"}.fa-reacteurope:before{content:"\\f75d"}.fa-medium-m:before,.fa-medium:before{content:"\\f23a"}.fa-amilia:before{content:"\\f36d"}.fa-mixcloud:before{content:"\\f289"}.fa-flipboard:before{content:"\\f44d"}.fa-viacoin:before{content:"\\f237"}.fa-critical-role:before{content:"\\f6c9"}.fa-sitrox:before{content:"\\e44a"}.fa-discourse:before{content:"\\f393"}.fa-joomla:before{content:"\\f1aa"}.fa-mastodon:before{content:"\\f4f6"}.fa-airbnb:before{content:"\\f834"}.fa-wolf-pack-battalion:before{content:"\\f514"}.fa-buy-n-large:before{content:"\\f8a6"}.fa-gulp:before{content:"\\f3ae"}.fa-creative-commons-sampling-plus:before{content:"\\f4f1"}.fa-strava:before{content:"\\f428"}.fa-ember:before{content:"\\f423"}.fa-canadian-maple-leaf:before{content:"\\f785"}.fa-teamspeak:before{content:"\\f4f9"}.fa-pushed:before{content:"\\f3e1"}.fa-wordpress-simple:before{content:"\\f411"}.fa-nutritionix:before{content:"\\f3d6"}.fa-wodu:before{content:"\\e088"}.fa-google-pay:before{content:"\\e079"}.fa-intercom:before{content:"\\f7af"}.fa-zhihu:before{content:"\\f63f"}.fa-korvue:before{content:"\\f42f"}.fa-pix:before{content:"\\e43a"}.fa-steam-symbol:before{content:"\\f3f6"}:host,:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}.fa-regular,.far{font-weight:400}:host,:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}.fa-solid,.fas{font-weight:900}@font-face{font-family:"Font Awesome 5 Brands";font-display:block;font-weight:400;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:900;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:400;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype");unicode-range:u+f003,u+f006,u+f014,u+f016-f017,u+f01a-f01b,u+f01d,u+f022,u+f03e,u+f044,u+f046,u+f05c-f05d,u+f06e,u+f070,u+f087-f088,u+f08a,u+f094,u+f096-f097,u+f09d,u+f0a0,u+f0a2,u+f0a4-f0a7,u+f0c5,u+f0c7,u+f0e5-f0e6,u+f0eb,u+f0f6-f0f8,u+f10c,u+f114-f115,u+f118-f11a,u+f11c-f11d,u+f133,u+f147,u+f14e,u+f150-f152,u+f185-f186,u+f18e,u+f190-f192,u+f196,u+f1c1-f1c9,u+f1d9,u+f1db,u+f1e3,u+f1ea,u+f1f7,u+f1f9,u+f20a,u+f247-f248,u+f24a,u+f24d,u+f255-f25b,u+f25d,u+f271-f274,u+f278,u+f27b,u+f28c,u+f28e,u+f29c,u+f2b5,u+f2b7,u+f2ba,u+f2bc,u+f2be,u+f2c0-f2c1,u+f2c3,u+f2d0,u+f2d2,u+f2d4,u+f2dc}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-v4compatibility.woff2) format("woff2"),url(../webfonts/fa-v4compatibility.ttf) format("truetype");unicode-range:u+f041,u+f047,u+f065-f066,u+f07d-f07e,u+f080,u+f08b,u+f08e,u+f090,u+f09a,u+f0ac,u+f0ae,u+f0b2,u+f0d0,u+f0d6,u+f0e4,u+f0ec,u+f10a-f10b,u+f123,u+f13e,u+f148-f149,u+f14c,u+f156,u+f15e,u+f160-f161,u+f163,u+f175-f178,u+f195,u+f1f8,u+f219,u+f27a}</style><style data-request="v38-pay-gap">body>section:first-of-type:not(.closing),body>.page-header:first-child {padding-top:0;}</style><style data-request="v39-plain-results">
.danta-plain-box {background:#faf8f5;border-radius:12px;padding:24px;border:0;box-shadow:none;}
.danta-plain-box .tg-text {color:#35282e;font-weight:400;letter-spacing:inherit;}
.danta-plain-heading {margin:0 0 20px;}
.danta-plain-row {margin:0 0 8px;overflow-wrap:anywhere;}
.danta-plain-row:last-child {margin-bottom:0;}
@media(max-width:650px) {.danta-plain-box {padding:20px;}}
</style><style data-request="v40-detail-spacing">body {padding-top:30px;}</style><style>@font-face{font-family:'Pretendard Variable';font-style:normal;font-weight:45 920;font-display:swap;src:url(/renewal-assets/9599f12fd42fc0bce1cd50b47a0c022e108d7aa64dd0d1bb0ed44f3282d900b4.woff2) format('woff2');}</style></head>
<body>
<!-- DANTA RESULTS: 결제 바로 아래 -->
<section data-danta-results-section="text"><div class="container"><div class="danta-plain-box" data-danta-results="text"><p class="tg-text danta-plain-heading">* 단타 ETF반 당일 매매결과: 모든 유료회원이 보고 있기 때문에 한치의 거짓 없음</p>
<div class="tg-text danta-plain-row" data-result-date="10월8일">43일차(10월8일) 12전 12승</div>
<div class="tg-text danta-plain-row" data-result-date="10월7일">42일차(10월7일) 2전 1승 1패 (일간기준 1.4% 다섯번째 손절)</div>
<div class="tg-text danta-plain-row" data-result-date="10월6일">41일차(10월6일) 7전 7승</div>
<div class="tg-text danta-plain-row" data-result-date="10월2일">40일차(10월2일) 4전 4승</div>
<div class="tg-text danta-plain-row" data-result-date="10월1일">39일차(10월1일) 8전 7승 1패</div>
<div class="tg-text danta-plain-row" data-result-date="9월30일">38일차(9월30일) 5전 5승</div>
<div class="tg-text danta-plain-row" data-result-date="9월29일">37일차(9월29일) 3전 2승 1패 (일간기준 0.2% 네번째 손절)</div>
<div class="tg-text danta-plain-row" data-result-date="9월28일">36일차(9월28일) 6전 4승 2패</div>
<div class="tg-text danta-plain-row" data-result-date="9월23일">35일차(9월23일) 4전 4승</div>
<div class="tg-text danta-plain-row" data-result-date="9월22일">36일차(9월22일) 6전 4승 2패 (일간기준 0.7% 세번째 손절)</div>
<div class="tg-text danta-plain-row" data-result-date="9월21일">35일차(9월21일) 5전 5승</div>
<div class="tg-text danta-plain-row" data-result-date="9월18일">34일차(9월18일) 3전 3승</div>
<div class="tg-text danta-plain-row" data-result-date="9월17일">33일차(9월17일) 5전 3승 2패 (일간기준 0.1% 두번째 손절)</div>
<div class="tg-text danta-plain-row" data-result-date="9월16일">32일차(9월16일) 4전 4승</div>
<div class="tg-text danta-plain-row" data-result-date="9월15일">32일차(9월15일) 6전 6승</div>
<div class="tg-text danta-plain-row" data-result-date="9월14일">31일차(9월14일) 8전 7승 1패</div>
<div class="tg-text danta-plain-row" data-result-date="9월11일">30일차(9월11일) 3전 2승 1패</div>
<div class="tg-text danta-plain-row" data-result-date="9월10일">29일차(9월10일) 4전 4승</div>
<div class="tg-text danta-plain-row" data-result-date="9월9일">28일차(9월9일) 11전 11승</div>
<div class="tg-text danta-plain-row" data-result-date="9월8일">27일차(9월8일) 12전 11승 1패</div>
<div class="tg-text danta-plain-row" data-result-date="9월7일">26일차(9월7일) 7전 5승 2패</div>
<div class="tg-text danta-plain-row" data-result-date="9월4일">25일차(9월4일) 9전 9승</div>
<div class="tg-text danta-plain-row" data-result-date="9월3일">24일차(9월3일) 12전 9승 3패 (일간기준 0.5% 첫손절)</div>
<div class="tg-text danta-plain-row" data-result-date="9월2일">23일차(9월2일) 10전 8승 2패</div>
<div class="tg-text danta-plain-row" data-result-date="9월1일">22일차(9월1일) 11전 11승</div>
<div class="tg-text danta-plain-row" data-result-date="8월31일">21일차(8월31일) 6전 6승</div>
<div class="tg-text danta-plain-row" data-result-date="8월28일">20일차(8월28일) 7전 6승 1패</div>
<div class="tg-text danta-plain-row" data-result-date="8월27일">19일차(8월27일) 8전 8승</div>
<div class="tg-text danta-plain-row" data-result-date="8월26일">18일차(8월26일) 10전 10승</div>
</div></div></section>
<!-- FEATURES -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">핵심을 이루는<br/><span>여섯 가지 원칙</span></h2>
<p class="section-desc">
                불필요한 요소를 배제하고<br/>
                안전과 효율에 초점을 둔 구조입니다.
            </p>
<div class="feature-grid">
<div class="feature-card">
<div class="num">01</div>
<h4>단일 종목 집중</h4>
<p>포트폴리오를 단 한 종목으로 압축합니다. 리딩에 온전히 집중하며 명확하게 대응하는 방식입니다.</p>
</div>
<div class="feature-card">
<div class="num">02</div>
<h4>양방향 대응 구조</h4>
<p>지수의 상승과 하락, 반도체와 코스닥의 흐름에 구애받지 않고 공략이 가능한 체계를 유지합니다.</p>
</div>
<div class="feature-card">
<div class="num">03</div>
<h4>당일 청산 원칙</h4>
<p>오버나잇을 지양합니다. 미국 시장의 급변에 흔들리지 않는, 당일 단타로 마무리하는 안정적인 방식입니다.</p>
</div>
<div class="feature-card">
<div class="num">04</div>
<h4>세금 부담 최소화</h4>
<p>농특세·증권거래세 0.2%가 발생하지 않는 ETF의 특성을 활용해, 초단타에 최적화된 매매를 진행합니다.</p>
</div>
<div class="feature-card">
<div class="num">05</div>
<h4>4분할 진입 전략</h4>
<p>1차 매수 시 원금의 25%만 투입합니다. 대부분의 경우 1차 매수만으로 익절이 이루어지는 신중한 접근입니다.</p>
</div>
<div class="feature-card">
<div class="num">06</div>
<h4>2분할 익절 체계</h4>
<p>일부 익절 후 나머지를 짧게 홀딩하는 구조로, 수익을 길게 끌지 않고 명확하게 마무리합니다.</p>
</div>
</div>
</div>
</section>
<!-- ETF 종목 -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">지수 ETF 6종목 중<br/><span>선별 운용</span></h2>
<p class="section-desc">
                기본 예탁금 1,000만 원.<br/>
                접근성이 높아 주로 이 종목군을 중심으로 운용합니다.
            </p>
<div class="etf-box">
<ul class="etf-list">
<li>
<span class="code">494310</span>
<span>KODEX 반도체 레버리지 — 반도체 지수 상승 전망 시</span>
</li>
<li>
<span class="code">122630</span>
<span>KODEX 레버리지 — 거래소 지수 상승 전망 시</span>
</li>
<li>
<span class="code">233740</span>
<span>코스닥150 레버리지 — 코스닥 지수 상승 전망 시</span>
</li>
<li>
<span class="code">252670</span>
<span>KODEX 200선물인버스2배 — 거래소 지수 하락 전망 시</span>
</li>
<li>
<span class="code">251340</span>
<span>KODEX 코스닥150선물인버스 — 코스닥 지수 하락 전망 시</span>
</li>
<li>
<span class="code">114800</span>
<span>KODEX 인버스 — 거래소 지수 하락 전망 시</span>
</li>
</ul>
<p class="etf-note">
                    ※ 삼전닉스 관련 ETF 4종목은 예탁금 3,000만 원 및 예수금 D+2 이슈로 제한적으로만 운용합니다.
                </p>
</div>
</div>
</section>
<!-- PROFILE -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">검증된<br/><span>경험과 이력</span></h2>
<div class="profile-wrap">
<h3>골드마스터</h3>
<span class="role">제이앤비주식사관학교 (윌클럽) 대표</span>
<ul class="history">
<li><i class="fa-solid fa-check"></i> <span><strong>현) 제이앤비주식사관학교 (윌클럽) 대표</strong></span></li>
<li><i class="fa-solid fa-check"></i> <span><strong>현) M&amp;A 지도자 자격 보유</strong></span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 증권사관학교 전임강사</span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 한밤의 증시카페」 고정 출연</span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「생방송 개미천국」 고정 출연</span></li>
<li><i class="fa-solid fa-check"></i> <span>전) 한국경제TV 「일요특급 증시전망대」, 「굿모닝 투자의 아침」 등 다수 출연</span></li>
<li><i class="fa-solid fa-check"></i> <span>저서 「증권사관학교 X파일」 집필</span></li>
</ul>
</div>
</div>
</section>
<!-- CLOSING -->
<section class="closing">
<h2>복잡한 선택 대신,<br/>명확한 한 종목.</h2>
<p>복잡한 시장의 흐름 속에서 확실한 결과로 마무리 합니다.</p>
<button class="cta-btn" id="joinBtn" type="button">
            ETF단타반 가입하기
        </button>
</section>

<script>
(() => {
 let previous=0, pending=false;
 function resize(){if(pending)return;pending=true;setTimeout(()=>{pending=false;const height=Math.ceil(document.body.getBoundingClientRect().height);if(Math.abs(height-previous)>2){previous=height;window.parent.postMessage({type:'WILLCLUB_DETAIL_HEIGHT',height},'*');}});}
 new ResizeObserver(resize).observe(document.body);
 window.addEventListener('load',resize);document.fonts.ready.then(resize);resize();
 window.addEventListener('message',event=>{if(event.source===window.parent && event.data?.type==='WILLCLUB_REQUEST_HEIGHT'){previous=0;resize();}});
 const join=document.getElementById('joinBtn');if(join)join.addEventListener('click',()=>window.parent.postMessage({type:'WILLCLUB_CLICK_PAY'},'*'));
})();
<\/script></body>
</html>`,"7b415e2e-bc16-4e29-be7f-5bf11f446292":`<!DOCTYPE html>

<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>골드텐버거반이란? | 골드마스터</title>


<style>
        :root {
            --bg: #f4f1ed;
            --card: #ffffff;
            --accent: #912c2f;
            --accent-light: #912c2f;
            --text: #1c1b19;
            --text-sub: #5c574f;
            --text-light: #8a847a;
            --border: #ebe6df;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.03em;
        }
        body {
            background: var(--bg);
            color: var(--text);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 820px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HEADER ========== */
        .page-header {
            text-align: center;
            padding: 88px 28px 64px;
        }
        .page-header .label {
            display: inline-block;
            background: linear-gradient(135deg, #8a1a1a, #6d0000);
            color: #ffffff;
            font-size: 0.88rem;
            font-weight: 700;
            padding: 10px 24px;
            border-radius: 50px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 28px;
            box-shadow: 0 4px 14px rgba(109, 0, 0, 0.2);
        }
        .page-header h1 {
            font-size: clamp(2.35rem, 5.2vw, 3.2rem);
            font-weight: 800;
            line-height: 1.35;
            word-break: keep-all;
        }
        .page-header h1 span {
            color: var(--accent);
        }
        /* ========== SECTION ========== */
        section {
            padding: 0 0 80px;
        }
        .section-title {
            font-size: clamp(1.9rem, 4.2vw, 2.4rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 36px;
            word-break: keep-all;
            line-height: 1.4;
        }
        .section-title span {
            color: var(--accent);
        }
        /* ========== CONCEPT CARDS ========== */
        .concept-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 72px;
        }
        .concept-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 34px 32px;
            display: flex;
            align-items: flex-start;
            gap: 22px;
            transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .concept-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 32px rgba(109, 0, 0, 0.06);
            border-color: #e5d9d4;
        }
        .concept-card .icon {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            background: #f7f0ec;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.35rem;
            color: var(--accent);
        }
        .concept-card .content h3 {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--text);
            word-break: keep-all;
        }
        .concept-card .content p {
            font-size: 1.15rem;
            color: var(--text-sub);
            line-height: 1.75;
            word-break: keep-all;
        }
        .concept-card .content .sub {
            display: block;
            margin-top: 8px;
            font-size: 1.08rem;
            color: var(--text-light);
        }
        /* ========== TARGET ========== */
        .target-box {
            background: #3d1a1a;
            border-radius: 18px;
            padding: 42px 38px;
            margin-bottom: 72px;
            color: #fff;
        }
        .target-box h3 {
            font-size: 1.45rem;
            font-weight: 700;
            margin-bottom: 28px;
            line-height: 1.5;
            word-break: keep-all;
            text-align: center;
        }
        .target-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .target-list li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 1.14rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.92);
            word-break: keep-all;
        }
        .target-list li::before {
            content: '';
            flex-shrink: 0;
            width: 6px;
            height: 6px;
            background: #e8b4b4;
            border-radius: 50%;
            margin-top: 11px;
        }
        /* ========== SUMMARY ========== */
        .summary-grid {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .summary-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 28px 30px;
            text-align: center;
            transition: all 0.35s ease;
        }
        .summary-card:hover {
            border-color: #e0d0c8;
            box-shadow: 0 10px 28px rgba(109, 0, 0, 0.05);
        }
        .summary-card h4 {
            font-size: 1.28rem;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 10px;
            word-break: keep-all;
        }
        .summary-card p {
            font-size: 1.1rem;
            color: var(--text-sub);
            line-height: 1.65;
            word-break: keep-all;
        }
        /* ========== CLOSING + CTA ========== */
        .closing {
            text-align: center;
            padding: 72px 28px 100px;
            border-top: 1px solid var(--border);
            width: 100%;
        }
        .closing h2 {
            font-size: clamp(1.95rem, 4.5vw, 2.6rem);
            font-weight: 750;
            line-height: 1.45;
            margin-bottom: 18px;
            word-break: keep-all;
            color: var(--text);
        }
        .closing p {
            font-size: 1.18rem;
            color: var(--text-sub);
            word-break: keep-all;
            margin-bottom: 40px;
            line-height: 1.7;
        }
        .cta-btn {
            display: inline-block;
            background: var(--accent);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(109, 0, 0, 0.22);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(109, 0, 0, 0.32);
            background: #8a0000;
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 640px) {
            .page-header { padding: 64px 20px 40px; }
            .page-header h1 { font-size: 2.15rem; }
            .section-title { font-size: 1.85rem; }
            .concept-card {
                flex-direction: column;
                gap: 14px;
                padding: 28px 24px;
            }
            .concept-card .content h3 { font-size: 1.22rem; }
            .concept-card .content p { font-size: 1.1rem; }
            .target-box { padding: 34px 24px; }
            .target-box h3 { font-size: 1.3rem; }
            .target-list li { font-size: 1.1rem; }
            .summary-card { padding: 24px 22px; }
            .summary-card h4 { font-size: 1.2rem; }
            .summary-card p { font-size: 1.06rem; }
            .closing { padding: 56px 20px 80px; }
            .closing h2 { font-size: 1.9rem; }
            .closing p { font-size: 1.12rem; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
        }
    </style>
<style>
body {font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,sans-serif; background:#f4f1ed; color:#35282e;}
p, li, .intro, .description, .subtitle, .desc, .card-desc, .body-text {font-size:calc(16px + 2pt) !important;}
h1 {font-size:clamp(30px,4vw,48px) !important; letter-spacing:-1px;}
h2 {font-size:calc(28px + 2pt) !important; color:#50343e;}
h3 {font-size:calc(21px + 2pt) !important;}
button {font-family:inherit;}
.cta-btn {background:#912c2f !important; color:#fff !important; border-radius:7px !important; font-size:calc(17px + 2pt) !important;}
.fade-in {opacity:1 !important; transform:none !important;}
:focus-visible {outline:2px solid #912c2f; outline-offset:4px;}
@media(max-width:650px) {p,li,.intro,.description,.subtitle,.desc,.card-desc,.body-text {font-size:calc(15px + 2pt) !important;} h2 {font-size:calc(24px + 2pt) !important;} h3 {font-size:calc(19px + 2pt) !important;}}
@media(prefers-reduced-motion:reduce) {* {animation:none !important; transition:none !important; scroll-behavior:auto !important;}}
</style><link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css" rel="stylesheet"/><style>/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:"Font Awesome 6 Free"}.fa-brands,.fab{font-family:"Font Awesome 6 Brands"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index,auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse,#fff)}

.fa-0:before{content:"\\30"}.fa-1:before{content:"\\31"}.fa-2:before{content:"\\32"}.fa-3:before{content:"\\33"}.fa-4:before{content:"\\34"}.fa-5:before{content:"\\35"}.fa-6:before{content:"\\36"}.fa-7:before{content:"\\37"}.fa-8:before{content:"\\38"}.fa-9:before{content:"\\39"}.fa-fill-drip:before{content:"\\f576"}.fa-arrows-to-circle:before{content:"\\e4bd"}.fa-chevron-circle-right:before,.fa-circle-chevron-right:before{content:"\\f138"}.fa-at:before{content:"\\40"}.fa-trash-alt:before,.fa-trash-can:before{content:"\\f2ed"}.fa-text-height:before{content:"\\f034"}.fa-user-times:before,.fa-user-xmark:before{content:"\\f235"}.fa-stethoscope:before{content:"\\f0f1"}.fa-comment-alt:before,.fa-message:before{content:"\\f27a"}.fa-info:before{content:"\\f129"}.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before{content:"\\f422"}.fa-explosion:before{content:"\\e4e9"}.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before{content:"\\f15c"}.fa-wave-square:before{content:"\\f83e"}.fa-ring:before{content:"\\f70b"}.fa-building-un:before{content:"\\e4d9"}.fa-dice-three:before{content:"\\f527"}.fa-calendar-alt:before,.fa-calendar-days:before{content:"\\f073"}.fa-anchor-circle-check:before{content:"\\e4aa"}.fa-building-circle-arrow-right:before{content:"\\e4d1"}.fa-volleyball-ball:before,.fa-volleyball:before{content:"\\f45f"}.fa-arrows-up-to-line:before{content:"\\e4c2"}.fa-sort-desc:before,.fa-sort-down:before{content:"\\f0dd"}.fa-circle-minus:before,.fa-minus-circle:before{content:"\\f056"}.fa-door-open:before{content:"\\f52b"}.fa-right-from-bracket:before,.fa-sign-out-alt:before{content:"\\f2f5"}.fa-atom:before{content:"\\f5d2"}.fa-soap:before{content:"\\e06e"}.fa-heart-music-camera-bolt:before,.fa-icons:before{content:"\\f86d"}.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before{content:"\\f539"}.fa-bridge-circle-check:before{content:"\\e4c9"}.fa-pump-medical:before{content:"\\e06a"}.fa-fingerprint:before{content:"\\f577"}.fa-hand-point-right:before{content:"\\f0a4"}.fa-magnifying-glass-location:before,.fa-search-location:before{content:"\\f689"}.fa-forward-step:before,.fa-step-forward:before{content:"\\f051"}.fa-face-smile-beam:before,.fa-smile-beam:before{content:"\\f5b8"}.fa-flag-checkered:before{content:"\\f11e"}.fa-football-ball:before,.fa-football:before{content:"\\f44e"}.fa-school-circle-exclamation:before{content:"\\e56c"}.fa-crop:before{content:"\\f125"}.fa-angle-double-down:before,.fa-angles-down:before{content:"\\f103"}.fa-users-rectangle:before{content:"\\e594"}.fa-people-roof:before{content:"\\e537"}.fa-people-line:before{content:"\\e534"}.fa-beer-mug-empty:before,.fa-beer:before{content:"\\f0fc"}.fa-diagram-predecessor:before{content:"\\e477"}.fa-arrow-up-long:before,.fa-long-arrow-up:before{content:"\\f176"}.fa-burn:before,.fa-fire-flame-simple:before{content:"\\f46a"}.fa-male:before,.fa-person:before{content:"\\f183"}.fa-laptop:before{content:"\\f109"}.fa-file-csv:before{content:"\\f6dd"}.fa-menorah:before{content:"\\f676"}.fa-truck-plane:before{content:"\\e58f"}.fa-record-vinyl:before{content:"\\f8d9"}.fa-face-grin-stars:before,.fa-grin-stars:before{content:"\\f587"}.fa-bong:before{content:"\\f55c"}.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before{content:"\\f67b"}.fa-arrow-down-up-across-line:before{content:"\\e4af"}.fa-spoon:before,.fa-utensil-spoon:before{content:"\\f2e5"}.fa-jar-wheat:before{content:"\\e517"}.fa-envelopes-bulk:before,.fa-mail-bulk:before{content:"\\f674"}.fa-file-circle-exclamation:before{content:"\\e4eb"}.fa-circle-h:before,.fa-hospital-symbol:before{content:"\\f47e"}.fa-pager:before{content:"\\f815"}.fa-address-book:before,.fa-contact-book:before{content:"\\f2b9"}.fa-strikethrough:before{content:"\\f0cc"}.fa-k:before{content:"\\4b"}.fa-landmark-flag:before{content:"\\e51c"}.fa-pencil-alt:before,.fa-pencil:before{content:"\\f303"}.fa-backward:before{content:"\\f04a"}.fa-caret-right:before{content:"\\f0da"}.fa-comments:before{content:"\\f086"}.fa-file-clipboard:before,.fa-paste:before{content:"\\f0ea"}.fa-code-pull-request:before{content:"\\e13c"}.fa-clipboard-list:before{content:"\\f46d"}.fa-truck-loading:before,.fa-truck-ramp-box:before{content:"\\f4de"}.fa-user-check:before{content:"\\f4fc"}.fa-vial-virus:before{content:"\\e597"}.fa-sheet-plastic:before{content:"\\e571"}.fa-blog:before{content:"\\f781"}.fa-user-ninja:before{content:"\\f504"}.fa-person-arrow-up-from-line:before{content:"\\e539"}.fa-scroll-torah:before,.fa-torah:before{content:"\\f6a0"}.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before{content:"\\f458"}.fa-toggle-off:before{content:"\\f204"}.fa-archive:before,.fa-box-archive:before{content:"\\f187"}.fa-person-drowning:before{content:"\\e545"}.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before{content:"\\f886"}.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before{content:"\\f58a"}.fa-spray-can:before{content:"\\f5bd"}.fa-truck-monster:before{content:"\\f63b"}.fa-w:before{content:"\\57"}.fa-earth-africa:before,.fa-globe-africa:before{content:"\\f57c"}.fa-rainbow:before{content:"\\f75b"}.fa-circle-notch:before{content:"\\f1ce"}.fa-tablet-alt:before,.fa-tablet-screen-button:before{content:"\\f3fa"}.fa-paw:before{content:"\\f1b0"}.fa-cloud:before{content:"\\f0c2"}.fa-trowel-bricks:before{content:"\\e58a"}.fa-face-flushed:before,.fa-flushed:before{content:"\\f579"}.fa-hospital-user:before{content:"\\f80d"}.fa-tent-arrow-left-right:before{content:"\\e57f"}.fa-gavel:before,.fa-legal:before{content:"\\f0e3"}.fa-binoculars:before{content:"\\f1e5"}.fa-microphone-slash:before{content:"\\f131"}.fa-box-tissue:before{content:"\\e05b"}.fa-motorcycle:before{content:"\\f21c"}.fa-bell-concierge:before,.fa-concierge-bell:before{content:"\\f562"}.fa-pen-ruler:before,.fa-pencil-ruler:before{content:"\\f5ae"}.fa-people-arrows-left-right:before,.fa-people-arrows:before{content:"\\e068"}.fa-mars-and-venus-burst:before{content:"\\e523"}.fa-caret-square-right:before,.fa-square-caret-right:before{content:"\\f152"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-sun-plant-wilt:before{content:"\\e57a"}.fa-toilets-portable:before{content:"\\e584"}.fa-hockey-puck:before{content:"\\f453"}.fa-table:before{content:"\\f0ce"}.fa-magnifying-glass-arrow-right:before{content:"\\e521"}.fa-digital-tachograph:before,.fa-tachograph-digital:before{content:"\\f566"}.fa-users-slash:before{content:"\\e073"}.fa-clover:before{content:"\\e139"}.fa-mail-reply:before,.fa-reply:before{content:"\\f3e5"}.fa-star-and-crescent:before{content:"\\f699"}.fa-house-fire:before{content:"\\e50c"}.fa-minus-square:before,.fa-square-minus:before{content:"\\f146"}.fa-helicopter:before{content:"\\f533"}.fa-compass:before{content:"\\f14e"}.fa-caret-square-down:before,.fa-square-caret-down:before{content:"\\f150"}.fa-file-circle-question:before{content:"\\e4ef"}.fa-laptop-code:before{content:"\\f5fc"}.fa-swatchbook:before{content:"\\f5c3"}.fa-prescription-bottle:before{content:"\\f485"}.fa-bars:before,.fa-navicon:before{content:"\\f0c9"}.fa-people-group:before{content:"\\e533"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-heart-broken:before,.fa-heart-crack:before{content:"\\f7a9"}.fa-external-link-square-alt:before,.fa-square-up-right:before{content:"\\f360"}.fa-face-kiss-beam:before,.fa-kiss-beam:before{content:"\\f597"}.fa-film:before{content:"\\f008"}.fa-ruler-horizontal:before{content:"\\f547"}.fa-people-robbery:before{content:"\\e536"}.fa-lightbulb:before{content:"\\f0eb"}.fa-caret-left:before{content:"\\f0d9"}.fa-circle-exclamation:before,.fa-exclamation-circle:before{content:"\\f06a"}.fa-school-circle-xmark:before{content:"\\e56d"}.fa-arrow-right-from-bracket:before,.fa-sign-out:before{content:"\\f08b"}.fa-chevron-circle-down:before,.fa-circle-chevron-down:before{content:"\\f13a"}.fa-unlock-alt:before,.fa-unlock-keyhole:before{content:"\\f13e"}.fa-cloud-showers-heavy:before{content:"\\f740"}.fa-headphones-alt:before,.fa-headphones-simple:before{content:"\\f58f"}.fa-sitemap:before{content:"\\f0e8"}.fa-circle-dollar-to-slot:before,.fa-donate:before{content:"\\f4b9"}.fa-memory:before{content:"\\f538"}.fa-road-spikes:before{content:"\\e568"}.fa-fire-burner:before{content:"\\e4f1"}.fa-flag:before{content:"\\f024"}.fa-hanukiah:before{content:"\\f6e6"}.fa-feather:before{content:"\\f52d"}.fa-volume-down:before,.fa-volume-low:before{content:"\\f027"}.fa-comment-slash:before{content:"\\f4b3"}.fa-cloud-sun-rain:before{content:"\\f743"}.fa-compress:before{content:"\\f066"}.fa-wheat-alt:before,.fa-wheat-awn:before{content:"\\e2cd"}.fa-ankh:before{content:"\\f644"}.fa-hands-holding-child:before{content:"\\e4fa"}.fa-asterisk:before{content:"\\2a"}.fa-check-square:before,.fa-square-check:before{content:"\\f14a"}.fa-peseta-sign:before{content:"\\e221"}.fa-header:before,.fa-heading:before{content:"\\f1dc"}.fa-ghost:before{content:"\\f6e2"}.fa-list-squares:before,.fa-list:before{content:"\\f03a"}.fa-phone-square-alt:before,.fa-square-phone-flip:before{content:"\\f87b"}.fa-cart-plus:before{content:"\\f217"}.fa-gamepad:before{content:"\\f11b"}.fa-circle-dot:before,.fa-dot-circle:before{content:"\\f192"}.fa-dizzy:before,.fa-face-dizzy:before{content:"\\f567"}.fa-egg:before{content:"\\f7fb"}.fa-house-medical-circle-xmark:before{content:"\\e513"}.fa-campground:before{content:"\\f6bb"}.fa-folder-plus:before{content:"\\f65e"}.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before{content:"\\f1e3"}.fa-paint-brush:before,.fa-paintbrush:before{content:"\\f1fc"}.fa-lock:before{content:"\\f023"}.fa-gas-pump:before{content:"\\f52f"}.fa-hot-tub-person:before,.fa-hot-tub:before{content:"\\f593"}.fa-map-location:before,.fa-map-marked:before{content:"\\f59f"}.fa-house-flood-water:before{content:"\\e50e"}.fa-tree:before{content:"\\f1bb"}.fa-bridge-lock:before{content:"\\e4cc"}.fa-sack-dollar:before{content:"\\f81d"}.fa-edit:before,.fa-pen-to-square:before{content:"\\f044"}.fa-car-side:before{content:"\\f5e4"}.fa-share-alt:before,.fa-share-nodes:before{content:"\\f1e0"}.fa-heart-circle-minus:before{content:"\\e4ff"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-microscope:before{content:"\\f610"}.fa-sink:before{content:"\\e06d"}.fa-bag-shopping:before,.fa-shopping-bag:before{content:"\\f290"}.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before{content:"\\f881"}.fa-mitten:before{content:"\\f7b5"}.fa-person-rays:before{content:"\\e54d"}.fa-users:before{content:"\\f0c0"}.fa-eye-slash:before{content:"\\f070"}.fa-flask-vial:before{content:"\\e4f3"}.fa-hand-paper:before,.fa-hand:before{content:"\\f256"}.fa-om:before{content:"\\f679"}.fa-worm:before{content:"\\e599"}.fa-house-circle-xmark:before{content:"\\e50b"}.fa-plug:before{content:"\\f1e6"}.fa-chevron-up:before{content:"\\f077"}.fa-hand-spock:before{content:"\\f259"}.fa-stopwatch:before{content:"\\f2f2"}.fa-face-kiss:before,.fa-kiss:before{content:"\\f596"}.fa-bridge-circle-xmark:before{content:"\\e4cb"}.fa-face-grin-tongue:before,.fa-grin-tongue:before{content:"\\f589"}.fa-chess-bishop:before{content:"\\f43a"}.fa-face-grin-wink:before,.fa-grin-wink:before{content:"\\f58c"}.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before{content:"\\f2a4"}.fa-road-circle-check:before{content:"\\e564"}.fa-dice-five:before{content:"\\f523"}.fa-rss-square:before,.fa-square-rss:before{content:"\\f143"}.fa-land-mine-on:before{content:"\\e51b"}.fa-i-cursor:before{content:"\\f246"}.fa-stamp:before{content:"\\f5bf"}.fa-stairs:before{content:"\\e289"}.fa-i:before{content:"\\49"}.fa-hryvnia-sign:before,.fa-hryvnia:before{content:"\\f6f2"}.fa-pills:before{content:"\\f484"}.fa-face-grin-wide:before,.fa-grin-alt:before{content:"\\f581"}.fa-tooth:before{content:"\\f5c9"}.fa-v:before{content:"\\56"}.fa-bangladeshi-taka-sign:before{content:"\\e2e6"}.fa-bicycle:before{content:"\\f206"}.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before{content:"\\e579"}.fa-head-side-cough-slash:before{content:"\\e062"}.fa-ambulance:before,.fa-truck-medical:before{content:"\\f0f9"}.fa-wheat-awn-circle-exclamation:before{content:"\\e598"}.fa-snowman:before{content:"\\f7d0"}.fa-mortar-pestle:before{content:"\\f5a7"}.fa-road-barrier:before{content:"\\e562"}.fa-school:before{content:"\\f549"}.fa-igloo:before{content:"\\f7ae"}.fa-joint:before{content:"\\f595"}.fa-angle-right:before{content:"\\f105"}.fa-horse:before{content:"\\f6f0"}.fa-q:before{content:"\\51"}.fa-g:before{content:"\\47"}.fa-notes-medical:before{content:"\\f481"}.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-dong-sign:before{content:"\\e169"}.fa-capsules:before{content:"\\f46b"}.fa-poo-bolt:before,.fa-poo-storm:before{content:"\\f75a"}.fa-face-frown-open:before,.fa-frown-open:before{content:"\\f57a"}.fa-hand-point-up:before{content:"\\f0a6"}.fa-money-bill:before{content:"\\f0d6"}.fa-bookmark:before{content:"\\f02e"}.fa-align-justify:before{content:"\\f039"}.fa-umbrella-beach:before{content:"\\f5ca"}.fa-helmet-un:before{content:"\\e503"}.fa-bullseye:before{content:"\\f140"}.fa-bacon:before{content:"\\f7e5"}.fa-hand-point-down:before{content:"\\f0a7"}.fa-arrow-up-from-bracket:before{content:"\\e09a"}.fa-folder-blank:before,.fa-folder:before{content:"\\f07b"}.fa-file-medical-alt:before,.fa-file-waveform:before{content:"\\f478"}.fa-radiation:before{content:"\\f7b9"}.fa-chart-simple:before{content:"\\e473"}.fa-mars-stroke:before{content:"\\f229"}.fa-vial:before{content:"\\f492"}.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before{content:"\\f624"}.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before{content:"\\e2ca"}.fa-e:before{content:"\\45"}.fa-pen-alt:before,.fa-pen-clip:before{content:"\\f305"}.fa-bridge-circle-exclamation:before{content:"\\e4ca"}.fa-user:before{content:"\\f007"}.fa-school-circle-check:before{content:"\\e56b"}.fa-dumpster:before{content:"\\f793"}.fa-shuttle-van:before,.fa-van-shuttle:before{content:"\\f5b6"}.fa-building-user:before{content:"\\e4da"}.fa-caret-square-left:before,.fa-square-caret-left:before{content:"\\f191"}.fa-highlighter:before{content:"\\f591"}.fa-key:before{content:"\\f084"}.fa-bullhorn:before{content:"\\f0a1"}.fa-globe:before{content:"\\f0ac"}.fa-synagogue:before{content:"\\f69b"}.fa-person-half-dress:before{content:"\\e548"}.fa-road-bridge:before{content:"\\e563"}.fa-location-arrow:before{content:"\\f124"}.fa-c:before{content:"\\43"}.fa-tablet-button:before{content:"\\f10a"}.fa-building-lock:before{content:"\\e4d6"}.fa-pizza-slice:before{content:"\\f818"}.fa-money-bill-wave:before{content:"\\f53a"}.fa-area-chart:before,.fa-chart-area:before{content:"\\f1fe"}.fa-house-flag:before{content:"\\e50d"}.fa-person-circle-minus:before{content:"\\e540"}.fa-ban:before,.fa-cancel:before{content:"\\f05e"}.fa-camera-rotate:before{content:"\\e0d8"}.fa-air-freshener:before,.fa-spray-can-sparkles:before{content:"\\f5d0"}.fa-star:before{content:"\\f005"}.fa-repeat:before{content:"\\f363"}.fa-cross:before{content:"\\f654"}.fa-box:before{content:"\\f466"}.fa-venus-mars:before{content:"\\f228"}.fa-arrow-pointer:before,.fa-mouse-pointer:before{content:"\\f245"}.fa-expand-arrows-alt:before,.fa-maximize:before{content:"\\f31e"}.fa-charging-station:before{content:"\\f5e7"}.fa-shapes:before,.fa-triangle-circle-square:before{content:"\\f61f"}.fa-random:before,.fa-shuffle:before{content:"\\f074"}.fa-person-running:before,.fa-running:before{content:"\\f70c"}.fa-mobile-retro:before{content:"\\e527"}.fa-grip-lines-vertical:before{content:"\\f7a5"}.fa-spider:before{content:"\\f717"}.fa-hands-bound:before{content:"\\e4f9"}.fa-file-invoice-dollar:before{content:"\\f571"}.fa-plane-circle-exclamation:before{content:"\\e556"}.fa-x-ray:before{content:"\\f497"}.fa-spell-check:before{content:"\\f891"}.fa-slash:before{content:"\\f715"}.fa-computer-mouse:before,.fa-mouse:before{content:"\\f8cc"}.fa-arrow-right-to-bracket:before,.fa-sign-in:before{content:"\\f090"}.fa-shop-slash:before,.fa-store-alt-slash:before{content:"\\e070"}.fa-server:before{content:"\\f233"}.fa-virus-covid-slash:before{content:"\\e4a9"}.fa-shop-lock:before{content:"\\e4a5"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-blender-phone:before{content:"\\f6b6"}.fa-building-wheat:before{content:"\\e4db"}.fa-person-breastfeeding:before{content:"\\e53a"}.fa-right-to-bracket:before,.fa-sign-in-alt:before{content:"\\f2f6"}.fa-venus:before{content:"\\f221"}.fa-passport:before{content:"\\f5ab"}.fa-heart-pulse:before,.fa-heartbeat:before{content:"\\f21e"}.fa-people-carry-box:before,.fa-people-carry:before{content:"\\f4ce"}.fa-temperature-high:before{content:"\\f769"}.fa-microchip:before{content:"\\f2db"}.fa-crown:before{content:"\\f521"}.fa-weight-hanging:before{content:"\\f5cd"}.fa-xmarks-lines:before{content:"\\e59a"}.fa-file-prescription:before{content:"\\f572"}.fa-weight-scale:before,.fa-weight:before{content:"\\f496"}.fa-user-friends:before,.fa-user-group:before{content:"\\f500"}.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before{content:"\\f15e"}.fa-chess-knight:before{content:"\\f441"}.fa-face-laugh-squint:before,.fa-laugh-squint:before{content:"\\f59b"}.fa-wheelchair:before{content:"\\f193"}.fa-arrow-circle-up:before,.fa-circle-arrow-up:before{content:"\\f0aa"}.fa-toggle-on:before{content:"\\f205"}.fa-person-walking:before,.fa-walking:before{content:"\\f554"}.fa-l:before{content:"\\4c"}.fa-fire:before{content:"\\f06d"}.fa-bed-pulse:before,.fa-procedures:before{content:"\\f487"}.fa-shuttle-space:before,.fa-space-shuttle:before{content:"\\f197"}.fa-face-laugh:before,.fa-laugh:before{content:"\\f599"}.fa-folder-open:before{content:"\\f07c"}.fa-heart-circle-plus:before{content:"\\e500"}.fa-code-fork:before{content:"\\e13b"}.fa-city:before{content:"\\f64f"}.fa-microphone-alt:before,.fa-microphone-lines:before{content:"\\f3c9"}.fa-pepper-hot:before{content:"\\f816"}.fa-unlock:before{content:"\\f09c"}.fa-colon-sign:before{content:"\\e140"}.fa-headset:before{content:"\\f590"}.fa-store-slash:before{content:"\\e071"}.fa-road-circle-xmark:before{content:"\\e566"}.fa-user-minus:before{content:"\\f503"}.fa-mars-stroke-up:before,.fa-mars-stroke-v:before{content:"\\f22a"}.fa-champagne-glasses:before,.fa-glass-cheers:before{content:"\\f79f"}.fa-clipboard:before{content:"\\f328"}.fa-house-circle-exclamation:before{content:"\\e50a"}.fa-file-arrow-up:before,.fa-file-upload:before{content:"\\f574"}.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before{content:"\\f1eb"}.fa-bath:before,.fa-bathtub:before{content:"\\f2cd"}.fa-underline:before{content:"\\f0cd"}.fa-user-edit:before,.fa-user-pen:before{content:"\\f4ff"}.fa-signature:before{content:"\\f5b7"}.fa-stroopwafel:before{content:"\\f551"}.fa-bold:before{content:"\\f032"}.fa-anchor-lock:before{content:"\\e4ad"}.fa-building-ngo:before{content:"\\e4d7"}.fa-manat-sign:before{content:"\\e1d5"}.fa-not-equal:before{content:"\\f53e"}.fa-border-style:before,.fa-border-top-left:before{content:"\\f853"}.fa-map-location-dot:before,.fa-map-marked-alt:before{content:"\\f5a0"}.fa-jedi:before{content:"\\f669"}.fa-poll:before,.fa-square-poll-vertical:before{content:"\\f681"}.fa-mug-hot:before{content:"\\f7b6"}.fa-battery-car:before,.fa-car-battery:before{content:"\\f5df"}.fa-gift:before{content:"\\f06b"}.fa-dice-two:before{content:"\\f528"}.fa-chess-queen:before{content:"\\f445"}.fa-glasses:before{content:"\\f530"}.fa-chess-board:before{content:"\\f43c"}.fa-building-circle-check:before{content:"\\e4d2"}.fa-person-chalkboard:before{content:"\\e53d"}.fa-mars-stroke-h:before,.fa-mars-stroke-right:before{content:"\\f22b"}.fa-hand-back-fist:before,.fa-hand-rock:before{content:"\\f255"}.fa-caret-square-up:before,.fa-square-caret-up:before{content:"\\f151"}.fa-cloud-showers-water:before{content:"\\e4e4"}.fa-bar-chart:before,.fa-chart-bar:before{content:"\\f080"}.fa-hands-bubbles:before,.fa-hands-wash:before{content:"\\e05e"}.fa-less-than-equal:before{content:"\\f537"}.fa-train:before{content:"\\f238"}.fa-eye-low-vision:before,.fa-low-vision:before{content:"\\f2a8"}.fa-crow:before{content:"\\f520"}.fa-sailboat:before{content:"\\e445"}.fa-window-restore:before{content:"\\f2d2"}.fa-plus-square:before,.fa-square-plus:before{content:"\\f0fe"}.fa-torii-gate:before{content:"\\f6a1"}.fa-frog:before{content:"\\f52e"}.fa-bucket:before{content:"\\e4cf"}.fa-image:before{content:"\\f03e"}.fa-microphone:before{content:"\\f130"}.fa-cow:before{content:"\\f6c8"}.fa-caret-up:before{content:"\\f0d8"}.fa-screwdriver:before{content:"\\f54a"}.fa-folder-closed:before{content:"\\e185"}.fa-house-tsunami:before{content:"\\e515"}.fa-square-nfi:before{content:"\\e576"}.fa-arrow-up-from-ground-water:before{content:"\\e4b5"}.fa-glass-martini-alt:before,.fa-martini-glass:before{content:"\\f57b"}.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before{content:"\\f2ea"}.fa-columns:before,.fa-table-columns:before{content:"\\f0db"}.fa-lemon:before{content:"\\f094"}.fa-head-side-mask:before{content:"\\e063"}.fa-handshake:before{content:"\\f2b5"}.fa-gem:before{content:"\\f3a5"}.fa-dolly-box:before,.fa-dolly:before{content:"\\f472"}.fa-smoking:before{content:"\\f48d"}.fa-compress-arrows-alt:before,.fa-minimize:before{content:"\\f78c"}.fa-monument:before{content:"\\f5a6"}.fa-snowplow:before{content:"\\f7d2"}.fa-angle-double-right:before,.fa-angles-right:before{content:"\\f101"}.fa-cannabis:before{content:"\\f55f"}.fa-circle-play:before,.fa-play-circle:before{content:"\\f144"}.fa-tablets:before{content:"\\f490"}.fa-ethernet:before{content:"\\f796"}.fa-eur:before,.fa-euro-sign:before,.fa-euro:before{content:"\\f153"}.fa-chair:before{content:"\\f6c0"}.fa-check-circle:before,.fa-circle-check:before{content:"\\f058"}.fa-circle-stop:before,.fa-stop-circle:before{content:"\\f28d"}.fa-compass-drafting:before,.fa-drafting-compass:before{content:"\\f568"}.fa-plate-wheat:before{content:"\\e55a"}.fa-icicles:before{content:"\\f7ad"}.fa-person-shelter:before{content:"\\e54f"}.fa-neuter:before{content:"\\f22c"}.fa-id-badge:before{content:"\\f2c1"}.fa-marker:before{content:"\\f5a1"}.fa-face-laugh-beam:before,.fa-laugh-beam:before{content:"\\f59a"}.fa-helicopter-symbol:before{content:"\\e502"}.fa-universal-access:before{content:"\\f29a"}.fa-chevron-circle-up:before,.fa-circle-chevron-up:before{content:"\\f139"}.fa-lari-sign:before{content:"\\e1c8"}.fa-volcano:before{content:"\\f770"}.fa-person-walking-dashed-line-arrow-right:before{content:"\\e553"}.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before{content:"\\f154"}.fa-viruses:before{content:"\\e076"}.fa-square-person-confined:before{content:"\\e577"}.fa-user-tie:before{content:"\\f508"}.fa-arrow-down-long:before,.fa-long-arrow-down:before{content:"\\f175"}.fa-tent-arrow-down-to-line:before{content:"\\e57e"}.fa-certificate:before{content:"\\f0a3"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-suitcase:before{content:"\\f0f2"}.fa-person-skating:before,.fa-skating:before{content:"\\f7c5"}.fa-filter-circle-dollar:before,.fa-funnel-dollar:before{content:"\\f662"}.fa-camera-retro:before{content:"\\f083"}.fa-arrow-circle-down:before,.fa-circle-arrow-down:before{content:"\\f0ab"}.fa-arrow-right-to-file:before,.fa-file-import:before{content:"\\f56f"}.fa-external-link-square:before,.fa-square-arrow-up-right:before{content:"\\f14c"}.fa-box-open:before{content:"\\f49e"}.fa-scroll:before{content:"\\f70e"}.fa-spa:before{content:"\\f5bb"}.fa-location-pin-lock:before{content:"\\e51f"}.fa-pause:before{content:"\\f04c"}.fa-hill-avalanche:before{content:"\\e507"}.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-bomb:before{content:"\\f1e2"}.fa-registered:before{content:"\\f25d"}.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before{content:"\\f2bb"}.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before{content:"\\f516"}.fa-subscript:before{content:"\\f12c"}.fa-diamond-turn-right:before,.fa-directions:before{content:"\\f5eb"}.fa-burst:before{content:"\\e4dc"}.fa-house-laptop:before,.fa-laptop-house:before{content:"\\e066"}.fa-face-tired:before,.fa-tired:before{content:"\\f5c8"}.fa-money-bills:before{content:"\\e1f3"}.fa-smog:before{content:"\\f75f"}.fa-crutch:before{content:"\\f7f7"}.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before{content:"\\f0ee"}.fa-palette:before{content:"\\f53f"}.fa-arrows-turn-right:before{content:"\\e4c0"}.fa-vest:before{content:"\\e085"}.fa-ferry:before{content:"\\e4ea"}.fa-arrows-down-to-people:before{content:"\\e4b9"}.fa-seedling:before,.fa-sprout:before{content:"\\f4d8"}.fa-arrows-alt-h:before,.fa-left-right:before{content:"\\f337"}.fa-boxes-packing:before{content:"\\e4c7"}.fa-arrow-circle-left:before,.fa-circle-arrow-left:before{content:"\\f0a8"}.fa-group-arrows-rotate:before{content:"\\e4f6"}.fa-bowl-food:before{content:"\\e4c6"}.fa-candy-cane:before{content:"\\f786"}.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before{content:"\\f160"}.fa-cloud-bolt:before,.fa-thunderstorm:before{content:"\\f76c"}.fa-remove-format:before,.fa-text-slash:before{content:"\\f87d"}.fa-face-smile-wink:before,.fa-smile-wink:before{content:"\\f4da"}.fa-file-word:before{content:"\\f1c2"}.fa-file-powerpoint:before{content:"\\f1c4"}.fa-arrows-h:before,.fa-arrows-left-right:before{content:"\\f07e"}.fa-house-lock:before{content:"\\e510"}.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before{content:"\\f0ed"}.fa-children:before{content:"\\e4e1"}.fa-blackboard:before,.fa-chalkboard:before{content:"\\f51b"}.fa-user-alt-slash:before,.fa-user-large-slash:before{content:"\\f4fa"}.fa-envelope-open:before{content:"\\f2b6"}.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before{content:"\\e05f"}.fa-mattress-pillow:before{content:"\\e525"}.fa-guarani-sign:before{content:"\\e19a"}.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before{content:"\\f021"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-cruzeiro-sign:before{content:"\\e152"}.fa-greater-than-equal:before{content:"\\f532"}.fa-shield-alt:before,.fa-shield-halved:before{content:"\\f3ed"}.fa-atlas:before,.fa-book-atlas:before{content:"\\f558"}.fa-virus:before{content:"\\e074"}.fa-envelope-circle-check:before{content:"\\e4e8"}.fa-layer-group:before{content:"\\f5fd"}.fa-arrows-to-dot:before{content:"\\e4be"}.fa-archway:before{content:"\\f557"}.fa-heart-circle-check:before{content:"\\e4fd"}.fa-house-chimney-crack:before,.fa-house-damage:before{content:"\\f6f1"}.fa-file-archive:before,.fa-file-zipper:before{content:"\\f1c6"}.fa-square:before{content:"\\f0c8"}.fa-glass-martini:before,.fa-martini-glass-empty:before{content:"\\f000"}.fa-couch:before{content:"\\f4b8"}.fa-cedi-sign:before{content:"\\e0df"}.fa-italic:before{content:"\\f033"}.fa-church:before{content:"\\f51d"}.fa-comments-dollar:before{content:"\\f653"}.fa-democrat:before{content:"\\f747"}.fa-z:before{content:"\\5a"}.fa-person-skiing:before,.fa-skiing:before{content:"\\f7c9"}.fa-road-lock:before{content:"\\e567"}.fa-a:before{content:"\\41"}.fa-temperature-arrow-down:before,.fa-temperature-down:before{content:"\\e03f"}.fa-feather-alt:before,.fa-feather-pointed:before{content:"\\f56b"}.fa-p:before{content:"\\50"}.fa-snowflake:before{content:"\\f2dc"}.fa-newspaper:before{content:"\\f1ea"}.fa-ad:before,.fa-rectangle-ad:before{content:"\\f641"}.fa-arrow-circle-right:before,.fa-circle-arrow-right:before{content:"\\f0a9"}.fa-filter-circle-xmark:before{content:"\\e17b"}.fa-locust:before{content:"\\e520"}.fa-sort:before,.fa-unsorted:before{content:"\\f0dc"}.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before{content:"\\f0cb"}.fa-person-dress-burst:before{content:"\\e544"}.fa-money-check-alt:before,.fa-money-check-dollar:before{content:"\\f53d"}.fa-vector-square:before{content:"\\f5cb"}.fa-bread-slice:before{content:"\\f7ec"}.fa-language:before{content:"\\f1ab"}.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before{content:"\\f598"}.fa-filter:before{content:"\\f0b0"}.fa-question:before{content:"\\3f"}.fa-file-signature:before{content:"\\f573"}.fa-arrows-alt:before,.fa-up-down-left-right:before{content:"\\f0b2"}.fa-house-chimney-user:before{content:"\\e065"}.fa-hand-holding-heart:before{content:"\\f4be"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-money-check:before{content:"\\f53c"}.fa-star-half-alt:before,.fa-star-half-stroke:before{content:"\\f5c0"}.fa-code:before{content:"\\f121"}.fa-glass-whiskey:before,.fa-whiskey-glass:before{content:"\\f7a0"}.fa-building-circle-exclamation:before{content:"\\e4d3"}.fa-magnifying-glass-chart:before{content:"\\e522"}.fa-arrow-up-right-from-square:before,.fa-external-link:before{content:"\\f08e"}.fa-cubes-stacked:before{content:"\\e4e6"}.fa-krw:before,.fa-won-sign:before,.fa-won:before{content:"\\f159"}.fa-virus-covid:before{content:"\\e4a8"}.fa-austral-sign:before{content:"\\e0a9"}.fa-f:before{content:"\\46"}.fa-leaf:before{content:"\\f06c"}.fa-road:before{content:"\\f018"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-person-circle-plus:before{content:"\\e541"}.fa-chart-pie:before,.fa-pie-chart:before{content:"\\f200"}.fa-bolt-lightning:before{content:"\\e0b7"}.fa-sack-xmark:before{content:"\\e56a"}.fa-file-excel:before{content:"\\f1c3"}.fa-file-contract:before{content:"\\f56c"}.fa-fish-fins:before{content:"\\e4f2"}.fa-building-flag:before{content:"\\e4d5"}.fa-face-grin-beam:before,.fa-grin-beam:before{content:"\\f582"}.fa-object-ungroup:before{content:"\\f248"}.fa-poop:before{content:"\\f619"}.fa-location-pin:before,.fa-map-marker:before{content:"\\f041"}.fa-kaaba:before{content:"\\f66b"}.fa-toilet-paper:before{content:"\\f71e"}.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before{content:"\\f807"}.fa-eject:before{content:"\\f052"}.fa-arrow-alt-circle-right:before,.fa-circle-right:before{content:"\\f35a"}.fa-plane-circle-check:before{content:"\\e555"}.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before{content:"\\f5a5"}.fa-object-group:before{content:"\\f247"}.fa-chart-line:before,.fa-line-chart:before{content:"\\f201"}.fa-mask-ventilator:before{content:"\\e524"}.fa-arrow-right:before{content:"\\f061"}.fa-map-signs:before,.fa-signs-post:before{content:"\\f277"}.fa-cash-register:before{content:"\\f788"}.fa-person-circle-question:before{content:"\\e542"}.fa-h:before{content:"\\48"}.fa-tarp:before{content:"\\e57b"}.fa-screwdriver-wrench:before,.fa-tools:before{content:"\\f7d9"}.fa-arrows-to-eye:before{content:"\\e4bf"}.fa-plug-circle-bolt:before{content:"\\e55b"}.fa-heart:before{content:"\\f004"}.fa-mars-and-venus:before{content:"\\f224"}.fa-home-user:before,.fa-house-user:before{content:"\\e1b0"}.fa-dumpster-fire:before{content:"\\f794"}.fa-house-crack:before{content:"\\e3b1"}.fa-cocktail:before,.fa-martini-glass-citrus:before{content:"\\f561"}.fa-face-surprise:before,.fa-surprise:before{content:"\\f5c2"}.fa-bottle-water:before{content:"\\e4c5"}.fa-circle-pause:before,.fa-pause-circle:before{content:"\\f28b"}.fa-toilet-paper-slash:before{content:"\\e072"}.fa-apple-alt:before,.fa-apple-whole:before{content:"\\f5d1"}.fa-kitchen-set:before{content:"\\e51a"}.fa-r:before{content:"\\52"}.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-cube:before{content:"\\f1b2"}.fa-bitcoin-sign:before{content:"\\e0b4"}.fa-shield-dog:before{content:"\\e573"}.fa-solar-panel:before{content:"\\f5ba"}.fa-lock-open:before{content:"\\f3c1"}.fa-elevator:before{content:"\\e16d"}.fa-money-bill-transfer:before{content:"\\e528"}.fa-money-bill-trend-up:before{content:"\\e529"}.fa-house-flood-water-circle-arrow-right:before{content:"\\e50f"}.fa-poll-h:before,.fa-square-poll-horizontal:before{content:"\\f682"}.fa-circle:before{content:"\\f111"}.fa-backward-fast:before,.fa-fast-backward:before{content:"\\f049"}.fa-recycle:before{content:"\\f1b8"}.fa-user-astronaut:before{content:"\\f4fb"}.fa-plane-slash:before{content:"\\e069"}.fa-trademark:before{content:"\\f25c"}.fa-basketball-ball:before,.fa-basketball:before{content:"\\f434"}.fa-satellite-dish:before{content:"\\f7c0"}.fa-arrow-alt-circle-up:before,.fa-circle-up:before{content:"\\f35b"}.fa-mobile-alt:before,.fa-mobile-screen-button:before{content:"\\f3cd"}.fa-volume-high:before,.fa-volume-up:before{content:"\\f028"}.fa-users-rays:before{content:"\\e593"}.fa-wallet:before{content:"\\f555"}.fa-clipboard-check:before{content:"\\f46c"}.fa-file-audio:before{content:"\\f1c7"}.fa-burger:before,.fa-hamburger:before{content:"\\f805"}.fa-wrench:before{content:"\\f0ad"}.fa-bugs:before{content:"\\e4d0"}.fa-rupee-sign:before,.fa-rupee:before{content:"\\f156"}.fa-file-image:before{content:"\\f1c5"}.fa-circle-question:before,.fa-question-circle:before{content:"\\f059"}.fa-plane-departure:before{content:"\\f5b0"}.fa-handshake-slash:before{content:"\\e060"}.fa-book-bookmark:before{content:"\\e0bb"}.fa-code-branch:before{content:"\\f126"}.fa-hat-cowboy:before{content:"\\f8c0"}.fa-bridge:before{content:"\\e4c8"}.fa-phone-alt:before,.fa-phone-flip:before{content:"\\f879"}.fa-truck-front:before{content:"\\e2b7"}.fa-cat:before{content:"\\f6be"}.fa-anchor-circle-exclamation:before{content:"\\e4ab"}.fa-truck-field:before{content:"\\e58d"}.fa-route:before{content:"\\f4d7"}.fa-clipboard-question:before{content:"\\e4e3"}.fa-panorama:before{content:"\\e209"}.fa-comment-medical:before{content:"\\f7f5"}.fa-teeth-open:before{content:"\\f62f"}.fa-file-circle-minus:before{content:"\\e4ed"}.fa-tags:before{content:"\\f02c"}.fa-wine-glass:before{content:"\\f4e3"}.fa-fast-forward:before,.fa-forward-fast:before{content:"\\f050"}.fa-face-meh-blank:before,.fa-meh-blank:before{content:"\\f5a4"}.fa-parking:before,.fa-square-parking:before{content:"\\f540"}.fa-house-signal:before{content:"\\e012"}.fa-bars-progress:before,.fa-tasks-alt:before{content:"\\f828"}.fa-faucet-drip:before{content:"\\e006"}.fa-cart-flatbed:before,.fa-dolly-flatbed:before{content:"\\f474"}.fa-ban-smoking:before,.fa-smoking-ban:before{content:"\\f54d"}.fa-terminal:before{content:"\\f120"}.fa-mobile-button:before{content:"\\f10b"}.fa-house-medical-flag:before{content:"\\e514"}.fa-basket-shopping:before,.fa-shopping-basket:before{content:"\\f291"}.fa-tape:before{content:"\\f4db"}.fa-bus-alt:before,.fa-bus-simple:before{content:"\\f55e"}.fa-eye:before{content:"\\f06e"}.fa-face-sad-cry:before,.fa-sad-cry:before{content:"\\f5b3"}.fa-audio-description:before{content:"\\f29e"}.fa-person-military-to-person:before{content:"\\e54c"}.fa-file-shield:before{content:"\\e4f0"}.fa-user-slash:before{content:"\\f506"}.fa-pen:before{content:"\\f304"}.fa-tower-observation:before{content:"\\e586"}.fa-file-code:before{content:"\\f1c9"}.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before{content:"\\f012"}.fa-bus:before{content:"\\f207"}.fa-heart-circle-xmark:before{content:"\\e501"}.fa-home-lg:before,.fa-house-chimney:before{content:"\\e3af"}.fa-window-maximize:before{content:"\\f2d0"}.fa-face-frown:before,.fa-frown:before{content:"\\f119"}.fa-prescription:before{content:"\\f5b1"}.fa-shop:before,.fa-store-alt:before{content:"\\f54f"}.fa-floppy-disk:before,.fa-save:before{content:"\\f0c7"}.fa-vihara:before{content:"\\f6a7"}.fa-balance-scale-left:before,.fa-scale-unbalanced:before{content:"\\f515"}.fa-sort-asc:before,.fa-sort-up:before{content:"\\f0de"}.fa-comment-dots:before,.fa-commenting:before{content:"\\f4ad"}.fa-plant-wilt:before{content:"\\e5aa"}.fa-diamond:before{content:"\\f219"}.fa-face-grin-squint:before,.fa-grin-squint:before{content:"\\f585"}.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before{content:"\\f4c0"}.fa-bacterium:before{content:"\\e05a"}.fa-hand-pointer:before{content:"\\f25a"}.fa-drum-steelpan:before{content:"\\f56a"}.fa-hand-scissors:before{content:"\\f257"}.fa-hands-praying:before,.fa-praying-hands:before{content:"\\f684"}.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before{content:"\\f01e"}.fa-biohazard:before{content:"\\f780"}.fa-location-crosshairs:before,.fa-location:before{content:"\\f601"}.fa-mars-double:before{content:"\\f227"}.fa-child-dress:before{content:"\\e59c"}.fa-users-between-lines:before{content:"\\e591"}.fa-lungs-virus:before{content:"\\e067"}.fa-face-grin-tears:before,.fa-grin-tears:before{content:"\\f588"}.fa-phone:before{content:"\\f095"}.fa-calendar-times:before,.fa-calendar-xmark:before{content:"\\f273"}.fa-child-reaching:before{content:"\\e59d"}.fa-head-side-virus:before{content:"\\e064"}.fa-user-cog:before,.fa-user-gear:before{content:"\\f4fe"}.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before{content:"\\f163"}.fa-door-closed:before{content:"\\f52a"}.fa-shield-virus:before{content:"\\e06c"}.fa-dice-six:before{content:"\\f526"}.fa-mosquito-net:before{content:"\\e52c"}.fa-bridge-water:before{content:"\\e4ce"}.fa-person-booth:before{content:"\\f756"}.fa-text-width:before{content:"\\f035"}.fa-hat-wizard:before{content:"\\f6e8"}.fa-pen-fancy:before{content:"\\f5ac"}.fa-digging:before,.fa-person-digging:before{content:"\\f85e"}.fa-trash:before{content:"\\f1f8"}.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before{content:"\\f629"}.fa-book-medical:before{content:"\\f7e6"}.fa-poo:before{content:"\\f2fe"}.fa-quote-right-alt:before,.fa-quote-right:before{content:"\\f10e"}.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before{content:"\\f553"}.fa-cubes:before{content:"\\f1b3"}.fa-divide:before{content:"\\f529"}.fa-tenge-sign:before,.fa-tenge:before{content:"\\f7d7"}.fa-headphones:before{content:"\\f025"}.fa-hands-holding:before{content:"\\f4c2"}.fa-hands-clapping:before{content:"\\e1a8"}.fa-republican:before{content:"\\f75e"}.fa-arrow-left:before{content:"\\f060"}.fa-person-circle-xmark:before{content:"\\e543"}.fa-ruler:before{content:"\\f545"}.fa-align-left:before{content:"\\f036"}.fa-dice-d6:before{content:"\\f6d1"}.fa-restroom:before{content:"\\f7bd"}.fa-j:before{content:"\\4a"}.fa-users-viewfinder:before{content:"\\e595"}.fa-file-video:before{content:"\\f1c8"}.fa-external-link-alt:before,.fa-up-right-from-square:before{content:"\\f35d"}.fa-table-cells:before,.fa-th:before{content:"\\f00a"}.fa-file-pdf:before{content:"\\f1c1"}.fa-bible:before,.fa-book-bible:before{content:"\\f647"}.fa-o:before{content:"\\4f"}.fa-medkit:before,.fa-suitcase-medical:before{content:"\\f0fa"}.fa-user-secret:before{content:"\\f21b"}.fa-otter:before{content:"\\f700"}.fa-female:before,.fa-person-dress:before{content:"\\f182"}.fa-comment-dollar:before{content:"\\f651"}.fa-briefcase-clock:before,.fa-business-time:before{content:"\\f64a"}.fa-table-cells-large:before,.fa-th-large:before{content:"\\f009"}.fa-book-tanakh:before,.fa-tanakh:before{content:"\\f827"}.fa-phone-volume:before,.fa-volume-control-phone:before{content:"\\f2a0"}.fa-hat-cowboy-side:before{content:"\\f8c1"}.fa-clipboard-user:before{content:"\\f7f3"}.fa-child:before{content:"\\f1ae"}.fa-lira-sign:before{content:"\\f195"}.fa-satellite:before{content:"\\f7bf"}.fa-plane-lock:before{content:"\\e558"}.fa-tag:before{content:"\\f02b"}.fa-comment:before{content:"\\f075"}.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before{content:"\\f1fd"}.fa-envelope:before{content:"\\f0e0"}.fa-angle-double-up:before,.fa-angles-up:before{content:"\\f102"}.fa-paperclip:before{content:"\\f0c6"}.fa-arrow-right-to-city:before{content:"\\e4b3"}.fa-ribbon:before{content:"\\f4d6"}.fa-lungs:before{content:"\\f604"}.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before{content:"\\f887"}.fa-litecoin-sign:before{content:"\\e1d3"}.fa-border-none:before{content:"\\f850"}.fa-circle-nodes:before{content:"\\e4e2"}.fa-parachute-box:before{content:"\\f4cd"}.fa-indent:before{content:"\\f03c"}.fa-truck-field-un:before{content:"\\e58e"}.fa-hourglass-empty:before,.fa-hourglass:before{content:"\\f254"}.fa-mountain:before{content:"\\f6fc"}.fa-user-doctor:before,.fa-user-md:before{content:"\\f0f0"}.fa-circle-info:before,.fa-info-circle:before{content:"\\f05a"}.fa-cloud-meatball:before{content:"\\f73b"}.fa-camera-alt:before,.fa-camera:before{content:"\\f030"}.fa-square-virus:before{content:"\\e578"}.fa-meteor:before{content:"\\f753"}.fa-car-on:before{content:"\\e4dd"}.fa-sleigh:before{content:"\\f7cc"}.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before{content:"\\f162"}.fa-hand-holding-droplet:before,.fa-hand-holding-water:before{content:"\\f4c1"}.fa-water:before{content:"\\f773"}.fa-calendar-check:before{content:"\\f274"}.fa-braille:before{content:"\\f2a1"}.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before{content:"\\f486"}.fa-landmark:before{content:"\\f66f"}.fa-truck:before{content:"\\f0d1"}.fa-crosshairs:before{content:"\\f05b"}.fa-person-cane:before{content:"\\e53c"}.fa-tent:before{content:"\\e57d"}.fa-vest-patches:before{content:"\\e086"}.fa-check-double:before{content:"\\f560"}.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before{content:"\\f15d"}.fa-money-bill-wheat:before{content:"\\e52a"}.fa-cookie:before{content:"\\f563"}.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-hard-drive:before,.fa-hdd:before{content:"\\f0a0"}.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before{content:"\\f586"}.fa-dumbbell:before{content:"\\f44b"}.fa-list-alt:before,.fa-rectangle-list:before{content:"\\f022"}.fa-tarp-droplet:before{content:"\\e57c"}.fa-house-medical-circle-check:before{content:"\\e511"}.fa-person-skiing-nordic:before,.fa-skiing-nordic:before{content:"\\f7ca"}.fa-calendar-plus:before{content:"\\f271"}.fa-plane-arrival:before{content:"\\f5af"}.fa-arrow-alt-circle-left:before,.fa-circle-left:before{content:"\\f359"}.fa-subway:before,.fa-train-subway:before{content:"\\f239"}.fa-chart-gantt:before{content:"\\e0e4"}.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before{content:"\\e1bc"}.fa-crop-alt:before,.fa-crop-simple:before{content:"\\f565"}.fa-money-bill-1:before,.fa-money-bill-alt:before{content:"\\f3d1"}.fa-left-long:before,.fa-long-arrow-alt-left:before{content:"\\f30a"}.fa-dna:before{content:"\\f471"}.fa-virus-slash:before{content:"\\e075"}.fa-minus:before,.fa-subtract:before{content:"\\f068"}.fa-chess:before{content:"\\f439"}.fa-arrow-left-long:before,.fa-long-arrow-left:before{content:"\\f177"}.fa-plug-circle-check:before{content:"\\e55c"}.fa-street-view:before{content:"\\f21d"}.fa-franc-sign:before{content:"\\e18f"}.fa-volume-off:before{content:"\\f026"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before{content:"\\f2a3"}.fa-cog:before,.fa-gear:before{content:"\\f013"}.fa-droplet-slash:before,.fa-tint-slash:before{content:"\\f5c7"}.fa-mosque:before{content:"\\f678"}.fa-mosquito:before{content:"\\e52b"}.fa-star-of-david:before{content:"\\f69a"}.fa-person-military-rifle:before{content:"\\e54b"}.fa-cart-shopping:before,.fa-shopping-cart:before{content:"\\f07a"}.fa-vials:before{content:"\\f493"}.fa-plug-circle-plus:before{content:"\\e55f"}.fa-place-of-worship:before{content:"\\f67f"}.fa-grip-vertical:before{content:"\\f58e"}.fa-arrow-turn-up:before,.fa-level-up:before{content:"\\f148"}.fa-u:before{content:"\\55"}.fa-square-root-alt:before,.fa-square-root-variable:before{content:"\\f698"}.fa-clock-four:before,.fa-clock:before{content:"\\f017"}.fa-backward-step:before,.fa-step-backward:before{content:"\\f048"}.fa-pallet:before{content:"\\f482"}.fa-faucet:before{content:"\\e005"}.fa-baseball-bat-ball:before{content:"\\f432"}.fa-s:before{content:"\\53"}.fa-timeline:before{content:"\\e29c"}.fa-keyboard:before{content:"\\f11c"}.fa-caret-down:before{content:"\\f0d7"}.fa-clinic-medical:before,.fa-house-chimney-medical:before{content:"\\f7f2"}.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-mobile-android-alt:before,.fa-mobile-screen:before{content:"\\f3cf"}.fa-plane-up:before{content:"\\e22d"}.fa-piggy-bank:before{content:"\\f4d3"}.fa-battery-3:before,.fa-battery-half:before{content:"\\f242"}.fa-mountain-city:before{content:"\\e52e"}.fa-coins:before{content:"\\f51e"}.fa-khanda:before{content:"\\f66d"}.fa-sliders-h:before,.fa-sliders:before{content:"\\f1de"}.fa-folder-tree:before{content:"\\f802"}.fa-network-wired:before{content:"\\f6ff"}.fa-map-pin:before{content:"\\f276"}.fa-hamsa:before{content:"\\f665"}.fa-cent-sign:before{content:"\\e3f5"}.fa-flask:before{content:"\\f0c3"}.fa-person-pregnant:before{content:"\\e31e"}.fa-wand-sparkles:before{content:"\\f72b"}.fa-ellipsis-v:before,.fa-ellipsis-vertical:before{content:"\\f142"}.fa-ticket:before{content:"\\f145"}.fa-power-off:before{content:"\\f011"}.fa-long-arrow-alt-right:before,.fa-right-long:before{content:"\\f30b"}.fa-flag-usa:before{content:"\\f74d"}.fa-laptop-file:before{content:"\\e51d"}.fa-teletype:before,.fa-tty:before{content:"\\f1e4"}.fa-diagram-next:before{content:"\\e476"}.fa-person-rifle:before{content:"\\e54e"}.fa-house-medical-circle-exclamation:before{content:"\\e512"}.fa-closed-captioning:before{content:"\\f20a"}.fa-hiking:before,.fa-person-hiking:before{content:"\\f6ec"}.fa-venus-double:before{content:"\\f226"}.fa-images:before{content:"\\f302"}.fa-calculator:before{content:"\\f1ec"}.fa-people-pulling:before{content:"\\e535"}.fa-n:before{content:"\\4e"}.fa-cable-car:before,.fa-tram:before{content:"\\f7da"}.fa-cloud-rain:before{content:"\\f73d"}.fa-building-circle-xmark:before{content:"\\e4d4"}.fa-ship:before{content:"\\f21a"}.fa-arrows-down-to-line:before{content:"\\e4b8"}.fa-download:before{content:"\\f019"}.fa-face-grin:before,.fa-grin:before{content:"\\f580"}.fa-backspace:before,.fa-delete-left:before{content:"\\f55a"}.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before{content:"\\f1fb"}.fa-file-circle-check:before{content:"\\e5a0"}.fa-forward:before{content:"\\f04e"}.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before{content:"\\f3ce"}.fa-face-meh:before,.fa-meh:before{content:"\\f11a"}.fa-align-center:before{content:"\\f037"}.fa-book-dead:before,.fa-book-skull:before{content:"\\f6b7"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-heart-circle-exclamation:before{content:"\\e4fe"}.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before{content:"\\f015"}.fa-calendar-week:before{content:"\\f784"}.fa-laptop-medical:before{content:"\\f812"}.fa-b:before{content:"\\42"}.fa-file-medical:before{content:"\\f477"}.fa-dice-one:before{content:"\\f525"}.fa-kiwi-bird:before{content:"\\f535"}.fa-arrow-right-arrow-left:before,.fa-exchange:before{content:"\\f0ec"}.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before{content:"\\f2f9"}.fa-cutlery:before,.fa-utensils:before{content:"\\f2e7"}.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before{content:"\\f161"}.fa-mill-sign:before{content:"\\e1ed"}.fa-bowl-rice:before{content:"\\e2eb"}.fa-skull:before{content:"\\f54c"}.fa-broadcast-tower:before,.fa-tower-broadcast:before{content:"\\f519"}.fa-truck-pickup:before{content:"\\f63c"}.fa-long-arrow-alt-up:before,.fa-up-long:before{content:"\\f30c"}.fa-stop:before{content:"\\f04d"}.fa-code-merge:before{content:"\\f387"}.fa-upload:before{content:"\\f093"}.fa-hurricane:before{content:"\\f751"}.fa-mound:before{content:"\\e52d"}.fa-toilet-portable:before{content:"\\e583"}.fa-compact-disc:before{content:"\\f51f"}.fa-file-arrow-down:before,.fa-file-download:before{content:"\\f56d"}.fa-caravan:before{content:"\\f8ff"}.fa-shield-cat:before{content:"\\e572"}.fa-bolt:before,.fa-zap:before{content:"\\f0e7"}.fa-glass-water:before{content:"\\e4f4"}.fa-oil-well:before{content:"\\e532"}.fa-vault:before{content:"\\e2c5"}.fa-mars:before{content:"\\f222"}.fa-toilet:before{content:"\\f7d8"}.fa-plane-circle-xmark:before{content:"\\e557"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before{content:"\\f157"}.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before{content:"\\f158"}.fa-sun:before{content:"\\f185"}.fa-guitar:before{content:"\\f7a6"}.fa-face-laugh-wink:before,.fa-laugh-wink:before{content:"\\f59c"}.fa-horse-head:before{content:"\\f7ab"}.fa-bore-hole:before{content:"\\e4c3"}.fa-industry:before{content:"\\f275"}.fa-arrow-alt-circle-down:before,.fa-circle-down:before{content:"\\f358"}.fa-arrows-turn-to-dots:before{content:"\\e4c1"}.fa-florin-sign:before{content:"\\e184"}.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before{content:"\\f884"}.fa-less-than:before{content:"\\3c"}.fa-angle-down:before{content:"\\f107"}.fa-car-tunnel:before{content:"\\e4de"}.fa-head-side-cough:before{content:"\\e061"}.fa-grip-lines:before{content:"\\f7a4"}.fa-thumbs-down:before{content:"\\f165"}.fa-user-lock:before{content:"\\f502"}.fa-arrow-right-long:before,.fa-long-arrow-right:before{content:"\\f178"}.fa-anchor-circle-xmark:before{content:"\\e4ac"}.fa-ellipsis-h:before,.fa-ellipsis:before{content:"\\f141"}.fa-chess-pawn:before{content:"\\f443"}.fa-first-aid:before,.fa-kit-medical:before{content:"\\f479"}.fa-person-through-window:before{content:"\\e5a9"}.fa-toolbox:before{content:"\\f552"}.fa-hands-holding-circle:before{content:"\\e4fb"}.fa-bug:before{content:"\\f188"}.fa-credit-card-alt:before,.fa-credit-card:before{content:"\\f09d"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-hand-holding-hand:before{content:"\\e4f7"}.fa-book-open-reader:before,.fa-book-reader:before{content:"\\f5da"}.fa-mountain-sun:before{content:"\\e52f"}.fa-arrows-left-right-to-line:before{content:"\\e4ba"}.fa-dice-d20:before{content:"\\f6cf"}.fa-truck-droplet:before{content:"\\e58c"}.fa-file-circle-xmark:before{content:"\\e5a1"}.fa-temperature-arrow-up:before,.fa-temperature-up:before{content:"\\e040"}.fa-medal:before{content:"\\f5a2"}.fa-bed:before{content:"\\f236"}.fa-h-square:before,.fa-square-h:before{content:"\\f0fd"}.fa-podcast:before{content:"\\f2ce"}.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-bell:before{content:"\\f0f3"}.fa-superscript:before{content:"\\f12b"}.fa-plug-circle-xmark:before{content:"\\e560"}.fa-star-of-life:before{content:"\\f621"}.fa-phone-slash:before{content:"\\f3dd"}.fa-paint-roller:before{content:"\\f5aa"}.fa-hands-helping:before,.fa-handshake-angle:before{content:"\\f4c4"}.fa-location-dot:before,.fa-map-marker-alt:before{content:"\\f3c5"}.fa-file:before{content:"\\f15b"}.fa-greater-than:before{content:"\\3e"}.fa-person-swimming:before,.fa-swimmer:before{content:"\\f5c4"}.fa-arrow-down:before{content:"\\f063"}.fa-droplet:before,.fa-tint:before{content:"\\f043"}.fa-eraser:before{content:"\\f12d"}.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before{content:"\\f57d"}.fa-person-burst:before{content:"\\e53b"}.fa-dove:before{content:"\\f4ba"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-socks:before{content:"\\f696"}.fa-inbox:before{content:"\\f01c"}.fa-section:before{content:"\\e447"}.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before{content:"\\f625"}.fa-envelope-open-text:before{content:"\\f658"}.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before{content:"\\f0f8"}.fa-wine-bottle:before{content:"\\f72f"}.fa-chess-rook:before{content:"\\f447"}.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before{content:"\\f550"}.fa-dharmachakra:before{content:"\\f655"}.fa-hotdog:before{content:"\\f80f"}.fa-blind:before,.fa-person-walking-with-cane:before{content:"\\f29d"}.fa-drum:before{content:"\\f569"}.fa-ice-cream:before{content:"\\f810"}.fa-heart-circle-bolt:before{content:"\\e4fc"}.fa-fax:before{content:"\\f1ac"}.fa-paragraph:before{content:"\\f1dd"}.fa-check-to-slot:before,.fa-vote-yea:before{content:"\\f772"}.fa-star-half:before{content:"\\f089"}.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before{content:"\\f468"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-assistive-listening-systems:before,.fa-ear-listen:before{content:"\\f2a2"}.fa-tree-city:before{content:"\\e587"}.fa-play:before{content:"\\f04b"}.fa-font:before{content:"\\f031"}.fa-rupiah-sign:before{content:"\\e23d"}.fa-magnifying-glass:before,.fa-search:before{content:"\\f002"}.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before{content:"\\f45d"}.fa-diagnoses:before,.fa-person-dots-from-line:before{content:"\\f470"}.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before{content:"\\f82a"}.fa-naira-sign:before{content:"\\e1f6"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-walkie-talkie:before{content:"\\f8ef"}.fa-file-edit:before,.fa-file-pen:before{content:"\\f31c"}.fa-receipt:before{content:"\\f543"}.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before{content:"\\f14b"}.fa-suitcase-rolling:before{content:"\\f5c1"}.fa-person-circle-exclamation:before{content:"\\e53f"}.fa-chevron-down:before{content:"\\f078"}.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before{content:"\\f240"}.fa-skull-crossbones:before{content:"\\f714"}.fa-code-compare:before{content:"\\e13a"}.fa-list-dots:before,.fa-list-ul:before{content:"\\f0ca"}.fa-school-lock:before{content:"\\e56f"}.fa-tower-cell:before{content:"\\e585"}.fa-down-long:before,.fa-long-arrow-alt-down:before{content:"\\f309"}.fa-ranking-star:before{content:"\\e561"}.fa-chess-king:before{content:"\\f43f"}.fa-person-harassing:before{content:"\\e549"}.fa-brazilian-real-sign:before{content:"\\e46c"}.fa-landmark-alt:before,.fa-landmark-dome:before{content:"\\f752"}.fa-arrow-up:before{content:"\\f062"}.fa-television:before,.fa-tv-alt:before,.fa-tv:before{content:"\\f26c"}.fa-shrimp:before{content:"\\e448"}.fa-list-check:before,.fa-tasks:before{content:"\\f0ae"}.fa-jug-detergent:before{content:"\\e519"}.fa-circle-user:before,.fa-user-circle:before{content:"\\f2bd"}.fa-user-shield:before{content:"\\f505"}.fa-wind:before{content:"\\f72e"}.fa-car-burst:before,.fa-car-crash:before{content:"\\f5e1"}.fa-y:before{content:"\\59"}.fa-person-snowboarding:before,.fa-snowboarding:before{content:"\\f7ce"}.fa-shipping-fast:before,.fa-truck-fast:before{content:"\\f48b"}.fa-fish:before{content:"\\f578"}.fa-user-graduate:before{content:"\\f501"}.fa-adjust:before,.fa-circle-half-stroke:before{content:"\\f042"}.fa-clapperboard:before{content:"\\e131"}.fa-circle-radiation:before,.fa-radiation-alt:before{content:"\\f7ba"}.fa-baseball-ball:before,.fa-baseball:before{content:"\\f433"}.fa-jet-fighter-up:before{content:"\\e518"}.fa-diagram-project:before,.fa-project-diagram:before{content:"\\f542"}.fa-copy:before{content:"\\f0c5"}.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before{content:"\\f6a9"}.fa-hand-sparkles:before{content:"\\e05d"}.fa-grip-horizontal:before,.fa-grip:before{content:"\\f58d"}.fa-share-from-square:before,.fa-share-square:before{content:"\\f14d"}.fa-child-combatant:before,.fa-child-rifle:before{content:"\\e4e0"}.fa-gun:before{content:"\\e19b"}.fa-phone-square:before,.fa-square-phone:before{content:"\\f098"}.fa-add:before,.fa-plus:before{content:"\\2b"}.fa-expand:before{content:"\\f065"}.fa-computer:before{content:"\\e4e5"}.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:"\\f00d"}.fa-arrows-up-down-left-right:before,.fa-arrows:before{content:"\\f047"}.fa-chalkboard-teacher:before,.fa-chalkboard-user:before{content:"\\f51c"}.fa-peso-sign:before{content:"\\e222"}.fa-building-shield:before{content:"\\e4d8"}.fa-baby:before{content:"\\f77c"}.fa-users-line:before{content:"\\e592"}.fa-quote-left-alt:before,.fa-quote-left:before{content:"\\f10d"}.fa-tractor:before{content:"\\f722"}.fa-trash-arrow-up:before,.fa-trash-restore:before{content:"\\f829"}.fa-arrow-down-up-lock:before{content:"\\e4b0"}.fa-lines-leaning:before{content:"\\e51e"}.fa-ruler-combined:before{content:"\\f546"}.fa-copyright:before{content:"\\f1f9"}.fa-equals:before{content:"\\3d"}.fa-blender:before{content:"\\f517"}.fa-teeth:before{content:"\\f62e"}.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before{content:"\\f20b"}.fa-map:before{content:"\\f279"}.fa-rocket:before{content:"\\f135"}.fa-photo-film:before,.fa-photo-video:before{content:"\\f87c"}.fa-folder-minus:before{content:"\\f65d"}.fa-store:before{content:"\\f54e"}.fa-arrow-trend-up:before{content:"\\e098"}.fa-plug-circle-minus:before{content:"\\e55e"}.fa-sign-hanging:before,.fa-sign:before{content:"\\f4d9"}.fa-bezier-curve:before{content:"\\f55b"}.fa-bell-slash:before{content:"\\f1f6"}.fa-tablet-android:before,.fa-tablet:before{content:"\\f3fb"}.fa-school-flag:before{content:"\\e56e"}.fa-fill:before{content:"\\f575"}.fa-angle-up:before{content:"\\f106"}.fa-drumstick-bite:before{content:"\\f6d7"}.fa-holly-berry:before{content:"\\f7aa"}.fa-chevron-left:before{content:"\\f053"}.fa-bacteria:before{content:"\\e059"}.fa-hand-lizard:before{content:"\\f258"}.fa-notdef:before{content:"\\e1fe"}.fa-disease:before{content:"\\f7fa"}.fa-briefcase-medical:before{content:"\\f469"}.fa-genderless:before{content:"\\f22d"}.fa-chevron-right:before{content:"\\f054"}.fa-retweet:before{content:"\\f079"}.fa-car-alt:before,.fa-car-rear:before{content:"\\f5de"}.fa-pump-soap:before{content:"\\e06b"}.fa-video-slash:before{content:"\\f4e2"}.fa-battery-2:before,.fa-battery-quarter:before{content:"\\f243"}.fa-radio:before{content:"\\f8d7"}.fa-baby-carriage:before,.fa-carriage-baby:before{content:"\\f77d"}.fa-traffic-light:before{content:"\\f637"}.fa-thermometer:before{content:"\\f491"}.fa-vr-cardboard:before{content:"\\f729"}.fa-hand-middle-finger:before{content:"\\f806"}.fa-percent:before,.fa-percentage:before{content:"\\25"}.fa-truck-moving:before{content:"\\f4df"}.fa-glass-water-droplet:before{content:"\\e4f5"}.fa-display:before{content:"\\e163"}.fa-face-smile:before,.fa-smile:before{content:"\\f118"}.fa-thumb-tack:before,.fa-thumbtack:before{content:"\\f08d"}.fa-trophy:before{content:"\\f091"}.fa-person-praying:before,.fa-pray:before{content:"\\f683"}.fa-hammer:before{content:"\\f6e3"}.fa-hand-peace:before{content:"\\f25b"}.fa-rotate:before,.fa-sync-alt:before{content:"\\f2f1"}.fa-spinner:before{content:"\\f110"}.fa-robot:before{content:"\\f544"}.fa-peace:before{content:"\\f67c"}.fa-cogs:before,.fa-gears:before{content:"\\f085"}.fa-warehouse:before{content:"\\f494"}.fa-arrow-up-right-dots:before{content:"\\e4b7"}.fa-splotch:before{content:"\\f5bc"}.fa-face-grin-hearts:before,.fa-grin-hearts:before{content:"\\f584"}.fa-dice-four:before{content:"\\f524"}.fa-sim-card:before{content:"\\f7c4"}.fa-transgender-alt:before,.fa-transgender:before{content:"\\f225"}.fa-mercury:before{content:"\\f223"}.fa-arrow-turn-down:before,.fa-level-down:before{content:"\\f149"}.fa-person-falling-burst:before{content:"\\e547"}.fa-award:before{content:"\\f559"}.fa-ticket-alt:before,.fa-ticket-simple:before{content:"\\f3ff"}.fa-building:before{content:"\\f1ad"}.fa-angle-double-left:before,.fa-angles-left:before{content:"\\f100"}.fa-qrcode:before{content:"\\f029"}.fa-clock-rotate-left:before,.fa-history:before{content:"\\f1da"}.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before{content:"\\f583"}.fa-arrow-right-from-file:before,.fa-file-export:before{content:"\\f56e"}.fa-shield-blank:before,.fa-shield:before{content:"\\f132"}.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before{content:"\\f885"}.fa-house-medical:before{content:"\\e3b2"}.fa-golf-ball-tee:before,.fa-golf-ball:before{content:"\\f450"}.fa-chevron-circle-left:before,.fa-circle-chevron-left:before{content:"\\f137"}.fa-house-chimney-window:before{content:"\\e00d"}.fa-pen-nib:before{content:"\\f5ad"}.fa-tent-arrow-turn-left:before{content:"\\e580"}.fa-tents:before{content:"\\e582"}.fa-magic:before,.fa-wand-magic:before{content:"\\f0d0"}.fa-dog:before{content:"\\f6d3"}.fa-carrot:before{content:"\\f787"}.fa-moon:before{content:"\\f186"}.fa-wine-glass-alt:before,.fa-wine-glass-empty:before{content:"\\f5ce"}.fa-cheese:before{content:"\\f7ef"}.fa-yin-yang:before{content:"\\f6ad"}.fa-music:before{content:"\\f001"}.fa-code-commit:before{content:"\\f386"}.fa-temperature-low:before{content:"\\f76b"}.fa-biking:before,.fa-person-biking:before{content:"\\f84a"}.fa-broom:before{content:"\\f51a"}.fa-shield-heart:before{content:"\\e574"}.fa-gopuram:before{content:"\\f664"}.fa-earth-oceania:before,.fa-globe-oceania:before{content:"\\e47b"}.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before{content:"\\f2d3"}.fa-hashtag:before{content:"\\23"}.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before{content:"\\f424"}.fa-oil-can:before{content:"\\f613"}.fa-t:before{content:"\\54"}.fa-hippo:before{content:"\\f6ed"}.fa-chart-column:before{content:"\\e0e3"}.fa-infinity:before{content:"\\f534"}.fa-vial-circle-check:before{content:"\\e596"}.fa-person-arrow-down-to-line:before{content:"\\e538"}.fa-voicemail:before{content:"\\f897"}.fa-fan:before{content:"\\f863"}.fa-person-walking-luggage:before{content:"\\e554"}.fa-arrows-alt-v:before,.fa-up-down:before{content:"\\f338"}.fa-cloud-moon-rain:before{content:"\\f73c"}.fa-calendar:before{content:"\\f133"}.fa-trailer:before{content:"\\e041"}.fa-bahai:before,.fa-haykal:before{content:"\\f666"}.fa-sd-card:before{content:"\\f7c2"}.fa-dragon:before{content:"\\f6d5"}.fa-shoe-prints:before{content:"\\f54b"}.fa-circle-plus:before,.fa-plus-circle:before{content:"\\f055"}.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before{content:"\\f58b"}.fa-hand-holding:before{content:"\\f4bd"}.fa-plug-circle-exclamation:before{content:"\\e55d"}.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before{content:"\\f127"}.fa-clone:before{content:"\\f24d"}.fa-person-walking-arrow-loop-left:before{content:"\\e551"}.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before{content:"\\f882"}.fa-fire-alt:before,.fa-fire-flame-curved:before{content:"\\f7e4"}.fa-tornado:before{content:"\\f76f"}.fa-file-circle-plus:before{content:"\\e494"}.fa-book-quran:before,.fa-quran:before{content:"\\f687"}.fa-anchor:before{content:"\\f13d"}.fa-border-all:before{content:"\\f84c"}.fa-angry:before,.fa-face-angry:before{content:"\\f556"}.fa-cookie-bite:before{content:"\\f564"}.fa-arrow-trend-down:before{content:"\\e097"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-draw-polygon:before{content:"\\f5ee"}.fa-balance-scale:before,.fa-scale-balanced:before{content:"\\f24e"}.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before{content:"\\f62a"}.fa-shower:before{content:"\\f2cc"}.fa-desktop-alt:before,.fa-desktop:before{content:"\\f390"}.fa-m:before{content:"\\4d"}.fa-table-list:before,.fa-th-list:before{content:"\\f00b"}.fa-comment-sms:before,.fa-sms:before{content:"\\f7cd"}.fa-book:before{content:"\\f02d"}.fa-user-plus:before{content:"\\f234"}.fa-check:before{content:"\\f00c"}.fa-battery-4:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-house-circle-check:before{content:"\\e509"}.fa-angle-left:before{content:"\\f104"}.fa-diagram-successor:before{content:"\\e47a"}.fa-truck-arrow-right:before{content:"\\e58b"}.fa-arrows-split-up-and-left:before{content:"\\e4bc"}.fa-fist-raised:before,.fa-hand-fist:before{content:"\\f6de"}.fa-cloud-moon:before{content:"\\f6c3"}.fa-briefcase:before{content:"\\f0b1"}.fa-person-falling:before{content:"\\e546"}.fa-image-portrait:before,.fa-portrait:before{content:"\\f3e0"}.fa-user-tag:before{content:"\\f507"}.fa-rug:before{content:"\\e569"}.fa-earth-europe:before,.fa-globe-europe:before{content:"\\f7a2"}.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before{content:"\\f59d"}.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before{content:"\\f410"}.fa-baht-sign:before{content:"\\e0ac"}.fa-book-open:before{content:"\\f518"}.fa-book-journal-whills:before,.fa-journal-whills:before{content:"\\f66a"}.fa-handcuffs:before{content:"\\e4f8"}.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before{content:"\\f071"}.fa-database:before{content:"\\f1c0"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-bottle-droplet:before{content:"\\e4c4"}.fa-mask-face:before{content:"\\e1d7"}.fa-hill-rockslide:before{content:"\\e508"}.fa-exchange-alt:before,.fa-right-left:before{content:"\\f362"}.fa-paper-plane:before{content:"\\f1d8"}.fa-road-circle-exclamation:before{content:"\\e565"}.fa-dungeon:before{content:"\\f6d9"}.fa-align-right:before{content:"\\f038"}.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before{content:"\\f53b"}.fa-life-ring:before{content:"\\f1cd"}.fa-hands:before,.fa-sign-language:before,.fa-signing:before{content:"\\f2a7"}.fa-calendar-day:before{content:"\\f783"}.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before{content:"\\f5c5"}.fa-arrows-up-down:before,.fa-arrows-v:before{content:"\\f07d"}.fa-face-grimace:before,.fa-grimace:before{content:"\\f57f"}.fa-wheelchair-alt:before,.fa-wheelchair-move:before{content:"\\e2ce"}.fa-level-down-alt:before,.fa-turn-down:before{content:"\\f3be"}.fa-person-walking-arrow-right:before{content:"\\e552"}.fa-envelope-square:before,.fa-square-envelope:before{content:"\\f199"}.fa-dice:before{content:"\\f522"}.fa-bowling-ball:before{content:"\\f436"}.fa-brain:before{content:"\\f5dc"}.fa-band-aid:before,.fa-bandage:before{content:"\\f462"}.fa-calendar-minus:before{content:"\\f272"}.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before{content:"\\f057"}.fa-gifts:before{content:"\\f79c"}.fa-hotel:before{content:"\\f594"}.fa-earth-asia:before,.fa-globe-asia:before{content:"\\f57e"}.fa-id-card-alt:before,.fa-id-card-clip:before{content:"\\f47f"}.fa-magnifying-glass-plus:before,.fa-search-plus:before{content:"\\f00e"}.fa-thumbs-up:before{content:"\\f164"}.fa-user-clock:before{content:"\\f4fd"}.fa-allergies:before,.fa-hand-dots:before{content:"\\f461"}.fa-file-invoice:before{content:"\\f570"}.fa-window-minimize:before{content:"\\f2d1"}.fa-coffee:before,.fa-mug-saucer:before{content:"\\f0f4"}.fa-brush:before{content:"\\f55d"}.fa-mask:before{content:"\\f6fa"}.fa-magnifying-glass-minus:before,.fa-search-minus:before{content:"\\f010"}.fa-ruler-vertical:before{content:"\\f548"}.fa-user-alt:before,.fa-user-large:before{content:"\\f406"}.fa-train-tram:before{content:"\\e5b4"}.fa-user-nurse:before{content:"\\f82f"}.fa-syringe:before{content:"\\f48e"}.fa-cloud-sun:before{content:"\\f6c4"}.fa-stopwatch-20:before{content:"\\e06f"}.fa-square-full:before{content:"\\f45c"}.fa-magnet:before{content:"\\f076"}.fa-jar:before{content:"\\e516"}.fa-note-sticky:before,.fa-sticky-note:before{content:"\\f249"}.fa-bug-slash:before{content:"\\e490"}.fa-arrow-up-from-water-pump:before{content:"\\e4b6"}.fa-bone:before{content:"\\f5d7"}.fa-user-injured:before{content:"\\f728"}.fa-face-sad-tear:before,.fa-sad-tear:before{content:"\\f5b4"}.fa-plane:before{content:"\\f072"}.fa-tent-arrows-down:before{content:"\\e581"}.fa-exclamation:before{content:"\\21"}.fa-arrows-spin:before{content:"\\e4bb"}.fa-print:before{content:"\\f02f"}.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before{content:"\\e2bb"}.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before{content:"\\24"}.fa-x:before{content:"\\58"}.fa-magnifying-glass-dollar:before,.fa-search-dollar:before{content:"\\f688"}.fa-users-cog:before,.fa-users-gear:before{content:"\\f509"}.fa-person-military-pointing:before{content:"\\e54a"}.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before{content:"\\f19c"}.fa-umbrella:before{content:"\\f0e9"}.fa-trowel:before{content:"\\e589"}.fa-d:before{content:"\\44"}.fa-stapler:before{content:"\\e5af"}.fa-masks-theater:before,.fa-theater-masks:before{content:"\\f630"}.fa-kip-sign:before{content:"\\e1c4"}.fa-hand-point-left:before{content:"\\f0a5"}.fa-handshake-alt:before,.fa-handshake-simple:before{content:"\\f4c6"}.fa-fighter-jet:before,.fa-jet-fighter:before{content:"\\f0fb"}.fa-share-alt-square:before,.fa-square-share-nodes:before{content:"\\f1e1"}.fa-barcode:before{content:"\\f02a"}.fa-plus-minus:before{content:"\\e43c"}.fa-video-camera:before,.fa-video:before{content:"\\f03d"}.fa-graduation-cap:before,.fa-mortar-board:before{content:"\\f19d"}.fa-hand-holding-medical:before{content:"\\e05c"}.fa-person-circle-check:before{content:"\\e53e"}.fa-level-up-alt:before,.fa-turn-up:before{content:"\\f3bf"}
.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host,:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}.fa-brands,.fab{font-weight:400}.fa-monero:before{content:"\\f3d0"}.fa-hooli:before{content:"\\f427"}.fa-yelp:before{content:"\\f1e9"}.fa-cc-visa:before{content:"\\f1f0"}.fa-lastfm:before{content:"\\f202"}.fa-shopware:before{content:"\\f5b5"}.fa-creative-commons-nc:before{content:"\\f4e8"}.fa-aws:before{content:"\\f375"}.fa-redhat:before{content:"\\f7bc"}.fa-yoast:before{content:"\\f2b1"}.fa-cloudflare:before{content:"\\e07d"}.fa-ups:before{content:"\\f7e0"}.fa-pixiv:before{content:"\\e640"}.fa-wpexplorer:before{content:"\\f2de"}.fa-dyalog:before{content:"\\f399"}.fa-bity:before{content:"\\f37a"}.fa-stackpath:before{content:"\\f842"}.fa-buysellads:before{content:"\\f20d"}.fa-first-order:before{content:"\\f2b0"}.fa-modx:before{content:"\\f285"}.fa-guilded:before{content:"\\e07e"}.fa-vnv:before{content:"\\f40b"}.fa-js-square:before,.fa-square-js:before{content:"\\f3b9"}.fa-microsoft:before{content:"\\f3ca"}.fa-qq:before{content:"\\f1d6"}.fa-orcid:before{content:"\\f8d2"}.fa-java:before{content:"\\f4e4"}.fa-invision:before{content:"\\f7b0"}.fa-creative-commons-pd-alt:before{content:"\\f4ed"}.fa-centercode:before{content:"\\f380"}.fa-glide-g:before{content:"\\f2a6"}.fa-drupal:before{content:"\\f1a9"}.fa-hire-a-helper:before{content:"\\f3b0"}.fa-creative-commons-by:before{content:"\\f4e7"}.fa-unity:before{content:"\\e049"}.fa-whmcs:before{content:"\\f40d"}.fa-rocketchat:before{content:"\\f3e8"}.fa-vk:before{content:"\\f189"}.fa-untappd:before{content:"\\f405"}.fa-mailchimp:before{content:"\\f59e"}.fa-css3-alt:before{content:"\\f38b"}.fa-reddit-square:before,.fa-square-reddit:before{content:"\\f1a2"}.fa-vimeo-v:before{content:"\\f27d"}.fa-contao:before{content:"\\f26d"}.fa-square-font-awesome:before{content:"\\e5ad"}.fa-deskpro:before{content:"\\f38f"}.fa-brave:before{content:"\\e63c"}.fa-sistrix:before{content:"\\f3ee"}.fa-instagram-square:before,.fa-square-instagram:before{content:"\\e055"}.fa-battle-net:before{content:"\\f835"}.fa-the-red-yeti:before{content:"\\f69d"}.fa-hacker-news-square:before,.fa-square-hacker-news:before{content:"\\f3af"}.fa-edge:before{content:"\\f282"}.fa-threads:before{content:"\\e618"}.fa-napster:before{content:"\\f3d2"}.fa-snapchat-square:before,.fa-square-snapchat:before{content:"\\f2ad"}.fa-google-plus-g:before{content:"\\f0d5"}.fa-artstation:before{content:"\\f77a"}.fa-markdown:before{content:"\\f60f"}.fa-sourcetree:before{content:"\\f7d3"}.fa-google-plus:before{content:"\\f2b3"}.fa-diaspora:before{content:"\\f791"}.fa-foursquare:before{content:"\\f180"}.fa-stack-overflow:before{content:"\\f16c"}.fa-github-alt:before{content:"\\f113"}.fa-phoenix-squadron:before{content:"\\f511"}.fa-pagelines:before{content:"\\f18c"}.fa-algolia:before{content:"\\f36c"}.fa-red-river:before{content:"\\f3e3"}.fa-creative-commons-sa:before{content:"\\f4ef"}.fa-safari:before{content:"\\f267"}.fa-google:before{content:"\\f1a0"}.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before{content:"\\f35c"}.fa-atlassian:before{content:"\\f77b"}.fa-linkedin-in:before{content:"\\f0e1"}.fa-digital-ocean:before{content:"\\f391"}.fa-nimblr:before{content:"\\f5a8"}.fa-chromecast:before{content:"\\f838"}.fa-evernote:before{content:"\\f839"}.fa-hacker-news:before{content:"\\f1d4"}.fa-creative-commons-sampling:before{content:"\\f4f0"}.fa-adversal:before{content:"\\f36a"}.fa-creative-commons:before{content:"\\f25e"}.fa-watchman-monitoring:before{content:"\\e087"}.fa-fonticons:before{content:"\\f280"}.fa-weixin:before{content:"\\f1d7"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-codepen:before{content:"\\f1cb"}.fa-git-alt:before{content:"\\f841"}.fa-lyft:before{content:"\\f3c3"}.fa-rev:before{content:"\\f5b2"}.fa-windows:before{content:"\\f17a"}.fa-wizards-of-the-coast:before{content:"\\f730"}.fa-square-viadeo:before,.fa-viadeo-square:before{content:"\\f2aa"}.fa-meetup:before{content:"\\f2e0"}.fa-centos:before{content:"\\f789"}.fa-adn:before{content:"\\f170"}.fa-cloudsmith:before{content:"\\f384"}.fa-opensuse:before{content:"\\e62b"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-dribbble-square:before,.fa-square-dribbble:before{content:"\\f397"}.fa-codiepie:before{content:"\\f284"}.fa-node:before{content:"\\f419"}.fa-mix:before{content:"\\f3cb"}.fa-steam:before{content:"\\f1b6"}.fa-cc-apple-pay:before{content:"\\f416"}.fa-scribd:before{content:"\\f28a"}.fa-debian:before{content:"\\e60b"}.fa-openid:before{content:"\\f19b"}.fa-instalod:before{content:"\\e081"}.fa-expeditedssl:before{content:"\\f23e"}.fa-sellcast:before{content:"\\f2da"}.fa-square-twitter:before,.fa-twitter-square:before{content:"\\f081"}.fa-r-project:before{content:"\\f4f7"}.fa-delicious:before{content:"\\f1a5"}.fa-freebsd:before{content:"\\f3a4"}.fa-vuejs:before{content:"\\f41f"}.fa-accusoft:before{content:"\\f369"}.fa-ioxhost:before{content:"\\f208"}.fa-fonticons-fi:before{content:"\\f3a2"}.fa-app-store:before{content:"\\f36f"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-itunes-note:before{content:"\\f3b5"}.fa-golang:before{content:"\\e40f"}.fa-kickstarter:before{content:"\\f3bb"}.fa-grav:before{content:"\\f2d6"}.fa-weibo:before{content:"\\f18a"}.fa-uncharted:before{content:"\\e084"}.fa-firstdraft:before{content:"\\f3a1"}.fa-square-youtube:before,.fa-youtube-square:before{content:"\\f431"}.fa-wikipedia-w:before{content:"\\f266"}.fa-rendact:before,.fa-wpressr:before{content:"\\f3e4"}.fa-angellist:before{content:"\\f209"}.fa-galactic-republic:before{content:"\\f50c"}.fa-nfc-directional:before{content:"\\e530"}.fa-skype:before{content:"\\f17e"}.fa-joget:before{content:"\\f3b7"}.fa-fedora:before{content:"\\f798"}.fa-stripe-s:before{content:"\\f42a"}.fa-meta:before{content:"\\e49b"}.fa-laravel:before{content:"\\f3bd"}.fa-hotjar:before{content:"\\f3b1"}.fa-bluetooth-b:before{content:"\\f294"}.fa-square-letterboxd:before{content:"\\e62e"}.fa-sticker-mule:before{content:"\\f3f7"}.fa-creative-commons-zero:before{content:"\\f4f3"}.fa-hips:before{content:"\\f452"}.fa-behance:before{content:"\\f1b4"}.fa-reddit:before{content:"\\f1a1"}.fa-discord:before{content:"\\f392"}.fa-chrome:before{content:"\\f268"}.fa-app-store-ios:before{content:"\\f370"}.fa-cc-discover:before{content:"\\f1f2"}.fa-wpbeginner:before{content:"\\f297"}.fa-confluence:before{content:"\\f78d"}.fa-shoelace:before{content:"\\e60c"}.fa-mdb:before{content:"\\f8ca"}.fa-dochub:before{content:"\\f394"}.fa-accessible-icon:before{content:"\\f368"}.fa-ebay:before{content:"\\f4f4"}.fa-amazon:before{content:"\\f270"}.fa-unsplash:before{content:"\\e07c"}.fa-yarn:before{content:"\\f7e3"}.fa-square-steam:before,.fa-steam-square:before{content:"\\f1b7"}.fa-500px:before{content:"\\f26e"}.fa-square-vimeo:before,.fa-vimeo-square:before{content:"\\f194"}.fa-asymmetrik:before{content:"\\f372"}.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-gratipay:before{content:"\\f184"}.fa-apple:before{content:"\\f179"}.fa-hive:before{content:"\\e07f"}.fa-gitkraken:before{content:"\\f3a6"}.fa-keybase:before{content:"\\f4f5"}.fa-apple-pay:before{content:"\\f415"}.fa-padlet:before{content:"\\e4a0"}.fa-amazon-pay:before{content:"\\f42c"}.fa-github-square:before,.fa-square-github:before{content:"\\f092"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-fedex:before{content:"\\f797"}.fa-phoenix-framework:before{content:"\\f3dc"}.fa-shopify:before{content:"\\e057"}.fa-neos:before{content:"\\f612"}.fa-square-threads:before{content:"\\e619"}.fa-hackerrank:before{content:"\\f5f7"}.fa-researchgate:before{content:"\\f4f8"}.fa-swift:before{content:"\\f8e1"}.fa-angular:before{content:"\\f420"}.fa-speakap:before{content:"\\f3f3"}.fa-angrycreative:before{content:"\\f36e"}.fa-y-combinator:before{content:"\\f23b"}.fa-empire:before{content:"\\f1d1"}.fa-envira:before{content:"\\f299"}.fa-google-scholar:before{content:"\\e63b"}.fa-gitlab-square:before,.fa-square-gitlab:before{content:"\\e5ae"}.fa-studiovinari:before{content:"\\f3f8"}.fa-pied-piper:before{content:"\\f2ae"}.fa-wordpress:before{content:"\\f19a"}.fa-product-hunt:before{content:"\\f288"}.fa-firefox:before{content:"\\f269"}.fa-linode:before{content:"\\f2b8"}.fa-goodreads:before{content:"\\f3a8"}.fa-odnoklassniki-square:before,.fa-square-odnoklassniki:before{content:"\\f264"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-sith:before{content:"\\f512"}.fa-themeisle:before{content:"\\f2b2"}.fa-page4:before{content:"\\f3d7"}.fa-hashnode:before{content:"\\e499"}.fa-react:before{content:"\\f41b"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-squarespace:before{content:"\\f5be"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-creative-commons-share:before{content:"\\f4f2"}.fa-bitcoin:before{content:"\\f379"}.fa-keycdn:before{content:"\\f3ba"}.fa-opera:before{content:"\\f26a"}.fa-itch-io:before{content:"\\f83a"}.fa-umbraco:before{content:"\\f8e8"}.fa-galactic-senate:before{content:"\\f50d"}.fa-ubuntu:before{content:"\\f7df"}.fa-draft2digital:before{content:"\\f396"}.fa-stripe:before{content:"\\f429"}.fa-houzz:before{content:"\\f27c"}.fa-gg:before{content:"\\f260"}.fa-dhl:before{content:"\\f790"}.fa-pinterest-square:before,.fa-square-pinterest:before{content:"\\f0d3"}.fa-xing:before{content:"\\f168"}.fa-blackberry:before{content:"\\f37b"}.fa-creative-commons-pd:before{content:"\\f4ec"}.fa-playstation:before{content:"\\f3df"}.fa-quinscape:before{content:"\\f459"}.fa-less:before{content:"\\f41d"}.fa-blogger-b:before{content:"\\f37d"}.fa-opencart:before{content:"\\f23d"}.fa-vine:before{content:"\\f1ca"}.fa-signal-messenger:before{content:"\\e663"}.fa-paypal:before{content:"\\f1ed"}.fa-gitlab:before{content:"\\f296"}.fa-typo3:before{content:"\\f42b"}.fa-reddit-alien:before{content:"\\f281"}.fa-yahoo:before{content:"\\f19e"}.fa-dailymotion:before{content:"\\e052"}.fa-affiliatetheme:before{content:"\\f36b"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-bootstrap:before{content:"\\f836"}.fa-odnoklassniki:before{content:"\\f263"}.fa-nfc-symbol:before{content:"\\e531"}.fa-mintbit:before{content:"\\e62f"}.fa-ethereum:before{content:"\\f42e"}.fa-speaker-deck:before{content:"\\f83c"}.fa-creative-commons-nc-eu:before{content:"\\f4e9"}.fa-patreon:before{content:"\\f3d9"}.fa-avianex:before{content:"\\f374"}.fa-ello:before{content:"\\f5f1"}.fa-gofore:before{content:"\\f3a7"}.fa-bimobject:before{content:"\\f378"}.fa-brave-reverse:before{content:"\\e63d"}.fa-facebook-f:before{content:"\\f39e"}.fa-google-plus-square:before,.fa-square-google-plus:before{content:"\\f0d4"}.fa-mandalorian:before{content:"\\f50f"}.fa-first-order-alt:before{content:"\\f50a"}.fa-osi:before{content:"\\f41a"}.fa-google-wallet:before{content:"\\f1ee"}.fa-d-and-d-beyond:before{content:"\\f6ca"}.fa-periscope:before{content:"\\f3da"}.fa-fulcrum:before{content:"\\f50b"}.fa-cloudscale:before{content:"\\f383"}.fa-forumbee:before{content:"\\f211"}.fa-mizuni:before{content:"\\f3cc"}.fa-schlix:before{content:"\\f3ea"}.fa-square-xing:before,.fa-xing-square:before{content:"\\f169"}.fa-bandcamp:before{content:"\\f2d5"}.fa-wpforms:before{content:"\\f298"}.fa-cloudversify:before{content:"\\f385"}.fa-usps:before{content:"\\f7e1"}.fa-megaport:before{content:"\\f5a3"}.fa-magento:before{content:"\\f3c4"}.fa-spotify:before{content:"\\f1bc"}.fa-optin-monster:before{content:"\\f23c"}.fa-fly:before{content:"\\f417"}.fa-aviato:before{content:"\\f421"}.fa-itunes:before{content:"\\f3b4"}.fa-cuttlefish:before{content:"\\f38c"}.fa-blogger:before{content:"\\f37c"}.fa-flickr:before{content:"\\f16e"}.fa-viber:before{content:"\\f409"}.fa-soundcloud:before{content:"\\f1be"}.fa-digg:before{content:"\\f1a6"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-letterboxd:before{content:"\\e62d"}.fa-symfony:before{content:"\\f83d"}.fa-maxcdn:before{content:"\\f136"}.fa-etsy:before{content:"\\f2d7"}.fa-facebook-messenger:before{content:"\\f39f"}.fa-audible:before{content:"\\f373"}.fa-think-peaks:before{content:"\\f731"}.fa-bilibili:before{content:"\\e3d9"}.fa-erlang:before{content:"\\f39d"}.fa-x-twitter:before{content:"\\e61b"}.fa-cotton-bureau:before{content:"\\f89e"}.fa-dashcube:before{content:"\\f210"}.fa-42-group:before,.fa-innosoft:before{content:"\\e080"}.fa-stack-exchange:before{content:"\\f18d"}.fa-elementor:before{content:"\\f430"}.fa-pied-piper-square:before,.fa-square-pied-piper:before{content:"\\e01e"}.fa-creative-commons-nd:before{content:"\\f4eb"}.fa-palfed:before{content:"\\f3d8"}.fa-superpowers:before{content:"\\f2dd"}.fa-resolving:before{content:"\\f3e7"}.fa-xbox:before{content:"\\f412"}.fa-searchengin:before{content:"\\f3eb"}.fa-tiktok:before{content:"\\e07b"}.fa-facebook-square:before,.fa-square-facebook:before{content:"\\f082"}.fa-renren:before{content:"\\f18b"}.fa-linux:before{content:"\\f17c"}.fa-glide:before{content:"\\f2a5"}.fa-linkedin:before{content:"\\f08c"}.fa-hubspot:before{content:"\\f3b2"}.fa-deploydog:before{content:"\\f38e"}.fa-twitch:before{content:"\\f1e8"}.fa-ravelry:before{content:"\\f2d9"}.fa-mixer:before{content:"\\e056"}.fa-lastfm-square:before,.fa-square-lastfm:before{content:"\\f203"}.fa-vimeo:before{content:"\\f40a"}.fa-mendeley:before{content:"\\f7b3"}.fa-uniregistry:before{content:"\\f404"}.fa-figma:before{content:"\\f799"}.fa-creative-commons-remix:before{content:"\\f4ee"}.fa-cc-amazon-pay:before{content:"\\f42d"}.fa-dropbox:before{content:"\\f16b"}.fa-instagram:before{content:"\\f16d"}.fa-cmplid:before{content:"\\e360"}.fa-upwork:before{content:"\\e641"}.fa-facebook:before{content:"\\f09a"}.fa-gripfire:before{content:"\\f3ac"}.fa-jedi-order:before{content:"\\f50e"}.fa-uikit:before{content:"\\f403"}.fa-fort-awesome-alt:before{content:"\\f3a3"}.fa-phabricator:before{content:"\\f3db"}.fa-ussunnah:before{content:"\\f407"}.fa-earlybirds:before{content:"\\f39a"}.fa-trade-federation:before{content:"\\f513"}.fa-autoprefixer:before{content:"\\f41c"}.fa-whatsapp:before{content:"\\f232"}.fa-slideshare:before{content:"\\f1e7"}.fa-google-play:before{content:"\\f3ab"}.fa-viadeo:before{content:"\\f2a9"}.fa-line:before{content:"\\f3c0"}.fa-google-drive:before{content:"\\f3aa"}.fa-servicestack:before{content:"\\f3ec"}.fa-simplybuilt:before{content:"\\f215"}.fa-bitbucket:before{content:"\\f171"}.fa-imdb:before{content:"\\f2d8"}.fa-deezer:before{content:"\\e077"}.fa-raspberry-pi:before{content:"\\f7bb"}.fa-jira:before{content:"\\f7b1"}.fa-docker:before{content:"\\f395"}.fa-screenpal:before{content:"\\e570"}.fa-bluetooth:before{content:"\\f293"}.fa-gitter:before{content:"\\f426"}.fa-d-and-d:before{content:"\\f38d"}.fa-microblog:before{content:"\\e01a"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-gg-circle:before{content:"\\f261"}.fa-pied-piper-hat:before{content:"\\f4e5"}.fa-kickstarter-k:before{content:"\\f3bc"}.fa-yandex:before{content:"\\f413"}.fa-readme:before{content:"\\f4d5"}.fa-html5:before{content:"\\f13b"}.fa-sellsy:before{content:"\\f213"}.fa-sass:before{content:"\\f41e"}.fa-wirsindhandwerk:before,.fa-wsh:before{content:"\\e2d0"}.fa-buromobelexperte:before{content:"\\f37f"}.fa-salesforce:before{content:"\\f83b"}.fa-octopus-deploy:before{content:"\\e082"}.fa-medapps:before{content:"\\f3c6"}.fa-ns8:before{content:"\\f3d5"}.fa-pinterest-p:before{content:"\\f231"}.fa-apper:before{content:"\\f371"}.fa-fort-awesome:before{content:"\\f286"}.fa-waze:before{content:"\\f83f"}.fa-cc-jcb:before{content:"\\f24b"}.fa-snapchat-ghost:before,.fa-snapchat:before{content:"\\f2ab"}.fa-fantasy-flight-games:before{content:"\\f6dc"}.fa-rust:before{content:"\\e07a"}.fa-wix:before{content:"\\f5cf"}.fa-behance-square:before,.fa-square-behance:before{content:"\\f1b5"}.fa-supple:before{content:"\\f3f9"}.fa-webflow:before{content:"\\e65c"}.fa-rebel:before{content:"\\f1d0"}.fa-css3:before{content:"\\f13c"}.fa-staylinked:before{content:"\\f3f5"}.fa-kaggle:before{content:"\\f5fa"}.fa-space-awesome:before{content:"\\e5ac"}.fa-deviantart:before{content:"\\f1bd"}.fa-cpanel:before{content:"\\f388"}.fa-goodreads-g:before{content:"\\f3a9"}.fa-git-square:before,.fa-square-git:before{content:"\\f1d2"}.fa-square-tumblr:before,.fa-tumblr-square:before{content:"\\f174"}.fa-trello:before{content:"\\f181"}.fa-creative-commons-nc-jp:before{content:"\\f4ea"}.fa-get-pocket:before{content:"\\f265"}.fa-perbyte:before{content:"\\e083"}.fa-grunt:before{content:"\\f3ad"}.fa-weebly:before{content:"\\f5cc"}.fa-connectdevelop:before{content:"\\f20e"}.fa-leanpub:before{content:"\\f212"}.fa-black-tie:before{content:"\\f27e"}.fa-themeco:before{content:"\\f5c6"}.fa-python:before{content:"\\f3e2"}.fa-android:before{content:"\\f17b"}.fa-bots:before{content:"\\e340"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-hornbill:before{content:"\\f592"}.fa-js:before{content:"\\f3b8"}.fa-ideal:before{content:"\\e013"}.fa-git:before{content:"\\f1d3"}.fa-dev:before{content:"\\f6cc"}.fa-sketch:before{content:"\\f7c6"}.fa-yandex-international:before{content:"\\f414"}.fa-cc-amex:before{content:"\\f1f3"}.fa-uber:before{content:"\\f402"}.fa-github:before{content:"\\f09b"}.fa-php:before{content:"\\f457"}.fa-alipay:before{content:"\\f642"}.fa-youtube:before{content:"\\f167"}.fa-skyatlas:before{content:"\\f216"}.fa-firefox-browser:before{content:"\\e007"}.fa-replyd:before{content:"\\f3e6"}.fa-suse:before{content:"\\f7d6"}.fa-jenkins:before{content:"\\f3b6"}.fa-twitter:before{content:"\\f099"}.fa-rockrms:before{content:"\\f3e9"}.fa-pinterest:before{content:"\\f0d2"}.fa-buffer:before{content:"\\f837"}.fa-npm:before{content:"\\f3d4"}.fa-yammer:before{content:"\\f840"}.fa-btc:before{content:"\\f15a"}.fa-dribbble:before{content:"\\f17d"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-internet-explorer:before{content:"\\f26b"}.fa-stubber:before{content:"\\e5c7"}.fa-telegram-plane:before,.fa-telegram:before{content:"\\f2c6"}.fa-old-republic:before{content:"\\f510"}.fa-odysee:before{content:"\\e5c6"}.fa-square-whatsapp:before,.fa-whatsapp-square:before{content:"\\f40c"}.fa-node-js:before{content:"\\f3d3"}.fa-edge-legacy:before{content:"\\e078"}.fa-slack-hash:before,.fa-slack:before{content:"\\f198"}.fa-medrt:before{content:"\\f3c8"}.fa-usb:before{content:"\\f287"}.fa-tumblr:before{content:"\\f173"}.fa-vaadin:before{content:"\\f408"}.fa-quora:before{content:"\\f2c4"}.fa-square-x-twitter:before{content:"\\e61a"}.fa-reacteurope:before{content:"\\f75d"}.fa-medium-m:before,.fa-medium:before{content:"\\f23a"}.fa-amilia:before{content:"\\f36d"}.fa-mixcloud:before{content:"\\f289"}.fa-flipboard:before{content:"\\f44d"}.fa-viacoin:before{content:"\\f237"}.fa-critical-role:before{content:"\\f6c9"}.fa-sitrox:before{content:"\\e44a"}.fa-discourse:before{content:"\\f393"}.fa-joomla:before{content:"\\f1aa"}.fa-mastodon:before{content:"\\f4f6"}.fa-airbnb:before{content:"\\f834"}.fa-wolf-pack-battalion:before{content:"\\f514"}.fa-buy-n-large:before{content:"\\f8a6"}.fa-gulp:before{content:"\\f3ae"}.fa-creative-commons-sampling-plus:before{content:"\\f4f1"}.fa-strava:before{content:"\\f428"}.fa-ember:before{content:"\\f423"}.fa-canadian-maple-leaf:before{content:"\\f785"}.fa-teamspeak:before{content:"\\f4f9"}.fa-pushed:before{content:"\\f3e1"}.fa-wordpress-simple:before{content:"\\f411"}.fa-nutritionix:before{content:"\\f3d6"}.fa-wodu:before{content:"\\e088"}.fa-google-pay:before{content:"\\e079"}.fa-intercom:before{content:"\\f7af"}.fa-zhihu:before{content:"\\f63f"}.fa-korvue:before{content:"\\f42f"}.fa-pix:before{content:"\\e43a"}.fa-steam-symbol:before{content:"\\f3f6"}:host,:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}.fa-regular,.far{font-weight:400}:host,:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}.fa-solid,.fas{font-weight:900}@font-face{font-family:"Font Awesome 5 Brands";font-display:block;font-weight:400;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:900;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:400;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype");unicode-range:u+f003,u+f006,u+f014,u+f016-f017,u+f01a-f01b,u+f01d,u+f022,u+f03e,u+f044,u+f046,u+f05c-f05d,u+f06e,u+f070,u+f087-f088,u+f08a,u+f094,u+f096-f097,u+f09d,u+f0a0,u+f0a2,u+f0a4-f0a7,u+f0c5,u+f0c7,u+f0e5-f0e6,u+f0eb,u+f0f6-f0f8,u+f10c,u+f114-f115,u+f118-f11a,u+f11c-f11d,u+f133,u+f147,u+f14e,u+f150-f152,u+f185-f186,u+f18e,u+f190-f192,u+f196,u+f1c1-f1c9,u+f1d9,u+f1db,u+f1e3,u+f1ea,u+f1f7,u+f1f9,u+f20a,u+f247-f248,u+f24a,u+f24d,u+f255-f25b,u+f25d,u+f271-f274,u+f278,u+f27b,u+f28c,u+f28e,u+f29c,u+f2b5,u+f2b7,u+f2ba,u+f2bc,u+f2be,u+f2c0-f2c1,u+f2c3,u+f2d0,u+f2d2,u+f2d4,u+f2dc}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-v4compatibility.woff2) format("woff2"),url(../webfonts/fa-v4compatibility.ttf) format("truetype");unicode-range:u+f041,u+f047,u+f065-f066,u+f07d-f07e,u+f080,u+f08b,u+f08e,u+f090,u+f09a,u+f0ac,u+f0ae,u+f0b2,u+f0d0,u+f0d6,u+f0e4,u+f0ec,u+f10a-f10b,u+f123,u+f13e,u+f148-f149,u+f14c,u+f156,u+f15e,u+f160-f161,u+f163,u+f175-f178,u+f195,u+f1f8,u+f219,u+f27a}</style><style data-request="v38-pay-gap">body>section:first-of-type:not(.closing),body>.page-header:first-child {padding-top:0;}</style><style data-request="v40-detail-spacing">body {padding-top:30px;}</style><style>@font-face{font-family:'Pretendard Variable';font-style:normal;font-weight:45 920;font-display:swap;src:url(/renewal-assets/9599f12fd42fc0bce1cd50b47a0c022e108d7aa64dd0d1bb0ed44f3282d900b4.woff2) format('woff2');}</style></head>
<body>
<div class="page-header">
<div class="label">GOLD TENBAGGER</div>
<h1>골드텐버거반이란<span>?</span></h1>
</div>
<div class="container">
<!-- 핵심 개념 -->
<section>
<div class="concept-list">
<div class="concept-card fade-in visible">
<div class="icon"><i class="fa-solid fa-chart-line"></i></div>
<div class="content">
<h3>중장기 관점의 수익 극대화</h3>
<p>투자기간을 확장하여, 단기 변동에 흔들리지 않고 더 큰 수익을 추구하는 방식입니다.</p>
</div>
</div>
<div class="concept-card fade-in visible">
<div class="icon"><i class="fa-solid fa-clipboard-check"></i></div>
<div class="content">
<h3>주기적인 흐름 점검</h3>
<p>텔레그램 골드텐버거반에서 추천된 종목은 정기적으로 흐름을 점검하며 관리합니다.</p>
</div>
</div>
<div class="concept-card fade-in visible">
<div class="icon"><i class="fa-solid fa-mug-hot"></i></div>
<div class="content">
<h3>바닥권에서의 여유로운 매집</h3>
<p>가격이 바닥권에 위치할 때, 여유를 두고 모아가는 세부 전략을 제시합니다.</p>
<span class="sub">1차~3차 매수로 부담 없이 진행</span>
</div>
</div>
<div class="concept-card fade-in visible">
<div class="icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
<div class="content">
<h3>상승 구간에서의 체계적 익절</h3>
<p>본격적인 상승 흐름이 전개되면, 목표가(50~300%) 도달 시점에 맞춰 1~3차에 걸쳐 수익을 극대화할 수 있도록 상세 익절 전략을 안내합니다.</p>
</div>
</div>
</div>
</section>
<!-- 이런 분들에게 -->
<section>
<h2 class="section-title fade-in visible">이런 투자자에게<br/><span>의미가 있습니다</span></h2>
<div class="target-box fade-in visible">
<h3>골드텐버거반은<br/>이런 투자자에게 희망이 됩니다.</h3>
<ul class="target-list">
<li>시간적 여유가 없어, 복잡하게 신경 쓰지 않고 투자하고 싶은 분</li>
<li>수익이 날 때는 소폭에 그치고, 손실이 날 때는 크게 확대해 본 경험이 있는 분</li>
<li>뇌동매매와 잦은 매매로 손절이 반복되며 자신감이 낮아진 분</li>
<li>한 번의 수익으로 50~300% 이상의 성과를 경험해 본 적이 없는 분</li>
<li>좋은 주식과 안전한 주식을 구분하는 기본적인 판단조차 부담스러운 분</li>
<li>중기 관점에서 상위 1% 실적주로, 손절 없는 매매를 경험하고 싶은 분</li>
<li>매 분기·매년 배당을 받으며 꾸준한 상승을 누리고 싶은 분</li>
</ul>
</div>
</section>
<!-- 운영 요약 -->
<section>
<h2 class="section-title fade-in visible">운영의<br/><span>핵심 기준</span></h2>
<div class="summary-grid">
<div class="summary-card fade-in visible">
<h4>1년 관심주 20종목 내외로 압축</h4>
<p>크게 수익 중인 종목은 별도로 관리합니다.</p>
</div>
<div class="summary-card fade-in visible">
<h4>투자기간 1개월 ~ 1년</h4>
<p>분기·연배당을 받으며 중기 상승이 가능한 종목을 중심으로 합니다.</p>
</div>
<div class="summary-card fade-in visible">
<h4>목표가 50% ~ 300%</h4>
<p>목표가 도달 시 신규 포트폴리오로 재정비합니다.</p>
</div>
</div>
</section>
</div>
<!-- CLOSING: container 밖으로 빼서 선이 화면 전체로 이어짐 -->
<div class="closing fade-in visible">
<h2>서두르지 않는 자리에<br/>큰 흐름이 머뭅니다.</h2>
<p>바닥에서 모아 두고, 목표가에 닿을 때까지.</p>
<button class="cta-btn" id="joinBtn" type="button">
            골드텐버거반 가입하기
        </button>
</div>

<script>
(() => {
 let previous=0, pending=false;
 function resize(){if(pending)return;pending=true;setTimeout(()=>{pending=false;const height=Math.ceil(document.body.getBoundingClientRect().height);if(Math.abs(height-previous)>2){previous=height;window.parent.postMessage({type:'WILLCLUB_DETAIL_HEIGHT',height},'*');}});}
 new ResizeObserver(resize).observe(document.body);
 window.addEventListener('load',resize);document.fonts.ready.then(resize);resize();
 window.addEventListener('message',event=>{if(event.source===window.parent && event.data?.type==='WILLCLUB_REQUEST_HEIGHT'){previous=0;resize();}});
 const join=document.getElementById('joinBtn');if(join)join.addEventListener('click',()=>window.parent.postMessage({type:'WILLCLUB_CLICK_PAY'},'*'));
})();
<\/script></body>
</html>`,"e46427ed-40fc-4e10-91f8-12a83d34253e":`<!DOCTYPE html>

<html lang="ko">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>꽃게선생 | 매매의 대가</title>


<style>
        :root {
            --bg: #f4f1ed;
            --card: #ffffff;
            --accent: #912c2f;
            --accent-soft: #912c2f;
            --text: #1c1b19;
            --text-sub: #5c574f;
            --text-light: #8a847a;
            --border: #ebe6df;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            letter-spacing: -0.03em;
        }
        body {
            background: var(--bg);
            color: var(--text);
            line-height: 1.7;
            overflow-x: hidden;
        }
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .container {
            max-width: 880px;
            margin: 0 auto;
            padding: 0 28px;
        }
        /* ========== HERO ========== */
        .hero {
            text-align: center;
            padding: 96px 28px 80px;
        }
        .hero-badge {
            display: inline-block;
            background: var(--accent);
            color: #fff;
            font-size: 0.88rem;
            font-weight: 600;
            padding: 9px 22px;
            border-radius: 50px;
            letter-spacing: 0.08em;
            margin-bottom: 32px;
        }
        .hero h1 {
            font-size: clamp(2.3rem, 5.2vw, 3.4rem);
            font-weight: 800;
            line-height: 1.35;
            margin-bottom: 24px;
            word-break: keep-all;
        }
        .hero h1 span {
            color: var(--accent);
        }
        .hero-desc {
            font-size: 1.22rem;
            color: var(--text-sub);
            max-width: 580px;
            margin: 0 auto 20px;
            line-height: 1.85;
            word-break: keep-all;
        }
        .hero-sub {
            font-size: 1.12rem;
            color: var(--text-light);
            word-break: keep-all;
        }
        /* ========== SECTION ========== */
        section {
            padding: 80px 0;
        }
        .section-title {
            font-size: clamp(1.9rem, 4.2vw, 2.5rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 16px;
            word-break: keep-all;
            line-height: 1.4;
        }
        .section-title span {
            color: var(--accent);
        }
        .section-desc {
            text-align: center;
            font-size: 1.15rem;
            color: var(--text-sub);
            max-width: 560px;
            margin: 0 auto 48px;
            line-height: 1.8;
            word-break: keep-all;
        }
        /* ========== VALUE CARDS ========== */
        .value-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 18px;
        }
        .value-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 32px 24px;
            text-align: center;
            transition: all 0.4s ease;
        }
        .value-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 36px rgba(91, 44, 111, 0.08);
            border-color: #ddd0e8;
        }
        .value-card .icon {
            width: 52px;
            height: 52px;
            background: #f3eef7;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 18px;
            font-size: 1.35rem;
            color: var(--accent);
        }
        .value-card h4 {
            font-size: 1.18rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .value-card p {
            font-size: 1.05rem;
            color: var(--text-sub);
            line-height: 1.65;
            word-break: keep-all;
        }
        /* ========== PRINCIPLES ========== */
        .principle-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .principle-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 30px 28px;
            display: flex;
            align-items: flex-start;
            gap: 20px;
            transition: all 0.4s ease;
        }
        .principle-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(91, 44, 111, 0.07);
        }
        .principle-card .num {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            background: var(--accent);
            color: #fff;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.05rem;
        }
        .principle-card h4 {
            font-size: 1.22rem;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .principle-card p {
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.7;
            word-break: keep-all;
        }
        /* ========== HOW IT WORKS ========== */
        .step-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .step-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 28px 26px;
            display: flex;
            gap: 20px;
            align-items: flex-start;
        }
        .step-card .step-num {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            background: #f3eef7;
            color: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.1rem;
        }
        .step-card h4 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .step-card p {
            font-size: 1.08rem;
            color: var(--text-sub);
            line-height: 1.7;
            word-break: keep-all;
        }
        /* ========== SCHEDULE ========== */
        .schedule-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .schedule-item {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 24px 26px;
            display: flex;
            gap: 18px;
            align-items: flex-start;
        }
        .schedule-item .time-icon {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            background: #f3eef7;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: var(--accent);
        }
        .schedule-item h4 {
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .schedule-item p {
            font-size: 1.05rem;
            color: var(--text-sub);
            line-height: 1.65;
            word-break: keep-all;
        }
        .schedule-note {
            margin-top: 28px;
            text-align: center;
            font-size: 1.08rem;
            color: var(--text-light);
            line-height: 1.75;
            word-break: keep-all;
        }
        /* ========== CLOSING ========== */
        .closing {
            text-align: center;
            padding: 90px 28px 100px;
            border-top: 1px solid var(--border);
            width: 100%;
        }
        .closing h2 {
            font-size: clamp(1.9rem, 4.5vw, 2.6rem);
            font-weight: 750;
            line-height: 1.4;
            margin-bottom: 18px;
            word-break: keep-all;
        }
        .closing p {
            font-size: 1.18rem;
            color: var(--text-sub);
            max-width: 520px;
            margin: 0 auto 40px;
            word-break: keep-all;
            line-height: 1.8;
        }
        .cta-btn {
            display: inline-block;
            background: var(--accent);
            color: #ffffff;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 16px 42px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            letter-spacing: -0.01em;
            transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 18px rgba(91, 44, 111, 0.25);
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 28px rgba(91, 44, 111, 0.35);
            background: var(--accent-soft);
            color: #ffffff;
        }
        .cta-btn:active {
            transform: translateY(-1px);
        }
        @media (max-width: 768px) {
            .hero { padding: 64px 20px 60px; }
            .hero h1 { font-size: 2.2rem; }
            .hero-desc { font-size: 1.12rem; }
            .value-grid { grid-template-columns: 1fr; }
            .section-title { font-size: 1.85rem; }
            .principle-card, .step-card, .schedule-item {
                padding: 24px 20px;
            }
            .principle-card h4, .step-card h4 { font-size: 1.15rem; }
            .principle-card p, .step-card p { font-size: 1.05rem; }
            section { padding: 64px 0; }
            .closing { padding: 70px 20px 80px; }
            .cta-btn { font-size: 1.08rem; padding: 15px 36px; }
        }
    </style>
<style>
body {font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,sans-serif; background:#f4f1ed; color:#35282e;}
p, li, .intro, .description, .subtitle, .desc, .card-desc, .body-text {font-size:calc(16px + 2pt) !important;}
h1 {font-size:clamp(30px,4vw,48px) !important; letter-spacing:-1px;}
h2 {font-size:calc(28px + 2pt) !important; color:#50343e;}
h3 {font-size:calc(21px + 2pt) !important;}
button {font-family:inherit;}
.cta-btn {background:#912c2f !important; color:#fff !important; border-radius:7px !important; font-size:calc(17px + 2pt) !important;}
.fade-in {opacity:1 !important; transform:none !important;}
:focus-visible {outline:2px solid #912c2f; outline-offset:4px;}
@media(max-width:650px) {p,li,.intro,.description,.subtitle,.desc,.card-desc,.body-text {font-size:calc(15px + 2pt) !important;} h2 {font-size:calc(24px + 2pt) !important;} h3 {font-size:calc(19px + 2pt) !important;}}
@media(prefers-reduced-motion:reduce) {* {animation:none !important; transition:none !important; scroll-behavior:auto !important;}}
</style><link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css" rel="stylesheet"/><style>/*!
 * Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */
.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:"Font Awesome 6 Free"}.fa-brands,.fab{font-family:"Font Awesome 6 Brands"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{-webkit-animation-name:fa-bounce;animation-name:fa-bounce;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-beat-fade,.fa-fade{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s)}.fa-beat-fade{-webkit-animation-name:fa-beat-fade;animation-name:fa-beat-fade;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{-webkit-animation-name:fa-shake;animation-name:fa-shake;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-shake,.fa-spin{-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(--fa-animation-delay,0s);-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@keyframes fa-bounce{0%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}10%{-webkit-transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0);transform:scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{-webkit-transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em));transform:scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{-webkit-transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0);transform:scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{-webkit-transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em));transform:scale(1) translateY(var(--fa-bounce-rebound,-.125em))}64%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}}@-webkit-keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(var(--fa-beat-fade-scale,1.125));transform:scale(var(--fa-beat-fade-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes fa-shake{0%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}4%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}8%,24%{-webkit-transform:rotate(-18deg);transform:rotate(-18deg)}12%,28%{-webkit-transform:rotate(18deg);transform:rotate(18deg)}16%{-webkit-transform:rotate(-22deg);transform:rotate(-22deg)}20%{-webkit-transform:rotate(22deg);transform:rotate(22deg)}32%{-webkit-transform:rotate(-12deg);transform:rotate(-12deg)}36%{-webkit-transform:rotate(12deg);transform:rotate(12deg)}40%,to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}.fa-rotate-by{-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%;z-index:var(--fa-stack-z-index,auto)}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:var(--fa-inverse,#fff)}

.fa-0:before{content:"\\30"}.fa-1:before{content:"\\31"}.fa-2:before{content:"\\32"}.fa-3:before{content:"\\33"}.fa-4:before{content:"\\34"}.fa-5:before{content:"\\35"}.fa-6:before{content:"\\36"}.fa-7:before{content:"\\37"}.fa-8:before{content:"\\38"}.fa-9:before{content:"\\39"}.fa-fill-drip:before{content:"\\f576"}.fa-arrows-to-circle:before{content:"\\e4bd"}.fa-chevron-circle-right:before,.fa-circle-chevron-right:before{content:"\\f138"}.fa-at:before{content:"\\40"}.fa-trash-alt:before,.fa-trash-can:before{content:"\\f2ed"}.fa-text-height:before{content:"\\f034"}.fa-user-times:before,.fa-user-xmark:before{content:"\\f235"}.fa-stethoscope:before{content:"\\f0f1"}.fa-comment-alt:before,.fa-message:before{content:"\\f27a"}.fa-info:before{content:"\\f129"}.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before{content:"\\f422"}.fa-explosion:before{content:"\\e4e9"}.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before{content:"\\f15c"}.fa-wave-square:before{content:"\\f83e"}.fa-ring:before{content:"\\f70b"}.fa-building-un:before{content:"\\e4d9"}.fa-dice-three:before{content:"\\f527"}.fa-calendar-alt:before,.fa-calendar-days:before{content:"\\f073"}.fa-anchor-circle-check:before{content:"\\e4aa"}.fa-building-circle-arrow-right:before{content:"\\e4d1"}.fa-volleyball-ball:before,.fa-volleyball:before{content:"\\f45f"}.fa-arrows-up-to-line:before{content:"\\e4c2"}.fa-sort-desc:before,.fa-sort-down:before{content:"\\f0dd"}.fa-circle-minus:before,.fa-minus-circle:before{content:"\\f056"}.fa-door-open:before{content:"\\f52b"}.fa-right-from-bracket:before,.fa-sign-out-alt:before{content:"\\f2f5"}.fa-atom:before{content:"\\f5d2"}.fa-soap:before{content:"\\e06e"}.fa-heart-music-camera-bolt:before,.fa-icons:before{content:"\\f86d"}.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before{content:"\\f539"}.fa-bridge-circle-check:before{content:"\\e4c9"}.fa-pump-medical:before{content:"\\e06a"}.fa-fingerprint:before{content:"\\f577"}.fa-hand-point-right:before{content:"\\f0a4"}.fa-magnifying-glass-location:before,.fa-search-location:before{content:"\\f689"}.fa-forward-step:before,.fa-step-forward:before{content:"\\f051"}.fa-face-smile-beam:before,.fa-smile-beam:before{content:"\\f5b8"}.fa-flag-checkered:before{content:"\\f11e"}.fa-football-ball:before,.fa-football:before{content:"\\f44e"}.fa-school-circle-exclamation:before{content:"\\e56c"}.fa-crop:before{content:"\\f125"}.fa-angle-double-down:before,.fa-angles-down:before{content:"\\f103"}.fa-users-rectangle:before{content:"\\e594"}.fa-people-roof:before{content:"\\e537"}.fa-people-line:before{content:"\\e534"}.fa-beer-mug-empty:before,.fa-beer:before{content:"\\f0fc"}.fa-diagram-predecessor:before{content:"\\e477"}.fa-arrow-up-long:before,.fa-long-arrow-up:before{content:"\\f176"}.fa-burn:before,.fa-fire-flame-simple:before{content:"\\f46a"}.fa-male:before,.fa-person:before{content:"\\f183"}.fa-laptop:before{content:"\\f109"}.fa-file-csv:before{content:"\\f6dd"}.fa-menorah:before{content:"\\f676"}.fa-truck-plane:before{content:"\\e58f"}.fa-record-vinyl:before{content:"\\f8d9"}.fa-face-grin-stars:before,.fa-grin-stars:before{content:"\\f587"}.fa-bong:before{content:"\\f55c"}.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before{content:"\\f67b"}.fa-arrow-down-up-across-line:before{content:"\\e4af"}.fa-spoon:before,.fa-utensil-spoon:before{content:"\\f2e5"}.fa-jar-wheat:before{content:"\\e517"}.fa-envelopes-bulk:before,.fa-mail-bulk:before{content:"\\f674"}.fa-file-circle-exclamation:before{content:"\\e4eb"}.fa-circle-h:before,.fa-hospital-symbol:before{content:"\\f47e"}.fa-pager:before{content:"\\f815"}.fa-address-book:before,.fa-contact-book:before{content:"\\f2b9"}.fa-strikethrough:before{content:"\\f0cc"}.fa-k:before{content:"\\4b"}.fa-landmark-flag:before{content:"\\e51c"}.fa-pencil-alt:before,.fa-pencil:before{content:"\\f303"}.fa-backward:before{content:"\\f04a"}.fa-caret-right:before{content:"\\f0da"}.fa-comments:before{content:"\\f086"}.fa-file-clipboard:before,.fa-paste:before{content:"\\f0ea"}.fa-code-pull-request:before{content:"\\e13c"}.fa-clipboard-list:before{content:"\\f46d"}.fa-truck-loading:before,.fa-truck-ramp-box:before{content:"\\f4de"}.fa-user-check:before{content:"\\f4fc"}.fa-vial-virus:before{content:"\\e597"}.fa-sheet-plastic:before{content:"\\e571"}.fa-blog:before{content:"\\f781"}.fa-user-ninja:before{content:"\\f504"}.fa-person-arrow-up-from-line:before{content:"\\e539"}.fa-scroll-torah:before,.fa-torah:before{content:"\\f6a0"}.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before{content:"\\f458"}.fa-toggle-off:before{content:"\\f204"}.fa-archive:before,.fa-box-archive:before{content:"\\f187"}.fa-person-drowning:before{content:"\\e545"}.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before{content:"\\f886"}.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before{content:"\\f58a"}.fa-spray-can:before{content:"\\f5bd"}.fa-truck-monster:before{content:"\\f63b"}.fa-w:before{content:"\\57"}.fa-earth-africa:before,.fa-globe-africa:before{content:"\\f57c"}.fa-rainbow:before{content:"\\f75b"}.fa-circle-notch:before{content:"\\f1ce"}.fa-tablet-alt:before,.fa-tablet-screen-button:before{content:"\\f3fa"}.fa-paw:before{content:"\\f1b0"}.fa-cloud:before{content:"\\f0c2"}.fa-trowel-bricks:before{content:"\\e58a"}.fa-face-flushed:before,.fa-flushed:before{content:"\\f579"}.fa-hospital-user:before{content:"\\f80d"}.fa-tent-arrow-left-right:before{content:"\\e57f"}.fa-gavel:before,.fa-legal:before{content:"\\f0e3"}.fa-binoculars:before{content:"\\f1e5"}.fa-microphone-slash:before{content:"\\f131"}.fa-box-tissue:before{content:"\\e05b"}.fa-motorcycle:before{content:"\\f21c"}.fa-bell-concierge:before,.fa-concierge-bell:before{content:"\\f562"}.fa-pen-ruler:before,.fa-pencil-ruler:before{content:"\\f5ae"}.fa-people-arrows-left-right:before,.fa-people-arrows:before{content:"\\e068"}.fa-mars-and-venus-burst:before{content:"\\e523"}.fa-caret-square-right:before,.fa-square-caret-right:before{content:"\\f152"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-sun-plant-wilt:before{content:"\\e57a"}.fa-toilets-portable:before{content:"\\e584"}.fa-hockey-puck:before{content:"\\f453"}.fa-table:before{content:"\\f0ce"}.fa-magnifying-glass-arrow-right:before{content:"\\e521"}.fa-digital-tachograph:before,.fa-tachograph-digital:before{content:"\\f566"}.fa-users-slash:before{content:"\\e073"}.fa-clover:before{content:"\\e139"}.fa-mail-reply:before,.fa-reply:before{content:"\\f3e5"}.fa-star-and-crescent:before{content:"\\f699"}.fa-house-fire:before{content:"\\e50c"}.fa-minus-square:before,.fa-square-minus:before{content:"\\f146"}.fa-helicopter:before{content:"\\f533"}.fa-compass:before{content:"\\f14e"}.fa-caret-square-down:before,.fa-square-caret-down:before{content:"\\f150"}.fa-file-circle-question:before{content:"\\e4ef"}.fa-laptop-code:before{content:"\\f5fc"}.fa-swatchbook:before{content:"\\f5c3"}.fa-prescription-bottle:before{content:"\\f485"}.fa-bars:before,.fa-navicon:before{content:"\\f0c9"}.fa-people-group:before{content:"\\e533"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-heart-broken:before,.fa-heart-crack:before{content:"\\f7a9"}.fa-external-link-square-alt:before,.fa-square-up-right:before{content:"\\f360"}.fa-face-kiss-beam:before,.fa-kiss-beam:before{content:"\\f597"}.fa-film:before{content:"\\f008"}.fa-ruler-horizontal:before{content:"\\f547"}.fa-people-robbery:before{content:"\\e536"}.fa-lightbulb:before{content:"\\f0eb"}.fa-caret-left:before{content:"\\f0d9"}.fa-circle-exclamation:before,.fa-exclamation-circle:before{content:"\\f06a"}.fa-school-circle-xmark:before{content:"\\e56d"}.fa-arrow-right-from-bracket:before,.fa-sign-out:before{content:"\\f08b"}.fa-chevron-circle-down:before,.fa-circle-chevron-down:before{content:"\\f13a"}.fa-unlock-alt:before,.fa-unlock-keyhole:before{content:"\\f13e"}.fa-cloud-showers-heavy:before{content:"\\f740"}.fa-headphones-alt:before,.fa-headphones-simple:before{content:"\\f58f"}.fa-sitemap:before{content:"\\f0e8"}.fa-circle-dollar-to-slot:before,.fa-donate:before{content:"\\f4b9"}.fa-memory:before{content:"\\f538"}.fa-road-spikes:before{content:"\\e568"}.fa-fire-burner:before{content:"\\e4f1"}.fa-flag:before{content:"\\f024"}.fa-hanukiah:before{content:"\\f6e6"}.fa-feather:before{content:"\\f52d"}.fa-volume-down:before,.fa-volume-low:before{content:"\\f027"}.fa-comment-slash:before{content:"\\f4b3"}.fa-cloud-sun-rain:before{content:"\\f743"}.fa-compress:before{content:"\\f066"}.fa-wheat-alt:before,.fa-wheat-awn:before{content:"\\e2cd"}.fa-ankh:before{content:"\\f644"}.fa-hands-holding-child:before{content:"\\e4fa"}.fa-asterisk:before{content:"\\2a"}.fa-check-square:before,.fa-square-check:before{content:"\\f14a"}.fa-peseta-sign:before{content:"\\e221"}.fa-header:before,.fa-heading:before{content:"\\f1dc"}.fa-ghost:before{content:"\\f6e2"}.fa-list-squares:before,.fa-list:before{content:"\\f03a"}.fa-phone-square-alt:before,.fa-square-phone-flip:before{content:"\\f87b"}.fa-cart-plus:before{content:"\\f217"}.fa-gamepad:before{content:"\\f11b"}.fa-circle-dot:before,.fa-dot-circle:before{content:"\\f192"}.fa-dizzy:before,.fa-face-dizzy:before{content:"\\f567"}.fa-egg:before{content:"\\f7fb"}.fa-house-medical-circle-xmark:before{content:"\\e513"}.fa-campground:before{content:"\\f6bb"}.fa-folder-plus:before{content:"\\f65e"}.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before{content:"\\f1e3"}.fa-paint-brush:before,.fa-paintbrush:before{content:"\\f1fc"}.fa-lock:before{content:"\\f023"}.fa-gas-pump:before{content:"\\f52f"}.fa-hot-tub-person:before,.fa-hot-tub:before{content:"\\f593"}.fa-map-location:before,.fa-map-marked:before{content:"\\f59f"}.fa-house-flood-water:before{content:"\\e50e"}.fa-tree:before{content:"\\f1bb"}.fa-bridge-lock:before{content:"\\e4cc"}.fa-sack-dollar:before{content:"\\f81d"}.fa-edit:before,.fa-pen-to-square:before{content:"\\f044"}.fa-car-side:before{content:"\\f5e4"}.fa-share-alt:before,.fa-share-nodes:before{content:"\\f1e0"}.fa-heart-circle-minus:before{content:"\\e4ff"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-microscope:before{content:"\\f610"}.fa-sink:before{content:"\\e06d"}.fa-bag-shopping:before,.fa-shopping-bag:before{content:"\\f290"}.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before{content:"\\f881"}.fa-mitten:before{content:"\\f7b5"}.fa-person-rays:before{content:"\\e54d"}.fa-users:before{content:"\\f0c0"}.fa-eye-slash:before{content:"\\f070"}.fa-flask-vial:before{content:"\\e4f3"}.fa-hand-paper:before,.fa-hand:before{content:"\\f256"}.fa-om:before{content:"\\f679"}.fa-worm:before{content:"\\e599"}.fa-house-circle-xmark:before{content:"\\e50b"}.fa-plug:before{content:"\\f1e6"}.fa-chevron-up:before{content:"\\f077"}.fa-hand-spock:before{content:"\\f259"}.fa-stopwatch:before{content:"\\f2f2"}.fa-face-kiss:before,.fa-kiss:before{content:"\\f596"}.fa-bridge-circle-xmark:before{content:"\\e4cb"}.fa-face-grin-tongue:before,.fa-grin-tongue:before{content:"\\f589"}.fa-chess-bishop:before{content:"\\f43a"}.fa-face-grin-wink:before,.fa-grin-wink:before{content:"\\f58c"}.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before{content:"\\f2a4"}.fa-road-circle-check:before{content:"\\e564"}.fa-dice-five:before{content:"\\f523"}.fa-rss-square:before,.fa-square-rss:before{content:"\\f143"}.fa-land-mine-on:before{content:"\\e51b"}.fa-i-cursor:before{content:"\\f246"}.fa-stamp:before{content:"\\f5bf"}.fa-stairs:before{content:"\\e289"}.fa-i:before{content:"\\49"}.fa-hryvnia-sign:before,.fa-hryvnia:before{content:"\\f6f2"}.fa-pills:before{content:"\\f484"}.fa-face-grin-wide:before,.fa-grin-alt:before{content:"\\f581"}.fa-tooth:before{content:"\\f5c9"}.fa-v:before{content:"\\56"}.fa-bangladeshi-taka-sign:before{content:"\\e2e6"}.fa-bicycle:before{content:"\\f206"}.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before{content:"\\e579"}.fa-head-side-cough-slash:before{content:"\\e062"}.fa-ambulance:before,.fa-truck-medical:before{content:"\\f0f9"}.fa-wheat-awn-circle-exclamation:before{content:"\\e598"}.fa-snowman:before{content:"\\f7d0"}.fa-mortar-pestle:before{content:"\\f5a7"}.fa-road-barrier:before{content:"\\e562"}.fa-school:before{content:"\\f549"}.fa-igloo:before{content:"\\f7ae"}.fa-joint:before{content:"\\f595"}.fa-angle-right:before{content:"\\f105"}.fa-horse:before{content:"\\f6f0"}.fa-q:before{content:"\\51"}.fa-g:before{content:"\\47"}.fa-notes-medical:before{content:"\\f481"}.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-dong-sign:before{content:"\\e169"}.fa-capsules:before{content:"\\f46b"}.fa-poo-bolt:before,.fa-poo-storm:before{content:"\\f75a"}.fa-face-frown-open:before,.fa-frown-open:before{content:"\\f57a"}.fa-hand-point-up:before{content:"\\f0a6"}.fa-money-bill:before{content:"\\f0d6"}.fa-bookmark:before{content:"\\f02e"}.fa-align-justify:before{content:"\\f039"}.fa-umbrella-beach:before{content:"\\f5ca"}.fa-helmet-un:before{content:"\\e503"}.fa-bullseye:before{content:"\\f140"}.fa-bacon:before{content:"\\f7e5"}.fa-hand-point-down:before{content:"\\f0a7"}.fa-arrow-up-from-bracket:before{content:"\\e09a"}.fa-folder-blank:before,.fa-folder:before{content:"\\f07b"}.fa-file-medical-alt:before,.fa-file-waveform:before{content:"\\f478"}.fa-radiation:before{content:"\\f7b9"}.fa-chart-simple:before{content:"\\e473"}.fa-mars-stroke:before{content:"\\f229"}.fa-vial:before{content:"\\f492"}.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before{content:"\\f624"}.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before{content:"\\e2ca"}.fa-e:before{content:"\\45"}.fa-pen-alt:before,.fa-pen-clip:before{content:"\\f305"}.fa-bridge-circle-exclamation:before{content:"\\e4ca"}.fa-user:before{content:"\\f007"}.fa-school-circle-check:before{content:"\\e56b"}.fa-dumpster:before{content:"\\f793"}.fa-shuttle-van:before,.fa-van-shuttle:before{content:"\\f5b6"}.fa-building-user:before{content:"\\e4da"}.fa-caret-square-left:before,.fa-square-caret-left:before{content:"\\f191"}.fa-highlighter:before{content:"\\f591"}.fa-key:before{content:"\\f084"}.fa-bullhorn:before{content:"\\f0a1"}.fa-globe:before{content:"\\f0ac"}.fa-synagogue:before{content:"\\f69b"}.fa-person-half-dress:before{content:"\\e548"}.fa-road-bridge:before{content:"\\e563"}.fa-location-arrow:before{content:"\\f124"}.fa-c:before{content:"\\43"}.fa-tablet-button:before{content:"\\f10a"}.fa-building-lock:before{content:"\\e4d6"}.fa-pizza-slice:before{content:"\\f818"}.fa-money-bill-wave:before{content:"\\f53a"}.fa-area-chart:before,.fa-chart-area:before{content:"\\f1fe"}.fa-house-flag:before{content:"\\e50d"}.fa-person-circle-minus:before{content:"\\e540"}.fa-ban:before,.fa-cancel:before{content:"\\f05e"}.fa-camera-rotate:before{content:"\\e0d8"}.fa-air-freshener:before,.fa-spray-can-sparkles:before{content:"\\f5d0"}.fa-star:before{content:"\\f005"}.fa-repeat:before{content:"\\f363"}.fa-cross:before{content:"\\f654"}.fa-box:before{content:"\\f466"}.fa-venus-mars:before{content:"\\f228"}.fa-arrow-pointer:before,.fa-mouse-pointer:before{content:"\\f245"}.fa-expand-arrows-alt:before,.fa-maximize:before{content:"\\f31e"}.fa-charging-station:before{content:"\\f5e7"}.fa-shapes:before,.fa-triangle-circle-square:before{content:"\\f61f"}.fa-random:before,.fa-shuffle:before{content:"\\f074"}.fa-person-running:before,.fa-running:before{content:"\\f70c"}.fa-mobile-retro:before{content:"\\e527"}.fa-grip-lines-vertical:before{content:"\\f7a5"}.fa-spider:before{content:"\\f717"}.fa-hands-bound:before{content:"\\e4f9"}.fa-file-invoice-dollar:before{content:"\\f571"}.fa-plane-circle-exclamation:before{content:"\\e556"}.fa-x-ray:before{content:"\\f497"}.fa-spell-check:before{content:"\\f891"}.fa-slash:before{content:"\\f715"}.fa-computer-mouse:before,.fa-mouse:before{content:"\\f8cc"}.fa-arrow-right-to-bracket:before,.fa-sign-in:before{content:"\\f090"}.fa-shop-slash:before,.fa-store-alt-slash:before{content:"\\e070"}.fa-server:before{content:"\\f233"}.fa-virus-covid-slash:before{content:"\\e4a9"}.fa-shop-lock:before{content:"\\e4a5"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-blender-phone:before{content:"\\f6b6"}.fa-building-wheat:before{content:"\\e4db"}.fa-person-breastfeeding:before{content:"\\e53a"}.fa-right-to-bracket:before,.fa-sign-in-alt:before{content:"\\f2f6"}.fa-venus:before{content:"\\f221"}.fa-passport:before{content:"\\f5ab"}.fa-heart-pulse:before,.fa-heartbeat:before{content:"\\f21e"}.fa-people-carry-box:before,.fa-people-carry:before{content:"\\f4ce"}.fa-temperature-high:before{content:"\\f769"}.fa-microchip:before{content:"\\f2db"}.fa-crown:before{content:"\\f521"}.fa-weight-hanging:before{content:"\\f5cd"}.fa-xmarks-lines:before{content:"\\e59a"}.fa-file-prescription:before{content:"\\f572"}.fa-weight-scale:before,.fa-weight:before{content:"\\f496"}.fa-user-friends:before,.fa-user-group:before{content:"\\f500"}.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before{content:"\\f15e"}.fa-chess-knight:before{content:"\\f441"}.fa-face-laugh-squint:before,.fa-laugh-squint:before{content:"\\f59b"}.fa-wheelchair:before{content:"\\f193"}.fa-arrow-circle-up:before,.fa-circle-arrow-up:before{content:"\\f0aa"}.fa-toggle-on:before{content:"\\f205"}.fa-person-walking:before,.fa-walking:before{content:"\\f554"}.fa-l:before{content:"\\4c"}.fa-fire:before{content:"\\f06d"}.fa-bed-pulse:before,.fa-procedures:before{content:"\\f487"}.fa-shuttle-space:before,.fa-space-shuttle:before{content:"\\f197"}.fa-face-laugh:before,.fa-laugh:before{content:"\\f599"}.fa-folder-open:before{content:"\\f07c"}.fa-heart-circle-plus:before{content:"\\e500"}.fa-code-fork:before{content:"\\e13b"}.fa-city:before{content:"\\f64f"}.fa-microphone-alt:before,.fa-microphone-lines:before{content:"\\f3c9"}.fa-pepper-hot:before{content:"\\f816"}.fa-unlock:before{content:"\\f09c"}.fa-colon-sign:before{content:"\\e140"}.fa-headset:before{content:"\\f590"}.fa-store-slash:before{content:"\\e071"}.fa-road-circle-xmark:before{content:"\\e566"}.fa-user-minus:before{content:"\\f503"}.fa-mars-stroke-up:before,.fa-mars-stroke-v:before{content:"\\f22a"}.fa-champagne-glasses:before,.fa-glass-cheers:before{content:"\\f79f"}.fa-clipboard:before{content:"\\f328"}.fa-house-circle-exclamation:before{content:"\\e50a"}.fa-file-arrow-up:before,.fa-file-upload:before{content:"\\f574"}.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before{content:"\\f1eb"}.fa-bath:before,.fa-bathtub:before{content:"\\f2cd"}.fa-underline:before{content:"\\f0cd"}.fa-user-edit:before,.fa-user-pen:before{content:"\\f4ff"}.fa-signature:before{content:"\\f5b7"}.fa-stroopwafel:before{content:"\\f551"}.fa-bold:before{content:"\\f032"}.fa-anchor-lock:before{content:"\\e4ad"}.fa-building-ngo:before{content:"\\e4d7"}.fa-manat-sign:before{content:"\\e1d5"}.fa-not-equal:before{content:"\\f53e"}.fa-border-style:before,.fa-border-top-left:before{content:"\\f853"}.fa-map-location-dot:before,.fa-map-marked-alt:before{content:"\\f5a0"}.fa-jedi:before{content:"\\f669"}.fa-poll:before,.fa-square-poll-vertical:before{content:"\\f681"}.fa-mug-hot:before{content:"\\f7b6"}.fa-battery-car:before,.fa-car-battery:before{content:"\\f5df"}.fa-gift:before{content:"\\f06b"}.fa-dice-two:before{content:"\\f528"}.fa-chess-queen:before{content:"\\f445"}.fa-glasses:before{content:"\\f530"}.fa-chess-board:before{content:"\\f43c"}.fa-building-circle-check:before{content:"\\e4d2"}.fa-person-chalkboard:before{content:"\\e53d"}.fa-mars-stroke-h:before,.fa-mars-stroke-right:before{content:"\\f22b"}.fa-hand-back-fist:before,.fa-hand-rock:before{content:"\\f255"}.fa-caret-square-up:before,.fa-square-caret-up:before{content:"\\f151"}.fa-cloud-showers-water:before{content:"\\e4e4"}.fa-bar-chart:before,.fa-chart-bar:before{content:"\\f080"}.fa-hands-bubbles:before,.fa-hands-wash:before{content:"\\e05e"}.fa-less-than-equal:before{content:"\\f537"}.fa-train:before{content:"\\f238"}.fa-eye-low-vision:before,.fa-low-vision:before{content:"\\f2a8"}.fa-crow:before{content:"\\f520"}.fa-sailboat:before{content:"\\e445"}.fa-window-restore:before{content:"\\f2d2"}.fa-plus-square:before,.fa-square-plus:before{content:"\\f0fe"}.fa-torii-gate:before{content:"\\f6a1"}.fa-frog:before{content:"\\f52e"}.fa-bucket:before{content:"\\e4cf"}.fa-image:before{content:"\\f03e"}.fa-microphone:before{content:"\\f130"}.fa-cow:before{content:"\\f6c8"}.fa-caret-up:before{content:"\\f0d8"}.fa-screwdriver:before{content:"\\f54a"}.fa-folder-closed:before{content:"\\e185"}.fa-house-tsunami:before{content:"\\e515"}.fa-square-nfi:before{content:"\\e576"}.fa-arrow-up-from-ground-water:before{content:"\\e4b5"}.fa-glass-martini-alt:before,.fa-martini-glass:before{content:"\\f57b"}.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before{content:"\\f2ea"}.fa-columns:before,.fa-table-columns:before{content:"\\f0db"}.fa-lemon:before{content:"\\f094"}.fa-head-side-mask:before{content:"\\e063"}.fa-handshake:before{content:"\\f2b5"}.fa-gem:before{content:"\\f3a5"}.fa-dolly-box:before,.fa-dolly:before{content:"\\f472"}.fa-smoking:before{content:"\\f48d"}.fa-compress-arrows-alt:before,.fa-minimize:before{content:"\\f78c"}.fa-monument:before{content:"\\f5a6"}.fa-snowplow:before{content:"\\f7d2"}.fa-angle-double-right:before,.fa-angles-right:before{content:"\\f101"}.fa-cannabis:before{content:"\\f55f"}.fa-circle-play:before,.fa-play-circle:before{content:"\\f144"}.fa-tablets:before{content:"\\f490"}.fa-ethernet:before{content:"\\f796"}.fa-eur:before,.fa-euro-sign:before,.fa-euro:before{content:"\\f153"}.fa-chair:before{content:"\\f6c0"}.fa-check-circle:before,.fa-circle-check:before{content:"\\f058"}.fa-circle-stop:before,.fa-stop-circle:before{content:"\\f28d"}.fa-compass-drafting:before,.fa-drafting-compass:before{content:"\\f568"}.fa-plate-wheat:before{content:"\\e55a"}.fa-icicles:before{content:"\\f7ad"}.fa-person-shelter:before{content:"\\e54f"}.fa-neuter:before{content:"\\f22c"}.fa-id-badge:before{content:"\\f2c1"}.fa-marker:before{content:"\\f5a1"}.fa-face-laugh-beam:before,.fa-laugh-beam:before{content:"\\f59a"}.fa-helicopter-symbol:before{content:"\\e502"}.fa-universal-access:before{content:"\\f29a"}.fa-chevron-circle-up:before,.fa-circle-chevron-up:before{content:"\\f139"}.fa-lari-sign:before{content:"\\e1c8"}.fa-volcano:before{content:"\\f770"}.fa-person-walking-dashed-line-arrow-right:before{content:"\\e553"}.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before{content:"\\f154"}.fa-viruses:before{content:"\\e076"}.fa-square-person-confined:before{content:"\\e577"}.fa-user-tie:before{content:"\\f508"}.fa-arrow-down-long:before,.fa-long-arrow-down:before{content:"\\f175"}.fa-tent-arrow-down-to-line:before{content:"\\e57e"}.fa-certificate:before{content:"\\f0a3"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-suitcase:before{content:"\\f0f2"}.fa-person-skating:before,.fa-skating:before{content:"\\f7c5"}.fa-filter-circle-dollar:before,.fa-funnel-dollar:before{content:"\\f662"}.fa-camera-retro:before{content:"\\f083"}.fa-arrow-circle-down:before,.fa-circle-arrow-down:before{content:"\\f0ab"}.fa-arrow-right-to-file:before,.fa-file-import:before{content:"\\f56f"}.fa-external-link-square:before,.fa-square-arrow-up-right:before{content:"\\f14c"}.fa-box-open:before{content:"\\f49e"}.fa-scroll:before{content:"\\f70e"}.fa-spa:before{content:"\\f5bb"}.fa-location-pin-lock:before{content:"\\e51f"}.fa-pause:before{content:"\\f04c"}.fa-hill-avalanche:before{content:"\\e507"}.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-bomb:before{content:"\\f1e2"}.fa-registered:before{content:"\\f25d"}.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before{content:"\\f2bb"}.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before{content:"\\f516"}.fa-subscript:before{content:"\\f12c"}.fa-diamond-turn-right:before,.fa-directions:before{content:"\\f5eb"}.fa-burst:before{content:"\\e4dc"}.fa-house-laptop:before,.fa-laptop-house:before{content:"\\e066"}.fa-face-tired:before,.fa-tired:before{content:"\\f5c8"}.fa-money-bills:before{content:"\\e1f3"}.fa-smog:before{content:"\\f75f"}.fa-crutch:before{content:"\\f7f7"}.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before{content:"\\f0ee"}.fa-palette:before{content:"\\f53f"}.fa-arrows-turn-right:before{content:"\\e4c0"}.fa-vest:before{content:"\\e085"}.fa-ferry:before{content:"\\e4ea"}.fa-arrows-down-to-people:before{content:"\\e4b9"}.fa-seedling:before,.fa-sprout:before{content:"\\f4d8"}.fa-arrows-alt-h:before,.fa-left-right:before{content:"\\f337"}.fa-boxes-packing:before{content:"\\e4c7"}.fa-arrow-circle-left:before,.fa-circle-arrow-left:before{content:"\\f0a8"}.fa-group-arrows-rotate:before{content:"\\e4f6"}.fa-bowl-food:before{content:"\\e4c6"}.fa-candy-cane:before{content:"\\f786"}.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before{content:"\\f160"}.fa-cloud-bolt:before,.fa-thunderstorm:before{content:"\\f76c"}.fa-remove-format:before,.fa-text-slash:before{content:"\\f87d"}.fa-face-smile-wink:before,.fa-smile-wink:before{content:"\\f4da"}.fa-file-word:before{content:"\\f1c2"}.fa-file-powerpoint:before{content:"\\f1c4"}.fa-arrows-h:before,.fa-arrows-left-right:before{content:"\\f07e"}.fa-house-lock:before{content:"\\e510"}.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before{content:"\\f0ed"}.fa-children:before{content:"\\e4e1"}.fa-blackboard:before,.fa-chalkboard:before{content:"\\f51b"}.fa-user-alt-slash:before,.fa-user-large-slash:before{content:"\\f4fa"}.fa-envelope-open:before{content:"\\f2b6"}.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before{content:"\\e05f"}.fa-mattress-pillow:before{content:"\\e525"}.fa-guarani-sign:before{content:"\\e19a"}.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before{content:"\\f021"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-cruzeiro-sign:before{content:"\\e152"}.fa-greater-than-equal:before{content:"\\f532"}.fa-shield-alt:before,.fa-shield-halved:before{content:"\\f3ed"}.fa-atlas:before,.fa-book-atlas:before{content:"\\f558"}.fa-virus:before{content:"\\e074"}.fa-envelope-circle-check:before{content:"\\e4e8"}.fa-layer-group:before{content:"\\f5fd"}.fa-arrows-to-dot:before{content:"\\e4be"}.fa-archway:before{content:"\\f557"}.fa-heart-circle-check:before{content:"\\e4fd"}.fa-house-chimney-crack:before,.fa-house-damage:before{content:"\\f6f1"}.fa-file-archive:before,.fa-file-zipper:before{content:"\\f1c6"}.fa-square:before{content:"\\f0c8"}.fa-glass-martini:before,.fa-martini-glass-empty:before{content:"\\f000"}.fa-couch:before{content:"\\f4b8"}.fa-cedi-sign:before{content:"\\e0df"}.fa-italic:before{content:"\\f033"}.fa-church:before{content:"\\f51d"}.fa-comments-dollar:before{content:"\\f653"}.fa-democrat:before{content:"\\f747"}.fa-z:before{content:"\\5a"}.fa-person-skiing:before,.fa-skiing:before{content:"\\f7c9"}.fa-road-lock:before{content:"\\e567"}.fa-a:before{content:"\\41"}.fa-temperature-arrow-down:before,.fa-temperature-down:before{content:"\\e03f"}.fa-feather-alt:before,.fa-feather-pointed:before{content:"\\f56b"}.fa-p:before{content:"\\50"}.fa-snowflake:before{content:"\\f2dc"}.fa-newspaper:before{content:"\\f1ea"}.fa-ad:before,.fa-rectangle-ad:before{content:"\\f641"}.fa-arrow-circle-right:before,.fa-circle-arrow-right:before{content:"\\f0a9"}.fa-filter-circle-xmark:before{content:"\\e17b"}.fa-locust:before{content:"\\e520"}.fa-sort:before,.fa-unsorted:before{content:"\\f0dc"}.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before{content:"\\f0cb"}.fa-person-dress-burst:before{content:"\\e544"}.fa-money-check-alt:before,.fa-money-check-dollar:before{content:"\\f53d"}.fa-vector-square:before{content:"\\f5cb"}.fa-bread-slice:before{content:"\\f7ec"}.fa-language:before{content:"\\f1ab"}.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before{content:"\\f598"}.fa-filter:before{content:"\\f0b0"}.fa-question:before{content:"\\3f"}.fa-file-signature:before{content:"\\f573"}.fa-arrows-alt:before,.fa-up-down-left-right:before{content:"\\f0b2"}.fa-house-chimney-user:before{content:"\\e065"}.fa-hand-holding-heart:before{content:"\\f4be"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-money-check:before{content:"\\f53c"}.fa-star-half-alt:before,.fa-star-half-stroke:before{content:"\\f5c0"}.fa-code:before{content:"\\f121"}.fa-glass-whiskey:before,.fa-whiskey-glass:before{content:"\\f7a0"}.fa-building-circle-exclamation:before{content:"\\e4d3"}.fa-magnifying-glass-chart:before{content:"\\e522"}.fa-arrow-up-right-from-square:before,.fa-external-link:before{content:"\\f08e"}.fa-cubes-stacked:before{content:"\\e4e6"}.fa-krw:before,.fa-won-sign:before,.fa-won:before{content:"\\f159"}.fa-virus-covid:before{content:"\\e4a8"}.fa-austral-sign:before{content:"\\e0a9"}.fa-f:before{content:"\\46"}.fa-leaf:before{content:"\\f06c"}.fa-road:before{content:"\\f018"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-person-circle-plus:before{content:"\\e541"}.fa-chart-pie:before,.fa-pie-chart:before{content:"\\f200"}.fa-bolt-lightning:before{content:"\\e0b7"}.fa-sack-xmark:before{content:"\\e56a"}.fa-file-excel:before{content:"\\f1c3"}.fa-file-contract:before{content:"\\f56c"}.fa-fish-fins:before{content:"\\e4f2"}.fa-building-flag:before{content:"\\e4d5"}.fa-face-grin-beam:before,.fa-grin-beam:before{content:"\\f582"}.fa-object-ungroup:before{content:"\\f248"}.fa-poop:before{content:"\\f619"}.fa-location-pin:before,.fa-map-marker:before{content:"\\f041"}.fa-kaaba:before{content:"\\f66b"}.fa-toilet-paper:before{content:"\\f71e"}.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before{content:"\\f807"}.fa-eject:before{content:"\\f052"}.fa-arrow-alt-circle-right:before,.fa-circle-right:before{content:"\\f35a"}.fa-plane-circle-check:before{content:"\\e555"}.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before{content:"\\f5a5"}.fa-object-group:before{content:"\\f247"}.fa-chart-line:before,.fa-line-chart:before{content:"\\f201"}.fa-mask-ventilator:before{content:"\\e524"}.fa-arrow-right:before{content:"\\f061"}.fa-map-signs:before,.fa-signs-post:before{content:"\\f277"}.fa-cash-register:before{content:"\\f788"}.fa-person-circle-question:before{content:"\\e542"}.fa-h:before{content:"\\48"}.fa-tarp:before{content:"\\e57b"}.fa-screwdriver-wrench:before,.fa-tools:before{content:"\\f7d9"}.fa-arrows-to-eye:before{content:"\\e4bf"}.fa-plug-circle-bolt:before{content:"\\e55b"}.fa-heart:before{content:"\\f004"}.fa-mars-and-venus:before{content:"\\f224"}.fa-home-user:before,.fa-house-user:before{content:"\\e1b0"}.fa-dumpster-fire:before{content:"\\f794"}.fa-house-crack:before{content:"\\e3b1"}.fa-cocktail:before,.fa-martini-glass-citrus:before{content:"\\f561"}.fa-face-surprise:before,.fa-surprise:before{content:"\\f5c2"}.fa-bottle-water:before{content:"\\e4c5"}.fa-circle-pause:before,.fa-pause-circle:before{content:"\\f28b"}.fa-toilet-paper-slash:before{content:"\\e072"}.fa-apple-alt:before,.fa-apple-whole:before{content:"\\f5d1"}.fa-kitchen-set:before{content:"\\e51a"}.fa-r:before{content:"\\52"}.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-cube:before{content:"\\f1b2"}.fa-bitcoin-sign:before{content:"\\e0b4"}.fa-shield-dog:before{content:"\\e573"}.fa-solar-panel:before{content:"\\f5ba"}.fa-lock-open:before{content:"\\f3c1"}.fa-elevator:before{content:"\\e16d"}.fa-money-bill-transfer:before{content:"\\e528"}.fa-money-bill-trend-up:before{content:"\\e529"}.fa-house-flood-water-circle-arrow-right:before{content:"\\e50f"}.fa-poll-h:before,.fa-square-poll-horizontal:before{content:"\\f682"}.fa-circle:before{content:"\\f111"}.fa-backward-fast:before,.fa-fast-backward:before{content:"\\f049"}.fa-recycle:before{content:"\\f1b8"}.fa-user-astronaut:before{content:"\\f4fb"}.fa-plane-slash:before{content:"\\e069"}.fa-trademark:before{content:"\\f25c"}.fa-basketball-ball:before,.fa-basketball:before{content:"\\f434"}.fa-satellite-dish:before{content:"\\f7c0"}.fa-arrow-alt-circle-up:before,.fa-circle-up:before{content:"\\f35b"}.fa-mobile-alt:before,.fa-mobile-screen-button:before{content:"\\f3cd"}.fa-volume-high:before,.fa-volume-up:before{content:"\\f028"}.fa-users-rays:before{content:"\\e593"}.fa-wallet:before{content:"\\f555"}.fa-clipboard-check:before{content:"\\f46c"}.fa-file-audio:before{content:"\\f1c7"}.fa-burger:before,.fa-hamburger:before{content:"\\f805"}.fa-wrench:before{content:"\\f0ad"}.fa-bugs:before{content:"\\e4d0"}.fa-rupee-sign:before,.fa-rupee:before{content:"\\f156"}.fa-file-image:before{content:"\\f1c5"}.fa-circle-question:before,.fa-question-circle:before{content:"\\f059"}.fa-plane-departure:before{content:"\\f5b0"}.fa-handshake-slash:before{content:"\\e060"}.fa-book-bookmark:before{content:"\\e0bb"}.fa-code-branch:before{content:"\\f126"}.fa-hat-cowboy:before{content:"\\f8c0"}.fa-bridge:before{content:"\\e4c8"}.fa-phone-alt:before,.fa-phone-flip:before{content:"\\f879"}.fa-truck-front:before{content:"\\e2b7"}.fa-cat:before{content:"\\f6be"}.fa-anchor-circle-exclamation:before{content:"\\e4ab"}.fa-truck-field:before{content:"\\e58d"}.fa-route:before{content:"\\f4d7"}.fa-clipboard-question:before{content:"\\e4e3"}.fa-panorama:before{content:"\\e209"}.fa-comment-medical:before{content:"\\f7f5"}.fa-teeth-open:before{content:"\\f62f"}.fa-file-circle-minus:before{content:"\\e4ed"}.fa-tags:before{content:"\\f02c"}.fa-wine-glass:before{content:"\\f4e3"}.fa-fast-forward:before,.fa-forward-fast:before{content:"\\f050"}.fa-face-meh-blank:before,.fa-meh-blank:before{content:"\\f5a4"}.fa-parking:before,.fa-square-parking:before{content:"\\f540"}.fa-house-signal:before{content:"\\e012"}.fa-bars-progress:before,.fa-tasks-alt:before{content:"\\f828"}.fa-faucet-drip:before{content:"\\e006"}.fa-cart-flatbed:before,.fa-dolly-flatbed:before{content:"\\f474"}.fa-ban-smoking:before,.fa-smoking-ban:before{content:"\\f54d"}.fa-terminal:before{content:"\\f120"}.fa-mobile-button:before{content:"\\f10b"}.fa-house-medical-flag:before{content:"\\e514"}.fa-basket-shopping:before,.fa-shopping-basket:before{content:"\\f291"}.fa-tape:before{content:"\\f4db"}.fa-bus-alt:before,.fa-bus-simple:before{content:"\\f55e"}.fa-eye:before{content:"\\f06e"}.fa-face-sad-cry:before,.fa-sad-cry:before{content:"\\f5b3"}.fa-audio-description:before{content:"\\f29e"}.fa-person-military-to-person:before{content:"\\e54c"}.fa-file-shield:before{content:"\\e4f0"}.fa-user-slash:before{content:"\\f506"}.fa-pen:before{content:"\\f304"}.fa-tower-observation:before{content:"\\e586"}.fa-file-code:before{content:"\\f1c9"}.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before{content:"\\f012"}.fa-bus:before{content:"\\f207"}.fa-heart-circle-xmark:before{content:"\\e501"}.fa-home-lg:before,.fa-house-chimney:before{content:"\\e3af"}.fa-window-maximize:before{content:"\\f2d0"}.fa-face-frown:before,.fa-frown:before{content:"\\f119"}.fa-prescription:before{content:"\\f5b1"}.fa-shop:before,.fa-store-alt:before{content:"\\f54f"}.fa-floppy-disk:before,.fa-save:before{content:"\\f0c7"}.fa-vihara:before{content:"\\f6a7"}.fa-balance-scale-left:before,.fa-scale-unbalanced:before{content:"\\f515"}.fa-sort-asc:before,.fa-sort-up:before{content:"\\f0de"}.fa-comment-dots:before,.fa-commenting:before{content:"\\f4ad"}.fa-plant-wilt:before{content:"\\e5aa"}.fa-diamond:before{content:"\\f219"}.fa-face-grin-squint:before,.fa-grin-squint:before{content:"\\f585"}.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before{content:"\\f4c0"}.fa-bacterium:before{content:"\\e05a"}.fa-hand-pointer:before{content:"\\f25a"}.fa-drum-steelpan:before{content:"\\f56a"}.fa-hand-scissors:before{content:"\\f257"}.fa-hands-praying:before,.fa-praying-hands:before{content:"\\f684"}.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before{content:"\\f01e"}.fa-biohazard:before{content:"\\f780"}.fa-location-crosshairs:before,.fa-location:before{content:"\\f601"}.fa-mars-double:before{content:"\\f227"}.fa-child-dress:before{content:"\\e59c"}.fa-users-between-lines:before{content:"\\e591"}.fa-lungs-virus:before{content:"\\e067"}.fa-face-grin-tears:before,.fa-grin-tears:before{content:"\\f588"}.fa-phone:before{content:"\\f095"}.fa-calendar-times:before,.fa-calendar-xmark:before{content:"\\f273"}.fa-child-reaching:before{content:"\\e59d"}.fa-head-side-virus:before{content:"\\e064"}.fa-user-cog:before,.fa-user-gear:before{content:"\\f4fe"}.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before{content:"\\f163"}.fa-door-closed:before{content:"\\f52a"}.fa-shield-virus:before{content:"\\e06c"}.fa-dice-six:before{content:"\\f526"}.fa-mosquito-net:before{content:"\\e52c"}.fa-bridge-water:before{content:"\\e4ce"}.fa-person-booth:before{content:"\\f756"}.fa-text-width:before{content:"\\f035"}.fa-hat-wizard:before{content:"\\f6e8"}.fa-pen-fancy:before{content:"\\f5ac"}.fa-digging:before,.fa-person-digging:before{content:"\\f85e"}.fa-trash:before{content:"\\f1f8"}.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before{content:"\\f629"}.fa-book-medical:before{content:"\\f7e6"}.fa-poo:before{content:"\\f2fe"}.fa-quote-right-alt:before,.fa-quote-right:before{content:"\\f10e"}.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before{content:"\\f553"}.fa-cubes:before{content:"\\f1b3"}.fa-divide:before{content:"\\f529"}.fa-tenge-sign:before,.fa-tenge:before{content:"\\f7d7"}.fa-headphones:before{content:"\\f025"}.fa-hands-holding:before{content:"\\f4c2"}.fa-hands-clapping:before{content:"\\e1a8"}.fa-republican:before{content:"\\f75e"}.fa-arrow-left:before{content:"\\f060"}.fa-person-circle-xmark:before{content:"\\e543"}.fa-ruler:before{content:"\\f545"}.fa-align-left:before{content:"\\f036"}.fa-dice-d6:before{content:"\\f6d1"}.fa-restroom:before{content:"\\f7bd"}.fa-j:before{content:"\\4a"}.fa-users-viewfinder:before{content:"\\e595"}.fa-file-video:before{content:"\\f1c8"}.fa-external-link-alt:before,.fa-up-right-from-square:before{content:"\\f35d"}.fa-table-cells:before,.fa-th:before{content:"\\f00a"}.fa-file-pdf:before{content:"\\f1c1"}.fa-bible:before,.fa-book-bible:before{content:"\\f647"}.fa-o:before{content:"\\4f"}.fa-medkit:before,.fa-suitcase-medical:before{content:"\\f0fa"}.fa-user-secret:before{content:"\\f21b"}.fa-otter:before{content:"\\f700"}.fa-female:before,.fa-person-dress:before{content:"\\f182"}.fa-comment-dollar:before{content:"\\f651"}.fa-briefcase-clock:before,.fa-business-time:before{content:"\\f64a"}.fa-table-cells-large:before,.fa-th-large:before{content:"\\f009"}.fa-book-tanakh:before,.fa-tanakh:before{content:"\\f827"}.fa-phone-volume:before,.fa-volume-control-phone:before{content:"\\f2a0"}.fa-hat-cowboy-side:before{content:"\\f8c1"}.fa-clipboard-user:before{content:"\\f7f3"}.fa-child:before{content:"\\f1ae"}.fa-lira-sign:before{content:"\\f195"}.fa-satellite:before{content:"\\f7bf"}.fa-plane-lock:before{content:"\\e558"}.fa-tag:before{content:"\\f02b"}.fa-comment:before{content:"\\f075"}.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before{content:"\\f1fd"}.fa-envelope:before{content:"\\f0e0"}.fa-angle-double-up:before,.fa-angles-up:before{content:"\\f102"}.fa-paperclip:before{content:"\\f0c6"}.fa-arrow-right-to-city:before{content:"\\e4b3"}.fa-ribbon:before{content:"\\f4d6"}.fa-lungs:before{content:"\\f604"}.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before{content:"\\f887"}.fa-litecoin-sign:before{content:"\\e1d3"}.fa-border-none:before{content:"\\f850"}.fa-circle-nodes:before{content:"\\e4e2"}.fa-parachute-box:before{content:"\\f4cd"}.fa-indent:before{content:"\\f03c"}.fa-truck-field-un:before{content:"\\e58e"}.fa-hourglass-empty:before,.fa-hourglass:before{content:"\\f254"}.fa-mountain:before{content:"\\f6fc"}.fa-user-doctor:before,.fa-user-md:before{content:"\\f0f0"}.fa-circle-info:before,.fa-info-circle:before{content:"\\f05a"}.fa-cloud-meatball:before{content:"\\f73b"}.fa-camera-alt:before,.fa-camera:before{content:"\\f030"}.fa-square-virus:before{content:"\\e578"}.fa-meteor:before{content:"\\f753"}.fa-car-on:before{content:"\\e4dd"}.fa-sleigh:before{content:"\\f7cc"}.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before{content:"\\f162"}.fa-hand-holding-droplet:before,.fa-hand-holding-water:before{content:"\\f4c1"}.fa-water:before{content:"\\f773"}.fa-calendar-check:before{content:"\\f274"}.fa-braille:before{content:"\\f2a1"}.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before{content:"\\f486"}.fa-landmark:before{content:"\\f66f"}.fa-truck:before{content:"\\f0d1"}.fa-crosshairs:before{content:"\\f05b"}.fa-person-cane:before{content:"\\e53c"}.fa-tent:before{content:"\\e57d"}.fa-vest-patches:before{content:"\\e086"}.fa-check-double:before{content:"\\f560"}.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before{content:"\\f15d"}.fa-money-bill-wheat:before{content:"\\e52a"}.fa-cookie:before{content:"\\f563"}.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-hard-drive:before,.fa-hdd:before{content:"\\f0a0"}.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before{content:"\\f586"}.fa-dumbbell:before{content:"\\f44b"}.fa-list-alt:before,.fa-rectangle-list:before{content:"\\f022"}.fa-tarp-droplet:before{content:"\\e57c"}.fa-house-medical-circle-check:before{content:"\\e511"}.fa-person-skiing-nordic:before,.fa-skiing-nordic:before{content:"\\f7ca"}.fa-calendar-plus:before{content:"\\f271"}.fa-plane-arrival:before{content:"\\f5af"}.fa-arrow-alt-circle-left:before,.fa-circle-left:before{content:"\\f359"}.fa-subway:before,.fa-train-subway:before{content:"\\f239"}.fa-chart-gantt:before{content:"\\e0e4"}.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before{content:"\\e1bc"}.fa-crop-alt:before,.fa-crop-simple:before{content:"\\f565"}.fa-money-bill-1:before,.fa-money-bill-alt:before{content:"\\f3d1"}.fa-left-long:before,.fa-long-arrow-alt-left:before{content:"\\f30a"}.fa-dna:before{content:"\\f471"}.fa-virus-slash:before{content:"\\e075"}.fa-minus:before,.fa-subtract:before{content:"\\f068"}.fa-chess:before{content:"\\f439"}.fa-arrow-left-long:before,.fa-long-arrow-left:before{content:"\\f177"}.fa-plug-circle-check:before{content:"\\e55c"}.fa-street-view:before{content:"\\f21d"}.fa-franc-sign:before{content:"\\e18f"}.fa-volume-off:before{content:"\\f026"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before{content:"\\f2a3"}.fa-cog:before,.fa-gear:before{content:"\\f013"}.fa-droplet-slash:before,.fa-tint-slash:before{content:"\\f5c7"}.fa-mosque:before{content:"\\f678"}.fa-mosquito:before{content:"\\e52b"}.fa-star-of-david:before{content:"\\f69a"}.fa-person-military-rifle:before{content:"\\e54b"}.fa-cart-shopping:before,.fa-shopping-cart:before{content:"\\f07a"}.fa-vials:before{content:"\\f493"}.fa-plug-circle-plus:before{content:"\\e55f"}.fa-place-of-worship:before{content:"\\f67f"}.fa-grip-vertical:before{content:"\\f58e"}.fa-arrow-turn-up:before,.fa-level-up:before{content:"\\f148"}.fa-u:before{content:"\\55"}.fa-square-root-alt:before,.fa-square-root-variable:before{content:"\\f698"}.fa-clock-four:before,.fa-clock:before{content:"\\f017"}.fa-backward-step:before,.fa-step-backward:before{content:"\\f048"}.fa-pallet:before{content:"\\f482"}.fa-faucet:before{content:"\\e005"}.fa-baseball-bat-ball:before{content:"\\f432"}.fa-s:before{content:"\\53"}.fa-timeline:before{content:"\\e29c"}.fa-keyboard:before{content:"\\f11c"}.fa-caret-down:before{content:"\\f0d7"}.fa-clinic-medical:before,.fa-house-chimney-medical:before{content:"\\f7f2"}.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-mobile-android-alt:before,.fa-mobile-screen:before{content:"\\f3cf"}.fa-plane-up:before{content:"\\e22d"}.fa-piggy-bank:before{content:"\\f4d3"}.fa-battery-3:before,.fa-battery-half:before{content:"\\f242"}.fa-mountain-city:before{content:"\\e52e"}.fa-coins:before{content:"\\f51e"}.fa-khanda:before{content:"\\f66d"}.fa-sliders-h:before,.fa-sliders:before{content:"\\f1de"}.fa-folder-tree:before{content:"\\f802"}.fa-network-wired:before{content:"\\f6ff"}.fa-map-pin:before{content:"\\f276"}.fa-hamsa:before{content:"\\f665"}.fa-cent-sign:before{content:"\\e3f5"}.fa-flask:before{content:"\\f0c3"}.fa-person-pregnant:before{content:"\\e31e"}.fa-wand-sparkles:before{content:"\\f72b"}.fa-ellipsis-v:before,.fa-ellipsis-vertical:before{content:"\\f142"}.fa-ticket:before{content:"\\f145"}.fa-power-off:before{content:"\\f011"}.fa-long-arrow-alt-right:before,.fa-right-long:before{content:"\\f30b"}.fa-flag-usa:before{content:"\\f74d"}.fa-laptop-file:before{content:"\\e51d"}.fa-teletype:before,.fa-tty:before{content:"\\f1e4"}.fa-diagram-next:before{content:"\\e476"}.fa-person-rifle:before{content:"\\e54e"}.fa-house-medical-circle-exclamation:before{content:"\\e512"}.fa-closed-captioning:before{content:"\\f20a"}.fa-hiking:before,.fa-person-hiking:before{content:"\\f6ec"}.fa-venus-double:before{content:"\\f226"}.fa-images:before{content:"\\f302"}.fa-calculator:before{content:"\\f1ec"}.fa-people-pulling:before{content:"\\e535"}.fa-n:before{content:"\\4e"}.fa-cable-car:before,.fa-tram:before{content:"\\f7da"}.fa-cloud-rain:before{content:"\\f73d"}.fa-building-circle-xmark:before{content:"\\e4d4"}.fa-ship:before{content:"\\f21a"}.fa-arrows-down-to-line:before{content:"\\e4b8"}.fa-download:before{content:"\\f019"}.fa-face-grin:before,.fa-grin:before{content:"\\f580"}.fa-backspace:before,.fa-delete-left:before{content:"\\f55a"}.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before{content:"\\f1fb"}.fa-file-circle-check:before{content:"\\e5a0"}.fa-forward:before{content:"\\f04e"}.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before{content:"\\f3ce"}.fa-face-meh:before,.fa-meh:before{content:"\\f11a"}.fa-align-center:before{content:"\\f037"}.fa-book-dead:before,.fa-book-skull:before{content:"\\f6b7"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-heart-circle-exclamation:before{content:"\\e4fe"}.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before{content:"\\f015"}.fa-calendar-week:before{content:"\\f784"}.fa-laptop-medical:before{content:"\\f812"}.fa-b:before{content:"\\42"}.fa-file-medical:before{content:"\\f477"}.fa-dice-one:before{content:"\\f525"}.fa-kiwi-bird:before{content:"\\f535"}.fa-arrow-right-arrow-left:before,.fa-exchange:before{content:"\\f0ec"}.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before{content:"\\f2f9"}.fa-cutlery:before,.fa-utensils:before{content:"\\f2e7"}.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before{content:"\\f161"}.fa-mill-sign:before{content:"\\e1ed"}.fa-bowl-rice:before{content:"\\e2eb"}.fa-skull:before{content:"\\f54c"}.fa-broadcast-tower:before,.fa-tower-broadcast:before{content:"\\f519"}.fa-truck-pickup:before{content:"\\f63c"}.fa-long-arrow-alt-up:before,.fa-up-long:before{content:"\\f30c"}.fa-stop:before{content:"\\f04d"}.fa-code-merge:before{content:"\\f387"}.fa-upload:before{content:"\\f093"}.fa-hurricane:before{content:"\\f751"}.fa-mound:before{content:"\\e52d"}.fa-toilet-portable:before{content:"\\e583"}.fa-compact-disc:before{content:"\\f51f"}.fa-file-arrow-down:before,.fa-file-download:before{content:"\\f56d"}.fa-caravan:before{content:"\\f8ff"}.fa-shield-cat:before{content:"\\e572"}.fa-bolt:before,.fa-zap:before{content:"\\f0e7"}.fa-glass-water:before{content:"\\e4f4"}.fa-oil-well:before{content:"\\e532"}.fa-vault:before{content:"\\e2c5"}.fa-mars:before{content:"\\f222"}.fa-toilet:before{content:"\\f7d8"}.fa-plane-circle-xmark:before{content:"\\e557"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before{content:"\\f157"}.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before{content:"\\f158"}.fa-sun:before{content:"\\f185"}.fa-guitar:before{content:"\\f7a6"}.fa-face-laugh-wink:before,.fa-laugh-wink:before{content:"\\f59c"}.fa-horse-head:before{content:"\\f7ab"}.fa-bore-hole:before{content:"\\e4c3"}.fa-industry:before{content:"\\f275"}.fa-arrow-alt-circle-down:before,.fa-circle-down:before{content:"\\f358"}.fa-arrows-turn-to-dots:before{content:"\\e4c1"}.fa-florin-sign:before{content:"\\e184"}.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before{content:"\\f884"}.fa-less-than:before{content:"\\3c"}.fa-angle-down:before{content:"\\f107"}.fa-car-tunnel:before{content:"\\e4de"}.fa-head-side-cough:before{content:"\\e061"}.fa-grip-lines:before{content:"\\f7a4"}.fa-thumbs-down:before{content:"\\f165"}.fa-user-lock:before{content:"\\f502"}.fa-arrow-right-long:before,.fa-long-arrow-right:before{content:"\\f178"}.fa-anchor-circle-xmark:before{content:"\\e4ac"}.fa-ellipsis-h:before,.fa-ellipsis:before{content:"\\f141"}.fa-chess-pawn:before{content:"\\f443"}.fa-first-aid:before,.fa-kit-medical:before{content:"\\f479"}.fa-person-through-window:before{content:"\\e5a9"}.fa-toolbox:before{content:"\\f552"}.fa-hands-holding-circle:before{content:"\\e4fb"}.fa-bug:before{content:"\\f188"}.fa-credit-card-alt:before,.fa-credit-card:before{content:"\\f09d"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-hand-holding-hand:before{content:"\\e4f7"}.fa-book-open-reader:before,.fa-book-reader:before{content:"\\f5da"}.fa-mountain-sun:before{content:"\\e52f"}.fa-arrows-left-right-to-line:before{content:"\\e4ba"}.fa-dice-d20:before{content:"\\f6cf"}.fa-truck-droplet:before{content:"\\e58c"}.fa-file-circle-xmark:before{content:"\\e5a1"}.fa-temperature-arrow-up:before,.fa-temperature-up:before{content:"\\e040"}.fa-medal:before{content:"\\f5a2"}.fa-bed:before{content:"\\f236"}.fa-h-square:before,.fa-square-h:before{content:"\\f0fd"}.fa-podcast:before{content:"\\f2ce"}.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-bell:before{content:"\\f0f3"}.fa-superscript:before{content:"\\f12b"}.fa-plug-circle-xmark:before{content:"\\e560"}.fa-star-of-life:before{content:"\\f621"}.fa-phone-slash:before{content:"\\f3dd"}.fa-paint-roller:before{content:"\\f5aa"}.fa-hands-helping:before,.fa-handshake-angle:before{content:"\\f4c4"}.fa-location-dot:before,.fa-map-marker-alt:before{content:"\\f3c5"}.fa-file:before{content:"\\f15b"}.fa-greater-than:before{content:"\\3e"}.fa-person-swimming:before,.fa-swimmer:before{content:"\\f5c4"}.fa-arrow-down:before{content:"\\f063"}.fa-droplet:before,.fa-tint:before{content:"\\f043"}.fa-eraser:before{content:"\\f12d"}.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before{content:"\\f57d"}.fa-person-burst:before{content:"\\e53b"}.fa-dove:before{content:"\\f4ba"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-socks:before{content:"\\f696"}.fa-inbox:before{content:"\\f01c"}.fa-section:before{content:"\\e447"}.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before{content:"\\f625"}.fa-envelope-open-text:before{content:"\\f658"}.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before{content:"\\f0f8"}.fa-wine-bottle:before{content:"\\f72f"}.fa-chess-rook:before{content:"\\f447"}.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before{content:"\\f550"}.fa-dharmachakra:before{content:"\\f655"}.fa-hotdog:before{content:"\\f80f"}.fa-blind:before,.fa-person-walking-with-cane:before{content:"\\f29d"}.fa-drum:before{content:"\\f569"}.fa-ice-cream:before{content:"\\f810"}.fa-heart-circle-bolt:before{content:"\\e4fc"}.fa-fax:before{content:"\\f1ac"}.fa-paragraph:before{content:"\\f1dd"}.fa-check-to-slot:before,.fa-vote-yea:before{content:"\\f772"}.fa-star-half:before{content:"\\f089"}.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before{content:"\\f468"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-assistive-listening-systems:before,.fa-ear-listen:before{content:"\\f2a2"}.fa-tree-city:before{content:"\\e587"}.fa-play:before{content:"\\f04b"}.fa-font:before{content:"\\f031"}.fa-rupiah-sign:before{content:"\\e23d"}.fa-magnifying-glass:before,.fa-search:before{content:"\\f002"}.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before{content:"\\f45d"}.fa-diagnoses:before,.fa-person-dots-from-line:before{content:"\\f470"}.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before{content:"\\f82a"}.fa-naira-sign:before{content:"\\e1f6"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-walkie-talkie:before{content:"\\f8ef"}.fa-file-edit:before,.fa-file-pen:before{content:"\\f31c"}.fa-receipt:before{content:"\\f543"}.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before{content:"\\f14b"}.fa-suitcase-rolling:before{content:"\\f5c1"}.fa-person-circle-exclamation:before{content:"\\e53f"}.fa-chevron-down:before{content:"\\f078"}.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before{content:"\\f240"}.fa-skull-crossbones:before{content:"\\f714"}.fa-code-compare:before{content:"\\e13a"}.fa-list-dots:before,.fa-list-ul:before{content:"\\f0ca"}.fa-school-lock:before{content:"\\e56f"}.fa-tower-cell:before{content:"\\e585"}.fa-down-long:before,.fa-long-arrow-alt-down:before{content:"\\f309"}.fa-ranking-star:before{content:"\\e561"}.fa-chess-king:before{content:"\\f43f"}.fa-person-harassing:before{content:"\\e549"}.fa-brazilian-real-sign:before{content:"\\e46c"}.fa-landmark-alt:before,.fa-landmark-dome:before{content:"\\f752"}.fa-arrow-up:before{content:"\\f062"}.fa-television:before,.fa-tv-alt:before,.fa-tv:before{content:"\\f26c"}.fa-shrimp:before{content:"\\e448"}.fa-list-check:before,.fa-tasks:before{content:"\\f0ae"}.fa-jug-detergent:before{content:"\\e519"}.fa-circle-user:before,.fa-user-circle:before{content:"\\f2bd"}.fa-user-shield:before{content:"\\f505"}.fa-wind:before{content:"\\f72e"}.fa-car-burst:before,.fa-car-crash:before{content:"\\f5e1"}.fa-y:before{content:"\\59"}.fa-person-snowboarding:before,.fa-snowboarding:before{content:"\\f7ce"}.fa-shipping-fast:before,.fa-truck-fast:before{content:"\\f48b"}.fa-fish:before{content:"\\f578"}.fa-user-graduate:before{content:"\\f501"}.fa-adjust:before,.fa-circle-half-stroke:before{content:"\\f042"}.fa-clapperboard:before{content:"\\e131"}.fa-circle-radiation:before,.fa-radiation-alt:before{content:"\\f7ba"}.fa-baseball-ball:before,.fa-baseball:before{content:"\\f433"}.fa-jet-fighter-up:before{content:"\\e518"}.fa-diagram-project:before,.fa-project-diagram:before{content:"\\f542"}.fa-copy:before{content:"\\f0c5"}.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before{content:"\\f6a9"}.fa-hand-sparkles:before{content:"\\e05d"}.fa-grip-horizontal:before,.fa-grip:before{content:"\\f58d"}.fa-share-from-square:before,.fa-share-square:before{content:"\\f14d"}.fa-child-combatant:before,.fa-child-rifle:before{content:"\\e4e0"}.fa-gun:before{content:"\\e19b"}.fa-phone-square:before,.fa-square-phone:before{content:"\\f098"}.fa-add:before,.fa-plus:before{content:"\\2b"}.fa-expand:before{content:"\\f065"}.fa-computer:before{content:"\\e4e5"}.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before{content:"\\f00d"}.fa-arrows-up-down-left-right:before,.fa-arrows:before{content:"\\f047"}.fa-chalkboard-teacher:before,.fa-chalkboard-user:before{content:"\\f51c"}.fa-peso-sign:before{content:"\\e222"}.fa-building-shield:before{content:"\\e4d8"}.fa-baby:before{content:"\\f77c"}.fa-users-line:before{content:"\\e592"}.fa-quote-left-alt:before,.fa-quote-left:before{content:"\\f10d"}.fa-tractor:before{content:"\\f722"}.fa-trash-arrow-up:before,.fa-trash-restore:before{content:"\\f829"}.fa-arrow-down-up-lock:before{content:"\\e4b0"}.fa-lines-leaning:before{content:"\\e51e"}.fa-ruler-combined:before{content:"\\f546"}.fa-copyright:before{content:"\\f1f9"}.fa-equals:before{content:"\\3d"}.fa-blender:before{content:"\\f517"}.fa-teeth:before{content:"\\f62e"}.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before{content:"\\f20b"}.fa-map:before{content:"\\f279"}.fa-rocket:before{content:"\\f135"}.fa-photo-film:before,.fa-photo-video:before{content:"\\f87c"}.fa-folder-minus:before{content:"\\f65d"}.fa-store:before{content:"\\f54e"}.fa-arrow-trend-up:before{content:"\\e098"}.fa-plug-circle-minus:before{content:"\\e55e"}.fa-sign-hanging:before,.fa-sign:before{content:"\\f4d9"}.fa-bezier-curve:before{content:"\\f55b"}.fa-bell-slash:before{content:"\\f1f6"}.fa-tablet-android:before,.fa-tablet:before{content:"\\f3fb"}.fa-school-flag:before{content:"\\e56e"}.fa-fill:before{content:"\\f575"}.fa-angle-up:before{content:"\\f106"}.fa-drumstick-bite:before{content:"\\f6d7"}.fa-holly-berry:before{content:"\\f7aa"}.fa-chevron-left:before{content:"\\f053"}.fa-bacteria:before{content:"\\e059"}.fa-hand-lizard:before{content:"\\f258"}.fa-notdef:before{content:"\\e1fe"}.fa-disease:before{content:"\\f7fa"}.fa-briefcase-medical:before{content:"\\f469"}.fa-genderless:before{content:"\\f22d"}.fa-chevron-right:before{content:"\\f054"}.fa-retweet:before{content:"\\f079"}.fa-car-alt:before,.fa-car-rear:before{content:"\\f5de"}.fa-pump-soap:before{content:"\\e06b"}.fa-video-slash:before{content:"\\f4e2"}.fa-battery-2:before,.fa-battery-quarter:before{content:"\\f243"}.fa-radio:before{content:"\\f8d7"}.fa-baby-carriage:before,.fa-carriage-baby:before{content:"\\f77d"}.fa-traffic-light:before{content:"\\f637"}.fa-thermometer:before{content:"\\f491"}.fa-vr-cardboard:before{content:"\\f729"}.fa-hand-middle-finger:before{content:"\\f806"}.fa-percent:before,.fa-percentage:before{content:"\\25"}.fa-truck-moving:before{content:"\\f4df"}.fa-glass-water-droplet:before{content:"\\e4f5"}.fa-display:before{content:"\\e163"}.fa-face-smile:before,.fa-smile:before{content:"\\f118"}.fa-thumb-tack:before,.fa-thumbtack:before{content:"\\f08d"}.fa-trophy:before{content:"\\f091"}.fa-person-praying:before,.fa-pray:before{content:"\\f683"}.fa-hammer:before{content:"\\f6e3"}.fa-hand-peace:before{content:"\\f25b"}.fa-rotate:before,.fa-sync-alt:before{content:"\\f2f1"}.fa-spinner:before{content:"\\f110"}.fa-robot:before{content:"\\f544"}.fa-peace:before{content:"\\f67c"}.fa-cogs:before,.fa-gears:before{content:"\\f085"}.fa-warehouse:before{content:"\\f494"}.fa-arrow-up-right-dots:before{content:"\\e4b7"}.fa-splotch:before{content:"\\f5bc"}.fa-face-grin-hearts:before,.fa-grin-hearts:before{content:"\\f584"}.fa-dice-four:before{content:"\\f524"}.fa-sim-card:before{content:"\\f7c4"}.fa-transgender-alt:before,.fa-transgender:before{content:"\\f225"}.fa-mercury:before{content:"\\f223"}.fa-arrow-turn-down:before,.fa-level-down:before{content:"\\f149"}.fa-person-falling-burst:before{content:"\\e547"}.fa-award:before{content:"\\f559"}.fa-ticket-alt:before,.fa-ticket-simple:before{content:"\\f3ff"}.fa-building:before{content:"\\f1ad"}.fa-angle-double-left:before,.fa-angles-left:before{content:"\\f100"}.fa-qrcode:before{content:"\\f029"}.fa-clock-rotate-left:before,.fa-history:before{content:"\\f1da"}.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before{content:"\\f583"}.fa-arrow-right-from-file:before,.fa-file-export:before{content:"\\f56e"}.fa-shield-blank:before,.fa-shield:before{content:"\\f132"}.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before{content:"\\f885"}.fa-house-medical:before{content:"\\e3b2"}.fa-golf-ball-tee:before,.fa-golf-ball:before{content:"\\f450"}.fa-chevron-circle-left:before,.fa-circle-chevron-left:before{content:"\\f137"}.fa-house-chimney-window:before{content:"\\e00d"}.fa-pen-nib:before{content:"\\f5ad"}.fa-tent-arrow-turn-left:before{content:"\\e580"}.fa-tents:before{content:"\\e582"}.fa-magic:before,.fa-wand-magic:before{content:"\\f0d0"}.fa-dog:before{content:"\\f6d3"}.fa-carrot:before{content:"\\f787"}.fa-moon:before{content:"\\f186"}.fa-wine-glass-alt:before,.fa-wine-glass-empty:before{content:"\\f5ce"}.fa-cheese:before{content:"\\f7ef"}.fa-yin-yang:before{content:"\\f6ad"}.fa-music:before{content:"\\f001"}.fa-code-commit:before{content:"\\f386"}.fa-temperature-low:before{content:"\\f76b"}.fa-biking:before,.fa-person-biking:before{content:"\\f84a"}.fa-broom:before{content:"\\f51a"}.fa-shield-heart:before{content:"\\e574"}.fa-gopuram:before{content:"\\f664"}.fa-earth-oceania:before,.fa-globe-oceania:before{content:"\\e47b"}.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before{content:"\\f2d3"}.fa-hashtag:before{content:"\\23"}.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before{content:"\\f424"}.fa-oil-can:before{content:"\\f613"}.fa-t:before{content:"\\54"}.fa-hippo:before{content:"\\f6ed"}.fa-chart-column:before{content:"\\e0e3"}.fa-infinity:before{content:"\\f534"}.fa-vial-circle-check:before{content:"\\e596"}.fa-person-arrow-down-to-line:before{content:"\\e538"}.fa-voicemail:before{content:"\\f897"}.fa-fan:before{content:"\\f863"}.fa-person-walking-luggage:before{content:"\\e554"}.fa-arrows-alt-v:before,.fa-up-down:before{content:"\\f338"}.fa-cloud-moon-rain:before{content:"\\f73c"}.fa-calendar:before{content:"\\f133"}.fa-trailer:before{content:"\\e041"}.fa-bahai:before,.fa-haykal:before{content:"\\f666"}.fa-sd-card:before{content:"\\f7c2"}.fa-dragon:before{content:"\\f6d5"}.fa-shoe-prints:before{content:"\\f54b"}.fa-circle-plus:before,.fa-plus-circle:before{content:"\\f055"}.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before{content:"\\f58b"}.fa-hand-holding:before{content:"\\f4bd"}.fa-plug-circle-exclamation:before{content:"\\e55d"}.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before{content:"\\f127"}.fa-clone:before{content:"\\f24d"}.fa-person-walking-arrow-loop-left:before{content:"\\e551"}.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before{content:"\\f882"}.fa-fire-alt:before,.fa-fire-flame-curved:before{content:"\\f7e4"}.fa-tornado:before{content:"\\f76f"}.fa-file-circle-plus:before{content:"\\e494"}.fa-book-quran:before,.fa-quran:before{content:"\\f687"}.fa-anchor:before{content:"\\f13d"}.fa-border-all:before{content:"\\f84c"}.fa-angry:before,.fa-face-angry:before{content:"\\f556"}.fa-cookie-bite:before{content:"\\f564"}.fa-arrow-trend-down:before{content:"\\e097"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-draw-polygon:before{content:"\\f5ee"}.fa-balance-scale:before,.fa-scale-balanced:before{content:"\\f24e"}.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before{content:"\\f62a"}.fa-shower:before{content:"\\f2cc"}.fa-desktop-alt:before,.fa-desktop:before{content:"\\f390"}.fa-m:before{content:"\\4d"}.fa-table-list:before,.fa-th-list:before{content:"\\f00b"}.fa-comment-sms:before,.fa-sms:before{content:"\\f7cd"}.fa-book:before{content:"\\f02d"}.fa-user-plus:before{content:"\\f234"}.fa-check:before{content:"\\f00c"}.fa-battery-4:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-house-circle-check:before{content:"\\e509"}.fa-angle-left:before{content:"\\f104"}.fa-diagram-successor:before{content:"\\e47a"}.fa-truck-arrow-right:before{content:"\\e58b"}.fa-arrows-split-up-and-left:before{content:"\\e4bc"}.fa-fist-raised:before,.fa-hand-fist:before{content:"\\f6de"}.fa-cloud-moon:before{content:"\\f6c3"}.fa-briefcase:before{content:"\\f0b1"}.fa-person-falling:before{content:"\\e546"}.fa-image-portrait:before,.fa-portrait:before{content:"\\f3e0"}.fa-user-tag:before{content:"\\f507"}.fa-rug:before{content:"\\e569"}.fa-earth-europe:before,.fa-globe-europe:before{content:"\\f7a2"}.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before{content:"\\f59d"}.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before{content:"\\f410"}.fa-baht-sign:before{content:"\\e0ac"}.fa-book-open:before{content:"\\f518"}.fa-book-journal-whills:before,.fa-journal-whills:before{content:"\\f66a"}.fa-handcuffs:before{content:"\\e4f8"}.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before{content:"\\f071"}.fa-database:before{content:"\\f1c0"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-bottle-droplet:before{content:"\\e4c4"}.fa-mask-face:before{content:"\\e1d7"}.fa-hill-rockslide:before{content:"\\e508"}.fa-exchange-alt:before,.fa-right-left:before{content:"\\f362"}.fa-paper-plane:before{content:"\\f1d8"}.fa-road-circle-exclamation:before{content:"\\e565"}.fa-dungeon:before{content:"\\f6d9"}.fa-align-right:before{content:"\\f038"}.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before{content:"\\f53b"}.fa-life-ring:before{content:"\\f1cd"}.fa-hands:before,.fa-sign-language:before,.fa-signing:before{content:"\\f2a7"}.fa-calendar-day:before{content:"\\f783"}.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before{content:"\\f5c5"}.fa-arrows-up-down:before,.fa-arrows-v:before{content:"\\f07d"}.fa-face-grimace:before,.fa-grimace:before{content:"\\f57f"}.fa-wheelchair-alt:before,.fa-wheelchair-move:before{content:"\\e2ce"}.fa-level-down-alt:before,.fa-turn-down:before{content:"\\f3be"}.fa-person-walking-arrow-right:before{content:"\\e552"}.fa-envelope-square:before,.fa-square-envelope:before{content:"\\f199"}.fa-dice:before{content:"\\f522"}.fa-bowling-ball:before{content:"\\f436"}.fa-brain:before{content:"\\f5dc"}.fa-band-aid:before,.fa-bandage:before{content:"\\f462"}.fa-calendar-minus:before{content:"\\f272"}.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before{content:"\\f057"}.fa-gifts:before{content:"\\f79c"}.fa-hotel:before{content:"\\f594"}.fa-earth-asia:before,.fa-globe-asia:before{content:"\\f57e"}.fa-id-card-alt:before,.fa-id-card-clip:before{content:"\\f47f"}.fa-magnifying-glass-plus:before,.fa-search-plus:before{content:"\\f00e"}.fa-thumbs-up:before{content:"\\f164"}.fa-user-clock:before{content:"\\f4fd"}.fa-allergies:before,.fa-hand-dots:before{content:"\\f461"}.fa-file-invoice:before{content:"\\f570"}.fa-window-minimize:before{content:"\\f2d1"}.fa-coffee:before,.fa-mug-saucer:before{content:"\\f0f4"}.fa-brush:before{content:"\\f55d"}.fa-mask:before{content:"\\f6fa"}.fa-magnifying-glass-minus:before,.fa-search-minus:before{content:"\\f010"}.fa-ruler-vertical:before{content:"\\f548"}.fa-user-alt:before,.fa-user-large:before{content:"\\f406"}.fa-train-tram:before{content:"\\e5b4"}.fa-user-nurse:before{content:"\\f82f"}.fa-syringe:before{content:"\\f48e"}.fa-cloud-sun:before{content:"\\f6c4"}.fa-stopwatch-20:before{content:"\\e06f"}.fa-square-full:before{content:"\\f45c"}.fa-magnet:before{content:"\\f076"}.fa-jar:before{content:"\\e516"}.fa-note-sticky:before,.fa-sticky-note:before{content:"\\f249"}.fa-bug-slash:before{content:"\\e490"}.fa-arrow-up-from-water-pump:before{content:"\\e4b6"}.fa-bone:before{content:"\\f5d7"}.fa-user-injured:before{content:"\\f728"}.fa-face-sad-tear:before,.fa-sad-tear:before{content:"\\f5b4"}.fa-plane:before{content:"\\f072"}.fa-tent-arrows-down:before{content:"\\e581"}.fa-exclamation:before{content:"\\21"}.fa-arrows-spin:before{content:"\\e4bb"}.fa-print:before{content:"\\f02f"}.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before{content:"\\e2bb"}.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before{content:"\\24"}.fa-x:before{content:"\\58"}.fa-magnifying-glass-dollar:before,.fa-search-dollar:before{content:"\\f688"}.fa-users-cog:before,.fa-users-gear:before{content:"\\f509"}.fa-person-military-pointing:before{content:"\\e54a"}.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before{content:"\\f19c"}.fa-umbrella:before{content:"\\f0e9"}.fa-trowel:before{content:"\\e589"}.fa-d:before{content:"\\44"}.fa-stapler:before{content:"\\e5af"}.fa-masks-theater:before,.fa-theater-masks:before{content:"\\f630"}.fa-kip-sign:before{content:"\\e1c4"}.fa-hand-point-left:before{content:"\\f0a5"}.fa-handshake-alt:before,.fa-handshake-simple:before{content:"\\f4c6"}.fa-fighter-jet:before,.fa-jet-fighter:before{content:"\\f0fb"}.fa-share-alt-square:before,.fa-square-share-nodes:before{content:"\\f1e1"}.fa-barcode:before{content:"\\f02a"}.fa-plus-minus:before{content:"\\e43c"}.fa-video-camera:before,.fa-video:before{content:"\\f03d"}.fa-graduation-cap:before,.fa-mortar-board:before{content:"\\f19d"}.fa-hand-holding-medical:before{content:"\\e05c"}.fa-person-circle-check:before{content:"\\e53e"}.fa-level-up-alt:before,.fa-turn-up:before{content:"\\f3bf"}
.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host,:root{--fa-style-family-brands:"Font Awesome 6 Brands";--fa-font-brands:normal 400 1em/1 "Font Awesome 6 Brands"}.fa-brands,.fab{font-weight:400}.fa-monero:before{content:"\\f3d0"}.fa-hooli:before{content:"\\f427"}.fa-yelp:before{content:"\\f1e9"}.fa-cc-visa:before{content:"\\f1f0"}.fa-lastfm:before{content:"\\f202"}.fa-shopware:before{content:"\\f5b5"}.fa-creative-commons-nc:before{content:"\\f4e8"}.fa-aws:before{content:"\\f375"}.fa-redhat:before{content:"\\f7bc"}.fa-yoast:before{content:"\\f2b1"}.fa-cloudflare:before{content:"\\e07d"}.fa-ups:before{content:"\\f7e0"}.fa-pixiv:before{content:"\\e640"}.fa-wpexplorer:before{content:"\\f2de"}.fa-dyalog:before{content:"\\f399"}.fa-bity:before{content:"\\f37a"}.fa-stackpath:before{content:"\\f842"}.fa-buysellads:before{content:"\\f20d"}.fa-first-order:before{content:"\\f2b0"}.fa-modx:before{content:"\\f285"}.fa-guilded:before{content:"\\e07e"}.fa-vnv:before{content:"\\f40b"}.fa-js-square:before,.fa-square-js:before{content:"\\f3b9"}.fa-microsoft:before{content:"\\f3ca"}.fa-qq:before{content:"\\f1d6"}.fa-orcid:before{content:"\\f8d2"}.fa-java:before{content:"\\f4e4"}.fa-invision:before{content:"\\f7b0"}.fa-creative-commons-pd-alt:before{content:"\\f4ed"}.fa-centercode:before{content:"\\f380"}.fa-glide-g:before{content:"\\f2a6"}.fa-drupal:before{content:"\\f1a9"}.fa-hire-a-helper:before{content:"\\f3b0"}.fa-creative-commons-by:before{content:"\\f4e7"}.fa-unity:before{content:"\\e049"}.fa-whmcs:before{content:"\\f40d"}.fa-rocketchat:before{content:"\\f3e8"}.fa-vk:before{content:"\\f189"}.fa-untappd:before{content:"\\f405"}.fa-mailchimp:before{content:"\\f59e"}.fa-css3-alt:before{content:"\\f38b"}.fa-reddit-square:before,.fa-square-reddit:before{content:"\\f1a2"}.fa-vimeo-v:before{content:"\\f27d"}.fa-contao:before{content:"\\f26d"}.fa-square-font-awesome:before{content:"\\e5ad"}.fa-deskpro:before{content:"\\f38f"}.fa-brave:before{content:"\\e63c"}.fa-sistrix:before{content:"\\f3ee"}.fa-instagram-square:before,.fa-square-instagram:before{content:"\\e055"}.fa-battle-net:before{content:"\\f835"}.fa-the-red-yeti:before{content:"\\f69d"}.fa-hacker-news-square:before,.fa-square-hacker-news:before{content:"\\f3af"}.fa-edge:before{content:"\\f282"}.fa-threads:before{content:"\\e618"}.fa-napster:before{content:"\\f3d2"}.fa-snapchat-square:before,.fa-square-snapchat:before{content:"\\f2ad"}.fa-google-plus-g:before{content:"\\f0d5"}.fa-artstation:before{content:"\\f77a"}.fa-markdown:before{content:"\\f60f"}.fa-sourcetree:before{content:"\\f7d3"}.fa-google-plus:before{content:"\\f2b3"}.fa-diaspora:before{content:"\\f791"}.fa-foursquare:before{content:"\\f180"}.fa-stack-overflow:before{content:"\\f16c"}.fa-github-alt:before{content:"\\f113"}.fa-phoenix-squadron:before{content:"\\f511"}.fa-pagelines:before{content:"\\f18c"}.fa-algolia:before{content:"\\f36c"}.fa-red-river:before{content:"\\f3e3"}.fa-creative-commons-sa:before{content:"\\f4ef"}.fa-safari:before{content:"\\f267"}.fa-google:before{content:"\\f1a0"}.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before{content:"\\f35c"}.fa-atlassian:before{content:"\\f77b"}.fa-linkedin-in:before{content:"\\f0e1"}.fa-digital-ocean:before{content:"\\f391"}.fa-nimblr:before{content:"\\f5a8"}.fa-chromecast:before{content:"\\f838"}.fa-evernote:before{content:"\\f839"}.fa-hacker-news:before{content:"\\f1d4"}.fa-creative-commons-sampling:before{content:"\\f4f0"}.fa-adversal:before{content:"\\f36a"}.fa-creative-commons:before{content:"\\f25e"}.fa-watchman-monitoring:before{content:"\\e087"}.fa-fonticons:before{content:"\\f280"}.fa-weixin:before{content:"\\f1d7"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-codepen:before{content:"\\f1cb"}.fa-git-alt:before{content:"\\f841"}.fa-lyft:before{content:"\\f3c3"}.fa-rev:before{content:"\\f5b2"}.fa-windows:before{content:"\\f17a"}.fa-wizards-of-the-coast:before{content:"\\f730"}.fa-square-viadeo:before,.fa-viadeo-square:before{content:"\\f2aa"}.fa-meetup:before{content:"\\f2e0"}.fa-centos:before{content:"\\f789"}.fa-adn:before{content:"\\f170"}.fa-cloudsmith:before{content:"\\f384"}.fa-opensuse:before{content:"\\e62b"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-dribbble-square:before,.fa-square-dribbble:before{content:"\\f397"}.fa-codiepie:before{content:"\\f284"}.fa-node:before{content:"\\f419"}.fa-mix:before{content:"\\f3cb"}.fa-steam:before{content:"\\f1b6"}.fa-cc-apple-pay:before{content:"\\f416"}.fa-scribd:before{content:"\\f28a"}.fa-debian:before{content:"\\e60b"}.fa-openid:before{content:"\\f19b"}.fa-instalod:before{content:"\\e081"}.fa-expeditedssl:before{content:"\\f23e"}.fa-sellcast:before{content:"\\f2da"}.fa-square-twitter:before,.fa-twitter-square:before{content:"\\f081"}.fa-r-project:before{content:"\\f4f7"}.fa-delicious:before{content:"\\f1a5"}.fa-freebsd:before{content:"\\f3a4"}.fa-vuejs:before{content:"\\f41f"}.fa-accusoft:before{content:"\\f369"}.fa-ioxhost:before{content:"\\f208"}.fa-fonticons-fi:before{content:"\\f3a2"}.fa-app-store:before{content:"\\f36f"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-itunes-note:before{content:"\\f3b5"}.fa-golang:before{content:"\\e40f"}.fa-kickstarter:before{content:"\\f3bb"}.fa-grav:before{content:"\\f2d6"}.fa-weibo:before{content:"\\f18a"}.fa-uncharted:before{content:"\\e084"}.fa-firstdraft:before{content:"\\f3a1"}.fa-square-youtube:before,.fa-youtube-square:before{content:"\\f431"}.fa-wikipedia-w:before{content:"\\f266"}.fa-rendact:before,.fa-wpressr:before{content:"\\f3e4"}.fa-angellist:before{content:"\\f209"}.fa-galactic-republic:before{content:"\\f50c"}.fa-nfc-directional:before{content:"\\e530"}.fa-skype:before{content:"\\f17e"}.fa-joget:before{content:"\\f3b7"}.fa-fedora:before{content:"\\f798"}.fa-stripe-s:before{content:"\\f42a"}.fa-meta:before{content:"\\e49b"}.fa-laravel:before{content:"\\f3bd"}.fa-hotjar:before{content:"\\f3b1"}.fa-bluetooth-b:before{content:"\\f294"}.fa-square-letterboxd:before{content:"\\e62e"}.fa-sticker-mule:before{content:"\\f3f7"}.fa-creative-commons-zero:before{content:"\\f4f3"}.fa-hips:before{content:"\\f452"}.fa-behance:before{content:"\\f1b4"}.fa-reddit:before{content:"\\f1a1"}.fa-discord:before{content:"\\f392"}.fa-chrome:before{content:"\\f268"}.fa-app-store-ios:before{content:"\\f370"}.fa-cc-discover:before{content:"\\f1f2"}.fa-wpbeginner:before{content:"\\f297"}.fa-confluence:before{content:"\\f78d"}.fa-shoelace:before{content:"\\e60c"}.fa-mdb:before{content:"\\f8ca"}.fa-dochub:before{content:"\\f394"}.fa-accessible-icon:before{content:"\\f368"}.fa-ebay:before{content:"\\f4f4"}.fa-amazon:before{content:"\\f270"}.fa-unsplash:before{content:"\\e07c"}.fa-yarn:before{content:"\\f7e3"}.fa-square-steam:before,.fa-steam-square:before{content:"\\f1b7"}.fa-500px:before{content:"\\f26e"}.fa-square-vimeo:before,.fa-vimeo-square:before{content:"\\f194"}.fa-asymmetrik:before{content:"\\f372"}.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-gratipay:before{content:"\\f184"}.fa-apple:before{content:"\\f179"}.fa-hive:before{content:"\\e07f"}.fa-gitkraken:before{content:"\\f3a6"}.fa-keybase:before{content:"\\f4f5"}.fa-apple-pay:before{content:"\\f415"}.fa-padlet:before{content:"\\e4a0"}.fa-amazon-pay:before{content:"\\f42c"}.fa-github-square:before,.fa-square-github:before{content:"\\f092"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-fedex:before{content:"\\f797"}.fa-phoenix-framework:before{content:"\\f3dc"}.fa-shopify:before{content:"\\e057"}.fa-neos:before{content:"\\f612"}.fa-square-threads:before{content:"\\e619"}.fa-hackerrank:before{content:"\\f5f7"}.fa-researchgate:before{content:"\\f4f8"}.fa-swift:before{content:"\\f8e1"}.fa-angular:before{content:"\\f420"}.fa-speakap:before{content:"\\f3f3"}.fa-angrycreative:before{content:"\\f36e"}.fa-y-combinator:before{content:"\\f23b"}.fa-empire:before{content:"\\f1d1"}.fa-envira:before{content:"\\f299"}.fa-google-scholar:before{content:"\\e63b"}.fa-gitlab-square:before,.fa-square-gitlab:before{content:"\\e5ae"}.fa-studiovinari:before{content:"\\f3f8"}.fa-pied-piper:before{content:"\\f2ae"}.fa-wordpress:before{content:"\\f19a"}.fa-product-hunt:before{content:"\\f288"}.fa-firefox:before{content:"\\f269"}.fa-linode:before{content:"\\f2b8"}.fa-goodreads:before{content:"\\f3a8"}.fa-odnoklassniki-square:before,.fa-square-odnoklassniki:before{content:"\\f264"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-sith:before{content:"\\f512"}.fa-themeisle:before{content:"\\f2b2"}.fa-page4:before{content:"\\f3d7"}.fa-hashnode:before{content:"\\e499"}.fa-react:before{content:"\\f41b"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-squarespace:before{content:"\\f5be"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-creative-commons-share:before{content:"\\f4f2"}.fa-bitcoin:before{content:"\\f379"}.fa-keycdn:before{content:"\\f3ba"}.fa-opera:before{content:"\\f26a"}.fa-itch-io:before{content:"\\f83a"}.fa-umbraco:before{content:"\\f8e8"}.fa-galactic-senate:before{content:"\\f50d"}.fa-ubuntu:before{content:"\\f7df"}.fa-draft2digital:before{content:"\\f396"}.fa-stripe:before{content:"\\f429"}.fa-houzz:before{content:"\\f27c"}.fa-gg:before{content:"\\f260"}.fa-dhl:before{content:"\\f790"}.fa-pinterest-square:before,.fa-square-pinterest:before{content:"\\f0d3"}.fa-xing:before{content:"\\f168"}.fa-blackberry:before{content:"\\f37b"}.fa-creative-commons-pd:before{content:"\\f4ec"}.fa-playstation:before{content:"\\f3df"}.fa-quinscape:before{content:"\\f459"}.fa-less:before{content:"\\f41d"}.fa-blogger-b:before{content:"\\f37d"}.fa-opencart:before{content:"\\f23d"}.fa-vine:before{content:"\\f1ca"}.fa-signal-messenger:before{content:"\\e663"}.fa-paypal:before{content:"\\f1ed"}.fa-gitlab:before{content:"\\f296"}.fa-typo3:before{content:"\\f42b"}.fa-reddit-alien:before{content:"\\f281"}.fa-yahoo:before{content:"\\f19e"}.fa-dailymotion:before{content:"\\e052"}.fa-affiliatetheme:before{content:"\\f36b"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-bootstrap:before{content:"\\f836"}.fa-odnoklassniki:before{content:"\\f263"}.fa-nfc-symbol:before{content:"\\e531"}.fa-mintbit:before{content:"\\e62f"}.fa-ethereum:before{content:"\\f42e"}.fa-speaker-deck:before{content:"\\f83c"}.fa-creative-commons-nc-eu:before{content:"\\f4e9"}.fa-patreon:before{content:"\\f3d9"}.fa-avianex:before{content:"\\f374"}.fa-ello:before{content:"\\f5f1"}.fa-gofore:before{content:"\\f3a7"}.fa-bimobject:before{content:"\\f378"}.fa-brave-reverse:before{content:"\\e63d"}.fa-facebook-f:before{content:"\\f39e"}.fa-google-plus-square:before,.fa-square-google-plus:before{content:"\\f0d4"}.fa-mandalorian:before{content:"\\f50f"}.fa-first-order-alt:before{content:"\\f50a"}.fa-osi:before{content:"\\f41a"}.fa-google-wallet:before{content:"\\f1ee"}.fa-d-and-d-beyond:before{content:"\\f6ca"}.fa-periscope:before{content:"\\f3da"}.fa-fulcrum:before{content:"\\f50b"}.fa-cloudscale:before{content:"\\f383"}.fa-forumbee:before{content:"\\f211"}.fa-mizuni:before{content:"\\f3cc"}.fa-schlix:before{content:"\\f3ea"}.fa-square-xing:before,.fa-xing-square:before{content:"\\f169"}.fa-bandcamp:before{content:"\\f2d5"}.fa-wpforms:before{content:"\\f298"}.fa-cloudversify:before{content:"\\f385"}.fa-usps:before{content:"\\f7e1"}.fa-megaport:before{content:"\\f5a3"}.fa-magento:before{content:"\\f3c4"}.fa-spotify:before{content:"\\f1bc"}.fa-optin-monster:before{content:"\\f23c"}.fa-fly:before{content:"\\f417"}.fa-aviato:before{content:"\\f421"}.fa-itunes:before{content:"\\f3b4"}.fa-cuttlefish:before{content:"\\f38c"}.fa-blogger:before{content:"\\f37c"}.fa-flickr:before{content:"\\f16e"}.fa-viber:before{content:"\\f409"}.fa-soundcloud:before{content:"\\f1be"}.fa-digg:before{content:"\\f1a6"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-letterboxd:before{content:"\\e62d"}.fa-symfony:before{content:"\\f83d"}.fa-maxcdn:before{content:"\\f136"}.fa-etsy:before{content:"\\f2d7"}.fa-facebook-messenger:before{content:"\\f39f"}.fa-audible:before{content:"\\f373"}.fa-think-peaks:before{content:"\\f731"}.fa-bilibili:before{content:"\\e3d9"}.fa-erlang:before{content:"\\f39d"}.fa-x-twitter:before{content:"\\e61b"}.fa-cotton-bureau:before{content:"\\f89e"}.fa-dashcube:before{content:"\\f210"}.fa-42-group:before,.fa-innosoft:before{content:"\\e080"}.fa-stack-exchange:before{content:"\\f18d"}.fa-elementor:before{content:"\\f430"}.fa-pied-piper-square:before,.fa-square-pied-piper:before{content:"\\e01e"}.fa-creative-commons-nd:before{content:"\\f4eb"}.fa-palfed:before{content:"\\f3d8"}.fa-superpowers:before{content:"\\f2dd"}.fa-resolving:before{content:"\\f3e7"}.fa-xbox:before{content:"\\f412"}.fa-searchengin:before{content:"\\f3eb"}.fa-tiktok:before{content:"\\e07b"}.fa-facebook-square:before,.fa-square-facebook:before{content:"\\f082"}.fa-renren:before{content:"\\f18b"}.fa-linux:before{content:"\\f17c"}.fa-glide:before{content:"\\f2a5"}.fa-linkedin:before{content:"\\f08c"}.fa-hubspot:before{content:"\\f3b2"}.fa-deploydog:before{content:"\\f38e"}.fa-twitch:before{content:"\\f1e8"}.fa-ravelry:before{content:"\\f2d9"}.fa-mixer:before{content:"\\e056"}.fa-lastfm-square:before,.fa-square-lastfm:before{content:"\\f203"}.fa-vimeo:before{content:"\\f40a"}.fa-mendeley:before{content:"\\f7b3"}.fa-uniregistry:before{content:"\\f404"}.fa-figma:before{content:"\\f799"}.fa-creative-commons-remix:before{content:"\\f4ee"}.fa-cc-amazon-pay:before{content:"\\f42d"}.fa-dropbox:before{content:"\\f16b"}.fa-instagram:before{content:"\\f16d"}.fa-cmplid:before{content:"\\e360"}.fa-upwork:before{content:"\\e641"}.fa-facebook:before{content:"\\f09a"}.fa-gripfire:before{content:"\\f3ac"}.fa-jedi-order:before{content:"\\f50e"}.fa-uikit:before{content:"\\f403"}.fa-fort-awesome-alt:before{content:"\\f3a3"}.fa-phabricator:before{content:"\\f3db"}.fa-ussunnah:before{content:"\\f407"}.fa-earlybirds:before{content:"\\f39a"}.fa-trade-federation:before{content:"\\f513"}.fa-autoprefixer:before{content:"\\f41c"}.fa-whatsapp:before{content:"\\f232"}.fa-slideshare:before{content:"\\f1e7"}.fa-google-play:before{content:"\\f3ab"}.fa-viadeo:before{content:"\\f2a9"}.fa-line:before{content:"\\f3c0"}.fa-google-drive:before{content:"\\f3aa"}.fa-servicestack:before{content:"\\f3ec"}.fa-simplybuilt:before{content:"\\f215"}.fa-bitbucket:before{content:"\\f171"}.fa-imdb:before{content:"\\f2d8"}.fa-deezer:before{content:"\\e077"}.fa-raspberry-pi:before{content:"\\f7bb"}.fa-jira:before{content:"\\f7b1"}.fa-docker:before{content:"\\f395"}.fa-screenpal:before{content:"\\e570"}.fa-bluetooth:before{content:"\\f293"}.fa-gitter:before{content:"\\f426"}.fa-d-and-d:before{content:"\\f38d"}.fa-microblog:before{content:"\\e01a"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-gg-circle:before{content:"\\f261"}.fa-pied-piper-hat:before{content:"\\f4e5"}.fa-kickstarter-k:before{content:"\\f3bc"}.fa-yandex:before{content:"\\f413"}.fa-readme:before{content:"\\f4d5"}.fa-html5:before{content:"\\f13b"}.fa-sellsy:before{content:"\\f213"}.fa-sass:before{content:"\\f41e"}.fa-wirsindhandwerk:before,.fa-wsh:before{content:"\\e2d0"}.fa-buromobelexperte:before{content:"\\f37f"}.fa-salesforce:before{content:"\\f83b"}.fa-octopus-deploy:before{content:"\\e082"}.fa-medapps:before{content:"\\f3c6"}.fa-ns8:before{content:"\\f3d5"}.fa-pinterest-p:before{content:"\\f231"}.fa-apper:before{content:"\\f371"}.fa-fort-awesome:before{content:"\\f286"}.fa-waze:before{content:"\\f83f"}.fa-cc-jcb:before{content:"\\f24b"}.fa-snapchat-ghost:before,.fa-snapchat:before{content:"\\f2ab"}.fa-fantasy-flight-games:before{content:"\\f6dc"}.fa-rust:before{content:"\\e07a"}.fa-wix:before{content:"\\f5cf"}.fa-behance-square:before,.fa-square-behance:before{content:"\\f1b5"}.fa-supple:before{content:"\\f3f9"}.fa-webflow:before{content:"\\e65c"}.fa-rebel:before{content:"\\f1d0"}.fa-css3:before{content:"\\f13c"}.fa-staylinked:before{content:"\\f3f5"}.fa-kaggle:before{content:"\\f5fa"}.fa-space-awesome:before{content:"\\e5ac"}.fa-deviantart:before{content:"\\f1bd"}.fa-cpanel:before{content:"\\f388"}.fa-goodreads-g:before{content:"\\f3a9"}.fa-git-square:before,.fa-square-git:before{content:"\\f1d2"}.fa-square-tumblr:before,.fa-tumblr-square:before{content:"\\f174"}.fa-trello:before{content:"\\f181"}.fa-creative-commons-nc-jp:before{content:"\\f4ea"}.fa-get-pocket:before{content:"\\f265"}.fa-perbyte:before{content:"\\e083"}.fa-grunt:before{content:"\\f3ad"}.fa-weebly:before{content:"\\f5cc"}.fa-connectdevelop:before{content:"\\f20e"}.fa-leanpub:before{content:"\\f212"}.fa-black-tie:before{content:"\\f27e"}.fa-themeco:before{content:"\\f5c6"}.fa-python:before{content:"\\f3e2"}.fa-android:before{content:"\\f17b"}.fa-bots:before{content:"\\e340"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-hornbill:before{content:"\\f592"}.fa-js:before{content:"\\f3b8"}.fa-ideal:before{content:"\\e013"}.fa-git:before{content:"\\f1d3"}.fa-dev:before{content:"\\f6cc"}.fa-sketch:before{content:"\\f7c6"}.fa-yandex-international:before{content:"\\f414"}.fa-cc-amex:before{content:"\\f1f3"}.fa-uber:before{content:"\\f402"}.fa-github:before{content:"\\f09b"}.fa-php:before{content:"\\f457"}.fa-alipay:before{content:"\\f642"}.fa-youtube:before{content:"\\f167"}.fa-skyatlas:before{content:"\\f216"}.fa-firefox-browser:before{content:"\\e007"}.fa-replyd:before{content:"\\f3e6"}.fa-suse:before{content:"\\f7d6"}.fa-jenkins:before{content:"\\f3b6"}.fa-twitter:before{content:"\\f099"}.fa-rockrms:before{content:"\\f3e9"}.fa-pinterest:before{content:"\\f0d2"}.fa-buffer:before{content:"\\f837"}.fa-npm:before{content:"\\f3d4"}.fa-yammer:before{content:"\\f840"}.fa-btc:before{content:"\\f15a"}.fa-dribbble:before{content:"\\f17d"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-internet-explorer:before{content:"\\f26b"}.fa-stubber:before{content:"\\e5c7"}.fa-telegram-plane:before,.fa-telegram:before{content:"\\f2c6"}.fa-old-republic:before{content:"\\f510"}.fa-odysee:before{content:"\\e5c6"}.fa-square-whatsapp:before,.fa-whatsapp-square:before{content:"\\f40c"}.fa-node-js:before{content:"\\f3d3"}.fa-edge-legacy:before{content:"\\e078"}.fa-slack-hash:before,.fa-slack:before{content:"\\f198"}.fa-medrt:before{content:"\\f3c8"}.fa-usb:before{content:"\\f287"}.fa-tumblr:before{content:"\\f173"}.fa-vaadin:before{content:"\\f408"}.fa-quora:before{content:"\\f2c4"}.fa-square-x-twitter:before{content:"\\e61a"}.fa-reacteurope:before{content:"\\f75d"}.fa-medium-m:before,.fa-medium:before{content:"\\f23a"}.fa-amilia:before{content:"\\f36d"}.fa-mixcloud:before{content:"\\f289"}.fa-flipboard:before{content:"\\f44d"}.fa-viacoin:before{content:"\\f237"}.fa-critical-role:before{content:"\\f6c9"}.fa-sitrox:before{content:"\\e44a"}.fa-discourse:before{content:"\\f393"}.fa-joomla:before{content:"\\f1aa"}.fa-mastodon:before{content:"\\f4f6"}.fa-airbnb:before{content:"\\f834"}.fa-wolf-pack-battalion:before{content:"\\f514"}.fa-buy-n-large:before{content:"\\f8a6"}.fa-gulp:before{content:"\\f3ae"}.fa-creative-commons-sampling-plus:before{content:"\\f4f1"}.fa-strava:before{content:"\\f428"}.fa-ember:before{content:"\\f423"}.fa-canadian-maple-leaf:before{content:"\\f785"}.fa-teamspeak:before{content:"\\f4f9"}.fa-pushed:before{content:"\\f3e1"}.fa-wordpress-simple:before{content:"\\f411"}.fa-nutritionix:before{content:"\\f3d6"}.fa-wodu:before{content:"\\e088"}.fa-google-pay:before{content:"\\e079"}.fa-intercom:before{content:"\\f7af"}.fa-zhihu:before{content:"\\f63f"}.fa-korvue:before{content:"\\f42f"}.fa-pix:before{content:"\\e43a"}.fa-steam-symbol:before{content:"\\f3f6"}:host,:root{--fa-font-regular:normal 400 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:400;font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}.fa-regular,.far{font-weight:400}:host,:root{--fa-style-family-classic:"Font Awesome 6 Free";--fa-font-solid:normal 900 1em/1 "Font Awesome 6 Free"}@font-face{font-family:"Font Awesome 6 Free";font-style:normal;font-weight:900;font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}.fa-solid,.fas{font-weight:900}@font-face{font-family:"Font Awesome 5 Brands";font-display:block;font-weight:400;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:900;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"Font Awesome 5 Free";font-display:block;font-weight:400;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("woff2"),url(/renewal-assets/9fc85f3a4544ab0d570c7f8f9bbb88db8d92c359b2707580ea8b07c75673eae2.woff2) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-brands-400.woff2) format("woff2"),url(../webfonts/fa-brands-400.ttf) format("truetype")}@font-face{font-family:"FontAwesome";font-display:block;src:url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("woff2"),url(/renewal-assets/2bccecf0bc7e96cd5ce4003abeb3ae9ee4a3d19158c4e6edfd2df32d2f0d5721.woff2) format("truetype");unicode-range:u+f003,u+f006,u+f014,u+f016-f017,u+f01a-f01b,u+f01d,u+f022,u+f03e,u+f044,u+f046,u+f05c-f05d,u+f06e,u+f070,u+f087-f088,u+f08a,u+f094,u+f096-f097,u+f09d,u+f0a0,u+f0a2,u+f0a4-f0a7,u+f0c5,u+f0c7,u+f0e5-f0e6,u+f0eb,u+f0f6-f0f8,u+f10c,u+f114-f115,u+f118-f11a,u+f11c-f11d,u+f133,u+f147,u+f14e,u+f150-f152,u+f185-f186,u+f18e,u+f190-f192,u+f196,u+f1c1-f1c9,u+f1d9,u+f1db,u+f1e3,u+f1ea,u+f1f7,u+f1f9,u+f20a,u+f247-f248,u+f24a,u+f24d,u+f255-f25b,u+f25d,u+f271-f274,u+f278,u+f27b,u+f28c,u+f28e,u+f29c,u+f2b5,u+f2b7,u+f2ba,u+f2bc,u+f2be,u+f2c0-f2c1,u+f2c3,u+f2d0,u+f2d2,u+f2d4,u+f2dc}@font-face{font-family:"FontAwesome";font-display:block;src:url(../webfonts/fa-v4compatibility.woff2) format("woff2"),url(../webfonts/fa-v4compatibility.ttf) format("truetype");unicode-range:u+f041,u+f047,u+f065-f066,u+f07d-f07e,u+f080,u+f08b,u+f08e,u+f090,u+f09a,u+f0ac,u+f0ae,u+f0b2,u+f0d0,u+f0d6,u+f0e4,u+f0ec,u+f10a-f10b,u+f123,u+f13e,u+f148-f149,u+f14c,u+f156,u+f15e,u+f160-f161,u+f163,u+f175-f178,u+f195,u+f1f8,u+f219,u+f27a}</style><style data-request="v38-pay-gap">body>section:first-of-type:not(.closing),body>.page-header:first-child {padding-top:0;}</style><style data-request="v40-detail-spacing">body {padding-top:30px;}</style><style>@font-face{font-family:'Pretendard Variable';font-style:normal;font-weight:45 920;font-display:swap;src:url(/renewal-assets/9599f12fd42fc0bce1cd50b47a0c022e108d7aa64dd0d1bb0ed44f3282d900b4.woff2) format('woff2');}</style></head>
<body>
<!-- HERO -->
<section class="hero">
<div class="hero-badge">꽃게선생</div>
<h1>끼있는 대형주 · 업종대표주<br/><span>시장주도주</span></h1>
<p class="hero-desc">
            매매의 대가가 맥점에서<br/>
            선별하여 전달합니다.
        </p>
<p class="hero-sub">
            24시간 시장을 관찰하고,<br/>
            매일 오전 8시부터 장중 실시간으로<br/>
            주도주 매수·매도 시점을 텔레그램으로 안내합니다.
        </p>
</section>
<!-- CORE VALUE -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">종목 분석과 선택의<br/><span>부담을 덜어드립니다</span></h2>
<p class="section-desc">
                꽃게선생이 맥점에서<br/>
                핵심만 선별하여 전달합니다.
            </p>
<div class="value-grid">
<div class="value-card">
<div class="icon"><i class="fa-solid fa-compass"></i></div>
<h4>흔들림 없는 방향성</h4>
<p>명확한 전략 제시로<br/>안정적인 매매를 이어갑니다</p>
</div>
<div class="value-card">
<div class="icon"><i class="fa-solid fa-bolt"></i></div>
<h4>시장의 흐름을 반영</h4>
<p>최신 트렌드를 실시간으로 담아<br/>타이밍을 놓치지 않습니다</p>
</div>
<div class="value-card">
<div class="icon"><i class="fa-solid fa-rotate"></i></div>
<h4>간결한 익절과 관리</h4>
<p>복잡한 구성 없이<br/>단순하고 명확하게 운영합니다</p>
</div>
</div>
</div>
</section>
<!-- PRINCIPLES -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">세 가지 핵심<br/><span>투자 원칙</span></h2>
<p class="section-desc">
                시장을 읽고, 주도주 중심의 공략을 통해<br/>
                투자의 흐름을 경험하실 수 있도록 합니다.
            </p>
<div class="principle-list">
<div class="principle-card">
<div class="num">01</div>
<div>
<h4>주도 섹터와 이슈 테마</h4>
<p>자금이 집중되는 섹터와 테마를 먼저 파악하고, 그 흐름에 올라탑니다.</p>
</div>
</div>
<div class="principle-card">
<div class="num">02</div>
<div>
<h4>시장 대장주 중심 공략</h4>
<p>각 섹터의 대장주를 중심으로 접근하여 승률과 수익성을 높입니다.</p>
</div>
</div>
<div class="principle-card">
<div class="num">03</div>
<div>
<h4>리스크를 관리하는 전략</h4>
<p>위험을 통제하며 꾸준히 성과를 쌓아가는 안정적인 방식을 제시합니다.</p>
</div>
</div>
</div>
</div>
</section>
<!-- HOW IT WORKS -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">이용 방법<br/><span>매일의 진행 방식</span></h2>
<p class="section-desc">
                복잡한 분석은 꽃게선생이 담당합니다.<br/>
                회원님은 맥점에서 실행에만 집중하시면 됩니다.
            </p>
<div class="step-list">
<div class="step-card">
<div class="step-num">1</div>
<div>
<h4>24시간 시장 관찰</h4>
<p>밤새 해외·국내 이슈를 점검하여 당일 주도 섹터와 종목을 미리 정리합니다.</p>
</div>
</div>
<div class="step-card">
<div class="step-num">2</div>
<div>
<h4>오전 8시부터 실시간 전달</h4>
<p>장 시작 전부터 장중 내내, 상황에 맞는 주도주를 선별해 텔레그램으로 안내합니다.</p>
</div>
</div>
<div class="step-card">
<div class="step-num">3</div>
<div>
<h4>매수·매도 시점까지 알림</h4>
<p>종목 제시에서 그치지 않습니다. 매수 타이밍과 익절 시점까지 실시간으로 전달합니다.</p>
</div>
</div>
</div>
</div>
</section>
<!-- DAILY SCHEDULE -->
<section>
<div class="container fade-in visible">
<h2 class="section-title">하루 일정<br/><span>실시간 관리 구조</span></h2>
<p class="section-desc">
                억지로 종목을 구성하지 않습니다.<br/>
                확실한 맥점이 있을 때만 선별하여 전달합니다.
            </p>
<div class="schedule-list">
<div class="schedule-item">
<div class="time-icon"><i class="fa-solid fa-moon"></i></div>
<div>
<h4>전일 밤 ~ 새벽</h4>
<p>해외 시장과 국내 이슈를 점검하고, 당일 주도 섹터 후보를 정리합니다.</p>
</div>
</div>
<div class="schedule-item">
<div class="time-icon"><i class="fa-solid fa-clock"></i></div>
<div>
<h4>오전 8시 ~ 장 시작</h4>
<p>장 시작 전 주도주와 설명을 텔레그램으로 1차 전달합니다.</p>
</div>
</div>
<div class="schedule-item">
<div class="time-icon"><i class="fa-solid fa-chart-line"></i></div>
<div>
<h4>장중 실시간</h4>
<p>수급과 차트 변화에 따라 추가 종목과 매수·매도 타이밍을 실시간으로 안내합니다.</p>
</div>
</div>
<div class="schedule-item">
<div class="time-icon"><i class="fa-solid fa-check"></i></div>
<div>
<h4>장 마감 후</h4>
<p>당일 정리와 다음 날 방향성을 공유합니다.</p>
</div>
</div>
</div>
<p class="schedule-note">
                하루 추천 종목은 시장 상황에 따라<br/>
                0종목에서 최대 3~4종목까지 선별합니다.<br/>
                무리한 매매를 유도하지 않습니다.
            </p>
</div>
</section>
<!-- CLOSING -->
<section class="closing">
<h2>핵심종목만 콕 찝어서!<br/>꽃게선생과 함께하세요</h2>
<p>
            메이저 수급이 유입되는 핵심 종목,<br/>
            매일 맥점에서 선별하여<br/>
            매수·매도 시점까지 안내합니다.
        </p>
<button class="cta-btn" id="joinBtn" type="button">
            꽃게선생반 가입하기
        </button>
</section>

<script>
(() => {
 let previous=0, pending=false;
 function resize(){if(pending)return;pending=true;setTimeout(()=>{pending=false;const height=Math.ceil(document.body.getBoundingClientRect().height);if(Math.abs(height-previous)>2){previous=height;window.parent.postMessage({type:'WILLCLUB_DETAIL_HEIGHT',height},'*');}});}
 new ResizeObserver(resize).observe(document.body);
 window.addEventListener('load',resize);document.fonts.ready.then(resize);resize();
 window.addEventListener('message',event=>{if(event.source===window.parent && event.data?.type==='WILLCLUB_REQUEST_HEIGHT'){previous=0;resize();}});
 const join=document.getElementById('joinBtn');if(join)join.addEventListener('click',()=>window.parent.postMessage({type:'WILLCLUB_CLICK_PAY'},'*'));
})();
<\/script></body>
</html>`};

const Dv=hq;

function wn(){return(0,ul.jsxs)("a",{href:"#live-chat",className:"hm-floating-contact","aria-label":"실시간 상담센터 열기",children:[(0,ul.jsx)(vf,{size:21,strokeWidth:1.6}),(0,ul.jsx)("span",{children:"실시간 상담센터"})]})}

function Os({embedded:e=!1,standalone:t=!1,imageAssets:a={},onContinue:o,onLogin:f}){let[n,r]=(0,Yt.useState)(Xt[0].id),l=Xt.find(W=>W.id===n)??Xt[0],[c,d]=(0,Yt.useState)(Xt[0].options[Xt[0].options.length-1].id),b=l.options.find(W=>W.id===c)??l.options[l.options.length-1],A=(0,Yt.useRef)(null),[m,h]=(0,Yt.useState)(500),[x,E]=(0,Yt.useState)(""),M=Ps.find(W=>W.id===l.id)?.plans.find(W=>W.months===b.base_period&&W.bonusMonths===b.bonus_period),i=Bv[l.profile_image]??l.profile_image,u=a[i]??i,p=`/vip?expert_id=${l.expert_id}&vip_product_id=${l.id}`,U=(0,Yt.useCallback)((W,Z=!0)=>{let X=Xt.find(V=>V.id===W)??Xt[0];if(r(X.id),d(X.options[X.options.length-1].id),E(""),Z&&t){let V=new URLSearchParams(window.location.hash.slice(1));V.set("page","vip"),V.set("vip_product_id",X.id),V.delete("expert"),V.delete("expert_id"),window.history.replaceState(null,"",`#${V}`),window.dispatchEvent(new HashChangeEvent("hashchange"))}if(Z&&!t&&window.location.protocol!=="file:"){let V=new URL(window.location.href);V.searchParams.set("vip_product_id",X.id),V.searchParams.delete("expert"),V.searchParams.delete("expert_id"),window.history.replaceState(null,"",V.pathname+V.search+V.hash)}},[t]);(0,Yt.useEffect)(()=>{let W=()=>{let Z=new URLSearchParams(window.location.search);new URLSearchParams(window.location.hash.replace(/^#/,"?")).forEach((K,B)=>Z.set(B,K));let X=Xt.find(K=>K.id===Z.get("vip_product_id")),V=Z.get("expert_id")??Z.get("expert"),q=V==="62fb63f3-dc67-4863-9b22-ee18973933fd"?vq[1].id:V;U((X??Xt.find(K=>K.expert_id===q)??Xt[0]).id,!1)};return W(),window.addEventListener("popstate",W),window.addEventListener("hashchange",W),()=>{window.removeEventListener("popstate",W),window.removeEventListener("hashchange",W)}},[U]);let I=(0,Yt.useCallback)(()=>{o?o({product:l,option:b}):E("현재 결제를 진행할 수 없습니다.")},[o,l,b,p]);return(0,Yt.useLayoutEffect)(()=>{let W=V=>{V.source!==A.current?.contentWindow||!V.data||typeof V.data!="object"||(V.data.type==="WILLCLUB_DETAIL_HEIGHT"&&Number.isFinite(V.data.height)&&h(Math.min(3e4,Math.max(300,V.data.height))),V.data.type==="WILLCLUB_CLICK_PAY"&&window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}))};window.addEventListener("message",W);let Z=()=>A.current?.contentWindow?.postMessage({type:"WILLCLUB_REQUEST_HEIGHT"},"*");Z();let X=[100,500,1500,3e3,5e3].map(V=>window.setTimeout(Z,V));return()=>{window.removeEventListener("message",W),X.forEach(V=>window.clearTimeout(V))}},[I]),(0,k.jsxs)("div",{className:"willclub-page home-page service-page vo-page",id:"top",children:[(0,k.jsx)("a",{className:"hm-skip-link",href:"#vip-form",children:"본문 바로가기"}),(0,k.jsxs)("main",{className:"vo-main",children:[(0,k.jsxs)("div",{className:"vo-container vo-banner-container",children:[(0,k.jsxs)("div",{className:"vo-page-heading",children:[(0,k.jsx)("p",{children:"WILLCLUB VIP"}),(0,k.jsxs)("h1",{children:["VIP 회원서비스",(0,k.jsx)("span",{children:"."})]})]}),(0,k.jsx)(et,{title:(0,k.jsxs)(k.Fragment,{children:["전문가와 함께하는",(0,k.jsx)("br",{}),"나만의 투자 기준."]}),eyebrow:"WILLCLUB · VIP SERVICE",label:"VIP 서비스 안내"})]}),(0,k.jsx)("section",{className:"vo-form",id:"vip-form","aria-label":"VIP 서비스 선택",children:(0,k.jsx)("div",{className:"vo-container",children:(0,k.jsxs)("div",{className:"vo-grid",children:[(0,k.jsx)("div",{className:"vo-profile",children:(0,k.jsx)("img",{src:u,alt:`${l.expert_name} 전문가 이미지`,width:"600",height:"800"})}),(0,k.jsxs)("div",{className:"vo-selection",children:[(0,k.jsxs)("fieldset",{className:"vo-fieldset",children:[(0,k.jsxs)("legend",{children:[(0,k.jsx)("span",{}),"전문가 선택"]}),(0,k.jsx)("div",{className:"vo-buttons",children:vq.map(W=>(0,k.jsx)("button",{type:"button","data-expert":W.id,className:W.id===l.expert_id?"selected":"","aria-pressed":W.id===l.expert_id,onClick:()=>U((Xt.find(Z=>Z.expert_id===W.id)??Xt[0]).id),children:W.name},W.id))})]}),(0,k.jsxs)("fieldset",{className:"vo-fieldset",children:[(0,k.jsxs)("legend",{children:[(0,k.jsx)("span",{}),"상품 선택"]}),(0,k.jsx)("div",{className:"vo-buttons",children:Xt.filter(W=>W.expert_id===l.expert_id).map(W=>(0,k.jsx)("button",{type:"button","data-product":W.id,className:W.id===l.id?"selected":"","aria-pressed":W.id===l.id,onClick:()=>U(W.id),children:W.product_name},W.id))})]}),(0,k.jsxs)("fieldset",{className:"vo-fieldset",children:[(0,k.jsxs)("legend",{children:[(0,k.jsx)("span",{}),"이용권 선택"]}),(0,k.jsx)("div",{className:"vo-options",children:l.options.map(W=>{let Z=Ps.find(X=>X.id===l.id)?.plans.find(X=>X.months===W.base_period&&X.bonusMonths===W.bonus_period);return(0,k.jsxs)("label",{className:`vo-option${W.id===b.id?" selected":""}`,"data-option":W.id,children:[(0,k.jsx)("input",{type:"radio",name:"vip-option",value:W.id,checked:W.id===b.id,onChange:()=>d(W.id)}),(0,k.jsx)("span",{className:"vo-option-check","aria-hidden":"true",children:W.id===b.id&&(0,k.jsx)(kt,{size:12,strokeWidth:3})}),W.is_popular&&(0,k.jsx)("span",{className:"vo-popular",children:"인기"}),(0,k.jsx)("span",{className:"vo-option-title",children:Z?.label??`${W.base_period}개월${W.bonus_period?` + 무료 ${W.bonus_period}개월`:""}`}),(0,k.jsx)("span",{className:"vo-monthly",children:Z?.monthlyLabel??`월 ${Math.round(W.price/(W.base_period+W.bonus_period)/1e4)}만원${W.bonus_period?" 상당":""}`}),(0,k.jsxs)("span",{className:"vo-option-price",children:[Z?.originalAmount!=null&&(0,k.jsxs)("del",{children:[Ts(Z.originalAmount)," →"]}),(0,k.jsx)("strong",{children:Ts(W.price)})]})]},W.id)})})]}),(0,k.jsxs)("div",{className:"vo-summary","aria-live":"polite",children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("span",{children:"총 결제 금액"}),(0,k.jsx)("strong",{"data-total-price":!0,children:Ts(b.price)}),(0,k.jsx)("small",{children:M?.monthlyLabel})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("span",{children:"이용 기간"}),(0,k.jsxs)("strong",{"data-total-period":!0,children:[M?.totalMonths??b.base_period+b.bonus_period,"개월"]})]})]}),(0,k.jsxs)("button",{type:"button",className:"vo-pay","data-continue-href":p,onClick:I,children:[(0,k.jsx)(Pt,{size:17,"aria-hidden":"true"}),"결제하기",!o&&(0,k.jsx)(rt,{size:15,"aria-hidden":"true"})]}),(0,k.jsx)("p",{role:"status",className:"vo-status",children:x})]})]})})}),(0,k.jsx)("section",{className:"vo-detail","aria-label":`${l.product_name} 상세 안내`,children:(0,k.jsx)("iframe",{ref:A,onLoad:()=>A.current?.contentWindow?.postMessage({type:"WILLCLUB_REQUEST_HEIGHT"},"*"),title:`${l.product_name} 상품 상세`,sandbox:"allow-scripts allow-popups",srcDoc:Dv[l.id],style:{height:m}},l.id)})]}),(0,k.jsx)(wn,{})]})}

const qu={capturedAt:"2026-10-09",source:"",notice:[{id:"notice-reading",title:"게시글 자료 기준일과 출처 확인 안내",content:"<p>콘텐츠 하단의 참고 자료와 기준일을 먼저 확인해주세요. 발표일과 집계 기간이 다른 자료를 비교할 때는 기간과 단위를 맞추어 읽는 것이 중요합니다.</p><p>시장의 흐름은 여러 변수에 따라 달라질 수 있습니다. 다양한 근거를 함께 살펴보고, 투자 원칙을 스스로 점검하는 데 활용해주세요.</p>",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"notice-payments",title:"결제 신청 전 상품·수단·이용조건 확인 안내",content:"<p>VIP 서비스는 카드결제 또는 무통장입금, 교육영상은 카드결제 또는 포인트로 신청합니다. 선택한 서비스, 이용 기간, 총 금액과 동의 항목을 결제 전 확인해주세요.</p><p>여러 카드를 나누어 사용하는 경우 카드별 금액과 승인 상태를 확인하세요. 무통장입금은 신청과 입금 확인이 구분되며, 마이페이지에서 상태와 내역을 볼 수 있습니다.</p>",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"notice-contact",title:"상담 안내와 회원정보 보호",content:"<p>서비스 이용에 관한 궁금한 점은 실시간 상담센터에서 확인해주세요. 상담이 준비 중인 경우 자주묻는질문과 이용방법을 먼저 참고할 수 있습니다.</p><p>문의 전 서비스명과 결제 상태를 확인하고, 비밀번호·카드번호·CVC·인증번호는 상담 메시지에 남기지 마세요.</p>",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"}],faq:[{id:"faq-account",title:"회원정보와 서비스 현황은 어디에서 확인하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">회원정보와 서비스 현황은 어디에서 확인하나요</span></p><p><a href="/myInfo">마이페이지</a>에서 기본 회원정보, 이용 중인 서비스, 쿠폰, 포인트, 구매 영상과 결제 내역을 확인할 수 있습니다.</p><p>서비스가 여러 개라면 좌우 이동 버튼이나 페이지 표시를 이용해 목록을 넘겨보세요. 입금 대기 상태와 이용 중 상태를 구분해 확인할 수 있습니다.</p>',faqCategory:"member",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-password",title:"비밀번호는 어디에서 변경하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">비밀번호는 어디에서 변경하나요</span></p><p><a href="/myInfo">마이페이지</a>의 회원정보에서 ‘비밀번호 변경’을 선택하고 현재 비밀번호와 새 비밀번호를 입력하세요.</p><p>새 비밀번호는 화면에 표시된 조건을 확인해 입력하고, 변경에 어려움이 있으면 <a href="/support/faq">고객센터 자주 묻는 질문</a>에서 관련 안내를 확인해주세요.</p>',faqCategory:"member",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-nickname",title:"텔레그램과 홈페이지 닉네임은 어떻게 맞추나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">텔레그램과 홈페이지 닉네임은 어떻게 맞추나요</span></p><p><a href="/myInfo">마이페이지 회원정보</a>에서 홈페이지 닉네임을 텔레그램에서 사용하는 닉네임과 동일하게 확인·수정해주세요. 닉네임이 다르면 이용 중인 서비스 확인에 어려움이 생길 수 있습니다.</p><p>서비스별 텔레그램 입장 안내도 마이페이지에서 확인할 수 있습니다. 닉네임이나 가입 서비스 확인이 필요하면 실시간 상담센터에서 문의 경로와 연결 상태를 확인해주세요.</p>',faqCategory:"member",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-profile-edit",title:"회원정보에서 직접 수정할 수 있는 항목은 무엇인가요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">회원정보에서 직접 수정할 수 있는 항목은 무엇인가요</span></p><p><a href="/myInfo">마이페이지 회원정보</a>에서 닉네임, 휴대폰 번호, 평생주식카페 회원닉네임을 수정할 수 있습니다. 카페 닉네임은 해당 카페 회원인 경우에만 입력해주세요.</p><p>아이디와 이름은 회원정보 화면에서 수정할 수 없는 항목입니다. 정보 정정이 필요하면 고객센터의 실시간 상담센터에서 연결 상태를 확인하고 문의해주세요.</p>',faqCategory:"member",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-service-blur",title:"가입 후 서비스 상세가 흐리게 보이는 이유는 무엇인가요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">가입 후 서비스 상세가 흐리게 보이는 이유는 무엇인가요</span></p><p>무통장입금으로 신청한 서비스는 입금 대기 상태에서 상세 정보가 가려져 보이며, <span style="color:#912c2f;font-size:20px;font-weight:700">입금 확인 후</span> 서비스 이용 안내가 표시됩니다. 신청한 서비스의 상태는 <a href="/myInfo">마이페이지</a>에서 확인할 수 있습니다.</p><p>입금자명, 신청 금액과 입금 계좌를 먼저 확인한 뒤에도 상태가 분명하지 않으면 실시간 상담센터에서 확인 방법을 문의해주세요. 입금 확인까지 걸리는 시간을 일률적으로 안내할 수는 없습니다.</p>',faqCategory:"member",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-vip-payment",title:"VIP 서비스에는 어떤 결제수단과 쿠폰을 사용할 수 있나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">VIP 서비스에는 어떤 결제수단과 쿠폰을 사용할 수 있나요</span></p><p>VIP 서비스는 카드결제 또는 무통장입금으로 신청할 수 있습니다. 결제 전에 선택한 반, 이용 기간, 결제 금액과 결제 이용조건을 확인해주세요.</p><p>쿠폰은 VIP 서비스 결제에 사용할 수 있으며 교육영상 결제에는 사용할 수 없습니다. 쿠폰별 사용 조건과 할인 적용 금액은 결제 화면에서 확인하세요.</p>',faqCategory:"payment",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-receipt",title:"무통장입금 현금영수증은 어떻게 신청하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">무통장입금 현금영수증은 어떻게 신청하나요</span></p><img src="/home/faq-payment.jpg" alt="카드와 영수증으로 표현한 결제 확인 안내"/><p>무통장입금 신청 시 소득공제용 또는 지출증빙용을 선택하고 안내된 식별 정보를 입력할 수 있습니다. 신청 내역이 곧 발급 완료를 뜻하지는 않습니다.</p><p>현금영수증 발급은 <strong><span style="color:#397769;font-size:20px">입금 확인 후</span></strong> 처리되는 절차입니다. 발급 여부나 신청 정보를 확인해야 한다면 결제 내역을 확인한 뒤 실시간 상담센터의 연결 상태와 문의 경로를 확인해주세요.</p>',faqCategory:"payment",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-topup",title:"포인트는 어떻게 충전하고 어디에 사용할 수 있나요?",content:'<h2><span style="color:#875764;font-size:28px">주식교육영상, 포인트로 편리하게</span></h2><img src="/home/faq-deposit.jpg" alt="포인트 지갑에 추가 학습 크레딧이 더해지는 모습"/><p>마이페이지에서 <strong><span style="color:#a47738;font-size:22px">포인트를 충전해 주식교육영상 결제에 사용</span></strong>할 수 있습니다.</p><p><span style="background-color:#fff0bb;font-size:20px;color:#875764">충전 금액에 최대 30%의 포인트를 추가 지급</span>합니다. 추가 지급 혜택은 충전 금액과 시점에 따라 달라질 수 있으니, 충전 전에 결제 금액과 추가 지급 포인트, 총 지급 포인트를 확인해주세요.</p><p>포인트를 충전하려면 <a href="/myInfo">마이페이지</a>에서 포인트 충전을 선택한 뒤, 원하는 금액을 카드로 결제해주세요. 충전 금액별 혜택은 아래 표에서 확인할 수 있습니다.</p><p>충전한 포인트는 [주식교육영상] 결제에만 사용할 수 있으며, 1P는 1원으로 적용됩니다. 주식교육영상 결제창에서 포인트를 선택해 이용해주세요. VIP 회원서비스에는 사용할 수 없습니다.</p>',faqCategory:"payment",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-split-cancel",title:"여러 카드로 나눠 결제할 때 일부 카드만 승인되면 어떻게 하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">여러 카드로 나눠 결제할 때 일부 카드만 승인되면 어떻게 하나요</span></p><p>분할결제는 카드 2~5개를 선택하고, 카드별 결제 금액 합계를 주문 금액과 맞춘 뒤 안내되는 순서에 따라 승인해야 합니다. <span style="color:#912c2f;font-size:20px;font-weight:700">모든 카드 승인 후 주문 완료</span>로 처리됩니다.</p><p>일부 카드 승인 후 나머지 승인이 실패하거나 결제가 끝나지 않았다면 <a href="/myInfo">마이페이지 결제 내역</a>과 각 카드의 승인 내역을 확인한 뒤 문의해주세요. 실제 승인 취소 여부는 카드 내역과 운영 확인을 통해 확인해야 하며 자동 취소를 전제로 하지 마세요.</p>',faqCategory:"payment",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-refund",title:"결제 취소나 환불은 어떻게 문의하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">결제 취소나 환불은 어떻게 문의하나요</span></p><p>취소·환불 가능 여부와 금액은 상품, 이용 상태, 결제수단 및 운영 약관에 따라 달라질 수 있습니다. 적용되는 기준과 처리 절차는 신청 당시의 최신 서비스 이용약관과 결제 이용조건을 확인해주세요.</p><p><a href="/myInfo">마이페이지 결제 내역</a>에서 상품명, 결제일과 결제 상태를 확인한 뒤 실시간 상담센터에서 문의 경로를 확인하세요. 환불 가능 기간이나 처리 시간을 일괄적으로 단정할 수 없습니다.</p>',faqCategory:"payment",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-video-payment",title:"교육영상은 어떻게 결제하고 시청 기간은 어떻게 되나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">교육영상은 어떻게 결제하고 시청 기간은 어떻게 되나요</span></p><p>주식교육영상은 카드 또는 보유 포인트로 결제할 수 있습니다. 포인트가 부족하면 카드로 충전한 뒤 영상 결제를 진행하세요.</p><p>구매한 영상은 구매일 기준 <span style="color:#305c80;font-size:22px;font-weight:700">7일 동안 최대 3회</span> 시청할 수 있습니다. <a href="/paidInfo">교육영상 목록</a>에서 콘텐츠와 이용 조건을 확인한 뒤 결제해주세요.</p>',faqCategory:"usage",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-bank",title:"무통장입금 신청 후 서비스 이용 상태는 어디에서 확인하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">무통장입금 신청 후 서비스 이용 상태는 어디에서 확인하나요</span></p><p>무통장입금 신청과 입금 확인은 별도 단계입니다. 입금이 확인되면 신청한 서비스가 활성화되고 서비스 안내를 확인할 수 있습니다. <a href="/myInfo">마이페이지</a>에서 입금 대기 여부와 서비스 상태를 확인해주세요.</p><p>입금자명, 신청 금액과 계좌 정보를 다시 확인한 뒤 상태를 문의해주세요. 입금 확인에 걸리는 시간을 일률적으로 약속할 수는 없습니다.</p>',faqCategory:"usage",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-services",title:"이용 중인 서비스와 이용 기간은 어디에서 확인하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">이용 중인 서비스와 이용 기간은 어디에서 확인하나요</span></p><p><a href="/myInfo">마이페이지의 현재 이용 중인 서비스</a>에서 서비스 상태, 시작일과 종료일을 확인할 수 있습니다. 서비스 목록은 한 번에 두 개씩 표시되므로 좌우 이동 버튼이나 페이지 표시로 다른 항목을 살펴보세요.</p><p>입금 대기 중인 서비스는 입금 확인 전까지 상세 정보가 가려질 수 있습니다. 서비스 이용 안내가 보이지 않으면 입금 상태와 가입한 서비스를 먼저 확인해주세요.</p>',faqCategory:"usage",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-contact",title:"궁금한 점은 어디로 문의하면 되나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">궁금한 점은 어디로 문의하면 되나요</span></p><p>화면 상단의 고객센터 메뉴 또는 하단 고객지원에서 ‘실시간 상담센터’를 선택해 연결 상태와 상담 가능 여부를 확인해주세요. 상담 연결이 준비 중이면 <a href="/support/faq">자주 묻는 질문</a>과 관련 서비스 안내를 먼저 확인할 수 있습니다.</p><p>결제나 서비스 문의 전에는 <a href="/myInfo">마이페이지</a>에서 상품명, 결제 상태와 이용 기간을 확인해두세요. 비밀번호, 카드번호, CVC와 인증번호는 문의 내용에 입력하지 마세요.</p>',faqCategory:"usage",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"},{id:"faq-purchased-video",title:"구매한 교육영상은 어디에서 확인하나요?",content:'<p><span style="color:#875764;font-size:20px;font-weight:700">구매한 교육영상은 어디에서 확인하나요</span></p><p><a href="/myInfo">마이페이지의 구매 영상</a> 목록에서 구매한 교육영상을 확인하고 ‘영상 보기’를 선택하세요. 구매한 영상이 없거나 목록에서 찾지 못하면 결제 내역도 함께 확인해주세요.</p><p>구매한 영상은 구매일 기준 7일 동안 최대 3회 시청할 수 있으니 이용 기간과 횟수를 확인해주세요.</p>',faqCategory:"usage",created_at:"2026-10-09T00:00:00Z",updated_at:"2026-10-09T00:00:00Z"}],event:[]};

const Vq={"faq-account":"member","faq-password":"member","faq-nickname":"member","faq-profile-edit":"member","faq-service-blur":"member","faq-vip-payment":"payment","faq-receipt":"payment","faq-topup":"payment","faq-split-cancel":"payment","faq-refund":"payment","faq-video-payment":"usage","faq-bank":"usage","faq-services":"usage","faq-contact":"usage","faq-purchased-video":"usage"};

const tV=Vq;

const Rq=e=>e.faqCategory??tV[e.id]??"usage";

const eV=e=>e.replace(/<[^>]*>/g," ").replace(/&nbsp;/g," ").toLocaleLowerCase();

const In=[{id:"all",label:"전체"},{id:"member",label:"회원정보"},{id:"payment",label:"결제"},{id:"usage",label:"이용문의"}];

const hu=e=>new Date(e.replace(/^\$D/,""));

const Gs=e=>new Intl.DateTimeFormat("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"Asia/Seoul"}).format(hu(e));

const lq=[{amount:1e4,bonus:0,enabled:!0},{amount:3e4,bonus:1500,enabled:!0},{amount:5e4,bonus:5e3,enabled:!0},{amount:1e5,bonus:15e3,enabled:!0},{amount:2e5,bonus:4e4,enabled:!0},{amount:3e5,bonus:75e3,enabled:!0},{amount:5e5,bonus:15e4,enabled:!0}];

function ta(){return(globalThis.__CMS_PREVIEW_CONFIG__?.settings?.payments?.topupBenefits??lq).filter(a=>a.enabled!==!1&&Number.isSafeInteger(a.amount)&&a.amount>0&&Number.isSafeInteger(a.bonus)&&a.bonus>=0&&a.bonus<=a.amount*.3).map(a=>({...a,enabled:!0}))}

function Xf(e){let a=ta().find(o=>o.amount===e)?.bonus??0;return{amount:e,bonus:a,total:e+a,percent:e?Math.round(a/e*1e3)/10:0}}

const cq=()=>Math.max(0,...ta().map(e=>Xf(e.amount).percent));

const Ss=e=>e.toLocaleString("ko-KR")+"원";

function Hs(){let e=ta(),t=cq();return(0,Ae.jsxs)("section",{className:"faq-credit-guide",children:[(0,Ae.jsx)("p",{className:"faq-credit-guide__title",children:"주식교육영상 이용을 위한 포인트 혜택"}),(0,Ae.jsxs)("div",{className:"faq-credit-guide__headline",children:["충전액에 ",(0,Ae.jsxs)("strong",{children:["최대 ",t,"% 추가 지급"]})]}),(0,Ae.jsx)("p",{children:"포인트를 충전하면 충전 시점의 혜택에 따라 추가 포인트가 지급됩니다. 결제 금액과 추가 지급 포인트, 총 지급 포인트를 아래 표에서 확인하세요."}),(0,Ae.jsx)("div",{className:"faq-credit-table",children:(0,Ae.jsxs)("table",{children:[(0,Ae.jsx)("thead",{children:(0,Ae.jsxs)("tr",{children:[(0,Ae.jsx)("th",{children:"카드 결제액"}),(0,Ae.jsx)("th",{children:"추가 지급"}),(0,Ae.jsx)("th",{children:"사용 가능 포인트"})]})}),(0,Ae.jsx)("tbody",{children:e.map(a=>(0,Ae.jsxs)("tr",{children:[(0,Ae.jsx)("td",{children:Ss(a.amount)}),(0,Ae.jsx)("td",{children:(0,Ae.jsxs)("strong",{children:["+",Ss(a.bonus)]})}),(0,Ae.jsx)("td",{children:(0,Ae.jsx)("b",{children:Ss(a.amount+a.bonus)})})]},a.amount))})]})}),(0,Ae.jsxs)("p",{className:"faq-credit-guide__note",children:[(0,Ae.jsx)("strong",{children:"추가 지급률과 비용 절감률은 다릅니다."}),(0,Ae.jsx)("br",{}),"예를 들어 10만원을 충전하고 30%의 추가 혜택을 받으면 총 13만 포인트가 지급됩니다. 같은 금액의 주식교육영상을 카드로 개별 결제할 때보다 비용이 약 23.1% 줄어드는 셈입니다. 충전 금액별 혜택은 달라질 수 있으니, 결제 전에 표시된 총 지급 포인트를 확인해주세요."]}),(0,Ae.jsx)("a",{href:"/myInfo",className:"faq-credit-cta",children:"마이페이지에서 포인트 충전"})]})}

const Aq=mu;

function vu({category:e,posts:t,events:a=qu.event,now:o,embedded:f=!1,imageAssets:n={},onLogin:r}){let[l,c]=(0,ya.useState)(""),[d,b]=(0,ya.useState)(null),[A,m]=(0,ya.useState)("all"),h=(0,ya.useRef)([]),[x,E]=(0,ya.useState)("active"),[M]=(0,ya.useState)(()=>o??new Date().toISOString()),i=e==="notice"?"공지사항":"자주묻는 질문",u=t??(e==="faq"?qu.faq:qu.notice),p=(0,ya.useMemo)(()=>u.filter(q=>(e!=="faq"||A==="all"||Rq(q)===A)&&`${q.title} ${eV(q.content)}`.toLocaleLowerCase().includes(l.trim().toLocaleLowerCase())),[u,l,e,A]),U=q=>{m(q),b(null)},I=()=>{c(""),e==="faq"&&U("all")},W=(q,K)=>{let B=K;if(q.key==="ArrowRight")B=(K+1)%In.length;else if(q.key==="ArrowLeft")B=(K-1+In.length)%In.length;else if(q.key==="Home")B=0;else if(q.key==="End")B=In.length-1;else return;q.preventDefault(),U(In[B].id),h.current[B]?.focus()},Z=(0,P.jsx)("div",{className:"su-faq-tabs",role:"tablist","aria-label":"자주 묻는 질문 카테고리",children:In.map((q,K)=>(0,P.jsxs)("button",{type:"button",role:"tab",id:`faq-tab-${q.id}`,"data-faq-category":q.id,ref:B=>{h.current[K]=B},className:`su-faq-tab${A===q.id?" active":""}`,"aria-selected":A===q.id,"aria-controls":"faq-question-panel",tabIndex:A===q.id?0:-1,onClick:()=>U(q.id),onKeyDown:B=>W(B,K),children:[q.label,(0,P.jsx)("span",{"aria-hidden":"true",children:q.id==="all"?u.length:u.filter(B=>Rq(B)===q.id).length})]},q.id))}),X=a.filter(q=>{let K=q.title.toLocaleLowerCase().includes(l.trim().toLocaleLowerCase());if(x==="winners")return K&&q.winners.length>0;let B=hu(M).getTime();return K&&hu(q.start_date).getTime()<=B&&B<=hu(q.end_date).getTime()+864e5-1}),V=(0,P.jsxs)("div",{className:"su-search",children:[(0,P.jsx)(qt,{size:18,"aria-hidden":"true"}),(0,P.jsx)("input",{type:"search",value:l,"aria-label":e==="event"?"이벤트 검색":"찾으시는 내용 검색",placeholder:e==="event"?"검색어를 입력하세요":"찾으시는 내용을 검색해보세요",onChange:q=>c(q.target.value)}),l&&(0,P.jsx)("button",{type:"button","aria-label":"검색어 지우기",onClick:()=>c(""),children:(0,P.jsx)($e,{size:16})})]});return(0,P.jsxs)("div",{className:"willclub-page home-page service-page support-page",id:"top",children:[(0,P.jsx)("a",{className:"hm-skip-link",href:"#support-content",children:"본문 바로가기"}),(0,P.jsx)("main",{className:`su-main${e==="event"?" su-event-main":""}`,id:"support-content",children:e!=="event"?(0,P.jsxs)("div",{className:"su-container",children:[(0,P.jsx)("h1",{children:i}),(0,P.jsx)("div",{className:"su-heading-divider"}),e==="faq"&&Z,(0,P.jsx)(et,{title:e==="faq"?(0,P.jsxs)(P.Fragment,{children:["궁금한 내용을,",(0,P.jsx)("br",{}),"쉽고 명확하게."]}):(0,P.jsxs)(P.Fragment,{children:["윌클럽의 새로운 소식,",(0,P.jsx)("br",{}),"가장 먼저 만나보세요."]}),eyebrow:e==="faq"?"WILLCLUB · FAQ":"WILLCLUB · NOTICE",label:e==="faq"?"자주 묻는 질문 안내":"공지사항 안내"}),V,(0,P.jsxs)("div",{id:e==="faq"?"faq-question-panel":void 0,role:e==="faq"?"tabpanel":void 0,"aria-labelledby":e==="faq"?`faq-tab-${A}`:void 0,children:[(0,P.jsx)("div",{className:"su-list",children:p.map(q=>(0,P.jsxs)("article",{className:`su-item${d===q.id?" expanded":""}`,children:[(0,P.jsxs)("button",{type:"button",className:"su-trigger","aria-expanded":d===q.id,"aria-controls":`answer-${q.id}`,id:`question-${q.id}`,onClick:()=>b(d===q.id?null:q.id),children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("strong",{children:q.title}),(0,P.jsx)("time",{dateTime:q.created_at.replace(/^\$D/,""),children:Gs(q.created_at)})]}),(0,P.jsx)(wa,{size:19,"aria-hidden":"true"})]}),d===q.id&&(0,P.jsxs)("div",{className:"su-answer",id:`answer-${q.id}`,role:"region","aria-labelledby":`question-${q.id}`,children:[(0,P.jsx)("div",{dangerouslySetInnerHTML:{__html:ys(q.content).replace(/src="(\/home\/[^"]+)"/g,(K,B)=>`src="${n[B]??B}"`)}}),e==="faq"&&q.id==="faq-topup"&&(0,P.jsx)(Hs,{})]})]},q.id))}),p.length===0&&(0,P.jsxs)("div",{className:"su-empty",children:[(0,P.jsx)(qt,{size:30}),(0,P.jsx)("p",{children:"검색 결과가 없습니다."}),(0,P.jsx)("button",{type:"button",onClick:I,children:"검색 초기화"})]}),(0,P.jsxs)("p",{className:"su-sr-status",role:"status",children:[p.length,"개의 ",e==="notice"?"공지사항":"질문"]})]})]}):(0,P.jsxs)("div",{className:"su-event-container",children:[(0,P.jsx)("h1",{className:"hm-sr-only",children:"이벤트"}),(0,P.jsxs)("div",{className:"su-event-tabs",role:"tablist","aria-label":"이벤트 분류",children:[(0,P.jsx)("button",{type:"button",role:"tab",id:"active-events-tab","aria-controls":"support-event-panel","aria-selected":x==="active",className:x==="active"?"selected":"",onClick:()=>E("active"),children:"진행중인 이벤트 보기"}),(0,P.jsx)("button",{type:"button",role:"tab",id:"event-winners-tab","aria-controls":"support-event-panel","aria-selected":x==="winners",className:x==="winners"?"selected":"",onClick:()=>E("winners"),children:"이벤트 당첨자 보기"})]}),V,(0,P.jsx)("div",{id:"support-event-panel",role:"tabpanel","aria-labelledby":x==="active"?"active-events-tab":"event-winners-tab",children:X.length===0?(0,P.jsxs)("div",{className:"su-empty su-event-empty",children:[x==="active"?(0,P.jsx)(to,{size:44,strokeWidth:1.2}):(0,P.jsx)(ll,{size:44,strokeWidth:1.2}),(0,P.jsx)("p",{children:l?"검색 결과가 없습니다.":x==="active"?"진행중인 이벤트가 없습니다.":"당첨자 발표 내역이 없습니다."})]}):(0,P.jsx)("div",{className:"su-event-grid",children:X.map(q=>(0,P.jsxs)("article",{className:"su-event-card",children:[q.images[0]&&(0,P.jsx)("img",{src:n[Aq[q.images[0]]]??Aq[q.images[0]]??q.images[0],alt:q.title,loading:"lazy"}),(0,P.jsx)("h2",{children:q.title}),(0,P.jsxs)("p",{children:[Gs(q.start_date)," ~ ",Gs(q.end_date)]}),x==="winners"&&(0,P.jsx)("ul",{children:q.winners.map(K=>(0,P.jsx)("li",{children:K},K))})]},q.id))})})]})}),(0,P.jsx)(wn,{})]})}

const Yq=[{id:"learning-guide",detailTitle:"가을맞이 풍성한 혜택",detailDate:"2026.09.01 ~ 2027.01.01",detailImage:"/support/1787555410239.png",title:"처음 만나는 윌클럽: 나에게 맞는 배움 찾기",tag:"LEARNING GUIDE",date:"운영 일정 확정 후 안내",status:"active",tone:"cream",description:"무료 정보로 시장을 읽는 기준을 살펴보고, 관심 주제의 교육 커리큘럼을 확인하는 순서를 안내합니다.",body:"먼저 무료주식정보에서 금리·환율·기업 실적의 기본 연결을 읽어보세요. 다음으로 주식교육영상에서 주식분석·주식교육·주식시황·무료영상 중 관심 주제를 선택할 수 있습니다. 이 프로그램은 운영 검토 중인 기획 안내이며, 접수·참가비·할인 혜택은 확정되지 않았습니다.",href:"/guide",action:"이용 가이드 보기"},{id:"principle-checklist",detailTitle:"여름맞이 신규 할인 행사",detailDate:"2026.08.01 ~ 2026.12.31",detailImage:"/support/1786428844091.png",title:"나만의 투자 원칙을 기록하는 체크리스트",tag:"INVESTMENT PRINCIPLES",date:"운영 일정 확정 후 안내",status:"active",tone:"rose",description:"진입 이유와 점검 기준, 손실 허용 범위를 기록하는 습관을 함께 소개하는 교육 프로그램입니다.",body:"관심 기업의 사업 구조와 예상하지 못한 위험을 정리한 뒤, 판단을 다시 확인할 조건을 기록해보세요. 매수·매도 신호보다 스스로 점검할 수 있는 기준을 남기는 것이 목적입니다. 운영 일정과 참여 방식은 확정 후 안내하며, 수익률 인증이나 가상 당첨자 명단을 제공하지 않습니다.",href:"/freeInfo",action:"투자 원칙 콘텐츠 읽기"}];

const Xq={"learning-guide":"e3697f8c-84dd-4a02-a5cd-61cc75d2c7dc","principle-checklist":"f437c0f1-28b9-421a-b731-8d7c0e86fadc"};

function Qs({assets:e={},selectedId:t}){let[a,o]=(0,Cs.useState)("active"),[f,n]=(0,Cs.useState)(""),r=Yq.find(d=>d.id===t||Xq[d.id]===t),l=d=>{window.location.hash=`page=event&event=${Xq[d.id]}`},c=a==="active"?Yq.filter(d=>d.title.includes(f.trim())):[];return(0,O.jsx)("div",{className:"willclub-page home-page service-page support-page",children:(0,O.jsxs)("main",{className:"ex-event-main",children:[(0,O.jsxs)("div",{className:"ex-event-heading",children:[(0,O.jsx)("p",{className:"ex-eyebrow",children:"WILLCLUB PROGRAMS"}),(0,O.jsxs)("h1",{children:["이벤트",(0,O.jsx)("span",{children:"."})]}),(0,O.jsx)("p",{children:"배움의 여정에 함께하는 프로그램 안내."})]}),(0,O.jsx)(et,{title:(0,O.jsxs)(O.Fragment,{children:["함께 배우는 즐거움,",(0,O.jsx)("br",{}),"새로운 경험의 시작."]}),eyebrow:"WILLCLUB · EVENTS",label:"이벤트 안내"}),r?(0,O.jsxs)("article",{className:"wc-event-v35-detail","aria-labelledby":"event-detail-title",children:[(0,O.jsxs)("header",{className:"wc-event-v35-head",children:[(0,O.jsx)("span",{className:"wc-event-v35-status",children:"진행중"}),(0,O.jsx)("h2",{id:"event-detail-title",children:r.detailTitle}),(0,O.jsxs)("dl",{className:"wc-event-v35-meta",children:[(0,O.jsxs)("div",{children:[(0,O.jsxs)("dt",{children:[(0,O.jsx)(Mo,{size:18,"aria-hidden":"true"}),"이벤트 기간"]}),(0,O.jsx)("dd",{children:r.detailDate})]}),(0,O.jsxs)("div",{children:[(0,O.jsxs)("dt",{children:[(0,O.jsx)($t,{size:18,"aria-hidden":"true"}),"상태"]}),(0,O.jsx)("dd",{className:"wc-event-v35-state",children:"진행중"})]})]})]}),(0,O.jsx)("div",{className:"wc-event-v35-body",children:(0,O.jsx)("img",{src:e[r.detailImage]??r.detailImage,alt:`${r.detailTitle} 상세 안내`,loading:"eager"})}),(0,O.jsxs)("section",{className:"wc-event-v35-participate","aria-labelledby":"event-participation-title",children:[(0,O.jsx)(to,{size:32,strokeWidth:1.5,"aria-hidden":"true"}),(0,O.jsx)("h3",{id:"event-participation-title",children:"지금 바로 이벤트에 참여하세요!"}),(0,O.jsx)("p",{children:"특별한 혜택을 놓치지 마세요."}),(0,O.jsxs)("a",{className:"ex-primary wc-event-v35-join",href:"/vip",children:["참여하기",(0,O.jsx)(ne,{size:18,"aria-hidden":"true"})]})]}),(0,O.jsxs)("a",{className:"wc-event-v35-back",href:"/support/event",children:[(0,O.jsx)(mt,{size:18,"aria-hidden":"true"}),"목록으로"]})]}):(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{className:"su-event-tabs",role:"tablist","aria-label":"이벤트 분류",children:[(0,O.jsx)("button",{role:"tab","aria-selected":a==="active",className:a==="active"?"selected":"",onClick:()=>o("active"),children:"진행중인 이벤트 보기"}),(0,O.jsx)("button",{role:"tab","aria-selected":a==="winners",className:a==="winners"?"selected":"",onClick:()=>o("winners"),children:"이벤트 당첨자 보기"})]}),(0,O.jsxs)("label",{className:"su-search",children:[(0,O.jsx)(qt,{size:18}),(0,O.jsx)("input",{type:"search","aria-label":"이벤트 검색",placeholder:"검색어를 입력하세요",value:f,onChange:d=>n(d.target.value)})]}),(0,O.jsx)("div",{className:"ex-event-grid",children:c.map(d=>(0,O.jsxs)("button",{className:"ex-event-card",onClick:()=>l(d),children:[(0,O.jsx)("div",{className:`ex-event-poster ${d.tone}`,children:(0,O.jsx)("img",{className:"ex-original-event-image",src:e[d.id==="learning-guide"?"/support/1787279272384.png":"/support/1786428973561.png"]??(d.id==="learning-guide"?"/support/1787279272384.png":"/support/1786428973561.png"),alt:d.id==="learning-guide"?"가을맞이 풍성한 혜택 원본 이미지":"여름맞이 신규 할인 행사 원본 이미지"})}),(0,O.jsxs)("div",{className:"ex-event-copy",children:[(0,O.jsx)("span",{children:"프로그램 기획"}),(0,O.jsx)("h2",{children:d.title}),(0,O.jsx)("p",{children:d.date}),(0,O.jsx)(ne,{size:18})]})]},d.id))}),!c.length&&(0,O.jsx)("p",{className:"ex-empty",children:a==="winners"?"확정된 당첨자 발표가 없습니다.":"검색 결과가 없습니다."})]})]})})}

const Vu=["신한카드","삼성카드","현대카드","KB국민카드","롯데카드","우리카드","하나카드","BC카드","NH농협카드","기타 카드"];

const _s=e=>({id:`part-${Date.now()}-${e}`,company:Vu[e%Vu.length],amount:0,installment:"일시불",status:"ready"});

const Lq=e=>e.replace(/\D/g,"");

function Ds(e){if(e.type!=="none")return{type:e.type,identifier:e.type==="business"?"business":e.identifier,maskedNumber:"****"+Lq(e.number).slice(-4),status:"requested"}}

function Zq(e){if(e.type==="none")return"";let t=Lq(e.number);return e.type==="business"?/^\d{10}$/.test(t)?"":"사업자등록번호 10자리를 입력해주세요.":e.identifier==="phone"?/^01[016789]\d{7,8}$/.test(t)?"":"현금영수증 휴대폰 번호를 확인해주세요.":/^\d{13,19}$/.test(t)?"":"현금영수증 카드번호 13~19자리를 입력해주세요."}

function Eq(e,t){return e.length<2||e.length>5?"분할결제는 카드 2~5개로 구성해주세요.":e.some(a=>!a.company||!Number.isSafeInteger(a.amount)||a.amount<=0||!["일시불","2개월","3개월","6개월","12개월"].includes(a.installment))?"각 카드사와 1원 이상의 정수 금액, 할부 기간을 확인해주세요.":e.reduce((a,o)=>a+o.amount,0)!==t?"카드별 금액 합계가 총 결제 금액과 일치해야 합니다.":""}

function Au({title:e,children:t,onClose:a,wide:o=!1}){let f=(0,aa.useRef)(null);return(0,aa.useEffect)(()=>{let n=f.current,r=document.activeElement,l=document.body.style.overflow;return document.body.style.overflow="hidden",n?.showModal(),()=>{n?.close(),document.body.style.overflow=l,r?.focus()}},[]),(0,y.jsxs)("dialog",{ref:f,className:`ex-dialog${o?" ex-dialog-wide":""}`,"aria-labelledby":"experience-dialog-title",onCancel:n=>{n.preventDefault(),a()},onClick:n=>{n.target===n.currentTarget&&a()},children:[(0,y.jsx)("button",{className:"ex-dialog-close","aria-label":"팝업 닫기",onClick:a,children:(0,y.jsx)($e,{size:21})}),(0,y.jsx)("p",{className:"ex-eyebrow",children:"WILLCLUB"}),(0,y.jsx)("h2",{id:"experience-dialog-title",children:e}),t]})}

const tt=e=>e.toLocaleString("ko-KR")+"원";

function Bs(e,t){let a=Math.floor(e/t.length);return t.map((o,f)=>({...o,amount:a+(f<e%t.length?1:0),status:"ready"}))}

function $s({order:e,onClose:t}){let [videoCoupon,setVideoCoupon]=React.useState(null);let{state:a,completePayment:o}=ct(),f=(0,Ee.useRef)(!1),[n,r]=(0,Ee.useState)("card"),[l,c]=(0,Ee.useState)(!1),[d,b]=(0,Ee.useState)("select"),[A,m]=(0,Ee.useState)(!1),[h,x]=(0,Ee.useState)(!1),[E,M]=(0,Ee.useState)(null),[i,u]=(0,Ee.useState)(""),[p,U]=(0,Ee.useState)(""),[I,W]=(0,Ee.useState)(zn[0].bank),[Z,X]=(0,Ee.useState)(ta().some(w=>w.amount===e.amount)?e.amount:ta()[0]?.amount??1e5),[V,q]=(0,Ee.useState)(""),[K,B]=(0,Ee.useState)({type:"none",identifier:"phone",number:""}),[We,Ma]=(0,Ee.useState)(!1),[ye,sa]=(0,Ee.useState)([_s(0),_s(1)]),[at,ba]=(0,Ee.useState)(null),[Go,Uu]=(0,Ee.useState)(!1),[Sq,Hq]=(0,Ee.useState)(!1),[Gq,Jq]=(0,Ee.useState)(""),se=Go?{kind:"topup",title:"포인트 충전",amount:Z,requestId:Gq}:{...e,amount:e.kind==="topup"?Z:e.amount},bl=se.kind==="vip"?a.coupons.find(w=>w.id===i&&!w.used):void 0,yn=Xf(Z),Ot=se.kind==="video"&&videoCoupon?.videoId===se.videoId?videoCoupon.totalAmount:bl?Math.round(se.amount*(100-bl.discount)/100):se.amount,pl=ye.reduce((w,ee)=>w+ee.amount,0),Mn=ye.filter(w=>w.status==="approved").length,nb=se.kind==="vip"?[{id:"card",label:"카드결제",Icon:Pt},{id:"bank",label:"무통장입금",Icon:Qr}]:se.kind==="video"?[{id:"card",label:"카드결제",Icon:Pt},{id:"deposit",label:"포인트",Icon:da}]:[{id:"card",label:"카드결제",Icon:Pt}],ml=()=>sa(w=>w.map(ee=>({...ee,status:"ready"}))),Fq=()=>{d==="review"&&We&&Mn>0?ba("close"):t()},Cq=()=>{We&&Mn>0?ba("back"):(b("select"),q(""))},Qq=()=>{let w=at;ml(),ba(null),w==="close"?t():b("select")},rb=(w,ee)=>sa(me=>me.map(pa=>pa.id===w?{...pa,...ee,status:"ready"}:pa)),Dq=(w=ye)=>({agreedTerms:A,agreedConditions:h,cardParts:n==="card"&&We?w.map(({company:ee,amount:me,installment:pa})=>({company:ee,amount:me,installment:pa})):void 0,cashReceipt:n==="bank"?Ds(K):void 0,bank:n==="bank"?I:void 0,depositor:n==="bank"?p.trim():void 0}),Bq=()=>{if(!A||!h){q("약관 동의와 결제 이용조건에 모두 동의해주세요.");return}if(n==="bank"&&!p.trim()){q("입금자명을 입력해주세요.");return}if(n==="bank"){let w=Zq(K);if(w){q(w);return}}if(n==="deposit"&&a.balance<Ot){q("포인트가 부족합니다. 카드로 포인트를 충전해주세요.");return}if(n==="card"&&We){let w=Eq(ye,Ot);if(w){q(w);return}}f.current=!1,ml(),q(""),b("review")},_q=(w=ye)=>{if(f.current)return;if(n==="card"&&We&&w.some(me=>me.status!=="approved")){q("모든 카드 결제를 승인한 뒤 완료할 수 있습니다.");return}f.current=!0;let ee=o(se,n,Go?"":i,Dq(w));if(!ee.ok){f.current=!1,q(ee.message);return}q(""),B(me=>({...me,number:""})),Go?(Uu(!1),Hq(!0),r("deposit"),b("select"),m(!1),x(!1),Ma(!1),ml(),f.current=!1):b("done")},lb=(w,ee=!1)=>{ye[w]?.status==="approved"||ye.slice(0,w).some(me=>me.status!=="approved")||(sa(me=>me.map((pa,e1)=>e1===w?{...pa,status:ee?"failed":"approved"}:pa)),q(ee?"해당 카드 승인에 실패했습니다. 재시도하거나 분할결제를 취소해주세요.":""))},$q=()=>{Uu(!0),Jq(`charge-${Date.now()}-${Math.random()}`),X(ta().find(w=>w.amount===1e5)?.amount??ta()[0]?.amount??1e5),r("card"),b("select"),Ma(!1),m(!1),x(!1),q(""),ml()};return(0,v.jsx)(Au,{title:E?E==="terms"?"약관 동의":"결제 이용조건":d==="done"?n==="bank"?"무통장입금 신청 완료":"처리 완료":se.kind==="topup"?"포인트 충전":"결제하기",onClose:Fq,children:se.kind==="video"&&!E&&d!=="done"?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"willclub-page original-video-coupon-slot",style:{minHeight:0,background:"transparent",marginBottom:16},children:(0,v.jsx)(VideoCoupon,{videoId:se.videoId,onApplied:setVideoCoupon})}),E?(0,v.jsxs)("div",{className:"ex-policy-document",children:[(0,v.jsx)("p",{className:"ex-policy-note",children:"결제 화면 구성 확인용 안내입니다. 아래 내용은 정식 약관 전문이 아니며, 운영 적용 시 관리자에서 등록한 최신 약관을 연결해야 합니다."}),(0,v.jsx)("h3",{children:E==="terms"?"서비스 약관 확인":"선택한 상품의 결제 이용조건"}),E==="terms"?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:"서비스를 신청하기 전에 상품명, 제공 내용, 이용 기간, 결제 금액을 확인해주세요."}),(0,v.jsx)("p",{children:"정식 약관에는 회원의 권리와 의무, 서비스 제공 범위, 변경·중단, 해지 및 환불 기준과 문의 절차가 포함되어야 합니다."}),(0,v.jsx)("p",{children:"개인정보 처리와 결제 관련 동의는 운영 사이트에 게시된 최신 문서를 기준으로 적용됩니다."})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("dl",{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"상품"}),(0,v.jsx)("dd",{children:se.title})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"결제 금액"}),(0,v.jsx)("dd",{children:tt(Ot)})]}),se.months&&(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"이용 기간"}),(0,v.jsxs)("dd",{children:[se.months,"개월"]})]})]}),(0,v.jsx)("p",{children:se.kind==="vip"?"VIP 서비스는 카드결제 또는 무통장입금으로 신청합니다. 무통장입금은 입금 확인 후 서비스가 활성화됩니다.":se.kind==="video"?"교육영상은 카드결제 또는 포인트로 결제합니다. 구매 완료 후 영상 이용 권한이 부여됩니다.":"포인트는 카드결제로만 충전하며, 충전된 포인트는 교육영상 결제에 사용합니다."}),(0,v.jsx)("p",{children:"여러 카드로 결제하는 경우 카드별 결제 금액 합계가 총금액과 같아야 합니다. 모든 카드의 승인이 완료되어야 주문이 완료됩니다."}),(0,v.jsx)("p",{children:"취소 및 환불 규정, 현금영수증 발급 기준은 정식 결제 연동 시 운영 약관과 결제대행사의 규정에 따라 적용합니다."})]}),(0,v.jsx)("button",{className:"ex-primary",onClick:()=>M(null),children:"확인하고 결제로 돌아가기"})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("p",{className:"ex-temporary",children:[(0,v.jsx)(Rf,{size:17}),"임시 결제 화면입니다. 실제 카드 청구·현금영수증 발급·입금 요청은 발생하지 않습니다."]}),at?(0,v.jsxs)("div",{className:"ex-cancel-split",children:[(0,v.jsx)("h3",{children:"분할결제를 취소하시겠습니까?"}),(0,v.jsxs)("p",{children:["현재 ",Mn,"개 카드의 임시 승인이 완료되었습니다. 취소하면 임시 승인 상태를 모두 초기화합니다. 실제 결제 취소는 발생하지 않습니다."]}),(0,v.jsx)("button",{className:"ex-primary",onClick:Qq,children:"분할결제 취소"}),(0,v.jsx)("button",{className:"ex-text-button",onClick:()=>ba(null),children:"결제 계속하기"})]}):d==="done"?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"ex-success",children:[(0,v.jsx)($t,{size:45}),(0,v.jsx)("h3",{children:n==="bank"?"입금 대기 내역이 생성되었습니다.":"결제 흐름이 완료되었습니다."}),(0,v.jsx)("p",{children:n==="bank"?"신청 내역은 마이페이지에서 확인할 수 있습니다. 실제 입금은 하지 마세요.":"마이페이지의 서비스·구매·포인트 내역에 반영되었습니다."}),n==="bank"&&K.type!=="none"&&(0,v.jsxs)("p",{children:["현금영수증 ",K.type==="income"?"소득공제":"지출증빙"," 신청 정보가 저장되었습니다. 발급은 입금 확인 후 처리하는 흐름입니다."]}),n==="card"&&We&&(0,v.jsxs)("p",{children:[ye.length,"개 카드 분할결제 · ",tt(Ot)]})]}),(0,v.jsxs)("a",{className:"ex-primary",href:se.kind==="video"&&se.videoId?`/paidInfo#video=${encodeURIComponent(se.videoId)}&watch=1`:"/myInfo",onClick:t,children:[se.kind==="video"&&se.videoId?"시청하기":"마이페이지에서 확인"," ",(0,v.jsx)(ne,{size:16})]}),(0,v.jsx)("button",{className:"ex-text-button",onClick:t,children:"계속 둘러보기"})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"ex-order",children:[(0,v.jsx)("span",{children:se.kind==="vip"?"VIP 서비스":se.kind==="video"?"주식교육영상":"영상 결제용 포인트"}),(0,v.jsx)("strong",{children:se.title}),se.months&&(0,v.jsxs)("small",{children:["이용 기간 ",se.months,"개월"]})]}),d==="select"?(0,v.jsxs)(v.Fragment,{children:[Sq&&!Go&&(0,v.jsx)("p",{className:"ex-charge-success",role:"status",children:"포인트 충전이 완료되었습니다. 영상 결제를 계속해주세요."}),se.kind==="topup"&&(0,v.jsxs)("fieldset",{className:"ex-topup-list",children:[(0,v.jsx)("legend",{children:"충전할 금액을 선택해주세요."}),ta().map(({amount:w,bonus:ee})=>(0,v.jsxs)("label",{className:Z===w?"selected":"",children:[(0,v.jsx)("input",{type:"radio",name:"topup-amount",value:w,checked:Z===w,onChange:()=>X(w)}),(0,v.jsxs)("span",{className:"ex-topup-name",children:[tt(w),(0,v.jsxs)("small",{children:["추가 ",tt(ee)," · 총 ",tt(w+ee)]})]}),(0,v.jsx)("span",{children:Z===w&&(0,v.jsx)(kt,{size:16})})]},w))]}),se.kind==="topup"&&(0,v.jsxs)("div",{className:"ex-topup-benefit-summary",children:[(0,v.jsxs)("p",{children:[(0,v.jsx)("strong",{children:tt(Z)})," 충전하면"]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("span",{children:["추가 지급",(0,v.jsxs)("strong",{children:["+",tt(yn.bonus)]})]}),(0,v.jsxs)("span",{children:["사용 가능 포인트",(0,v.jsx)("strong",{children:tt(yn.total)})]})]}),(0,v.jsxs)("small",{children:["추가 지급 ",yn.percent,"% · 영상 결제 전용. 혜택은 충전 시점의 설정에 따라 달라집니다."]})]}),(0,v.jsxs)("div",{className:"ex-methods ex-methods-point-help",role:"group","aria-label":"결제수단",children:[nb.map(({id:w,label:ee,Icon:me})=>(0,v.jsxs)("button",{type:"button","aria-pressed":n===w,className:[n===w?"selected":"",w==="bank"?"ex-bank-method":""].filter(Boolean).join(" "),onClick:()=>{r(w),q("")},children:[(0,v.jsx)(me,{size:21}),ee,(0,v.jsx)("span",{children:n===w&&(0,v.jsx)(kt,{size:14})})]},w)),se.kind==="video"&&(0,v.jsxs)("div",{className:"ex-point-help",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[(0,v.jsx)("button",{type:"button",className:"ex-point-help-button","aria-label":"포인트란?","aria-expanded":l,"aria-controls":"point-payment-help","aria-describedby":l?"point-payment-help":void 0,onFocus:()=>c(!0),onBlur:()=>c(!1),onClick:()=>c(!0),onKeyDown:w=>{w.key==="Escape"&&(w.stopPropagation(),c(!1))},children:"?"}),l&&(0,v.jsx)("div",{className:"ex-point-help-text",id:"point-payment-help",role:"tooltip",children:"포인트는 카드로 충전해 [주식교육영상] 콘텐츠 결제에 사용하는 결제수단입니다. VIP 회원서비스에는 사용할 수 없습니다. 충전 시점의 추가 지급 혜택은 충전 화면에서 확인할 수 있습니다."})]})]}),se.kind==="vip"&&(0,v.jsxs)("label",{className:"ex-field",children:["쿠폰 적용",(0,v.jsxs)("select",{"aria-label":"VIP 쿠폰 선택",value:i,onChange:w=>u(w.target.value),children:[(0,v.jsx)("option",{value:"",children:"쿠폰을 선택하세요"}),a.coupons.filter(w=>!w.used).map(w=>(0,v.jsx)("option",{value:w.id,children:w.title},w.id))]}),(0,v.jsx)("small",{className:"ex-vip-coupon-note",children:"쿠폰은 VIP 회원 서비스에만 사용 가능합니다."})]}),n==="bank"&&(0,v.jsxs)("div",{className:"ex-bank",children:[(0,v.jsxs)("label",{className:"ex-field",children:["입금 은행",(0,v.jsx)("select",{"aria-label":"입금 은행",value:I,onChange:w=>W(w.target.value),children:zn.map(w=>(0,v.jsx)("option",{children:w.bank},w.bank))})]}),(0,v.jsx)("p",{children:zn.find(w=>w.bank===I)?.number}),(0,v.jsx)("small",{children:"예금주: (주)제이앤비주식사관학교"}),(0,v.jsxs)("label",{className:"ex-field",children:["입금자명",(0,v.jsx)("input",{"aria-label":"입금자명",placeholder:"입금자명을 입력하세요",value:p,onChange:w=>U(w.target.value)})]}),(0,v.jsxs)("fieldset",{className:"ex-receipt",children:[(0,v.jsx)("legend",{children:"현금영수증 신청"}),(0,v.jsx)("div",{className:"ex-receipt-options",children:[["none","미신청"],["income","소득공제"],["business","지출증빙"]].map(([w,ee])=>(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{type:"radio",name:"cash-receipt",checked:K.type===w,onChange:()=>B({type:w,identifier:w==="business"?"business":"phone",number:""})}),ee]},w))}),K.type!=="none"&&(0,v.jsxs)(v.Fragment,{children:[K.type==="income"&&(0,v.jsxs)("label",{className:"ex-field",children:["발급 식별수단",(0,v.jsxs)("select",{"aria-label":"현금영수증 식별수단",value:K.identifier,onChange:w=>B(ee=>({...ee,identifier:w.target.value,number:""})),children:[(0,v.jsx)("option",{value:"phone",children:"휴대폰 번호"}),(0,v.jsx)("option",{value:"receiptCard",children:"현금영수증 카드번호"})]})]}),(0,v.jsxs)("label",{className:"ex-field",children:[K.type==="business"?"사업자등록번호":K.identifier==="phone"?"휴대폰 번호":"현금영수증 카드번호",(0,v.jsx)("input",{"aria-label":"현금영수증 번호",inputMode:"numeric",autoComplete:"off",maxLength:24,placeholder:"확인용 숫자를 입력하세요",value:K.number,onChange:w=>B(ee=>({...ee,number:w.target.value}))}),(0,v.jsx)("small",{children:"실제 번호는 입력하지 마세요. 입력값은 전송하지 않으며 내역에는 끝 4자리만 저장합니다."})]})]})]}),(0,v.jsx)("p",{className:"ex-helper",children:"입금 확인 후 서비스가 활성화되고 현금영수증 발급을 진행하는 흐름입니다. 현재 화면에서는 실제 입금하지 마세요."})]}),n==="deposit"&&(0,v.jsxs)("div",{className:"ex-wallet",children:[(0,v.jsx)(da,{size:23}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:"보유 포인트"}),(0,v.jsx)("strong",{children:tt(a.balance)}),(0,v.jsx)("small",{children:"동영상 결제 전용"})]}),a.balance<Ot&&(0,v.jsx)("button",{className:"ex-secondary",onClick:$q,children:"카드로 포인트 충전"})]}),n==="card"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"ex-card-mode",role:"group","aria-label":"카드 결제 방식",children:[(0,v.jsx)("button",{"aria-pressed":!We,className:We?"":"selected",onClick:()=>Ma(!1),children:"한 카드로 결제"}),(0,v.jsx)("button",{"aria-pressed":We,className:We?"selected":"",onClick:()=>{Ma(!0),ye.every(w=>w.amount===0)&&sa(w=>Bs(Ot,w))},children:"여러 카드로 분할결제"})]}),We&&(0,v.jsxs)("div",{className:"ex-split-editor",children:[(0,v.jsxs)("div",{className:"ex-split-heading",children:[(0,v.jsx)("strong",{children:"카드별 결제 금액"}),(0,v.jsx)("button",{type:"button",onClick:()=>sa(w=>Bs(Ot,w)),children:"균등 배분"})]}),ye.map((w,ee)=>(0,v.jsxs)("div",{className:"ex-card-part",children:[(0,v.jsxs)("div",{className:"ex-part-heading",children:[(0,v.jsxs)("strong",{children:["카드 ",ee+1]}),(0,v.jsx)("button",{type:"button",disabled:ye.length<=2,"aria-label":`카드 ${ee+1} 삭제`,onClick:()=>sa(me=>me.filter(pa=>pa.id!==w.id)),children:(0,v.jsx)(nl,{size:15})})]}),(0,v.jsxs)("label",{className:"ex-field",children:["카드사",(0,v.jsx)("select",{"aria-label":`카드 ${ee+1} 카드사`,value:w.company,onChange:me=>rb(w.id,{company:me.target.value}),children:Vu.map(me=>(0,v.jsx)("option",{children:me},me))})]}),(0,v.jsx)("div",{className:"ex-part-fields",children:(0,v.jsxs)("label",{className:"ex-field",children:["결제 금액",(0,v.jsx)("input",{"aria-label":`카드 ${ee+1} 금액`,type:"number",min:1,step:1,value:w.amount||"",onChange:me=>rb(w.id,{amount:Number(me.target.value)})})]})})]},w.id)),(0,v.jsxs)("button",{className:"ex-secondary ex-add-card",disabled:ye.length>=5,onClick:()=>sa(w=>[...w,_s(w.length)]),children:[(0,v.jsx)(el,{size:16}),"카드 추가"]}),(0,v.jsxs)("div",{className:`ex-split-sum${pl===Ot?" matched":""}`,"aria-live":"polite",children:[(0,v.jsxs)("span",{children:["분할 합계 ",(0,v.jsx)("b",{children:tt(pl)})]}),(0,v.jsxs)("span",{children:[Ot-pl>=0?"남은 금액":"초과 금액"," ",(0,v.jsx)("b",{children:tt(Math.abs(Ot-pl))})]})]})]}),(0,v.jsx)("p",{className:"ex-helper",children:"카드번호는 입력하지 않습니다. 카드별 결제대행사 창으로 순서대로 이동하는 임시 승인 흐름입니다."})]})]}):(0,v.jsxs)("div",{className:"ex-review",children:[(0,v.jsx)("h3",{children:"주문 정보를 확인해주세요."}),se.kind==="topup"&&(0,v.jsxs)("p",{className:"ex-charge-success",children:["충전 ",tt(Z)," + 추가 ",tt(yn.bonus)," = 사용 가능 ",tt(yn.total)]}),(0,v.jsxs)("dl",{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"결제수단"}),(0,v.jsxs)("dd",{children:[nb.find(w=>w.id===n)?.label,n==="card"&&We?" · 분할결제":""]})]}),n==="bank"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"입금자명"}),(0,v.jsx)("dd",{children:p})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"입금은행"}),(0,v.jsx)("dd",{children:I})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"현금영수증"}),(0,v.jsx)("dd",{children:K.type==="none"?"미신청":`${K.type==="income"?"소득공제":"지출증빙"} · ${Ds(K)?.maskedNumber}`})]})]}),n==="deposit"&&(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"결제 후 포인트"}),(0,v.jsx)("dd",{children:tt(a.balance-Ot)})]})]}),n==="card"&&We&&(0,v.jsxs)("div",{className:"ex-split-approvals",children:[(0,v.jsxs)("p",{children:["승인 완료 ",Mn," / ",ye.length," · 모든 카드 승인 후 주문이 완료됩니다."]}),ye.map((w,ee)=>(0,v.jsxs)("div",{className:`ex-approval ${w.status}`,children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)("strong",{children:["카드 ",ee+1," · ",w.company]}),(0,v.jsx)("span",{children:tt(w.amount)})]}),(0,v.jsx)("span",{className:"ex-approval-status",children:w.status==="approved"?"승인 완료":w.status==="failed"?"승인 실패":"승인 대기"}),w.status!=="approved"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("button",{className:"ex-secondary",disabled:ye.slice(0,ee).some(me=>me.status!=="approved"),onClick:()=>lb(ee),children:w.status==="failed"?"재시도":`카드 ${ee+1} 임시 승인`}),(0,v.jsx)("button",{className:"ex-simulate-fail",disabled:ye.slice(0,ee).some(me=>me.status!=="approved"),onClick:()=>lb(ee,!0),children:"실패 상황 확인"})]})]},w.id))]}),(0,v.jsx)("p",{children:"실제 청구 없이 화면의 결제 흐름과 마이페이지 반영만 진행합니다."})]}),(0,v.jsxs)("div",{className:"ex-total",children:[(0,v.jsxs)("span",{children:["총 결제 금액",bl&&(0,v.jsxs)("small",{children:["쿠폰 ",bl.discount,"% 적용"]})]}),(0,v.jsx)("strong",{children:tt(Ot)})]}),d==="select"&&(0,v.jsxs)("div",{className:"ex-agreements",children:[(0,v.jsxs)("div",{className:"ex-agreement-row",children:[(0,v.jsxs)("label",{className:"ex-check",children:[(0,v.jsx)("input",{"aria-label":"약관 동의",type:"checkbox",checked:A,onChange:w=>m(w.target.checked)}),"[필수] 약관 동의"]}),(0,v.jsx)("a",{href:"#payment-terms",onClick:w=>{w.preventDefault(),M("terms")},children:"약관 보기"})]}),(0,v.jsxs)("div",{className:"ex-agreement-row",children:[(0,v.jsxs)("label",{className:"ex-check",children:[(0,v.jsx)("input",{"aria-label":"결제 이용조건 동의",type:"checkbox",checked:h,onChange:w=>x(w.target.checked)}),"[필수] 결제 이용조건 동의"]}),(0,v.jsx)("a",{href:"#payment-conditions",onClick:w=>{w.preventDefault(),M("conditions")},children:"결제 이용조건 보기"})]})]}),V&&(0,v.jsx)("p",{className:"ex-error",role:"status",children:V}),(0,v.jsxs)("button",{className:"ex-primary",disabled:d==="review"&&n==="card"&&We&&Mn!==ye.length,onClick:d==="select"?Bq:()=>_q(),children:[d==="select"?"결제하기":n==="bank"?"무통장입금 신청 완료":We?"분할결제 완료":"임시 결제 완료",(0,v.jsx)(ne,{size:16})]}),d==="review"&&(0,v.jsx)("button",{className:"ex-text-button",onClick:Cq,children:"결제수단 다시 선택"}),Go&&d==="select"&&(0,v.jsx)("button",{className:"ex-text-button",onClick:()=>{Uu(!1),r("deposit"),q("")},children:"영상 결제로 돌아가기"})]})]})]}):(E?(0,v.jsxs)("div",{className:"ex-policy-document",children:[(0,v.jsx)("p",{className:"ex-policy-note",children:"결제 화면 구성 확인용 안내입니다. 아래 내용은 정식 약관 전문이 아니며, 운영 적용 시 관리자에서 등록한 최신 약관을 연결해야 합니다."}),(0,v.jsx)("h3",{children:E==="terms"?"서비스 약관 확인":"선택한 상품의 결제 이용조건"}),E==="terms"?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:"서비스를 신청하기 전에 상품명, 제공 내용, 이용 기간, 결제 금액을 확인해주세요."}),(0,v.jsx)("p",{children:"정식 약관에는 회원의 권리와 의무, 서비스 제공 범위, 변경·중단, 해지 및 환불 기준과 문의 절차가 포함되어야 합니다."}),(0,v.jsx)("p",{children:"개인정보 처리와 결제 관련 동의는 운영 사이트에 게시된 최신 문서를 기준으로 적용됩니다."})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("dl",{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"상품"}),(0,v.jsx)("dd",{children:se.title})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"결제 금액"}),(0,v.jsx)("dd",{children:tt(Ot)})]}),se.months&&(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"이용 기간"}),(0,v.jsxs)("dd",{children:[se.months,"개월"]})]})]}),(0,v.jsx)("p",{children:se.kind==="vip"?"VIP 서비스는 카드결제 또는 무통장입금으로 신청합니다. 무통장입금은 입금 확인 후 서비스가 활성화됩니다.":se.kind==="video"?"교육영상은 카드결제 또는 포인트로 결제합니다. 구매 완료 후 영상 이용 권한이 부여됩니다.":"포인트는 카드결제로만 충전하며, 충전된 포인트는 교육영상 결제에 사용합니다."}),(0,v.jsx)("p",{children:"여러 카드로 결제하는 경우 카드별 결제 금액 합계가 총금액과 같아야 합니다. 모든 카드의 승인이 완료되어야 주문이 완료됩니다."}),(0,v.jsx)("p",{children:"취소 및 환불 규정, 현금영수증 발급 기준은 정식 결제 연동 시 운영 약관과 결제대행사의 규정에 따라 적용합니다."})]}),(0,v.jsx)("button",{className:"ex-primary",onClick:()=>M(null),children:"확인하고 결제로 돌아가기"})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("p",{className:"ex-temporary",children:[(0,v.jsx)(Rf,{size:17}),"임시 결제 화면입니다. 실제 카드 청구·현금영수증 발급·입금 요청은 발생하지 않습니다."]}),at?(0,v.jsxs)("div",{className:"ex-cancel-split",children:[(0,v.jsx)("h3",{children:"분할결제를 취소하시겠습니까?"}),(0,v.jsxs)("p",{children:["현재 ",Mn,"개 카드의 임시 승인이 완료되었습니다. 취소하면 임시 승인 상태를 모두 초기화합니다. 실제 결제 취소는 발생하지 않습니다."]}),(0,v.jsx)("button",{className:"ex-primary",onClick:Qq,children:"분할결제 취소"}),(0,v.jsx)("button",{className:"ex-text-button",onClick:()=>ba(null),children:"결제 계속하기"})]}):d==="done"?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"ex-success",children:[(0,v.jsx)($t,{size:45}),(0,v.jsx)("h3",{children:n==="bank"?"입금 대기 내역이 생성되었습니다.":"결제 흐름이 완료되었습니다."}),(0,v.jsx)("p",{children:n==="bank"?"신청 내역은 마이페이지에서 확인할 수 있습니다. 실제 입금은 하지 마세요.":"마이페이지의 서비스·구매·포인트 내역에 반영되었습니다."}),n==="bank"&&K.type!=="none"&&(0,v.jsxs)("p",{children:["현금영수증 ",K.type==="income"?"소득공제":"지출증빙"," 신청 정보가 저장되었습니다. 발급은 입금 확인 후 처리하는 흐름입니다."]}),n==="card"&&We&&(0,v.jsxs)("p",{children:[ye.length,"개 카드 분할결제 · ",tt(Ot)]})]}),(0,v.jsxs)("a",{className:"ex-primary",href:se.kind==="video"&&se.videoId?`/paidInfo#video=${encodeURIComponent(se.videoId)}&watch=1`:"/myInfo",onClick:t,children:[se.kind==="video"&&se.videoId?"시청하기":"마이페이지에서 확인"," ",(0,v.jsx)(ne,{size:16})]}),(0,v.jsx)("button",{className:"ex-text-button",onClick:t,children:"계속 둘러보기"})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"ex-order",children:[(0,v.jsx)("span",{children:se.kind==="vip"?"VIP 서비스":se.kind==="video"?"주식교육영상":"영상 결제용 포인트"}),(0,v.jsx)("strong",{children:se.title}),se.months&&(0,v.jsxs)("small",{children:["이용 기간 ",se.months,"개월"]})]}),d==="select"?(0,v.jsxs)(v.Fragment,{children:[Sq&&!Go&&(0,v.jsx)("p",{className:"ex-charge-success",role:"status",children:"포인트 충전이 완료되었습니다. 영상 결제를 계속해주세요."}),se.kind==="topup"&&(0,v.jsxs)("fieldset",{className:"ex-topup-list",children:[(0,v.jsx)("legend",{children:"충전할 금액을 선택해주세요."}),ta().map(({amount:w,bonus:ee})=>(0,v.jsxs)("label",{className:Z===w?"selected":"",children:[(0,v.jsx)("input",{type:"radio",name:"topup-amount",value:w,checked:Z===w,onChange:()=>X(w)}),(0,v.jsxs)("span",{className:"ex-topup-name",children:[tt(w),(0,v.jsxs)("small",{children:["추가 ",tt(ee)," · 총 ",tt(w+ee)]})]}),(0,v.jsx)("span",{children:Z===w&&(0,v.jsx)(kt,{size:16})})]},w))]}),se.kind==="topup"&&(0,v.jsxs)("div",{className:"ex-topup-benefit-summary",children:[(0,v.jsxs)("p",{children:[(0,v.jsx)("strong",{children:tt(Z)})," 충전하면"]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("span",{children:["추가 지급",(0,v.jsxs)("strong",{children:["+",tt(yn.bonus)]})]}),(0,v.jsxs)("span",{children:["사용 가능 포인트",(0,v.jsx)("strong",{children:tt(yn.total)})]})]}),(0,v.jsxs)("small",{children:["추가 지급 ",yn.percent,"% · 영상 결제 전용. 혜택은 충전 시점의 설정에 따라 달라집니다."]})]}),(0,v.jsxs)("div",{className:"ex-methods ex-methods-point-help",role:"group","aria-label":"결제수단",children:[nb.map(({id:w,label:ee,Icon:me})=>(0,v.jsxs)("button",{type:"button","aria-pressed":n===w,className:[n===w?"selected":"",w==="bank"?"ex-bank-method":""].filter(Boolean).join(" "),onClick:()=>{r(w),q("")},children:[(0,v.jsx)(me,{size:21}),ee,(0,v.jsx)("span",{children:n===w&&(0,v.jsx)(kt,{size:14})})]},w)),se.kind==="video"&&(0,v.jsxs)("div",{className:"ex-point-help",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[(0,v.jsx)("button",{type:"button",className:"ex-point-help-button","aria-label":"포인트란?","aria-expanded":l,"aria-controls":"point-payment-help","aria-describedby":l?"point-payment-help":void 0,onFocus:()=>c(!0),onBlur:()=>c(!1),onClick:()=>c(!0),onKeyDown:w=>{w.key==="Escape"&&(w.stopPropagation(),c(!1))},children:"?"}),l&&(0,v.jsx)("div",{className:"ex-point-help-text",id:"point-payment-help",role:"tooltip",children:"포인트는 카드로 충전해 [주식교육영상] 콘텐츠 결제에 사용하는 결제수단입니다. VIP 회원서비스에는 사용할 수 없습니다. 충전 시점의 추가 지급 혜택은 충전 화면에서 확인할 수 있습니다."})]})]}),se.kind==="vip"&&(0,v.jsxs)("label",{className:"ex-field",children:["쿠폰 적용",(0,v.jsxs)("select",{"aria-label":"VIP 쿠폰 선택",value:i,onChange:w=>u(w.target.value),children:[(0,v.jsx)("option",{value:"",children:"쿠폰을 선택하세요"}),a.coupons.filter(w=>!w.used).map(w=>(0,v.jsx)("option",{value:w.id,children:w.title},w.id))]}),(0,v.jsx)("small",{className:"ex-vip-coupon-note",children:"쿠폰은 VIP 회원 서비스에만 사용 가능합니다."})]}),n==="bank"&&(0,v.jsxs)("div",{className:"ex-bank",children:[(0,v.jsxs)("label",{className:"ex-field",children:["입금 은행",(0,v.jsx)("select",{"aria-label":"입금 은행",value:I,onChange:w=>W(w.target.value),children:zn.map(w=>(0,v.jsx)("option",{children:w.bank},w.bank))})]}),(0,v.jsx)("p",{children:zn.find(w=>w.bank===I)?.number}),(0,v.jsx)("small",{children:"예금주: (주)제이앤비주식사관학교"}),(0,v.jsxs)("label",{className:"ex-field",children:["입금자명",(0,v.jsx)("input",{"aria-label":"입금자명",placeholder:"입금자명을 입력하세요",value:p,onChange:w=>U(w.target.value)})]}),(0,v.jsxs)("fieldset",{className:"ex-receipt",children:[(0,v.jsx)("legend",{children:"현금영수증 신청"}),(0,v.jsx)("div",{className:"ex-receipt-options",children:[["none","미신청"],["income","소득공제"],["business","지출증빙"]].map(([w,ee])=>(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{type:"radio",name:"cash-receipt",checked:K.type===w,onChange:()=>B({type:w,identifier:w==="business"?"business":"phone",number:""})}),ee]},w))}),K.type!=="none"&&(0,v.jsxs)(v.Fragment,{children:[K.type==="income"&&(0,v.jsxs)("label",{className:"ex-field",children:["발급 식별수단",(0,v.jsxs)("select",{"aria-label":"현금영수증 식별수단",value:K.identifier,onChange:w=>B(ee=>({...ee,identifier:w.target.value,number:""})),children:[(0,v.jsx)("option",{value:"phone",children:"휴대폰 번호"}),(0,v.jsx)("option",{value:"receiptCard",children:"현금영수증 카드번호"})]})]}),(0,v.jsxs)("label",{className:"ex-field",children:[K.type==="business"?"사업자등록번호":K.identifier==="phone"?"휴대폰 번호":"현금영수증 카드번호",(0,v.jsx)("input",{"aria-label":"현금영수증 번호",inputMode:"numeric",autoComplete:"off",maxLength:24,placeholder:"확인용 숫자를 입력하세요",value:K.number,onChange:w=>B(ee=>({...ee,number:w.target.value}))}),(0,v.jsx)("small",{children:"실제 번호는 입력하지 마세요. 입력값은 전송하지 않으며 내역에는 끝 4자리만 저장합니다."})]})]})]}),(0,v.jsx)("p",{className:"ex-helper",children:"입금 확인 후 서비스가 활성화되고 현금영수증 발급을 진행하는 흐름입니다. 현재 화면에서는 실제 입금하지 마세요."})]}),n==="deposit"&&(0,v.jsxs)("div",{className:"ex-wallet",children:[(0,v.jsx)(da,{size:23}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:"보유 포인트"}),(0,v.jsx)("strong",{children:tt(a.balance)}),(0,v.jsx)("small",{children:"동영상 결제 전용"})]}),a.balance<Ot&&(0,v.jsx)("button",{className:"ex-secondary",onClick:$q,children:"카드로 포인트 충전"})]}),n==="card"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"ex-card-mode",role:"group","aria-label":"카드 결제 방식",children:[(0,v.jsx)("button",{"aria-pressed":!We,className:We?"":"selected",onClick:()=>Ma(!1),children:"한 카드로 결제"}),(0,v.jsx)("button",{"aria-pressed":We,className:We?"selected":"",onClick:()=>{Ma(!0),ye.every(w=>w.amount===0)&&sa(w=>Bs(Ot,w))},children:"여러 카드로 분할결제"})]}),We&&(0,v.jsxs)("div",{className:"ex-split-editor",children:[(0,v.jsxs)("div",{className:"ex-split-heading",children:[(0,v.jsx)("strong",{children:"카드별 결제 금액"}),(0,v.jsx)("button",{type:"button",onClick:()=>sa(w=>Bs(Ot,w)),children:"균등 배분"})]}),ye.map((w,ee)=>(0,v.jsxs)("div",{className:"ex-card-part",children:[(0,v.jsxs)("div",{className:"ex-part-heading",children:[(0,v.jsxs)("strong",{children:["카드 ",ee+1]}),(0,v.jsx)("button",{type:"button",disabled:ye.length<=2,"aria-label":`카드 ${ee+1} 삭제`,onClick:()=>sa(me=>me.filter(pa=>pa.id!==w.id)),children:(0,v.jsx)(nl,{size:15})})]}),(0,v.jsxs)("label",{className:"ex-field",children:["카드사",(0,v.jsx)("select",{"aria-label":`카드 ${ee+1} 카드사`,value:w.company,onChange:me=>rb(w.id,{company:me.target.value}),children:Vu.map(me=>(0,v.jsx)("option",{children:me},me))})]}),(0,v.jsx)("div",{className:"ex-part-fields",children:(0,v.jsxs)("label",{className:"ex-field",children:["결제 금액",(0,v.jsx)("input",{"aria-label":`카드 ${ee+1} 금액`,type:"number",min:1,step:1,value:w.amount||"",onChange:me=>rb(w.id,{amount:Number(me.target.value)})})]})})]},w.id)),(0,v.jsxs)("button",{className:"ex-secondary ex-add-card",disabled:ye.length>=5,onClick:()=>sa(w=>[...w,_s(w.length)]),children:[(0,v.jsx)(el,{size:16}),"카드 추가"]}),(0,v.jsxs)("div",{className:`ex-split-sum${pl===Ot?" matched":""}`,"aria-live":"polite",children:[(0,v.jsxs)("span",{children:["분할 합계 ",(0,v.jsx)("b",{children:tt(pl)})]}),(0,v.jsxs)("span",{children:[Ot-pl>=0?"남은 금액":"초과 금액"," ",(0,v.jsx)("b",{children:tt(Math.abs(Ot-pl))})]})]})]}),(0,v.jsx)("p",{className:"ex-helper",children:"카드번호는 입력하지 않습니다. 카드별 결제대행사 창으로 순서대로 이동하는 임시 승인 흐름입니다."})]})]}):(0,v.jsxs)("div",{className:"ex-review",children:[(0,v.jsx)("h3",{children:"주문 정보를 확인해주세요."}),se.kind==="topup"&&(0,v.jsxs)("p",{className:"ex-charge-success",children:["충전 ",tt(Z)," + 추가 ",tt(yn.bonus)," = 사용 가능 ",tt(yn.total)]}),(0,v.jsxs)("dl",{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"결제수단"}),(0,v.jsxs)("dd",{children:[nb.find(w=>w.id===n)?.label,n==="card"&&We?" · 분할결제":""]})]}),n==="bank"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"입금자명"}),(0,v.jsx)("dd",{children:p})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"입금은행"}),(0,v.jsx)("dd",{children:I})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"현금영수증"}),(0,v.jsx)("dd",{children:K.type==="none"?"미신청":`${K.type==="income"?"소득공제":"지출증빙"} · ${Ds(K)?.maskedNumber}`})]})]}),n==="deposit"&&(0,v.jsxs)("div",{children:[(0,v.jsx)("dt",{children:"결제 후 포인트"}),(0,v.jsx)("dd",{children:tt(a.balance-Ot)})]})]}),n==="card"&&We&&(0,v.jsxs)("div",{className:"ex-split-approvals",children:[(0,v.jsxs)("p",{children:["승인 완료 ",Mn," / ",ye.length," · 모든 카드 승인 후 주문이 완료됩니다."]}),ye.map((w,ee)=>(0,v.jsxs)("div",{className:`ex-approval ${w.status}`,children:[(0,v.jsxs)("div",{children:[(0,v.jsxs)("strong",{children:["카드 ",ee+1," · ",w.company]}),(0,v.jsx)("span",{children:tt(w.amount)})]}),(0,v.jsx)("span",{className:"ex-approval-status",children:w.status==="approved"?"승인 완료":w.status==="failed"?"승인 실패":"승인 대기"}),w.status!=="approved"&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("button",{className:"ex-secondary",disabled:ye.slice(0,ee).some(me=>me.status!=="approved"),onClick:()=>lb(ee),children:w.status==="failed"?"재시도":`카드 ${ee+1} 임시 승인`}),(0,v.jsx)("button",{className:"ex-simulate-fail",disabled:ye.slice(0,ee).some(me=>me.status!=="approved"),onClick:()=>lb(ee,!0),children:"실패 상황 확인"})]})]},w.id))]}),(0,v.jsx)("p",{children:"실제 청구 없이 화면의 결제 흐름과 마이페이지 반영만 진행합니다."})]}),(0,v.jsxs)("div",{className:"ex-total",children:[(0,v.jsxs)("span",{children:["총 결제 금액",bl&&(0,v.jsxs)("small",{children:["쿠폰 ",bl.discount,"% 적용"]})]}),(0,v.jsx)("strong",{children:tt(Ot)})]}),d==="select"&&(0,v.jsxs)("div",{className:"ex-agreements",children:[(0,v.jsxs)("div",{className:"ex-agreement-row",children:[(0,v.jsxs)("label",{className:"ex-check",children:[(0,v.jsx)("input",{"aria-label":"약관 동의",type:"checkbox",checked:A,onChange:w=>m(w.target.checked)}),"[필수] 약관 동의"]}),(0,v.jsx)("a",{href:"#payment-terms",onClick:w=>{w.preventDefault(),M("terms")},children:"약관 보기"})]}),(0,v.jsxs)("div",{className:"ex-agreement-row",children:[(0,v.jsxs)("label",{className:"ex-check",children:[(0,v.jsx)("input",{"aria-label":"결제 이용조건 동의",type:"checkbox",checked:h,onChange:w=>x(w.target.checked)}),"[필수] 결제 이용조건 동의"]}),(0,v.jsx)("a",{href:"#payment-conditions",onClick:w=>{w.preventDefault(),M("conditions")},children:"결제 이용조건 보기"})]})]}),V&&(0,v.jsx)("p",{className:"ex-error",role:"status",children:V}),(0,v.jsxs)("button",{className:"ex-primary",disabled:d==="review"&&n==="card"&&We&&Mn!==ye.length,onClick:d==="select"?Bq:()=>_q(),children:[d==="select"?"결제하기":n==="bank"?"무통장입금 신청 완료":We?"분할결제 완료":"임시 결제 완료",(0,v.jsx)(ne,{size:16})]}),d==="review"&&(0,v.jsx)("button",{className:"ex-text-button",onClick:Cq,children:"결제수단 다시 선택"}),Go&&d==="select"&&(0,v.jsx)("button",{className:"ex-text-button",onClick:()=>{Uu(!1),r("deposit"),q("")},children:"영상 결제로 돌아가기"})]})]}))})}

const wq=e=>e.toLocaleString("ko-KR")+"원";

const nV=e=>new Date(e).toLocaleDateString("ko-KR");

function rV({modal:e,assets:t={}}){let{state:a,openModal:o,closeModal:f,registerCoupon:n,setLoggedIn:r}=ct(),[l,c]=(0,aa.useState)(""),[d,b]=(0,aa.useState)(""),[A,m]=(0,aa.useState)(!1),[h,x]=(0,aa.useState)("전체"),[E,M]=(0,aa.useState)("2026-09-09"),[i,u]=(0,aa.useState)("2026-12-31"),[p,U]=(0,aa.useState)({type:"전체",from:"2026-09-09",to:"2026-12-31"}),I={balance:"포인트 내역",coupons:"내 쿠폰",couponRegister:"쿠폰 등록",password:"비밀번호 변경",nicknameGuide:"회원 닉네임 변경 안내",contact:"실시간 상담센터",login:"로그인",withdraw:"회원탈퇴",logout:"로그아웃"},W=a.transactions.filter(V=>(p.type==="전체"||V.type===p.type)&&V.date.slice(0,10)>=p.from&&V.date.slice(0,10)<=p.to),Z=V=>o({type:"notice",title:"안내",message:V}),X=V=>{V.preventDefault();let q=n(d);c(q.message),q.ok&&b("")};return e.type==="notice"?(0,y.jsxs)(Au,{title:e.title,onClose:f,children:[(0,y.jsx)("p",{className:"ex-message",children:e.message}),(0,y.jsx)("button",{className:"ex-primary",onClick:f,children:"확인"})]}):(0,y.jsxs)(Au,{title:I[e.type],onClose:f,wide:e.type==="balance",children:[e.type==="balance"&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"ex-balance-head",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{children:"보유 포인트"}),(0,y.jsx)("strong",{children:wq(a.balance)})]}),(0,y.jsx)("button",{className:"ex-primary",onClick:()=>o({type:"payment",order:{kind:"topup",title:"포인트 충전",amount:1e5}}),children:"포인트 충전"})]}),(0,y.jsxs)("div",{className:"ex-history-filters",children:[(0,y.jsx)("select",{"aria-label":"포인트 내역 타입",value:h,onChange:V=>x(V.target.value),children:["전체","충전","사용"].map(V=>(0,y.jsx)("option",{children:V},V))}),(0,y.jsx)("input",{"aria-label":"조회 시작일",type:"date",value:E,onChange:V=>M(V.target.value)}),(0,y.jsx)("span",{children:"~"}),(0,y.jsx)("input",{"aria-label":"조회 종료일",type:"date",value:i,onChange:V=>u(V.target.value)}),(0,y.jsx)("button",{onClick:()=>U({type:h,from:E,to:i}),children:"조회"})]}),(0,y.jsx)("div",{className:"ex-table-wrap",children:(0,y.jsxs)("table",{children:[(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{children:"날짜"}),(0,y.jsx)("th",{children:"타입"}),(0,y.jsx)("th",{children:"메모"}),(0,y.jsx)("th",{children:"금액"})]})}),(0,y.jsx)("tbody",{children:W.map(V=>(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:nV(V.date)}),(0,y.jsx)("td",{children:V.type}),(0,y.jsx)("td",{children:V.memo}),(0,y.jsxs)("td",{children:[V.amount>0?"+":"",wq(V.amount)]})]},V.id))})]})}),!W.length&&(0,y.jsx)("p",{className:"ex-empty",children:"조건에 맞는 내역이 없습니다."})]}),e.type==="coupons"&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{className:"ex-secondary",onClick:()=>o({type:"couponRegister"}),children:"쿠폰 등록"}),(0,y.jsxs)("div",{className:"ex-small-tabs",children:[(0,y.jsx)("button",{className:A?"":"active",onClick:()=>m(!1),children:"미사용 쿠폰"}),(0,y.jsx)("button",{className:A?"active":"",onClick:()=>m(!0),children:"사용된 쿠폰"})]}),a.coupons.filter(V=>V.used===A).map(V=>(0,y.jsxs)("div",{className:"ex-coupon",children:[(0,y.jsx)(za,{size:24}),(0,y.jsxs)("div",{children:[(0,y.jsx)("strong",{children:V.title}),(0,y.jsxs)("small",{children:[V.code," · ",V.expires,"까지"]}),(0,y.jsx)("span",{children:"VIP 전용 · 교육영상 사용 불가"})]})]},V.id)),!a.coupons.some(V=>V.used===A)&&(0,y.jsx)("p",{className:"ex-empty",children:A?"사용한 쿠폰이 없습니다.":"사용 가능한 쿠폰이 없습니다."})]}),e.type==="couponRegister"&&(0,y.jsxs)("form",{onSubmit:X,children:[(0,y.jsxs)("label",{className:"ex-field",children:["쿠폰번호",(0,y.jsx)("input",{placeholder:"쿠폰번호를 입력하세요","aria-label":"쿠폰번호",value:d,onChange:V=>b(V.target.value)})]}),(0,y.jsx)("p",{className:"ex-helper",children:"이벤트 쿠폰 WELCOME2026을 등록할 수 있습니다. 교육영상에서는 사용할 수 없습니다."}),l&&(0,y.jsx)("p",{className:"ex-error",role:"status",children:l}),(0,y.jsx)("button",{className:"ex-primary",children:"등록하기"})]}),e.type==="password"&&(0,y.jsxs)("form",{onSubmit:V=>{V.preventDefault();let q=V.currentTarget,K=new FormData(q),B=String(K.get("new"));if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,16}$/.test(B)){c("영문, 숫자, 특수문자를 포함해 8~16자로 입력해주세요.");return}if(B!==K.get("confirm")){c("새 비밀번호가 일치하지 않습니다.");return}q.reset(),Z("비밀번호 변경 흐름을 확인했습니다. 실제 계정 비밀번호는 변경되지 않았습니다.")},children:[[["current","현재 비밀번호","현재 비밀번호 입력"],["new","새 비밀번호","영문, 숫자, 특수문자 포함 8~16자"],["confirm","새 비밀번호 확인","새 비밀번호 다시 입력"]].map(([V,q,K])=>(0,y.jsxs)("label",{className:"ex-field",children:[q,(0,y.jsx)("input",{type:"password",name:V,required:!0,autoComplete:"off",placeholder:K})]},V)),(0,y.jsx)("p",{className:"ex-helper",children:"실제 계정의 비밀번호는 입력하지 마세요. 입력값은 저장하거나 전송하지 않습니다."}),l&&(0,y.jsx)("p",{role:"status",className:"ex-error",children:l}),(0,y.jsx)("button",{className:"ex-primary",children:"변경하기"}),(0,y.jsx)("button",{type:"button",className:"ex-text-button",onClick:f,children:"취소"})]}),e.type==="nicknameGuide"&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"ex-uploaded-nickname-guide",children:(0,y.jsx)("img",{src:t["/home/nickname-guide.png"]??"/home/nickname-guide.png",alt:"홈페이지와 모바일 텔레그램의 닉네임을 동일하게 변경하는 방법 안내",width:647,height:2048})}),(0,y.jsx)("button",{className:"ex-primary",onClick:f,children:"확인"})]}),e.type==="contact"&&(0,y.jsxs)("div",{className:"ex-live-chat-status",children:[(0,y.jsxs)("span",{className:"ex-live-chat-icon","aria-hidden":"true",children:[(0,y.jsx)(vf,{size:26,strokeWidth:1.5}),(0,y.jsx)(Vf,{size:17,strokeWidth:1.7})]}),(0,y.jsx)("p",{className:"ex-message",children:"상담 가능 시간과 연결 상태를 확인해주세요."}),(0,y.jsx)("p",{className:"ex-helper",children:"상담 연결은 준비 중입니다."})]}),e.type==="login"&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("p",{className:"ex-message",children:"회원 화면을 둘러보세요. 실제 회원가입·로그인 화면은 변경하지 않습니다."}),(0,y.jsx)("button",{className:"ex-primary",onClick:()=>{r(!0),f()},children:"회원 화면 보기"})]}),(e.type==="logout"||e.type==="withdraw")&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("p",{className:"ex-message",children:e.type==="logout"?"현재 디자인 화면에서 로그아웃하시겠습니까?":"회원탈퇴 확인 단계입니다. 실제 운영 계정은 탈퇴되지 않으며 현재 화면의 로그인 상태만 변경합니다."}),(0,y.jsx)("button",{className:"ex-primary",onClick:()=>{r(!1),Z(e.type==="logout"?"현재 화면에서 로그아웃되었습니다.":"탈퇴 확인 흐름이 완료되었습니다. 실제 회원 계정은 변경되지 않았습니다.")},children:"확인"}),(0,y.jsx)("button",{className:"ex-text-button",onClick:f,children:"취소"})]})]})}

function zq({assets:e={}}){let{modal:t,closeModal:a}=ct();return t?t.type==="payment"?(0,y.jsx)($s,{order:t.order,onClose:a},JSON.stringify(t.order)):(0,y.jsx)(rV,{modal:t,assets:e},t.type):null}

const gq=e=>e.replace(/[^0-9]/g,"");

const oV=e=>/^01[016789]\d{7,8}$/.test(gq(e));

const aV=e=>{let t=gq(e);return/^01[016789]\d{7,8}$/.test(t)?t.length===10?`${t.slice(0,3)}-${t.slice(3,6)}-${t.slice(6)}`:`${t.slice(0,3)}-${t.slice(3,7)}-${t.slice(7)}`:e.trim()};

const Wq=e=>{if(!e)return null;let t=new Date(`${e}T23:59:59`).getTime();return Number.isNaN(t)?null:Math.max(0,Math.ceil((t-Date.now())/864e5))};

const Uq=e=>{if(!e)return"입금 확인 후 안내";let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"})};

function Js({icon:e,title:t,description:a,action:o}){return(0,s.jsxs)("div",{className:"mi-empty-panel",children:[(0,s.jsx)("span",{className:"mi-empty-icon",children:(0,s.jsx)(e,{size:25,strokeWidth:1.45,"aria-hidden":"true"})}),(0,s.jsx)("strong",{children:t}),(0,s.jsx)("p",{children:a}),o]})}

const Lf=e=>`${e.toLocaleString("ko-KR")}원`;

const xq=e=>{let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"})};

const fV=e=>({card:"카드",bank:"무통장입금",deposit:"포인트"})[e];

function Fs(){let{state:e,openModal:t,saveProfile:a,setLoggedIn:o}=ct(),[f,n]=(0,Zf.useState)(0),r=(0,Zf.useRef)(null),[l,c]=(0,Zf.useState)(!1),[d,b]=(0,Zf.useState)(()=>({nickname:e.profile.nickname,phone:e.profile.phone,cafeNickname:e.profile.cafeNickname})),[A,m]=(0,Zf.useState)(""),h=e.services,x=Math.ceil(h.length/2),E=x?f%x:0,M=h.slice(E*2,E*2+2),i=q=>{x>1&&n((E+q+x)%x)},u=h.filter(q=>q.status==="active").length,p=h.filter(q=>q.status==="pending").length,U=e.coupons.filter(q=>!q.used),I=e.purchases.filter(q=>q.kind==="video"),W=q=>{b({nickname:e.profile.nickname,phone:e.profile.phone,cafeNickname:e.profile.cafeNickname}),m(""),c(!0),window.requestAnimationFrame(()=>document.getElementById(`mi-field-${q}`)?.focus())},Z=()=>{b({nickname:e.profile.nickname,phone:e.profile.phone,cafeNickname:e.profile.cafeNickname}),c(!1),m("수정을 취소했습니다.")},X=q=>{q.preventDefault();let K=d.nickname.trim();if(!K){m("닉네임을 입력해주세요."),document.getElementById("mi-field-nickname")?.focus();return}if(!oV(d.phone)){m("휴대폰 번호를 010-0000-0000 형식으로 확인해주세요."),document.getElementById("mi-field-phone")?.focus();return}(()=>{let result=a({...e.profile,nickname:K,phone:aV(d.phone),cafeNickname:d.cafeNickname.trim()});if(result?.ok===false){m(result.message);return}c(!1),m("회원 정보가 이 화면에 반영되었습니다.")})()},V=(q,K)=>t({type:"notice",title:`${q} 텔레그램 안내`,message:K?"입금 확인 후 서비스가 활성화되면 텔레그램 입장 안내를 확인할 수 있습니다.":"보안상 실제 텔레그램 초대 주소는 표시하지 않습니다. 안내된 링크는 운영 확인 후 제공됩니다."});return e.loggedIn?(0,s.jsx)("div",{className:"willclub-page myinfo-page",children:(0,s.jsx)("main",{className:"mi-main",children:(0,s.jsxs)("div",{className:"mi-container",children:[(0,s.jsxs)("section",{className:"mi-intro","aria-labelledby":"mi-title",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mi-kicker",children:"MY WILLCLUB"}),(0,s.jsxs)("h1",{id:"mi-title",children:["내 정보",(0,s.jsx)("span",{children:"."})]}),(0,s.jsx)("p",{children:"회원 정보를 확인하고 수정할 수 있습니다."})]}),(0,s.jsxs)("button",{type:"button",className:"mi-guide-button",onClick:()=>t({type:"nicknameGuide"}),children:[(0,s.jsx)(ko,{size:17,strokeWidth:1.7,"aria-hidden":"true"}),"입장전 닉네임 변경필수"]})]}),(0,s.jsx)(et,{title:(0,s.jsxs)(s.Fragment,{children:["배움의 기록과 서비스,",(0,s.jsx)("br",{}),"한곳에서 편리하게."]}),eyebrow:"WILLCLUB · MY PAGE",label:"마이페이지 안내"}),(0,s.jsxs)("section",{className:"mi-service-section mi-section","aria-labelledby":"mi-service-title",children:[(0,s.jsxs)("div",{className:"mi-section-heading mi-service-heading",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mi-kicker",children:"MY SERVICE"}),(0,s.jsx)("h2",{id:"mi-service-title",children:"현재 이용중인 서비스"}),(0,s.jsx)("p",{children:"서비스를 두 개씩 확인하고 좌우로 넘겨보세요."})]}),(0,s.jsxs)("div",{className:"mi-service-counts","aria-label":"서비스 현황",children:[(0,s.jsxs)("span",{children:[(0,s.jsx)("b",{children:u})," 활성 서비스"]}),(0,s.jsx)("i",{"aria-hidden":"true"}),(0,s.jsxs)("span",{children:[(0,s.jsx)("b",{children:p})," 입금 대기"]})]})]}),h.length?(0,s.jsxs)("div",{className:"mi-service-carousel",role:"region","aria-label":"이용 서비스 슬라이드","aria-roledescription":"캐러셀",tabIndex:0,onKeyDown:q=>{q.target===q.currentTarget&&(q.key==="ArrowRight"&&(q.preventDefault(),i(1)),q.key==="ArrowLeft"&&(q.preventDefault(),i(-1)))},onTouchStart:q=>{if(q.target.closest("button,a"))return;let K=q.touches[0];r.current={x:K.clientX,y:K.clientY}},onTouchEnd:q=>{let K=r.current;if(r.current=null,!K)return;let B=q.changedTouches[0],We=B.clientX-K.x,Ma=B.clientY-K.y;Math.abs(We)>45&&Math.abs(We)>Math.abs(Ma)&&i(We<0?1:-1)},onTouchCancel:()=>{r.current=null},children:[(0,s.jsxs)("div",{className:"mi-carousel-controls",children:[(0,s.jsx)("button",{type:"button",className:"mi-carousel-button","aria-label":"이전 서비스 두 개",disabled:x<2,onClick:()=>i(-1),children:(0,s.jsx)(mt,{size:19})}),(0,s.jsxs)("p",{className:"mi-carousel-counter","aria-live":"polite","aria-atomic":"true",children:[E+1," ",(0,s.jsxs)("span",{children:["/ ",x," 페이지"]})]}),(0,s.jsx)("button",{type:"button",className:"mi-carousel-button","aria-label":"다음 서비스 두 개",disabled:x<2,onClick:()=>i(1),children:(0,s.jsx)(ne,{size:19})})]}),(0,s.jsx)("div",{className:"mi-service-pair","aria-label":`${E*2+1}~${Math.min(E*2+2,h.length)}번째 서비스`,children:M.map(q=>{let K=q.status==="pending";return(0,s.jsxs)("article",{className:`mi-service-card ${K?"is-pending":""}`,"data-service-id":q.id,"data-service-status":q.status,children:[(0,s.jsxs)("div",{className:"mi-service-card-top",children:[(0,s.jsx)("h3",{children:q.name}),(0,s.jsx)("span",{className:`mi-status ${q.status}`,children:K?"입금 대기":"이용중"})]}),(0,s.jsxs)("div",{className:"mi-service-restricted-area",children:[(0,s.jsxs)("div",{className:`mi-service-content${K?" is-blurred":""}`,inert:K,"aria-hidden":K?!0:void 0,children:[(0,s.jsxs)("div",{className:"mi-service-card-main",children:[(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:K?"서비스 이용 안내":"정상적으로 이용 중인 서비스입니다."})}),(0,s.jsxs)("div",{className:"mi-days-left",children:[(0,s.jsx)("span",{children:"이용 기간"}),(0,s.jsx)("strong",{children:K?"D-000":Wq(q.end)!==null?(0,s.jsxs)(s.Fragment,{children:["D-",Wq(q.end)]}):"-"}),(0,s.jsx)("small",{children:"잔여일"})]})]}),(0,s.jsxs)("dl",{className:"mi-service-details",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)(Mo,{size:15,strokeWidth:1.6,"aria-hidden":"true"}),"시작일"]}),(0,s.jsx)("dd",{children:K?"----. --. --.":Uq(q.start)})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)(Mo,{size:15,strokeWidth:1.6,"aria-hidden":"true"}),"종료일"]}),(0,s.jsx)("dd",{children:K?"----. --. --.":Uq(q.end)})]})]}),(0,s.jsxs)("div",{className:"mi-telegram-box",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(Oo,{size:18,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"텔레그램 입장 안내"}),(0,s.jsx)("span",{children:"가입한 서비스의 입장 안내를 확인하세요."})]})]}),(0,s.jsxs)("div",{className:"mi-telegram-actions",children:[(0,s.jsxs)("button",{type:"button",disabled:K,onClick:()=>V(q.name,!1),children:["링크 01 ",(0,s.jsx)(eo,{size:13,"aria-hidden":"true"})]}),(0,s.jsxs)("button",{type:"button",disabled:K,onClick:()=>V(q.name,!1),children:["링크 02 ",(0,s.jsx)(eo,{size:13,"aria-hidden":"true"})]})]})]})]}),K&&(0,s.jsxs)("div",{className:"mi-service-lock",role:"note","aria-label":`${q.name}: 가입 후 확인 가능합니다.`,children:[(0,s.jsx)("span",{className:"mi-service-lock-icon",children:(0,s.jsx)(Tt,{size:24,strokeWidth:1.5,"aria-hidden":"true"})}),(0,s.jsx)("strong",{children:"가입 후 확인 가능합니다."}),(0,s.jsx)("p",{children:"무통장 입금 확인 후 서비스가 활성화됩니다."})]})]})]},q.id)})},E),(0,s.jsx)("div",{className:"mi-carousel-dots",role:"group","aria-label":"서비스 묶음 바로 선택",children:Array.from({length:x},(q,K)=>(0,s.jsx)("button",{type:"button","aria-label":`${K+1}페이지: ${K*2+1}~${Math.min(K*2+2,h.length)}번째 서비스`,"aria-pressed":K===E,className:K===E?"active":"",onClick:()=>n(K),children:(0,s.jsx)("span",{})},K))})]}):(0,s.jsx)(Js,{icon:Cr,title:"이용 중인 서비스가 없습니다.",description:"새로운 서비스에 가입하면 이곳에서 이용 현황을 확인할 수 있습니다."})]}),(0,s.jsxs)("section",{className:"mi-summary-grid","aria-label":"내 혜택 요약",children:[(0,s.jsxs)("article",{className:"mi-summary-card mi-balance-card",children:[(0,s.jsx)("div",{className:"mi-summary-icon",children:(0,s.jsx)(da,{size:22,strokeWidth:1.45,"aria-hidden":"true"})}),(0,s.jsx)("p",{children:"보유중 포인트"}),(0,s.jsx)("strong",{children:Lf(e.balance)}),(0,s.jsxs)("button",{type:"button",className:"mi-text-button",onClick:()=>t({type:"notice",title:"포인트가란?",message:"주식 교육 영상을 볼 수 있는 포인트입니다. 주식 교육 영상 게시글에만 사용할 수 있습니다."}),children:["포인트가란? ",(0,s.jsx)(ua,{size:14,"aria-hidden":"true"})]}),(0,s.jsx)("div",{className:"mi-card-actions",children:(0,s.jsx)("button",{type:"button",onClick:()=>t({type:"balance"}),children:"포인트 내역 보기"})})]}),(0,s.jsxs)("article",{className:"mi-summary-card mi-coupon-card",children:[(0,s.jsx)("div",{className:"mi-summary-icon",children:(0,s.jsx)(za,{size:22,strokeWidth:1.45,"aria-hidden":"true"})}),(0,s.jsx)("p",{children:"보유 쿠폰"}),(0,s.jsxs)("strong",{children:[U.length,(0,s.jsx)("small",{children:"장"})]}),(0,s.jsxs)("button",{type:"button",className:"mi-text-button",onClick:()=>t({type:"notice",title:"쿠폰이란?",message:"이벤트로 발행된 쿠폰은 VIP 가입 시 사용할 수 있습니다. 교육 영상에는 사용할 수 없습니다."}),children:["쿠폰이란? ",(0,s.jsx)(ua,{size:14,"aria-hidden":"true"})]}),(0,s.jsx)("div",{className:"mi-card-actions",children:(0,s.jsx)("button",{type:"button",onClick:()=>t({type:"coupons"}),children:"쿠폰 목록 보기"})})]}),(0,s.jsx)("article",{className:"mi-summary-card mi-register-card",children:(0,s.jsxs)("div",{className:"mi-action-stack","aria-label":"충전 및 쿠폰 등록",children:[(0,s.jsxs)("button",{type:"button",className:"mi-stack-button mi-stack-topup",onClick:()=>t({type:"payment",order:{kind:"topup",title:"포인트 충전",amount:5e4}}),children:[(0,s.jsx)(da,{size:24,strokeWidth:1.6,"aria-hidden":"true"}),(0,s.jsx)("span",{children:"포인트 충전"}),(0,s.jsx)(ke,{size:20,"aria-hidden":"true"})]}),(0,s.jsxs)("button",{type:"button",className:"mi-stack-button mi-stack-coupon",onClick:()=>t({type:"couponRegister"}),children:[(0,s.jsx)(za,{size:24,strokeWidth:1.6,"aria-hidden":"true"}),(0,s.jsx)("span",{children:"쿠폰 등록"}),(0,s.jsx)(ke,{size:20,"aria-hidden":"true"})]})]})})]}),(0,s.jsxs)("section",{className:"mi-section mi-profile-section","aria-labelledby":"mi-profile-title",children:[(0,s.jsx)("div",{className:"mi-section-heading",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mi-kicker",children:"ACCOUNT"}),(0,s.jsx)("h2",{id:"mi-profile-title",children:"회원 정보"}),(0,s.jsx)("p",{children:"기본 회원 정보를 확인하고 관리하세요."})]})}),(0,s.jsxs)("form",{className:"mi-profile-card",onSubmit:X,children:[(0,s.jsxs)("div",{className:"mi-profile-row",children:[(0,s.jsxs)("div",{className:"mi-profile-label",children:[(0,s.jsx)(gt,{size:17,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsx)("label",{htmlFor:"mi-id",children:"아이디"})]}),(0,s.jsxs)("div",{className:"mi-profile-value",children:[(0,s.jsx)("input",{id:"mi-id",readOnly:!0,value:e.profile.id,"aria-readonly":"true"}),(0,s.jsx)("p",{children:"아이디는 변경할 수 없습니다."})]})]}),(0,s.jsxs)("div",{className:"mi-profile-row",children:[(0,s.jsxs)("div",{className:"mi-profile-label",children:[(0,s.jsx)(Tt,{size:17,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsx)("span",{children:"비밀번호"})]}),(0,s.jsxs)("div",{className:"mi-profile-value mi-password-value",children:[(0,s.jsx)("span",{className:"mi-password-mask",children:"••••••••••"}),(0,s.jsx)("button",{type:"button",className:"mi-outline-button",onClick:()=>t({type:"password"}),children:"비밀번호 변경"}),(0,s.jsx)("p",{children:"비밀번호는 변경 팝업에서만 입력합니다."})]})]}),(0,s.jsxs)("div",{className:"mi-profile-row",children:[(0,s.jsxs)("div",{className:"mi-profile-label",children:[(0,s.jsx)(gt,{size:17,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsx)("label",{htmlFor:"mi-name",children:"이름"})]}),(0,s.jsxs)("div",{className:"mi-profile-value",children:[(0,s.jsx)("input",{id:"mi-name",readOnly:!0,value:e.profile.name,"aria-readonly":"true"}),(0,s.jsx)("p",{children:"이름은 변경할 수 없습니다."})]})]}),(0,s.jsxs)("div",{className:"mi-profile-row",children:[(0,s.jsxs)("div",{className:"mi-profile-label",children:[(0,s.jsx)(Vf,{size:17,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsx)("label",{htmlFor:"mi-field-nickname",children:"닉네임"})]}),(0,s.jsxs)("div",{className:"mi-profile-value",children:[l?(0,s.jsx)("input",{id:"mi-field-nickname",value:d.nickname,onChange:q=>b(K=>({...K,nickname:q.target.value})),placeholder:"닉네임을 입력해주세요"}):(0,s.jsx)("strong",{children:e.profile.nickname||"미입력"}),!l&&(0,s.jsxs)("button",{type:"button",className:"mi-outline-button",onClick:()=>W("nickname"),children:[(0,s.jsx)(Af,{size:13,"aria-hidden":"true"}),"수정"]}),(0,s.jsxs)("p",{className:"mi-field-note",children:["텔레그램 닉네임과 동일하게 설정해 주세요.",(0,s.jsx)("br",{}),"닉네임이 다르면 서비스 이용 확인이 어려울 수 있습니다."]})]})]}),(0,s.jsxs)("div",{className:"mi-profile-row",children:[(0,s.jsxs)("div",{className:"mi-profile-label",children:[(0,s.jsx)($r,{size:17,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsx)("label",{htmlFor:"mi-field-phone",children:"휴대폰 번호"})]}),(0,s.jsxs)("div",{className:"mi-profile-value",children:[l?(0,s.jsx)("input",{id:"mi-field-phone",inputMode:"tel",value:d.phone,onChange:q=>b(K=>({...K,phone:q.target.value})),placeholder:"010-0000-0000"}):(0,s.jsx)("strong",{children:e.profile.phone||"미입력"}),!l&&(0,s.jsxs)("button",{type:"button",className:"mi-outline-button",onClick:()=>W("phone"),children:[(0,s.jsx)(Af,{size:13,"aria-hidden":"true"}),"수정"]}),(0,s.jsx)("p",{className:"mi-field-note",children:"해당 번호로 SMS발송이 되오니 알맞은 번호로 입력 부탁드립니다. 현재 임시 화면에서는 SMS를 발송하지 않습니다."})]})]}),(0,s.jsxs)("div",{className:"mi-profile-row",children:[(0,s.jsxs)("div",{className:"mi-profile-label",children:[(0,s.jsx)(gt,{size:17,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsxs)("label",{htmlFor:"mi-field-cafeNickname",children:["평생주식카페 회원닉네임 ",(0,s.jsx)("em",{children:"선택"})]})]}),(0,s.jsxs)("div",{className:"mi-profile-value",children:[l?(0,s.jsx)("input",{id:"mi-field-cafeNickname",value:d.cafeNickname,onChange:q=>b(K=>({...K,cafeNickname:q.target.value})),placeholder:"카페 회원닉네임을 입력해주세요"}):(0,s.jsx)("strong",{children:e.profile.cafeNickname||"미입력"}),!l&&(0,s.jsxs)("button",{type:"button",className:"mi-outline-button",onClick:()=>W("cafeNickname"),children:[(0,s.jsx)(Af,{size:13,"aria-hidden":"true"}),"수정"]}),(0,s.jsx)("p",{className:"mi-field-note",children:"평생주식카페 회원인 경우에만 입력해주세요."})]})]}),A&&(0,s.jsxs)("p",{className:`mi-form-message ${A.includes("확인")||A.includes("입력")?"is-error":""}`,role:"status",children:[(0,s.jsx)(jo,{size:15,"aria-hidden":"true"}),A]}),l&&(0,s.jsxs)("div",{className:"mi-edit-actions",children:[(0,s.jsx)("button",{type:"button",className:"mi-cancel-button",onClick:Z,children:"수정 취소"}),(0,s.jsxs)("button",{type:"submit",className:"mi-primary-button",children:["저장하기 ",(0,s.jsx)($t,{size:16,"aria-hidden":"true"})]})]})]}),(0,s.jsxs)("div",{className:"mi-account-actions",children:[(0,s.jsxs)("button",{type:"button",onClick:()=>t({type:"logout"}),children:[(0,s.jsx)(Zn,{size:16,strokeWidth:1.65,"aria-hidden":"true"}),"로그아웃"]}),(0,s.jsxs)("button",{type:"button",className:"mi-withdraw-button",onClick:()=>t({type:"withdraw"}),children:[(0,s.jsx)(cl,{size:16,strokeWidth:1.65,"aria-hidden":"true"}),"회원탈퇴"]})]})]}),(0,s.jsxs)("section",{className:"mi-section mi-history-section","aria-labelledby":"mi-history-title",children:[(0,s.jsx)("div",{className:"mi-section-heading mi-history-heading",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mi-kicker",children:"PURCHASE HISTORY"}),(0,s.jsx)("h2",{id:"mi-history-title",children:"구매 영상 · 결제 내역"}),(0,s.jsx)("p",{children:"구매한 영상과 결제 내역을 한눈에 확인하세요."})]})}),(0,s.jsxs)("div",{className:"mi-history-grid",children:[(0,s.jsxs)("article",{className:"mi-history-card",children:[(0,s.jsxs)("div",{className:"mi-subheading",children:[(0,s.jsx)(En,{size:18,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsx)("h3",{children:"구매 영상"}),(0,s.jsx)("span",{children:I.length})]}),I.length?(0,s.jsx)("ul",{className:"mi-video-list",children:I.slice(0,4).map(q=>(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:q.title}),(0,s.jsxs)("time",{dateTime:q.date,children:[xq(q.date)," 구매"]})]}),q.videoId&&(0,s.jsxs)("a",{href:`/paidInfo#video=${encodeURIComponent(q.videoId)}`,children:["영상 보기 ",(0,s.jsx)(eo,{size:13,"aria-hidden":"true"})]})]},q.id))}):(0,s.jsx)(Js,{icon:En,title:"구매한 영상이 없습니다.",description:"구매한 교육 영상은 이곳에서 바로 확인할 수 있습니다."})]}),(0,s.jsxs)("article",{className:"mi-history-card",children:[(0,s.jsxs)("div",{className:"mi-subheading",children:[(0,s.jsx)(Pt,{size:18,strokeWidth:1.55,"aria-hidden":"true"}),(0,s.jsx)("h3",{children:"결제 내역"}),(0,s.jsx)("span",{children:e.purchases.length})]}),e.purchases.length?(0,s.jsx)("div",{className:"mi-table-wrap",children:(0,s.jsxs)("table",{className:"mi-payment-table",children:[(0,s.jsx)("caption",{children:"결제 내역"}),(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"결제일"}),(0,s.jsx)("th",{children:"상품"}),(0,s.jsx)("th",{children:"결제수단"}),(0,s.jsx)("th",{children:"상태"}),(0,s.jsx)("th",{children:"금액"})]})}),(0,s.jsx)("tbody",{children:e.purchases.slice(0,5).map(q=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:xq(q.date)}),(0,s.jsx)("td",{children:q.title}),(0,s.jsx)("td",{children:fV(q.method)}),(0,s.jsx)("td",{children:(0,s.jsx)("span",{className:`mi-payment-status ${q.status}`,children:q.status==="complete"?"완료":"입금 대기"})}),(0,s.jsxs)("td",{children:[Lf(q.amount),q.metadata&&(0,s.jsx)("button",{type:"button",className:"mi-payment-detail-button",onClick:()=>t({type:"notice",title:"결제 상세",message:[q.title,`결제 금액 ${Lf(q.amount)}`,q.metadata?.topupBenefit?`포인트 충전 ${Lf(q.metadata.topupBenefit.paid)} + 추가 ${Lf(q.metadata.topupBenefit.bonus)} = 총 ${Lf(q.metadata.topupBenefit.credited)}`:"",q.metadata?.cardParts?`여러 카드 분할결제
${q.metadata.cardParts.map((K,B)=>`${B+1}. ${K.company} · ${Lf(K.amount)} · ${K.installment}`).join(`
`)}`:"",q.metadata?.cashReceipt?`현금영수증 ${q.metadata.cashReceipt.type==="income"?"소득공제":"지출증빙"} · ${q.metadata.cashReceipt.maskedNumber} · 발급 신청 (입금 확인 후 처리)`:"",q.metadata?.bank?`입금 은행 ${q.metadata.bank}`:"","현재 내역은 임시 결제 흐름이며 실제 승인·발급은 발생하지 않습니다."].filter(Boolean).join(`
`)}),children:"상세 보기"})]})]},q.id))})]})}):(0,s.jsx)(Js,{icon:tl,title:"결제 내역이 없습니다.",description:"포인트 충전 및 서비스 결제 내역이 여기에 쌓입니다."})]})]})]})]})})}):(0,s.jsx)("div",{className:"willclub-page myinfo-page",children:(0,s.jsx)("main",{className:"mi-main mi-logged-out-main",children:(0,s.jsxs)("section",{className:"mi-signed-out","aria-labelledby":"mi-signed-out-title",children:[(0,s.jsx)("span",{children:(0,s.jsx)(Zn,{size:29,strokeWidth:1.35,"aria-hidden":"true"})}),(0,s.jsx)("p",{className:"mi-kicker",children:"LOCAL DESIGN MODE"}),(0,s.jsx)("h1",{id:"mi-signed-out-title",children:"로그아웃된 로컬 미리보기입니다."}),(0,s.jsx)("p",{children:"이 화면의 로그인 상태와 정보는 디자인 확인용으로만 관리됩니다."}),(0,s.jsxs)("button",{type:"button",className:"mi-primary-button",onClick:()=>o(!0),children:["마이페이지 계속 보기 ",(0,s.jsx)(ke,{size:16,"aria-hidden":"true"})]})]})})})}
export {Ls as OriginalAboutBody,ws as OriginalGuideBody,Ks as OriginalFreeInfoBody,eb as OriginalFreeArticleBody,js as OriginalPaidInfoBody,Os as OriginalVipBody,vu as OriginalSupportBody,Qs as OriginalEventsBody,zq as OriginalDialogs,Fs as OriginalMyInfoBody};

// 관리자와 같은 공개 카탈로그를 원본 영상 렌더러에 공급합니다.
export function setOriginalVideoLibrary(videos){So=Array.isArray(videos)?videos:[];nu.VIDEOS=So;}
