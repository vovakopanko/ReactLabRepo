import { instanceMongoDB } from "../Instance/index";
import { AppUrls } from "../types";
import { TGameCard } from "@/components/ui/organisms/GameList/types";
import { logoGamesT } from "@/components/ui/organisms/Footer/types";
import { TCategory } from "@/pages/Home/components/CategoryList/types";

export const contentAPI = {
  getGameCards() {
    try {
      return instanceMongoDB
        .get<TGameCard[]>(AppUrls.GET_GAME_CARDS)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  getLogoGames() {
    try {
      return instanceMongoDB
        .get<logoGamesT[]>(AppUrls.LOGOGAMES)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
  getCategories() {
    try {
      return instanceMongoDB
        .get<TCategory[]>(AppUrls.CATEGORIES)
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  },
};
