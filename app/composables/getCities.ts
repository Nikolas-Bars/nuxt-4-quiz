import { storeToRefs } from "pinia";
import { useCitiesStore } from "~/stores/cities";

/**
 * Return cities from store (prefetched by server plugin).
 */
export default function getCities() {
  const { cities } = storeToRefs(useCitiesStore());
  return cities;
}
