import type { CatBasic } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("store", () => {
  const catInformation = ref({
    catName: "",
    catAge: "",
    catBreed: "",
    catWeight: "",
  });

  const catFoodInformation = ref({
    catFoodType: 0,
    catFoodChange: 0,
    catFoodQuality: 0,
    catFoodBrand: 0,
  });
  const catFoodOther = ref<string>("");

  const catImage = ref<File>();
  const currentPage = ref<number>(0);
  const isChecked = ref<boolean>(false);
  //TODO: Add file uploader for cat images first try one then multiple
  return {
    catInformation,
    catFoodInformation,
    catFoodOther,
    catImage,
    currentPage,
    isChecked,
  };
});
