// what config does webpack require to create the required bundle?
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    publicPath: '/static/js',
    path: path.resolve(__dirname, 'server/static/js'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react"]
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'React Starter Kit',
      hash: true,
      inject: false,
      appMountId: 'root',
      template: 'ejs-loader!server/views/index.ejs'
    })
    // new webpack.HotModuleReplacementPlugin()
  ]
}
