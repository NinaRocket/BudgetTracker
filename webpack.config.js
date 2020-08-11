const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    index: "./public/index.js",
   
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [ new WebpackPwaManifest({
    filename: "manifest.json",
    inject: false,
    fingerprints: false,
    name: "Budget Tracker",
    short_name: "Budget Tracker",
    orientation: "portrait",
    display: "standalone",
    start_url: "/",
    description: "An application for tracking budget",
    background_color: "#01579b",
    theme_color: "#ffffff",

    icons: [
      {
        src: path.resolve(
          __dirname,
          "./public/icons/icon-192x192.png"
        ),
        size: [192, 512]
      }
    ]
  })]
};

module.exports = config;
