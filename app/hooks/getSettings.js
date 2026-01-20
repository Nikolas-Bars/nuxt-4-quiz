import { storeToRefs } from "pinia";
import { useGlobalSettingsStore } from "~/stores/global-settings";

/**
 * Get global settings from store if process.client
 * otherwise send request
 */

export default async function getGlobalSettings() {
  const { settings: storedSettings } = storeToRefs(useGlobalSettingsStore());
  const { settingsRequest, setSettings } = useGlobalSettingsStore();

  const settings = await settingsRequest();
  setSettings(settings?.data);

  return storedSettings;
}
