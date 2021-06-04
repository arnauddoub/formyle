<template>
  <select :id="id" v-model="displayValue" :name="name" :class="{ active: displayValue }">
    <slot />
  </select>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Selecta',

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
