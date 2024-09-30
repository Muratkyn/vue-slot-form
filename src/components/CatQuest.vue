<template>
  <div>
    <Container
      :isPrevButtonVisible="getPrevButton"
      :isButtonSubmitVisible="getSubmitButton"
      :onClickPrev="goPrev"
      :onClickSubmit="onSubmit"
    >
      <template #Content>
        <div class="title-wrapper">
          <h2>Feedback questionario</h2>
          <h4>
            Ci interessa la tua opinione, inviaci un feedback sulla tua
            esperienza con il modulo di questionario
            <br />
            che hai completato, contattaci per ulteriori informazioni.
          </h4>
        </div>
      </template>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/store";
import Container from "./shared/Container.vue";
import router from "@/router";

const store = useAppStore();

const getPrevButton = () => {
  return store.currentPage === 4;
};
const getSubmitButton = () => {
  return store.currentPage === 4;
};

const goPrev = () => {
  store.currentPage = 3;
  router.push("/cat-health");
};

const onSubmit = () => {
  store.currentPage = 3;
  router.push("/thank-you");
};
</script>

<style scoped>
.border {
  border: black solid 2px;
}
</style>
