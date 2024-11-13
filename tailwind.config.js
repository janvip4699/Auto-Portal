/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#427bb3",
        secondary: "#cfd0d1"
      },
      container: {
        center: true,
        padding: {
          default: "2rem",
          sm: "1rem",
        }
      },
    },
  },
  plugins: [],
}

