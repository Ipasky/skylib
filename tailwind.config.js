/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: { 
    content: ['./src/**/*.html', './src/**/*.js'],
    safelist: [
      'backdrop-blur',
      'backdrop-blur-sm',
      'backdrop-blur-md',
      'backdrop-blur-lg',
      'backdrop-blur-xl',
    ],
  },
  content: ["./src/**/*.{html,js}]"],
  theme: {
    extend: {},
  },
  plugins: [],
}