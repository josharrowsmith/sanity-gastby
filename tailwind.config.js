const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    flex: {
      three: "0 0 33%"
    },
    screens: {
      ss: { max: "767px" },
      ...defaultTheme.screens
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
