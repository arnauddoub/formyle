<template>
  <forma ref="form" :all-steps="steps" @save="submit" />
</template>

<script>
import { steps } from '../steps'
import Forma from '../components/Forma.vue'

export default {
  name: 'Quote',

  components: {
    Forma,
  },

  beforeRouteUpdate(to, from) {
    this.$refs.form.transition(to, from)
  },

  data() {
    return {
      steps: steps,
    }
  },

  computed: {
    quote() {
      return this.$store.state.quote
    },
  },

  methods: {
    submit() {
      alert(JSON.stringify(this.quote))
    },
  },
}
</script>
