<template>
  <div>
    <f-heading :size="3" :center="true">Dernières questions sur {{ name }}. Promis !</f-heading>
    <f-field label="Quel est son sexe ?" :error="v$.gender.$error" type="radio">
      <f-radio-group>
        <f-radio-button id="pet_gender-male" v-model="gender" name="pet_gender" value="male"> Mâle </f-radio-button>
        <f-radio-button id="pet_gender-female" v-model="gender" name="pet_gender" value="female">
          Femelle
        </f-radio-button>
      </f-radio-group>
      <template v-if="v$.gender.$error" #error>
        <span v-if="v$.gender.required">Veuillez sélectionner son sexe</span>
      </template>
    </f-field>
    <f-field label="Est-il tatoué ou pucé ?" :error="v$.identified.$error" type="radio">
      <f-radio-group>
        <f-radio-button id="pet_identified-yes" v-model="identified" name="pet_identified" :value="1">
          Oui
        </f-radio-button>
        <f-radio-button id="pet_identified-no" v-model="identified" name="pet_identified" :value="0">
          Non
        </f-radio-button>
      </f-radio-group>
      <template v-if="v$.identified.$error" #error>
        <span v-if="v$.identified.required">Veuillez sélectionner une réponse</span>
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
  setup() {
    return { v$: useVuelidate() }
  },

  computed: {
    ...mapFields(['pet.name', 'pet.gender', 'pet.identified']),
  },

  validations() {
    return {
      gender: { required },
      identified: { required },
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
