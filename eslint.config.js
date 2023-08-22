import atmn from "./esm/index.js";

export default [
  ...atmn,
  {
    ignores: ["cjs/*"],
  },
];
