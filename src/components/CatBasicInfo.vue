<template>
  <div class="">
    <Container
      :isNextButtonVisible="getNextButton"
      :isPrevButtonVisible="getPrevButton"
      :onClickNext="goNext"
      :onClickPrev="goPrev"
      :is-button-enabled="enableButton"
    >
      <template #Content>
        <h2>Dati anagrafici del gatto</h2>
        <h4>
          Compila il modulo sottostante, tutte le informazioni sul tuo gatto
          sono obbligatorie!
        </h4>
        <div class="catInfoWrapper">
          <div v-for="catInfo in catBasicInfo">
            <div class="label-item">
              <label for="catInfo"> {{ catInfo.label }}: </label>
            </div>
            <input
              class="input-field"
              type="text"
              :placeholder="catInfo.label"
              v-model="(store.catInformation[catInfo.value as keyof CatBasic])"
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
import type { CatBasic } from "@/types";
import { computed, onMounted } from "vue";

const store = useAppStore();

onMounted(() => {
  store.currentPage = 1;
});

const getNextButton = computed(() => {
  return store.currentPage === 1;
});

const getPrevButton = computed(() => {
  return store.currentPage === 1;
});
const goPrev = () => {
  store.currentPage = 0;
  router.push("/");
};

const goNext = () => {
  router.push("/cat-food");
  store.currentPage = 2;
};

const enableButton = computed(() => {
  return Object.values(store.catInformation).every((el) => el !== "");
});
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
