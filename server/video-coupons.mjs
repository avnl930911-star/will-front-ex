import { isPublicVideo } from './catalog.mjs';

const ACTIVE_STATUSES = new Set(['사용가능', '사용', 'active', 'on', 'enabled']);
const USED_STATUSES = new Set(['사용완료', 'used', 'redeemed', 'consumed', 'expired', '만료', '취소', 'cancelled', 'canceled']);
const ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;

function own(object, key) {
  return Object.prototype.hasOwnProperty.call(object || {}, key);
}

function object(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function text(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function exactText(value) {
  return typeof value === 'string' && value === value.trim() && value.length > 0 &&
    value.length <= 128 && !/[\u0000-\u001f\u007f]/.test(value) ? value : '';
}

function safeId(value) {
  const candidate = exactText(value);
  return ID_PATTERN.test(candidate) ? candidate : '';
}

function stringArray(value) {
  return Array.isArray(value) && value.every(item => typeof item === 'string' && item === item.trim() && item.length > 0 && item.length <= 128)
    ? [...new Set(value)] : null;
}

function numberValue(value) {
  if (typeof value === 'number') return Number.isSafeInteger(value) ? value : null;
  if (typeof value === 'string' && /^(?:0|[1-9]\d*)$/.test(value)) {
    const parsed = Number(value);
    return Number.isSafeInteger(parsed) ? parsed : null;
  }
  return null;
}

/** A deliberately strict reader: blank means absent; any supplied non-integer is invalid. */
function integerField(row, keys) {
  let seen = false;
  let value;
  for (const key of keys) {
    if (!own(row, key) || row[key] === undefined || row[key] === null || row[key] === '') continue;
    seen = true;
    const parsed = numberValue(row[key]);
    if (parsed === null || parsed < 0 || (value !== undefined && value !== parsed)) return { valid: false };
    value = parsed;
  }
  return { valid: true, seen, value };
}

function normalizeIssueMethod(coupon) {
  const method = text(coupon.issueMethod);
  if (['automatic', 'download', 'couponCode', 'designated'].includes(method)) return method;
  return text(coupon.code) ? 'couponCode' : 'download';
}

function isCodeCoupon(coupon) {
  return normalizeIssueMethod(coupon) === 'couponCode';
}

function couponCodes(coupon) {
  const code = exactText(coupon.code).toUpperCase();
  const generated = stringArray(coupon.generatedCodes);
  if (generated === null && own(coupon, 'generatedCodes')) return null;
  const multiple = coupon.couponCodeMode === 'multiple';
  const values = multiple && generated?.length ? generated : [code];
  const normalized = values.map(value => exactText(value).toUpperCase()).filter(Boolean);
  return normalized.length ? [...new Set(normalized)] : null;
}

function parseDate(value, endOfDay = false) {
  if (typeof value !== 'string' || value !== value.trim()) return null;
  let match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (match) {
    const [year, month, day] = match.slice(1).map(Number);
    const date = new Date(Date.UTC(year, month - 1, day, endOfDay ? 23 : 0, endOfDay ? 59 : 0, endOfDay ? 59 : 0, endOfDay ? 999 : 0));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day ? date : null;
  }
  match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3}))?)?(Z)?$/.exec(value);
  if (!match) return null;
  const [yearText, monthText, dayText, hourText, minuteText, secondText, millisText] = match.slice(1, 8);
  const [year, month, day, hour, minute] = [yearText, monthText, dayText, hourText, minuteText].map(Number);
  const second = Number(secondText ?? '0');
  const millis = Number((millisText ?? '0').padEnd(3, '0'));
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second, millis));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day &&
    date.getUTCHours() === hour && date.getUTCMinutes() === minute && date.getUTCSeconds() === second ? date : null;
}

function validity(coupon, now) {
  const startProvided = own(coupon, 'startAt') || own(coupon, 'start');
  const endProvided = own(coupon, 'endAt') || own(coupon, 'end');
  const limited = typeof coupon.validityLimited === 'boolean' ? coupon.validityLimited : startProvided || endProvided;
  const parseSide = (keys, endOfDay) => {
    const supplied = keys.filter(key => own(coupon, key) && coupon[key] !== undefined && coupon[key] !== null && coupon[key] !== '');
    if (!supplied.length) return { valid: true, value: undefined };
    const dates = supplied.map(key => parseDate(coupon[key], endOfDay));
    if (dates.some(date => !date) || dates.some(date => date.valueOf() !== dates[0].valueOf())) return { valid: false };
    return { valid: true, value: dates[0] };
  };
  const start = parseSide(['startAt', 'start'], false);
  const end = parseSide(['endAt', 'end'], true);
  if (!start.valid || !end.valid || (limited && (!start.value || !end.value))) return false;
  if (start.value && end.value && start.value > end.value) return false;
  const current = now instanceof Date ? now : new Date(now);
  if (Number.isNaN(current.valueOf())) return false;
  return (!start.value || current >= start.value) && (!end.value || current <= end.value);
}

function couponEnabled(coupon) {
  if (own(coupon, 'status') && text(coupon.status)) return ACTIVE_STATUSES.has(text(coupon.status).toLowerCase());
  if (typeof coupon.enabled === 'boolean') return coupon.enabled;
  if (typeof coupon.active === 'boolean') return coupon.active;
  return false;
}

function paidPublicVideo(state, videoId) {
  const rows = Array.isArray(state?.records?.videos) ? state.records.videos : [];
  const video = rows.find(row => object(row) && row.id === videoId && isPublicVideo(row));
  const amount = video ? numberValue(video.amount) : null;
  return video && amount !== null && amount > 0 ? { video, amount } : null;
}

function memberIdentifiers(member) {
  return new Set([member.id, member.memberId].filter(value => typeof value === 'string' && value));
}

/**
 * Member linkage deliberately uses only stable server identities. Display name/nickname
 * never participates in identity resolution.
 */
export function resolveMember(state, session) {
  const members = Array.isArray(state?.records?.members) ? state.records.members.filter(object) : [];
  const openId = exactText(session?.user?.openId);
  const claimMemberId = exactText(session?.user?.memberId || session?.claims?.memberId);
  if (!openId) return null;
  const byOpenId = members.filter(member => member.openId === openId || member.loginId === openId);
  const byMemberId = claimMemberId ? members.filter(member => member.memberId === claimMemberId || member.id === claimMemberId) : [];
  const candidates = claimMemberId ? byOpenId.filter(member => byMemberId.includes(member)) : byOpenId;
  // An adapter/JWT memberId is allowed to be the only stable source, but conflicting
  // openId and memberId matches are never silently joined.
  const selected = candidates.length ? candidates : (!byOpenId.length && byMemberId.length ? byMemberId : []);
  return selected.length === 1 ? selected[0] : null;
}

function videoScopeMatches(coupon, videoId) {
  const constraints = [];
  for (const key of ['videoId', 'targetVideoId']) {
    if (!own(coupon, key)) continue;
    const id = safeId(coupon[key]);
    if (!id) return false;
    constraints.push(new Set([id]));
  }
  for (const key of ['videoIds', 'scopeVideoIds']) {
    if (!own(coupon, key)) continue;
    const ids = stringArray(coupon[key]);
    if (!ids || !ids.length || ids.some(id => !safeId(id))) return false;
    constraints.push(new Set(ids));
  }
  const scopeNeedsVideo = coupon.scope === 'singleVideo' || coupon.productScope === 'video' || coupon.applyScope === 'singleVideo';
  if (scopeNeedsVideo && !constraints.length) return false;
  // Video coupon only: a product/expert/all scope without an exact video identifier is not transferable to a video.
  return constraints.length > 0 && constraints.every(ids => ids.has(videoId));
}

function memberIsTargeted(coupon, member) {
  const memberIds = memberIdentifiers(member);
  if (!memberIds.size) return false;
  const targetMode = ['all', 'groups', 'members'].includes(coupon.targetMode)
    ? coupon.targetMode
    : text(coupon.target) === '전체회원' ? 'all' : text(coupon.target) === '선택회원' ? 'members' : text(coupon.target) === 'VIP회원' ? 'groups' : 'all';
  if (targetMode === 'all') return true;
  if (targetMode === 'members') {
    const targets = stringArray(coupon.targetMemberIds ?? coupon.memberIds);
    return Boolean(targets?.some(id => memberIds.has(id)));
  }
  const groups = stringArray(coupon.targetGroupIds);
  if (groups?.length) return groups.includes(member.groupId) || groups.includes(member.group);
  // Legacy seed rows model VIP targeting by the membership group label, not names/nicknames.
  return text(coupon.target) === 'VIP회원' && Boolean(text(member.group)) && text(member.group) !== '무료회원';
}

function issuanceRows(state, couponId) {
  const source = state?.records || {};
  const rows = Array.isArray(source.couponIssuances) ? source.couponIssuances : [];
  return rows.filter(row => object(row) && row.couponId === couponId);
}

function issuanceOwnerIds(issuance) {
  const values = [];
  for (const key of ['memberId', 'ownerMemberId', 'recipientMemberId', 'assignedMemberId']) {
    if (own(issuance, key) && typeof issuance[key] === 'string') values.push(issuance[key]);
  }
  if (own(issuance, 'memberIds')) {
    const ids = stringArray(issuance.memberIds);
    if (ids) values.push(...ids);
  }
  return new Set(values);
}

function issuanceUsable(issuance) {
  if (issuance.used === true || USED_STATUSES.has(text(issuance.status).toLowerCase())) return false;
  if (own(issuance, 'status') && text(issuance.status) && !ACTIVE_STATUSES.has(text(issuance.status).toLowerCase())) return false;
  const used = integerField(issuance, ['usedCount']);
  const limit = integerField(issuance, ['usageLimit', 'perMemberUsageLimit', 'memberUsageLimit']);
  if (!used.valid || !limit.valid || (limit.seen && (!limit.value || (used.value || 0) >= limit.value))) return false;
  if (own(issuance, 'remainingUses')) {
    const remaining = integerField(issuance, ['remainingUses']);
    if (!remaining.valid || !remaining.seen || remaining.value < 1) return false;
  }
  return true;
}

function ownership(coupon, state, member) {
  const rows = issuanceRows(state, coupon.id);
  if (!rows.length) return memberIsTargeted(coupon, member) ? { ok: true, issuances: [] } : { ok: false };
  const memberIds = memberIdentifiers(member);
  const mine = rows.filter(row => [...issuanceOwnerIds(row)].some(id => memberIds.has(id)));
  if (!mine.length) return { ok: false };
  const usable = mine.filter(issuanceUsable);
  return usable.length ? { ok: true, issuances: usable } : { ok: false };
}

function quotaAvailable(coupon, state, ownIssuances) {
  const total = integerField(coupon, ['totalQuantity', 'totalCount', 'maxUses']);
  const conditionalQuantity = integerField(coupon, ['couponQuantity', 'quantity']);
  const used = integerField(coupon, ['usedCount']);
  const usageLimit = integerField(coupon, ['usageLimit']);
  const memberLimit = integerField(coupon, ['memberUsageLimit', 'perMemberUsageLimit', 'maxUsesPerMember']);
  if (![total, conditionalQuantity, used, usageLimit, memberLimit].every(field => field.valid)) return false;
  let globalLimit = total.seen ? total.value : undefined;
  const method = normalizeIssueMethod(coupon);
  const quantityLimited = method === 'couponCode' || (method === 'download' && coupon.downloadQuantityLimited === true);
  if (quantityLimited && conditionalQuantity.seen) globalLimit = globalLimit === undefined ? conditionalQuantity.value : Math.min(globalLimit, conditionalQuantity.value);
  const allIssuanceUsed = issuanceRows(state, coupon.id).reduce((sum, issuance) => {
    const count = integerField(issuance, ['usedCount']);
    return count.valid ? sum + (count.value || 0) : Number.MAX_SAFE_INTEGER;
  }, 0);
  if (!Number.isSafeInteger(allIssuanceUsed)) return false;
  const globalUsed = Math.max(used.value || 0, allIssuanceUsed);
  if (globalLimit !== undefined && (globalUsed >= globalLimit || globalLimit < 1)) return false;
  if (coupon.usageUnlimited === false && (!usageLimit.seen || !usageLimit.value || globalUsed >= usageLimit.value)) return false;
  if (usageLimit.seen && globalUsed >= usageLimit.value) return false;
  const memberUsed = ownIssuances.reduce((sum, issuance) => {
    const count = integerField(issuance, ['usedCount']);
    return count.valid ? sum + (count.value || 0) : Number.MAX_SAFE_INTEGER;
  }, 0);
  if (!Number.isSafeInteger(memberUsed)) return false;
  return !memberLimit.seen || (memberLimit.value > memberUsed && memberLimit.value > 0);
}

function benefit(coupon, originalAmount) {
  const rawType = text(coupon.benefitType || coupon.discountType);
  const type = ['percentage', '정률', '비율할인'].includes(rawType) ? 'percentage' :
    ['amount', '정액', '금액할인', 'fixedAmount'].includes(rawType) ? 'amount' : '';
  const value = integerField(coupon, ['benefitValue', 'discountValue', 'amount']);
  if (!type || !value.valid || !value.seen) return null;
  if (type === 'percentage' && value.value <= 100) {
    return { type, value: value.value, discountAmount: Math.min(originalAmount, Math.floor(originalAmount * value.value / 100)) };
  }
  if (type === 'amount') return { type, value: value.value, discountAmount: Math.min(originalAmount, value.value) };
  return null;
}

function couponReady(coupon, state, member, videoId, now) {
  if (!object(coupon) || !safeId(coupon.id) || !text(coupon.title) || !couponEnabled(coupon) || !validity(coupon, now) || !videoScopeMatches(coupon, videoId)) return null;
  const access = ownership(coupon, state, member);
  if (!access.ok || !quotaAvailable(coupon, state, access.issuances)) return null;
  return access;
}

function discountLabel(coupon) {
  const rawType = text(coupon.benefitType || coupon.discountType);
  const value = integerField(coupon, ['benefitValue', 'discountValue', 'amount']);
  if (!value.valid || !value.seen) return '';
  return ['percentage', '정률', '비율할인'].includes(rawType) ? `${value.value}% 할인` : `${value.value.toLocaleString('ko-KR')}원 할인`;
}

function error(code, message, status) {
  return { status, body: { error: { code, message } } };
}

export function listVideoCoupons({ state, videoId, session, now = new Date() }) {
  const payable = paidPublicVideo(state, videoId);
  if (!payable) return error('VIDEO_NOT_FOUND', '공개 유료 영상을 찾을 수 없습니다.', 404);
  const member = resolveMember(state, session);
  if (!member) return { status: 200, body: { items: [], requiresLogin: false } };
  const coupons = Array.isArray(state?.records?.coupons) ? state.records.coupons : [];
  const items = coupons
    .filter(coupon => !isCodeCoupon(coupon))
    .filter(coupon => couponReady(coupon, state, member, videoId, now))
    .map(coupon => ({ id: coupon.id, title: text(coupon.title), discountLabel: discountLabel(coupon) }))
    .filter(item => item.discountLabel);
  return { status: 200, body: { items, requiresLogin: false } };
}

export function quoteVideoCoupon({ state, videoId, session, payload, now = new Date() }) {
  const payable = paidPublicVideo(state, videoId);
  if (!payable) return error('VIDEO_NOT_FOUND', '공개 유료 영상을 찾을 수 없습니다.', 404);
  const member = resolveMember(state, session);
  if (!member) return error('MEMBER_NOT_LINKED', '로그인 회원 정보를 확인할 수 없습니다.', 403);
  if (!object(payload)) return error('INVALID_COUPON_REQUEST', '쿠폰 선택 정보가 올바르지 않습니다.', 400);
  const couponId = payload.couponId === undefined ? '' : safeId(payload.couponId);
  const submittedCode = payload.code === undefined ? '' : exactText(payload.code).toUpperCase();
  if ((payload.couponId !== undefined && !couponId) || (payload.code !== undefined && !submittedCode) || (!couponId && !submittedCode)) {
    return error('INVALID_COUPON_REQUEST', '쿠폰 ID 또는 쿠폰코드가 필요합니다.', 400);
  }
  const coupons = Array.isArray(state?.records?.coupons) ? state.records.coupons.filter(object) : [];
  const byId = couponId ? coupons.find(coupon => coupon.id === couponId) : undefined;
  const codeMatches = submittedCode ? coupons.filter(coupon => isCodeCoupon(coupon) && couponCodes(coupon)?.includes(submittedCode)) : [];
  const byCode = codeMatches.length === 1 ? codeMatches[0] : undefined;
  if ((couponId && !byId) || (submittedCode && !byCode) || (codeMatches.length > 1) || (byId && byCode && byId !== byCode)) {
    return error('COUPON_NOT_AVAILABLE', '사용할 수 없는 쿠폰입니다.', 403);
  }
  const coupon = byId || byCode;
  if (isCodeCoupon(coupon) && !submittedCode) return error('COUPON_CODE_REQUIRED', '쿠폰코드를 정확히 입력해 주세요.', 400);
  if (submittedCode && (!isCodeCoupon(coupon) || !couponCodes(coupon)?.includes(submittedCode))) {
    return error('COUPON_NOT_AVAILABLE', '사용할 수 없는 쿠폰입니다.', 403);
  }
  const access = couponReady(coupon, state, member, videoId, now);
  const calculated = access && benefit(coupon, payable.amount);
  if (!calculated) return error('COUPON_NOT_AVAILABLE', '사용할 수 없는 쿠폰입니다.', 403);
  return {
    status: 200,
    body: {
      videoId,
      coupon: { id: coupon.id, title: text(coupon.title) },
      originalAmount: payable.amount,
      discountAmount: calculated.discountAmount,
      totalAmount: payable.amount - calculated.discountAmount,
    },
  };
}
