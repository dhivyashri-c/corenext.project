'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Cpu, X, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Final Year Projects',
    description: 'Complete project guidance with source code, documentation, PPT, and implementation support.',
    tags: ['AI/ML', 'Web Dev', 'Cloud', 'Python', 'IoT', 'Java'],
    color: 'from-purple-600 to-indigo-600',
    details: {
      overview: 'We provide complete final year project solutions tailored to your department and university requirements.',
      features: [
        'Full source code with documentation',
        'Project report and abstract writing',
        'PPT presentation preparation',
        'Live demo and implementation support',
        'Plagiarism-free content',
        'Viva/presentation coaching',
      ],
      domains: ['AI / Machine Learning', 'Cloud Computing', 'Web Development', 'Python / Django', 'IoT Systems', 'Java / Spring Boot', 'Data Science', 'Cyber Security'],
    },
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Journal / Conference Publishing',
    description: 'End-to-end research paper support from abstract writing to final journal submission.',
    tags: ['IEEE Format', 'Scopus', 'UGC', 'Plagiarism Check', 'Conference'],
    color: 'from-indigo-600 to-blue-600',
    details: {
      overview: 'Professional research paper publishing support for journals and conferences with high acceptance rates.',
      features: [
        'Abstract and full paper writing',
        'IEEE / Elsevier / Springer formatting',
        'Plagiarism reduction below 10%',
        'Journal selection guidance',
        'Reviewer response support',
        'Conference submission assistance',
      ],
      domains: ['Scopus Indexed Journals', 'UGC Care Listed', 'IEEE Conferences', 'Web of Science', 'SCI / SCIE Journals', 'National & International Conferences'],
    },
  },
  {
    id: 3,
    icon: Cpu,
    title: 'Hardware Projects',
    description: 'Physical hardware project implementation with components, circuit design, and coding.',
    tags: ['Arduino', 'Raspberry Pi', 'IoT', 'Robotics', 'Embedded'],
    color: 'from-violet-600 to-purple-600',
    details: {
      overview: 'Complete hardware project solutions with physical components, working demo, and full documentation.',
      features: [
        'Working hardware prototype',
        'Circuit design and PCB layout',
        'Embedded code with explanation',
        'Component list and procurement help',
        'Testing and calibration support',
        'Video demo recording',
      ],
      domains: ['Arduino Projects', 'Raspberry Pi', 'ESP32 / ESP8266', 'IoT Systems', 'Robotics', 'Automation Systems', 'Sensor Projects', 'Embedded Systems'],
    },
  },
]

export default function ServicesSection() {
  const [selected, setSelected] = useState<typeof services[0] | null>(null)

  return (
    <section id="services" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to succeed in your academic journey — from projects to publications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-6 card-hover cursor-pointer group"
              onClick={() => setSelected(svc)}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5`}>
                <svc.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{svc.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {svc.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                  <selected.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{selected.title}</h3>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-300 text-sm mb-5">{selected.details.overview}</p>
            <h4 className="text-white font-semibold mb-3">What&apos;s Included:</h4>
            <ul className="space-y-2 mb-5">
              {selected.details.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-3">Domains / Areas:</h4>
            <div className="flex flex-wrap gap-2">
              {selected.details.domains.map((d) => (
                <span key={d} className="px-2.5 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-700/50">{d}</span>
              ))}
            </div>
            <button
              onClick={() => { setSelected(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Request This Service
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}
