<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { Sneakers } from '../../../types/types'

interface Props {
  sneakers: Sneakers[]
}

const props = defineProps<Props>()
const emit = defineEmits(['toggle-basket'])

const plusImage = ref('/plus.png')
const checkImage = ref('/check.png')

const handleToggleBasket = (id: number, sneak: Sneakers) => {
  emit('toggle-basket', { id, sneak })
}
</script>

<template>
  <div class="content__card">
    <div v-for="sneak in props.sneakers" :key="sneak.id" class="content__items">
      <h1 class="items__title">{{ sneak.name }}</h1>
      <img class="items__img" :src="sneak.img" alt="" />
      <div class="items__price">
        <div>
          <p class="price__label">Цена:</p>
          <p class="price__text">
            <strong> {{ sneak.price }} руб</strong>
          </p>
        </div>
        <button @click="handleToggleBasket(sneak.id, sneak)" class="button-basket">
          <img width="25px" height="25px" :src="sneak.isFavorite ? checkImage : plusImage" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content__card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.content__items {
  display: flex;
  flex-direction: column;
  gap: 0px;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  transition: box-shadow 0.3s e;
}

.content__items:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.items__title {
  font-size: 22px;
  font-weight: 400;
  text-align: center;
}

.items__img {
  width: 100%;
}

.items__text {
  text-align: start;
}

.items__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
}

.price__label {
  color: #6e6e6e;
  margin-bottom: 10px;
}

.button-basket {
  background-color: white;
  border: none;
  cursor: pointer;
}
</style>
