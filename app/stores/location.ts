import { defineStore } from "pinia";
import { useBaseURL } from "~/composables/useBaseURL";

export const useLocationStore = defineStore("location", () => {
  const cityId = useCookie("city_id", {
    maxAge: 1800,
  });
  const cityTitle = useCookie("city_name", {
    maxAge: 1800,
  });
  const countryId = useCookie("country_id", {
    maxAge: 1800,
  });
  const countryTitle = useCookie("country_title", {
    maxAge: 1800,
  });
  const cityTypeMap = useCookie("city_map", {
    maxAge: 1800,
  });
  const currencyMode = useCookie("currency", {
    maxAge: 1800,
  });
  const citySlugMap = useCookie("slug", {
    maxAge: 1800,
  });

  const locationSettings = ref(null);

  const citySlug = ref("");

  const getCurrentLocation = () => {
    return $fetch("api/my-location", {
      baseURL: useBaseURL(),
    });
  };

  const getLocationPixel = async (cityId: number) => {
    return await $fetch(`api/pixel?city=${cityId}`, {
      baseURL: useBaseURL(),
    });
  };

  const closeQuestionModal = ref(false);

  const payData = {
    1: "оплата наличными",
    3: `оплата наличными <br />или по карте`,
    5: `оплата онлайн <br />или на игре`,
    4: "оплата онлайн",
    7: "оплата через WeChat, Alipay",
  };

  const city = ref({
    id: cityId.value,
    name: cityTitle.value,
    map: cityTypeMap.value,
    slug: citySlugMap.value,
  });

  const country = ref({
    id: countryId.value,
    name: countryTitle.value,
    currency: currencyMode.value,
  });

  const setCookieValue = (
    id: string,
    title: string,
    mapType: string,
    currency: string,
    country_id: string,
    country_title: string,
    slug: string
  ) => {
    cityId.value = id;
    cityTitle.value = title;
    cityTypeMap.value = mapType;
    currencyMode.value = currency;
    countryId.value = country_id;
    countryTitle.value = country_title;
    citySlugMap.value = slug;

    city.value.id = cityId.value;
    city.value.name = cityTitle.value;
    city.value.map = cityTypeMap.value;
    country.value.currency = currencyMode.value;
    country.value.id = countryId.value;
    country.value.name = countryTitle.value;
    city.value.slug = slug;
    citySlug.value = citySlugMap.value;
  };

  const loadLocationSettings = async () => {
    if (city.value?.id) {
      const res = await $fetch(`/api/city-settings/${city.value.id}`);
      locationSettings.value = res.data;
    }
  };

  watch(
    () => city.value?.id,
    async () => {
      await loadLocationSettings();
    },
    { immediate: true }
  );

  return {
    getCurrentLocation,
    getLocationPixel,
    closeQuestionModal,
    city,
    citySlug,
    country,
    cityId,
    cityTitle,
    locationSettings,
    countryId,
    countryTitle,
    cityTypeMap,
    citySlugMap,
    currencyMode,
    payData,
    setCookieValue,
    loadLocationSettings,
  };
});
