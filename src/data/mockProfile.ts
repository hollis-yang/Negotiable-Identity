import type { Interest, Signal } from '../types'

export const TOTAL_VIDEOS = 3118

export const DEFAULT_INTERESTS: Interest[] = [
  {
    id: 'fitness',
    name: 'Fitness',
    subtitle: 'Workouts & Health',
    percent: 40,
    color: '#FF6B35',
    icon: 'dumbbell',
    videosWatched: 1247,
  },
  {
    id: 'beauty',
    name: 'Beauty',
    subtitle: 'Makeup & Skincare',
    percent: 30,
    color: '#C026D3',
    icon: 'sparkles',
    videosWatched: 935,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    subtitle: 'Games & Esports',
    percent: 20,
    color: '#06B6D4',
    icon: 'gamepad-2',
    videosWatched: 624,
  },
  {
    id: 'others',
    name: 'Others',
    subtitle: 'Miscellaneous',
    percent: 10,
    color: '#64748B',
    icon: 'grid',
    videosWatched: 312,
  },
]

export const SIGNAL_BREAKDOWN: Signal[] = [
  {
    key: 'likes',
    name: 'Likes',
    description: 'Content you frequently liked',
    percent: 45,
    color: '#FF4D6D',
    icon: 'heart',
  },
  {
    key: 'comments',
    name: 'Comments',
    description: 'Engagement including comment activity and sentiment',
    percent: 30,
    color: '#A855F7',
    icon: 'message-circle',
  },
  {
    key: 'social',
    name: 'Social Graph',
    description: 'Content from people you follow or interact with',
    percent: 18,
    color: '#3B82F6',
    icon: 'users',
  },
  {
    key: 'negative',
    name: 'Negative Signals',
    description: 'Content you skipped or showed less interest in',
    percent: 7,
    color: '#6B7280',
    icon: 'thumbs-down',
  },
]

export const SUGGESTED_INTERESTS = [
  { label: 'Food & Cooking', icon: 'utensils' },
  { label: 'Music', icon: 'music' },
  { label: 'Travel', icon: 'plane' },
  { label: 'Art & Design', icon: 'palette' },
  { label: 'Education', icon: 'book-open' },
]

export const QUICK_INSIGHTS = {
  mostActive: 'Weekends',
  avgWatchTime: '45 min',
}
