/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#212529',
      'gray1': '#343a40',
      'gray2': '#495057',
      'gray3': '#d9c5b2',
      'gray4': '#adb5bd',
      'white': '#f8f9fa',
    },
    extend: {
      backgroundImage: {
        'header': "url('./src/images/logo.svg')",
        'cart': "url('./src/images/cart.svg')"
      },

      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '200px 60px',
        '16': '4rem',
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '22px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}

