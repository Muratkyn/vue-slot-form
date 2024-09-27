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
