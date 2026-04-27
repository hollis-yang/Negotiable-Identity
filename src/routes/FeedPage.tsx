import { Search, Music } from 'lucide-react'
import { motion } from 'framer-motion'
import { FEED_ITEMS } from '../data/mockFeed'
import ActionRail from '../components/feed/ActionRail'
import BottomNav from '../components/layout/BottomNav'

export default function FeedPage() {
  const item = FEED_ITEMS[0]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex-1 relative overflow-hidden"
    >
      {/* gradient video background */}
      <div className={`absolute inset-0 ${item.gradient}`} />
      {/* readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* top tabs */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-12 pb-3">
        <div className="flex-1" />
        <div className="flex items-center gap-6">
          <button className="text-white/60 font-semibold text-base">Following</button>
          <button className="text-white font-bold text-base relative">
            For You
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <button className="w-9 h-9 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
            <Search size={18} />
          </button>
        </div>
      </div>

      <ActionRail item={item} />

      {/* bottom caption */}
      <div className="absolute bottom-24 left-0 right-20 px-5 z-10">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-lg font-bold drop-shadow">{item.username}</h2>
          {item.badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-brand-gradient rounded-full">{item.badge}</span>
          )}
        </div>
        <p className="text-sm text-white/95 leading-snug drop-shadow mb-3">{item.caption}</p>
        <div className="flex items-center gap-2 text-xs text-white/85">
          <Music size={13} />
          <span className="truncate">{item.song}</span>
        </div>
      </div>

      <BottomNav />
    </motion.div>
  )
}
