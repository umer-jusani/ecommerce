/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: "2rem",
      center: true,
    },
    textColor: {
      primary: "#0D9276",
      gray: "#31363F",
    },
    backgroundColor: {
      primary: "#0D9276",
      lightPrimary: "#2AC08E"
    },
  },
  plugins: [],
};
