<template>
  <div class="home-wrapper">
    <h2>Start Survey now!</h2>
    <p>
      We are adding values by collecting informations ofr your cat health.
      <br />
      Please follow the steps below and fill out the form.
    </p>
    <Container>
      <template #Content></template>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/store";
import Container from "./shared/Container.vue";

const store = useAppStore();
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 3rem;
  margin-block: 2rem;
}
</style>
