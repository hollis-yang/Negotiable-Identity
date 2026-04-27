import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MobileFrame({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-[#050507] flex items-center justify-center md:py-8">
      <div
        className="relative w-full md:w-[390px] md:h-[844px] md:rounded-[40px] md:border md:border-bg-border md:shadow-2xl bg-bg overflow-hidden flex flex-col"
        style={{ minHeight: '100vh' }}
      >
        {children}
      </div>
    </div>
  )
}
