// server/api/get-all-city-settings.ts
import { useCitiesBaseURL } from "~/composables/useCitiesBaseURL";

const handler: any = defineEventHandler(async (event) => {
  const baseURL = useCitiesBaseURL(event);
  if (!baseURL) {
    console.error("Base URL is missing in get-all-city-settings");
    return { data: [] };
  }
  const data: { data: any } = await $fetch(
    `${baseURL}/api/city-settings/public/all-settings`
  );
  return { data: data?.data };
});

export default handler;
