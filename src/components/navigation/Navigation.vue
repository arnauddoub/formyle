<template>
  <div class="flex justify-between mt-10">
    <button
      v-if="currentStepIndex > 0"
      type="button"
      class="flex items-center select-none focus:outline-none"
      @click="prevStep"
    >
      <template v-if="$slots.previous"><slot name="previous" /></template>
      <template v-else>Précédent</template>
    </button>
    <button
      v-if="currentStepIndex < steps.length - 1"
      type="button"
      class="ml-auto px-10 py-3 bg-alpha text-white rounded-md focus:outline-none select-none"
      @click="$emit('validateStep')"
    >
      Suivant
    </button>
    <button
      v-else
      type="button"
      class="px-10 py-3 bg-alpha text-white rounded-md focus:outline-none select-none"
      @click="$emit('onComplete')"
    >
      Comparer
    </button>
  </div>
</template>

<script>
export default {
  name: 'Navigation',

  props: {
    steps: {
      type: Object,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    currentStepIndex: {
      type: Number,
      required: true,
    },
  },

  emits: ['onComplete', 'validateStep', 'update:current-step-index'],

  methods: {
    prevStep() {
      const index = this.currentStepIndex - 1
      const step = this.steps[index]
      if (step) {
        this.$router.push({ name: this.version + step.name })
        this.$emit('update:current-step-index', index)
      }
    },

    nextStep() {
      const index = this.currentStepIndex + 1
      const step = this.steps[index]
      if (step) {
        this.$router.push({ name: this.version + step.name })
        this.$emit('update:current-step-index', index)
      }
    },
  },
}
</script>
