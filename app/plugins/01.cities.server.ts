import { useCitiesStore } from "~/stores/cities";
import { useGlobalSettingsStore } from "~/stores/global-settings";

export default defineNuxtPlugin(async () => {
  const citiesStore = useCitiesStore();
  const globalSettingsStore = useGlobalSettingsStore();

  try {
    const citiesResponse = await citiesStore.getCities();
    const citiesArray = citiesResponse?.data?.data;
    if (!Array.isArray(citiesArray)) {
      return;
    }

    citiesStore.setCities(citiesArray);

    const moscowCity = citiesArray.find((city: any) => city.slug === "moscow");
    if (!moscowCity?.id) {
      return;
    }

    try {
      const citySettingsMoscow =
        await globalSettingsStore.fetchCitySettingsById(moscowCity.id);
      if (citySettingsMoscow?.data) {
        citiesStore.setMoscowSettings(citySettingsMoscow.data);
      }
    } catch (error) {
      console.error("Ошибка при загрузке настроек Москвы:", error);
    }
  } catch (error) {
    console.error("Ошибка при загрузке городов:", error);
  }
});
