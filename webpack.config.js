// css minify
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // entry: './main.js',
    entry: './jsx/index.jsx',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules']
    },
    devServer: {
        inline: true ,
        port: 5000 ,
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(jpg|png|gif)$/,
                include: /images/,
                loader: 'url'
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ],
    },
    jshint: {
        esversion: 6
    },
    plugins: [
        new ExtractTextPlugin("bundle.min.css")
    ]
};