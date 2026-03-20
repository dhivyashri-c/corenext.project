'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Mail, Phone, MapPin, MessageCircle, Loader2, Send } from 'lucide-react'
import { submitInquiry } from '@/lib/api'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Phone must be at least 10 digits').regex(/^\+?[\d\s-]{10,}$/, 'Invalid phone number'),
  college_name: z.string().min(2, 'College name is required'),
  department: z.string().min(2, 'Department is required'),
  service_type: z.enum(['Final Year Project', 'Journal Publishing', 'Conference Paper', 'Hardware Project'], {
    required_error: 'Please select a service type',
  }),
  topic: z.string().min(3, 'Please enter your preferred topic'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const inputClass = 'w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:border-purple-500 placeholder-gray-500 text-sm transition-colors'
const errorClass = 'text-red-400 text-xs mt-1'

export default function ContactSection() {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      await submitInquiry(data)
      toast.success('Inquiry submitted! We will contact you within 24 hours.')
      reset()
    } catch {
      toast.error('Failed to submit. Please try WhatsApp or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fill the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-5">
              <h3 className="text-white font-bold text-lg">Contact Info</h3>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="font-medium">+91 9360056977</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-indigo-900/50 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-medium">techcorenext@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="font-medium">Available Online — Pan India</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/+919360056977?text=Hi%20I%20need%20help%20with%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <div className="glass rounded-2xl p-5">
              <div className="text-white font-semibold mb-3 text-sm">Response Time</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between"><span>WhatsApp</span><span className="text-green-400">Within 1 hour</span></div>
                <div className="flex justify-between"><span>Form Inquiry</span><span className="text-purple-400">Within 24 hours</span></div>
                <div className="flex justify-between"><span>Email</span><span className="text-blue-400">Within 48 hours</span></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input {...register('name')} placeholder="Full Name *" className={inputClass} />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register('email')} type="email" placeholder="Email Address *" className={inputClass} />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input {...register('phone')} placeholder="Phone Number *" className={inputClass} />
                  {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                </div>
                <div>
                  <input {...register('college_name')} placeholder="College Name *" className={inputClass} />
                  {errors.college_name && <p className={errorClass}>{errors.college_name.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input {...register('department')} placeholder="Department *" className={inputClass} />
                  {errors.department && <p className={errorClass}>{errors.department.message}</p>}
                </div>
                <div>
                  <select {...register('service_type')} className={`${inputClass} cursor-pointer`} defaultValue="">
                    <option value="" disabled className="bg-gray-800">Service Type *</option>
                    <option value="Final Year Project" className="bg-gray-800">Final Year Project</option>
                    <option value="Journal Publishing" className="bg-gray-800">Journal Publishing</option>
                    <option value="Conference Paper" className="bg-gray-800">Conference Paper</option>
                    <option value="Hardware Project" className="bg-gray-800">Hardware Project</option>
                  </select>
                  {errors.service_type && <p className={errorClass}>{errors.service_type.message}</p>}
                </div>
              </div>

              <div>
                <input {...register('topic')} name="topic" placeholder="Preferred Domain / Topic *" className={inputClass} />
                {errors.topic && <p className={errorClass}>{errors.topic.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  placeholder="Your Message *"
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className={errorClass}>{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                ) : (
                  <><Send className="w-4 h-4" /> Submit Inquiry</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
