<template>
  <div>
    <heading :size="3">Dernières questions sur {{ name }}. Promis !</heading>
    <field label="Quel est son sexe ?" :error="v$.gender.$error" type="radio">
      <radio-group>
        <radio-button id="pet_gender-male" v-model="gender" name="pet_gender" value="male">Mâle</radio-button>
        <radio-button id="pet_gender-female" v-model="gender" name="pet_gender" value="female">Femelle</radio-button>
      </radio-group>
      <template v-if="v$.gender.$error" #error>
        <span v-if="v$.gender.required">Veuillez sélectionner son sexe</span>
      </template>
    </field>
    <field label="Est-il tatoué ou pucé ?" :error="v$.identified.$error" type="radio">
      <radio-group>
        <radio-button id="pet_identified-yes" v-model="identified" name="pet_identified" :value="1">Oui</radio-button>
        <radio-button id="pet_identified-no" v-model="identified" name="pet_identified" :value="0">Non</radio-button>
      </radio-group>
      <template v-if="v$.identified.$error" #error>
        <span v-if="v$.identified.required">Veuillez sélectionner une réponse</span>
      </template>
    </field>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { createHelpers } from 'vuex-map-fields'
import Field from '../../components/Field.vue'
import Heading from '../../components/Heading.vue'
import RadioButton from '../../components/RadioButton.vue'
import RadioGroup from '../../components/RadioGroup.vue'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  components: {
    RadioGroup,
    RadioButton,
    Field,
    Heading,
  },

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
