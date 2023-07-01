import a11y from "eslint-plugin-jsx-a11y"
export default {
  plugins:{
    a11y
  },
  rules:{
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
  }
}
