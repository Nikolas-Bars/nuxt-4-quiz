// server/api/get-all-city-settings.ts
import { useCitiesBaseURL } from "~/composables/useCitiesBaseURL";

const handler: any = defineEventHandler(async (event) => {
  const baseURL = useCitiesBaseURL(event);
  const data: { data: any } = await $fetch(
    `${baseURL}/api/city-settings/public/all-settings`
  );
  return { data: data.data };
});

export default handler;
