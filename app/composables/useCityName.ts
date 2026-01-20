/**
 * Маппинг поддоменов на названия городов
 * Используется как fallback когда город еще не загружен из API/cookies
 */
export const SUBDOMAIN_CITY_MAP: Record<string, string> = {
  moscow: "Москва",
  cheb: "Чебоксары",
  vrn: "Воронеж",
  spb: "Санкт-Петербург",
};

/**
 * Composable для получения названия города по поддомену
 */
export const useCityName = () => {
  /**
   * Получить название города по поддомену
   * @param subdomain - поддомен (например, 'moscow', 'cheb', 'vrn')
   * @returns название города
   */
  const getCityNameBySubdomain = (subdomain: string): string => {
    return SUBDOMAIN_CITY_MAP[subdomain] || SUBDOMAIN_CITY_MAP.moscow || "";
  };

  return {
    getCityNameBySubdomain,
    SUBDOMAIN_CITY_MAP,
  };
};
