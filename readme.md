# eslint-config-atmn

Atmn eslint configuration.

All base configurations and plugins are used as **dependencies**.

**Warning:** [Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new#using-predefined-configurations) supported only.

**Note:** if you are using [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension, turn flat config option on, please.

- v1.2.0: cjs supported.

## Installation

Install eslint-config-atmn:

```sh
npm install -D eslint-config-atmn
```

Then, in your `eslint.config.js`:

```js
import atmn from "eslint-config-atmn";

export default [
  ...atmn, // as base config
  // your own config
]
```

### Peer dependencies

```json
{
  "eslint": ">=8.21",
  "jest": ">=29",
  "prettier": ">=2"
}
```

## Features

### Typescript

[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) in use.

### Jest

[eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) in use.

### React

[eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) in use.

### Prettier

[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) in use. Reading `.prettierrc` by default.

## License

[MIT](./LICENSE).
