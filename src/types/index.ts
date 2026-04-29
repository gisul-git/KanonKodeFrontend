export interface Course {
  id: string
  code: string
  title: string
  category: string
  badge: string | null
  badgeIcon: string | null
  duration: string
  durationWeeks: number
  projects: string
  support: string
  rating: number
  reviews: number
  description: string
  longDesc: string
  icon: string
  image: string
  featured: boolean
  certification: string | null
  enrolledCount: string | null
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: 'Free' | 'Paid'
  mode: 'Live' | 'Hybrid'
  skills: string[]
  nextBatch: string
  salary: string
  launchStatus: 'live' | 'announced' | 'coming-soon'
  portfolioRole: string
  scholarshipProduct: boolean
  standardPrice: number
  scholarshipPrice: string
  institutionPrice: string
  emiPrice: string
  weeklyLiveSessions: number
  icp: string
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
  image?: string
  accentColor?: string
  rating?: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}
