// ─────────────────────────────────────────────────────────────────────────
//  DEMO CONFIGURATION
//
//  A demonstration website built by Limen Studios. "Limen Restaurant" is a
//  fictional Mediterranean restaurant in Limassol. Every detail below is
//  invented and intentionally non-functional:
//   • phone uses a clearly illustrative "555" style
//   • email uses the reserved `.example` TLD (RFC 2606) and cannot exist
//   • call / email / WhatsApp are disabled site-wide by <DemoGuard>
// ─────────────────────────────────────────────────────────────────────────

export const DEMO = {
  studioName: 'Limen Studios',
  studioUrl: process.env.NEXT_PUBLIC_STUDIO_URL || 'https://www.limen-studios.com',

  brand: 'Limen Restaurant',
  tagline: 'Seasonal Mediterranean, by the Limassol coast',

  phone: '+357 25 555 0190',
  whatsapp: '35725555019',
  email: 'hello@limen-restaurant.example',
  address: '17 Coastal Avenue, Limassol, Cyprus',
  mapQuery: 'Limassol, Cyprus',

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  announcement: 'Now taking reservations for summer terrace dining — book your table by the sea.',

  disclaimer:
    'This is a fictional demonstration website created by Limen Studios. The restaurant, menu, prices, photos, reviews, hours and contact details are illustrative only and do not represent a real business, real people or real dishes for sale.',

  // ── Legal / privacy facts ─────────────────────────────────────────────
  // Real, accurate-to-this-demo values used by the /legal page. The studio
  // (Limen Studios) is the operator and data controller for this demo.
  controller: 'Limen Studios',
  jurisdiction: 'Cyprus',

  supervisoryAuthority: {
    name: 'Office of the Commissioner for Personal Data Protection (Cyprus)',
    url: 'https://www.dataprotection.gov.cy',
  },

  legalLastUpdated: '2 June 2026',

  // The only data this site stores: two first-party, functional localStorage
  // keys. Documented here so the privacy notice provably matches the code.
  storageKeys: [
    { key: 'lr_cookie_ack', purpose: 'Remembers that you dismissed the cookie / transparency notice.' },
    { key: 'lr_promo_dismissed', purpose: 'Remembers that you dismissed the promotional bar.' },
  ],
} as const

export const HOURS: { days: string; time: string }[] = [
  { days: 'Monday – Thursday', time: '12:00 – 23:00' },
  { days: 'Friday – Saturday', time: '12:00 – 00:00' },
  { days: 'Sunday', time: '12:00 – 22:00' },
]
