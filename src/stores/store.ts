import type {
  CatBasic,
  CatDiseaseHistory,
  CatFoodInformation,
  CatHealthData,
} from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("store", () => {
  const catInformation = ref<CatBasic>({
    catName: "",
    catAge: "",
    catBreed: "",
    catWeight: "",
  });

  const catFoodInformation = ref<CatFoodInformation>({
    catFoodType: 0,
    catFoodChange: 0,
    catFoodQuality: 0,
    catFoodBrand: 0,
  });
  const catFoodOther = ref<string>("");

  const catHealthData = ref<CatHealthData>({
    catHealthTrack: 0,
    catHealthHistory: 0,
  });

  const catDiseaseHistory = ref<CatDiseaseHistory>({
    pulci: 0,
    vermi: 0,
    diabete: 0,
    influenzaFelina: 0,
    clamidiaFelina: 0,
    none: 0,
  });

  const catImage = ref<File>();
  const currentPage = ref<number>(0);
  const isChecked = ref<boolean>(false);
  //TODO: Add file uploader for cat images first try one then multiple
  return {
    catInformation,
    catFoodInformation,
    catFoodOther,
    catHealthData,
    catDiseaseHistory,
    catImage,
    currentPage,
    isChecked,
  };
});
