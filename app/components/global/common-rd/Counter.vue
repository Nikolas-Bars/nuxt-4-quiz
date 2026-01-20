<template>
  <div class="counter" :style="{ height: height }">
    <Button variant="unfilled" height="36px" @click="decreaseValue">
      <template #icon>
        <img class="counter-minus" src="@/assets/icons/minus-rd.svg" />
      </template>
    </Button>
    <div class="counter-value">{{ modelValue }}</div>
    <Button variant="unfilled" height="36px" @click="increaseValue">
      <template #icon>
        <img class="counter-plus" src="@/assets/icons/plus-rd.svg" />
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";

interface Props {
  modelValue: number;
  maxValue?: number;
  minValue?: number;
  height?: string;
}
const props = withDefaults(defineProps<Props>(), {
  height: "36px",
  maxValue: 9,
  minValue: 0,
});

const emit = defineEmits(["update:modelValue"]);

const decreaseValue = () => {
  if (props.modelValue > props.minValue) {
    emit("update:modelValue", props.modelValue - 1);
  }
};

const increaseValue = () => {
  if (props.modelValue < props.maxValue) {
    emit("update:modelValue", props.modelValue + 1);
  }
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  max-width: 128px;
  padding: 4px 6px;
  border-radius: 100px;
  background-color: #f5f4f5;
  color: #29272a;
  font-weight: 600;

  :deep(.button__slot) {
    max-height: 24px;
  }

  :deep(.button__icon) {
    max-height: 24px;
  }

  &-value {
    text-align: center;
    width: 24px;
  }
}
</style>
