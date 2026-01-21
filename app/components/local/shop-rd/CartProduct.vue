<template>
  <div class="product">
    <div class="product__info">
      <img
        class="product__image"
        :src="item.product.images[0].image"
        :alt="item.product.title"
        @click="openModal"
      />

      <div class="product__data">
        <div class="product__info-description" @click="openModal">
          <div v-if="location.country.currency" class="product__info-price">
            {{ item.price * item.count }} {{ location.country.currency }}
          </div>

          <div class="product__info-title">
            {{ item.product.title }}
          </div>

          <div class="product__info-size">
            Размер: {{ item.size ? item.size : "Универсальный" }}
          </div>
        </div>

        <div class="product__actions">
          <Counter
            :model-value="item.count"
            :min-value="1"
            @update:model-value="changeCount"
          />

          <Button
            variant="unfilled"
            height="36px"
            bg-brightness="light"
            color="black-white"
            @click="removeItem"
          >
            <template #icon>
              <img
                class="shop-menu-image shop-menu-image--cert"
                src="@/assets/icons/trash-bin.svg"
              />
            </template>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal, useVfm } from "vue-final-modal";
import { defineAsyncComponent } from "vue";
import { useLocationStore } from "~/stores/location";
import Counter from "~/components/global/common-rd/Counter.vue";
import Button from "~/components/global/common-rd/Button.vue";
import { useCart } from "~/composables/cart-rd";
import type { CartItem } from "~/composables/cart-rd";

const props = defineProps<{
  item: CartItem;
}>();

const { updateCount, removeFromCart } = useCart();
const location = useLocationStore();
const vfm = useVfm();

const ProductModal = defineAsyncComponent(
  () => import("~/components/global/modals/rd/shop-rd/Product.vue")
);

// Обновляем количество
const changeCount = (value: number) => {
  updateCount(props.item.id, value, props.item.size);
};

// Удаляем товар
const removeItem = () => {
  removeFromCart(props.item.id, props.item.size);
};

// Открываем модалку товара
const openModal = () => {
  vfm.close("cartModal");

  const { open } = useModal({
    component: ProductModal,
    attrs: {
      productObject: {
        ...props.item.product,
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
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  &__info {
    display: flex;
    align-items: center;
    gap: 16px;

    width: 100%;

    &-description {
      display: flex;
      flex-direction: column;
      gap: 8px;

      cursor: pointer;
    }

    &-price {
      font-size: 18px;
      font-weight: 700;

      @include mq.mq($until: smallTablet) {
        font-size: 16px;
      }
    }

    &-title {
      font-size: 18px;
      font-weight: 500;

      @include mq.mq($until: smallTablet) {
        font-size: 14px;
      }
    }

    &-size {
      font-size: 12px;
      font-weight: 600;
    }
  }

  &__data {
    display: flex;
    gap: 24px;

    width: 100%;

    @include mq.mq($until: smallTablet) {
      flex-direction: column;
      gap: 18px;
    }
  }

  &__image {
    cursor: pointer;
    min-height: 112px;
    max-height: 112px;
    aspect-ratio: 4/5;
    border: 1px solid #f5f4f5;
    border-radius: 8px;

    background-image: url("@/assets/img/shop/product-card-example.png");
    background-size: contain;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-left: auto;

    @include mq.mq($until: smallTablet) {
      margin-left: 0;
      justify-content: space-between;
    }
  }
}
</style>
