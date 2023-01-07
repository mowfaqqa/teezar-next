module.exports = {
    plugins: {
      tailwindcss: {
        content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {
            colors: {
              gold: {
                100: '#dd5e89',
                200: '#dd5e89',
                300: 'rgba(247, 187, 151, 1)'
              }
            },
            fontFamily: {
              dancing: ['Dancing Script', 'cursive'],
              roboto: ['Roboto', 'sans-serif'],
              nunito:['Nunito']
            },
            backgroundImage: {
              'head-pattern': "linear-gradient(to right, rgba(221, 94, 137, 1), rgba(247, 187, 151, 1))",
              'home': "linear-gradient(135deg, rgba(0, 0, 0, .5)80%, rgba(0, 0, 0, .5)),  url('/products/background.png')",
              'dresses': "linear-gradient(to right, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('/products/dresses.jpg') ",
              'accessories': "linear-gradient(to right, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('/products/accessories.jpg')",
            }
          },
        },
        plugins: [],
      },
      autoprefixer: {},
    }
  }