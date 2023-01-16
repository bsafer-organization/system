module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  rules: {
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "semi": false,
        "endOfLine": "auto"
      }
    ]
  }
}