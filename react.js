import react from "eslint-plugin-react";

export default {
  plugins: {
    react,
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/display-name": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
  },
};
