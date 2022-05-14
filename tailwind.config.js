module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './public/*.html'
  ],
  theme: {
    screens: {
      DEFAULT : '240px',
      'esm': '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },

    },
    extend: {
      colors:{
        'app-color-one' : '#ffc200',
        'app-color-two'  : '#333333',
      },
      fontFamily:{
        GrandHotel: ["grand-hotel, sans-serif"],
        Montserrat: ["Montserrat, sans-serif"],
      },
    },
  },
  plugins: [],
}
