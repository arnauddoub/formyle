<template>
  <div class="radio-button flex-1" :class="size">
    <input
      :id="id"
      v-model="displayValue"
      :name="name"
      :value="value"
      type="radio"
      class="absolute appearance-none -z-1 w-0 h-0"
    />
    <label :for="id" :class="{ 'bg-red-50 border-red-300': error }">
      <slot />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validator: function (value) {
        return ['md', 'lg'].indexOf(value) !== -1
      },
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const displayValue = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    })

    return {
      displayValue,
    }
  },
}
</script>

<style scoped>
.radio-button label {
  @apply cursor-pointer rounded-md border border-gray-300 block select-none duration-300 hover:bg-beta hover:border-alpha py-3 px-4;
}
.radio-button.lg label {
  @apply h-40 items-center flex justify-center flex-col;
}
.radio-button input:checked + label {
  @apply border-alpha bg-beta;
}

.radio-button.md label {
  @apply relative pl-14;
}
.radio-button.md label:before,
.radio-button.md label:after {
  position: absolute;
  content: '';
  width: 24px;
  height: 24px;
  background-color: #fff;
  transition: all 0.2s linear;
  transform-origin: center;
  border-radius: 50%;
}
.radio-button.md label:before {
  top: 14px;
  left: 14px;
  border: 1px solid #cac2d5;
}
.radio-button.md label:after {
  top: 20px;
  left: 20px;
  border: 5px solid #fff;
  width: 12px;
  height: 12px;
}
.radio-button input:checked + label:after {
  @apply bg-alpha;
  border: 4px solid #fff;
  background-clip: padding-box;
  top: 17px;
  left: 17px;
  width: 18px;
  height: 18px;
}
</style>
