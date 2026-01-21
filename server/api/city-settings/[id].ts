// server/api/city-settings/[id].ts
import { useCitiesBaseURL } from "~/composables/useCitiesBaseURL";

const handler: any = defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const baseURL = useCitiesBaseURL(event);
  if (!baseURL) {
    console.error("Base URL is missing in city-settings/[id]");
    return { data: null };
  }
  const data: any = await $fetch(`${baseURL}/api/city-settings/public/${id}`);
  return { data: data?.data };
});

export default handler;
