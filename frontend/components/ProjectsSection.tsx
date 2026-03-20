'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink } from 'lucide-react'
import { getFeaturedProjects } from '@/lib/api'
import type { Project } from '@/types/project'

const STATIC_PROJECTS: Project[] = [
  { id: 1, title: 'AI Resume Analyzer', category: 'AI/ML', tech_stack: ['Python', 'TensorFlow', 'Flask', 'React'], short_description: 'Analyzes resumes using NLP and provides ATS score with improvement suggestions.', is_featured: true },
  { id: 2, title: 'Deep Learning Image Classifier', category: 'AI/ML', tech_stack: ['Python', 'PyTorch', 'CNN', 'Streamlit'], short_description: 'Multi-class image classification system with 95%+ accuracy using custom CNN.', is_featured: true },
  { id: 3, title: 'AWS Cloud Deployment Pipeline', category: 'Cloud Computing', tech_stack: ['AWS', 'Docker', 'Jenkins', 'Terraform'], short_description: 'Automated CI/CD pipeline for cloud application deployment on AWS ECS.', is_featured: true },
  { id: 4, title: 'Full Stack E-commerce Platform', category: 'Web Development', tech_stack: ['React', 'Node.js', 'MongoDB', 'Stripe'], short_description: 'Complete online shopping platform with payment gateway and admin dashboard.', is_featured: true },
  { id: 5, title: 'Smart Home IoT System', category: 'IoT', tech_stack: ['Arduino', 'MQTT', 'Node-RED', 'Python'], short_description: 'Home automation system with voice control, scheduling, and mobile app.', is_featured: true },
  { id: 6, title: 'Sentiment Analysis Dashboard', category: 'Data Science', tech_stack: ['Python', 'VADER', 'Pandas', 'Plotly'], short_description: 'Real-time social media sentiment analysis with interactive visualizations.', is_featured: true },
]

const CATEGORIES = ['All', 'AI/ML', 'Cloud Computing', 'Web Development', 'Python', 'Java', 'IoT', 'Data Science', 'Cyber Security']

const CATEGORY_COLORS: Record<string, string> = {
  'AI/ML': 'bg-purple-900/40 text-purple-300 border-purple-700/50',
  'Cloud Computing': 'bg-blue-900/40 text-blue-300 border-blue-700/50',
  'Web Development': 'bg-green-900/40 text-green-300 border-green-700/50',
  'Python': 'bg-yellow-900/40 text-yellow-300 border-yellow-700/50',
  'Java': 'bg-orange-900/40 text-orange-300 border-orange-700/50',
  'IoT': 'bg-teal-900/40 text-teal-300 border-teal-700/50',
  'Data Science': 'bg-pink-900/40 text-pink-300 border-pink-700/50',
  'Cyber Security': 'bg-red-900/40 text-red-300 border-red-700/50',
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    getFeaturedProjects().then(setProjects).catch(() => {})
  }, [])

  const filtered = projects.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.short_description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const scrollToContact = (title: string) => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const topicInput = document.querySelector('input[name="topic"]') as HTMLInputElement
        if (topicInput) topicInput.value = title
      }, 800)
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Browse our curated list of final year projects across all domains.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:border-purple-500 placeholder-gray-500"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent'
                  : 'border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 card-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${CATEGORY_COLORS[project.category] || 'bg-gray-800 text-gray-300 border-gray-700'}`}>
                  {project.category}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-600" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">{project.short_description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech_stack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded border border-white/10">{tech}</span>
                ))}
              </div>
              <button
                onClick={() => scrollToContact(project.title)}
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Request Project
              </button>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No projects found. Try a different search or filter.</p>
        )}

        <div className="text-center mt-10">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-purple-500 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all font-semibold"
          >
            View More Projects
          </button>
        </div>
      </div>
    </section>
  )
}
