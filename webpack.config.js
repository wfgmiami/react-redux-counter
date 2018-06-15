const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const paths = {
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src/js')
}

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'sourcemap',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html')
        }),
        new ExtractTextPlugin('style.bundle.css')
    ],
    module: {
        rules: [
          {
              test:/\.(js|jsx)$/,
              exclude: /node_modules/,
              use: [
                  'babel-loader',
              ]
          },
          {
              test:/\.css$/,
              loader: ExtractTextPlugin.extract({
                  use: 'css-loader'
              })
          },
          {
              test:/\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
              use:[
                  'file-loader'
              ]
          } 
        ]
    },
    resolve:  {
        extensions: ['.js', '.jsx']
    }

    
}

