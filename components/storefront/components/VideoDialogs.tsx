import { useEffect, useRef, useState, type ReactNode } from 'react';
import { X, LockKeyhole, ArrowRight, Check, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { categories, experts, price, type Video } from '../data';
import { VideoPoster } from './VideoRail';
import { VideoCoupon, type VideoCouponQuote } from './VideoCoupon';

export function Modal({ children, onClose, titleId, className = '' }: { children: ReactNode; onClose: () => void; titleId: string; className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog?.showModal();
    return () => { dialog?.close(); document.body.style.overflow = oldOverflow; };
  }, []);
  return <dialog className={`wc-dialog ${className}`} ref={ref} aria-labelledby={titleId} onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    {children}
  </dialog>;
}

export function LoginDialog({ onClose }: { onClose: () => void }) {
  return <Modal titleId="login-title" onClose={onClose} className="compact-dialog"><button className="dialog-close icon-button" aria-label="닫기" onClick={onClose}><X size={20} /></button><div className="dialog-symbol"><LockKeyhole size={25} /></div><p className="eyebrow">WILLCLUB ACCOUNT</p><h2 id="login-title">배움의 다음 단계로.</h2><p className="muted">이 프로젝트의 회원 로그인 화면으로 이동합니다.<br />실제 로그인에는 운영 인증 서비스 연결이 필요합니다.</p><a className="primary-button" href="/login">윌클럽 로그인으로 이동 <ArrowUpRight size={17} /></a><button className="text-button" onClick={onClose}>계속 둘러보기</button></Modal>;
}

export function PurchaseDialog({ video, onClose }: { video: Video; onClose: () => void }) {
  const [agreed, setAgreed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [coupon, setCoupon] = useState<VideoCouponQuote | null>(null);
  return <Modal titleId="purchase-title" onClose={onClose} className="compact-dialog purchase-dialog"><button className="dialog-close icon-button" aria-label="구매 안내 닫기" onClick={onClose}><X size={20} /></button>
    {finished ? <><div className="dialog-symbol"><Check size={28} /></div><p className="eyebrow">FRONTEND PREVIEW</p><h2 id="purchase-title">구매 흐름을 확인했어요.</h2><p className="muted">실제 결제는 진행되지 않았습니다.<br />기존 로그인·결제 API를 연결하면 이 단계에서<br />구매 및 시청 권한 처리가 이루어집니다.</p><button className="primary-button" onClick={onClose}>영상 상세로 돌아가기 <ArrowRight size={17} /></button></> : <>
      <p className="eyebrow">PREMIUM CLASS</p><h2 id="purchase-title">좋은 투자는,<br />깊이 있는 배움에서.</h2>
      <div className="order-video"><VideoPoster video={video} /><span><small>{experts[video.expert].name} · {categories.find(c => c.id === video.sub)?.label}</small><strong>{video.title}</strong></span></div>
      <VideoCoupon videoId={video.id} onApplied={setCoupon} />
      {coupon && <div className="video-coupon-original"><span>영상 금액</span><span>{coupon.originalAmount.toLocaleString('ko-KR')}원</span></div>}
      <div className="order-total"><span>결제 예정 금액</span><strong>{coupon ? `${coupon.totalAmount.toLocaleString('ko-KR')}원` : price(video.price)}</strong></div>
      <p className="purchase-note"><ShieldCheck size={17} /> 현재는 디자인 확인용 구매 안내 화면입니다.<br />실제 결제나 카드 정보 입력은 진행하지 않습니다.</p>
      <label className="agreement"><input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} /><span>프론트 UI 시연이며 실제 구매가 아님을 확인했습니다.</span></label>
      <button className="primary-button" disabled={!agreed} onClick={() => setFinished(true)}>구매 흐름 미리보기 <ArrowRight size={17} /></button><button className="text-button" onClick={onClose}>다음에 둘러볼게요</button>
    </>}
  </Modal>;
}
