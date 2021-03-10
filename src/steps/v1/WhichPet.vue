<template>
  <radio-group>
    <radio-button id="witch_pet-chien" v-model="witchPet" name="witch_pet" value="dog" @change="$emit('nextStep')">
      Chien
    </radio-button>
    <radio-button id="witch_pet-chat" v-model="witchPet" name="witch_pet" value="cat" @change="$emit('nextStep')">
      Chat
    </radio-button>
  </radio-group>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { createHelpers } from 'vuex-map-fields'
import RadioGroup from '../../components/RadioGroup.vue'
import RadioButton from '../../components/RadioButton.vue'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  components: {
    RadioGroup,
    RadioButton,
  },

  emits: ['nextStep'],

  setup() {
    return { v$: useVuelidate() }
  },

  computed: {
    ...mapFields(['witchPet']),
  },

  validations() {
    return {
      witchPet: { required },
    }
  },

  methods: {
    validate() {
      this.v$.$touch()
      return !this.v$.$invalid
    },
  },
}
</script>
