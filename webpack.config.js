var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  context: __dirname,
  entry: "./src",

  output: {
    filename: "demo.js",
    path: __dirname + "/dist"
  },

  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade"},
      { test: /\.json$/, loader: "json"},
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.css$/, loaders: ["style", "css"]},
      { test: /.ico$/, loader: "file?name=[name].[ext]"},
      { test: /images.+\.(png|jpg|gif|svg)$/, loader: "file?name=images/[name].[ext]"},
      { test: /fonts.+\.(woff|woff2|eot|ttf|svg)$/, loader: "file?name=fonts/[name].[ext]"}
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    title: "GitHub Demo"
  })],

  resolve: {
    extensions: ["", ".coffee", ".js", ".css", ".jade", ".json"],
    modulesDirectories: ["node_modules", "src"]

  },

  devServer: {
    stats: { colors: true }
  }

};
