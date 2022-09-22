// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    // prettier-ignore
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  customSyntax: "postcss-scss",
  plugins: ["stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*(__)*([a-z][a-z0-9]*)(-[a-z0-9]+)*(--)*([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        message: "Expected class name to be BEM",
      },
    ],
  },
};
