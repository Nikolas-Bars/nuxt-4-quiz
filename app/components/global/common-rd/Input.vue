<script setup lang="ts">
import { useAttrs } from "vue";

const props = defineProps<{
  label?: string;
  error?: boolean;
  required?: boolean;
  mask?: "phone";
  modelValue?: string | number;
}>();

const attrs = useAttrs();

const classname = computed(() => ["input", `input-error-${props.error}`]);

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const inputValue = ref(props.modelValue || "");

const onBeforeInput = (e: InputEvent) => {
  if (props.mask !== "phone") return;

  const raw = inputValue.value.replace(/\D/g, "");
  const isDigit = /\d/.test(e.data ?? "");

  // Не цифра → блок
  if (e.data && !isDigit) {
    e.preventDefault();
    return;
  }

  // Уже есть 10 цифр → блокируем ввод
  if (isDigit && raw.length >= 11) {
    e.preventDefault();
  }
};

const applyPhoneMask = (raw: string): string => {
  let digits = raw.replace(/\D/g, "");

  // Удаляем начальный 7 / 8
  if (digits.startsWith("7") || digits.startsWith("8")) {
    digits = digits.slice(1);
  }

  // Ровно 10 цифр
  digits = digits.slice(0, 10);

  let result = "+7";

  if (digits.length > 0) result += " (" + digits.slice(0, 3);
  if (digits.length >= 3) result += ")";
  if (digits.length > 3) result += " " + digits.slice(3, 6);
  if (digits.length >= 6) result += "-" + digits.slice(6, 8);
  if (digits.length >= 8) result += "-" + digits.slice(8, 10);

  return result;
};

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let val = target.value;

  if (props.mask === "phone") {
    val = applyPhoneMask(val);
  }

  inputValue.value = val;
  emit("update:modelValue", val);
};
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label"
      >{{ label }}{{ required ? "*" : "" }}
    </label>
    <input
      v-bind="attrs"
      :value="inputValue"
      :required="required"
      :class="classname"
      @beforeinput="onBeforeInput"
      @input="onInput"
    />
  </div>
</template>

<style scoped lang="scss">
.input {
  border: 1px solid #d7d4d8;
  border-radius: 12px;
  color: #29272a;
  height: 48px;
  width: 100%;
  padding: 12px 16px;

  &-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &-label {
    font-size: 16px;
    font-weight: 600;
    color: #29272a;
  }

  &:focus {
    outline: 1px solid #33004c;
  }
}

.input--error {
  border-color: red;
}
</style>
