const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');

const files = {
    footer: fs.readFileSync('./src/templates/footer.html', { encoding: 'utf-8' }),
    startSection: fs.readFileSync('./src/templates/startSection.html', { encoding: 'utf-8' }),
    header: fs.readFileSync('./src/templates/header.html', { encoding: 'utf-8' }),
    mobileNav: fs.readFileSync('./src/templates/mobileNav.html', { encoding: 'utf-8' }),
    middleSection: fs.readFileSync('./src/templates/middleSection.html', { encoding: 'utf-8' }),
    officeSection: fs.readFileSync('./src/templates/officeSection.html', { encoding: 'utf-8' }),
    testimonials: fs.readFileSync('./src/templates/testimonials.html', { encoding: 'utf-8' }),
};


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
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "assets" },
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                files: files,
            }
        }),
    ],
};