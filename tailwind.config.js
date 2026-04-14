/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4a351',    // The exact Gold from your logo
        accent: '#b8860b',     // Darker gold for hover
        background: '#fbfaf5', // The Off-white "Cream" background
        dark: '#111111',       // The Footer/Header text black
        card: '#ffffff',       // Pure white for the feature cards
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // For those elegant headings
        sans: ['Inter', 'sans-serif'],           // For clean body text
      },
    },
  },
  plugins: [],
}
