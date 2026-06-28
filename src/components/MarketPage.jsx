import { useMemo, useState } from 'react'
import { useNonClickable } from './NonClickable.jsx'
import MarketThumb from './MarketThumb.jsx'
import { categories, products, sorts, sortProducts } from '../data/market.js'
import { encodeData } from '../lib/link.js'
import { DropboxLogo, SearchIcon, ActivityIcon, StarFill, DownloadIcon, CloseIcon, ChevronDown } from '../icons/Icons.jsx'

const fmtDl = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : `${n}`)

function payHref(p) {
  const t = p.type === 'doc' ? (p.ext === 'xlsx' ? 'sheet' : 'pdf') : p.type
  const data = { n: p.title, p: `$${p.price.toFixed(2)}`, t, s: p.src || '', c: p.creator }
  return `#/pay?d=${encodeData(data)}`
}
const buy = (p) => { window.location.hash = payHref(p) }

function Stats({ p }) {
  return (
    <div className="mk-stats">
      <span className="mk-stat"><StarFill size={14} /> {p.rating}</span>
      <span className="mk-dot">·</span>
      <span className="mk-stat"><DownloadIcon size={14} /> {fmtDl(p.downloads)}</span>
    </div>
  )
}

function QuickView({ p, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="qv" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={p.title}>
        <button className="se-close" onClick={onClose} aria-label="Close"><CloseIcon size={18} /></button>
        <div className="qv-thumb"><MarketThumb p={p} big /></div>
        <div className="qv-body">
          <span className="qv-ext">{p.ext.toUpperCase()} · {p.category}</span>
          <h3 className="qv-title">{p.title}</h3>
          <p className="qv-creator">by {p.creator}</p>
          <Stats p={p} />
          <p className="qv-desc">{p.desc}</p>
          <div className="qv-foot">
            <span className="qv-price">${p.price.toFixed(2)}</span>
            <button className="qv-buy" onClick={() => buy(p)}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MarketPage() {
  const nc = useNonClickable()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('featured')
  const [preview, setPreview] = useState(null)

  const list = useMemo(() => {
    const term = q.trim().toLowerCase()
    let r = products.filter((p) => cat === 'All' || p.category === cat)
    if (term) {
      r = r.filter((p) =>
        [p.title, p.creator, p.ext, p.category, p.type].some((f) => f.toLowerCase().includes(term)))
    }
    return sortProducts(r, sort)
  }, [q, cat, sort])

  return (
    <div className="mk">
      <header className="mk-top">
        <a className="mk-brand" href="#/"><DropboxLogo size={26} /><span>Dropbox</span></a>
        <div className="mk-search">
          <SearchIcon size={20} />
          <input
            className="mk-search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search files, templates, creators…"
          />
        </div>
        <a className="mk-sell" href="#/shop">Sell your files</a>
        <button className="mk-bell" onClick={nc} aria-label="Notifications"><ActivityIcon size={22} /></button>
      </header>

      <div className="mk-body">
        <div className="mk-toolbar">
          <nav className="mk-tabs">
            {categories.map((c) => (
              <button key={c} className={`mk-tab${cat === c ? ' is-active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </nav>
          <label className="mk-sort">
            <span className="mk-sort-label">Sort by</span>
            <span className="mk-select-wrap">
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {sorts.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
              <ChevronDown size={16} />
            </span>
          </label>
        </div>

        {list.length === 0 ? (
          <p className="mk-empty">No results for “{q}”. Try a name, creator, or extension.</p>
        ) : (
          <div className="mk-grid">
            {list.map((p) => (
              <article key={p.id} className="mk-card" onClick={() => setPreview(p)}>
                <MarketThumb p={p} />
                <div className="mk-info">
                  <h3 className="mk-title">{p.title}</h3>
                  <p className="mk-creator">{p.creator}</p>
                  <Stats p={p} />
                  <div className="mk-buyrow">
                    <span className="mk-price">${p.price}</span>
                    <button className="mk-buy" onClick={(e) => { e.stopPropagation(); buy(p) }}>Buy</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {preview && <QuickView p={preview} onClose={() => setPreview(null)} />}
    </div>
  )
}
