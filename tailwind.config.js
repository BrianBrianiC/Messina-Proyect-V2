/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Cambiamos Playfair por Bodoni Moda
        'logo': ['"Bodoni Moda"', 'serif'],
      },
    },
  },
  plugins: [],
}