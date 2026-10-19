import { randomUUID } from 'node:crypto';

const sameExpert=(value,expert)=>value===expert;
const owned=(domain,row,expert)=>domain==='videos'?sameExpert(row.expert,expert):(row.board ? row.board===expert+' 게시판'&&(!row.expert||sameExpert(row.expert,expert)) : sameExpert(row.expert,expert));

/** 담당 데이터만 서버 원본에 병합합니다. 전문가에게 보이지 않는 필드는 덮어쓰지 않습니다. */
export function mergeExpertRecords(source, expert, incoming) {
  if(!incoming || !Array.isArray(incoming.videos) || !Array.isArray(incoming.articles)) throw Object.assign(new Error('전문가 영상과 게시글 목록이 필요합니다.'),{status:400});
  const next=structuredClone(source);
  for(const domain of ['videos','articles']){
    const rows=incoming[domain];
    if(rows.length>2000)throw Object.assign(new Error('한 번에 저장할 수 있는 항목 수를 초과했습니다.'),{status:400});
    const all=source.records[domain]||[];
    const ids=new Set();
    const merged=rows.map(row=>{
      if(!row || typeof row.id!=='string'||!row.id||ids.has(row.id)||!owned(domain,row,expert))throw Object.assign(new Error('담당 전문가의 항목만 저장할 수 있습니다.'),{status:403});
      ids.add(row.id);
      const original=all.find(r=>r.id===row.id);
      if(original && !owned(domain,original,expert))throw Object.assign(new Error('다른 전문가의 항목은 수정할 수 없습니다.'),{status:403});
      // 전화/이메일 같은 숨겨진 서버 필드는 원본에서 보존합니다.
      const value={...original,...row};
      if(original && domain==='videos'){
        value.views=original.views??0;value.purchases=original.purchases??0;
      }
      return value;
    });
    next.records[domain]=[...all.filter(row=>!owned(domain,row,expert)),...merged];
  }
  next.logs=[{id:randomUUID(),date:new Date().toISOString(),action:'전문가 담당 콘텐츠 저장',domain:'videos/articles',target:expert},...(source.logs||[])].slice(0,500);
  return next;
}
