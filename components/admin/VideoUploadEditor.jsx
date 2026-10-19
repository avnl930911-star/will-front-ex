'use client';
import { useState } from 'react';

/** 4차 시안의 기존 팝업에 파일 선택만 추가합니다. FTP 인증정보는 서버 전용입니다. */
export default function VideoUploadEditor({ video, experts, videos, onClose, onSave, ui: R, canUpload=true }) {
  const isNew = !video;
  const [draft, setDraft] = useState(() => ({
    id: video?.id || crypto.randomUUID(), title: video?.title || '',
    expert: video?.expert || experts[0] || '골드마스터', category: video?.category || '주식분석',
    amount: video?.amount ?? 0, visibility: video?.visibility || '공개',
    date: video?.date || new Date().toISOString().slice(0,10), duration: video?.duration || '',
    viewLimit: video?.viewLimit || '', image: video?.image || '', videoUrl: video?.videoUrl || '', content: video?.content || '',
  }));
  const [file,setFile] = useState(null);
  const [busy,setBusy] = useState(false);
  const [progress,setProgress] = useState(0);
  const [message,setMessage] = useState('');
  const [error,setError] = useState('');
  const change=(key,value)=>setDraft(current=>({...current,[key]:value}));
  async function uploadVideo() {
    const session=await fetch('/api/session',{cache:'no-store'}).then(r=>r.json());
    if (!session.user || session.user.role!=='admin') throw new Error('관리자 업로드 권한을 확인해주세요.');
    const form=new FormData();form.append('title',draft.title.trim());form.append('description',draft.content);form.append('video',file);
    return new Promise((resolve,reject)=>{
      const xhr=new XMLHttpRequest();xhr.open('POST','/api/admin/videos');
      if(session.csrfToken) xhr.setRequestHeader('X-CSRF-Token',session.csrfToken);
      xhr.timeout=1800000;
      xhr.upload.onprogress=e=>{if(e.lengthComputable){const n=Math.round(e.loaded/e.total*100);setProgress(n);setMessage(n===100?'영상 호스팅 전송·정보 저장 중':'영상 파일을 서버로 업로드하고 있습니다.');}};
      xhr.onerror=()=>reject(new Error('연결이 끊겼습니다. 재업로드 전 저장 목록을 확인해주세요.'));
      xhr.ontimeout=()=>reject(new Error('전송 확인 시간이 초과되었습니다. 재업로드 전 서버 저장 결과를 확인해주세요.'));
      xhr.onload=()=>{let result;try{result=JSON.parse(xhr.responseText);}catch{reject(new Error('서버 응답을 확인하지 못했습니다.'));return;}
        if(xhr.status>=200&&xhr.status<300&&result.video){resolve(result.video);return;}
        reject(new Error(result.error?.message||'영상 업로드에 실패했습니다.'));};
      xhr.send(form);
    });
  }
  const submit=async event=>{
    event.preventDefault();setError('');
    if(!draft.title.trim()){setError('영상 제목을 입력해주세요.');return;}
    if(!draft.expert){setError('전문가를 선택해주세요.');return;}
    if([...draft.content].length>2000&&file){setError('파일 업로드 설명은 2,000자 이내로 입력해주세요.');return;}
    if(!file&&!draft.videoUrl&&isNew){setError('영상 파일 또는 연결할 영상 URL을 입력해주세요.');return;}
    setBusy(true);
    try{
      let hosted=null;if(file){setMessage('업로드를 준비하고 있습니다.');hosted=await uploadVideo();}
      onSave({...video,...draft,title:draft.title.trim(),amount:Math.max(0,Number(draft.amount)||0),viewLimit:draft.viewLimit===''?'':Math.max(1,Number(draft.viewLimit)||1),
        videoUrl:hosted?.url||draft.videoUrl,hostedVideoId:hosted?.id||video?.hostedVideoId,mimeType:hosted?.mimeType||video?.mimeType,views:video?.views??0,purchases:video?.purchases??0,
        frontend:video?.frontend||{summary:'',description:draft.content,hue:draft.expert==='골드마스터'?210:35}});
    }catch(cause){setError(cause.message||'등록하지 못했습니다.');setBusy(false);setMessage('');}
  };
  return <R.Modal title={isNew?'교육영상 등록':'교육영상 수정'} onClose={()=>{if(!busy)onClose();}} wide className="r-videos-editor-modal">
    <form className="r-videos-editor-form" onSubmit={submit}>
      <p className="r-note">파일은 설정된 로컬/FTP 영상 저장소로 업로드됩니다. 저장 후 공개 영상은 고객용 목록에 연결됩니다. 유료 시청권과 결제는 기존 서비스 연결이 필요합니다.</p>
      <div className="r-form">
        <R.Field label="주식교육영상 제목" hint="목록과 인기 순위에 표시됩니다." className="r-videos-field-wide"><input value={draft.title} onChange={e=>change('title',e.target.value)} maxLength={120} required autoFocus disabled={busy}/></R.Field>
        <R.Field label="전문가"><select value={draft.expert} onChange={e=>change('expert',e.target.value)} disabled={busy}>{(experts.length?experts:['골드마스터','꽃게선생']).map(expert=><option key={expert}>{expert}</option>)}</select></R.Field>
        <R.Field label="카테고리"><select value={draft.category} onChange={e=>change('category',e.target.value)} disabled={busy}>{['주식분석','주식교육','시황분석','무료영상'].map(c=><option key={c}>{c}</option>)}</select></R.Field>
        <R.Field label="영상 결제금액" hint="0원은 무료영상으로 표시됩니다."><input type="number" min="0" value={draft.amount} onChange={e=>change('amount',e.target.value)} disabled={busy}/></R.Field>
        <R.Field label="공개 범위"><select value={draft.visibility} onChange={e=>change('visibility',e.target.value)} disabled={busy}><option>공개</option><option>비공개</option></select></R.Field>
        <R.Field label="게시일"><input type="date" value={draft.date} onChange={e=>change('date',e.target.value)} disabled={busy}/></R.Field>
        <R.Field label="영상 길이" hint="예: 18:32"><input value={draft.duration} placeholder="00:00" onChange={e=>change('duration',e.target.value)} disabled={busy}/></R.Field>
        <R.Field label="시청 제한 횟수" hint="비워두면 제한 없음으로 표시합니다."><input type="number" min="1" value={draft.viewLimit} onChange={e=>change('viewLimit',e.target.value)} disabled={busy}/></R.Field>
        <R.Field label="썸네일 경로" className="r-videos-field-wide"><input value={draft.image} placeholder="/assets/example.jpg" onChange={e=>change('image',e.target.value)} disabled={busy}/></R.Field>
        <R.Field label="영상 파일 업로드" hint={canUpload?"MP4/WebM · 기본 최대 크기는 서버 MAX_UPLOAD_MB 설정을 따릅니다.":"파일 업로드는 관리자 전용입니다. 기존 영상 URL은 담당 전문가가 수정할 수 있습니다."} className="r-videos-field-wide"><input type="file" accept="video/mp4,video/webm,.mp4,.webm" onChange={e=>{setFile(e.target.files?.[0]||null);setError('');}} disabled={busy||!canUpload}/></R.Field>
        <R.Field label="영상 URL" hint={file?'선택한 파일의 호스팅 URL로 저장됩니다.':'기존 영상 URL을 유지하거나 연결할 주소를 입력합니다.'} className="r-videos-field-wide"><input value={draft.videoUrl} placeholder="https:// 또는 /media/" onChange={e=>change('videoUrl',e.target.value)} disabled={busy||Boolean(file)}/></R.Field>
        <R.Field label="영상 안내" className="r-videos-field-wide"><textarea rows="5" value={draft.content} onChange={e=>change('content',e.target.value)} disabled={busy}/></R.Field>
      </div>
      {message&&<div className="r-videos-upload-progress" role="status">{message}{file&&<progress value={progress} max="100"/>}</div>}
      {error&&<p className="r-alert" role="alert">{error}</p>}
      <div className="r-videos-editor-actions"><p>필수: 영상 제목, 전문가</p><div className="r-actions"><button type="button" className="r-secondary" onClick={onClose} disabled={busy}>취소</button><button type="submit" className="r-primary" disabled={busy}><R.Icon name="check"/>{busy?'업로드·저장 중':isNew?'교육영상 등록':'수정 저장'}</button></div></div>
    </form>
  </R.Modal>;
}
