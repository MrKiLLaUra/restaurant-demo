import type { Metadata } from 'next'
import { GALLERY } from '@/lib/content'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A look around Limen Restaurant — the room, the terrace and the plates.',
}

export default function GalleryPage() {
  return (
    <div>
      <header className="text-center px-6 pt-20 pb-14 border-b" style={{ borderColor: 'var(--line)' }}>
        <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>Gallery</p>
        <h1 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>A look around</h1>
        <p className="text-[var(--ink-2)] mt-3 max-w-md mx-auto text-sm">The room, the terrace and a few of the plates. Tap any photo to view.</p>
      </header>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
        <Gallery images={GALLERY} />
      </div>
    </div>
  )
}
