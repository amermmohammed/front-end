var path = require('path');
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
            }

        ]
    },
};