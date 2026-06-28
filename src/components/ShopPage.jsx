import { useEffect, useMemo, useState } from 'react'
import Sidebar from './Sidebar.jsx'
import TopBar from './TopBar.jsx'
import MobileDrawer from './MobileDrawer.jsx'
import FilePreviewModal from './FilePreviewModal.jsx'
import { Thumb, Mini } from './fileVisuals.jsx'
import { useToast } from './Toast.jsx'
import { getShopItems } from '../lib/shop.js'
import { seedShop, wallet } from '../data/shop.js'
import { StarFill, DownloadIcon, WalletIcon, ArrowUp } from '../icons/Icons.jsx'

const parsePrice = (p) => Number(String(p).replace(/[^0-9.]/g, '')) || 0
const fmtMoney = (n) => '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const fmtDl = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : `${n}`)

export default function ShopPage() {
  const showToast = useToast()
  const [items, setItems] = useState([])
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    const load = () => {
      const user = getShopItems()
      // Dedup by the underlying file (same image src, else same name) — keep the
      // hardcoded (seed) listing if that file is already there.
      const keyOf = (p) => p.src || p.name
      const seedKeys = new Set(seedShop.map(keyOf))
      const seen = new Set()
      const userExtra = user.filter((u) => {
        const k = keyOf(u)
        if (seedKeys.has(k) || seen.has(k)) return false
        seen.add(k)
        return true
      })
      setItems([...userExtra, ...seedShop])
    }
    load()
    window.addEventListener('shop-change', load)
    return () => window.removeEventListener('shop-change', load)
  }, [])

  const stats = useMemo(() => {
    const sold = items.reduce((a, p) => a + (p.sales || 0), 0)
    const earned = items.reduce((a, p) => a + (p.sales || 0) * parsePrice(p.price), 0)
    const available = Math.max(0, earned - wallet.withdrawn)
    return { sold, earned, available }
  }, [items])

  return (
    <div className="app">
      <Sidebar />
      <MobileDrawer />
      <div className="main-col">
        <TopBar />
        <main className="content">
          <div className="content-head">
            <div className="content-title"><h1>My Shop</h1></div>
          </div>

          <section className="shop-stats">
            <div className="stat-card">
              <span className="stat-label">Files sold</span>
              <span className="stat-value">{stats.sold}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Total earned</span>
              <span className="stat-value">{fmtMoney(stats.earned)}</span>
            </div>
            <div className="stat-card stat-balance">
              <div className="stat-balance-top">
                <span className="stat-label">Available balance</span>
                <span className="stat-value">{fmtMoney(stats.available)}</span>
              </div>
              <button className="withdraw-btn" onClick={() => showToast('Withdrawal requested — funds arrive in 1–3 business days')}>
                <WalletIcon size={18} /> Withdraw
              </button>
            </div>
          </section>

          <div className="col-head">
            <button className="col-name"><span>Listed for sale</span><ArrowUp size={15} /></button>
            <span className="shop-count">{items.length} items</span>
          </div>

          {items.length === 0 ? (
            <p className="mk-empty">No products yet. Open a file’s ⋮ menu and choose “Add to my shop”.</p>
          ) : (
            <div className="file-grid">
              {items.map((p) => (
                <button key={p.id} className="file-card shop-card" onClick={() => setPreview(p)}>
                  <span className={`file-thumb${p.type === 'image' ? ' is-image' : ''}`}>
                    <Thumb f={p} />
                    <span className="shop-price">{p.price}</span>
                    {p.source === 'user' && <span className="shop-new">New</span>}
                  </span>
                  <span className="file-label">
                    <Mini f={p} />
                    <span className="file-text">
                      <span className="file-name">{p.name}</span>
                      <span className="file-meta shop-stats-line">
                        {p.rating != null && <><StarFill size={13} /> {p.rating}<span className="mk-dot">·</span></>}
                        <DownloadIcon size={13} /> {fmtDl(p.downloads || 0)}
                        <span className="mk-dot">·</span>{p.sales || 0} sold
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </main>
      </div>
      {preview && <FilePreviewModal item={preview} onClose={() => setPreview(null)} sub={preview.price} />}
    </div>
  )
}
