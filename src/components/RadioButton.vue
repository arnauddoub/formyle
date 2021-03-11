<template>
  <div class="flex-1">
    <input
      :id="id"
      v-model="displayValue"
      :name="name"
      :value="value"
      type="radio"
      class="absolute appearance-none -z-1 w-0 h-0"
      @click="handleClick"
    />
    <label
      :for="id"
      class="cursor-pointer h-40 rounded-md border-2 flex items-center justify-center select-none duration-300 hover:bg-blue-50"
    >
      <slot />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    modelValue: {
      type: String,
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
      type: String,
      default: null,
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
input[type='radio']:checked + label {
  @apply border-blue-500 bg-blue-50;
}
</style>
