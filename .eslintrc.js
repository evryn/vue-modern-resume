module.exports = {
  root: true,
  env : {
    node   : true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'adenvt',
  ],
  rules: {
    'no-console' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: { parser: 'babel-eslint' },
  globals      : { vm: true },
}
