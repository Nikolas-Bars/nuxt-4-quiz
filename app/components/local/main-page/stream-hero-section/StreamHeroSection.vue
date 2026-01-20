<template>
  <div class="hero-stream-main">
    <div class="hero-stream-main__header">
      <img
        src="@/assets/img/hero/stream-hero-logo-rd.png"
        alt="stream-hero-logo"
      />
      <div class="header-text-block">
        <div class="header-title">Квиз, плиз! Стрим</div>
        <div class="header-text">
          Запишитесь и играйте с друзьями в дискорде, скайпе или вообще по
          телефону!
        </div>
      </div>
    </div>
    <div class="hero-stream-main__games-block">
      <HeroStreamCard v-for="g in games" :key="g" />
    </div>
  </div>
</template>
<script setup lang="ts">
import HeroStreamCard from "~/components/local/main-page/stream-hero-section/HeroStreamCard.vue";

const games = ref([1, 2, 3]);
</script>
<style lang="scss" scoped>
//1440 - 700 - 50%
.hero-stream-main {
  display: flex;
  max-width: clamp(45rem, 2.432rem + 97.3vw, 90rem);
  width: 100%;
  padding: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem)
    clamp(2.5rem, 0.135rem + 5.41vw, 5rem);
  flex-direction: column;
  align-items: center;
  gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  border-radius: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
  background: #fff;
  &__header {
    display: flex;
    align-items: center;
    gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    align-self: stretch;
    img {
      width: clamp(2.5rem, 0.135rem + 5.41vw, 5rem);
      height: clamp(2.5rem, 0.135rem + 5.41vw, 5rem);
      border-radius: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
      opacity: 1;
    }
    .header-text-block {
      .header-title {
        font-weight: 600;
        font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
        line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
        letter-spacing: 0;
        color: #29272a;
      }
      .header-text {
        font-weight: 500;
        font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
        line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem);
        letter-spacing: 0;
        color: #29272a;
      }
    }
  }
  &__games-block {
    display: flex;
    justify-content: center;
    width: clamp(40rem, 2.162rem + 86.49vw, 80rem);
    height: auto;
    max-height: clamp(12.375rem, 0.669rem + 26.76vw, 24.75rem);
    opacity: 1;
    gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
  }
}
</style>
