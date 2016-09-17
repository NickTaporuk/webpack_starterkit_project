// css minify
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-eval-source-map',
    // entry: './jsx/index.js',
    entry: './jsx/redux/src/index.js',
    output: {
        path: 'public',
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
                loader: 'style-loader!css-loader!postcss-loader'
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
    postcss: function () {
        return [autoprefixer, precss];
    },
    jshint: {
        "asi": true,
        "esversion": 6
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : [
        new NpmInstallPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
};