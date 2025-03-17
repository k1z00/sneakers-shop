<script setup lang="ts">
interface Sneakers {
  id: number
  name: string
  price: number
  img: string
  isFavorite: boolean
}

interface Props {
  sneakers: Sneakers[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="content__card">
    <div v-for="sneak in props.sneakers" :key="sneak.id" class="content__items">
      <h1 class="items__title">{{ sneak.name }}</h1>
      <img class="items__img" :src="sneak.img" alt="" />
      <p class="items__text">{{ sneak.price }}$</p>
    </div>
  </div>
</template>

<style scoped>
.content__card {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 колонки */
  gap: 20px;
  padding-left: 20px;
}
.content__items {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  transition: box-shadow 0.3s e;
}

.content__items:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.items__title {
  font-size: 22px;
  font-weight: 400;
}

.items__img {
  width: 60%;
}
.items__text {
  text-align: start;
}
</style>
