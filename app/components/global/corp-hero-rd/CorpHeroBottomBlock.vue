<template>
  <div class="corp-hero-bottom">
    <div class="item">
      <div class="text">Эксклюзивные форматы для корпоративов</div>
    </div>
    <div class="item">
      <div class="text">
        Может быть частью праздника или темой всего мероприятия
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.corp-hero-bottom {
  display: flex;
  justify-content: center;
  width: clamp(40rem, 2.162rem + 86.49vw, 80rem);
  gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  .item {
    width: clamp(19.625rem, 1.061rem + 42.43vw, 39.25rem);
    height: clamp(8.75rem, 0.473rem + 18.92vw, 17.5rem);
    padding: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem)
      clamp(1rem, 0.054rem + 2.16vw, 2rem);
    gap: clamp(0.313rem, 0.017rem + 0.68vw, 0.625rem);
    opacity: 1;
    border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    background-color: rgba(0, 0, 0, 1);
    .text {
      font-weight: 600;
      font-size: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
      line-height: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      letter-spacing: 0;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
