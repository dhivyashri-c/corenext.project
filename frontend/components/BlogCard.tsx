import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { type BlogPost, formatDate, readingMinutes } from '@/lib/blog'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="glass rounded-2xl p-6 card-hover flex flex-col h-full">
      <div className="flex items-center gap-3 text-xs mb-4">
        <span className="px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-700/50">
          {post.category}
        </span>
        <span className="text-gray-500 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {readingMinutes(post)} min read
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:text-purple-400 transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{post.description}</p>
      <div className="flex items-center justify-between text-sm">
        <time dateTime={post.date} className="text-gray-500">{formatDate(post.date)}</time>
        <Link
          href={`/blog/${post.slug}`}
          className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1"
          aria-label={`Read: ${post.title}`}
        >
          Read <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
