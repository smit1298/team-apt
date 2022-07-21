module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-rgba': 'rgba(255, 255, 255, 0.6)',
        'black-rgba': 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}