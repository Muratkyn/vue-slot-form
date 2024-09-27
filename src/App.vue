<script setup lang="ts"></script>

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
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width: 60%;
}
</style>
