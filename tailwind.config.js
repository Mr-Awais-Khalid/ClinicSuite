/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xlg: "1390px", 
        large: "1366", 
      },
      keyframes: {
        wave: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        wave: 'wave 3s linear infinite',
      },
    },
  },
  plugins: [],
};
