<script setup lang="ts">
import type { Bascked } from '../../../types/types'
import { defineProps } from 'vue'
import { ref } from 'vue'

interface Props {
  basket: Bascked[]
  totalPrice: number
  totalItems: number
}

const props = defineProps<Props>()

const quantity = ref(1)
</script>

<template>
  <div class="basket___items">
    <div class="basket___items--item">
      <div class="basket___card" v-for="item in props.basket" :key="item.id">
        <img class="basket___card-image" :src="item.img" :alt="item.name" />
        <h2 class="basket___card-title">{{ item.name }}</h2>
        <p class="basket___card-price">Цена: {{ item.price }} ₽</p>
        <div class="basket___card-quantity">
          <button @click="quantity > 1 ? quantity-- : quantity">-</button>
          <span>{{ quantity }}</span>
          <button @click="quantity++">+</button>
        </div>
        <button class="basket___card-remove">Удалить</button>
      </div>
    </div>
    <div class="basket___summary">
      <p class="basket___summary-text">
        Всего товаров:
        <span class="basket___summary-value">{{ props.totalItems }}</span>
      </p>
      <p class="basket___summary-text">
        Общая стоимость:
        <span class="basket___summary-value">{{ props.totalPrice }} ₽</span>
      </p>
      <button class="basket___summary-checkout">Оформить заказ</button>
    </div>
  </div>
</template>

<style scoped>
.basket___items {
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 24px;
  width: 90%;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  font-family: 'Arial', sans-serif;
}

.basket___items--item {
  width: 65%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.basket___card {
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  text-align: center;
}

.basket___card-image {
  width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 8px;
}

.basket___card-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

.basket___card-price {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.basket___card-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.basket___card-quantity button {
  background-color: #eee;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.basket___card-quantity span {
  margin: 0 8px;
  font-size: 14px;
}

.basket___card-remove {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.basket___card-remove:hover {
  background-color: #c0392b;
}

.basket___summary {
  width: 20%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 10px;
}

.basket___summary-text {
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}

.basket___summary-value {
  font-weight: 600;
  color: green;
}

.basket___summary-checkout {
  background-color: black;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

.basket___summary-checkout:hover {
  background-color: #27ae60;
}
</style>
