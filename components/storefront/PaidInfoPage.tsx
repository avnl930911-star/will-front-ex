'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, ChevronRight, BookOpen, SearchX, SlidersHorizontal } from 'lucide-react';
import { experts, tabs, categories, matchesTab, type TabId, type Video } from './data';
import { videoFromHash, videoHash } from './navigation';
import { SiteHeader, SiteFooter } from './components/SiteChrome';
import { VideoRail } from './components/VideoRail';
import { VideoDetail, DetailVideoLibrary } from './components/VideoDetail';
import { LoginDialog, PurchaseDialog } from './components/VideoDialogs';
import { readApiJson } from '@/lib/http-json';


interface PaidInfoPageProps { embedded?: boolean; initialTab?: TabId; menuPath?: string; pageTitle?: string }

export default function PaidInfoPage({ embedded = false, initialTab = 'all', menuPath = '/paidInfo', pageTitle = '주식 교육 영상' }: PaidInfoPageProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loadError, setLoadError] = useState('');
  const [retry, setRetry] = useState(0);
  const [tab, setTab] = useState<TabId>(initialTab);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('latest');
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Video | null>(null);
  const [purchase, setPurchase] = useState(false);
  const [login, setLogin] = useState(false);
  const listScroll = useRef(0);
  useEffect(() => {

    const syncPage = () => {
      const video = videoFromHash(window.location.hash, videos);
      setSelected(video);
      setPurchase(false);
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: video ? 0 : listScroll.current, behavior: 'instant' });
        if (video) document.getElementById('video-detail-title')?.focus({ preventScroll: true });
      });
    };
    syncPage();
    window.addEventListener('hashchange', syncPage);
    return () => {
      window.removeEventListener('hashchange', syncPage);
    };
  }, [videos]);

  useEffect(() => {
    let disposed = false;
    const refresh = async () => {
      try {
        const response = await fetch('/api/catalog', { cache: 'no-store' });
        const result = await readApiJson<{ items?: Video[]; error?: { message?: string } }>(response, '영상 목록을 불러오지 못했습니다.');
        if (!response.ok || !Array.isArray(result.items)) throw new Error(result.error?.message || '영상 목록을 불러오지 못했습니다.');
        if (!disposed) { setVideos(result.items); setLoadError(''); }
      } catch (cause) { if (!disposed) setLoadError(cause instanceof Error ? cause.message : '영상 목록 연결 오류'); }
      finally { if (!disposed) setLoading(false); }
    };
    void refresh();
    const whenVisible = () => { if (document.visibilityState === 'visible') void refresh(); };
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', whenVisible);
    return () => { disposed = true; window.removeEventListener('focus', refresh); document.removeEventListener('visibilitychange', whenVisible); };
  }, [retry]);

  const selectVideo = (video: Video) => {
    if (!selected) listScroll.current = window.scrollY;
    if (selected?.id === video.id) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('video-detail-title')?.focus({ preventScroll: true });
      return;
    }
    window.location.hash = videoHash(video);
  };
  const returnToList = () => { window.location.hash = ''; };
  const filtered = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase('ko-KR');
    return videos.filter(video => matchesTab(video, tab) && (!keyword || `${video.title} ${video.summary} ${experts[video.expert].name} ${categories.find(c => c.id === video.sub)?.label}`.toLocaleLowerCase('ko-KR').includes(keyword)))
      .sort((a, b) => sort === 'popular' ? b.views - a.views : Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  }, [videos, tab, query, sort]);
  const grouped = useMemo(() => categories.map(category => ({
    category: category.id,
    items: filtered.filter(video => video.sub === category.id),
  })), [filtered]);
  const allGroups = useMemo(() => {
    const ordered = [...videos].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
    return categories.map(category => ({ category: category.id, items: ordered.filter(video => video.sub === category.id) }));
  }, [videos]);
  const expert = tab === 'goldmaster' || tab === 'ggotge' ? experts[tab] : null;
  const title = expert ? expert.name : tab === 'free' ? '첫 투자, 좋은 배움으로 시작하세요.' : '시장을 읽는 안목,\n투자의 기준이 되다.';

  return <><div className="willclub-page">
    {!embedded && <SiteHeader onLogin={() => setLogin(true)} activePath={menuPath} />}
    <main className={`wc-container page-main ${selected ? 'detail-page-main' : ''}`}>
      {loadError && <p className="wc-live-error" role="alert">{loadError}<button onClick={() => { setLoading(true); setRetry(v => v + 1); }}>다시 불러오기</button></p>}
      {selected ? <>
        <VideoDetail video={selected} onBack={returnToList} onPurchase={() => setPurchase(true)} />
        <DetailVideoLibrary groups={allGroups} onSelect={selectVideo} />
      </> : <>
        <div className="breadcrumb"><span>홈</span><ChevronRight size={12} /><span>{pageTitle}</span></div>
        <div className="page-heading"><div><p className="eyebrow">WILLCLUB LEARNING</p><h1>{pageTitle}<span className="title-dot">.</span></h1><p>투자를 배우는 시간, 더 나은 선택의 시작.</p></div>
          <label className="search-field"><Search size={19} strokeWidth={1.6} /><input aria-label="영상 검색" type="search" placeholder="궁금한 주제나 전문가를 검색해보세요" value={query} onChange={e => setQuery(e.target.value)} />{query && <button className="search-clear" aria-label="검색어 지우기" onClick={() => setQuery('')}><X size={15} /></button>}<kbd aria-hidden="true">검색</kbd></label>
        </div>
        <nav className="video-tabs" aria-label="영상 필터">{tabs.map(item => <button key={item.id} className={`video-tab ${tab === item.id ? 'active' : ''}`} aria-pressed={tab === item.id} onClick={() => setTab(item.id)}>{item.id === 'all' && <BookOpen size={16} strokeWidth={1.7} />}{item.label}<span>{videos.filter(video => matchesTab(video, item.id)).length}</span></button>)}</nav>
        {!query.trim() && <section className={`learning-banner ${expert ? 'expert-banner' : ''} ${tab === 'ggotge' ? 'ggotge-banner' : ''}`} key={tab}>
          <div className="banner-copy"><p className="banner-eyebrow"><span />{expert ? 'WILLCLUB EXPERT' : tab === 'free' ? 'LEARN, GROW, TOGETHER' : 'A BETTER PERSPECTIVE ON INVESTING'}</p><h2>{title}</h2></div>
          <div className="banner-art" aria-hidden="true"><span className="art-circle circle-one" /><span className="art-circle circle-two" /><span className="art-ring" /><span className="banner-monogram">{expert ? (tab === 'goldmaster' ? 'G' : 'C') : 'W'}</span><div className="art-caption"><span>INSIGHT MAKES</span><span>THE DIFFERENCE.</span></div><span className="art-index">{tab === 'goldmaster' ? '01' : tab === 'ggotge' ? '02' : 'WILLCLUB CLASS'}</span></div>
        </section>}
        <div className="library-toolbar"><div aria-live="polite">{query.trim() ? <><strong>“{query.trim()}”</strong> 검색 결과 <b>{filtered.length}</b>개</> : <><span className="toolbar-dot" />{expert ? `${expert.name}의 인사이트를 만나보세요` : tab === 'free' ? '배움의 시작을 응원하는 무료 클래스' : '나에게 맞는 전문가의 강의를 만나보세요'}<span className="total-count">총 {filtered.length}개 영상</span></>}</div><label className="sort-label"><SlidersHorizontal size={13} /><select aria-label="영상 정렬" value={sort} onChange={e => setSort(e.target.value)}><option value="latest">최신순</option><option value="popular">인기순</option></select></label></div>
        {loading ? <div className="loading-grid" role="status" aria-label="영상을 불러오는 중"><span className="sr-only">영상을 불러오는 중입니다.</span>{[1, 2, 3, 4].map(i => <div className="skeleton-card" key={i}><div /><span /><span /></div>)}</div> : filtered.length === 0 ? <section className="empty-state"><span><SearchX size={35} strokeWidth={1.2} /></span><h2>찾으시는 영상이 아직 없어요.</h2><p>다른 검색어를 입력하거나 전체 영상을 확인해보세요.</p><button className="primary-button" onClick={() => { setQuery(''); setTab('all'); }}>전체 영상 보기 <ChevronRight size={16} /></button></section> : <div className="video-library">{grouped.map(({ category, items }) => items.length > 0 ? <VideoRail key={category} category={category} items={items} onSelect={selectVideo} /> : null)}</div>}
      </>}
      <div className="learning-note"><BookOpen size={20} strokeWidth={1.5} /><div><strong>좋은 투자의 시작은, 좋은 배움입니다.</strong><p>윌클럽 전문가와 함께 시장을 이해하고 나만의 투자 기준을 쌓아가세요.</p></div><span>WILLCLUB</span></div>
    </main>
    {selected && purchase && <PurchaseDialog key={selected.id} video={selected} onClose={() => setPurchase(false)} />}
    {login && <LoginDialog onClose={() => setLogin(false)} />}
  </div>{!embedded && <SiteFooter />}</>;
}
