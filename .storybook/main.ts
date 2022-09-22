import { resolve } from "path";

import { loadConfigFromFile, mergeConfig } from "vite";

import type { ConfigEnv } from "vite";

export default {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  // ref. https://github.com/eirslett/storybook-builder-vite/issues/85#issuecomment-900831050
  async viteFinal(config: ConfigEnv) {
    const userConfig = await loadConfigFromFile(config, resolve(__dirname, "../vite.config.ts"));

    return mergeConfig(config, {
      ...userConfig?.config,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
};
