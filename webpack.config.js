const path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

console.log(`Running in ${isDevelopment ? 'development' : 'production'} mode`);

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isDevelopment ? '/' : './',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        devMiddleware: {
            publicPath: isDevelopment ? '/' : './',
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
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
                test: /\.(png|jpe?g|gif|mp4|webm|ogg|svg|pdf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            minify: false,
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
};
