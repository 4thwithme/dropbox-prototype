// Encode/decode the data carried by a "direct link" so the payment page can
// reconstruct the file + price without a backend. base64url of a JSON payload.

export function encodeData(obj) {
  const json = JSON.stringify(obj)
  return btoa(encodeURIComponent(json))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export function decodeData(str) {
  if (!str) return null
  try {
    let s = str.replace(/-/g, '+').replace(/_/g, '/')
    while (s.length % 4) s += '='
    return JSON.parse(decodeURIComponent(atob(s)))
  } catch {
    return null
  }
}

// Full in-app URL to the fake payment page for this payload.
export function payUrl(data) {
  return `${location.origin}${location.pathname}#/pay?d=${encodeData(data)}`
}

// Pretty short code shown to the user (display only) — stable per name+price.
export function shortCode(name, price) {
  const str = `${name}:${price}`
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0).toString(36).slice(0, 7)
}
