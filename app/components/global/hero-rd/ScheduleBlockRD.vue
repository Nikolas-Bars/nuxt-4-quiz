<template>
  <div class="schedule-hero-rd">
    <div class="schedule-hero-rd__title-button">
      <h2 class="schedule-hero-rd__title-button__title">Расписание игр</h2>
      <div class="schedule-hero-rd__title-button__text">42 игры в Москве</div>
      <Button
        font-size="clamp(0.5rem, 0.027rem + 1.08vw, 1rem)"
        padding="clamp(0.438rem, -0.095rem + 1.22vw, 1rem)"
        height="clamp(2.063rem, 1.176rem + 2.03vw, 3rem)"
        color="pink"
        trailing-icon
      >
        Смотреть расписание
        <template #icon>
          <NuxtIcon name="arrow-right-rd" />
        </template>
      </Button>
    </div>
    <div class="schedule-hero-rd__hero-img">
      <img src="@/assets/img/schedule-heroimage-rd.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "../common-rd/Button.vue";
</script>
<style scoped lang="scss">
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
// 760px до 14clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem) уменьшение 40%
.schedule-hero-rd {
  position: relative;
  padding: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem)
    clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  width: 32%;
  height: clamp(12.5rem, 0.676rem + 27.03vw, 25rem);
  flex-shrink: 0;
  border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
  background: var(--purple-50, #faf5ff);
  overflow: hidden;
  &__title-button {
    display: flex;
    width: clamp(11.344rem, 0.613rem + 24.53vw, 22.688rem);
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    &__title {
      align-self: stretch;
      color: var(--neutral---gray-800, #29272a);
      font-size: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      font-style: normal;
      font-weight: 600;
      line-height: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    }
    &__text {
      align-self: stretch;
      color: var(--neutral---gray-600, #59525c);
      font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
      font-style: normal;
      font-weight: 500;
      line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem);
    }
    &__button {
      display: flex;
      z-index: 2;
      padding: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem)
        clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem)
        clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem)
        clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
      background: var(--qpink-600, #f60850);
    }
    :deep(.nuxt-icon.nuxt-icon--fill *) {
      fill: none !important;
    }
    color: var(--white, #fff);
    font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    font-style: normal;
    font-weight: 500;
    line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  }
  &__hero-img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
