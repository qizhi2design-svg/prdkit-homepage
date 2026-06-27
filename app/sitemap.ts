import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.prdkit.xyz'

const routes = [
  '',
  '/docs',
  '/docs/quick-start',
  '/docs/workbench',
  '/docs/prd-lifecycle',
  '/docs/prototype',
  '/docs/sharing',
  '/docs/cli-ref'
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }))
}
