import { defineStore } from "pinia";
import { useCitiesBaseURL } from "~/composables/useCitiesBaseURL";

export const useCitiesStore = defineStore("cities", () => {
  const cities = ref<any[]>([]);
  const moscowSettings = ref<Record<string, any>>({});
    console.log(useCitiesBaseURL(), 'useCitiesBaseURL()')
  const getCities = () => {
    return $fetch("api/cities/short", {
      baseURL: useCitiesBaseURL(),
      params: {
        order: "title",
        show_on_index: true,
      },
    });
  };

  const setMoscowSettings = (settings: any) => {
    moscowSettings.value = settings;
  };

  const getCitiesForConnected = () => {
    return $fetch("api/cities/short", {
      baseURL: useCitiesBaseURL(),
      params: {
        order: "title",
        city_is_connected: true,
        show_on_index: true,
      },
    });
  };

  const setCities = (cityArray: any[]) => {
    cities.value = cityArray;
  };

  return {
    getCities,
    getCitiesForConnected,
    setCities,
    setMoscowSettings,
    cities,
    moscowSettings,
  };
});
