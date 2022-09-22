module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      // prettier-ignore
      0,
      "never",
      [],
    ],
  },
};
