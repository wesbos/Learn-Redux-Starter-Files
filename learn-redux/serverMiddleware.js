/* eslint-disable global-require */
const express = require('express');
const path = require('path');

// In dev mode, use webpack dev + hot reload middleware
const addDevMiddleware = (app) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);

  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    }),
  );
  app.use(webpackHotMiddleware(compiler));
};

// In production there's no need for webpack itself, just serve the bundled files
const addProdMiddleware = (app) => {
  // express.static middleware is used to serve static files (ie. bundle.js)
  // '/static/' arg is matched to the publicPath from webpack and /static/bundle.js in index.html
  app.use('/static/', express.static(path.join(__dirname, 'dist')));
};

module.exports = (app) => {
  // Apply the right middleware for this context
  process.env.NODE_ENV === 'production' ? addProdMiddleware(app) : addDevMiddleware(app);

  return app;
};
