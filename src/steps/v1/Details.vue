<template>
  <div>
    <heading :size="3">Votre compagnon</heading>
    <field label="Quelle est sa race ?" :error="v$.breed.$error">
      <selecta id="pet_breed" v-model="breed" name="pet_breed">
        <option selected />
        <option v-for="(breed, key) in breeds" :key="key" :value="key">{{ breed }}</option>
      </selecta>
      <template v-if="v$.breed.$error" #error>
        <span v-if="v$.breed.required">Veuillez sélectionner une race</span>
      </template>
    </field>
    <fields class="grid-cols-2">
      <field label="Quel est son nom ?" :error="v$.name.$error">
        <inputa id="pet_name" v-model="name" name="pet_name" />
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
    </fields>
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
import { breeds, years } from './data'
import Field from '../../components/Field.vue'
import Heading from '../../components/Heading.vue'
import Inputa from '../../components/Inputa.vue'
import Selecta from '../../components/Selecta.vue'
import RadioButton from '../../components/RadioButton.vue'
import RadioGroup from '../../components/RadioGroup.vue'
import Fields from '../../components/Fields.vue'

const { mapFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  components: {
    Fields,
    RadioGroup,
    RadioButton,
    Selecta,
    Inputa,
    Field,
    Heading,
  },

  emits: ['nextStep'],

  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      breeds,
      years,
    }
  },

  computed: {
    ...mapFields(['pet.breed', 'pet.name', 'pet.yearsOld', 'pet.gender', 'pet.identified']),
  },

  validations() {
    return {
      breed: { required },
      name: { required },
      yearsOld: { required },
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
