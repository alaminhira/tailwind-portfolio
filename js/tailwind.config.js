tailwind.config = {
  theme: {
    extend: {
      colors: {
        body: '#17171F',
        active: '#A3A3FF',
        theme: '#3F3FFF',
        nav: '#404053',
        secondary: '#9191A4',
        badge: '#3F3F51',
        inputBorder: '#565666',
        input: '#2A2A35'
      },
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
        montserrat: ["'Montserrat'", 'sans-serif']
      },
      container: {
        center: true,
        padding: '4rem',
        screens: {
          xl: '1200px'
        }
      }
    }
  }
}