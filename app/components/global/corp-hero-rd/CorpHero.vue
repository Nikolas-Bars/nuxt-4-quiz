<template>
  <div class="corp-hero-main">
    <h2 class="corp-hero-title">Корпоратив с Квиз, плиз!</h2>
    <div class="corp-hero-top"><CorpForm /> <CorpDescriptionItems /></div>
    <div class="corp-hero-bottom"><CorpHeroBottomBlock /></div>
  </div>
</template>

<script setup lang="ts">
import CorpForm from "~/components/global/corp-hero-rd/CorpForm.vue";
import CorpDescriptionItems from "~/components/global/corp-hero-rd/CorpDescriptionItems.vue";
import CorpHeroBottomBlock from "~/components/global/corp-hero-rd/CorpHeroBottomBlock.vue";
</script>

<style scoped lang="scss">
.corp-hero-main {
  background-color: rgba(69, 3, 102, 1);
  max-width: 1440px;
  width: 100%;
  border-radius: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
  padding: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem)
    clamp(2.5rem, 0.135rem + 5.41vw, 5rem);
  gap: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  opacity: 1;
  display: flex;
  flex-direction: column;

  .corp-hero-title {
    font-weight: 700;
    font-size: clamp(2rem, 0.108rem + 4.32vw, 4rem);
    line-height: clamp(2.25rem, 0.122rem + 4.86vw, 4.5rem);
    letter-spacing: -0.15px;
    text-align: center;
  }
  .corp-hero-top {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    width: clamp(40rem, 2.162rem + 86.49vw, 80rem);
    height: clamp(14rem, 0.757rem + 30.27vw, 28rem);
    gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    angle: 0 deg;
    opacity: 1;
  }
}
</style>
