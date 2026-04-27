import { useNavigate, useParams } from 'react-router-dom'
import {
  ThumbsDown,
  FastForward,
  VolumeX,
  EyeOff,
  XCircle,
  ArrowLeft,
  Lightbulb,
  Heart,
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageTransition from '../components/layout/PageTransition'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import ProgressBar from '../components/charts/ProgressBar'
import GradientButton from '../components/ui/GradientButton'
import { NEGATIVE_FEEDBACK } from '../data/mockSignals'

const ICON_MAP: Record<string, React.ReactNode> = {
  'fast-forward': <FastForward size={20} fill="white" />,
  'volume-x': <VolumeX size={20} />,
  'eye-off': <EyeOff size={20} />,
  'x-circle': <XCircle size={20} />,
}

export default function SignalNegativePage() {
  const navigate = useNavigate()
  const { interestId = 'fitness' } = useParams()
  return (
    <PageTransition>
      <PageHeader title="Negative Signals" />
      <div className="px-5 pb-8 space-y-5">
        <Card>
          <div className="flex flex-col items-center text-center py-3">
            <IconBadge color="#6B7280" size="lg">
              <ThumbsDown size={26} />
            </IconBadge>
            <h2 className="text-xl font-bold mt-4">Negative Signals</h2>
            <p className="text-sm text-white/55 mt-1">Content you showed less interest in</p>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-blue-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">How it works</div>
              <p className="text-xs text-white/55 leading-relaxed">
                These signals help the system understand what you do <b>not</b> want to see.
              </p>
            </div>
          </div>
        </Card>

        <h3 className="font-semibold px-1">Feedback Actions</h3>

        <div className="space-y-2.5">
          {NEGATIVE_FEEDBACK.map((f) => (
            <Card key={f.name}>
              <div className="flex items-center gap-3 mb-2">
                <IconBadge color={f.color}>{ICON_MAP[f.icon]}</IconBadge>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{f.name}</div>
                    <div className="text-lg font-bold" style={{ color: f.color }}>
                      {f.percent}%
                    </div>
                  </div>
                  <div className="text-xs text-white/55">{f.description}</div>
                </div>
              </div>
              <ProgressBar percent={f.percent} color={f.color} />
              <div className="text-[11px] text-white/45 mt-2">{f.extra}</div>
            </Card>
          ))}
        </div>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-amber-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">Key Pattern</div>
              <p className="text-xs text-white/55 leading-relaxed">
                You often skip long workout videos and prefer shorter content under 3 minutes.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-rose-500/15 flex items-center justify-center shrink-0">
              <Heart size={16} className="text-rose-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">Your Comfort</div>
              <p className="text-xs text-white/55 leading-relaxed">
                Negative signals give you control over your feed and improve recommendation quality.
              </p>
            </div>
          </div>
        </Card>

        <GradientButton onClick={() => navigate(`/breakdown/${interestId}`)}>
          <ArrowLeft size={16} />
          Back to Breakdown
        </GradientButton>
      </div>
    </PageTransition>
  )
}
