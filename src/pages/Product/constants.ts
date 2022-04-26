export enum Platform {
  PC = "pc",
  XBOX = "xboxone",
  PLAYSTATION5 = "playstation5",
}

export const platformNames = {
  [Platform.PC]: "PC",
  [Platform.XBOX]: "Xbox",
  [Platform.PLAYSTATION5]: "Playstation 5",
};

export const ageRadioButtons = [
  { value: "All", title: "All ages" },
  { value: "3", title: "3+" },
  { value: "6", title: "6+" },
  { value: "14", title: "14+" },
  { value: "16", title: "16+" },
];

export const genresRadioButtons = [
  { value: "All", title: "All ages" },
  { value: "Shooter", title: "Shooter" },
  { value: "Action", title: "Action" },
  { value: "Strategy", title: "Strategy" },
  { value: "Sandbox", title: "Sandbox" },
  { value: "Simulation", title: "Simulation" },
];

export const arrayCriteria = [
  { value: "", titleName: " Choose a ..." },
  { value: "price", titleName: "Price" },
  { value: "name", titleName: "Name" },
  { value: "age", titleName: "Age" },
];

export const arrayType = [
  { value: "", titleName: " Choose a ..." },
  { value: "ascending", titleName: "Ascending" },
  { value: "decreasing", titleName: "Decreasing" },
];
