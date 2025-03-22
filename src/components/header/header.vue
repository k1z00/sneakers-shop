<script setup lang="ts"></script>
<template>
  <div class="header">
    <div class="header__items">
      <img width="50px" height="50px" src="/sneakers.png" alt="" />
      <div class="header__link">
        <router-link class="header__link-link link" to="/">Home</router-link>
        <router-link class="header__link-link link" to="/backet">
          <img width="25px" height=" 25px" src="/public/basket.png" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  margin: auto;
  margin-bottom: 150px;
  width: 100%;
  padding: 10px 0;
}
.header__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 90%;
  margin: auto;
}
.header__link {
  display: flex;
  gap: 50px;
}
.header__link-link {
  color: black;
  font-size: 20px;
  position: relative;
}
.header__link-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 1px;
  background-color: rgb(53, 53, 53);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}
.header__link-link:hover::after {
  transform: scaleX(1);
}
</style>
