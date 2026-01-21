// https://nuxt.com/docs/api/configuration/nuxt-config
import { readdirSync } from "node:fs";
import { basename, extname, resolve } from "node:path";

const iconsDir = resolve("./app/assets/icons");
const iconAliases: Record<string, string> = {};

try {
  const iconFiles = readdirSync(iconsDir);
  for (const file of iconFiles) {
    if (extname(file) !== ".svg") continue;
    const name = basename(file, ".svg");
    iconAliases[name] = `rd:${name}`;
  }
} catch {
  // If icons dir is missing during config eval, just skip aliases.
}

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["swiper/css", "~/assets/css/style.scss"],
  modules: ["@pinia/nuxt", "@nuxt/icon", "@nuxt/image", "@nuxt/eslint", "nuxt-swiper"],
  icon: {
    customCollections: [
      {
        prefix: "rd",
        dir: "./app/assets/icons",
        normalizeIconName: false,
      },
    ],
    aliases: iconAliases,
  },
});
