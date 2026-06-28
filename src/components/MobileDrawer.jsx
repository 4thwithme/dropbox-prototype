import { useEffect } from 'react'
import { useNonClickable } from './NonClickable.jsx'
import { useMobileNav } from './MobileNav.jsx'
import avatar from '../assets/avatar.js'
import {
  DropboxLogo, HomeIcon, FoldersIcon, ActivityIcon, MoreIcon, StoreIcon, BagIcon,
  InstallIcon, HelpIcon, PanelIcon, CloseIcon,
} from '../icons/Icons.jsx'

export default function MobileDrawer() {
  const { open, close } = useMobileNav()
  const nc = useNonClickable()
  const route = window.location.hash.replace(/^#/, '').split('?')[0]
  const isHome = route === '' || route === '/'

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  if (!open) return null

  const dummy = (e) => { nc(e); close() }

  return (
    <div className="drawer-root">
      <div className="drawer-scrim" onClick={close} />
      <aside className="drawer" role="dialog" aria-label="Menu">
        <div className="drawer-head">
          <span className="drawer-brand"><DropboxLogo size={28} /><span>Dropbox</span></span>
          <button className="drawer-close" onClick={close} aria-label="Close menu"><CloseIcon size={20} /></button>
        </div>

        <nav className="drawer-nav">
          <a className={`drawer-item${isHome ? ' is-active' : ''}`} href="#/" onClick={close}><HomeIcon size={22} /><span>Home</span></a>
          <button className="drawer-item" onClick={dummy}><FoldersIcon size={22} /><span>Folders</span></button>
          <button className="drawer-item" onClick={dummy}><ActivityIcon size={22} /><span>Activity</span></button>
          <button className="drawer-item" onClick={dummy}><MoreIcon size={22} /><span>More</span></button>
          <a className={`drawer-item${route === '/market' ? ' is-active' : ''}`} href="#/market" onClick={close}><StoreIcon size={22} /><span>Market</span></a>
          <a className={`drawer-item${route === '/shop' ? ' is-active' : ''}`} href="#/shop" onClick={close}><BagIcon size={22} /><span>My shop</span></a>
        </nav>

        <div className="drawer-sep" />

        <nav className="drawer-nav">
          <button className="drawer-item" onClick={dummy}><InstallIcon size={22} /><span>Install app</span></button>
          <button className="drawer-item" onClick={dummy}><HelpIcon size={22} /><span>Help</span></button>
          <button className="drawer-item" onClick={dummy}><PanelIcon size={22} /><span>Layout</span></button>
        </nav>

        <div className="drawer-foot">
          <button className="drawer-account" onClick={dummy}>
            <img src={avatar} alt="" /><span>Andrii Popenko</span>
          </button>
        </div>
      </aside>
    </div>
  )
}
