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
         // {
         //    test: /\.js/,
         //    use: {
         //       loader: 'babel-loader',
         //       options: {
         //          presets: ['@babel/preset-env'],
         //          plugins: ['@babel/plugin-transform-runtime']
         //       }
         //    }
         // },
         {
            test: /\.less/,
            use: ['style-loader', 'css-loader', 'less-loader']
         },
         {
            test: /\.(html)$/,
            use: {
               loader: 'html-loader',
               options: {
                  attrs: [':data-src']
               }
            }
         }
      ]
   },
   devServer: {
      contentBase: './dist',
      port: 5000,
      hot: true
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Shop',
         template: './dist/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
   ],
   devtool: 'source-map',
   mode: 'development'
};