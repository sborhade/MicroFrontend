const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfproducts: "http://localhost:4203/remoteEntry.js", //4203
    mfshopping: "http://localhost:4202/remoteEntry.js", //4202
    mfpayment: "http://localhost:4201/remoteEntry.js", //4201
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
