const webpack = require('webpack');
const path = require('path');
const assetsPath = path.resolve(__dirname, 'public');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // ES6 Loader
      {
        test: path.join(__dirname, 'src'),
        loader: ['babel-loader'],
        query: {
          presets: ['react', 'es2015']
        }
      },
      // SCSS Loader
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // URL Loader
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=100000',
      },
    ]
  },
  plugins: [
      // Webpack 1.0
    //new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
