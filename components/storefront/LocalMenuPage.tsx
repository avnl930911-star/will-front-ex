'use client';

import { useEffect, useState } from 'react';
import { ChevronRight, RefreshCw } from 'lucide-react';
import type { PublicArticle, PublicMenuData, PublicProduct } from './menu-data';
import { localPages } from './site-navigation';
import { SiteFooter, SiteHeader } from './components/SiteChrome';
import { LoginDialog } from './components/VideoDialogs';

interface LocalMenuPageProps {
  path: string;
}

type SupportPath = '/support/notice' | '/support/faq' | '/support/event';
type SupportKind = 'notice' | 'faq' | 'event';

const supportTabs: Array<{ path: SupportPath; label: string; kind: SupportKind }> = [
  { path: '/support/notice', label: '공지사항', kind: 'notice' },
  { path: '/support/faq', label: '자주 묻는 질문', kind: 'faq' },
  { path: '/support/event', label: '이벤트', kind: 'event' },
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isArticle(value: unknown): value is PublicArticle {
  return isRecord(value) && ['id', 'title', 'date', 'category', 'content'].every(key => typeof value[key] === 'string');
}

function isProduct(value: unknown): value is PublicProduct {
  return isRecord(value)
    && ['id', 'title', 'expert', 'content', 'status'].every(key => typeof value[key] === 'string')
    && ['amount', 'monthlyAmount', 'baseMonths', 'bonusMonths'].every(key => typeof value[key] === 'number');
}

function isPublicMenuData(value: unknown): value is PublicMenuData {
  if (!isRecord(value)) return false;
  const company = value.company;
  const articles = value.articles;
  if (!isRecord(company) || !isRecord(articles)) return false;
  const companyFields = ['name', 'siteName', 'description', 'phone', 'email', 'businessNumber', 'address'];
  const articleKinds = ['notice', 'faq', 'event'];
  return companyFields.every(key => typeof company[key] === 'string')
    && Array.isArray(value.products)
    && value.products.every(isProduct)
    && articleKinds.every(kind => Array.isArray(articles[kind]) && articles[kind].every(isArticle));
}

function responseMessage(value: unknown, fallback: string) {
  if (isRecord(value) && isRecord(value.error) && typeof value.error.message === 'string') return value.error.message;
  return fallback;
}

function monthlyPrice(amount: number) {
  return Number.isFinite(amount) ? `월 ${new Intl.NumberFormat('ko-KR').format(amount)}원` : '월 이용료 정보 없음';
}

function productPeriod(product: PublicProduct) {
  const periods = [
    product.baseMonths > 0 ? `기본 ${product.baseMonths}개월` : '',
    product.bonusMonths > 0 ? `추가 ${product.bonusMonths}개월` : '',
  ].filter(Boolean);
  return periods.length > 0 ? periods.join(' · ') : '기간 정보 없음';
}

function MenuHeading({ path }: { path: string }) {
  const page = localPages[path] ?? { title: '윌클럽', description: '서비스 정보를 확인하세요.' };
  return <>
    <div className="breadcrumb"><span>홈</span><ChevronRight size={12} /><span>{page.title}</span></div>
    <div className="page-heading wc-local-heading">
      <div>
        <p className="eyebrow">WILLCLUB</p>
        <h1>{page.title}<span className="title-dot">.</span></h1>
        <p>{page.description}</p>
      </div>
    </div>
  </>;
}

function CompanyPage({ data }: { data: PublicMenuData }) {
  const company = data.company;
  const entries = [
    ['회사명', company.name],
    ['소개', company.description],
    ['대표 전화', company.phone],
    ['이메일', company.email],
    ['사업자등록번호', company.businessNumber],
    ['주소', company.address],
  ];
  return <section className="wc-local-panel wc-local-company" aria-label="회사 정보">
    <dl className="wc-local-definition-list">
      {entries.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || '-'}</dd></div>)}
    </dl>
  </section>;
}

function GuidePage() {
  return <div className="wc-local-guide">
    <section className="wc-local-panel"><p className="wc-local-step">01</p><h2>영상 선택</h2><p><a href="/paidInfo">주식 교육 영상</a>에서 관심 있는 주제와 전문가의 영상을 선택해 보세요.</p></section>
    <section className="wc-local-panel"><p className="wc-local-step">02</p><h2>무료 시청</h2><p><a href="/freeInfo">무료주식정보</a>에서 공개된 영상부터 편하게 시청할 수 있습니다.</p></section>
    <section className="wc-local-panel"><p className="wc-local-step">03</p><h2>유료 이용과 회원 연결</h2><p>유료 영상은 구매 후 시청 권한이 필요합니다. <a href="/vip">VIP 회원가입</a>과 <a href="/support/faq">자주 묻는 질문</a>에서 이용·운영 절차를 확인하세요.</p></section>
  </div>;
}

function VipPage({ data }: { data: PublicMenuData }) {
  return <>
    {data.products.length > 0 ? <div className="wc-local-product-list">
      {data.products.map(product => <article className="wc-local-product" key={product.id}>
        <h2>{product.title}</h2>
        <dl className="wc-local-product-meta">
          <div><dt>전문가</dt><dd>{product.expert}</dd></div>
          <div><dt>월 이용료</dt><dd>{monthlyPrice(product.monthlyAmount)}</dd></div>
          <div><dt>이용 기간</dt><dd>{productPeriod(product)}</dd></div>
        </dl>
        <p className="wc-local-copy">{product.content}</p>
        <a className="primary-button wc-local-cta" href="/login">로그인 후 이용 안내 보기</a>
      </article>)}
    </div> : <EmptyState message="현재 공개된 VIP 상품이 없습니다." />}
    <p className="wc-local-provider-note">실제 회원가입과 결제는 현재 연결되어 있지 않습니다. 이용을 위해서는 결제 제공자 설정이 필요합니다.</p>
  </>;
}

function SupportPage({ data, path }: { data: PublicMenuData; path: SupportPath }) {
  const current = supportTabs.find(tab => tab.path === path) ?? supportTabs[0];
  const articles = data.articles[current.kind];
  return <>
    <nav className="wc-local-tabs" aria-label="고객센터 메뉴">
      {supportTabs.map(tab => <a key={tab.path} href={tab.path} aria-current={tab.path === path ? 'page' : undefined}>{tab.label}</a>)}
    </nav>
    {articles.length > 0 ? <div className="wc-local-article-list">
      {articles.map(article => <article className="wc-local-article" key={article.id}>
        <details>
          <summary>
            <span className="wc-local-article-title">{article.title}</span>
            <span className="wc-local-article-meta"><span>{article.category}</span><time dateTime={article.date}>{article.date}</time></span>
          </summary>
          <p className="wc-local-article-content">{article.content}</p>
        </details>
      </article>)}
    </div> : <EmptyState message={`등록된 공개 ${current.label}이 없습니다.`} />}
  </>;
}

function LoginPage() {
  return <section className="wc-local-panel wc-local-login">
    <h2>로그인이 필요하신가요?</h2>
    <p>이 프로젝트에 연결된 인증 서비스로 로그인할 수 있습니다.</p>
    <a className="primary-button wc-local-cta" href="/auth/login">로그인</a>
    <p className="wc-local-provider-note">OAuth 또는 인증 어댑터 설정이 제공되지 않은 환경에서는 실제 로그인을 위해 인증 설정이 필요합니다.</p>
  </section>;
}

function EmptyState({ message }: { message: string }) {
  return <section className="wc-local-empty"><p>{message}</p></section>;
}

function LocalContent({ data, path }: { data: PublicMenuData; path: string }) {
  if (path === '/about') return <CompanyPage data={data} />;
  if (path === '/guide') return <GuidePage />;
  if (path === '/vip') return <VipPage data={data} />;
  if (path === '/login') return <LoginPage />;
  if (path === '/support/notice' || path === '/support/faq' || path === '/support/event') return <SupportPage data={data} path={path} />;
  return <EmptyState message="요청하신 페이지를 찾을 수 없습니다." />;
}

export default function LocalMenuPage({ path }: LocalMenuPageProps) {
  const [data, setData] = useState<PublicMenuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [readError, setReadError] = useState('');
  const [retry, setRetry] = useState(0);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    let disposed = false;
    const loadMenu = async () => {
      setLoading(true);
      setReadError('');
      try {
        const response = await fetch('/api/public/menu', { cache: 'no-store' });
        const result: unknown = await response.json().catch(() => null);
        if (!response.ok || !isPublicMenuData(result)) {
          throw new Error(responseMessage(result, '공개 메뉴 정보를 불러오지 못했습니다.'));
        }
        if (!disposed) setData(result);
      } catch (cause) {
        if (!disposed) setReadError(cause instanceof Error ? cause.message : '공개 메뉴 정보 연결 오류');
      } finally {
        if (!disposed) setLoading(false);
      }
    };
    void loadMenu();
    return () => { disposed = true; };
  }, [retry]);

  return <><div className="willclub-page">
    <SiteHeader onLogin={() => setLogin(true)} activePath={path} />
    <main className="wc-container page-main wc-local-main">
      <MenuHeading path={path} />
      {loading && !data ? <section className="wc-local-loading" role="status"><span className="sr-only">공개 메뉴 정보를 불러오는 중입니다.</span><span /><span /><span /></section> : <>
        {readError && <section className="wc-local-read-error" role="alert"><p>{readError}</p><button type="button" onClick={() => setRetry(value => value + 1)} disabled={loading}><RefreshCw size={16} />다시 시도</button></section>}
        {data ? <LocalContent data={data} path={path} /> : <EmptyState message="공개 메뉴 정보를 확인하지 못했습니다." />}
      </>}
    </main>
    {login && <LoginDialog onClose={() => setLogin(false)} />}
  </div><SiteFooter /></>;
}
