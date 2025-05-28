/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c6e49',
        'primary-dark': '#1e4e33',
        secondary: '#f4a261',
        accent: '#e76f51',
        background: '#faf9f6',
        text: '#333333',
        'text-light': '#666666',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
