import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    navigation: {
      schedule: "Расписание",
      rating: "Рейтинг",
      streams: "Стримы",
      games: "Игры",
      corporates: "Корпоративы",
      shop: "Магазин",
      franchise: "Франшиза",
      author: "Стать автором",
    },
    footer: {
      politicPersonalDataPolicy: "Политика обработки персональных данных",
      politicUserAgreement: "Пользовательское соглашение",
      "public-offer": "Публичная оферта",
      politicDetails: "Реквизиты",
    },
  },
  en: {
    navigation: {
      schedule: "Schedule",
      rating: "Rating",
      streams: "Streams",
      games: "Games",
      corporates: "Corporates",
      shop: "Shop",
      franchise: "Franchise",
      author: "Become an author",
    },
    footer: {
      politicPersonalDataPolicy: "Personal data policy",
      politicUserAgreement: "User agreement",
      "public-offer": "Public offer",
      politicDetails: "Company details",
    },
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "ru",
    fallbackLocale: "ru",
    messages,
  });

  nuxtApp.vueApp.use(i18n);
});
