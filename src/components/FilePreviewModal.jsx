import { useEffect } from 'react'
import PreviewSurface from './PreviewSurface.jsx'
import { Mini } from './fileVisuals.jsx'
import { CloseIcon } from '../icons/Icons.jsx'

export default function FilePreviewModal({ item, onClose, sub }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="pv-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={item.name}>
        <button className="se-close" onClick={onClose} aria-label="Close"><CloseIcon size={18} /></button>
        <PreviewSurface item={item} />
        <div className="pv-meta">
          <Mini f={item} />
          <span className="pv-meta-text">
            <span className="pv-name">{item.name}</span>
            <span className="pv-sub">{sub || item.meta}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
