<template>
  <div class="game-type-item">
    <div class="type-item-img"><img :src="props.image" alt="" /></div>
    <div class="type-item-description">{{ props.description }}</div>
    <div class="type-item-btn">
      <Button
        font-size="clamp(0.688rem, 0.392rem + 0.68vw, 1rem)"
        padding="clamp(0.688rem, 0.392rem + 0.68vw, 1rem)"
        height="clamp(1.75rem, 1.041rem + 1.62vw, 2.5rem)"
        width="clamp(9.1rem, 5.411rem + 8.43vw, 13rem)"
        color="purple"
        trailing-icon
      >
        Подробнее
        <template #icon>
          <NuxtIcon name="arrow-right-rd" />
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/global/common-rd/Button.vue";

const props = withDefaults(
  defineProps<{
    image: string;
    description: string;
  }>(),
  {
    image: "",
    description: "",
  }
);
</script>

<style scoped lang="scss">
//1440 - 700 - 30%
.game-type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  width: clamp(10.5rem, 6.243rem + 9.73vw, 15rem);
  height: clamp(10.5rem, 6.243rem + 9.73vw, 15rem);
  background-color: rgba(69, 3, 102, 1);
  border-radius: clamp(0.688rem, 0.392rem + 0.68vw, 1rem);
  padding: clamp(1.05rem, 0.624rem + 0.97vw, 1.5rem)
    clamp(0.688rem, 0.392rem + 0.68vw, 1rem)
    clamp(0.688rem, 0.392rem + 0.68vw, 1rem)
    clamp(0.688rem, 0.392rem + 0.68vw, 1rem);
  .type-item-img {
    width: clamp(7.175rem, 4.266rem + 6.65vw, 10.25rem);
    img {
      max-width: 100%;
    }
  }
  .type-item-description {
    font-weight: 500;
    font-size: clamp(0.625rem, 0.389rem + 0.54vw, 0.875rem);
    line-height: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem);
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
<style lang="scss">
.type-item-btn {
  .nuxt-icon svg {
    fill: none !important;
  }

  .nuxt-icon svg path {
    fill: none !important;
    stroke: currentColor !important;
  }
}
</style>
