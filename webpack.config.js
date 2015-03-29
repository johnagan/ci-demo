var webpack = require('webpack');

module.exports = {

  context: __dirname,
  entry: "./src",

  output: {
    filename: "demo.js",
    path: __dirname + "/dist"
  },

  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: "coffee"
      }, {
        test: /\.css$/,
        loaders: ["style", "css"]
      }, {
        test: /.(ico)$/,
        loader: "file?name=[name].[ext]"
      }, {
        test: /fonts.+\.(woff|woff2|eot|ttf|svg)$/,
        loader: "file?name=fonts/[name].[ext]"
      }, {
        test: /images.+\.(png|jpg|gif|svg)$/,
        loader: "file?name=images/[name].[ext]"
      }
    ]
  },

  resolve: {
    extensions: ["", ".coffee", ".js", ".css"]
  },

  devServer: {
    stats: { colors: true }
  }

};
