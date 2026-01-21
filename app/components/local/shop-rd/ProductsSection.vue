<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import ContentContainer from "~/components/global/common-rd/content-container/ContentContainer.vue";
import Tabs from "~/components/global/common-rd/Tabs.vue";
import { useLocationStore } from "~/stores/location";

// TODO перенести типизацию
export interface CustomOption {
  name: string;
  value: string;
}

export interface Price {
  id: number;
  good_id: number;
  price: number;
  country_id: number;
  cities: any[];
}

export interface Image {
  id: number;
  image: string;
}

export interface Available {
  id: number;
  good_id: number;
  city_id: number;
  available: boolean;
}

export interface Pagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
}

export interface Country {
  id: number;
  title: string;
  code: string;
  language: string;
  default_city_id: number;
}

export interface Role {
  name: string;
  slug: string;
}

export interface Manager {
  id: number;
  name: string;
  fullname: string;
  email: string;
  city_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  role: Role;
}

export interface City {
  id: number;
  title: string;
  title_en: string;
  slug: string;
  map: string;
  timezone_id: number;
  reservation: boolean;
  show_on_index: boolean;
  city_is_connected: boolean;
  video_price_classic: number;
  video_price_movie_music: number;
  video_price_online: number;
  video_price_english: number;
  video_price_teens: number;
  video_price_corporate: number;
  royalty_percent: number;
  royalty_vacation_start: string;
  royalty_vacation_stop: string;
  country_id: number;
  key: string;
  country: Country;
  manager_id: number;
  manager: Manager;
}

export interface Product {
  id: number;
  title: string;
  delivery_methods: string[] | null;
  take_button_link: string | null;
  custom_options: CustomOption[] | null;
  sizeable: boolean;
  sizes: string[] | null;
  is_available: boolean;
  almost_soldout: boolean;
  prices: Price[];
  cities: City[];
  images: Image[];
  availables: Available[];
}

export interface ProductsResponse {
  data: Product[];
  pagination: Pagination;
}

const config = useRuntimeConfig();
const { city } = useLocationStore();

const selectedBtn = ref<number>(1);
const perPage = ref<number>(12);
const page = ref<number>(1);
const shopData = ref<ProductsResponse>({
  data: [],
  pagination: {
    total: 0,
    count: 0,
    per_page: 12,
    current_page: 1,
    total_pages: 0,
  },
});

const types = [
  {
    title: "Все товары",
    icon: "clapperboard-rd",
    id: 1,
  },
  {
    title: "Сертификаты",
    icon: "ticket-sale-rd",
    id: 2,
  },
  {
    title: "Настолка",
    icon: "gift-rd",
    id: 3,
  },
  {
    title: "Мерч",
    icon: "t-shirt-rd",
    id: 4,
  },
];

const perPageHandler = () => {
  page.value += 1;
};

const getProductsData = async () => {
  try {
    // isLoading.value = true;
    const response = await $fetch<{ data: ProductsResponse }>(
      `api/goods/list`,
      {
        baseURL: config.public.baseURL,
        params: {
          page: page.value,
          city_id: city.id,
          // available_for_city - это для получения списка только тех товаров что имеются в наличии
          // available_for_city: city.id
          per_page: perPage.value,
        },
      }
    );
    if (page.value > 1) {
      shopData.value.data = [...shopData.value.data, ...response.data.data];
      shopData.value.pagination = response.data.pagination;
    } else {
      shopData.value.data = [...response.data.data];
      shopData.value.pagination = response.data.pagination;
    }
    perPageHandler();
  } catch (error) {
    console.error(error, "getProductsData");
  } finally {
    // mainLoader.value = false;
    // isLoading.value = false;
  }
};

watch(
  () => city.id,
  () => {
    page.value = 1;
    getProductsData();
  }
);

onMounted(async () => {
  page.value = 1;
  await getProductsData();
});
</script>

<template>
  <div class="products">
    <ContentContainer>
      <div class="products__header">
        <div class="products__header-title products__header-title--desktop">
          Магазин
        </div>
        <div class="products__header-title products__header-title--mobile">
          Магазин. Shop. Boutique
        </div>
        <div
          class="products__header-title products__header-description--mobile"
        >
          Прямо здесь можно затариться всякими классными вещами: сертами на
          игры, стильными шмотками, игрушками и разными полезными штуками
        </div>
        <div class="products__header-nav">
          <Tabs
            v-model="selectedBtn"
            :items="types"
            size="medium"
            color="grey-light"
            active-color="pink"
            bg-brightness="dark"
            :variant="'lined'"
          />
        </div>
      </div>
      <div class="products__content">
        <ProductCard
          v-for="product of shopData.data"
          :key="product.id"
          :product-object="product"
        />
      </div>
    </ContentContainer>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.products {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @include mq.mq($until: smallTablet) {
    max-width: 100%;
    margin-top: 24px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    &-title {
      color: white;
      font-family: Gilroy;
      font-weight: 600;
    }

    &-title--desktop {
      font-size: 40px;
      text-align: center;

      @include mq.mq($until: smallTablet) {
        display: none;
      }
    }

    &-title--mobile {
      display: none;

      font-size: 28px;

      @include mq.mq($until: smallTablet) {
        display: block;
      }
    }

    &-description--mobile {
      font-weight: 500;
      font-size: 16px;
    }

    &-nav {
      -ms-overflow-style: none;
      scrollbar-width: none;

      @include mq.mq($until: smallTablet) {
        overflow: scroll;
        margin-left: -16px;
        margin-right: -16px;
        padding-left: 16px;
        padding-right: 16px;
        width: calc(100% + 32px);
      }

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }

    @include mq.mq($until: smallTablet) {
      max-width: 100%;
      align-items: flex-start;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, minmax(160px, 1fr));
    gap: 38px 24px;
    width: 100%;
    @include mq.mq($until: smallTablet) {
      gap: 18px;
      grid-template-columns: repeat(2, 47%);
      justify-content: space-between;
    }
  }
}
</style>
