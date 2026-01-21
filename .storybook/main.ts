import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook-vue/nuxt",
  viteFinal: async (config) => {
    config.server = config.server || {};
    config.server.hmr = {
      protocol: 'ws',
      host: 'localhost',
      port: 24685,
    };
    return config;
  },
};
export default config;