const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const CompressionPlugin = require("compression-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const config = {
  devtool: "source-map",
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
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.svg$/,
        use: [ 'svg-inline-loader' ]
      },
      {
        test: /\.(jpg|woff|woff2)$/,
        use: "file-loader"
      }
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

if (process.env.NODE_ENV === 'production') {
  config.output.filename = '[name].[chunkhash].js';
  config.output.chunkFilename = '[name].[chunkhash].js';
  config.plugins = [
    new webpack.DefinePlugin({
      '__DEV__': true,
      'FACEBOOK_KEY': 1429718427098411,
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') // default value if not specified
      }
    }),
    ...config.plugins, // ES6 array destructuring, available in Node 5+
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackMd5Hash(),
    // new ChunkManifestPlugin({
    //   filename: 'chunk-manifest.json',
    //   manifestVariable: 'webpackManifest',
    //   inlineManifest: true,
    // }),
    new CopyWebpackPlugin([{ from: '../assets' }]),
    new FaviconsWebpackPlugin('../assets/favicon.png'),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      inlineManifestWebpackName: 'webpackManifest',
      template: './index.ejs',
      title: 'LoveIt',
    })
  ];
} else {
  config.plugins = [
    new webpack.DefinePlugin({
      '__DEV__': true,
      'FACEBOOK_KEY': 1429230027124287,
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') // default value if not specified
      }
    }),

    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins,
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
    })
  ]
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