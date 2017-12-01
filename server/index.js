// write the logic to import the file and start the webpack
// development kind of server.

const express = require('express');
const path = require('path');
let webpack = require('webpack');
const routes = require('./routes');
let app = express();

// I will have to get the js compiled using webpack and serve it with index.js
// as js bundle
// how can import the webpack dev config and pass it for process to webpack

if (process.env.NODE_ENV === 'development'){
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack.config.dev');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.get('/', (req, res)=>{
  res.render('index');
})


app.use('/static', express.static(path.join(__dirname, 'static')));
// app.use(routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


module.exports = app;
