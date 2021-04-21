<template>
  <div>
    <heading :size="3" :center="true">Dites-nous en plus sur votre {{ animals[whichPet] }}...</heading>
    <field label="Quelle est sa race ?" :error="v$.breed.$error">
      <selecta id="pet_breed" v-model="breed" name="pet_breed">
        <option selected />
        <option v-for="(breed, key) in breeds[whichPet]" :key="key" :value="key">{{ breed }}</option>
      </selecta>
      <template v-if="v$.breed.$error" #error>
        <span v-if="v$.breed.required">Veuillez sélectionner une race</span>
      </template>
    </field>
    <field label="Quel est son nom ?" :error="v$.name.$error">
      <inputa id="pet_name" v-model.trim="name" name="pet_name" />
      <template v-if="v$.name.$error" #error>
        <span v-if="v$.name.required">Veuillez indiquer son nom</span>
      </template>
    </field>
    <field label="Quel est son âge ?" :error="v$.yearsOld.$error">
      <selecta id="pet_years_old" v-model="yearsOld" name="pet_years_old">
        <option selected />
        <option v-for="(year, key) in years" :key="key" :value="key">{{ year }}</option>
      </selecta>
      <template v-if="v$.yearsOld.$error" #error>
        <span v-if="v$.yearsOld.required">Veuillez sélectionner son âge</span>
      </template>
    </field>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { createHelpers } from 'vuex-map-fields'
import { breeds, years, animals } from './data'
import Field from '../../components/Field.vue'
import Heading from '../../components/Heading.vue'
import Inputa from '../../components/Inputa.vue'
import Selecta from '../../components/Selecta.vue'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  components: {
    Selecta,
    Inputa,
    Field,
    Heading,
  },

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
