<script setup lang="ts">
import { useAppStore } from "@/stores/store";
import type { ButtonProps } from "@/types";

withDefaults(defineProps<ButtonProps>(), {
  isButtonSubmitVisible: false,
  isNextButtonVisible: false,
  isPrevButtonVisible: false,
  isStepperVisible: false,
  isButtonEnabled: false,
  onClickSubmit: () => {},
  onClickNext: () => {},
  onClickPrev: () => {},
});

const store = useAppStore();

// const makeBackgroundGreen = () => {
//   if (store.currentPage === 1) {
//     return;
//   }
// };
</script>

<template>
  <div class="stepper-wrapper" v-if="!isStepperVisible">
    <span
      :class="{
        backgroundGreen:
          store.currentPage === 2 ||
          store.currentPage === 3 ||
          store.currentPage === 4,
      }"
      >1</span
    >
    <hr :class="{ proceeded: store.currentPage > 1 }" />
    <span
      :class="{
        backgroundGreen: store.currentPage === 3 || store.currentPage === 4,
      }"
      >2</span
    >
    <hr :class="{ proceeded: store.currentPage > 2 }" />
    <span
      :class="{
        backgroundGreen: store.currentPage === 4,
      }"
      >3</span
    >
    <hr :class="{ proceeded: store.currentPage > 3 }" />
    <span
      :class="{
        backgroundGreen: store.currentPage > 4,
      }"
      >4</span
    >
  </div>

  <div class="home-wrapper">
    <slot name="Content"></slot>
    <div class="button-wrapper">
      <button type="button" @click="onClickPrev" v-if="isPrevButtonVisible">
        Prev
      </button>
      <button
        type="button"
        @click="onClickNext"
        v-if="isNextButtonVisible"
        :disabled="!isButtonEnabled"
      >
        Next
      </button>
      <button type="button" @click="onClickSubmit" v-if="isButtonSubmitVisible">
        Submit
      </button>
    </div>
  </div>
  <div
    class="home-wrapper"
    v-if="
      store.currentPage > 0
      //TODO: do not show it when thank you page renders
    "
  >
    <p>
      Page <strong> {{ store.currentPage }} </strong> of 4
    </p>
  </div>
</template>

<style scoped>
.stepper-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block: 2rem;
}
span {
  margin-left: 1rem;
  text-align: center;
  align-items: center;
  border-radius: 8rem;
  width: 1.2rem;
  background-color: white;
  border: #202020 solid;
}

.backgroundGreen {
  background-color: #81cf6b;
  font-weight: bold;
  border: solid #81cf6b ;
}

hr {
  width: 150px;
  border-color: grey;
}
.proceeded {
  border-color: #81cf6b;
  background: linear-gradient(50%);
}
.button-wrapper {
  margin-block: 1rem;
}
button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
</style>
