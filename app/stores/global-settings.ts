import { defineStore } from "pinia";
import { useLocationStore } from "./location";

export const useGlobalSettingsStore = defineStore("global-settings", () => {
  const settings = ref({});
  const headerBannerHeight = ref(0);
  const isBannerReady = ref(false);
  const citySettings = ref([]);
  const citySettingsId = ref(0);

  const location = useLocationStore();
  const setSettings = (data: any) => {
    settings.value = { ...data };
  };
  const setAllCitiesSettings = (data: any) => {
    citySettings.value = { ...data };
  };

  const setCitySettings = (settingsArray: any) => {
    citySettings.value = settingsArray;
  };

  const settingsRequest = async () => {
    if (!location.city?.id) return;
    return $fetch(`/api/city-settings/${location.city.id}`);
  };
  const fetchCitySettingsById = (cityId: string) => {
    return $fetch(`/api/city-settings/${cityId}`);
  };
  const setCitySettingId = (cityId: number) => {
    citySettingsId.value = cityId;
  };
  const fetchCitySettingsAll = () => {
    return $fetch(`/api/city-settings/get-all-city-settings`);
  };
  return {
    settings,
    setSettings,
    settingsRequest,
    fetchCitySettingsById,
    fetchCitySettingsAll,
    setCitySettingId,
    setAllCitiesSettings,
    setCitySettings,
    citySettingsId,
    headerBannerHeight,
    citySettings,
    isBannerReady,
  };
});
