require("dotenv").config();

const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: [
    // isDev && HMR ? "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000reload&true" : undefined,
    "./src/js/main.js",
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public", "dist"),
    clean: true,
    publicPath: "/public",
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
  plugins: [],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              url: false,
            }
          },
        ],
      },
      {
        test: /.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
    ]
  }
};