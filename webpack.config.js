const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

console.log(`Running in ${isDevelopment ? 'development' : 'production'} mode`);

const htmlOptions = {
    template: './public/index.html',
    favicon: './public/favicon.ico',
    minify: false,
};

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        // Absolute paths so nested routes (e.g. /work/brightfield-solar) resolve assets.
        publicPath: '/',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        devMiddleware: {
            publicPath: '/',
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    // Size budget for the single bundle (React + React Router + app + CSS): ~352 KiB minified,
    // ~105 KiB gzipped over the wire. Warn if it grows past 400 KiB instead of webpack's generic 244 KiB.
    performance: {
        maxAssetSize: 400 * 1024,
        maxEntrypointSize: 400 * 1024,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(
                            Boolean,
                        ),
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.woff2$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][hash][ext]',
                },
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|pdf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(htmlOptions),
        // GitHub Pages serves 404.html for unknown paths: shipping the app there lets
        // deep links such as /work/brightfield-solar boot the client-side router.
        new HtmlWebpackPlugin({ ...htmlOptions, filename: '404.html' }),
        // Real entry point for the case study so the route answers 200 (not 404) on GitHub Pages.
        new HtmlWebpackPlugin({ ...htmlOptions, filename: 'work/brightfield-solar/index.html' }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
};
