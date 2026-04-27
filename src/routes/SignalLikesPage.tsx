import { useNavigate, useParams } from 'react-router-dom'
import { Heart, Lightbulb, ArrowLeft, Play } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageTransition from '../components/layout/PageTransition'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import ProgressBar from '../components/charts/ProgressBar'
import GradientButton from '../components/ui/GradientButton'
import { LIKED_CONTENT } from '../data/mockSignals'

export default function SignalLikesPage() {
  const navigate = useNavigate()
  const { interestId = 'fitness' } = useParams()
  return (
    <PageTransition>
      <PageHeader title="Contributing Content" />
      <div className="px-5 pb-8 space-y-5">
        <Card>
          <div className="flex items-center gap-3">
            <IconBadge color="#FF4D6D">
              <Heart size={20} fill="white" />
            </IconBadge>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-semibold">Likes</div>
                  <div className="text-xs text-white/50">Contributing Activity</div>
                </div>
                <div className="text-2xl font-bold text-signal-likes">45%</div>
              </div>
              <ProgressBar percent={45} color="#FF4D6D" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-blue-400" />
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              These are examples of posts you have liked. They reinforce your <b>Fitness</b> interest signal.
            </p>
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="font-semibold">Pattern Detected</h3>
            <span className="text-xs text-white/50">You often like workout and fitness transformation content</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {LIKED_CONTENT.map((c) => (
              <div key={c.id} className="rounded-xl overflow-hidden bg-bg-card">
                <div className={`relative aspect-[4/5] bg-gradient-to-br ${c.gradient}`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 bg-signal-likes/90 rounded-full text-[10px] font-bold">
                    <Heart size={10} fill="white" />
                    Liked
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play size={28} fill="white" className="drop-shadow-lg opacity-90" />
                  </div>
                </div>
                <div className="p-2.5">
                  <div className="text-xs font-semibold mb-0.5 line-clamp-1">{c.title}</div>
                  <div className="flex items-center justify-between text-[10px] text-white/45">
                    <span>{c.tag}</span>
                    <span>{c.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-3 rounded-full bg-bg-card border border-white/10 text-sm font-medium active:scale-[0.98] transition">
          ↻ Load More Content
        </button>

        <Card>
          <div className="text-sm font-semibold mb-3">Your Activity</div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <Stat value="156" label="Total Likes" color="#FF4D6D" />
            <Stat value="45%" label="Match Rate" color="#A855F7" />
            <Stat value="30d" label="Time Period" color="#3B82F6" />
          </div>
        </Card>

        <GradientButton variant="secondary" onClick={() => navigate(`/breakdown/${interestId}`)}>
          <ArrowLeft size={16} />
          Back to Breakdown
        </GradientButton>
      </div>
    </PageTransition>
  )
}

function Stat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div>
      <div className="text-xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-[10px] text-white/50 mt-0.5">{label}</div>
    </div>
  )
}
