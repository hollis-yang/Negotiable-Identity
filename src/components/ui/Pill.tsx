import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  color?: string
  className?: string
}

export default function Pill({ children, color, className = '' }: Props) {
  const style = color ? { backgroundColor: `${color}22`, color } : undefined
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${className}`}
      style={style}
    >
      {children}
    </span>
  )
}
