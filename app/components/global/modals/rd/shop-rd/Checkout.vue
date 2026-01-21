<template>
  <VueFinalModal
    :modal-id="modalId"
    class="q-modal q-modal--checkout checkout"
    content-class="checkout__wrap"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :click-to-close="true"
    @click-outside="closeModal"
  >
    <BaseModal @close="closeModal" @submit.prevent="submit">
      <template #header>Оформление заказа</template>
      <form class="checkout">
        <div class="checkout__content">
          <div class="checkout__content-block">
            <div class="checkout__content-label">Выберите способ доставки</div>
            <div class="checkout__content-field">
              <Tabs
                v-model="selectedDelivery"
                :items="deliveryTypes"
                size="medium"
                color="grey"
                active-color="black-white"
                :variant="'lined'"
                radius="squared"
              />
            </div>
          </div>
          <div class="checkout__content-block">
            <div class="checkout__content-label">Ваш город</div>
            <div class="checkout__content-field">
              <Select
                v-model="formData.city"
                required
                label="Город"
                placeholder="Выберите город"
                :items="[
                  { label: 'Москва', value: 'moscow' },
                  { label: 'Санкт-Петербург', value: 'spb' },
                  { label: 'Казань', value: 'kazan' },
                ]"
              />
            </div>
          </div>
          <div class="checkout__content-block">
            <div class="checkout__content-label">Контакты</div>
            <div class="checkout__content-field">
              <Input
                v-model="formData.name"
                required
                label="Ваше имя"
                placeholder="Иван"
              />
              <Input
                v-model="formData.phone"
                required
                label="Номер телефона"
                inputmode="tel"
                mask="phone"
                placeholder="+7 (___) ___-__-__"
              />
              <Input
                v-model="formData.email"
                required
                label="E-mail"
                type="email"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div class="checkout__content-block">
            <div class="checkout__content-label">Комментарий к заказу</div>
            <div class="checkout__content-field">
              <Textarea v-model="formData.comment" placeholder="Комментарий" />
            </div>
          </div>
          <div class="checkout__content-total">
            <div>Итого:</div>
            <div>1968{{ location.country.currency }}</div>
          </div>
          <div class="checkout__content-agreement">
            <Checkbox v-model="offer" required>
              Согласен с <a href="/offer" target="_blank">публичной офертой</a>
            </Checkbox>
            <Checkbox v-model="privacyPolicy" required>
              Даю <a href="/agreement" target="_blank">согласие</a> на обработку
              моих персональных данных для целей и на условиях, изложенных в
              <a href="/offer" target="_blank">Политике конфиденциальности</a>
            </Checkbox>
            <Checkbox v-model="newsletter">
              Даю <a href="/agreement" target="_blank">согласие</a> на получение
              информационных и рекламных сообщений
            </Checkbox>
          </div>
          <div class="checkout__actions">
            <Button width="100%" color="pink" type="submit"> Оформить заказ </Button>
          </div>
        </div>
      </form>
    </BaseModal>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal, useVfm, useModal } from "vue-final-modal";
import BaseModal from "../BaseModal.vue";
import OrderFinal from "./OrderFinal.vue";
import Button from "~/components/global/common-rd/Button.vue";
import Input from "~/components/global/common-rd/Input.vue";
import Textarea from "~/components/global/common-rd/Textarea.vue";
import Checkbox from "~/components/global/common-rd/Checkbox.vue";
import Select from "~/components/global/common-rd/Select.vue";
import { useLocationStore } from "~/stores/location";
import Tabs from "~/components/global/common-rd/Tabs.vue";

const modalId = "checkoutModal";

const vfm = useVfm();
const location = useLocationStore();

const selectedDelivery = ref<"onGame" | "courier" | "pickup">("onGame");

const formData = reactive({
  delivery: selectedDelivery.value,
  city: "",
  name: "",
  phone: "",
  email: "",
  comment: "",
});

const deliveryTypes = [
  { title: "Получить на игре", id: "onGame" },
  { title: ["Курьером", "Оплачивается отдельно"], id: "courier" },
  { title: "Самовывоз", id: "pickup" },
];

const submit = async () => {
  console.log("Отправка...", formData);

  await new Promise((r) => setTimeout(r, 1000));

  closeModal();
  openModal();
};

const openModal = () => {
  const { open, close } = useModal({
    component: OrderFinal,
    attrs: {},
  });
  closeModal();
  open();
};

const closeModal = () => {
  vfm.close(modalId);
};
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.checkout {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;

  &__header {
    font-size: 32px;
    font-weight: 600;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-block {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &-label {
      font-weight: 600;
      font-size: 24px;

      @include mq.mq($until: smallTablet) {
        font-size: 18px;
      }
    }

    &-field {
      display: flex;
      flex-direction: column;
      gap: 16px;

      :deep(.tabs__nav) {
        flex-wrap: wrap;
      }
    }

    &-total {
      display: flex;
      justify-content: space-between;

      font-weight: 600;
      font-size: 24px;

      @include mq.mq($until: smallTablet) {
        font-size: 18px;
      }
    }
  }
}
</style>
