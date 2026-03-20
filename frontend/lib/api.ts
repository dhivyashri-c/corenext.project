import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

export async function getHomepageData() {
  const res = await api.get('/api/homepage')
  return res.data
}

export async function getFeaturedProjects() {
  const res = await api.get('/api/projects/featured')
  return res.data
}

export async function getPublishingServices() {
  const res = await api.get('/api/publishing-services')
  return res.data
}

export async function getFeaturedHardware() {
  const res = await api.get('/api/hardware/featured')
  return res.data
}

export async function submitInquiry(data: {
  name: string
  email: string
  phone: string
  college_name: string
  department: string
  service_type: string
  topic: string
  message: string
}) {
  const res = await api.post('/api/inquiries', data)
  return res.data
}

export default api
