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

        'primaryy': '#111827',
        'secondaryy': '#4169E1',
        'tertiaryy': '#d3d3d3',
        'otherr': '#87CEEB',
      }
    },
    backgroundImage: {
      'hero-pattern': "url('/assets/books.jpeg')",
    }
  },
  plugins: [],
}