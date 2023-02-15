/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
};
