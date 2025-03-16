<script setup lang="ts">
import { defineProps } from 'vue'

interface Sneakers {
  id: number
  name: string
  price: number
  isFavorite: boolean
}

interface Props {
  sneakers: Sneakers[]
}

const props = defineProps<Props>()
</script>

<template>
  <div v-for="sneak in props.sneakers" :key="sneak.id" class="content__items">
    <h1>{{ sneak.name }}</h1>
    <p>{{ sneak.price }}$</p>
  </div>
</template>

<style scoped></style>
