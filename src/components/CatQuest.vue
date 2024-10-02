<template>
  <div>
    <Container
      isPrevButtonVisible
      isButtonSubmitVisible
      :is-button-enabled="enableButton"
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
        <div class="numbers-container">
          <div class="center-numbers" v-for="(_, i) in 6" :key="i">
            <p v-if="i > 0">{{ i }}</p>
            <p v-if="i === 1">Per niente</p>
            <p v-if="i === 5">Moltissimo</p>
          </div>
        </div>
        <div
          v-for="(data, index) in catQuestData"
          :key="data.name"
          class="quest-wrapper"
        >
          <div class="quest-container">
            <div class="quest-container__label">
              <label :name="data.name" for="data.question1">{{
                data.question1
              }}</label>
              <br />
              <label
                :class="{ fontBold: data.question2 }"
                v-if="data.question2"
                :name="data.name"
                :for="data.question2"
                >{{ data.question2 }}</label
              >
            </div>

            <div
              class="radio-container"
              v-for="(answer, index) in data.answers"
              :key="index"
            >
              <input
                type="radio"
                :id="data.name"
                :value="answer"
                :name="data.name"
                v-model="store.catQuestData[data.name as keyof CatQuestData]"
              />
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
import router from "@/router";
import { catQuestData } from "@/constants";
import type { CatQuestData } from "@/types";
import { computed } from "vue";

const store = useAppStore();

const enableButton = computed(() => {
  return Object.values(store.catQuestData).every((el) => el !== 0);
});
const goPrev = () => {
  store.currentPage = 3;
  router.push("/cat-health");
};

const onSubmit = () => {
  store.currentPage = 5;
  router.push("/thank-you");
};
</script>

<style scoped>
.quest-wrapper {
  align-self: flex-start;
  margin-left: 1rem;
  border: #f5f5f5 solid 1px;
  border-left: none;
}

.numbers-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
}

.quest-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
}
.quest-container__label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 280px;
  height: 100px;
  margin-inline: 1rem;
}

.fontBold {
  font-weight: bold;
}

.radio-container {
  display: flex;
  justify-content: center;
  border: solid #f5f5f5 1px;
  height: 150px;
  width: 110px;
  border-bottom: none;
}

.center-numbers {
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
  border: #f5f5f5 solid 2px;
  border-bottom: none;
  width: 100.5px;
  height: 80px;
  border-left: none;
  border-top: none;
}

p {
  font-size: small;
  font-weight: bold;
}
</style>
