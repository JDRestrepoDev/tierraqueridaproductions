/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-red': '#8B0000',
        'gold': '#FFD700',
        'turquoise': '#40E0D0',
      },
      fontFamily: {
        // Primary heading fonts
        'cinzel': ['Cinzel', 'serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'marcellus': ['Marcellus', 'serif'],
        'bodoni': ['Bodoni Moda', 'serif'],
        
        // Body fonts
        'inter': ['Inter', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        
        // Legacy support
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
