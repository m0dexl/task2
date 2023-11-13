/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["MontSerrat", "sans-serif"],
        zapfhumanst: ["Zapfhumanst", "sans-serif"],
      },
    },
  },
  plugins: [],
};
