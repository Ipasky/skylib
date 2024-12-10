/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}', 
    './src/**/*.html', 
    './src/**/*.js',
  ],
  safelist: [
    'backdrop-blur',
    'backdrop-blur-sm',
    'backdrop-blur-md',
    'backdrop-blur-lg',
    'backdrop-blur-xl',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};