import type { Config } from 'tailwindcss'

export default <Config>{
  content: [],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        // Traditional Japanese Colors
        'vermilion': '#B22D35', // Akabeni / Vermilion accent (Darker)
        'sumi': '#1A1A1A',      // Dark charcoal for text (Darker)
        'washi': '#F9F8F6',     // Off-white/Washi paper background (Lighter)
        'shiro': '#ffffff',     // Pure white
        'silver': '#bdc3c7',    // Light gray/Silver
        'kon': '#2c3e50',       // Dark Navy (existing brand color kept as secondary)
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1152px', // max-w-6xl equivalent
          '2xl': '1152px', // Limit to 6xl even on larger screens
        },
      },
    },
  },
  plugins: [],
}
