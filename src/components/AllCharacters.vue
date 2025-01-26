<template>
  <div class="flex flex-wrap gap-y-8 gap-x-6 max-w-[1200px] w-full justify-center">
    <div class="flex flex-col gap-2" v-for="character in modelValue" :key="character.id">
      <router-link :to="{ name: 'character', params: { id: character.id } }">
        <img
          class="w-[220px] h-[220px] object-cover rounded-t-lg"
          :src="character.image"
          alt="character.name"
        />
        <p class="font-semibold text-xl leading-[26px] text-very-dark-grey truncate max-w-[220px]">
          {{ character.name }}
        </p>
        <div class="flex flex-col gap-1">
          <LabelText label="Status" :value="character.status" />
          <LabelText label="Species" :value="character.species" />
          <LabelText label="Gender" :value="character.gender" />
        </div>
      </router-link>
    </div>
    <!-- Progress Spinner -->
    <div v-if="characterStore.loading" class="flex flex-col items-center py-16">
      <ProgressSpinner /><span></span>
    </div>
    <!-- Error message -->
    <div v-if="characterStore.error" class="flex flex-col items-center py-16">
      <p>{{ characterStore.error }}</p>
      <button
        class="text-very-dark-grey font-semibold underline text-xl leading-[26px] cursor-pointer"
        @click="characterStore.fetchMore"
      >
        Try again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import LabelText from '../components/LabelText.vue'
import ProgressSpinner from 'primevue/progressspinner'
import { Characters, CharacterStore } from '../stores/characterStore'
import { PropType } from 'vue'
import { RouterLink } from 'vue-router'
import { useInfiniteScroll } from '@vueuse/core'

const el = window

const props = defineProps({
  modelValue: {
    type: Array as PropType<Characters[]>,
    required: true,
  },
  characterStore: {
    type: Object as PropType<CharacterStore>,
    required: true,
  },
})

/**
 * Infinite scroll function
 */
useInfiniteScroll(
  el,
  async () => {
    // If the store is loading or there is no more data, return
    if (props.characterStore.loading || !props.characterStore.hasMore) return

    // Fetch more data
    await props.characterStore.fetchMore()
  },
  {
    // The distance from the bottom of the element to load more data
    distance: 100,
    // A function that returns true if more data can be loaded
    canLoadMore: () => props.characterStore.hasMore && !props.characterStore.loading,
  },
)
</script>
