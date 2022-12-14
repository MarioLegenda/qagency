const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackOpenBrowser } = require('webpack-open-browser');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {loadTemplates} = require('./webpackUtil');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    target: 'web',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src/assets'),
        },
        compress: true,
        port: 9000,
        hot: true,
        client: {
            overlay: true,
        }
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
            templateParameters: {
                files: loadTemplates(),
            }
        }),
    ],
};