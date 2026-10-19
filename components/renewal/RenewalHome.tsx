'use client';
import { useEffect, useState, type MouseEvent } from 'react';
import { OriginalHomeBody, OriginalHeader } from './OriginalHome';
import { OriginalDialogs } from './OriginalContentPages';
import { RenewalContext } from './context';
import assets from './assets.json';
import SharedOriginalFooter from './SharedOriginalFooter';
import { readApiJson } from '@/lib/http-json';
import type { Video } from '@/components/storefront/data';
import { useOriginalActions } from './useOriginalActions';

export default function RenewalHome() {
  const actions = useOriginalActions();
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    let disposed = false; let controller: AbortController | null = null; let refreshing = false;
    const refresh = async () => {
      if (refreshing) return;
      refreshing = true; controller?.abort(); controller = new AbortController();
      try {
        const response = await fetch('/api/catalog', { cache: 'no-store', signal: controller.signal });
        const result = await readApiJson<{ items?: Video[] }>(response);
        if (!response.ok || !Array.isArray(result.items)) return;
        if (!disposed) setVideos(result.items);
      } catch { /* API 실패 시 원본 빈 슬롯을 유지합니다. */ }
      finally { refreshing = false; }
    };
    const whenVisible = () => { if (document.visibilityState === 'visible') void refresh(); };
    void refresh(); window.addEventListener('focus', refresh); document.addEventListener('visibilitychange', whenVisible);
    return () => { disposed = true; controller?.abort(); window.removeEventListener('focus', refresh); document.removeEventListener('visibilitychange', whenVisible); };
  }, []);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const link = event.target instanceof Element ? event.target.closest('a') : null;
    if (link?.getAttribute('href') === '#live-chat') { event.preventDefault(); actions.openModal({ type: 'contact' }); }
    if (link?.textContent?.includes('회원가입하기')) { event.preventDefault(); actions.openModal({ type: 'notice', title: '회원가입', message: '회원가입 화면은 변경하지 않습니다. 기존 윌클럽 사이트에서 이용해주세요.' }); }
  };
  return <RenewalContext.Provider value={actions}>
    <div className="renewal-main" onClick={handleClick}><div className="experience-site">
      <OriginalHeader current="/" assets={assets} />
      <div className="ex-page-content"><OriginalHomeBody videos={videos} imageAssets={assets} /></div>
      <SharedOriginalFooter />
      <OriginalDialogs assets={assets} />
    </div></div>
  </RenewalContext.Provider>;
}
