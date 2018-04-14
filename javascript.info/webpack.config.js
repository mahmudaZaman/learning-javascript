const WriteFilePlugin = require("write-file-webpack-plugin");
module.exports = {
  entry: ["babel-polyfill", __dirname + "/src/index.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  // plugins: [
  //     new WriteFilePlugin()
  // ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
