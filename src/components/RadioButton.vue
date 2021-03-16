<template>
  <div class="radio-button flex-1" :class="size">
    <input
      :id="id"
      v-model="displayValue"
      :name="name"
      :value="value"
      type="radio"
      class="absolute appearance-none -z-1 w-0 h-0"
      @click="handleClick"
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
      default: null,
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

  emits: ['update:modelValue', 'click'],

  setup(props, { emit }) {
    const displayValue = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    })

    return {
      displayValue,
    }
  },

  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.radio-button label {
  @apply cursor-pointer rounded-md border-2 flex justify-center select-none duration-300 hover:bg-blue-50 hover:border-blue-400 flex-col py-3 px-4;
}
.radio-button.lg label {
  @apply h-40 items-center;
}
.radio-button input:checked + label {
  @apply border-blue-400 bg-blue-50;
}
</style>
