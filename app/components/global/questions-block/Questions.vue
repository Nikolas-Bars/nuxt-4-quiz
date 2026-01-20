<template>
  <div class="questions-main-wrap">
    <h2 class="questions-main-wrap__title">Попробуй поиграть</h2>
    <div class="questions-main-wrap__description">
      <div>
        <Tabs
          font-size="clamp(0.7rem, 0.416rem + 0.65vw, 1rem)"
          padding="clamp(0.438rem, -0.095rem + 1.22vw, 1rem)"
          height="clamp(2.25rem, 1.541rem + 1.62vw, 3rem)"
          :model-value="selectedBtn"
          :items="buttons"
          size="medium"
          color="purple"
          active-color="purple"
          gap="clamp(0.5rem, 0.027rem + 1.08vw, 1rem)"
          bg-brightness="dark"
          :variant="'lined'"
        />
      </div>
    </div>
    <Swiper
      v-if="items.length"
      :grab-cursor="true"
      :keyboard="{
        enabled: true,
      }"
      :slides-per-view="'auto'"
      :space-between="isTablet ? 40 : 50"
      :slides-offset-after="200"
      class="question__slider"
    >
      <SwiperSlide v-for="item in items" :key="item">
        <QuestionCard />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import QuestionCard from "~/components/global/questions-block/QuestionCard.vue";
import Tabs from "~/components/global/common-rd/Tabs.vue";
import useScreenWidth from "~/hooks/useScreenWidth";
const { screenWidth } = useScreenWidth();
function getIsTablet() {
  return screenWidth.value < 880;
}
const isTablet = ref(getIsTablet());
watch(
  () => screenWidth.value,
  () => {
    isTablet.value = getIsTablet();
  }
);
const items = ref([1, 2, 5]);
const selectedBtn = ref(1);
const buttons = ref([
  { id: "classic", title: "Классика", icon: "clapperboard-rd" },
  { id: "stream", title: "Стримы", icon: "clapperboard-rd" },
  { id: "theme", title: "Тематика", icon: "clapperboard-rd" },
  { id: "movies", title: "Кино и музыка", icon: "clapperboard-rd" },
]);
</script>

<style scoped lang="scss">
//1440 - 700 - 50%
.questions-main-wrap {
  width: 100%;
  max-width: 1440px;
  min-height: clamp(21.625rem, 1.169rem + 46.76vw, 43.25rem);
  padding: clamp(1.75rem, 0.095rem + 3.78vw, 3.5rem)
    clamp(2.5rem, 0.135rem + 5.41vw, 5rem);
  gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  opacity: 1;
  border-radius: 56px;
  background-color: rgba(69, 3, 102, 1);
  // min-height: clamp(9.375rem, 0.507rem + 20.27vw, 18.75rem);
  // max-width: clamp(45rem, 2.432rem + 97.3vw, 90rem);
  // padding: 0 clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  .swiper-slide,
  swiper-slide {
    width: 85%;
  }
  &__title {
    color: #fff;

    /* Section-title(H2) */
    font-family: Gilroy;
    font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    font-style: normal;
    font-weight: 600;
    line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem); /* 120% */
    margin-bottom: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
  }
  &__description {
    color: #fff;
    display: flex;
    justify-content: space-between;
    /* Body/18px */
    font-family: Gilroy;
    font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
    font-style: normal;
    font-weight: 500;
    line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem); /* 155.556% */
    margin-bottom: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  }
}

:deep(.product__slider) {
  .swiper-slide {
    width: calc(100% - 120px);
    height: auto;
  }
}
</style>
