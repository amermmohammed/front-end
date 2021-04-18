var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

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
                'css-loader'
            ]
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        })
    ],
};