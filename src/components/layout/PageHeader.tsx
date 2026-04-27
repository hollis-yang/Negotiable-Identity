import { ArrowLeft, MoreVertical, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
  showBack?: boolean
  rightIcon?: 'more' | 'reset' | 'none'
  onRightClick?: () => void
}

export default function PageHeader({ title, showBack = true, rightIcon = 'more', onRightClick }: Props) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between px-5 py-4 sticky top-0 bg-bg/95 backdrop-blur-sm z-20">
      {showBack ? (
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full bg-bg-card flex items-center justify-center active:scale-95 transition"
        >
          <ArrowLeft size={18} />
        </button>
      ) : (
        <div className="w-9 h-9" />
      )}
      <h1 className="text-base font-semibold tracking-tight">{title}</h1>
      {rightIcon === 'none' ? (
        <div className="w-9 h-9" />
      ) : (
        <button
          onClick={onRightClick}
          className="w-9 h-9 rounded-full bg-bg-card flex items-center justify-center active:scale-95 transition"
        >
          {rightIcon === 'reset' ? <RotateCcw size={16} /> : <MoreVertical size={18} />}
        </button>
      )}
    </div>
  )
}
