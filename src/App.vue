<template>
  <div class="flex flex-col pt-30 max-w-[1440px] mx-auto w-full" :class="pageLayout">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageLayout = computed(() => {
  return route.name === 'character' ? '' : 'items-center'
})
</script>
