<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      gap: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
      margin: 0 auto;
    "
  >
    <div class="upcoming-game-block">
      <div v-for="game in games" :key="game.id" class="game-card">
        <!--карточка игры-->
        <div :class="getCardClass(game)">
          <div class="game-card__image-block">
            <img src="@/assets/img/default-game-card.png" />
            <div
              v-if="game.status === 0 && game.few_places_left"
              class="game-card__few-places-badge"
            >
              <NuxtIcon name="fire-rd" />Мало мест
            </div>
            <div v-if="game.status === 1" class="game-card__reserve-badge">
              <NuxtIcon name="reserve-rd" />Резерв
            </div>
            <div class="game-card__difficulty-badge">
              <NuxtIcon :name="`game-level-${game.level}`" />
              <span>{{ difficultyTitle(game.level) }}</span>
            </div>
          </div>
          <!-- Контент карточки игры -->
          <div class="game-card__content-block">
            <div class="game-card__content-block__title">
              {{ game.title }} #{{ game.game_number }}
            </div>
            <div class="game-card__content-block__place-block">
              <div class="game-card__content-block__place-block__place">
                <NuxtIcon name="pin-white-rd" />
                <div>
                  {{ game.place }}
                  <div class="game-card__content-block__place-block__address">
                    {{ game.address }}
                  </div>
                </div>
              </div>
            </div>
            <div class="game-card__content-block__date">
              <NuxtIcon name="calendar-rd" />Сегодня, 20:00
            </div>
            <div class="game-card__content-block__btn">
              <Button
                v-if="game.status === 0"
                color="pink"
                width="clamp(5rem, 0.27rem + 10.81vw, 10rem)"
                height="clamp(1.5rem, 0.081rem + 3.24vw, 3rem)"
                font-size="clamp(0.625rem, 0.27rem + 0.81vw, 1rem)"
              >
                Записаться
              </Button>
              <Button
                v-if="game.status === 1"
                color="yellow"
                height="clamp(1.5rem, 0.081rem + 3.24vw, 3rem)"
                font-size="clamp(0.625rem, 0.27rem + 0.81vw, 1rem)"
                width="clamp(5rem, 0.27rem + 10.81vw, 10rem)"
              >
                В резерв
              </Button>
              <Button
                variant="lined"
                :color="game.status === 1 ? 'yellow' : 'pink'"
                height="clamp(1.5rem, 0.081rem + 3.24vw, 3rem)"
                width="clamp(5rem, 0.27rem + 10.81vw, 10rem)"
                font-size="clamp(0.625rem, 0.27rem + 0.81vw, 1rem)"
              >
                Подробнее
              </Button>
              <button class="game-card__content-block__btn__share">
                <NuxtIcon name="share-rd" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="show-more-btn-main">
      <hr
        :class="{
          'hr-one-left': games?.length <= 3,
          'hr-two-left': games?.length > 3,
        }"
      />
      <Button
        v-if="games?.length > 3"
        color="grey-light"
        width="175px"
        height="clamp(2.25rem, 1.541rem + 1.62vw, 3rem)"
        padding="clamp(0.438rem, -0.095rem + 1.22vw, 1rem)"
        gap="clamp(0.5rem, 0.027rem + 1.08vw, 1rem)"
        font-size="clamp(0.625rem, 0.27rem + 0.81vw, 1rem)"
        trailing-icon
        @click="hideGames"
      >
        Скрыть
        <template #icon>
          <NuxtIcon name="arrow-up-rd" />
        </template>
      </Button>
      <Button
        gap="clamp(0.5rem, 0.027rem + 1.08vw, 1rem)"
        height="clamp(2.25rem, 1.541rem + 1.62vw, 3rem)"
        font-size="clamp(0.625rem, 0.27rem + 0.81vw, 1rem)"
        padding="clamp(0.438rem, -0.095rem + 1.22vw, 1rem)"
        color="grey-light"
        width="175px"
        trailing-icon
        @click="getGames"
      >
        Показать еще
        <template #icon>
          <NuxtIcon name="arrow-down-rd" />
        </template>
      </Button>
      <hr
        :class="{
          'hr-one-right': games?.length <= 3,
          'hr-two-right': games?.length > 3,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Константы для статусов игр
import { LevelsEnum } from "@/types/level";
import Button from "~/components/global/common-rd/Button.vue";
const emit = defineEmits(["get-data", "hide-games"]);
const getGames = () => {
  emit("get-data");
};
const hideGames = () => {
  emit("hide-games");
};
const GAME_STATUS = {
  AVAILABLE: 0,
  RESERVE: 1,
} as const;

// CSS классы для карточек
const CARD_CLASSES = {
  DEFAULT: "game-card__default-card",
  FEW_PLACES: "game-card__few-places-card",
  RESERVE: "game-card__reserve-card",
} as const;

interface Game {
  id: string;
  title: string;
  place: string;
  address: string;
  game_number: number;
  status: number;
  few_places_left: boolean;
  img: string;
  level?: LevelsEnum;
}

interface Props {
  games: Game[];
}

defineProps<Props>();

/**
 * Определяет CSS класс для карточки игры на основе её статуса
 */
const getCardClass = (game: Game): string => {
  // Игра в резерве
  console.log(game.status, "game.status");
  if (game.status === GAME_STATUS.RESERVE) {
    return CARD_CLASSES.RESERVE;
  }

  // Доступная игра с малым количеством мест
  if (game.status === GAME_STATUS.AVAILABLE && game.few_places_left) {
    return CARD_CLASSES.FEW_PLACES;
  }

  // Обычная доступная игра или неизвестный статус
  return CARD_CLASSES.DEFAULT;
};

// Короткие подписи для бейджа сложности на карточке
const DIFFICULTY_TITLES_SHORT: Record<LevelsEnum, string> = {
  [LevelsEnum.Child]: "Для детей",
  [LevelsEnum.Easy]: "Легко",
  [LevelsEnum.Medium]: "Нормально",
  [LevelsEnum.Hard]: "Посложнее",
  [LevelsEnum.ExtraHard]: "Ненормально",
};

const difficultyTitle = (level?: LevelsEnum): string => {
  return level ? DIFFICULTY_TITLES_SHORT[level] || "" : "";
};
</script>
<style lang="scss" scoped>
.upcoming-game-block {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
  align-self: stretch;
  .game-card {
    flex: 0 1 calc((100% - clamp(1rem, 0.054rem + 2.16vw, 2rem)) / 3);
    min-width: 0;
    max-width: clamp(13rem, 0.703rem + 28.11vw, 26rem);
    &__default-card {
      display: flex;
      padding-bottom: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      width: 100%;
      max-width: clamp(13rem, 0.703rem + 28.11vw, 26rem);
      flex-direction: column;
      align-items: flex-start;
      gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      border-radius: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      border: 1px solid var(--neutral---gray-200, #e6e4e7);
      background: var(--white, #fff);
    }
    &__few-places-card {
      display: flex;
      width: 100%;
      max-width: clamp(13rem, 0.703rem + 28.11vw, 26rem);
      padding-bottom: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      flex-direction: column;
      align-items: flex-start;
      gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      border-radius: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      border: 1px solid var(--qpink-600, #f60850);
      background: var(--white, #fff);
    }
    &__reserve-card {
      display: flex;
      padding-bottom: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      width: 100%;
      max-width: clamp(13rem, 0.703rem + 28.11vw, 26rem);
      flex-direction: column;
      align-items: flex-start;
      gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      border-radius: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      border: 1px solid var(--yellow-600, #ce9e00);
      background: var(--white, #fff);
    }
    &__image-block {
      //width: clamp(200px, -0.27rem + 29.19vw, clamp(13rem, 0.703rem + 28.11vw, 26rem));
      height: clamp(7rem, 0.378rem + 15.14vw, 14rem);
      opacity: 1;
      overflow: hidden;
      border-radius: clamp(1rem, 0.054rem + 2.16vw, 2rem)
        clamp(1rem, 0.054rem + 2.16vw, 2rem) 0 0;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }
    }
    &__few-places-badge {
      position: absolute;
      max-width: 6.938rem;
      max-height: 2.25rem;
      top: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
      left: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
      border-radius: 100px;
      gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
      opacity: 1;
      padding: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
      display: flex;
      background-color: white;
      color: #29272a;
      z-index: 2;
      font-weight: 700;
      font-size: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem); // 30%
      line-height: clamp(0.875rem, 0.52rem + 0.81vw, 1.25rem); // 30%
      letter-spacing: 0;
      :deep(.nuxt-icon) {
        svg {
          width: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem); // 30%
          height: clamp(0.719rem, 0.423rem + 0.68vw, 1.031rem); // 30%
          color: #ff6900;
        }
      }
    }
    &__reserve-badge {
      position: absolute;
      max-width: 5.375rem;
      max-height: 2.25rem;
      top: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
      left: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
      border-radius: 100px;
      gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
      opacity: 1;
      background-color: #efca03;
      padding: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
      font-weight: 700;
      font-size: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem); // 30%
      line-height: clamp(0.875rem, 0.52rem + 0.81vw, 1.25rem); // 30%
      letter-spacing: 0;
      color: #432505;
      :deep(.nuxt-icon) {
        svg {
          width: clamp(0.719rem, 0.423rem + 0.68vw, 1.031rem); // 30%
          height: clamp(0.719rem, 0.423rem + 0.68vw, 1.031rem); // 30%
          color: #734810;
        }
      }
    }
    &__difficulty-badge {
      display: flex;
      position: absolute;
      width: 100%;
      height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem);
      bottom: 0;
      padding: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem)
        clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
      opacity: 1;
      font-weight: 500;
      font-size: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
      line-height: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      letter-spacing: 0;

      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
      :deep(.nuxt-icon) {
        svg {
          width: clamp(1rem, 0.054rem + 2.16vw, 2rem);
          height: clamp(0.344rem, 0.019rem + 0.74vw, 0.688rem);
          color: white;
        }
      }
      :deep(.nuxt-icon.nuxt-icon--fill *) {
        fill: revert-layer !important;
      }
    }
    &__content-block {
      width: 100%;
      min-height: clamp(5.75rem, 0.311rem + 12.43vw, 11.5rem);
      padding: 0 clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      gap: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
      opacity: 1;
      display: flex;
      flex-direction: column;
      &__title {
        font-weight: 600;
        font-size: clamp(0.875rem, 0.52rem + 0.81vw, 1.25rem);
        line-height: clamp(1.188rem, 0.655rem + 1.22vw, 1.75rem);
        letter-spacing: 0;
        color: #29272a;
      }
      &__place-block {
        display: flex;
        flex-direction: column;
        gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
        opacity: 1;
        &__place {
          display: flex;
          justify-content: flex-start;
          gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
          font-weight: 700;
          font-size: clamp(0.75rem, 0.514rem + 0.54vw, 1rem); // 30%
          line-height: clamp(1.063rem, 0.649rem + 0.95vw, 1.5rem); // 30%
          letter-spacing: 0;
          color: #29272a;
          :deep(.nuxt-icon) {
            svg {
              height: clamp(0.766rem, 0.455rem + 0.71vw, 1.094rem);
              color: #a69fa9;
            }
          }
        }
        &__address {
          font-weight: 500;
          font-size: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem);
          line-height: clamp(0.875rem, 0.52rem + 0.81vw, 1.25rem);
          letter-spacing: 0;
          color: #59525c;
        }
      }
      &__date {
        display: flex;
        gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
        font-weight: 700;
        font-size: clamp(0.75rem, 0.514rem + 0.54vw, 1rem); // 30%
        line-height: clamp(1.063rem, 0.649rem + 0.95vw, 1.5rem); // 30%
        letter-spacing: 0;
        color: #29272a;
        :deep(.nuxt-icon) {
          svg {
            margin-bottom: 4px;
            width: clamp(0.725rem, 0.429rem + 0.68vw, 1.038rem);
            height: clamp(0.739rem, 0.44rem + 0.69vw, 1.056rem);
            color: #a69fa9;
          }
        }
      }
      &__btn {
        display: flex;
        max-width: clamp(12rem, 0.649rem + 25.95vw, 24rem);
        max-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
        gap: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
        opacity: 1;

        &__sign-up {
          cursor: pointer;
          width: clamp(5rem, 0.27rem + 10.81vw, 10rem);
          height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
          border-radius: 100px;
          border: none;
          color: #ffffff;
          gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
          opacity: 1;
          padding: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
          background-color: #f60850;
          font-weight: 600;
          font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
          line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
          letter-spacing: 0;
        }
        &__reserve {
          width: clamp(5rem, 0.27rem + 10.81vw, 10rem);
          cursor: pointer;
          background-color: #efca03;
          height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
          border-radius: 100px;
          border: none;
          gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
          opacity: 1;
          padding: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
          font-weight: 600;
          font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
          line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
          letter-spacing: 0;
          color: #432505;
        }
        &__more {
          cursor: pointer;
          width: clamp(5rem, 0.27rem + 10.81vw, 10rem);
          height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
          border-radius: 100px;
          gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
          opacity: 1;
          padding: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
          border: 1px solid #f60850;
          font-weight: 600;
          font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
          line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
          letter-spacing: 0;
          background-color: white;
        }
        &__share {
          cursor: pointer;
          width: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
          // height: 100%;
          border: none;
          gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
          opacity: 1;
          // padding: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
          color: #29272a;
          background-color: white;
          :deep(.nuxt-icon) {
            svg {
              width: clamp(0.438rem, 0.024rem + 0.95vw, 0.875rem);
              height: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
            }
          }
        }
      }
    }
  }
}
.show-more-btn-main {
  display: flex;
  align-items: center;
  gap: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
  .hr-one-left {
    width: 42%;
    border-top: #d7d4d8 solid 1px;
    margin-right: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
  }
  .hr-one-right {
    width: 42%;
    border-top: #d7d4d8 solid 1px;
    margin-left: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
  }
  .hr-two-left {
    width: 38%;
    margin-right: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
    border-top: #d7d4d8 solid 1px;
  }
  .hr-two-right {
    width: 38%;
    margin-left: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
    border-top: #d7d4d8 solid 1px;
  }
  .show-less-btn {
    display: flex;
    width: clamp(5.063rem, 0.274rem + 10.95vw, 10.125rem);
    height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
    padding: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem)
      clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem)
      clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem)
      clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    justify-content: center;
    align-items: center;
    gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
    border-radius: 100px;
    background: #f5f4f5;
    color: #29272a;
    font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    font-style: normal;
    font-weight: 600;
    line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem); /* 150% */
    :deep(.nuxt-icon) {
      svg {
        width: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
        height: clamp(0.188rem, 0.01rem + 0.41vw, 0.375rem);
        color: #29272a;
      }
    }
  }
  .show-more-btn {
    cursor: pointer;
    display: flex;
    width: clamp(5.5rem, 0.297rem + 11.89vw, 11rem);
    height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem);
    padding: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem)
      clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem)
      clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem)
      clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    justify-content: center;
    align-items: center;
    gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
    border-radius: 100px;
    background: #f5f4f5;
    margin: 0 auto;
    border: none;
    color: var(--neutral---gray-800, #29272a);
    font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
    font-style: normal;
    font-weight: 600;
    line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem); /* 150% */
    :deep(.nuxt-icon) {
      svg {
        width: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
        height: clamp(0.188rem, 0.01rem + 0.41vw, 0.375rem);
        color: #29272a;
      }
    }
  }
}
</style>
