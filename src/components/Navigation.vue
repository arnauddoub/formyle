<template>
  <div class="flex justify-between mt-10">
    <button
      v-if="currentStepIndex > 0"
      type="button"
      class="px-10 py-3 border-2 border-alpha text-alpha rounded-md focus:outline-none select-none"
      @click="prevStep"
    >
      Précédent
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
  emits: ['onComplete', 'validateStep'],

  computed: {
    steps() {
      return this.$store.state.steps.all
    },
    version() {
      return this.$store.state.steps.version
    },
    currentStepIndex() {
      return this.$store.state.steps.stepIndex
    },
  },

  methods: {
    prevStep() {
      const index = this.currentStepIndex - 1
      const step = this.steps[index]
      if (step) {
        this.$router.push({ name: this.version + step.name })
        this.$store.commit('steps/changeStepIndex', index)
      }
    },
    nextStep() {
      const index = this.currentStepIndex + 1
      const step = this.steps[index]
      if (step) {
        this.$router.push({ name: this.version + step.name })
        this.$store.commit('steps/changeStepIndex', index)
      }
    },
  },
}
</script>
