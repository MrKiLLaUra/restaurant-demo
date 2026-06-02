'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons'
import { DEMO, HOURS } from '@/lib/demo'

const LINKS = [
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer style={{ background: 'var(--dark)', color: 'rgba(255,255,255,0.7)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="serif text-2xl text-white mb-3">Limen <span style={{ color: 'var(--terra)' }}>Restaurant</span></div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{DEMO.tagline}.</p>
            <div className="flex gap-3 mt-5">
              <a href={DEMO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:text-white" style={{ border: '1px solid rgba(255,255,255,0.2)' }}><InstagramIcon size={16} /></a>
              <a href={DEMO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:text-white" style={{ border: '1px solid rgba(255,255,255,0.2)' }}><FacebookIcon size={16} /></a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Opening hours</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {HOURS.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="text-white">{h.days}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + links */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Visit & contact</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href={`tel:${DEMO.phone.replace(/\s/g, '')}`} className="flex items-start gap-2.5 hover:text-white transition-colors"><Phone size={14} className="mt-0.5 shrink-0" /> {DEMO.phone}</a></li>
              <li><a href={`mailto:${DEMO.email}`} className="flex items-start gap-2.5 hover:text-white transition-colors"><Mail size={14} className="mt-0.5 shrink-0" /> {DEMO.email}</a></li>
              <li className="flex items-start gap-2.5"><MapPin size={14} className="mt-0.5 shrink-0" /> {DEMO.address}</li>
            </ul>
            <ul className="flex gap-4 mt-5 text-sm">
              {LINKS.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Newsletter</h4>
            {subscribed ? (
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Thanks! This is a demo — nothing was sent or stored.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true) }} className="flex flex-col gap-2.5">
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Seasonal menus & events, now and then.</p>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="text-sm px-3 py-2.5 rounded-sm outline-none" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff' }} />
                <button type="submit" className="btn btn-primary py-2.5">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <p className="pt-8 text-xs leading-relaxed max-w-3xl" style={{ color: 'rgba(255,255,255,0.4)' }}>{DEMO.disclaimer}</p>
        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.35)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span>© {new Date().getFullYear()} {DEMO.brand} — a fictional demo.</span>
          <span className="flex items-center gap-4">
            <Link href="/legal" className="hover:text-white transition-colors">Legal &amp; Privacy</Link>
            <a href={DEMO.studioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">A demo by {DEMO.studioName} ↗</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
