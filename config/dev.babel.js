import path from 'path';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import {
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
} from 'webpack';

import rucksack from 'rucksack-css';
import autoprefixer from 'autoprefixer';

import common from './common.babel.js';

const plugins = [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new StyleLintPlugin({
        emitErrors: false,
        syntax: 'scss',
    }),
];

export default {
    ...common,
    plugins,
    module: {
        ...common.module,
        rules: [
            ...common.module.rules,
            {
                enforce: 'pre',
                test: /\.jsx?/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
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
            },
        ],
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, '../public'),
    },
};
