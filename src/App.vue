<script setup lang="ts">
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid rgb(168, 164, 164); */
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width: 50%;
  max-width: 80%;
}
</style>
