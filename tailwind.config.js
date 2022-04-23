// const fadeInAnimation = {
//   keyframes: {
//     "fade-in-down": {
//       "0%": {
//         opacity: "0",
//         transform: "translateY(-10px)",
//       },
//       "100%": {
//         opacity: "1",
//         transform: "translateY(0)",
//       },
//     },
//   },
//   animation: {
//     "fade-in-down": "fade-in-down 3.5s ease-out",
//   },
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "font-mono"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      // ...fadeInAnimation,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
