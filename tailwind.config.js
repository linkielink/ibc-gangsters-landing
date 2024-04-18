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
        22: '88px',
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
        '.bg-treasury': {
          backgroundImage: 'url("/images/treasury.webp"),url("/images/treasury.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center ',
          backgroundSize: 'cover',
        },
        '.bg-manifesto': {
          backgroundImage: 'url("/images/manifesto.webp"),url("/images/manifesto.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center ',
          backgroundSize: 'cover',
        },
        '.gradient-ibc': {
          background: 'rgb(30,30,30)',
          background: 'linear-gradient(315deg, rgba(50,50,50,1) 30%, rgba(30,30,30,1) 70%)',
        },
        '.gradient-luna': {
          background: 'rgb(135,122,0)',
          background: 'linear-gradient(315deg, rgba(186,168,0,1) 30%, rgba(135,122,0,1) 70%)',
        },
        '.gradient-saga': {
          background: 'rgb(10,10,10)',
          background: 'linear-gradient(315deg, rgba(30,30,30,1) 30%, rgba(10,10,10,1) 70%)',
        },
        '.gradient-cosmos': {
          background: 'rgb(3,0,40)',
          background: 'linear-gradient(315deg, rgba(6,0,78,1) 30%, rgba(3,0,40,1) 70%)',
        },
        '.gradient-juno': {
          background: 'rgb(27,0,0)',
          background: 'linear-gradient(315deg, rgba(43,0,0,1) 30%, rgba(27,0,0,1) 70%)',
        },
        '.gradient-osmosis': {
          background: 'rgb(66,25,128)',
          background: 'linear-gradient(315deg, rgba(97,0,91,1) 30%, rgba(66,25,128,1) 70%)',
        },
        '.gradient-migaloo': {
          background: 'rgb(0,70,17)',
          background: 'linear-gradient(315deg, rgba(0,116,9,1) 30%, rgba(0,70,17,1) 70%)',
        },
        '.gradient-akash': {
          background: 'rgb(79,0,0)',
          background: 'linear-gradient(315deg, rgba(119,0,0,1) 30%, rgba(79,0,0,1) 70%)',
        },
        '.gradient-stride': {
          background: 'rgb(87,17,48)',
          background: 'linear-gradient(315deg, rgba(157,29,86,1) 30%, rgba(87,17,48,1) 70%)',
        },
        '.gradient-stargaze': {
          background: 'rgb(83,121,179)',
          background:
            'linear-gradient(315deg, rgba(208,200,130,1) 0%, rgba(105,191,174,1) 63%, rgba(83,121,179,1) 100%)',
        },
      })
    }),
  ],
}
