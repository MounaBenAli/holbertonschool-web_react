const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  // Output Configuration
  output: {
    // Output path
    path: path.resolve("./dist"),
    // Output file name
    filename: "bundle.js"
},

  // Dev Server Configuration
  devServer: {
    compress: true,
    port: 3000,
    // Enable Hot Reloading
    hot: true
},

  // Enable inline source maps
  mode: 'development',
  devtool: 'inline-source-map',
  // Module Configuration
  module: {
    rules: [
        {
            // rule for js files
            test: /\.(js|jsx)$/,
            // exclude node_modules
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                  }
            }
        },
        {
            // rule for css files
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },
        {
            // rule for images
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
      
    ],
  },
 
  // Plugins Configuration
  plugins: [
  
     // HTML Webpack Plugin
     new HtmlWebpackPlugin({
         template: './src/index.html'
     }),
     // Extract css files
     new MiniCssExtractPlugin({
         filename: "[name].css",
         chunkFilename: "[id].css"
     }),
     // Clean Webpack Plugin
     new CleanWebpackPlugin()
  ],
  stats: {
    errorDetails: true
  },
};