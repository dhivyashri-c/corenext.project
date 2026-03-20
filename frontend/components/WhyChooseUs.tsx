'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Wrench, FileText, Presentation, BookMarked, MonitorPlay } from 'lucide-react'

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 200, suffix: '+', label: 'Papers Supported' },
  { value: 100, suffix: '+', label: 'Hardware Kits' },
  { value: 5, suffix: '+', label: 'Years Experience' },
]

const features = [
  { icon: Users, title: 'Experienced Mentors', desc: '5+ years of academic project guidance by industry professionals.' },
  { icon: Wrench, title: 'Customizable Projects', desc: 'Tailored to your university requirements, tech stack, and timeline.' },
  { icon: FileText, title: 'Documentation Support', desc: 'Complete reports, abstracts, and technical documentation included.' },
  { icon: Presentation, title: 'PPT + Report Guidance', desc: 'Professional presentation and report formatting for viva.' },
  { icon: BookMarked, title: 'Research Publication', desc: 'End-to-end support from paper writing to journal submission.' },
  { icon: MonitorPlay, title: 'Demo & Implementation', desc: 'Live demo assistance and step-by-step implementation support.' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="text-4xl font-extrabold gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why <span className="gradient-text">Choose Us?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Trusted by 500+ students across India for final year projects and research publishing.
          </p>
        </motion.div>

        {/* Animated counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-5 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
