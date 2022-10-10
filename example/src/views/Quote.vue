<template>
  <f-form ref="form" :all-steps="steps" @save="submit">
    <template #previous>
      <arrow-left-icon class="h-5 mr-2 w-5" />
      Précédent
    </template>
  </f-form>
</template>

<script>
import { steps } from '../steps'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'Quote',

  components: {
    ArrowLeftIcon,
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
