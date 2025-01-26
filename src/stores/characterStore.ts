import { defineStore } from 'pinia'
import { ref } from 'vue'
export type Characters = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
}
export type Character = {
  id: number
  name: string
  species: string
  status: string
  gender: string
  image: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  created: string
}
export type CharacterStore = {
  loading: boolean
  error: string
  hasMore: boolean
  fetchMore: () => Promise<void>
}

// Define a new store
export const useCharacterStore = defineStore('characterStore', () => {
  const characters = ref<Characters[]>([])
  const character = ref<Character | null>(null)
  const loading = ref(false)
  const error = ref('')
  const page = ref(1)
  const hasMore = ref(true)

  /**
   * Fetches the list of characters from the API.
   * If the request is in progress or there is an error, the function does nothing.
   * The function will automatically fetch the next page until there are no more pages.
   * The fetched characters are stored in the `characters` state.
   * The `loading` state is set to `true` while the request is in progress and set to `false` when the request is finished.
   * If there is an error, the `error` state is set to the error message.
   */
  async function fetchAllCharacters() {
    // If loading is already true, no more data is available, or there is an error, do nothing
    if (loading.value || !hasMore.value || error.value) return
    loading.value = true
    error.value = ''
    try {
      // Fetch characters from the API with the current page number
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page.value}`)
      if (!response.ok) throw new Error('Failed to fetch characters')
      const data = await response.json()
      if (!data.results || !Array.isArray(data.results)) {
        throw new Error('Invalid data format')
      }
      characters.value.push(...data.results)
      // Increment the page number for the next fetch
      page.value++
      // Check if there are more pages of data to fetch
      hasMore.value = Boolean(data.info.next)
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      // Set loading to false when the fetch is complete (either success or error)
      loading.value = false
    }
  }

  /**
   * Fetches a character from the API by ID.
   * If the request is in progress or there is an error, the function does nothing.
   * The fetched character is stored in the `character` state.
   * The `loading` state is set to `true` while the request is in progress and set to `false` when the request is finished.
   * If there is an error, the `error` state is set to the error message.
   * @param {number} id The ID of the character to fetch.
   */
  async function fetchCharacterById(id: number) {
    loading.value = true
    error.value = ''
    try {
      // Fetch a specific character by ID from the API
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      if (!response.ok) throw new Error('Failed to fetch character')
      character.value = await response.json()
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      // Set loading to false when the fetch is complete (either success or error)
      loading.value = false
    }
  }

  return { characters, character, loading, error, hasMore, fetchAllCharacters, fetchCharacterById }
})
