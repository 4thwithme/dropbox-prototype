// Tiny localStorage-backed store for "My Shop" listings.
const KEY = 'db_shop_v1'

const read = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
}
const write = (list) => {
  localStorage.setItem(KEY, JSON.stringify(list))
  window.dispatchEvent(new Event('shop-change'))
}

export function getShopItems() {
  return read()
}

export function addToShop(file, price) {
  const list = read()
  const item = {
    id: file.id,
    name: file.name,
    type: file.type,
    glyph: file.glyph || null,
    src: file.src || null,
    meta: file.meta || '',
    price,
    rating: null,
    downloads: 0,
    sales: 0,
    source: 'user',
  }
  const i = list.findIndex((x) => x.id === item.id)
  if (i >= 0) list[i] = { ...list[i], ...item }
  else list.unshift(item)
  write(list)
}

export function isInShop(id) {
  return read().some((x) => x.id === id)
}
