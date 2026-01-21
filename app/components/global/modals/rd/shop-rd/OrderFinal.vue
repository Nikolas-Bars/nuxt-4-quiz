<template>
  <VueFinalModal
    :modal-id="modalId"
    class="q-modal q-modal--final final"
    content-class="final__wrap"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :click-to-close="true"
    @click-outside="closeModal"
  >
    <BaseModal @close="closeModal">
      <div class="final">
        <div class="final__header">
          <span>Ваш заказ обрабатывается</span>
          <img
            class="final__header-image"
            src="@/assets/icons/check-filled.svg"
          />
        </div>
        <div class="final__info">
          Мы свяжемся с вами по указанным контактам (email и телефон)
          для&nbsp;уточнения деталей доставки. Ожидайте наше сообщение!
        </div>
        <div class="final__order">
          <span>Номер заказа: #{{ orderId }}</span>
          <img
            class="final__order-image"
            src="@/assets/icons/copy.svg"
            @click="copy"
          />
        </div>
      </div>
    </BaseModal>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal, useVfm } from "vue-final-modal";
import BaseModal from "../BaseModal.vue";

const modalId = "orderFinalModal";
const vfm = useVfm();

const closeModal = () => {
  vfm.close(modalId);
};

const orderId = ref<Number>(123);

const copy = () => {
  navigator.clipboard.writeText(String(orderId.value));
};
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.final {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  max-width: 560px;
  font-weight: 500;
  font-size: 16px;
  color: #443f47;

  &__header {
    display: flex;
    align-items: center;
    gap: 12px;

    font-weight: 600;
    font-size: 32px;
    color: #29272A;

    @include mq.mq($until: smallTablet) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  &__info {
    text-align: center;

    @include mq.mq($until: smallTablet) {
      text-align: start;
    }
  }

  &__order {
    display: flex;
    align-items: center;
    gap: 6px;

    &-image {
      cursor: pointer;
    }
  }
}
</style>
