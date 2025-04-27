/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f7f7',
          100: '#b3eceb',
          200: '#80e0df',
          300: '#4dd4d2',
          400: '#26cac8',
          500: '#0cb8b6', // primary brand color
          600: '#0aa6a4',
          700: '#08908e',
          800: '#067a78',
          900: '#045352',
        },
        secondary: {
          50: '#e9edf5',
          100: '#c5d1e6',
          200: '#9db3d5',
          300: '#7595c4',
          400: '#577fb7',
          500: '#3969aa',
          600: '#3460a3',
          700: '#2d549a',
          800: '#254892',
          900: '#1d3557', // secondary brand color
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefc0',
          200: '#ffe499',
          300: '#ffda71',
          400: '#ffd154',
          500: '#ffc837',
          600: '#ffb91e',
          700: '#ffaa00',
          800: '#ff9f1c', // accent brand color
          900: '#ff8400',
        },
        success: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        warning: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
        error: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['"DM Serif Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale': 'scale 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};