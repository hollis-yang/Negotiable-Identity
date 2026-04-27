import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Lock } from 'lucide-react'
import { FEED_ITEMS } from '../data/mockFeed'
import GradientButton from '../components/ui/GradientButton'

export default function AnalyzeModal() {
  const navigate = useNavigate()
  const bgItem = FEED_ITEMS[0]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex-1 relative overflow-hidden"
    >
      {/* dimmed feed background */}
      <div className={`absolute inset-0 ${bgItem.gradient} opacity-40`} />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 h-full">
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full bg-bg-card rounded-3xl p-7 border border-white/5"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-glow">
              <Sparkles size={28} fill="white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Analyze your content profile</h2>
          <p className="text-sm text-white/60 text-center mb-7 leading-relaxed">
            We will analyze your viewing behavior to understand your interests and personalize your experience.
          </p>
          <GradientButton onClick={() => navigate('/profile')}>
            <Sparkles size={18} />
            Start Analysis
          </GradientButton>
          <button
            onClick={() => navigate('/')}
            className="w-full mt-3 py-3.5 rounded-full bg-bg-cardAlt border border-white/10 text-white font-medium active:scale-[0.98] transition"
          >
            Maybe Later
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-white/40">
            <Lock size={12} />
            <span>Your data is secure and private</span>
          </div>
        </motion.div>
      </div>

      {/* dismiss on outside tap */}
      <button
        onClick={() => navigate('/')}
        className="absolute inset-0 z-0"
        aria-label="Close"
      />
    </motion.div>
  )
}
