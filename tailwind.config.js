/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // ✅ Fix: added ./ for current directory HTML files
  theme: {
    extend: {
      colors: {
        gray: {
          950: 'oklch(23.33% 0.0138 266.45)', // ✅ Your custom OKLCH gray
        },
      },
    },
  },
  plugins: [],
}
