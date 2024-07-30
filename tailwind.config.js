/** @type {import('tailwindcss').Config} */
module.exports = {
  content: { 
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./docs/**/*.{html,js}']
  },
  theme: {
    extend: {
      colors: {
        "orange": "#ff7700",
        "grey": "#2e2f2f",
        "white": "#eff1f3",
        "blue2" : "#3772ff"
      },
      fontFamily: {
        "body": ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

