import { useState } from 'react';
import Link from 'next/link';
import { LogIn, Menu, X } from 'lucide-react';
import { asset } from '../data';
import { publicMenus } from '../site-navigation';
import { SupportMenu } from '../../support/SupportMenu';
import SharedOriginalFooter from '../../renewal/SharedOriginalFooter';

export function SiteHeader({ onLogin, activePath = '/paidInfo' }: { onLogin: () => void; activePath?: string }) {
  const [menu, setMenu] = useState(false);
  const isActive = (path: string) => path.startsWith('/support/') ? activePath.startsWith('/support/') : path === activePath;
  return <header className="wc-header">
    <div className="wc-container header-inner">
      <Link href="/" className="brand" aria-label="윌클럽 홈"><img src={asset('logo.png')} alt="WILLCLUB" /></Link>
      <nav className={`primary-nav ${menu ? 'is-open' : ''}`} aria-label="주 메뉴">
        {publicMenus.map(({ label, path }) => label === '고객센터'
          ? <SupportMenu key={path} active={isActive(path)} onNavigate={() => setMenu(false)} />
          : <Link key={path} href={path} aria-current={isActive(path) ? 'page' : undefined} onClick={() => setMenu(false)}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <button className="login-button" onClick={onLogin}><LogIn size={15} /><span>로그인</span></button>
        <button className="menu-button icon-button" aria-label={menu ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
  </header>;
}

export function SiteFooter() {
  return <SharedOriginalFooter />;
}
