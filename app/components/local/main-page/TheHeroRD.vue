<template>
  <div class="hero-rd-main">
    <Container class="hero-container">
      <div class="hero-section-rd">
        <SliderHeroRD />
        <ScheduleBlockRD />
      </div>
      <MenuItems />
    </Container>
    <TheUpcomingGamesRD />
    <AboutGamesSectionRd />
    <RatingAndApp />
    <StreamHeroSection />
    <Questions />
    <CorpHero />
    <FranchiseHeroBlock />
  </div>
</template>

<script setup>
import MenuItems from "~/components/global/hero-rd/MenuItems.vue";
import Container from "~/components/global/wrappers/Container.vue";
import SliderHeroRD from "~/components/global/hero-rd/SliderHeroRD.vue";
import ScheduleBlockRD from "~/components/global/hero-rd/ScheduleBlockRD.vue";
import TheUpcomingGamesRD from "~/components/local/main-page/upcoming-games/TheUpcomingGamesRD.vue";
import AboutGamesSectionRd from "~/components/local/main-page/about-game-section/AboutGamesSectionRD.vue";
import RatingAndApp from "~/components/local/main-page/rating-and-app/RatingAndApp.vue";
import StreamHeroSection from "~/components/local/main-page/stream-hero-section/StreamHeroSection.vue";
import Questions from "~/components/global/questions-block/Questions.vue";
import CorpHero from "~/components/global/corp-hero-rd/CorpHero.vue";
import FranchiseHeroBlock from "~/components/global/franchiseHero/FranchiseHeroBlock.vue";

// Метод форматирования
// const formatPhoneNumber = (phoneNumber) => {
//   if (phoneNumber?.startsWith("+7") && phoneNumber?.length === 12) {
//     return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)}
//     ${phoneNumber.slice(5, 8)}
//     -${phoneNumber.slice(8, 10)}
//     -${phoneNumber.slice(10, 12)}`;
//   }
//   return phoneNumber;
// };
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.hero-rd-main {
  //width: 100%;
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;
}
.hero-container {
  display: flex;
  gap: 24px;
  flex-direction: column;
}
.hero-section-rd {
  display: flex;
  align-self: stretch;
  width: auto;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: nowrap;
}
</style>
