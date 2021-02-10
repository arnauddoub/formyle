<template>
  <div class="text-center mb-5">
    <ul class="flex">
      <li v-for="category in categories" :key="category" class="flex-1">{{ category }}</li>
    </ul>
    <div class="w-full h-1 bg-gray-200">
      <div class="bg-blue-500 h-full" :style="{ width: width + '%' }" />
    </div>
  </div>
</template>

<script>
import { STEPS } from '../views/Form/steps'

export default {
  props: {
    currentStepIndex: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      width: 0,
      categories: [],
    }
  },
  watch: {
    currentStepIndex(newValue, oldValue) {
      if (newValue > oldValue) {
        this.progressBarIncrement(newValue)
      } else {
        this.progressBarDecrement(newValue + 1)
      }
    },
  },
  mounted() {
    this.distinctCategory()
    if (this.currentStepIndex > 0) {
      for (let i = 0; i < this.currentStepIndex + 1; i++) {
        this.progressBarIncrement(i)
      }
    } else {
      this.progressBarIncrement(this.currentStepIndex)
    }
  },
  methods: {
    distinctCategory() {
      STEPS.forEach((value) => {
        if (this.categories.indexOf(value.category) === -1) {
          this.categories.push(value.category)
        }
      })
    },
    countStepByCategory(index) {
      return STEPS.reduce((counter, obj) => (obj.category === STEPS[index].category ? (counter += 1) : counter), 0)
    },
    progressBarIncrement(index) {
      this.width += 100 / this.categories.length / this.countStepByCategory(index)
    },
    progressBarDecrement(index) {
      this.width -= 100 / this.categories.length / this.countStepByCategory(index)
    },
  },
}
</script>
