<template>
  <div class="shop">
    <Container class="container">
      <div class="shop__top">
        <SliderHeroRD />
        <div class="shop__info">
          <div class="shop__info-title">Магазин. Shop. Boutique</div>
          <div class="shop__info-description">
            Прямо здесь можно затариться всякими классными вещами: сертами на
            игры, стильными шмотками, игрушками и разными полезными штуками
          </div>
        </div>
      </div>
      <div class="shop__bottom">
        <MenuItems />
      </div>
    </Container>
    <ProductsSection />
    <BoardGameSection />
    <CertificatesSection />
    <ShopingCart />
  </div>
</template>

<script setup>
import MenuItems from "~/components/local/shop-rd/MenuItems.vue";
import Container from "~/components/global/wrappers/Container.vue";
import ProductsSection from "~/components/local/shop-rd/ProductsSection.vue";
import CertificatesSection from "~/components/local/shop-rd/CertificatesSection.vue";
import BoardGameSection from "~/components/local/shop-rd/BoardGameSection.vue";
import SliderHeroRD from "~/components/global/hero-rd/SliderHeroRD.vue";
import ShopingCart from "~/components/local/shop-rd/ShopingCart.vue";

definePageMeta({
  layout: "layout-rd",
});
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.container {
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.shop {
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;

  @include mq.mq($until: smallTablet) {
    gap: 8px;
  }

  &__top {
    display: flex;
    gap: 24px;
  }

  &__info {
    position: relative;
    width: 100%;
    background: radial-gradient(
        circle at 100% 100%,
        rgba(200, 6, 92, 0.82) 0%,
        rgba(28, 6, 50, 0) 70%
      ),
      var(--qpurple---purple-900, #3d0d55);
    border-radius: 40px;
    padding: 32px 24px;
    overflow: hidden;

    @include mq.mq($until: smallTablet) {
      display: none;
    }

    &-title {
      font-size: 32px;
      font-weight: 600;
    }

    &-description {
      @include t.body-16;
      margin-top: 8px;
      font-weight: 500;
    }

    &-image {
      position: relative;
      z-index: 1;
      width: 209px;
      height: 165px;
      flex-shrink: 0;
      aspect-ratio: 209 / 165;
      position: absolute;
      bottom: 0;
      right: 0;

      :deep(img) {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
.slider-hero-rd {
  height: 424px;
}
</style>
