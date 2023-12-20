const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require('../package.json').dependencies;

module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remote.js',
          remotes: {
            remote: 'remote@http://localhost:3001/remote.js',
          },
          exposes: {
            './react-router-dom': 'react-router-dom',
          },
          shared: { ...deps },
        }),
      );
    }

    return config;
  },
};
