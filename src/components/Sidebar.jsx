import { useNonClickable } from './NonClickable.jsx'
import {
  DropboxLogo, HomeIcon, FoldersIcon, ActivityIcon, MoreIcon,
  InstallIcon, HelpIcon, PanelIcon, StoreIcon, BagIcon,
} from '../icons/Icons.jsx'
import avatar from '../assets/avatar.js'

export default function Sidebar() {
  const nc = useNonClickable()
  const route = window.location.hash.replace(/^#/, '').split('?')[0]
  const isHome = route === '' || route === '/'

  return (
    <aside className="sidebar">
      <a className="sidebar-logo" href="#/" aria-label="Home"><DropboxLogo size={30} /></a>

      <nav className="sidebar-nav">
        <a className={`nav-item${isHome ? ' is-active' : ''}`} href="#/">
          <span className="nav-icon"><HomeIcon /></span>
          <span className="nav-label">Home</span>
        </a>
        <button className="nav-item" onClick={nc}>
          <span className="nav-icon"><FoldersIcon /></span><span className="nav-label">Folders</span>
        </button>
        <button className="nav-item" onClick={nc}>
          <span className="nav-icon"><ActivityIcon /></span><span className="nav-label">Activity</span>
        </button>
        <button className="nav-item" onClick={nc}>
          <span className="nav-icon"><MoreIcon /></span><span className="nav-label">More</span>
        </button>
        <a className={`nav-item${route === '/market' ? ' is-active' : ''}`} href="#/market">
          <span className="nav-icon"><StoreIcon /></span><span className="nav-label">Market</span>
        </a>
        <a className={`nav-item${route === '/shop' ? ' is-active' : ''}`} href="#/shop">
          <span className="nav-icon"><BagIcon /></span><span className="nav-label">My shop</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <button className="nav-mini" onClick={nc} title="Install app"><InstallIcon size={22} /></button>
        <button className="nav-mini" onClick={nc} title="Help"><HelpIcon size={22} /></button>
        <button className="nav-mini" onClick={nc} title="Layout"><PanelIcon size={22} /></button>
        <button className="sidebar-avatar" onClick={nc} aria-label="Account">
          <img src={avatar} alt="" />
        </button>
      </div>
    </aside>
  )
}
