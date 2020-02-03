const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    watchFiles: 'index.html',
  },
  context: path.join(__dirname, 'src'),
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './assets/', to: './assets/' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
