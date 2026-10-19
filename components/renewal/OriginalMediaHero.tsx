'use client';
import { type ReactNode } from 'react';
import { useRenewalActions } from './context';
export default function OriginalMediaHero({ video, children }: { video: { id: string }; children: ReactNode }) {
  const { playback } = useRenewalActions();
  if (playback?.videoId !== video.id || !playback?.url) return <>{children}</>;
  return <video key={video.id} src={playback.url} controls autoPlay playsInline controlsList="nodownload" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#111' }} />;
}
