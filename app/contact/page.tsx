import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons'
import { DEMO, HOURS } from '@/lib/demo'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Reserve & Contact',
  description: 'Book a table at Limen Restaurant, Limassol, or get in touch. Opening hours, location and contact details.',
}

export default function ContactPage() {
  return (
    <div>
      <header className="text-center px-6 pt-20 pb-14 border-b" style={{ borderColor: 'var(--line)' }}>
        <p className="eyebrow mb-3" style={{ color: 'var(--terra)' }}>Reservations</p>
        <h1 className="serif text-[var(--ink)]" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>Book a table</h1>
        <p className="text-[var(--ink-2)] mt-3 max-w-md mx-auto text-sm">Tell us when you&apos;d like to join us and we&apos;ll confirm by phone or WhatsApp.</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <div className="panel rounded-sm p-6">
            <h2 className="eyebrow mb-5" style={{ color: 'var(--terra)' }}>Find us</h2>
            <ul className="flex flex-col">
              {[
                { Icon: Phone, label: 'Phone', value: DEMO.phone, href: `tel:${DEMO.phone.replace(/\s/g, '')}` },
                { Icon: Mail, label: 'Email', value: DEMO.email, href: `mailto:${DEMO.email}` },
                { Icon: MapPin, label: 'Address', value: DEMO.address, href: undefined },
              ].map(({ Icon, label, value, href }) => {
                const body = (
                  <>
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: 'var(--cream)', border: '1px solid var(--line)', color: 'var(--terra)' }}><Icon size={15} /></div>
                    <div>
                      <div className="eyebrow mb-0.5">{label}</div>
                      <div className="text-sm text-[var(--ink)]">{value}</div>
                    </div>
                  </>
                )
                return href
                  ? <li key={label}><a href={href} className="flex items-start gap-3 py-3.5 border-b first:border-t-0 border-t hover:opacity-80 transition-opacity" style={{ borderColor: 'var(--line)' }}>{body}</a></li>
                  : <li key={label} className="flex items-start gap-3 py-3.5 border-t" style={{ borderColor: 'var(--line)' }}>{body}</li>
              })}
            </ul>
            <div className="flex items-start gap-3 pt-3.5 border-t" style={{ borderColor: 'var(--line)' }}>
              <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: 'var(--cream)', border: '1px solid var(--line)', color: 'var(--terra)' }}><Clock size={15} /></div>
              <div>
                <div className="eyebrow mb-1">Hours</div>
                <ul className="text-sm text-[var(--ink-2)] flex flex-col gap-0.5">
                  {HOURS.map((h) => <li key={h.days}><span className="text-[var(--ink)]">{h.days}:</span> {h.time}</li>)}
                </ul>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <a href={DEMO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: '1px solid var(--line)', color: 'var(--ink-2)' }}><InstagramIcon size={16} /></a>
              <a href={DEMO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: '1px solid var(--line)', color: 'var(--ink-2)' }}><FacebookIcon size={16} /></a>
            </div>
          </div>

          <div className="panel rounded-sm overflow-hidden">
            <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(DEMO.mapQuery)}&z=12&output=embed`} className="w-full h-64 border-0" loading="lazy" title="Map" />
          </div>
        </div>
      </div>
    </div>
  )
}
