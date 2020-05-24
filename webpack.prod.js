const path = require('path')
const common = require('./webpack.common')

// optimize/minimize the CSS
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// extract CSS into seperate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// minify Javascript
const TerserPlugin = require('terser-webpack-plugin')

// generate HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin');

// merge webpack.commom.js with webpack.prod.js and webpack.dev.js
const merge = require('webpack-merge')

// remove/clean build folders
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: "production",
    performance: false,
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify:{
                    removeAttributeQuotes: true,
                    collapseWhiteSpace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
        }]
    }
})