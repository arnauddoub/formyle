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
export default {
  name: 'FormT',

  data() {
    return {
      value: 100,
    }
  },
}
</script>
