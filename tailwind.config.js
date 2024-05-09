/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      lightWhite: "#CCCDCD",
      gray: "#B3B8BA",
      black: "#010101",
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "7xl": "70px",
    },
    extend: {
      backgroundImage: {
        Page: "url('/src/assets/images/webp/bgPage.webp')",
        commonGradient:
          "linear-gradient(107.02deg,#00FFE1 12.76%,#6E5DF6 91.81%);",
        rightTopGradient:
          "linear-gradient(91.31deg, #00FFE1 0.25%, #7E34DC 28.47%, #AEAEAE 50.45%, rgba(110, 93, 246, 0) 95.53%)",
        leftTopGradient:
          "linear-gradient(91.31deg, #00FFE1 0.25%, #7E34DC 28.47%, #AEAEAE 50.45%, rgba(110, 93, 246, 0) 95.53%)",
      },
      lineHeight: {
        12: "60px",
        20: "80px",
      },
      spacing: {
        18: "74px",
      },
    },
  },
  plugins: [],
};
