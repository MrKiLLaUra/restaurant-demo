import type { Metadata } from 'next'
import Link from 'next/link'
import { DEMO } from '@/lib/demo'

export const metadata: Metadata = { title: 'Legal & Privacy', description: 'Disclaimer, privacy policy and terms of use for this demonstration website.' }

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="serif text-2xl text-[var(--ink)] mb-3">{title}</h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-[var(--ink-2)]">{children}</div>
    </section>
  )
}

const StudioLink = () => (
  <a href={DEMO.studioUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--terra)' }}>
    {DEMO.studioName}
  </a>
)

export default function LegalPage() {
  return (
    <div>
      <header className="px-6 pt-20 pb-12 border-b" style={{ borderColor: 'var(--line)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>Transparency</p>
          <h1 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>Legal &amp; Privacy</h1>
          <p className="text-[var(--ink-2)] mt-3 text-sm">Please read this — it explains exactly what this website is, isn&apos;t, and how it handles your data.</p>
          <p className="text-[var(--ink-2)] mt-3 text-xs">Last updated: {DEMO.legalLastUpdated}</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
        <div className="panel rounded-sm p-6 mb-12" style={{ background: 'var(--cream-2)' }}>
          <p className="text-sm leading-relaxed text-[var(--ink)]"><strong>This is a demonstration website.</strong> {DEMO.disclaimer}</p>
        </div>

        <Section title="Nature of this website">
          <p>This site, &ldquo;{DEMO.brand}&rdquo;, is a portfolio demonstration by <StudioLink /> to illustrate the kind of website we build for restaurants. It is not a real restaurant and does not serve food or take real bookings.</p>
        </Section>

        <Section title="Fictional content">
          <p>The restaurant name, menu, dishes, prices, photographs, reviews, opening hours and contact details are all fictional or illustrative. Imagery is licensed stock photography used for illustration only and does not depict a real venue or real dishes.</p>
        </Section>

        <Section title="Contact actions are disabled">
          <p>Calling, emailing, WhatsApp, the reservation/contact form and the newsletter signup are intentionally non-functional. The phone and email are placeholders that reach no one, and submitting any form sends and stores nothing.</p>
        </Section>

        <Section title="Terms of use">
          <p>By accessing or using this website you agree to these terms. The site is provided for demonstration and evaluation purposes only. You may browse it and view its design freely, but you must not misuse it — for example, by attempting to disrupt it, access it other than through the interface provided, or use it to represent that {DEMO.brand} is a real, operating business.</p>
          <p>{DEMO.studioName} reserves all rights not expressly granted here. If any provision of these terms is found to be unenforceable, the remaining provisions continue in full effect. These terms, together with the sections below, are the entire agreement between you and {DEMO.studioName} regarding your use of this website.</p>
        </Section>

        <Section title="Privacy &amp; data protection">
          <p>This demo is designed to collect as little as possible. It does not use tracking or advertising cookies, runs no analytics that identify you, and stores nothing on a server. Anything you type into a form stays in your browser and is discarded.</p>
          <p><strong>Data controller.</strong> This website is operated by {DEMO.controller} ({DEMO.address}), which acts as the data controller for the limited functional data described below. For any privacy question, or to exercise your rights, contact {DEMO.controller} via <a href={DEMO.studioUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--terra)' }}>its website</a>.</p>
          <p><strong>What is stored, and why.</strong> The only data this site keeps is held in your browser&apos;s <strong>local storage</strong> — it is first-party, strictly functional, and never transmitted to us or anyone else:</p>
          <ul className="list-disc pl-5 flex flex-col gap-1.5">
            {DEMO.storageKeys.map((s) => (
              <li key={s.key}>
                <code className="text-[var(--ink)] rounded px-1 py-0.5 text-[0.8em]" style={{ background: 'var(--cream-2)' }}>{s.key}</code> — {s.purpose}
              </li>
            ))}
          </ul>
          <p><strong>Lawful basis.</strong> We process this minimal data on the basis of our legitimate interest in providing core site features, and because it is strictly necessary for functionality you have asked for (dismissing the cookie notice or the promotional bar).</p>
          <p><strong>Retention.</strong> This data persists only in your browser and only until you clear it. You can remove it at any time from your browser settings, with no effect beyond forgetting the dismissed notices.</p>
          <p><strong>Your rights.</strong> Under the GDPR you have the right to access, rectify, erase, restrict and object to the processing of your personal data, and the right to data portability. Because the data above lives only on your device and never reaches us, you can exercise all of these rights directly by viewing or clearing your browser storage. If you believe your data-protection rights have been infringed, you also have the right to lodge a complaint with a supervisory authority — in Cyprus, the <a href={DEMO.supervisoryAuthority.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: 'var(--terra)' }}>{DEMO.supervisoryAuthority.name}</a>.</p>
        </Section>

        <Section title="Cookies &amp; local storage">
          <p>This site sets <strong>no</strong> tracking, advertising or analytics cookies. It uses only the functional local-storage keys listed above. The brief cookie notice you may have seen is exactly that — a notice for transparency, not a consent gate — and dismissing it simply records that you&apos;ve read it.</p>
        </Section>

        <Section title="Intellectual property">
          <p>The design, code and original written content of this site are &copy; {DEMO.studioName}. You may not reproduce, redistribute or repurpose them without permission. Photography is licensed from Unsplash and used under the Unsplash licence; embedded map previews are &copy; Google. Those third-party materials remain subject to their respective owners&apos; terms.</p>
        </Section>

        <Section title="No warranty">
          <p>This website is provided &ldquo;as is&rdquo;, for demonstration purposes only, without warranties of any kind, whether express or implied, including as to accuracy, availability or fitness for a particular purpose. {DEMO.studioName} accepts no liability for any action taken on the basis of its fictional content.</p>
        </Section>

        <Section title="Limitation of liability">
          <p>To the fullest extent permitted by law, {DEMO.studioName} shall not be liable for any indirect, incidental, special or consequential loss or damage arising out of or in connection with your use of this website. Nothing in these terms excludes or limits any liability that cannot be excluded or limited under applicable law.</p>
        </Section>

        <Section title="Third-party content">
          <p>Map previews are embedded from Google Maps and show an approximate area only. Photography is served from Unsplash. These services are subject to their own terms and privacy practices, which are outside our control.</p>
        </Section>

        <Section title="Governing law">
          <p>These terms, and your use of this website, are governed by the laws of {DEMO.jurisdiction}, and the courts of {DEMO.jurisdiction} have jurisdiction over any dispute arising from them.</p>
        </Section>

        <Section title="Changes to this notice">
          <p>We may update this notice from time to time as the demo evolves. The current version always appears on this page, dated at the top under &ldquo;Last updated&rdquo;. Your continued use of the site after a change takes effect means you accept the revised terms.</p>
        </Section>

        <Section title="Contact about this demo">
          <p>Questions about this demonstration or its privacy practices, or interested in a website like it? Get in touch with <StudioLink />.</p>
        </Section>

        <div className="pt-6 border-t" style={{ borderColor: 'var(--line)' }}>
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: 'var(--terra)' }}>← Back to the demo</Link>
        </div>
      </div>
    </div>
  )
}
