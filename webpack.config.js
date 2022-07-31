const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3010,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },    
            {
                test: /\.(css|scss)$/,
                use: [{
                  loader: MiniCssExtractPlugin.loader,
                }, {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true, // <-- !!IMPORTANT!!
                  }
                }, {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true, // <-- !!IMPORTANT!!
                  }
                }
              ],
            },              
            { test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|otf|ttf)$/, use: 'ignore-loader' },
            {
              test: /\.(ts|js)x?$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                  ],
                },
              },
            },
        ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    plugins: [
      new MiniCssExtractPlugin(),
    
    ],
};