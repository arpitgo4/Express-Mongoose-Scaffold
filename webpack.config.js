
const webpack = require('webpack');
const path = require('path');

const ENTRY_POINT = './server.js';

module.exports = {
    devtool: 'cheap-source-map',
    entry: { server: ENTRY_POINT },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: 'bundle.map.js',
        publicPath: '/'
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.html$/, loaders: ['file-loader?name=[name].[ext]'], include: path.join(__dirname, 'src') },
            { test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname) }
        ]
    }
};