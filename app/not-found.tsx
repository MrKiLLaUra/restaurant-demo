import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="serif" style={{ fontSize: 'clamp(72px, 14vw, 160px)', color: 'var(--terra)', lineHeight: 1 }}>404</p>
      <p className="serif text-2xl text-[var(--ink)] mt-2">This table isn&apos;t set</p>
      <p className="text-[var(--ink-2)] text-sm mt-2 mb-7">The page you&apos;re after has moved or never existed.</p>
      <Link href="/" className="btn btn-primary px-7 py-3.5">Back to home</Link>
    </div>
  )
}
