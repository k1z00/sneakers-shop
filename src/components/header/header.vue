<script setup lang="ts"></script>
<template>
  <div class="header">
    <div class="header__items">
      <img width="50px" height="50px" src="/sneakers.png" alt="" />
      <div class="header__link">
        <router-link class="header__link-link link" to="/">Home</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  margin: auto;
  margin-bottom: 200px;
  width: 90%;
}
.header__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__link-link {
  color: black;
  font-size: 20px;
}
</style>
