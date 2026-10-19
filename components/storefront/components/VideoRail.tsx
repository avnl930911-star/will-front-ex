import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Play, LockKeyhole, BarChart3, GraduationCap, ChartNoAxesCombined, CirclePlay } from 'lucide-react';
import { categories, experts, getImage, price, type Video, type CategoryId } from '../data';

export function VideoPoster({ video, large = false }: { video: Video; large?: boolean }) {
  const image = getImage(video);
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [video.id]);
  return <div className={`video-poster poster-${video.sub} ${large ? 'poster-large' : ''}`}>
    {image && !failed ? <img src={image} alt="" loading={large ? 'eager' : 'lazy'} onError={() => setFailed(true)} /> : <div className="typographic-poster">
      <span className="poster-eyebrow">WILLCLUB {categories.find(c => c.id === video.sub)?.english}</span>
      <strong>{video.title.split(' — ')[0]}</strong>
      <span className="poster-author">{experts[video.expert].name}<span>EXPERT CLASS</span></span>
      <div className="poster-line" aria-hidden="true" />
    </div>}
    <span className={`video-type ${!video.paid ? 'type-free' : ''}`}>{video.paid ? <LockKeyhole size={10} /> : <Play size={10} fill="currentColor" />}{video.paid ? 'PREMIUM' : 'FREE'}</span>
    <span className="duration">{video.duration}</span>
    {!large && <span className="poster-play" aria-hidden="true"><Play size={20} fill="currentColor" /></span>}
  </div>;
}

export function VideoCard({ video, onSelect }: { video: Video; onSelect: (video: Video) => void }) {
  return <button className="video-card" onClick={() => onSelect(video)} aria-label={`${video.title}, ${experts[video.expert].name}, ${price(video.price)}, 상세 보기`}>
    <VideoPoster video={video} />
    <div className="card-information">
      <div className="card-meta-row">
        <span className="card-expert"><span className={`expert-dot expert-${video.expert}`} /><span className="expert-name">{experts[video.expert].name}</span></span>
        <span className={`card-price ${!video.paid ? 'is-free' : ''}`}>{video.paid ? price(video.price) : '무료 시청'}</span>
      </div>
      <h3>{video.title}</h3>
    </div>
  </button>;
}

const categoryIcons = { analysis: BarChart3, education: GraduationCap, market: ChartNoAxesCombined, free: CirclePlay };
export function VideoRail({ category, items, onSelect }: { category: CategoryId; items: Video[]; onSelect: (video: Video) => void }) {
  const rail = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const info = categories.find(c => c.id === category)!;
  const Icon = categoryIcons[category];
  const updateEdges = () => {
    const el = rail.current;
    if (el) setEdges({ start: el.scrollLeft < 5, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 5 });
  };
  useEffect(() => {
    const el = rail.current;
    el?.scrollTo({ left: 0 });
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [items]);
  const move = (direction: number) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.video-card');
    el.scrollBy({ left: direction * ((card?.offsetWidth ?? 270) + 22) * (window.innerWidth < 650 ? 1 : 2), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <section className="video-section" aria-labelledby={`section-${category}`}>
    <div className="section-heading"><div><div className="section-title"><span className="section-icon"><Icon size={19} strokeWidth={1.7} /></span><h2 id={`section-${category}`}>{info.label}</h2><span className="section-count">{items.length}</span></div><p>{info.description}</p></div>
      <div className="rail-controls"><span>{items.length}개의 영상</span><button className="icon-button rail-arrow" onClick={() => move(-1)} disabled={edges.start} aria-label={`${info.label} 이전 영상`}><ArrowLeft size={17} /></button><button className="icon-button rail-arrow" onClick={() => move(1)} disabled={edges.end} aria-label={`${info.label} 다음 영상`}><ArrowRight size={17} /></button></div>
    </div>
    <div className="video-rail" ref={rail} onScroll={updateEdges}>{items.map(video => <VideoCard key={video.id} video={video} onSelect={onSelect} />)}</div>
  </section>;
}
