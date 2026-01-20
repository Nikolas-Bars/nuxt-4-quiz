<template>
  <div class="hero-menu-rd">
    <!-- HOME -->
    <MenuItem
      variant="filled"
      image-width="clamp(5.031rem, 0.272rem + 10.88vw, 10.063rem)"
      image-height="clamp(3.969rem, 0.215rem + 8.58vw, 7.938rem)"
      item-height="clamp(5.063rem, 0.274rem + 10.95vw, 10.125rem)"
    >
      <template #title>Квиз, плиз! Хоум</template>
      <template #text>
        Онлайн-платформа<br />
        Квиз, плиз!
      </template>
      <template #image>
        <img src="@/assets/img/hero-home-rd.png" />
      </template>
    </MenuItem>

    <!-- SHOP -->
    <NuxtLink :to="'/shop-rd'" class="hero-link">
      <MenuItem
        variant="filled"
        image-width="clamp(6.531rem, 0.353rem + 14.12vw, 13.063rem)"
        image-height="clamp(5.156rem, 0.279rem + 11.15vw, 10.313rem)"
        item-height="clamp(5.063rem, 0.274rem + 10.95vw, 10.125rem)"
      >
        <template #title>Мерч, плиз!</template>
        <template #text>
          Мерч, сертификаты,<br />
          настолка
        </template>
        <template #image>
          <img src="@/assets/img/hero-shop-rd.png" />
        </template>
      </MenuItem>
    </NuxtLink>

    <!-- STREAM -->
    <MenuItem
      variant="outlined"
      image-width="clamp(6.281rem, 0.34rem + 13.58vw, 12.563rem)"
      image-height="clamp(4.969rem, 0.269rem + 10.74vw, 9.938rem)"
      image-position="absolute-bottom-right"
      item-height="clamp(5.063rem, 0.274rem + 10.95vw, 10.125rem)"
    >
      <template #title>Стримы</template>
      <template #text>
        Трансляции по пятницам,<br />
        субботам и воскресениям
      </template>
      <template #image>
        <img src="@/assets/img/hero-stream-rd.png" />
      </template>
    </MenuItem>
  </div>
</template>

<script setup lang="ts">
import MenuItem from "../common-rd/MenuItem.vue";
</script>
<style scoped lang="scss">
.home_shop {
  display: flex;
  gap: 24px;
  justify-content: space-between;
  width: 66%;
}

.hero-link {
  display: block;
  width: 32%;
  height: 100%;

  text-decoration: none;
  color: inherit;
}

.hero-menu-rd {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-shrink: 0;

  &__item-home {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 162px;
    padding-left: 24px;
    width: 32%;
    flex-shrink: 0;
    border-radius: 32px;
    background: radial-gradient(
        101.54% 133.47% at 91.44% 100%,
        rgba(185, 83, 235, 0.15) 0%,
        rgba(28, 6, 50, 0) 100%
      ),
      var(--qpurple---purple-900, #3d0d55);
    background-blend-mode: normal, screen, normal;
    transition: background 0.3s ease; // Добавляем плавный переход для фона

    &:hover {
      background: radial-gradient(
          101.54% 133.47% at 91.44% 100%,
          rgba(185, 83, 235, 0.31) 0%,
          rgba(28, 6, 50, 0) 100%
        ),
        var(--qpurple---purple-900, #3d0d55);
      img {
        transform: scale(1.1);
      }
    }

    &__content {
      display: flex;
      width: 223px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
    &__image {
      width: 161px;
      height: 127px;
      flex-shrink: 0;
      aspect-ratio: 161px / 127px;
      img {
        width: 100%;
        transition: transform 0.3s ease; // Переносим переход на img
      }
    }
  }
  &__item-shop {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 24px;
    width: 32%;
    height: 162px;
    flex-shrink: 0;
    //background: radial-gradient(
    //    153.13% 141.42% at 100% 100%,
    //    rgba(200, 6, 92, 0.34) 0%,
    //    rgba(28, 6, 50, 0) 100%
    //  ),
    //  var(--qpurple---purple-900, #3d0d55);
    //background-blend-mode: screen, normal, normal;

    border-radius: 32px;
    background: radial-gradient(
        153.13% 141.42% at 100% 100%,
        rgba(200, 6, 92, 0.34) 0%,
        rgba(28, 6, 50, 0) 100%
      ),
      var(--qpurple---purple-900, #3d0d55);
    transition: background 0.3s ease;
    background-blend-mode: screen, normal, normal;
    &__content {
      display: flex;
      width: 223px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
    &__image {
      width: 209px;
      height: 165px;
      flex-shrink: 0;
      aspect-ratio: 209px / 165px;
      img {
        width: 100%;
        transition: transform 0.3s ease; // Добавляем плавный переход
      }
      //&:hover {
      //  transform: scale(1.1); // Увеличиваем на 10% при наведении
      //}
    }
    &:hover {
      background: radial-gradient(
          153.13% 141.42% at 100% 100%,
          rgba(200, 6, 92, 0.68) 0%,
          rgba(28, 6, 50, 0) 100%
        ),
        var(--qpurple---purple-900, #3d0d55);
      img {
        transform: scale(1.1); // Увеличиваем на 10% при наведении
      }
    }
  }
  &__item-stream {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 24px;
    width: 32%;
    height: 162px;
    flex-shrink: 0;
    border-radius: 32px;
    border: 1px solid var(--qpurple---purple-500, #542969);
    overflow: hidden;
    position: relative; // Добавляем относительное позиционирование

    &__content {
      position: absolute; // Делаем текст абсолютно позиционированным
      //top: 36px;
      left: 24px;
      z-index: 2; // Поднимаем текст над картинкой
      display: flex;
      width: 223px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    &__image {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      width: 201px;
      height: 100%;
      display: flex;
      align-items: flex-end;
      flex-shrink: 0;
      aspect-ratio: 201px / 159px;
      img {
        width: 100%;
        transition: transform 0.3s ease; // Добавляем плавный переход
      }
    }
    &:hover {
      img {
        transform: scale(1.1); // Увеличиваем на 10% при наведении
      }
    }
  }
  &__item-title {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  &__item-text {
    color: var(--qpurple---purple-300, #cca9df);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  &__item-inside {
    //border: 2px solid red;
    white-space: nowrap;
  }
}
</style>
