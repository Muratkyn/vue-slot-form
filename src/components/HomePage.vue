<template>
  <div class="home-wrapper">
    <h2>Start Survey now!</h2>
    <p>
      We are adding values by collecting informations ofr your cat health.Please
      follow the steps below and fill out the form.

      <br />
      Please follow the steps below and fill out the form.
    </p>
    <div class="terms-first-input">
      <input type="checkbox" name="terms" />
      <span>I would like to receive updates and notifications.</span>
    </div>
    <div class="terms-second-input">
      <input
        type="checkbox"
        name="terms"
        v-model="store.isChecked"
        :value="store.isChecked"
      />
      <span>I agree to the <a href="/not-found">terms and conditions</a></span>
    </div>
    <Container
      :isNextButtonVisible="true"
      :onClickNext="onClickNext"
      :isStepperVisible="showStepper"
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

const store = useAppStore();

const onClickNext = () => {
  router.push({ path: "/cat-basic" });
  store.currentPage = 1;
};

const showStepper = () => {
  return store.currentPage !== 0;
};
</script>

<style scoped>
.terms-first-input {
  align-self: start;
  padding: 2rem 0 0 12%;
}
.terms-second-input {
  align-self: start;
  padding-left: 12%;
}
</style>
