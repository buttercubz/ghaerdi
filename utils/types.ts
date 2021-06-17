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
  url: string
  updatedAt: string | Date
  stars: number
  watchers: number
}