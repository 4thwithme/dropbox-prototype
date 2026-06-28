// Marketplace catalog. `type` drives the thumbnail + payment icon,
// `category` drives the tab filter, `ext` is searchable.
export const categories = ['All', 'Images', 'Audio', 'Video', 'Documents', 'Presets']

export const products = [
  // Images
  { id: 'm1', title: 'Sunset in the Alps', creator: 'Alex Chen', price: 15, type: 'image', category: 'Images', ext: 'jpg', rating: 4.9, downloads: 1240, hue: 28,
    desc: 'High-resolution landscape photograph of an alpine sunset. Royalty-free for personal and commercial use.' },
  { id: 'm2', title: 'Studio Portrait', creator: 'Anya Pix', price: 30, type: 'image', category: 'Images', ext: 'png', rating: 4.8, downloads: 860, src: `${import.meta.env.BASE_URL}cat.png`,
    desc: 'Crisp studio portrait, 924×756 PNG. Includes raw + edited versions.' },
  { id: 'm3', title: 'City Lines', creator: 'Marco Ruiz', price: 20, type: 'image', category: 'Images', ext: 'jpg', rating: 4.7, downloads: 540, hue: 210,
    desc: 'Minimalist architecture photography pack — clean geometric city shots.' },
  // Audio
  { id: 'm4', title: 'Summer DJ Set', creator: 'DJ Spark', price: 15, type: 'audio', category: 'Audio', ext: 'mp3', rating: 4.9, downloads: 2100, wave: '#9aa0a6',
    desc: '60-minute house & disco DJ set. 320kbps MP3, fully mixed.' },
  { id: 'm5', title: 'Lofi Beat Pack', creator: 'Beats Magazine', price: 25, type: 'audio', category: 'Audio', ext: 'wav', rating: 4.8, downloads: 1700, wave: '#5B6CFF',
    desc: '20 royalty-free lofi beats in WAV. Perfect for streams and videos.' },
  { id: 'm6', title: 'Ambient Pads', creator: 'Nova Sound', price: 12, type: 'audio', category: 'Audio', ext: 'mp3', rating: 4.6, downloads: 430, wave: '#A259FF',
    desc: 'Lush ambient pad textures for film and game scoring.' },
  // Video
  { id: 'm7', title: 'Drone Reel 4K', creator: 'Kenji Tanaka', price: 99, type: 'video', category: 'Video', ext: 'mp4', rating: 4.9, downloads: 320, hue: 200,
    desc: 'Cinematic 4K aerial drone footage bundle — coastline, mountains, city.' },
  { id: 'm8', title: 'Product Promo', creator: 'Maria Rodriguez', price: 59, type: 'video', category: 'Video', ext: 'mov', rating: 4.7, downloads: 210, hue: 330,
    desc: 'Editable 30-second product promo template. ProRes + project file.' },
  // Documents
  { id: 'm9', title: 'Q3 Business Review', creator: 'David Lee', price: 29, type: 'doc', category: 'Documents', ext: 'pdf', rating: 4.8, downloads: 690,
    desc: 'Polished quarterly business review deck with charts and speaker notes.' },
  { id: 'm10', title: 'Investor Deck', creator: 'David Lee', price: 39, type: 'doc', category: 'Documents', ext: 'pdf', rating: 4.9, downloads: 410,
    desc: 'Seed-stage investor pitch deck template. 14 proven slides.' },
  { id: 'm11', title: 'Budget Tracker', creator: 'Finly', price: 9, type: 'doc', category: 'Documents', ext: 'xlsx', rating: 4.5, downloads: 1100,
    desc: 'Personal & team budget tracker spreadsheet with auto-summaries.' },
  // Presets
  { id: 'm12', title: 'SaaS Dashboard UI Kit', creator: 'Maria Rodriguez', price: 49, type: 'design', category: 'Presets', ext: 'fig', rating: 4.9, downloads: 980,
    desc: 'Complete Figma UI kit for SaaS dashboards — 80+ components, dark mode.' },
  { id: 'm13', title: 'Pro Photo Presets', creator: 'Anya Pix', price: 30, type: 'image', category: 'Presets', ext: 'zip', rating: 4.8, downloads: 2400, hue: 18,
    desc: '12 Lightroom presets for warm, cinematic photography. .xmp + .dng.' },
  { id: 'm14', title: 'Mobile UI Kit', creator: 'Studio Co', price: 35, type: 'design', category: 'Presets', ext: 'fig', rating: 4.7, downloads: 760,
    desc: 'iOS & Android mobile UI kit. Auto-layout, variables, 200+ screens.' },

  // ---- Images ----
  { id: 'm15', title: 'Neon Tokyo Nights', creator: 'Yuki Mori', price: 18, type: 'image', category: 'Images', ext: 'jpg', rating: 4.8, downloads: 1530, hue: 290,
    desc: 'Moody neon-soaked street photography from downtown Tokyo.' },
  { id: 'm16', title: 'Desert Minimal', creator: 'Sara Holt', price: 14, type: 'image', category: 'Images', ext: 'jpg', rating: 4.6, downloads: 720, hue: 36,
    desc: 'Warm minimalist desert dune compositions. 12 high-res shots.' },
  { id: 'm17', title: 'Ocean Aerials', creator: 'Kenji Tanaka', price: 24, type: 'image', category: 'Images', ext: 'jpg', rating: 4.9, downloads: 1980, hue: 195,
    desc: 'Top-down aerial shots of turquoise coastlines and reefs.' },
  { id: 'm18', title: 'Vintage Film Pack', creator: 'Anya Pix', price: 22, type: 'image', category: 'Images', ext: 'zip', rating: 4.7, downloads: 1340, hue: 24,
    desc: '35mm-style film scans with authentic grain and light leaks.' },
  { id: 'm19', title: 'Abstract Gradients', creator: 'Marco Ruiz', price: 9, type: 'image', category: 'Images', ext: 'png', rating: 4.5, downloads: 2600, hue: 320,
    desc: '40 ultra-smooth gradient backgrounds in 4K PNG.' },
  { id: 'm20', title: 'Forest Fog', creator: 'Elin Berg', price: 16, type: 'image', category: 'Images', ext: 'jpg', rating: 4.8, downloads: 890, hue: 150,
    desc: 'Atmospheric misty forest photography for moody projects.' },
  { id: 'm21', title: 'Street Food Series', creator: 'Diego Santos', price: 19, type: 'image', category: 'Images', ext: 'jpg', rating: 4.6, downloads: 610, hue: 12,
    desc: 'Vibrant close-up food photography from night markets.' },
  { id: 'm22', title: 'Brutalist Concrete', creator: 'Hana Kim', price: 21, type: 'image', category: 'Images', ext: 'jpg', rating: 4.7, downloads: 540, hue: 220,
    desc: 'Stark concrete architecture textures and forms.' },

  // ---- Audio ----
  { id: 'm23', title: 'Cinematic Trailer Hits', creator: 'Nova Sound', price: 29, type: 'audio', category: 'Audio', ext: 'wav', rating: 4.9, downloads: 3100, wave: '#EC4899',
    desc: 'Epic braams, risers and impacts for film trailers.' },
  { id: 'm24', title: 'Coffee Shop Jazz', creator: 'Blue Note Co', price: 17, type: 'audio', category: 'Audio', ext: 'mp3', rating: 4.7, downloads: 1450, wave: '#F59E0B',
    desc: 'Relaxed jazz loops perfect for cafés and streams.' },
  { id: 'm25', title: 'Synthwave Drive', creator: 'DJ Spark', price: 20, type: 'audio', category: 'Audio', ext: 'wav', rating: 4.8, downloads: 2200, wave: '#A259FF',
    desc: 'Retro 80s synthwave tracks with punchy basslines.' },
  { id: 'm26', title: 'Nature Field Recordings', creator: 'Wildtrack', price: 12, type: 'audio', category: 'Audio', ext: 'wav', rating: 4.6, downloads: 980, wave: '#34D399',
    desc: 'Forests, rivers and rain — pristine ambient field audio.' },
  { id: 'm27', title: 'Hip-Hop Drum Kit', creator: 'Beats Magazine', price: 25, type: 'audio', category: 'Audio', ext: 'zip', rating: 4.9, downloads: 4200, wave: '#5B6CFF',
    desc: '300+ punchy one-shots and loops for modern hip-hop.' },
  { id: 'm28', title: 'Podcast Intro Pack', creator: 'Nova Sound', price: 14, type: 'audio', category: 'Audio', ext: 'mp3', rating: 4.5, downloads: 760, wave: '#cfd3d6',
    desc: 'Clean, professional podcast stingers and intros.' },

  // ---- Video ----
  { id: 'm29', title: 'City Timelapse 4K', creator: 'Kenji Tanaka', price: 79, type: 'video', category: 'Video', ext: 'mp4', rating: 4.9, downloads: 410, hue: 250,
    desc: 'Stunning 4K city timelapses — day to night transitions.' },
  { id: 'm30', title: 'LUT Color Pack', creator: 'David Lee', price: 45, type: 'video', category: 'Video', ext: 'cube', rating: 4.8, downloads: 690, hue: 18,
    desc: 'Cinematic LUTs for instant film-grade color.' },
  { id: 'm31', title: 'Motion Title Templates', creator: 'Studio Co', price: 39, type: 'video', category: 'Video', ext: 'aep', rating: 4.7, downloads: 520, hue: 300,
    desc: 'After Effects animated title and lower-third templates.' },
  { id: 'm32', title: 'Drone Forest Reel', creator: 'Elin Berg', price: 69, type: 'video', category: 'Video', ext: 'mp4', rating: 4.8, downloads: 280, hue: 140,
    desc: 'Sweeping aerial forest and mountain footage in 4K.' },
  { id: 'm33', title: 'Glitch Transitions', creator: 'Marco Ruiz', price: 29, type: 'video', category: 'Video', ext: 'mov', rating: 4.6, downloads: 1100, hue: 330,
    desc: '50 ready-to-drop glitch and RGB-split transitions.' },

  // ---- Documents ----
  { id: 'm34', title: 'Pitch Deck Bundle', creator: 'Maria Rodriguez', price: 49, type: 'doc', category: 'Documents', ext: 'pdf', rating: 4.9, downloads: 1320,
    desc: '5 investor-ready pitch deck templates with guides.' },
  { id: 'm35', title: 'Resume Pack', creator: 'Finly', price: 12, type: 'doc', category: 'Documents', ext: 'docx', rating: 4.7, downloads: 3400,
    desc: 'ATS-friendly resume + cover letter templates.' },
  { id: 'm36', title: 'Financial Model', creator: 'David Lee', price: 59, type: 'doc', category: 'Documents', ext: 'xlsx', rating: 4.8, downloads: 540,
    desc: 'SaaS financial model with 3-statement projections.' },
  { id: 'm37', title: 'Brand Guidelines', creator: 'Studio Co', price: 35, type: 'doc', category: 'Documents', ext: 'pdf', rating: 4.6, downloads: 410,
    desc: 'Editable brand book template — logo, color, type rules.' },
  { id: 'm38', title: 'Notion Productivity OS', creator: 'Finly', price: 29, type: 'doc', category: 'Documents', ext: 'pdf', rating: 4.9, downloads: 5600,
    desc: 'All-in-one Notion workspace for tasks, notes and goals.' },
  { id: 'm39', title: 'Legal Contract Pack', creator: 'Hana Kim', price: 39, type: 'doc', category: 'Documents', ext: 'docx', rating: 4.5, downloads: 320,
    desc: 'Freelance contracts, NDAs and invoices — lawyer-reviewed.' },

  // ---- Presets ----
  { id: 'm40', title: 'Cinematic LR Presets', creator: 'Anya Pix', price: 28, type: 'image', category: 'Presets', ext: 'zip', rating: 4.9, downloads: 3900, hue: 20,
    desc: '20 Lightroom presets for warm cinematic looks.' },
  { id: 'm41', title: 'Dashboard Components', creator: 'Maria Rodriguez', price: 55, type: 'design', category: 'Presets', ext: 'fig', rating: 4.8, downloads: 1230,
    desc: 'Charts, tables and KPI cards — a full Figma component set.' },
  { id: 'm42', title: 'Procreate Brush Pack', creator: 'Yuki Mori', price: 18, type: 'image', category: 'Presets', ext: 'zip', rating: 4.7, downloads: 2700, hue: 280,
    desc: '120 hand-crafted Procreate brushes for illustration.' },
  { id: 'm43', title: 'Webflow Portfolio Kit', creator: 'Studio Co', price: 42, type: 'design', category: 'Presets', ext: 'fig', rating: 4.6, downloads: 640,
    desc: 'Responsive portfolio template with CMS and animations.' },
  { id: 'm44', title: 'Icon Set 1000+', creator: 'Hana Kim', price: 24, type: 'design', category: 'Presets', ext: 'svg', rating: 4.9, downloads: 4100,
    desc: '1000+ pixel-perfect line icons in SVG and Figma.' },
  { id: 'm45', title: 'Email Template Pack', creator: 'Finly', price: 19, type: 'design', category: 'Presets', ext: 'html', rating: 4.5, downloads: 880,
    desc: 'Responsive HTML email templates for campaigns.' },
]

export const sorts = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top rated' },
  { id: 'downloads', label: 'Most downloaded' },
]

export function sortProducts(list, sort) {
  const a = [...list]
  switch (sort) {
    case 'price-asc': return a.sort((x, y) => x.price - y.price)
    case 'price-desc': return a.sort((x, y) => y.price - x.price)
    case 'rating': return a.sort((x, y) => y.rating - x.rating)
    case 'downloads': return a.sort((x, y) => y.downloads - x.downloads)
    default: return a
  }
}
