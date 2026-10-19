'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { readApiJson } from '../../lib/http-json';
import { useSiteSupport } from '../support/SiteSupport';

export interface OriginalProfile {
  nickname: string;
  name: string;
  phone: string;
  cafeNickname: string;
  email: string;
  joinDate: string;
}

export interface OriginalRenewalState {
  loggedIn: boolean;
  profile: OriginalProfile;
  balance: number;
  services: unknown[];
  coupons: unknown[];
  purchases: unknown[];
  transactions: unknown[];
}

export interface OriginalModal {
  type: string;
  [key: string]: unknown;
}

export interface OriginalPaymentOrder {
  kind: string;
  title: string;
  amount: number;
  videoId?: string;
  expert?: unknown;
  productId?: string;
  optionId?: string;
  months?: number;
  [key: string]: unknown;
}

export interface OriginalPlayback {
  videoId: string;
  url: string;
}

interface SessionUser {
  openId?: unknown;
  name?: unknown;
  email?: unknown;
  nickname?: unknown;
}

interface SessionResult {
  user?: SessionUser | null;
  csrfToken?: unknown;
}

interface PlaybackResult {
  url?: unknown;
}

export interface OriginalVideo {
  id: string;
  title: string;
  price: number;
  expert: unknown;
}

export interface OriginalVipPayload {
  product?: Record<string, unknown>;
  option?: Record<string, unknown>;
  [key: string]: unknown;
}

const emptyState = (): OriginalRenewalState => ({
  loggedIn: false,
  profile: { nickname: '', name: '', phone: '', cafeNickname: '', email: '', joinDate: '' },
  balance: 0,
  services: [],
  coupons: [],
  purchases: [],
  transactions: [],
});

const text = (value: unknown): string => typeof value === 'string' ? value.trim() : '';
const amount = (value: unknown): number => typeof value === 'number' && Number.isFinite(value) ? value : 0;

function stateForUser(user: SessionUser | null | undefined): OriginalRenewalState {
  if (!user || !text(user.openId)) return emptyState();
  const name = text(user.name);
  return {
    ...emptyState(),
    loggedIn: true,
    profile: {
      nickname: text(user.nickname) || name,
      name,
      phone: '',
      cafeNickname: '',
      email: text(user.email),
      joinDate: '',
    },
  };
}

function vipOrder(payload: OriginalVipPayload): OriginalPaymentOrder {
  const product = payload.product ?? {};
  const option = payload.option ?? {};
  const productTitle = text(product.product_name) || text(product.title) || text(product.name) || 'VIP 회원서비스';
  const baseMonths = amount(option.base_period ?? option.basePeriod);
  const bonusMonths = amount(option.bonus_period ?? option.bonusPeriod);
  const months = amount(option.totalMonths ?? option.total_months ?? option.months) || baseMonths + bonusMonths || baseMonths;
  return {
    kind: 'vip',
    title: productTitle,
    amount: amount(option.amount ?? option.price ?? product.amount ?? product.price),
    months,
    expert: product.expert_name ?? product.expert ?? product.expert_id ?? product.expertId,
    productId: text(product.id ?? product.productId),
    optionId: text(option.id ?? option.optionId),
  };
}

export function useOriginalActions() {
  const { openChat } = useSiteSupport();
  const [state, setState] = useState<OriginalRenewalState>(emptyState);
  const [modal, setModal] = useState<OriginalModal | null>(null);
  const [playback, setPlayback] = useState<OriginalPlayback | null>(null);
  const csrfToken = useRef('');
  const mounted = useRef(false);

  const readSession = useCallback(async (): Promise<SessionResult | null> => {
    try {
      const response = await fetch('/api/session', { cache: 'no-store', credentials: 'same-origin' });
      const session = await readApiJson<SessionResult>(response, '로그인 정보를 불러오지 못했습니다.');
      if (!response.ok) return null;
      csrfToken.current = text(session.csrfToken);
      return session;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    void (async () => {
      const session = await readSession();
      if (mounted.current) setState(stateForUser(session?.user));
    })();
    return () => { mounted.current = false; };
  }, [readSession]);

  const openModal = useCallback((payload: OriginalModal) => {
    if (payload.type === 'contact') {
      openChat();
      return;
    }
    setModal(payload);
  }, [openChat]);

  const closeModal = useCallback(() => setModal(null), []);

  const setLoggedIn = useCallback((next: boolean) => {
    if (next) {
      window.location.assign('/auth/login');
      return;
    }
    return (async () => {
      if (!csrfToken.current) await readSession();
      if (!csrfToken.current) return;
      try {
        const response = await fetch('/auth/logout', {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'X-CSRF-Token': csrfToken.current },
        });
        if (response.ok && mounted.current) {
          csrfToken.current = '';
          setPlayback(null);
          setModal(null);
          setState(emptyState());
        }
      } catch {
        // The authenticated state is retained when the server did not confirm logout.
      }
    })();
  }, [readSession]);

  const completePayment = useCallback((_order: OriginalPaymentOrder, _method: string, _details?: unknown) => ({
    ok: false as const,
    message: '실제 결제 제공자 연결이 필요합니다.',
  }), []);

  const registerCoupon = useCallback((_code: string) => ({
    ok: false as const,
    message: '쿠폰 등록 서비스 연결이 필요합니다.',
  }), []);

  const saveProfile = useCallback((_profile: OriginalProfile) => ({
    ok: false as const,
    message: '회원 정보 저장 서비스 연결이 필요합니다.',
  }), []);

  const openVideoPayment = useCallback(async (video: OriginalVideo) => {
    const order: OriginalPaymentOrder = {
      kind: 'video',
      title: video.title,
      amount: video.price,
      videoId: video.id,
      expert: video.expert,
    };
    try {
      const response = await fetch(`/api/catalog/${encodeURIComponent(video.id)}/playback`, { cache: 'no-store', credentials: 'same-origin' });
      if (response.ok) {
        const result = await readApiJson<PlaybackResult>(response, '영상 재생 정보를 불러오지 못했습니다.');
        const url = text(result.url);
        if (url) {
          if (mounted.current) setPlayback({ videoId: video.id, url });
          return;
        }
      } else if (response.status === 401 || response.status === 403) {
        if (mounted.current) setModal({ type: 'payment', order });
        return;
      }
    } catch {
      // A user-facing original dialog is shown below instead of exposing API response text.
    }
    if (mounted.current) openModal({ type: 'notice', title: '영상 재생 안내', message: '영상을 재생할 수 없습니다. 영상 연결 상태를 확인해주세요.' });
  }, [openModal]);

  const playVideo = useCallback(async (video: OriginalVideo) => {
    try {
      const response = await fetch(`/api/catalog/${encodeURIComponent(video.id)}/playback`, { cache: 'no-store', credentials: 'same-origin' });
      if (response.ok) {
        const result = await readApiJson<PlaybackResult>(response, '영상 재생 정보를 불러오지 못했습니다.');
        const url = text(result.url);
        if (url) {
          if (mounted.current) setPlayback({ videoId: video.id, url });
          return;
        }
      }
    } catch {
      // A user-facing original dialog is shown below instead of exposing API response text.
    }
    if (mounted.current) openModal({ type: 'notice', title: '영상 재생 안내', message: '영상을 재생할 수 없습니다. 영상 연결 상태를 확인해주세요.' });
  }, [openModal]);

  const openVipPayment = useCallback((payload: OriginalVipPayload) => {
    setModal({ type: 'payment', order: vipOrder(payload) });
  }, []);

  return useMemo(() => ({
    state,
    modal,
    playback,
    openModal,
    closeModal,
    setLoggedIn,
    completePayment,
    registerCoupon,
    saveProfile,
    openVideoPayment,
    playVideo,
    openVipPayment,
  }), [state, modal, playback, openModal, closeModal, setLoggedIn, completePayment, registerCoupon, saveProfile, openVideoPayment, playVideo, openVipPayment]);
}

export default useOriginalActions;
