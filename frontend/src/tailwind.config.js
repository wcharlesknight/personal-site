const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-purple': '#800080',
        'custom-white': '#ffffff',
        whiteShade1: 'rgba(255, 255, 255, 0.1)',
        whiteShade2: 'rgba(255, 255, 255, 0.2)',
        grayShade1: 'rgba(128, 128, 128, 0.3)',
        grayShade2: 'rgba(128, 128, 128, 0.4)',
        grayShade3: 'rgba(128, 128, 128, 0.5)',
        blackShade1: 'rgba(0, 0, 0, 0.6)',
        blackShade2: 'rgba(0, 0, 0, 0.7)',
        navyShade1: 'rgba(0, 0, 128, 0.8)',
        navyShade2: 'rgba(0, 0, 128, 0.9)',
        navyShade3: 'rgba(0, 0, 128, 1)',
      },
    },
    zIndex: {
      110: 110,
      120: 120,
      130: 130,
      140: 140,
      150: 150,
      160: 160,
      170: 170,
      180: 180,
      190: 190,
      200: 200,
      250: 250,
      300: 300,
      350: 350,
    },
  },
  variants: {
    animation: ['motion-safe', 'motion-reduce'],
  },
  plugins: [require('@tailwindcss/forms')],
};
