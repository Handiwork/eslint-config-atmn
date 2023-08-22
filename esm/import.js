import * as plugin from "eslint-plugin-import";
export default {
  plugins: {
    import: plugin,
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "import/extensions": ["off", { ts: "never" }],
  },
};
