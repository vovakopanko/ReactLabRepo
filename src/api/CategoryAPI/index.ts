import { TCategory } from "../../pages/Home/components/CategoryList/types";
import { instance } from "../Instance";

export const categoryAPI = {
  getCategoryURL() {
    return instance
      .get<TCategory[]>(`categories`)
      .then((Response) => Response.data);
  },
};
