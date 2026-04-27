import { useNavigate, useParams } from 'react-router-dom'
import { MessageCircle, Lightbulb, ArrowLeft } from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageTransition from '../components/layout/PageTransition'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import ProgressBar from '../components/charts/ProgressBar'
import GradientButton from '../components/ui/GradientButton'
import Pill from '../components/ui/Pill'
import { COMMENT_ACTIVITY, SENTIMENT_ANALYSIS } from '../data/mockSignals'

export default function SignalCommentsPage() {
  const navigate = useNavigate()
  const { interestId = 'fitness' } = useParams()
  return (
    <PageTransition>
      <PageHeader title="Comment Activity" />
      <div className="px-5 pb-8 space-y-5">
        <Card>
          <div className="flex items-center gap-3">
            <IconBadge color="#A855F7">
              <MessageCircle size={20} fill="white" />
            </IconBadge>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-semibold">Comments</div>
                  <div className="text-xs text-white/50">Contributing Activity</div>
                </div>
                <div className="text-2xl font-bold text-signal-comments">30%</div>
              </div>
              <ProgressBar percent={30} color="#A855F7" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
              <Lightbulb size={16} className="text-blue-400" />
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              These comments shaped your engagement. Sentiment analysis informs interest weighting.
            </p>
          </div>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="font-semibold">Pattern Detected</h3>
            <span className="text-xs text-white/50">Mostly positive engagement on fitness posts</span>
          </div>
          <div className="space-y-2.5">
            {COMMENT_ACTIVITY.map((c) => (
              <Card key={c.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-white/50">{c.timeAgo}</span>
                  <Pill color={sentimentColor(c.sentiment)}>{c.sentiment}</Pill>
                </div>
                <div className="flex gap-3">
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm text-white/90 mb-1 line-clamp-2">"{c.yourComment}"</p>
                    <div className="text-[11px] text-white/45">on: {c.onPost}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <div className="text-sm font-semibold mb-3">Sentiment Analysis</div>
          <div className="space-y-3">
            {SENTIMENT_ANALYSIS.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <span className="text-white/70">{s.label}</span>
                  <span className="font-semibold">{s.percent}%</span>
                </div>
                <ProgressBar percent={s.percent} color={s.color} />
              </div>
            ))}
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

function sentimentColor(s: string) {
  if (s === 'Positive') return '#10B981'
  if (s === 'Neutral') return '#A855F7'
  return '#EF4444'
}
