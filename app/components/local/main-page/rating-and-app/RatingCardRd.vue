<template>
  <div class="rating-card-main">
    <div class="rating-card-main__description">
      <div class="rating-card-main__description__header">
        Играй, чтобы побеждать!
      </div>
      <div class="rating-card-main__description__text">
        Зарабатывай очки, поднимайся в рейтинге<br />
        и веди команду к победе.
      </div>
    </div>
    <Tabs
      v-model="selectedType"
      :items="tabItems"
      variant="lined"
      color="grey"
      active-color="yellow"
      bg-brightness="dark"
      size="small"
      padding="clamp(0.313rem, -0.338rem + 1.49vw, 1rem)"
      gap="clamp(0.25rem, -0.459rem + 1.62vw, 1rem)"
      gap-slot="clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem)"
      font-size="clamp(0.5rem, 0.027rem + 1.08vw, 1rem)"
      height="clamp(2.063rem, 1.176rem + 2.03vw, 3rem)"
    />
    <div class="rating-card-main__data">
      <div class="rating-card-main__data__content">
        <div class="rating-card-main__data__content__image">
          <img src="@/assets/img/hero/norris-rating-rd.png" />
        </div>
        <div class="rating-card-main__data__content__title">Чак Норрис</div>
        <div class="rating-card-main__data__content__description">
          За 2000 - вам присваивается нереальная<br />
          уважуха и ранг Чак Норрис
        </div>
      </div>
      <div class="rating-card-main__data__scroll">
        <input
          ref="rangeInput"
          v-model="rangeValue"
          type="range"
          :min="rangeData.min"
          :max="rangeData.max"
          step="1"
          class="rating-slider"
          :style="{ '--value': rangeValue }"
          @mousemove="handleMouseMove"
          @mouseleave="hideTooltip"
          @input="updateTooltipPosition"
        />
        <div v-if="showTooltip" class="range-tooltip" :style="tooltipStyle">
          200
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import Tabs from "~/components/global/common-rd/Tabs.vue";

const rangeValue = ref(3);
const rangeInput = ref<HTMLInputElement | null>(null);
const showTooltip = ref(false);
const tooltipPosition = ref({ x: 0, y: 0 });

const selectedType = ref("classic");

const tabItems = [
  { id: "classic", title: "Классика", icon: "clapperboard-rd" },
  { id: "stream", title: "Стримы", icon: "clapperboard-rd" },
  { id: "theme", title: "Тематика", icon: "clapperboard-rd" },
  { id: "movies", title: "Кино и музыка", icon: "clapperboard-rd" },
];

const ChangeSelectedType = (type: string) => {
  selectedType.value = type;
};
const rangeData = reactive({
  min: 0,
  max: 6,
});
const tooltipStyle = computed(() => ({
  left: `${tooltipPosition.value.x}px`,
  top: `${tooltipPosition.value.y}px`,
}));

const handleMouseMove = (event: MouseEvent) => {
  if (!rangeInput.value) return;

  const input = rangeInput.value;
  const rect = input.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;

  // Вычисляем позицию thumb
  const percentage =
    (Number(rangeValue.value) - Number(input.min)) /
    (Number(input.max) - Number(input.min));
  // Центрируем по реальному центру ползунка: учитываем ширину thumb (24px)
  const thumbWidth = 24;
  const trackUsableWidth = rect.width - thumbWidth; // ширина дорожки без половинок по краям
  const thumbPosition = percentage * trackUsableWidth + thumbWidth / 2;

  // Проверяем, находится ли курсор над thumb (с погрешностью ±12px)
  const thumbRadius = 12;
  const isOverThumb = Math.abs(mouseX - thumbPosition) <= thumbRadius;

  showTooltip.value = isOverThumb;

  if (isOverThumb) {
    tooltipPosition.value = {
      x: rect.left + thumbPosition,
      y: rect.top - 65,
    };
  }
};

const updateTooltipPosition = () => {
  if (!rangeInput.value || !showTooltip.value) return;

  const input = rangeInput.value;
  const rect = input.getBoundingClientRect();

  // Вычисляем позицию thumb
  const percentage =
    (Number(rangeValue.value) - Number(input.min)) /
    (Number(input.max) - Number(input.min));
  const thumbWidth = 24;
  const trackUsableWidth = rect.width - thumbWidth;
  const thumbPosition = percentage * trackUsableWidth + thumbWidth / 2;

  tooltipPosition.value = {
    x: rect.left + thumbPosition,
    y: rect.top - 45,
  };
};

const hideTooltip = () => {
  showTooltip.value = false;
};
</script>

<style scoped lang="scss">
@use "~/assets/css/vars" as v;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);
.rating-card-main {
  display: flex;
  padding: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem)
    clamp(1rem, 0.054rem + 2.16vw, 2rem);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(1rem, 0.054rem + 2.16vw, 2rem);
  flex: 1 0 0;
  border-radius: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
  max-width: clamp(19.5rem, 1.054rem + 42.16vw, 39rem);
  width: auto;
  max-height: clamp(19.75rem, 1.068rem + 42.7vw, 39.5rem);
  background: #3d0d55;
  //@include mq.mq($until: 900px) {
  //  width: auto;
  //}
  &__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
    align-self: stretch;
    &__header {
      color: #fff;
      font-size: clamp(1.25rem, 0.068rem + 2.7vw, 2.5rem);
      font-style: normal;
      font-weight: 600;
      line-height: clamp(1.5rem, 0.081rem + 3.24vw, 3rem); /* 120% */
    }
    &__text {
      color: #fff;
      font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
      font-style: normal;
      font-weight: 500;
      line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem); /* 155.556% */
    }
  }
  &__menu {
    display: flex;
    align-items: flex-start;
    gap: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
    align-self: stretch;
    &__item {
      cursor: pointer;
      border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
      border: 1px solid #542969;
      background: none;
      display: flex;
      padding: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem)
        clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
      align-items: center;
      gap: clamp(0.125rem, 0.007rem + 0.27vw, 0.25rem);
      color: #fff;
      font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
      font-style: normal;
      font-weight: 500;
      line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem); /* 155.556% */
      &__selected-item {
        border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
        border: 1px solid #efca03;
        color: #efca03;
        font-size: clamp(0.563rem, 0.03rem + 1.22vw, 1.125rem);
        font-style: normal;
        font-weight: 500;
        line-height: clamp(0.875rem, 0.047rem + 1.89vw, 1.75rem); /* 155.556% */
      }
    }
  }
  &__data {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
      border-radius: 50%;
      &__image {
        width: clamp(5.75rem, 0.311rem + 12.43vw, 11.5rem);
        height: clamp(5.75rem, 0.311rem + 12.43vw, 11.5rem);
        flex-shrink: 0;
        border-radius: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
      &__title {
        color: #fff;
        text-align: center;
        font-size: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
        font-style: normal;
        font-weight: 600;
        line-height: clamp(1rem, 0.054rem + 2.16vw, 2rem); /* 133.333% */
      }
      &__description {
        color: #cca9df;
        text-align: center;
        font-size: clamp(0.5rem, 0.027rem + 1.08vw, 1rem);
        font-style: normal;
        font-weight: 500;
        line-height: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem); /* 150% */
      }
    }
    &__scroll {
      width: clamp(15.25rem, 0.883rem + 32.84vw, 30.438rem);
      margin-top: clamp(1rem, 0.054rem + 2.16vw, 2rem);
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
      .rating-slider {
        --track-h: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
        --thumb-s: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
        -webkit-appearance: none;
        appearance: none;
        width: clamp(15.25rem, 0.883rem + 32.84vw, 30.438rem);
        height: var(--track-h);
        border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
        background: #542969;
        outline: none;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: var(--track-h);
          width: calc(var(--value) * 100% / 6);
          border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
          pointer-events: none;
          box-shadow: 0 0 clamp(0.813rem, -0.015rem + 1.89vw, 1.688rem) 0
            rgba(239, 202, 3, 0.8);
        }

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: var(--thumb-s);
          height: var(--thumb-s);
          border-radius: 50%;
          /* Keep thumb vertically centered regardless of responsive sizes */
          margin-top: calc((var(--track-h) - var(--thumb-s)) / 2);
          background: linear-gradient(180deg, #ffd147 0%, #ff9c47 100%);
          cursor: pointer;
          box-shadow: 0 0 clamp(0.813rem, -0.015rem + 1.89vw, 1.688rem) 0
            rgba(239, 202, 3, 0.3);
        }
        &::-webkit-slider-runnable-track {
          width: 100%;
          height: var(--track-h);
          border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
          background: linear-gradient(
            to right,
            #ffd147 0%,
            #ff9c47 calc(var(--value) * 100% / 6),
            #542969 calc(var(--value) * 100% / 6),
            #542969 100%
          );
        }

        /* Firefox */
        &::-moz-range-track {
          height: var(--track-h);
          border-radius: clamp(3.125rem, 0.169rem + 6.76vw, 6.25rem);
          background: #542969;
        }

        &::-moz-range-thumb {
          width: var(--thumb-s);
          height: var(--thumb-s);
          border: none;
          border-radius: 50%;
          background: linear-gradient(180deg, #ffd147 0%, #ff9c47 100%);
          cursor: pointer;
          box-shadow: 0 0 clamp(0.813rem, -0.015rem + 1.89vw, 1.688rem) 0
            rgba(239, 202, 3, 0.3);
        }
      }

      .rating-labels {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        width: clamp(16.063rem, 0.868rem + 34.73vw, 32.125rem);
        div {
          color: #cca9df;
          text-align: center;
          font-size: clamp(0.438rem, 0.024rem + 0.95vw, 0.875rem);
          font-style: normal;
          font-weight: 500;
          line-height: clamp(0.625rem, 0.034rem + 1.35vw, 1.25rem);
          //justify-self: center;
          &:last-child {
            transform: translateX(-4px);
          }
        }
        .selected-value {
          color: #fff;
        }
      }
    }
  }
}

.range-tooltip {
  position: fixed;
  transform: translate(-50%, 0);
  padding: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem)
    clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
  border-radius: clamp(0.25rem, 0.014rem + 0.54vw, 0.5rem);
  background: #542969;
  pointer-events: none;
  white-space: nowrap;
  z-index: 1000;
  color: #fff;
  text-align: center;
  font-size: clamp(0.75rem, 0.041rem + 1.62vw, 1.5rem);
  font-style: normal;
  font-weight: 600;
  line-height: clamp(1rem, 0.054rem + 2.16vw, 2rem); /* 133.333% */

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #542969;
  }
}
</style>
