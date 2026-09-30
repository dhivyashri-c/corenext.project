import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
