<template>
  <div class="overflow-hidden">
    <forma>
      <categories :current-step-index="currentStepIndex" />
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
import Categories from '../../components/Categories.vue'

export default {
  name: 'Form',
  components: {
    Categories,
    Navigation,
    Forma,
  },
  data() {
    return {
      currentStepIndex: STEPS.findIndex((element) => element.name === this.$route.name),
    }
  },
}
</script>
