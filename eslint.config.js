import ts from "./@typescript-eslint.js";
import base from "./base.js";
import errors from "./errors.js";
import jsxA11y from "./jsx-a11y.js";
import prettier from "./prettier.js";
import react from "./react.js";
import jest from "./jest.js";
import _import from "./import.js";

export default [
  base,
  ts,
  jsxA11y,
  errors,
  react,
  prettier,
  jest,
  _import,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts"],
        },
      },
    },
    rules: {
      "no-param-reassign": ["error", { props: false }],
      "class-methods-use-this": "off",
      "prefer-destructuring": "off",
      "no-console": "off",
      "no-restricted-syntax": ["off", { selector: "iterators/generators" }],
      "no-await-in-loop": "off",
    },
  },
];
