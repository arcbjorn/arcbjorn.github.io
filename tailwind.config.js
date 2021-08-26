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
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "font-mono"],
      },
      height: {
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
