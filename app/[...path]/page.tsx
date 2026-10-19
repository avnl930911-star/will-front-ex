import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import OriginalDesignPage from '@/components/renewal/OriginalDesignPage';
import { localPages } from '@/components/storefront/site-navigation';

type Props = { params: Promise<{ path: string[] }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  const key = '/' + path.join('/');
  const title = key === '/freeInfo' ? '무료주식정보' : localPages[key]?.title;
  return title ? { title: `${title} | 윌클럽` } : {};
}
export default async function CustomerMenuPage({ params }: Props) {
  const { path } = await params;
  const key = '/' + path.join('/');
  if (key === '/support') redirect('/support/notice');
  if (key === '/freeInfo' || key === '/myInfo' || key.startsWith('/freeInfo/articles/') || key.startsWith('/support/event/')) return <OriginalDesignPage key={key} path={key} />;
  if (!localPages[key]) notFound();
  return <OriginalDesignPage key={key} path={key} />;
}
