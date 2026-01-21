<template>
  <div class="shop-menu">
    <!-- MERCH -->
    <MenuItem
      class="shop-menu__item-desktop"
      variant="filled"
      image-width="121px"
      image-height="96px"
      item-height="96px"
      border-radius="40px"
      image-position="absolute-bottom-right"
    >
      <template #title>
        <span class="shop-menu-title">Мерч</span>
      </template>
      <template #image>
        <img
          class="shop-menu-image shop-menu-image--merch"
          src="@/assets/img/shop/towel-rd.png"
        />
      </template>
    </MenuItem>
    <div class="shop-menu__item-mobile">
      <img
        class="shop-menu-image shop-menu-image--mobile shop-menu-image--merch"
        src="@/assets/img/shop/merch--mobile.png"
      />
      <div>Мерч</div>
    </div>

    <!-- BOARD  -->
    <MenuItem
      class="shop-menu__item-desktop"
      variant="filled"
      image-width="121px"
      image-height="96px"
      item-height="96px"
      border-radius="40px"
      image-position="absolute-bottom-right"
    >
      <template #title>
        <span class="shop-menu-title">Настолка</span>
      </template>
      <template #image>
        <img
          class="shop-menu-image shop-menu-image--board"
          src="@/assets/img/hero-shop-rd.png"
        />
      </template>
    </MenuItem>
    <div class="shop-menu__item-mobile">
      <img
        class="shop-menu-image shop-menu-image--mobile shop-menu-image--board"
        src="@/assets/img/shop/board--mobile.png"
      />
      <div>Настолка</div>
    </div>

    <!-- CERTIFICATES -->
    <MenuItem
      class="shop-menu__item-desktop"
      image-width="121px"
      image-height="96px"
      item-height="96px"
      border-radius="40px"
      image-position="absolute-bottom-right"
    >
      <template #title>
        <span class="shop-menu-title">Сертификаты</span>
      </template>
      <template #image>
        <img
          class="shop-menu-image shop-menu-image--cert"
          src="@/assets/img/shop/certificate-rd.png"
        />
      </template>
    </MenuItem>
    <div class="shop-menu__item-mobile">
      <img
        class="shop-menu-image shop-menu-image--mobile shop-menu-image--cert"
        src="@/assets/img/shop/cert--mobile.png"
      />
      <div class="shop-menu__item-mobile-text">Серты</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItem from "~/components/global/common-rd/MenuItem.vue";
</script>

<style scoped lang="scss">
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.shop-menu {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-shrink: 0;

  @include mq.mq($until: smallTablet) {
    justify-content: space-around;
  }

  &__item-desktop {
    display: flex;
    @include mq.mq($until: smallTablet) {
      display: none;
    }
  }

  &__item-mobile {
    display: none;
    font-size: 14px;
    @include mq.mq($until: smallTablet) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
  }
}
</style>
