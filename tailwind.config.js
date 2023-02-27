/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "gray": "#cccccc"
    },
    screens: {
      ...defaultTheme.screens,
      mobile: { 'min': '0px', 'max': '767px' },
      tablet: { 'min': '768px', 'max': '1023px' }
    }
  },
  plugins: [],
}
