import Link from 'next/link'
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'
import { DEMO, HOURS } from '@/lib/demo'
import { IMAGES, GALLERY, MENU, REVIEWS } from '@/lib/content'
import { formatPrice } from '@/lib/utils'

const SIGNATURES = [
  { dish: MENU[1].items[0], img: GALLERY[4] }, // sea bream
  { dish: MENU[0].items[2], img: GALLERY[2] }, // octopus
  { dish: MENU[2].items[0], img: GALLERY[7] }, // lamb chops
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${IMAGES.heroInterior}")` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20,17,13,0.85) 0%, rgba(20,17,13,0.35) 55%, rgba(20,17,13,0.5) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-end" style={{ minHeight: 'min(86vh, 760px)', paddingTop: 80, paddingBottom: 72 }}>
          <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>Est. Limassol · Cyprus</p>
          <h1 className="serif text-white leading-[0.98] mb-6" style={{ fontSize: 'clamp(48px, 8vw, 104px)', maxWidth: 900 }}>
            Seasonal Mediterranean,<br />by the Limassol coast
          </h1>
          <p className="text-lg leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 480 }}>
            Charcoal-grilled fish, mezze made to share, and a long table by the sea. Unhurried dining, the way the coast intended.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="btn btn-primary px-7 py-3.5">Reserve a table</Link>
            <Link href="/menu" className="btn btn-light px-7 py-3.5">View the menu</Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-4" style={{ color: 'var(--terra)' }}>Our table</p>
            <h2 className="serif text-[var(--ink)] mb-6" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.05 }}>
              Cooking that tastes of the place it comes from
            </h2>
            <p className="text-[var(--ink-2)] leading-relaxed mb-5">
              We cook simply and seasonally — fish landed on the coast, vegetables from nearby growers, olive oil pressed not far from the door. Nothing fussy, nothing rushed.
            </p>
            <p className="text-[var(--ink-2)] leading-relaxed mb-8">
              Pull up a chair on the terrace, order a little of everything, and let the afternoon turn into evening.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--terra)' }}>
              Our story <ArrowRight size={15} />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: `url("${IMAGES.storyTable}")` }} />
          </div>
        </div>
      </section>

      {/* SIGNATURES */}
      <section className="py-20 sm:py-24" style={{ background: 'var(--cream-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>From the kitchen</p>
              <h2 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>Signature plates</h2>
            </div>
            <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--ink-2)' }}>
              Full menu <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SIGNATURES.map(({ dish, img }) => (
              <div key={dish.name}>
                <div className="aspect-[4/3] bg-cover bg-center mb-5" style={{ backgroundImage: `url("${img}")` }} />
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="serif text-2xl text-[var(--ink)]">{dish.name}</h3>
                  <span className="serif text-xl" style={{ color: 'var(--terra)' }}>{formatPrice(dish.price)}</span>
                </div>
                <p className="text-sm text-[var(--ink-2)] mt-1.5 leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>The room & the plates</p>
            <h2 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>A look around</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {GALLERY.slice(0, 4).map((src, i) => (
              <div key={i} className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url("${src}")` }} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="btn btn-outline px-7 py-3.5">View gallery</Link>
          </div>
        </div>
      </section>

      {/* HOURS / FIND US */}
      <section style={{ background: 'var(--dark)', color: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4" style={{ color: 'var(--terra)' }}>Find us</p>
            <h2 className="serif mb-8" style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>By the water, all year round</h2>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={18} className="mt-1 shrink-0" style={{ color: 'var(--terra)' }} />
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>{DEMO.address}</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-1 shrink-0" style={{ color: 'var(--terra)' }} />
              <ul className="flex flex-col gap-1.5 text-sm">
                {HOURS.map((h) => (
                  <li key={h.days} className="flex gap-3">
                    <span className="w-44" style={{ color: 'rgba(255,255,255,0.85)' }}>{h.days}</span>
                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="btn btn-primary px-7 py-3.5 mt-9">Reserve a table</Link>
          </div>
          <div className="min-h-[320px] overflow-hidden rounded-sm">
            <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(DEMO.mapQuery)}&z=12&output=embed`} className="w-full h-full min-h-[320px] border-0" loading="lazy" title="Map" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-4">
            <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>Reviews</p>
            <h2 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>Kind words</h2>
          </div>
          <p className="text-center text-xs text-[var(--ink-3)] mb-12">Illustrative reviews — written for this demo, not real testimonials.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((r) => (
              <div key={r.name} className="text-center px-4">
                <div className="flex justify-center gap-0.5 mb-5" style={{ color: 'var(--terra)' }}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} className="fill-current" />)}
                </div>
                <p className="serif text-xl leading-relaxed text-[var(--ink)] mb-5" style={{ fontStyle: 'italic' }}>“{r.quote}”</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--ink-3)]">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${IMAGES.ctaSpread}")` }} />
        <div className="absolute inset-0" style={{ background: 'rgba(20,17,13,0.7)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 text-center text-white">
          <h2 className="serif mb-4" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>Join us by the sea</h2>
          <p className="mb-9 mx-auto" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 440 }}>Lunch, dinner, or a long lazy afternoon on the terrace. We&apos;d love to have you.</p>
          <Link href="/contact" className="btn btn-primary px-8 py-4">Reserve a table</Link>
        </div>
      </section>
    </>
  )
}
