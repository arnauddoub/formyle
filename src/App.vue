<template>
  <div class="group">
    <heading :size="1">Heading</heading>
    <heading :size="2">Heading</heading>
    <heading :size="3">Heading</heading>
    <heading :size="4">Heading</heading>
    <heading :size="5">Heading</heading>
    <heading>Heading</heading>

    <field label="Input">
      <inputa id="inputa" v-model="inputaValue" name="inputa" />
    </field>

    <field label="Error" :error="true">
      <inputa id="error" name="error" />
      <template #error>
        <span>Veuillez indiquer votre nom</span>
      </template>
    </field>

    <field label="BirthDate">
      <birth-date id="birthDate" v-model="birthDateValue" name="birthDate" />
      <!-- <inputa id="birthDate" name="birthDate" /> -->
    </field>

    <field label="Select">
      <selecta id="selecta" v-model="selectaValue" name="selecta">
        <option selected />
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
      </selecta>
    </field>

    <field label="Radio button" type="radio">
      <radio-group>
        <radio-button id="radioButton-yes" v-model="radioButton" name="radioButton" :value="1">Yes</radio-button>
        <radio-button id="radioButton-no" v-model="radioButton" name="radioButton" :value="0">No</radio-button>
      </radio-group>
    </field>

    <categories :steps="steps" :current-step-index="0" />
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      inputaValue: null,
      birthDateValue: '',
      selectaValue: null,
      radioButton: 1,
      steps: [
        {
          name: 'StepOne',
          path: 'step-one',
          category: 'Step 1',
        },
        {
          name: 'StepTwo',
          path: 'step-two',
          category: 'Step 2',
        },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.group {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
