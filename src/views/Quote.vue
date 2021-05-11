<template>
  <forma ref="form" :all-steps="steps" @save="submit" />
</template>

<script>
import { steps } from '../steps'
import Forma from '../components/forma'

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
