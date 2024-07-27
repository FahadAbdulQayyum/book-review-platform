module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EAB308',
        'secondary': '#758694',
        'tertiary': '#F7E7DC',
        'other': '#4E8098',
      }
    },
    backgroundImage: {
      'hero-pattern': "url('./src/assets/books.jpeg')",
    }
  },
  plugins: [],
}