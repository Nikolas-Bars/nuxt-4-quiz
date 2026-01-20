import type { H3Event } from "h3";

export const useCitiesBaseURL = (event?: H3Event): string => {
  const config = useRuntimeConfig();

  // Получаем хост
  let host: string | undefined = "";
  if (import.meta.server) {
    host =
      event?.node?.req?.headers?.host || useRequestHeaders(["host"]).host || "";
  } else if (import.meta.client) {
    host = window.location.host;
  }

  const parts = host?.split(".") || [];
  const mainDomain =
    parts.length > 2 ? parts.slice(1).join(".") : (host as string);
  // Получаем доменную зону (TLD) - последняя часть домена
  const domainZone = parts.length > 0 ? parts[parts.length - 1] : "";
  const isProduction = import.meta.env.PROD;

  let baseURL: string | undefined;

  if (
    !isProduction ||
    mainDomain === "qpdv.ru" ||
    mainDomain === "stagequizplease.ru"
  ) {
    // В не-прод окружении используем URL из env как есть
    baseURL = config.public.baseURL as string;
  } else {
    // В продакшене выбираем API в зависимости от доменной зоны
    const zone = (domainZone || "").toLowerCase();
    baseURL =
      zone === "ru"
        ? "https://api.quizplease.ru"
        : "https://api.quizplease.com";
  }

  if (!baseURL) {
    return "";
  }

  // Убеждаемся, что есть протокол
  if (!baseURL.startsWith("http://") && !baseURL.startsWith("https://")) {
    baseURL = `https://${baseURL}`;
  }

  // Убеждаемся, что URL заканчивается на /
  if (!baseURL.endsWith("/")) {
    baseURL = `${baseURL}/`;
  }
  return baseURL;
};
