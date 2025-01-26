import { createRouter, createWebHistory } from 'vue-router'
import { useCharacterStore } from '../stores/characterStore'

import Characters from '../views/AllCharacters.vue'
import CharacterCard from '../views/CharacterCard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'characters',
      component: Characters,
      beforeEnter: async (_to, _from, next) => {
        const characterStore = useCharacterStore()
        // Check if characters are already loaded before fetching
        if (characterStore.characters.length === 0) {
          await characterStore.fetchAllCharacters()
        }
        next()
      },
    },
    {
      path: '/character/:id',
      name: 'character',
      component: CharacterCard,
      beforeEnter: async (to, _from, next) => {
        const characterStore = useCharacterStore()
        await characterStore.fetchCharacterById(Number(to.params.id))
        next()
      },
    },
  ],
})

export default router
