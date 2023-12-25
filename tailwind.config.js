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
      'mac': '1024px',
      'xl': '1480px',
      '2xl': '1680px',
      '3xl': '1750px',
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
        'macScreen': '30rem',
        'smScreen': '30rem',
        'mdScreen': '30rem',
        'lgScreen': '30rem',
        'xlScreen': '38rem',
        'fullScreen': '40rem',
      },
      boxShadow: {
        '3xl': '0 2px 10px -1px rgba(0, 0, 0, 0.5)',
      }
      
    },
  },
  plugins: [],
}

