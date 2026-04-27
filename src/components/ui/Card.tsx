import type { ReactNode, MouseEvent } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  variant?: 'default' | 'alt'
}

export default function Card({ children, className = '', onClick, variant = 'default' }: Props) {
  const bg = variant === 'alt' ? 'bg-bg-cardAlt' : 'bg-bg-card'
  const interactive = onClick ? 'active:scale-[0.98] transition cursor-pointer' : ''
  return (
    <div onClick={onClick} className={`${bg} rounded-card p-4 ${interactive} ${className}`}>
      {children}
    </div>
  )
}
