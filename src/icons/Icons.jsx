// Inline SVG icon set. Stroke icons use currentColor so CSS controls color.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const DropboxLogo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 42 40" fill="var(--db-blue)" aria-hidden="true">
    <path d="M10.5 0L0 6.8l10.5 6.8L21 6.8 10.5 0zM31.5 0L21 6.8l10.5 6.8L42 6.8 31.5 0zM0 20.4l10.5 6.8L21 20.4l-10.5-6.8L0 20.4zM31.5 13.6L21 20.4l10.5 6.8L42 20.4l-10.5-6.8zM10.5 29.4l10.5 6.8 10.5-6.8L21 22.6l-10.5 6.8z" />
  </svg>
)

export const HomeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M9.5 20v-5.5h5V20" />
  </svg>
)

export const FoldersIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" rx="2" />
    <path d="M3 9h18" />
    <path d="M7 6V4.5A1.5 1.5 0 0 1 8.5 3h2.8a1.5 1.5 0 0 1 1.2.6L13.5 6" />
  </svg>
)

export const ActivityIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M18 8.5a6 6 0 0 0-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14.5 18 8.5z" />
    <path d="M10 19.5a2 2 0 0 0 4 0" />
  </svg>
)

export const MoreIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="5" cy="5" r="1.8" /><circle cx="12" cy="5" r="1.8" /><circle cx="19" cy="5" r="1.8" />
    <circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" />
    <circle cx="5" cy="19" r="1.8" /><circle cx="12" cy="19" r="1.8" /><circle cx="19" cy="19" r="1.8" />
  </svg>
)

export const PlusIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} strokeWidth={2.2} aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const SearchIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><path d="M16.5 16.5L21 21" />
  </svg>
)

export const InviteIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M18 8v6M15 11h6" />
  </svg>
)

export const GearIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 13a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V19a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H5a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H11a1.6 1.6 0 0 0 1-1.5V5a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V11a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
  </svg>
)

export const UploadIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
  </svg>
)

export const NewFolderIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4l2 2.2H20a1 1 0 0 1 1 1V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V7.5z" />
    <path d="M12 12v4M10 14h4" />
  </svg>
)

export const InstallIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="1.5" /><path d="M8 20h8M12 17v3" />
    <path d="M12 7v5M9.5 9.5L12 12l2.5-2.5" />
  </svg>
)

export const ChevronDown = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
)
export const ChevronLeft = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
)
export const ChevronRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
)
export const ArrowUp = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
)

export const ClockIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
  </svg>
)
export const StarIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
  </svg>
)
export const EyeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="2.5" />
  </svg>
)
export const GridIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
export const ColumnsIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M14 4v16" /><rect x="15.5" y="6" width="4" height="12" rx="1" fill="currentColor" stroke="none" />
  </svg>
)
export const HelpIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.8.3-1.4 1-1.4 1.9v.3" /><circle cx="12" cy="16.3" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)
export const PanelIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" />
  </svg>
)

export const MenuIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} strokeWidth={2} aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const DotsIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="5" cy="12" r="1.9" /><circle cx="12" cy="12" r="1.9" /><circle cx="19" cy="12" r="1.9" />
  </svg>
)
export const CheckSquare = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
  </svg>
)
export const DotsV = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="5" r="1.9" /><circle cx="12" cy="12" r="1.9" /><circle cx="12" cy="19" r="1.9" />
  </svg>
)
export const LinkIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M10.6 13.4a3.6 3.6 0 0 0 5.1 0l2.6-2.6a3.6 3.6 0 0 0-5.1-5.1l-1.3 1.3" />
    <path d="M13.4 10.6a3.6 3.6 0 0 0-5.1 0l-2.6 2.6a3.6 3.6 0 0 0 5.1 5.1l1.3-1.3" />
  </svg>
)
export const PencilIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M4 20l4.5-1L19 8.5a2.1 2.1 0 0 0-3-3L5.5 16 4 20z" />
    <path d="M14.5 7l2.5 2.5" />
  </svg>
)
export const DollarSign = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} strokeWidth={2.4} aria-hidden="true">
    <path d="M12 2.5v19" />
    <path d="M16.5 6.8c0-1.8-2-3.1-4.5-3.1S7.5 5 7.5 6.8s2 2.7 4.5 3.2 4.5 1.4 4.5 3.2-2 3.1-4.5 3.1-4.5-1.3-4.5-3.1" />
  </svg>
)
export const UserIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
)
export const CloseIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
export const CheckCircle = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M7.5 12.4l3 3 6-6.4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const LockIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)
export const CardIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3 9.5h18" />
  </svg>
)
export const SparkleIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2l1.7 5.6 5.6 1.7-5.6 1.7L12 16.8l-1.7-5.6L4.7 9.5l5.6-1.7z" />
    <path d="M18.5 14.2l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z" opacity=".75" />
  </svg>
)
export const StoreIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M4 9l1-4h14l1 4" />
    <path d="M4 9a2.4 2.4 0 0 0 4 0 2.4 2.4 0 0 0 4 0 2.4 2.4 0 0 0 4 0 2.4 2.4 0 0 0 4 0" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M9.5 20v-5h5v5" />
  </svg>
)
export const BagIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M6 8h12l1 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L6 8z" />
    <path d="M9 9V7a3 3 0 0 1 6 0v2" />
  </svg>
)
export const WalletIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <rect x="3" y="6" width="18" height="13" rx="2.5" />
    <path d="M3 10h18" />
    <circle cx="16.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
  </svg>
)
export const PhotoStack = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="13" width="30" height="24" rx="3" />
    <circle cx="18" cy="22" r="3" fill="currentColor" stroke="none" />
    <path d="M11 35l9-10 7 7 5-4 6 7" />
  </svg>
)
export const PlayIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="18" fill="rgba(255,255,255,.92)" />
    <path d="M20 16l13 8-13 8z" fill="#1E1919" />
  </svg>
)
export const StarFill = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 3.4l2.6 5.3 5.8.9-4.2 4.1 1 5.8L12 16.9 6.8 19.5l1-5.8L3.6 9.6l5.8-.9z" />
  </svg>
)
export const DownloadIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s} aria-hidden="true">
    <path d="M12 4v11M8 11l4 4 4-4" /><path d="M5 19h14" />
  </svg>
)

// File-type glyph (pdf / sheet / doc / image). Used large (with extension
// label) and as a small label mini (mini hides the label text).
const FILE_COLORS = {
  pdf: 'var(--db-file-pdf)', sheet: 'var(--db-file-sheet)', doc: 'var(--db-file-doc)',
  image: 'var(--db-file-image)', model3d: 'var(--db-file-model3d)', audio: 'var(--db-file-audio)',
  book: 'var(--db-file-book)', archive: 'var(--db-file-archive)', design: 'var(--db-file-design)',
  video: 'var(--db-file-video)',
}
const FILE_LABELS = { pdf: 'PDF', sheet: 'XLS', doc: 'DOC', design: 'FIG' }

// kinds drawn as a centered pictogram (vs. a colored extension label bar)
function FileArt({ kind, c }) {
  switch (kind) {
    case 'image':
      return (
        <g>
          <rect x="22" y="46" width="52" height="42" rx="4" fill="none" stroke={c} strokeWidth="4" />
          <circle cx="35" cy="59" r="5" fill={c} />
          <path d="M26 86l16-18 11 11 8-7 13 14" fill="none" stroke={c} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
        </g>
      )
    case 'audio':
      return (
        <g>
          <path d="M42 86V54l22-5v27" fill="none" stroke={c} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="36" cy="86" rx="7" ry="6" fill={c} />
          <ellipse cx="58" cy="81" rx="7" ry="6" fill={c} />
        </g>
      )
    case 'model3d':
      return (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
          <path d="M48 46l22 12v24L48 94 26 82V58z" />
          <path d="M26 58l22 12 22-12M48 70v24" />
        </g>
      )
    case 'book':
      return (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinejoin="round">
          <path d="M48 52c-6-4-13-4-19-1v34c6-3 13-3 19 1" />
          <path d="M48 52c6-4 13-4 19-1v34c-6-3-13-3-19 1" />
        </g>
      )
    case 'archive':
      return (
        <g>
          <rect x="28" y="48" width="40" height="44" rx="5" fill="none" stroke={c} strokeWidth="4" />
          <g fill={c}>
            <rect x="44" y="48" width="8" height="9" /><rect x="44" y="61" width="8" height="9" /><rect x="44" y="74" width="8" height="9" />
          </g>
        </g>
      )
    case 'video':
      return (
        <g fill="none" stroke={c} strokeWidth="4" strokeLinejoin="round">
          <rect x="24" y="50" width="48" height="34" rx="4" />
          <path d="M44 58l14 9-14 9z" fill={c} stroke="none" />
        </g>
      )
    default:
      return null
  }
}

const ART_KINDS = new Set(['image', 'audio', 'model3d', 'book', 'archive', 'video'])

export const FileGlyph = ({ kind = 'doc', size = 120, mini = false }) => {
  const c = FILE_COLORS[kind] || FILE_COLORS.doc
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 96 120" aria-hidden="true">
      <path d="M16 4h40l24 24v84a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="var(--db-file-page)" stroke="var(--db-file-stroke)" strokeWidth="2.5" />
      <path d="M56 4l24 24H60a4 4 0 0 1-4-4V4z" fill="var(--db-file-fold)" />
      {ART_KINDS.has(kind) ? (
        <FileArt kind={kind} c={c} />
      ) : (
        <g>
          <rect x="12" y="70" width="72" height="26" rx="5" fill={c} />
          {!mini && (
            <text x="48" y="88" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800" fill="#fff">
              {FILE_LABELS[kind]}
            </text>
          )}
        </g>
      )}
    </svg>
  )
}

// Folder thumbnail: blue folder with a glyph (person, building, or plain)
export const FolderThumb = ({ glyph = 'building', size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
    <path d="M28 64a8 8 0 0 1 8-8h44l16 16h68a8 8 0 0 1 8 8v60a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V64z" fill="var(--db-folder)" />
    {glyph === 'plain' ? null : glyph === 'person' ? (
      <g fill="var(--db-folder-glyph)">
        <circle cx="100" cy="104" r="13" />
        <path d="M78 140a22 22 0 0 1 44 0z" />
      </g>
    ) : (
      <g fill="var(--db-folder-glyph)">
        <rect x="86" y="92" width="22" height="40" rx="1.5" />
        <rect x="108" y="104" width="11" height="28" rx="1.5" opacity="0.85" />
        <rect x="91" y="98" width="4" height="4" fill="var(--db-folder)" />
        <rect x="99" y="98" width="4" height="4" fill="var(--db-folder)" />
        <rect x="91" y="106" width="4" height="4" fill="var(--db-folder)" />
        <rect x="99" y="106" width="4" height="4" fill="var(--db-folder)" />
        <rect x="91" y="114" width="4" height="4" fill="var(--db-folder)" />
        <rect x="99" y="114" width="4" height="4" fill="var(--db-folder)" />
      </g>
    )}
  </svg>
)

// Small folder icon used in card rows / list labels
export const FolderMini = ({ glyph = 'building', size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
    <path d="M5 12a2 2 0 0 1 2-2h9l3.2 3.2H33a2 2 0 0 1 2 2V30a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12z" fill="var(--db-folder)" />
    {glyph === 'plain' ? null : glyph === 'person' ? (
      <g fill="var(--db-folder-glyph)"><circle cx="20" cy="21" r="3" /><path d="M14.5 28a5.5 5.5 0 0 1 11 0z" /></g>
    ) : (
      <g fill="var(--db-folder-glyph)"><rect x="17" y="18" width="5" height="9" rx="0.5" /><rect x="22" y="21" width="3" height="6" rx="0.5" opacity="0.85" /></g>
    )}
  </svg>
)
