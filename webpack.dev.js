let path = require('path'),
   nodeModulesDir = path.join(__dirname, './node_modules');

let config = {
   entry: {
      app: ['./src/core/bootstrap.js']
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
      noParse: [],
      loaders: [
         {test: /\.html$/, loader: 'raw'},
         {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
         {test: /\.css$/, exclude: /node_modules/, loader: 'style!css'},
         {test: /\.styl$/, exclude: /node_modules/, loader: 'style!css!stylus'},
         {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
         {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader'},
         {test: /\.(ttf|eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader' }
      ]
   }
};

module.exports = config;