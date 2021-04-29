<template>
  <div class="flex input-group w-full" :class="{ active }">
    <div
      v-for="(item, index) in birthDate"
      :key="index"
      class="flex-1"
      :class="{ 'hidden border-l': ['month', 'year'].includes(index) }"
    >
      <input
        :id="`${id}-${index}`"
        :ref="(el) => (item.ref = el)"
        v-model="item.value"
        v-maska="index === 'year' ? '####' : '##'"
        :name="`${name}`"
        type="tel"
        class="input text-center opacity-0"
        :placeholder="item.placeholder"
        :maxlength="index === 'year' ? '4' : '2'"
        @focus="toggleFocus(index, true)"
        @blur="toggleFocus(index, false)"
        @input="check($event, index)"
      />
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'

export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const splitSlash = (value, index) => {
      return value ? value.split('/')[index] : ''
    }

    const birthDate = reactive({
      day: {
        ref: null,
        value: '',
        placeholder: 'JJ',
        isFocused: false,
      },
      month: {
        ref: null,
        value: '',
        placeholder: 'MM',
        isFocused: false,
      },
      year: {
        ref: null,
        value: '',
        placeholder: 'AAAA',
        isFocused: false,
      },
    })

    const active = ref(false)
    const displayValue = ref('')

    const toggleFocus = (input, status) => {
      birthDate[input].isFocused = status
      setTimeout(() => {
        if (birthDate.day.isFocused || birthDate.month.isFocused || birthDate.year.isFocused) {
          active.value = true
        } else {
          if (!birthDate.day.value && !birthDate.month.value && !birthDate.year.value) {
            active.value = false
          }
        }
      }, 10)
    }

    const check = ($event, input) => {
      const value = $event.target.value
      if (input === 'day') {
        if (parseInt(value) >= 4 || value.length === 2) {
          birthDate.month.ref.focus()
        }
      } else if (input === 'month') {
        if (!['', '0', '1'].includes(value)) {
          birthDate.year.ref.focus()
        }
      }
    }

    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue !== displayValue.value) {
          birthDate.day.value = splitSlash(newValue, 0)
          birthDate.month.value = splitSlash(newValue, 1)
          birthDate.year.value = splitSlash(newValue, 2)
          if (birthDate.day.value && birthDate.month.value && birthDate.year.value) {
            active.value = true
          }
        }
      },
      { immediate: true },
    )

    watch(
      () => [birthDate.day.value, birthDate.month.value, birthDate.year.value],
      () => {
        if (birthDate.day.value || birthDate.month.value || birthDate.year.value) {
          displayValue.value = `${birthDate.day.value}/${birthDate.month.value}/${birthDate.year.value}`
        } else {
          displayValue.value = ''
        }
        if (displayValue.value !== props.modelValue) {
          emit('update:modelValue', displayValue.value)
        }
      },
    )

    return {
      active,
      birthDate,
      toggleFocus,
      check,
    }
  },
}
</script>

<style scoped>
.active > .hidden {
  @apply block;
}
.active .input {
  @apply opacity-100;
}
</style>
