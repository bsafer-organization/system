/** @type {import('tailwindcss').Config} */

const { tailwindCssResolver } = require('@bsafer-system/resolvers')

console.log(tailwindCssResolver())

module.exports = tailwindCssResolver()
