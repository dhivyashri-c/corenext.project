'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, Mail } from 'lucide-react'

const badges = [
  { text: '500+ Projects', color: 'from-purple-600 to-indigo-600' },
  { text: 'AI/ML Expert', color: 'from-indigo-600 to-blue-600' },
  { text: 'IEEE Papers', color: 'from-violet-600 to-purple-600' },
]

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0f0c2e 100%)' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-900/30 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Floating badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((badge, i) => (
            <motion.span
              key={badge.text}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`px-4 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${badge.color} shadow-lg`}
            >
              {badge.text}
            </motion.span>
          ))}
        </div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
        >
          Final Year Projects,{' '}
          <span className="gradient-text">Journal Publishing</span>
          {' '}& Hardware{' '}
          <span className="gradient-text">Project Support</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Get ready-made project guidance, research paper support, and hardware implementation help
          for your academic success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('services')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-900/50"
          >
            View Services
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 border border-purple-500 text-purple-300 font-semibold rounded-xl hover:bg-purple-900/30 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Contact Now
          </button>
          <a
            href="https://wa.me/+919360056977?text=Hi%20I%20need%20help%20with%20my%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: '500+', label: 'Projects' },
            { value: '200+', label: 'Papers' },
            { value: '100+', label: 'Hardware Kits' },
            { value: '5+', label: 'Years Exp' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('services')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
          className="mt-12 text-gray-500 hover:text-purple-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.button>
      </div>
    </section>
  )
}
