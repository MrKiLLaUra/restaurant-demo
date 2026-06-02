'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { DEMO } from '@/lib/demo'

const KEY = 'lr_promo_dismissed'

export default function AnnouncementBar() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    try { if (localStorage.getItem(KEY)) setShow(false) } catch {}
  }, [])
  if (!show) return null
  return (
    <div className="relative" style={{ background: 'var(--terra)', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-10 sm:px-12 py-2.5 flex items-center justify-center gap-3 text-center">
        <p className="text-[12.5px] leading-snug">
          {DEMO.announcement}{' '}
          <Link href="/contact" className="underline underline-offset-2 font-semibold whitespace-nowrap">Reserve →</Link>
        </p>
      </div>
      <button
        onClick={() => { try { localStorage.setItem(KEY, '1') } catch {}; setShow(false) }}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-80 hover:opacity-100"
        aria-label="Dismiss"
      >
        <X size={15} />
      </button>
    </div>
  )
}
