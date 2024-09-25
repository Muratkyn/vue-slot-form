import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("store", () => {
  const name = ref<string>("");
  const catImage = ref<File>();
  //TODO: Add file uploader for cat images first try one then multiple
  return {
    name,
    catImage,
    
  };
});
