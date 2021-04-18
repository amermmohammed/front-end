var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: { app: './src/index.js' },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "main.js"
    },
    mode: "development",

    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {
                    minimize: true,
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({ filename: "css/style.css" }),
        new OptimizeCSSAssetsPlugin({}),
    ],
};