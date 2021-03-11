<template>
  <div class="field">
    <slot v-if="type === 'radio'" />
    <div v-else class="relative border-2 rounded-md focus-within:border-blue-500 mb-4">
      <slot />
      <label v-if="label" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0 text-gray-500">
        {{ label }}
      </label>
    </div>
    <div v-if="$slots.error" class="text-red-400">
      <slot name="error" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-4 z-0 ml-3 px-1 py-0;
}

input:focus-within ~ label {
  @apply text-blue-500;
}
</style>
