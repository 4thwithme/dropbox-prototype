// Generic avatar as an inline SVG data URI (no external asset needed).
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <rect width="80" height="80" fill="#cfd6df"/>
  <circle cx="40" cy="31" r="15" fill="#5b6675"/>
  <path d="M12 78a28 28 0 0 1 56 0z" fill="#3f4a59"/>
</svg>`
export default `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
