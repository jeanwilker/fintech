/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-1': '#463220',
        'color-2': '#66593c',
        'color-3': '#eceadd',
        'color-4': '#f7f8f5',
        'color-5': '#ffffff',
      },
      backgroundColor: {
        'bg-color-1': '#463220',
        'bg-color-2': '#66593c',
        'bg-color-3': '#eceadd',
        'bg-color-4': '#f7f8f5',
        'bg-color-5': '#ffffff',
      },
    },
  },
  plugins: [],
};
