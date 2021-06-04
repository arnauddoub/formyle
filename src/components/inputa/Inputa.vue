<template>
  <input :id="id" v-model="displayValue" :name="name" type="text" placeholder=" " class="input" />
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Inputa',

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
