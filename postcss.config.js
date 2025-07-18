// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'color-oklab': { preserve: false },
        'color-functional-notation': true
      }
    }
  }
}
