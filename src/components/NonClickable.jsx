import { createContext, useContext, useEffect, useRef, useState } from 'react'

const Ctx = createContext(() => {})

// Hook: returns a click handler that pops a "Non-clickable" tooltip at the cursor.
export const useNonClickable = (label) => {
  const fire = useContext(Ctx)
  return (e) => {
    e.preventDefault()
    e.stopPropagation()
    fire(e.clientX, e.clientY, label || 'Non-clickable')
  }
}

export function NonClickableProvider({ children }) {
  const [tip, setTip] = useState(null) // { x, y, label, key }
  const timer = useRef(null)
  const keyRef = useRef(0)

  const fire = (x, y, label) => {
    keyRef.current += 1
    setTip({ x, y, label, key: keyRef.current })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setTip(null), 1400)
  }

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <Ctx.Provider value={fire}>
      {children}
      {tip && (
        <div
          key={tip.key}
          className="nc-tooltip"
          style={{ left: tip.x, top: tip.y }}
          role="status"
        >
          {tip.label}
        </div>
      )}
    </Ctx.Provider>
  )
}
