<template>
  <div>
    <heading :size="3" :center="true">Parfait ! Obtenez votre devis...</heading>
    <field label="Votre nom" :error="v$.lastName.$error">
      <inputa id="last_name" v-model="lastName" name="last_name" />
      <template v-if="v$.lastName.$error" #error>
        <span v-if="v$.lastName.required">Veuillez indiquer votre nom</span>
      </template>
    </field>
    <field label="Votre prénom" :error="v$.firstName.$error">
      <inputa id="first_name" v-model="firstName" name="first_name" />
      <template v-if="v$.firstName.$error" #error>
        <span v-if="v$.firstName.required">Veuillez indiquer votre prénom</span>
      </template>
    </field>
    <field label="Votre date de naissance" :error="v$.birthdate.$error">
      <inputa id="birthdate" v-model="birthdate" name="birthdate" />
      <template v-if="v$.birthdate.$error" #error>
        <span v-if="v$.birthdate.required">Veuillez indiquer votre date de naissance</span>
      </template>
    </field>
    <field label="Votre email" :error="v$.email.$error">
      <inputa id="email" v-model="email" name="email" />
      <template v-if="v$.email.$error" #error>
        <span v-if="v$.email.required">Veuillez indiquer votre email</span>
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
import { email } from '@vuelidate/validators'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  components: {
    Inputa,
    Field,
    Heading,
  },

  setup() {
    return { v$: useVuelidate() }
  },

  computed: {
    ...mapFields(['customer.lastName', 'customer.firstName', 'customer.birthdate', 'customer.email']),
  },

  validations() {
    return {
      lastName: { required },
      firstName: { required },
      birthdate: { required },
      email: { required, email },
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
