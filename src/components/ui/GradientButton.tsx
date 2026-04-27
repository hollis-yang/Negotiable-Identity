import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  className?: string
}

export default function GradientButton({
  children,
  onClick,
  variant = 'primary',
  fullWidth = true,
  className = '',
}: Props) {
  const base = 'rounded-full font-semibold py-3.5 px-6 flex items-center justify-center gap-2 active:scale-[0.98] transition'
  const width = fullWidth ? 'w-full' : ''
  const styles =
    variant === 'primary'
      ? 'bg-brand-gradient text-white shadow-glow'
      : 'bg-bg-card text-white border border-bg-border'
  return (
    <button onClick={onClick} className={`${base} ${width} ${styles} ${className}`}>
      {children}
    </button>
  )
}
