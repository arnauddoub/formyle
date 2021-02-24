<template>
  <div class="overflow-hidden">
    <forma>
      <categories />
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <Navigation ref="navigation" />
    </forma>
  </div>
</template>

<script>
import { steps } from '../steps'
import Forma from '../components/Forma.vue'
import Navigation from '../components/Navigation.vue'
import Categories from '../components/Categories.vue'

export default {
  name: 'Quote',
  components: {
    Categories,
    Navigation,
    Forma,
  },
  beforeRouteUpdate(to, from) {
    const toDepth = this.steps.findIndex((element) => this.version + element.name === to.name)
    const fromDepth = this.steps.findIndex((element) => this.version + element.name === from.name)
    to.meta.transitionName = toDepth < fromDepth ? 'page-left' : 'page-right'
  },
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
}
</script>
