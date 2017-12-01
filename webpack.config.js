const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [{loader: "ng-cache-loader?prefix=packman:**!./root.ejs"}]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
          loader: 'ng-annotate-loader'
        },
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }

      ]
    }]
  },
  plugins: [
    // new CleanWebpackPlugin(['./dist']),
    new HtmlWebpackPlugin({
      title: 'Wolf',
      template: './src/root.ejs'
    })
  ]
}
