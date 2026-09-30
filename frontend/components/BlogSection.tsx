import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import { allPosts } from '@/lib/blog'

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Latest <span className="gradient-text">Guides</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Free guides on project titles, reports, viva preparation and research publishing.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 text-purple-300 font-semibold rounded-xl hover:bg-purple-900/30 transition-colors"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
