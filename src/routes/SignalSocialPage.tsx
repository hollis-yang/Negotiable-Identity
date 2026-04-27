import { useNavigate, useParams } from 'react-router-dom'
import {
  Users,
  Send,
  MessageSquare,
  UserPlus,
  Heart,
  ArrowLeft,
  ShieldCheck,
  Network,
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageTransition from '../components/layout/PageTransition'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import GradientButton from '../components/ui/GradientButton'
import { SOCIAL_SIGNALS } from '../data/mockSignals'

const ICON_MAP: Record<string, React.ReactNode> = {
  send: <Send size={20} fill="white" />,
  'message-square': <MessageSquare size={20} fill="white" />,
  'user-plus': <UserPlus size={20} />,
  heart: <Heart size={20} fill="white" />,
  users: <Users size={20} />,
}

const LEVEL_COLOR: Record<string, string> = {
  High: '#10B981',
  Medium: '#F59E0B',
  Low: '#EF4444',
}

export default function SignalSocialPage() {
  const navigate = useNavigate()
  const { interestId = 'fitness' } = useParams()
  return (
    <PageTransition>
      <PageHeader title="Social Signals" />
      <div className="px-5 pb-8 space-y-5">
        <Card>
          <div className="flex flex-col items-center text-center py-3">
            <IconBadge color="#A855F7" size="lg">
              <Users size={26} />
            </IconBadge>
            <h2 className="text-xl font-bold mt-4">Social Graph</h2>
            <p className="text-sm text-white/55 mt-1">How your connections influence this label</p>
          </div>
        </Card>

        <h3 className="font-semibold px-1">Connection Analysis</h3>

        <div className="space-y-2.5">
          {SOCIAL_SIGNALS.map((s) => (
            <Card key={s.name}>
              <div className="flex items-start gap-3">
                <IconBadge color={s.color}>{ICON_MAP[s.icon]}</IconBadge>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-semibold">{s.name}</div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: LEVEL_COLOR[s.level] }}
                      />
                      <span style={{ color: LEVEL_COLOR[s.level] }}>{s.level}</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed mb-2">{s.description}</p>
                  <div className="text-[11px] text-white/45 flex items-center gap-1">
                    {s.icon === 'message-square' && <Network size={11} />}
                    <span>{s.extra}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-500/15 flex items-center justify-center shrink-0">
              <Users size={16} className="text-purple-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">Social Influence</div>
              <p className="text-xs text-white/55 leading-relaxed">
                Your social connections help the system understand the communities and topics you are close to.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} className="text-emerald-400" />
            </div>
            <div>
              <div className="font-semibold mb-1">Privacy Protected</div>
              <p className="text-xs text-white/55 leading-relaxed">
                Private message content is not shown. Only interaction patterns are used.
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
