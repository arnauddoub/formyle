<template>
  <input
    type="text"
    class="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent"
    placeholder=" "
  />
</template>

<script>
export default {
  props: {
    modalValue: {
      type: [String, Number],
      default: null,
    },
  },
}
</script>
