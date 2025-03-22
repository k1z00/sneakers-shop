<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../../../services/api'
import ContentItems from './content-items.vue'
import ContentFilter from './content-filter.vue'
import type { Sneakers, Bascked } from '../../../types/types'

const posts = ref<Sneakers[]>([])
const loading = ref(true)

onMounted(async () => {
  loading.value = true

  try {
    const data = await api.getPosts()
    posts.value = data
  } catch (e: any) {
    console.error('Ошибка при получении данных:', e)
  } finally {
    loading.value = false
  }
})

const handleToggleBasket = async (payload: { id: number; sneak: Sneakers }) => {
  const { id, sneak } = payload
  const sneaker = posts.value.find((snek) => snek.id === id)

  if (sneaker) {
    sneaker.isFavorite = !sneaker.isFavorite

    if (sneaker.isFavorite) {
      const bodyWithId: Bascked = {
        id: sneak.id - 1,
        name: sneak.name,
        price: sneak.price,
        img: sneak.img,
        isFavorite: sneak.isFavorite,
      }
      try {
        await api.postBasket(bodyWithId)
      } catch (error) {
        console.error('Ошибка при добавлении в корзину:', error)
        sneaker.isFavorite = !sneaker.isFavorite
      }
    } else {
      try {
        await api.deleteBasket(sneaker.id)
      } catch (error) {
        console.error('Ошибка при удалении из корзины:', error)
        sneaker.isFavorite = !sneaker.isFavorite
      }
    }
  }
}
</script>

<template>
  <div class="content container">
    <ContentFilter />
    <ContentItems :sneakers="posts" @toggle-basket="handleToggleBasket" />
  </div>
</template>

<style scoped>
.content {
  margin: auto;
}
</style>
