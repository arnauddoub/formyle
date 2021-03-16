<template>
  <input v-model="displayValue" type="tel" placeholder=" " />
</template>

<script>
import { computed, watch, ref } from 'vue'
import { stripNaN } from '../utils/regex'
import { readableNumber, stripFirstZero } from '../utils/format'

export default {
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    min: {
      type: Number,
      default: null,
    },
  },

  emits: ['update:modelValue'],

  setup(props, ctx) {
    const input = ref(props.modelValue)

    const displayValue = computed({
      get: () => readableNumber(input.value),
      set: (val) => {
        input.value = val
      },
    })

    watch(
      () => displayValue.value,
      (newValue, oldValue) => {
        if (typeof newValue !== 'undefined' && newValue !== oldValue) {
          setValue(newValue)
        }
      },
    )

    const setValue = (value) => {
      let parseValue = stripNaN(value)
      props.max && parseValue > props.max && (parseValue = props.max)
      props.min && parseValue < props.min && (parseValue = props.min)
      parseValue = stripFirstZero(parseValue)
      // str = this.limitDecimal(str, oldVal)
      input.value = parseValue
      ctx.emit('update:modelValue', parseInt(parseValue))
    }

    return {
      displayValue,
    }
  },
}
</script>
