export default function useSliderControls() {
  const swiper = ref(null);
  const swiperIsEnd = ref(false);
  const swiperIsBeginning = ref(true);

  function onSwiper(swiperInstance) {
    swiper.value = swiperInstance;

    // подписка на событие
    swiperInstance.on("slideChange", () => {
      swiperIsEnd.value = swiperInstance.isEnd;
      swiperIsBeginning.value = swiperInstance.isBeginning;
    });
  }

  function onSwiperEnd() {
    swiperIsEnd.value = true;
  }

  function onSlideChange() {
    swiperIsEnd.value = swiper.value.isEnd;
    swiperIsBeginning.value = swiper.value.isBeginning;
  }

  function swipeNext() {
    swiper.value.slideNext();
  }

  function swipePrev() {
    swiper.value.slidePrev();
  }

  return {
    swiper,
    swiperIsEnd,
    swiperIsBeginning,
    onSwiperEnd,
    onSwiper,
    onSlideChange,
    swipeNext,
    swipePrev,
  };
}
