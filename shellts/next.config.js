const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const deps = require("../package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
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
      const federationConfig = {
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          nested1ts: "nested1ts@http://localhost:3001/remoteEntry.js",
          apollots: "apollots@http://localhost:3003/remoteEntry.js",
          routets: "routets@http://localhost:3004/remoteEntry.js",
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
          },
          "react-dom": {
            eager: true,
            singleton: true,
          },
          "react/jsx-runtime": {
            eager: true,
            singleton: true,
          },
          "react-router-dom": {
            eager: true,
            singleton: true,
          },
        },
      };
      config.plugins.push(new NextFederationPlugin(federationConfig));
      config.plugins.push(new FederatedTypesPlugin({ federationConfig }));
    }

    return config;
  },
};

module.exports = nextConfig;
