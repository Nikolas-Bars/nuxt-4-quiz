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

const isStorybook =
  process.env.NUXT_STORYBOOK === "true" || process.env.STORYBOOK === "true";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    server: {
      hmr: {
        port: 24685
      }
    }
  },
  css: [
    "~/assets/css/style.scss",
    "swiper/css",
    "swiper/css/effect-cards",
    "vue-final-modal/style.css",
  ],
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "nuxt-swiper",
    ...(isStorybook ? ["@nuxtjs/storybook"] : []),
  ],
  icon: {
    clientBundle: {
      sizeLimitKb: 1024
    },
    customCollections: [
      {
        prefix: "rd",
        dir: "./app/assets/icons",
        normalizeIconName: false,
      },
    ],
    aliases: iconAliases,
  },
  app: {
    head: {
      title:
        "Квиз, плиз! – интеллектуально-развлекательные битвы в барах и онлайн",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/fav16.png",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/fav180.png" },
        { rel: "preconnect", href: "https://mc.yandex.ru", crossorigin: "" },
        { rel: "dns-prefetch", href: "https://mc.yandex.ru" },
      ],
    },
  },
  nitro: {
    routeRules: {
      "/franchise-v01": {
        isr: 3600,
        cache: {
          maxAge: 3600,
          staleMaxAge: 86400,
        },
        headers: {
          "Cache-Control":
            "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
      "/api/city-settings/**": {
        cache: {
          maxAge: 30,
          staleMaxAge: 0,
        },
      },
      "/api/get-all-city-settings/**": {
        cache: {
          maxAge: 60,
          staleMaxAge: 0,
        },
      },
      "/assets/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/_nuxt/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/assets/img/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/assets/fonts/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/assets/icons/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
      "/favicon.*": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
    },
    preset: "node-server",
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    timing: process.env.NODE_ENV === "development",
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      additionalUrl: process.env.ADDIONAL_URL,
      maintenanceMode: process.env.MAINTENANCE_MODE || "false",
    },
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
});