export type InterestId = 'fitness' | 'beauty' | 'gaming' | 'others'

export type SignalKey = 'likes' | 'comments' | 'social' | 'negative'

export interface Interest {
  id: InterestId
  name: string
  subtitle: string
  percent: number
  color: string
  icon: string
  videosWatched: number
}

export interface Signal {
  key: SignalKey
  name: string
  description: string
  percent: number
  color: string
  icon: string
}

export interface FeedItem {
  id: string
  username: string
  caption: string
  song: string
  likes: string
  comments: string
  saves: string
  gradient: string
  badge?: string
}
