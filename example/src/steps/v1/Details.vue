<template>
  <div>
    <f-heading :size="3" :center="true">Dites-nous en plus sur votre {{ animals[whichPet] }}...</f-heading>
    <f-field label="Quelle est sa race ?" :error="v$.breed.$error">
      <f-select id="pet_breed" v-model="breed" name="pet_breed">
        <option selected />
        <option v-for="(breed, key) in breeds[whichPet]" :key="key" :value="key">{{ breed }}</option>
      </f-select>
      <template v-if="v$.breed.$error" #error>
        <span v-if="v$.breed.required">Veuillez sélectionner une race</span>
      </template>
    </f-field>
    <f-field label="Quel est son nom ?" :error="v$.name.$error">
      <f-input id="pet_name" v-model.trim="name" name="pet_name" />
      <template v-if="v$.name.$error" #error>
        <span v-if="v$.name.required">Veuillez indiquer son nom</span>
      </template>
    </f-field>
    <f-field label="Quel est son âge ?" :error="v$.yearsOld.$error">
      <f-select id="pet_years_old" v-model="yearsOld" name="pet_years_old">
        <option selected />
        <option v-for="(year, key) in years" :key="key" :value="key">{{ year }}</option>
      </f-select>
      <template v-if="v$.yearsOld.$error" #error>
        <span v-if="v$.yearsOld.required">Veuillez sélectionner son âge</span>
      </template>
    </f-field>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { createHelpers } from 'vuex-map-fields'
import { breeds, years, animals } from './data'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      breeds,
      years,
      animals,
    }
  },

  computed: {
    ...mapFields(['pet.whichPet', 'pet.breed', 'pet.name', 'pet.yearsOld']),
  },

  validations() {
    return {
      breed: { required },
      name: { required },
      yearsOld: { required },
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
