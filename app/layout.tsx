import type { Metadata } from 'next';
import './base.css';
import '@/components/storefront/styles.css';
import '@/components/storefront/local-menu.css';
import '@/components/storefront/components/video-coupon.css';
import '@/components/admin/admin.css';
import '@/components/renewal/renewal.css';
import '@/components/renewal/header-logo.css';
import '@/components/support/support-menu.css';
import { SiteSupportProvider } from '@/components/support/SiteSupport';

export const metadata: Metadata = {
  title: '윌클럽 | 주식 교육 영상',
  description: '윌클럽 주식 교육 영상과 통합 관리자',
  icons: { icon: '/assets/logo.png' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><SiteSupportProvider>{children}</SiteSupportProvider></body></html>;
}
