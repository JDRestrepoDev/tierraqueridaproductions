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
        'gold': '#E8B923',
        'turquoise': '#2DD4BF',
        'cream': '#FAF8F5',
        'fest-teal': '#A8D5CE',
        'fest-teal-dark': '#6BA89E',
        'fest-yellow': '#F5D020',
        'fest-blue': '#1E4D8C',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'sans-serif'],
        'fest-script': ['Pacifico', 'cursive'],
        'fest-elegant': ['Great Vibes', 'cursive'],
        'fest-display': ['Bebas Neue', 'sans-serif'],
        'fest-hand': ['Caveat Brush', 'cursive'],
        'brand': ['Luckiest Guy', 'cursive'],
        // Legacy support
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
