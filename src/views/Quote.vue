<template>
  <div class="overflow-hidden">
    <forma v-if="currentStepIndex !== null && currentStepIndex >= 0" @keyup.enter="validateStep">
      <categories />
      <div>
        <router-view v-slot="{ Component, route }" @nextStep="validateStep">
          <transition :name="route.meta.transitionName" mode="out-in">
            <component :is="Component" ref="step" />
          </transition>
        </router-view>
      </div>
      <Navigation ref="navigation" @onComplete="submit" @validateStep="validateStep" />
    </forma>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { steps } from '../steps'
import Forma from '../components/Forma.vue'
import Categories from '../components/Categories.vue'
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Quote',

  components: {
    Forma,
    Categories,
    Navigation,
  },

  beforeRouteUpdate(to, from) {
    const toDepth = this.steps.findIndex((element) => this.version + element.name === to.name)
    const fromDepth = this.steps.findIndex((element) => this.version + element.name === from.name)
    to.meta.transitionName = toDepth < fromDepth ? 'page-left' : 'page-right'
  },

  computed: {
    ...mapState({
      steps: (state) => state.steps.all,
      version: (state) => state.steps.version,
      currentStepIndex: (state) => state.steps.stepIndex,
      quote: (state) => state.quote,
    }),
  },

  created() {
    window.onpopstate = () => {
      this.$store.commit('steps/changeStepIndexByRoute', this.$route.name)
    }
  },

  beforeCreate() {
    let version = this.$route.path.split('/')[2]
    if (typeof version === 'undefined' || version === '') {
      version = Object.keys(steps)[0]
      this.$router.push({ name: version + steps[version][0].name })
    }
    const stepsSelected = steps[version]
    this.$store.commit('steps/addVersion', version)
    this.$store.commit('steps/addSteps', stepsSelected)
    this.$store.commit('steps/changeStepIndexByRoute', this.$route.name)
  },

  methods: {
    validateStep() {
      if (this.$refs.step.validate()) {
        this.$refs.navigation.nextStep()
      }
    },
    submit() {
      alert(JSON.stringify(this.quote))
    },
  },
}
</script>
