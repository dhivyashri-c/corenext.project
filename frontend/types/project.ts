export interface Project {
  id: number
  title: string
  category: string
  tech_stack: string[]
  short_description: string
  is_featured: boolean
  image_url?: string
  created_at?: string
}

export interface HardwareProject {
  id: number
  title: string
  category: string
  components: string[]
  short_description: string
  is_featured: boolean
  image_url?: string
  created_at?: string
}

export interface PublishingService {
  id: number
  service_name: string
  description: string
  icon?: string
  is_active: boolean
  created_at?: string
}

export interface Testimonial {
  id: number
  student_name: string
  college_name: string
  review: string
  rating: number
  avatar_url?: string
}

export interface HomepageData {
  hero: {
    title: string
    subtitle: string
    stats: { label: string; value: string }[]
  }
  services: {
    id: number
    title: string
    description: string
    icon: string
    tags: string[]
  }[]
  featured_projects: Project[]
  publishing_services: PublishingService[]
  hardware_projects: HardwareProject[]
  testimonials: Testimonial[]
  contact: {
    phone: string
    email: string
    whatsapp: string
    address: string
  }
}
