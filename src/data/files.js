// Mock data — no backend. Mirrors the reference screenshot.

export const suggested = [
  { id: 's2', type: 'design', name: 'Mobile_UI_Kit.fig', meta: 'Figma · 12.4 MB' },
  { id: 's3', type: 'book', name: 'Atomic_Habits.epub', meta: 'eBook · 1.1 MB' },
  { id: 's4', type: 'audio', name: 'Summer_Vibes.mp3', meta: 'Audio · 3.8 MB' },
]

// type: 'folder' | 'image' | 'pdf' | 'sheet' | 'doc'
//     | 'model3d' | 'audio' | 'book' | 'archive' | 'design'
export const files = [
  { id: 'f2', type: 'image', src: `${import.meta.env.BASE_URL}cat.png`, name: 'Screenshot 2025-12-29 at 01.33.51', meta: 'PNG · 849.23 KB' },
  // 3D / audio / book
  { id: 'f3', type: 'model3d', name: 'Dragon_Bust.stl', meta: '3D model · 4.2 MB' },
  { id: 'f4', type: 'audio', name: 'Summer_Vibes.mp3', meta: 'Audio · 3.8 MB' },
  { id: 'f5', type: 'book', name: 'Atomic_Habits.epub', meta: 'eBook · 1.1 MB' },
  // digital products to sell
  { id: 'f6', type: 'design', name: 'Mobile_UI_Kit.fig', meta: 'Figma · 12.4 MB' },
  { id: 'f7', type: 'archive', name: 'Lightroom_Presets.zip', meta: 'Archive · 240 KB' },
  { id: 'f8', type: 'pdf', name: 'Notion_Template.pdf', meta: 'PDF · 2.1 MB' },
  { id: 'f9', type: 'model3d', name: 'Phone_Stand.stl', meta: '3D model · 980 KB' },
  { id: 'f10', type: 'sheet', name: 'Budget_Tracker.xlsx', meta: 'Spreadsheet · 88 KB' },
]

export const members = [
  { id: 'm1', initials: '', color: '#3d4a5c', img: true },
  { id: 'm2', initials: 'JH', color: '#9a9389' },
  { id: 'm3', initials: 'AA', color: '#a89f93' },
]
