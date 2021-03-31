export interface SocialLink {
  title: string,
  url: string,
  path: string,
  description: string
}

export interface GitHubRepository {
  name: string
  description: string
  language: string
  languages: Object
  url: string
  updatedAt: string | Date
  stars: number
  watchers: number
}