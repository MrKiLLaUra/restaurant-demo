'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

const KEY = 'lr_cookie_ack'

export default function CookieNotice() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true) } catch {}
  }, [])
  const accept = () => {
    try { localStorage.setItem(KEY, '1') } catch {}
    setShow(false)
  }
  if (!show) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[150] w-[calc(100%-2rem)] max-w-sm">
      <div className="panel rounded-sm shadow-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Cookie size={16} style={{ color: 'var(--terra)' }} />
          <span className="text-sm font-semibold text-[var(--ink)]">A quick note</span>
        </div>
        <p className="text-xs leading-relaxed text-[var(--ink-2)]">
          This demo uses no tracking cookies or analytics. We only use your browser&apos;s local storage to remember that you&apos;ve seen this message.{' '}
          <Link href="/legal" className="underline underline-offset-2" style={{ color: 'var(--terra)' }}>Learn more</Link>.
        </p>
        <button onClick={accept} className="btn btn-primary w-full mt-4 py-2.5">Got it</button>
      </div>
    </div>
  )
}
