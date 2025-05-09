export interface Game {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string[]
  image: string
  players: string
  playTime: number
  difficulty: number
  materials: string
}

export interface Post {
  id: string
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  image: string
  content: string[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}
