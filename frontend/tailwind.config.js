/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'md':'300px',
      'lp':'700px'
    },
    extend: {
      fontFamily: {
        'Cedarville-Cursive': ['Cedarville Cursive', 'cursive'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}