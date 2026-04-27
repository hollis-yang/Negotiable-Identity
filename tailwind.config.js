/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0F',
          card: '#1A1A24',
          cardAlt: '#22222E',
          border: '#2A2A38',
        },
        brand: {
          from: '#FF6B35',
          to: '#FF3B6E',
        },
        signal: {
          likes: '#FF4D6D',
          comments: '#A855F7',
          social: '#3B82F6',
          negative: '#6B7280',
          fitness: '#FF6B35',
          beauty: '#C026D3',
          gaming: '#06B6D4',
          others: '#64748B',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF6B35 0%, #FF3B6E 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,59,110,0.15) 100%)',
        'feed-1': 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F97316 100%)',
        'feed-2': 'linear-gradient(180deg, #1E3A8A 0%, #6D28D9 100%)',
        'feed-3': 'linear-gradient(160deg, #0EA5E9 0%, #14B8A6 60%, #84CC16 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.3)',
        glow: '0 0 24px rgba(255, 107, 53, 0.4)',
      },
    },
  },
  plugins: [],
}
