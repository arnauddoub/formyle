module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,js}'],
  },
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
