<template>
  <div class="franchise-hero-block">
    <div class="left-block">
      <h2 class="text">Открой свой бизнес под известным брендом за 2 месяца</h2>
      <div class="bottom-text">
        <div>
          <div class="bottom-text-header">1,5 млн</div>
          <div class="bottom-text-info">преданных игроков</div>
        </div>
        <div>
          <div class="bottom-text-header">2 мес</div>
          <div class="bottom-text-info">срок запуска франшизы</div>
        </div>
      </div>
    </div>
    <div class="right-block">
      <FranchiseCityForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import FranchiseCityForm from "~/components/global/franchiseHero/FranchiseCityForm.vue";
</script>

<style scoped lang="scss">
.franchise-hero-block {
  display: flex;
  width: 100%;
  // height: 100%;
  max-width: 1440px;
  height: clamp(16.375rem, 0.885rem + 35.41vw, 32.75rem);
  padding: 0 clamp(1.875rem, -1.081rem + 6.76vw, 5rem);
  gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  opacity: 1;
  .left-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: 80% auto;
    background-position: right bottom;
    background-image: url("~/assets/img/franchise-rd/franchise-map.png");
    width: clamp(26rem, 1.405rem + 56.22vw, 52rem);
    max-height: clamp(16.375rem, 0.885rem + 35.41vw, 32.75rem);
    padding: clamp(1.5rem, 0.081rem + 3.24vw, 3rem)
      clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    gap: clamp(3.875rem, 0.209rem + 8.38vw, 7.75rem);
    opacity: 1;
    border-radius: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
    background-color: rgba(69, 3, 102, 1);
    .text {
      font-weight: 600;
      font-size: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
      line-height: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem);
      letter-spacing: -0.15px;
    }
    .bottom-text {
      display: flex;
      flex-direction: column;
      gap: clamp(0.313rem, 0.017rem + 0.68vw, 0.625rem);
      .bottom-text-header {
        font-weight: 600;
        font-size: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
        line-height: 100%;
        letter-spacing: 0;
        vertical-align: middle;
      }
      .bottom-text-info {
        font-weight: 600;
        font-size: clamp(0.625rem, 0.152rem + 1.08vw, 1.125rem);
        line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem);
        letter-spacing: 0;
        vertical-align: middle;
      }
    }
  }
}
</style>
