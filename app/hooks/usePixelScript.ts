const globalInjectedScripts = ref<Set<string>>(new Set());
const globalActiveMetrics = ref<Set<string>>(new Set());
const globalScriptElement = ref<HTMLScriptElement | null>(null);
const globalNoscriptElement = ref<HTMLElement | null>(null);

export const usePixelScript = () => {
  const injectedScripts = globalInjectedScripts;
  const activeMetrics = globalActiveMetrics;
  const scriptElement = globalScriptElement;
  const noscriptElement = globalNoscriptElement;

  // Функция для определения типа метрики по содержимому скрипта
  const detectMetricType = (script: string): string | null => {
    if (!script) return null;

    const lowerScript = script.toLowerCase();

    // Yandex Metrika
    if (
      lowerScript.includes("yandex") ||
      lowerScript.includes("ym(") ||
      lowerScript.includes("metrika")
    ) {
      return "yandex";
    }

    // VK Pixel (включая Top.Mail.Ru counter)
    if (
      lowerScript.includes("vkpixel") ||
      lowerScript.includes("vk_pixel") ||
      lowerScript.includes("vk.com") ||
      lowerScript.includes("_tmr") ||
      lowerScript.includes("top-fwz1.mail.ru") ||
      lowerScript.includes("mail.ru") ||
      lowerScript.includes("top.mail.ru")
    ) {
      return "vk";
    }

    // Google Analytics
    if (
      lowerScript.includes("google") ||
      lowerScript.includes("ga(") ||
      lowerScript.includes("gtag") ||
      lowerScript.includes("analytics")
    ) {
      return "google";
    }

    // Facebook Pixel
    if (
      lowerScript.includes("facebook") ||
      lowerScript.includes("fbq(") ||
      lowerScript.includes("pixel")
    ) {
      return "facebook";
    }
    return "unknown";
  };

  // Функция для внедрения нового pixel скрипта
  const injectPixelScript = (pixelScript: string) => {
    if (!pixelScript || pixelScript.trim() === "") {
      return;
    }

    // Проверяем, что мы находимся в браузере
    if (!import.meta.client || typeof document === "undefined") {
      return;
    }
    // Создаем временный div для парсинга HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = pixelScript;

    // Обрабатываем script теги
    const scriptTags = tempDiv.querySelectorAll("script");
    if (scriptTags.length > 0) {
      let jsCode = "";
      scriptTags.forEach((script) => {
        const scriptContent = script.textContent || script.innerText || "";
        if (scriptContent.trim()) {
          jsCode += scriptContent + "\n";
        }
      });

      if (jsCode.trim()) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.textContent = jsCode.trim();
        script.async = true;

        document.head.appendChild(script);
        scriptElement.value = script;
      }
    }

    // Обрабатываем noscript теги
    const noscriptTags = tempDiv.querySelectorAll("noscript");
    if (noscriptTags.length > 0) {
      noscriptTags.forEach((noscript) => {
        const noscriptEl = document.createElement("noscript");
        noscriptEl.innerHTML = noscript.innerHTML;

        if (document.body) {
          document.body.appendChild(noscriptEl);
        } else {
          document.head.appendChild(noscriptEl);
        }
        noscriptElement.value = noscriptEl;
      });
    }

    if (scriptTags.length === 0 && noscriptTags.length === 0) {
      if (!pixelScript.includes("<") && !pixelScript.includes(">")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.textContent = pixelScript;
        script.async = true;

        document.head.appendChild(script);
        scriptElement.value = script;
      } else {
        console.warn(
          "No valid script or noscript content found in pixel script"
        );
      }
    }
  };

  // Функция для обновления pixel скрипта
  const updatePixelScript = (scripts: string[]) => {
    scripts.forEach((script) => {
      if (script && script.trim() && !injectedScripts.value.has(script)) {
        injectedScripts.value.add(script);

        // Определяем тип метрики и добавляем в активные
        const metricType = detectMetricType(script);
        if (metricType) {
          activeMetrics.value.add(metricType);
        }

        // Выполняем инъекцию только на клиенте
        if (import.meta.client) {
          injectPixelScript(script);
        }
      }
    });
  };

  return {
    injectedScripts,
    activeMetrics,
    updatePixelScript,
    injectPixelScript,
  };
};
