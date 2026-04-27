import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Dumbbell,
  HelpCircle,
  Gamepad2,
  Grid3x3,
  Settings2,
  Trash2,
  Plus,
  Check,
  Utensils,
  Music,
  Plane,
  Palette,
  BookOpen,
} from 'lucide-react'
import PageHeader from '../components/layout/PageHeader'
import PageTransition from '../components/layout/PageTransition'
import Card from '../components/ui/Card'
import IconBadge from '../components/ui/IconBadge'
import GradientButton from '../components/ui/GradientButton'
import { SUGGESTED_INTERESTS } from '../data/mockProfile'
import { useInterests } from '../InterestsContext'
import type { InterestId } from '../types'

const ICON_MAP: Record<InterestId, React.ReactNode> = {
  fitness: <Dumbbell size={20} />,
  beauty: <HelpCircle size={20} />,
  gaming: <Gamepad2 size={20} />,
  others: <Grid3x3 size={20} />,
}

const SUGGESTED_ICON: Record<string, React.ReactNode> = {
  utensils: <Utensils size={14} />,
  music: <Music size={14} />,
  plane: <Plane size={14} />,
  palette: <Palette size={14} />,
  'book-open': <BookOpen size={14} />,
}

export default function EditInterestsPage() {
  const navigate = useNavigate()
  const { interests, setInterests } = useInterests()
  const [draft, setDraft] = useState(interests)
  const total = draft.reduce((sum, i) => sum + i.percent, 0)

  const updatePercent = (id: InterestId, percent: number) => {
    setDraft((prev) => prev.map((i) => (i.id === id ? { ...i, percent } : i)))
  }

  const apply = () => {
    setInterests(draft)
    navigate(-1)
  }

  return (
    <PageTransition>
      <PageHeader title="Edit Your Interests" rightIcon="reset" onRightClick={() => setDraft(interests)} />
      <div className="px-5 pb-8 space-y-5">
        {/* hero card */}
        <Card>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0">
              <Settings2 size={18} />
            </div>
            <div>
              <div className="font-semibold mb-1">Customize Your Feed</div>
              <p className="text-xs text-white/55 leading-relaxed">
                Adjust the sliders to change how much content you see from each category. Total should equal 100%.
              </p>
            </div>
          </div>
        </Card>

        {/* totals row */}
        <div className="flex items-center justify-between px-1">
          <h3 className="font-semibold">Your Interests</h3>
          <div
            className={`px-3 py-1 rounded-full text-sm font-bold ${
              total === 100 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
            }`}
          >
            {total}%
          </div>
        </div>

        <div className="space-y-3">
          {draft.map((it) => (
            <Card key={it.id}>
              <div className="flex items-center gap-3 mb-3">
                <IconBadge color={it.color}>{ICON_MAP[it.id]}</IconBadge>
                <div className="flex-1">
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-xs text-white/50">{it.subtitle}</div>
                </div>
                <button className="w-8 h-8 rounded-full bg-bg-cardAlt flex items-center justify-center active:scale-95 transition">
                  <Trash2 size={14} className="text-white/60" />
                </button>
              </div>
              <Slider value={it.percent} color={it.color} onChange={(v) => updatePercent(it.id, v)} />
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-white/45">Adjust preference</span>
                <span className="text-lg font-bold">{it.percent}%</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Add new interest */}
        <button className="w-full py-3.5 rounded-card border-2 border-dashed border-white/15 flex items-center justify-center gap-2 text-sm font-medium active:scale-[0.98] transition">
          <div className="w-6 h-6 rounded-full bg-brand-gradient flex items-center justify-center">
            <Plus size={14} />
          </div>
          Add New Interest
        </button>

        {/* Suggested */}
        <div>
          <h3 className="font-semibold mb-3 px-1">Suggested Interests</h3>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_INTERESTS.map((s) => (
              <button
                key={s.label}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-bg-card border border-white/5 text-xs font-medium active:scale-95 transition"
              >
                {SUGGESTED_ICON[s.icon]}
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <GradientButton onClick={apply}>
            <Check size={18} />
            Apply Changes
          </GradientButton>
          <GradientButton variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </GradientButton>
        </div>
      </div>
    </PageTransition>
  )
}

function Slider({ value, color, onChange }: { value: number; color: string; onChange: (v: number) => void }) {
  return (
    <div className="relative w-full h-6 flex items-center">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
          }}
        />
      </div>
      <div
        className="absolute w-5 h-5 rounded-full border-2 border-white shadow-md pointer-events-none transition-all"
        style={{
          left: `calc(${value}% - 10px)`,
          backgroundColor: color,
        }}
      />
    </div>
  )
}
