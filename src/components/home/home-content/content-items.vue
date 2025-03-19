<script setup lang="ts">
import { ref } from 'vue'
import api from '../../../services/api'

interface Sneakers {
  id: number
  name: string
  price: number
  img: string
  isFavorite: boolean
}

interface Bascked {
  id: number
  name: string
  price: number
  img: string
  isFavorite: boolean
}

interface Props {
  sneakers: Sneakers[]
}

const plusImage = ref('/plus.png')
const checkImage = ref('/check.png')
const props = defineProps<Props>()

const handlePushBasket = async (id: number, sneak: Sneakers) => {
  const sneaker = props.sneakers.find((snek) => snek.id === id)
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
      await api.postBasket(bodyWithId)
    } else {
      await api.deleteBasket(sneaker.id)
    }
  }
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
        <button @click="handlePushBasket(sneak.id, sneak)" class="button-basket">
          <img width="25px" height="25px" :src="sneak.isFavorite ? checkImage : plusImage" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content__card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-left: 20px;
}
.content__items {
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 20px;
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
