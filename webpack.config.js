const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        'template': './src/index.html',
    }),
    ],

    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "@tailwindcss/postcss",
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
        ],

    },

};