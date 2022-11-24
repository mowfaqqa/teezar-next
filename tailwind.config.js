module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#ffd333',
          200: '#ffd700'
        }
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'head-pattern': "linear-gradient(to right, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('/products/background.png')",
        'dresses': "linear-gradient(to right, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('/products/dresses.jpg') ",
        'accessories': "linear-gradient(to right, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('/products/accessories.jpg')",
      }
    },
  },
  plugins: [],
}
