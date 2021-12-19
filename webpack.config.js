require("dotenv").config();

const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV !== "production";
// const HMR = process.env.HMR === 'true';
// const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: isDev ? "development" : "production",
  entry: [
    // isDev && HMR ? "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000reload&true" : undefined,
    "./src/js/main.js",
  ],
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "public", "dist"),
    clean: true,
    // publicPath: "/public",
  },
  devtool: isDev ? "source-map" : false,
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  // plugins: [
    // isDev && HMR ? new webpack.HotModuleReplacementPlugin() : undefined,
    // new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin({
    //   template: '!!raw-loader!./src/views/pages/<file-name-here>.ejs',
    //   filename: 'index.ejs',
    //   chunks: ['main', 'owl_carousel']
    // })
  // ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
        use: ["style-loader", "css-loader"],
        // include: /src/,
        // sideEffects: true,
      },
      {
        test: /.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  }
};