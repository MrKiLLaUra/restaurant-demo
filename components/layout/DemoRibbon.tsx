import { ArrowUpRight } from 'lucide-react'
import { DEMO } from '@/lib/demo'

export default function DemoRibbon() {
  return (
    <a
      href={DEMO.studioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1.5 py-1.5 px-4 text-center transition-opacity hover:opacity-90"
      style={{ background: 'var(--dark)', color: 'var(--cream)' }}
    >
      <span className="text-[10px] uppercase tracking-[0.18em]">
        <span style={{ opacity: 0.55 }}>Live demo</span> — site by {DEMO.studioName}
      </span>
      <ArrowUpRight size={12} style={{ opacity: 0.7 }} />
    </a>
  )
}
