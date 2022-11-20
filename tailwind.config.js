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
        roboto : ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}
