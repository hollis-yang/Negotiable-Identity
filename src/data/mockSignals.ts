// Drill-down data for Signal pages (5-1, 5-2, 5-3, 5-4)

const UNSPLASH = (id: string, w = 400, h = 500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`

export const LIKED_CONTENT = [
  {
    id: 1,
    title: 'Full Body Workout',
    tag: 'Fitness',
    timeAgo: '2 days ago',
    gradient: 'from-orange-500 to-red-500',
    image: UNSPLASH('1571019613454-1cb2f99b2d8b'),
  },
  {
    id: 2,
    title: 'Healthy Meal Prep',
    tag: 'Fitness',
    timeAgo: '3 days ago',
    gradient: 'from-green-500 to-emerald-600',
    image: UNSPLASH('1490645935967-10de6ba17061'),
  },
  {
    id: 3,
    title: 'Yoga Flow',
    tag: 'Fitness',
    timeAgo: '5 days ago',
    gradient: 'from-purple-500 to-pink-500',
    image: UNSPLASH('1506126613408-eca07ce68773'),
  },
  {
    id: 4,
    title: 'Strength Training',
    tag: 'Fitness',
    timeAgo: '1 week ago',
    gradient: 'from-blue-500 to-indigo-600',
    image: UNSPLASH('1534438327276-14e5300c3a48'),
  },
  {
    id: 5,
    title: 'Morning Yoga Flow',
    tag: 'Fitness',
    timeAgo: '1 week ago',
    gradient: 'from-pink-500 to-rose-500',
    image: UNSPLASH('1581009146145-b5ef050c2e1e'),
  },
  {
    id: 6,
    title: 'Gymshark Lookbook',
    tag: 'Fitness',
    timeAgo: '2 weeks ago',
    gradient: 'from-yellow-500 to-orange-500',
    image: UNSPLASH('1546483875-ad9014c88eba'),
  },
]

export const RELATED_CONTENT = [
  { image: UNSPLASH('1599058917212-d750089bc07e', 300, 400), likes: '124' },
  { image: UNSPLASH('1517836357463-d25dfeac3438', 300, 400), likes: '32' },
  { image: UNSPLASH('1571019613454-1cb2f99b2d8b', 300, 400), likes: '18' },
]

export const COMMENT_ACTIVITY = [
  {
    id: 1,
    timeAgo: '4 days ago',
    sentiment: 'Positive',
    yourComment: 'This workout routine is exactly what I needed! Starting tomorrow.',
    onPost: 'Beginner-friendly home workout',
    image: UNSPLASH('1571019613454-1cb2f99b2d8b', 200, 200),
  },
  {
    id: 2,
    timeAgo: '1 week ago',
    sentiment: 'Positive',
    yourComment: 'Love these meal prep ideas! Can you share the recipe?',
    onPost: 'High-protein meal prep',
    image: UNSPLASH('1490645935967-10de6ba17061', 200, 200),
  },
  {
    id: 3,
    timeAgo: '1 week ago',
    sentiment: 'Neutral',
    yourComment: 'How long should this exercise last?',
    onPost: 'HIIT cardio session',
    image: UNSPLASH('1517836357463-d25dfeac3438', 200, 200),
  },
  {
    id: 4,
    timeAgo: '2 weeks ago',
    sentiment: 'Positive',
    yourComment: 'Finally found a HIIT class! Thanks for sharing.',
    onPost: 'Find your fitness community',
    image: UNSPLASH('1599058917212-d750089bc07e', 200, 200),
  },
  {
    id: 5,
    timeAgo: '2 weeks ago',
    sentiment: 'Positive',
    yourComment: 'Perfect form demonstration! This helped me correct my technique.',
    onPost: 'Squat form breakdown',
    image: UNSPLASH('1534438327276-14e5300c3a48', 200, 200),
  },
]

export const SENTIMENT_ANALYSIS = [
  { label: 'Positive', percent: 75, color: '#10B981' },
  { label: 'Neutral', percent: 17, color: '#A855F7' },
  { label: 'Negative', percent: 8, color: '#EF4444' },
]

export const SOCIAL_SIGNALS = [
  {
    icon: 'send',
    name: 'Frequent DMs',
    description: 'People you message often may influence your interest profile',
    level: 'High',
    color: '#A855F7',
    extra: '+4',
  },
  {
    icon: 'message-square',
    name: 'Chat Interactions',
    description: 'Conversations and shared content can shape your recommendation signals',
    level: 'Medium',
    color: '#3B82F6',
    extra: '12 fitness videos shared this month',
  },
  {
    icon: 'user-plus',
    name: 'Followed Accounts',
    description: 'Accounts you follow help define your content environment',
    level: 'High',
    color: '#10B981',
    extra: '+23',
  },
  {
    icon: 'heart',
    name: 'Interaction Network',
    description: 'Likes, replies, and shared posts from your network affect your feed',
    level: 'Medium',
    color: '#EC4899',
    extra: '142 likes · 28 replies · 1.3 shares',
  },
  {
    icon: 'users',
    name: 'Communities',
    description: 'Interest groups you engage with regularly',
    level: 'Low',
    color: '#F59E0B',
    extra: 'Fitness Community · Healthy Living',
  },
]

export const NEGATIVE_FEEDBACK = [
  {
    icon: 'fast-forward',
    name: 'Skipping Quickly',
    description: 'You often scrolled past these types of content quickly',
    percent: 43,
    color: '#FF6B35',
    extra: 'Pattern detected: Long-duration videos',
  },
  {
    icon: 'volume-x',
    name: 'Muting / Unfollowing',
    description: 'You chose to reduce content from these creators',
    percent: 28,
    color: '#A855F7',
    extra: '3 creators muted in the last month',
  },
  {
    icon: 'eye-off',
    name: 'Hiding / Reporting',
    description: 'You actively removed or flagged these posts',
    percent: 18,
    color: '#EF4444',
    extra: 'Extreme workout challenge · Misleading fitness tips',
  },
  {
    icon: 'x-circle',
    name: 'Clicking "Not Interested"',
    description: 'Direct rejection from the system prompts',
    percent: 12,
    color: '#6B7280',
    extra: 'Stronger negative signal available',
  },
]
