const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

const config = {
  devtool: "source-map",
  context: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      conf: path.resolve(__dirname, 'src/conf')
    }
  },
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
      },
      {
        test: /\.(jpg|woff|woff2)$/,
        use: ["file-loader"]
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
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.ejs',

      appMountId: 'app',
      mobile: true,
      lang: 'en-US',
      title: 'Love It',
      minify: {
        removeComments: isProduction(),
        collapseWhitespace: isProduction(),
        removeRedundantAttributes: isProduction(),
        useShortDoctype: isProduction(),
        removeEmptyAttributes: isProduction(),
        removeStyleLinkTypeAttributes: isProduction(),
        keepClosingSlash: isProduction(),
        minifyJS: isProduction(),
        minifyCSS: isProduction(),
        minifyURLs: isProduction(),
      },
    })
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
  const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  const WebpackMd5Hash = require('webpack-md5-hash');


  config.output.filename = '[name].[chunkhash].js';
  config.output.chunkFilename = '[name].[chunkhash].js';
  config.plugins = [
    new webpack.DefinePlugin({
      '__DEV__': true,
      FACEBOOK_KEY: 1429718427098411,
      GOOGLE_KEY: JSON.stringify('950975724697-72b9ga3ag50f9m7kknemnbpn74h422v7.apps.googleusercontent.com'),
      STRIPE_KEY: JSON.stringify("pk_live_dmgtat0UE6oSGz9OzmB3ch0A"),
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
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
    })
  ];
}


if (process.env.NODE_ENV !== 'production') {
  config.plugins = [
    new webpack.DefinePlugin({
      '__DEV__': true,
      ALWAYS_INTRO: true,
      FACEBOOK_KEY: 1429230027124287,
      GOOGLE_KEY: JSON.stringify('950975724697-72b9ga3ag50f9m7kknemnbpn74h422v7.apps.googleusercontent.com'),
      STRIPE_KEY: JSON.stringify("pk_test_l8X6IIKp6dumjWWwqsuowf5p"),
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') // default value if not specified
      }
    }),

    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins,
  ]
}

if (process.env.NODE_ENV === 'analyze') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  config.plugins = [
    ...config.plugins,
    new BundleAnalyzerPlugin(),
  ];
}

module.exports = config;