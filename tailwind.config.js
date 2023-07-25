/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html, js}'],
  theme: {
    fontFamily: {
        'header': ['Oswald', 'sans-serif'],
    },
    extend: {
      screens: {
        'sm': '600px',
        'lg': '1280px',
        'md': '1000px'
      },
      keyframes: {
        'fade-in': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'wave': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '80%': {
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
          
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out forwards', 
        'slide-in-right': 'slide-in-right 0.7s ease-in-out forwards', 
        'slide-in-left': 'slide-in-left 0.7s ease-in-out forwards', 
        'wave': 'wave 0.5s ease-in-out forwards', 
      },
      animationDelay: {
        '0': '0ms',
        '50': '50ms',
        '100': '500ms',
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms'
      }
    },
  },
  plugins: [],
}

