<script lang="ts" setup>
import type { ButtonProps } from "./Button.vue";
import Button from "./Button.vue";

interface Item {
  title: string | string[];
  id: number | string;
  icon?: string;
  disabled?: ButtonProps["disabled"];
}

type Model = Item["id"];

interface Props {
  modelValue: Model;
  items: Item[];
  fontSize?: ButtonProps["fontSize"];
  trailingIcon?: ButtonProps["trailingIcon"];
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  padding?: ButtonProps["padding"];
  height?: ButtonProps["height"];
  activeColor?: ButtonProps["color"];
  bgBrightness?: ButtonProps["bgBrightness"];
  variant?: ButtonProps["variant"];
  radius?: ButtonProps["radius"];
  gap?: string;
  gapSlot?: string;
}

const props = withDefaults(defineProps<Props>(), {
  trailingIcon: false,
  size: "medium",
  fontSize: "16px",
  color: "grey",
  height: "48px",
  padding: "",
  activeColor: "pink",
  bgBrightness: "light",
  variant: "lined",
  radius: "rounded",
  gap: "16px",
  gapSlot: "8px",
});

const {
  items,
  fontSize,
  trailingIcon,
  size,
  color,
  height,
  activeColor,
  bgBrightness,
  variant,
  radius,
  gap,
} = toRefs(props);

// const model = ref<Model | null>(null);

// const onClick = (val: Model) => {
//   model.value = val;
// };

const classname = computed(() => ["tabs"]);

const navStyles = computed(() => ({
  "--tabs-nav-gap": gap.value,
}));

const emit = defineEmits<{
  (e: "update:modelValue", val: Model): void;
}>();

const onClick = (val: Model) => {
  emit("update:modelValue", val);
};

export type { Props as TabsProps, Item as TabsItem };
</script>

<template>
  <div :class="classname">
    <div class="tabs__nav" :style="navStyles">
      <Button
        v-for="tab in items"
        :key="tab.id"
        :height="height"
        class="tabs__nav-item"
        :gap-slot="gapSlot"
        :size="size"
        :color="modelValue === tab.id ? activeColor : color"
        :bg-brightness="bgBrightness"
        :variant="variant"
        :radius="radius"
        :font-size="fontSize"
        :trailing-icon="trailingIcon"
        :padding="padding"
        :disabled="tab.disabled"
        :active="modelValue === tab.id"
        @click="onClick(tab.id)"
      >
        <div v-if="tab.icon" class="button__icon">
          <NuxtIcon :name="tab.icon" />
        </div>
        <div v-if="Array.isArray(tab.title)" class="tabs__title">
          <span class="tabs__title-main">{{ tab.title[0] }}</span>
          <span class="tabs__title-sub">{{ tab.title[1] }}</span>
        </div>

        <div v-else>
          {{ tab.title }}
        </div>
      </Button>
      <slot name="custom-tabs"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/vars" as v;
@use "~/assets/css/mixins/text" as t;
@use "sass-mq" as mq with (
  $breakpoints: v.$breakpoints
);

.tabs {
  $this: &;

  &__nav {
    display: inline-flex;
    gap: var(--tabs-nav-gap);
  }

  &__title {
    display: flex;
    gap: 10px;

    &-sub {
      opacity: 0.6;
    }
  }
}
</style>
