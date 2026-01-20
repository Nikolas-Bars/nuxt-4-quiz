<template>
  <div class="rating-app-main">
    <RatingCardRd />
    <AppLinksRd />
  </div>
</template>
<script setup lang="ts">
import RatingCardRd from "~/components/local/main-page/rating-and-app/RatingCardRd.vue";
import AppLinksRd from "~/components/local/main-page/rating-and-app/AppLinksRd.vue";
</script>
<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.rating-app-main {
  display: flex;
  padding: 0 clamp(2.5rem, 0.135rem + 5.41vw, 5rem);
  width: clamp(43.75rem, 100vw, 90rem);
  justify-content: center;
  gap: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  align-self: stretch;
  margin: 0 auto;
}
@include mq.mq($until: 900) {
  .rating-app-main {
    padding: 0 16px;
  }
}
</style>
