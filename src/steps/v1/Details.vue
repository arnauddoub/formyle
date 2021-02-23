<template>
  <div class="details">
    <fields>
      <field label="Téléphone">
        <input-numeric v-model="value" :allow-decimal="true" />
      </field>
      <field label="Email">
        <inputa />
      </field>
    </fields>
    <field label="Adresse">
      <inputa />
    </field>
  </div>
</template>

<script>
import InputNumeric from '@/components/InputNumeric.vue'
import Field from '@/components/Field.vue'
import Fields from '@/components/Fields.vue'
import Inputa from '@/components/Inputa.vue'

export default {
  name: 'Form',
  components: {
    Inputa,
    Fields,
    Field,
    InputNumeric,
  },

  data() {
    return {
      value: 100,
    }
  },
}
</script>
