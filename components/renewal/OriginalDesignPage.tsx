'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { OriginalHeader } from './OriginalHome';
import { OriginalAboutBody, OriginalGuideBody, OriginalFreeInfoBody, OriginalFreeArticleBody, OriginalPaidInfoBody, OriginalVipBody, OriginalSupportBody, OriginalEventsBody, OriginalDialogs, OriginalMyInfoBody, setOriginalVideoLibrary } from './OriginalContentPages';
import { RenewalContext } from './context';
import SharedOriginalFooter from './SharedOriginalFooter';
import assets from './assets.json';
import { readApiJson } from '@/lib/http-json';
import type { Video } from '@/components/storefront/data';
import { useOriginalActions } from './useOriginalActions';

export default function OriginalDesignPage({ path }: { path: string }) {
  const actions = useOriginalActions();
  const [location, setLocation] = useState({ search: '', hash: '' });
  const [catalogVersion, setCatalogVersion] = useState(0);
  useEffect(() => {
    const update = () => setLocation({ search: window.location.search, hash: window.location.hash });
    update(); window.addEventListener('hashchange', update); window.addEventListener('popstate', update);
    return () => { window.removeEventListener('hashchange', update); window.removeEventListener('popstate', update); };
  }, [path]);
  useEffect(() => {
    if (path !== '/paidInfo') return;
    let disposed = false; let previous = ''; let refreshing = false; let controller: AbortController | null = null;
    const refresh = async () => {
      if (refreshing) return;
      refreshing = true; controller?.abort(); controller = new AbortController();
      try {
        const response = await fetch('/api/catalog', { cache: 'no-store', signal: controller.signal });
        const result = await readApiJson<{ items?: Video[]; error?: { message?: string } }>(response);
        if (!response.ok || !Array.isArray(result.items)) throw new Error(result.error?.message || '교육영상 목록을 불러오지 못했습니다.');
        const next = JSON.stringify(result.items);
        if (!disposed && next !== previous) { previous = next; setOriginalVideoLibrary(result.items); setCatalogVersion(v => v + 1); }
      } catch (error) {
        if (!disposed) actions.openModal({ type: 'notice', title: '영상 연결 안내', message: error instanceof Error ? error.message : '교육영상 서버 연결을 확인해주세요.' });
      } finally { refreshing = false; }
    };
    const visible = () => { if (document.visibilityState === 'visible') void refresh(); };
    void refresh(); window.addEventListener('focus', refresh); document.addEventListener('visibilitychange', visible);
    return () => { disposed = true; controller?.abort(); window.removeEventListener('focus', refresh); document.removeEventListener('visibilitychange', visible); };
  }, [path, actions.openModal]);

  const params = new URLSearchParams(location.search);
  new URLSearchParams(location.hash.replace(/^#/, '')).forEach((value, key) => params.set(key, value));
  const post = params.get('post') || params.get('id') || (path.startsWith('/freeInfo/articles/') ? decodeURIComponent(path.slice('/freeInfo/articles/'.length)) : '');
  const event = params.has('page') && params.get('page') === 'event' ? params.get('event') || undefined : params.get('event') || (path.startsWith('/support/event/') ? decodeURIComponent(path.slice('/support/event/'.length)) : undefined);
  const headerPath = path.startsWith('/freeInfo/') ? '/freeInfo' : path.startsWith('/support/event/') ? '/support/event' : path;
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const link = e.target instanceof Element ? e.target.closest('a') : null;
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (link.getAttribute('href') === '/login') { e.preventDefault(); actions.openModal({ type: 'login' }); }
    if (link.getAttribute('href') === '#live-chat') { e.preventDefault(); actions.openModal({ type: 'contact' }); }
    if (link.textContent?.includes('회원가입하기')) { e.preventDefault(); actions.openModal({ type: 'notice', title: '회원가입', message: '회원가입 화면은 변경하지 않습니다. 기존 윌클럽 사이트에서 이용해주세요.' }); }
  };
  return <RenewalContext.Provider value={actions}>
    <div className="renewal-main" onClick={handleClick}><div className="experience-site">
      <OriginalHeader current={headerPath} assets={assets} />
      <div className="ex-page-content">
        {path === '/about' && <OriginalAboutBody />}
        {path === '/guide' && <OriginalGuideBody />}
        {(path === '/freeInfo' || path.startsWith('/freeInfo/articles/')) && (post ? <OriginalFreeArticleBody id={post} onBack={() => window.location.assign('/freeInfo')} /> : <OriginalFreeInfoBody />)}
        {path === '/paidInfo' && <OriginalPaidInfoBody key={catalogVersion} embedded />}
        {path === '/vip' && <OriginalVipBody standalone imageAssets={assets} onContinue={actions.openVipPayment} onLogin={() => actions.openModal({ type: 'login' })} />}
        {(path === '/support/notice' || path === '/support/faq') && <OriginalSupportBody posts={undefined} now={undefined} category={path.endsWith('/faq') ? 'faq' : 'notice'} embedded imageAssets={assets} onLogin={() => actions.openModal({ type: 'login' })} />}
        {(path === '/support/event' || path.startsWith('/support/event/')) && <OriginalEventsBody assets={assets} selectedId={event} />}
        {path === '/myInfo' && actions.state.loggedIn && <OriginalMyInfoBody />}
        {(path === '/login' || (path === '/myInfo' && !actions.state.loggedIn)) && <div className="willclub-page ex-login-page"><h1>{path === '/myInfo' ? '내 정보' : '로그인'}</h1><p>로그인 후 회원 정보를 확인할 수 있습니다.</p><button className="ex-primary" onClick={() => actions.openModal({ type: 'login' })}>로그인</button></div>}
      </div>
      <SharedOriginalFooter />
      <OriginalDialogs assets={assets} />
    </div></div>
  </RenewalContext.Provider>;
}
