<template>
  <div class="home-wrapper">
    <div class="title-wrapper">
      <h2>Inizia questionario!</h2>
      <h4>
        Stiamo aggiungendo valore raccogliendo informazioni sulla salute del tuo
        gatto. Segui i passaggi indicati di seguito e compila il modulo.
        <br />
        Si prega di seguire i passaggi sottostanti e compila il modulo.
      </h4>
    </div>
    <div class="terms-first-input">
      <input type="checkbox" name="terms" />
      <span> Vorrei ricevere aggiornamenti e notifiche.</span>
    </div>
    <div class="terms-second-input">
      <input
        type="checkbox"
        name="terms"
        v-model="store.isChecked"
        :value="store.isChecked"
      />
      <span>Accetto <a href="/not-found">i termini e le condizioni</a></span>
    </div>
    <Container
      isNextButtonVisible
      :onClickNext="onClickNext"
      :isStepperVisible="showStepper()"
      :isButtonEnabled="store.isChecked"
    >
      <template #Content> </template>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/store";
import Container from "./shared/Container.vue";
import router from "@/router";
import { onMounted } from "vue";

const store = useAppStore();

onMounted(() => {
  store.currentPage = 0;
});

const onClickNext = () => {
  router.push({ path: "/cat-basic" });
  store.currentPage = 1;
};

const showStepper = () => {
  return store.currentPage === 0;
};
</script>

<style scoped>
.terms-first-input {
  align-self: start;
  font-weight: bold;
  padding: 2rem 0 0 20%;
}
.terms-second-input {
  align-self: start;
  font-weight: bold;
  padding-left: 20%;
}
</style>
