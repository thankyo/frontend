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
      }
    ]
  },
  output: {
    path: path.join(__dirname, "public-integration"),
    filename: '[name].bundle.js',
    publicPath: "/integration"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "integration"),
    publicPath: '/integration',
    historyApiFallback: true,
    hot: true,
    lazy: false,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8000
  },
};

module.exports = config;