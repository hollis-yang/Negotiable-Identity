import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function MobileFrame({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-[#050507] flex items-center justify-center md:py-6">
      <div
        className="
          relative bg-bg overflow-hidden flex flex-col
          w-full min-h-screen
          md:w-[390px] md:h-[844px] md:min-h-0
          md:rounded-[44px] md:border md:border-bg-border md:shadow-2xl
        "
      >
        {children}
      </div>
    </div>
  )
}
