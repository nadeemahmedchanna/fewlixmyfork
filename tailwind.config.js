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
          green: '#69de37', // example light green
          blue: '#07093d',
          DEFAULT: '#69de37', // your main brand color
        },
      },
    },
  },
  plugins: [],
}
