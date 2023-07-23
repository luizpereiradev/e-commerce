/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '420px',
        xs: '472px'
      },
      fontFamily: {
        main: ['Inter', 'sans-serif']
      }
    }
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('@tailwindcss/line-clamp')
  ]
}
