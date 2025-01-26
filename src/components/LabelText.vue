<template>
  <p class="font-light text-sm leading-[18px]" :style="{ color: '#757575' }">
    <span>{{ label }}:</span>&nbsp;
    <span :style="{ color: computedColorClass }">
      {{ formattedValue }}
    </span>
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  color: {
    type: String,
    default: '#757575',
  },
})

/**
 * Computes a formatted value based on the input value.
 * If the input value is a date string, it formats it as 'YYYY-MM-DD'.
 * Otherwise, it returns the input value as a string.
 */
const formattedValue = computed(() => {
  // Check if the value is a date string
  if (isDateString(props.value)) {
    // Parse the date string and extract year, month, and day
    const date = new Date(props.value)
    const year = date.getFullYear()
    const month = `${date.getMonth() + 1}`.padStart(2, '0')
    const day = `${date.getDate()}`.padStart(2, '0')

    // Return the formatted date string
    return `${year}-${month}-${day}`
  }

  // Return the value as a string if it's not a date
  return `${props.value}`
})

/**
 * Determines if a given value is a valid date string.
 *
 * @param value - The value to be checked, which can be a string or number.
 * @returns True if the value is a string that can be parsed into a valid date, otherwise false.
 */

function isDateString(value: string | number): boolean {
  return typeof value === 'string' && !isNaN(Date.parse(value))
}

/**
 * Computes a CSS color class for the label text based on the input color.
 * If the color is 'very-dark-grey', it returns '#282828'. Otherwise, it returns '#757575'.
 */
const computedColorClass = computed(() => {
  return props.color === 'very-dark-grey' ? '#282828' : '#757575'
})
</script>
