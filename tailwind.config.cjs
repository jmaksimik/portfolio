/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{jsx, html, js}',
    './src/pages/**/*.{jsx, html, js}',
    './index.html',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
