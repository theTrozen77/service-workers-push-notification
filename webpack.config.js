const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const htmlLoader = require("html-loader");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = (env) => {
    return {
        output: {
            filename: "bundle.js"
        },
        mode: env.mode,
        plugins: [
            new HtmlWebpackPlugin(
                {
                    title: "My App",
                    template: "src/index.html",
                    inject : "body",
                    filename: "./index.html"
                }
                ),
                new webpack.ProgressPlugin(),
                new WorkboxPlugin.InjectManifest({
                    swSrc : './src/sw_cached_v1.js',
                })
            ],
            module : {
                rules : [
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use : {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /\.html$/,
                        use: [
                            {
                                loader: "html-loader"
                            }
                        ]
                    }
                ]
                ,
                
            },
            devServer: {
                historyApiFallback: true,
            },
        }
    };