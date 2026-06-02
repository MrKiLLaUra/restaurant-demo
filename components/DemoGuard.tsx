'use client'

import { useEffect, useState } from 'react'
import { Info } from 'lucide-react'

// Disables every phone / email / WhatsApp action site-wide for this public demo.
const BLOCKED = ['tel:', 'mailto:', 'sms:', 'wa.me', 'api.whatsapp.com', 'whatsapp:']

export default function DemoGuard() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a') as HTMLAnchorElement | null
      if (!a) return
      const href = (a.getAttribute('href') || '').toLowerCase()
      if (href && BLOCKED.some((b) => href.startsWith(b) || href.includes(b))) {
        e.preventDefault()
        e.stopPropagation()
        setShow(true)
        clearTimeout(timer)
        timer = setTimeout(() => setShow(false), 3600)
      }
    }
    document.addEventListener('click', onClick, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      clearTimeout(timer)
    }
  }, [])

  if (!show) return null
  return (
    <div role="status" className="fixed left-1/2 bottom-6 z-[200] -translate-x-1/2 px-2 w-[calc(100%-2rem)] max-w-md">
      <div className="flex items-start gap-3 rounded-sm text-white shadow-xl px-4 py-3" style={{ background: 'var(--dark)' }}>
        <Info size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--terra)' }} />
        <p className="text-sm leading-snug">This is a demo — calling, email and WhatsApp are disabled. No real venue is contacted.</p>
      </div>
    </div>
  )
}
