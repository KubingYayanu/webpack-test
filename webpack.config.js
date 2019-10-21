/* webpack.config.js ： Webpack 的設定檔 */

var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// 建立一個 extract text plugin 的實例
var extractPlugin = new ExtractTextPlugin({
  filename: "css/bundle.css" // scss轉css後另存的目標檔名
});

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 針對所有.css 的檔案作預處理，這邊是用 regular express 的格式
        use: [
          "style-loader", // 這個會後執行 (順序很重要)
          "css-loader" // 這個會先執行
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          //利用 extractPlugin 實例裡的 extract 來建立 Loader
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractPlugin // 把extract過的loader轉存成css檔
  ]
};
