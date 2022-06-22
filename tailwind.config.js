module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      am: ['Arima Madurai'],
    },
    flexGrow: {
      '2': 2
    },
    backgroundImage: {
      'sponsor1': "url('/img/sponsor1.png')",
      'sponsor2': "url('/img/sponsor2.png')",
      'sponsor3': "url('/img/sponsor3.png')",
      'sponsor4': "url('/img/sponsor4.png')",
      'sponsor5': "url('/img/sponsor5.png')",
      'ribbon': "url('/img/ribbon.png')",
      'vidBkg': "url('/img/VideoFrameBkg.png')",
    },
    extend: {
      colors: {
        darkPink: "#B27E73",
        lightPink: "#E0D4D4",
        Rosewood: "#724846"
      },
      height: {
        600: '600px',
        300: '300px'
      },
      width:{
        700: "700px"
      
      },
    },
  },
  plugins: [],
}
