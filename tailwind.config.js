/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./public/**/*.html",
    "./src/**/*.{html,js}"],
    darkMode: "class",
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    }
    
  },
  plugins: [],
}

