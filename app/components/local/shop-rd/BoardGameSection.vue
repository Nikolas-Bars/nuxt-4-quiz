<script setup lang="ts">
import Button from "~/components/global/common-rd/Button.vue";
</script>

<template>
  <div class="board-game">
    <div class="board-game__info">
      <div class="board-game__info-title">
        Настольная игра&nbsp;[КВИЗ,&nbsp;ПЛИЗ!]&nbsp;2.0
      </div>
      <div class="board-game__info-description">
        Играйте один&nbsp;на&nbsp;один, или&nbsp;большой компанией дома,
        в&nbsp;гостях и вообще где&nbsp;хотите
      </div>
    </div>
    <div class="board-game__actions">
      <Button color="pink">Заказать</Button>
      <div class="board-game__actions-price">2990 ₽</div>
    </div>
    <div class="board-game__image">
      <img src="@/assets/img/shop/board-game-shop.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.board-game {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1440px;
  height: 496px;
  padding: 56px 80px;
  border-radius: 56px;
  background: radial-gradient(
      153% 141% at 100% 100%,
      rgba(200, 6, 92, 0.34) 0%,
      rgba(28, 6, 50, 0) 100%
    ),
    var(--qpurple---purple-900, #3d0d55);

  @include mq.mq($until: smallTablet) {
    margin-bottom: 48px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;

    max-width: 560px;
    z-index: 2;

    &-title {
      font-size: 48px;
      font-weight: 600;
    }

    &-description {
      font-size: 24px;
      font-weight: 500;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 24px;

    font-size: 18px;
    font-weight: 600;
    z-index: 2;
  }

  &__image {
    position: absolute;
    bottom: -48px;
    right: 48px;
    z-index: 1;

    @include mq.mq($until: smallTablet) {
      display: none;
    }
  }
}
</style>
