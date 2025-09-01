// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#69de37', // default brand color
          green: '#69de37',
          blue: '#07093d',
        },
      },
    },
  },
  plugins: [],
}
