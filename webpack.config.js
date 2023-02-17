const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    // 结合自定义public里面的html文件
    // 原因: 因为HtmlWebpackPlugin默认生成的模板文件里面没有vue入口容器,所以需要手动添加容器后结合
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "entry.html",
    }),
    new VueLoaderPlugin(),
  ],
};
