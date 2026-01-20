// server/api/city-settings/[id].ts
import { useCitiesBaseURL } from "~/composables/useCitiesBaseURL";

const handler: any = defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const baseURL = useCitiesBaseURL(event);
  const data = await $fetch(`${baseURL}/api/city-settings/public/${id}`);
  return { data: data.data };
});

export default handler;
