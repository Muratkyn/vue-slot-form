export const catBasicInfo = [
  {
    label: "Nome",
    value: "catName",
  },
  {
    label: "Razza",
    value: "catBreed",
  },
  {
    label: "Eta'",
    value: "catAge",
  },
  {
    label: "Peso",
    value: "catWeight",
  },
];

export const catFoodData = [
  {
    name: "catFoodType",
    question: "Che tipo di cibo stai dando al tuo gatto?",
    answers: [
      {
        label: "Dry",
        value: 1,
      },
      {
        label: "Wet",
        value: 2,
      },
    ],
  },
  {
    name: "catFoodChange",
    question: "Cambi occasionalmente il tipo di cibo?",
    answers: [
      {
        label: "Yes",
        value: 1,
      },
      {
        label: "No",
        value: 2,
      },
    ],
  },
  {
    name: "catFoodQuality",
    question: "Vorresti riconsiderare la marca del cibo che stai regalando?",
    answers: [
      {
        label: "Yes",
        value: 1,
      },
      {
        label: "No",
        value: 2,
      },
      {
        label: "Not sure",
        value: 3,
      },
    ],
  },
  {
    name: "catFoodBrand",
    question:
      "Credi che cambiare marca aiuterà la salute generale del tuo gatto?",
    answers: [
      {
        label: "Yes",
        value: 1,
      },
      {
        label: "No",
        value: 2,
      },
      {
        label: "Not sure",
        value: 3,
      },
      {
        label: "Other",
        value: 4,
      },
    ],
  },
];
