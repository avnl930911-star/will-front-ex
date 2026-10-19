function asText(value, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback;
}

function finiteNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function withoutHtml(value) {
  return asText(value)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 4000);
}

function safePublicAsset(value) {
  const raw = asText(value);
  if (!raw || /[\u0000-\u001f\u007f]/.test(raw) || raw.startsWith('//')) return undefined;
  if (raw.startsWith('/')) return raw;
  try {
    const url = new URL(raw);
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export function normalizeExpert(value) {
  const raw = asText(value).toLowerCase();
  if (raw === 'ggotge' || raw.includes('꽃게') || raw.includes('ggot')) return 'ggotge';
  return 'goldmaster';
}

function normalizeSub(value) {
  const raw = asText(value).toLowerCase();
  if (['analysis', 'education', 'market', 'free'].includes(raw)) return raw;
  if (raw.includes('교육')) return 'education';
  if (raw.includes('시장') || raw.includes('마켓') || raw.includes('시황')) return 'market';
  if (raw.includes('무료')) return 'free';
  return 'analysis';
}

function isoDate(value) {
  const text = asText(value);
  if (!text) return new Date(0).toISOString();
  const date = /^\d{4}-\d{2}-\d{2}$/.test(text) ? new Date(`${text}T00:00:00.000Z`) : new Date(text);
  return Number.isNaN(date.valueOf()) ? new Date(0).toISOString() : date.toISOString();
}

function safeHue(value) {
  const number=Number(value);
  return Number.isFinite(number) && number>=0 && number<=360 ? number : 210;
}

function isYoutube(url) {
  const host = url.hostname.toLowerCase();
  return host === 'youtu.be' || host === 'youtube.com' || host.endsWith('.youtube.com');
}

function validMediaPath(url) {
  return /^\/media\/[A-Za-z0-9][A-Za-z0-9._-]{0,180}\.(mp4|webm)$/i.test(url.pathname);
}

/** 상대 /media URL, 개발용 동일-origin HTTP, 운영 HTTPS만 재생 주소로 허용한다. */
export function isAllowedVideoUrl(value, { siteOrigin } = {}) {
  const raw = asText(value);
  if (!raw || /[\u0000-\u001f\u007f]/.test(raw) || raw.startsWith('//')) return false;
  const base = siteOrigin || 'http://localhost';
  let url;
  try {
    url = new URL(raw, base);
  } catch {
    return false;
  }
  if (url.username || url.password || isYoutube(url) || !/\.(mp4|webm)$/i.test(url.pathname)) return false;
  if (raw.startsWith('/')) return validMediaPath(url);
  if (url.protocol === 'https:') return true;
  if (url.protocol !== 'http:') return false;
  try {
    const localOrigin = new URL(base).origin;
    return url.origin === localOrigin || ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  } catch {
    return ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  }
}

export function mimeTypeFor(url) {
  return /\.webm(?:$|[?#])/i.test(url) ? 'video/webm' : 'video/mp4';
}

export function isPublicVideo(row) {
  return row && row.visibility === '공개';
}

export function catalogVideo(row, options) {
  if (!isPublicVideo(row)) return null;
  const frontend = row.frontend && typeof row.frontend === 'object' ? row.frontend : {};
  const videoUrl = asText(row.videoUrl);
  const item = {
    id: asText(row.id),
    title: asText(row.title),
    expert: normalizeExpert(row.expert),
    sub: normalizeSub(row.category || frontend.sub),
    paid: finiteNumber(row.amount) > 0,
    price: Math.max(0, finiteNumber(row.amount)),
    duration: asText(row.duration),
    views: Math.max(0, Math.trunc(finiteNumber(row.views))),
    publishedAt: isoDate(row.date),
    summary: withoutHtml(frontend.summary || row.content),
    description: withoutHtml(row.content || frontend.description),
    hue: safeHue(frontend.hue),
    hasMedia: isAllowedVideoUrl(videoUrl, options),
  };
  const thumbnail = safePublicAsset(row.image);
  if (thumbnail) item.thumbnail = thumbnail;
  return item;
}

export function buildCatalog(state, options) {
  const rows = Array.isArray(state?.records?.videos) ? state.records.videos : [];
  return rows.map(row => catalogVideo(row, options)).filter(Boolean);
}

export function findPlaybackVideo(state, id, options) {
  const rows = Array.isArray(state?.records?.videos) ? state.records.videos : [];
  const row = rows.find(item => item?.id === id && isPublicVideo(item));
  if (!row) return { status: 404, code: 'VIDEO_NOT_FOUND', message: '영상을 찾을 수 없습니다.' };
  if (finiteNumber(row.amount) > 0) {
    return { status: 403, code: 'PURCHASE_REQUIRED', message: '유료 영상은 기존 구매·회원 시청권 연결이 필요합니다.' };
  }
  if (!isAllowedVideoUrl(row.videoUrl, options)) {
    return { status: 404, code: 'MEDIA_NOT_CONNECTED', message: '재생 가능한 미디어가 연결되지 않았습니다.' };
  }
  return { url: asText(row.videoUrl), mimeType: mimeTypeFor(row.videoUrl) };
}

/** 전문가에게는 자기 영상·글만, 회원 레코드에는 전화·이메일 없이 보낸다. */
export function restrictStateForExpert(state, expert) {
  const source=state.records||{};
  const same=value=>Boolean(asText(value)) && (asText(value)===asText(expert) || normalizeExpert(value)===normalizeExpert(expert));
  const products=(source.products||[]).filter(p=>same(p.expert));
  const names=new Set(products.map(p=>p.title));
  const videos=(source.videos||[]).filter(p=>same(p.expert));
  const videoIds=new Set(videos.map(p=>p.id));
  const members=(source.members||[]).filter(m=>names.has(m.group)||(m.services||[]).some(s=>names.has(s.product)||same(s.expert)));
  const payments=(source.payments||[]).filter(p=>same(p.expert)||videoIds.has(p.videoId)||names.has(p.product));
  const articles=(source.articles||[]).filter(a=>same(a.expert)||a.board===expert+' 게시판');
  function redact(value){
    if(Array.isArray(value))return value.map(redact);
    if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).filter(([k])=>!/(phone|email|password|mobile|contact|telegram|receiptNumber)/i.test(k)).map(([k,v])=>[k,redact(v)]));
    return value;
  }
  const records=Object.fromEntries(Object.keys(source).map(k=>[k,[]]));
  return {...state,records:{...records,products:redact(products),videos:redact(videos),members:redact(members),payments:redact(payments),articles:redact(articles)},logs:[]};
}

/** 상태의 로컬 /media URL이 요청 파일을 실제로 참조하는지 검사한다. */
export function referencesLocalMedia(row, filename, { siteOrigin, localVideoBaseUrl }) {
  const raw = asText(row?.videoUrl);
  if (!raw || !isAllowedVideoUrl(raw, { siteOrigin })) return false;
  let url;
  try {
    url = new URL(raw, siteOrigin);
  } catch {
    return false;
  }
  if (url.pathname !== `/media/${filename}`) return false;
  if (raw.startsWith('/')) return true;
  try {
    const allowedOrigins = new Set([new URL(siteOrigin).origin, new URL(localVideoBaseUrl).origin]);
    return allowedOrigins.has(url.origin);
  } catch {
    return false;
  }
}
