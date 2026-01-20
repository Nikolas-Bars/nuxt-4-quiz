<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

type Item = { label: string; value: string | number };

type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  modelValue?: string | number | null;
  items: Item[];
};

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Выберите...",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const isOpen = ref(false);

// выбранный элемент
const selectedLabel = computed(() => {
  const item = props.items.find((i) => i.value === props.modelValue);
  return item?.label ?? null;
});

// клик по селекту
const toggle = () => {
  isOpen.value = !isOpen.value;
};

// выбор значения
const selectItem = (value: string | number) => {
  emit("update:modelValue", value);
  isOpen.value = false;
};

// клик вне селекта → закрыть
const wrapperRef = ref<HTMLElement | null>(null);

const clickOutside = (e: MouseEvent) => {
  if (!wrapperRef.value) return;
  if (!wrapperRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener("click", clickOutside));
onBeforeUnmount(() => document.removeEventListener("click", clickOutside));
</script>

<template>
  <div ref="wrapperRef" class="select-wrapper">
    <!-- label -->
    <label v-if="label" class="select-label">
      {{ label }}{{ required ? "*" : "" }}
    </label>

    <!-- поле -->
    <div
      class="select-box"
      :class="{ 'select-error': error, open: isOpen }"
      @click="toggle"
    >
      <span class="select-box__value" :class="{ placeholder: !selectedLabel }">
        {{ selectedLabel || placeholder }}
      </span>

      <span class="select-box__arrow" />
    </div>

    <!-- dropdown -->
    <transition name="fade">
      <div v-if="isOpen" class="select-dropdown">
        <div
          v-for="item in items"
          :key="item.value"
          class="select-option"
          @click="selectItem(item.value)"
        >
          {{ item.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}

.select-label {
  font-size: 16px;
  font-weight: 500;
  color: #29272a;
}

/* само поле */
.select-box {
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #d7d4d8;
  background-color: white;
  font-size: 16px;
  color: #29272a;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.15s;

  &.open {
    border-color: #33004c;
  }
}

/* текст */
.select-box__value.placeholder {
  color: #9b9b9b;
}

/* стрелочка */
.select-box__arrow {
  width: 8px;
  height: 8px;
  border-right: 2px solid #29272a;
  border-bottom: 2px solid #29272a;
  transform: rotate(45deg);
  transition: 0.2s;
}

.select-box.open .select-box__arrow {
  transform: rotate(-135deg);
}

/* ошибка */
.select-error {
  border-color: red !important;
}

/* выпадающий список */
.select-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #d7d4d8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  z-index: 10;
}

/* option */
.select-option {
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background: #f6e8ff; /* светло-фиолетовый */
  }
}

/* анимация */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
