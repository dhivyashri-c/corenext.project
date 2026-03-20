import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import PublishingSection from '@/components/PublishingSection'
import HardwareSection from '@/components/HardwareSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <PublishingSection />
      <HardwareSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
