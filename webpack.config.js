var path = require("path");
var webpack = require("webpack");

module.exports = {
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
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx/,
        include: [
          path.resolve(__dirname, "app"),
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
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
