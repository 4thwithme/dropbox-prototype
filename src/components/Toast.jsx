import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { CheckCircle } from '../icons/Icons.jsx'

const Ctx = createContext(() => {})
export const useToast = () => useContext(Ctx)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timer = useRef(null)
  const keyRef = useRef(0)

  const show = useCallback((message) => {
    keyRef.current += 1
    setToast({ message, key: keyRef.current })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 3400)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <Ctx.Provider value={show}>
      {children}
      {toast && (
        <div key={toast.key} className="toast" role="status">
          <span className="toast-ic"><CheckCircle size={18} /></span>
          <span>{toast.message}</span>
        </div>
      )}
    </Ctx.Provider>
  )
}
