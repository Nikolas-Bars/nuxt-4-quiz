<template>
  <ContentContainer class="upcoming-games-main-rd">
    <div class="upcoming-games-main-rd__header-nav">
      <div class="upcoming-games-main-rd__header-nav__header">
        <div class="upcoming-games-main-rd__header-nav__header__title">
          Ближайшие игры
        </div>
        <Button
          height="clamp(2.25rem, 1.541rem + 1.62vw, 3rem)"
          variant="lined"
          font-size="clamp(0.7rem, 0.416rem + 0.65vw, 1rem)"
          padding="clamp(0.438rem, -0.095rem + 1.22vw, 1rem)"
          color="pink"
          >Смотреть расписание</Button
        >
      </div>
      <Tabs
        v-model="selectedBtn"
        :items="types.filter((t) => !t.img)"
        size="medium"
        padding="clamp(0.438rem, -0.095rem + 1.22vw, 1rem)"
        gap="clamp(0.5rem, 0.027rem + 1.08vw, 1rem)"
        font-size="clamp(0.625rem, 0.27rem + 0.81vw, 1rem)"
        color="purple"
        active-color="purple"
        bg-brightness="dark"
        height="clamp(2.063rem, 1.176rem + 2.03vw, 3rem)"
        :variant="'lined'"
      >
        <template #custom-tabs>
          <Button
            v-if="types.find((t) => t.img)"
            class="btn-img"
            height="clamp(2.063rem, 1.176rem + 2.03vw, 3rem)"
            variant="lined"
            color="purple"
            bg-brightness="dark"
            :class="{ 'btn-selected': selectedBtn === 7 }"
            @click="selectedBtn = 7"
          >
            <img :src="getImageBtn('potter')" alt="HarryPotter" />
          </Button>
        </template>
      </Tabs>
    </div>
    <game-cards-block-rd
      :games="gamesData"
      @hide-games="hideGames"
      @get-data="getGameData"
    />
  </ContentContainer>
</template>

<script setup>
import potter from "~/assets/img/potter-rd.png";
import GameCardsBlockRd from "~/components/local/main-page/upcoming-games/GameCardsBlockRD.vue";
import ContentContainer from "~/components/global/common-rd/content-container/ContentContainer.vue";
import Tabs from "~/components/global/common-rd/Tabs.vue";
import Button from "~/components/global/common-rd/Button.vue";

const getImageBtn = (imgName) => {
  const imgData = { potter };
  return imgData[imgName];
};
const selectedBtn = ref(1);
const types = [
  { title: "Все игры", icon: "", class: "btn-default", id: 1, img: "" },
  {
    title: "Классика",
    icon: "message-rd",
    id: 2,
    class: "btn-default",
    img: "",
  },
  {
    title: "Тематические",
    icon: "notes-rd",
    id: 3,
    class: "btn-default",
    img: "",
  },
  {
    title: "Кино и музыка",
    icon: "clapperboard-rd",
    class: "btn-default",
    img: "",
    id: 4,
  },
  {
    title: "Бинго, плиз!",
    icon: "backpack-rd",
    id: 5,
    class: "btn-default",
    img: "",
  },
  { title: "Teens!", icon: "message-rd", id: 6, class: "btn-default", img: "" },
  {
    title: "",
    id: 7,
    icon: "potter-rd",
    class: "btn-img",
    img: "potter",
  },
];

const gamesData = ref([
  {
    id: "1",
    game_number: 48,
    title: "[кино и музыка] изи",
    place: "Bolshevik Hall",
    address: "Новослободская ул., 16а",
    status: 0,
    few_places_left: false,
    level: "light",
    img: "",
  },
  {
    id: "2",
    game_number: 34,
    title: "Квиз, плиз!",
    place: "Резиденция",
    address: "Ленинградский проспект, 15с1",
    status: 0,
    few_places_left: true,
    level: "medium",
    img: "",
  },
  {
    id: "3",
    game_number: 12,
    title: "[меломания] 2000-е",
    place: "Bolshevik Hall",
    address: "Ленинградский проспект, 15с1",
    status: 1,
    few_places_left: true,
    level: "extra_hard",
    img: "",
  },
]);
const hideGames = () => {
  gamesData.value.splice(3);
};
const getGameData = () => {
  gamesData.value.push(
    ...[
      {
        id: "4",
        game_number: 48,
        title: "[кино и музыка] изи",
        place: "Bolshevik Hall",
        address: "Новослободская ул., 16а",
        status: 0,
        few_places_left: false,
        level: "light",
        img: "",
      },
      {
        id: "4",
        game_number: 34,
        title: "Квиз, плиз!",
        place: "Резиденция",
        address: "Ленинградский проспект, 15с1",
        status: 0,
        few_places_left: true,
        level: "medium",
        img: "",
      },
      {
        id: "6",
        game_number: 12,
        title: "[меломания] 2000-е",
        place: "Bolshevik Hall",
        address: "Ленинградский проспект, 15с1",
        status: 1,
        few_places_left: true,
        level: "extra_hard",
        img: "",
      },
    ]
  );
};
const statusData = ref({
  0: "Места есть",
  1: "Резерв",
  2: "Мест нет",
  4: "Игра прошла",
});
</script>

<style lang="scss">
@use "~/assets/css/vars" as v;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

/**
 * Auto height map
 */
.game__map {
  @include mq.mq($from: tablet) {
    & > * {
      height: 100%;

      & > * {
        height: 100% !important;

        & > * {
          height: 100% !important;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.upcoming-games-main-rd {
  padding: clamp(2.25rem, 1.068rem + 2.7vw, 3.5rem) 0;
  &__header-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    width: 100%;
    margin: 0 auto;
    align-self: stretch;
    max-width: clamp(40rem, 2.162rem + 86.49vw, 80rem);
    &__header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      &__title {
        color: #fff;
        font-size: clamp(1.5rem, 0.554rem + 2.16vw, 2.5rem);
        font-style: normal;
        font-weight: 600;
        line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem); /* 120% */
      }
      //&__btn {
      //  display: flex;
      //  height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
      //  padding: 12px 12px 12px clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      //  justify-content: center;
      //  align-items: center;
      //  gap: 4px;
      //  border-radius: 100px;
      //  border: 1px solid var(--qpink-600, #f60850);
      //  color: var(--qpink-600, #f60850);
      //  font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      //  font-style: normal;
      //  font-weight: 600;
      //  line-height: 24px; /* 150% */
      //}
    }
    &__nav {
      display: flex;
      align-items: center;
      gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      align-self: stretch;
      height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
      //border: 3px solid red;
      .btn-selected {
        display: flex;
        padding: clamp(0.531rem, 0.324rem + 0.47vw, 0.75rem)
          clamp(0.5rem, 0.027rem + 1.08vw, 1rem)
          clamp(0.531rem, 0.324rem + 0.47vw, 0.75rem)
          clamp(0.531rem, 0.324rem + 0.47vw, 0.75rem);
        align-items: center;
        gap: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
        border-radius: 100px;
        border: 1px solid var(--qpink-600, #f60850);
        color: var(--qpink-600, #f60850);
        font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
        font-style: normal;
        font-weight: 500;
        line-height: clamp(1rem, 0.527rem + 1.08vw, 1.5rem);
        background: none;
        transition: all 0.3s ease;
      }
      .btn-default {
        display: flex;
        cursor: pointer;
        flex-wrap: nowrap;
        padding: clamp(0.531rem, 0.324rem + 0.47vw, 0.75rem)
          clamp(0.5rem, 0.027rem + 1.08vw, 1rem)
          clamp(0.531rem, 0.324rem + 0.47vw, 0.75rem)
          clamp(0.531rem, 0.324rem + 0.47vw, 0.75rem);
        align-items: center;
        gap: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
        border-radius: 100px;
        border: 1px solid var(--neutral---gray-300, #d7d4d8);
        color: var(--neutral---gray-800, #29272a);
        font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
        font-style: normal;
        font-weight: 500;
        background: none;
        line-height: clamp(1rem, 0.527rem + 1.08vw, 1.5rem);
        transition: all 0.3s ease;
      }
      .btn-selected :deep(.nuxt-icon.nuxt-icon--fill *) {
        fill: var(--qpink-600, #f60850) !important;
        transition: fill 0.2s ease;
      }
      :deep(.nuxt-icon.nuxt-icon--fill *) {
        fill: #a69fa9 !important;
        width: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem);
        height: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem);
        margin: 0 clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem) 0 0 !important;
        transition: fill 0.1s ease;
      }
      .btn-img {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        max-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
        border-radius: 100px;
        img {
          transition: transform 0.3s ease;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          will-change: transform;
          max-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
          width: auto;
        }
        img:hover {
          transform: scale(1.1);
        }

        :deep(.nuxt-icon.nuxt-icon--fill *) {
          fill: #a69fa9 !important;
          width: 50px;
          height: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
          margin: 0 8px 0 0 !important;
        }
      }
    }
  }
}

.btn-img {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(0.313rem, 0.017rem + 0.68vw, 0.625rem);
  max-height: clamp(2.063rem, 1.176rem + 2.03vw, 3rem);
  border-radius: 100px;
  padding: 0 !important;
  img {
    transition: transform 0.3s ease;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    will-change: transform;
    max-height: clamp(2.063rem, 1.176rem + 2.03vw, 3rem);
    width: auto;
  }
  img:hover {
    transform: scale(1.1);
  }

  :deep(.nuxt-icon.nuxt-icon--fill *) {
    fill: #a69fa9 !important;
    width: 50px;
    height: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
    margin: 0 8px 0 0 !important;
  }
}
</style>
