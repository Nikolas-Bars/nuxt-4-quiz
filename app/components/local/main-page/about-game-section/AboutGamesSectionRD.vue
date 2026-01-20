<template>
  <div class="about-games-main-rd">
    <div class="about-games-main-rd__top">
      <div class="about-games-main-rd__top__left-block">
        <div class="badge-top"><span>Что такое Квизплиз?</span></div>
        <h2 class="description">
          Командная игра на эрудицию, <br />
          логику и сообразительность
        </h2>
        <p class="additional-description">
          Квиз, плиз! — хороший способ провести вечер с друзьями, размять<br />
          мозги и получить новые позитивные впечатления.
        </p>
        <div class="row-img">
          <div class="row-img__item">
            <img src="@/assets/img/hero/round-number.png" /><br />раундов
          </div>
          <div class="row-img__item">
            <img src="@/assets/img/hero/hours-number.png" /><br />часа
          </div>
          <div class="row-img__item">
            <img src="@/assets/img/hero/players-number.png" /><br />человек
          </div>
        </div>
      </div>
      <div class="about-games-main-rd__top__right-block">
        <iframe
          src="https://rutube.ru/play/embed/4ff87bae614ba5d9f18e884bf843249d/"
          class="frame"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <GameTypeSlider />
  </div>
</template>

<script setup>
import GameTypeSlider from "~/components/local/main-page/about-game-section/GameTypeSlider.vue";
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
// -50% от 14clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem) до 700px
.about-games-main-rd {
  display: flex;
  max-width: clamp(43.75rem, 100vw, 90rem);
  padding: 0 clamp(1.875rem, -1.081rem + 6.76vw, 5rem);
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
    align-self: stretch;
    &__left-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
      width: 50%;
      flex: 1 0 0;
      .badge-top {
        color: #432505;
        display: flex;
        align-items: center;
        text-align: center;
        width: clamp(5.063rem, 0.274rem + 10.95vw, 10.125rem);
        border-radius: clamp(0.938rem, 0.051rem + 2.03vw, 1.875rem);
        background: #efca03;
        height: clamp(1.156rem, 0.063rem + 2.5vw, 2.313rem);
        transform: rotate(-2.613deg);
        flex-shrink: 0;
        font-size: clamp(0.438rem, 0.024rem + 0.95vw, 0.875rem);
        font-style: normal;
        font-weight: 900;
        line-height: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem); /* 142.857% */
        text-transform: uppercase;
        span {
          transform: rotate(2.613deg);
          margin: 0 auto;
        }
      }
      .description {
        color: #fff;
        font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
        font-style: normal;
        font-weight: 600;
        line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem); /* 120% */
      }
      .additional-description {
        color: #fff;
        font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
        font-style: normal;
        font-weight: 500;
        line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem); /* 150% */
      }
      .row-img {
        display: flex;
        align-items: flex-start;
        gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
        align-self: stretch;
        color: #fff;
        font-size: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
        font-style: normal;
        font-weight: 600;
        line-height: clamp(1rem, 0.054rem + 2.16vw, 2rem); /* 133.333% */
        &__item {
          width: 33.3%;
        }
        img {
          height: clamp(1.875rem, 0.101rem + 4.05vw, 3.75rem);
        }
      }
    }
    &__right-block {
      width: 50%;
      height: clamp(14.125rem, 0.704rem + 30.68vw, 28.313rem);
      flex-shrink: 0;
      aspect-ratio: 700/453;
      border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
      background: lightgray -300.793px -292.562px / 223.965% 230.787% no-repeat;
      .frame {
        border: none;
        width: 100%;
        height: 100%;
        border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
      }
    }
  }
}
</style>
