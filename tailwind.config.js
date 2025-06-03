/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blimp: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(25vw) translateY(-10px)' },
          '50%': { transform: 'translateX(50vw) translateY(0)' },
          '75%': { transform: 'translateX(75vw) translateY(-10px)' },
          '100%': { transform: 'translateX(100vw) translateY(0)' },
        }
      },
      animation: {
        blimp: 'blimp 1.2s linear infinite',
      }
    },
  },
  plugins: [],
}

