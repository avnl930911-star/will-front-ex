import type { Metadata } from 'next';
import RenewalHome from '@/components/renewal/RenewalHome';
export const metadata: Metadata = { title: '윌클럽', description: '윌클럽 운영반과 주식 교육 서비스' };
export default function Page() { return <RenewalHome />; }
