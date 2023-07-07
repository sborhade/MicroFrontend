const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfproducts: "https://products-app-remote.web.app/remoteEntry.js", //4203
    mfpayment: "https://mfpayment.web.app/remoteEntry.js", //4201
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
