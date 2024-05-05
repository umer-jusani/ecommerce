/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: "2rem",
    },
    textColor: {
      primary: "#0D9276",
      gray: "#31363F",
      Lightgray: "#7E7E7E",
      sliderHeading: "rgba(0, 0, 0, 0.7)",
      featuredProductHead: "#253D4E",
    },
    backgroundColor: {
      primary: "#0D9276",
      lightPrimary: "#2AC08E",
    },
  },
  plugins: [],
};
