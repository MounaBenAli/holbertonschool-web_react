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
};