const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      green: colors.emerald,
      gray: colors.coolGray,
    },
    fontFamily: {
      sans: ['Fira\\ Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        card: '717px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      minHeight: {
        card: '458px',
      },
      minWidth: {
        card: '717px',
      },
      backgroundImage: (theme) => ({
        oval: "url('./oval-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
