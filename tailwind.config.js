/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '547px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    fontFamily: {
      'sans': ["Kanit", 'sans-serif'],
    },
    extend: {
      boxShadow: {
        '3xl': '0 2px 10px -1px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

