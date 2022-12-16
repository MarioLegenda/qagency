const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackOpenBrowser } = require('webpack-open-browser');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CssMinimizerPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/build.css'
        }),
        new WebpackOpenBrowser({
            url: 'http://localhost:9000'
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "assets" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
};