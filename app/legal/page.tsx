import type { Metadata } from 'next'
import Link from 'next/link'
import { DEMO } from '@/lib/demo'

export const metadata: Metadata = { title: 'Legal & Privacy', description: 'Disclaimer, privacy notice and terms for this demonstration website.' }

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="serif text-2xl text-[var(--ink)] mb-3">{title}</h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--ink-2)]">{children}</div>
    </section>
  )
}

export default function LegalPage() {
  return (
    <div>
      <header className="px-6 pt-20 pb-12 border-b" style={{ borderColor: 'var(--line)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>Transparency</p>
          <h1 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>Legal &amp; Privacy</h1>
          <p className="text-[var(--ink-2)] mt-3 text-sm">Please read this — it explains exactly what this website is, and isn&apos;t.</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
        <div className="panel rounded-sm p-6 mb-12" style={{ background: 'var(--cream-2)' }}>
          <p className="text-sm leading-relaxed text-[var(--ink)]"><strong>This is a demonstration website.</strong> {DEMO.disclaimer}</p>
        </div>

        <Section title="Nature of this website">
          <p>This site, &ldquo;{DEMO.brand}&rdquo;, is a portfolio demonstration by <a href={DEMO.studioUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--terra)' }}>{DEMO.studioName}</a> to illustrate the kind of website we build for restaurants. It is not a real restaurant and does not serve food or take real bookings.</p>
        </Section>
        <Section title="Fictional content">
          <p>The restaurant name, menu, dishes, prices, photographs, reviews, opening hours and contact details are all fictional or illustrative. Imagery is licensed stock photography used for illustration only and does not depict a real venue or real dishes.</p>
        </Section>
        <Section title="Contact actions are disabled">
          <p>Calling, emailing, WhatsApp, the reservation/contact form and the newsletter signup are intentionally non-functional. The phone and email are placeholders that reach no one, and submitting any form sends and stores nothing.</p>
        </Section>
        <Section title="Privacy & cookies">
          <p>This demo collects no personal data, uses no tracking or advertising cookies, and runs no analytics that identify you. Anything typed into a form stays in your browser and is discarded.</p>
          <p>We use your browser&apos;s local storage only to remember that you dismissed the cookie notice and the promo bar. This never leaves your device.</p>
        </Section>
        <Section title="No warranty">
          <p>Provided &ldquo;as is&rdquo;, for demonstration only, without warranties of any kind. {DEMO.studioName} accepts no liability for any action taken on the basis of its fictional content.</p>
        </Section>
        <Section title="Third-party content">
          <p>Map previews are embedded from Google Maps and show an approximate area only. Photography is served from Unsplash. These services are subject to their own terms.</p>
        </Section>

        <div className="pt-6 border-t" style={{ borderColor: 'var(--line)' }}>
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--terra)' }}>← Back to the demo</Link>
        </div>
      </div>
    </div>
  )
}
