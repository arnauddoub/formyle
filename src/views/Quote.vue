<template>
  <forma ref="form" :steps="steps" />
</template>

<script>
import { mapState } from 'vuex'
import { steps } from '../steps'
import Forma from '../components/Forma.vue'

export default {
  name: 'Quote',

  components: {
    Forma,
  },

  data() {
    return {
      steps: steps,
    }
  },

  computed: {
    ...mapState({
      quote: (state) => state.quote,
    }),
  },

  methods: {
    submit() {
      alert(JSON.stringify(this.quote))
    },
  },
}
</script>
