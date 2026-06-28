import { useEffect, useState } from 'react'
import { useNonClickable } from './NonClickable.jsx'
import ShareEarnModal from './ShareEarnModal.jsx'
import { Thumb, Mini } from './fileVisuals.jsx'
import { suggested, files, members } from '../data/files.js'
import avatar from '../assets/avatar.js'
import {
  GearIcon, EyeIcon, ChevronLeft, ChevronRight, UploadIcon, NewFolderIcon,
  InstallIcon, PlusIcon, ChevronDown, ClockIcon, StarIcon, GridIcon, ColumnsIcon,
  ArrowUp, FolderMini, DotsIcon, CheckSquare, FileGlyph,
  DotsV, LinkIcon, PencilIcon, DownloadIcon, BagIcon,
} from '../icons/Icons.jsx'

export default function Content() {
  const nc = useNonClickable()
  const [shareFile, setShareFile] = useState(null)
  const [shopFile, setShopFile] = useState(null)
  const [menu, setMenu] = useState(null) // { file, x, y }

  const openMenu = (f) => (e) => {
    e.preventDefault(); e.stopPropagation()
    const r = e.currentTarget.getBoundingClientRect()
    setMenu({ file: f, x: r.right, y: r.bottom })
  }

  return (
    <main className="content">
      <ContentHeader nc={nc} />
      <Suggested nc={nc} />
      <FilterRow nc={nc} />
      <FileGrid nc={nc} onShare={setShareFile} onMenu={openMenu} />

      {menu && (
        <CardMenu
          menu={menu}
          nc={nc}
          onClose={() => setMenu(null)}
          onAddShop={(f) => { setMenu(null); setShopFile(f) }}
        />
      )}
      {shareFile && <ShareEarnModal file={shareFile} onClose={() => setShareFile(null)} />}
      {shopFile && <ShareEarnModal file={shopFile} mode="shop" onClose={() => setShopFile(null)} />}
    </main>
  )
}

function CardMenu({ menu, nc, onClose, onAddShop }) {
  const { file, x, y } = menu
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const dummy = (e) => { nc(e); onClose() }

  return (
    <>
      <div className="menu-overlay" onClick={onClose} />
      <div className="card-dropdown" style={{ top: y + 6, left: x }}>
        <button className="menu-item" onClick={dummy}><DownloadIcon size={17} /> Download</button>
        <button className="menu-item" onClick={dummy}><PencilIcon size={17} /> Rename</button>
        <button className="menu-item" onClick={dummy}><LinkIcon size={17} /> Copy link</button>
        {file.type !== 'folder' && (
          <>
            <div className="menu-sep" />
            <button className="menu-item is-primary" onClick={() => onAddShop(file)}>
              <BagIcon size={17} /> Add to my shop
            </button>
          </>
        )}
      </div>
    </>
  )
}

function ContentHeader({ nc }) {
  return (
    <div className="content-head">
      <div className="content-title">
        <h1>All files</h1>
        <button className="icon-btn" onClick={nc} aria-label="Settings"><GearIcon size={18} /></button>
      </div>

      <div className="content-actions">
        <button className="action-btn" onClick={nc}><UploadIcon size={18} /><span>Upload</span><ChevronDown size={14} /></button>
        <button className="action-btn" onClick={nc}><NewFolderIcon size={18} /><span>New folder</span></button>
        <button className="action-btn" onClick={nc}><InstallIcon size={18} /><span>Install app</span></button>

        <div className="avatars" onClick={nc}>
          {members.map((m, i) => (
            <span key={m.id} className="avatar-chip" style={{ background: m.color, zIndex: 10 - i }}>
              {m.img ? <img src={avatar} alt="" /> : m.initials}
            </span>
          ))}
          <span className="avatar-count">3</span>
        </div>

        <button className="add-round" onClick={nc} aria-label="Add"><PlusIcon size={20} /></button>
      </div>
    </div>
  )
}

function Suggested({ nc }) {
  return (
    <section className="suggested">
      <div className="suggested-head">
        <span className="suggested-label">Suggested for you</span>
        <button className="icon-btn ghost" onClick={nc} aria-label="Hide"><EyeIcon size={18} /></button>
        <div className="suggested-nav">
          <button className="icon-btn ghost" onClick={nc} aria-label="Previous"><ChevronLeft size={18} /></button>
          <button className="icon-btn ghost" onClick={nc} aria-label="Next"><ChevronRight size={18} /></button>
        </div>
      </div>

      <div className="suggested-cards">
        {suggested.map((c) => (
          <button key={c.id} className="sug-card" onClick={nc}>
            {c.type === 'folder'
              ? <FolderMini glyph={c.glyph} size={40} />
              : <span className="sug-fileicon"><FileGlyph kind={c.type} size={28} /></span>}
            <span className="sug-text">
              <span className="sug-name">{c.name}</span>
              <span className="sug-meta">{c.meta}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

function FilterRow({ nc }) {
  return (
    <div className="filter-row">
      <div className="chips">
        <button className="chip" onClick={nc}><ClockIcon size={18} /><span>Recents</span></button>
        <button className="chip" onClick={nc}><StarIcon size={18} /><span>Starred</span></button>
      </div>
      <div className="view-toggle">
        <button className="icon-btn ghost is-active" onClick={nc} aria-label="Grid view"><GridIcon size={18} /></button>
        <button className="icon-btn ghost" onClick={nc} aria-label="Column view"><ColumnsIcon size={18} /></button>
      </div>
    </div>
  )
}

function FileGrid({ nc, onShare, onMenu }) {
  const openShare = (f) => (e) => { e.preventDefault(); e.stopPropagation(); onShare(f) }
  return (
    <section className="file-section">
      <div className="col-head">
        <span className="col-check mobile-only" onClick={nc}><CheckSquare size={22} /></span>
        <button className="col-name" onClick={nc}><span>Name</span><ArrowUp size={15} /></button>
      </div>

      <div className="file-grid">
        {files.map((f) => (
          <button key={f.id} className="file-card" onClick={nc}>
            <span className={`file-thumb${f.type === 'image' ? ' is-image' : ''}`}>
              <span className="card-check" onClick={nc}><CheckSquare size={22} /></span>
              <button className="card-menu mobile-only" onClick={onMenu(f)} aria-label="More"><DotsIcon size={20} /></button>
              <span className="card-tools" onClick={nc}>
                <span className="share-btn">Share</span>
                <span className="tool-group">
                  <span className="tool-ic"><LinkIcon size={18} /></span>
                  <span className="tool-ic"><PencilIcon size={18} /></span>
                  <button className="tool-ic" onClick={onMenu(f)} aria-label="More"><DotsV size={18} /></button>
                </span>
              </span>
              <Thumb f={f} />
              {f.type !== 'folder' && (
                <>
                  <span className="thumb-badge" onClick={nc}><PencilIcon size={12} /></span>
                  <button className="earn-btn" onClick={openShare(f)} aria-label="Share & Earn">
                    <span className="earn-icon">$</span>
                    <span className="earn-label">Share &amp; Earn</span>
                  </button>
                </>
              )}
            </span>
            <span className="file-label">
              <Mini f={f} />
              <span className="file-text">
                <span className="file-name">{f.name}</span>
                <span className="file-meta">{f.meta}</span>
              </span>
              <span className="file-star" onClick={nc}><StarIcon size={20} /></span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
