const path = require("path");
module.exports = {
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js')
},
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
},
  mode: 'production',
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
  }
};