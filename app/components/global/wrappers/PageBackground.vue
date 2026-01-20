<template>
  <div class="page-background">
    <div :class="['page-background__wrap', `repeat-${repeat}`]">
      <Container>
        <slot />
      </Container>
    </div>
  </div>
</template>
<script setup>
import Container from "~/components/global/wrappers/Container.vue";
import defaultBackgroundImage from "@/assets/img/page-bg.png";

const props = defineProps({
  backgroundImage: { type: String, default: "" },
  repeat: {
    type: String,
    default: "none",
    validator: (val) => ["x", "y", "none"].includes(val),
  },
});

// const containerStyle = computed(() => {
//   return `background-image: url(${
//     props.backgroundImage !== ""
//       ? props.backgroundImage
//       : defaultBackgroundImage
//   })`;
// });
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.page-background {
  width: 100%;

  &__wrap {
    @include mq.mq($until: tablet) {
      .container {
        padding: 0 0.7rem !important;
      }
    }
    background-size: cover;
    background-position: center 0;
    background-repeat: no-repeat;

    &.repeat-y {
      background-size: 100% auto;
      background-repeat: repeat-y;
    }

    &.repeat-x {
      background-size: auto 100%;
      background-repeat: repeat-x;
    }
  }
}
</style>
