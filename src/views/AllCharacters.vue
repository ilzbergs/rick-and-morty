<template>
  <AllCharacters
    v-model="characters"
    :characterStore="{
      loading: characterStore.loading,
      error: characterStore.error,
      hasMore: characterStore.hasMore,
      fetchMore: characterStore.fetchAllCharacters,
    }"
  />
</template>

<script setup lang="ts">
import AllCharacters from '../components/AllCharacters.vue'
import { ref } from 'vue'
import { useCharacterStore } from '../stores/characterStore'

const characterStore = useCharacterStore()
const characters = ref(characterStore.characters)
</script>
