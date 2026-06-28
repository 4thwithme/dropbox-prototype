import { Waveform } from './MarketThumb.jsx'
import { FileGlyph, PlayIcon } from '../icons/Icons.jsx'

const LOREM = [
  'Quarterly Overview',
  'This document summarizes the key results and priorities for the period. All figures are illustrative and provided for preview purposes only.',
  'Revenue grew steadily across every region, led by strong demand in the subscription tier. Operating margins improved as infrastructure costs were optimized.',
  'Looking ahead, the team will focus on expanding the marketplace, improving creator payouts, and shipping the mobile experience to a wider audience.',
  'Next steps: finalize the roadmap, align on budget, and schedule the partner review for early next quarter.',
]

function PagePreview({ name, pdf }) {
  return (
    <div className="pv-page">
      {pdf && <span className="pv-pdf-tag">PDF</span>}
      <h4 className="pv-page-title">{LOREM[0]}</h4>
      <p className="pv-page-sub">{name}</p>
      {LOREM.slice(1).map((t, i) => <p key={i} className="pv-page-text">{t}</p>)}
    </div>
  )
}

function SheetPreview() {
  const cols = ['A', 'B', 'C', 'D']
  const rows = [
    ['Region', 'Q1', 'Q2', 'Q3'],
    ['North', '12,400', '14,100', '15,800'],
    ['South', '8,200', '9,050', '10,300'],
    ['EMEA', '21,700', '23,400', '25,900'],
    ['APAC', '6,300', '7,800', '9,200'],
    ['Total', '48,600', '54,350', '61,200'],
  ]
  return (
    <div className="pv-sheet">
      <div className="pv-sheet-row pv-sheet-head">
        <span className="pv-cell pv-corner" />
        {cols.map((c) => <span key={c} className="pv-cell">{c}</span>)}
      </div>
      {rows.map((r, i) => (
        <div key={i} className="pv-sheet-row">
          <span className="pv-cell pv-rownum">{i + 1}</span>
          {r.map((v, j) => <span key={j} className={`pv-cell${i === 0 || j === 0 ? ' pv-strong' : ''}`}>{v}</span>)}
        </div>
      ))}
    </div>
  )
}

const gradient = (hue) =>
  `linear-gradient(135deg, hsl(${hue} 64% 72%), hsl(${(hue + 36) % 360} 58% 48%))`

function Body({ item }) {
  const t = item.type
  if (t === 'image' && item.src) return <img className="pv-img" src={item.src} alt="" />
  if (t === 'audio') return <div className="pv-audio"><Waveform id={item.id || item.name} color={item.wave || '#cfd3d6'} /></div>
  if (t === 'video') return <div className="pv-video" style={{ background: gradient(item.hue ?? 220) }}><PlayIcon size={64} /></div>
  if (t === 'pdf' || t === 'doc') return <PagePreview name={item.name} pdf={t === 'pdf' || item.ext === 'pdf'} />
  if (t === 'sheet' || item.ext === 'xlsx') return <SheetPreview />
  return <div className="pv-glyph"><FileGlyph kind={t} size={120} /></div>
}

export default function PreviewSurface({ item }) {
  return (
    <div className={`pv-surface pv-type-${item.type}`}>
      <div className="pv-body">
        <Body item={item} />
      </div>
      <div className="pv-wm" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>Dropbox&nbsp;&nbsp;Dropbox&nbsp;&nbsp;Dropbox&nbsp;&nbsp;Dropbox&nbsp;&nbsp;Dropbox</span>
        ))}
      </div>
    </div>
  )
}
