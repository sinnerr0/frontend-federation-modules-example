const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");
const deps = require("./package.json").dependencies;

const federationConfig = {
  name: "nested1ts",
  filename: "remoteEntry.js",
  exposes: {
    "./Content": "./src/Content",
  },
  remotes: {
    nested2ts: "nested2ts@http://localhost:3002/remoteEntry.js",
  },
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
    port: 3001,
  },
  output: {
    clean: true,
    publicPath: "http://localhost:3001/",
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
