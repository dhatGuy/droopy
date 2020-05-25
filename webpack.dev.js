/* eslint-disable max-len */
const path = require("path");
const common = require("./webpack.common");

// visualize the size of webpack output files with an interactive, zoomable tree map.
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new BundleAnalyzerPlugin({
    openAnalyzer: false,
  })],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
});
