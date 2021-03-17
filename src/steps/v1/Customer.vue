<template>
  <div>
    <heading :size="3">Vos coordonnées</heading>
    <field label="Civilité" :error="v$.civility.$error" type="radio">
      <radio-group>
        <radio-button id="civility-woman" v-model="civility" name="civility" value="woman">Madame</radio-button>
        <radio-button id="civility-man" v-model="civility" name="civility" value="man">Monsieur</radio-button>
      </radio-group>
      <template v-if="v$.civility.$error" #error>
        <span v-if="v$.civility.required">Veuillez sélectionner votre civilité</span>
      </template>
    </field>
    <field label="Nom" :error="v$.lastName.$error">
      <inputa id="last_name" v-model="lastName" name="last_name" />
      <template v-if="v$.lastName.$error" #error>
        <span v-if="v$.lastName.required">Veuillez indiquer votre nom</span>
      </template>
    </field>
    <field label="Prénom" :error="v$.firstName.$error">
      <inputa id="first_name" v-model="firstName" name="first_name" />
      <template v-if="v$.firstName.$error" #error>
        <span v-if="v$.firstName.required">Veuillez indiquer votre prénom</span>
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
import Inputa from '../../components/Inputa.vue'
import RadioGroup from '../../components/RadioGroup.vue'
import RadioButton from '../../components/RadioButton.vue'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  components: {
    RadioButton,
    RadioGroup,
    Inputa,
    Field,
    Heading,
  },

  setup() {
    return { v$: useVuelidate() }
  },

  computed: {
    ...mapFields(['customer.civility', 'customer.lastName', 'customer.firstName']),
  },

  validations() {
    return {
      civility: { required },
      lastName: { required },
      firstName: { required },
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
