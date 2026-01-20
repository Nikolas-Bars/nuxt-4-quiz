<template>
  <div class="container" :class="props.paddingRemove ? 'no-padding' : ''">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  paddingRemove: { type: Boolean, default: false },
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.container {
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  position: relative;

  &.no-padding {
    @include mq.mq($from: desktopMiddle) {
      padding: 0;
    }
  }
}

@include mq.mq($until: desktop) {
  .container {
    padding: 0 1rem;
  }
}
</style>
