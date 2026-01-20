import { Icon } from "#components";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtIcon", Icon);
});
