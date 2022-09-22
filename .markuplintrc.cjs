// eslint-disable-next-line no-undef
module.exports = {
  extends: ["markuplint:recommended"],
  parser: {
    ".tsx?$": "@markuplint/jsx-parser",
  },
  specs: {
    ".tsx?$": "@markuplint/react-spec",
  },
};
