import { useEffect, useState } from 'react'
import { NonClickableProvider } from './components/NonClickable.jsx'
import { ToastProvider } from './components/Toast.jsx'
import { MobileNavProvider } from './components/MobileNav.jsx'
import MobileDrawer from './components/MobileDrawer.jsx'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import Content from './components/Content.jsx'
import PaymentPage from './components/PaymentPage.jsx'
import SuccessPage from './components/SuccessPage.jsx'
import MarketPage from './components/MarketPage.jsx'
import ShopPage from './components/ShopPage.jsx'
import { decodeData } from './lib/link.js'

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const raw = hash.replace(/^#/, '')
  const [path, query] = raw.split('?')
  return { path, params: new URLSearchParams(query || '') }
}

export default function App() {
  const { path, params } = useHashRoute()

  if (path === '/pay') return <PaymentPage data={decodeData(params.get('d'))} />
  if (path === '/success') return <SuccessPage data={decodeData(params.get('d'))} />
  if (path === '/market') {
    return (
      <NonClickableProvider>
        <MarketPage />
      </NonClickableProvider>
    )
  }
  if (path === '/shop') {
    return (
      <NonClickableProvider>
        <ToastProvider>
          <MobileNavProvider>
            <ShopPage />
          </MobileNavProvider>
        </ToastProvider>
      </NonClickableProvider>
    )
  }

  return (
    <NonClickableProvider>
      <ToastProvider>
        <MobileNavProvider>
          <div className="app">
            <Sidebar />
            <div className="main-col">
              <TopBar />
              <Content />
            </div>
            <MobileDrawer />
          </div>
        </MobileNavProvider>
      </ToastProvider>
    </NonClickableProvider>
  )
}
