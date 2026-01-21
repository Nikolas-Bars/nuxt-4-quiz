<template>
  <div class="base-modal">
    <div v-if="$slots.header" class="base-modal__header">
      <slot name="header" />
    </div>
    <Button
      variant="unfilled"
      width="27px"
      height="27px"
      class="close-button"
      @click="$emit('close')"
    >
      <template #icon>
        <NuxtIcon name="close-button" filled />
      </template>
    </Button>
    <slot />
  </div>
</template>
<script setup lang="ts">
import Button from "../../common-rd/Button.vue";

defineEmits();

onMounted(() => {
  document.documentElement.style.overflow = "hidden";
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = "";
});
</script>
<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.base-modal {
  position: relative;
  height: auto;
  max-width: 900px;
  width: fit-content;
  padding: 48px 32px;

  background: white;
  border-radius: 40px;

  color: #29272A;

  @include mq.mq($until: smallTablet) {
    padding: 20px 16px;
    border-radius: 24px 24px 0 0;
  }

  &__header {
    font-size: 32px;
    font-weight: 600;
    max-width: 85%;

    @include mq.mq($until: smallTablet) {
      font-size: 18px;
    }
  }

  .close-button {
    position: absolute;
    top: 26px;
    right: 26px;
    z-index: 1;

    @include mq.mq($until: smallTablet) {
      top: 20px;
      right: 20px;
    }

    :deep(svg path) {
      transition: fill 0.2s ease;
      fill: #a69fa9;
    }

    &:hover :deep(svg path) {
      fill: #8f8893;
    }
    :deep(.nuxt-icon svg) {
      width: 27px !important;
      height: 27px !important;

      @include mq.mq($until: smallTablet) {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
  .close-button.button-no-text {
    aspect-ratio: unset;
    width: 27px;
    padding: 0;
  }
}
</style>

<style lang="scss">
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.vfm__content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 40px 0 !important;
  min-height: 100dvh !important;
  box-sizing: border-box !important;

  pointer-events: none;

  @include mq.mq($until: smallTablet) {
    padding: 0 !important;
    align-items: flex-end !important;
  }
}

.vfm__content > * {
  max-height: calc(100dvh - 80px);
  overflow-y: auto;
  pointer-events: auto;
  width: fit-content;
}
</style>
