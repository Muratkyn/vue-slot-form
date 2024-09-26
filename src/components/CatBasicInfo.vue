<template>
  <div class="">
    <Container
      :isNextButtonVisible="getNextButton"
      :isPrevButtonVisible="getPrevButton"
      :onClickNext="goNext"
      :onClickPrev="goPrev"
    >
      <template #Content>
        <h1>Cat info</h1>
        <div class="catInfoWrapper">
          <div v-for="catInfo in catBasicInfo">
            <div class="label-item">
              <label for="catInfo"> {{ catInfo.label }}: </label>
            </div>
            <input
              class="input-field"
              type="text"
              :placeholder="catInfo.label"
            />
          </div>
        </div>
      </template>
    </Container>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import Container from "./shared/Container.vue";
import { useAppStore } from "@/stores/store";
import { catBasicInfo } from "@/constants";

const store = useAppStore();

const getNextButton = () => {
  return store.currentPage === 1;
};

const getPrevButton = () => {
  return store.currentPage === 1;
};
const goPrev = () => {
  store.currentPage = 0;
  router.push("/");
};

const goNext = () => {};
</script>

<style scoped>
.catInfoWrapper {
  display: flex;
  flex-flow: column wrap;
  min-width: 70%;
  gap: 1rem;
}
.label-item {
  padding: 0.5rem;
}
</style>
