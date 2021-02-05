<template>
  <div class="home">
    <form class="max-w-xl mx-auto mt-40">
      <fields>
        <field label="Test">
          <input-numeric v-model="value" :allow-decimal="true" />
        </field>

        <field label="Test">
          <inputa />
        </field>
      </fields>
    </form>
  </div>
</template>

<script>
import InputNumeric from '../components/InputNumeric.vue'
import Field from '../components/Field.vue'
import Fields from '../components/Fields.vue'
import Inputa from '../components/Inputa.vue'

export default {
  name: 'Home',
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

  methods: {
    getValue() {
      console.log('click', this.value, typeof this.value)
    },
  },
}
</script>
