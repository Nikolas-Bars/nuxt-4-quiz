<template>
  <div class="slider-hero-rd"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.slider-hero-rd {
  // -66%
  width: 66%;
  height: clamp(12.5rem, 0.676rem + 27.03vw, 25rem);
  flex-shrink: 0;
  border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
  background: var(--qpurple---purple-800, #43145a);
  align-self: stretch;

  @include mq.mq($until: smallTablet) {
    width: 100%;
  }
}
</style>
