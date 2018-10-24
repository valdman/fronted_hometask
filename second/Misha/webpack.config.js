const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.js/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.less/,
            use: ['style-loader', 'css-loader', 'less-loader']
         }
      ]
   },
   devServer: {
      contentBase: './dist',
      port: 5000,
   },
   devtool: 'source-map',
   mode: 'development'
};