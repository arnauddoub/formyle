<template>
  <forma ref="form" :all-steps="steps" @save="submit" />
</template>

<script>
import { steps } from '../steps'

export default {
  name: 'Quote',

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
