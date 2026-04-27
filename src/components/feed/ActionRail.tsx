import { Heart, MessageCircle, Bookmark, Share2, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { FeedItem } from '../../types'

interface Props {
  item: FeedItem
}

export default function ActionRail({ item }: Props) {
  const navigate = useNavigate()
  return (
    <div className="absolute right-3 bottom-32 flex flex-col items-center gap-5 z-10">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-brand-gradient p-[2px]">
          <div className="w-full h-full rounded-full bg-bg flex items-center justify-center text-xs font-bold">
            +
          </div>
        </div>
      </div>
      <Action icon={<Heart size={26} fill="white" />} label={item.likes} />
      <Action icon={<MessageCircle size={26} fill="white" />} label={item.comments} />
      <Action icon={<Bookmark size={26} fill="white" />} label={item.saves} />
      <Action icon={<Share2 size={26} />} label="Share" />
      <button
        onClick={() => navigate('/analyze')}
        className="flex flex-col items-center gap-1 active:scale-95 transition"
      >
        <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center shadow-glow">
          <Sparkles size={22} fill="white" />
        </div>
        <span className="text-[11px] font-semibold drop-shadow">Analyze</span>
      </button>
    </div>
  )
}

function Action({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1 active:scale-95 transition">
      <div className="text-white drop-shadow-lg">{icon}</div>
      <span className="text-[11px] font-semibold text-white drop-shadow">{label}</span>
    </button>
  )
}
