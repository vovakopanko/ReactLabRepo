import { Platform } from "../../../../pages/Product/constants";
import { dropDownItem } from "./type";

export const dropDownItems: dropDownItem[] = [
  { id: 0, title: "PC", link: `product/${Platform.PC}` },
  { id: 1, title: "Xbox", link: `product/${Platform.XBOX}` },
  { id: 2, title: "Playstation 5", link: `product/${Platform.PLAYSTATION5}` },
];
