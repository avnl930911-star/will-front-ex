'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp, Headphones, MessageCircle, X } from 'lucide-react';

const SiteSupportContext = createContext({ openChat: () => {} });
export function useSiteSupport() { return useContext(SiteSupportContext); }

function ContactDialog({ close }: { close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (ref.current && !ref.current.open) ref.current.showModal(); }, []);
  return <dialog className="ex-dialog" ref={ref} onCancel={close} onClose={close} onClick={event => { if (event.target === event.currentTarget) close(); }}>
    <button type="button" className="ex-dialog-close" onClick={close} aria-label="닫기"><X size={21} /></button>
    <h2>실시간 상담센터</h2>
    <div className="ex-live-chat-status">
      <span className="ex-live-chat-icon" aria-hidden="true"><Headphones size={26} strokeWidth={1.5} /><MessageCircle size={17} strokeWidth={1.7} /></span>
      <p className="ex-message">상담 가능 시간과 연결 상태를 확인해주세요.</p>
      <p className="ex-helper">상담 연결은 준비 중입니다.</p>
    </div>
  </dialog>;
}

export function SiteSupportProvider({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const openChat = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  useEffect(() => { setOpen(false); }, [path]);
  const publicPage = path !== null && !path.startsWith('/admin');
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const link = event.target instanceof Element ? event.target.closest('a') : null;
    if (link?.getAttribute('href') === '#live-chat') { event.preventDefault(); openChat(); }
  };
  return <SiteSupportContext.Provider value={{ openChat }}>
    {children}
    {publicPage && <div className="renewal-main site-support-ui" style={{ display: 'contents' }} onClick={handleClick}>
      <div className="experience-site" style={{ display: 'contents' }}>
        <button className="directive-back-to-top" type="button" aria-label="페이지 맨 위로" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><ArrowUp size={22} aria-hidden="true" /></button>
        <a href="#live-chat" className="hm-floating-contact" aria-label="실시간 상담센터 열기"><Headphones size={21} strokeWidth={1.6} /><span>실시간 상담센터</span></a>
        {open && <ContactDialog close={close} />}
      </div>
    </div>}
  </SiteSupportContext.Provider>;
}
