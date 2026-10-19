'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useSiteSupport } from './SiteSupport';

export interface SupportMenuProps {
  active?: boolean;
  onNavigate?: () => void;
}

export function SupportMenu({ active = false, onNavigate }: SupportMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const { openChat } = useSiteSupport();

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const navigate = () => {
    setIsOpen(false);
    onNavigate?.();
  };

  const openSupportChat = () => {
    navigate();
    openChat();
  };

  return (
    <div className="ex-support wc-support-nav">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className={active ? 'active' : undefined}
        onClick={() => setIsOpen((open) => !open)}
      >
        고객센터 <ChevronDown size={13} />
      </button>
      {isOpen && (
        <div id={menuId}>
          <Link href="/support/notice" onClick={navigate}>공지사항</Link>
          <Link href="/support/faq" onClick={navigate}>자주 묻는 질문</Link>
          <Link href="/support/event" onClick={navigate}>이벤트</Link>
          <button type="button" onClick={openSupportChat}>실시간 상담센터</button>
        </div>
      )}
    </div>
  );
}
