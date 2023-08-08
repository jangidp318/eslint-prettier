module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],

    // prevent eslint to complain about the "styles" variable being used before it was defined
    'no-use-before-define': ['error', { variables: false }],

    // ignore errors for the react-navigation package
    'react/prop-types': ['error', { ignore: ['navigation', 'navigation.navigate'] }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'global-require': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'no-multi-spaces': ['error'],
    'no-trailing-spaces': ['error'],
    indent: ['error', 2],
  },
}
