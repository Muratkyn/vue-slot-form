<script setup lang="ts">
import { useAppStore } from "@/stores/store";
import type { ButtonProps } from "@/types";
import { computed } from "vue";

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

const steps: number[] = [1, 2, 3, 4];
const stepsConfig = computed(() => {
  return steps.map((el) => {
    return {
      id: el,
      // isCurrent: el === store.currentPage,
      isCompleted: el < store.currentPage,
    };
  });
});
</script>

<template>
  <div class="stepper-wrapper" v-if="!isStepperVisible">
    <div v-for="step in stepsConfig" class="stepper-item__wrapper">
      <span
        :class="{
          backgroundGreen: step.isCompleted,
        }"
        >{{ step.id }}</span
      >
      <hr :class="{ proceeded: step.isCompleted }" v-if="step.id < 4" />
    </div>
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
      <button
        type="button"
        @click="onClickSubmit"
        v-if="isButtonSubmitVisible"
        :disabled="!isButtonEnabled"
      >
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
    <p v-if="store.currentPage < 5">
      Page <strong> {{ store.currentPage }} </strong> of {{ steps.length }}
    </p>
  </div>
</template>

<style scoped>
.stepper-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-block: 2rem;
}

.stepper-item__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
span {
  margin-left: 1rem;
  text-align: center;
  align-items: center;
  border-radius: 8rem;
  width: 1.2rem;
  background-color: white;
  border: #202020 solid;
  margin: 1rem;
}

.backgroundGreen {
  background-color: #81cf6b;
  font-weight: bold;
  border: solid #81cf6b;
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
