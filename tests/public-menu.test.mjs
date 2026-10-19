import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPublicMenu } from '../server/public-menu.mjs';

test('고객 메뉴에는 공개 회사·상품·지원 게시글만 반환한다', () => {
  const state={records:{
    general:[{company:'윌클럽 회사',siteName:'윌클럽',description:'<p>회사 소개</p>',phone:'대표 전화',email:'company@example.test',businessNumber:'사업자번호',address:'회사 주소',accountNumber:'private-bank-value',bank:'private-bank'}],
    members:[{phone:'private-member-phone',email:'private-member-email'}],staff:[{password:'private-password'}],
    videos:[{videoUrl:'private-video-url'}],
    products:[{id:'p1',title:'공개 상품',display:true,visible:'판매중',amount:600000,monthlyAmount:600000,baseMonths:1,bonusMonths:0,content:'<p>상품 안내</p>',telegram:'private-telegram'},
      {id:'p2',title:'숨긴 상품',display:false,visible:'판매중'}, {id:'p3',title:'중단 상품',display:true,visible:'판매중단'}],
    articles:[{id:'a1',title:'공개 공지',board:'공지사항',visibility:'공개',date:'2026-10-19',category:'전체',content:'<p>첫 문단</p><p>둘째 문단</p><script>private-script</script>'},
      {id:'a2',title:'숨긴 공지',board:'공지사항',visibility:'비공개'}, {id:'a3',title:'전문가 게시글',board:'골드마스터 게시판',visibility:'공개'}],
  }};
  const result=buildPublicMenu(state);
  assert.equal(result.company.name,'윌클럽 회사');assert.equal(result.products.length,1);assert.equal(result.products[0].title,'공개 상품');
  assert.equal(result.articles.notice.length,1);assert.equal(result.articles.notice[0].content,'첫 문단\n둘째 문단');
  assert.deepEqual(result.articles.faq,[]);assert.deepEqual(result.articles.event,[]);
  const serialized=JSON.stringify(result);
  for(const privateValue of ['private-bank','private-member','private-password','private-video','private-telegram','private-script','전문가 게시글','숨긴 공지','숨긴 상품','중단 상품'])assert.equal(serialized.includes(privateValue),false,privateValue);
});

test('빈 공개 데이터에도 내부 메뉴 계약을 유지한다',()=>{
  const result=buildPublicMenu({records:{}});
  assert.equal(result.company.name,'');assert.deepEqual(result.products,[]);
  assert.deepEqual(result.articles,{notice:[],faq:[],event:[]});
});
