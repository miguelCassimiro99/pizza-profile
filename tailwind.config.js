/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yellowtail': ['Yellowtail', 'sans-serif']
      },
      screens: {
        'xs': '320px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
