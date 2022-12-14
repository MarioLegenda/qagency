const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackOpenBrowser } = require('webpack-open-browser');

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
            directory: path.join(__dirname, 'static'),
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
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
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
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
};