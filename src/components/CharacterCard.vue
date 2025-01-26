<template>
  <div class="flex flex-col gap-16 pl-0 items-center sm:pl-30 sm:items-start">
    <!-- Character Card -->
    <div class="flex gap-6 flex-col sm:flex-row">
      <img
        class="w-[400px] h-[400px] object-cover rounded-sm"
        :src="modelValue.image"
        alt="character.name"
      />
      <div class="flex gap-2 flex-col">
        <p class="font-semibold text-xl leading-[26px]" style="color: #282828">
          {{ modelValue.name }}
        </p>
        <LabelText label="Character Id" :value="modelValue.id" color="darkGrey" />
        <LabelText label="Species" :value="modelValue.species" color="darkGrey" />
        <LabelText label="Status" :value="modelValue.status" color="darkGrey" />
        <LabelText label="Gender" :value="modelValue.gender" color="darkGrey" />
        <LabelText label="Origin" :value="modelValue.origin.name" color="darkGrey" />
        <LabelText label="Location" :value="modelValue.location.name" color="darkGrey" />
        <LabelText label="Created Date" :value="modelValue.created" color="darkGrey" />
      </div>
    </div>
    <!--  Back button -->
    <button
      @click="() => $router.back()"
      class="font-semibold underline text-xl leading-[26px] cursor-pointer"
      style="color: #282828"
    >
      Back
    </button>
  </div>
</template>

<script setup lang="ts">
import LabelText from '../components/LabelText.vue'
import { PropType } from 'vue'
import { Character } from '../stores/characterStore'

// Props
defineProps({
  modelValue: {
    type: Object as PropType<Character>,
    required: true,
  },
})
</script>
