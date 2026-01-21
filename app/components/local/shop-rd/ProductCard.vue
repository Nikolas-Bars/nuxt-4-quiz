<template>
  <div class="product" @click="openModal">
    <div class="product__image">
      <img
        v-if="productObject.images?.length > 0"
        :key="productObject.title"
        :src="productObject.images[0].image"
      />
    </div>
    <div class="product__info">
      <div class="product__info-title">{{ productObject.title }}</div>
      <div
        v-if="changePrice?.price && location.country.currency"
        class="product__info-price"
      >
        {{ changePrice?.price }} {{ location.country.currency }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import type { Product } from "./ProductsSection.vue";
import { useLocationStore } from "~/stores/location";

const ProductModal = defineAsyncComponent(
  () => import("~/components/global/modals/rd/shop-rd/Product.vue")
);

const props = defineProps<{
  productObject: Product;
}>();

const location = useLocationStore();

const changePrice = computed(() => {
  return props.productObject.prices.find(
    (item) => item.country_id === +location.country.id
  );
});

const openModal = async () => {
  const { open } = useModal({
    component: ProductModal,
    attrs: {
      productObject: {
        ...props.productObject,
      },
    },
  });
  open();
};
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.product {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  cursor: pointer;

  &__image {
    // width: 302px;
    // height: 380px;
    width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: 24px;
    background-color: whitesmoke;

    background-image: url("@/assets/img/shop/product-card-example.png");
    background-size: contain;

    @include mq.mq($until: smallTablet) {
      width: 100%;
      // height: 200px;
    }
  }

  &__info {
    font-size: 18px;

    &-title {
      font-weight: 700;

      @include mq.mq($until: smallTablet) {
        font-size: 14px;
      }
    }
    &-price {
      font-weight: 500;

      @include mq.mq($until: smallTablet) {
        font-size: 16px;
      }
    }
  }
}
</style>
