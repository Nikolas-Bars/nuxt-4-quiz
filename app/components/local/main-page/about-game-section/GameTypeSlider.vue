<template>
  <div class="types-slider-block">
    <div class="types-slider-wrapper">
      <Swiper
        ref="swiperRef"
        :grab-cursor="true"
        :keyboard="{
          enabled: true,
        }"
        :slides-per-view="'auto'"
        :space-between="18"
        class="types-slider"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="type in gameTypes" :key="type.id">
          <GameTypeItem :description="type.description" :image="type.image" />
        </SwiperSlide>
      </Swiper>
      <button class="slider-nav slider-nav--prev" @click="slidePrev">
        <NuxtIcon name="arrow-right-rd" />
      </button>
      <button class="slider-nav slider-nav--next" @click="slideNext">
        <NuxtIcon name="arrow-right-rd" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import GameTypeItem from "~/components/local/main-page/about-game-section/GameTypeItem.vue";
import bigGame from "@/assets/img/game-types-rd/big-game.png";
import bingo from "@/assets/img/game-types-rd/bingo.png";
import movieAndMusic from "@/assets/img/game-types-rd/movieAndMusic.png";
import classic from "@/assets/img/game-types-rd/classic.png";
import turbo from "@/assets/img/game-types-rd/turbo.png";

const swiperInstance = ref<SwiperType | null>(null);

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
};

const slideNext = () => {
  swiperInstance.value?.slideNext();
};

const slidePrev = () => {
  swiperInstance.value?.slidePrev();
};

const gameTypes = reactive([
  {
    id: 1,
    description:
      "Наша классическая игра, но на целых 10 раундов. Реально большая, получается.",
    image: bigGame,
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: bingo,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: movieAndMusic,
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: classic,
  },
  {
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: turbo,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: bigGame,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: bigGame,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: bigGame,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: bigGame,
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    image: bigGame,
  },
]);
</script>

<style scoped lang="scss">
.types-slider-block {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
}

.types-slider-wrapper {
  position: relative;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: clamp(1.875rem, 1.047rem + 1.89vw, 2.75rem);
  height: clamp(1.875rem, 1.047rem + 1.89vw, 2.75rem);
  border-radius: 50%;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.15);
  }

  &--prev {
    left: 0;
    background-color: rgba(123, 54, 158, 1);
    transform: translateY(-50%) translateX(-50%);
  }

  &--next {
    right: 0;
    background-color: rgba(123, 54, 158, 1);
    transform: translateY(-50%) translateX(50%);
  }

  :deep(.nuxt-icon) {
    font-size: 0;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    svg {
      width: clamp(0.75rem, 0.277rem + 1.08vw, 1.25rem);
      height: clamp(0.75rem, 0.277rem + 1.08vw, 1.25rem);
      fill: none !important;
      display: block;

      path {
        fill: none !important;
        stroke: #fff !important;
        stroke-width: 2;
      }
    }
  }

  &--prev :deep(.nuxt-icon) {
    transform: rotate(180deg);
  }
}

:deep(.types-slider) {
  overflow: hidden;
  width: 100%;
}

:deep(.swiper-slide) {
  width: auto;
}
</style>
