'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 10 }}
        whileHover={{ opacity: 1, scale: 1, x: 0 }}
        className="hidden group-hover:flex items-center gap-2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap"
      >
        Chat on WhatsApp
      </motion.div>

      {/* Button */}
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />

        <motion.a
          href="https://wa.me/+919360056977?text=Hi%20I%20need%20help%20with%20my%20project"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-900/50 hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>
      </div>
    </div>
  )
}
