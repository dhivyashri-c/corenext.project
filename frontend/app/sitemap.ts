import type { MetadataRoute } from 'next'
import { allPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

// Add every new public route here. Blog posts are added automatically from lib/blog.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    {
      url: `${SITE_URL}/blog`,
      lastModified: allPosts[0] ? new Date(allPosts[0].updated ?? allPosts[0].date) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...allPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
