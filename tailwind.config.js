/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',              // Pointing to your main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Add all JS/TS/JSX/TSX files in src
    './input.css',                // Your custom CSS file
  ],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
