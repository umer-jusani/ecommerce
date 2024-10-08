/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    textColor: {
      primary: "#0D9276",
      gray: "#31363F",
      Lightgray: "#7E7E7E",
      sliderHeading: "rgba(0, 0, 0, 0.7)",
      featuredProductHead: "#253D4E",
      borderColor: "#B4B4B8",
    },
    backgroundColor: {
      primary: "#0D9276",
      lightPrimary: "#2AC08E",
    },
    fontSize: {
      h5: "13px",
      footerHeadings: "22px",
      Laptop_footerHeadings: "18px",
      sm: "14px",
    },
    fontWeight: {
      footerHeadings: "600",
    },
  },
  plugins: [],
};
