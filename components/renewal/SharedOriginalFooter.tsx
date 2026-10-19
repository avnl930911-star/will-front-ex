'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { OriginalFooter } from './OriginalHome';
import { RenewalContext, type RenewalMessage } from './context';
import assets from './assets.json';
import { useSiteSupport } from '@/components/support/SiteSupport';

export default function SharedOriginalFooter() {
  const router = useRouter();
  const { openChat } = useSiteSupport();
  const [message, setMessage] = useState<RenewalMessage | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const openModal = useCallback((request: RenewalMessage) => {
    if (request.type === 'contact') { openChat(); return; }
    if (request.type === 'login') { router.push('/login'); return; }
    setMessage(request);
  }, [openChat, router]);
  useEffect(() => { if (message && dialog.current && !dialog.current.open) dialog.current.showModal(); }, [message]);
  return <RenewalContext.Provider value={{ state: { loggedIn: false }, openModal }}>
    <div className="renewal-main" style={{ display: 'contents' }}>
      <div className="experience-site" style={{ display: 'contents' }}>
        <OriginalFooter assets={assets} />
        {message && <dialog className="ex-dialog" ref={dialog} onCancel={() => setMessage(null)} onClose={() => setMessage(null)}>
          <button type="button" className="ex-dialog-close" aria-label="닫기" onClick={() => setMessage(null)}><X size={21} /></button>
          <h2>{message.title}</h2>
          <p className="ex-message">{message.message}</p>
        </dialog>}
      </div>
    </div>
  </RenewalContext.Provider>;
}
