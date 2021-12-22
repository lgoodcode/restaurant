require('dotenv').config();

const { resolve } = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    './src/js/main.js',
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'public', 'dist'),
    clean: true,
    publicPath: '/public',
  },
  devtool: isDev ? 'inline-source-map' : false,
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // Ignore url images in css from bundling
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
};
