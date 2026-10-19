'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { readApiJson } from '@/lib/http-json';
import { frontPageUrl } from '@/lib/site-links';
const AdminApplication = dynamic(() => import('./AdminApplication'), { ssr: false });
type State = { version: number; records: Record<string, Record<string, unknown>[]>; logs: unknown[] };
type User = { role: string; expert?: string; name?: string; openId?: string };
type StateResult = { state?: State; revision: number; error?: { message?: string } };

export default function AdminBoundary({ initialPath }: { initialPath: string }) {
  const [data, setData] = useState<State | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('관리자 세션을 확인하고 있습니다.');
  const [loginRequired, setLoginRequired] = useState(false);
  const [appKey, setAppKey] = useState(0);
  const version = useRef(0);
  const csrf = useRef('');
  const lastSaved = useRef('');
  const pending = useRef<State | null>(null);
  const saving = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let disposed = false;
    (async () => {
      try {
        const sessionResponse = await fetch('/api/session', { cache: 'no-store' });
        const session = await readApiJson<{ user?: User; csrfToken?: string; error?: { message?: string } }>(sessionResponse, '관리자 로그인 서버에 연결하지 못했습니다.');
        if (!sessionResponse.ok) throw new Error(session.error?.message || '관리자 로그인 서버에 연결하지 못했습니다.');
        if (!session.user) { if (!disposed) { setLoginRequired(true); setStatus('관리자 인증이 필요합니다.'); } return; }
        const response = await fetch('/api/admin/state', { cache: 'no-store' });
        const result = await readApiJson<StateResult>(response, '관리자 데이터를 불러오지 못했습니다.');
        if (!response.ok) throw new Error(result.error?.message || '관리자 조회 권한을 확인해주세요.');
        if (!result.state || !Number.isSafeInteger(result.revision)) throw new Error('관리자 데이터 응답을 확인해주세요.');
        if (disposed) return;
        version.current = result.revision;
        csrf.current = session.csrfToken || '';
        lastSaved.current = JSON.stringify(result.state);
        setUser(session.user);
        setData(result.state);
        setStatus('');
      } catch (cause) { if (!disposed) setError(cause instanceof Error ? cause.message : '서버에 연결하지 못했습니다.'); }
    })();
    return () => { disposed = true; if (timer.current) clearTimeout(timer.current); };
  }, []);

  const flush = useCallback(async () => {
    if (saving.current) return;
    saving.current = true;
    try {
      while (pending.current) {
        const state = pending.current;
        pending.current = null;
        if (JSON.stringify(state) === lastSaved.current) continue;
        setStatus('서버에 저장 중');
        const expert = user?.role === 'expert';
        const response = await fetch(expert ? '/api/expert/state' : '/api/admin/state', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf.current, 'If-Match': String(version.current) },
          body: JSON.stringify(expert ? { records: { videos: state.records.videos, articles: state.records.articles }, revision: version.current } : { state, revision: version.current }),
        });
        const result = await readApiJson<StateResult>(response, '관리자 변경사항을 저장하지 못했습니다.');
        if (!response.ok) {
          pending.current = null;
          const latest = await fetch('/api/admin/state', { cache: 'no-store' }).then(r => readApiJson<StateResult>(r, '관리자 데이터를 다시 불러오지 못했습니다.'));
          if (latest.state) { version.current = latest.revision; lastSaved.current = JSON.stringify(latest.state); setData(latest.state); setAppKey(k => k + 1); }
          throw new Error(result.error?.message || '저장하지 못했습니다. 서버 데이터를 다시 불러왔습니다.');
        }
        if (!result.state || !Number.isSafeInteger(result.revision)) throw new Error('관리자 저장 결과를 확인해주세요.');
        version.current = result.revision;
        lastSaved.current = JSON.stringify(result.state);
        setStatus('서버 저장 완료');
      }
    } catch (cause) { setError(cause instanceof Error ? cause.message : '서버 저장 오류'); setStatus(''); }
    finally { saving.current = false; }
  }, [user]);

  const changed = useCallback((state: State) => {
    if (JSON.stringify(state) === lastSaved.current) return;
    // 전문가는 서버가 담당 범위만 병합하며 전체 상태 교체 권한을 받지 않습니다.
    if (!user || !['admin','expert'].includes(user.role)) { setError('저장 권한이 없습니다.'); return; }
    pending.current = state;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => { void flush(); }, 300);
  }, [flush, user]);

  if (!data) return <div className="willclub-admin-shell"><section className="wc-admin-gate">
    <img src="/admin-assets/logo.png" alt="WILLCLUB" width="104" height="62" />
    <h1>윌클럽 관리자</h1><p role="status">{error || status}</p>
    {loginRequired && <><a className="primary" href="/auth/login">관리자 로그인</a><p className="muted">기존 운영 세션 또는 설정된 계정 인증과 관리자 권한이 필요합니다.</p></>}
    <a href={frontPageUrl('/')}>메인페이지로 이동</a>
  </section></div>;
  return <div className="willclub-admin-shell">
    {(status || error) && <div className={'wc-sync-status' + (error ? ' error' : '')} role="status">{error || status}{error && <button onClick={() => setError('')} aria-label="오류 안내 닫기">×</button>}</div>}
    <AdminApplication key={appKey} initialPath={initialPath} initialData={data} onStateChange={changed} sessionUser={user} />
  </div>;
}
