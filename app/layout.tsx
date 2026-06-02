import type { Metadata } from 'next'
import './globals.css'
import { IMAGES } from '@/lib/content'
import DemoRibbon from '@/components/layout/DemoRibbon'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import DemoGuard from '@/components/DemoGuard'
import CookieNotice from '@/components/CookieNotice'

export const metadata: Metadata = {
  title: { default: 'Limen Restaurant — Mediterranean dining, Limassol (Demo)', template: '%s | Limen Restaurant (Demo)' },
  description: 'A fictional seasonal-Mediterranean restaurant on the Limassol coast — a demonstration of the kind of website Limen Studios builds. Not a real restaurant.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://restaurant-demo.limen-studios.com'),
  applicationName: 'Limen Restaurant (Demo)',
  openGraph: {
    type: 'website',
    siteName: 'Limen Restaurant (Demo)',
    images: [{ url: IMAGES.ctaSpread, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DemoRibbon />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <DemoGuard />
        <CookieNotice />
      </body>
    </html>
  )
}
