<template>
  <div>
    <heading :size="3">Quel animal souhaitez-vous assurer ?</heading>
    <field type="radio">
      <radio-group>
        <radio-button
          id="witch_pet-chien"
          v-model="witchPet"
          name="witch_pet"
          value="dog"
          :error="v$.witchPet.$error"
          @change="$emit('nextStep')"
        >
          <div class="text-center">
            <img src="../../assets/dog.svg" alt="dog" width="60" height="60" />
            <div class="mt-2">Chien</div>
          </div>
        </radio-button>
        <radio-button
          id="witch_pet-chat"
          v-model="witchPet"
          name="witch_pet"
          value="cat"
          :error="v$.witchPet.$error"
          @change="$emit('nextStep')"
        >
          <img src="../../assets/cat.svg" alt="cat" width="60" height="60" />
          <div class="mt-2">Chat</div>
        </radio-button>
      </radio-group>
      <template v-if="v$.witchPet.$error" #error>
        <span v-if="v$.witchPet.required">Veuillez sélectionner votre animal à assurer</span>
      </template>
    </field>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { createHelpers } from 'vuex-map-fields'
import RadioGroup from '../../components/RadioGroup.vue'
import RadioButton from '../../components/RadioButton.vue'
import Field from '../../components/Field.vue'
import Heading from '../../components/Heading.vue'

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
