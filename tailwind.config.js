/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/luisa/layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'luisa-gray': '#58595b',
        'luisa-bg': '#EFE6E4',
        'luisa-accent': '#c59483',
      },
      fontFamily: {
        'assistant': ['Assistant', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}