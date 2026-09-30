import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import JsonLd from '@/components/JsonLd'
import { allPosts } from '@/lib/blog'
import { OG_IMAGE, SITE, SITE_URL } from '@/lib/site'

const title = 'Blog – Project & Publishing Guides for Students'
const description =
  'Guides for engineering students and researchers: choosing project titles, writing reports, viva preparation, Scopus/IEEE publishing, ML and IoT project ideas.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: { title, description, url: `${SITE_URL}/blog`, type: 'website', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
}

export default function BlogIndex() {
  return (
    <div className="max-w-7xl mx-auto">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Blog',
              '@id': `${SITE_URL}/blog#blog`,
              url: `${SITE_URL}/blog`,
              name: `${SITE.name} Blog`,
              description,
              publisher: { '@id': `${SITE_URL}/#organization` },
              blogPost: allPosts.map((p) => ({
                '@type': 'BlogPosting',
                headline: p.title,
                url: `${SITE_URL}/blog/${p.slug}`,
                datePublished: p.date,
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
              ],
            },
          ],
        }}
      />

      <header className="text-center mb-14">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          Guides for <span className="gradient-text">Projects & Publishing</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
