const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',  // name would be entry.bundle
    clean: true,     // remove old hash .js
    assetModuleFilename: '[name][ext]'
  },

  devtool: 'source-map',   // map dist code to source code
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,                // open broswer automatically, when npm run dev
    hot: true,                 // hot reloading
    compress: true,            // enable gzip compression
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',  // Creates `style` nodes from JS strings
          'css-loader',    // Translates CSS into CommonJS
          'sass-loader',   // Compiles Sass to CSS
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',    // backwards compatible with older browser
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    new BundleAnalyzerPlugin(),
  ]
}