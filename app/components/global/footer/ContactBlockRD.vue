<template>
  <div class="contact-footer-rd">
    <NuxtLink to="/">
      <NuxtIcon class="logo" name="logo-white" />
    </NuxtLink>
    <div class="contact-footer-rd__header">Любые вопросы по играм</div>
    <div class="contact-footer-rd__email">game@quizplease.ru</div>
    <div class="contact-footer-rd__phone">+7 495 946-78-49</div>
    <div class="contact-footer-rd__address">Нижняя ул., 14, стр. 1</div>
    <div class="contact-footer-rd__social">
      <NuxtLink target="_blank">
        <NuxtIcon class="img-link" filled name="vk-rd" />
      </NuxtLink>
      <NuxtLink target="_blank">
        <NuxtIcon class="img-link" filled name="tg-rd" />
      </NuxtLink>
      <NuxtLink target="_blank">
        <NuxtIcon class="img-link" filled name="whatsapp-rd" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.contact-footer-rd {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;

  border-radius: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
  background: var(--qpurple---purple-900, #3d0d55);

  gap: clamp(0.938rem, 0.051rem + 2.03vw, 1.875rem);
  padding: clamp(1.5rem, 0.081rem + 3.24vw, 3rem)
    clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
  width: clamp(19.625rem, 1.061rem + 42.43vw, 39.25rem);
  height: clamp(14.25rem, 0.77rem + 30.81vw, 28.5rem);
  &__header {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
    line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem);
  }
  &__email {
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
  }
  &__phone {
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
  }
  &__address {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
    line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem);
  }
  .logo {
    width: clamp(2.125rem, 0.115rem + 4.59vw, 4.25rem);
    height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
    display: block;
    position: relative;
    will-change: transform;

    :deep(svg) {
      margin-bottom: 0;
      width: clamp(2.125rem, 0.115rem + 4.59vw, 4.25rem);
      height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
      display: block;
    }

    &--white {
      :deep(svg) {
        color: v.$white;
      }
    }
  }
  &__social {
    display: flex;
    gap: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
    :deep(svg) {
      margin-bottom: 0;
      width: clamp(1.25rem, 0.895rem + 0.81vw, 1.625rem);
      height: clamp(1.25rem, 0.895rem + 0.81vw, 1.625rem);
      display: block;
    }
  }
}
</style>
