module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        alpha: 'var(--alpha)',
        beta: 'var(--beta)',
      },
      zIndex: {
        '-1': '-1',
      },
      transformOrigin: {
        0: '0%',
      },
      translate: {
        '3.5/7': '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
