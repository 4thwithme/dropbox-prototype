import { useEffect, useState } from 'react'
import { useToast } from './Toast.jsx'
import { FileGlyph, FolderMini, UserIcon, LinkIcon, CloseIcon } from '../icons/Icons.jsx'
import { encodeData, shortCode } from '../lib/link.js'
import { addToShop } from '../lib/shop.js'

function FileIcon({ file }) {
  if (file.type === 'folder') return <FolderMini glyph={file.glyph} size={24} />
  if (file.type === 'image') return <img className="se-thumb" src={file.src} alt="" />
  return <FileGlyph kind={file.type} size={18} />
}

export default function ShareEarnModal({ file, onClose, mode = 'earn' }) {
  const shop = mode === 'shop'
  const showToast = useToast()
  const [amount, setAmount] = useState('25.00')
  const [email, setEmail] = useState('press@beatsmagazine.co')
  const price = `$${amount || '0'}`

  const priceError =
    amount.trim() === '' ? 'Please enter a price'
    : Number(amount) > 0 ? ''
    : 'Price must be greater than 0'

  // Only digits and a single decimal point — the "$" prefix stays fixed.
  const onAmount = (e) => {
    let v = e.target.value.replace(/[^\d.]/g, '')
    const i = v.indexOf('.')
    if (i !== -1) v = v.slice(0, i + 1) + v.slice(i + 1).replace(/\./g, '')
    setAmount(v)
  }

  // Link encodes file name + price so the payment page can read them.
  const payload = encodeData({ n: file.name, p: price, t: file.type, s: file.src || '' })
  const payHref = `#/pay?d=${payload}`
  const fullUrl = `${location.origin}${location.pathname}${payHref}`
  const prettyLink = `dbx.link/${shortCode(file.name, price)}`

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const copyAndClose = (e) => {
    e.stopPropagation()
    if (priceError) return
    navigator.clipboard?.writeText(fullUrl).catch(() => {})
    onClose()
    showToast('Direct link copied — share it to get paid')
  }

  const shareAndClose = (e) => {
    e.stopPropagation()
    if (priceError) return
    onClose()
    showToast(`“${file.name}” is now for sale at ${price}`)
  }

  const addAndClose = (e) => {
    e.stopPropagation()
    if (priceError) return
    addToShop(file, price)
    onClose()
    showToast(`“${file.name}” added to your shop at ${price}`)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="se-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={shop ? 'Add to my shop' : 'Share and earn'}>
        <button className="se-close" onClick={onClose} aria-label="Close"><CloseIcon size={18} /></button>

        <h3 className="se-title">{shop ? 'Add to My Shop' : 'Share & Earn'}</h3>

        <div className="se-file">
          <span className="se-file-icon"><FileIcon file={file} /></span>
          <span className="se-file-name">{file.name}</span>
        </div>

        <label className={`se-field se-price${priceError ? ' is-invalid' : ''}`}>
          <span className="se-price-label">Set Price:</span>
          <span className="se-currency">$</span>
          <input
            className="se-input se-amount"
            value={amount}
            onChange={onAmount}
            inputMode="decimal"
            placeholder="0.00"
            aria-invalid={!!priceError}
            autoFocus
          />
        </label>
        {priceError && <span className="se-error">{priceError}</span>}

        {!shop && !priceError && (
          <p className="se-earn">
            You will earn: <strong>${(Number(amount) * 0.90).toFixed(2)}</strong>
            <span className="se-earn-note"> (price − 10% fee)</span>
          </p>
        )}

        {!shop && (
          <>
            <div className="se-field se-email">
              <span className="se-lead"><UserIcon size={18} /></span>
              <input className="se-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Add email" />
            </div>

            <div className="se-linkrow">
              <span className="se-sublabel">Share via direct link</span>
              <div className="se-field se-link">
                <span className="se-lead"><LinkIcon size={18} /></span>
                <a className="se-input se-linktext" href={payHref}>{prettyLink}</a>
                <button className="se-copy" onClick={copyAndClose} disabled={!!priceError}>Copy</button>
              </div>
            </div>
          </>
        )}

        {shop
          ? <button className="se-submit" onClick={addAndClose} disabled={!!priceError}>Add to my shop</button>
          : <button className="se-submit" onClick={shareAndClose} disabled={!!priceError}>Share &amp; Earn 💰</button>}
      </div>
    </div>
  )
}
