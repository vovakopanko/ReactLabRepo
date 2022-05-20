import { Platform } from "./constants";

export type Criteria = "price" | "title" | "age" | "default";

export type NavigationParam = {
  platform: Platform;
};
