import { defineStore } from "pinia";
import getCities from "~/composables/getCities";
import { useLocationStore } from "~/stores/location";

export const useSubdomainStore = defineStore("subdomain", {
  state: () => ({
    mainDomain: "",
    subdomainsProd: [
      // Разрешенные домены
      { subdomain: "vrn" },
      { subdomain: "cheb" },
      { subdomain: "moscow" },
      { subdomain: "spb" },
    ],
    subdomainsDev: [
      { subdomain: "moscow" },
      { subdomain: "warsawa" },
      { subdomain: "abakan" },
      { subdomain: "vrn" },
      { subdomain: "cheb" },
      { subdomain: "spb" },
    ],
    subdomainsQpdv: [
      { subdomain: "moscow" },
      { subdomain: "warsawa" },
      { subdomain: "abakan" },
      { subdomain: "vrn" },
    ],
    // (ruCountryCodes ОБНОВЛЯЙ ЕЩЕ И В useBaseUrl.ts)
    ruCountryCodes: ["ru"],
  }),
  actions: {
    getDomainZone(subdomain: string) {
      const cities = getCities();
      if (cities.value?.length && subdomain) {
        // ищем countryCode для выбранного subdomain
        const countryCode = cities.value
          .find((el) => el.slug?.toLowerCase() === subdomain.toLowerCase())
          ?.country.code?.toLowerCase();
        if (countryCode && this.ruCountryCodes.includes(countryCode)) {
          return "ru";
        } else {
          return "com";
        }
      } else {
        return "com";
      }
    },
    setMainDomain(domain: string) {
      this.mainDomain = domain;
    },
    findByCitySlug(slug: string) {
      let subdomain = null;
      const domainZone = slug
        ? this.getDomainZone(slug)
        : this.getDomainZone("moscow");
      if (import.meta.env.PROD && this.mainDomain !== "qpdv.ru") {
        subdomain = this.subdomainsProd.find((item) => item.subdomain === slug);
      } else if (this.mainDomain === "qpdv.ru") {
        subdomain = this.subdomainsQpdv.find((item) => item.subdomain === slug);
      } else {
        subdomain = this.subdomainsDev.find((item) => item.subdomain === slug);
      }
      let path;
      if (this.mainDomain === "localhost:8005") {
        path = "http://localhost:8005";
      } else if (this.mainDomain === "qz-site-frontend.localhost") {
        path = `http://${slug}.qz-site-frontend.localhost`;
        return true;
      } else {
        path = `https://${slug}.quizplease.${domainZone}`;
        console.log("findByCitySlug PATH", path);
      }
      if (!subdomain && this.mainDomain !== "qpdv.ru") {
        navigateTo(path, { external: true });
        return false;
      }
      return true;
    },
    checkSubdomain(subdomain: string): number | undefined {
      const cities = getCities();
      const location = useLocationStore();
      // Ищем поддомен в массиве
      let found = null;
      if (
        import.meta.env.PROD &&
        this.mainDomain !== "qpdv.ru" &&
        this.mainDomain !== "localhost:3000"
      ) {
        found = this.subdomainsProd.find(
          (item) => item.subdomain === subdomain
        );
      } else if (this.mainDomain === "qpdv.ru") {
        found = this.subdomainsQpdv.find(
          (item) => item.subdomain === subdomain
        );
      } else {
        found = this.subdomainsDev.find((item) => item.subdomain === subdomain);
      }
      const domainZone = subdomain
        ? this.getDomainZone(subdomain)
        : this.getDomainZone("moscow");
      if (!found && this.mainDomain !== "qpdv.ru") {
        // Если поддомен не найден, выполняем редирект
        if (process.client) {
          window.location.href = `https://${subdomain}.quizplease.${domainZone}/`;
        } else {
          // На сервере используем Nuxt-редирект
          return navigateTo(`https://${subdomain}.quizplease.${domainZone}/`, {
            external: true,
          });
        }
        return undefined; // Для TypeScript, хотя код после редиректа не выполнится
      }
      const cityData = cities.value?.find((el) => el?.slug === subdomain);
      location.setCookieValue(
        `${cityData.id}`,
        cityData.title,
        cityData.map,
        cityData.country.currency.symbol,
        `${cityData.country.id}`,
        cityData.country.title,
        cityData.slug
      );
      // Если поддомен найден, возвращаем ID города
      return cityData.id;
    },
    async replaceSubdomain(newSubdomain: string): Promise<void> {
      const cities = getCities();
      const location = useLocationStore();
      const domainZone = newSubdomain
        ? this.getDomainZone(newSubdomain)
        : this.getDomainZone("moscow");
      // Проверяем, существует ли новый поддомен
      let found = null;
      if (import.meta.env.PROD && this.mainDomain !== "qpdv.ru") {
        found = this.subdomainsProd.find(
          (item) => item.subdomain === newSubdomain
        );
      } else if (this.mainDomain === "qpdv.ru") {
        found = this.subdomainsQpdv.find(
          (item) => item.subdomain === newSubdomain
        );
      } else {
        found = this.subdomainsDev.find(
          (item) => item.subdomain === newSubdomain
        );
      }
      if (!found && this.mainDomain !== "qpdv.ru") {
        // Если поддомен не существует, редиректим на основной домен
        const path =
          this.mainDomain === "localhost:3000"
            ? "http://localhost:3000"
            : `https://${newSubdomain}.quizplease.${domainZone}`;
        if (process.client) {
          window.location.href = path;
        } else {
          await navigateTo(path, { external: true });
        }
        return;
      }
      // Получаем данные города для нового поддомена
      const cityData = cities.value?.find((el) => el.slug === newSubdomain);
      if (cityData) {
        // Обновляем куки
        location.setCookieValue(
          `${cityData.id}`,
          cityData.title,
          cityData.map,
          cityData.country.currency.symbol,
          `${cityData.country.id}`,
          cityData.country.title,
          cityData.slug
        );
        // Если на клиенте, выполняем редирект с новым поддоменом
        // if (process.client && import.meta.env.PROD) {
        //   const newUrl = `https://${newSubdomain}.${this.mainDomain}`;
        //   window.location.href = newUrl;
        // }

        // Формируем полный домен с правильной доменной зоной
        const mainDomainWithoutZone = this.mainDomain.replace(
          /\.(ru|com)$/,
          ""
        );
        const domainWithZone = `${mainDomainWithoutZone}.${domainZone}`;

        if (
          (process.client && import.meta.env.PROD) ||
          this.mainDomain === "qz-site-frontend.localhost"
        ) {
          const currentUrl = new URL(window.location.href);
          const prot = import.meta.env.PROD ? "https" : "http";
          const newUrl =
            this.mainDomain === "qz-site-frontend.localhost"
              ? `${prot}://${newSubdomain}.${this.mainDomain}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`
              : `${prot}://${newSubdomain}.${domainWithZone}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;
          window.location.replace(newUrl);
        }
      }
    },
  },
});
