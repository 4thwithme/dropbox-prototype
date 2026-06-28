// Hardcoded products already listed in "My Shop" (with their own stats).
// Dynamic listings added via "Add to my shop" come from localStorage and are
// merged on top of these.
export const seedShop = [
  { id: 's-fig', name: 'Mobile_UI_Kit.fig', type: 'design', meta: 'Figma · 12.4 MB',
    price: '$35.00', rating: 4.8, downloads: 1230, sales: 86, source: 'seed' },
  { id: 's-mp3', name: 'Summer_Vibes.mp3', type: 'audio', meta: 'Audio · 3.8 MB',
    price: '$15.00', rating: 4.9, downloads: 2100, sales: 142, source: 'seed' },
  { id: 's-stl', name: 'Dragon_Bust.stl', type: 'model3d', meta: '3D model · 4.2 MB',
    price: '$25.00', rating: 4.7, downloads: 430, sales: 38, source: 'seed' },
  { id: 's-zip', name: 'Lightroom_Presets.zip', type: 'archive', meta: 'Archive · 240 KB',
    price: '$30.00', rating: 4.8, downloads: 1700, sales: 64, source: 'seed' },
  { id: 's-img', name: 'Studio_Portrait.png', type: 'image', src: `${import.meta.env.BASE_URL}cat.png`, meta: 'PNG · 849 KB',
    price: '$20.00', rating: 4.6, downloads: 860, sales: 51, source: 'seed' },
]

// Demo wallet numbers (prototype).
export const wallet = {
  withdrawn: 1860, // already withdrawn, used to derive available balance
}
