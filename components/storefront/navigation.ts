import { videos, type Video } from './data';

export function videoFromHash(hash: string, library: Video[] = videos): Video | null {
  const id = new URLSearchParams(hash.replace(/^#/, '')).get('video');
  return library.find(video => video.id === id) ?? null;
}

export function videoHash(video: Video): string {
  return `#${new URLSearchParams({ video: video.id }).toString()}`;
}
