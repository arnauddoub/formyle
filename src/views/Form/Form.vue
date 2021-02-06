<template>
  <div class="overflow-hidden">
    <forma>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <Navigation v-model="currentStepIndex" />
    </forma>
  </div>
</template>

<script>
import { STEPS } from './steps'
import Forma from '../../components/Forma.vue'
import Navigation from '../../components/Navigation.vue'

export default {
  name: 'Form',
  components: {
    Navigation,
    Forma,
  },
  data() {
    return {
      currentStepIndex: null,
    }
  },
  created() {
    this.currentStepIndex = STEPS.findIndex((element) => element.name === this.$route.name)
  },
}
</script>
