/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '547px',
      'md': '648px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    fontSize: {
      "sm": '1.6rem',
      "md": '1.7rem',
      "lg": '1.8rem',
      "xl": '2rem',
    },
    fontFamily: {
      'sans': ["Kanit", 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        'fullScreen': '40rem',
        'macScreen': '30rem',
      },
      boxShadow: {
        '3xl': '0 2px 10px -1px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

