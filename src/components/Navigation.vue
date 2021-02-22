<template>
  <div class="flex justify-between">
    <button class="px-10 py-3 border-2 border-blue-500 text-blue-500 rounded-md focus:outline-none" @click="prevStep">
      Prev
    </button>
    <button class="px-10 py-3 bg-blue-500 text-white rounded-md focus:outline-none" @click="nextStep">Next</button>
  </div>
</template>

<script>
export default {
  computed: {
    steps() {
      return this.$store.state.steps.all
    },
    version() {
      return this.$store.state.steps.version
    },
    currentStepIndex() {
      return this.$store.state.steps.currentIndex
    },
  },
  methods: {
    prevStep() {
      const index = this.currentStepIndex - 1
      const step = this.steps[index]
      if (step) {
        this.$router.push({ name: this.version + step.name })
        this.$store.commit('steps/changeCurrentIndex', index)
      }
    },
    nextStep() {
      const index = this.currentStepIndex + 1
      const step = this.steps[index]
      if (step) {
        this.$router.push({ name: this.version + step.name })
        this.$store.commit('steps/changeCurrentIndex', index)
      }
    },
  },
}
</script>
