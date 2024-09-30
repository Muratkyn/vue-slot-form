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

export const catHealthData = [
  {
    name: "catHealthTrack",
    question: "Se il vostro gatto avesse un problema di salute, cosa fareste?",
    answers: [
      {
        label: "Lo porterei dal veterinario",
        value: 1,
      },
      {
        label: "Mi prenderei cura di lui/lei io stessa",
        value: 2,
      },
      {
        label: "Preferirei cercare su internet",
        value: 3,
      },
      {
        label: "Aspetterei che passasse",
        value: 4,
      },
    ],
  },
  {
    name: "catHealthHistory",
    question: "Il vostro gatto ha avuto qualche malattia negli ultimi 6 mesi?",
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
];

export const catDiseaseHistory = [
  {
    name: "catDiseaseHistory",
    question:
      "Seleziona di seguito le malattie che il tuo gatto ha avuto fino ad ora",
    answers: [
      {
        name: "pulci",
        label: "Pulci",
      },
      {
        name: "vermi",
        label: "Vermi",
      },
      {
        name: "diabete",
        label: "Diabete",
      },
      {
        name: "influenzaFelina",
        label: "Influenza felina",
      },
      {
        name: "clamidiaFelina",
        label: "Clamidia felina",
      },
      {
        name: "none",
        label: "None",
      },
    ],
  },
];

export const catQuestData = [
  {
    name: "catQuest1",
    question1: "",
    question2: "",
    answers: [1, 2, 3, 4, 5],
  },
  {
    name: "catQuest2",
    question1: "",
    question2: "",
    answers: [1, 2, 3, 4, 5],
  },
  {
    name: "catQuest3",
    question1: "",
    question2: "",
    answers: [1, 2, 3, 4, 5],
  },
  {
    name: "catQuest4",
    question1: "",
    question2: "",
    answers: [1, 2, 3, 4, 5],
  },
];
