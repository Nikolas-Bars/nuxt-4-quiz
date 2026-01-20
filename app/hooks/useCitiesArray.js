import { storeToRefs } from "pinia";
import { useCitiesStore } from "~/stores/cities";

/**
 * Setup global settings in store.
 * This function used in app.vue
 * 
 * Note: Города уже загружены в серверном плагине 01.cities.server.ts
 * Эта функция сохранена для обратной совместимости, но фактически
 * только проверяет, что данные уже есть в store
 */
export default async function useCitiesArray() {
  const { getCities, setCities } = useCitiesStore();
  const { cities: citiesStore } = storeToRefs(useCitiesStore());
  
  // Если по какой-то причине данные не загрузились в плагине, загрузим здесь
  if (!citiesStore.value?.length) {
    const { data: citiesData } = await useAsyncData("cities", getCities);
    watch(
      () => citiesData.value,
      () => {
        if (citiesData.value?.data) {
          setCities(citiesData.value?.data.data);
        }
      }
    );
  }
}
