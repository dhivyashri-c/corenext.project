import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, Clock, Lightbulb, MessageCircle } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import JsonLd from '@/components/JsonLd'
import { type Block, allPosts, formatDate, getPost, getRelatedPosts, readingMinutes } from '@/lib/blog'
import { OG_IMAGE, SITE, SITE_URL } from '@/lib/site'

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: post.category,
      tags: post.keywords,
      images: [OG_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [OG_IMAGE.url] },
  }
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{block.text}</h2>
    case 'h3':
      return <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">{block.text}</h3>
    case 'p':
      return <p key={i} className="text-gray-300 leading-relaxed mb-5">{block.text}</p>
    case 'ul':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed mb-6 marker:text-purple-400">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )
    case 'ol':
      return (
        <ol key={i} className="list-decimal pl-6 space-y-2 text-gray-300 leading-relaxed mb-6 marker:text-purple-400">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ol>
      )
    case 'tip':
      return (
        <aside key={i} className="flex gap-3 rounded-xl border border-purple-700/50 bg-purple-900/20 p-4 mb-6">
          <Lightbulb className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <p className="text-purple-100 text-sm leading-relaxed">{block.text}</p>
        </aside>
      )
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${post.slug}`
  const related = getRelatedPosts(post)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BlogPosting',
              '@id': `${url}#article`,
              mainEntityOfPage: url,
              url,
              headline: post.title,
              description: post.description,
              image: `${SITE_URL}/opengraph-image`,
              datePublished: post.date,
              dateModified: post.updated ?? post.date,
              articleSection: post.category,
              keywords: post.keywords.join(', '),
              inLanguage: 'en-IN',
              author: { '@type': 'Organization', name: SITE.name, url: SITE_URL },
              publisher: { '@id': `${SITE_URL}/#organization` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
                { '@type': 'ListItem', position: 3, name: post.title, item: url },
              ],
            },
          ],
        }}
      />

      <article className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-purple-400">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-purple-400">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-400 truncate">{post.category}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-700/50 text-xs">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {readingMinutes(post)} min read</span>
          </div>
        </header>

        <div>{post.content.map(renderBlock)}</div>

        <section className="glass rounded-2xl p-6 sm:p-8 mt-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Need help with your project or paper?</h2>
          <p className="text-gray-400 mb-6">
            Talk to the {SITE.name} team in Chennai — final year projects, journal publishing and hardware projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/+919360056977?text=Hi%20I%20read%20your%20blog%20and%20need%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Send an Enquiry
            </Link>
          </div>
        </section>
      </article>

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">Related articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}
    </>
  )
}
