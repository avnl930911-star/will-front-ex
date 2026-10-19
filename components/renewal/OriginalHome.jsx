"use client";
import * as React from "react";
import * as Runtime from "react/jsx-runtime";
import { ArrowLeft as mt, ArrowRight as ne, ArrowUp as Pr, ChevronDown as wa, Gift as to, Headphones as vf, LockKeyhole as Tt, Menu as Dr, Pause as _r, Play as To, UserRound as gt, X as $e } from "lucide-react";
import assets from "./assets.json";
import data from "./home-data.json";
import { useRenewalActions } from "./context";
import { SupportMenu } from "../support/SupportMenu";
import { latestCatalogItems } from "../../lib/catalog-order.mjs";
import { adminPageUrl } from "../../lib/site-links";
const Ka = React, Ho = React, Kn = React;
const G = Runtime, Q = Runtime, T = Runtime, ul = Runtime, tb = Runtime;
const { ao, M2, N2, oo, T2, Kv, yv } = data;
const ia = data.experts;
const Iq = [["회사소개", "/about"], ["이용방법", "/guide"], ["무료주식정보", "/freeInfo"], ["주식교육영상", "/paidInfo"], ["VIP 회원서비스", "/vip"]];
const ct = useRenewalActions;
const j2 = (name) => assets["/assets/" + name] ?? "/assets/" + name;
const dl = (video) => video.thumbnail ? assets[video.thumbnail] ?? video.thumbnail : Kv.includes(video.id) ? j2(video.id + ".jpg") : yv.includes(video.id) ? j2(video.id + ".png") : void 0;
function S2({ eyebrow: e, title: t, description: a }) {
  return (0, G.jsxs)("div", { className: "hm-section-heading", children: [(0, G.jsx)("p", { children: e }), (0, G.jsx)("h2", { children: t }), (0, G.jsx)("p", { children: a })] });
}
function Ys({ videos: So, imageAssets: t = {} }) {
  let [o, f] = (0, Ka.useState)(0), [n, r] = (0, Ka.useState)(true), [l, c] = (0, Ka.useState)(false), [d, b] = (0, Ka.useState)(false), [A, m] = (0, Ka.useState)(true), [h, x] = (0, Ka.useState)(null), E = (u) => t[u] ?? u, M = latestCatalogItems(So);
  (0, Ka.useEffect)(() => {
    let u = window.matchMedia("(prefers-reduced-motion: reduce)"), p = () => b(u.matches), U = () => m(!document.hidden);
    return p(), u.addEventListener("change", p), document.addEventListener("visibilitychange", U), () => {
      u.removeEventListener("change", p), document.removeEventListener("visibilitychange", U);
    };
  }, []), (0, Ka.useEffect)(() => {
    if (!n || l || d || !A) return;
    let u = window.setInterval(() => f((p) => (p + 1) % ao.length), 6e3);
    return () => window.clearInterval(u);
  }, [n, l, d, A]);
  let i = (u) => f((p) => (p + u + ao.length) % ao.length);
  return (0, G.jsxs)("div", { className: "willclub-page home-page", id: "home-top", children: [(0, G.jsx)("a", { className: "hm-skip-link", href: "#home-content", children: "본문 바로가기" }), (0, G.jsxs)("main", { id: "home-content", children: [(0, G.jsx)("h1", { className: "hm-sr-only", children: "윌클럽" }), (0, G.jsxs)("section", { className: "hm-hero", "aria-roledescription": "캐러셀", "aria-label": "윌클럽 메인 배너", onMouseEnter: () => c(true), onMouseLeave: () => c(false), onFocusCapture: () => c(true), onBlurCapture: (u) => {
    u.currentTarget.contains(u.relatedTarget) || c(false);
  }, onTouchStart: (u) => x(u.touches[0]?.clientX ?? null), onTouchEnd: (u) => {
    let p = u.changedTouches[0]?.clientX;
    h !== null && p !== void 0 && Math.abs(p - h) > 50 && i(p < h ? 1 : -1), x(null);
  }, children: [ao.map((u, p) => (0, G.jsx)("a", { href: u.href, className: `hm-hero-slide${p === o ? " active" : ""}`, "aria-hidden": p !== o, tabIndex: p === o ? 0 : -1, "aria-label": u.alt, children: (0, G.jsx)("img", { src: E(u.image), alt: u.alt, width: "2537", height: "685", loading: p === 0 ? "eager" : "lazy" }) }, u.id)), (0, G.jsxs)("div", { className: "hm-carousel-controls", children: [(0, G.jsx)("button", { type: "button", className: "hm-slide-arrow", "aria-label": "이전 배너", onClick: () => i(-1), children: (0, G.jsx)(mt, { size: 16 }) }), (0, G.jsx)("div", { className: "hm-slide-dots", children: ao.map((u, p) => (0, G.jsx)("button", { type: "button", "aria-label": `슬라이드 ${p + 1}로 이동`, "aria-pressed": p === o, className: p === o ? "active" : "", onClick: () => f(p) }, u.id)) }), (0, G.jsxs)("span", { className: "hm-slide-index", "aria-live": n ? "off" : "polite", children: [String(o + 1).padStart(2, "0"), " / 03"] }), (0, G.jsx)("button", { type: "button", className: "hm-slide-arrow", "aria-label": "다음 배너", onClick: () => i(1), children: (0, G.jsx)(ne, { size: 16 }) }), (0, G.jsx)("button", { type: "button", className: "hm-slide-pause", "aria-label": n ? "배너 자동 전환 정지" : "배너 자동 전환 시작", "aria-pressed": !n, onClick: () => r(!n), children: n ? (0, G.jsx)(_r, { size: 13 }) : (0, G.jsx)(To, { size: 13 }) })] })] }), (0, G.jsx)("section", { className: "hm-section hm-membership-section", id: "memberships", children: (0, G.jsxs)("div", { className: "hm-container", children: [(0, G.jsx)(S2, { eyebrow: "VIP Membership", title: "윌클럽 운영반", description: "전문가와 함께하는 프리미엄 투자 커뮤니티" }), (0, G.jsx)("div", { className: "hm-membership-grid", children: M2.map((u) => (0, G.jsxs)("a", { className: `hm-membership-card hm-theme-${u.theme}`, href: u.href, children: [(0, G.jsx)("h3", { children: u.name }), (0, G.jsx)(ne, { size: 18, className: "hm-card-arrow", "aria-hidden": "true" }), (0, G.jsx)("img", { src: E(u.image), alt: u.name, width: "120", height: "120", loading: "eager" })] }, u.name)) })] }) }), (0, G.jsx)("section", { className: "hm-section hm-learning-section", id: "learning", children: (0, G.jsxs)("div", { className: "hm-container", children: [(0, G.jsx)(S2, { eyebrow: "STOCK INFORMATION", title: "주식 교육 영상", description: "주식에 대한 모든것을 알려드립니다" }), (0, G.jsx)("div", { className: "hm-video-grid hm-video-thumbnails", children: M.map((u) => (0, G.jsx)("a", { className: "hm-video-card", href: `/paidInfo#video=${u.id}`, "data-home-video": u.id, "aria-label": `${u.title} 상세 보기`, children: (0, G.jsx)("div", { className: "hm-video-poster", children: dl(u) ? (0, G.jsx)("img", { src: E(dl(u)), alt: u.title, width: "1280", height: "720", loading: "lazy" }) : (0, G.jsx)(xf, { video: u }) }) }, u.id)) })] }) }), (0, G.jsx)("section", { className: "hm-section hm-quick-section", id: "contact", "aria-label": "바로가기", children: (0, G.jsx)("div", { className: "hm-container", children: (0, G.jsx)("div", { className: "hm-quick-grid", children: N2.map((u) => (0, G.jsxs)("a", { className: `hm-quick-card hm-quick-${u.theme}`, href: u.href, children: [(0, G.jsx)("h3", { children: u.title }), (0, G.jsx)(ne, { size: 17, className: "hm-card-arrow", "aria-hidden": "true" }), (0, G.jsx)("img", { src: E(u.image), alt: u.title, width: "120", height: "120", loading: "lazy" })] }, u.title)) }) }) })] }), null] });
}
function xf({ video: e, large: t = false }) {
  let a = dl(e), [o, f] = (0, Ho.useState)(false);
  return (0, Ho.useEffect)(() => f(false), [e.id]), (0, Q.jsxs)("div", { className: `video-poster poster-${e.sub} ${t ? "poster-large" : ""}`, children: [a && !o ? (0, Q.jsx)("img", { src: a, alt: "", loading: t ? "eager" : "lazy", onError: () => f(true) }) : (0, Q.jsxs)("div", { className: "typographic-poster", children: [(0, Q.jsxs)("span", { className: "poster-eyebrow", children: ["WILLCLUB ", oo.find((n) => n.id === e.sub)?.english] }), (0, Q.jsx)("strong", { children: (T2[e.id] ?? e.title).split(" — ")[0] }), (0, Q.jsxs)("span", { className: "poster-author", children: [e.author ?? ia[e.expert].name, (0, Q.jsx)("span", { children: "EXPERT CLASS" })] }), (0, Q.jsx)("div", { className: "poster-line", "aria-hidden": "true" })] }), (0, Q.jsxs)("span", { className: `video-type ${e.paid ? "" : "type-free"}`, children: [e.paid ? (0, Q.jsx)(Tt, { size: 10 }) : (0, Q.jsx)(To, { size: 10, fill: "currentColor" }), e.paid ? "PREMIUM" : "FREE"] }), (0, Q.jsx)("span", { className: "duration", children: e.duration }), !t && (0, Q.jsx)("span", { className: "poster-play", "aria-hidden": "true", children: (0, Q.jsx)(To, { size: 20, fill: "currentColor" }) })] });
}
function wn() {
  return (0, ul.jsxs)("a", { href: "#live-chat", className: "hm-floating-contact", "aria-label": "실시간 상담센터 열기", children: [(0, ul.jsx)(vf, { size: 21, strokeWidth: 1.6 }), (0, ul.jsx)("span", { children: "실시간 상담센터" })] });
}
function Kq({ current: e, assets: t = {} }) {
  let [a, o] = (0, Kn.useState)(false), [f, n] = (0, Kn.useState)(false), { state: r, openModal: l } = ct();
  return (0, Kn.useEffect)(() => {
    o(false), n(false);
  }, [e]), (0, Kn.useEffect)(() => {
    let c = (d) => {
      d.key === "Escape" && (o(false), n(false));
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, []), (0, T.jsx)("header", { className: "ex-header", children: (0, T.jsxs)("div", { className: "ex-chrome-container", children: [(0, T.jsx)("a", { href: "/", className: "ex-logo", "aria-label": "윌클럽 홈", children: (0, T.jsx)("img", { src: "/assets/logo.png", alt: "WILLCLUB", width: 91, height: 48 }) }), (0, T.jsxs)("nav", { className: a ? "is-open" : "", "aria-label": "주 메뉴", id: "experience-navigation", children: [Iq.map(([c, d]) => (0, T.jsx)("a", { className: e === d ? "active" : "", href: d, children: c }, d)), (0, T.jsx)(SupportMenu, {active:e.startsWith("/support")})] }), (0, T.jsxs)("div", { className: "ex-header-actions", children: [r.loggedIn ? (0, T.jsxs)("a", { href: "/myInfo", className: "ex-account-link", children: [(0, T.jsx)(gt, { size: 15 }), "마이페이지"] }) : (0, T.jsx)("button", { className: "ex-account-link", onClick: () => l({ type: "login" }), children: "로그인" }), (0, T.jsx)("button", { className: "ex-menu", "aria-label": a ? "메뉴 닫기" : "메뉴 열기", "aria-controls": "experience-navigation", "aria-expanded": a, onClick: () => o(!a), children: a ? (0, T.jsx)($e, { size: 23 }) : (0, T.jsx)(Dr, { size: 23 }) })] })] }) });
}
function yq({ assets: e = {} }) {
  let { openModal: t } = ct();
  return (0, T.jsx)("footer", { className: "ex-footer", children: (0, T.jsxs)("div", { className: "ex-chrome-container", children: [(0, T.jsxs)("div", { className: "ex-footer-columns", children: [(0, T.jsxs)("div", { className: "ex-company", children: [(0, T.jsx)("a", { href: "/", className: "ex-logo", children: (0, T.jsx)("img", { src: e["/home/main_logo.png"] ?? "/home/main_logo.png", alt: "WILLCLUB", width: 140, height: 55 }) }), (0, T.jsxs)("p", { children: ["상호명: (주)제이앤비주식사관학교", (0, T.jsx)("br", {}), "사업자번호: 215-87-05442"] }), (0, T.jsxs)("p", { children: ["대표전화: 1577-3538", (0, T.jsx)("br", {}), "대표자 이메일주소: jnbstock3@hanmail.net"] }), (0, T.jsxs)("p", { children: ["대표자: 박종현", (0, T.jsx)("br", {}), "통신판매업신고번호: 2024-수원팔달-0899호", (0, T.jsx)("br", {}), "개인정보보호관리책임자: 박종현"] }), (0, T.jsxs)("p", { children: ["주소: 경기도 수원시 팔달구 효원로307번길 87,", (0, T.jsx)("br", {}), "102동2001호 (인계동,한화꿈에그린효원)"] })] }), (0, T.jsxs)("div", { children: [(0, T.jsx)("h3", { children: "서비스" }), Iq.map(([a, o]) => (0, T.jsx)("a", { href: o, children: a }, o)), (0, T.jsx)("a", { href: "/login", children: "마이페이지" })] }), (0, T.jsxs)("div", { children: [(0, T.jsx)("h3", { children: "고객지원" }), (0, T.jsx)("a", { href: "/support/notice", children: "공지사항" }), (0, T.jsx)("a", { href: "/support/faq", children: "자주 묻는 질문" }), (0, T.jsx)("a", { href: "/support/event", children: "이벤트" }), (0, T.jsx)("button", { onClick: () => t({ type: "contact" }), children: "실시간 상담센터" })] }), (0, T.jsxs)("div", { children: [(0, T.jsx)("h3", { children: "법적 고지" }), ["이용약관", "개인정보처리방침", "투자 유의사항"].map((a) => (0, T.jsx)("button", { onClick: () => t({ type: "notice", title: a, message: a === "투자 유의사항" ? "제공하는 데이터와 분석자료는 투자상 참고용입니다. 원금 손실이 발생할 수 있고 그 손실은 투자자에게 귀속됩니다." : "정식 서비스 이용 시 운영 사이트의 최신 전문을 확인해주세요." }), children: a }, a))] })] }), (0, T.jsxs)("p", { className: "ex-footer-notice", children: ["(주)제이앤비주식사관학교는 유사투자자문 업체로, 제공하는 데이터 및 분석자료는 투자상 참고용이며 투자목적으로 하지 않습니다.", (0, T.jsx)("br", {}), "또한 개별 상담 및 운용이 불가하며, 원금에 손실이 발생할 수 있고 그 손실이 투자자에 귀속됩니다."] }), (0, T.jsxs)("div", { className: "ex-footer-bottom", children: [(0, T.jsx)("span", { children: "© 2026 윌클럽. All rights reserved." }), (0, T.jsx)("span", { children: (0, T.jsx)("a", { href: adminPageUrl(), className: "ex-footer-admin", title: "관리자 페이지로 이동", children: "WILLCLUB" }) })] })] }) });
}
function ab() {
  return (0, tb.jsx)("button", { className: "directive-back-to-top", type: "button", "aria-label": "페이지 맨 위로", onClick: () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), children: (0, tb.jsx)(Pr, { size: 22, "aria-hidden": "true" }) });
}
export {
  ab as BackToTop,
  yq as OriginalFooter,
  Kq as OriginalHeader,
  Ys as OriginalHomeBody
};
