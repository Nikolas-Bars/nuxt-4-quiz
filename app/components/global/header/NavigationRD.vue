<template>
  <div class="navigation-rd">
    <nav class="navigation-rd__nav">
      <ul class="navigation-rd__list">
        <li class="navigation-rd__item">
          <Button
            variant="unfilled"
            color="black-white"
            bg-brightness="dark"
            to="/corp"
          >
            {{ t("navigation.corporates", { name: "vue-i18n" }) }}
          </Button>
          <Button
            variant="unfilled"
            color="black-white"
            bg-brightness="dark"
            to="https://franch.quizplease.com"
            target="_blank"
          >
            {{ t("navigation.franchise", { name: "vue-i18n" }) }}
          </Button>
          <Button color="pink" to="/schedule">
            {{ t("navigation.schedule", { name: "vue-i18n" }) }}
          </Button>
        </li>
      </ul>
    </nav>
    <transition name="slide-right">
      <div v-if="isMobileMenuOpen" class="navigation__mobile">
        <div>
          <span>Меню</span>
        </div>
        <hr />
        <ul class="navigation__list">
          <li
            v-for="(navItem, index) in mainNav"
            :key="index"
            class="navigation__item"
          >
            <NuxtLink
              v-if="navItem.isNuxtLink"
              :to="navItem.path"
              class="navigation__link"
              @click="toggleMobileMenu"
              >{{ t(navItem.titleLocal, { name: "vue-i18n" }) }}
            </NuxtLink>
            <a
              v-else
              :href="navItem.path"
              class="navigation__link"
              target="_blank"
              >{{ t(navItem.titleLocal, { name: "vue-i18n" }) }}</a
            >
          </li>
        </ul>
      </div>
    </transition>
    <NuxtIcon
      class="navigation-rd__burger"
      name="hamburger-rd"
      @click="toggleMobileMenu"
    />
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="navigation__overlay"
        @click="isMobileMenuOpen = false"
      ></div>
    </transition>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import Button from "../common-rd/Button.vue";

const { t } = useI18n();

defineProps({
  isScrolled: { type: Boolean, default: false },
  isScheduleRed: { type: Boolean, default: true },
  isStreamPage: { type: Boolean, default: false },
  isLegendPage: { type: Boolean, default: false },
});

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
const mainNav = [
  {
    title: "Расписание",
    titleLocal: "navigation.schedule",
    path: "/schedule",
    isNuxtLink: true,
  },
  {
    title: "Рейтинг команд",
    titleLocal: "navigation.rating",
    path: "/rating",
    isNuxtLink: true,
  },
  {
    title: "Стримы",
    titleLocal: "navigation.streams",
    path: "/stream-page",
    isNuxtLink: true,
  },
  {
    title: "Игры хоум",
    titleLocal: "navigation.games",
    path: "/home-games",
    isNuxtLink: true,
  },
  {
    title: "Корпоративы",
    titleLocal: "navigation.corporates",
    path: "/corp",
    isNuxtLink: true,
  },
  {
    title: "Магазин",
    titleLocal: "navigation.shop",
    path: "/shop",
    isNuxtLink: true,
  },
  {
    title: "Франшиза",
    titleLocal: "navigation.franchise",
    path: "https://franch.quizplease.com",
    isNuxtLink: false,
  },
  {
    title: "Стать автором",
    titleLocal: "navigation.author",
    path: "https://content.quizplease.ru",
    isNuxtLink: false,
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.navigation-rd {
  width: 100%;
  display: flex;
  justify-content: flex-end;

  li {
    display: flex;
    gap: 16px;
    align-items: center;

    @include mq.mq($until: bigTablet) {
      gap: 12px;
    }
  }
  &__burger {
    :deep(svg) {
      color: v.$white;
      font-size: 21px;
    }

    display: none;
    cursor: pointer;
    padding: 12px;
    border-radius: 8px;
    transition: background 0.3s ease;
    z-index: 3;
    position: relative;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    &--pink {
      :deep(svg) {
        color: v.$pink-very-dark;
      }
    }

    &--white {
      :deep(svg) {
        color: v.$white;
      }
    }

    @include mq.mq($until: tablet) {
      display: block;
    }
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 18px;
    font-family: "Gilroy", sans-serif;
    font-weight: 500;

    @include mq.mq($until: bigTablet) {
      gap: 13px;
    }
  }

  &__link {
    @include t.body-16;
    display: flex;
    align-items: center;
    padding: 6px 0;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: v.$white;
    text-align: center;
    height: 100%;
    font-size: 16px;

    &--dark {
      color: v.$black-light;
    }

    &--white {
      color: v.$white;
    }

    &.router-link-active {
      border-color: rgba(v.$white, 0.3);
    }

    &:hover {
      opacity: 0.75;
    }

    @include mq.mq($until: bigTablet) {
      font-size: 14px;
      padding: 5px 0;
    }
  }
  .schedule-red {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 100px;
    background: var(--qpink-600, #f60850);
    transition: background 0.3s ease, opacity 0.3s ease;
    font-size: 16px;

    &:hover {
      background: var(--qpink-700, #d10642);
      opacity: 0.9;
    }

    @include mq.mq($until: bigTablet) {
      padding: 8px 12px;
      gap: 2px;
      font-size: 14px;
    }
  }

  @include mq.mq($until: tablet) {
    &__list {
      display: none;
    }
  }
}

// Мобильное меню
.navigation__mobile {
  position: fixed;
  top: 0;
  right: -16px;
  width: 350px;
  height: 100vh;
  background: linear-gradient(
    180deg,
    var(--qpurple---purple-950, #33004c) 0%,
    rgba(51, 0, 76, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  z-index: 40;
  padding: 120px 40px 60px;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  .navigation__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 32px;
    padding: 0;
    margin: 0;
  }

  .navigation__item {
    width: 100%;
  }

  .navigation__link {
    display: block;
    width: 100%;
    padding: 16px 0;
    color: v.$white;
    text-decoration: none;
    font-family: "Gilroy", sans-serif;
    font-weight: 500;
    font-size: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:hover {
      color: v.$yellow;
      border-bottom-color: rgba(255, 228, 0, 0.3);
      padding-left: 8px;
    }
  }
}

// Оверлей для закрытия меню
.navigation__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  backdrop-filter: blur(2px);
}

// Анимация появления справа
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

// Анимация для оверлея
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
