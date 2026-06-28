import { DropboxLogo, FileGlyph, FolderMini, LockIcon, CardIcon } from '../icons/Icons.jsx'
import { encodeData } from '../lib/link.js'

const TYPE_LABEL = {
  image: 'Image', pdf: 'PDF document', sheet: 'Spreadsheet', doc: 'Document',
  model3d: '3D model', audio: 'Audio', book: 'eBook', archive: 'Archive', design: 'Figma file',
  video: 'Video',
}

function BigIcon({ data }) {
  if (data.t === 'image' && data.s) return <img className="pay-thumb" src={data.s} alt="" />
  if (data.t === 'folder') return <FolderMini glyph={data.glyph || 'plain'} size={48} />
  return <FileGlyph kind={data.t} size={52} />
}

export default function PaymentPage({ data }) {
  if (!data) {
    return (
      <div className="pay-page">
        <div className="pay-card"><p className="pay-invalid">This payment link is invalid or expired.</p>
          <a className="pay-btn" href="#/">Go to Dropbox</a></div>
      </div>
    )
  }

  const submit = (e) => {
    e.preventDefault()
    window.location.hash = `#/success?d=${encodeData(data)}`
  }

  return (
    <div className="pay-page">
      <div className="pay-card">
        <div className="pay-brand"><DropboxLogo size={26} /><span>Dropbox</span></div>

        <div className="pay-summary">
          <span className="pay-icon"><BigIcon data={data} /></span>
          <span className="pay-meta">
            <span className="pay-name">{data.n}</span>
            <span className="pay-type">{data.c ? `by ${data.c}` : (TYPE_LABEL[data.t] || 'File')}</span>
          </span>
          <span className="pay-price">{data.p}</span>
        </div>

        <form className="pay-form" onSubmit={submit}>
          <label className="pay-label">Card number
            <span className="pay-input-wrap">
              <span className="pay-lead"><CardIcon size={18} /></span>
              <input className="pay-input" inputMode="numeric" placeholder="4242 4242 4242 4242" defaultValue="4242 4242 4242 4242" required />
            </span>
          </label>

          <div className="pay-row">
            <label className="pay-label">Expiry
              <span className="pay-input-wrap"><input className="pay-input" placeholder="MM / YY" defaultValue="12 / 28" required /></span>
            </label>
            <label className="pay-label">CVC
              <span className="pay-input-wrap"><input className="pay-input" placeholder="123" defaultValue="123" required /></span>
            </label>
          </div>

          <label className="pay-label">Name on card
            <span className="pay-input-wrap"><input className="pay-input" placeholder="Andrii Popenko" defaultValue="Andrii Popenko" required /></span>
          </label>

          <button className="pay-btn" type="submit">Pay {data.p}</button>
        </form>

        <p className="pay-secure"><LockIcon size={14} /> Secure checkout · Demo only — no real charge</p>
      </div>
    </div>
  )
}
