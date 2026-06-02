import type { Metadata } from 'next'
import Link from 'next/link'
import { MENU } from '@/lib/content'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Seasonal Mediterranean mezze, fish from the coast, charcoal grill and desserts at Limen Restaurant, Limassol.',
}

export default function MenuPage() {
  return (
    <div>
      <header className="text-center px-6 pt-20 pb-14 border-b" style={{ borderColor: 'var(--line)' }}>
        <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>À la carte</p>
        <h1 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>Our menu</h1>
        <p className="text-[var(--ink-2)] mt-3 max-w-md mx-auto text-sm">Served all day. Dishes change with the season and the catch.</p>
      </header>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16 flex flex-col gap-16">
        {MENU.map((section) => (
          <section key={section.name}>
            <div className="text-center mb-9">
              <h2 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}>{section.name}</h2>
              {section.note && <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-3)] mt-2">{section.note}</p>}
            </div>
            <div className="flex flex-col gap-6">
              {section.items.map((item) => (
                <div key={item.name}>
                  <div className="flex items-baseline">
                    <span className="serif text-xl text-[var(--ink)]">{item.name}</span>
                    <span className="leader" />
                    <span className="serif text-xl shrink-0" style={{ color: 'var(--terra)' }}>{formatPrice(item.price)}</span>
                  </div>
                  <p className="text-sm text-[var(--ink-2)] mt-1 leading-relaxed pr-16">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="text-center text-xs text-[var(--ink-3)] border-t pt-8" style={{ borderColor: 'var(--line)' }}>
          Please let us know about any allergies or dietary requirements. Prices in euro, service not included.
        </p>

        <div className="text-center">
          <Link href="/contact" className="btn btn-primary px-8 py-3.5">Reserve a table</Link>
        </div>
      </div>
    </div>
  )
}
