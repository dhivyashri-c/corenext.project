'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'

const services = [
  'Abstract Writing & Literature Review',
  'Full Research Paper Drafting',
  'IEEE / Elsevier / Springer Formatting',
  'Plagiarism Reduction Below 10%',
  'Journal Selection Guidance',
  'Conference Paper Submission',
  'Reviewer Correction Support',
]

const timeline = [
  { step: 1, title: 'Submit Topic', desc: 'Share your research idea or existing work' },
  { step: 2, title: 'Draft Paper', desc: 'Our experts write the full research paper' },
  { step: 3, title: 'Format & Review', desc: 'IEEE/Elsevier formatting + quality check' },
  { step: 4, title: 'Plagiarism Check', desc: 'Turnitin report + rewriting if needed' },
  { step: 5, title: 'Journal Submission', desc: 'Submit to selected journal or conference' },
]

const faqs = [
  { q: 'How long does paper publishing take?', a: 'Typically 2-4 weeks for a complete paper from scratch, with journal submission within 48 hours after final review.' },
  { q: 'Which journals do you support?', a: 'We support Scopus, UGC Care, Web of Science, SCI/SCIE indexed journals, and IEEE/ACM/Springer conferences.' },
  { q: 'Is plagiarism guaranteed below 10%?', a: 'Yes, we use Turnitin and iThenticate to verify. We rewrite until similarity is below 10%.' },
  { q: 'What information do I need to provide?', a: 'Just your research topic, any existing work/data, your college name, and preferred domain. We handle the rest.' },
  { q: 'Do you provide Turnitin report?', a: 'Yes, we provide a full Turnitin report along with the final formatted paper.' },
]

export default function PublishingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="publishing" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Research Paper <span className="gradient-text">Publishing</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            End-to-end support from topic selection to journal acceptance.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-14">
          {[{ v: '200+', l: 'Papers Published' }, { v: '95%', l: 'Acceptance Rate' }, { v: '50+', l: 'Journals' }].map((s) => (
            <div key={s.l} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{s.v}</div>
              <div className="text-xs text-gray-400 mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Services list */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-white mb-6">What We Offer</h3>
            <ul className="space-y-4">
              {services.map((svc, i) => (
                <motion.li
                  key={svc}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>{svc}</span>
                </motion.li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Publishing Support <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-white mb-6">Publishing Workflow</h3>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 to-indigo-600" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 pl-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                      {item.step}
                    </div>
                    <div className="glass rounded-xl p-3 flex-1">
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-gray-400 text-xs mt-1">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h3>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white font-medium text-sm">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-gray-400 text-sm border-t border-white/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
