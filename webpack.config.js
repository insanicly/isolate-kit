const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/lib/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    library: "isolate-kit",
    libraryTarget: "umd",
    clean: true,
    globalObject: "this",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  module: {
    rules: [
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".ts", ".js", ".json", ".node"],
  },
};
