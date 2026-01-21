import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Button from '~/components/global/common-rd/Button.vue'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'lined', 'unfilled'],
      description: 'Стиль кнопки',
    },
    color: {
      control: 'select',
      options: ['grey', 'grey-light', 'yellow', 'pink', 'black-white', 'purple', 'blue', 'ghost'],
      description: 'Цветовая схема',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Размер кнопки',
    },
    radius: {
      control: 'select',
      options: ['rounded', 'squared'],
      description: 'Скругление углов',
    },
    bgBrightness: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Яркость фона (влияет на контраст)',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключена ли кнопка',
    },
    active: {
      control: 'boolean',
      description: 'Активное состояние (например, в табах)',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Иконка справа от текста',
    },
    width: {
      control: 'text',
      description: 'Ширина кнопки (CSS value)',
    },
    height: {
      control: 'text',
      description: 'Высота кнопки (CSS value)',
    },
    fontSize: {
      control: 'text',
      description: 'Размер шрифта (CSS value)',
    },
    padding: {
      control: 'text',
      description: 'Внутренние отступы (CSS value)',
    },
    to: {
      control: 'text',
      description: 'Ссылка (превращает кнопку в NuxtLink или <a>)',
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
      description: 'Тип кнопки (для форм)',
    },
  },
  args: {
    variant: 'filled',
    color: 'pink',
    size: 'medium',
    radius: 'rounded',
    bgBrightness: 'light',
    disabled: false,
    active: false,
    trailingIcon: false,
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#29272a' },
      ],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ===== Основные варианты =====

export const Primary: Story = {
  args: {
    color: 'pink',
    variant: 'filled',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Записаться на игру</Button>',
  }),
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
    variant: 'filled',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Купить билет</Button>',
  }),
}

export const Purple: Story = {
  args: {
    color: 'purple',
    variant: 'filled',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Подробнее</Button>',
  }),
}

export const BlackWhite: Story = {
  args: {
    color: 'black-white',
    variant: 'filled',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Отправить</Button>',
  }),
}

// ===== Варианты стилей (variant) =====

export const Filled: Story = {
  args: {
    variant: 'filled',
    color: 'pink',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Filled Button</Button>',
  }),
}

export const Lined: Story = {
  args: {
    variant: 'lined',
    color: 'pink',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Lined Button</Button>',
  }),
}

export const Unfilled: Story = {
  args: {
    variant: 'unfilled',
    color: 'pink',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Unfilled Button</Button>',
  }),
}

// ===== Размеры =====

export const Small: Story = {
  args: {
    size: 'small',
    color: 'pink',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Small Button</Button>',
  }),
}

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'pink',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Medium Button</Button>',
  }),
}

// ===== Скругления =====

export const Rounded: Story = {
  args: {
    radius: 'rounded',
    color: 'purple',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Rounded</Button>',
  }),
}

export const Squared: Story = {
  args: {
    radius: 'squared',
    color: 'purple',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Squared</Button>',
  }),
}

// ===== Состояния =====

export const Disabled: Story = {
  args: {
    disabled: true,
    color: 'pink',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Disabled</Button>',
  }),
}

export const Active: Story = {
  args: {
    active: true,
    color: 'purple',
    variant: 'lined',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Active Tab</Button>',
  }),
}

// ===== С иконкой =====

export const WithIcon: Story = {
  args: {
    color: 'pink',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template #icon>🎮</template>
        Играть
      </Button>
    `,
  }),
}

export const WithTrailingIcon: Story = {
  args: {
    color: 'yellow',
    trailingIcon: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template #icon>→</template>
        Далее
      </Button>
    `,
  }),
}

export const IconOnly: Story = {
  args: {
    color: 'grey',
    width: '48px',
    height: '48px',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `
      <Button v-bind="args">
        <template #icon>✕</template>
      </Button>
    `,
  }),
}

// ===== Как ссылка =====

export const AsLink: Story = {
  args: {
    to: '/schedule',
    color: 'blue',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Перейти к расписанию</Button>',
  }),
}

export const AsExternalLink: Story = {
  args: {
    to: 'https://quizplease.ru',
    color: 'purple',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Открыть сайт</Button>',
  }),
}

// ===== На тёмном фоне =====

export const OnDarkBackground: Story = {
  args: {
    color: 'black-white',
    bgBrightness: 'dark',
    variant: 'filled',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">На тёмном фоне</Button>',
  }),
}

export const LinedOnDark: Story = {
  args: {
    color: 'purple',
    bgBrightness: 'dark',
    variant: 'lined',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Outlined на тёмном</Button>',
  }),
}

// ===== Галерея всех цветов =====

export const AllColors: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; padding: 20px;">
        <Button color="grey">Grey</Button>
        <Button color="grey-light">Grey Light</Button>
        <Button color="yellow">Yellow</Button>
        <Button color="pink">Pink</Button>
        <Button color="black-white">Black-White</Button>
        <Button color="purple">Purple</Button>
        <Button color="blue">Blue</Button>
        <Button color="ghost">Ghost</Button>
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; padding: 20px;">
        <Button variant="filled" color="pink">Filled</Button>
        <Button variant="lined" color="pink">Lined</Button>
        <Button variant="unfilled" color="pink">Unfilled</Button>
      </div>
    `,
  }),
}
