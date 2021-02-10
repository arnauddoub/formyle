<template>
  <div class="flex justify-between">
    <button class="px-10 py-3 border-2 border-blue-500 text-blue-500 rounded-md focus:outline-none" @click="prevStep">
      Prev
    </button>
    <button class="px-10 py-3 bg-blue-500 text-white rounded-md focus:outline-none" @click="nextStep">Next</button>
  </div>
</template>

<script>
import { STEPS } from '../views/Form/steps'

export default {
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
  },
  emits: ['update:modelValue', 'test'],
  methods: {
    prevStep() {
      const index = this.modelValue - 1
      const step = STEPS[index]
      if (step) {
        this.$router.push(step.path)
        this.$emit('update:modelValue', index)
      }
    },
    nextStep() {
      const index = this.modelValue + 1
      const step = STEPS[index]
      if (step) {
        this.$router.push(step.path)
        this.$emit('update:modelValue', index)
      }
    },
  },
}
</script>
