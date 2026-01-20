import { useGlobalSettingsStore } from "~/stores/global-settings";
import { useLocationStore } from "~/stores/location";

/**
 * Setup global settings in store.
 * This function used in app.vue
 */
export default async function useGlobalSettings() {
  const { city } = useLocationStore();
  const { setSettings, settingsRequest } = useGlobalSettingsStore();
  const { data: globalSettings } = await useAsyncData(
    "globalSettings",
    settingsRequest,
    {
      watch: [() => city.value?.id],
    }
  );
  watch(
    () => globalSettings.value,
    () => {
      if (globalSettings.value?.data) {
        setSettings(globalSettings.value?.data);
      }
    }
  );
}
