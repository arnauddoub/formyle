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
  emits: ['update:modelValue'],
  data() {
    return {
      currentStepIndex: this.modelValue,
    }
  },
  methods: {
    prevStep() {
      const step = STEPS[this.currentStepIndex - 1]
      if (step) {
        this.$router.push(step.path)
        this.$emit('update:modelValue', this.currentStepIndex--)
      }
    },
    nextStep() {
      const step = STEPS[this.currentStepIndex + 1]
      if (step) {
        this.$router.push(step.path)
        this.$emit('update:modelValue', this.currentStepIndex++)
      }
    },
  },
}
</script>
