/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    "comma-dangle": ["error", "never"],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
      },
    ],
  },
}
