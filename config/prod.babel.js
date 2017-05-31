import path from 'path';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

import rucksack from 'rucksack-css';
import autoprefixer from 'autoprefixer';

import common from './common.babel.js';

export default {
    ...common,
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
    module: {
        ...common.module,
        rules: [
            ...common.module.rules,
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => ([
                                    rucksack({
                                        fallbacks: true
                                    }),
                                    autoprefixer(),
                                ]),
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: [path.resolve(__dirname, '../resources')],
                            },
                        },
                    ],
                }),
            },
        ],
    },
    devtool: 'source-map',
};
