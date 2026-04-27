import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  Dumbbell,
  HelpCircle,
  Gamepad2,
  Grid3x3,
  Info,
  TrendingUp,
  Clock,
  Settings2,
  Share2,
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageTransition from '../components/layout/PageTransition'
import Card from '../components/ui/Card'
import Pill from '../components/ui/Pill'
import IconBadge from '../components/ui/IconBadge'
import DonutChart from '../components/charts/DonutChart'
import ProgressBar from '../components/charts/ProgressBar'
import GradientButton from '../components/ui/GradientButton'
import { TOTAL_VIDEOS, QUICK_INSIGHTS } from '../data/mockProfile'
import { useInterests } from '../InterestsContext'
import type { InterestId } from '../types'

const ICON_MAP: Record<InterestId, React.ReactNode> = {
  fitness: <Dumbbell size={20} />,
  beauty: <HelpCircle size={20} />,
  gaming: <Gamepad2 size={20} />,
  others: <Grid3x3 size={20} />,
}

export default function ContentProfilePage() {
  const navigate = useNavigate()
  const { interests } = useInterests()
  const chartData = interests.map((i) => ({ name: i.name, value: i.percent, color: i.color }))

  return (
    <PageTransition>
      <PageHeader title="Your Content Profile" />
      <div className="px-5 pb-8 space-y-5">
        {/* AI badge */}
        <div className="flex items-center gap-3 p-3 rounded-card bg-gradient-to-r from-brand-from/15 to-brand-to/15 border border-brand-from/30">
          <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center">
            <Sparkles size={16} fill="white" />
          </div>
          <span className="text-sm font-semibold">AI-Powered Analysis Complete</span>
        </div>

        {/* Donut + label header */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Interest Distribution</h3>
            <Pill className="bg-brand-gradient-soft text-white border border-brand-from/30">Last 30 Days</Pill>
          </div>
          <div className="flex justify-center my-2 relative">
            <DonutChart
              data={chartData}
              centerValue={TOTAL_VIDEOS.toLocaleString()}
              centerLabel="Total Videos"
            />
            {/* outside labels */}
            <Label top="6%" left="14%" name="Beauty" percent={interests.find((i) => i.id === 'beauty')!.percent} />
            <Label top="6%" right="14%" name="Fit" percent={interests.find((i) => i.id === 'fitness')!.percent} align="right" />
            <Label bottom="6%" left="12%" name="Gaming" percent={interests.find((i) => i.id === 'gaming')!.percent} />
            <Label bottom="6%" right="12%" name="Others" percent={interests.find((i) => i.id === 'others')!.percent} align="right" />
          </div>
        </Card>

        {/* Detailed Breakdown */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="font-semibold">Detailed Breakdown</h3>
            <button className="text-sm font-medium text-brand-from">View All</button>
          </div>
          <div className="space-y-2.5">
            {interests.map((it) => (
              <Card key={it.id} onClick={() => navigate(`/breakdown/${it.id}`)}>
                <div className="flex items-center gap-3">
                  <IconBadge color={it.color}>{ICON_MAP[it.id]}</IconBadge>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-xs text-white/50 mb-2">
                      {it.videosWatched.toLocaleString()} videos watched
                    </div>
                    <ProgressBar percent={it.percent} color={it.color} />
                  </div>
                  <div className="text-xl font-bold ml-2">{it.percent}%</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How we calculated */}
        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
              <Info size={16} className="text-blue-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">How we calculated this</div>
              <p className="text-xs text-white/55 leading-relaxed">
                Based on your recent activity and engagement patterns over the last 30 days, including watch
                time, likes, shares, and comments.
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Insights */}
        <div>
          <h3 className="font-semibold mb-3 px-1">Quick Insights</h3>
          <div className="grid grid-cols-2 gap-2.5">
            <Card>
              <TrendingUp size={20} className="text-emerald-400 mb-2" />
              <div className="text-xs text-white/55 mb-1">Most Active</div>
              <div className="font-semibold">{QUICK_INSIGHTS.mostActive}</div>
            </Card>
            <Card>
              <Clock size={20} className="text-amber-400 mb-2" />
              <div className="text-xs text-white/55 mb-1">Avg. Watch Time</div>
              <div className="font-semibold">{QUICK_INSIGHTS.avgWatchTime}</div>
            </Card>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-3 pt-2">
          <GradientButton onClick={() => navigate('/edit-interests')}>
            <Settings2 size={18} />
            Edit My Interests
          </GradientButton>
          <GradientButton variant="secondary">
            <Share2 size={16} />
            Share My Profile
          </GradientButton>
        </div>
      </div>
    </PageTransition>
  )
}

interface LabelProps {
  name: string
  percent: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  align?: 'left' | 'right'
}
function Label({ name, percent, top, bottom, left, right, align = 'left' }: LabelProps) {
  return (
    <div
      className={`absolute pointer-events-none ${align === 'right' ? 'text-right' : ''}`}
      style={{ top, bottom, left, right }}
    >
      <div className="text-[11px] text-white/60">{name}</div>
      <div className="text-sm font-bold">{percent}%</div>
    </div>
  )
}
