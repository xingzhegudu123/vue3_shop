// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   'extends': [
//     'plugin:vue/essential',
//     '@vue/standard'
//   ],
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     'space-before-function-paren': 0,
//     "no-multiple-empty-lines":false
//   },
//   parserOptions: {
//     parser: 'babel-eslint'
//   }
// }
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: "babel-eslint"

  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
  }
}
