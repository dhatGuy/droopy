/* eslint-disable max-len */
// give warning about duplicate packages
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

// generate HTML file
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new DuplicatePackageCheckerPlugin(),
  ],
  module: {
    rules: [{
      test: /\.html$/,
      use: ["html-loader"],
    },
    {
      test: /\.(svg|png|jpg|gif)$/i,
      use: {
        loader: "file-loader",
        options: {
          name: "[sha512:hash:base64:7].[ext]",
          outputPath: "imgs",
        },
      },
    },
    {
      test: /\.(ttf|eot)$/i,
      use: [{
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      }],

    },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
      ],
    },
    ],
  },
};
