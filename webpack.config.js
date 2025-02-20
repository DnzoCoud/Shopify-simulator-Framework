const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
                silenceDeprecations: ["legacy-js-api"],
              },
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "assets/[name][ext]",
      //   },
      // },
    ],
  },
  // plugins: [
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       {
  //         from: "assets",
  //         to: "assets",
  //         globOptions: {
  //           ignore: ["**/*.md"],
  //         },
  //         noErrorOnMissing: true,
  //       },
  //       {
  //         from: "config/settings_data.json",
  //         to: "config/settings_data.json",
  //         noErrorOnMissing: true,
  //       },
  //     ],
  //   }),
  // ],
};
