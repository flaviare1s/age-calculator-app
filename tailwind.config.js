/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: '#854DFF',
        red: '#FF5959',
        black: '#151515',
        grey: '#716F6F',
        light_grey: '#DCDCDC',
        off_white: 'hsl(0, 0%, 94%)',
      },
    },
  },
  plugins: [],
}

