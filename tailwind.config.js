module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      colors: {
        alpha: 'var(--alpha)',
        beta: 'var(--beta)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
