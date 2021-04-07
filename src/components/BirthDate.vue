<template>
  <div class="flex input-group" :class="{ active }">
    <div
      v-for="(item, index) in birthDate"
      :key="index"
      class="border border-t-0 border-b-0 flex-1"
      :class="{ 'flex-1 hidden': ['month', 'year'].includes(index) }"
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
      type: [String, Number],
      default: null,
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

    watch(
      () => [birthDate.day.value, birthDate.month.value, birthDate.year.value],
      () => {
        emit(
          'update:modelValue',
          `${birthDate.day.value.padStart(2, '0')}/${birthDate.month.value.padStart(2, '0')}/${birthDate.year.value}`,
        )
      },
    )

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
.active .border {
  @apply block;
}
.active .input {
  @apply opacity-100;
}
</style>
