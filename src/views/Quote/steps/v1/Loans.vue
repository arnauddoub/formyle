<template>
  <div class="loan">
    <fields>
      <field label="Montant du prêt">
        <input-numeric v-model="value" :allow-decimal="true" />
      </field>
      <field label="Taux de prêt">
        <inputa />
      </field>
    </fields>
    <field label="Durée totale">
      <inputa />
    </field>
  </div>
</template>

<script>
import InputNumeric from '../../../../components/InputNumeric.vue'
import Field from '../../../../components/Field.vue'
import Fields from '../../../../components/Fields.vue'
import Inputa from '../../../../components/Inputa.vue'

export default {
  name: 'Loan',
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
