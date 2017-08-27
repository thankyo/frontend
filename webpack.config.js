const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const CompressionPlugin = require("compression-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: "./index.js",
    vendor: [
      'offline-plugin/runtime',
      'react',
      'react-dom',
      'react-router',
      'prop-types',
      'react-redux',
      'redux',
      'redux-thunk',
      'redux-form'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: '[name].bundle.js',
    publicPath: "/"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',

    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app-root',
      inject: true,
      inlineManifestWebpackName: 'webpackManifest',
      template: require('html-webpack-template'),
      title: 'LoveIt',
    }),
    new OfflinePlugin({ // should be last
      AppCache: false,
      ServiceWorker: { events: true },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "assets"),
    historyApiFallback: true,
    hot: true,
    lazy: false,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:9000/',
        secure: false,
      },
    }
  },
};

/* Production */

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {

  config.output.filename = '[name].[chunkhash].js';
  config.output.chunkFilename = '[name].[chunkhash].js';
  config.plugins = [
    ...config.plugins, // ES6 array destructuring, available in Node 5+
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackMd5Hash(),
    // new ChunkManifestPlugin({
    //   filename: 'chunk-manifest.json',
    //   manifestVariable: 'webpackManifest',
    //   inlineManifest: true,
    // }),
    new CopyWebpackPlugin([ { from: '../assets' } ]),
    new FaviconsWebpackPlugin('../assets/favicon.png'),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ];
}

/*
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  config.plugins = [
    ...config.plugins,
    new BundleAnalyzerPlugin(),
  ];
}
*/

module.exports = config;