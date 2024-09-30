<template>
  <div>
    <Container
      :isNextButtonVisible="getNextButton"
      :isPrevButtonVisible="getPrevButton"
      :is-button-enabled="enableButton"
      :onClickNext="goNext"
      :onClickPrev="goPrev"
    >
      <template #Content>
        <h2>Dati dei cibi del gatto</h2>
        <h4>
          Qui ti chiediamo di controllare le domande relative alle abitudini
          alimentari dei tuoi gatti
        </h4>
        <div
          v-for="(data, index) in catFoodData"
          :key="data.name"
          class="foodInfo-wrapper"
        >
          <div class="radio-wrapper">
            <label for="data">{{ index + 1 }} - {{ data.question }}</label>
            <div
              class="radio-wrapper__center"
              v-for="answer in data.answers"
              :key="answer.label"
            >
              <input
                type="radio"
                id="{{ data.name }}"
                :value="answer.value"
                :name="data.name"
                v-model="store.catFoodInformation[data.name as keyof CatFoodInformation]"
              />
              <label for="">{{ answer.label }}</label>
              <input
                v-if="
                  data.name === 'catFoodBrand' &&
                  store.catFoodInformation.catFoodBrand === 4 &&
                  answer.label === 'Other'
                "
                v-model="store.catFoodOther"
                placeholder="Specifica il motivo"
                class="input-field input-field__second"
              />
            </div>
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
import { computed, onMounted } from "vue";
import { catFoodData } from "@/constants";
import type { CatFoodInformation } from "@/types";

const store = useAppStore();

onMounted(() => {
  store.currentPage = 2;
});

const getNextButton = computed(() => {
  return store.currentPage === 2;
});

const getPrevButton = computed(() => {
  return store.currentPage === 2;
});

const goNext = () => {
  store.currentPage = 3;
  router.push("/cat-health");
};

const goPrev = () => {
  store.currentPage = 1;
  router.push("/cat-basic");
};

const enableButton = computed(() => {
  const allFieldsChosen = Object.values(store.catFoodInformation).every(
    (el) => el !== 0
  );

  const otherFieldChosen =
    store.catFoodInformation.catFoodBrand !== 4 ||
    (store.catFoodInformation.catFoodBrand === 4 && store.catFoodOther !== "");

  return allFieldsChosen && otherFieldChosen;
});
</script>

<style scoped></style>
