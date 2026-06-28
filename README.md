# Dropbox prototype

React + Vite clone of the Dropbox "All files" screen. Prototype only — no backend, mock data.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build / share (QR)
```bash
npm run build    # outputs dist/
```
Deploy `dist/` to any static host (Vercel / Netlify / GitHub Pages), then generate a QR for the URL.

## Behavior
- Pixel-faithful UI, hover states on everything.
- Nothing navigates — clicking any element pops a **"Non-clickable"** tooltip (prototype marker).
- Design tokens live in `dropbox-tokens.css` (single source of truth).

## Structure
- `src/components/` — Sidebar, TopBar, Content, NonClickable (tooltip provider)
- `src/icons/Icons.jsx` — inline SVG icon set
- `src/data/files.js` — mock folders/members
