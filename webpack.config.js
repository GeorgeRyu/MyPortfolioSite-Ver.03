const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [{
                        loader: 'css-loader',
                        options: {
							minimize: true,
                            sourceMap: true,
                            url: false
                        }
                    },
                        'postcss-loader',
                        'sass-loader'
                    ],
                })                 
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
        })
    ]
};