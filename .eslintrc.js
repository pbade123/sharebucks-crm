module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'react/react-in-jsx-scope': 'off',
    'no-prototype-builtins': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
