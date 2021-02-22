<template>
  <div class="overflow-hidden">
    <forma>
      <categories />
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <Navigation />
    </forma>
  </div>
</template>

<script>
import { steps } from './steps'
import Forma from '../../components/Forma.vue'
import Navigation from '../../components/Navigation.vue'
import Categories from '../../components/Categories.vue'

export default {
  name: 'Quote',
  components: {
    Categories,
    Navigation,
    Forma,
  },
  beforeCreate() {
    const version = this.$route.path.split('/')[2]
    this.$store.commit('steps/addVersion', version)
    const stepsSelected = steps[version]
    this.$store.commit('steps/addSteps', stepsSelected)
    const index = stepsSelected.findIndex((element) => version + element.name === this.$route.name)
    this.$store.commit('steps/changeCurrentIndex', index)
  },
}
</script>
