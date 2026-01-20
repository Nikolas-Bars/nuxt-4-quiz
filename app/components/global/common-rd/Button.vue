<template>
  <component
    :is="componentTag"
    :to="!to?.startsWith('http') ? to : undefined"
    :href="to?.startsWith('http') ? to : undefined"
    :target="to?.startsWith('http') ? target : undefined"
    :class="classname"
    :style="{
      width: width,
      height: height,
      fontSize: fontSize,
      /*Если padding не передали, то будет задан в соответствии с размером (medium или small и тд)*/
      padding: padding || 'auto',
    }"
    :type="componentTag === 'button' ? type : undefined"
    :disabled="disabled"
  >
    <div class="button__slot" :style="{ gap: gapSlot }">
      <div v-if="$slots.icon" class="button__icon">
        <slot name="icon" />
      </div>
      <slot v-if="$slots.default" />
    </div>
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

interface Props {
  variant?: "filled" | "lined" | "unfilled";
  radius?: "rounded" | "squared";
  icon?: string | undefined;
  size?: "small" | "medium";
  fontSize?: string;
  padding?: string;
  color?:
    | "grey"
    | "grey-light"
    | "yellow"
    | "pink"
    | "black-white"
    | "purple"
    | "blue"
    | "ghost";
  bgBrightness?: "light" | "dark";
  width?: string;
  height?: string;
  type?: "button" | "submit";
  to?: string | undefined;
  target?: "_blank" | "_self" | "_parent" | "_top";
  value?: string | number | undefined;
  trailingIcon?: boolean;
  gapSlot?: string;
  disabled?: boolean;
  active?: boolean;
  // loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "filled",
  radius: "rounded",
  icon: undefined,
  size: "medium",
  fontSize: "16px",
  padding: "",
  color: "grey",
  bgBrightness: "light",
  width: "fit-content",
  gapSlot: "8px",
  height: "48px",
  type: "button",
  to: undefined,
  target: "_self",
  value: undefined,
  trailingIcon: false,
  disabled: false,
  active: false,
  // loading: false,
});

const slots = useSlots();

const componentTag = computed(() => {
  if (props.to) {
    return props.to.startsWith("http") ? "a" : NuxtLink;
  }
  return "button";
});

const classname = computed(() => [
  "button",
  `button-variant-${props.variant}`,
  `button-radius-${props.radius}`,
  `button-size-${props.size}`,
  `button-color-${props.color}`,
  `button-bg-${props.bgBrightness}`,
  { "button-trailing-icon": props.trailingIcon },
  { "button-disabled": props.disabled },
  { "button-active": props.active },
  // { "button-loading": props.loading },
  { "button-no-text": !slots.default },
]);

export type { Props as ButtonProps };
</script>

<style lang="scss" scoped>
.button {
  // задаем переменные для стилей, & - это текущий селектор (this = .button)
  $this: &;
  $hover: & + ":hover";
  $active: & + ":active";
  $active-from-props: $this + "-active";
  $variant-filled: $this + "-variant-filled";
  $variant-lined: $this + "-variant-lined";
  $variant-unfilled: $this + "-variant-unfilled";
  $radius-rounded: $this + "-radius-rounded";
  $radius-squared: $this + "-radius-squared";
  $color-grey: $this + "-color-grey";
  $color-grey-light: $this + "-color-grey-light";
  $color-yellow: $this + "-color-yellow";
  $color-pink: $this + "-color-pink";
  $color-black-white: $this + "-color-black-white";
  $color-white: $this + "-color-white";
  $color-purple: $this + "-color-purple";
  $color-blue: $this + "-color-blue";
  $color-ghost: $this + "-color-ghost";
  $bg-light: $this + "-bg-light";
  $bg-dark: $this + "-bg-dark";
  $trailing-icon: $this + "-trailing-icon";
  $disabled: & + "-disabled";
  // $loading: & + "-loading";
  $no-text: & + "-no-text";
  $size-small: $this + "-size-small";
  $size-medium: $this + "-size-medium";

  --btn-bg: transparent;
  --btn-color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

  border: none;

  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;

  transition: color 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;

  &__slot {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    width: 100%;
    text-align: center;
  }
  // # - интерполяция переменной (вставляет значение переменной как строку) - $size-small задана выше
  &#{$size-small} {
    padding: clamp(0.375rem, 0.02rem + 0.81vw, 0.75rem);
  }
  &#{$size-medium} {
    padding: 12px 16px;
  }
  &#{$radius-rounded} {
    border-radius: 100px;
  }
  &#{$radius-squared} {
    border-radius: 12px;
  }

  &#{$variant-filled} {
    background: fixed;

    &#{$hover} {
      background-color: color-mix(in srgb, var(--btn-bg) 90%, black);
    }

    &#{$active} {
      background-color: color-mix(in srgb, var(--btn-bg) 80%, black);
    }
  }

  &#{$variant-lined} {
    // hover
    &#{$bg-light}#{$hover} {
      background-color: color-mix(in srgb, var(--btn-bg) 30%, white);
    }
    &#{$bg-dark}#{$hover} {
      background-color: color-mix(in srgb, var(--btn-bg) 10%, black);
    }

    // active
    &#{$bg-light}#{$active} {
      background-color: color-mix(in srgb, var(--btn-bg) 40%, white);
    }
    &#{$bg-dark}#{$active} {
      background-color: color-mix(in srgb, var(--btn-bg) 7%, black);
    }
  }

  &#{$variant-unfilled} {
    padding: 4px;
    background-color: unset;

    &#{$hover} {
      // background-color: color-mix(in srgb, var(--btn-bg) 30%, white);
      background-color: rgba(var(--btn-bg), 0.8);
    }

    &#{$active} {
      background-color: color-mix(in srgb, var(--btn-bg) 40%, white);
    }
  }
  &#{$color-grey} {
    &#{$variant-filled} {
      --btn-bg: #d7d4d8;
      --btn-color: #29272a;
      background-color: var(--btn-bg);
      color: var(--btn-color);
    }

    &#{$variant-lined} {
      --btn-bg: #d7d4d8;
      border: 1px solid #d7d4d8;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: #d7d4d8;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }
  }

  &#{$color-grey-light} {
    &#{$variant-filled} {
      --btn-bg: #f5f4f5;
      --btn-color: #29272a;
      background-color: var(--btn-bg);
      color: var(--btn-color);
    }

    &#{$variant-lined} {
      --btn-bg: #f5f4f5;
      border: 1px solid #f5f4f5;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: #f5f4f5;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }
  }

  &#{$color-yellow} {
    &#{$variant-filled} {
      --btn-bg: #efca03;
      --btn-color: #432505;
      background-color: var(--btn-bg);
      color: var(--btn-color);
    }

    &#{$variant-lined} {
      --btn-bg: #efca03;
      border: 1px solid #efca03;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #432505;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #efca03;
        color: var(--btn-color);
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: #efca03;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #432505;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }
  }

  &#{$color-pink} {
    &#{$variant-filled} {
      --btn-bg: #f60850;
      --btn-color: #ffffff;
      background-color: var(--btn-bg);
      color: var(--btn-color);
    }

    &#{$variant-lined} {
      --btn-bg: #f60850;

      border: 1px solid #f60850;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #f60850;

        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;

        color: var(--btn-color);
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: #f60850;

      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #f60850;

        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;

        color: var(--btn-color);
      }
    }
  }

  &#{$color-black-white} {
    &#{$variant-filled} {
      --btn-bg: #29272a;
      --btn-color: #ffffff;
      background-color: var(--btn-bg);
      color: var(--btn-color);

      &#{$bg-light} {
        --btn-bg: #29272a;
        --btn-color: #fff;
        color: var(--btn-color);

        &#{$hover} {
          color: color-mix(in srgb, var(--btn-color), white 90%);
        }
      }

      &#{$bg-dark} {
        --btn-bg: #fff;
        --btn-color: #29272a;
        background-color: var(--btn-bg);
        color: var(--btn-color);

        &#{$hover} {
          background-color: color-mix(in srgb, var(--btn-bg), black 10%);
        }
      }
    }

    &#{$variant-lined} {
      --btn-bg: #29272a;
      border: 1px solid #29272a;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);

        &#{$hover} {
          color: color-mix(in srgb, var(--btn-color), white 20%);
        }
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);

        &#{$hover} {
          color: color-mix(in srgb, var(--btn-color), black 15%);
        }
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: #29272a;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);

        &#{$hover} {
          color: color-mix(in srgb, var(--btn-color), white 20%);
          background-color: color-mix(in srgb, var(--btn-color), white 90%);
        }

        &#{$active} {
          background: transparent;
        }
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);

        &#{$hover} {
          color: color-mix(in srgb, var(--btn-color), black 15%);
        }

        &#{$active} {
          background: transparent;
        }
      }
    }
  }

  &#{$color-blue} {
    &#{$variant-filled} {
      --btn-bg: #155dfc;
      --btn-color: #ffffff;
      background-color: var(--btn-bg);
      color: var(--btn-color);
    }

    &#{$variant-lined} {
      --btn-bg: #155dfc;
      border: 1px solid #155dfc;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #155dfc;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: #155dfc;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #155dfc;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }
  }

  &#{$color-purple} {
    &#{$variant-filled} {
      --btn-bg: #542969;
      --btn-color: #ffffff;
      background-color: var(--btn-bg);
      color: var(--btn-color);
    }

    &#{$variant-lined} {
      --btn-bg: #542969;
      border: 1px solid rgba(92, 31, 122, 1);
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #542969;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #ffffff;
        color: var(--btn-color);
      }

      /* active state from props (e.g. Tabs active item) */
      &#{$active-from-props} {
        background-color: rgba(92, 31, 122, 1);
        border-color: rgba(92, 31, 122, 1);
        color: #ffffff;
      }

      /* override generic hover/active to look good on dark backgrounds */
      &#{$bg-dark}#{$hover} {
        background-color: rgba(82, 20, 112, 1);
        border-color: rgba(82, 20, 112, 1);
        color: #ffffff;
      }
      &#{$bg-dark}#{$active} {
        background-color: rgba(92, 31, 122, 1);
        border-color: rgba(92, 31, 122, 1);
        color: #ffffff;
      }

      &#{$bg-light}#{$hover} {
        background-color: rgba(84, 41, 105, 0.08);
      }
      &#{$bg-light}#{$active} {
        background-color: rgba(84, 41, 105, 0.12);
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: #542969;
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #542969;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #ffffff;
        color: var(--btn-color);
      }
    }
  }

  &#{$color-ghost} {
    &#{$variant-filled} {
      --btn-bg: rgba(255, 255, 255, 0.05);
      --btn-color: #ffffff;
      background-color: var(--btn-bg);
      color: var(--btn-color);
    }

    &#{$variant-lined} {
      --btn-bg: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--btn-bg);
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }

    &#{$variant-unfilled} {
      --btn-bg: rgba(255, 255, 255, 0.05);
      background-color: transparent;

      &#{$bg-light} {
        --btn-color: #29272a;
        color: var(--btn-color);
      }

      &#{$bg-dark} {
        --btn-color: #fff;
        color: var(--btn-color);
      }
    }
  }

  &#{$trailing-icon} {
    #{$this}__slot {
      flex-direction: row-reverse;
    }
  }

  &#{$disabled} {
    pointer-events: none;
    cursor: not-allowed;
  }

  // &#{$loading} {
  //   pointer-events: none;
  //   cursor: progress;
  // }

  &#{$no-text} {
    justify-content: center;
    aspect-ratio: 1;
    padding: 0;
  }
}
</style>
