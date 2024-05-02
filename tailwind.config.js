/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'gradient-ibc',
    'gradient-luna',
    'gradient-saga',
    'gradient-cosmos',
    'gradient-juno',
    'gradient-osmosis',
    'gradient-migaloo',
    'gradient-akash',
    'gradient-stride',
    'gradient-stargaze',
    'glow-ibc',
    'glow-luna',
    'glow-saga',
    'glow-cosmos',
    'glow-juno',
    'glow-osmosis',
    'glow-migaloo',
    'glow-akash',
    'glow-stride',
    'glow-stargaze',
  ],
  theme: {
    extend: {
      animation: {
        'move-forwards': 'moveForwards 2s linear infinite',
        'move-backwards': 'moveBackwards 2s linear infinite',
      },
      keyframes: {
        moveForwards: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '10px 10px' },
        },
        moveBackwards: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-10px -10px' },
        },
      },
      height: {
        25: '100px',
        150: '600px',
      },
      spacing: {
        22: '88px',
        25: '100px',
        28: '112px',
        30: '120px',
      },
      colors: {
        ibc: '#666666',
        luna: '#baa800',
        saga: '#DDDDDD',
        cosmos: '#1c138b',
        juno: '#540000',
        osmosis: '#61005b',
        migaloo: '#007409',
        akash: '#770000',
        stride: '#9d1d56',
        stargaze: '#69bfae',
        done: '#00bb05',
        inflow: '#00be03',
        outflow: '#005cec',
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
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-treasury': {
          backgroundImage: 'url("/images/treasury.webp"),url("/images/treasury.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-manifesto': {
          backgroundImage: 'url("/images/manifesto.webp"),url("/images/manifesto.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-roadmap': {
          backgroundImage: 'url("/images/roadmap.webp"),url("/images/roadmap.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        },
        '.bg-members': {
          backgroundImage: 'url("/images/members.webp"),url("/images/members.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-lore': {
          backgroundImage: 'url("/images/lore.webp"),url("/images/lore.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
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
          background: 'rgb(28,19,139)',
          background: 'linear-gradient(315deg, rgba(28,19,139,1) 30%, rgba(3,0,40,1) 70%)',
        },
        '.gradient-juno': {
          background: 'rgb(27,0,0)',
          background: 'linear-gradient(315deg, rgba(84,0,0) 30%, rgba(27,0,0,1) 70%)',
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
        '.glow-ibc': {
          border: `1px solid ${theme('colors.ibc')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.ibc')}`,
        },
        '.glow-luna': {
          border: `1px solid${theme('colors.luna')}`,
          boxShadow: `0 0 4px 0${theme('colors.luna')}`,
        },
        '.glow-saga': {
          border: `1px solid${theme('colors.saga')}`,
          boxShadow: `0 0 4px 0${theme('colors.saga')}`,
        },
        '.glow-cosmos': {
          border: `1px solid ${theme('colors.cosmos')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.cosmos')}`,
        },
        '.glow-juno': {
          border: `1px solid${theme('colors.juno')}`,
          boxShadow: `0 0 4px 0${theme('colors.juno')}`,
        },
        '.glow-osmosis': {
          border: `1px solid ${theme('colors.osmosis')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.osmosis')}`,
        },
        '.glow-migaloo': {
          border: `1px solid ${theme('colors.migaloo')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.migaloo')}`,
        },
        '.glow-akash': {
          border: `1px solid ${theme('colors.akash')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.akash')}`,
        },
        '.glow-stride': {
          border: `1px solid ${theme('colors.stride')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.stride')}`,
        },
        '.glow-stargaze': {
          border: `1px solid ${theme('colors.stargaze')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.stargaze')}`,
        },
        '.glow-done': {
          border: `1px solid ${theme('colors.done')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.done')}`,
        },
        '.glow-flow-item': {
          border: `1px solid ${theme('colors.ibc')}`,
          boxShadow: `0 0 4px 0 ${theme('colors.ibc')}`,
        },
        '.animated-bar': {
          backgroundImage:
            'linear-gradient(-45deg, rgba(255, 255, 255, 0.6) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.6) 75%, transparent 75%, transparent)',
          backgroundSize: '10px 10px',
        },
      })
    }),
  ],
}
