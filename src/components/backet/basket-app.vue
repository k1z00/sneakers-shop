<script setup lang="ts">
import { onMounted } from 'vue'
import { useBasketStore } from '../../stores/basket'
import BasketItems from './basket-content/basket-items.vue'
import { storeToRefs } from 'pinia'

const basketStore = useBasketStore()
const { items, totalItems, totalPrice } = storeToRefs(basketStore)

onMounted(() => {
  basketStore.fetchBasketItems()
})
</script>

<template>
  <div class="basket container">
    <h1 class="basket__title">Корзина товаров</h1>
    <BasketItems :basket="items" :totalPrice="totalPrice" :totalItems="totalItems" />
  </div>
</template>

<style scoped>
.basket__title {
  text-align: center;
  font-weight: 600;
  color: rgb(54, 54, 54);
  margin-bottom: 50px;
}
</style>
