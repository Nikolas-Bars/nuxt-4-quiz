<template>
  <div class="corp-form-container">
    <div class="corp-header">Оставить заявку на проведение корпоратива</div>
    <div class="corp-form-item">ТУТ БУДЕТ ФОРМА</div>
    <div class="corp-form-btn">
      <Button
        font-size="clamp(0.75rem, 0.514rem + 0.54vw, 1rem)"
        padding="clamp(0.438rem, -0.095rem + 1.22vw, 1rem)"
        height="clamp(2.063rem, 1.176rem + 2.03vw, 3rem)"
        width="100%"
        color="pink"
        trailing-icon
      >
        Отправить
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/global/common-rd/Button.vue";
</script>

<style scoped lang="scss">
.corp-form-container {
  display: flex;
  flex-direction: column;
  width: clamp(19.625rem, 1.061rem + 42.43vw, 39.25rem);
  height: clamp(14rem, 0.757rem + 30.27vw, 28rem);
  background-color: white;
  padding: clamp(1.5rem, 0.081rem + 3.24vw, 3rem)
    clamp(1rem, 0.054rem + 2.16vw, 2rem) clamp(1rem, 0.054rem + 2.16vw, 2rem);
  gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  opacity: 1;
  border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
  .corp-header {
    font-weight: 700;
    font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
    letter-spacing: -0.15px;
    color: rgba(41, 39, 42, 1);
  }
  .corp-form-item {
    color: rgba(41, 39, 42, 1);
    font-weight: 800;
    font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 2px solid #5a5656;
    width: clamp(17.625rem, 0.953rem + 38.11vw, 35.25rem);
    height: clamp(5.5rem, 0.297rem + 11.89vw, 11rem);
    gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    opacity: 1;
  }
}
</style>
