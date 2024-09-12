/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        'red_100': '#FF425E',
        'blue_100': '#162554',
        'brand-2': '#1F59B0',
      },

    },
  },
  plugins: [],
}

