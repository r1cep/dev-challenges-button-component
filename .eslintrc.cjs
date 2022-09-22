// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    // prettier-ignore
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:storybook/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: { "react/prop-types": "off" },
    },
    {
      files: [".storybook/main.ts", "**/*.stories.tsx", "vite.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      /**
       * storybookjs/testing-libraryの既知のバグ
       * eslint(storybook/await-interactions)でuserEventにはawaitを強制するがStorybookのuserEventのメソッドがPromiseを返していない
       * storybook/await-interactionsを有効化すると、副作用でtypescript-eslint/await-thenableのルール違反になるためstorybookのみawait-thenableをoffにする
       *
       * ref. https://github.com/storybookjs/storybook/discussions/17664
       */
      files: ["**/*.stories.tsx"],
      rules: {
        "@typescript-eslint/await-thenable": "off",
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  plugins: ["unused-imports"],
  rules: {
    "no-restricted-imports": ["error", { patterns: ["../"] }],
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        groups: [
          // prettier-ignore
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error"],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
