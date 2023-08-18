/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-color-1': '#463220',
        'my-color-2': '#66593c',
        'my-color-3': '#eceadd',
        'my-color-4': '#f7f8f5',
        'my-color-5': '#ffffff',
      },
      backgroundColor: {
        'color-1': '#463220',
        'color-2': '#66593c',
        'color-3': '#eceadd',
        'color-4': '#f7f8f5',
        'color-5': '#ffffff',
      },
    },
  },
  plugins: [],
};
