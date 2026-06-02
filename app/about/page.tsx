import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { DEMO, HOURS } from '@/lib/demo'
import { IMAGES } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Limen Restaurant — seasonal Mediterranean cooking on the Limassol coast.',
}

const ETHOS = [
  { k: 'Seasonal', v: 'We cook with what the season and the coast give us — menus shift week to week.' },
  { k: 'Coastal', v: 'Fish landed nearby, local growers, olive oil pressed close to home.' },
  { k: 'Unhurried', v: 'Long lunches, shared plates, no rush. The way the Mediterranean eats.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative border-b" style={{ borderColor: 'var(--line)' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${IMAGES.aboutHero}")`, filter: 'brightness(0.5)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32 text-white">
          <p className="eyebrow mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>Our story</p>
          <h1 className="serif leading-[0.98]" style={{ fontSize: 'clamp(44px, 7vw, 88px)', maxWidth: 760 }}>A little of everything, by the sea</h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="serif text-[var(--ink)] leading-relaxed mb-8" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>
            Limen began with a simple idea — that the best meals are unhurried, generous, and tied to the place they come from.
          </p>
          <p className="text-[var(--ink-2)] leading-relaxed mb-5">
            Our kitchen leans on the Cypriot coast: fish brought in that morning, vegetables from growers up the road, herbs and citrus from the garden. We grill over charcoal, dress with good olive oil, and keep things honest.
          </p>
          <p className="text-[var(--ink-2)] leading-relaxed">
            Come hungry, order a little of everything to share, and stay as long as you like. That&apos;s the whole philosophy.
          </p>
        </div>
      </section>

      {/* Ethos */}
      <section className="py-16" style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {ETHOS.map((e, i) => (
            <div key={e.k}>
              <span className="serif text-3xl" style={{ color: 'var(--terra)' }}>0{i + 1}</span>
              <h3 className="serif text-2xl text-[var(--ink)] mt-2 mb-2">{e.k}</h3>
              <p className="text-sm text-[var(--ink-2)] leading-relaxed">{e.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hours + CTA */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-2" style={{ color: 'var(--terra)' }}><Clock size={14} /> Opening hours</p>
            <ul className="flex flex-col gap-3">
              {HOURS.map((h) => (
                <li key={h.days} className="flex justify-between border-b pb-3" style={{ borderColor: 'var(--line)' }}>
                  <span className="text-[var(--ink)]">{h.days}</span>
                  <span className="text-[var(--ink-2)]">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="serif text-[var(--ink)] mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>Come and see us</h2>
            <p className="text-[var(--ink-2)] mb-7 max-w-sm">{DEMO.address}. Walk-ins welcome, but a table is never a bad idea.</p>
            <Link href="/contact" className="btn btn-primary px-8 py-3.5">Reserve a table</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
