<script setup lang="ts">
import { useAttrs, ref, computed } from "vue";

const props = defineProps<{
  label?: string;
  error?: boolean;
  required?: boolean;
  modelValue?: string | number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const attrs = useAttrs();

const classname = computed(() => [
  "textarea",
  { "textarea--error": props.error },
]);

const value = ref(props.modelValue || "");

const onInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  value.value = target.value;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="textarea-wrapper">
    <label v-if="label" class="textarea-label">
      {{ label }}<span v-if="required">*</span>
    </label>

    <textarea
      v-bind="attrs"
      :value="value"
      :required="required"
      :class="classname"
      @input="onInput"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
.textarea {
  border: 1px solid #d7d4d8;
  border-radius: 12px;
  color: #29272a;
  width: 100%;
  padding: 12px 16px;
  font-family: inherit;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: 1px solid #33004c;
  }
}

.textarea-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.textarea-label {
  font-size: 16px;
  font-weight: 600;
  color: #29272a;
}

.textarea--error {
  border-color: red;
}
</style>
