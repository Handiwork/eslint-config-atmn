module.exports = {
  plugins: [
    ["replace-import-extension", { extMapping: { ".js": ".cjs" } }],
    ["@babel/plugin-transform-modules-commonjs"],
  ],
};
