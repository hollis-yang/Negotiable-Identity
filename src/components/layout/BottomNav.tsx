import { Home, Compass, Plus, Inbox, User } from 'lucide-react'

export default function BottomNav() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-md border-t border-bg-border z-20">
      <div className="flex items-center justify-around py-2.5 px-2">
        <NavItem icon={<Home size={22} />} label="Home" active />
        <NavItem icon={<Compass size={22} />} label="Discover" />
        <button className="-mt-3 w-12 h-9 rounded-lg bg-brand-gradient flex items-center justify-center shadow-glow active:scale-95 transition">
          <Plus size={22} strokeWidth={2.5} />
        </button>
        <NavItem icon={<Inbox size={22} />} label="Inbox" badge="2" />
        <NavItem icon={<User size={22} />} label="Profile" />
      </div>
      <div className="h-1.5 w-32 bg-white rounded-full mx-auto mb-1 opacity-90" />
    </div>
  )
}

function NavItem({
  icon,
  label,
  active,
  badge,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  badge?: string
}) {
  return (
    <button className="flex flex-col items-center gap-0.5 px-2 relative active:scale-95 transition">
      <div className={active ? 'text-white' : 'text-white/55'}>{icon}</div>
      <span className={`text-[10px] ${active ? 'text-white font-semibold' : 'text-white/55'}`}>{label}</span>
      {badge && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
          {badge}
        </span>
      )}
    </button>
  )
}
