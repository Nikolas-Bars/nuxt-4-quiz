<template>
  <div class="mobile-app-rd-main">
    <div class="mobile-app-rd-main__top-block">
      <div class="mobile-app-rd-main__top-block__header">
        Мобильное приложение
      </div>
      <div class="mobile-app-rd-main__top-block__description">
        Получайте бесплатные сертификаты<br />
        на игры и другие подарки!
      </div>
      <div class="mobile-app-rd-main__top-block__links-block">
        <img src="@/assets/img/hero/app-store-rd.png" />
        <img src="@/assets/img/hero/app-google-rd.png" />
      </div>
    </div>
    <div class="mobile-app-rd-main__bottom-block">
      <div class="mobile-app-rd-main__bottom-block__image">
        <img src="@/assets/img/hero/iphone-15-rd.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
@use "~/assets/css/vars" as v;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.mobile-app-rd-main {
  display: flex;
  padding: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem)
    clamp(1rem, 0.054rem + 2.16vw, 2rem);
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
  background: #3d0d55;
  max-width: clamp(19.5rem, 1.054rem + 42.16vw, 39rem);
  width: auto;
  max-height: clamp(19.75rem, 1.068rem + 42.7vw, 39.5rem);
  overflow: hidden;
  position: relative;
  //@include mq.mq($until: 900px) {
  //  width: auto;
  //}
  &__top-block {
    display: flex;
    // width: clamp(18.75rem, 1.014rem + 40.54vw, 37.5rem);
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    flex: 1 0 0;
    &__header {
      color: #fff;
      font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
      font-style: normal;
      font-weight: 600;
      line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem); /* 120% */
    }
    &__description {
      color: #fff;
      font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
      font-style: normal;
      font-weight: 500;
      line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem); /* 155.556% */
    }
    &__links-block {
      display: flex;
      align-items: flex-start;
      gap: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
      img {
        width: clamp(4.438rem, 0.181rem + 9.73vw, 8.938rem);
        height: clamp(1.313rem, 0.071rem + 2.84vw, 2.625rem);
      }
    }
  }
  &__bottom-block {
    width: clamp(17.938rem, 0.97rem + 38.78vw, 35.875rem);
    height: clamp(21.625rem, 1.11rem + 46.89vw, 43.313rem);
    flex-shrink: 0;
    &__image {
      img {
        max-width: 100%;
        height: auto;
        position: absolute;
        bottom: 0;
        right: clamp(0.5rem, 0.086rem + 0.95vw, 0.938rem);
      }
    }
  }
  &__bottom-block__image {
    margin-top: auto;
    align-self: flex-end;
  }
}
</style>
