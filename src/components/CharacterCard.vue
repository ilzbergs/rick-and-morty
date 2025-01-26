<template>
  <div class="flex flex-col gap-16 pl-0 items-center sm:pl-30 sm:items-start">
    <div class="flex gap-6 flex-col sm:flex-row">
      <img
        class="w-[400px] h-[400px] object-cover rounded-sm"
        :src="modelValue.image"
        alt="character.name"
      />
      <div class="flex gap-2 flex-col">
        <p class="font-semibold text-xl leading-[26px] text-very-dark-grey">
          {{ modelValue.name }}
        </p>
        <LabelText label="Character Id" :value="modelValue.id" color="very-dark-grey" />
        <LabelText label="Species" :value="modelValue.species" color="very-dark-grey" />
        <LabelText label="Status" :value="modelValue.status" color="very-dark-grey" />
        <LabelText label="Gender" :value="modelValue.gender" color="very-dark-grey" />
        <LabelText label="Origin" :value="modelValue.origin.name" color="very-dark-grey" />
        <LabelText label="Location" :value="modelValue.location.name" color="very-dark-grey" />
        <LabelText label="Created Date" :value="modelValue.created" color="very-dark-grey" />
      </div>
    </div>
    <!--    Back button -->
    <router-link
      :to="{ name: 'characters' }"
      class="text-very-dark-grey font-semibold underline text-xl leading-[26px] cursor-pointer"
    >
      Back
    </router-link>
  </div>
</template>

<script setup lang="ts">
import LabelText from '../components/LabelText.vue'
import { PropType } from 'vue'
import { Character } from '../stores/characterStore'

defineProps({
  modelValue: {
    type: Object as PropType<Character>,
    required: true,
  },
})
</script>
