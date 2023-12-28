const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");
const deps = require("./package.json").dependencies;

const federationConfig = {
  name: "nested2ts",
  filename: "remoteEntry.js",
  exposes: {
    "./Image": "./src/Image",
  },
  remotes: {},
  shared: { ...deps },
};

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
  },
  output: {
    clean: true,
    publicPath: "http://localhost:3002/",
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(federationConfig),
    new FederatedTypesPlugin({ federationConfig }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
