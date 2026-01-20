import { storeToRefs } from "pinia";
import { useCitiesStore } from "~/stores/cities";

/**
 * Get global settings from store if process.client
 * otherwise send request
 */
export default function getCities() {
  const { cities: citiesStore } = storeToRefs(useCitiesStore());

  // Данные городов уже загружены в серверном плагине 01.cities.server.ts
  // Просто возвращаем их из store
  return citiesStore;
}
