const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const deps = require("../package.json").dependencies;

module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          filename: "static/chunks/remote.js",
          remotes: {
            nested1: "nested1@http://localhost:3001/remote.js",
            apollo: "apollo@http://localhost:3003/remote.js",
          },
          shared: {
            ...deps,
            "@apollo/client": {
              eager: true,
              singleton: true,
              requiredVersion: deps["@apollo/client"],
            },
          },
        })
      );
    }

    return config;
  },
};
