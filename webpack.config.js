path = require('path');
HtmlPackagePlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname, './dist/js')
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'style-loader!css-loader'},
            {test: /\.html$/, use: 'html-loader'},
        ]
    },
    plugins: [
        new HtmlPackagePlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};