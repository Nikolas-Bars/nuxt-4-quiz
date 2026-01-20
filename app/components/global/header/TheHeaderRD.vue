<template>
  <div class="main-header-rd--fixed">
    <div>
      <Container>
        <div class="main-header-rd__wrap">
          <NuxtLink to="/">
            <NuxtIcon class="main-header-rd__logo" name="logo-white" />
          </NuxtLink>
          <div class="city_local_block">
            <div class="main-header-rd__locations">
              <NuxtIcon class="main-header-rd__pin" name="pin-white-rd" />
              <p>
                {{ location.city.name }}
              </p>
            </div>
            <div class="locales-select-rd" @click="toggleDropdown">
              <NuxtIcon class="main-header-rd__pin" name="global-rd" />
              <span class="selected-locale">{{
                locale === "ru" ? "Ru" : "En"
              }}</span>
              <div v-if="isDropdownOpen" class="dropdown-menu">
                <div
                  class="dropdown-item"
                  :class="{ active: locale === 'ru' }"
                  @click="setLocale('ru')"
                >
                  Ru
                </div>
                <div
                  class="dropdown-item"
                  :class="{ active: locale === 'en' }"
                  @click="setLocale('en')"
                >
                  En
                </div>
              </div>
            </div>
          </div>

          <HeaderNavigationRD />
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLocationStore } from "~/stores/location";
import HeaderNavigationRD from "./NavigationRD.vue";
import Container from "~/components/global/wrappers/Container.vue";

const location = useLocationStore();

const { locale } = useI18n();
const isDropdownOpen = ref(false);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function setLocale(newLocale) {
  locale.value = newLocale;
  isDropdownOpen.value = false;
}

// Закрытие dropdown при клике вне его
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".locales-select-rd")) {
      isDropdownOpen.value = false;
    }
  });
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.main-header-rd {
  height: 7rem;
  z-index: 99;
  &--fixed {
    position: fixed;
    background: linear-gradient(
      180deg,
      var(--qpurple---purple-950, #33004c) 0%,
      rgba(51, 0, 76, 0) 100%
    );
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    .city_local_block {
      display: flex;
      align-items: center;
      gap: 12px;

      @include mq.mq($until: tablet) {
        gap: 8px;
      }
    }
    .locales-select-rd {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-radius: 100px;
      background: transparent;
      cursor: pointer;
      transition: background 0.3s ease;

      .selected-locale {
        color: v.$white;
        font-family: "Gilroy", sans-serif;
        font-weight: 500;
        font-size: 14px;
      }

      @include mq.mq($until: tablet) {
        padding: 8px 12px;
        gap: 6px;

        .selected-locale {
          font-size: 12px;
        }
      }

      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #33004c;
        border-radius: 8px;
        margin-top: 4px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
      }

      .dropdown-item {
        padding: 12px 16px;
        color: v.$white;
        font-family: "Gilroy", sans-serif;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.2s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        &.active {
          background: rgba(255, 255, 255, 0.2);
        }

        @include mq.mq($until: tablet) {
          padding: 8px 12px;
          font-size: 12px;
        }
      }
    }
    .locales-select-rd:hover {
      background: var(--ghost-white-8, rgba(255, 255, 255, 0.08));
    }
  }

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1440px;
    height: 80px;
    backdrop-filter: blur(0px);

    a {
      display: block;
      position: relative;
      transform: translate3d(0, 0, 0);
    }

    @include mq.mq($until: tablet) {
      height: 60px;
    }

    @include mq.mq($until: mobile) {
      height: 50px;
    }
  }

  &__locations {
    display: flex;
    padding: 12px 16px
      12px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1px solid var(--ghost-white-12, rgba(255, 255, 255, 0.12));
    gap: 4px;
    transition: background 0.3s ease;
    cursor: pointer;

    p {
      margin: 0;
      color: v.$white;
      font-family: "Gilroy", sans-serif;
      font-weight: 500;
      font-size: 14px;
    }

    @include mq.mq($until: tablet) {
      padding: 8px 12px
        8px 8px;
      gap: 2px;

      p {
        font-size: 12px;
      }
    }
  }

  &__locations:hover {
    border-radius: 100px;
    background: var(--ghost-white-8, rgba(255, 255, 255, 0.08));
  }

  &__pin {
    :deep(svg) {
      width: 20px;
      height: 20px;
      color: v.$white;
    }

    @include mq.mq($until: tablet) {
      :deep(svg) {
        width: 16px;
        height: 16px;
      }
    }
  }

  &__logo {
    width: 70px;
    height: 50px;
    display: block;
    position: relative;
    margin-right: 24px;
    z-index: 1;
    will-change: transform;

    :deep(svg) {
      margin-bottom: 0;
      width: 70px;
      height: 50px;
      font-size: 80px;
      margin-right: 16px;
      display: block;
    }

    &--white {
      :deep(svg) {
        color: v.$white;
      }
    }

    @include mq.mq($until: tablet) {
      width: 50px;
      height: 36px;
      margin-right: 16px;

      :deep(svg) {
        width: 50px;
        height: 36px;
        font-size: 58px;
        margin-right: 11px;
      }
    }
  }

  .container {
    max-width: 1440px;
    padding: 0 80px;

    @include mq.mq($until: tablet) {
      padding: 0 20px;
    }

    @include mq.mq($until: mobile) {
      padding: 0 16px;
    }
  }
  //.locales {
  //  display: flex;
  //  margin: 0 30px;
  //
  //  & select {
  //    padding: 5px;
  //    box-sizing: border-box;
  //    background-color: transparent;
  //    border: none;
  //    color: #fff;
  //    cursor: pointer;
  //  }
  //}
}
</style>
