import { TCategory } from "../../pages/Home/components/CategoryList/types";
import { instance } from "../Instance";
import { AppUrls } from "../types";

export const categoryAPI = {
  getCategories() {
    try {
      return instance
        .get<TCategory[]>(AppUrls.CATEGORIES)
        .then((Response) => Response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
