<template>
  <CharacterCard v-if="character" v-model="character" />
</template>
<script setup lang="ts">
import CharacterCard from '../components/CharacterCard.vue'
import { ref } from 'vue'
import { useCharacterStore } from '../stores/characterStore'

// Get the character store
const characterStore = useCharacterStore()
const character = ref(characterStore.character)
</script>
