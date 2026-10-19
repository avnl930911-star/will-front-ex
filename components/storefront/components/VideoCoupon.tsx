import { useEffect, useId, useRef, useState } from 'react';
import { readApiJson } from '@/lib/http-json';

export interface VideoCouponQuote {
  videoId: string;
  coupon: { id: string; title: string };
  originalAmount: number;
  discountAmount: number;
  totalAmount: number;
}
interface CouponOption { id: string; title: string; discountLabel: string }
interface Props { videoId: string; onApplied: (value: VideoCouponQuote | null) => void }

export function VideoCoupon({ videoId, onApplied }: Props) {
  const inputId = useId();
  const [items, setItems] = useState<CouponOption[]>([]);
  const [selected, setSelected] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [loginRequired, setLoginRequired] = useState(false);
  const [error, setError] = useState('');
  const [quote, setQuote] = useState<VideoCouponQuote | null>(null);
  const request = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    void fetch(`/api/catalog/${encodeURIComponent(videoId)}/coupons`, { cache: 'no-store', signal: controller.signal })
      .then(async response => {
        const result = await readApiJson<{ items?: CouponOption[]; requiresLogin?: boolean; error?: { message?: string } }>(response, '쿠폰 정보를 불러오지 못했습니다.');
        if (!response.ok) throw new Error(result.error?.message || '쿠폰 정보를 불러오지 못했습니다.');
        setItems(Array.isArray(result.items) ? result.items : []);
        setLoginRequired(result.requiresLogin === true);
      }).catch(cause => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : '쿠폰 연결을 확인해주세요.'); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => { controller.abort(); request.current?.abort(); };
  }, [videoId]);

  const reset = () => { setQuote(null); onApplied(null); setError(''); };
  const apply = async () => {
    if (applying) return;
    reset();
    if (!selected && !code.trim()) { setError('보유 쿠폰을 선택하거나 쿠폰 코드를 입력해주세요.'); return; }
    const controller = new AbortController();
    request.current = controller;
    setApplying(true);
    try {
      const sessionResponse = await fetch('/api/session', { cache: 'no-store', signal: controller.signal });
      const session = await readApiJson<{ user?: unknown; csrfToken?: string }>(sessionResponse, '로그인 상태를 확인하지 못했습니다.');
      if (!sessionResponse.ok || !session.user || !session.csrfToken) { setLoginRequired(true); throw new Error('로그인 후 영상용 쿠폰을 적용할 수 있습니다.'); }
      const response = await fetch(`/api/catalog/${encodeURIComponent(videoId)}/coupon-quote`, {
        method: 'POST', signal: controller.signal,
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': session.csrfToken },
        body: JSON.stringify(selected ? { couponId: selected } : { code: code.trim() }),
      });
      const result = await readApiJson<VideoCouponQuote & { error?: { message?: string } }>(response, '쿠폰을 적용하지 못했습니다.');
      if (!response.ok) throw new Error(result.error?.message || '이 영상에 적용할 수 없는 쿠폰입니다.');
      if (result.videoId !== videoId || !result.coupon?.id || typeof result.coupon.title !== 'string'
        || ![result.originalAmount, result.discountAmount, result.totalAmount].every(value => Number.isSafeInteger(value) && value >= 0)
        || result.discountAmount > result.originalAmount || result.originalAmount - result.discountAmount !== result.totalAmount) {
        throw new Error('쿠폰 할인 금액을 확인하지 못했습니다. 다시 적용해주세요.');
      }
      if (!controller.signal.aborted) { setQuote(result); onApplied(result); setLoginRequired(false); }
    } catch (cause) {
      if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : '쿠폰을 적용하지 못했습니다.');
    } finally { if (!controller.signal.aborted) setApplying(false); }
  };

  return <section className="video-coupon" aria-label="영상용 쿠폰">
    <label className="video-coupon-label" htmlFor={inputId}>영상용 쿠폰</label>
    {items.length > 0 && <select className="video-coupon-select" aria-label="보유 영상 쿠폰 선택" value={selected} disabled={applying} onChange={event => { setSelected(event.target.value); setCode(''); reset(); }}>
      <option value="">쿠폰 코드 직접 입력 / 쿠폰 선택</option>
      {items.map(item => <option key={item.id} value={item.id}>{item.title} · {item.discountLabel}</option>)}
    </select>}
    <div className="video-coupon-controls">
      {selected ? <input id={inputId} value={items.find(item => item.id === selected)?.title || ''} readOnly aria-label="선택한 영상 쿠폰" />
        : <input id={inputId} type="text" value={code} maxLength={128} disabled={applying} placeholder="영상용 쿠폰 코드 입력" autoComplete="off" onChange={event => { setCode(event.target.value); reset(); }} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); void apply(); } }} />}
      {quote ? <button type="button" onClick={() => { reset(); setSelected(''); setCode(''); }}>해제</button>
        : <button type="button" disabled={applying || loading} onClick={() => void apply()}>{applying ? '확인 중' : '적용'}</button>}
    </div>
    {loading && <p className="video-coupon-hint" role="status">사용 가능한 영상 쿠폰을 확인하고 있습니다.</p>}
    {!loading && loginRequired && <p className="video-coupon-hint">로그인 후 보유 쿠폰을 확인하고 적용할 수 있습니다. <a href="/login">로그인</a></p>}
    {!loading && !loginRequired && items.length === 0 && !error && <p className="video-coupon-hint">보유한 영상 쿠폰이 없으면 발급받은 코드를 입력해주세요.</p>}
    {error && <p className="video-coupon-error" role="alert">{error}</p>}
    {quote && <div className="video-coupon-applied" role="status"><span>{quote.coupon.title} 적용</span><div><span>쿠폰 할인</span><strong>−{quote.discountAmount.toLocaleString('ko-KR')}원</strong></div></div>}
  </section>;
}
