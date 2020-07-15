export interface ArticleData {
  source: {
    id: string | null,
    name: string
  }
  author: string | null,
  title: string,
  description: string,
  url: string,
  urlToImage: string | null,
  publishedAt: string,
  content: string | null
}

export interface Response {
  status: string,
  totalResults: number
  articles: Array<ArticleData>
}

export type ArticleCategory = 'general' | 'business' | 'technology' | 'sports' | 'entertainment' | 'health'