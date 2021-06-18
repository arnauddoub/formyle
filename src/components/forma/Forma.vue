<template>
  <div v-if="currentStepIndex !== null && currentStepIndex >= 0" class="overflow-hidden" @keyup.enter="validateStep">
    <form class="max-w-2xl mx-auto mt-20 px-4" autocomplete="off" @submit.prevent="">
      <categories :steps="activeSteps" :current-step-index="currentStepIndex" />
      <router-view v-slot="{ Component, route }" @nextStep="validateStep">
        <transition :name="route.meta.transitionName" mode="out-in">
          <component :is="Component" ref="step" @changeStepStatus="changeStepStatus" />
        </transition>
      </router-view>
      <navigation
        ref="navigation"
        v-model:current-step-index="currentStepIndex"
        :steps="activeSteps"
        :version="version"
        @onComplete="validateStep() && $emit('save')"
        @validateStep="validateStep"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Forma',

  props: {
    allSteps: {
      type: Object,
      required: true,
    },
  },

  emits: ['save'],

  data() {
    return {
      steps: [],
      version: null,
      currentStepIndex: null,
    }
  },

  computed: {
    activeSteps() {
      return this.steps.filter((step) => step.active != false)
    },
  },

  watch: {
    // Transition for step change
    $route(to, from) {
      const toDepth = this.steps.findIndex((element) => this.version + element.name === to.name)
      const fromDepth = this.steps.findIndex((element) => this.version + element.name === from.name)
      to.meta.transitionName = toDepth < fromDepth ? 'page-left' : 'page-right'
    },
  },

  created() {
    let version = this.$route.path.split('/')[2]
    const stepsSelected = this.allSteps[version]

    // Force start to the first step
    if (version + stepsSelected[0].name !== this.$route.name) {
      this.$router.push({ name: version + stepsSelected[0].name })
    }

    this.version = version
    this.steps = stepsSelected
    this.changeStepIndexByRoute(version + stepsSelected[0].name)

    // Trigger history change
    window.onpopstate = () => {
      this.changeStepIndexByRoute(this.$route.name)
    }
  },

  methods: {
    validateStep() {
      if (typeof this.$refs.step.validate !== 'function' || this.$refs.step.validate()) {
        this.$refs.navigation.nextStep()
        return true
      }
      return false
    },

    changeStepIndexByRoute(route) {
      const index = this.steps.findIndex((element) => this.version + element.name === route)
      this.currentStepIndex = index > -1 ? index : 0
    },

    changeStepStatus(index, status) {
      this.steps[index].active = status
    },
  },
}
</script>
