import path from 'path';

import entrypoints from './entrypoints.babel.js';

export default {
    entry: entrypoints,
    output: {
        path: path.resolve(__dirname, '../public/resources'),
        publicPath: '/resources',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: [
                    path.resolve(__dirname, '../node_modules'),
                ],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../resources'),
        ],
        extensions: [
            '.js',
            '.jsx',
            '.json',
        ],
    },
    devtool: 'eval-source-map',
};
