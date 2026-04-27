interface Props {
  percent: number
  color: string
  height?: number
}

export default function ProgressBar({ percent, color, height = 6 }: Props) {
  return (
    <div className="w-full bg-white/5 rounded-full overflow-hidden" style={{ height }}>
      <div
        className="h-full rounded-full transition-all"
        style={{
          width: `${percent}%`,
          background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />
    </div>
  )
}
