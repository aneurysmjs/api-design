let path = require('path'),
   nodeModulesDir = path.join(__dirname, './node_modules'),
   ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
   entry: {
      app: [
         './src/core/bootstrap.js'
      ]
   },
   output: {
      path: __dirname + '/build/',
      filename: 'bundle.js',
      publicPath: '/',
      libraryTarget: 'umd'
   },
   resolve: {
      alias: {},
      root: __dirname + '/src/'
   },
   module: {
      preLoaders: [{test: /\.js$/, loader: 'jshint-loader', exclude: /node_modules/}],
      loaders: [
         {test: /\.html$/, loader: 'raw'},
         {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
         {test: /\.css$/, exclude: /node_modules/, loader: 'style!css'},
         //{test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
         {test: /\.styl$/, exclude: /node_modules/, loader: 'style!css!stylus'},
         {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
         {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader'},
         {test: /\.(ttf|eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader' }
      ]
   },
   plugins: [
      new ExtractTextPlugin("styles.css")
   ]
};

module.exports = config;