import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import CatBasicInfo from "@/components/CatBasicInfo.vue";
import CatFoodInfo from "@/components/CatFoodInfo.vue";
import CatHealthInfo from "@/components/CatHealthInfo.vue";
import CatVaccineInfo from "@/components/CatVaccineInfo.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/cat-basic",
      name: "catBasic",
      component: CatBasicInfo,
    },
    {
      path: "/cat-food",
      name: "catFood",
      component: CatFoodInfo,
    },
    {
      path: "/cat-health",
      name: "catHealth",
      component: CatHealthInfo,
    },
    {
      path: "/cat-vaccine",
      name: "catVaccine",
      component: CatVaccineInfo,
    },
  ],
});

export default router;
