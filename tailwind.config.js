module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#90C2E7',
        // 'secondary': '#CED3DC',
        // 'tertiary': '#FCF7F8',
        // 'other': '#4E8098',

        'primary': '#405D72',
        // 'primary': 'yellow-500',
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