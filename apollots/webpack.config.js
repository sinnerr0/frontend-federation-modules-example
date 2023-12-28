const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");
const deps = require("./package.json").dependencies;

const federationConfig = {
  name: "apollots",
  filename: "remoteEntry.js",
  exposes: {
    "./PokemonList": "./src/components/PokemonList",
  },
  remotes: {},
  shared: {
    ...deps,
    "@apollo/client": {
      singleton: true,
    },
  },
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
    port: 3003,
  },
  output: {
    clean: true,
    publicPath: "http://localhost:3003/",
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
