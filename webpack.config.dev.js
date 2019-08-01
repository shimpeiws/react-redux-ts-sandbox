const path = require('path');

module.exports = {
  entry: './src/Index.tsx',
  output: {
    filename: './js/bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },

  devServer: {
    open: true,
    openPage: 'index.html',
    contentBase: path.join(__dirname, './dist'),
    watchContentBase: true,
    port: 3000
  }
};
