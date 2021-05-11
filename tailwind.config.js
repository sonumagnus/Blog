module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sohne': ["sohne, Helvetica Neue, Helvetica, Arial, sans-serif"],
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")],
  experimental: {
    applyComplexClasses: true
  }
};
