module.exports = {
  entry: './main.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  }
}
