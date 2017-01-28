var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev.js');
var chalk = require('chalk');

/**
 * Start the develop Server for instaclone
 * @param  {Object} webpack config
 * @param {Object} DevServer Config
 * @return {[type]}      [description]
 */
new WebpackDevServer(webpack(config), {
    hot: true,
    inline: true,
    contentBase: 'public/',
    historyApiFallback: true,
    compress: true, // Gzip compression
    stats: {
      colors: true, // Show Colors
      chunks: false // Removed unused information
     }
}).listen(8080, 'localhost', function (err) {
    if (err) {
      console.log(chalk.bold.red(err));
    }

    console.log(' 🚧  Webpack development Listening at => ' + chalk.green('http://localhost:8080'));
});
