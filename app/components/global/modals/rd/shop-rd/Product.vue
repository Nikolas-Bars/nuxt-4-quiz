<template>
  <VueFinalModal
    :modal-id="modalId"
    class="q-modal q-modal--product product"
    content-class="product__wrap"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :click-to-close="true"
    @click-outside="closeModal"
  >
    <BaseModal @close="closeModal">
      <div class="product">
        <div class="product__image">
          <img
            v-if="props.productObject.images?.length > 0"
            :key="props.productObject.title"
            :alt="props.productObject.title"
            :src="props.productObject.images[0].image"
          />
        </div>
        <div class="product__info">
          <div class="product__content">
            <div class="product__header">
              <div class="product__header-title">
                {{ productObject.title }}
              </div>
              <div
                v-if="countryPrice?.price && location.country.currency"
                class="product__header-price"
              >
                {{ countryPrice?.price }} {{ location.country.currency }}
              </div>
            </div>
            <div
              v-if="description"
              class="product__description"
              v-html="description"
            ></div>
            <div
              v-else-if="descriptionMoscow"
              class="product__description"
              v-html="descriptionMoscow"
            ></div>
            <div
              v-if="!description && !descriptionMoscow && productLoader"
              class="skeleton skeleton--rect"
            ></div>
            <div v-if="'attributes'" class="product__attributes">
              <div class="product__attribute">
                <div class="product__attribute-title">Состав:</div>
                <div class="product__attribute-value">Хлопок</div>
              </div>
              <div class="product__attribute">
                <div class="product__attribute-title">Пол:</div>
                <div class="product__attribute-value">Унисекс</div>
              </div>
            </div>
            <div class="product__sizes">
              <div class="product__sizes-title">
                {{ productObject.sizeable ? "Выберите размер" : "Размер" }}
              </div>
              <Tabs
                v-if="productObject.sizes"
                v-model="selectedSize"
                :items="mappedSizes"
                size="medium"
                color="grey"
                active-color="black-white"
                :variant="'lined'"
                radius="squared"
                @update:model-value="onSizeChange"
              />
              <div
                v-else-if="!productObject.sizebale"
                class="product__sizes-value"
              >
                Универсальный
              </div>
            </div>
          </div>
          <div class="product__actions">
            <Button v-if="!isAddedToCart" variant="lined" color="pink">
              Купить сейчас
            </Button>
            <Button v-if="!isAddedToCart" color="pink" @click="addToCart">
              <template #icon>
                <NuxtIcon name="shoping-bag" />
              </template>
              В корзину
            </Button>
            <Button
              v-if="isAddedToCart"
              :trailing-icon="true"
              color="pink"
              @click="openModal"
            >
              <template #icon>
                <NuxtIcon name="arrow-right-rd" />
              </template>
              В корзине
            </Button>
            <Counter
              v-if="isAddedToCart"
              v-model="counterValue"
              height="48px"
              @update:model-value="onCounterChange"
            />
            <div
              v-if="countryPrice?.price && location.country.currency"
              class="product__actions-price"
            >
              {{ countryPrice?.price }} {{ location.country.currency }}
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal, useVfm, useModal } from "vue-final-modal";
import BaseModal from "../BaseModal.vue";
import Cart from "./Cart.vue";
import Button from "~/components/global/common-rd/Button.vue";
import { useLocationStore } from "~/stores/location";
import Tabs from "~/components/global/common-rd/Tabs.vue";
import Counter from "~/components/global/common-rd/Counter.vue";
import { useCart } from "~/composables/cart-rd";

const modalId = "productModal";

const vfm = useVfm();
const location = useLocationStore();
const config = useRuntimeConfig();

const props = defineProps({
  productObject: { type: Object, default: () => ({}) },
});

const closeModal = () => {
  vfm.close(modalId);
};

const selectedSize = ref(props.productObject.sizes?.[0] || null);
const productLoader = ref<boolean>(false);
const isAddedToCart = ref<boolean>(false);
const description = ref("");
const descriptionMoscow = ref("");
const counterValue = ref<number>(1);

const mappedSizes = computed(() => {
  return (props.productObject.sizes || []).map((size: string) => ({
    id: size,
    title: size,
  }));
});

const countryPrice = computed(() => {
  return props.productObject.prices.find(
    (item) => item.country_id === +location.country.id
  );
});

const {
  addToCart: addToCartItem,
  updateCount,
  removeFromCart,
  getCount,
  loadCart,
} = useCart();

const addToCart = () => {
  addToCartItem(
    props.productObject,
    1,
    countryPrice.value.price,
    selectedSize.value
  );
  counterValue.value = 1;
  isAddedToCart.value = true;
};

const onCounterChange = (value: number) => {
  counterValue.value = value;
  if (value <= 0) {
    removeFromCart(props.productObject.id, selectedSize.value);
    isAddedToCart.value = false;
  } else {
    updateCount(props.productObject.id, value, selectedSize.value);
    isAddedToCart.value = true;
  }
};

onMounted(async () => {
  await loadCart();
  updateSizeState();
  getProductDescription();
});

const onSizeChange = (size: string) => {
  selectedSize.value = size;
  updateSizeState();
};

const updateSizeState = () => {
  const currentCount = getCount(props.productObject.id, selectedSize.value);
  counterValue.value = currentCount > 0 ? currentCount : 1;
  isAddedToCart.value = currentCount > 0;
};

const getProductDescription = async () => {
  try {
    productLoader.value = true;
    const response = await $fetch(
      `/api/goods/good-description/${props.productObject.id}`,
      {
        baseURL: config?.public.baseURL,
        method: "GET",
      }
    );
    description.value = response.data.description
      ? response.data.description
      : "";
    descriptionMoscow.value = response.data.description_moscow
      ? response.data.description_moscow
      : "";
    return description;
  } catch (error) {
    console.error(error);
  } finally {
    productLoader.value = false;
  }
};

const openModal = async () => {
  const { open, close } = useModal({
    component: Cart,
    attrs: {},
  });
  open();
  closeModal();
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
  gap: 32px;

  @include mq.mq($until: smallTablet) {
    flex-direction: column;
  }

  &__image {
    height: 100%;
    min-height: 510px;
    aspect-ratio: 4 / 5;
    border-radius: 24px;
    background-color: whitesmoke;
    background-image: url("@/assets/img/shop/product-card-example.png");
    background-size: contain;
    background-repeat: no-repeat;

    @include mq.mq($until: smallTablet) {
      position: relative;
      top: -20px;
      left: 0;
      border-radius: 0;
      max-width: 100vw;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &-title {
      font-size: 40px;
      font-weight: 600;

      @include mq.mq($until: smallTablet) {
        font-size: 16px;
        font-weight: 700;
      }
    }
    &-price {
      display: none;

      @include mq.mq($until: smallTablet) {
        display: block;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  &__description {
    font-weight: 500;
  }

  &__attributes {
    display: flex;
    gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e6e4e7;
  }

  &__attribute {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;

    &-title {
      font-weight: 500;
    }

    &-value {
      font-weight: 700;
    }
  }

  &__sizes {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    &-value {
      font-weight: 700;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;

    @include mq.mq($until: smallTablet) {
      width: 100%;
      > * {
        flex: 1 1 0;
        min-width: 0;
        max-width: calc((100% - 16px) / 2);
      }
    }

    &-price {
      font-weight: 500;

      @include mq.mq($until: smallTablet) {
        display: none;
      }
    }
  }
}

.skeleton {
  background: linear-gradient(to right, #eeeeee 20%, #f8f8f8 40%, #eeeeee 60%);
  margin-bottom: 10px;
  animation: shimmer 1.5s infinite;
  background-size: 200% 100%;
  &--text {
    height: 16px;
    width: 100%;
  }
  &--rect {
    height: 150px !important;
    width: 100%;
  }
}
</style>
