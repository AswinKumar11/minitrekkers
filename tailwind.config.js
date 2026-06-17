/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          deep:  '#1b4332',
          mid:   '#2d6a4f',
          light: '#d8f3dc',
          muted: '#52b788',
        },
        ochre: {
          DEFAULT: '#f9c74f',
          light:   '#fef9e7',
        },
        cream: '#f6fdf8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
