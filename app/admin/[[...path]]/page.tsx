import AdminBoundary from '@/components/admin/AdminBoundary';
export const metadata = { title: '윌클럽 관리자' };
export default async function AdminPage({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path } = await params;
  const initialPath = path?.length ? '/admin/' + path.join('/') : '/dashboard';
  return <AdminBoundary initialPath={initialPath} />;
}
