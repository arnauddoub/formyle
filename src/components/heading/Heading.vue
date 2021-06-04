<template>
  <h1 v-if="size === 1" :class="[headingClass, 'text-4xl']"><slot /></h1>
  <h2 v-else-if="size === 2" :class="[headingClass, 'text-3xl']"><slot /></h2>
  <h3 v-else-if="size === 3" :class="[headingClass, 'text-2xl']"><slot /></h3>
  <h4 v-else-if="size === 4" :class="[headingClass, 'text-xl']"><slot /></h4>
  <h5 v-else-if="size === 5" :class="[headingClass, 'text-lg']"><slot /></h5>
  <h6 v-else :class="headingClass"><slot /></h6>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    size: {
      type: Number,
      default: null,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    headingClass() {
      return {
        'mb-5 font-medium text-gray-800': true,
        'text-center': this.center,
      }
    },
  },
}
</script>
