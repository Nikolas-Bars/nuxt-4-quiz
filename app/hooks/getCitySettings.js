import { storeToRefs } from "pinia";
import { useGlobalSettingsStore } from "~/stores/global-settings";

/**
 * Get global settings from store if process.client
 * otherwise send request
 */
export default async function getCitySettings() {
  const { fetchCitySettingsAll, setCitySettings } = useGlobalSettingsStore();

  const { citySettings } = storeToRefs(useGlobalSettingsStore());
  if (!citySettings.value?.length) {
    const response = await fetchCitySettingsAll();
    setCitySettings(response.data);
    return citySettings.value;
  }

  return citySettings.value;
}
