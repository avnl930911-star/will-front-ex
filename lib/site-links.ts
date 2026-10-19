function sitePath(origin: string | undefined, path: string): string {
  if (!origin?.trim()) return path;
  try {
    const url = new URL(origin.trim());
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || (url.pathname !== '/' && url.pathname !== '')) return path;
    return new URL(path, url.origin).href;
  } catch { return path; }
}

export function frontPageUrl(path = '/'): string {
  return sitePath(process.env.NEXT_PUBLIC_FRONT_SITE_URL, path);
}

export function adminPageUrl(path = '/admin'): string {
  return sitePath(process.env.NEXT_PUBLIC_ADMIN_SITE_URL, path);
}
