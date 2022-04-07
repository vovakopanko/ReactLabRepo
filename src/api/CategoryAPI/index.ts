import { TGameCard } from "@/components/ui/organisms/GameList/types";
import { instanceMongoDB } from "../Instance";
import { AppUrls } from "../types";

export const categoryAPI = {
  getCategories() {
    try {
      return instanceMongoDB
        .get<TGameCard[]>(AppUrls.CATEGORIES)
        .then((Response) => Response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
