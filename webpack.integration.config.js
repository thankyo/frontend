const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: "source-map",
  context: path.resolve(__dirname, 'integration'),
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          } // translates CSS into CommonJS
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          } // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        loaders: [
          {
            loader: 'babel-loader',
            query: { presets: [ 'env'  ] }
          },
          {
            loader: 'react-svg-loader',
            query: { jsx: true }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "public-integration"),
    filename: '[name].bundle.js',
    publicPath: "/"
  },
  plugins: [
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
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, X-Auth-Token"
    },
    proxy: {
      delay: 2000,
      '/api': {
        target: 'http://localhost:9000/',
        secure: false,
      },
    }
  },
};

/* Production */
if (process.env.NODE_ENV === 'production') {
  const CompressionPlugin = require("compression-webpack-plugin");

  config.output.filename = '[name].[chunkhash].js';
  config.output.chunkFilename = '[name].[chunkhash].js';
  config.plugins = [
    ...config.plugins, // ES6 array destructuring, available in Node 5+
    new HtmlWebpackPlugin({
      template: './index.ejs',
      inlineSource: '.(js|css)$'
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ];
} else {
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins,
  ]
}

module.exports = config;