import type { StorybookConfig } from '@storybook-vue/nuxt';
import { resolve } from 'path';

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
    // Добавляем алиасы Nuxt
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': resolve(__dirname, '../app'),
      '@': resolve(__dirname, '../app'),
    };

    // Настройка HMR порта
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