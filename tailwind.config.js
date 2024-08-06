/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#0d1117',
        'div' : '#161B22',
        'border' : '#2E343B',
      },
    },
  },
  plugins: [],
}

