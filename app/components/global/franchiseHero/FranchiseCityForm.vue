<template>
  <div class="franchise-city-form">
    <div class="header">Проверьте, свободен ли ваш город</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
//1440 - 700 - 50%
.franchise-city-form {
  width: clamp(13.25rem, 0.716rem + 28.65vw, 26.5rem);
  // width: 100%;
  height: clamp(16.375rem, 0.885rem + 35.41vw, 32.75rem);
  //background-color: white;
  opacity: 1;
  padding: clamp(1.875rem, 0.101rem + 4.05vw, 3.75rem)
    clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem);
  border-radius: 48px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("~/assets/img/franchise-rd/franchise-city-bg.png");
  .header {
    font-weight: 600;
    font-size: clamp(1rem, 0.054rem + 2.16vw, 2rem);
    line-height: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    letter-spacing: 0;
    color: rgba(41, 39, 42, 1);
    vertical-align: middle;
  }
}
</style>
