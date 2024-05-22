/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        maxWidth: { raw: "(min-width: 515px)" },
      },
    },
  },
  plugins: [],
};
