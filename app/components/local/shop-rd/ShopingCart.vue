<template>
  <Button
    v-if="isShow"
    :color="isMobile ? 'pink' : 'black-white'"
    bg-brightness="dark"
    class="cart"
    radius="squared"
    :height="isMobile ? '56px' : '84px'"
    @click="openModal"
  >
    <div>{{ cart.cartTotal }} {{ location.country.currency }}</div>
    <img :src="isMobile ? bagMobile : bagDesktop" />
  </Button>
</template>

<script setup lang="ts">
import { useModal } from "vue-final-modal";
import { useMediaQuery } from "@vueuse/core";
import { useLocationStore } from "~/stores/location";
import Button from "~/components/global/common-rd/Button.vue";
import bagMobile from "@/assets/icons/shoping-bag.svg";
import bagDesktop from "@/assets/img/shop/button-bag.png";
import Cart from "~/components/global/modals/rd/shop-rd/Cart.vue";
import { useCart } from "~/composables/cart-rd";

const cart = useCart();

const isMobile = ref(false);
const isReady = ref(false);

const location = useLocationStore();

const isShow = computed(() => {
  return isReady && cart.cartTotal.value && cart.cartTotal.value !== 0;
});

const openModal = async () => {
  const { open, close } = useModal({
    component: Cart,
    attrs: {},
  });
  open();
};

onMounted(() => {
  const mq = window.matchMedia("(max-width: 768px)");
  isMobile.value = mq.matches;
  isReady.value = true;

  mq.addEventListener("change", (e) => {
    isMobile.value = e.matches;
  });
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.cart {
  z-index: 5;
  position: fixed;
  right: 16px;
  bottom: 82px;

  display: flex;
  gap: 12px;
  align-items: center;

  border-radius: 24px;

  padding: 0 0 0 20px !important;
  border: 1px solid white;
  box-shadow: 0px 8px 16px 0px #0000001f;

  @include mq.mq($until: smallTablet) {
    width: fit-content;
    height: 56px;
    background-color: #f60850;
    border-radius: 16px;
    padding: 12px !important;
    font-size: 14px;
    text-align: center;
    border: none;
  }
}
</style>
