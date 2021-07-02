<template>
  <div>
    <f-heading :size="3" :center="true">C'est parti ! Quel animal souhaitez-vous assurer ?</f-heading>
    <f-field type="radio">
      <f-radio-group>
        <f-radio-button
          id="which_pet-chien"
          v-model="whichPet"
          name="which_pet"
          value="dog"
          :error="v$.whichPet.$error"
          size="lg"
          @change="$emit('nextStep')"
        >
          <img src="../../assets/dog.svg" alt="dog" width="60" height="60" />
          <div class="mt-2">Chien</div>
        </f-radio-button>
        <f-radio-button
          id="which_pet-chat"
          v-model="whichPet"
          name="which_pet"
          value="cat"
          :error="v$.whichPet.$error"
          size="lg"
          @change="$emit('nextStep')"
        >
          <img src="../../assets/cat.svg" alt="cat" width="60" height="60" />
          <div class="mt-2">Chat</div>
        </f-radio-button>
      </f-radio-group>
      <template v-if="v$.whichPet.$error" #error>
        <span v-if="v$.whichPet.required">Veuillez sélectionner votre animal à assurer</span>
      </template>
    </f-field>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { createHelpers } from 'vuex-map-fields'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  emits: ['nextStep'],

  setup() {
    return { v$: useVuelidate() }
  },

  computed: {
    ...mapFields(['pet.whichPet']),
  },

  validations() {
    return {
      whichPet: { required },
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
