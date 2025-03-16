<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../../../services/api'
import ContentItems from './content-items.vue'

interface Sneakers {
  id: number
  name: string
  price: number
  isFavorite: boolean
}

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
</script>

<template>
  <div class="content container">
    <ContentItems :sneakers="posts" />
  </div>
</template>

<style scoped></style>
