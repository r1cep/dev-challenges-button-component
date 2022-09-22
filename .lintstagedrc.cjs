module.exports = {
  "*.{js,jsx,ts,tsx,cjs,mjs,cts,mts}": [
    // prettier-ignore
    "eslint --fix",
    "bash -c tsc",
  ],
  "*.{css,scss}": [
    // prettier-ignore
    "stylelint --fix",
  ],
  "*.{js,jsx,ts,tsx,cjs,mjs,cts,mts,json}": [
    // prettier-ignore
    "prettier --write",
  ],
  "*.test.{js,jsx,ts,tsx,cjs,mjs,cts,mts}": [
    // prettier-ignore
    "vitest run",
  ],
  "renovate.json{,5}": [
    // prettier-ignore
    "renovate-config-validator",
  ],
};
