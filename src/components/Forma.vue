<template>
  <div v-if="currentStepIndex !== null && currentStepIndex >= 0" class="overflow-hidden" @keyup.enter="validateStep">
    <form class="max-w-2xl mx-auto mt-20 px-4" autocomplete="off" @submit.prevent="">
      <categories />
      <router-view v-slot="{ Component, route }" @nextStep="validateStep">
        <transition :name="route.meta.transitionName" mode="out-in">
          <component :is="Component" ref="step" />
        </transition>
      </router-view>
      <navigation ref="navigation" @onComplete="validateStep() && $emit('save')" @validateStep="validateStep" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Categories from '../components/Categories.vue'
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Categories,
    Navigation,
  },

  props: {
    allSteps: {
      type: Object,
      required: true,
    },
  },

  emits: ['save'],

  computed: {
    ...mapState({
      steps: (state) => state.steps.all,
      version: (state) => state.steps.version,
      currentStepIndex: (state) => state.steps.stepIndex,
    }),
  },

  watch: {
    // Transition for step change
    $route(to, from) {
      const toDepth = this.steps.findIndex((element) => this.version + element.name === to.name)
      const fromDepth = this.steps.findIndex((element) => this.version + element.name === from.name)
      to.meta.transitionName = toDepth < fromDepth ? 'page-left' : 'page-right'
    },
  },

  beforeCreate() {
    let version = this.$route.path.split('/')[2]
    const stepsSelected = this.allSteps[version]

    // Force start to the first step
    if (version + stepsSelected[0].name !== this.$route.name) {
      this.$router.push({ name: version + stepsSelected[0].name })
    }

    this.$store.commit('steps/addVersion', version)
    this.$store.commit('steps/addSteps', stepsSelected)
    this.$store.commit('steps/changeStepIndexByRoute', version + stepsSelected[0].name)
  },

  created() {
    // Trigger history change
    window.onpopstate = () => {
      this.$store.commit('steps/changeStepIndexByRoute', this.$route.name)
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
  },
}
</script>
