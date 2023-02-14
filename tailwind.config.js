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
      'red': '#F20F0F',
      'white': '#FCFCFC',
      'lightPink': '#FFC5C5',
      'darkGray': '#252525',
      'lightGray': '#C0C0C0',
      'golden': '#F6AB39',
      'gray': '#636363',
      'green': '#11C801',
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}