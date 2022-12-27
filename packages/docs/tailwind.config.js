/** @type {import('tailwindcss').Config} */

const path = require('path')
const { tailwindCssResolver } = require('@bsafer-system/resolvers')

module.exports = tailwindCssResolver({
  content: [
    path.resolve(__dirname, '..', '..', 'node_modules') +
      '/@bsafer-system/react/**/*.{ts,js,tsx,tsx}'
  ]
})
