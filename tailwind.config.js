/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primaryColor)',
        secondaryColor: 'var(--secondaryColor)',
        tertiaryColor: 'var(--tertiaryColor)',
        backgroundColor: 'var(--backgroundColor)',
        backgroundColor2: 'var(--backgroundColor2)',
        textColor: 'var(--textColor)',
        textColor2: 'var(--textColor2)',
        dris: '#E9E3FF'
      }
    },
  },
  plugins: [],
}

