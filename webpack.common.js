/* eslint-disable max-len */
// plugin to compress images
const ImageminPlugin = require("imagemin-webpack-plugin").default;

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
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== "production", // Disable during development
      pngquant: {
        quality: "95-100",
      },
    }),
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
          // name: "[name].[hash].[ext]",
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
