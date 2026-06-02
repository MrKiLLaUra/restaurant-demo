import { MetadataRoute } from 'next'

// Demonstration site — never index.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', disallow: '/' } }
}
