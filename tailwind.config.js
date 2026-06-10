/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e9eeff',
          500: '#3f51b5',
          700: '#2c388f'
        }
      }
    }
  },
  plugins: [],
};
