<script setup lang="ts">
import { useAttrs } from "vue";

const props = defineProps<{
  error?: boolean;
  required?: boolean;
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const attrs = useAttrs();

const classname = computed(() => [
  "checkbox",
  props.error && "checkbox--error",
]);

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
};
</script>

<template>
  <label class="checkbox-wrapper">
    <input
      type="checkbox"
      class="checkbox-input"
      v-bind="attrs"
      :checked="modelValue"
      :required="required"
      @change="onChange"
    />
    <span class="checkbox-box" :class="{ error }"></span>
    <div class="checkbox-label">
      <slot />
    </div>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  &-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    padding: 10px 2px;
  }

  /* Прячем стандартный чекбокс */
  &-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Наш кастомный квадрат */
  &-box {
    min-width: 20px;
    min-height: 20px;
    background-color: #d7d4d8;
    border-radius: 4px;
    transition: 0.15s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &.error {
      outline: 2px solid red;
    }
  }

  &-label {
    font-size: 16px;
    font-weight: 500;
    margin-top: 2px;

    :deep(a) {
      color: #f60850;
    }
  }
}

/* Чек-состояние (галочка) */
.checkbox-input:checked + .checkbox-box {
  background-color: #007bff;
}

.checkbox-input:checked + .checkbox-box::after {
  content: "";
  width: 10px;
  height: 5px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: scaleX(-1) rotate(45deg);
}
</style>
