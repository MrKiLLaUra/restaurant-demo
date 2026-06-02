'use client'

import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TIMES = ['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00']
const PARTY = ['1', '2', '3', '4', '5', '6', '7+']

export default function ContactForm() {
  const [type, setType] = useState<'reservation' | 'general'>('reservation')
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', party: '2', message: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 650)
  }

  if (done) {
    return (
      <div className="panel rounded-sm p-10 flex flex-col items-center gap-4 text-center">
        <CheckCircle size={42} style={{ color: 'var(--terra)' }} />
        <div>
          <p className="serif text-2xl text-[var(--ink)]">That&apos;s the flow!</p>
          <p className="text-sm text-[var(--ink-2)] mt-1 max-w-sm">On a live site this would reach the restaurant by email and WhatsApp. This is a demo — nothing was sent or stored.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="panel rounded-sm p-6 sm:p-8 flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-2">
        {(['reservation', 'general'] as const).map((ty) => (
          <button key={ty} type="button" onClick={() => setType(ty)} className={cn('py-2.5 rounded-sm text-[11px] uppercase tracking-[0.12em] font-semibold border transition-colors', type === ty ? 'text-white' : 'text-[var(--ink-2)]')} style={type === ty ? { background: 'var(--terra)', borderColor: 'var(--terra)' } : { borderColor: 'var(--line)' }}>
            {ty === 'reservation' ? 'Book a table' : 'General enquiry'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input required type="text" placeholder="Your name" value={form.name} onChange={(e) => set('name', e.target.value)} className="field" />
        <input required type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => set('phone', e.target.value)} className="field" />
      </div>
      <input type="email" placeholder="Email (optional)" value={form.email} onChange={(e) => set('email', e.target.value)} className="field" />

      {type === 'reservation' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <label className="eyebrow block mb-1.5">Date</label>
            <input type="date" value={form.date} min={new Date().toISOString().split('T')[0]} onChange={(e) => set('date', e.target.value)} className="field" />
          </div>
          <div>
            <label className="eyebrow block mb-1.5">Time</label>
            <select value={form.time} onChange={(e) => set('time', e.target.value)} className="field">
              <option value="">Select</option>
              {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="eyebrow block mb-1.5">Guests</label>
            <select value={form.party} onChange={(e) => set('party', e.target.value)} className="field">
              {PARTY.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
      )}

      <textarea placeholder={type === 'reservation' ? 'Anything we should know? (allergies, occasion…)' : 'Your message'} value={form.message} onChange={(e) => set('message', e.target.value)} rows={3} className="field resize-none" />

      <div>
        <button type="submit" disabled={loading} className="btn btn-primary w-full py-3.5 disabled:opacity-70">
          {loading ? <><Loader2 size={15} className="animate-spin" /> Sending…</> : type === 'reservation' ? 'Request reservation' : 'Send message'}
        </button>
        <p className="text-[11px] text-center text-[var(--ink-3)] mt-3">This is a demo — nothing is sent or stored.</p>
      </div>
    </form>
  )
}
