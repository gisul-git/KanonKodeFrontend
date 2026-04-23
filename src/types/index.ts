export interface Course {
  id: string
  title: string
  code: string
  category: string
  badge?: string
  badgeIcon?: string
  duration?: string
  projects?: string
  support?: string
  rating: number
  reviews?: number
  description?: string
  icon?: string
  image: string
  featured?: boolean
  certification?: string | null
  enrolledCount?: string | null
  hasCertification?: boolean
}

export interface Testimonial {
  id: string
  name: string
  experience: string
  beforeRole: string
  afterRole: string
  beforeLabel: string
  afterLabel: string
  quote: string
  avatar: string
  avatarColor: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}
