module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        NavyBlue: "#09115e",
        MediumTitle: "rgba(41,41,41,1)"
      },
      fontFamily: {
        sohne: ["sohne, Helvetica Neue, Helvetica, Arial, sans-serif"],
        fell: ["fell"],
        charter: ["charter"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")],
  experimental: {
    applyComplexClasses: true
  }
};
