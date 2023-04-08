/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        100: "100px",
        72: "72px",
        48: "48px",
        40: "40px",
        36: "36px",
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
      },

      lineHeight: {
        72: "72px",
        56: "56px",
        32: "32px",
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",

        white: "#FFFDF6",
        black: "#353532",
        red: "#DD3838",
        grey: "#D9D7D0",
        light_grey: "#FDFBF4",
      },

      screens: {
        mobile: "320px",

        tablet: "768px",

        laptop: "1024px",

        aboutBreak: "1220px",

        desktop: "1440px",

        desktopMax: "1920px",
      },
    },
  },
  plugins: [],
};