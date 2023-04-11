/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        light: '#fffdf3',
        dark: '#161618',
        'dark-accent': '#2f2f32',
        'dark-hover': '#1f1f22',
      },
      animation: {
        background: 'background 10s infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': {
            backgroundPosition: '0 0',
          },
          '50%': {
            backgroundPosition: '100% 0',
          },
        },
      },
    },
  },
  plugins: [],
}
