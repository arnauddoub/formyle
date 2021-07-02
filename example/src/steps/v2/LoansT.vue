<template>
  <div class="loan">
    <f-fields>
      <f-field label="Montant du prêt">
        <f-input-numeric v-model="value" :allow-decimal="true" />
      </f-field>
      <f-field label="Taux de prêt">
        <f-input id="rate" name="rate" />
      </f-field>
    </f-fields>
    <f-field label="Durée totale">
      <f-input id="delay" name="delay" />
    </f-field>
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
