<template>
  <div class="corp-description-items">
    <div class="item">
      <div class="item-image">
        <img src="@/assets/img/corp-hero-rd/icon-1.png" />
      </div>
      <div class="item-text">Официальный банкет в ресторане</div>
    </div>
    <div class="item">
      <div class="item-image">
        <img src="@/assets/img/corp-hero-rd/icon-2.png" />
      </div>
      <div class="item-text">Весёлая тусовка в баре</div>
    </div>
    <div class="item">
      <div class="item-image">
        <img src="@/assets/img/corp-hero-rd/icon-3.png" />
      </div>
      <div class="item-text">Пикник или другое мероприятие на улице</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.corp-description-items {
  display: flex;
  flex-direction: column;
  width: clamp(19.625rem, 1.061rem + 42.43vw, 39.25rem);
  height: clamp(14rem, 0.757rem + 30.27vw, 28rem);
  gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  angle: 0 deg;
  opacity: 1;
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: clamp(19.625rem, 1.061rem + 42.43vw, 39.25rem);
    height: clamp(4.156rem, 0.225rem + 8.99vw, 8.313rem);
    padding: clamp(0.5rem, 0.027rem + 1.08vw, 1rem)
      clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    gap: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
    opacity: 1;
    border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    background-color: rgba(82, 20, 112, 1);
    .item-text {
      font-weight: 600;
      font-size: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
      line-height: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      letter-spacing: 0;
      color: rgba(255, 255, 255, 1);
    }
    .item-image {
      width: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
      height: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
      display: flex;
      img {
        max-width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
