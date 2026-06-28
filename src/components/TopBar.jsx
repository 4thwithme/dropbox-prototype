import { useNonClickable } from './NonClickable.jsx'
import { useMobileNav } from './MobileNav.jsx'
import { PlusIcon, SearchIcon, InviteIcon, MenuIcon, StoreIcon } from '../icons/Icons.jsx'

export default function TopBar() {
  const nc = useNonClickable()
  const { toggle } = useMobileNav()
  return (
    <header className="topbar">
      <button className="topbar-menu" onClick={toggle} aria-label="Menu">
        <MenuIcon size={24} />
      </button>

      <button className="btn-new" onClick={nc}>
        <PlusIcon size={18} />
        <span>New</span>
      </button>

      <div className="search" onClick={nc}>
        <SearchIcon size={20} />
        <input
          className="search-input"
          placeholder="Search"
          readOnly
          onMouseDown={(e) => e.preventDefault()}
        />
      </div>

      <a className="btn-market" href="#/market">
        <StoreIcon size={18} />
        <span>Marketplace</span>
      </a>

      <button className="btn-invite" onClick={nc}>
        <InviteIcon size={18} />
        <span>Invite members</span>
      </button>
    </header>
  )
}
