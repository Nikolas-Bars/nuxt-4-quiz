<template>
  <div
    class="menu-item"
    :class="[`menu-item--${variant}`]"
    :style="{ borderRadius: borderRadius, height: itemHeight }"
    @click="emit('click')"
  >
    <div class="menu-item__content">
      <div class="menu-item__title">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots.text" class="menu-item__text">
        <slot name="text"></slot>
      </div>
    </div>

    <div
      class="menu-item__image"
      :class="imagePosition"
      :style="{ width: imageWidth, height: imageHeight }"
    >
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: "filled" | "outlined";
  imageWidth?: string;
  imageHeight?: string;
  imagePosition?: "relative" | "absolute-bottom-right";
  borderRadius?: "clamp(1rem, 0.054rem + 2.16vw, 2rem)" | "40px";
  itemHeight?: string;
}
const props = withDefaults(defineProps<Props>(), {
  variant: "filled",
  imageWidth: "120px",
  imageHeight: "120px",
  imagePosition: "relative",
  borderRadius: "clamp(1rem, 0.054rem + 2.16vw, 2rem)",
  itemHeight: "162px",
});

const emit = defineEmits<{ (e: "click"): void }>();
</script>

<style scoped lang="scss">
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.menu-item {
  $relative: "&.relative";
  $absoluteBottomRight: "&.absolute-bottom-right";

  flex: 1 1 0; /* растягиваем все items одинаково */
  min-width: 0; /* чтобы не ломалось при overflow */

  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  height: clamp(5.063rem, 0.274rem + 10.95vw, 10.125rem);
  flex-shrink: 0;
  border-radius: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;

  @include mq.mq($until: smallTablet) {
    max-width: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
    max-height: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
    border-radius: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem) !important;
  }

  &__content {
    display: flex;
    width: clamp(6.969rem, 0.377rem + 15.07vw, 13.938rem);
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    position: relative;
    z-index: 2;
  }

  &__title {
    color: #fff;
    font-size: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    font-weight: 600;
    line-height: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  }

  &__text {
    color: var(--qpurple---purple-300, #cca9df);
    font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
    font-weight: 500;
    line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  }

  &__image {
    position: relative;
    z-index: 1;
    width: clamp(6.531rem, 0.353rem + 14.12vw, 13.063rem);
    height: clamp(5.156rem, 0.279rem + 11.15vw, 10.313rem);
    flex-shrink: 0;
    aspect-ratio: 209 / 165;

    #{$relative} {
      position: relative;
    }

    #{$absoluteBottomRight} {
      position: absolute;
      bottom: 0;
      right: 0;

      :deep(img) {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }

    :deep(img) {
      height: 100%;
      transition: transform 0.3s ease;
    }
  }

  &--filled {
    background: radial-gradient(
        153% 141% at 100% 100%,
        rgba(200, 6, 92, 0.34) 0%,
        rgba(28, 6, 50, 0) 100%
      ),
      var(--qpurple---purple-900, #3d0d55);
    background-blend-mode: screen, normal, normal;
  }

  &--outlined {
    background: none;
    border: 1px solid var(--qpurple---purple-500, #542969);
    overflow: hidden;
  }

  &:hover {
    background: radial-gradient(
        153% 141% at 100% 100%,
        rgba(200, 6, 92, 0.68) 0%,
        rgba(28, 6, 50, 0) 100%
      ),
      var(--qpurple---purple-900, #3d0d55);
    background-blend-mode: screen, normal, normal;

    :deep(img) {
      transform: scale(1.1);
    }
  }
}
</style>
