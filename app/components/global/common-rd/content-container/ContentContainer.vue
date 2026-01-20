<template>
  <div class="content-container" :class="[`content-container--${border}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  border?: "squared" | "rounded";
}
withDefaults(defineProps<Props>(), {
  border: "rounded",
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.content-container {
  $squared: "&--squared";
  $rounded: "&--rounded";

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1440px;
  width: 100%;
  min-height: 300px;
  align-content: center;
  padding: 56px 80px;
  color: #ffffff;

  gap: 24px;
  background: #450366;

  @include mq.mq($until: smallTablet) {
    max-width: 100%;
    padding: 32px 16px;
  }

  #{$squared} {
    border-radius: 0 0 56px 56px;

    @include mq.mq($until: smallTablet) {
      border-radius: 0 0 32px 32px;
    }
  }

  #{$rounded} {
    border-radius: 56px;

    @include mq.mq($until: smallTablet) {
      border-radius: 32px;
    }
  }
}
</style>
