<script setup lang="ts">
import Container from "~/components/global/wrappers/Container.vue";
</script>

<template>
  <Container class="certificates">
    <div class="certificates__info">
      <div class="certificates__info-title">Собери команду мечты</div>
      <div class="certificates__info-description">
        <div>
          Купи подарочный сертификат на&nbsp;игру и подари друзьям возможность
          присоединиться.
        </div>
        <div>
          Больше друзей&nbsp;=&nbsp;больше шансов подняться в&nbsp;рейтинге
        </div>
      </div>
    </div>
    <div class="certificates__cards">
      <img src="@/assets/img/shop/sert-card-people.png" />
      <img src="@/assets/img/shop/sert-card-games.png" />
      <img src="@/assets/img/shop/sert-card-stream.png" />
    </div>
  </Container>
</template>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.certificates {
  gap: 32px !important;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    &-title {
      font-size: 40px;
      font-weight: 600;

      @include mq.mq($until: smallTablet) {
        font-size: 28px;
        text-align: center;
      }
    }
    &-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      font-size: 18px;
      font-weight: 500;

      @include mq.mq($until: smallTablet) {
        font-size: 16px;
        text-align: center;
      }
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;

    @include mq.mq($until: smallTablet) {
      flex-direction: column;
      gap: 16px;
    }

    img {
      max-width: 100%;
    }
  }
}
</style>
