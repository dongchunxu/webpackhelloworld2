path = require('path');
HtmlPackagePlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname, './dist/js')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader : 'style-loader'},
                    { loader :'css-loader',
                      options: {
                            modules: true,
                          importLoaders: 1,
                        },
                    },
                    { loader: 'postcss-loader'}
                    ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.tpl$/,
                use: 'ejs-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: 'file-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlPackagePlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject:'body',
        })
    ]
};