
require('dotenv').config();

const { resolve } = require('path');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: [
    './src/js/main.js',
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'public', 'dist'),
    clean: true,
    publicPath: '/public/dist',
  },
  devtool: isProd ? 'eval-cheap-module-source-map' : false,
  optimization: {
    emitOnErrors: false,
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
