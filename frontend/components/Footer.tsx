'use client'

import { GraduationCap, Github, Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react'

const scrollTo = (id: string) => {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publishing', href: '#publishing' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'AI/ML Projects',
  'Web Development',
  'Cloud Computing',
  'Journal Publishing',
  'Conference Papers',
  'Hardware Projects',
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">CoreNext <span className="text-purple-400">Project</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted partner for final year projects, research paper publishing, and hardware project implementation across India.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.displayName}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors text-left"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>📞 +91 9360056977</div>
              <div>✉️ techcorenext@gmail.com</div>
              <div>📍 Available Online — Pan India</div>
            </div>
            <a
              href="https://wa.me/+919360056977?text=Hi%20I%20need%20help%20with%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors w-fit"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 CoreNext Project. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Made with ❤️ for students across India</p>
        </div>
      </div>
    </footer>
  )
}
