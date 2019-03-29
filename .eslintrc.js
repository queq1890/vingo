module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    'prettier/prettier': ['error', { singleQuote: true }]
    // ...
  }
};
