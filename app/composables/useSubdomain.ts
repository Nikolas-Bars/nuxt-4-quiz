export const useSubdomain = () => {
  // Глобальное состояние поддомена, заполняется в middleware/globalAuth.global.ts
    return useState<string>("subdomain", () => "moscow");
};
