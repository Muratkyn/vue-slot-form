<script setup lang="ts">
import type { Props } from "@/types";

defineProps({
  // isButtonSubmitVisible: false,
});
</script>

<template>
  <div>
    <slot name="Content"></slot>
    <button>Prev</button>
    <button>Next</button>
    <button>Submit</button>
  </div>
</template>

<style lang="scss" scoped></style>
