const path = require("path");
const webpack = require("webpack");
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: "eval",
  entry: [
    "./app",
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({/* options here */}),
    new webpack.HotModuleReplacementPlugin(),
    /* Uncomment to enable automatic HTML generation */
    new HtmlWebpackPlugin({
      inlineManifestWebpackName: 'webpackManifest',
      template: require('html-webpack-template'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        include: [
          path.resolve(__dirname, "app"),
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, "css"),
          path.join(__dirname, "node_modules"),
        ],
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
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

if (process.env.NODE_ENV === 'production') {
  config.output.filename = '[name].[chunkhash].js';
  config.plugins = [
    ...config.plugins, // ES6 array destructuring, available in Node 5+
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
  ];
}

module.exports = config;