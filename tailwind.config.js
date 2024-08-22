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
        15: '3.75rem',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1.2' }],
        '11xl': ['11rem', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [],
}
