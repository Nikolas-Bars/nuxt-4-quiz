import type { H3Event } from "h3";
import { getRequestHost } from "h3";

export const useCitiesBaseURL = (event?: H3Event): string => {
  const config = useRuntimeConfig();

  // Получаем хост
  let host: string | undefined = "";
  if (import.meta.server) {
    const currentEvent = event || useRequestEvent();
    if (currentEvent) {
      try {
        // Пробуем достать хост всеми доступными способами
        host = (getRequestHeader(currentEvent, "host") || getRequestHost(currentEvent) || "") as string;
      } catch (e) {
        host = "";
      }
    }
  } else if (import.meta.client) {
    host = window.location.host;
  }

  const parts = host?.split(".") || [];
  const mainDomain =
    parts.length > 2 ? parts.slice(1).join(".") : (host as string);
  // Получаем доменную зону (TLD) - последняя часть домена
  const domainZone = parts.length > 0 ? parts[parts.length - 1] : "";
  const isProduction = process.env.NODE_ENV === "production";

  let baseURL: string | undefined;
  console.log("DEBUG: isProduction =", isProduction, "| host =", host, "| config.public.baseURL =", config.public.baseURL);

  if (
    !host ||
    !isProduction ||
    host.includes("localhost") ||
    host.includes("127.0.0.1") ||
    mainDomain === "qpdv.ru" ||
    mainDomain === "stagequizplease.ru"
  ) {
    // В не-прод окружении используем URL из env как есть. 
    // Пробуем все возможные источники, так как при yarn build/preview конфиг может быть пуст.
    baseURL = (config.public.baseURL || process.env.BASE_URL || process.env.NUXT_PUBLIC_BASE_URL) as string;
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
