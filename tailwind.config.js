const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // require('@tailwindcss/forms')
    // require('@tailwindcss/typography')
  ]
}
