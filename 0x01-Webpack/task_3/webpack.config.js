const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  //entry
  entry: {
    all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
},
  //output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
},
  //mode
  mode: 'production',
  //loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader', 'image-webpack-loader'],
        type: 'asset/resource',
      },
    ],
  },
  //development server
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8564,
  },
  //devtool
  devtool: 'inline-source-map',
  //plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  //optimization
  optimization: {
    runtimeChunk: 'single',
  },
  //performance
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}
};