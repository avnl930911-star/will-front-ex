import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { categories, experts, dateLabel, getImage, type Video } from '../data';
import { VideoPoster, VideoRail } from './VideoRail';
import { readApiJson } from '@/lib/http-json';

interface VideoDetailProps {
  video: Video;
  onBack: () => void;
  onPurchase: () => void;
}

export function VideoDetail({ video, onBack, onPurchase }: VideoDetailProps) {
  const [playNotice, setPlayNotice] = useState('');
  const [playUrl, setPlayUrl] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [entitled, setEntitled] = useState(false);
  useEffect(() => {
    let active = true;
    setPlayNotice(''); setPlayUrl(''); setEntitled(false);
    if (video.paid && video.hasMedia) {
      fetch('/api/catalog/' + encodeURIComponent(video.id) + '/playback', { cache: 'no-store' })
        .then(async response => { const result = await readApiJson<{ url?: string }>(response); if (active) setEntitled(response.ok && typeof result.url === 'string'); }).catch(() => {});
    }
    return () => { active = false; };
  }, [video.id, video.paid, video.hasMedia]);
  const play = async () => {
    setRequesting(true);setPlayNotice('');
    try {
      const response = await fetch('/api/catalog/'+encodeURIComponent(video.id)+'/playback', { cache: 'no-store' });
      const result = await readApiJson<{ url?: string; error?: { message?: string } }>(response, '영상 재생 정보를 확인하지 못했습니다.');
      if (!response.ok) throw new Error(result.error?.message || '영상 재생 정보를 확인하지 못했습니다.');
      if (typeof result.url !== 'string' || !result.url) throw new Error('영상 재생 주소를 확인하지 못했습니다.');
      setPlayUrl(result.url);
    } catch (cause) { setPlayNotice(cause instanceof Error ? cause.message : '재생 연결 오류'); }
    finally { setRequesting(false); }
  };
  return <article className="video-detail">
    <div className="detail-navigation"><button className="back-to-library" onClick={onBack}><ArrowLeft size={15} /> 영상 목록으로</button><span>주식 교육 영상 <span>/ 영상 상세</span></span></div>
    <div className="detail-hero">{playUrl ? <video key={video.id} src={playUrl} poster={getImage(video)} controls autoPlay playsInline preload="metadata" aria-label={video.title+' 영상 플레이어'} onError={() => setPlayNotice('영상 파일 또는 브라우저 코덱을 확인해주세요.')} /> : <VideoPoster video={video} large />}</div>
    <div className="detail-information">
      <header className="detail-heading">
        <div className="detail-title-row">
          <h1 id="video-detail-title" tabIndex={-1} title={video.title}>{video.title}</h1>
          <div className="detail-purchase">
            <button className="primary-button" onClick={video.paid && !entitled ? onPurchase : play} disabled={requesting}>
              {requesting ? '연결 중' : video.paid && !entitled ? '결제하기' : '시청하기'}<ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
        <p className="detail-meta"><span>{experts[video.expert].name}</span><i /><span>{dateLabel(video.publishedAt)}</span></p>
      </header>
      <p className="detail-description">{video.description}</p>
      {video.paid && !entitled && <p className="detail-demo-note">결제·구매 시청권은 기존 운영 서비스 연결이 필요합니다.</p>}
      {playNotice && <p className="inline-notice" role="status"><Info size={15} /> {playNotice}</p>}
    </div>
  </article>;
}

// 상세 페이지의 추천 영역은 목록 필터와 관계없이 모든 카테고리를 표시합니다.
export function DetailVideoLibrary({ onSelect, groups }: { onSelect: (video: Video) => void; groups: { category: typeof categories[number]['id']; items: Video[] }[] }) {
  return <div className="detail-library" aria-label="카테고리별 전체 영상">
    {groups.map(({ category, items }) => items.length > 0 && <VideoRail key={category} category={category} items={items} onSelect={onSelect} />)}
  </div>;
}
