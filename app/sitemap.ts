import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://restaurant-demo.limen-studios.com'
  return ['', '/menu', '/gallery', '/about', '/contact'].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }))
}
