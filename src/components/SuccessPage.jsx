import { DropboxLogo, CheckCircle } from '../icons/Icons.jsx'

export default function SuccessPage({ data }) {
  const name = data?.n || 'Your file'
  return (
    <div className="pay-page">
      <div className="pay-card pay-success">
        <div className="pay-brand center"><DropboxLogo size={26} /><span>Dropbox</span></div>

        <span className="success-check"><CheckCircle size={64} /></span>
        <h1 className="success-title">Payment successful</h1>

        <p className="success-text">
          <strong>{name}</strong> is now in your Dropbox.
        </p>
        <p className="success-text muted">
          An email with the download link was sent to you.
        </p>

        <a className="pay-btn" href="#/">Open in Dropbox</a>
      </div>
    </div>
  )
}
