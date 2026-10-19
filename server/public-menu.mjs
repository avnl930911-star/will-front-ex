const text=value=>typeof value==='string'?value:String(value??'');
const plain=value=>text(value).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,'').replace(/<\/(p|div|li|h[1-6])\s*>|<br\s*\/?\s*>/gi,'\n').replace(/<[^>]*>/g,'').replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').trim();
const number=value=>Number.isFinite(Number(value))?Number(value):0;

/** 메뉴 연결용 공개 데이터. 전체 관리자 상태/회원/운영진/계좌/원본 영상 URL은 반환하지 않습니다. */
export function buildPublicMenu(state){
  const records=state.records||{};
  const company=(records.general||[])[0]||{};
  const boards={notice:'공지사항',faq:'자주묻는질문',event:'이벤트'};
  const articles=Object.fromEntries(Object.entries(boards).map(([key,board])=>[key,
    (records.articles||[]).filter(row=>row.board===board && row.visibility==='공개')
      .map(row=>({id:text(row.id),title:text(row.title),date:text(row.date),category:text(row.category),content:plain(row.content)}))]));
  const products=(records.products||[]).filter(row=>row.display!==false && row.display!=='숨김' && !['숨김','비공개','판매중지','판매중단','판매종료'].includes(text(row.visible)))
    .map(row=>({id:text(row.id),title:text(row.title),expert:text(row.expert),amount:number(row.amount),monthlyAmount:number(row.monthlyAmount),baseMonths:number(row.baseMonths),bonusMonths:number(row.bonusMonths),content:plain(row.content),status:text(row.visible)}));
  return {
    company:{name:text(company.company),siteName:text(company.siteName),description:plain(company.description),phone:text(company.phone),email:text(company.email),businessNumber:text(company.businessNumber),address:text(company.address)},
    products,articles,
  };
}
