/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: "3rem",
      center: true,
    },
    textColor: {
      primary: "#0D9276",
    },
  },
  plugins: [],
};
