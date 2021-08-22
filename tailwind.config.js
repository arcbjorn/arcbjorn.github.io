module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "font-mono"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
