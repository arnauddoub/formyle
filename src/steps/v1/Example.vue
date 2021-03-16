<template>
  <div class="details">
    <fields>
      <field label="Téléphone">
        <input-numeric v-model="phone" />
      </field>
    </fields>
    <fields v-for="(test, index) in tests" :key="index">
      <label>Email <input v-model="test.email" /></label>
      <label>Address <input v-model="test.address" /></label>
      <button @click="removeTestsRow(index)">Remove</button>
    </fields>
    <button @click="addTestsRow">Add</button>
  </div>
</template>

<script>
import InputNumeric from '@/components/InputNumeric.vue'
import Field from '@/components/Field.vue'
import Fields from '@/components/Fields.vue'
import { mapMutations } from 'vuex'
import { createHelpers } from 'vuex-map-fields'

const { mapFields, mapMultiRowFields } = createHelpers({
  getterType: 'quote/getField',
  mutationType: 'quote/updateField',
})

export default {
  name: 'Form',
  components: {
    Fields,
    Field,
    InputNumeric,
  },

  computed: {
    ...mapFields(['phone']),
    ...mapMultiRowFields(['tests']),
  },
  methods: {
    ...mapMutations('quote', ['addTestsRow', 'removeTestsRow']),
  },
}
</script>
