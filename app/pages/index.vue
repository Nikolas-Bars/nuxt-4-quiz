<template>
  <div>
    <TheHeroRD />
  </div>
</template>

<script setup>
// import { useI18n } from 'vue-i18n';
// const { t } = useI18n();
import TheHeroRD from "../components/local/main-page/TheHeroRD.vue";
import { useSubdomain } from "~/composables/useSubdomain";
import { useCityName } from "~/composables/useCityName";

const subdomain = useSubdomain();
const bgImageSeo = "/bg_image_seo.png";
const { getCityNameBySubdomain } = useCityName();
// Получаем название города: сначала пробуем из store, если нет - берем из маппинга по поддомену
const cityName = computed(() => getCityNameBySubdomain(subdomain.value));
// после релиза хост можно заменить просто на quizplease.ru или quizplease.com (еще не сказали)
const host = process.server
  ? useRequestHeaders(["host"])?.host
  : window.location.host;
const parts = host?.split(".") || [];
const mainDomain = parts.length > 2 ? parts.slice(1).join(".") : host;
definePageMeta({
  layout: "layout-rd",
});
useHead({
  title: `Играть в Квиз, плиз! в г. ${cityName.value} | Игры для компаний и корпоративов`,
  meta: [
    {
      name: "description",
      content: `Квиз, плиз! – лучшие интеллектуальные игры для корпоративов и вечеринок в г. ${cityName.value}. 🧠 Собирайте семью, друзей или коллег и регистрируйтесь на викторину!`,
    },
    {
      property: "og:title",
      content: `Играть в Квиз, плиз! в г. ${cityName.value} | Игры для компаний и корпоративов`,
    },
    {
      property: "og:description",
      content: `Квиз, плиз! – лучшие интеллектуальные игры для корпоративов и вечеринок в г. ${cityName.value}. 🧠 Собирайте семью, друзей или коллег и регистрируйтесь на викторину!`,
    },
    {
      property: "og:image",
      content: `https://${subdomain.value}.${mainDomain}${bgImageSeo}`,
    },
    {
      property: "og:url",
      content: `https://${subdomain.value}.${mainDomain}`,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://${subdomain.value}.${mainDomain}`,
    },
  ],
});
</script>
