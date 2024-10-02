<template>
  <div>
    <Container
      is-next-button-visible
      is-prev-button-visible
      :is-button-enabled="enableButton"
      :onClickNext="goNext"
      :onClickPrev="goPrev"
    >
      <template #Content>
        <h2>Traccia salute del gatto</h2>
        <h4>
          Vi preghiamo di fornirci maggiori dettagli sulla storia sanitaria del
          tuo gatto che sono obbligatori.
        </h4>

        <div
          v-for="(data, index) in catHealthData"
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
                v-model="store.catHealthData[data.name as keyof CatHealthData ]"
              />
              <label for="">{{ answer.label }}</label>
            </div>
          </div>
        </div>
        <div
          v-for="(data, index) in catDiseaseHistory"
          :key="data.name"
          class="foodInfo-wrapper"
        >
          <div class="radio-wrapper">
            <label for="data">{{ index + 3 }} - {{ data.question }}</label>
            <div
              v-for="answer in data.answers"
              :key="answer.label"
              class="radio-wrapper__center"
            >
              <input
                type="checkbox"
                :id="`${data.name}-${index}`"
                :name="data.name"
                :checked="store.catDiseaseHistory[answer.name as keyof CatDiseaseHistory] === 1"
                @change="updateCheckboxState($event, answer.name)"
              />
              <label for="">{{ answer.label }}</label>
            </div>
          </div>
        </div>
      </template>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/store";
import Container from "./shared/Container.vue";
import { computed, onMounted } from "vue";
import router from "@/router";
import { catHealthData } from "@/constants";
import { catDiseaseHistory } from "@/constants";
import type { CatDiseaseHistory, CatHealthData } from "@/types";

const store = useAppStore();

onMounted(() => {
  store.currentPage = 3;
});
const enableButton = computed(() => {
  const radioBoxChosen = Object.values(store.catHealthData).every(
    (el) => el !== 0
  );
  const checkboxChosen = Object.values(store.catDiseaseHistory).some(
    (el) => el !== 0
  );

  return radioBoxChosen && checkboxChosen;
});

const goNext = () => {
  store.currentPage = 4;
  router.push("/cat-quest");
};

const goPrev = () => {
  store.currentPage = 3;
  router.push("/cat-food");
};

const updateCheckboxState = (event: Event, answerName: string) => {
  const isChecked = (event.target as HTMLInputElement).checked;

  if (answerName === "none" && isChecked) {
    Object.keys(store.catDiseaseHistory).forEach((key) => {
      store.catDiseaseHistory[key as keyof CatDiseaseHistory] = 0;
    });
  } else if (isChecked) {
    store.catDiseaseHistory.none = 0;
  }

  store.catDiseaseHistory[answerName as keyof CatDiseaseHistory] = isChecked
    ? 1
    : 0;
};
</script>

<style scoped></style>