<template>
  <h1 v-if="size === 1" :class="[defaultClass, 'text-4xl']"><slot /></h1>
  <h2 v-else-if="size === 2" :class="[defaultClass, 'text-3xl']"><slot /></h2>
  <h3 v-else-if="size === 3" :class="[defaultClass, 'text-2xl']"><slot /></h3>
  <h4 v-else-if="size === 4" :class="[defaultClass, 'text-xl']"><slot /></h4>
  <h5 v-else-if="size === 5" :class="[defaultClass, 'text-lg']"><slot /></h5>
  <h6 v-else><slot /></h6>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: null,
    },
  },

  computed: {
    defaultClass() {
      return 'font-medium mb-5'
    },
  },
}
</script>
