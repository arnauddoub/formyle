<template>
  <div class="field mb-4" :class="{ error }">
    <div v-if="type === 'radio'">
      <div class="block text-gray-500 leading-none mb-2">{{ label }}</div>
      <slot />
    </div>
    <div v-else class="relative border border-gray-300 rounded-md focus-within:border-alpha">
      <slot />
      <label v-if="label" class="absolute top-0 bg-white px-4 py-3 -z-1 duration-300 origin-0 text-gray-500">
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
