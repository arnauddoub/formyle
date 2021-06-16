<template>
  <div class="loan">
    <fields>
      <field label="Montant du prêta">
        <input-numeric v-model="value" :allow-decimal="true" />
      </field>
      <field label="Taux de prêta">
        <inputa />
      </field>
    </fields>
    <field label="Durée totale">
      <inputa />
    </field>
  </div>
</template>

<script>
export default {
  name: 'LoanT',

  data() {
    return {
      value: 100,
    }
  },
}
</script>
