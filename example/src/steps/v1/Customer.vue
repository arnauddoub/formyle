<template>
  <div>
    <f-heading :size="3" :center="true">Parfait ! Obtenez votre devis...</f-heading>
    <f-field label="Votre nom" :error="v$.lastName.$error">
      <f-input id="last_name" v-model.trim="lastName" name="last_name" />
      <template v-if="v$.lastName.$error" #error>
        <span v-if="v$.lastName.required">Veuillez indiquer votre nom</span>
      </template>
    </f-field>
    <f-field label="Votre prénom" :error="v$.firstName.$error">
      <f-input id="first_name" v-model.trim="firstName" name="first_name" />
      <template v-if="v$.firstName.$error" #error>
        <span v-if="v$.firstName.required">Veuillez indiquer votre prénom</span>
      </template>
    </f-field>
    <f-field label="Votre date de naissance" :error="v$.birthDate.$error">
      <f-birth-date id="birthDate" v-model="birthDate" name="birthDate" />
      <template v-if="v$.birthDate.$error" #error>
        <span v-if="v$.birthDate.required">Veuillez indiquer votre date de naissance</span>
      </template>
    </f-field>
    <f-field label="Votre email" :error="v$.email.$error">
      <f-input id="email" v-model.trim="email" name="email" />
      <template #icon><at-symbol-icon /></template>
      <template v-if="v$.email.$error" #error>
        <span v-if="v$.email.required">Veuillez indiquer votre email</span>
      </template>
    </f-field>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { createHelpers } from 'vuex-map-fields'

import { AtSymbolIcon } from '@heroicons/vue/24/outline'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  components: {
    AtSymbolIcon,
  },

  setup() {
    return { v$: useVuelidate() }
  },

  computed: {
    ...mapFields(['customer.lastName', 'customer.firstName', 'customer.birthDate', 'customer.email']),
  },

  validations() {
    return {
      lastName: { required },
      firstName: { required },
      birthDate: { required },
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
