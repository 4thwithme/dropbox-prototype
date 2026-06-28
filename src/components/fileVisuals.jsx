import { FolderThumb, FolderMini, FileGlyph } from '../icons/Icons.jsx'

// Large thumbnail per file type.
export function Thumb({ f }) {
  if (f.type === 'folder') return <FolderThumb glyph={f.glyph} size={132} />
  if (f.type === 'image') return <img className="img-thumb" src={f.src} alt="" />
  return <FileGlyph kind={f.type} size={96} />
}

// Small icon shown next to the filename in the label row.
export function Mini({ f }) {
  if (f.type === 'folder') return <FolderMini glyph={f.glyph} size={26} />
  return <FileGlyph kind={f.type} size={20} mini />
}
