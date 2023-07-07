const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'mfproducts',
  exposes: {
    // './Module': './projects/mf-products/src/app/home/home.module.ts',
    './Module': './projects/mf-products/src/app/home/home.module.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
