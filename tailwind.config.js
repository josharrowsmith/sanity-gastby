const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'ss': {'max': '767px'},
      ...defaultTheme.screens,
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
