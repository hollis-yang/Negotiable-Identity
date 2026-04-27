import { useNavigate, useParams } from 'react-router-dom'
import {
  Dumbbell,
  HelpCircle,
  Gamepad2,
  Grid3x3,
  Heart,
  MessageCircle,
  Users,
  ThumbsDown,
  Lightbulb,
  ShieldCheck,
  ArrowLeft,
  Settings2,
  Play,
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageTransition from '../components/layout/PageTransition'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import ProgressBar from '../components/charts/ProgressBar'
import GradientButton from '../components/ui/GradientButton'
import { SIGNAL_BREAKDOWN } from '../data/mockProfile'
import { RELATED_CONTENT } from '../data/mockSignals'
import { useInterests } from '../InterestsContext'
import type { InterestId, SignalKey } from '../types'

const INTEREST_ICON: Record<InterestId, React.ReactNode> = {
  fitness: <Dumbbell size={26} />,
  beauty: <HelpCircle size={26} />,
  gaming: <Gamepad2 size={26} />,
  others: <Grid3x3 size={26} />,
}

const SIGNAL_ICON: Record<SignalKey, React.ReactNode> = {
  likes: <Heart size={20} fill="white" />,
  comments: <MessageCircle size={20} fill="white" />,
  social: <Users size={20} />,
  negative: <ThumbsDown size={20} />,
}

export default function BreakdownPage() {
  const { interestId = 'fitness' } = useParams<{ interestId: InterestId }>()
  const navigate = useNavigate()
  const { interests } = useInterests()
  const interest = interests.find((i) => i.id === interestId) ?? interests[0]

  return (
    <PageTransition>
      <PageHeader title="Interest Breakdown" />
      <div className="px-5 pb-8 space-y-5">
        {/* Hero card */}
        <Card>
          <div className="flex flex-col items-center text-center py-3">
            <IconBadge color={interest.color} size="lg">
              {INTEREST_ICON[interest.id]}
            </IconBadge>
            <h2 className="text-xl font-bold mt-4">Why {interest.name}?</h2>
            <p className="text-sm text-white/55 mt-1">Based on your activity signals</p>
          </div>
        </Card>

        {/* Signal Breakdown */}
        <div>
          <h3 className="font-semibold mb-3 px-1">Signal Breakdown</h3>
          <div className="space-y-2.5">
            {SIGNAL_BREAKDOWN.map((s) => (
              <Card key={s.key} onClick={() => navigate(`/breakdown/${interest.id}/${s.key}`)}>
                <div className="flex items-center gap-3">
                  <IconBadge color={s.color}>{SIGNAL_ICON[s.key]}</IconBadge>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-lg font-bold">{s.percent}%</div>
                    </div>
                    <div className="text-xs text-white/50 mb-2 line-clamp-1">{s.description}</div>
                    <ProgressBar percent={s.percent} color={s.color} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-amber-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">Key Insight</div>
              <p className="text-xs text-white/55 leading-relaxed">
                You often engage with {interest.name.toLowerCase()}-related content through likes and comments,
                and rarely skip this type of content.
              </p>
            </div>
          </div>
        </Card>

        {/* Related Content */}
        <div>
          <h3 className="font-semibold mb-3 px-1">Related Content</h3>
          <div className="grid grid-cols-3 gap-2">
            {RELATED_CONTENT.map((r, i) => (
              <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden bg-bg-card">
                <img
                  src={r.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={28} fill="white" className="drop-shadow-lg" />
                </div>
                <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 text-[11px] font-semibold">
                  <Heart size={10} fill="white" />
                  {r.likes}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} className="text-emerald-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">Privacy Protected</div>
              <p className="text-xs text-white/55 leading-relaxed">
                Analysis happens on your device. Your data stays private and secure.
              </p>
            </div>
          </div>
        </Card>

        {/* CTAs */}
        <div className="space-y-3 pt-2">
          <GradientButton onClick={() => navigate('/edit-interests')}>
            <Settings2 size={18} />
            Adjust This Interest
          </GradientButton>
          <GradientButton variant="secondary" onClick={() => navigate('/profile')}>
            <ArrowLeft size={16} />
            Back to Profile
          </GradientButton>
        </div>
      </div>
    </PageTransition>
  )
}
