<template>
  <div class="field mb-4" :class="{ error }">
    <div v-if="type === 'radio'">
      <div class="block text-lg text-gray-500 leading-none mb-1">{{ label }}</div>
      <slot />
    </div>
    <div v-else class="relative border-2 rounded-md focus-within:border-alpha">
      <slot />
      <label v-if="label" class="absolute top-0 text-lg bg-white px-4 py-3 -z-1 duration-300 origin-0 text-gray-500">
        {{ label }}
      </label>
    </div>
    <div v-if="$slots.error" class="mt-1 text-red-400 text-sm">
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
    error: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.field input,
.field select {
  @apply block px-4 py-3 w-full text-lg appearance-none focus:outline-none bg-transparent;
}
.field.error > .relative {
  @apply border-red-300;
}
.field input:focus-within ~ label,
.field input:not(:placeholder-shown) ~ label,
.field select.active ~ label {
  @apply transform scale-75 -translate-y-4 z-0 ml-3 px-1 py-0;
}
.field input:focus-within ~ label,
.field select:focus-within ~ label {
  @apply text-alpha;
}
</style>
