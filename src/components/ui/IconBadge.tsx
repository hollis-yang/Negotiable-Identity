import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  color?: string
  size?: 'sm' | 'md' | 'lg'
  gradient?: boolean
}

const sizeMap = {
  sm: 'w-8 h-8 rounded-lg',
  md: 'w-10 h-10 rounded-xl',
  lg: 'w-14 h-14 rounded-2xl',
}

export default function IconBadge({ children, color = '#FF6B35', size = 'md', gradient = true }: Props) {
  const cls = sizeMap[size]
  const bg = gradient
    ? `linear-gradient(135deg, ${color} 0%, ${shade(color, -15)} 100%)`
    : color
  return (
    <div className={`${cls} flex items-center justify-center text-white shrink-0`} style={{ background: bg }}>
      {children}
    </div>
  )
}

function shade(hex: string, percent: number) {
  const m = hex.replace('#', '').match(/.{2}/g)
  if (!m) return hex
  const [r, g, b] = m.map((c) => parseInt(c, 16))
  const adj = (v: number) => Math.max(0, Math.min(255, v + Math.round((255 * percent) / 100)))
  return `rgb(${adj(r)}, ${adj(g)}, ${adj(b)})`
}
