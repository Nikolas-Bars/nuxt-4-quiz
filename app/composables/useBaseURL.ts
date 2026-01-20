// Composable для получения правильного baseURL в зависимости от домена
import type { H3Event } from "h3";
import getCities from "~/composables/getCities";

export const useBaseURL = (event?: H3Event): string => {
  const config = useRuntimeConfig();
  const isProduction = import.meta.env.PROD;

  // добавляй сюда страны которые должны стучаться на ru (ОБНОВЛЯЙ ЕЩЕ И В subdomain.ts)
  const ruCountryCodes = ["ru"];

  const cities = getCities();

  // Получаем хост
  const host = import.meta.server
    ? event?.node?.req?.headers?.host || useRequestHeaders(["host"]).host || ""
    : import.meta.client
    ? window.location.host
    : "";

  // Разбиваем хост на части
  const parts = host?.split(".") || [];
  const subdomain = parts.length > 2 ? parts[0] : "moscow"; // Например, "moscow"

  // ищем countryCode у текущего города
  const countryCode = cities.value
    .find((el) => el.slug?.toLowerCase() === subdomain.toLowerCase())
    ?.country.code?.toLowerCase();

  let baseURL = (config.public.baseURL as string) || "";
  // Если baseURL не задан, возвращаем пустую строку
  if (!baseURL) return "";

  // Если нет хоста, возвращаем базовый URL как есть
  if (!host) return baseURL;

  // Убеждаемся, что есть протокол
  if (!baseURL.startsWith("http://") && !baseURL.startsWith("https://")) {
    baseURL = `https://${baseURL}`;
  }
  if (isProduction) {
    // Переключаем API в зависимости от кода страны
    // если countryCode есть и он в списке ruCountryCodes
    if (countryCode && ruCountryCodes.includes(countryCode)) {
      if (baseURL !== "https://api.dev.quizplease.ru/") {
        baseURL = baseURL.replace(
          /(api\.)?quizplease\.(ru|com)/,
          "api.quizplease.ru"
        );
      } else {
        baseURL = baseURL.replace(
          /(api\.dev\.)?quizplease\.(ru|com)/,
          "api.dev.quizplease.ru"
        );
      }

      // } else if (hostname.endsWith(".com")) {
    } else {
      if (baseURL !== "https://api.dev.quizplease.ru/") {
        // прод
        baseURL = baseURL.replace(
          /(api\.)?quizplease\.(ru|com)/,
          "api.quizplease.com"
        ); // заменить на .com
      } else {
        // staging
        baseURL = baseURL.replace(
          /(api\.dev\.)?quizplease\.(ru|com)/,
          "api.dev.quizplease.com"
        );
      }
      // qpdv остается без изменений
    }
  }

  // Убеждаемся, что URL заканчивается на /
  if (!baseURL.endsWith("/")) {
    baseURL = `${baseURL}/`;
  }

  return baseURL;
};
