import { FileGlyph, PhotoStack, PlayIcon } from '../icons/Icons.jsx'

export function Waveform({ id, color }) {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 16777619) }
  const bars = Array.from({ length: 42 }, () => {
    h = (Math.imul(h, 1103515245) + 12345) & 0x7fffffff
    return 0.18 + (h % 1000) / 1000 * 0.82
  })
  return (
    <svg className="mk-wave" viewBox="0 0 168 80" preserveAspectRatio="none" aria-hidden="true">
      {bars.map((v, i) => (
        <rect key={i} x={i * 4 + 2} y={40 - v * 36} width="2.4" height={v * 72} rx="1.2" fill={color} />
      ))}
    </svg>
  )
}

const gradient = (hue) =>
  `linear-gradient(135deg, hsl(${hue} 64% 72%), hsl(${(hue + 36) % 360} 58% 48%))`

export default function MarketThumb({ p, big = false }) {
  if (p.type === 'audio') {
    return <div className="mk-thumb mk-audio"><Waveform id={p.id} color={p.wave || '#9aa0a6'} /></div>
  }
  if (p.type === 'image') {
    return (
      <div className="mk-thumb mk-image" style={p.hue != null ? { background: gradient(p.hue) } : undefined}>
        {p.src
          ? <img className="mk-img" src={p.src} alt="" />
          : <span className="mk-photo"><PhotoStack size={big ? 64 : 44} /></span>}
      </div>
    )
  }
  if (p.type === 'video') {
    return <div className="mk-thumb mk-video" style={{ background: gradient(p.hue ?? 220) }}><PlayIcon size={big ? 56 : 44} /></div>
  }
  if (p.type === 'design') {
    return <div className="mk-thumb mk-flat"><FileGlyph kind="design" size={big ? 88 : 64} /></div>
  }
  return <div className="mk-thumb mk-flat"><FileGlyph kind={p.ext === 'xlsx' ? 'sheet' : 'pdf'} size={big ? 88 : 64} /></div>
}
