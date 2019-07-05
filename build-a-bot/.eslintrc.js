module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-param-reassign': 0,
    'linebreak-style': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'enforce': 'pre',
    'test': /\.(js|vue)$/,
    'loader': 'eslint-loader',
    'exclude': /(node_modules)/,
    'options': {
      fix: true
    }
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
