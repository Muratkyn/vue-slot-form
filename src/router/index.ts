import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import CatBasicInfo from "@/components/CatBasicInfo.vue";
import CatFoodInfo from "@/components/CatFoodInfo.vue";
import CatHealthInfo from "@/components/CatHealthInfo.vue";
import CatQuest from "@/components/CatQuest.vue";
import ThankYou from "@/components/ThankYou.vue";

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
      path: "/cat-quest",
      name: "catQuest",
      component: CatQuest,
    },
    {
      path: "/thank-you",
      name: "thankYou",
      component: ThankYou,
    },
  ],
});

export default router;
