<template>
  <div>
    <div class="page-rd">
      <TheHeaderRD />
      <main class="content">
        <slot />
      </main>
      <TheFooterRD />
    </div>
    <ModalsContainer />
  </div>
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";
import TheFooterRD from "~/components/global/footer/TheFooterRD.vue";
import TheHeaderRD from "~/components/global/header/TheHeaderRD.vue";
</script>
<style lang="scss" scoped>
@use "./../assets/css/vars" as v;
@use "./../assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.page-rd {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  margin-top: 7rem; // отступ для fixed header

  @include mq.mq($until: 640px) {
    margin-top: 64px;
  }
}

:deep(.footer-rd) {
  margin-top: 56px;

  @include mq.mq($until: 640px) {
    margin-top: 96px;
  }
}
</style>
