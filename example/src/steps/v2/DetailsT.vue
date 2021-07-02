<template>
  <div class="details">
    <f-fields>
      <f-field label="Téléphone">
        <f-input-numeric v-model="value" :allow-decimal="true" />
      </f-field>
      <f-field label="Email">
        <f-input id="email" name="email" />
      </f-field>
    </f-fields>
    <f-field label="Adresse">
      <f-input id="address" name="address" />
    </f-field>
  </div>
</template>

<script>
export default {
  name: 'FormT',

  data() {
    return {
      value: 100,
    }
  },
}
</script>
