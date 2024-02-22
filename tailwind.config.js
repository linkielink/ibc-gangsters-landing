/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        25: '100px',
        150: '600px',
      },
      spacing: {
        25: '100px',
        28: '112px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addBase, addUtilities, theme }) {
      addUtilities({
        '.bg-hero': {
          backgroundImage: 'url("/images/hero.webp"),url("/images/hero.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center ',
          backgroundSize: 'cover',
        },
      })
    }),
  ],
}
