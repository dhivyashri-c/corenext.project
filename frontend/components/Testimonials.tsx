'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    college: 'Anna University, Chennai',
    review: 'Got my AI project done with complete source code, report, and PPT. The team was very professional and delivered on time. Highly recommend!',
    rating: 5,
    initials: 'PS',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    college: 'VIT University, Vellore',
    review: 'My IEEE paper got accepted in a Scopus journal with their help. The plagiarism was reduced to 8% and the formatting was perfect. Amazing service!',
    rating: 5,
    initials: 'RV',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    id: 3,
    name: 'Divya Krishnan',
    college: 'Sri Ramachandra Institute, Chennai',
    review: 'The IoT hardware project was delivered with full circuit diagram and working demo. My professor was impressed with the quality. Worth every penny!',
    rating: 5,
    initials: 'DK',
    color: 'from-violet-600 to-purple-600',
  },
  {
    id: 4,
    name: 'Arun Kumar',
    college: 'PSG College of Technology, Coimbatore',
    review: 'They helped me with my final year cloud computing project. Complete documentation, presentation, and live demo support. Excellent work!',
    rating: 5,
    initials: 'AK',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 5,
    name: 'Meera Nair',
    college: 'College of Engineering, Trivandrum',
    review: 'Got my conference paper published with zero plagiarism and perfect IEEE formatting. The review response support was also very helpful. Thank you!',
    rating: 4.5,
    initials: 'MN',
    color: 'from-teal-600 to-green-600',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="section-padding bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-gray-400">Real reviews from students we&apos;ve helped succeed.</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 text-center"
            >
              {/* Avatar */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                {testimonials[current].initials}
              </div>
              <StarRating rating={testimonials[current].rating} />
              <div className="mt-1 text-xs text-yellow-400 font-medium">{testimonials[current].rating}/5</div>
              <p className="text-gray-300 text-base mt-5 mb-6 leading-relaxed italic">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>
              <div className="text-white font-bold">{testimonials[current].name}</div>
              <div className="text-gray-400 text-sm mt-1">{testimonials[current].college}</div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-purple-400 w-6' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
