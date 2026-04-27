import { createContext, useContext, useState, type ReactNode } from 'react'
import { DEFAULT_INTERESTS } from './data/mockProfile'
import type { Interest } from './types'

interface Ctx {
  interests: Interest[]
  setInterests: (next: Interest[]) => void
}

const InterestsContext = createContext<Ctx | null>(null)

export function InterestsProvider({ children }: { children: ReactNode }) {
  const [interests, setInterests] = useState<Interest[]>(DEFAULT_INTERESTS)
  return <InterestsContext.Provider value={{ interests, setInterests }}>{children}</InterestsContext.Provider>
}

export function useInterests() {
  const ctx = useContext(InterestsContext)
  if (!ctx) throw new Error('useInterests must be used within InterestsProvider')
  return ctx
}
