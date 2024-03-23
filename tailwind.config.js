/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": "Poppins",
      "caveat": "Caveat"
    },
    extend: {
      keyframes: {
        slide: {
          "0%": {translate: '0 -14px'},
          '100%': { translate: '0 0px'},
        },
        moveup: {
          '0%': { translate: '0 20px'},
          '100%': { translate: '0 0px'},
        }
      },
      animation: {
        'slide-Top': 'slide 0.2s linear',
        'moveup-cont': 'moveup 0.5s linear',
      }
    },
  },
  plugins: [],
}

