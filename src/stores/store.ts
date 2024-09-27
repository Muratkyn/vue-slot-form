import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("store", () => {
  const catName = ref<string>("");
  const catBreed = ref<string>("");
  const catAge = ref<string>("");
  const catBirthDate = ref<Date>();

  const catImage = ref<File>();
  const currentPage = ref<number>(0);
  const isChecked = ref<boolean>(false);
  //TODO: Add file uploader for cat images first try one then multiple
  return {
    catName,
    catBreed,
    catAge,
    catBirthDate,
    catImage,
    currentPage,
    isChecked,
  };
});
