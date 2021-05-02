export interface SocialLink {
  title: string,
  url: URL | string,
  path: URL | string,
  description: string
}

export interface GitHubRepository {
  name: string
  description: string
  language: string
  url: URL | string 
  updatedAt: string | Date
  stars: number
  watchers: number
}