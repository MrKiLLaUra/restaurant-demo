'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { DEMO } from '@/lib/demo'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function Brand({ large }: { large?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span className={cn('serif tracking-tight text-[var(--ink)] leading-none', large ? 'text-3xl' : 'text-2xl')}>
        Limen <span style={{ color: 'var(--terra)' }}>Restaurant</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-40" style={{ background: 'var(--cream-2)', borderBottom: '1px solid var(--line)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
        <Brand />

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.16em] font-semibold transition-colors"
              style={{ color: isActive(l.href) ? 'var(--terra)' : 'var(--ink-2)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary px-5 py-2.5">Reserve a table</Link>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden p-2 -mr-2 text-[var(--ink)]" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn('md:hidden fixed inset-0 z-50 flex flex-col transition-opacity duration-300', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
        style={{ background: 'var(--cream)' }}
        aria-hidden={!open}
      >
        <div className="h-[72px] px-6 flex items-center justify-between border-b" style={{ borderColor: 'var(--line)' }}>
          <Brand />
          <button onClick={() => setOpen(false)} className="p-2 -mr-2 text-[var(--ink)]" aria-label="Close"><X size={22} /></button>
        </div>
        <nav className="flex flex-col px-8 pt-10 gap-1 flex-1">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn('serif text-4xl py-3 border-b transition-all duration-500', open ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6')}
              style={{ color: isActive(l.href) ? 'var(--terra)' : 'var(--ink)', borderColor: 'var(--line)', transitionDelay: open ? `${100 + i * 55}ms` : '0ms' }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full py-4 mt-8">Reserve a table</Link>
        </nav>
      </div>
    </header>
  )
}
