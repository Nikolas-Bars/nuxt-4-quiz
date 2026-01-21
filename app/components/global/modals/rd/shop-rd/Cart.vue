<template>
  <VueFinalModal
    :modal-id="modalId"
    class="q-modal q-modal--cart cart"
    content-class="cart__wrap"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :click-to-close="true"
    @click-outside="closeModal"
  >
    <BaseModal @close="closeModal">
      <template #header>Корзина</template>
      <div class="cart">
        <div class="cart__content">
          <div v-if="cartItems.length === 0" class="cart__empty">
            Корзина пуста
          </div>
          <CartProduct
            v-for="item in cartItems"
            :key="`${item.id}-${item.size}`"
            :item="item"
          />
        </div>
        <div v-if="cartTotal" class="cart__actions">
          <div class="cart__actions-sum">
            <div class="cart__actions-total">
              <div>Итого:</div>
              <div>{{ cartTotal }} {{ location.country.currency }}</div>
            </div>
            <div class="cart__actions-note">
              Цена без учета стоимости доставки
            </div>
          </div>
          <Button width="100%" color="pink" @click="openModal"
            >Перейти к оформлению</Button
          >
        </div>
      </div>
    </BaseModal>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal, useVfm, useModal } from "vue-final-modal";
import BaseModal from "../BaseModal.vue";
import Checkout from "./Checkout.vue";
import Button from "~/components/global/common-rd/Button.vue";
import { useLocationStore } from "~/stores/location";
import CartProduct from "~/components/local/shop-rd/CartProduct.vue";
import { useCart } from "~/composables/cart-rd";

const modalId = "cartModal";

const vfm = useVfm();
const location = useLocationStore();
const { cartItems, cartTotal } = useCart();

const closeModal = () => {
  vfm.close(modalId);
};

watch(
  () => cartTotal.value,
  () => {
    if (!cartTotal.value || cartTotal.value === 0) {
      closeModal();
    }
  }
);

const openModal = () => {
  vfm.close("cartModal");

  const { open, close } = useModal({
    component: Checkout,
    attrs: {},
  });
  closeModal();
  open();
};
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.cart {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  width: 600px;

  @include mq.mq($until: smallTablet) {
    max-width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: #f5f4f5;
    border-radius: 24px;
    width: 100%;
    padding: 24px 16px;

    @include mq.mq($until: smallTablet) {
      background: none;
      padding: 0;
    }

    &-sum {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &-total {
      font-size: 24px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;

      @include mq.mq($until: smallTablet) {
        font-size: 20px;
      }
    }

    &-note {
      color: #e7000b;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
