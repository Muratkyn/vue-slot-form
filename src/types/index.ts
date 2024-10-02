export type ButtonProps = {
  isButtonSubmitVisible?: boolean;
  isNextButtonVisible?: boolean;
  isPrevButtonVisible?: boolean;
  isStepperVisible?: boolean;
  isButtonEnabled?: boolean;
  onClickSubmit?: () => void;
  onClickNext?: () => void;
  onClickPrev?: () => void;
};

export type CatBasic = {
  catName: string;
  catAge: string;
  catBreed: string;
  catWeight: string;
};

export type CatFoodInformation = {
  catFoodType: number;
  catFoodChange: number;
  catFoodQuality: number;
  catFoodBrand: number;
};

export type CatHealthData = {
  catHealthTrack: number;
  catHealthHistory: number;
};

export type CatDiseaseHistory = {
  pulci: number;
  vermi: number;
  diabete: number;
  influenzaFelina: number;
  clamidiaFelina: number;
  none: number;
};

export type CatQuestData = {
  catQuest1: number;
  catQuest2: number;
  catQuest3: number;
  catQuest4: number;
};
