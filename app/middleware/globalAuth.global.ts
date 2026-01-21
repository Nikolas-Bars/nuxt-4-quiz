import { useSubdomainStore } from "~/stores/subdomain";

export default defineNuxtRouteMiddleware((to) => {
  // Получаем хост из запроса (доступно только на сервере)
  const host = process.server
    ? useRequestHeaders(["host"])?.host
    : window.location.host;
  !!host && /^\d+\.\d+\.\d+\.\d+(?::\d+)?$/.test(host as string);
// Если заходим по IP (например, 192.168.1.51:8005),
  // считаем это локальной разработкой и используем дефолтный поддомен "moscow".
  const isIpHost =
    !!host && /^\d+\.\d+\.\d+\.\d+(?::\d+)?$/.test(host as string);

  // Разбиваем хост на части
  const parts = host?.split(".") || [];
  const subdomain =
    !isIpHost && parts.length > 2 ?
        parts[0] ? parts[0] : "moscow" : "moscow"; // Например, "moscow"

  // Сохраняем поддомен в useState
  const subdomainState = useState("subdomain", () => subdomain);
  subdomainState.value = subdomain; // Устанавливаем значение

  // Используем Pinia для проверки поддомена
  const subdomainStore = useSubdomainStore();
  const mainDomain = isIpHost
    ? "localhost:3000"
    : parts.length > 2
    ? parts.slice(1).join(".")
    : (host as string);

  subdomainStore.setMainDomain(mainDomain);

  if (mainDomain !== "localhost:3000") {
    subdomainStore.checkSubdomain(subdomain);
  } else if (mainDomain === "localhost:3000") {
    subdomainStore.checkSubdomain("moscow");
  }
  // console.log(`Поддомен: ${subdomain}`);
  // console.log(mainDomain);
  // console.log(`Полный хост: ${host}`);
});
